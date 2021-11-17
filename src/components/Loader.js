import React from 'react';

function Loader() {
  return (
    <div>
          <h1>Loading..</h1>
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    </div>
  );
}

export default Loader