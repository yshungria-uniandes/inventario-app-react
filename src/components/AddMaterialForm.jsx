import { useState } from 'react';

const AddMaterialForm = ({ addMaterial }) => {
  const [materialName, setMaterialName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!materialName || !quantity) return;

    const newMaterial = {
      id: Date.now(),
      name: materialName,
      quantity: parseInt(quantity, 10),
    };

    addMaterial(newMaterial);
    setMaterialName('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del Material"
        value={materialName}
        onChange={(e) => setMaterialName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit">Añadir</button>
    </form>
  );
};

export default AddMaterialForm;