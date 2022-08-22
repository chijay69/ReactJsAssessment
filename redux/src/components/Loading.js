import React from 'react';

const Loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div
          className="spinner-border animate-spin inline-block w-20 h-20 border-4 rounded-full"
          role="status"
        >
          {' '}
          {/* <span className="visually-hidden">Loading...</span> */}
        </div>
      </div>
    </div>
  );
};

export default Loading;
