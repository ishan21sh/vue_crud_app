<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-color">
        <RouterLink class="navbar-brand mx-4" to="/">Welcome</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse me-4" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto ms-auto">
            <li class="nav-item active">
              <RouterLink class="nav-link" to="/">All Notes</RouterLink>
            </li>
            <li class="nav-item active">
              <RouterLink class="nav-link" to="/about">Create Notes</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
