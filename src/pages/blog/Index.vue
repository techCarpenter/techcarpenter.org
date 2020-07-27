<template>
  <Layout>
    <h1>Blog</h1>
    <ul>
      <li v-for="post in $page.posts.edges" :key="post.node.id">
        <g-link :to="post.node.path">{{ post.node.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query {
    posts: allBlog(sortBy: "date") {
      edges {
        node {
          id
          path
          title
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Articles",
  },
};
</script>