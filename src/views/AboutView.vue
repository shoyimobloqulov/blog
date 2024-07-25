<template lang="">
    <section class="section-title">
        <div class="container">
            <div class="section-content">
                <h1>About Me</h1>
            </div>
        </div>
    </section>

    <section id="about-me" class="article-wrapper flex align-items-center" style="padding: 0">
        <div class="container content">
            <div class="row justify-center">
                <article class="col-lg-8 col-md-10 col-12">
                    <p>I am Shoyim Obloqulov, a {{ date}}-year-old <strong>Software Engineer</strong> from Samarkand.
                    </p>
                    <p>Shoyim Obloqulov is a software developer engaged in various projects and technologies. They are
                        involved in:</p>
                    <ul>
                        <li><strong>Web Development:</strong> Working with Laravel for backend development, Vue.js for
                            frontend tasks, and Django for data plotting and CSV exports.</li>
                        <li><strong>Package Creation:</strong> Developing a Laravel package named
                            <code>Shoyim\Click</code> for Click integration, based on an existing PHP project.</li>
                        <li><strong>Admin Panels:</strong> Using Filament to create admin panels, including dynamic
                            menus and models for speakers and news.</li>
                        <li><strong>Docker and Node.js:</strong> Working with Docker for containerization and Node.js
                            for setting up a compiler API.</li>
                        <li><strong>Statistical Analysis:</strong> Implementing systems to retrieve daily statistics and
                            handle visitor logs.</li>
                        <li><strong>Styling and UI:</strong> Using Bootstrap for styling webpages and creating dynamic
                            components in their applications.</li>
                    </ul>
                </article>
            </div>

            <div class="row justify-center">
                <div class="flex align-items-center">
                    <a class="icon-telegram col-md-4" target="_blank" href="https://www.github.com/shoyimobloqulov/">
                        <img src="../assets/image/github.svg" width="25" />
                    </a>
                    <a class="icon-linkedin col-md-4" target="_blank"
                        href="https://www.linkedin.com/in/shoyim-obloqulov-9409b2296/">
                        <img src="../assets/image/linkedin.svg" width="22" />
                    </a>
                    <a class="icon-telegram col-md-4" target="_blank" href="https://t.me/shoyimobloqulov">
                        <img src="../assets/image/telegram.svg" width="22" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                date: '',
            }
        },

        mounted() {
            this.date = new Date().getFullYear() - 2001;
        },
    }
</script>
<style lang="">

</style>