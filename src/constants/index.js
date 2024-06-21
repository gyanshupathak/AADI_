import  file02 from "../assets/file-02.svg";
import  homeSmile from "../assets/home-smile.svg";
import  searchMd from "../assets/search-md.svg";
import  plusSquare from "../assets/plus-square.svg";
import controller from "../assets/controller.jpg";
import recording03 from "../assets/recording-03.svg";
import recording01 from "../assets/recording-01.svg";
import disc02 from "../assets/disc-02.svg";
import chromecast from "../assets/chrome-cast.svg";
import sliders04 from "../assets/sliders-04.svg";
import gta from "../assets/gta.png";
import rdr from "../assets/rdr.png";
import csgo from "../assets/csgo.svg";
import fortnite from "../assets/fortnite.png";





export const navigation = [
    {
      id: "0",
      title: "About Us",
      url: "#about",
    },
    {
      id: "1",
      title: "FAQ",
      url: "#faq",
    },
    {
      id: "2",
      title: "Games",
      url: "#games",
    },
    {
      id: "3",
      title: "Contact Us",
      url: "#contact",
    },
    {
      id: "4",
      title: "Download",
      url: "#download",
      onlyMobile: true,
    },
  ];
export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
export const startingFeatures = [
  'Create an Aadi account',
  'Upon creating an account receive a joining bonus in AADI tokens',
  
];

export const completeProfile = [
  'Aadi AI creates your universal player profile',
  'It recommends you the best games and best path for your success',
];

export const playGames = [
  {
    imgUrl: require("../assets/svg/Goal.svg").default,
    title: 'Run AADI',
    subtitle:
        'Download games, login with Aadi, Complete objectives - Win Game XPs',
  },
  {
    imgUrl: require("../assets/svg/reward.svg").default,
    title: 'Get Rewards',
    subtitle:
        'Every day, depending on the Game XPs earned, win Aadi token rewards',
  },
];

export const MarketPlacesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const MarketPlaces = [
  "In-game assets",
  "Multipliers",
  "Season passes and much more ...",
];

export const Profiles = [
  "By purchasing items ,you can enhance your profiles helping in winning contests and achieving higher multipliers.",
  "You can also sell your game assets for AADI tokens, and use them to purchase other assets. ",
  
];

export const games = [
  {
    image : gta,
  },
  {
    image : rdr,
  },
  {
    image : csgo,
  },
  {
    image : fortnite,
  },
  
];



export const questions = [
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated \"help\" channel! If you haven't joined yet, you can get an invite to our Discord server here.",
  },
  {
    question: "How do I submit my solution?",
    answer:
      "We'd recommend reading our complete guide to submitting solutions . If you get stuck and need help, please feel free to ask questions in our Discord server, and we'll help you submit your project.",
  },
  {
    question: "Is there an official solution I can take a look at?",
    answer:
      "We don't provide \"official\" solutions for the challenges. This is because there is no single perfect way to complete a challenge. Instead, you're encouraged to review other people's code in the community. You can learn so much by seeing how other people have approached the same challenges and giving them feedback.",
  },
  {
    question: "Do I get a code review when I post my solution?",
    answer:
      "Frontend Mentor is a collaborative learning community where everyone can give feedback to each other. If you'd like to receive feedback from the community, please be sure to post a question when you submit your solution. The more specific you can be, the better. Being clear with your questions means you're much more likely to receive valuable feedback from others.",
  },
  {
    question: "Can I use libraries/frameworks on these projects?",
    answer:
      "Yes! Our challenges provide professional designs but there are no rules on what tools to use. So feel free to use anything you like to build your projects.",
  },
  {
    question: "Can I use these projects in my portfolio?",
    answer:
      "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!",
  },
  {
    question: "How often are new challenges added?",
    answer:
      "We launch a new challenge every two weeks. We alternate between free and premium challenge launches, so we launch one free and one premium challenge each month.",
  },
  {
    question:
      "What is the difference between the desktop-design, mobile-design, and desktop-preview images in my starter code?",
    answer:
      "The desktop-design and mobile-design images show you how the layout should look at large and small screen sizes. The desktop design is 1440px wide, and the mobile design is 375px. However, try building projects to look good on all screen sizes. The desktop-preview image is a preview image used in the README file. You don't need to reference this while building the project.",
  },
  {
    question:
      "Can I use these challenges within my own free or commercial content/tutorials/projects?",
    answer:
      "Please visit our License page to learn more about how our challenges can be used within your own content. If you're unsure about anything, please feel free to contact us at hi@frontendmentor.io and we'll be more than happy to answer your questions.",
  },
];

export const socials = [
  {
    name: 'twitter',
    url: require("../assets/svg/twitter.svg").default,
  },
  {
    name: 'linkedin',
    url: require("../assets/svg/linkedin.svg").default,
  },
  {
    name: 'instagram',
    url: require("../assets/svg/instagram.svg").default,
  },
  {
    name: 'facebook',
    url: require("../assets/svg/facebook.svg").default,
  },
];