import React, { useRef } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { UNCATEGORISED_BUDGET_ID, useBudgets } from "../contexts/BudgetContext";

// interface Props {
//   show: boolean;
//   handleClose: () => void;
// }

export default function AddBudgetModal({ show, handleClose, defaultBudgetId }) {
  const amountRef = useRef();
  const descriptionRef = useRef();

  const budgetIdRef = useRef();
  const { addExpense, budgets } = useBudgets();

  function handleSubmit(e) {
    console.log("hello");
    e.preventDefault();
    {
      addExpense({
        descriptionRef: descriptionRef.current.value,
        amount: parseFloat(amountRef.current.value),
        budgetId: budgetIdRef.current.value,
      });
    }
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control ref={descriptionRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              ref={amountRef}
              type="number"
              required
              min={0}
              step={0.01}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="budgetId">
            <Form.Label>Budget</Form.Label>
            <Form.Select defaultValue={defaultBudgetId} ref={budgetIdRef}>
              <option id={UNCATEGORISED_BUDGET_ID}>Uncategorised</option>
              {budgets.map((budget) => (
                <option key={budget.id} value={budget.id}>
                  {budget.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button type="submit">Add</Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}