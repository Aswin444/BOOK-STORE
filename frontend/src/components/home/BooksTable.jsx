import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div
      className='min-h-screen flex items-center justify-center bg-cover bg-center p-8'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className='backdrop-blur-sm bg-white/80 rounded-lg shadow-lg p-6 w-full max-w-4xl'>
        <h2 className='text-3xl font-bold text-center text-sky-700 mb-8'>Books List</h2>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='bg-sky-100'>
              <th className='border border-sky-200 p-3 rounded-tl-lg'>No</th>
              <th className='border border-sky-200 p-3'>Title</th>
              <th className='border border-sky-200 p-3 max-md:hidden'>Author</th>
              <th className='border border-sky-200 p-3 max-md:hidden'>Publish Year</th>
              <th className='border border-sky-200 p-3 rounded-tr-lg'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className='hover:bg-sky-50 transition-all'>
                <td className='border border-sky-200 p-4 text-center text-sky-700'>{index + 1}</td>
                <td className='border border-sky-200 p-4 text-center text-sky-800'>{book.title}</td>
                <td className='border border-sky-200 p-4 text-center text-sky-800 max-md:hidden'>{book.author}</td>
                <td className='border border-sky-200 p-4 text-center text-sky-800 max-md:hidden'>{book.publishYear}</td>
                <td className='border border-sky-200 p-4 text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/books/details/${book._id}`} title='View Details'>
                      <BsInfoCircle className='text-2xl text-green-600 hover:text-green-800 transition duration-200' />
                    </Link>
                    <Link to={`/books/edit/${book._id}`} title='Edit Book'>
                      <AiOutlineEdit className='text-2xl text-yellow-500 hover:text-yellow-700 transition duration-200' />
                    </Link>
                    <Link to={`/books/delete/${book._id}`} title='Delete Book'>
                      <MdOutlineDelete className='text-2xl text-red-500 hover:text-red-700 transition duration-200' />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {books.length === 0 && (
          <p className='text-center text-sky-600 mt-8'>No books available. Please add some!</p>
        )}
      </div>
    </div>
  );
};

export default BooksTable;
