// Profile.jsx
import React from 'react';
import VideoBackground from '../components/VideoBackground';
import ProfileNavBar from '../components/ProfileNavBar';  // Import the ProfileNavBar component
import styles from '../styles/Home.module.css'; // Reuse styles or create a new CSS file

export default function Profile() {
return (
<div>
    <VideoBackground />
    <ProfileNavBar /> {/* Add ProfileNavBar here */}
</div>
);
}
