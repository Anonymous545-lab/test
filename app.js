const Navbar = () => (
    <div className="navbar">
        <h1 className="navbar-brand">
            <img src="Baze Logo.png" alt="Baze Logo" />
            Briadon Fielies
        </h1>
        <ul className="navbar-nav">
            <li><a href="Home.html">Home</a></li>
            <li><a href="Info.html">Info</a></li>
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

const Introduction = () => (
    <div className="content" id="fade-in-paragraph">
        <h2>Introduction</h2>
        <p>I am Briadon Fielies, a dedicated and motivated high school student with a strong academic record and a keen interest in IT, software development, software engineering, ethical hacking, and cybersecurity. My hobbies include coding, pentesting, and working on computers for fun. I also enjoy the sense of freedom at the beach. My passion for these fields drives me to seek opportunities for growth and learning. I am eager to apply my skills and enthusiasm to contribute meaningfully to projects and initiatives in the technology sector.</p>
    </div>
);

const Footer = () => (
    <footer>
        <p>Contact: <a href="mailto:briadonfielies321@gmail.com" className="glow">briadonfielies321@gmail.com</a></p>
    </footer>
);

const App = () => (
    <div>
        <Navbar />
        <BackgroundVideo />
        <Introduction />
        <Footer />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
