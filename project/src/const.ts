export enum AppRoute {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Room = '/offer/:id',
};

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export const Rating = [1,2,3,4,5]