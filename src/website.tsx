export default function Website(){
    return <>
    <nav className="menu">
    <a href="#home"><i className="fas fa-home icon"></i></a>
    <a href="#about"><i className="fas fa-info-circle icon"></i></a>
    <a href="#contact"><i className="fas fa-envelope icon"></i></a>
    <a href="#code"><i className="fas fa-code icon"></i></a>
  </nav>
  <section id="home" className="section">
    <div className="background-image"></div>
    <div className="title">
      <div className="typewriter" style={{width: "600px", margin: "0 auto"}}>
        <h1>Hello There...</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus non turpis interdum pulvinar. Mauris euismod eros sed purus bibendum iaculis. Vestibulum vel justo ut nisi vehicula elementum nec at turpis. Donec volutpat lectus magna, non facilisis arcu tempor vel. Nam nec nulla vitae neque rhoncus lacinia. Aenean a augue vel risus pellentesque efficitur. Nam scelerisque suscipit nisi, vel malesuada neque blandit id. Integer venenatis libero nisi, at semper odio vestibulum eget. Mauris in nulla nec velit pretium interdum. Mauris ac purus eu nunc vestibulum posuere. Nam lacinia lectus ut diam molestie, non euismod leo ullamcorper. Quisque vestibulum velit nisl, in euismod eros tempus vitae. Donec mattis, nisi a scelerisque pellentesque, est velit vehicula libero, id suscipit eros lacus non erat. Donec a diam nec diam suscipit consectetur. Suspendisse sit amet purus et felis sodales ullamcorper id eget nunc.</p>
      </div>
    </div>
  </section>
  <section id="about" className="section">
    <div className="background-image"></div>
    <div className="title">
      <h1>About Us</h1>
      <p className="fade-in-out-text">We are a passionate team dedicated to creating innovative solutions...</p>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  </section>
  <section id="contact" className="section">
    <div className="background-image"></div>
    <div className="title">
      <h1>Contact Us</h1>
      <div className="contact-form">
        <form action="#" method="post">
          <input type="text" name="name" placeholder="Your Name"/>
          <input type="email" name="email" placeholder="Your Email"/>
          <textarea name="message" placeholder="Your Message"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  </section>
  <section id="code" className="section">
    <div className="background-image"></div>
    <div className="title">
      <h1>Code!</h1>
      {/* <div className="code-container">
        <div className="code-line">const greeting = "Hello, World!";</div>
        <div className="code-line">console.log(greeting);</div>
        <div className="code-line">function add(a, b) {</div>
        <div className="code-line">   return a + b;</div>
        <div className="code-line">}</div>
        <div className="code-line">const result = add(3, 5);</div>
        <div className="code-line">console.log("Result:", result);</div>
        <div className="code-line">// This is a comment</div>
        <div className="code-line">for (let i = 0; i < 5; i++) {</div>
        <div className="code-line">   console.log("Iteration:", i);</div>
        <div className="code-line">}</div>
      </div> */}
    </div>
  </section>
</>
}