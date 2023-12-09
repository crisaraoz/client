export interface PieChartProps {
    title: string,
    value: number,
    series: Array<number>
    colors: Array<string>
}

export interface DataType {
    id: number;
    dni: number;
    lastName: string;
    firstName: string;
    email?: string;
    number: number;
    sede?: string;
    active: string | null;
    ultimaFechaDePago: Date;
    proximoVencimiento: Date;
}

export interface ModalMember {
    open: boolean;
    handleClose: () => void;
    memberData: DataType | null;
}