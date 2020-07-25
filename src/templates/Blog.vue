<template>
  <Layout>
    <div class="post" v-html="$page.blog.content">
    </div>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    blog(id: $id) {
      title
      content
    }
  }
</page-query>