import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsBoolean, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

@Entity()
export class Note extends BaseEntity {
  @PrimaryGeneratedColumn()
  dtid: number;

  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  dtname: string;

  @Column()
  dttemperature: number;

  @Column()
  @IsBoolean()
  dttemperatureAlert: boolean;
}
