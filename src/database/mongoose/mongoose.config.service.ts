import { Injectable } from '@nestjs/common';
import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private configService: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    const MONGO_DB_USERNAME = this.configService.get('MONGO_DB_USERNAME');
    const MONGO_DB_PASSWORD = this.configService.get('MONGO_DB_PASSWORD');
    const MONGO_DB_CLUSTER = this.configService.get('MONGO_DB_CLUSTER');
    const MONGO_DB_CONNECTION_URI = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_CLUSTER}/?retryWrites=true&w=majority`;
    return {
      uri: MONGO_DB_CONNECTION_URI,
    };
  }
}
