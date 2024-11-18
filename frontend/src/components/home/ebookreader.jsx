import React, { useState } from 'react';

// Sample book content (you would typically load this from a server)
const bookContent = [
  `<h1>Alice's Adventures in Wonderland</h1>
  <h2>by Lewis Carroll</h2>
  <p>Down the Rabbit-Hole</p>
  <p>Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversations?'</p>`,
  
  `<p>So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.</p>`,
  
  `<p>There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural);</p>`
];

const EbookReader = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [fontSize, setFontSize] = useState(16);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < bookContent.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleIncreaseFont = () => {
    if (fontSize < 24) {
      setFontSize(fontSize + 2);
    }
  };

  const handleDecreaseFont = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const updatePage = () => {
    return { __html: bookContent[currentPage - 1] };
  };

  return (
    <div
      style={{
        background: isDarkMode ? '#2c3e50' : '#f4f1ea',
        minHeight: '100vh',
        color: isDarkMode ? '#ecf0f1' : '#2c3e50',
      }}
    >
      <div
        className="ebook-container"
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          background: isDarkMode ? '#34495e' : 'white',
          boxShadow: '0 0 20px rgba(0,0,0,0.1)',
          minHeight: '100vh',
          fontSize: `${fontSize}px`,
        }}
      >
        <div
          id="content"
          dangerouslySetInnerHTML={updatePage()}
          className="page-turn"
        />
      </div>

      <div
        className="controls"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(255,255,255,0.9)',
          padding: '10px 20px',
          borderRadius: '25px',
          boxShadow: '0 0 15px rgba(0,0,0,0.1)',
        }}
      >
        <button
          onClick={handlePrevPage}
          style={{
            background: '#3498db',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            margin: '0 5px',
            borderRadius: '20px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          ◀ Previous
        </button>
        <span className="page-number" style={{ fontStyle: 'italic' }}>
          Page <span id="currentPage">{currentPage}</span>
        </span>
        <button
          onClick={handleNextPage}
          style={{
            background: '#3498db',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            margin: '0 5px',
            borderRadius: '20px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          Next ▶
        </button>
      </div>

      <div
        className="settings"
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: 'white',
          padding: '15px',
          borderRadius: '10px',
          boxShadow: '0 0 15px rgba(0,0,0,0.1)',
        }}
      >
        <div className="font-size-control" style={{ margin: '10px 0' }}>
          Font Size: 
          <button
            onClick={handleDecreaseFont}
            style={{
              background: '#e74c3c',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              margin: '0 5px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            A-
          </button>
          <button
            onClick={handleIncreaseFont}
            style={{
              background: '#2ecc71',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              margin: '0 5px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            A+
          </button>
        </div>
        <button
          onClick={toggleTheme}
          style={{
            background: '#f39c12',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
};

export default EbookReader;
