<template>
  <div class="container" v-html="content"></div>
</template>
<script>
import MarkdownIt from "markdown-it";
const md = MarkdownIt();

export default {
  async asyncData({ $axios, params }) {
    const { packageId } = params;

    const url = `https://raw.githubusercontent.com/mariotaddeucci/b3api/master/packages/${packageId}/README.md`;

    const { data } = await $axios.get(url);
    const content = `<article class="markdown-body" style="display:inline-grid;" >${md.render(
      data
    )}</article>`;

    return { content };
  },
};
</script>
