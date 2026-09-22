export type VerificationStatus = "Verified" | "Partially Verified" | "Pending" | "Needs attention";

export type Listing = {
  id: string;
  name: string;
  neighbourhood: string;
  city: string;
  distance: string;
  distanceKm: number;
  rent: number;
  deposit: number;
  roomType: "Single" | "Twin sharing" | "Triple sharing";
  available: string;
  image: string;
  rating: number;
  residents: number;
  verified: VerificationStatus;
  verification: { label: string; done: boolean; detail: string }[];
  amenities: string[];
  match: number;
  why: string[];
  mapX: number;
  mapY: number;
  owner: string;
};

export const listings: Listing[] = [
  {
    id: "casa-amar",
    name: "Casa Amar",
    neighbourhood: "Koramangala",
    city: "Bengaluru",
    distance: "1.2 km from Christ University",
    distanceKm: 1.2,
    rent: 14500,
    deposit: 29000,
    roomType: "Twin sharing",
    available: "From 01 Jul 2026",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=82",
    rating: 4.8,
    residents: 34,
    verified: "Verified",
    verification: [
      { label: "Owner identity", done: true, detail: "Aadhaar and PAN checked" },
      { label: "Property documents", done: true, detail: "Ownership proof reviewed" },
      { label: "Location check", done: true, detail: "Address verified on-site" },
      { label: "Recent inspection", done: true, detail: "Completed 14 Jun 2026" },
    ],
    amenities: ["WiFi", "AC", "Laundry", "Power backup", "CCTV"],
    match: 94,
    why: ["Within your ₹15k budget", "1.2 km from campus", "Matches twin sharing"],
    mapX: 56,
    mapY: 38,
    owner: "Aarav Homes",
  },
  {
    id: "the-arc",
    name: "The Arc House",
    neighbourhood: "HSR Layout",
    city: "Bengaluru",
    distance: "2.4 km from Christ University",
    distanceKm: 2.4,
    rent: 12800,
    deposit: 25600,
    roomType: "Single",
    available: "From 15 Jul 2026",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=82",
    rating: 4.6,
    residents: 21,
    verified: "Verified",
    verification: [
      { label: "Owner identity", done: true, detail: "Government ID checked" },
      { label: "Property documents", done: true, detail: "Agreement and tax receipt reviewed" },
      { label: "Location check", done: true, detail: "Map and address verified" },
      { label: "Recent inspection", done: false, detail: "Inspection being scheduled" },
    ],
    amenities: ["WiFi", "Attached bathroom", "Laundry", "CCTV"],
    match: 88,
    why: ["₹1,700 below your max budget", "Single room preference matched", "Laundry included"],
    mapX: 68,
    mapY: 56,
    owner: "The Arc Living",
  },
  {
    id: "nook-27",
    name: "Nook 27",
    neighbourhood: "BTM Stage 2",
    city: "Bengaluru",
    distance: "3.1 km from Christ University",
    distanceKm: 3.1,
    rent: 9800,
    deposit: 19600,
    roomType: "Triple sharing",
    available: "Ready to move",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=82",
    rating: 4.4,
    residents: 48,
    verified: "Partially Verified",
    verification: [
      { label: "Owner identity", done: true, detail: "Government ID checked" },
      { label: "Property documents", done: true, detail: "Basic lease documents uploaded" },
      { label: "Location check", done: false, detail: "Awaiting address confirmation" },
      { label: "Recent inspection", done: false, detail: "Not completed" },
    ],
    amenities: ["WiFi", "Mess", "Power backup", "CCTV"],
    match: 81,
    why: ["Lowest monthly rent in your shortlist", "Mess available on-site", "Power backup included"],
    mapX: 32,
    mapY: 64,
    owner: "Nook Living",
  },
  {
    id: "terracotta",
    name: "Terracotta Rooms",
    neighbourhood: "Ejipura",
    city: "Bengaluru",
    distance: "1.8 km from Christ University",
    distanceKm: 1.8,
    rent: 15700,
    deposit: 31400,
    roomType: "Twin sharing",
    available: "From 01 Aug 2026",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=82",
    rating: 4.7,
    residents: 16,
    verified: "Pending",
    verification: [
      { label: "Owner identity", done: true, detail: "Government ID checked" },
      { label: "Property documents", done: false, detail: "Under review by the Nest team" },
      { label: "Location check", done: false, detail: "Not started" },
      { label: "Recent inspection", done: false, detail: "Not completed" },
    ],
    amenities: ["WiFi", "AC", "Attached bathroom", "Study desk"],
    match: 76,
    why: ["Dedicated study desk in every room", "1.8 km from campus", "Twin sharing available"],
    mapX: 44,
    mapY: 24,
    owner: "Terracotta Collective",
  },
];

export type Match = {
  id: string;
  name: string;
  course: string;
  year: string;
  initials: string;
  match: number;
  note: string;
  avatar: string;
  strengths: string[];
  difference: string;
  tags: string[];
};

export const matches: Match[] = [
  {
    id: "mira",
    name: "Mira Shah",
    course: "MSc Psychology",
    year: "2nd year",
    initials: "MS",
    match: 92,
    note: "Both of you prefer quiet evenings and an early start.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=240&q=80",
    strengths: ["Similar sleep schedule", "Both keep shared spaces tidy", "Compatible monthly budget", "Low guest frequency"],
    difference: "Mira enjoys hosting friends on weekends more often than you do.",
    tags: ["Early bird", "Vegetarian", "Quiet home"],
  },
  {
    id: "kabir",
    name: "Kabir Mehta",
    course: "BBA Finance",
    year: "3rd year",
    initials: "KM",
    match: 86,
    note: "A balanced match with similar budgets and study habits.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
    strengths: ["Compatible budget", "Night-owl friendly", "Both prefer a furnished room", "Similar social style"],
    difference: "Kabir is comfortable with occasional smoking outdoors.",
    tags: ["Night owl", "Non-veg", "Social"],
  },
  {
    id: "zoya",
    name: "Zoya Khan",
    course: "BDes Interaction Design",
    year: "1st year",
    initials: "ZK",
    match: 79,
    note: "You share a love of a calm home and focused study blocks.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80",
    strengths: ["Shared study rituals", "Both prefer attached bathrooms", "Similar cleanliness expectations"],
    difference: "Zoya prefers a more flexible guest policy.",
    tags: ["Flexible", "Vegetarian", "Design student"],
  },
];

export const activity = [
  { label: "New match request accepted", detail: "Mira Shah · 6 min ago", type: "match" },
  { label: "Casa Amar saved", detail: "Today · 10:42 AM", type: "save" },
  { label: "Demo payment received", detail: "Booking VN-2091 · Yesterday", type: "payment" },
];

export const formatINR = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export const verificationTone = (status: VerificationStatus) => {
  if (status === "Verified") return "verified";
  if (status === "Partially Verified") return "partial";
  if (status === "Needs attention") return "attention";
  return "pending";
};
