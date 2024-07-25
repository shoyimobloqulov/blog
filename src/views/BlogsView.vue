<template>
    <section class="section-title">
        <div class="container">
            <div class="section-content">
                <h1>Blog</h1>
            </div>
        </div>
    </section>

    <section id="" class="flex align-items-center">
        <div class="container">
            <div class="row justify-between align-top">
                <div id="archive" class="col-md-7" v-for="(item, index) in blogs" :key="index">
                    <h4 class="sticky">{{ item.year }}</h4>
                    <div v-for="(m, index) in item.months" :key="index">

                        <h4> {{ m.month }}</h4>
                        <ul class="list-wrapper">
                            <li v-for="(d, index) in m.date" :key="index">
                                <div v-for="(x, y) in d.title" :key="y">
                                    <a class="list-item" :href="x.url">
                                        <div class="date"> {{ index }}</div>
                                        <div class="title">{{ x.title }}</div>
                                    </a>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
                <div class="subscribe-form  col-md-4 sticky " id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form">
                    <h6>Obuna Bo'ling</h6>
                    <p>
                        Shaxsiy telegram kanalimga obuna bo'ling <a
                            href="https://t.me/shoyimobloqulov">@shoyimobloqulov</a>.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                blogs: []
            }

        },
        mounted() {
            this.fetchBlogs();
        },
        methods: {
            async fetchBlogs() {
                try {
                    const response = await fetch('http://127.0.0.1:8000/api/posts');
                    this.blogs = await response.json();
                } catch (error) {
                    console.error('Error fetching blogs:', error);
                }
            },
        },
    }
</script>