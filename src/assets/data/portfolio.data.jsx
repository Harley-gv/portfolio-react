import pokedex from '../img/portfolio1.jpg'
import morty from '../img/portfolio2.jpg'
import portfolio from '../img/portafolio.png'

// queda pendiente agregar mas proyectos y adicional agregar imagenes reales de los proyectos ya que actual estan unas de prueba

export default [
    {
        "id": "1",
        "name": "Pokedex",
        "img": pokedex,
        "github": "https://github.com/Harley-gv/pokedex",
        "demo": "https://fluffy-cucurucho-0a139d.netlify.app",
        "description": "Proyecto web con React, Redux, Rutas Protegidas y consumiendo pokeAPI "
    },

    {
        "id": "2",
        "name": "Rick and Morty",
        "img": morty,
        "github": "https://github.com/Harley-gv/rick_morty_react-app",
        "demo": "https://leafy-lollipop-016390.netlify.app",
        "description": "Proyecto web con React, usando Axios para consumir la API de Rick and Morty"
    },
    {
        "id": "3",
        "name": "Portafolio Web",
        "img": portfolio,
        "github": "https://github.com/Harley-gv/portfolio-react",
        "demo": "#",
        "description": "Proyecto realizado con React, simulando la data, consumiéndola desde un array"
    },
]