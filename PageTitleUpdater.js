import React, { useState, useEffect } from 'react';

const PageTitleUpdater = () => {
  const [valueD, setValueD] = useState(''); 
  const [buttonValue, setButtonValue] = useState('');

  useEffect(() => {
    
    document.title = `Page Title: ${valueD}`;
  }, [valueD]);

  const handleButtonClick = () => {
    console.log(buttonValue);
    setValueD(buttonValue);
  };

  return (
    <div>
      <h1>{document.title}</h1>
      <input
        type="text"
        placeholder="Enter value for D"
        value={buttonValue}
        onChange={(e) => setButtonValue(e.target.value)}
      />
      <button onClick={handleButtonClick}>Update Page Title</button>
    </div>
  );
};

export default PageTitleUpdater;
