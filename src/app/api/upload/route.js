import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

let imageCount = 1;

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get('file');
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let extension = '';
    if (file.type === 'image/png') {
      extension = '.png';
    } else if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
      extension = '.jpg';
    }

    const imageName = `imagen${imageCount}${extension}`;
    imageCount++;

    const filePath = path.join(process.cwd(), '/public/img', imageName);

    await writeFile(filePath, buffer);

    return new Response(JSON.stringify({ message: 'Archivo subido' }));
  } catch (error) {
    return NextResponse.json(
      JSON.stringify({
        message: 'No hay archivos',
      }),
      {
        status: 400,
      }
    );
  }
}
