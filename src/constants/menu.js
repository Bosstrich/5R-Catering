import { chickenIMG, lumpiaIMG, pancitIMG, spaghettiIMG } from "../assets"

export const menu = [
      {
        item: 'Pancit Canton Special',
        img: pancitIMG,
        price: 120,
        description: 'Stir-fried egg noodles with pork, shrimp, and vegetables, topped with calamansi.',
        category: 'Noodles',
        isSpicy: false
      },
      {
        item: 'Pinoy-Style Sweet Spaghetti',
        price: 140,
        img: spaghettiIMG,
        description: 'Filipino spaghetti with a sweet-style tomato sauce, ground meat, and hotdog slices, topped with grated cheese.',
        category: 'Pasta',
        isSpicy: false
      },
      {
        item: 'Crispy Lumpiang Shanghai Platter',
        img: lumpiaIMG,
        price: 130,
        description: 'Crispy bite-sized spring rolls filled with seasoned ground pork and vegetables, served with sweet chili sauce.',
        category: 'Appetizer',
        isSpicy: false
      },

]

export const highlightDish = {

    item: 'Spicy Chicken Inasal',
    img: chickenIMG,
    price: 180,
    description: 'Grilled chicken marinated in calamansi, garlic, and chili, served with a spicy twist.',
    category: 'Main Dish',
    isSpicy: true
    
}