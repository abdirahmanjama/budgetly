import React from "react";
import { Stack, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";

function App() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap={2} className="mb-4">
        <h1 className="me-auto mt-2">Budgets</h1>
        <Button variant="primary">Add Budget</Button>
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
        <BudgetCard
          grey={true}
          name="Entertainment"
          amount={400}
          max={300}
        ></BudgetCard>
      </div>
    </Container>
  );
}

export default App;
