<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
      <div class="logo">
          <img src="../assets/logo_c.png" alt="App">
      </div>
  
      <div class="menu-toggle-wrap">
          <button class="menu-toggle" @click="ToggleMenu">
              <span class="material-icons">keyboard_double_arrow_right</span>
          </button>
      </div>
  
      <h3>Автоматизации</h3>
      <div class="menu">
          <router-link 
              v-for="item in menuItems" 
              :key="item.uri"
              class="button" 
              :to="item.uri" 
              @click="ToggleMenu"
          >
              <span class="text">{{ item.title }}</span>
          </router-link>
      </div>
    </aside>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { menuItems } from '../config/menu'
  
  const is_expanded = ref(true)
  
  const ToggleMenu = () => {
      is_expanded.value = !is_expanded.value
  }
  </script>
  
  <style lang="scss" scoped>
  aside {
      display: flex;
      flex-direction: column;
      width: calc(2rem + 2rem);
      min-height: 100vh;
      overflow: hidden;
      padding: 1rem;
  
      background-color: var(--dark);
      color: var(--light);
  
      transition: 0.4s ease-out;
  
      .logo {
          margin-bottom: 1rem;
  
          img {
              width: 2rem;
          }
      }
  
      .menu-toggle-wrap {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 1rem;
  
          position: relative;
          top: 0;
          transition: 0.4s ease-out;
  
          .menu-toggle {
              transition: 0.4s ease-out;
  
              .material-icons {
                  font-size: 2rem;
                  color: var(--light);
                  transition: 0.4s ease-out;
              }
  
              &:hover {
                  .material-icons {
                      color: var(--primary);
                      transform: translateX(0.5rem);
                  }
              }
          }
      }
  
      h3, .button .text {       
          opacity: 0;
          transition: 0.3s ease-out;
      }
  
      .button, h3 {
          visibility: hidden;
      }
  
      h3 {
          color: var(--grey);
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
      }
  
      .menu {
          margin: 0 -1rem;
  
          .button {
              display: flex;
              align-items: center;
              text-decoration: none;
  
              padding: 0.5rem 1rem;
              transition: 0.4s ease-out;
  
              .material-icons {
                  font-size: 2rem;
                  color: var(--light);
                  transition: 0.4s ease-out;
              }
  
              .text {
                  color: var(--light);
                  transition: 0.4s ease-out;
              }
  
              &:hover, &.router-link-exact-active {
                  background-color: var(--dark-hover);
  
                  .material-icons, .text {
                      color: var(--primary);
                  }
              }
              &.router-link-exact-active {
                border-right: 5px solid var(--primary);
                transition: 0.2s ease-out;
            }
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;
            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3, .button .text {
            opacity: 1;
        }

        .button, h3 {
            visibility: visible;
        }

        .button {
            .material-icons {
                margin-right: 1rem;
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>