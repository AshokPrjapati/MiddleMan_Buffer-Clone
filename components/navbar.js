export default () => {
  return `<div id="logo">
   <a href="index.html"> <img src="./images/logo.png" alt="" /></a>
  </div>

  <div id="navlist" class="">
    <ul class="nav-items">
      <li class="items">
        <a href=""
          >Tools
          <i class="fa-solid fa-angle-down"></i>
        </a>
        <div class="drop_down">
          <div class="card">
            <div class="icon">
              <i class="fa-solid fa-rocket"></i>
            </div>
            <div class="desc">
              <h4>Publishing</h4>
              <p>Plan, collaborate, and publish thumb-stopping content</p>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            <div class="desc">
              <h4>Analytics</h4>
              <p>Analyze social media performance and create reports</p>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <i class="fa-regular fa-message"></i>
            </div>
            <div class="desc">
              <h4>Engagement</h4>
              <p>
                Quickly navigate your comments and engage with your
                audience
              </p>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <i class="fa-solid fa-pen-nib"></i>
            </div>
            <div class="desc">
              <h4>Start Page</h4>
              <p>Build a customized landing page in minutes</p>
            </div>
          </div>
        </div>
      </li>
      <li class="items">
        <a href="">Channel <i class="fa-solid fa-angle-down"></i> </a>
        <div class="drop_down">
          <div class="card">
            <div class="icon">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div class="desc">
              <h3>Facebook</h3>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <i class="fa-brands fa-google"></i>
            </div>
            <div class="desc">
              <h3>Google Business Profile</h3>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div class="desc">
              <h3>Instagram</h3>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <div class="desc">
              <h3>LinkedIn</h3>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <i class="fa-brands fa-pinterest-p"></i>
            </div>
            <div class="desc">
              <h3>Pinterest</h3>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <i class="fa-brands fa-shopify"></i>
            </div>
            <div class="desc">
              <h3>Shopify</h3>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <i class="fa-brands fa-tiktok"></i>
            </div>
            <div class="desc">
              <h3>Tiktok</h3>
            </div>
          </div>
          <div class="card">
            <div class="icon">
              <i class="fa-brands fa-twitter"></i>
            </div>
            <div class="desc">
              <h3>Twitter</h3>
            </div>
          </div>
        </div>
      </li>
      <li class="items"><a href="./pricing.html">Pricing</a></li>
      <li class="items"><a href="">Blog</a></li>
      <li class="items"><a href="">About</a></li>
      <li class="items"><a href="./customer_page.html">Customer</a></li>
    </ul>
  </div>
  <div id="start">
    <div id="login"><a href="">Log in</a></div>
    <button class="btn">Get Started Now</button>
    <div id = "menu">
      <i class="fa-solid fa-bars hide"></i>
      <i class="fa-solid fa-xmark show"></i>
     </div >
  </div>`

}