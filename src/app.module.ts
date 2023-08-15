import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppServiceMock } from './app.service.stub';
import { DEFAULT_NAME } from './app.constants';
import { CatsModule } from './cats/cats.module';

/**
 * useValue: expects exact object value of a class new AppServiceMock();
 * useClass: expects exact class AppServiceMock
 */
@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AppServiceMock,
    },
    {
      provide: 'DEFAULT_NAME',
      useValue: DEFAULT_NAME,
    },
  ],
})
export class AppModule {}
