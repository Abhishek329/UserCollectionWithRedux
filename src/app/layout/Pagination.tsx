import React from 'react';

interface PaginationProps {
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange }) => {
  const handlePageClick = (newPage: number) => {
    // Ensure newPage is within valid range (greater than 0)
    if (newPage > 0) {
      onPageChange(newPage); // Call the parent component's onPageChange function
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex">
        <li>
          <button
            className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>        
        <li>
          <button
            className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
            onClick={() => handlePageClick(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
