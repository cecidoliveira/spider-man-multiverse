function selectCarouselItem(selectedBntElement){
    const selectedItem = selectedBntElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
    const activeBnt = document.querySelector('.s-controller__button--active');
    
    carousel.style.transform = newTransform;
    activeBnt.classList.remove('s-controller__button--active')
    selectedBntElement.classList.add('s-controller__button--active')
}