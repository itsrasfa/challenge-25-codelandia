// menu mobile
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  nav.classList.toggle('ativo')
})


// animação ao scroll
const target = document.querySelectorAll('[data-anime]');
const ativarAnimacao = 'animation';

function animaScroll() {
  const top = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    top > element.offsetTop ? element.classList.add(ativarAnimacao) : element.classList.remove(ativarAnimacao);
  })
}

window.addEventListener('scroll', animaScroll);

// voltar ao topo

const btnBackToTop = document.querySelector(".back-to-top");
btnBackToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", (e) => {
  btnBackToTop.style.display = window.scrollY > 20 ? "block" : "none";
});