import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
const router = useRouter();
const [isLoading, setIsLoading] = useState(false);

const handleClick = () => {
setIsLoading(true); // Show loading state
setTimeout(() => {
    router.push('/profile'); // Navigate after 2 seconds
}, 2000);
};

return (
<div className={styles.container} onClick={handleClick}>
    {isLoading ? (
    <div className={styles.videoContainer}>
        <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.loadingVideo}
        >
        <source
            src="https://res.cloudinary.com/dwafwtcba/video/upload/v1741983707/Untitled_video_-_Made_with_Clipchamp_nrto8u.mp4"
            type="video/mp4"
        />
        Your browser does not support the video tag.
        </video>
    </div>
    ) : (
    <>
        <h1 className={styles.title}>STRYDER BATEMAN</h1>
        <p className={styles.subtitle}>CLICK TO CONTINUE</p>
    </>
    )}
</div>
);
}