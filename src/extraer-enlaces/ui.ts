import { extraerEnlaces } from './extraer-enlaces';

export const resetInfo = () => {
  const imagenesDiv = document.getElementById('imagenes');
  if (imagenesDiv && imagenesDiv instanceof HTMLDivElement) {
    imagenesDiv.textContent = '';
  }
};
export const anadirNuevoTexto = (textoHTML: string): void => {
  const imagenesDiv = document.getElementById('imagenes');
  const nuevoTexto = document.createElement('p');
  nuevoTexto.textContent = textoHTML;
  if (imagenesDiv && imagenesDiv instanceof HTMLDivElement) {
    imagenesDiv.appendChild(nuevoTexto);
  }
};

export const handler = () => {
  const textoHTML = document.querySelector('#txto-html');
  if (textoHTML && textoHTML instanceof HTMLTextAreaElement) {
    const cdgoHTML = textoHTML.value;
    const enlaces = extraerEnlaces(cdgoHTML);
    enlaces.forEach((enlace) => anadirNuevoTexto(enlace));
  }
};
