import React, { useEffect, useState } from 'react';

const link = 'https://chat.openai.com/chat';
const defaultText = 'Share with a friends!';
const completed = 'Copy completed! Please share the link.';

const Popup = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let timeoutId;

    if (isCopied) {
      timeoutId = setTimeout(() => {
        setIsCopied(false);
        setProgress(100);
      }, 2000);

      const intervalId = setInterval(() => {
        setProgress((prevProgress) => prevProgress - 1);
      }, 20);

      return () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      };
    }
  }, [isCopied]);

  const handleShareLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setIsCopied(true);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="App">
      <header className="title">
        <h1>chatGPTable</h1>
        <p>
          Convert an HTML table <br /> received through chatGPT to markdown
        </p>
      </header>
      <p>Did you like our service?</p>
      <button onClick={handleShareLink}>{defaultText}</button>
      {isCopied && (
        <div className="toast">
          <p>{completed}</p>
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
};

export default Popup;
