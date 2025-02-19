import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Board {
    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @ApiProperty({description: '사용자아이디'})
    @Column()
    userId: number;

    @ApiProperty({description: '제목'})
    @Column()
    name: string;
    
    @ApiProperty({description: '내용'})
    @Column()
    contents: string;

    @ApiProperty({description: '생성일'})
    @CreateDateColumn()
    createdAt: Date;
    
    @ApiProperty({description: '수정일'})
    @UpdateDateColumn()
    updatedAt: Date;

    @ApiProperty({description: '유저정보'})
    @ManyToOne(() => User)
    user: User;
}