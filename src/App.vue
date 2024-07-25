<template>
  <header class="header--title flex align-items-center" ref="header">
    <div class="container">
      <div class="align-items-center flex">
        <div class="logo-wrapper">
          <a class="logo" href="/">Shoyim's Blog</a>
        </div>
        <ul class="nav align-items-center">
          <li><a class="list-item" href="/blog/">Blog</a></li>
          <li><a class="list-item" href="/about/">About Me</a></li>
        </ul>
        <div class="burger-menu">
          <div class="bar bar--top"></div>
          <div class="bar bar--middle"></div>
          <div class="bar bar--bottom"></div>
        </div>
      </div>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="container">
      <div class="row">
        <p>
          &copy; 2024 shoyim.com
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  import {
    TweenMax,
    Power4
  } from 'gsap';
  import scrollMonitor from 'scrollmonitor';

  export default {
    data() {
      return {
        isNavVisible: false,
        popupVisible: false,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll);
      document.body.addEventListener('keyup', this.onKeyUp);

      this.initializeAnimations();
    },
    methods: {
      onScroll() {
        this.handleHeaderInteraction();
        this.updateScrollIndicator();
      },
      handleHeaderInteraction() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = this.$refs.header;
        if (header) {
          if (scrollTop > 0) {
            header.classList.add('show-bg');
          } else {
            header.classList.remove('show-bg');
          }
        } else {
          console.warn('Header reference is not defined.');
        }
      },
      updateScrollIndicator() {
        const progressBar = this.$refs.progressBar;
        if (progressBar) {
          const pixelScrolled = window.scrollY;
          const viewportHeight = window.innerHeight;
          const totalHeightScrollable = document.body.scrollHeight;
          const pixelsToPercentage = (pixelScrolled / (totalHeightScrollable - viewportHeight)) * 100;
          progressBar.style.width = `${pixelsToPercentage}%`;
        }
      },
      toggleNav() {
        this.isNavVisible = !this.isNavVisible;
      },
      closePopup() {
        this.popupVisible = false;
      },
      onKeyUp(e) {
        if (e.keyCode === 27) {
          this.closePopup();
        }
      },
      initializeAnimations() {
        const staggerAnims = document.querySelectorAll('.stagger-animation');
        const yAnim = 15;

        if (staggerAnims.length) {
          staggerAnims.forEach((anim) => {
            const animItems = anim.querySelectorAll('.anim-item');
            const animWatcher = scrollMonitor.create(anim, -250);
            const animScroll = anim.getAttribute('data-scroll');
            let animState = false;

            if (animScroll === 'false') {
              this.animFly(animItems, {
                duration: 0.85,
                delay: 0.3,
                y: yAnim,
                repeatDelay: 0.2
              });
              animState = true;
            } else {
              animWatcher.enterViewport(() => {
                if (!animState) {
                  this.animFly(animItems, {
                    duration: 0.85,
                    delay: 0,
                    y: yAnim,
                    repeatDelay: 0.2
                  });
                  animState = true;
                }
              });
            }
          });
        }
      },
      animFly(items, options) {
        TweenMax.staggerFrom(items, options.duration, {
          delay: options.delay,
          y: options.y,
          ease: Power4.easeOut
        }, options.repeatDelay);
        TweenMax.staggerTo(items, options.duration, {
          delay: options.delay,
          opacity: 1
        }, options.repeatDelay);
      }
    }
  }
</script>