import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Ishika',
    age: 22,
    hobby: 'Swim',
  });

  const displayPerson = () => {
    setPerson({ name: 'Durgesh', age: 22, hobby: 'code' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3> Enjoys To: {person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        Show Durgesh
      </button>
    </>
  );
};

export default UseStateObject;
