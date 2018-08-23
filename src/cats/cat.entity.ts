/*
 * @Author: antbrother 
 * @Date: 2018-08-23 15:12:55 
 * @Last Modified by: antbrother
 * @Last Modified time: 2018-08-23 15:13:59
 */
import { Table, Column, Model } from 'sequelize-typescript';
/**
 * cat 实体
 */
@Table
export class Cat extends Model<Cat> {
  @Column name: string;
  @Column age: number;
  @Column breed: string;
}
