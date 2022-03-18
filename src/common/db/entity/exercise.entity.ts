import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  PrimaryColumn
} from 'typeorm';
import { Record } from './record.entity';

// ref: https://typeorm.io/#/many-to-one-one-to-many-relations
// Employee 可以拥有多张 task，但每個 task 仅由一位 employee 拥有
@Entity()
export class Exercise {

  @PrimaryColumn()
  name: string;

  @Column()
  yt_link: string;

  @Column()
  details: string;

  @OneToMany(() => Record, (record) => record.exercise)
  record: Record[];
}
