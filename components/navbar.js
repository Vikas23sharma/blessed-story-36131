function navbar() {
    return `<nav
    class="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100"
  >
    <a class="navbar-brand ms-5 me-4 mb-4" href="./index.html">
      <img
        src="./Photos/logo.png"
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