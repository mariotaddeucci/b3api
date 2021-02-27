<template>
  <div>
    <section class="hero is-fullheight is-default is-bold">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <NuxtLink to="/">
                <span class="title-brand">B3Api</span>
              </NuxtLink>
              <span class="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenu" class="navbar-menu">
              <div class="navbar-end">
                <div class="tabs is-right">
                  <ul>
                    <li :class="{ 'is-active': ($nuxt.$route.path == '/') }">
                      <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li :class="{ 'is-active': ($nuxt.$route.path == '/pkg/rest') }">
                      <NuxtLink to="/pkg/rest">Rest API</NuxtLink>
                    </li>
                    <li :class="{ 'is-active': ($nuxt.$route.path == '/pkg/node') }">
                      <NuxtLink to="/pkg/node">Node</NuxtLink>
                    </li>
                    <li :class="{ 'is-active': ($nuxt.$route.path == '/pkg/python') }">
                      <NuxtLink to="/pkg/python">Python</NuxtLink>
                    </li>
                    <li>
                      <a href="https://github.com/mariotaddeucci/b3api">
                        Código Fonte
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <nuxt />
      </div>

      <div class="hero-foot">
        <div class="has-text-centered">
          <p>
            Desenvolvido por
            <a href="https://github.com/mariotaddeucci">Mario Taddeucci</a>.
            Disponível no
            <a href="https://github.com/mariotaddeucci/b3api">Github</a>,
            <a href="https://www.npmjs.com/package/b3api">NPM</a>
            e
            <a href="https://pypi.org/project/b3api/">PyPi</a>.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
#github-project {
  margin-left: 20px;
  margin-top: 6px;
  color: #fff;
  background-color: #24292e;
}
#github-project .icon {
  margin-left: calc(-0.5em - 1px);
  margin-right: calc(-0.5em - 1px);
  font-size: 22px;
}
.hero-body {
  padding: 1rem 1.5rem;
}
.hero-foot {
  background-color: #fafafa;
  padding: 1em 3em;
}
.title-brand {
  font-weight: 500;
  font-size: 2em;
  color: #444;
}
.navbar-brand{
  padding-left: 1em;
}
</style>