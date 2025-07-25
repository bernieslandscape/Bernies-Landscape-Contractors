<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cooper Mountain Landscape</title>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Merriweather', serif;
      background-color: #f4f1ed;
      color: #3e3e3e;
    }
    header, section, footer {
      padding: 2rem;
    }
    .hero {
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('hero-landscape.jpg') center/cover no-repeat;
      height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
    }
    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .services, .gallery, .estimate {
      max-width: 1200px;
      margin: auto;
    }
    .services-grid, .gallery-grid {
      display: grid;
      gap: 1.5rem;
    }
    .services-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    .service-card {
      background: white;
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .gallery-section {
      background: #ded6cf;
    }
    .gallery-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    .gallery-grid img {
      width: 100%;
      height: 15rem;
      object-fit: cover;
      border-radius: 1rem;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    form {
      display: grid;
      gap: 1rem;
    }
    input, textarea, button {
      padding: 0.75rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
    }
    button {
      background-color: #6b4f3b;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #5a4030;
    }
    footer {
      background-color: #3e3e3e;
      color: white;
      text-align: center;
    }
  </style>
</head>
<body>
  <section class="hero">
    <div>
      <h1>Cooper Mountain Landscape</h1>
      <p>Professional, rustic landscape contracting in Portland, OR</p>
    </div>
  </section>

  <section class="services">
    <h2 style="text-align:center; font-size:2rem; margin-bottom:1.5rem;">Our Services</h2>
    <div class="services-grid">
      <div class="service-card"><h3>Lawn Care</h3><p>Expertly delivered with attention to detail and a rustic charm.</p></div>
      <div class="service-card"><h3>Irrigation</h3><p>Expertly delivered with attention to detail and a rustic charm.</p></div>
      <div class="service-card"><h3>Hardscaping</h3><p>Expertly delivered with attention to detail and a rustic charm.</p></div>
      <div class="service-card"><h3>Landscape Design</h3><p>Expertly delivered with attention to detail and a rustic charm.</p></div>
      <div class="service-card"><h3>Maintenance</h3><p>Expertly delivered with attention to detail and a rustic charm.</p></div>
      <div class="service-card"><h3>Pruning</h3><p>Expertly delivered with attention to detail and a rustic charm.</p></div>
      <div class="service-card"><h3>Planting</h3><p>Expertly delivered with attention to detail and a rustic charm.</p></div>
      <div class="service-card"><h3>Gutter Cleaning</h3><p>Expertly delivered with attention to detail and a rustic charm.</p></div>
      <div class="service-card"><h3>Holiday Light Installation</h3><p>Expertly delivered with attention to detail and a rustic charm.</p></div>
    </div>
  </section>

  <section class="gallery-section">
    <div class="gallery">
      <h2 style="text-align:center; font-size:2rem; margin-bottom:1.5rem;">Project Gallery</h2>
      <div class="gallery-grid">
        <img src="gallery1.jpg" alt="Project 1" />
        <img src="gallery2.jpg" alt="Project 2" />
        <img src="gallery3.jpg" alt="Project 3" />
        <img src="gallery4.jpg" alt="Project 4" />
        <img src="gallery5.jpg" alt="Project 5" />
        <img src="gallery6.jpg" alt="Project 6" />
      </div>
    </div>
  </section>

  <section class="estimate">
    <h2 style="text-align:center; font-size:2rem; margin-bottom:1.5rem;">Request an Estimate</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Email Address" required />
      <input type="tel" placeholder="Phone Number" required />
      <textarea rows="4" placeholder="Tell us about your project..." required></textarea>
      <button type="submit">Submit Request</button>
    </form>
  </section>

  <footer>
    <p style="font-weight:bold;">Bernie’s Landscape Contractors</p>
    <p>dba Cooper Mountain Landscape</p>
    <p>Portland, OR</p>
    <p style="margin-top: 0.5rem;">Email: bernieslandscapecontractors@gmail.com</p>
    <p>Phone: 503-709-9780</p>
    <p style="font-size:0.75rem; margin-top: 1rem;">&copy; <script>document.write(new Date().getFullYear())</script> Cooper Mountain Landscape. All rights reserved.</p>
  </footer>
</body>
</html>
