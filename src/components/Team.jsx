import React, { useState, useEffect } from "react";
import styles from "./Team.module.css";

const teamData = {
  teachers: [
    {
      name: "Dr. Neeru Rathee",
      position: "Convener",
      image: "/images/Events/neer.jpg",
    },
    {
      name: "Dr. Shaily Malik",
      position: "Department Advisor",
      image: "/images/Events/shail.jpg",
    },
    {
      name: "Dr. Satinder Malik",
      position: "Department Advisor",
      image: "/images/Events/sat.jpg",
    },
    {
      name: "Dr. Rakhi Kamra",
      position: "Department Advisor",
      image: "/images/Events/rakhi.jpg",
    },
    {
      name: "Dr. Rakesh Chikara",
      position: "Department Advisor",
      image: "/images/Events/rak.jpg",
    },
  ],
  coreTeam: {
    leadership: [
      {
        name: "Nandini Gangwar",
        position: "President",
        image: "/images/eCell Core 2025-26 Photos/Nandini Gangwar_President.jpg",
      },
      {
        name: "Harshit Mittal",
        position: "Vice President",
        image: "/images/eCell Core 2025-26 Photos/Harshit_Mittal_Vice-President.jpg",
      },
      {
        name: "Harshit Khaneja",
        position: "Vice President",
        image: "/images/eCell Core 2025-26 Photos/Harshit Khanje_VicePresident.jpg",
      },
    ],
    departments: [
      {
        name: "Event Management",
        heads: [
          { name: "Anika Kohli", image: "/images/eCell Core 2025-26 Photos/Anika Kohli_EVM Executive Head .png" }
        ],
        deputies: [
          { name: "Krish Kumar", image: "/images/eCell Core 2025-26 Photos/KRISH_EVMDeputy.png" },
          { name: "Sannidhya Vyas", image: "/images/eCell Core 2025-26 Photos/SannidhyaVyas_EVMDEPTY.jpg" }
        ]
      },
      {
        name: "Technical",
        heads: [
          { name: "Shivam Mishra", image: "/images/eCell Core 2025-26 Photos/Shivam Mishra_Technical_Executive_Head.jpg" }
        ],
        deputies: [
          { name: "Kunal Pandey", image: "/images/eCell Core 2025-26 Photos/KunalPandey_TechnicalDeputy.jpg" },
          { name: "Abhinav Yadav", image: "/images/eCell Core 2025-26 Photos/Abhinav yadav_techical deputy head.png" }
        ]
      },
      {
        name: "Design & Videography",
        heads: [
          { name: "Prathmesh", image: "/images/eCell Core 2025-26 Photos/prathmesh_designexecutive.jpg" },
          { name: "Rohit Chauhan", image: "/images/eCell Core 2025-26 Photos/Rohit Chauhan EXECUTUVE HEAD , DESIGN & VIDEOGRAPHY.jpeg" }
        ],
        deputies: [
          { name: "Danish Raza", image: null },
          { name: "Vansh Mishra", image: null }
        ]
      },
      {
        name: "Content & Internal Affairs",
        heads: [
          { name: "Ayush Naik", image: "/images/eCell Core 2025-26 Photos/AyushNaik_ContentExecutive.jpg" }
        ],
        deputies: [
          { name: "Charvi Goel", image: "/images/eCell Core 2025-26 Photos/Charvi_ContentDeputy.jpg" },
          { name: "Ayush Kumar", image: "/images/eCell Core 2025-26 Photos/Ayush Kumar_ContentDeputy.png" }
        ]
      },
      {
        name: "PR & Outreach",
        heads: [
          { name: "Navya Bora", image: "/images/eCell Core 2025-26 Photos/Navya Bora_PR&Outreach Executive Head.jpg" }
        ],
        deputies: [
          { name: "Anmol Sharma", image: "/images/eCell Core 2025-26 Photos/Anmol Sharma_PR&Outreach Deputy Head.jpg" },
          { name: "Krishna Sharma", image: "/images/eCell Core 2025-26 Photos/KrishnaSharma_Pr Deputy.png" }
        ]
      },
      {
        name: "Sponsorship",
        heads: [
          { name: "Rohit", image: null }
        ],
        deputies: [
          { name: "Anshuman", image: null },
          { name: "Pushker", image: null }
        ]
      },
      {
        name: "Publicity",
        heads: [
          { name: "Siddhant Khandelwal", image: "/images/eCell Core 2025-26 Photos/Siddhant Khandelwal Publicity excutive head.jpg" }
        ],
        deputies: [
          { name: "Manik Gupta", image: "/images/eCell Core 2025-26 Photos/ManikGupta_PublicityDeputy.jpg" },
          { name: "Divyakshi", image: "/images/eCell Core 2025-26 Photos/Divyakshi_publicitydeputy.jpg" }
        ]
      },
      {
        name: "Incubation",
        heads: [
          { name: "Madhav Gupta", image: "/images/eCell Core 2025-26 Photos/Madhav_Gupta_INCUBATION EXECUTIVE HEAD.jpg" }
        ],
        deputies: [
          { name: "Satyam Goel", image: "/images/eCell Core 2025-26 Photos/SatyamGoyal_INCUBATIONDeputyHead.jpg" },
          { name: "Krishna Garg", image: "/images/eCell Core 2025-26 Photos/KrishnaGarg_IncubationDeputy.jpg" }
        ]
      },
    ],
  },
};

const Team = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching
    setData(teamData);
    setLoading(false);
  }, []);

  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll(`.${styles.memberCard}, .${styles.deptCard}`);
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0f172a', color: '#fff' }}>
        <p>Loading team data...</p>
      </div>
    );
  }

  return (
    <div className={styles.page} onMouseMove={handleMouseMove}>
      {/* Dynamic Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <h1 className={`${styles.title} ${styles.animateUp}`} style={{ animationDelay: '0.1s' }}>
          Our Team
          <span className={styles.titleUnderline} />
        </h1>
        <p className={`${styles.subtitle} ${styles.animateUp}`} style={{ animationDelay: '0.3s' }}>
          The passionate individuals driving innovation and entrepreneurship at MSIT.
        </p>
      </section>

      {/* Teachers / Mentors Section */}
      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.animateUp}`} style={{ animationDelay: '0.2s' }}>
          Our Mentors
          <span className={styles.titleUnderline} />
        </h2>
        <div className={styles.mentorGrid}>
          {data.teachers.map((teacher, idx) => (
            <div 
              key={idx} 
              className={`${styles.memberCard} ${styles.animateUp}`} 
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <img src={teacher.image} alt={teacher.name} className={styles.memberImage} />
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{teacher.name}</h3>
                <p className={styles.memberRole}>{teacher.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Team Section */}
      <section className={styles.section}>
        <h2 className={`${styles.sectionTitle} ${styles.animateUp}`} style={{ animationDelay: '0.2s' }}>
          Core Team
          <span className={styles.titleUnderline} />
        </h2>

        {/* Leadership */}
        <div className={styles.mentorGrid} style={{ marginBottom: '5rem' }}>
          {data.coreTeam.leadership.map((leader, idx) => (
            <div 
              key={idx} 
              className={`${styles.memberCard} ${styles.animateUp}`} 
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <img src={leader.image} alt={leader.name} className={styles.memberImage} />
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{leader.name}</h3>
                <p className={styles.memberRole}>{leader.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Departments */}
        <div>
          <h3 className={`${styles.sectionTitle} ${styles.animateUp}`} style={{ fontSize: '2rem', animationDelay: '0.3s' }}>
            Departments
            <span className={styles.titleUnderline} style={{ width: '50px', height: '3px' }} />
          </h3>
          <div className={styles.deptGrid}>
            {data.coreTeam.departments.map((dept, idx) => (
              <div 
                key={idx} 
                className={`${styles.deptCard} ${styles.animateUp}`}
                style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
              >
                <h4 className={styles.deptName}>{dept.name}</h4>
                <div className={styles.roleGroup}>
                  <span className={styles.roleLabel}>Heads</span>
                  <div className={styles.deptMembersGrid}>
                    {dept.heads.map((head, i) => (
                      <div key={i} className={styles.deptMember}>
                        <img src={head.image || `https://ui-avatars.com/api/?name=${head.name.replace(' ', '+')}&background=0b0b71&color=fff&size=150`} alt={head.name} className={styles.deptMemberImage} />
                        <span className={styles.deptMemberName}>{head.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.roleGroup}>
                  <span className={styles.roleLabel}>Deputies</span>
                  <div className={styles.deptMembersGrid}>
                    {dept.deputies.map((deputy, i) => (
                      <div key={i} className={styles.deptMember}>
                        <img src={deputy.image || `https://ui-avatars.com/api/?name=${deputy.name.replace(' ', '+')}&background=0b0b71&color=fff&size=150`} alt={deputy.name} className={styles.deptMemberImage} />
                        <span className={styles.deptMemberName}>{deputy.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
