import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { DataType } from "interfaces/home";

export default function EditIconButton({
  row,
  onEditClick,
}: {
  row: DataType;
  onEditClick: (row: DataType) => void;
}) {
  return (
    <IconButton onClick={() => onEditClick(row)}>
      <EditIcon />
    </IconButton>
  );
}
