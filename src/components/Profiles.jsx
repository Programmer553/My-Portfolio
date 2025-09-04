import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaLaptopCode } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import './css/profiles.css';

const Profiles = () => {
  const profiles = [
    {
      name: 'GitHub',
      icon: <FaGithub className="profile-icon" />,
      url: 'https://github.com/Programmer553',
      username: 'Programmer553'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="profile-icon" />,
      url: 'https://leetcode.com/shivaramnaik53/',
      username: 'shivaramnaik53'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="profile-icon" />,
      url: 'https://www.linkedin.com/in/shivaram-naik-sabavath-856a0329a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      username: 'Shivaram Naik'
    },
    {
      name: 'CodeChef',
      icon: <SiCodechef className="profile-icon" />,
      url: 'https://www.codechef.com/users/shivaramnaik53',
      username: 'shivaramnaik53'
    },
    {
      name: 'InterviewBit',
      icon: <FaLaptopCode className="profile-icon" />,
      url: 'https://www.interviewbit.com/profile/shivaram53',
      username: 'shivaram53'
    },
    {
      name: 'GeeksforGeeks',
      icon: <FaCode className="profile-icon" />,
      url: 'https://auth.geeksforgeeks.org/user/shivaramx8rw',
      username: 'shivaramx8rw'
    }
  ];

  return (
    <section className="profiles-section">
      <h1>Profiles</h1>
      <div className="profiles-container">
        {profiles.map((profile, index) => (
          <a 
            key={index} 
            href={profile.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="profile-card"
          >
            <div className="profile-icon-container">
              {profile.icon}
            </div>
            <h3>{profile.name}</h3>
            <p className="profile-username">@{profile.username}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Profiles;
