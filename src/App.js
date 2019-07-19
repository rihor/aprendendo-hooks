import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  // componentDidMount
  useEffect(() => {
    const techsLocalStorage = localStorage.getItem('techs');

    if (techsLocalStorage) {
      setTech(JSON.parse(techsLocalStorage));
    }
  }, []);

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techsSize = useMemo(() => techs.length, [techs]);

  const handleAdd = useCallback(() => {
    setTech([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <strong>Você tem {techsSize} tecnologias!</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button onClick={handleAdd} type="button">
        Adicionar
      </button>
    </>
  );
}

export default App;
