// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const modal_btn = document.getElementById('modal_btn')
// //const overlay = document.getElementById('overlay')
// const overlay = document.getElementById('overlay')

//   modal_btn.addEventListener('click', () => {
//   console.log("blu");
//   fetch('artifacts_data.json')
// .then(response => response.json())
// .then(data => {
//     var artifact = data.artifacts[modal_btn.id];
//             document.getElementById("modal").insertAdjacentHTML('beforeend',`<div class="modal-header">
//     <div class="title">Example Modal</div>
//     <button data-close-button class="close-button">&times;</button>
// </div>
// <div class="modal-body">
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod alias ut illo doloremque eum ipsum obcaecati distinctio debitis reiciendis quae quia soluta totam doloribus quos nesciunt necessitatibus, consectetur quisquam accusamus ex, dolorum, dicta vel? Nostrum voluptatem totam, molestiae rem at ad autem dolor ex aperiam. Amet assumenda eos architecto, dolor placeat deserunt voluptatibus tenetur sint officiis perferendis atque! Voluptatem maxime eius eum dolorem dolor exercitationem quis iusto totam! Repudiandae nobis nesciunt sequi iure! Eligendi, eius libero. Ex, repellat sapiente!
// </div>`);
//       openModal(modal)
//         }
//       );
//     });
// /**/
// overlay.addEventListener('click', () => {
//   const modal = document.querySelector('.modal.active')
//     closeModal(modal)
//   })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal')
//     closeModal(modal)
//   })
// })

// function openModal(modal) {
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }

// function closeModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }