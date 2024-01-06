<script setup>
import Card from "@/components/Card.vue";
import axios from "axios";
</script>

<template>
  <div class="cardContainer">
    <Card v-for="note in apiData" :key="note._id" :data="note"></Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiData: null,
    };
  },
  mounted() {
    // Call the API and set the data
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/"); // Replace with your API endpoint
        this.apiData = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
