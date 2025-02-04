import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
  constructor(private linksService: LinksService) {}

  @Post('shorten')
  async shortenUrl(@Body('originalUrl') originalUrl: string, @Body('userId') userId: string) {
    return this.linksService.shortenUrl(originalUrl, userId);
  }

  @Get(':shortUrl')
  async getOriginalUrl(@Param('shortUrl') shortUrl: string) {
    return this.linksService.getOriginalUrl(shortUrl);
  }
}
