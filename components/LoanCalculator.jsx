import React, { useState } from "react";

const LoanCalculator = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [emi, setEMI] = useState(null);
  const [details, setDetails] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(amount);
    const annualRate = parseFloat(rate);
    const n = parseFloat(years) * 12; // Total months

    if (!P || !annualRate || !n) {
      setEMI("Please enter valid values!");
      setDetails(null);
      return;
    }

    const r = annualRate / 100 / 12; // Monthly interest rate

    // EMI Formula
    const numerator = P * r * Math.pow(1 + r, n);
    const denominator = Math.pow(1 + r, n) - 1;
    const emiValue = numerator / denominator;

    // Total interest and amount
    const totalPayment = emiValue * n;
    const totalInterest = totalPayment - P;

    setEMI(emiValue.toFixed(2));
    setDetails({
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    });
  };

  return (
    <div>
      <h2>Loan Calculator</h2>
      <input
        type="number"
        placeholder="Loan Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Years"
        value={years}
        onChange={(e) => setYears(e.target.value)}
      />
      <button onClick={calculateEMI}>Calculate EMI</button>

      {emi !== null && (
        <div>
          <h3>Monthly EMI: ₹{emi}</h3>
          {details && (
            <div>
              <p>Total Payment: ₹{details.totalPayment}</p>
              <p>Total Interest: ₹{details.totalInterest}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
