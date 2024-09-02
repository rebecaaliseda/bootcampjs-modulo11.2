export const extraerEnlaces = (texto: string): string[] => {
  const patronRegex =
    /^\s{0,30}<img(\s)src(\s)?\=(\s)?\"http\:\/\/localhost\:3000\/\.\/\w{3,12}\.(jpg|jpeg|png|webp)"(\s?)\/>$/gm;
  const match = texto.match(patronRegex);
  return match || [];
};
