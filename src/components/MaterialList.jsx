import MaterialItem from './MaterialItem';

const MaterialList = ({ materials, removeMaterial }) => {
  return (
    <div>
      {materials.length > 0 ? (
        materials.map((material) => (
          <MaterialItem
            key={material.id}
            material={material}
            removeMaterial={removeMaterial}
          />
        ))
      ) : (
        <p>No hay materiales registrados.</p>
      )}
    </div>
  );
};

export default MaterialList;
