<template>
  <div class="createNoteDiv">
    <div class="formContainer">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label class="label" for="exampleFormControlInput1">Title</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="title"
            v-model="formData.title"
          />
        </div>

        <div class="form-group">
          <label class="label" for="exampleFormControlTextarea1"
            >Description</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="formData.description"
          ></textarea>
        </div>

        <div class="buttonContainer">
          <button type="submit" class="btn btn-primary">
            {{ trigger === false ? "Create" : "Update" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        title: "",
        description: "",
      },
      trigger: false,
      noteId: "",
    };
  },
  created() {
    const noteId = this.$route.params.id;
    if (noteId) {
      this.fetchData(noteId);
    }
  },
  methods: {
    submitForm() {
      console.log(this.formData);
      if (this.trigger === false) {
        axios
          .post("http://localhost:3000/", {
            title: this.formData.title,
            description: this.formData.description,
          })
          .then(() => {
            this.$router.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axios
          .put(`http://localhost:3000/${this.noteId}`, {
            title: this.formData.title,
            description: this.formData.description,
          })
          .then(() => {
            this.$router.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    fetchData(noteId) {
      axios.get(`http://localhost:3000/${noteId}`).then((res) => {
        this.formData.title = res.data.title;
        this.formData.description = res.data.description;
        this.trigger = true;
        this.noteId = noteId;
      });
    },
  },
};
</script>
