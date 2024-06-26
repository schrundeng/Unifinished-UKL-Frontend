<template>
  <div class="container">
    <div class="row">
      <h1>Cart</h1>
      <br />
      <br />
      <br />
      <div class="col-12">
        <router-link class="btn btn-success mb-4" to="/home">Back to Menu</router-link>
      </div>
      <div class="col-7">
        <table class="table table-striped table-hover">
          <thead class="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Detail</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
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
                <a :href="'/edit/' + item.id" class="btn btn-warning" style="margin: 10px">Edit</a>
                <button class="btn btn-danger" @click="deleteMenu">Delete</button>
              </td>
            </tr>
            <!-- End of dynamic rows -->
          </tbody>
        </table>
      </div>
      <div class="col-5">
        <div class="card">
          <div class="card-header">Customer Information</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label for="inputText" class="col-form-label">Your Name</label>
                </div>
                <div class="col-auto">
                  <input type="text" id="inputTex" class="form-control" style="width: auto" />
                </div>
              </div>
            </li>
            <li class="list-group-item">
              Order Type:
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">Dine In</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">Take Away</label>
              </div>
            </li>
            <li class="list-group-item">
              <div class="card" style="width: auto">
                <div class="card-header">Order Summary</div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Order(s):</li>
                  <li class="list-group-item">Tax Charges:</li>
                  <li class="list-group-item">Grand Total:</li>
                </ul>
              </div>
            </li>
            <li class="list-group-item">
              <button class="btn btn-success">Select Payment Type!11!!!</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
