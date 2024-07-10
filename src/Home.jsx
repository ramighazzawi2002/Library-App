import Header from "./header";
import Books from "./books";
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
function Home() {
  return (
    <>
      {sessionStorage.getItem("login") ? (
        <div
          id="alert-border-3"
          class="flex w-[80%] left-[50%] translate-x-[-50%] fixed top-4 z-[999] items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
          role="alert"
        >
          <svg
            class="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div class="ms-3 text-sm font-medium">
            {`Welcome ${JSON.parse(sessionStorage.getItem("data")).username}!`}
          </div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
            data-dismiss-target="#alert-border-3"
            aria-label="Close"
            onClick={() => {
              document.getElementById("alert-border-3").style.display = "none";
            }}
          >
            <span class="sr-only">Dismiss</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ) : null}
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

export default Home;
