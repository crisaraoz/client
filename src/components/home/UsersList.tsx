import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "../../mock/mockData";
import DetailComponent from "./DetailComponent";
import { DataType } from "interfaces/home";
import EditIconButton from "components/editIcon/editIconButton";

export default function UsersList() {
  const [selectedRow, setSelectedRow] = React.useState<DataType | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleEditClick = (row: DataType) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setSelectedRow(null);
    setIsModalOpen(false);
  };
  // Agrega una nueva columna para editar
  const editColumn = {
    field: "edit",
    headerName: "Editar",
    renderCell: (params: { row: DataType }) => (
      <EditIconButton row={params.row} onEditClick={handleEditClick} />
    ),
    sortable: false,
    width: 100,
  };
  const combinedColumns = [...columns, editColumn];

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={combinedColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      {selectedRow && (
        <DetailComponent
          memberData={selectedRow}
          open={isModalOpen}
          handleClose={handleCloseDetails}
        />
      )}
    </Box>
  );
}
