/*export function getImageUrl(name) {
  return new URL(`/assets/${name}`, import.meta.url).href;
}*/
const images = import.meta.glob('./assets/projects/*', { eager: true });

export function getImageUrl(filename) {
  const path = `./assets/projects/${filename}`;
  return images[path]?.default || '';
}