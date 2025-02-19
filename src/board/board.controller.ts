import { ApiTags } from '@nestjs/swagger';
import { BoardService } from './board.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('board')
@ApiTags('Board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Get()
    findAll() {
        return this.boardService.findAll();
    }

    @Get(':id')
    find(
        @Param('id', ParseIntPipe) id: number
    ) {
        return `find ${id}`;
    }

    @Post()
    create(
        @Body(new ValidationPipe()) data: CreateBoardDto
    ) {
        return 'create';
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body(new ValidationPipe()) data: UpdateBoardDto
    ) {
        return `update ${id}`;
    }

    @Delete(':id')
    remove(
        @Param('id', ParseIntPipe) id: number
    ) {
        return `remove ${id}`;
    }
}
