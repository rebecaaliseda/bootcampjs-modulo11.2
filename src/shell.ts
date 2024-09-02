import { handler, resetInfo } from './extraer-enlaces/ui';

const form = document.getElementById('form');
if (form && form instanceof HTMLFormElement) {
  form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    resetInfo();
    handler();
  });
}
