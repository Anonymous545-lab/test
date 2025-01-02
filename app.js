const Navbar = () => (
    <div className="navbar">
        <h1 className="navbar-brand">
            <img src="Baze Logo.png" alt="Baze Logo" />
            Briadon Fielies
        </h1>
        <ul className="navbar-nav">
            <li><a href="Home.html">Home</a></li>
            <li><a href="Findings.html">Info</a></li>
        </ul>
    </div>
);

const BackgroundVideo = () => {
    React.useEffect(() => {
        const video = document.getElementById('background-video');

        const handleEnded = () => {
            video.currentTime = 8;
            video.play();
        };

        const handleTimeUpdate = () => {
            if (video.currentTime >= video.duration) {
                video.currentTime = 8;
                video.play();
            }
        };

        video.addEventListener('ended', handleEnded);
        video.addEventListener('timeupdate', handleTimeUpdate);

        // Cleanup event listeners on component unmount
        return () => {
            video.removeEventListener('ended', handleEnded);
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    return (
        <video id="background-video" autoPlay muted>
            <source src="contents.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

const App = () => (
    <div>
        <Navbar />
        <BackgroundVideo />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
