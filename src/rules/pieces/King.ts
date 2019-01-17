import { IPiece, PieceColor, PiecePoints, CellLocation } from './IPiece';

class King implements IPiece {
    Color: PieceColor;
    Points: PiecePoints;

    constructor(color: PieceColor,points: PiecePoints = PiecePoints.King) {
        this.Color = color;
        this.Points = points;
    }

    Move (source: CellLocation, destination: CellLocation): boolean {
        return true;
    }
}