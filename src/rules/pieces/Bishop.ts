import { IPiece, PieceColor, PiecePoints, CellLocation } from './IPiece';

class Bishop implements IPiece {
    Color: PieceColor;
    Points: PiecePoints;

    constructor(color: PieceColor,points: PiecePoints = PiecePoints.Bishop) {
        this.Color = color;
        this.Points = points;
    }

    Move (source: CellLocation, destination: CellLocation): boolean {
        return true;
    }
}