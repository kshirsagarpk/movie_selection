export interface RowSeat {
    rows: Array<Row>;
}

export interface Row {
    row: string;
    totSeats: number;
    isSelected: boolean;
}