import { Rating } from "../const";
import { MockReview } from "../types/review";

export const firstReview: MockReview = {
    id: 1,
    user:{
        avatarUrl: "img/jaden.jpg",
        id: 1,
        isPro: true,
        name:"Jaden",
    },
    rating: 3,
    date: "Tue Aug 17 2022 22:53:16 GMT+0500 (Екатеринбург, стандартное время)",
    review: "Price does not match expectations. They gave us the wrong number and didnt even apologize.",
}

export const secondReview: MockReview = {
    id: 2,
    user: {
        avatarUrl: "img/pro-100-stas.jpg",
        id: 2,
        isPro: false,
        name: "pro100stas",
    },
    rating: 1,
    date: "Tue Aug 17 2022 22:53:16 GMT+0500 (Екатеринбург, стандартное время)",
    review: "Nice room, the owner responded quickly and was polite, I liked everything, but the kitchen was a bit dirty",
}

export const thirdReview: MockReview = {
    id: 3,
    user:{
       avatarUrl: "img/anna.jpg",
       id: 3,
       isPro: true,
       name: "Anna",
    },
    rating: 5,
    date: "Tue Aug 17 2022 22:53:16 GMT+0500 (Екатеринбург, стандартное время)",
    review: "This is the best place I've ever been"
}

export const fourthReview: MockReview = {
    id: 4,
    user:{
        avatarUrl: "img/jonathan.jpg",
        id: 4,
        isPro: false,
        name: "Jonathan",
    },
    rating: 4,
    date: "Tue Aug 17 2022 22:53:16 GMT+0500 (Екатеринбург, стандартное время)",
    review: "****,the owner deceived us for money and stopped communicating, dont be fooled",
}

export const reviews = [firstReview,secondReview,thirdReview,fourthReview]

