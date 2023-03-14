import React, { useEffect, useState } from 'react';
import MyButton from '../../components/MyButton';
import { StContent, StHeader, StProgressbar, StToast } from './Popup.style';

const link = 'https://chat.openai.com/chat';
const defaultText = 'Share with a friends!';
const completed = `Copied share link! Please share the link.`;

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
      <StHeader>
        <h1>chatGPTable</h1>
        <p>
          Convert an HTML table <br /> received through chatGPT to markdown
        </p>
      </StHeader>
      <StContent>Did you like our service?</StContent>
      <MyButton text={defaultText} onClick={handleShareLink} />
      {isCopied && (
        <StToast>
          <p>{completed}</p>
          <StProgressbar style={{ width: `${progress}%` }} />
        </StToast>
      )}
    </div>
  );
};

export default Popup;
