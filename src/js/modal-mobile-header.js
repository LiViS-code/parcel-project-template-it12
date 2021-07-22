(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-openq]'),
    closeModalBtn: document.querySelector('[data-modal-closeq]'),
    modal: document.querySelector('[data-modalq]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
