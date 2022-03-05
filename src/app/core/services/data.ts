import { IArt } from 'src/app/core/models/art';


export const art: IArt[] = [
  {
    id: 1,
    title: 'Clock Pit',
    image: '../../../assets/art-1.jpeg',
    price: 12.55,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quia in aspernatur architecto. Quia, voluptatum?',
    bookmarked: false,
    author: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      userName: '@john_doe'
    },
    reviews: [
      {
        id: 1,
        rating: 4.5,
        comment: 'I love this art, it describe alot of hidden stuff',
        username: '@joe_cole'
      },
      {
        id: 2,
        rating: 4,
        comment: 'Incredible art, I will love to have this at home',
        username: '@helena'
      },
      {
        id: 3,
        rating: 4.5,
        comment: 'Wise art with good colors',
        username: '@blabla'
      }
    ]
  },
  {
    id: 2,
    title: 'Art Wise',
    image: '../../../assets/art-2.jpeg',
    price: 10.55,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quia in aspernatur architecto. Quia, voluptatum?',
    bookmarked: false,
    author: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      userName: '@john_doe'
    },
    reviews: [
      {
        id: 1,
        rating: 4.5,
        comment: 'I love this art, it describe alot of hidden stuff',
        username: '@joe_cole'
      },
      {
        id: 2,
        rating: 4,
        comment: 'Incredible art, I will love to have this at home',
        username: '@helena'
      },
      {
        id: 3,
        rating: 5,
        comment: 'Wise art with good colors',
        username: '@blabla'
      }
    ]
  },
  {
    id: 3,
    title: 'Sifistu',
    image: '../../../assets/art-3.jpeg',
    price: 88.55,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quia in aspernatur architecto. Quia, voluptatum?',
    bookmarked: false,
    author: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      userName: '@john_doe'
    },
    reviews: [
      {
        id: 1,
        rating: 4.5,
        comment: 'I love this art, it describe alot of hidden stuff',
        username: '@joe_cole'
      },
      {
        id: 2,
        rating: 4,
        comment: 'Incredible art, I will love to have this at home',
        username: '@helena'
      },
      {
        id: 3,
        rating: 5,
        comment: 'Wise art with good colors',
        username: '@blabla'
      }
    ]
  },
  {
    id: 4,
    title: '9ja art',
    image: '../../../assets/art-4.jpeg',
    price: 16.5,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quia in aspernatur architecto. Quia, voluptatum?',
    bookmarked: false,
    author: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      userName: '@john_doe'
    },
    reviews: [
      {
        id: 1,
        rating: 4.5,
        comment: 'I love this art, it describe alot of hidden stuff',
        username: '@joe_cole'
      },
      {
        id: 2,
        rating: 4,
        comment: 'Incredible art, I will love to have this at home',
        username: '@helena'
      },
      {
        id: 3,
        rating: 5,
        comment: 'Wise art with good colors',
        username: '@blabla'
      }
    ]
  },
  {
    id: 5,
    title: 'Jazz Love',
    image: '../../../assets/art-5.jpeg',
    price: 120.4,
    bookmarked: false,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quia in aspernatur architecto. Quia, voluptatum?',
    author: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      userName: '@john_doe'
    },
    reviews: [
      {
        id: 1,
        rating: 4.5,
        comment: 'I love this art, it describe alot of hidden stuff',
        username: '@joe_cole'
      },
      {
        id: 2,
        rating: 4,
        comment: 'Incredible art, I will love to have this at home',
        username: '@helena'
      },
      {
        id: 3,
        rating: 5,
        comment: 'Wise art with good colors',
        username: '@blabla'
      }
    ]
  },
  {
    id: 6,
    title: 'Donzzu',
    image: '../../../assets/art-3.jpeg',
    price: 50.3,
    bookmarked: false,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quia in aspernatur architecto. Quia, voluptatum?',
    author: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      userName: '@john_doe'
    },
    reviews: [
      {
        id: 1,
        rating: 4.5,
        comment: 'I love this art, it describe alot of hidden stuff',
        username: '@joe_cole'
      },
      {
        id: 2,
        rating: 4,
        comment: 'Incredible art, I will love to have this at home',
        username: '@helena'
      },
      {
        id: 3,
        rating: 5,
        comment: 'Wise art with good colors',
        username: '@blabla'
      }
    ]
  }
];
