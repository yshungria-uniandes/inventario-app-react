import { useState } from 'react';
import MaterialList from './components/MaterialList';
import AddMaterialForm from './components/AddMaterialForm';

import './App.css';

const App = () => {
  const [materials, setMaterials] = useState([]);

  const addMaterial = (material) => {
    setMaterials([...materials, material]);
  };

  const removeMaterial = (id) => {
    setMaterials(materials.filter((material) => material.id !== id));
  };

  return (
    <div className="App">
      <h1>Inventario de Materiales</h1>
      <AddMaterialForm addMaterial={addMaterial} />
      <MaterialList materials={materials} removeMaterial={removeMaterial} />
    </div>
  );
};

export default App;
