import { customerImages } from "../assets"

export const navLinks = [

    {href: '#', label: 'Home', scrollId: "Home"},
    {href: '#Menu', label: 'Menu', scrollId: "Menu"},
    {href: '#About', label: 'About', scrollId: "About"},
    {href: '#Contact', label: 'Contact', scrollId: "Contact"},
]

const swiperConfig = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
};

const testimonials = [
    {
        Name: 'Marko Rubio',
        Photo: customerImages[0],
        Highlight: 'The Best There is',
        Testimony: `I am a foreigner and decided to visit Cagayan de Oro City. Had a good win with our team that needed small
                    celebration, and I called 5R to cater the food for us, and it just blew my expectations. A job well done.`
    },
    {
        Name: 'Ralph Ranyeses',
        Photo: customerImages[1],
        Highlight: 'Very Affordable',
        Testimony: `I was looking on how to celebrate the 40th birthday of my Sister, and 5R got by back. It is super affordable
                    considering my budget, totally worth every peso`

    },
    {
        Name: 'Kalye Irving',
        Photo: customerImages[2],
        Highlight: 'Surprisingly Delicious',
        Testimony: `We hired 5R for our company anniversary, I thought to not expect anything from a small company, but 5R
                    Left me speechless. The chicken, the spaghetti, and especially those lumpias, never tasted anything like it
                    before.`

    }

]

const aboutContent = [
    {
      title: 'About Us',
      text: `At 5R Catering, we believe that great food brings people together.
             Our passion for flavor, presentation, and exceptional service has made us 
             a trusted name in catering events both big and small. Whether it's a corporate 
             gathering, wedding, or an intimate celebration, we strive to create memorable 
             dining experiences for every occasion.`,
    },
    {
      title: 'Our History',
      text: `Founded with a vision to redefine event catering, 5R Catering started as a small 
             family-run operation. Over the years, our dedication to culinary excellence and 
             client satisfaction has allowed us to grow into one of the most sought-after 
             catering services in the region. Our journey is rooted in tradition, elevated 
             by innovation, and driven by the joy of sharing good food.`,
    },
];
export {

    testimonials,
    swiperConfig,
    aboutContent
}