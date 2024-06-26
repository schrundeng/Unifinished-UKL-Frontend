<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Tambah Menu</h1>
        <br />
        <br />
        <div>
          <router-link class="btn btn-success mb-4" to="/menu">Back</router-link>
        </div>
        <form @submit.prevent="addMenu">
          <div class="form-floating mb-3">
            <input
              v-model="menuName"
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Menu Name"
              required
            />
            <label for="floatingInput">Menu Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="size"
              type="text"
              class="form-control"
              id="floatingSize"
              placeholder="Size"
              required
            />
            <label for="floatingSize">Size</label>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="price"
              type="number"
              class="form-control"
              id="floatingPrice"
              placeholder="Price"
              required
            />
            <label for="floatingPrice">Price</label>
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">Image</label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <button class="w-40 btn btn-success mb-4" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      menuName: '',
      size: '',
      price: '',
      image: null
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

  methods: {
    async addMenu() {
      try {
        // Create FormData object to send file along with other data
        const formData = new FormData()
        formData.append('name', this.menuName)
        formData.append('size', this.size)
        formData.append('price', this.price)
        formData.append('image', this.image)

        // Send POST request to your API endpoint
        const response = await axios.post('http://172.16.100.39:8000/coffee', formData)

        // Handle successful response
        console.log('Menu added successfully:', response.data)
        alert('Menu added successfully')
        window.location.href = '/menu'

        // Redirect user or perform other actions as needed
      } catch (error) {
        // Handle error
        console.error('Error adding menu:', error.response.data)
        // Display error message to user or perform other actions
      }
    }
  }
}
</script>
