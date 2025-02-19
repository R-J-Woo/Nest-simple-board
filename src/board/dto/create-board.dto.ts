import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, MaxLength, MinLength } from "class-validator";

export class CreateBoardDto {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: '작성자 아이디',
        required: true,
        example: '1'
    })
    userId: number;

    @MinLength(2)
    @MaxLength(20)
    @IsNotEmpty()
    @ApiProperty({
        description: '이름',
        required: true,
        example: '홍길동'
    })
    name: string;

    @IsNotEmpty()
    @ApiProperty({
        description: '내용',
        required: true,
        example: '안녕하세요'
    })
    contents: string;
}