const { Product } = require('../models'); 

const productData = [
  // latin america
  {
    name: 'Palito de Coco',
    price: 2.5,
    stock: 50,
    origin_country: 'Dominican Republic',
    description: 'A coconut and caramel flavored lollipop wrapped in colorful cellophane',
    filename: 'palito_de_coco_south_America.png',
    region_id: 1,
  },
  {
    name: 'Dori Amendoim',
    price: 3.49,
    stock: 51,
    origin_country: 'Mexico',
    description: 'Candy coated peanuts',
    filename: 'dori_amendiom_candy.jpg',
    region_id: 1,
  },
  {
    name: 'Galak',
    price: 4.0,
    stock: 25,
    origin_country: 'Ecuador',
    description: 'These white chocolate bars are famous for their milky, melt in your mouth quality.',
    filename: 'nestle_galak_south_america.png',
    region_id: 1,
  },
  {
    name: 'Fandango Cereal Snack',
    price: 1.5,
    stock: 19,
    origin_country: 'Mexico',
    description: 'Did you know that cereal makes the perfect afternoon snack?',
    filename: 'fandangos_cereal_snack_south_america.jpg',
    region_id: 1,
  },
  {
    name: 'Ajonjoli',
    price: 5.0,
    stock: 20,
    origin_country: 'Puerto Rico',
    description: 'Imagine a mild and crunchy combination of sesame seeds and honey taking over your mouth and youll understand why these Puerto Rican snack bites are so popular.',
    filename: 'dulce_ajonjoli_south_america.jpg',
    region_id: 1,
  },
  {
    name: 'Portao de Cambui de Leite',
    price: 6.0,
    stock: 30,
    origin_country: 'Peru',
    description:
      'These simple vanilla cookies with a chocolate coating were created in tribute to the classic ~turrón de Doña Pepa~, a beloved pastry that has found its match in these less complicated, but crazy addictive treats! ',
    filename: 'portao_de_cambui_doce_de_leite_bites_south_america.jpg',
    region_id: 1,
  },
  {
    name: 'Lacta Bis Wafers',
    price: 2.99,
    stock: 22,
    origin_country: 'Mexico',
    description: 'Crunchy, sweet, delectable wafers for the whole family!',
    filename: 'lacta_bis_wafer_candy.jpg',
    region_id: 1,
  },
  {
    name: 'Guarana Antartica Soda',
    price: 3.99,
    stock: 44,
    origin_country: 'Mexico',
    description: 'cold as ice in a hot place',
    filename: 'guarana_antarctica_soda_south_america.jpg',
    region_id: 1,
  },
  // asia
  {
    name: 'Noodle Snack',
    price: 5.0,
    stock: 40,
    origin_country: 'South Korea',
    description: 'Think ramen... but a little more mobile',
    filename: 'ottogi_ppushu_ppushu_noodle_snack_asia.jpeg',
    region_id: 2,
  },
  {
    name: 'Squid Larb Seaweed Snack',
    price: 4.5,
    stock: 15,
    origin_country: 'Thailand',
    description: 'Crisp Thai seaweed with spicy squid flavor.',
    filename: 'tao_kae_noi_super_crisp_asia.jpeg',
    region_id: 2,
  },
  {
    name: 'Puchao',
    price: 6.0,
    stock: 20,
    origin_country: 'Japan',
    description:
      ' Have you ever woke up one day and thought to yourself- I NEED FRUIT and CANDY?  Well somebody in Japan did, and it is a hit!',
    filename: 'puchao_fruit_candy_asia.jpeg',
    region_id: 2,
  },
  {
    name: 'KureKure Masala Munch',
    price: 3.0,
    stock: 45,
    origin_country: 'China',
    description: ' No that is not the bbq or ranch flavors that are becoming more and more popular. That is Masala flavored, and it taste awesome. ',
    filename: 'kurkure_curry_snack_asia.jpg',
    region_id: 2,
  },
  {
    name: 'Kopiko Coffee Candy',
    price: 3.0,
    stock: 29,
    origin_country: 'Japan',
    description: ' Coffee candy sqaures with a strong flavor ',
    filename: 'kopiko_coffee_candy_asia.jpeg',
    region_id: 2,
  },
  {
    name: 'Hot Garlic Shrimp Chips',
    price: 2.5,
    stock: 40,
    origin_country: 'Japan',
    description: ' Puffed wheat with flavored powder. ',
    filename: 'calbee_hot_garlic_shrimp_chips_asia.jpeg',
    region_id: 2,
  },
  {
    name: 'Samyang Buldak Ramen',
    price: 3.0,
    stock: 17,
    origin_country: 'South Korea',
    description: ' Ramen with a tangy twist ',
    filename: 'samyang_buldak_ramyeon_asia.jpeg',
    region_id: 2,
  },
  // africa
  {
    name: 'Chicken Ginger Chips',
    price: 4.0,
    stock: 64,
    origin_country: 'Nigeria',
    description: 'Crispy, chewy, crunchy plantains in a convenient bag',
    filename: 'sankofa_chicken_ginger_chips_africa.jpeg',
    region_id: 3,
  },
  {
    name: 'Fizzer Cream Soda Candy',
    price: 3.25,
    stock: 43,
    origin_country: 'South Africa',
    description: 'South Africas original fruity, chewy and fizzy candy',
    filename: 'beacon_fizzer_candy_africa.jpg',
    region_id: 3,
  },
  {
    name: 'Oros',
    price: 3.5,
    stock: 54,
    origin_country: 'South Africa',
    description: 'These delicious and tempting reimaginings of a genuine classic are sure to delight anyone with a sweet tooth. ',
    filename: 'oros_original_squash_africa.jpg',
    region_id: 3,
  },
  {
    name: 'Chevda Mix',
    price: 4.99,
    stock: 56,
    origin_country: 'Kenya',
    description: 'A savory treat for anyone, potatoe chips mixed with lentils and peanuts',
    filename: 'kenyan_chevda_mix_africa.jpg',
    region_id: 3,
  },
  {
    name: 'Chutney Chips',
    price: 4.25,
    stock: 47,
    origin_country: 'South Africa',
    description: 'Spicy, fruity and delicious',
    filename: 'simba_chutney_chips_africa.jpg',
    region_id: 3,
  },
  {
    name: 'Condensed Milk Rusks',
    price: 5.5,
    stock: 47,
    origin_country: 'South Africa',
    description: 'A filling bread treat to keep you sated',
    filename: 'ouma_condensed_milk_husks_africa.jpg',
    region_id: 3,
  },
  {
    name: 'Monkey Gland Sauce',
    price: 8.89,
    stock: 40,
    origin_country: 'South Africa',
    description: 'Fruity and spicy, this sauce has a lot to say.',
    filename: 'steers_monkey_gland_sauce_africa.jpg',
    region_id: 3,
  },
  // europe
  {
    name: 'Crocky Chips',
    price: 5.4,
    stock: 36,
    origin_country: 'Wales',
    description: 'What do you get when super-crunchy chips meets the UKs creamiest spread? Pure, unmatched bliss.',
    filename: 'croky_ribble_chips_belgium.jpg',
    region_id: 4,
  },
  {
    name: 'Strawbarry Bonbons',
    price: 4.1,
    stock: 24,
    origin_country: 'England',
    description: 'One taste, and youll see why Wimbledon attendees eat 60 tons of strawberries & cream every year.',
    filename: 'eiffel_strawberry_bonbons_france.jpg',
    region_id: 4,
  },
  {
    name: 'Iron Bru',
    price: 4.0,
    stock: 40,
    origin_country: 'France',
    description: 'A whole meal, but in a drink.',
    filename: 'irn_bru_soda_ireland.jpg',
    region_id: 4,
  },
  {
    name: 'Foudina Maise Snack',
    price: 1.29,
    stock: 35,
    origin_country: 'Greece',
    description: 'Peanuts and Hazelnuts in a crunchy corn coating',
    filename: 'foudounia_maise_peanut_snack_greece.jpg',
    region_id: 4,
  },
  {
    name: 'Vero Mango Sticks',
    price: 8.99,
    stock: 21,
    origin_country: 'Spain',
    description:
      'Vero Elotes, Mango or Sandia Spanish Candies are very different from other candies and their taste is something everyone will enjoy.',
    filename: 'vero_mango_sticks_spain.jpg',
    region_id: 4,
  },
  {
    name: 'Super Dickmanns Mousse',
    price: 5.99,
    stock: 15,
    origin_country: 'Germany',
    description: 'Chocolate Foam kisses.',
    filename: 'super_dickmanns_mousse_germany.jpg',
    region_id: 4,
  },
  {
    name: 'Pan di Stella Cookies',
    price: 8.99,
    stock: 29,
    origin_country: 'Italy',
    description: 'Cocoa and hazelnuts with little glaze stars on top',
    filename: 'pan_di_stella_biscotto_italy.jpg',
    region_id: 4,
  },
  {
    name: 'Salmiac Stix',
    price: 10.99,
    stock: 57,
    origin_country: 'Finland',
    description: 'Sweet and salty black licorice with caramel center',
    filename: 'nordic_sweets_salmiac_stix_finland.jpg',
    region_id: 4,
  },
  // middle east
  {
    name: 'Bissli BBQ Snack',
    price: 10.49,
    stock: 47,
    origin_country: 'Israel',
    description: 'A crunchy corkscrew with barbecue flavoring',
    filename: 'Bissli_bbq_snack_isreal.jpg',
    region_id: 5,
  },
  {
    name: 'Fayrouz Pineapple',
    price: 2.99,
    stock: 50,
    origin_country: 'Eygpt',
    description: 'Non-Alchoholic pineapple flavord carbonated malt beverage',
    filename: 'fayrouz_pineapple_soda_egypt.jpg',
    region_id: 5,
  },
  {
    name: 'Mughe Turkish Delight',
    price: 35.9,
    stock: 22,
    origin_country: 'Turkey',
    description: 'Turkish Delight, also known as lokum, loqum is an old Turkish dessert tradition.',
    filename: 'mughe_gourmet_turkish_delights_turkey.jpg',
    region_id: 5,
  },
  {
    name: 'Namaki Cheese Snacks',
    price: 6.99,
    stock: 45,
    origin_country: 'Iran',
    description: 'Like Cheetos but better',
    filename: 'nader_namaki_cheese_snack_iran.jpg',
    region_id: 5,
  },
  {
    name: 'Ousi Tamarind Candy',
    price: 4.99,
    stock: 63,
    origin_country: 'Syria',
    description: 'Tamarind flavored toffee',
    filename: 'ousi_tamarind_candy_syria.jpg',
    region_id: 5,
  },
  {
    name: 'Rani Float Soda',
    price: 2.99,
    stock: 19,
    origin_country: 'Saudi Arabia',
    description: 'Fruit drink with real fruit pieces',
    filename: 'rani_float_soda_iran.jpg',
    region_id: 5,
  },
  {
    name: 'Maamoul Date Snacks',
    price: 9.99,
    stock: 30,
    origin_country: 'Egypt',
    description: 'Tazah Maamoul 12 Cookies Individually Wrapped Natural Date Filled Shortbread Cookies ',
    filename: 'tazah_maamoul_date_snacks_saudi_arabia.jpg',
    region_id: 5,
  },
];

const seedProduct = () => Product.bulkCreate(productData);

module.exports = seedProduct;