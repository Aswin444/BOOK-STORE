import React from 'react';
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';

const BookSingleCard = ({ book }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 ease-in-out">
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{book.title}</h2>
        <p className="text-gray-600">
          <span className="font-semibold">Author: </span>
          {book.author}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Year: </span>
          {book.publishYear}
        </p>
      </div>
      <div className="flex justify-around items-center bg-gray-100 p-4 border-t">
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-blue-600 hover:text-blue-800" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-yellow-700" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-800" />
        </Link>
      </div>
    </div>
  );
};

export default BookSingleCard;
