import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://book-store-b8k4.onrender.com/books/${id}`);
        const data = await response.data;
        setBook(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1531257243402-3f6f9d326f4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      <div className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-8 max-w-xl w-full">
        <BackButton />
        <h1 className="text-4xl font-bold text-sky-700 text-center mb-8">Book Details</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col space-y-6 text-gray-700">
            <div className="flex justify-between">
              <span className="text-lg font-semibold">ID:</span>
              <span className="text-lg">{book._id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-semibold">Title:</span>
              <span className="text-lg">{book.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-semibold">Author:</span>
              <span className="text-lg">{book.author}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-semibold">Publish Year:</span>
              <span className="text-lg">{book.publishYear}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-semibold">Created At:</span>
              <span className="text-lg">{new Date(book.createdAt).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-semibold">Last Updated:</span>
              <span className="text-lg">{new Date(book.updatedAt).toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowBook;
