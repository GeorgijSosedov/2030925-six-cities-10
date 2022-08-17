
export type Host = {
    avatarUrl: string
    id: number
    name: string
    isPro: boolean

}

export type City = {
    location: Location
    name: string
}

export type Location = {
    latitude: number
    longitude: number
    zoom: number
}

export type MockOffer = {
id: number
images: string[]
title: string
description: string
isPremium: boolean
isFavorite: boolean
type: string
rating: number
bedrooms: number
maxAdults: number
price: number
goods: string[]
previewImage: string
host: Host
city: City
location: Location
}

export type MockReview = {
id: number,
avatarUrl: string
user: string
rating: number
date: string
review: string
}
