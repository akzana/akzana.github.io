import frogStream from '../assets/images/projects/CreatorStreamPage - Frog Stream - localhost.png';
import ergo from '../assets/images/projects/Angle_2_Solid.png';

const project = [
  {
    name: 'Frog Stream',
    photo: frogStream,
    category: 'react',
    text: 'Frog Stream is a streaming platform owned by the creators. The platform will host para-social interactions while providing a safe space for all users. I want it to be operated like Nebula.tv, look like Spotify, and feel like Twitch.',
    tech: ['react', 'vitejs', 'html', 'css', 'javascript', 'sass', 'git'],
    property: ['Provides a safe space for marginalised content creators.',
      'Creators on Frog Stream will own an equal share in the platform.',
      'Live streaming games, music, art, and other content using ws and obs-websocket-js.',
      'Live chat using socket.io.',
    ],
    date: 'DEC 2024',
    link: 'https://github.com/akzana/frog-stream-capstone',
    learn: ['Applying socket.io and OBS websocket libraries.',
      'Using Express.js to host a server.',
      'Using React Vite to build a frontend.',
    ]
  },
  {
    name: 'ERGO - Mastodon Medical Solutions',
    photo: ergo,
    category: 'python',
    text: 'Co-founded Mastodon Medical Solutions LLP with interdisciplinary team. We are a lean start-up. Oversee the planning and manufacturing projects for the winner of the 2023 CodeHack competition. We achieved first place of 10 teams by collaborating with an interdisciplinary team and developing ERGO, a innovative product that addresses waste management issues impacting the dignity of the patients in isolated health care settings. This is a continuous passion project.',
    tech: ['python', 'arduino','jira'],
    property: ['A toilet-sink combination, self-contained waste management system.',
      'Working with Island Health and the Nurses and Nurse Practitioners of BC to design a product that meets the needs of the patients.',],
    date: 'MAR 2023',
    // link: 'https://github.com/akzana/frog-stream-capstone',
    learn: ['Project management and agile development.',
      'Time, cost, scope management.',
      'Product ownership.',
    ]
  },

]

export default project;