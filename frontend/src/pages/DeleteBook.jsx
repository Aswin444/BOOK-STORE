import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = async () => {
    setLoading(true);
    try {
      await axios.delete(`https://book-store-b8k4.onrender.com/books/${id}`);
      setLoading(false);
      enqueueSnackbar('Book Deleted Successfully', { variant: 'success' });
      navigate('/');
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Error', { variant: 'error' });
      console.log(error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 max-w-md w-full">
        <BackButton />
        <h1 className="text-4xl font-bold text-red-700 text-center mb-8">Delete Book</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Are you sure you want to delete this book?
            </h3>
            <button
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
              onClick={handleDeleteBook}
            >
              Yes, Delete it
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteBook;
