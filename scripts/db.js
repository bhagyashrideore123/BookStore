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
                    "My 8-year-old couldn't put this down! Highly recommend for young adventurers."
            },
            {
                name: "BookwormKid",
                comment:
                    "The talking squirrel was my absolute favorite character!"
            }
        ]
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
                    "Perfect for preschool classrooms. Teaches a lovely lesson about being yourself."
            }
        ]
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
                    "Classic moral stories that I read as a kid, now reading them to my daughter."
            }
        ]
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
                    "Makes complex space concepts so easy and visual for kids to understand."
            }
        ]
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
                    "This has become our go-to book every single night. Very soothing."
            }
        ]
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
                    "Interactive and fun! Trying to solve the puzzle before the end was great."
            }
        ]
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
                    "Extremely empowering! A fantastic read for young girls interested in science."
            }
        ]
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
                    "The poetic rhythm of the words sends my toddler to sleep instantly."
            }
        ]
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
                comment: "The colors in this book are so vivid and beautiful!"
            }
        ]
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
                    "Timeless fables like 'The Tortoise and the Hare' beautifully translated."
            }
        ]
    }
];
