<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: white;
    "
  >
    <div style="padding-left: 30px; padding-top: 20px">
      <el-button type="danger" @click="handleback()" round>Back</el-button>
    </div>
    <div class="header1" style="font-family: Arial, Helvetica, sans-serif">
      <h1
        style="font-family: Arial, Helvetica, sans-serif !important"
        v-if="serviceArea.sectorName"
      >
        {{ serviceArea.sectorName }}
      </h1>
    </div>
    <div
      class="detailBody"
      style="font-family: Arial, Helvetica, sans-serif !important"
    >
      <div v-for="servo in serviceArea.details" class="akafi">
        <div>
          <span
            class="servoTitle"
            style="font-family: Arial, Helvetica, sans-serif"
            >{{ servo.title }}</span
          >
        </div>
        <div class="detailBar">
          <span
            style="
              display: flex;
              justify-content: start;
              font-family: Arial, Helvetica, sans-serif;
              color: gray;
            "
            >{{ servo.desc1 }}</span
          >
          <span
            style="
              display: flex;
              justify-content: start;
              font-family: Arial, Helvetica, sans-serif;
              color: gray;
            "
            >{{ servo.desc2 }}</span
          >
          <span
            style="
              display: flex;
              justify-content: start;
              font-family: Arial, Helvetica, sans-serif;
              color: gray;
            "
            >{{ servo.desc3 }}</span
          >
          <span
            style="
              display: flex;
              justify-content: start;
              font-family: Arial, Helvetica, sans-serif;
              color: gray;
            "
            >{{ servo.desc4 }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import serviceData from "../data.json";
export default {
  data() {
    return {
      serId: null,
      serviceArea: null,
    };
  },
  mounted() {
    this.serId = parseInt(this.$route.params.serId); // Parse serId as an integer
    this.fetchServiceArea();
    console.log("Mounted with serId:", this.serId);
  },
  methods: {
    fetchServiceArea() {
      this.serviceArea = serviceData.serviceArea.find(
        (area) => area.id === this.serId
      );
      if (this.serviceArea) {
        console.log("Found service area:", this.serviceArea);
      } else {
        console.log("Service area not found for id:", this.serId);
      }
    },
    handleback() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.detailBody {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4 equal-width columns */
  grid-template-rows: repeat(
    4,
    auto
  ); /* 4 rows, height determined by content */
  justify-content: center; /* Centers the grid items horizontally */
  width: 100%;
  gap: 10px; /* Adds space between grid items */
  padding: 10px;
}
@media (max-width: 768px) {
  .detailBody {
    display: flex;
    flex-direction: column !important;
    justify-content: start !important;
    padding: 10px;
    width: 100% !important  ;
  }
}

@media (max-width: 768px) {
  .akafi {
    padding-top: 20px;
    width: 100% !important;
  }
}
.akafi {
  padding-top: 20px;
}
@media (max-width: 768px) {
  .servoTitle {
    color: red;
    font-family: monospace;
    display: flex;
    justify-content: start !important;
    font-size: 25px;
    margin-left: 3% !important;
  }
}
.servoTitle {
  color: red;
  font-family: monospace;
  display: flex;
  justify-content: start;
  font-size: 25px;
  margin-left: 25%;
}
@media (max-width: 768px) {
  .header1 {
    display: flex;
    justify-content: start !important;
    margin-left: 3%;
  }
}

.header1 {
  display: flex;
  justify-content: center;
}
@media (max-width: 768px) {
  .detailBar {
    width: 100%;
    line-height: 2.5;
    justify-content: start !important;
    margin-left: 3% !important;
  }
}
.detailBar {
  line-height: 2.5;
  justify-content: center;
  margin-left: 25%;
}
</style>
