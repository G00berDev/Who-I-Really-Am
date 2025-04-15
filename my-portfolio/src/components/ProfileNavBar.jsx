import React from 'react';

const ProfileNavBar = () => {
return (
<div style={styles.navContainer}>
    <div style={styles.circleNav}>
    <a href="#home" style={{ ...styles.navItem, top: '20px' }}>Home</a>
    <a href="#profile" style={{ ...styles.navItem, right: '20px' }}>Profile</a>
    <a href="#messages" style={{ ...styles.navItem, bottom: '20px' }}>Messages</a>
    <a href="#settings" style={{ ...styles.navItem, left: '20px' }}>Settings</a>
    </div>
</div>
);
};

const styles = {
navContainer: {
position: 'fixed',
bottom: '320px',
left: '350px',
zIndex: 10,
},
circleNav: {
width: '300px',              // Increased size
height: '300px',             // Increased size
borderRadius: '50%',
border: '4px solid black',   // Hollow circle with black border
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
position: 'relative',
backgroundColor: 'transparent', // No fill
},
navItem: {
position: 'absolute',
color: 'black', // Changed to black for contrast against white
textDecoration: 'none',
fontSize: '20px',
transition: 'transform 0.3s',
},
};

export default ProfileNavBar;
