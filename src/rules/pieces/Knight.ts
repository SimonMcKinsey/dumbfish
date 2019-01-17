import { IPiece, PieceColor, PiecePoints, CellLocation } from './IPiece';

class Knight implements IPiece {
    Color: PieceColor;
    Points: PiecePoints;

    constructor(color: PieceColor,points: PiecePoints = PiecePoints.Knight) {
        this.Color = color;
        this.Points = points;
    }

    Move (source: CellLocation, destination: CellLocation): boolean {
        return true;
    }
}