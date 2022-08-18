import { MockReview } from "../types/types";

export const firstReview: MockReview = {
userId: 1,
userAvatarUrl: 'img/jaden.jpg',
user: 'Jaden',
userRating: 3,
date: "Tue Aug 17 2022 22:53:16 GMT+0500 (Екатеринбург, стандартное время)",
userReview: 'Price does not match expectations. They gave us the wrong number and didnt even apologize.',
}

export const secondReview: MockReview = {
userId: 2,
userAvatarUrl: 'img/pro-100-stas.jpg',
user: 'pro100stas',
userRating: 4,
date: "Tue Aug 17 2022 22:53:16 GMT+0500 (Екатеринбург, стандартное время)",
userReview: 'Nice room, the owner responded quickly and was polite, I liked everything, but the kitchen was a bit dirty', 
}

export const thirdReview: MockReview = {
userId: 3,
userAvatarUrl: 'img/anna.jpg',
user: 'Anna',
userRating: 5,
date: "Tue Aug 17 2022 22:53:16 GMT+0500 (Екатеринбург, стандартное время)",
userReview: 'This is the best place i have ever been',    
}

export const fourthReview: MockReview = {
userId: 4,
userAvatarUrl: 'img/jonathan.jpg',
user: 'Jonathan',
userRating: 1,
date: "Tue Aug 17 2022 22:53:16 GMT+0500 (Екатеринбург, стандартное время)",
userReview: '****,the owner deceived us for money and stopped communicating, dont be fooled',    
}

export const reviews = [firstReview,secondReview,thirdReview,fourthReview]