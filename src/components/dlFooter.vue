<!--
 * @Descripttion: 
 * @version: 
 * @Author: Agua Man
 * @Date: 2023-05-28 06:10:55
 * @LastEditors: Agua Man
 * @LastEditTime: 2023-05-28 15:27:50
-->
<template>
  <div>
    <div v-if="showToast" class="toast-container">
      <div class="toast-modal">
        <i v-if="!errorHappen" class="fas fa-check-circle toast-icon"></i>
        <p
          :class="{
            'error-message': errorHappen,
            'success-message': !errorHappen,
          }"
        >
          {{ toastMessage }}
        </p>
      </div>
    </div>

    <footer class="footer1" style="background-color: white">
      <div class="athzhb_wrap">
        <div class="flexTotal">
          <div class="abiutAnti">
            <span style="color: black; font-weight: bold; font-size: larger"
              >About Anti</span
            >
            <p>
              <router-link to="/about">
                <span
                  style="
                    color: black !important;
                    font-family: Arial, Helvetica, sans-serif;
                    font-weight: lighter !important;
                    color: gray;
                  "
                >
                  Company Profile</span
                >
              </router-link>
            </p>
            <p>
              <router-link to="/portfolio">
                <span
                  style="
                    color: black !important;
                    font-family: Arial, Helvetica, sans-serif;
                    font-weight: lighter !important;
                    color: gray;
                  "
                >
                  Portfolio
                </span>
              </router-link>
            </p>
          </div>
          <div>
            <span style="color: black; font-weight: bold; font-size: larger"
              >Contact us</span
            >

            <div
              style="
                display: flex;
                flex-direction: column;
                color: black !important;
              "
            >
              <div style="display: flex; justify-content: start">
                <!-- <span>
                  Anhui Antai Ethiopian Branch location - Bole Sub city, Woreda
                  17, House No. New, Hayrate around Blue Sky Hotel, Addis Ababa
                  Ethiopia
                </span> -->
              </div>
              <div style="display: flex; justify-content: start">
                <span
                  style="
                    font-family: Arial, Helvetica, sans-serif;
                    color: gray;
                    font-weight: lighter !important;
                  "
                  >Mr. Dai Yong - International Center Ethiopia General
                  Manager</span
                >
              </div>
              <div style="display: flex; justify-content: start">
                <span
                  style="
                    font-family: Arial, Helvetica, sans-serif;
                    font-weight: lighter !important;
                    color: gray;
                  "
                  >Mobile No : +251-906-888-882
                </span>
              </div>
              <div style="display: flex; justify-content: start">
                <span
                  style="
                    font-family: Arial, Helvetica, sans-serif;
                    color: gray;
                    font-weight: lighter !important;
                  "
                  >Tel - +86-551-6559-0154
                </span>
              </div>

              <div style="display: flex; justify-content: start">
                <span
                  style="
                    font-family: Arial, Helvetica, sans-serif;
                    color: gray;
                    font-weight: lighter !important;
                  "
                  >Email - daiyong@antaiib.com
                </span>
              </div>
            </div>
          </div>
          <div style="color: black; display: flex; flex-direction: column">
            <span style="color: black; font-weight: bold; font-size: larger">
              Address</span
            >
            <img
              src="../assets/address.png"
              height="150px"
              width="150px"
              alt=""
            />
            <span
              style="
                background-color: #990000;
                padding: 10px;
                border-radius: 20px;
                margin-top: 10px;
              "
            >
              <a
                href="https://maps.app.goo.gl/AGTY4WtZT9KFQvrt6"
                style="font-size: 20px; color: white; text-decoration: none"
              >
                Address Link</a
              ></span
            >
          </div>
        </div>
      </div>

      <div style="background-color: white">
        <div
          style="
            display: flex;
            align-content: center;
            justify-content: space-around;
          "
        >
          <div class="col-lg-6 text-center">
            <!-- <span style="color: aliceblue;">copyright@Silk Road Hospital</span><br> -->
            <span style="color: black"
              >Powered by
              <img
                src="../assets/img/logo/insupr.png"
                width="200px"
                height="150px"
                style="padding-left: 12px"
              />
              @2024</span
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import API from "../views/api/index";

export default {
  name: "dlFooter",
  data() {
    return {
      email: "",
      isLoading: false,
      succuss: false, // Changed "succuss" to "success"
      errorHappen: false,
      error: "",
      showToast: false,
      message: "",
    };
  },
  methods: {
    subscribe() {
      this.succuss = false;
      this.isLoading = true;
      if (this.email != "") {
        API.subscribe(this.email)
          .then((res) => {
            console.log("succussfuly Subscribe", res);
            setTimeout(() => {
              this.isLoading = false;
              this.email = "";
              this.showToast = true;
              this.errorHappen = false;
              this.toastMessage = "Subscription Successful";
              setTimeout(() => {
                this.showToast = false;
              }, 5000);
            }, 2000);
            // this.isLoading=false;
            // this.email='' ;
            // this.errorHappen=false;
          })
          .catch((e) => {
            console.log(e.response.data.e.sqlMessage);

            setTimeout(() => {
              this.isLoading = false;
              this.errorHappen = true;
              this.showToast = true;
              this.toastMessage = e.response.data.e.sqlMessage.slice(0, 35);
              setTimeout(() => {
                this.showToast = false;
                this.errorHappen = false;
              }, 5000);
            }, 2000);
          });
      }
    },
    clearModal() {
      this.succuss = false;
    },
  },
};
</script>
<style scoped>
.flexTotal {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 30px;
}
@media (max-width: 768px) {
  .flexTotal {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 30px;
  }
}
.containerMain {
  position: relative;
}
.subscribe {
  font-size: large;
  color: azure;
}
.subscribe-button {
  background-color: #007bff;
  color: #eeeeee;
  border: none;
  height: fit-content;
  font-size: 18px;
  cursor: pointer;
}

/* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
/* Modal Styles */
.subscribe {
  font-size: large;
  color: azure;
}
.subscribe-button {
  background-color: #007bff;
  color: #eeeeee;
  border: none;
  height: fit-content;
  font-size: 18px;
  cursor: pointer;
}
.success-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.success-content {
  background-color: #ffff;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
}

.success-content h2 {
  color: #155815;
  margin-bottom: 10px;
}

.success-content p {
  color: #306511;
}
.toast-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.toast-modal {
  background-color: white;
  color: #156c06;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.toast-modal p {
  margin: 0;
  flex-grow: 1;
  padding: 10px 20px;
  border-radius: 8px;
}

.toast-icon {
  margin-left: 10px;
  size: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.error-message {
  color: red;
}
.abiutAnti {
}
</style>
