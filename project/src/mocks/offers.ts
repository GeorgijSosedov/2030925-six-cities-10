import { MockOffer, Offer } from "../types/offer";



export const offers: Offer = [
    {
id: 1,
images: [
    "https://10.react.pages.academy/static/hotel/8.jpg", 
    "https://10.react.pages.academy/static/hotel/6.jpg",
    "https://10.react.pages.academy/static/hotel/5.jpg",
    "https://10.react.pages.academy/static/hotel/14.jpg",
    "https://10.react.pages.academy/static/hotel/1.jpg",
    "https://10.react.pages.academy/static/hotel/4.jpg",
],
title: 'Beautiful & luxurious hotel at great location',
description: 'Beautiful & luxurious hotel at great location',
isPremium: true,
isFavorite: true,
type: 'Hotel',
rating: 4.37,
bedrooms: 1,
maxAdults: 2,
price: 399,
goods: [
'Wifi',
'Cable TV',
'Heating',
'Breakfast',
'Air Conditioning',
'Bar',
'Parking',
'Gym',
'Pool',
'Jacuzzi'
],
previewImage: "https://10.react.pages.academy/static/hotel/18.jpg",
host: {
    avatarUrl: 'img/avatar-Hotel-La-Lanterne',
    id: 1,
    name: 'Hotel La Lanterne',
    isPro: true,

},
city: {
    location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 10
    },
    name: 'Amsterdam'
},
location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 10,
    }
},
{
    id: 2,
    images: [
    "https://10.react.pages.academy/static/hotel/8.jpg", 
    "https://10.react.pages.academy/static/hotel/6.jpg",
    "https://10.react.pages.academy/static/hotel/5.jpg",
    "https://10.react.pages.academy/static/hotel/14.jpg",
    "https://10.react.pages.academy/static/hotel/1.jpg",
    "https://10.react.pages.academy/static/hotel/4.jpg",
],
    title: 'Beautiful room at great location',
    description: 'Beautiful room at great location',
    isPremium: false,
    isFavorite: false,
    type: 'room',
    rating: 3.49,
    bedrooms: 2,
    maxAdults: 4,
    price: 170,
    goods: ['wifi', 'Cable TV', 'heating','kitchen',],
    previewImage: "https://10.react.pages.academy/static/hotel/18.jpg",
    host: {
        avatarUrl: 'img/avatar-jane.jpg',
        id: 2,
        name: 'Jane',
        isPro: false,
    
    },
    city: {
        location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 10,
        },
        name: 'Amsterdam'
    },
    location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 10,
        }
    },
{
    id: 3,
    images: [
    "https://10.react.pages.academy/static/hotel/8.jpg", 
    "https://10.react.pages.academy/static/hotel/6.jpg",
    "https://10.react.pages.academy/static/hotel/5.jpg",
    "https://10.react.pages.academy/static/hotel/14.jpg",
    "https://10.react.pages.academy/static/hotel/1.jpg",
    "https://10.react.pages.academy/static/hotel/4.jpg",
],
    title: 'Beautiful apartments at great location',
    description: 'Beautiful apartments at great location',
    isPremium: true,
    isFavorite: true,
    type: 'Apartments',
    rating: 4.9,
    bedrooms: 4,
    maxAdults: 16,
    price: 700,
    goods: [
    'Wifi',
    'Cable TV',
    'Heating',
    'Kitchen',
    'Pool',
    'Gold Toilet',
    'Dungeon Master',
    ],
    previewImage: "https://10.react.pages.academy/static/hotel/18.jpg",
    host: {
        avatarUrl: 'img/avatar-tretiy-trest.jpg',
        id: 3,
        name: 'Tretiy Trest',
        isPro: true,
    
    },
    city: {
        location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10,
        },
        name: 'Amsterdam'
    },
    location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10,
        }
    },

{
    id: 4,
    images: [
    "https://10.react.pages.academy/static/hotel/8.jpg", 
    "https://10.react.pages.academy/static/hotel/6.jpg",
    "https://10.react.pages.academy/static/hotel/5.jpg",
    "https://10.react.pages.academy/static/hotel/14.jpg",
    "https://10.react.pages.academy/static/hotel/1.jpg",
    "https://10.react.pages.academy/static/hotel/4.jpg",
],
    title: 'Beautiful house at great location',
    description: 'Beautiful house at great location',
    isPremium: true,
    isFavorite: true,
    type: 'House',
    rating: 2.7,
    bedrooms: 2,
    maxAdults: 5,
    price: 300,
    goods: [
    'Wifi',
    'Cable TV',
    'Kitchen',
    ],
    previewImage: "https://10.react.pages.academy/static/hotel/18.jpg",
    host: {
        avatarUrl: 'img/bbno$.jpg',
        id: 4,
        name: 'bbno$',
        isPro: false,
    
    },
    city: {
        location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10,
        },
        name: 'Amsterdam'
    },
    location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10,
        }
}
]







/*
export const firstOffer: MockOffer = {
id: 1,
images: [
    "https://10.react.pages.academy/static/hotel/8.jpg", 
    "https://10.react.pages.academy/static/hotel/6.jpg",
    "https://10.react.pages.academy/static/hotel/5.jpg",
    "https://10.react.pages.academy/static/hotel/14.jpg",
    "https://10.react.pages.academy/static/hotel/1.jpg",
    "https://10.react.pages.academy/static/hotel/4.jpg",
],
title: 'Beautiful & luxurious hotel at great location',
description: 'Beautiful & luxurious hotel at great location',
isPremium: true,
isFavorite: true,
type: 'Hotel',
rating: 4.37,
bedrooms: 1,
maxAdults: 2,
price: 399,
goods: [
'Wifi',
'Cable TV',
'Heating',
'Breakfast',
'Air Conditioning',
'Bar',
'Parking',
'Gym',
'Pool',
'Jacuzzi'
],
previewImage: "https://10.react.pages.academy/static/hotel/18.jpg",
host: {
    avatarUrl: 'img/avatar-Hotel-La-Lanterne',
    id: 1,
    name: 'Hotel La Lanterne',
    isPro: true,

},
city: {
    location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 10
    },
    name: 'Amsterdam'
},
location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 10,
    }
}

export const secondOffer: MockOffer = {
    id: 2,
    images: [
    "https://10.react.pages.academy/static/hotel/8.jpg", 
    "https://10.react.pages.academy/static/hotel/6.jpg",
    "https://10.react.pages.academy/static/hotel/5.jpg",
    "https://10.react.pages.academy/static/hotel/14.jpg",
    "https://10.react.pages.academy/static/hotel/1.jpg",
    "https://10.react.pages.academy/static/hotel/4.jpg",
],
    title: 'Beautiful room at great location',
    description: 'Beautiful room at great location',
    isPremium: false,
    isFavorite: false,
    type: 'room',
    rating: 3.49,
    bedrooms: 2,
    maxAdults: 4,
    price: 170,
    goods: ['wifi', 'Cable TV', 'heating','kitchen',],
    previewImage: "https://10.react.pages.academy/static/hotel/18.jpg",
    host: {
        avatarUrl: 'img/avatar-jane.jpg',
        id: 2,
        name: 'Jane',
        isPro: false,
    
    },
    city: {
        location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 10,
        },
        name: 'Amsterdam'
    },
    location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 10,
        }
    }

export const thirdOffer: MockOffer = {
    id: 3,
    images: [
    "https://10.react.pages.academy/static/hotel/8.jpg", 
    "https://10.react.pages.academy/static/hotel/6.jpg",
    "https://10.react.pages.academy/static/hotel/5.jpg",
    "https://10.react.pages.academy/static/hotel/14.jpg",
    "https://10.react.pages.academy/static/hotel/1.jpg",
    "https://10.react.pages.academy/static/hotel/4.jpg",
],
    title: 'Beautiful apartments at great location',
    description: 'Beautiful apartments at great location',
    isPremium: true,
    isFavorite: true,
    type: 'Apartments',
    rating: 4.9,
    bedrooms: 4,
    maxAdults: 16,
    price: 700,
    goods: [
    'Wifi',
    'Cable TV',
    'Heating',
    'Kitchen',
    'Pool',
    'Gold Toilet',
    'Dungeon Master',
    ],
    previewImage: "https://10.react.pages.academy/static/hotel/18.jpg",
    host: {
        avatarUrl: 'img/avatar-tretiy-trest.jpg',
        id: 3,
        name: 'Tretiy Trest',
        isPro: true,
    
    },
    city: {
        location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10,
        },
        name: 'Amsterdam'
    },
    location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10,
        }
    }

export const fourthOffer: MockOffer = {
    id: 4,
    images: [
    "https://10.react.pages.academy/static/hotel/8.jpg", 
    "https://10.react.pages.academy/static/hotel/6.jpg",
    "https://10.react.pages.academy/static/hotel/5.jpg",
    "https://10.react.pages.academy/static/hotel/14.jpg",
    "https://10.react.pages.academy/static/hotel/1.jpg",
    "https://10.react.pages.academy/static/hotel/4.jpg",
],
    title: 'Beautiful house at great location',
    description: 'Beautiful house at great location',
    isPremium: true,
    isFavorite: true,
    type: 'House',
    rating: 2.7,
    bedrooms: 2,
    maxAdults: 5,
    price: 300,
    goods: [
    'Wifi',
    'Cable TV',
    'Kitchen',
    ],
    previewImage: "https://10.react.pages.academy/static/hotel/18.jpg",
    host: {
        avatarUrl: 'img/bbno$.jpg',
        id: 4,
        name: 'bbno$',
        isPro: false,
    
    },
    city: {
        location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10,
        },
        name: 'Amsterdam'
    },
    location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10,
        }
}
*/