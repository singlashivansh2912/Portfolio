export const projects = [
  {
    id: 'erp-portal',
    title: 'ERP Web Portal',
    tagline: 'Designing clarity in complex academic systems',
    category: 'Web App · Enterprise',
    year: '2025',
    image: '/ERP Web.png',
    detailImage: '/ERP Web.png',
    description: 'Modern academic ERP dashboard focused on clarity, accessibility, and streamlined workflows.',
    color: '#f0abfc',
    liveDemo: 'https://erp-campusportal.web.app/',
    github: null,
    detail: {
      overview: 'A modern student ERP dashboard focused on simplifying academic workflows through clean UI and structured data presentation.',
      challenge: 'ERP systems often overwhelm users with dense information and poor navigation. Students need quick access to key data (attendance, grades, fees) without friction.',
      solution: 'A modular, card-based dashboard designed for clarity and speed, making academic data easy to scan and act upon.',
      keyDecisions: [
        'Card-based UI for quick scanning',
        'Color-coded status indicators',
        'Persistent sidebar navigation',
        'Focus on high-frequency actions'
      ],
      role: 'UI Designer and Developer',
      techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Figma'],
      impact: [
        'Reduced cognitive load through structured UI and visual hierarchy',
        'Improved accessibility of key actions like fee payment and assignment tracking',
        'Designed a scalable interface adaptable to additional ERP modules'
      ]
    }
  },
  {
    id: 'flow-state',
    title: 'Flow State',
    tagline: 'Designing non-linear exploration in web-based gaming',
    category: 'Game · 3D Web',
    year: '2026',
    image: '/Flow State 1.png',
    detailImage: '/Flow State 2.png',
    description: 'Non-linear 3D exploration puzzle game focused on immersive gameplay and environmental storytelling.',
    color: '#c9f31d',
    liveDemo: 'https://flow-state-v1.web.app/',
    github: null,
    detail: {
      overview: 'A 3D exploration puzzle game where players navigate, solve mini-games, and restore power systems.',
      challenge: 'Balancing player freedom with guidance in a non-linear environment without causing confusion.',
      solution: 'A guided open-world structure combining exploration with multiple gameplay mechanics and environmental storytelling.',
      keyDecisions: [
        'Tutorial-based onboarding',
        'Maze as a central exploration hub',
        'Multi-genre mini-games for engagement',
        'Progression via environmental restoration'
      ],
      role: '3D Models and UI Designer',
      techStack: ['Three.js', 'JavaScript', 'Blender', 'WebGL'],
      impact: [
        'Increased engagement through multi-layered gameplay design',
        'Encouraged exploration with non-linear progression',
        'Delivered a visually cohesive and interactive 3D web experience'
      ]
    }
  },
  {
    id: 'pharma-one',
    title: 'Pharma One',
    tagline: 'Building a reliable, data-driven inventory system',
    category: 'Desktop App · Healthcare',
    year: '2026',
    image: '/Pharma One.png',
    detailImage: '/Pharma One.png',
    description: 'Data-driven pharmaceutical inventory system with analytics, stock monitoring, and expiry tracking.',
    color: '#6ee7b7',
    liveDemo: null,
    github: null,
    detail: {
      overview: 'A pharmaceutical inventory management system focused on accuracy, tracking, and analytics.',
      challenge: 'Handling large datasets, stock tracking, and expiry management while ensuring reliability and performance.',
      solution: 'A SQL-driven system with structured data models and an analytics dashboard for operational insights.',
      keyDecisions: [
        'Designed normalized relational database',
        'Implemented stock and expiry alerts',
        'Dashboard with business metrics',
        'Efficient query handling'
      ],
      role: 'Database and UI Designer',
      techStack: ['SQL', 'Java', 'JDBC', 'FlatLaf'],
      impact: [
        'Improved inventory tracking accuracy and visibility',
        'Enabled faster decision-making through dashboard insights',
        'Built a scalable system for managing pharmaceutical operations'
      ]
    }
  },
  {
    id: 'spam-it',
    title: 'Spam It — LED Race Game',
    tagline: 'Blending physical interaction with competitive gameplay',
    category: 'Hardware · Game',
    year: '2026',
    image: '/Spam it.png',
    detailImage: '/Spam it.png',
    description: 'Arduino-powered real-time multiplayer LED racing game with tactile interaction.',
    color: '#818cf8',
    liveDemo: null,
    github: 'https://github.com/singlashivansh2912/Spam-It',
    detail: {
      overview: 'A two-player Arduino-based racing game controlled through physical button inputs.',
      challenge: 'Most games lack physical engagement, limiting interaction to screens. The goal was to create a fast, tactile, and competitive experience.',
      solution: 'A hardware-driven game system where players control LED cars through real-world inputs and navigate dynamic challenges.',
      keyDecisions: [
        'Real-time button input handling',
        'Dynamic gameplay obstacles',
        'Physical LED track for live feedback',
        'Balanced mechanics between speed and control'
      ],
      role: 'Electronics and Aesthetics',
      techStack: ['Arduino', 'C/C++', 'LED strips', 'Push buttons', 'Breadboard circuitry'],
      impact: [
        'Created an engaging tangible gaming experience beyond screens',
        'Demonstrated real-time hardware interaction and responsiveness',
        'Successfully merged game design with embedded systems'
      ]
    }
  }
];

export const designProcess = [
  {
    step: 1,
    title: 'Understand',
    description: 'Deep-dive into the problem space. Listen to stakeholders, empathize with users, and define the core challenge.',
    icon: '🔍'
  },
  {
    step: 2,
    title: 'Research',
    description: 'Analyze competitors, study user behavior, and gather data-driven insights to inform design decisions.',
    icon: '📊'
  },
  {
    step: 3,
    title: 'Ideate',
    description: 'Brainstorm solutions, sketch concepts, and explore multiple creative directions without constraints.',
    icon: '💡'
  },
  {
    step: 4,
    title: 'Design',
    description: 'Craft high-fidelity interfaces with attention to every pixel, interaction, and micro-animation.',
    icon: '🎨'
  },
  {
    step: 5,
    title: 'Iterate',
    description: 'Test with real users, gather feedback, and refine relentlessly until the experience feels effortless.',
    icon: '🔄'
  },
  {
    step: 6,
    title: 'Deliver',
    description: 'Hand off production-ready designs with detailed specs, and support developers through implementation.',
    icon: '🚀'
  }
];

export const tools = [
  'Figma', 'Framer', 'Blender', 'Photoshop',
  'Fusion 360', 'Illustrator', 'Canva', 'React',
  'Tailwind', 'Unity', 'Unreal Engine', 'Notion', 'Miro'
];

export const stats = [
  { value: 50, suffix: '+', label: 'Designs Created' },
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: 'K+', label: 'Lines of Code' },
  { value: 24, suffix: '/7', label: 'Passion for Design' }
];
