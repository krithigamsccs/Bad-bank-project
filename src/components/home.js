import React from 'react';

export default function Home() {
  return (
    <div style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIaYM1F27YpPZLg9PonZG_ykcRGzCiuQJeJqEpftI9zZDRZopH9Azw_geMZ2iwQETccg&usqp=CAU")`, // Corrected syntax for background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Set the height to cover the entire viewport
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <div className="Home-page text-center">
        <h1 className="heading" style={{ 
          fontSize: '3rem', 
          color: 'white', 
          fontFamily: ' "Gill Sans", sans-serif;', 
          textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de, 0 0 200px #ff00de, 0 0 300px #ff00de' 
        }}>
          Bank of RVS
        </h1>
        <div className="gif-container">
          <img src="https://www.bing.com/th/id/OGC.8fe3975f4d128cf6f5d27ef910e83843?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f30%2f82%2fdd%2f3082dd40cdbe3ce2a85c3d8ad661ddc0.gif&ehk=N2DIpGzFRp6AfylRdgXYyAVzhIMp7G220%2btYCrZVTsc%3d" alt="GIF" className="gif rounded" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}
