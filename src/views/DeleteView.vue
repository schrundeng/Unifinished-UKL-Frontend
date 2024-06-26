<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Delete Menu</h1>
        <br />
        <br />
        <div>
          <router-link class="btn btn-success mb-4" to="/menu">Back</router-link>
          <br />
          <router-link class="btn btn-danger mb-4" @click="deleteMenu(item.id)"
            >Delete?</router-link
          >
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
      menuId: null,
      menuName: '',
      size: '',
      price: ''
    }
  },
  created() {
    // Retrieve the token from local storage
    const token = localStorage.getItem('token')

    // Check if the token exists
    if (token) {
      // Include the token in the headers of your Axios requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      // Handle the case where the token does not exist
      console.error('Token not found. User is not authenticated.')
      alert('Token not found. User is not authenticated.')
      // Redirect the user to the login page or perform other actions as needed
    }
  },
  mounted() {
    // Retrieve menu item ID from route params
    this.menuId = this.$route.params.id
    // Fetch menu item details from API
    // this.fetchMenuDetails()
  },
  methods: {
    async deleteMenu() {
      try {
        // Send PUT or PATCH request to update menu item
        await axios.delete(`http://172.16.100.39:8000/coffee/${this.menuId}`)
        alert('Menu deleted successfully')
        window.location.href = '/menu'
        // Redirect user or perform other actions upon successful update
      } catch (error) {
        console.error('Error updating menu:', error), console.log(this.id)
      }
    }
  }
}
</script>
