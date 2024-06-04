const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    btn.style.backgroundColor = '#3D30A2';
    btn.style.boxShadow = '0 0 40px #3D30A2';
    btn.style.transition = '.1s ease';
});