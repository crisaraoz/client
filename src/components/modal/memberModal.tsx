import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { ModalMember } from 'interfaces/home';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '60%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const MemberModal: React.FC<ModalMember> = ({ open, handleClose, memberData }) => {
    const hoy = new Date();
    const fechaDePagoMas30 = memberData && memberData.ultimaFechaDePago
                             ? new Date(memberData.ultimaFechaDePago.getTime() + 30 * 24 * 60 * 60 * 1000)
                             : null;
  
    // Calcula los días restantes para el próximo vencimiento
    const diasRestantes = memberData && memberData.proximoVencimiento
                          ? Math.ceil((memberData.proximoVencimiento.getTime() - hoy.getTime()) / (1000 * 3600 * 24))
                          : 0;
  
    // Determina si el socio está al día
    const alDia = fechaDePagoMas30 && memberData && memberData.proximoVencimiento
                  ? fechaDePagoMas30 <= memberData.proximoVencimiento && diasRestantes >= 0
                  : false;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="member-modal-title"
      aria-describedby="member-modal-description"
    >
      <Box sx={style}>
        <Typography id="member-modal-title" variant="h6" component="h2">
          {memberData?.firstName} {memberData?.lastName}
        </Typography>
        <Typography>
          Última Fecha de Pago: {memberData?.ultimaFechaDePago instanceof Date ? memberData.ultimaFechaDePago.toLocaleDateString() : 'N/A'}<br />
          Hoy es: {hoy.toLocaleDateString()}<br />
          Cuota al Día: {alDia ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" /> } <br />
          <br />
          Próximo Vencimiento: {memberData?.proximoVencimiento instanceof Date ? memberData.proximoVencimiento.toLocaleDateString() : 'N/A'}<br />
          Te quedan {diasRestantes} días de Cuota.
        </Typography>
      </Box>
    </Modal>
  );
};

export default MemberModal;
