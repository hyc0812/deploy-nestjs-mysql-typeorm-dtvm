import { BaseEntity, Column } from "typeorm";


export class Data extends BaseEntity{

  @Column()
  number: number;

  @Column()
  infoType: string;
}