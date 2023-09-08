
import HorizontalScroll from '@oberon-amsterdam/horizontal';



const horizontalScroll = new HorizontalScroll({
    scrollAmount: 100,
    scrollAmountStep: 10,
    container: document.querySelector('.main'), // Select the wrapper element
    showScrollbars: false,
    preventVerticalScroll: false,
  });


