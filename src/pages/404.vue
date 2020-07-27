<template>
  <Layout>
    <h1>Oops...</h1>
    <p>Looks like there's nothing here.</p>
    <h2>Recent posts:</h2>
    <ul>
      <li v-for="post in $page.posts.edges" :key="post.node.id">
        <g-link :to="post.node.path">{{post.node.title}}</g-link>
        - {{getDateString(post.node.date)}}
      </li>
    </ul>
  </Layout>
</template>

<script>
module.exports = {
  metaInfo: {
    title: "404 - Page Not Found",
  },
  methods: {
    getDateString(dateString) {
      let date = new Date(dateString);
      return `${date.toLocaleString("default", {
        month: "short",
      })} ${date.getDate()}, ${date.getFullYear()}`;
    },
  },
};
</script>

<page-query>
    query {
    posts: allBlog(sortBy: "date" limit: 5) {
      edges {
        node {
          id
          path
          title
          date
        }
      }
    }
  }
</page-query>