import reloopThumb from "./assets/reloop/Reloop Logo.png";
import enbThumb from "./assets/eNb/eNotebook Logo.png";

const logotext = "TAT";
const meta = {
  title: "Tun Aung(Toby) Thaung",
  description:
    "Hello, I’m Toby, a software devloper, currently working for a research project in Oregon State University",
};

const introdata = {
    title: "I’m Tun Aung(Toby) Thaung",
    animated: {
        zero: "Full-Stack Developer",
        first: "Front-End Developer",
        second: "Back-End Developer",
        third: "Freelancer",
        // forth: "Web Designer"
    },
    description: "You've made it here! 🥂",
    description2: "I build web and mobile apps that are clear to use and solid under the hood.",
    your_img_url:"https://storage.ko-fi.com/cdn/useruploads/post/0a340988-1a6c-46bf-a17f-96c926d246ae_cloudshoritzonalwm.png",
};

const dataabout = {
    title: "Abit about myself",
    aboutme: "I graduated from Oregon State University in 2023 with a B.S in Computer Science, focus in A.I. After working as an Undergraduate Learning Assistant in college, I became a Lead Developer for a SaaS Startup at Clark Research and a Lead Web Developer for EECS Department at Oregon State University, working two jobs simultaneously. Now, I'm a Freelance developer helping people achieve their goals through building reliable SaaS applications.",
};

const worktimeline = [
  {
      jobtitle: "Freelance Full Stack/Mobile Developer",
      where: "Portland, Oregon",
      date: "June 2026 - Present",
  },
    {
        jobtitle: "Lead Web Developer",
        where: "Corvallis, Oregon",
        date: "August 2024 - July 2026",
    },
    {
        jobtitle: "Faculty Research Assistant",
        where: "Corvallis, Oregon",
        date: "August 2023 - June 2026",
    },
    {
        jobtitle: "Software Engineer Intern",
        where: "Yangon, Myanmar",
        date: "Jan 2023 - Jun 2023",
    },
    {
        jobtitle: "Undergraduate Learning Assistant",
        where: "Corvallis, Oregon",
        date: "Jan 2023 - Jun 2023",
    },
];

const skills = [
  {
    name: "Python",
    value: 75,
    yearsLabel: "3–4 years",
  },
  {
    name: "React/React Native",
    value: 75,
    yearsLabel: "3–4 years",
  },
  {
    name: "JavaScript",
    value: 75,
    yearsLabel: "3 years",
  },
  {
    name: "HTML",
    value: 75,
    yearsLabel: "3 years",
  },
  {
    name: "CSS",
    value: 75,
    yearsLabel: "3 years",
  },
  {
    name: "MySQL",
    value: 60,
    yearsLabel: "2–3 years",
  },
  {
    name: "MongoDB",
    value: 60,
    yearsLabel: "2–3 years",
  },
  {
    name: "AWS (EC2, S3)",
    value: 35,
    yearsLabel: "1–2 years",
  },
  {
    name: "TypeScript",
    value: 35,
    yearsLabel: "1 year",
  },
];

const tools = [
  {
    title: "Amazon Web Services (EC2, RDS, Route 53)",
  },
  {
    title: "Node.js",
  },
  {
    title: "React.js",
  },
  {
    title: "TailWind CSS",
  },
  {
    title: "Google Cloud",
  },
  {
    title: "OpenAI API (GPT-3.5-Turbo, GPT-4, GPT-4-Vision)",
  },
  {
    title: "Docker",
  },
];

const datafeatured = [
    {
        img: reloopThumb,
        description:
          "ReLoop: marketplace case study (Vientiane launch, Supabase, pickup-first)",
        link: "/reloop",
        bg: "#F4F3EE",
    },
    {
        img: enbThumb,
        description:
          "eNotebook: AI learning notebook overview (STEM study strategies, tutor, artifacts)",
        link: "/enb",
        bg: "#F4F3EE",
    },
];

const datapersonal = [
    // {
    //     img:"https://media1.giphy.com/media/4XXo8A7CIW1lZGgdhm/giphy.gif?cid=6c09b952f8ibj4v9hsw7z87sql8yqkcaqnoqc8q7ajiziqrk&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s",
    //     description: "eNotebook StartUp - A virtual notebook powered by multiple AI models",
    //     link: "https://enotebook.ai/"
    // },
    {
        img:"https://i.pinimg.com/originals/c7/d5/9d/c7d59ddc9346ba8d41f83de6718f7d57.gif",
        description: "A pixel theme chatroom using websocket and socket.io",
        link: "https://github.com/toby12352/Pixel-Chatroom"
    },
    {
        img:"https://art.ngfiles.com/images/2655000/2655047_urutaudevstudios_airplane-animation-pixel-art-game.gif?f1659140280",
        description: "3D Interactable Sky Island",
        link: "https://verdant-cupcake-e6a27a.netlify.app/"
    },
    {
        img:"https://art.pixilart.com/170f54c4f7fa6cb.gif",
        description:"Nike landing page website's recreation (Frontend only)",
        link:"https://gorgeous-mermaid-314b25.netlify.app/"
    },
    {
        img:"https://media.istockphoto.com/id/1015350564/vector/pixel-art-vector-weather-application-icons-set.jpg?s=612x612&w=0&k=20&c=OVdCKUnMuuaD9OuFwU0UO3N5pbClY70s42gOvysdD-I=",
        description: "An android application, designed to deliver daily weather forecasts to users in a day-to-day life.",
        link: "https://github.com/toby12352/OpenWeather",
    },
    {
        img:"https://community.gamedev.tv/uploads/db2322/original/3X/0/a/0a86cbc5e12df24cb8c1ae277c4332a2d2a95ad4.png",
        description: "A lightweight course management API, designed for education industry's use and powered with enhanced database security and scalability. Similar to Canvas.",
        link: "https://github.com/toby12352/Tarpaulin-Restful-API",
    },
    {
        img:"https://img.freepik.com/premium-vector/take-board-with-pixel-art-style_475147-252.jpg",
        description: "An android application which provides users with the most recent trending movies and TVseries information like IMDB.",
        link: "https://github.com/toby12352/Eivom",
    },
    {   
        img:"https://i.ibb.co/ygvbhVM/resume-logo3.png",
        description: "Full résumé — experience, education, and skills",
        link: "/resume",
    },
];

const dataresume = {
  name: "Tun Aung Thaung",
  title: "Full-Stack Developer",
  summary:
    "Full-Stack Developer with 3+ years of experience building and shipping responsive web apps with React.js, React Native, Node.js, and TypeScript. Experienced in startup environments, shipping end-to-end products.",
  contact: {
    email: "tobythaung@gmail.com",
    phone: "+1-541-908-2749",
    website: "tobythaung.xyz",
    websiteUrl: "https://tobythaung.xyz",
  },
  experience: [
    {
      company: "Reloop (Lby Limited)",
      location: "Vientiane, Laos",
      role: "Lead Full-Stack Engineer",
      dates: "June 2026 – December 2026 (Expected)",
      bullets: [
        "Two-sided marketplace: Built Reloop and Reloop Partner as separate Expo apps (plus a Next.js marketing site) for surplus food pickup in Vientiane. Solo on engineering for a private beta of about 40 mixed testers; no failed reserve-to-pickup paths reported so far.",
        "Last-bag oversell: Stopped two customers from claiming the same last surplus bag by reserving stock inside a Postgres transaction (row locks + hold expiry that puts inventory back if payment never finishes).",
        "Paid only from the server: Running real LAK bank-QR checkouts in sandbox today: customers upload proof, but only a server-side confirm can mark an order paid; the phone app cannot flip the status.",
        "One login, two apps: Same Supabase account works in both apps, but store tools stay locked behind partner membership and approval (RLS), with separate Google/Apple/email redirect URLs per app.",
      ],
    },
    {
      company: "Mudita Hospital",
      location: "Yangon, Myanmar",
      role: "Sole Full-Stack Developer",
      dates: "September 2026 – October 2026",
      bullets: [
        "Clinic system on LAN: Replaced paper daily reports and a patchwork of tools with an offline Windows app used at three clinic desks, processing about 100–200 OPD and pharmacy bills a day (Go, SQLite, React/Tauri).",
        "One stock pipeline: Tied OPD, OT case-cart, and pharmacy into one inventory path so a voided bill puts the exact medicine batches back instead of leaving stock and cash out of sync.",
        "Multi-desk safety: Kept totals and stock correct when desks billed at the same time using transactional pay/issue paths and SQLite WAL, not optimistic UI updates.",
        "Handoff without cloud: Shipped installers, auto-restart for the API, scheduled backups, EN/Myanmar UI, and receipt printing so the clinic could run without me on site.",
      ],
    },
    {
      company: "Oregon State University",
      location: "Portland, OR",
      role: "Lead Web Developer",
      dates: "June 2024 – July 2026",
      bullets: [
        "Event Management System: Led development and maintenance of the EECS event system for 39 university events and 2,100+ student participants, including career fairs, graduation ceremonies, and technical workshops.",
        "Applications and Integrations: Built event registration portals, CRM integrations, and internal job and résumé systems. These efforts contributed to a 14% increase in student engagement, while webinar production grew from 28 to 41 events year over year.",
        "Reporting and Analytics: Built dashboards for registration tracking and web analytics, with filtering and CSV/PDF exports to help departments monitor events and review results.",
      ],
    },
    {
      company: "eNotebook Startup",
      location: "Corvallis, OR",
      role: "Co-Lead Full-Stack Developer",
      dates: "August 2023 – June 2026",
      bullets: [
        "Multi-Tenant SaaS: Co-led development of a SaaS platform using React, Flask, and AWS EC2/S3, implementing tenant-aware backend logic to keep customer data separated.",
      ],
    },
  ],
  education: [
    {
      school: "University of Ottawa",
      location: "Ottawa, Canada",
      degree: "Master of Computer Science (Incoming)",
      dates: "Jan. 2027 – Jan. 2029 (Expected)",
    },
    {
      school: "Oregon State University",
      location: "Oregon, U.S.",
      degree: "B.S. in Applied Computer Science",
      dates: "Sep. 2018 – Jun. 2023",
      detail: "GPA: 3.39/4.0",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Go", "SQL", "Python", "PHP"],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "React",
        "React Native (Expo)",
        "Next.js",
        "Flask",
        "Tailwind CSS",
      ],
    },
    {
      category: "Databases & Backend",
      items: ["PostgreSQL", "SQLite", "Supabase", "REST APIs"],
    },
    {
      category: "Cloud & Tools",
      items: ["AWS (EC2, S3)", "Git", "Tauri"],
    },
  ],
};

const dataportfolio = [...datafeatured, ...datapersonal];

const contactConfig = {
  YOUR_EMAIL: "tobythaung@gmail.com",
  YOUR_FONE: "(541)908-2749",
  description: "Contact me via email or phone number!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_ox69sum",
  YOUR_TEMPLATE_ID: "template_xa6sgr1",
  YOUR_PUBLIC_KEY: "QLf8DwQXA5_NmsPZL",
};

const socialprofils = {
  github: "https://github.com/toby12352",
  linkedin: "https://linkedin.com/in/tobythaung",
};
export {
  meta,
  dataabout,
  dataportfolio,
  datafeatured,
  datapersonal,
  dataresume,
  worktimeline,
  skills,
  tools,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
