import React, { useState } from "react";
import { Stack, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import { useBudgets } from "./contexts/BudgetContext";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState<boolean>(false);
  const { budgets, expenses, getBudgetExpenses } = useBudgets();
  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap={2} className="mb-4">
          <h1 className="me-auto mt-2">Budgets</h1>
          <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
            Add Budget
          </Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {budgets.map((budget: any) => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (total: any, expense: any) => total + expense.amount,
              0
            );
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
              ></BudgetCard>
            );
          })}
        </div>
      </Container>
      <AddBudgetModal
        show={true}
        handleClose={() => {
          console.log("lol");
        }}
      />
    </>
  );
}

export default App;
