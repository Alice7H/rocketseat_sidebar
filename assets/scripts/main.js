(() => {
  const menu = document.querySelector('.menu');
  const iconSearch = document.querySelector('.icon-search');
  const logout = document.querySelector('.login a');

  let interval;

  menu.addEventListener('click', handleExpandSideBar);
  iconSearch.addEventListener('click', handleExpandSideBar);

  function handleExpandSideBar() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const search = document.querySelector('.search');
    const items = document.querySelectorAll('.item-text');
    const login = document.querySelector('.login');
    const user = document.querySelector('.user');

    const elements = [header, logo, login, user, search, ...items];

    elements.map(element => element.classList.toggle('show'));
    iconSearch.classList.toggle('hide');
    delayToMove();

    if (!header.classList.contains('show')) {
      search.tabIndex = -1;
      iconSearch.tabIndex = 0;
      iconSearch.ariaHidden = true;
    } else {
      search.tabIndex = 0;
      iconSearch.tabIndex = -1;
      iconSearch.ariaHidden = false;
    }
  }

  function delayToMove() {
    menu.style.position = 'absolute';
    logout.style.position = 'absolute';
    logout.style.left = '27px';
    interval = setTimeout(() => {
      menu.style.position = 'static';
      logout.style.position = 'static';
    }, 500);
  }
  clearTimeout(interval);
})()