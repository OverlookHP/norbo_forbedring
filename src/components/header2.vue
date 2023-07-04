<script setup>

</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="nav" id="nav">
        <div class="nav-left">
          <a to="/">
            <img class="logo" src="../assets/img/nordbo-logo.webp" alt="Nordbo Robotics logo" />
          </a>
        </div>
        <div class="nav-middle">
          <a class="navigation-link" to="/">Sale</a>
          <a class="navigation-link" to="/Products">Ny sag</a>
          <a class="navigation-link" to="/Clients">Clients</a>
        </div>
        <div class="nav-right">
          <a class="navigation-link" to="/settings">settings</a>
          <a class="navigation-link logout" @click="logOut()">Log out</a>
        </div>
          
        
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>

@import "../assets/scss/colors.scss";
@import "../assets/scss/typography.scss";

@import "../assets/scss/variabler.scss";
@import "../assets/scss/button.scss";
@import "../assets/scss/mixins.scss";
@import "../assets/scss/layout.scss";

header {
  display: flex;
  flex: row;
  justify-content: center;

  .wrapper {
    width: 100%;

    nav {
      display: flex;
      align-items: baseline;

      .nav-left {
        line-height: 1.5;
    max-height: 100vh;
        justify-content: left;
      }

      .nav-middle {
        justify-content: center;
      }

      .nav-right {
        display: flex;
        align-items: right;
        justify-content: right;
      }
      

      .navigation-link {
        color: #000;
        text-decoration: none;
        font-weight: 600;
        color: $Madison;
        padding: 1rem 0;
        cursor: pointer;

        .material-symbols-outlined {
          position: relative;
          top: 5px;
          font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 100
        }
      }

      .logo {
        max-width: 220px;
      }

      .main-navigation {
        .navigation-middle {
          color: $Madison;
          margin: 0 20px;
          text-decoration: none;
          font-weight: bold;

          .material-symbols-outlined {
            position: relative;
            top: 5px;
            font-variation-settings:
              'FILL' 0,
              'wght' 400,
              'GRAD' 0,
              'opsz' 100
          }
        }

        .navigation-right {
          color: $Midnight-Green;
          margin-left: 20px;
          text-decoration: none;

          .material-symbols-outlined {
            position: relative;
            top: 5px;
            font-variation-settings:
              'FILL' 0,
              'wght' 400,
              'GRAD' 0,
              'opsz' 100
          }
        }

        .toggleicon {
          display: none;
        }
      }
    }

    //Mobileview
    @media screen and (max-width: 620px) {
      nav {
        padding: 2rem;
        justify-content: space-between;

        .main-navigation {
          .navigation-link {
            display: none;
          }

          .toggleicon {
            display: inline;
          }
        }

        .main-navigation-responsive {
          position: absolute;
          top: 0;
          right: 0;
          height: 100vh;
          width: 50vw;
          background-color: $Madison;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          .toggleicon {
            position: absolute;
            right: 2rem;
            top: 2rem;
            color: white;
          }

          .navigation-link {
            padding: 1rem 0;
            color: white !important;

            text-decoration: none;
          }

          .navigation-right {
            margin-right: 0;
          }
        }
      }
    }
  }
}

</style>