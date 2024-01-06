<template id="card">
  <div class="eachCardContainer">
    <div class="titleContainer">
      <p class="title">{{ data.title }}</p>
    </div>
    <div class="descriptionContainer">
      <p class="description">
        {{ data.description }}
      </p>
    </div>
    <div class="buttonContainer">
      <button
        class="btn btn-primary"
        @click="this.$router.push(`/update/${data._id}`)"
      >
        Update
      </button>
      <button class="btn btn-danger" @click="deleteNote(data._id)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import path from "path";
import axios from "axios";

export default {
  props: {
    data: Object,
  },
  mounted() {
    console.log(this.data);
  },
  template: "#card",
  methods: {
    deleteNote(noteId) {
      axios.delete(`http://localhost:3000/${noteId}`).then(() => {
        location.reload();
      });
    },
  },
};
</script>
