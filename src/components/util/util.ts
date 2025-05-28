export function handleScrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const offset = window.innerHeight * 0.1; // 10% de la altura de pantalla
    const top = element.offsetTop - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
