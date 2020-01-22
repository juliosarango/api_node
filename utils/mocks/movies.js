const moviesMock = 
[
  {
    "id": "fd13fac6-9245-4cf3-9639-ceb283bc9d35",
    "title": "I'm Not There",
    "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "year": 2006,
    "cover": "http://dummyimage.com/187x211.png/dddddd/000000",
    "contentRating": "R",
    "source": "http://cam.ac.uk/ut/mauris.xml",
    "tags": [
      "Comedy|Drama",
      "Crime|Drama|Mystery",
      "Drama",
      "Crime|Drama",
      "Action|Adventure|Comedy|Crime|Fantasy"
    ]
  },
  {
    "id": "bd8ee2fc-de4b-4b3c-a696-c8c05f92aa14",
    "title": "Art of Flight, The",
    "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "year": 2007,
    "cover": "http://dummyimage.com/100x218.bmp/dddddd/000000",
    "contentRating": "PG-13",
    "source": "http://pagesperso-orange.fr/duis.json",
    "tags": [
      "Comedy|Drama",
      "Documentary"
    ]
  },
  {
    "id": "8036ab71-8acb-4da9-8f4b-b5344db662ee",
    "title": "Unbreakable",
    "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    "year": 2008,
    "cover": "http://dummyimage.com/165x146.png/dddddd/000000",
    "contentRating": "NC-17",
    "source": "https://washingtonpost.com/nunc/donec/quis/orci/eget/orci/vehicula.jsp",
    "tags": [
      "Romance|Western",
      "Drama|Horror|Thriller",
      "Action|Adventure|Fantasy"
    ]
  },
  {
    "id": "1c08996c-dad3-4f9b-b46d-db022837aa86",
    "title": "Jawbreaker",
    "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "year": 1997,
    "cover": "http://dummyimage.com/238x184.png/5fa2dd/ffffff",
    "contentRating": "R",
    "source": "http://unc.edu/nisi/at.xml",
    "tags": [
      "Crime|Horror",
      "Drama",
      "Drama",
      "Adventure|Comedy|Romance"
    ]
  },
  {
    "id": "8eb6e2d1-a4f5-4971-9a1f-c7a9f3ee9a23",
    "title": "Against The Sun",
    "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "year": 2004,
    "cover": "http://dummyimage.com/187x175.bmp/dddddd/000000",
    "contentRating": "NC-17",
    "source": "http://geocities.jp/pede.jsp",
    "tags": [
      "Drama|Romance",
      "Comedy|Romance",
      "Drama",
      "Drama"
    ]
  },
  {
    "id": "a0756b8e-f840-4cfc-bb6f-b193e9d7f129",
    "title": "Advanced Style",
    "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "year": 2002,
    "cover": "http://dummyimage.com/211x104.jpg/dddddd/000000",
    "contentRating": "NC-17",
    "source": "https://ask.com/in/quis/justo/maecenas/rhoncus.jsp",
    "tags": [
      "Comedy|Crime|Mystery|Thriller"
    ]
  },
  {
    "id": "f689332f-86c4-41bf-aef2-3459e44a78ae",
    "title": "Ajami",
    "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "year": 2012,
    "cover": "http://dummyimage.com/108x117.png/dddddd/000000",
    "contentRating": "PG",
    "source": "https://mashable.com/quis/libero/nullam/sit/amet/turpis.json",
    "tags": [
      "Crime|Drama",
      "Adventure|Western",
      "Drama",
      "Adventure",
      "Crime|Drama"
    ]
  },
  {
    "id": "7cea50b5-b657-45ee-8a5a-56ec8a6998cb",
    "title": "Bedrooms & Hallways",
    "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    "year": 1989,
    "cover": "http://dummyimage.com/104x160.bmp/cc0000/ffffff",
    "contentRating": "PG-13",
    "source": "http://ucla.edu/at/nulla/suspendisse/potenti/cras/in.aspx",
    "tags": [
      "Comedy|Horror|Thriller",
      "Comedy",
      "Drama"
    ]
  },
  {
    "id": "2cec007f-883b-4de7-8492-2c5b801633d9",
    "title": "Tarzan's Greatest Adventure",
    "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    "year": 1998,
    "cover": "http://dummyimage.com/191x104.jpg/ff4444/ffffff",
    "contentRating": "PG",
    "source": "https://slate.com/consequat/metus/sapien/ut/nunc/vestibulum/ante.js",
    "tags": [
      "Drama|Fantasy",
      "Comedy",
      "Drama|Horror|Thriller",
      "Drama"
    ]
  },
  {
    "id": "cbdd1ba4-dead-46cb-ac49-8bb6fbb348cc",
    "title": "Clint Eastwood: Out of the Shadows",
    "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    "year": 2013,
    "cover": "http://dummyimage.com/238x143.jpg/5fa2dd/ffffff",
    "contentRating": "PG",
    "source": "http://behance.net/eu/felis/fusce.jsp",
    "tags": [
      "Action|Crime|Mystery|Sci-Fi|Thriller"
    ]
  }
]
module.exports = {
  moviesMock
}

