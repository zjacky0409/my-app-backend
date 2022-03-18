import { Exercise } from "src/common/db/entity/exercise.entity";

export class CreateRecordDto {
    id: number;
    date: string;
    name: string;
    set: string;
    weight: string;
    rest_time: string;
    rpe: string;
    rir: string;
    remark: string;
    exercise: Exercise;
}
