
import HorizontalScroll from '@oberon-amsterdam/horizontal';



let horizontalScroll;


  function handleResize() {
  
    if (window.innerWidth >= 550) {
      // Other resize handling code
      horizontalScroll = new HorizontalScroll({
        scrollAmount: 100,
        scrollAmountStep: 10,
        container: document.querySelector('.main'), // Select the wrapper element
        showScrollbars: false,
        preventVerticalScroll: false,
      });
  
    } else {
    
      // Destroy the HorizontalScroll instance when the screen is small
      if (horizontalScroll) {
 
        horizontalScroll.destroy();
        horizontalScroll = null;
      }

    }
  }
  
  
  // let resizeTimeout;
  
  // function debounceResize() {
  //   clearTimeout(resizeTimeout);
  //   resizeTimeout = setTimeout(() => {
  //     // Handle the resize event here
  //     handleResize();
  //   }, 200); // Adjust the debounce delay as needed
  // }
  
  window.addEventListener('resize', handleResize);
  
  handleResize()