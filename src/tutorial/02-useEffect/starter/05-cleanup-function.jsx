import { useEffect } from 'react';
import { useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log('render');
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    // console.log('use effect');
    const intId = setInterval(() => {
      // console.log('interval');
    }, 1000);
    return () => {
      clearInterval(intId);
      console.log('cleanup');
    };
  }, []);
  return <h1>Hello</h1>;
};

export default CleanupFunction;
