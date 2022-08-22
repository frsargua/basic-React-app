export default function Main() {
  return (
    <main>
      <section className="text-middle card-header">
        <h1>Laura Smith</h1>
        <h2 className="text-gold">Frontend Developer</h2>
        <p>lauransmith.website</p>
        <div className="card-actions-container">
          <a className="btn btn-light" href="mailto:webmaster@example.com">
            Email
          </a>
          <a className="btn btn-primary btn-position" href="#">
            LinkedIn
          </a>
        </div>
      </section>
      <section className="description-container">
        <div className="description-aboutMe-margin">
          <h3 className="description-titles">About</h3>
          <p className="description-text">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div>
          <h3 className="description-titles">Interests</h3>
          <p className="description-text">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </section>
    </main>
  );
}
