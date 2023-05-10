import 'dotenv/config.js'
import '../../config/database.js'
import { City } from '../city.js'

let cities = [
    {
      id: 1,
      name: "Paris",
      continent: "Europe",
      photo:  "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      population: 2161000,
      userId: 1
    },
    {
      id: 2,
      name: "Tokyo",
      continent: "Asia",
      photo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg",
      population: 13960000,
      userId: 1
    },
    {
      id: 3,
      name: "New York",
      continent: "America",
      photo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg",
      population: 8468000,
      userId: 1
    },
    {
      id: 4,
      name: "Buenos Aires",
      continent: "America",
      photo: "https://upload.wikimedia.org/wikipedia/commons/0/00/ObeliscoBA2015.2.jpg",
      population: 3120612,
      userId: 1
    },
    {
      id: 5,
      name: "Tel Aviv",
      continent: "Asia",
      photo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Skyline_of_Tel_Aviv_%2834324506705%29.jpg",
      population: 435855,
      userId: 1
    },
    {
      id: 6,
      name: "Sydney",
      continent: "Oceania",
      photo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg",
      population: 5312000,
      userId: 1
    },
    {
      id: 7,
      name: "Cape Town",
      continent: "Africa",
      photo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Aerial_View_of_Sea_Point%2C_Cape_Town_South_Africa.jpg",
      population: 4618000,
      userId: 1
    },
    {
      id: 8,
      name: "Quebec",
      continent: "America",
      photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Le_ch%C3%A2teau_Frontenac_Vieux-Qu%C3%A9bec%2C_ville_de_Qu%C3%A9bec%2C_Qu%C3%A9bec.jpg",
      population: 542298,
      userId: 1
    },
    {
      id: 9,
      name: "Santiago",
      continent: "America",
      photo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/J28_293_%C2%BBSanhattan%C2%AB.jpg",
      population: 5614000,
      userId: 1
    },
    {
      id: 10,
      name: "Naples",
      continent: "Europe",
      photo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Napoli_-_piazza_San_Domenico_Maggiore_e_guglia.jpg",
      population: 3085000,
      userId: 1
    },
    {
      id: 11,
      name: "Mallorca",
      continent: "Europe",
      photo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Valldemossa_2003.jpg",
      population: 923608,
      userId: 1
    },
    {
      id: 12,
      name: "Bucarest",
      continent: "Europe",
      photo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hotel_Continental_-_Calea_Victoriei.jpg",
      population: 1830000,
      userId: 1
    },
  ]

City.insertMany(cities)