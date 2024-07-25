<template>
    <section id="home" class="flex align-items-center">
        <div class="container">
            <div class="row justify-between">
                <div class="col-xl-8 col-lg-10 col-12 stagger-animation">
                    <div class="about flex align-items-center">
                        <img class="anim-item profile-picture align-self-start" src="../assets/image/shoyim.jpg" alt="Shoyim"/>
                        <div class="about-detail anim-item">
                            <h1 class="title">Shoyim Obloqulov</h1>
                            <h3 class="desc">Software Engineer</h3>
                            <div class="social-links flex
                                    align-items-center">
                                <a class="icon-linkedin" target="_blank" href="https://www.github.com/shoyimobloqulov/">
                                    <img src="../assets/image/github.svg" width="32" />
                                </a>
                                <a class="icon-linkedin" target="_blank"
                                    href="https://www.linkedin.com/in/shoyim-obloqulov-9409b2296/">
                                    <img src="../assets/image/linkedin.svg" width="22" />
                                </a>
                                <a class="icon-telegram" target="_blank" href="https://t.me/shoyimobloqulov">
                                    <img src="../assets/image/telegram.svg" width="22" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="detail">
                        <p class="size-big anim-item">I write about non-technical stuff in the technical world.</p>
                        <div class="btns-wrapper anim-item">
                            <a href="/blog/" class="btn btn-primary">Read Blog</a>
                            <a href="/about/" class="btn btn-secondary">About Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
            };
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll);
            document.body.addEventListener('keyup', this.onKeyUp);

            this.initializeAnimations();
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.onScroll);
            document.body.removeEventListener('keyup', this.onKeyUp);
        },
        methods: {
            onScroll() {
                this.handleHeaderInteraction();
                this.updateScrollIndicator();
            },
            handleHeaderInteraction() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > 0) {
                    this.$refs.header.classList.add('show-bg');
                } else {
                    this.$refs.header.classList.remove('show-bg');
                }
            },
            updateScrollIndicator() {
                if (this.$refs.progressBar) {
                    const pixelScrolled = window.scrollY;
                    const viewportHeight = window.innerHeight;
                    const totalHeightScrollable = document.body.scrollHeight;
                    const pixelsToPercentage = (pixelScrolled / (totalHeightScrollable - viewportHeight)) * 100;
                    this.$refs.progressBar.style.width = `${pixelsToPercentage}%`;
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

                if (staggerAnims) {
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
    };
</script>