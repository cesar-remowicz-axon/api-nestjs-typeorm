import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'FUNCIONARIOS' })
export class Employee {
  @PrimaryColumn({ name: 'CRACHA' })
  badge: string;

  @Column({ name: 'FUNCIONARIO' })
  employeeName: string;
}
