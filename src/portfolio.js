/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false // set false to disable splash screen
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Soukaina",
  title: "Hello World!, I'm Soukaina El Fajjaj",
  subTitle: emoji(
    "Full Stack Web Developer passionate about creating modern and responsive web applications using HTML, CSS, JavaScript, and Python. Skilled in database management with PostgreSQL and MongoDB."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1CH7IyovuNn5802XMiIC46Y1m4UO4xwL2/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/soukaina1DEV",
  linkedin: "https://www.linkedin.com/in/soukaina-el-fajjaj-700037259/",
  gmail: "soukaina.elfajjaj123@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Full Stack Web Developer skilled in front-end and back-end technologies.",
  skills: [
    "⚡ Building dynamic and responsive web applications using React.js",
    "⚡ Developing RESTful APIs and back-end logic with Express.js and Node.js",
    "⚡ Writing clean, efficient back-end code with Python",
    "⚡ Designing and managing databases with PostgreSQL and MongoDB",
    "⚡ Creating modern UIs with HTML, CSS, and JavaScript",
    "⚡ Using Git and GitHub for version control and collaboration"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "HTML5", fontAwesomeClassname: "simple-icons:html5"},
    {skillName: "CSS3", fontAwesomeClassname: "simple-icons:css3"},
    {skillName: "JavaScript", fontAwesomeClassname: "simple-icons:javascript"},
    {skillName: "React.js", fontAwesomeClassname: "simple-icons:react"},
    {skillName: "Node.js", fontAwesomeClassname: "simple-icons:nodedotjs"},
    {skillName: "Express.js", fontAwesomeClassname: "simple-icons:express"},
    {skillName: "MongoDB", fontAwesomeClassname: "simple-icons:mongodb"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "simple-icons:postgresql"},
    {skillName: "Python", fontAwesomeClassname: "simple-icons:python"}
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true

  schools: [
    {
      schoolName: "Université Hassan II - FSBM, Casablanca",
      subHeader:
        "Licence en Sciences Mathématiques et Informatique – Bases de Données",
      duration: "2021 – 2022",
      logo: require("./assets/images/fsbmLogo.png")
    },
    {
      schoolName: "Lycée Fatima Al Fihria, Casablanca",
      subHeader: "Baccalauréat en Sciences Physiques",
      duration: "2018 – 2019"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  // viewSkillBars: true,
  // experience: [
  //   {
  //     Stack: "Frontend (HTML, CSS, React.js)",
  //     progressPercentage: "70%"
  //   },
  //   {
  //     Stack: "Backend (Node.js, Express)",
  //     progressPercentage: "60%"
  //   },
  //   {
  //     Stack: "Database (PostgreSQL, MongoDB)",
  //     progressPercentage: "80%"
  //   }
  // ],
  displayCodersrank: true
};

// Work experience section

const workExperiences = {
  display: false //Set it to true to show workExperiences Section
  // experience: [
  //   {
  //     role: "Software Engineer",
  //     company: "Facebook",
  //     companylogo: require("./assets/images/facebookLogo.png"),
  //     date: "June 2018 – Present",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     descBullets: [
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  //     ]
  //   },
  //   {
  //     role: "Front-End Developer",
  //     company: "Quora",
  //     companylogo: require("./assets/images/quoraLogo.png"),
  //     date: "May 2017 – May 2018",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  //   },
  //   {
  //     role: "Software Engineer Intern",
  //     company: "Airbnb",
  //     companylogo: require("./assets/images/airbnbLogo.png"),
  //     date: "Jan 2015 – Sep 2015",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  //   }
  // ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  // title: "Big Projects",
  // projects: [
  //   {
  //     image: require("./assets/images/saayaHealthLogo.webp"),
  //     projectName: "Saayahealth",
  //     projectDesc:
  //       "Built a Healthcare web app to deliver virtual medical consultations.",
  //     footerLink: [
  //       {
  //         name: "Visit Website",
  //         url: "http://saayahealth.com/"
  //       }
  //     ]
  //   },
  //   {
  //     image: require("./assets/images/nextuLogo.webp"),
  //     projectName: "Nextu",
  //     projectDesc:
  //       "A professional learning platform built for students and professionals.",
  //     footerLink: [
  //       {
  //         name: "Visit Website",
  //         url: "http://nextu.se/"
  //       }
  //     ]
  //   }
  // ],
  display: false
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  // title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  // achievementsCards: [
  //   {
  //     title: "Google Code-In Finalist",
  //     subtitle:
  //       "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
  //     image: require("./assets/images/codeInLogo.webp"),
  //     imageAlt: "Google Code-In Logo",
  //     footerLink: [
  //       {
  //         name: "Certification",
  //         url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
  //       },
  //       {
  //         name: "Award Letter",
  //         url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
  //       },
  //       {
  //         name: "Google Code-in Blog",
  //         url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
  //       }
  //     ]
  //   },
  //   {
  //     title: "Google Assistant Action",
  //     subtitle:
  //       "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
  //     image: require("./assets/images/googleAssistantLogo.webp"),
  //     imageAlt: "Google Assistant Action Logo",
  //     footerLink: [
  //       {
  //         name: "View Google Assistant Action",
  //         url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
  //       }
  //     ]
  //   },

  //   {
  //     title: "PWA Web App Developer",
  //     subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
  //     image: require("./assets/images/pwaLogo.webp"),
  //     imageAlt: "PWA Logo",
  //     footerLink: [
  //       {name: "Certification", url: ""},
  //       {
  //         name: "Final Project",
  //         url: "https://pakistan-olx-1.firebaseapp.com/"
  //       }
  //     ]
  //   }
  // ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  // title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  // displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),

  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "I'm open to internship or collaboration opportunities.",
  number: "+212 6 03 40 02 30",
  email_address: "soukaina.elfajjaj123@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
