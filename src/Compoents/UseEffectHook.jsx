// import React, { useEffect, useState } from 'react';

// const UseEffectHook = () => {
//   // 1st
//   const API = "http://hn.algolia.com/api/v1/search?query=html";

//   // 2nd
//   const [data, setData] = useState(null);  // State to store API data

//   const fetchApiData = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       setData(data);  // Update state with the fetched data
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchApiData(API);
//   }, []);

//   // 3rd: Render the fetched data
//   return (
//     <>
//       <h1>Fetch API Data</h1>
//       <ul>
//         {data && data.hits.map((item) => (
//           <li key={item.objectID}>{item.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default UseEffectHook;


import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
  // 1st
  const API = "http://hn.algolia.com/api/v1/search?query=html";

  // 2nd
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);  // Set loading to false when done
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  // 3rd: Render the fetched data
  return (
    <>
      <h1>Fetch API Data</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data && data.hits.map((item) => (
          <li key={item.objectID}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default UseEffectHook;
