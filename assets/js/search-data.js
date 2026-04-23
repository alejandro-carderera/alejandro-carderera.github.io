// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by Alejandro Carderera on convex optimization, conditional gradient methods, and machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Open-source software for convex optimization and machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-paper-locally-accelerated-conditional-gradients-accepted-at-aistats-2020",
          title: 'Paper “Locally Accelerated Conditional Gradients” accepted at AISTATS 2020.',
          description: "",
          section: "News",},{id: "news-paper-parameter-free-locally-accelerated-conditional-gradients-accepted-at-icml-2021",
          title: 'Paper “Parameter-Free Locally Accelerated Conditional Gradients” accepted at ICML 2021.',
          description: "",
          section: "News",},{id: "news-paper-simple-steps-are-all-you-need-frank-wolfe-and-generalized-self-concordant-functions-accepted-at-neurips-2021",
          title: 'Paper “Simple Steps are all you Need: Frank-Wolfe and Generalized Self-Concordant Functions” accepted...',
          description: "",
          section: "News",},{id: "news-completed-my-ph-d-in-machine-learning-at-georgia-institute-of-technology-advised-by-prof-sebastian-pokutta",
          title: 'Completed my Ph.D. in Machine Learning at Georgia Institute of Technology, advised by...',
          description: "",
          section: "News",},{id: "news-joined-quantfury-as-a-quantitative-researcher-working-on-ml-for-algorithmic-trading",
          title: 'Joined Quantfury as a Quantitative Researcher, working on ML for algorithmic trading.',
          description: "",
          section: "News",},{id: "news-joined-github-as-a-senior-applied-researcher-working-on-copilot",
          title: 'Joined GitHub as a Senior Applied Researcher, working on Copilot.',
          description: "",
          section: "News",},{id: "news-book-conditional-gradient-methods-from-core-principles-to-ai-applications-published-by-siam-also-available-on-arxiv",
          title: 'Book “Conditional Gradient Methods: From Core Principles to AI Applications” published by SIAM....',
          description: "",
          section: "News",},{id: "news-promoted-to-staff-applied-researcher-at-github-copilot",
          title: 'Promoted to Staff Applied Researcher at GitHub Copilot.',
          description: "",
          section: "News",},{id: "projects-cindy",
          title: 'CINDy',
          description: "Conditional Gradient-based Identification of Non-linear Dynamics from data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cindy/";
            },},{id: "projects-frankwolfe-jl",
          title: 'FrankWolfe.jl',
          description: "A high-performance and flexible toolbox for Frank-Wolfe algorithms and Conditional Gradients in Julia.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/frankwolfe_jl/";
            },},{id: "projects-socgs",
          title: 'SOCGS',
          description: "Second-Order Conditional Gradient Sliding for constrained optimization with quadratic convergence.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/socgs/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6C%65%6A%61%6E%64%72%6F.%63%61%72%64%65%72%65%72%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/alejandro-carderera", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/alejandrocarderera", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HvCPD1IAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
