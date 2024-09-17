export const extraerEnlaces = (texto: string): string[] => {
  const patronRegex = /^\s{0,30}<img(\s)src(\s)?=(\s)?".*?"(\s)?\/>$/gm;

  //const regex =/<img\ssrc=".*?"/gm;
  const match = texto.match(patronRegex);
  return match || [];
};
