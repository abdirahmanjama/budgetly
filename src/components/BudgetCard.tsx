import React from "react";
import { Card } from "react-bootstrap";

interface Props {
  name: string;
  amount: number;
  max: number;
}

export default function BudgetCard({ name, amount, max }: Props) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <div>{name}</div>
            <div>{amount}</div>
            <div>{max}</div>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
