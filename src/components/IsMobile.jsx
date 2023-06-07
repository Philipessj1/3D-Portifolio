const IsMobile = () => {
  const mediaQuery = window.matchMedia('(max-width: 640px)');
    
  const isMobile = mediaQuery.matches;

  return isMobile;
}
 
export default IsMobile;