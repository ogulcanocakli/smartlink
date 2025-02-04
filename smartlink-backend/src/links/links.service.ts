import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import nanoid from 'nanoid';

@Injectable()
export class LinksService {
  constructor(private prisma: PrismaService) {}

  async shortenUrl(originalUrl: string, userId: string) {
    try {
      const shortUrl = nanoid(6); // 6 karakter uzunluğunda kısa link oluştur
      const link = await this.prisma.link.create({
        data: {
          originalUrl,
          shortUrl,
          userId,
        },
      });

      await this.prisma.log.create({
        data: {
          action: 'shorten_success',
          email: userId,
          request: { originalUrl, userId },
          response: { shortUrl: link.shortUrl, originalUrl: link.originalUrl },
        },
      });

      return { shortUrl: link.shortUrl, originalUrl: link.originalUrl };
    } catch (error) {
      await this.prisma.log.create({
        data: {
          action: 'shorten_error',
          email: userId,
          request: { originalUrl, userId },
          response: {
            statusCode: 500,
            message: 'Bilinmeyen bir sunucu hatası oluştu.',
          },
        },
      });

      return {
        statusCode: 500,
        message: 'Bilinmeyen bir sunucu hatası oluştu.',
        error: 'Internal Server Error',
        details: error.message,
      };
    }
  }

  async getOriginalUrl(shortUrl: string) {
    try {
      const link = await this.prisma.link.findUnique({ where: { shortUrl } });

      if (!link) {
        await this.prisma.log.create({
          data: {
            action: 'redirect_fail',
            email: 'unknown',
            request: { shortUrl },
            response: {
              statusCode: 404,
              message: 'Bu kısaltılmış URL bulunamadı.',
            },
          },
        });

        throw new NotFoundException('Bu kısaltılmış URL bulunamadı.');
      }

      await this.prisma.log.create({
        data: {
          action: 'redirect_success',
          email: link.userId,
          request: { shortUrl },
          response: { originalUrl: link.originalUrl },
        },
      });

      return { originalUrl: link.originalUrl };
    } catch (error) {
      return {
        statusCode: 500,
        message: 'Bilinmeyen bir sunucu hatası oluştu.',
        error: 'Internal Server Error',
        details: error.message,
      };
    }
  }
}
