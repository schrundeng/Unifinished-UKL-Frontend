<script>
import axios from 'axios'

export default {
  data() {
    return {
      menuItems: [],
      menuId: {}
    }
  },
  created() {
    // Fetch data when the component is created
    this.fetchMenuData()
    const token = localStorage.getItem('token')

    // Check if the token exists
    if (token) {
      // Include the token in the headers of your Axios requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      // Handle the case where the token does not exist
      console.error('Token not found. User is not authenticated.')
      // Redirect the user to the login page or perform other actions as needed
    }
  },
  mounted() {
    // Retrieve menu item ID from route params
    this.menuId = this.$route.params.id
    // Fetch menu item details from API
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
    },
    async deleteMenu(id) {
      try {
        // Retrieve authentication token from local storage
        const token = localStorage.getItem('token')

        // Check if the token exists
        if (token) {
          // Include the token in the headers of your Axios requests
          const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }

          // Send DELETE request to delete menu item with the token included in the headers
          await axios.delete(`http://172.16.100.39:8000/coffee/${id}`, config)

          // If the request is successful, display an alert and redirect the user
          alert('Menu deleted successfully')
          window.location.href = '/menu' // Redirect user to the menu page
        } else {
          // Handle the case where the token does not exist
          console.error('Token not found. User is not authenticated.')
          // Redirect the user to the login page or perform other actions as needed
          // For example, you could redirect the user to the login page:
          // window.location.href = '/login';
        }
      } catch (error) {
        // Handle errors
        console.error('Error deleting menu:', error)
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

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Menu Data</h1>
          <br />
          <br />
          <div>
            <router-link class="btn btn-success mb-4" to="/add">Add Menu</router-link>
          </div>
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
          <br />
          <table class="table table-striped table-hover">
            <thead class="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Menu Name</th>
                <th scope="col">Image</th>
                <th scope="col">Size</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <!-- Replace static rows with dynamic rows -->
              <tr v-for="item in menuItems" :key="item.id">
                <th scope="row">{{ item.id }}</th>
                <td>{{ item.name }}</td>
                <td>
                  <img :src="item.image" class="card-img-top" alt="..." />
                </td>
                <td>{{ item.size }}</td>
                <td>{{ item.price }}</td>
                <td>
                  <a :href="'/edit/' + item.id" class="btn btn-warning" style="margin: 10px"
                    >Edit</a
                  >
                  <a class="btn btn-danger" style="margin: 10px" @click="deleteMenu(item.id)"
                    >Delete</a
                  >
                </td>
              </tr>
              <!-- End of dynamic rows -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>
