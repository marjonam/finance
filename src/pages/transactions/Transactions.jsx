import { useState, useEffect } from "react";
import { useCollectionsData } from "../../hooks/useCollectionData";
import style from "./Transactions.module.scss";

function Transactions() {
  const { data, isPending } = useCollectionsData();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Latest");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    if (data?.transactions) {
      let filtered = [...data.transactions];

      // Search filter
      if (searchTerm) {
        filtered = filtered.filter((t) =>
          t.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Category filter
      if (categoryFilter !== "All") {
        filtered = filtered.filter((t) => t.category === categoryFilter);
      }

      // Sorting
      filtered.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        if (sortOption === "Latest") {
          return dateB - dateA;
        } else {
          return dateA - dateB;
        }
      });

      setFilteredTransactions(filtered);
      setCurrentPage(1); // Reset to page 1 on filter change
    }
  }, [data, searchTerm, categoryFilter, sortOption]);

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const currentTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.transactionsPage}>
      <h1>Transactions</h1>

      {/* Top controls */}
      <div className={style.controls}>
        <input
          type="text"
          placeholder="Search transaction..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={style.searchInput}
        />

        <div className={style.filters}>
          <select value={sortOption} onChange={handleSortChange}>
            <option value="Latest">Latest</option>
            <option value="Oldest">Oldest</option>
          </select>

          <select value={categoryFilter} onChange={handleCategoryChange}>
            <option value="All">All Transactions</option>
            <option value="General">General</option>
            <option value="Dining Out">Dining Out</option>
            <option value="Groceries">Groceries</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
      </div>

      {/* Transactions List */}
      <div className={style.transactionsList}>
        {currentTransactions.length > 0 ? (
          currentTransactions.map((transaction) => (
            <div key={transaction.id} className={style.transactionItem}>
              <div className={style.left}>
                <img
                  src={transaction.avatar}
                  alt={transaction.name}
                  className={style.avatar}
                />
                <div>
                  <div className={style.name}>{transaction.name}</div>
                  <div className={style.category}>{transaction.category}</div>
                </div>
              </div>
              <div className={style.right}>
                <div className={style.date}>
                  {new Date(transaction.date).toLocaleDateString()}
                </div>
                <div
                  className={`${style.amount} ${
                    transaction.amount >= 0 ? style.income : style.expense
                  }`}
                >
                  {transaction.amount >= 0 ? "+" : "-"}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No transactions found.</div>
        )}
      </div>

      <div className={style.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={style.prevNextBtn}
        >
          Prev
        </button>

        <div className={style.pageNumbers}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`${style.pageBtn} ${
                currentPage === index + 1 ? style.activePage : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={style.prevNextBtn}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Transactions;
