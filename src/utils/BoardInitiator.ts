import { PiecePoints } from '../rules/pieces/IPiece';

class BoardInitiator {
    whiteMapper: Map<number, string> = new Map<number, string>();
    blackMapper: Map<number, string> = new Map<number, string>();
    extension: string = '.svg';

    constructor() {
        this.whiteMapper.set(PiecePoints.Pawn, `white_pawn${this.extension}`);
        this.whiteMapper.set(PiecePoints.Bishop, `white_bishop${this.extension}`);
        this.whiteMapper.set(PiecePoints.Knight, `white_knight${this.extension}`);
        this.whiteMapper.set(PiecePoints.Rook, `white_rook${this.extension}`);
        this.whiteMapper.set(PiecePoints.Queen, `white_queen${this.extension}`);
        this.whiteMapper.set(PiecePoints.King, `white_king${this.extension}`);

        this.blackMapper.set(PiecePoints.Pawn, `black_pawn${this.extension}`);
        this.blackMapper.set(PiecePoints.Bishop, `black_bishop${this.extension}`);
        this.blackMapper.set(PiecePoints.Knight, `black_knight${this.extension}`);
        this.blackMapper.set(PiecePoints.Rook, `black_rook${this.extension}`);
        this.blackMapper.set(PiecePoints.Queen, `black_queen${this.extension}`);
        this.blackMapper.set(PiecePoints.King, `black_king${this.extension}`);
    }

    init(): number[][] {
        let boardCellsDefinition = [];
        // defines the set & empty cells according to turn.
        const PP = PiecePoints;
        boardCellsDefinition = [
            [PP.Rook, PP.Knight, PP.Bishop, PP.Queen, PP.King, PP.Bishop, PP.Knight, PP.Rook],
            [PP.Pawn, PP.Pawn, PP.Pawn, PP.Pawn, PP.Pawn, PP.Pawn, PP.Pawn, PP.Pawn],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [PP.Pawn, PP.Pawn, PP.Pawn, PP.Pawn, PP.Pawn, PP.Pawn, PP.Pawn, PP.Pawn],
            [PP.Rook, PP.Knight, PP.Bishop, PP.Queen, PP.King, PP.Bishop, PP.Knight, PP.Rook],
        ];

        return boardCellsDefinition;
    }

    boardBackgroundColors(): number[][] {
        let boardCellsBackgroundDefinition = [];
        boardCellsBackgroundDefinition = [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
        ];

        return boardCellsBackgroundDefinition;
    }

    pieceConverter() {

    }

}

const boardInitiator = new BoardInitiator();

export default boardInitiator;