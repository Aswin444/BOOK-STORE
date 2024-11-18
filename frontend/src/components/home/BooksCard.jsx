import React from 'react';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div
      className="min-h-screen p-8 bg-cover bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Book Collection</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((item) => (
            <BookSingleCard key={item._id} book={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
