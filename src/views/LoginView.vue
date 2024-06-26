<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col"></div>
      <div class="col">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <main class="form-signin">
          <form @submit.prevent="login">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label for="floatingInput">Email address</label>
            </div>
            <br />
            <div class="form-floating">
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label for="floatingPassword">Password</label>
            </div>
            <br />
            <button class="w-100 btn btn-lg btn-primary" type="submit" to="/menu">Sign in</button>
          </form>
        </main>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://172.16.100.39:8000/admin/auth', {
          email: this.email,
          password: this.password
        })

        // Handle successful login response here
        console.log('Login successful:', response.data)
        alert('Login successful')
        window.location.href = '/menu'

        const token = response.data.token

        // Store the token in local storage
        localStorage.setItem('token', token)
        // Redirect the user to another page or perform other actions as needed
      } catch (error) {
        // Handle login error
        console.error('Login failed:', error.response.data)
        // You can display error messages to the user or perform other actions
      }
    }
  }
}
</script>
