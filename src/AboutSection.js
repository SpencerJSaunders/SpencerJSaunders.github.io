const AboutSection = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <h2 className="section__heading">About Me</h2>
        <img
          className="about-section__picture "
          src={require("./imgs/spencer.png")}
          alt="Spencer Saunders"
        />
        <h3 className='margin-bottom-2'>Spencer Saunders</h3>
        <p className='about-section__bio'>
          I was born in Portland, Oregon but have
          lived in Boise, Idaho for over 25 years. I graduated from Boise State
          University in Fall 2019 with a bachelor's in Computer Science. I've
          been a front-end developer for over 5 years and have really
          apperciated what a rewarding and challening experience the profession
          is. Outside of work, I enjoy exercising, reading, playing guitar, walking my golden
          retrievers, and watching the San Francisco Giants.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
