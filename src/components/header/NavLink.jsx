import React from "react";
//la propiedad peer activa el modificador de otro elemento hermano
// la propiedad group modifica los elementos hijos, se puede aplicar mas personalizacion, como distintos colores a distintitos hover
export const NavLink = ({ name, link }) => {
  return (
    <a className="group relative py-8" href={link}>
      <span className="group-hover:text-orange-primary">{name}</span>
      <span className="absolute bottom-0 left-0 block h-1 w-full scale-x-0 transition-all duration-500 group-hover:-scale-x-100 group-hover:bg-orange-primary"></span>
    </a>
  );
};
