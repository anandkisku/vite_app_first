import React, { useState } from 'react'

const HeaderComponent: React.FC = () => {
  const [header, setHeader] = useState<boolean>(true);

  return (
    <div style={{ width: '100%', padding: '20px', backgroundColor: 'red' }}>
      <h1 style={{ color: 'white' }}>{header === true ? 'This is the header' : 'Header Hidden'}</h1>
      <p style={{ color: 'white' }}>Welcome to our website!</p>
      <p style={{ color: 'white' }}>Enjoy your stay!</p>
      <p style={{ color: 'white' }}>Have a great day!</p>
      <p style={{ color: 'white' }}>Thank you for visiting!</p>
      <button
        style={{ marginTop: '10px', backgroundColor: 'blue', color: 'white' }}
        onClick={() => setHeader(!header)}
      >
        Click Me
      </button>
    </div>
  );
};

export default HeaderComponent;