import React, { useEffect, useState } from 'react'

export const DocumentArea = (props) => {

  const [data, setData] = useState(null);
  const [fetchDataAbout, setFetchAbout] = useState(false);
  const [fetchDataDocument, setFetchDocument] = useState(false);


  useEffect(() => {
     if (fetchDataAbout) {
        setFetchDocument(false)
        fetch('http://localhost:8080/about/about')
        .then((response) => response.json())
        .then((data) => setData(JSON.stringify(data)))
        .catch((err) => {
          alert(err.message)
        })
     }
     if (fetchDataDocument) {
      setFetchAbout(false)
      fetch('http://localhost:8080/document/00')
      .then((response) => response.text())
      .then((data) => setData(data))
      .catch((err) => {
        alert(err.message)
      })
   }
  }, [fetchDataAbout, fetchDataDocument]);
  console.log(data);
  return (
    <div className='box'>
        <h4>Document Area</h4>
        <section>
        <div>
          <button onClick={() => setFetchAbout(true)}>About</button>
          <button onClick={() => setFetchDocument(true)}>Document</button>
        </div>
        <div>
          
          <p> {data}</p>
        <textarea className='' disabled  cols='50' rows='15'>
        </textarea>
        </div>
        </section>
    </div>
  )
}
