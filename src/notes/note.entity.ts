import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { Data } from './data.entity';

@Entity()
export class Note extends BaseEntity {


  @PrimaryColumn()
  id: string;

  @Column(() => Data)
  data: Data;
}