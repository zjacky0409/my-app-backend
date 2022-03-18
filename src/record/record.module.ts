import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Record } from 'src/common/db/entity/record.entity';
import { Exercise } from 'src/common/db/entity/exercise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Record,Exercise])],
  controllers: [RecordController],
  providers: [RecordService],
  exports: [RecordService]
})
export class RecordModule {}
