import './styles/index.css'; 


const switcherList = Array.from(document.querySelectorAll('.switcher'));

  switcherList.forEach((switcher) => {
    switcher.addEventListener("click", function() {
      const switcherElements = Array.from(switcher.querySelectorAll('.switcher__element'));
      switcherElements.forEach((element) => {
        element.classList.toggle('switcher__element_active');
      });
      const movedElement = switcher.previousElementSibling;
      movedElement.classList.contains('articles') ? movedElement.classList.toggle('articles_move_left') : movedElement.classList.toggle('pictures_move_left');
    })
  });


