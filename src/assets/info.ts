interface IInfo {
    name: string,
    profession: string,
    about: string,
    skills: string[],
    language: string[],
    socials: {
        email: string,
        telegram: string,
        linkedin: string,
        git: string,
        codewars: string
    },
    education:{
        icon: string,
        name: string,
        date: string,
        description: string,
    }[],
    career: {
        name: string,
        time: string,
        description: {
            name: string,
            description?: string[]
        }[]
    }[],
    projects: {
    name: string,
    description: string,
    stack: string[],
    img: string,
    url: string,
    git: string,
    }[]
}
export const info: IInfo = {
    name: 'Daniil Beniash',
    profession: 'Frontend developer',
    // desckription:
    about: "During my school years, I realized that I like to decide different kinds computer task, but only now i have opportunity to do it professionally. Why frontend? Here I can realize myself not only like developer but also show creativity. After course, I don't stop to improve mine knowledge in frondent and English language.",
    skills: ['HTML', 'CSS', 'JS', 'TS', 'React JS', 'Redux', 'Next JS', 'SCSS', 'Tailwind'],
    language: ['Russian', 'English B1'],
    socials: {
        email: 'daniilbeniash@gmail.com',
        telegram: 'https://t.me/daniilbeniash',
        linkedin: 'https://www.linkedin.com/in/daniil-beniash/',
        git: 'https://github.com/DaniilBenyash',
        codewars: 'https://www.codewars.com/users/Grander',
    },
    education: [
        {
            icon:"./PageOne/Education/tutor.png",
            name:"Tutor",
            date:"Dec. 2022 - till now",
            description:"English",
        },
        {
            icon:"./PageOne/Education/it.png",
            name:"<TeachMeSkills/>",
            date:"Nov. 2021 - July 2022",
            description:"Frontend developer",
        },
        {
            icon:"./PageOne/Education/univ.png",
            name:"Belarusian National Technical University",
            date:"2014 - 2019",
            description:"Faculty of Transport Communications - Engineer of road construction machines and equipment",
        }],
    career: [
        {name: 'Freelance', 
        time: 'July 2022 - till now', 
        description: [
            {name: 'Skills',
            description: [
            'Experience working with customers',
            'Web development experience',
            ]},
            {name: 'Results',
            description: [
            'Web development experience',
            ]}
        ]},
        {name: 'TeachMeSkills | Graduate',
        time: 'Nov. 2021 - July 2022',
        description: [
            {name: 'Skills',
            description: [
            'Strong knowledge and experience of JavaScript, HTML, CSS',
            'Development experience with React/Redux/TypeScript',
            'Experience with Git',
            'Development experience with SCSS and BEM preprocessor'
            ]},
            {name: 'Results',
            description: [
            'The graduation project was implemented: an Internet service for searching, sorting and viewing information about a film.',
            'The project was completed with all the tasks set, without going beyond deadlines'
            ]}
        ]}
    ],
    projects: [
        {name: 'Portfolio',
         description: 'My portfolio',
         stack: ['TypeScript', 'React', 'SCSS',],
         img: './projects/portfolio.png',
         url: 'https://ytil.by/',
         git: 'https://github.com/DaniilBenyash/Ytil.by',
        },
        {name: 'Ytil.by',
         description: 'Business card website for garbage disposal services',
         stack: ['TypeScript', 'NextJS', 'SCSS', 'Instagram API'],
         img: './projects/ytil.by.png',
         url: 'https://ytil.by/',
         git: 'https://github.com/DaniilBenyash/Ytil.by',
        },
        {name: 'vyvoz-musora-minsk.by',
         description: 'Business card website for garbage disposal services',
         stack: ['TypeScript', 'NextJS', 'Tailwind', 'Instagram API'],
         img: './projects/vyvoz-musora-minsk.by.png',
         url: 'https://vyvoz-musora-minsk.by/',
         git: 'https://github.com/DaniilBenyash/vyvoz-musora-minsk.by',
        },
        {name: 'TMS - Film',
         description: 'Site for searching, sorting and viewing information about films',
         stack: ['TypeScript','React', 'Redux (Saga/Toolkit)', 'SCSS', 'BEM'],
         img: './projects/tms-film.png',
         url: 'https://tms-film.netlify.app/',
         git: 'https://github.com/DaniilBenyash/tms_film',
        },
        {name: 'Currencies Directory',
         description: 'Here you can see information about the official exchange rate of the Belarusian ruble for foreign currencies, set by the National Bank of the Republic of Belarus',
         stack: ['HTML', 'CSS', 'JS'],
         img: './projects/currencies-directory.png',
         url: 'https://currencies-directory.netlify.app/',
         git: 'https://github.com/DaniilBenyash/Currencies-Directory',
        },
        {name: 'Pokemon tamagochi',
         description: 'Game about pokemons',
         stack: ['HTML', 'CSS', 'JS'],
         img: './projects/pokemon.png',
         url: 'https://poke-tamagochi.netlify.app/',
         git: 'https://github.com/DaniilBenyash/Pokemon-Tamagotchi',
        },
        {name: 'Tennis',
         description: 'Game tennis',
         stack: ['HTML', 'CSS', 'JS', 'Canvas'],
         img: './projects/tennis.png',
         url: 'https://canvas-tennis.netlify.app/',
         git: 'https://github.com/DaniilBenyash/Tennis',
        },
    ]
}