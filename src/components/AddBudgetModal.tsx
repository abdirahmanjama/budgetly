import React from "react";
import { Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  handleClose: () => void;
}

function AddBudgetModal({ show, handleClose }: Props) {
  return <Modal show={show} onHide={handleClose}></Modal>;
}

export default AddBudgetModal;
