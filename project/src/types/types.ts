export type Host = {
    avatarUrl: string
    hostId: number
    hostName: string
    isPro: boolean

}

export type City = {
    cityLocation: Location
    cityName: string
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
userId: number,
userAvatarUrl: string
user: string
userRating: number
date: string
userReview: string
}

export type Offer = MockOffer

export type Offers = Offer[]

export type Review = MockReview

export type Reviews = Review[]
