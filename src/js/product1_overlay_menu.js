(() => {
   const mobileMenu = document.querySelector('.product1-menu-container');
   const openMenuBtn = document.querySelector('.product1-open-menu');
   const closeMenuBtn = document.querySelector('.product1-close-menu');

   const toggleMenu = () => {
      const isMenuOpen =
         openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
   };

   openMenuBtn.addEventListener('click', toggleMenu);
   closeMenuBtn.addEventListener('click', toggleMenu);

   // Закрываем мобильное меню на более широких экранах
   // в случае изменения ориентации устройства.
   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
   });
})();