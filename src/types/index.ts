interface RentPayment {
  id: number;
  dueDate: string;
  expenses: number;
  income: number;
  status: string;
}

export type { RentPayment };
