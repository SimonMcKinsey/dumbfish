export interface IPiece {
    Color: PieceColor;
    Points: PiecePoints;
    Move(source: CellLocation, destination: CellLocation): boolean;
}

export enum PieceColor {
    White = 1,
    Black = 2,
}

export enum PiecePoints {
    Pawn = 1,
    Knight = 3,
    Bishop = 3,
    Rook = 5,
    Queen = 8,
    King = 9999,
}

export interface CellLocation {
    point1: number;
    point2: number;
}