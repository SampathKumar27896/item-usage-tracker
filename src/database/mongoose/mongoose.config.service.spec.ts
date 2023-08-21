import { Test, TestingModule } from '@nestjs/testing';
import { MongooseConfigService } from './mongoose.config.service';
import { ConfigService } from '@nestjs/config';

describe('MongooseConfigServiceTest', () => {
  let mongooseConfigService: MongooseConfigService;
  let configService: ConfigService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongooseConfigService, ConfigService],
    }).compile();
    mongooseConfigService = module.get<MongooseConfigService>(
      MongooseConfigService,
    );
    configService = module.get<ConfigService>(ConfigService);
  });

  it('MongooseConfigServiceTest-001 Expect mongooseConfigService to provide Mongodb connection URI', async () => {
    jest.spyOn(configService, 'get').mockImplementation((key: string) => {
      return key;
    });
    const expectedURIResult =
      'mongodb+srv://MONGO_DB_USERNAME:MONGO_DB_PASSWORD@MONGO_DB_CLUSTER/?retryWrites=true&w=majority';
    const { uri: actualURIResult } =
      await mongooseConfigService.createMongooseOptions();
    expect(configService.get).toHaveBeenCalledWith('MONGO_DB_USERNAME');
    expect(configService.get).toHaveBeenCalledWith('MONGO_DB_PASSWORD');
    expect(configService.get).toHaveBeenCalledWith('MONGO_DB_CLUSTER');
    expect(actualURIResult).toBe(expectedURIResult);
  });
});
