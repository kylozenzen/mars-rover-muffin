'use strict';

window.DEMO_CLIENTS = [
  {
    id: 'client_nike',
    name: 'Sarah Chen',
    company: 'Nike',
    email: 'sarah.chen@nike.com',
    color: '#cafd00',
    colorText: '#3a4a00',
    initials: 'SC'
  },
  {
    id: 'client_adobe',
    name: 'Marcus Reyes',
    company: 'Adobe',
    email: 'marcus.reyes@adobe.com',
    color: '#bba2ff',
    colorText: '#3a0093',
    initials: 'MR'
  },
  {
    id: 'client_liquid',
    name: 'Dev Patel',
    company: 'Liquid Death',
    email: 'dev@liquiddeath.com',
    color: '#0d0f0c',
    colorText: '#cafd00',
    initials: 'DP'
  }
];

window.DEMO_PROJECTS = [
  {
    id: 'proj_nike',
    clientId: 'client_nike',
    name: 'Urban Run Campaign',
    status: 'active',
    token: 'RCT-nike-x9842',
    createdAt: '2024-10-01',
    posts: [
      {
        id: 'p1', title: 'Campaign Hero Shot', version: 3, platform: 'Instagram',
        caption: 'Run the city. Own the night. #NikeRun #UrbanAthletes',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        status: 'approved', feedback: '', timestamp: '10:15 AM',
        versions: ['v1 - Original', 'v2 - Color adjusted', 'v3 - Logo repositioned'],
        comments: [
          { from: 'creator', name: 'Jordan D.', av: 'J', text: 'Here is the final hero shot. Adjusted color grading as discussed.', time: '9:45 AM' },
          { from: 'client',  name: 'Sarah Chen', av: 'S', text: 'Love the energy. Can you make the shoe pop a bit more?', time: '10:02 AM' },
          { from: 'creator', name: 'Jordan D.', av: 'J', text: 'Done - bumped contrast on the product by 15%. Check v3.', time: '10:10 AM' },
          { from: 'client',  name: 'Sarah Chen', av: 'S', text: 'Perfect. Approved!', time: '10:15 AM' }
        ]
      },
      {
        id: 'p2', title: 'Story Series #1', version: 2, platform: 'Instagram Story',
        caption: 'Your city is your track. New drops every Friday.',
        image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&q=80',
        status: 'pending', feedback: '', timestamp: '11:30 AM',
        versions: ['v1 - First draft', 'v2 - Typography updated'],
        comments: [
          { from: 'creator', name: 'Jordan D.', av: 'J', text: 'Story series #1 ready for review!', time: '11:30 AM' }
        ]
      },
      {
        id: 'p3', title: 'Product Detail', version: 1, platform: 'Feed',
        caption: 'Engineered for the pavement. The new Air Urban II. Available now.',
        image: 'https://images.unsplash.com/photo-1556906781-9a412961a28c?w=800&q=80',
        status: 'changes', feedback: 'Background too dark. Make shoe color more accurate.',
        timestamp: 'Yesterday',
        versions: ['v1 - Initial submission'],
        comments: [
          { from: 'creator', name: 'Jordan D.', av: 'J', text: 'Product detail shot ready for your eyes.', time: 'Yesterday' },
          { from: 'client',  name: 'Sarah Chen', av: 'S', text: 'Background too dark. Make shoe color more accurate.', time: 'Yesterday 4:15 PM' }
        ]
      }
    ]
  },
  {
    id: 'proj_adobe',
    clientId: 'client_adobe',
    name: 'Adobe Max 2024',
    status: 'active',
    token: 'RCT-adobe-m2024',
    createdAt: '2024-10-10',
    posts: [
      {
        id: 'pa1', title: 'Keynote Teaser', version: 1, platform: 'Twitter/X',
        caption: 'Something big is coming to #AdobeMax. Mark your calendar.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
        status: 'pending', feedback: '', timestamp: '2h ago',
        versions: ['v1 - First draft'],
        comments: [
          { from: 'creator', name: 'Sam A.', av: 'S', text: 'Teaser ready. Went minimal to build intrigue.', time: '2h ago' }
        ]
      }
    ]
  },
  {
    id: 'proj_liquid',
    clientId: 'client_liquid',
    name: 'Hydration Ritual',
    status: 'review',
    token: 'RCT-liquid-h2o',
    createdAt: '2024-10-15',
    posts: []
  }
];
