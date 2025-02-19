import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {

    findAll() {
        return 'findAll';
    }
 
    create(data: CreateBoardDto) {
        return 'create';
    }

    update(id: number, data: UpdateBoardDto) {
        return 'update';
    }
}
