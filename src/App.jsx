import Books from "./books";
import Header from "./header";
import Footer from "./footer";
const initState = {
  books: [
    {
      id: 1,
      title: "مقدمة ابن خلدون",
      author: "ابن خلدون",
      isbn: "1289499030",
      publishedYear: 1377,
      genre: "History",
      language: "Arabic",
      pages: 480,
      publisher: "Dar Al-Kutub",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/Muqaddimah_Ibn_Khaldun_12.jpg",
    },
    {
      id: 2,
      title: "الحاوي في الطب",
      author: "ابو بكر الرازي",
      isbn: "893847239479",
      publishedYear: 925,
      genre: "Medicine",
      language: "Arabic",
      pages: 600,
      publisher: "Medical Press",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/48/Kitab_al-Hawi_1.jpg",
    },
    {
      id: 3,
      title: "الكتاب المقدس",
      author: "Various Authors",
      isbn: "9780310436008",
      publishedYear: null, // Not applicable for ancient texts
      genre: "Religion",
      language: "Multiple",
      pages: 1500,
      publisher: "Bible Society",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Bible.malmesbury.arp.jpg/800px-Bible.malmesbury.arp.jpg",
    },
    {
      id: 4,
      title: "ألف ليلة وليلة",
      author: "Various Authors",
      isbn: "9780140442892",
      publishedYear: 800,
      genre: "Fiction",
      language: "Arabic",
      pages: 1200,
      publisher: "Penguin Classics",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Arabian_Nights.jpg/800px-Arabian_Nights.jpg",
    },
    {
      id: 5,
      title: "الشعر الجاهلي",
      author: "طه حسين",
      isbn: "9789953446045",
      publishedYear: 1926,
      genre: "Literature",
      language: "Arabic",
      pages: 350,
      publisher: "Dar Al-Maaref",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Taha_Hussein.jpg/800px-Taha_Hussein.jpg",
    },
    {
      id: 6,
      title: "The Muqaddimah: An Introduction to History",
      author: "Ibn Khaldun",
      isbn: "9780691166826",
      publishedYear: 1377,
      genre: "History",
      language: "Arabic",
      pages: 512,
      publisher: "Princeton University Press",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/48/Ibn_Khaldun_Muqaddimah.jpg",
    },
    {
      id: 7,
      title: "Canon of Medicine",
      author: "Avicenna",
      isbn: "9781599150055",
      publishedYear: 1025,
      genre: "Medicine",
      language: "Arabic",
      pages: 850,
      publisher: "Kazi Publications",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/77/Avicenna_Canon.jpg",
    },
    {
      id: 8,
      title: "القرآن الكريم",
      author: "Various",
      isbn: "9780192831934",
      publishedYear: 632,
      genre: "Religion",
      language: "Arabic",
      pages: 604,
      publisher: "Oxford University Press",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Quran_-_Tashkent_-_Uthman_Ibn_Affan_Mashaf_-_Katta_Langar.jpg/800px-Quran_-_Tashkent_-_Uthman_Ibn_Affan_Mashaf_-_Katta_Langar.jpg",
    },
    {
      id: 9,
      title: "The Arabian Nights: Tales of 1001 Nights",
      author: "Husain Haddawy",
      isbn: "9780393331660",
      publishedYear: 800,
      genre: "Fiction",
      language: "Arabic",
      pages: 400,
      publisher: "W.W. Norton & Company",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Arabian_Nights_illustration.jpg/800px-Arabian_Nights_illustration.jpg",
    },
    {
      id: 10,
      title: "ساق البامبو",
      author: "سعود السنعوسي",
      isbn: "9789992142716",
      publishedYear: 2012,
      genre: "Literature",
      language: "Arabic",
      pages: 396,
      publisher: "Arabic Scientific Publishers",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/f/fd/The_Bamboo_Stalk.jpg",
    },
  ],
};

function App() {
  return (
    <>
      <Header />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[85rem] mx-auto my-32 justify-center">
        {initState.books.map(data => {
          return (
            <Books
              title={data.id}
              author={data.author}
              publishedYear={data.publishedYear}
              genre={data.genre}
              language={data.language}
              pages={data.pages}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
