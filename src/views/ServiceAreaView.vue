<template>
  <div style="display: flex; flex-direction: column">
    <section class="articles">
      <article v-for="ser in ServiceAreas" :key="ser.id">
        <div class="article-wrapper">
          <figure>
            <img :src="ser.imgUrl" alt="" />
          </figure>
          <div class="article-body">
            <span
              @click="handleClick(ser.id)"
              style="cursor: pointer; font-family: Arial, Helvetica, sans-serif"
            >
              {{ ser.sectorName }}
            </span>

            <el-collapse accordion>
              <el-collapse-item>
                <template #title>
                  <div @click.stop>
                    Read More
                    <el-icon class="header-icon">
                      <info-filled />
                    </el-icon>
                  </div>
                </template>
                <div style="display: flex">
                  <div
                    style="
                      padding: 3px;
                      overflow: hidden;
                      display: flex;
                      flex-direction: column;
                    "
                  >
                    <span
                      class="detailCard"
                      v-for="link in ser.subSectors"
                      :key="link.sec"
                      @click="handleClick(ser.id)"
                    >
                      <div>{{ link.sec }}</div>
                    </span>
                  </div>
                  <div v-if="ser.subSectors2">
                    <span
                      class="detailCard"
                      v-for="link in ser.subSectors2"
                      :key="link.sec"
                      @click="handleClick(link.id)"
                    >
                      <div style="font-family: Arial, Helvetica, sans-serif">
                        {{ link.sec }}
                      </div>
                    </span>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      showDetail: false,
      ServiceAreas: [
        {
          id: 1,
          sectorName: "Smart Education",
          imgUrl: require("../assets/servicearea/smarteducation.jpg"),

          subSectors: [
            {
              id: 1,
              sec: "Campus IT Infrastructure",
            },
            {
              id: 2,
              sec: "Campus Management",
            },
            {
              id: 3,
              sec: "Smart Classroom",
            },
            {
              id: 4,
              sec: "Cloud Desktop",
            },
            {
              id: 5,
              sec: "Smart Multimedia Studio",
            },
            {
              id: 6,
              sec: "Integrated Management",
            },
          ],
        },
        {
          id: 2,
          sectorName: "Smart Agriculture",
          imgUrl: require("../assets/servicearea/totalagri.png"),

          subSectors: [
            {
              id: 1,
              sec: "Smart Farms (Large-Scale Wild Farm)",
            },
            {
              id: 2,
              sec: "Precision Farming",
            },
            {
              id: 3,
              sec: "IoT in Agriculture",
            },
            {
              id: 4,
              sec: "Total Smart Agriculture Solutions",
            },
            {
              id: 5,
              sec: "Greenhouse",
            },
          ],
        },
        {
          id: 3,
          sectorName: "Smart Hospital",
          imgUrl: require("../assets/servicearea/smarthospital.jpg"),

          subSectors: [
            {
              id: 1,
              sec: "Telemedicine",
            },
            {
              id: 2,
              sec: "Telemedicine",
            },
            {
              id: 3,
              sec: "Medical IoT Devices",
            },
            {
              id: 4,
              sec: "Healthcare Analytics",
            },
            {
              id: 5,
              sec: "IP Telephone Systems",
            },
            {
              id: 6,
              sec: "OR and ICU Monitoring Systems",
            },
            {
              id: 7,
              sec: "Smart Facilities Management",
            },
            {
              id: 8,
              sec: "Communication Systems",
            },
          ],
        },
        {
          id: 4,
          sectorName: "Smart City",
          imgUrl: require("../assets/servicearea/smartcity.jpg"),

          subSectors: [
            {
              id: 1,
              sec: "Smart Governance",
            },
            {
              id: 2,
              sec: "Smart Transportation",
            },
            {
              id: 3,
              sec: "Smart Utilities",
            },
            {
              id: 4,
              sec: "Public Safety",
            },

            {
              id: 5,
              sec: "Smart Building",
            },
            {
              id: 6,
              sec: "Smart Security",
            },
            {
              id: 7,
              sec: "Smart Conference Room",
            },
            {
              id: 8,
              sec: "IoT Integration",
            },

            {
              id: 10,
              sec: "Communication Systems",
            },
            {
              id: 11,
              sec: "Parking Management",
            },
          ],

          subSectors2: [
            {
              id: 1,
              sec: "Environmental Monitoring",
            },
            {
              id: 2,
              sec: "Smart Lighting",
            },
            {
              id: 3,
              sec: "Waste Management",
            },
            {
              id: 4,
              sec: "Visitor Experience",
            },
            {
              id: 5,
              sec: "Security and Safety",
            },
            {
              id: 6,
              sec: "Connectivity and IoT Integration",
            },
            {
              id: 7,
              sec: "Sustainable Practices ",
            },
            {
              id: 8,
              sec: "Recreation and Leisure",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleClick(serId) {
      this.$router.push({ path: `/detail/${serId}` });
    },
  },
};
</script>
<style scoped>
.detailCard {
  cursor: pointer;
}
article {
  --img-scale: 1.001;
  --title-color: black;
  --link-icon-translate: -20px;
  --link-icon-opacity: 0;
  position: relative;
  border-radius: 16px;
  box-shadow: none;
  background: #fff;
  transform-origin: center;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
}

article a::after {
  position: absolute;
  inset-block: 0;
  inset-inline: 0;
  cursor: pointer;
  content: "";
}

/* basic article elements styling */
article h2 {
  margin: 0 0 18px 0;
  font-family: "Bebas Neue", cursive;
  font-size: 1.9rem;
  letter-spacing: 0.06em;
  color: var(--title-color);
  transition: color 0.3s ease-out;
}

figure {
  margin: 0;
  padding: 0;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

article img {
  max-width: 100%;
  transform-origin: center;
  transform: scale(var(--img-scale));
  transition: transform 0.4s ease-in-out;
}

.article-body {
  padding: 24px;
}

article a {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #28666e;
}

article a:focus {
  outline: 1px dotted #28666e;
}

article a .icon {
  min-width: 24px;
  width: 24px;
  height: 24px;
  margin-left: 5px;
  transform: translateX(var(--link-icon-translate));
  opacity: var(--link-icon-opacity);
  transition: all 0.3s;
}

/* using the has() relational pseudo selector to update our custom properties */
article:has(:hover, :focus) {
  --img-scale: 1.1;
  --title-color: #28666e;
  --link-icon-translate: 0;
  --link-icon-opacity: 1;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

/************************ 
Generic layout (demo looks)
**************************/

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 48px 0;
  font-family: "Figtree", sans-serif;
  font-size: 1.2rem;
  line-height: 1.6rem;
  background-image: linear-gradient(45deg, #7c9885, #b5b682);
  min-height: 100vh;
}

@media (max-width: 768px) {
  .articles {
    display: flex;
    flex-direction: column;
    max-width: 100% !important;
  }
}

.articles {
  display: grid;
  max-width: 1200px;
  padding: 10px;
  margin-inline: auto;
  padding-inline: 24px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

@container card (min-width: 380px) {
  .article-wrapper {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 16px;
  }
  .article-body {
    padding-left: 0;
  }
  figure {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  figure img {
    height: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
}

.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-template-rows: repeat(3, auto);
  gap: 20px; /* Adjust the gap between items as needed */
}
@media (max-width: 768px) {
  .grid-container {
    display: flex;
    flex-wrap: wrap;
  }
}
.grid-item {
  background-color: #f0f0f0; /* Optional: Add background color for visibility */
  padding: 50px; /* Optional: Add padding inside items */
  text-align: center; /* Center text inside items */
  border: 1px solid #ccc; /* Optional: Add border for visibility */
}
</style>
