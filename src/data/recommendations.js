import { createSpotArt } from "../lib/createSpotArt";

export const categoryDefinitions = [
  { id: "restaurants", label: "Restaurants" },
  { id: "coffee", label: "Coffee Shops" },
  { id: "shopping", label: "Shopping Malls" },
  { id: "other", label: "Other" },
];

export const recommendations = [
  {
    id: "dadong-roast-duck",
    name: "Da Dong Roast Duck",
    category: "restaurants",
    city: "Beijing",
    address: "1-2 Nanxincang International Mansion, Dongcheng, Beijing",
    note:
      "The leanest roast duck in the city. Incredible presentation and the sugar-dipped skin is the move for first-time visitors.",
    lat: 39.93493,
    lng: 116.43821,
    image: createSpotArt("Da Dong Roast Duck", "Beijing", [
      "#4aa3d5",
      "#8fd0f2",
      "#d89d2e",
    ]),
  },
  {
    id: "yu-garden-pavilion",
    name: "Yu Garden Pavilion",
    category: "restaurants",
    city: "Shanghai",
    address: "218 Anren St, Huangpu District, Shanghai",
    note:
      "A polished stop near the old city. Great for out-of-town friends when you want classic Shanghai scenery and a big shared-table meal.",
    lat: 31.22707,
    lng: 121.49256,
    image: createSpotArt("Yu Garden Pavilion", "Shanghai", [
      "#0f2436",
      "#355f93",
      "#f4a261",
    ]),
  },
  {
    id: "peoples-park-tea-house",
    name: "People's Park Tea House",
    category: "restaurants",
    city: "Chengdu",
    address: "12 Shaocheng Rd, Qingyang District, Chengdu",
    note:
      "The best place to lean into Chengdu's slow life. Order jasmine tea, grab a bamboo chair, and stay longer than you planned.",
    lat: 30.65948,
    lng: 104.05572,
    image: createSpotArt("People's Park Tea House", "Chengdu", [
      "#3c6e71",
      "#84a98c",
      "#f2cc8f",
    ]),
  },
  {
    id: "metal-hands",
    name: "Metal Hands",
    category: "coffee",
    city: "Beijing",
    address: "Maoer Hutong, Dongcheng, Beijing",
    note:
      "One of the easiest coffees to recommend in Beijing. Good espresso, strong design point of view, and a neighborhood worth wandering.",
    lat: 39.93975,
    lng: 116.40809,
    image: createSpotArt("Metal Hands", "Beijing", [
      "#6f4e37",
      "#b08968",
      "#ede0d4",
    ]),
  },
  {
    id: "seesaw-julu",
    name: "Seesaw Coffee",
    category: "coffee",
    city: "Shanghai",
    address: "Julu Rd, Jing'an District, Shanghai",
    note:
      "Easy central stop when you're bouncing around the former French concession. Reliable coffee and a crowd that feels very Shanghai.",
    lat: 31.22668,
    lng: 121.45383,
    image: createSpotArt("Seesaw Coffee", "Shanghai", [
      "#6d597a",
      "#b56576",
      "#e56b6f",
    ]),
  },
  {
    id: "northern-city-coffee",
    name: "Northern City Coffee",
    category: "coffee",
    city: "Chengdu",
    address: "Kuanzhai Alley area, Qingyang District, Chengdu",
    note:
      "A calm reset after sightseeing. Good for an afternoon break before heading back out for snacks or mahjong in the park.",
    lat: 30.66794,
    lng: 104.04948,
    image: createSpotArt("Northern City Coffee", "Chengdu", [
      "#4f5d75",
      "#ef8354",
      "#f9f7f3",
    ]),
  },
  {
    id: "taikoo-li",
    name: "Taikoo Li",
    category: "shopping",
    city: "Chengdu",
    address: "8 Zhongshamao St, Jinjiang District, Chengdu",
    note:
      "The most pleasant luxury mall experience in the country. Worth it even if you aren't shopping because the whole district feels polished and walkable.",
    lat: 30.65562,
    lng: 104.08393,
    image: createSpotArt("Taikoo Li", "Chengdu", [
      "#1d3557",
      "#457b9d",
      "#a8dadc",
    ]),
  },
  {
    id: "xintiandi",
    name: "Xintiandi",
    category: "shopping",
    city: "Shanghai",
    address: "Lane 181, Taicang Rd, Huangpu District, Shanghai",
    note:
      "A convenient mix of architecture, shopping, and easy dining options. Useful when you want a low-friction place to bring a mixed group.",
    lat: 31.21945,
    lng: 121.47437,
    image: createSpotArt("Xintiandi", "Shanghai", [
      "#2a9d8f",
      "#76c893",
      "#f1faee",
    ]),
  },
  {
    id: "mutianyu",
    name: "Mutianyu Great Wall",
    category: "other",
    city: "Beijing",
    address: "Mutianyu Village, Huairou District, Beijing",
    note:
      "The best wall recommendation for friends because the scenery is dramatic and the logistics are much easier than the most crowded alternatives.",
    lat: 40.43191,
    lng: 116.57037,
    image: createSpotArt("Mutianyu Great Wall", "Beijing", [
      "#355070",
      "#6d597a",
      "#b56576",
    ]),
  },
];
