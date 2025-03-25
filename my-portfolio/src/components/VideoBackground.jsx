    // components/VideoBackground.js
    export default function VideoBackground({ show = true }) {
        if (!show) return null; // Don't render if show is false
    
        return (
        <div className="video-background">
            <video autoPlay loop muted playsInline>
            <source
                src="https://res.cloudinary.com/dwafwtcba/video/upload/v1741818193/adventure-of-dark-souls-3.3840x2160_aeaz9p.mp4"
                type="video/mp4"
            />
            Your browser does not support the video tag.
            </video>
        </div>
        );
    }