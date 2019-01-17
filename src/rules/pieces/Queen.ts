import { IPiece, PieceColor, PiecePoints, CellLocation } from './IPiece';

class Queen implements IPiece {
    Color: PieceColor;
    Points: PiecePoints;

    constructor(color: PieceColor,points: PiecePoints = PiecePoints.Queen) {
        this.Color = color;
        this.Points = points;
    }

    Move (source: CellLocation, destination: CellLocation): boolean {
        return true;
    }
}