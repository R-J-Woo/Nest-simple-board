import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";

export class UpdateBoardDto {

    @MinLength(2)
    @MaxLength(20)
    @IsOptional()
    @ApiProperty({
        description: '이름',
        required: true,
        example: '홍길동'
    })
    name?: string;
    
    @IsOptional()
    @ApiProperty({
        description: '내용',
        required: true,
        example: '안녕하세요'
    })
    contents?: string;
}