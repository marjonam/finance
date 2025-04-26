const RecurringBillsSummary = ({ transactions }) => {
  const getRecurringBillsSummary = () => {
    // Filter faqat recurring bills
    const recurringBills = transactions.filter(
      (transaction) => transaction.recurring === true
    );

    const now = new Date();
    const dueSoonDate = new Date();
    dueSoonDate.setDate(now.getDate() + 7); // 7 kun ichida due

    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(now.getMonth() - 1); // 1 oy oldin

    // Paid bills — date o‘tgan va 1 oy ichida
    const paidBills = recurringBills.filter((bill) => {
      const billDate = new Date(bill.date);
      return billDate <= now && billDate >= oneMonthAgo;
    });

    // Upcoming bills — date kelajakda
    const upcomingBills = recurringBills.filter((bill) => {
      const billDate = new Date(bill.date);
      return billDate > now;
    });

    // Due soon — 7 kun ichida bo‘ladigan bills
    const dueSoonBills = upcomingBills.filter((bill) => {
      const billDate = new Date(bill.date);
      return billDate <= dueSoonDate;
    });

    return {
      paid: {
        amount: paidBills
          .reduce((sum, bill) => sum + Math.abs(bill.amount), 0)
          .toFixed(2),
        count: paidBills.length,
      },
      upcoming: {
        amount: upcomingBills
          .reduce((sum, bill) => sum + Math.abs(bill.amount), 0)
          .toFixed(2),
        count: upcomingBills.length,
      },
      dueSoon: {
        amount: dueSoonBills
          .reduce((sum, bill) => sum + Math.abs(bill.amount), 0)
          .toFixed(2),
        count: dueSoonBills.length,
      },
    };
  };

  const summary = getRecurringBillsSummary();

  return (
    <div className="recurring-bills-summary">
      <h1>Recurring Bills</h1>

      <div className="summary-item">
        <div className="summary-label">Paid Bills</div>
        <div className="summary-amount">${summary.paid.amount}</div>
        <div className="summary-count">{summary.paid.count} items</div>
      </div>

      <div className="summary-item">
        <div className="summary-label">Total Upcoming</div>
        <div className="summary-amount">${summary.upcoming.amount}</div>
        <div className="summary-count">{summary.upcoming.count} items</div>
      </div>

      <div className="summary-item">
        <div className="summary-label">Due Soon</div>
        <div className="summary-amount">${summary.dueSoon.amount}</div>
        <div className="summary-count">{summary.dueSoon.count} items</div>
      </div>
    </div>
  );
};

export default RecurringBillsSummary;
