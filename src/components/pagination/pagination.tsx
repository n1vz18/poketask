import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalCount, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const pageNumbers = [];

  const maxDisplayedPages = 6; // общее количество кнопок страниц
  const halfDisplayed = Math.floor(maxDisplayedPages / 2);

  let startPage = Math.max(1, currentPage - halfDisplayed);
  let endPage = Math.min(totalPages, currentPage + halfDisplayed);

  // если startPage близок к началу
  if (startPage < 2) {
    endPage = Math.min(maxDisplayedPages, totalPages);
  }

  // если endPage близок к концу
  if (endPage > totalPages - 1) {
    startPage = Math.max(totalPages - maxDisplayedPages + 1, 1);
  }

  // заполнение массива н
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
}

  return (
    <div>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <button
        key={number}
        onClick={() => onPageChange(number)} 
        style={{ margin: '0 5px', backgroundColor: number === currentPage ? '#ccc' : '#fff' }}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;