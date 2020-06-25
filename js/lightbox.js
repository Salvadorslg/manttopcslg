const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorligth = document.querySelector('.imagen-ligth')

imagen.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'))
    })
})

/*contenedorligth.addEventListener('click', (e) => {
    if (e.target !== imagenesLight) {
        contenedorligth.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')

    }
})*/

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen
    contenedorligth.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')

}