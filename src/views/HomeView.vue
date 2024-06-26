<template>
  <div class="container">
    <div class="row">
      <h1>Coffee Shop</h1>
      <br />
      <br />
      <br />
      <div>
        <form class="d-flex" @submit.prevent="searchMenu">
          <input
            v-model="searchQuery"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <div class="col-md-3" v-for="item in menuItems" :key="item.id">
        <div class="card" style="width: 100%">
          <img :src="item.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.size }}</p>
            <div class="alert alert-secondary p-2" style="margin-bottom: 10px !important">
              {{ item.price }}
            </div>
            <a href="#" class="btn btn-success" style="width: 100%">Order</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      menuItems: []
    }
  },
  created() {
    // Fetch data when the component is created
    this.fetchMenuData()
  },
  methods: {
    async fetchMenuData() {
      try {
        const response = await axios.get('http://172.16.100.39:8000/coffee')
        if (response.data.status) {
          this.menuItems = response.data.data
        } else {
          console.error('Failed to fetch menu data:', response.data.message)
        }
      } catch (error) {
        console.error('Error fetching menu data:', error)
      }
    }
  },
  async searchMenu() {
    try {
      const response = await axios.get(
        `http://172.16.100.39:8000/coffee?search=${this.searchQuery}`
      )
      if (response.data.status) {
        this.menuItems = response.data.data
      } else {
        console.error('Failed to fetch search results:', response.data.message)
      }
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  },
  computed: {
    filteredMenuItems() {
      // Implement filtering logic based on searchQuery if needed
      return this.menuItems
    }
  }
}
</script>
