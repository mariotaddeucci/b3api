<template>
  <div class="container" v-html="content"></div>
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
      this.content = `<article class="markdown-body" style="display:inline-grid;" >${md.render(
        data
      )}</article>`;
    },
  },
};
</script>
