import app, { handleTutorialSelection } from "../firebaseConfig.js";

// Update the handleTutorialSelection function to save data in Firebase Realtime Database
function handleTutorialSelection(topic, tutorial, isChecked) {
  const database = firebase.database();
  const selectedTutorialsRef = database.ref('selectedTutorials');

  selectedTutorialsRef.child(topic).transaction((topicTutorials) => {
    if (!topicTutorials) {
      topicTutorials = [];
    }

    if (isChecked) {
      topicTutorials.push(tutorial);
    } else {
      const index = topicTutorials.indexOf(tutorial);
      if (index !== -1) {
        topicTutorials.splice(index, 1);
      }
    }

    return topicTutorials;
  });
}


// Data for the full-stack developer roadmap
const roadmapData = [
  {
    section: 'Frontend Development',
    topics: [
      {
        name: 'JavaScript',
        tutorials: [
          'JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours',
          'JavaScript Full Course (2023) - Beginner to Pro - Part 1',
          // Add more tutorials here
        ],
      },
      {
        name: 'HTML',
        tutorials: [
          'HTML Crash Course For Absolute Beginners',
          'HTML5 and CSS3 for Beginners - Web Development',
          // Add more tutorials here
        ],
      },
      {
        name: 'CSS',
        tutorials: [
          'CSS Crash Course For Beginners',
          'CSS Flexbox Tutorial - Learn CSS Flexbox in 20 Minutes',
          // Add more tutorials here
        ],
      },
      {
        name: 'React.js',
        tutorials: [
          'React JS Crash Course 2023',
          'React JS Full Course for Beginners - React.js Tutorial 2023',
          // Add more tutorials here
        ],
      },
      {
        name: 'React Native',
        tutorials: [
          'React Native Crash Course for Beginners',
          'React Native Full Course - Learn React Native in 8 Hours',
          // Add more tutorials here
        ],
      },
      {
        name: 'Vite',
        tutorials: [
          'Vite.js Crash Course - Vite.js Tutorial for Beginners',
          // Add more tutorials here
        ],
      },
    ],
  },
  {
    section: 'Backend Development',
    topics: [
      {
        name: 'Node.js',
        tutorials: [
          'Node.js Crash Course 2023',
          'Node.js Full Course for Beginners - Learn Node.js in 8 Hours',
          // Add more tutorials here
        ],
      },
      {
        name: 'PHP',
        tutorials: [
          'PHP Crash Course For Beginners',
          'PHP Full Course - Learn PHP in 8 Hours',
          // Add more tutorials here
        ],
      },
      {
        name: 'Symfony',
        tutorials: [
          'Symfony Crash Course - Symfony Tutorial for Beginners',
          // Add more tutorials here
        ],
      },
    ],
  },
  {
    section: 'Databases',
    topics: [
      {
        name: 'MySQL',
        tutorials: [
          'MySQL Crash Course - MySQL Tutorial for Beginners',
          // Add more tutorials here
        ],
      },
      {
        name: 'PostgreSQL',
        tutorials: [
          'PostgreSQL Crash Course - PostgreSQL Tutorial for Beginners',
          // Add more tutorials here
        ],
      },
      {
        name: 'Firebase',
        tutorials: [
          'Firebase Crash Course - Firebase Tutorial for Beginners',
          // Add more tutorials here
        ],
      },
    ],
  },
  {
    section: 'Tools and Frameworks',
    topics: [
      {
        name: 'Webpack',
        tutorials: [
          'Webpack Crash Course - Webpack Tutorial for Beginners',
          // Add more tutorials here
        ],
      },
      {
        name: 'Babel',
        tutorials: [
          'Babel Crash Course - Babel Tutorial for Beginners',
          // Add more tutorials here
        ],
      },
      {
        name: 'Apache',
        tutorials: [
          'Apache HTTP Server Crash Course - Apache Tutorial for Beginners',
          // Add more tutorials here
        ],
      },
    ],
  },
];

// Generate the roadmap sections dynamically
function generateRoadmap() {
  const main = document.querySelector('main');
  roadmapData.forEach((data) => {
    const section = document.createElement('section');
    section.id = data.section.replace(/\s+/g, '').toLowerCase();
    section.innerHTML = `
      <h2>${data.section}</h2>
      ${generateTopicLists(data.topics)}
    `;
    main.appendChild(section);
  });
}

// Generate the nested lists of tutorials for each topic
function generateTopicLists(topics) {
  let html = '';
  topics.forEach((topic) => {
    html += `
      <details>
        <summary>${topic.name}</summary>
        <ul>
          ${topic.tutorials.map((tutorial) => `
            <li>
              <label>
                <input type="checkbox" onchange="handleTutorialSelection('${topic.name}', '${tutorial}', this.checked)">
                ${tutorial}
              </label>
            </li>
          `).join('')}
        </ul>
      </details>
    `;
  });
  return html;
}

// Generate the roadmap on page load
document.addEventListener('DOMContentLoaded', generateRoadmap);

