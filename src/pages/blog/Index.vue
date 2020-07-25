<template>
  <Layout>
    <h1>Blog</h1>
    <ul>
      <li v-for="post in $static.posts.edges" :key="post.node.id">
        <g-link :to="post.node.path">{{ post.node.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<static-query>
  query {
    posts: allBlog {
      edges {
        node {
          id
          path
          title
        }
      }
    }
  }
</static-query>