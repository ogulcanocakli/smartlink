import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string) {
    try {
      const existingUser = await this.prisma.user.findUnique({
        where: { email },
      });
      if (existingUser) {
        await this.prisma.logAction(
          'register_fail',
          email,
          { email },
          {
            statusCode: 409,
            message: 'Bu e-posta adresi zaten kayıtlı.',
          },
        );

        return {
          statusCode: 409,
          message: 'Bu e-posta adresi zaten kayıtlı.',
          error: 'Conflict',
        };
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await this.prisma.user.create({
        data: { email, password: hashedPassword },
      });

      const response = {
        message: 'Kullanıcı başarıyla kaydedildi',
        userId: user.id,
      };

      await this.prisma.logAction(
        'register_success',
        email,
        { email },
        response,
      );

      return response;
    } catch (error) {
      await this.prisma.logAction(
        'register_error',
        email,
        { email },
        {
          statusCode: 500,
          message: 'Sunucuda beklenmeyen bir hata oluştu.',
        },
      );

      return {
        statusCode: 500,
        message: 'Sunucuda beklenmeyen bir hata oluştu.',
        error: 'Internal Server Error',
      };
    }
  }

  async login(email: string, password: string) {
    try {
      const user = await this.prisma.user.findUnique({ where: { email } });
      if (!user) {
        await this.prisma.logAction(
          'login_fail',
          email,
          { email },
          {
            statusCode: 404,
            message: 'Bu e-posta ile kayıtlı kullanıcı bulunamadı.',
          },
        );

        return {
          statusCode: 404,
          message: 'Bu e-posta ile kayıtlı kullanıcı bulunamadı.',
          error: 'Not Found',
        };
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        await this.prisma.logAction(
          'login_fail',
          email,
          { email, password },
          {
            statusCode: 401,
            message: 'Geçersiz şifre.',
          },
        );

        return {
          statusCode: 401,
          message: 'Geçersiz şifre.',
          error: 'Unauthorized',
        };
      }

      const token = this.jwtService.sign({ id: user.id, email: user.email });
      const response = { access_token: token };
      await this.prisma.logAction('login_success', email, { email }, response);

      return response;
    } catch (error) {
      await this.prisma.logAction(
        'login_error',
        email,
        { email },
        {
          statusCode: 500,
          message: 'Sunucuda beklenmeyen bir hata oluştu.',
        },
      );

      return {
        statusCode: 500,
        message: 'Sunucuda beklenmeyen bir hata oluştu.',
        error: 'Internal Server Error',
      };
    }
  }
}
