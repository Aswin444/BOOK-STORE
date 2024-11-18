import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://book-store-b8k4.onrender.com/books/${id}`);
        const d = await response.data;
        setAuthor(d.data.author);
        setPublishYear(d.data.publishYear);
        setTitle(d.data.title);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        enqueueSnackbar('Error fetching book details', { variant: 'error' });
        console.log(error);
      }
    };

    fetchData();
  }, [id, enqueueSnackbar]);

  const handleEditBook = async () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    try {
      await axios.put(`https://book-store-b8k4.onrender.com/books/${id}`, data);
      setLoading(false);
      enqueueSnackbar('Book Edited Successfully', { variant: 'success' });
      navigate('/');
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Error editing book', { variant: 'error' });
      console.log(error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl w-full max-w-lg p-8">
        <BackButton />
        <h1 className="text-4xl font-semibold text-sky-700 text-center mb-8">Edit Book</h1>
        {loading && <Spinner />}
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-600 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-300"
              placeholder="Enter book title"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-600 mb-2">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-300"
              placeholder="Enter author's name"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-600 mb-2">Publish Year</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-300"
              placeholder="Enter publish year"
            />
          </div>
          <button
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-lg mt-6 transition duration-300"
            onClick={handleEditBook}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
