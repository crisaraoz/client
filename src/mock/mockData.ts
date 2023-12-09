import { GridColDef } from "@mui/x-data-grid";
import { DataType } from "interfaces/home";
export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID Socio', width: 90 },
    { field: 'dni', headerName: 'DNI', width: 90 },
    {
      field: 'lastName',
      headerName: 'Apellido',
      width: 150,
      editable: true,
    },
    {
      field: 'firstName',
      headerName: 'Nombre',
      width: 150,
      editable: true,
    },
    {
      field: 'number',
      headerName: 'Telefono',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'sede',
      headerName: 'Sede',
      width: 90,
      editable: true,
    },
    {
      field: 'active',
      headerName: 'Activo',
      width: 90,
      editable: true,
    },
  ];
  
export const rows: DataType[] = [
    { id: 1, dni: 20839754, lastName: 'Snow', firstName: 'Jon', number: 1123441102, email: 'jonSnow@gmail.com', sede: 'Almagro', active: 'X', ultimaFechaDePago: new Date('2023-11-27T12:00:00'), proximoVencimiento: new Date('2023-12-27T12:00:00')},
    { id: 2, dni: 38758623, lastName: 'Lannister', firstName: 'Cersei', number: 1123441102, sede: 'Almagro', active: 'X', ultimaFechaDePago: new Date('2023-12-01T12:00:00'), proximoVencimiento: new Date('2024-01-01T12:00:00')},
    { id: 3, dni: 10149254, lastName: 'Lannister', firstName: 'Jaime', number: 1123441102, sede: 'Caballito', active: null, ultimaFechaDePago: new Date('2023-11-20T12:00:00'), proximoVencimiento: new Date('2023-12-20T12:00:00')},
    { id: 4, dni: 24859661, lastName: 'Stark', firstName: 'Arya', number: 1123441102, sede: 'Caballito', active: 'X', ultimaFechaDePago: new Date('2023-11-01T12:00:00'), proximoVencimiento: new Date('2023-12-01T12:00:00') },
    { id: 5, dni: 27134722, lastName: 'Targaryen', firstName: 'Daenerys', number: 1123441102, sede: 'Caballito', active: 'X',ultimaFechaDePago: new Date('2023-03-15T12:00:00'), proximoVencimiento: new Date('2023-04-15T12:00:00')},
    { id: 6, dni: 30132250, lastName: 'Melisandre', firstName: 'Juan', number: 1123441102, sede: 'Almagro', active: null, ultimaFechaDePago: new Date('2023-03-15T12:00:00'), proximoVencimiento: new Date('2023-04-15T12:00:00') },
    { id: 7, dni: 40039112, lastName: 'Clifford', firstName: 'Ferrara', number: 1123441102, sede: 'Almagro', active: null, ultimaFechaDePago: new Date('2023-03-15T12:00:00'), proximoVencimiento: new Date('2023-04-15T12:00:00') },
    { id: 8, dni: 32110159, lastName: 'Frances', firstName: 'Rossini', number: 1123441102, sede: 'Caballito', active: 'X', ultimaFechaDePago: new Date('2023-03-15T12:00:00'), proximoVencimiento: new Date('2023-04-15T12:00:00') },
    { id: 9, dni: 33210114, lastName: 'Roxie', firstName: 'Harvey', number: 1123441102, sede: 'Almagro', active: 'X', ultimaFechaDePago: new Date('2023-03-15T12:00:00'), proximoVencimiento: new Date('2023-04-15T12:00:00') },
    { id: 10, dni: 20839754, lastName: 'Snow', firstName: 'Jon', number: 1123441102, sede: 'Almagro', active: 'X', ultimaFechaDePago: new Date('2023-03-15T12:00:00'), proximoVencimiento: new Date('2023-04-15T12:00:00') },
    { id: 11, dni: 20839754, lastName: 'Snow', firstName: 'Jon', number: 1123441102, sede: 'Almagro', active: 'X', ultimaFechaDePago: new Date('2023-03-15T12:00:00'), proximoVencimiento: new Date('2023-04-15T12:00:00')},
    { id: 12, dni: 38758623, lastName: 'Lannister', firstName: 'Cersei', number: 1123441102, sede: 'Almagro', active: 'X', ultimaFechaDePago: new Date('2023-03-15T12:00:00'), proximoVencimiento: new Date('2023-04-15T12:00:00')},
    { id: 13, dni: 10149254, lastName: 'Lannister', firstName: 'Jaime', number: 1123441102, sede: 'Caballito', active: null, ultimaFechaDePago: new Date('2023-03-15T12:00:00'), proximoVencimiento: new Date('2023-04-15T12:00:00')},
    { id: 14, dni: 24859611, lastName: 'Stark', firstName: 'Arya', number: 1123441102, sede: 'Caballito', active: 'X', ultimaFechaDePago: new Date('2023-03-15T12:00:00'), proximoVencimiento: new Date('2023-04-15T12:00:00') },
    { id: 15, dni: 27134722, lastName: 'Targaryen', firstName: 'Daenerys', number: 1123441102, sede: 'Caballito', active: 'X', ultimaFechaDePago: new Date('2023-03-15T12:00:00'), proximoVencimiento: new Date('2023-04-15T12:00:00') },
    { id: 16, dni: 27134722, lastName: 'Melisandre', firstName: 'Charles', number: 1123441102, sede: 'Almagro', active: null, ultimaFechaDePago: new Date('2023-03-15T12:00:00'), proximoVencimiento: new Date('2023-04-15T12:00:00') },
    { id: 17, dni: 40039112, lastName: 'Clifford', firstName: 'Ferrara', number: 1123441102, sede: 'Almagro', active: null, ultimaFechaDePago: new Date('2023-03-15T12:00:00'), proximoVencimiento: new Date('2023-04-15T12:00:00') },
    { id: 18, dni: 32110159, lastName: 'Frances', firstName: 'Rossini', number: 1123441102, sede: 'Caballito', active: 'X', ultimaFechaDePago: new Date('2023-03-15T12:00:00'), proximoVencimiento: new Date('2023-04-15T12:00:00')},
    { id: 19, dni: 33210114, lastName: 'Roxie', firstName: 'Harvey', number: 1123441102, sede: 'Almagro', active: 'X', ultimaFechaDePago: new Date('2023-03-15T12:00:00'), proximoVencimiento: new Date('2023-04-15T12:00:00')},
  ];