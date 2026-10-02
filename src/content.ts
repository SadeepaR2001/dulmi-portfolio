export interface Project { name: string; eyebrow: string; headline: string; description: string; technologies: string[]; detailTitle: string; detailHtml: string; }
export interface Profile { name: string; title: string; supportingLine: string; introduction: string; location: string; email: string; github: string; linkedin: string; cv: string; portrait: string; }
// Edit trusted HTML in sections/detailHtml; never insert visitor-submitted content here.
export const profile: Profile = {
  "name": "Dulmi Hitihamillage",
  "title": "Software Developer",
  "supportingLine": "Web & Mobile Development • Applied Machine Learning",
  "introduction": "I build web and mobile applications with React, Node.js, and Flutter. Currently pursuing an MSc in Computational Sciences, I’m expanding my experience in applied machine learning through projects that connect predictive models, conversational AI, and practical user interfaces.",
  "location": "Sudbury, Ontario, Canada",
  "email": "hasaradulmi@gmail.com",
  "github": "https://github.com/DulmiHasara",
  "linkedin": "https://www.linkedin.com/in/dulmi-hasara/",
  "cv": "Dulmi-CV.pdf",
  "portrait": "dulmi-portrait.webp"
};
export const projects: Project[] = [
  {
    "name": "Aqua Expert",
    "eyebrow": "01 · APPLIED MACHINE LEARNING",
    "headline": "Making water-quality information clearer.",
    "description": "A mobile application combining machine learning for water-potability assessment, conversational AI, and data visualization to help users interpret water-quality information.",
    "technologies": [
      "Python",
      "Flask",
      "scikit-learn",
      "Pandas",
      "Flutter",
      "OpenAI API"
    ],
    "detailTitle": "Explore the project",
    "detailHtml": "<h4>My contribution</h4><p>Developed the mobile application with a Python Flask backend, integrating ML-based assessment, conversational AI, and visual explanations.</p><h4>Technology in context</h4><p>Flutter supports the mobile experience. Python, scikit-learn and Pandas support the machine learning and data work, with Flask providing the backend and the OpenAI API supporting conversational AI.</p>"
  },
  {
    "name": "Wave POS",
    "eyebrow": "02 · WEB DEVELOPMENT",
    "headline": "Everyday retail, connected.",
    "description": "Responsive interfaces and API integrations for sales, inventory, authentication, and employee management.",
    "technologies": [
      "React",
      "Node.js",
      "MySQL",
      "REST APIs"
    ],
    "detailTitle": "My contribution",
    "detailHtml": "<p>Built responsive user interfaces and connected application features to backend APIs across core point-of-sale workflows.</p>"
  },
  {
    "name": "My SLT",
    "eyebrow": "03 · MOBILE DEVELOPMENT",
    "headline": "A better mobile experience.",
    "description": "Contributed to the MySLT mobile application through interface development, API integration, and debugging.",
    "technologies": [
      "Flutter",
      "Dart",
      "REST APIs"
    ],
    "detailTitle": "My contribution",
    "detailHtml": "<p>Worked as part of the Sri Lanka Telecom development team, implementing user interfaces, integrating services, and resolving issues to improve usability and reliability.</p>"
  }
];
export const sections: Record<string, string> = {
  "safeDrive": "<div><p class=\"eyebrow\">04 · RESEARCH &amp; DESIGN</p><h3>SafeDrive</h3></div><div><p>Exploring smartphone-based driver fatigue detection in a five-member team, with requirements for facial monitoring, fatigue alerts, rest-stop recommendations, and emergency location sharing.</p><div class=\"tags\"><span>Computer vision</span><span>Machine learning</span><span>Requirements analysis</span></div></div><span class=\"research-label\">Group project</span>",
  "about": "<div class=\"wrap about-grid\"><div><p class=\"eyebrow\">02 / A LITTLE ABOUT ME</p><h2>Curious by nature.<br/><span>Developer by practice.</span></h2></div><div><p class=\"about-lead\">I enjoy turning complex requirements into applications that feel straightforward to use.</p><p>My experience spans web development with React and Node.js, and mobile development with Flutter and Dart. I’m currently pursuing an MSc in Computational Sciences at Laurentian University, building on my software engineering background.</p><p>Through academic projects, I’m exploring machine learning, conversational AI, and data visualization—and how they fit into useful software.</p><div class=\"skill-groups\"><div><h4>Web</h4><p>React · Node.js · REST APIs</p><h4>Backend &amp; databases</h4><p>Flask · MySQL</p></div><div><h4>Mobile</h4><p>Flutter · Dart</p></div><div><h4>ML &amp; data</h4><p>Python · scikit-learn · Pandas · Academic machine learning</p></div><div><h4>Tools &amp; integration</h4><p>Git · GitHub · OpenAI API</p></div></div></div></div>",
  "journey": "<div><p class=\"eyebrow\">03 / THE JOURNEY</p><h2>Experience<br/>&amp; education.</h2><a class=\"text-link\" download=\"\" href=\"Dulmi-CV.pdf\">Download my full CV</a></div><div class=\"timeline\"><p class=\"timeline-label\">PROFESSIONAL EXPERIENCE</p><article><div class=\"row\"><h3>Software Developer</h3><span>Jul 2024 — Mar 2026</span></div><h4>Codewaves Pvt Ltd</h4><p>Developed and maintained web applications using React, Node.js, Python, REST APIs, and databases. Built responsive interfaces, integrated services, and collaborated using Git and GitHub.</p></article><article><div class=\"row\"><h3>Mobile Developer</h3><span>Jul 2023 — Jun 2024</span></div><h4>Sri Lanka Telecom</h4><p>Developed Flutter and Dart application features, integrated APIs, forms, authentication, and data management, and tested and debugged applications.</p></article><p class=\"timeline-label education-label\">EDUCATION</p><article><div class=\"row\"><h3>MSc, Computational Sciences</h3><span>May 2026 — Present</span></div><h4>Laurentian University</h4></article><article><div class=\"row\"><h3>BEng (Hons), Software Engineering</h3><span>Jan 2022 — Jun 2025</span></div><h4>University of Westminster, UK</h4><p>Second Upper Class</p></article></div>",
  "contact": "<div class=\"wrap\"><p class=\"eyebrow\">04 / LET'S CONNECT</p><h2>Good things start<br/>with a conversation.</h2><p>Have a role, a project, or an idea in mind?<br/>I'd love to hear from you.</p><a class=\"email\" href=\"mailto:hasaradulmi@gmail.com\">hasaradulmi@gmail.com</a><div class=\"contact-links\"><a href=\"https://github.com/DulmiHasara\" rel=\"noopener noreferrer\" target=\"_blank\">GitHub</a><a href=\"https://www.linkedin.com/in/dulmi-hasara/\" rel=\"noopener noreferrer\" target=\"_blank\">LinkedIn</a><a download=\"\" href=\"Dulmi-CV.pdf\">Download CV</a></div></div>"
};
