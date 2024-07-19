const formatCurrency = (value: number) => {
  // Implement your logic to format the currency
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export { formatCurrency };
