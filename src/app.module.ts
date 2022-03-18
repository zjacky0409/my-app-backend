import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciseModule } from './exercise/exercise.module';
import { RecordModule } from './record/record.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercise } from './common/db/entity/exercise.entity';
import { Record } from './common/db/entity/record.entity';



@Module({
  imports: [ExerciseModule, RecordModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
    }), TypeOrmModule.forFeature([Exercise, Record]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
