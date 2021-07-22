(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-openz]'),
    closeModalBtn: document.querySelector('[data-modal-closez]'),
    modal: document.querySelector('[data-modalz]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
