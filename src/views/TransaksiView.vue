<script>
import axios from 'axios'

export default {
  data() {
    return {
      menuItems: [],
      menuDetails: []
    }
  },
  created() {
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
    // Fetch data when the component is created
    this.fetchMenuData()
  },

  methods: {
    async fetchMenuData() {
      try {
        const response = await axios.get('http://172.16.100.39:8000/order')
        if (response.data.status) {
          this.menuItems = response.data.data
          this.menuDetails = response.data.order_detail
        } else {
          console.error('Failed to fetch menu data:', response.data.message)
        }
      } catch (error) {
        console.error('Error fetching menu data:', error)
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Transaksi</h1>
        <br />
        <table class="table table-striped table-hover">
          <thead class="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date {{ menuId }}</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Order Type</th>
              <th scope="col">Order Details</th>
              <th scope="col">Total Price</th>
            </tr>
          </thead>
          <tbody>
            <!-- Replace static rows with dynamic rows -->
            <tr v-for="(item, index) in menuItems" :key="item.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ item.order_date }}</td>
              <td>{{ item.customer_name }}</td>
              <td>{{ item.order_type }}</td>
              <td>{{ item.order_detail }}</td>
              <td>
                <!-- Add action buttons here if needed -->
              </td>
            </tr>
            <!-- End of dynamic rows -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
