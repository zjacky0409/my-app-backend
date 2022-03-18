import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Controller('tips')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Post('/addTips')
  create(@Body() createExerciseDto: CreateExerciseDto) {
    return this.exerciseService.create(createExerciseDto);
  }

  @Post('/getTipsList')
  findAll() {
    return this.exerciseService.findAll();
  }

  @Post('/delete')
  delete(@Body() name: string) {
    return this.exerciseService.remove(name);
  }
}
