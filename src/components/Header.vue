

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a style="width:312px; height:128px;" class="navbar-item" href="https://bulma.io">
      <img style="width:312px; max-height:128rem; height:128px;" src="\src\assets\img\nordbo-logo.webp">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <RouterLink to="/" class="navbar-item">
        Sale
      </RouterLink>

      <RouterLink to="/products" class="navbar-item">
        Products
      </RouterLink>
      <RouterLink to="/clients" class="navbar-item">
        Clients
      </RouterLink>
      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link navbar-item navbar-icon">
              <img src="\src\assets\img\settings.webp">
            </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Settings
          </a>
          <a class="navbar-item">
            Increased contrast
          </a>
          <a class="navbar-item">
            Color blindness
          </a>
          <a class="navbar-item">
            Larger text
          </a>
          <a class="navbar-item">
            Dark theme
          </a>
          <a class="navbar-item">
            Screen reader
          </a>
        </div>
      </div>
          
          <RouterLink to="/login"  class="navbar-item navbar-icon">
            <img src="\src\assets\img\logout.webp">
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>

@import "../../node_modules/bulma/css/bulma.min.css";


.navbar-start {
  justify-items: center;
  margin: auto;
  font-size: large;

  
}

.navbar-start a {
  margin-left: 40px;
  margin-right: 40px;
}

.navbar-end {
  max-width:100px;
}

.navbar-icon img {
  width:50px; 
  max-height:50rem;
}

</style>