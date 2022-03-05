export interface IArt {
  id?: number | string;
  title: string;
  price: number;
  image: string;
  description?: string;
  bookmarked?: boolean;
  author?: IAuthor;
  reviews?: IReview[];
}

export interface IAuthor {
  id?: number | string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  userName: string;
}

export interface IReview {
  id?: number | string;
  rating: number;
  username: string;
  comment: string;
}
