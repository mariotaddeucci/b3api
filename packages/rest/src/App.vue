<template>
  <div>
    <section class="hero is-fullheight is-default is-bold">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="../">
                <img
                  src="https://raw.githubusercontent.com/BulmaTemplates/bulma-templates/master/images/bulma.png"
                  alt="Logo"
                />
              </a>
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
                    <li class="is-active" @click="$router.push({ name: 'Home', params: {title: 'test title' }})"><a>Home</a></li>
                    <li v-for="pkg in packages" :key="pkg" >
                      <a @click="$router.push({ name: 'package', params: {packageId: pkg.toLowerCase() }})">{{pkg}}</a>
                    </li>
                  </ul>
                  <a
                    id="github-project"
                    href="https://github.com/mariotaddeucci/b3api"
                    class="button"
                    ><span class="icon"> <i class="fa fa-github"></i> </span
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="hero-body">
        <router-view />
      </div>

      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-centered">
            <ul>
              <li><a>And this is the bottom</a></li>
            </ul>
          </div>
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
</style>

<script>
export default {
  data:()=>({
    packages:['Web','Rest', 'Python', 'Node']
  })
}
</script>