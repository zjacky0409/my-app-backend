import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn
} from 'typeorm';
import { Exercise } from './exercise.entity';

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  name: string;

  @Column()
  set: string;

  @Column()
  weight: string;

  @Column()
  rest_time: string;

  @Column()
  rpe: string;

  @Column() 
  rir: string;

  @Column()
  remark: string;

  @ManyToOne(() => Exercise, exercise => exercise.record, { nullable: false })
  exercise: Exercise;
}
