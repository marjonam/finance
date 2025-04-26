import { Link, useLocation } from "react-router-dom";

import "./BottomNavigation.scss";

function BottomNavigation() {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <Link
        to="/"
        className={`bottom-nav-item ${
          location.pathname === "/" ? "active" : ""
        }`}
      >
        <img
          src="/images/icon-nav-overview.svg"
          alt="Overview"
          className="sidebar__icon"
        />
        <span>Overview</span>
      </Link>
      <Link
        to="/transactions"
        className={`bottom-nav-item ${
          location.pathname === "/transactions" ? "active" : ""
        }`}
      >
        <img
          src="/images/icon-nav-transactions.svg"
          alt="Transactions"
          className="sidebar__icon"
        />
        <span>Transactions</span>
      </Link>
      <Link
        to="/budget"
        className={`bottom-nav-item ${
          location.pathname === "/budgets" ? "active" : ""
        }`}
      >
        <img
          src="/images/icon-nav-budgets.svg"
          alt="Budget"
          className="sidebar__icon"
        />
        <span>Budgets</span>
      </Link>

      <Link
        to="/pots"
        className={`bottom-nav-item ${
          location.pathname === "/pots" ? "active" : ""
        }`}
      >
        <img
          src="/images/icon-nav-pots.svg"
          alt="Pots"
          className="sidebar__icon"
        />
        <span>Pots</span>
      </Link>

      <Link
        to="/recurringBills"
        className={`bottom-nav-item ${
          location.pathname === "/recurringBills" ? "active" : ""
        }`}
      >
        <img
          src="/images/icon-nav-recurring-bills.svg"
          alt="Recurring Bills"
          className="sidebar__icon"
        />
        <span>Recurring</span>
      </Link>
    </nav>
  );
}

export default BottomNavigation;
