const butOpenRef = document.querySelectorAll('.modal-show');
// const butCloseRef = document.querySelectorAll('.modal-close');
const modalWrapRef = document.querySelectorAll('.modal-wrap');

// const escOnKeyDouwnRef = window;
// const escOnKeyDouwnRef = (document.onkeydown = (event) => {
//   console.log(event);
//   if (event.keyCode === 27) {
//     clickMouseOpenModalRef.forEach((element) => {
//       element.classList.toggle('hide');
//       console.log(element.children);
//       element.children[0].classList.toggle('hide');
//     });
//   }
// });

// console.log(butOpenRef);

// console.log(escOnKeyDouwnRef);
// escOnKeyDouwnRef.addEventListener('keydown', closeModalWindowWithEsc);

function closeModalWindowWithEsc() {
  //   console.log('start');
  window.addEventListener(
    'keydown',
    (event) => {
      closePressEsc(event);
    },
    { once: true }
  );
}

function closePressEsc(event) {
  //   console.log('start 2');
  //   console.log(event);
  //   console.log(modalWrapRef[0].classList.value === 'modal-wrap');
  if (
    event.keyCode === 27 &&
    modalWrapRef[0].classList.value === 'modal-wrap'
  ) {
    const modalRef = document.querySelectorAll('.modal-wrap');
    // modalRef[0].parentElement.classList.toggle('hide');
    modalRef[0].classList.toggle('hide');
    // console.log(modalRef);
  }
}

function closeModal() {
  modalWrapRef.forEach((element) => {
    // console.log(element);
    element.classList.toggle('hide');
  });
  closeModalWindowWithEsc();
}

butOpenRef.forEach((element) => (element.onclick = closeModal));
modalWrapRef.forEach((element) => (element.onclick = closeModal));
