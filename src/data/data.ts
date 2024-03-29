import type { Photo } from "@/models/Photo.model.ts";
import type { GalleryInformation } from "@/models/GalleryInformation.model.ts";

const photos: Photo[] = [
  {
    id: "1",
    url: "https://images7.alphacoders.com/886/886915.jpg",
    alt: "Waterfall in the forest",
    description: "Waterfall in the forest"
  },
  {
    id: "2",
    url: "https://images4.alphacoders.com/869/86994.jpg",
    alt: "Easter Island (Rapa Nui)",
    description: "Picture of a Moai in Easter Island (Rapa Nui)"
  },
  {
    id: "3",
    url: "https://images7.alphacoders.com/546/546378.jpg",
    alt: "Santiago",
    description: "Picture of Santiago"
  },
  {
    id: "4",
    url: "https://plus.unsplash.com/premium_photo-1671211756361-2c2396dd245e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cactus",
    description: "Cactus in Atacama desert"
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1612712191126-863ff61b57d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Puente rojo",
    description: "Picture of Puente Rojo in Panguipulli, Chile"
  },
  {
    id: "6",
    url: "https://plus.unsplash.com/premium_photo-1671211754323-456e3f317879?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Llamas en atacama",
    description: "Picture of Llamas in Atacama desert"
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1566110980915-b04ffd619fca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Castle in Viña del mar",
    description: "Castle in Viña del mar, Chile"
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1517956918805-bbacc31d5f81?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Valparaiso",
    description: "Picture of Valparaiso, Chile"
  },
  {
    id: "9",
    url: "https://images.unsplash.com/photo-1490782300182-697b80ad4293?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Colorful Houses",
    description: "Picture of colorful Houses in Valparaiso, Chile"
  },
  {
    id: "10",
    url: "https://images.unsplash.com/photo-1707234105386-eba98ae0efe3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Llamas walking on the street",
    description: "Picture of Llamas walking on the highway in Atacama desert, Chile"
  },
  {
    id: "11",
    url: "https://images.unsplash.com/photo-1578704410892-86dbdab9b4e8?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Puerto Varas",
    description: "Picture of Puerto Varas, Chile"
  },
  {
    id: "12",
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/40/9f/38/salto-de-la-leona.jpg?w=1200&h=1200&s=1",
    alt: "Las 7 Tazas",
    description: "Picture of Las 7 Tazas, Chile"
  },
  {
    id: "13",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Plaza_de_Armas_Linares_Imagen_006.jpg",
    alt: "Plaza Linares",
    description: "Picture of de Armas Linares, Chile"
  },
  {
    id: "14",
    url: "https://images.unsplash.com/photo-1478827387698-1527781a4887?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Torres del Paine",
    description: "Picture of Torres del Paine, Chile"
  },
  {
    id: "15",
    url: "https://images.unsplash.com/photo-1583813365826-eb578f8bd5a3?q=80&w=2109&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Easter Island (Rapa Nui)",
    description: "Picture of Rano Kau, Hanga Roa, Isla de Pascua, Chile, Chile"
  },



]



export const galleryInformation: GalleryInformation = {
  title: "Chile Photography",
  photos: photos
};