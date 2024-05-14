import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesModule } from './cities/cities.module';
import { City } from './cities/entities/city.entity';
import { CitiesController } from './cities/cities.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password:'postgres',
      database:'citydb',
      entities:[City],
      synchronize:true,
    }),
    CitiesModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
