import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exercise } from 'src/common/db/entity/exercise.entity';
import { Repository } from 'typeorm';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(Exercise) private exerciseRepo: Repository<Exercise>,
  ) { }

  async create(createExerciseDto: CreateExerciseDto) {
    const exercise = this.exerciseRepo.create(createExerciseDto);
    try {
      await this.exerciseRepo.save(exercise);
      return { 'Success': true };
    } catch {
      return { 'Success': false };
    }
  }

  async findAll() {
    return await this.exerciseRepo.find({
      relations: ['record'], // join table and the talbe name is same as the entity.class
    });
  }

  async remove(name: string) {
    await this.exerciseRepo.delete({ name: name });;
    return { 'Success': false }
  }
}
