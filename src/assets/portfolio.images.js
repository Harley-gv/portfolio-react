import pokedex from './portfolio1.jpg'
import morty from './portfolio2.jpg'
import crud from './portfolio3.jpg'

// queda pendiente agregar mas proyectos y adicional agregar imagenes reales de los proyectos ya que actual estan unas de prueba

export default [
    {
        "id": "1",
        "name": "Pokedex",
        "img": pokedex,
        "github": "https://github.com/Harley-gv/pokedex",
        "demo": "https://fluffy-cucurucho-0a139d.netlify.app",
        "description": "web project with react , redux and protected routes consuming pokeapi"
    },

    {
        "id": "2",
        "name": "Rick and Morty",
        "img": morty,
        "github": "https://github.com/Harley-gv/rick_morty_react-app",
        "demo": "https://leafy-lollipop-016390.netlify.app",
        "description": "web project with react , consuming  Rick and Morty API"
    },

    {
        "id": "3", 
        "name": "crud",
        "img": crud,
        "github": "https://github.com/Harley-gv/usuarioscrud",
        "demo": "https://guileless-hotteok-44f8d1.netlify.app",
        "description": "crud interface made with react"
      },

      
     
]