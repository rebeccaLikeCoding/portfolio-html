const sections = {
    profile: {
        title: "Rebecca Liu",
        content: `
            <h1 class="section-title">Rebecca Liu</h1>
            <p class="text-xl mb-4">Lead Software Engineer</p>
            <p class="mb-4">
                <i class="fas fa-envelope"></i> <a href="mailto:rebecca.liu@example.com">rebecca.liu@example.com</a><br>
                <i class="fas fa-phone"></i> <a href="tel:+61123456789">+61 123 456 789</a>
            </p>
            <p class="mb-4">
                Experienced software engineer with over 10 years of expertise in full-stack development, 
                specializing in scalable systems and cloud architecture. Proven track record in leading 
                development teams and delivering innovative solutions.
            </p>
            <div class="social-links">
                <a href="https://linkedin.com/in/rebecca-liu" class="social-link"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/rebeccalikeCoding" class="social-link"><i class="fab fa-github"></i></a>
            </div>
        `
    },
    skills: {
        title: "Technical Skills",
        content: `
            <h2 class="section-title">Technical Skills</h2>
            <div class="skills-container">
                <div class="skill-category">
                    <h3>Cloud & DevOps</h3>
                    <div class="chart-container">
                        <canvas id="devopsChart"></canvas>
                    </div>
                    <div class="skill-legend" id="devopsLegend"></div>
                </div>
                <div class="skill-category">
                    <h3>Backend</h3>
                    <div class="chart-container">
                        <canvas id="backendChart"></canvas>
                    </div>
                    <div class="skill-legend" id="backendLegend"></div>
                </div>
                <div class="skill-category">
                    <h3>Frontend</h3>
                    <div class="chart-container">
                        <canvas id="frontendChart"></canvas>
                    </div>
                    <div class="skill-legend" id="frontendLegend"></div>
                </div>
            </div>
        `
    },
    experience: {
        title: "Experience",
        content: `
            <h2 class="section-title">Professional Experience</h2>
            <div class="experience-item">
                <h3>Software Engineering Lead</h3>
                <p>Axis Technology Labs | Sydney, NSW</p>
                <p>January 2018 – December 2021</p>
                <ul class="mt-2">
                    <li><i class="fas fa-chevron-right"></i> Led team of 15 developers</li>
                    <li><i class="fas fa-chevron-right"></i> Developed AR/VR platform</li>
                    <li><i class="fas fa-chevron-right"></i> Optimized backend systems</li>
                </ul>
            </div>
            <div class="experience-item">
                <h3>Senior Software Engineer</h3>
                <p>Stark Industries | Melbourne, VIC</p>
                <p>January 2013 – December 2017</p>
                <ul class="mt-2">
                    <li><i class="fas fa-chevron-right"></i> Designed AI systems</li>
                    <li><i class="fas fa-chevron-right"></i> Led infrastructure development</li>
                    <li><i class="fas fa-chevron-right"></i> Managed team of 10 engineers</li>
                </ul>
            </div>
        `
    },
    education: {
        title: "Education",
        content: `
            <h2 class="section-title">Education</h2>
            <div class="education-card">
                <div class="school-logo">
                    <i class="fas fa-university"></i>
                </div>
                <div>
                    <h3>Master of Business Administration</h3>
                    <p>Harvard Business School</p>
                    <p>2020 - 2022</p>
                </div>
            </div>
            <div class="education-card">
                <div class="school-logo">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <div>
                    <h3>Bachelor of Computer Science</h3>
                    <p>University of Melbourne</p>
                    <p>2008 - 2012</p>
                </div>
            </div>
        `
    },
    awards: {
        title: "Awards",
        content: `
            <h2 class="section-title">Awards & Recognition</h2>
            <ul class="skills-list">
                <li><i class="fas fa-trophy"></i> Outstanding Contribution Award, Stark Industries (2015)</li>
                <li><i class="fas fa-trophy"></i> Innovator of the Year, Axis Technology Labs (2020)</li>
                <li><i class="fas fa-trophy"></i> Outstanding Contribution Award, Stark Industries (2019)</li>
                <li><i class="fas fa-trophy"></i> Innovator of the Year, Axis Technology Labs (2018)</li>
                <li><i class="fas fa-trophy"></i> Outstanding Contribution Award, Stark Industries (2015)</li>
                <li><i class="fas fa-trophy"></i> Innovator of the Year, Axis Technology Labs (2017)</li>
            </ul>
        `
    }
};

let currentSection = 'profile';
let isFlipped = false;

function createSkillsCharts() {
    const chartConfigs = {
        devops: {
            data: {
                labels: ['AWS', 'Azure', 'GCP'],
                values: [35, 25, 20, 15, 5],
                colors: ['#FF6384', '#36A2EB', '#FFCE56']
            },
            elementId: 'devopsChart'
        },
        backend: {
            data: {
                labels: ['Python', 'Node.js', 'Java', 'PostgreSQL'],
                values: [40, 30, 20, 10],
                colors: ['#FF9F40', '#4BC0C0', '#36A2EB', '#FF6384']
            },
            elementId: 'backendChart'
        },
        frontend: {
            data: {
                labels: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
                values: [35, 25, 25, 15],
                colors: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0']
            },
            elementId: 'frontendChart'
        }
    };

    for (const [key, config] of Object.entries(chartConfigs)) {
        const ctx = document.getElementById(config.elementId);
        if (!ctx) continue;

        if (ctx.chart) {
            ctx.chart.destroy();
        }

        ctx.chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: config.data.labels,
                datasets: [{
                    data: config.data.values,
                    backgroundColor: config.data.colors,
                    borderWidth: 2,
                    borderColor: document.documentElement.classList.contains('dark') ? '#1e293b' : '#ffffff'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000' // Set legend color based on theme
                        }
                    }
                }
            }
        });
    }
}

const originalSwitchSection = switchSection;
switchSection = function (sectionId) {
    originalSwitchSection(sectionId);
    if (sectionId === 'skills') {
        setTimeout(createSkillsCharts, 100); 
    }
};

function switchSection(sectionId) {
    if (currentSection === sectionId) return;

    const targetFace = isFlipped ? document.querySelector('.card-front') : document.querySelector('.card-back');
    const section = sections[sectionId];

    targetFace.innerHTML = section.content;

    document.querySelector('.card').classList.toggle('flipped');
    isFlipped = !isFlipped;

    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === sectionId);
    });

    currentSection = sectionId;
}

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    const themeIcon = document.querySelector('.theme-toggle i');
    themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';

    createSkillsCharts();
}

document.querySelector('.card-front').innerHTML = sections.profile.content;