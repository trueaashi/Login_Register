// import React from 'react'

// function Home () {
//   return (
//     <div className='color-red'>
// <h2>
//         HOME
//     </h2>
//     <p>
//         Welcome to our simple and secure registration and login website built with the powerful MERN stack: MongoDB, Express, React, and Node.js.
//         This application is designed to provide a seamless user experience with robust authentication features. MongoDB serves as our database, ensuring efficient storage and retrieval of user information. Express and Node.js power our backend, managing user requests and handling authentication processes. On the frontend, React offers a dynamic and responsive interface, making it easy for users to register, log in, and navigate through the site. Whether you're creating a new account or accessing your existing profile, our system is designed to keep your data safe and provide a smooth, intuitive experience. Join us and explore the simplicity and efficiency of modern web development with the MERN stack
//     </p>
//     </div>
    
//   )
// }

// export default Home;

import React from 'react';

function Home() {
  const styles = {
    container: {
        font: 900,
      backgroundColor: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px',
    },
    header: {
      color: 'red',
      padding: '100px'
    },
    paragraph: {
      color: 'brown',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>HOME</h2>
      <p style={styles.paragraph}>
        Welcome to our simple and secure registration and login website built with the powerful MERN stack: MongoDB, Express, React, and Node.js.
        This application is designed to provide a seamless user experience with robust authentication features. MongoDB serves as our database, ensuring efficient storage and retrieval of user information. Express and Node.js power our backend, managing user requests and handling authentication processes. On the frontend, React offers a dynamic and responsive interface, making it easy for users to register, log in, and navigate through the site. Whether you're creating a new account or accessing your existing profile, our system is designed to keep your data safe and provide a smooth, intuitive experience. Join us and explore the simplicity and efficiency of modern web development with the MERN stack.
      </p>
    </div>
  );
}

export default Home;
