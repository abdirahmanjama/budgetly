import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { currencyFormatter } from "../utils/utils";

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
          <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
            <div className="me-2">{name}</div>
            <div className="d-flex align-items-baseline">
              {currencyFormatter.format(amount)} /{" "}
              <span className="text-muted fs-6 ms-1">
                {currencyFormatter.format(max)}
              </span>{" "}
            </div>
          </Card.Title>
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
          />
        </Card.Body>
      </Card>
    </>
  );
}

const getProgressBarVariant = (amount: number, max: number) => {
  const ratio = amount / max;
  if (ratio < 0.5) return "primary";
  if (ratio < 0.75) return "warning";
  if (ratio > 0.75) return "danger";
};
