import { User } from "./offer"

export type MockReview = {
    user: User
    id: number
    rating: number
    date: string
    review: string
    }

export type Review = MockReview[]