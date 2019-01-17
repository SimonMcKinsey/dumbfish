import { IPiece, PieceColor, PiecePoints, CellLocation } from './IPiece';

class Rook implements IPiece {
    Color: PieceColor;
    Points: PiecePoints;

    constructor(color: PieceColor,points: PiecePoints = PiecePoints.Rook) {
        this.Color = color;
        this.Points = points;
    }

    Move (source: CellLocation, destination: CellLocation): boolean {
        return true;
    }
}