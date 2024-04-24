const posts = [
  {
    id: 1,
    title: "Discovering the Stars",
    description: "A beginner's guide to astronomy and stargazing.",
    publicationDate: "2024-04-18T20:00:00Z",
    creatorUserName: "astroFan",
    keywords: ["astronomy", "stars", "guide"],
    comments: [
      {
        commentId: "1",
        userName: "nightSky",
        commentText: "Really helpful for a newbie like me!",
        commentDate: "2024-04-19T10:00:00Z"
      }
    ],
    numberOfLikes: 95,
    numberOfDislikes: 3
  },
  {
    id: 2,
    title: "Healthy Eating on a Budget",
    description: "Tips and tricks for eating well without breaking the bank.",
    publicationDate: "2024-04-19T11:00:00Z",
    creatorUserName: "foodie101",
    keywords: ["health", "food", "budget"],
    comments: [
      {
        commentId: "1",
        userName: "budgetChef",
        commentText: "Great advice! The meal planning section was especially useful.",
        commentDate: "2024-04-20T09:00:00Z"
      }
    ],
    numberOfLikes: 140,
    numberOfDislikes: 10
  },
  {
    id: 3,
    title: "The Future of Renewable Energy",
    description: "Exploring the innovations driving sustainable energy solutions.",
    publicationDate: "2024-04-15T08:30:00Z",
    creatorUserName: "greenTech",
    keywords: ["energy", "renewable", "sustainability"],
    comments: [],
    numberOfLikes: 200,
    numberOfDislikes: 15
  },
  {
    id: 4,
    title: "Top 10 DIY Home Improvement Projects",
    description: "Simple and cost-effective DIY projects to enhance your home.",
    publicationDate: "2024-04-10T15:00:00Z",
    creatorUserName: "DIYDad",
    keywords: ["DIY", "home improvement", "projects"],
    comments: [],
    numberOfLikes: 123,
    numberOfDislikes: 8
  },
  {
    id: 5,
    title: "Understanding Blockchain Technology",
    description: "A deep dive into how blockchain works and its applications.",
    publicationDate: "2024-04-21T18:00:00Z",
    creatorUserName: "techWizard",
    keywords: ["blockchain", "technology", "finance"],
    comments: [],
    numberOfLikes: 150,
    numberOfDislikes: 5
  },
  {
    id: 6,
    title: "Mastering the Art of French Cooking",
    description: "Techniques and recipes to cook like a French chef at home.",
    publicationDate: "2024-04-22T12:00:00Z",
    creatorUserName: "chefPierre",
    keywords: ["cooking", "French cuisine", "recipes"],
    comments: [],
    numberOfLikes: 110,
    numberOfDislikes: 2
  },
  {
    id: 7,
    title: "Beginner's Guide to Yoga",
    description: "Essential poses and tips for starting your yoga journey.",
    publicationDate: "2024-04-17T09:00:00Z",
    creatorUserName: "yogaBreeze",
    keywords: ["yoga", "health", "wellness"],
    comments: [],
    numberOfLikes: 97,
    numberOfDislikes: 0
  },
  {
    id: 8,
    title: "The Evolution of Video Games",
    description: "A look at how video games have changed over the decades.",
    publicationDate: "2024-04-18T14:00:00Z",
    creatorUserName: "gamerPro",
    keywords: ["video games", "gaming", "history"],
    comments: [],
    numberOfLikes: 180,
    numberOfDislikes: 7
  },
  {
    id: 9,
    title: "Tips for Freelancers: Managing Your Finances",
    description: "How to keep your finances in check when you're self-employed.",
    publicationDate: "2024-04-20T16:00:00Z",
    creatorUserName: "freelanceGuru",
    keywords: ["freelancing", "finance", "tips"],
    comments: [],
    numberOfLikes: 105,
    numberOfDislikes: 3
  },
  {
    id: 10,
    title: "The Rise of Urban Gardening",
    description: "Growing your own food in small spaces.",
    publicationDate: "2024-04-16T10:00:00Z",
    creatorUserName: "greenThumb",
    keywords: ["gardening", "urban", "sustainability"],
    comments: [],
    numberOfLikes: 120,
    numberOfDislikes: 4
  },
  {
    id: 11,
    title: "Example Title",
    description: "This is a brief description of the topic discussed in the post.",
    publicationDate: "2024-04-22T14:00:00Z",
    creatorUserName: "user123",
    keywords: ["example", "topic", "data"],
    comments: [
      {
        commentId: "1",
        userName: "commenter1",
        commentText: "This is a very insightful post!",
        commentDate: "2024-04-22T15:00:00Z"
      },
      {
        commentId: "2",
        userName: "commenter2",
        commentText: "I disagree with your points about XYZ.",
        commentDate: "2024-04-22T16:00:00Z"
      }
    ],
    numberOfLikes: 89,
    numberOfDislikes: 5
  }
];

export default posts;