const { Product } = require('../models');

const productData = [
  // latin america
  {
    name: 'Palito de Coco',
    price: 2.5,
    stock: 50,
    origin_country: 'Dominican Republic',
    description: 'A coconut and caramel flavored lollipop wrapped in colorful cellophane',
    region_id: 1,
  },
  {
    name: 'Dori Amendoim',
    price: 3.49,
    stock: 51,
    origin_country: 'Mexico',
    description: 'Candy coated peanuts',
    region_id: 1,
  },
  {
    name: 'Galak',
    price: 4.0,
    stock: 25,
    origin_country: 'Ecuador',
    description: 'These white chocolate bars are famous for their milky, melt in your mouth quality.',
    region_id: 1,
  },
  {
    name: 'Fandango Cereal Snack',
    price: 1.5,
    stock: 19,
    origin_country: 'Mexico',
    description: 'Did you know that cereal makes the perfect afternoon snack?',
    region_id: 1,
  },
  {
    name: 'Ajonjoli',
    price: 5.0,
    stock: 20,
    origin_country: 'Puerto Rico',
    description:
      'Imagine a mild and crunchy combination of sesame seeds and honey taking over your mouth and youll understand why these Puerto Rican snack bites are so popular.',
    region_id: 1,
  },
  {
    name: 'Galletas Doña Pepa',
    price: 6.0,
    stock: 30,
    origin_country: 'Peru',
    description:
      'These simple vanilla cookies with a chocolate coating were created in tribute to the classic ~turrón de Doña Pepa~, a beloved pastry that has found its match in these less complicated, but crazy addictive treats! ',
    region_id: 1,
  },
  {
    name: 'Lacta Bis Wafers',
    price: 2.99,
    stock: 22,
    origin_country: 'Mexico',
    description: 'Crunchy, sweet, delectable wafers for the whole family! ',
    region_id: 1,
  },
  {
    name: 'Doce De Leite Bites',
    price: 3.99,
    stock: 44,
    origin_country: 'Mexico',
    description: 'Caramel bites to satisify to satisify your cravings',
    region_id: 1,
  },
  // asia
  {
    name: 'Tikka Masala Corn Chips',
    price: 5.0,
    stock: 40,
    origin_country: 'India',
    description: 'Think Doritos... but tikka masala flavored',
    region_id: 2,
  },
  {
    name: 'Chicken Larb Flavored Seaweed Chips',
    price: 4.5,
    stock: 15,
    origin_country: 'Thailand',
    description: 'Crisp Thai seaweed with spicy chicken flavor.',
    region_id: 2,
  },
  {
    name: 'Mokomoko Mokolet Candy Toilet',
    price: 6.0,
    stock: 20,
    origin_country: 'Japan',
    description:
      ' Have you ever woke up one day and thought to yourself, what if I could eat a flavored candy or something out of a colorful toilet bowl?  Well somebody in Japan did, and it is a hit!',
    region_id: 2,
  },
  {
    name: 'Wasabi Kit Kats',
    price: 3.0,
    stock: 45,
    origin_country: 'China',
    description: ' No that is not the green tea that are becoming more and more popular. That is wasabi flavored, and it taste awesome. ',
    region_id: 2,
  },
  {
    name: 'Kopiko Coffee Candy',
    price: 3.0,
    stock: 29,
    origin_country: 'Japan',
    description: ' Coffee candy sqaures with a strong flavor ',
    region_id: 2,
  },
  {
    name: 'Hot Garlic Shrimp Chips',
    price: 2.5,
    stock: 40,
    origin_country: 'Japan',
    description: ' Puffed wheat with flavored powder. ',
    region_id: 2,
  },
  {
    name: 'Samyang Buldak Kimchi Ramen',
    price: 3.0,
    stock: 17,
    origin_country: 'South Korea',
    description: ' No that iss not the green tea that are becoming more and more popular. That is wasabi flavored, and it taste awesome. ',
    region_id: 2,
  },
  // africa
  {
    name: 'Original Squash Orange Juice',
    price: 2.0,
    stock: 64,
    origin_country: 'South Africa',
    description: 'Juice from sweet orange, with lemon juice, sugar and water',
    region_id: 3,
  },
  {
    name: 'Plantain Crunchy Chips',
    price: 4.0,
    stock: 64,
    origin_country: 'Nigeria',
    description: 'Crispy, chewy, crunchy plantains in a convenient bag',
    region_id: 3,
  },
  {
    name: 'Fizzer Cream Soda Candy',
    price: 3.25,
    stock: 43,
    origin_country: 'South Africa',
    description: 'South Africas original fruity, chewy and fizzy candy',
    region_id: 3,
  },
  {
    name: 'Winegums',
    price: 3.5,
    stock: 54,
    origin_country: 'South Africa',
    description: 'These delicious and tempting reimaginings of a genuine classic are sure to delight anyone with a sweet tooth. ',
    region_id: 3,
  },
  {
    name: 'Chevda Mix',
    price: 4.99,
    stock: 56,
    origin_country: 'Kenya',
    description: 'A savory treat for anyone, potatoe chips mixed with lentils and peanuts',
    region_id: 3,
  },
  {
    name: 'Chutney Chips',
    price: 4.25,
    stock: 47,
    origin_country: 'South Africa',
    description: 'Spicy, fruity and delicious',
    region_id: 3,
  },
  {
    name: 'Condensed Milk Rusks',
    price: 5.5,
    stock: 47,
    origin_country: 'South Africa',
    description: 'A filling bread treat to keep you sated',
    region_id: 3,
  },
  {
    name: 'Monkey Gland Sauce',
    price: 8.89,
    stock: 40,
    origin_country: 'South Africa',
    description: 'Fruity and spicy, this sauce has a lot to say.',
    region_id: 3,
  },
  // europe
  {
    name: 'Clotted Cream Fudge',
    price: 5.4,
    stock: 36,
    origin_country: 'Wales',
    description: 'What do you get when super-soft fudge meets the UKs creamiest spread? Pure, unmatched bliss.',
    region_id: 4,
  },
  {
    name: 'Strawberries & Cream Bonbons',
    price: 4.1,
    stock: 24,
    origin_country: 'England',
    description: 'One taste, and youll see why Wimbledon attendees eat 60 tons of strawberries & cream every year.',
    region_id: 4,
  },
  {
    name: 'Onion Confit & Balsamic Vinegar Potato Chips',
    price: 4.0,
    stock: 40,
    origin_country: 'France',
    description: 'A whole meal, but in a chip.',
    region_id: 4,
  },
  {
    name: 'Foudina Maise Snack',
    price: 1.29,
    stock: 35,
    origin_country: 'Greece',
    description: 'Peanuts and Hazelnuts in a crunchy corn coating',
    region_id: 4,
  },
  {
    name: 'Vero Mango Sticks',
    price: 8.99,
    stock: 21,
    origin_country: 'Spain',
    description:
      'Vero Elotes, Mango or Sandia Spanish Candies are very different from other candies and their taste is something everyone will enjoy.',
    region_id: 4,
  },
  {
    name: 'Super Dickmanns Mousse',
    price: 5.99,
    stock: 15,
    origin_country: 'Germany',
    description: 'Chocolate Foam kisses.',
    region_id: 4,
  },
  {
    name: 'Pan di Stella Cookies',
    price: 8.99,
    stock: 29,
    origin_country: 'Italy',
    description: 'Cocoa and hazelnuts with little glaze stars on top',
    region_id: 4,
  },
  {
    name: 'Salmiac Stix',
    price: 10.99,
    stock: 57,
    origin_country: 'Finland',
    description: 'Sweet and salty black licorice with caramel center',
    region_id: 4,
  },
  // middle east
  {
    name: 'Bissli BBQ Snack',
    price: 10.49,
    stock: 47,
    origin_country: 'Israel',
    description: 'A crunchy corkscrew with barbecue flavoring',
    region_id: 5,
  },
  {
    name: 'Fayrouz Pineapple',
    price: 2.99,
    stock: 50,
    origin_country: 'Eygpt',
    description: 'Non-Alchoholic pineapple flavord carbonated malt beverage',
    region_id: 5,
  },
  {
    name: 'Mughe Turkish Delight',
    price: 35.9,
    stock: 22,
    origin_country: 'Turkey',
    description: 'Turkish Delight, also known as lokum, loqum is an old Turkish dessert tradition.',
    region_id: 5,
  },
  {
    name: 'Namaki Cheese Snacks',
    price: 6.99,
    stock: 45,
    origin_country: 'Iran',
    description: 'Like Cheetos but better',
    region_id: 5,
  },
  {
    name: 'Ousi Tamarind Candy',
    price: 4.99,
    stock: 63,
    origin_country: 'Syria',
    description: 'Tamarind flavored toffee',
    region_id: 5,
  },
  {
    name: 'Rani Float Soda',
    price: 2.99,
    stock: 19,
    origin_country: 'Saudi Arabia',
    description: 'Fruit drink with real fruit pieces',
    region_id: 5,
  },
  {
    name: 'Tazah Maamoul Date Snacks',
    price: 9.99,
    stock: 30,
    origin_country: 'Egypt',
    description: 'Date Filled Shortbread Cookies',
    region_id: 5,
  },
];

const seedProduct = () => SnackType.bulkCreate(productData);

module.exports = seedProduct;
