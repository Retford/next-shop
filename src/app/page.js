'use client';

import { CargarProductos } from '@/components/CargarProductos';
import { Header } from '@/components/Header';
import { ListaProductos } from '@/components/ListaProductos';
import { useState } from 'react';

export default function Home() {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});
  const eliminarProducto = (id) => {
    const productosActualizados = productos.filter(
      (producto) => producto.id != id
    );
    setProductos(productosActualizados);
  };
  return (
    <div className='container mx-auto mt-10'>
      <Header />
      <div className='flex mt-5'>
        <CargarProductos
          productos={productos}
          setProductos={setProductos}
          producto={producto}
          setProducto={setProducto}
        />
        <ListaProductos
          productos={productos}
          setProducto={setProducto}
          eliminarProducto={eliminarProducto}
        />
      </div>
    </div>
  );
}
