import React, { useEffect, useState } from 'react'

export const DocumentArea = () => {
  const [data, setData] = useState(null);
  const [fetchData, setFetch] = useState(false);

  useEffect(() => {
     if (fetchData) {
        fetch('http://localhost:8080/about')
        .then((response) => response.json())
        .then((data) => setData(data.title));
     }
  }, [fetchData]);
  console.log(data);

  return (
    <div>
        <h2>Document Area</h2>
        <section>
         <button onClick={() => setFetch(true)}>Fetch Data</button>
         <p>{data}</p>
            <textarea>
                {data}
            </textarea>
        </section>
    </div>
  )
}
