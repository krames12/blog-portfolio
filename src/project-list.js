import PugCheckImage from './images/Character-View-PugCheck.png'
import LUMDBImage from './images/Movie-List-LUMDB.jpg'

export default [
  {
    title: 'PugCheck Teams',
    image: PugCheckImage,
    technologies: ['Laravel', 'PHP', 'MySQL', 'SCSS'],
    links: [
      {
        url: 'https://teams.pugcheck.com',
        classes: 'icon fas fa-link',
      },
      {
        url: 'https://github.com/krames12/pugcheck-teams',
        classes: 'icon fab fa-github',
      },
    ],
    description: `A Warcraft raid team organization tool using Blizzard’s API.`,
  },
  {
    title: 'PugCheck',
    image: PugCheckImage,
    technologies: ['Laravel', 'PHP', 'MySQL', 'SCSS'],
    links: [
      {
        url: 'https://pugcheck.com/us/proudmoore/boombawks',
        classes: 'icon fas fa-link',
      },
      {
        url: 'https://github.com/krames12/pugcheck',
        classes: 'icon fab fa-github',
      },
    ],
    description: `A Warcraft character progression lookup tool using the
    World of Warcraft & WarcraftLogs API's.`,
  },
  {
    title: 'LUMDB',
    image: LUMDBImage,
    technologies: ['React', 'Javascript', 'SCSS'],
    links: [
      {
        url: 'https://focused-visvesvaraya-2ed5bf.netlify.com/',
        classes: 'icon fas fa-link',
      },
      {
        url: 'https://github.com/krames12/lumbd',
        classes: 'icon fab fa-github',
      },
    ],
    description: `Movie database that pulls the top 20 movies from
    TheMovieDB.org's movie and tv show API.`,
  },
]
