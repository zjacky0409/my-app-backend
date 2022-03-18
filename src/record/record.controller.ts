import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordService } from './record.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';

@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Post('addRecord')
  create(@Body() createRecordDto: CreateRecordDto) {
    return this.recordService.create(createRecordDto);
  }

  @Post('getRecordList')
  findAll(@Body() date: string) {
    return this.recordService.findAll(date);
  }

  @Post('getSingleRecord')
  getSingleRecord(@Body() date: any) {
    return this.recordService.getSingleRecord(date);
  }

  @Post('deleteRecord')
  deleteRecord(@Body() object: any) {
    this.recordService.deleteRecord(object);
    return { 'Success': true };
  }
}
