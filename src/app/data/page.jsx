'use client';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const fetchData = () => {
  return fetch('http://localhost:5000/productos').then((res) => res.json());
};

export default async function DatasPage() {
  const datas = await fetchData();
  return (
    <div className='flex flex-wrap gap-10 justify-center items-center mt-5'>
      {datas.map((data) => (
        <article key={data.id}>
          <Card sx={{ width: '100%' }}>
            <CardMedia sx={{ height: 140 }} image={data.img} title='Producto' />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                CATEGORÍA: {data.categoria}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                <b>NOMBRE: </b>
                {data.nombre}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                <b>STOK: </b> {data.stok}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                <b>MARCA: </b> {data.marca}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                <b>PRECIO:</b> S/.{data.precio}.00
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                <b>DESCRIPCIÓN:</b> {data.descripcion}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size='large'
                variant='outlined'
                color='success'
                startIcon={<EditIcon />}
              >
                Editar
              </Button>
              <Button
                size='large'
                variant='outlined'
                color='error'
                startIcon={<DeleteIcon />}
              >
                Borrar
              </Button>
            </CardActions>
          </Card>
        </article>
      ))}
    </div>
  );
}
