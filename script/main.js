// main.js

const jobs = [{
        title: "Software Engineer",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240208132102/girl.png",
        details: "Design, develop, and maintain software systems and applications using various programming languages.",
        location: "New York",
        jobType: "Full-time",
        experience: "3+ years",
        openPositions: "2",
        link: "#",
    },

    // Add more job objects here
    {
        title: "Data Analyst",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240208132102/girl.png",
        details: "Analyze and interpret data to provide insights and support decision-making processes.",
        location: "San Francisco",
        jobType: "Full-time",
        experience: "1-3 years",
        openPositions: "3",
        link: "#",
    },
    {
        title: "Graphic Designer",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240208132102/girl.png",
        details: "Create visual concepts to communicate ideas that inspire, inform, and captivate consumers.",
        location: "Los Angeles",
        jobType: "Part-time",
        experience: "0-1 years",
        openPositions: "1",
        link: "#",
    },
    {
        title: "Financial Analyst",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240208132102/girl.png",
        details: "Provide financial guidance and support to help businesses make sound investment decisions.",
        location: "Chicago",
        jobType: "Full-time",
        experience: "3+ years",
        openPositions: "2",
        link: "#",
    },
    {
        title: "Human Resources Manager",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240208132102/girl.png",
        details: "Oversee the recruitment, training, and management of staff to support organizational goals.",
        location: "New York",
        jobType: "Full-time",
        experience: "3+ years",
        openPositions: "1",
        link: "#",
    },
    {
        title: "Customer Service Representative",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240208132102/girl.png",
        details: "Address customer inquiries and resolve complaints to ensure customer satisfaction.",
        location: "Miami",
        jobType: "Full-time",
        experience: "0-1 years",
        openPositions: "2",
        link: "#",
    },
    {
        title: "Content Writer",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240208132102/girl.png",
        details: "Create engaging and informative content for various digital platforms and audiences.",
        location: "Seattle",
        jobType: "Part-time",
        experience: "1-3 years",
        openPositions: "1",
        link: "#",
    },
    {
        title: "Marketing Coordinator",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240208132102/girl.png",
        details: "Support marketing campaigns, events, and projects to drive brand awareness and lead generation.",
        location: "Boston",
        jobType: "Full-time",
        experience: "1-3 years",
        openPositions: "2",
        link: "#",
    },
    {
        title: "Network Administrator",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240208132102/girl.png",
        details: "Maintain and manage computer networks to ensure smooth operations and data security.",
        location: "Dallas",
        jobType: "Full-time",
        experience: "3+ years",
        openPositions: "1",
        link: "#",
    },
    {
        title: "Sales Manager",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240208132102/girl.png",
        details: "Lead and motivate sales teams to achieve revenue targets and business objectives.",
        location: "Atlanta",
        jobType: "Full-time",
        experience: "3+ years",
        openPositions: "1",
        link: "#",
    },
    {
        title: "Web Developer",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240208132102/girl.png",
        details: "Design, develop, and maintain websites and web applications to meet client needs.",
        location: "Houston",
        jobType: "Full-time",
        experience: "1-3 years",
        openPositions: "2",
        link: "#",
    }

];

// main.js
localStorage.setItem('jobs', JSON.stringify(jobs));

// Rendering jobs list
const jobsContainer = document.querySelector(".jobs-list-container .jobs");

const renderJobs = (jobs) => {
    jobsContainer.innerHTML = "";
    jobs.forEach((job, index) => {
        const jobCard = `
            <div class="job">
                <img src="${job.image}" alt="${job.title}">
                <h3 class="job-title">${job.title}</h3>
                <div class="details">${job.details}</div>
                <a href="job-details.html?index=${index}" class="details-btn">Apply Now</a>
                <span class="open-positions">${job.openPositions} open position${job.openPositions > 1 ? "s" : ""}</span>
            </div>
        `;
        jobsContainer.innerHTML += jobCard;
    });
};

// Apply filters based on user input
const applyFilters = () => {
    const cityFilter = document.getElementById("city").value.toLowerCase();
    const jobTypeFilter = document.getElementById("job-type").value.toLowerCase();
    const experienceFilter = document.getElementById("experience").value.toLowerCase();

    const filteredJobs = jobs.filter((job) => {
        const cityMatch = job.location.toLowerCase().includes(cityFilter);
        const jobTypeMatch = job.jobType.toLowerCase().includes(jobTypeFilter) || jobTypeFilter === "all";
        const experienceMatch = job.experience.toLowerCase().includes(experienceFilter) || experienceFilter === "all";
        return cityMatch && jobTypeMatch && experienceMatch;
    });

    renderJobs(filteredJobs);
};

// Attach event listeners to search input fields
document.querySelectorAll(".filter-input").forEach((filter) => {
    filter.addEventListener("input", applyFilters);
});

// Render initial jobs list
renderJobs(jobs);

// hamburger

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav-links ul').classList.toggle('active');
    document.querySelector('.hamburger-menu').classList.toggle('change');
    document.querySelector('.navbar').classList.toggle('active'); // Toggle active class on navbar
});