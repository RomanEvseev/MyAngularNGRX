export interface IBook {
    id: string;
    title: string;
    author: string;
    price: number;
    pagecount: number;
    isbn: string;
}
export interface ICart {
    books: IBook[],
    error: string | null
}
export interface AppStateInterface {
    books: ICart;
}
