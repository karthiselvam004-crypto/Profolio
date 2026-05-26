import "./Home.css";
// import profile from "../assets/profile.png";
const Home = () => {
  return (
    <section id="home" className="home">

      <div className="home-left">

        <h1>
          Hello, I am <span>Karthikeyan</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p>
          I enjoy building scalable applications
          using React and Spring Boot.
        </p>

        <div className="home-buttons">

          <button className="hire-btn">
            Hire Me
          </button>

          <button className="resume-btn">
            Get Resume
          </button>

        </div>

      </div>

      <div className="home-right">
        {/* <img src={profile} alt="profile" /> */}
      </div>

    </section>
  );
};

export default Home;