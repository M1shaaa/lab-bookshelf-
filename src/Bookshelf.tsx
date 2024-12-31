import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const bookData = [
  {
    id: 1,
    title: "Metazoa: Animal Life and the Birth of the Mind",
    author: "Peter Godfrey-Smith",
    personName: "Aneesa",
    bookCover: "/api/placeholder/180/280",
    personImage: "/api/placeholder/180/280",
    goodreadsUrl: "https://www.goodreads.com/book/show/50403455-metazoa"
  },
  {
    id: 2,
    title: "An Immense World",
    author: "Ed Yong",
    personName: "Junyi",
    bookCover: "/api/placeholder/180/280",
    personImage: "/api/placeholder/180/280",
    goodreadsUrl: "https://www.goodreads.com/book/show/59575939-an-immense-world"
  },
  {
    id: 3,
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    personName: "mish",
    bookCover: "/api/placeholder/180/280",
    personImage: "/api/placeholder/180/280",
    goodreadsUrl: "https://www.goodreads.com/book/show/24113.G_del_Escher_Bach"
  },
  {
    id: 4,
    title: "The Mind's I: Fantasies And Reflections On Self & Soul",
    author: "Douglas Hofstadter & Daniel Dennett",
    personName: "Peter",
    bookCover: "/api/placeholder/180/280",
    personImage: "/api/placeholder/180/280",
    goodreadsUrl: "https://www.goodreads.com/book/show/2081.The_Mind_s_I"
  },
  {
    id: 5,
    title: "In a Different Key: The Story of Autism",
    author: "John Donvan, Caren Zucker",
    personName: "Adani",
    bookCover: "/api/placeholder/180/280",
    personImage: "/api/placeholder/180/280",
    goodreadsUrl: "https://www.goodreads.com/book/show/25430558-in-a-different-key"
  },
  {
    id: 6,
    title: "Naming and Necessity",
    author: "Saul Kripke",
    personName: "Grace",
    bookCover: "/api/placeholder/180/280",
    personImage: "/api/placeholder/180/280",
    goodreadsUrl: "https://www.goodreads.com/book/show/276249.Naming_and_Necessity"
  },
  {
    id: 7,
    title: "Nexus",
    author: "Yuval Noah Harari",
    personName: "Antonia",
    bookCover: "/api/placeholder/180/280",
    personImage: "/api/placeholder/180/280",
    goodreadsUrl: "https://www.goodreads.com/book/show/204927599-nexus"
  },
  {
    id: 8,
    title: "Extremely Online",
    author: "Taylor Lorenz",
    personName: "Aaron",
    bookCover: "/api/placeholder/180/280",
    personImage: "/api/placeholder/180/280",
    goodreadsUrl: "https://www.goodreads.com/book/show/58818667-extremely-online"
  },
  {
    id: 9,
    title: "Romancing the Room",
    author: "James M. Wagstaffe",
    personName: "Kat",
    bookCover: "/api/placeholder/180/280",
    personImage: "/api/placeholder/180/280",
    goodreadsUrl: "https://www.goodreads.com/book/show/1611958.Romancing_the_Room"
  },
  {
    id: 10,
    title: "Algorithms to Live By",
    author: "Brian Christian & Tom Griffiths",
    personName: "Hyo",
    bookCover: "/api/placeholder/180/280",
    personImage: "/api/placeholder/180/280",
    goodreadsUrl: "https://www.goodreads.com/book/show/25666050-algorithms-to-live-by"
  }
];

const Book = ({ book }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-44 h-64 mx-2 mb-4 transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`w-full h-full rounded-lg shadow-lg transition-transform duration-500 transform ${
          isHovered ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Book Cover Side */}
        <div
          className="absolute w-full h-full backface-hidden"
        >
          <img
            src={book.bookCover}
            alt={book.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 rounded-b-lg">
            <p className="text-sm font-semibold truncate">{book.title}</p>
            <p className="text-xs text-gray-300 truncate">{book.author}</p>
          </div>
        </div>

        {/* Person Side */}
        <div
          className="absolute w-full h-full backface-hidden rotate-y-180"
          style={{
            transform: 'rotateY(180deg)',
          }}
        >
          <img
            src={book.personImage}
            alt={book.personName}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 rounded-b-lg">
            <p className="text-sm font-semibold">{book.personName}</p>
            <a 
              href={book.goodreadsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs text-blue-300 hover:text-blue-100"
            >
              View on Goodreads
              <ExternalLink className="ml-1 w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Bookshelf = () => {
  // Calculate number of books per shelf (5 books per shelf)
  const booksPerShelf = 5;
  const shelves = [];
  for (let i = 0; i < bookData.length; i += booksPerShelf) {
    shelves.push(bookData.slice(i, i + booksPerShelf));
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Lab Holiday Reading List 2025</h2>
      {shelves.map((shelf, shelfIndex) => (
        <div key={shelfIndex} className="relative mb-16">
          {/* Wooden shelf background */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-amber-800 rounded"></div>
          
          {/* Books container */}
          <div className="flex justify-center items-end relative z-10 pb-4">
            {shelf.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;