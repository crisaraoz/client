import React, { useEffect, useState } from "react";
import { DataType, ModalMember } from "interfaces/home";
import { Box, Button, Modal, TextField } from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import styles from "./styles.module.css";

function DetailComponent({ open, handleClose, memberData }: ModalMember) {
  const [editableData, setEditableData] = useState<DataType | null>(null);

  useEffect(() => {
    setEditableData(memberData);
  }, [memberData]);

  if (!memberData) {
    return null;
  }

  if (!editableData) {
    return null;
  }
  // Manejador para actualizar los datos editables
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableData({ ...editableData, [e.target.name]: e.target.value });
  };

  //lógica para el botón Actualizar
  const handleUpdate = () => {
    console.log("Actualizar", editableData);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="detalle-usuario-modal"
      aria-describedby="modal-para-ver-detalle-de-usuario"
    >
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "white",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 600,
          boxShadow: 24,
          p: 4,
        }}
      >
        <div className={styles.textFieldGrouped}>
          <TextField
            label="ID Socio"
            variant="outlined"
            fullWidth
            margin="normal"
            name="id"
            value={editableData.id}
            onChange={handleChange}
            disabled // ID no debería ser editable
            style={{ width: "48%" }}
          />
          <TextField
            label="DNI"
            variant="outlined"
            fullWidth
            margin="normal"
            name="id"
            value={editableData.dni}
            onChange={handleChange}
            style={{ width: "48%" }}
          />
        </div>
        <div className={styles.textFieldGrouped}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
            name="id"
            value={editableData.firstName}
            onChange={handleChange}
            style={{ width: "48%" }}
          />
          <TextField
            label="Apellido"
            variant="outlined"
            fullWidth
            margin="normal"
            name="id"
            value={editableData.lastName}
            onChange={handleChange}
            style={{ width: "48%" }}
          />
        </div>
        <div className={styles.textFieldGrouped}>
          <TextField
            label="Telefono"
            variant="outlined"
            fullWidth
            margin="normal"
            name="id"
            value={editableData.number}
            onChange={handleChange}
            style={{ width: "48%" }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="id"
            value={editableData.email}
            onChange={handleChange}
            style={{ width: "48%" }}
          />
        </div>
        <div className={styles.textFieldGrouped}>
          <TextField
            label="Ultimo Pago"
            variant="outlined"
            fullWidth
            margin="normal"
            name="id"
            value={editableData.ultimaFechaDePago}
            onChange={handleChange}
            style={{ width: "48%" }}
            disabled
          />
          <TextField
            label="Proximo Vencimiento"
            variant="outlined"
            fullWidth
            margin="normal"
            name="id"
            value={editableData.proximoVencimiento}
            onChange={handleChange}
            style={{ width: "48%" }}
            disabled
          />
        </div>
        <div className={styles.textFieldGrouped}>
          <TextField
            label="Sede"
            variant="outlined"
            fullWidth
            margin="normal"
            name="id"
            value={editableData.sede}
            onChange={handleChange}
            style={{ width: "48%" }}
            disabled
          />
          <CheckBox aria-label="active"></CheckBox>
        </div>
        <div style={{ justifyContent: "flex-end" }}>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Actualizar
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default DetailComponent;
