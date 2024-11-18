import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://book-store-b8k4.onrender.com/books');
        const data = await response.data;
        setBooks(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div
      className='min-h-screen p-6'
      style={{
        backgroundImage: 'url("https://c8.alamy.com/comp/GX8RAF/open-digital-ebook-with-blue-tech-background-elearning-concept-GX8RAF.jpg")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className='flex justify-between items-center bg-white/90 shadow-lg p-4 rounded-lg mb-8'>
        <div className='flex gap-x-4'>
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              showType === 'table' ? 'bg-sky-600 text-white' : 'bg-sky-300 text-sky-800 hover:bg-sky-600 hover:text-white'
            }`}
            onClick={() => setShowType('table')}
          >
            Table View
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              showType === 'card' ? 'bg-sky-600 text-white' : 'bg-sky-300 text-sky-800 hover:bg-sky-600 hover:text-white'
            }`}
            onClick={() => setShowType('card')}
          >
            Card View
          </button>
        </div>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 hover:text-sky-600 text-5xl transition-all duration-300' />
        </Link>
      </div>

      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>📚 E Books Collection</h1>
        <p className='text-gray-600 text-lg'>Explore our extensive collection of books</p>
      </div>

      <div className='mt-10'>
        {loading ? <Spinner /> : showType === 'table' ? <BooksTable books={books} /> : <BooksCard books={books} />}
      </div>

      <footer className='mt-16 bg-gray-200 p-4 rounded-lg shadow-lg text-center'>
        <p className='text-gray-700'>© 2024 Book Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
