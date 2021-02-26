<template>
  <div class="container">
    <h1>This is an about page</h1>
    <div v-html="content"></div>
  </div>
</template>
<script>
import MarkdownIt from "markdown-it";
import axios from "axios";

const md = MarkdownIt();

export default {
  props: ["packageId"],
  data: () => ({
    content: null,
  }),
  watch: {
    packageId() {
      this.getMarkdown();
    },
  },
  created() {
    this.getMarkdown();
  },
  methods: {
    async getMarkdown() {
      const url = `https://raw.githubusercontent.com/mariotaddeucci/b3api/master/packages/${this.packageId}/README.md`;
      const { data } = await axios.get(url);
      this.content = `<article class="markdown-body">${md.render(
        data
      )}</article>`;
    },
  },
};
</script>
