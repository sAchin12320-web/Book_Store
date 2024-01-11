
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBook = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/book/${id}`);
        const data = await response.json();
        setBookData(data);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={bookData.imageURL} alt="" className='h-96'/>
      <h2>{bookData.bookTitle}</h2>
    </div>
  );
};

export default SingleBook;
