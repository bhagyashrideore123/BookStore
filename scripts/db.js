// let books = [
//     {
//         name: "Mrityunjay (मृत्युंजय)",
//         path: "./assets/img/books/mrutunjay.png",
//         author: "Shivaji Sawant",
//         likes: 4850,
//         liked: true,
//         price: "25.00€",
//         publishedYear: 1967,
//         genre: "Historical Fiction",
//         comments: [
//             {
//                 name: "MarathiReader_99",
//                 comment:
//                     "An absolute masterpiece. The way Karna's perspective and pain are portrayed is unparalleled.",
//             },
//             {
//                 name: "BookLoverPune",
//                 comment:
//                     "Shivaji Sawant's writing style keeps you hooked from the very first page. A must-read classic!",
//             },
//             {
//                 name: "BookLoverPune",
//                 comment:
//                     "Shivaji Sawant's writing style keeps you hooked from the very first page. A must-read classic!",
//             },
//             {
//                 name: "BookLoverPune",
//                 comment:
//                     "Shivaji Sawant's writing style keeps you hooked from the very first page. A must-read classic!",
//             }
//         ],
//     },
//     {
//         name: "Yayati (ययाति)",
//         path: "./assets/img/books/yayati.png",
//         author: "V. S. Khandekar",
//         likes: 4200,
//         liked: false,
//         price: "18.50€",
//         publishedYear: 1959,
//         genre: "Philosophical Fiction",
//         comments: [
//             {
//                 name: "SahityaPremi",
//                 comment:
//                     "Deservedly won the Jnanpith Award. It's a deep dive into human greed, desire, and spirituality.",
//             },
//         ],
//     },
//     {
//         name: "Kosla (कोसला)",
//         path: "./assets/img/books/kosla.png",
//         author: "Bhalchandra Nemade",
//         likes: 3100,
//         liked: true,
//         price: "12.00€",
//         publishedYear: 1963,
//         genre: "Existential Novel",
//         comments: [
//             {
//                 name: "Chaitanya_K",
//                 comment:
//                     "Pandurang Sangvikar's existential crisis is so raw and ahead of its time. Changed Marathi literature forever.",
//             },
//         ],
//     },
//     {
//         name: "Batatyachi Chal (बटाट्याची चाळ)",
//         path: "./assets/img/books/batatyachi_chal.png",
//         author: "P. L. Deshpande (Pu. La.)",
//         likes: 5600,
//         liked: true,
//         price: "15.00€",
//         publishedYear: 1958,
//         genre: "Humor / Satire",
//         comments: [
//             {
//                 name: "PuLa_Fan",
//                 comment:
//                     "Pure nostalgia and brilliant humor. Pu. La. Deshpande's observational comedy is timeless!",
//             },
//             {
//                 name: "Mumbaikar_Read",
//                 comment:
//                     "Hilarious portrayal of chawl life in Mumbai. I laughed out loud so many times.",
//             },
//         ],
//     },
//     {
//         name: "Shyamchi Aai (श्यामची आई)",
//         path: "./assets/img/books/shyamchi_aai.png",
//         author: "Sane Guruji",
//         likes: 6200,
//         liked: true,
//         price: "8.50€",
//         publishedYear: 1953,
//         genre: "Drama / Biography",
//         comments: [
//             {
//                 name: "SanskarKatha",
//                 comment:
//                     "Every child and parent should read this. Beautiful, moving stories about a mother's teachings.",
//             },
//         ],
//     },
//     {
//         name: "Natsamrat (नटसम्राट)",
//         path: "./assets/img/books/natsamrat.png",
//         author: "V. V. Shirwadkar (Kusumagraj)",
//         likes: 3900,
//         liked: false,
//         price: "10.99€",
//         publishedYear: 1970,
//         genre: "Tragedy Drama",
//         comments: [
//             {
//                 name: "TheatreGeek",
//                 comment:
//                     "The dialogues are poetic and powerful. It perfectly captures the tragic downfall of a great actor."
//             }
//         ]
//     },
//     {
//         name: "Duniyadari (दुनियादारी)",
//         path: "./assets/img/books/duniyadari.png",
//         author: "Suhas Shirvalkar",
//         likes: 2800,
//         liked: false,
//         price: "14.00€",
//         publishedYear: 1980,
//         genre: "Drama / Romance",
//         comments: [
//             {
//                 name: "CollegeDays",
//                 comment:
//                     "A fantastic story about friendship, love, and college life that resonates across generations.",
//             },
//         ],
//     },
//     {
//         name: "Musafir (मुसाफिर)",
//         path: "./assets/img/books/musafir.png",
//         author: "Achyut Godbole",
//         likes: 3400,
//         liked: true,
//         price: "16.50€",
//         publishedYear: 2011,
//         genre: "Autobiography",
//         comments: [
//             {
//                 name: "InspireMe",
//                 comment:
//                     "Incredibly inspiring journey of struggle, resilience, and ultimate success. Highly recommended.",
//             },
//         ],
//     }
// ];
let books = [
    {
        id: 1,
        name: "The Secret of the Whispering Woods",
        description:"Join young adventurers on a journey through an enchanted, magical forest. Discover deep mysteries hidden among the ancient trees and meet a very special, talking squirrel who helps guide the way in this charming, must-read story.",
        path: "./assets/img/books/book1.png",
        author: "Elena Rostov",
        likes: 1250,
        liked: true,
        price: "9.99€",
        publishedYear: 2021,
        genre: "Fiction",
        subcategory: "Adventure & Mystery",
        subcategoryId: 1,
        comments: [
            {
                name: "ParentJoy",
                comment:
                    "My 8-year-old couldn't put this down! Highly recommend for young adventurers.",
            },
            {
                name: "BookwormKid",
                comment:
                    "The talking squirrel was my absolute favorite character!",
            },
        ],
    },
    {
        id: 2,
        name: "The Little Bear Who Lost His Roar",
        description:"Every little bear needs their roar, but what happens when it goes missing? This heartwarming tale teaches preschoolers the value of self-acceptance. It is a gentle, sweet story that encourages children to always be proud of who they are.",
        path: "./assets/img/books/book2.png",
        author: "Marcus Sterling",
        likes: 2300,
        liked: false,
        price: "7.50€",
        publishedYear: 2018,
        genre: "Fiction",
        subcategory: "Fairy Tales & Fables",
        subcategoryId: 2,
        comments: [
            {
                name: "KinderTeacher",
                comment:
                    "Perfect for preschool classrooms. Teaches a lovely lesson about being yourself.",
            },
        ],
    },
    {
        id: 3,
        name: "Panchatantra Tales",
        description:"Dive into a timeless collection of classic moral stories that have been cherished for generations. Originally written by Vishnu Sharma, these fables offer wisdom, wit, and valuable life lessons, making them a perfect addition to any family's bedtime routine.",
        path: "./assets/img/books/book3.png",
        author: "Vishnu Sharma",
        likes: 4500,
        liked: true,
        price: "12.00€",
        publishedYear: 2015,
        genre: "Folklore",
        subcategory: "Fairy Tales & Fables",
        subcategoryId: 2,
        comments: [
            {
                name: "Rohan_M",
                comment:
                    "Classic moral stories that I read as a kid, now reading them to my daughter.",
            },
        ],
    },
    {
        id: 4,
        name: "Why Do Stars Twinkle?",
        description:"Have you ever looked up at the night sky and wondered about the stars? This non-fiction guide makes complex space concepts simple and fun. With vivid, beautiful visuals, it helps curious young minds understand the science behind our universe.",
        path: "./assets/img/books/book4.png",
        author: "Dr. Anita Nair",
        likes: 890,
        liked: false,
        price: "14.99€",
        publishedYear: 2023,
        genre: "Non-Fiction",
        subcategory: "Science & Nature",
        subcategoryId: 3,
        comments: [
            {
                name: "CuriousMind",
                comment:
                    "Makes complex space concepts so easy and visual for kids to understand.",
            },
        ],
    },
    {
        id: 5,
        name: "Goodnight, Little Cloud",
        description:"Drift off into a peaceful dreamland with this soothing bedtime story. Designed specifically for quiet moments, its gentle tone and rhythmic flow make it the perfect companion for winding down after a busy, exciting day of play.",
        path: "./assets/img/books/book5.png",
        author: "Sarah Jenkins",
        likes: 3100,
        liked: true,
        price: "8.99€",
        publishedYear: 2020,
        genre: "Fiction",
        subcategory: "Bedtime Stories",
        subcategoryId: 4,
        comments: [
            {
                name: "SleepyTimeParent",
                comment:
                    "This has become our go-to book every single night. Very soothing.",
            },
        ],
    },
    {
        id: 6,
        name: "The Mystery of The Missing Toy",
        description:"Put on your detective hat and get ready to solve a mystery! This interactive adventure invites young readers to help track down a lost treasure. With puzzles on every page, it keeps kids engaged from the very beginning to the end.",
        path: "./assets/img/books/book6.png",
        author: "David Clues",
        likes: 1540,
        liked: false,
        price: "10.50€",
        publishedYear: 2022,
        genre: "Fiction",
        subcategory: "Adventure & Mystery",
        subcategoryId: 1,
        comments: [
            {
                name: "SuperSleuth",
                comment:
                    "Interactive and fun! Trying to solve the puzzle before the end was great.",
            },
        ],
    },
    {
        id: 7,
        name: "The Girl Who Built a Rocket",
        description:"Meet an inspiring young girl with big dreams and an even bigger imagination. This empowering story celebrates curiosity and creativity, making it a fantastic, motivating read for any child interested in science, technology, and engineering.",
        path: "./assets/img/books/book7.png",
        author: "Dr. Lisa Singh",
        likes: 1890,
        liked: true,
        price: "13.25€",
        publishedYear: 2024,
        genre: "Non-Fiction",
        subcategory: "Science & Nature",
        subcategoryId: 3,
        comments: [
            {
                name: "STEM_Mom",
                comment:
                    "Extremely empowering! A fantastic read for young girls interested in science.",
            },
        ],
    },
    {
        id: 8,
        name: "The Sleepy Dragon's Lullaby",
        description:"Even dragons need to sleep, and this one has the perfect song to help him do it. With its soft, poetic rhythm, this enchanting book is specially crafted to help toddlers calm down and fall into a deep, restful sleep.",
        path: "./assets/img/books/book8.png",
        author: "Oliver Reed",
        likes: 2750,
        liked: false,
        price: "9.00€",
        publishedYear: 2019,
        genre: "Fiction",
        subcategory: "Bedtime Stories",
        subcategoryId: 4,
        comments: [
            {
                name: "DreamyNights",
                comment:
                    "The poetic rhythm of the words sends my toddler to sleep instantly.",
            },
        ],
    },
    {
        id: 9,
        name: "The Caterpillar's Big Adventure",
        description:"Follow a tiny caterpillar on his grand journey through the garden. This story is brought to life with stunning, vivid illustrations that capture the magic of nature, showing that even the smallest creatures can have the biggest adventures.",
        path: "./assets/img/books/book9.png",
        author: "Isabelle Dubois",
        likes: 1980,
        liked: true,
        price: "6.99€",
        publishedYear: 2021,
        genre: "Fiction",
        subcategory: "Fairy Tales & Fables",
        subcategoryId: 2,
        comments: [
            {
                name: "ArtTeacher_Lucy",
                comment: "The colors in this book are so vivid and beautiful!",
            },
        ],
    },
    {
        id: 10,
        name: "Fables of Aesop",
        path: "./assets/img/books/book10.png",
        description:"Explore a beautifully translated collection of essential, timeless fables. From 'The Tortoise and the Hare' to other classic tales, these stories provide moral guidance and entertainment, serving as a foundational part of every young reader's library.",
        author: "Oliver Reed",
        likes: 3800,
        liked: false,
        price: "11.50€",
        publishedYear: 2016,
        genre: "Folklore",
        subcategory: "Fairy Tales & Fables",
        subcategoryId: 2,
        comments: [
            {
                name: "HeritageBooks",
                comment:
                    "Timeless fables like 'The Tortoise and the Hare' beautifully translated.",
            },
        ],
    },
];
