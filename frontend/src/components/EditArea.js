import React, { useEffect, useState } from 'react'

export const EditArea = () => {
  const [text, setText] = useState(null);
  const [fetchData, setFetch] = useState(false);
  const updateText = newText =>{
    setText(newText);
  }

  const setPostId = newText => {setText(newText)}

  useEffect(() => {
    if(fetchData){
      // POST prolog server 
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: "test"
      };
      fetch('http://localhost:8080/compile/compile', requestOptions)
      .then(response => response.json())
      .then(data => setPostId(JSON.stringify(data)))
      .then(text => console.log(text));
    }
  }, [fetchData]);

  return (
    <div className='box'>
        <h4>Edit Area</h4>
        <section className='box__text__area'>
          <div>
            <button onClick={() => setFetch(true)}>Compilar</button>
          </div>

            <textarea placeholder='CODE HERE' cols='50' rows='20'  onChange={e => updateText(e.target.value)}>
            </textarea>
            <p>
             {text}
            </p>
        </section>
    </div>
  )
}