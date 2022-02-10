
import React, { useState } from 'react';


const Forms = () => {
  const [Name, setName] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Name) {
      const person = { id: new Date().getTime().toString(), Name };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setName('');
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='Name'
              name='Name'
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type='submit'> ADD </button>
        </form>
        {people.map((person, index) => {
          const { id, Name } = person;
          return (
            <div className='item' key={id}>
              <h4>{Name}</h4>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Forms;