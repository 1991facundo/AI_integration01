'use client';

import React, { useState, useEffect } from 'react';

const HomePage: React.FC = () => {
  //Defino el estado con el saludo inicial
  const [greeting, setGreeting] = useState<string>('Hola Mundo');

  //Determino el saludo basado en la hora actual
  const determineGreeting = () => {
    const now = new Date();
    const hour = now.getHours();

    // Lógica para determinar el saludo basado en la hora
    if (hour >= 6 && hour < 12) {
      setGreeting('Buenos días');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Buenas tardes');
    } else {
      setGreeting('Buenas noches');
    }
  };

  // useEffect para ejecutar la función determineGreeting cuando el componente se monta
  useEffect(() => {
    determineGreeting();
  }, []);

  // Renderizar la interfaz de usuario con el saludo
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>{greeting}</h1>
    </div>
  );
};

export default HomePage;
