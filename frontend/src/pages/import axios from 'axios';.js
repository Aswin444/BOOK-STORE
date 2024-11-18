import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = async () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    try {
      await axios.post('https://book-store-b8k4.onrender.com/books', data);
      setLoading(false);
      enqueueSnackbar('Book Created successfully', { variant: 'success' });
      navigate('/');
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Error', { variant: 'error' });
      console.log(error);
    }
  };

  return (
    <div
      className='min-h-screen flex items-center justify-center bg-cover bg-center'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className='backdrop-blur-sm bg-white/70 p-8 rounded-lg shadow-lg w-[90%] md:w-[600px]'>
        <BackButton />
        <h1 className='text-4xl font-bold text-center my-6 text-sky-600'>Create Book</h1>
        {loading && <Spinner />}
        <div className='flex flex-col space-y-6'>
          <div className='flex flex-col'>
            <label className='text-lg text-gray-700 mb-2'>Title</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500'
              placeholder='Enter book title'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-lg text-gray-700 mb-2'>Author</label>
            <input
              type='text'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500'
              placeholder='Enter author name'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-lg text-gray-700 mb-2'>Publish Year</label>
            <input
              type='text'
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className='border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500'
              placeholder='Enter publish year'
            />
          </div>
          <button
            onClick={handleSaveBook}
            className='bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 ease-in-out shadow-md'
          >
            Save Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBooks;
