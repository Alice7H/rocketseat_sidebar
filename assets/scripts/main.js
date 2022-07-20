(() => {
  const menu = document.querySelector('.menu');

  menu.addEventListener('click', () => {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const iconSearch = document.querySelector('.icon-search');
    const search = document.querySelector('.search');
    const items = document.querySelectorAll('.item-text');
    const login = document.querySelector('.login');
    const user = document.querySelector('.user');

    if (!header.classList.contains('show')) {
      handleHideElementToExpand(iconSearch);
      const elementsToShow = [header, logo, login, user, search, ...items];
      elementsToShow.map(element => handleAddClassToExpand(element));
    } else {
      handleShowElementToCollapse(iconSearch);
      const elementsToRemoveShow = [header, logo, login, user, search, ...items];
      elementsToRemoveShow.map(element => handleRemoveClassToCollapse(element));

    }
  });

  function handleAddClassToExpand(element) {
    console.log('element', element);
    element.classList.add('show');
  }
  function handleHideElementToExpand(element) {
    element.classList.add('hide');
  }

  function handleRemoveClassToCollapse(element) {
    element.classList.remove('show');
  }
  function handleShowElementToCollapse(element) {
    element.classList.remove('hide');
  }

})()