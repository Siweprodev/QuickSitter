
import heroVideo from "../assets/Herosec.mp4";

function Hero() {
  return (
    <section className="hero">
       <video autoPlay muted loop className="hero-video">
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Trusted Babysitters When You Need Them</h1>

        <p>
          Find affordable babysitters near you. Book by hour, day, or week.
        </p>

        <div className="hero-buttons">
          <button>Find a Babysitter</button>
          <button className="btn-white">Become a Babysitter</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
