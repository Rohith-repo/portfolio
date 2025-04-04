window.PorfolioConfig = {
  name: 'ROHITH B',
  jobDescription: 'I am a passionate problem solver and DSA enthusiast, actively solving challenges on LeetCode and CodeChef. I thrive on tackling complex algorithms and optimizing solutions for efficiency.',
  skills: [
    {
      name: 'Python',
      description: 'I have strong knowledge of Python and actively solve problems on LeetCode and CodeChef, continuously improving my problem-solving skills.'
    },
    {
      name: 'DSA',
      description: 'I am proficient in DSA and have a strong understanding of data structures and algorithms.'
    },
    {
      name: 'SQL',
      description: 'I have basic experience working with SQL databases and a solid understanding of SQL concepts.'
    }
  ],
  works: [
    {
      name: 'Phishing Website Detection',
      link: 'https://github.com/Rohith-repo/Phishing-Website-Detection',
      description: 'Developed an ML-based phishing detection system with 90% accuracy by analyzing 10,000+ URLs and optimizing detection using multiple ML models.'
    },
    {
      name: 'Auto-Complete System',
      link: 'https://github.com/Rohith-repo/Auto-Complete-System',
      description: 'Designed and implemented a real-time search suggestion system using Trie and Min-Heap,Indexed 100,000+ words for fast lookup, achieving O(N) search time complexity and enforced top-k word ranking using Min-Heap, reducing search time by 60%.'
    },
    {
      name: 'Simple Registration Form',
      link: 'https://github.com/Rohith-repo/Student-Registration-Python',
      description: 'Created a fully responsive registration form using HTML & CSS, ensuring seamless user interaction across devices , Integrated MySQL database with Python, enabling efficient user data insertion and retrieval.'
    }
  ],
  hobbies: [
    {
      name: 'B.Tech Artificial Intelligence and Data Science (2022 - 2026)',
      description: 'KIT - Kalaignarkarunanidhi Institute of Technology. Coimbabatore, Tamil Nadu'
      
    },
    {
      name: 'HSC (2021 - 2022)',
      description: 'Isha Vidhya Matriculation Hr Sec School. Coimbatore, Tamil Nadu'
    },
    {
      name: 'SSLC (2019 - 2020)',
      description: 'Isha Vidhya Matriculation Hr Sec School. Coimbatore, Tamil Nadu'
    }
  ],
  contacts: {
   // email: 'rohith16725@gmail.com',
   // mobileNo: '+91 9842233629',
    //phoneNo: '+12 345 6789',
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/rohith-repo'
      },
      {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/rohith16725'
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/rohith.pvt__'
      }
    ]
  }
};

document.addEventListener("DOMContentLoaded", async function() {
  try {
      const response = await fetch("stats.json");
      const data = await response.json();
      document.getElementById("leetcode-count").textContent = data.leetcode.totalSolved;
      document.getElementById("codechef-rating").textContent = data.codechef.rating;
  } catch (error) {
      console.error("Error loading stats:", error);
  }

  // Pop-up animation when visible
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          }
      });
  }, { threshold: 0.2 });

  document.querySelectorAll(".stat-card").forEach(card => observer.observe(card));
});
