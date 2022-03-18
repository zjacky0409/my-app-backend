import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exercise } from 'src/common/db/entity/exercise.entity';
import { Record } from 'src/common/db/entity/record.entity';
import { Repository } from 'typeorm';
import { CreateRecordDto } from './dto/create-record.dto';

@Injectable()
export class RecordService {
  
  constructor(
    @InjectRepository(Record) private recordRepo: Repository<Record>,
    @InjectRepository(Exercise) private exerciseRepo: Repository<Exercise>,
  ) { }

  async create(createRecordDto: CreateRecordDto) {
    let exercise;
    let record = new Record();
    try {
      exercise = await this.exerciseRepo.find({ where: { "name": createRecordDto.name } });
    } catch (e) {
      console.log(e)
      return { 'Success': false };
    }

    if (exercise.length > 0) {
      try {
        record.date = createRecordDto.date
        record.name = createRecordDto.name
        record.set = createRecordDto.set
        record.remark = createRecordDto.remark
        record.rir = createRecordDto.rir
        record.rpe = createRecordDto.rpe
        record.rest_time = createRecordDto.rest_time
        record.weight = createRecordDto.weight
        record.exercise = exercise[0]
        this.recordRepo.create(record);
        await this.recordRepo.save(record);
        return { 'Success': true };
      } catch (e) {
        console.log(e)
        return { 'Success': false };
      }
    } else {
      return { 'Success': false };
    }
  }

  async findAll(date: string) {
    return await this.recordRepo.find({ where: date });;
  }

  async getSingleRecord(obect: any) {
    const result = await this.recordRepo.find({ where: obect })
    return result[0];
  }

  async deleteRecord(object: any) {
    return await this.recordRepo.delete({ "name": object.name, "date": object.date });;;
  }

}
