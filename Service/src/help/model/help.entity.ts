import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('HELP')
export class Help {

    @PrimaryColumn()
    IDHELP: number;

    @Column("char", { length: 8 })
    DNIPER: string;

    @Column("varchar2", {length: 500 })
    CONSULTA: string;

}