import { saveToLocalStorage, getFromLocalStorage } from '../utils/storage';
import { DEFAULT_LANGUAGE } from '../utils/constants';

const languages = {
  a: 'ф',
  b: 'и',
  c: 'с',
  d: 'в',
  e: 'у',
  f: 'а',
  g: 'п',
  h: 'р',
  i: 'ш',
  j: 'о',
  k: 'л',
  l: 'д',
  m: 'ь',
  n: 'т',
  o: 'щ',
  p: 'з',
  q: 'й',
  r: 'к',
  s: 'ы',
  t: 'е',
  u: 'г',
  v: 'м',
  w: 'ц',
  x: 'ч',
  y: 'н',
  z: 'я',
  A: 'Ф',
  B: 'И',
  C: 'С',
  D: 'В',
  E: 'У',
  F: 'А',
  G: 'П',
  H: 'Р',
  I: 'Ш',
  J: 'О',
  K: 'Л',
  L: 'Д',
  M: 'Ь',
  N: 'Т',
  O: 'Щ',
  P: 'З',
  Q: 'Й',
  R: 'К',
  S: 'Ы',
  T: 'Е',
  U: 'Г',
  V: 'М',
  W: 'Ц',
  X: 'Ч',
  Y: 'Н',
  Z: 'Я',
};

function setLanguage(language) {
  saveToLocalStorage('language', language);
}

function getLanguage() {
  const currentLanguage = getFromLocalStorage('language') || DEFAULT_LANGUAGE;
  return currentLanguage;
}

export {
  languages, setLanguage, getLanguage,
};
