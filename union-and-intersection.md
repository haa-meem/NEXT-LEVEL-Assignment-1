# Provide a practical example of combining Union (|) and Intersection (&) types in TypeScript.

Union and intersection types are so model both of these choices in TypeScript.

## Practical Example

A union ( | ) enables a value to match multiple types. Here, the type of `PaymentDetails` is either `CashPayment` or `CardPayment`. Where `PaymentRecord` is an intersection ( & ) of the types `Customer` and one possible payment option.

The `method` property is literal, meaning that TypeScript can determine the type of payment method. The function determines if the method is `"card"`. This is referred to as type narrowing. If it's `"card"`, then TypeScript will permit using of `lastFourDigits`. If not, the record is considered as cash payment. Both options have the customer's name and the total amount paid.

```ts
type Customer = {
  customerId: number;
  name: string;
};

type CashPayment = {
  method: "cash";
  amount: number;
};

type CardPayment = {
  method: "card";
  amount: number;
  lastFourDigits: string;
};

// Union: cash OR card payment
type PaymentDetails = CashPayment | CardPayment;

// Intersection: customer AND payment details
type PaymentRecord = Customer & PaymentDetails;

function createReceipt(record: PaymentRecord): string {
  if (record.method === "card") {
    return `${record.name} paid ${record.amount} taka by card ending ${record.lastFourDigits}.`;
  }

  return `${record.name} paid ${record.amount} taka by cash.`;
}

const payment: PaymentRecord = {
  customerId: 13,
  name: "Haa-meem",
  method: "card",
  amount: 1500,
  lastFourDigits: "9688",
};

console.log(createReceipt(payment));
```
