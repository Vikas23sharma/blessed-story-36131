function navbar() {
    return `<nav
    class="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100"
  >
    <a class="navbar-brand ms-5 me-4 mb-4" href="./index.html">
      <img
        src="data:image/png;base64,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"
        width="53"
        height="36"
        alt=""
      />
    </a>
  
    <div id="navbar-categories" class="me-5 ms-1">
      <div class="navbar-categories-li">MEN</div>
      <div class="navbar-categories-li">WOMEN</div>
      <div class="navbar-categories-li">KIDS</div>
      <div class="navbar-categories-li">HOME & LIVING</div>
      <div class="navbar-categories-li">BEAUTY</div>
      <div class="navbar-categories-li">STUDIO</div>
    </div>
  
    <form class="my-2 my-lg-0 w-25 ms-5 d-flex me-5" id="navbar-search-box">
      <i class="bi bi-search mt-1 me-2"></i>
      <input
        class="form-control mr-sm-2 w-100"
        id="navbar-search"
        type="search"
        placeholder="Search for products, brands and more"
      />
    </form>
  
    <div id="navbar-profile-bag-wish" class="d-flex ms-5">
      <div class="navbar-profile-items">
        <i class="bi bi-person"></i>Profile
      </div>
      <div class="navbar-profile-items">
        <i class="bi bi-heart"></i>Wishlist
      </div>
      <div class="navbar-profile-items"><i class="bi bi-handbag"></i>Bag<div class="hidden" id="cart-counter">2</div></div>
      
    </div>
    <div class="navbar-mapping-div hidden fade-in"></div>
    <div class="navbar-studio-div hidden fade-in">
      <img src="./photos/Studio_ss.png" alt="" />
    </div>
    <div class="navbar-profile-div fade-in hidden">
      <div>
        <div class="mb-1" id="welcome">Welcome</div>
        <p class="profile_text number_div">To access account and manage orders</p>
      </div>
      <button class="btn border profile_button">LOGIN / SIGNUP</button>
      <hr />
      <div>
        <p class="profile_text">Orders</p>
        <p class="profile_text">Wishlist</p>
        <p class="profile_text">Gift Cards</p>
        <p class="profile_text">Contact Us</p>
        <p class="profile_text">Myntra Insider</p>
      </div>
      <hr /><div>
        <p class="profile_text">Myntra Credit</p>
        <p class="profile_text">Coupons</p>
        <p class="profile_text">Saved Cards</p>
        <p class="profile_text">Contact Us</p>
        <p class="profile_text">Saved Addresses</p>
      </div>
      <hr class="hidden" id="loginSpecial"/>
          <div class="hidden" id="loginSpecial">
            <p class="profile_text">Edit Profile</p>
            <p class="profile_text">Logout</p>
          </div>
    </div>
    
  </nav>
  <div id="overlay" class="hidden"></div>`;
  }
  
  export default navbar;