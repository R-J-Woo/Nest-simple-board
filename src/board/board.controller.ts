import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('board')
export class BoardController {

    @Get()
    findAll() {
        return 'findAll';
    }

    @Get(':id')
    find(
        @Param('id') id: number
    ) {
        return `find ${id}`;
    }

    @Post()
    create(
        @Body() data
    ) {
        return 'create';
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() data
    ) {
        return `update ${id}`;
    }

    @Delete(':id')
    remove(
        @Param('id') id: number
    ) {
        return `remove ${id}`;
    }
}
