
const MaterialItem = ({ material, removeMaterial }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <p>
        <strong>{material.name}</strong> - Cantidad: {material.quantity}
      </p>
      <button onClick={() => removeMaterial(material.id)}>Eliminar</button>
    </div>
  );
};

export default MaterialItem;
