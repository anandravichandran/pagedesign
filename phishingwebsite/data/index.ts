
export const navItems = [
    { name: "Home", link: "/" },
    { name: "Data Inspection", link: "/datainspection" },
    { name: "Phishing Website ", link: "/phishingwebsite" },
    {name : "Data Leakage", link:
      "dataleakage"
    },
    { name: "Malware Analysis", link: "/malwareanalysis" },
  ];
  
  
  
  export const testimonials = [
    {
      quote:
        "WebFoxshield demonstrates broad safety through an easy-to-use interface. I enjoy the degree of detail it provides when searching for and reducing potential security risks. Definitely a worthwhile investment for my online safety.",
      name: "Dainel",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Webfoxshield is a bonus has significantly improved my online security. Since I installed it, I've noticed a dramatic decrease in data breaches and phishing effortsIts easy to use and delivers on its promises.I wholeheartedly suggest it to anyone concerned about their internet privacy",
      name: "James Cordan",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "I've been using WebFoxshield's Chrome extensions for several months, and it has exceeded my expectations. The data inspection option is really thorough, and I appreciate the peace of mind knowing that my personal information is secure. This plugin is a must-have for anyone concerned about online security.",
      name: "Lalitha",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "WebFoxshield accessory is an excellent utility for my browser. It spotted multiple phishing attempts and identified weaknesses that I would not have spotted otherwise. The real-time alerts are quite useful and have made my browsing experience significantly safer. Great job on this one!",
      name: "Malavicka",
      title: "IBM Technologies",
    },
    {
      quote:
        "After installing WebFoxshield's extension, I noticed an enormous boost in my online security. The virus detection is excellent, and the user-friendly interface makes it simple to operate. I appreciate the constant updates and commitment to protecting my information. Keep up the excellent work!",
      name: "Gokul Krish Ethical Hacker",
      title: "ThinkinfoExperts SOlutions",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];

  

export const feedback = [
    {
        id: "feedback-1",
        content:
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        title: "Founder & Leader",
        
    },
    {
        id: "feedback-2",
        content:
            "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        title: "Founder & Leader",
        
    },
    {
        id: "feedback-3",
        content:
            "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        title: "Founder & Leader",
        
    },
];

export interface FeatredCardProps {
  icon: string;
  title: string;
  content: string;
  index: number;
}

export interface ButtonProps {
  styles?: string;
}

export interface FeedBackProps {
  content: string;
  title: string;
  name: string;
  img: string | any;
}