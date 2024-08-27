<template>
  <div style="display: flex; flex-direction: column">
    <!-- <div style="width: 100%">
      <img src="../assets/aboutusbanner.jpg" alt="" />
    </div> -->
    <div class="maintaber">
      <el-tabs v-model="activeName" @tab-click="handleClick" class="taber">
        <el-tab-pane label="Company Profile" name="first">
          <div style="display: flex; flex-direction: column">
            <div>
              <span
                ><span
                  style="
                    font-size: larger;
                    font-weight: bold;
                    font-family: Arial, Helvetica, sans-serif;
                  "
                  >Anhui Antai Technology Co., Ltd. (Antai for short),</span
                >
                (stock code: 831063) was established in 2001.</span
              >
            </div>
            <div class="profile">
              <div style="width: 80%; display: flex; flex-direction: column">
                <p
                  style="
                    color: black;
                    font-family: Arial, Helvetica, sans-serif;
                  "
                >
                  established in 2001 and a subsidiary of Anhui Publishing
                  Group, is a high-tech enterprise that integrates research and
                  development, production, design, engineering implementation,
                  and operational management. Focusing on the construction of
                  “Smart Cities,” Antai is dedicated to the fields of “Smart
                  Buildings” and “Smart Energy.” The company has long been
                  committed to the harmonious development of cities and the
                  environment, and the progress of science and technology. By
                  using buildings as carriers, cities as platforms, and
                  prioritizing client-oriented service, Antai focuses on Human,
                  Building, and City interactions, working diligently to build
                  an “information ecosystem for buildings based on cloud
                  computation.” Over more than 10 years of development, Antai
                  has grown into one of the most professional and leading
                  intelligent enterprises. In response to the national "Belt and
                  Road" initiative, the International Business Department was
                  established in 2016 to expand into international markets such
                  as Africa. In 2017, the Ethiopian branch was established,
                  leading to the successful execution of key projects, including
                  the Ethiopian Ministry of Education, Ministry of Health,
                  Ministry of Innovation, Ethiopian Telecom, Information Network
                  Security Agency (INSA), Meskel Square Project, Bahirdar
                  University, Hawassa University, Wachamo University, and
                  Wollega University Smart Campus among others. our business
                  covers dozens of industry fields including government,
                  commercial complexes, residential communities, education and
                  culture, medical care and health, and serves in different
                  regions & cities across the country. To its clients, including
                  government agencies, enterprises, institutions, and industrial
                  enterprises, Antai offers a range of services:
                </p>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    color: gray;
                    padding-bottom: 10px;
                    font-family: Arial, Helvetica, sans-serif;
                  "
                >
                  <ul>
                    <li>
                      <span style=""
                        > Comprehensive smart city consultation, top-level
                        design, and realization of relevant constructions.</span
                      >
                    </li>
                    <li>
                      <span style=""
                        > Consultation, design, implementation, and operational
                        management of building intelligence engineering.</span
                      >
                    </li>
                    <li>
                      <span style=""
                        > Consultation, assessment, and operational management
                        for green buildings.</span
                      >
                    </li>
                    <li>
                      <span style=""
                        > Consultation, design, implementation, and operational
                        management for the construction of energy conservation
                        supervision platforms at regional or enterprise
                        levels.</span
                      >
                    </li>
                    <li>
                      <span style=""
                        > Design, implementation, and operational management
                        for comprehensive new energy application
                        solutions.</span
                      >
                    </li>
                    <li>
                      <span style="">
                         Consultation, financing, design, implementation, and
                        operational management services for energy consumption
                        audits and energy conservation transformations for
                        existing buildings.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Market Layout" name="second">
          <div style="display: flex; flex-direction: column">
            <div style="display: flex; flex-direction: column">
              <div
                style="
                  display: flex;
                  justify-content: center;
                  font-family: Arial, Helvetica, sans-serif;
                "
              >
                <h4>INTERNATIONAL</h4>
              </div>
              <div style="display: flex; justify-content: center">
                <span>overseas market</span>
              </div>
            </div>
            <div
              style="
                margin-top: 10px;
                font-family: Arial, Helvetica, sans-serif;
              "
            >
              <div>
                <p>
                  In response to the national "Belt and Road" initiative, the
                  International Business Department was established in 2016 to
                  expand into international markets such as Africa and Southeast
                  Asia. In 2017, the Ethiopian branch was established, and key
                  projects such as the Ethiopian Ministry of Education's
                  Education Cloud Platform, Mekelle University Smart Campus,
                  Ethiopia INSA Data Center, Sino-Turkish Ethiopia Kombocha
                  Industrial Park, and Sino-Turkish Ethiopia Headquarters Base
                  Intelligentization were successively implemented, with a total
                  project amount of over 300 million yuan. Among them, the
                  Ethiopian Ministry of Education project was selected as a
                  cultural powerhouse project in Anhui Province in 2019. It was
                  shortlisted as an engineering service provider for the African
                  Union Headquarters, the Ethiopian National Highway Authority,
                  the Food Safety Bureau, the Ministry of Health, the
                  Telecommunications Bureau and other departments, and
                  maintained long-term business cooperation with China
                  Communications Construction, Sino-Turkish Group, China Mobile,
                  Huawei and other companies.
                </p>
              </div>
            </div>
            <div>
              <img src="../assets/marketlayout.jpg" alt="" />
            </div>

            <div
              style="display: flex; flex-direction: column; margin-top: 10px"
            >
              <div style="display: flex; justify-content: center">
                <h4>DOMESTIC</h4>
              </div>
              <div style="display: flex; justify-content: center">
                <span>Domestic market</span>
              </div>
            </div>
            <div
              style="display: flex; flex-direction: column; margin-top: 10px"
            >
              <div style="display: flex; justify-content: center">
                <h4>More than 20</h4>
                <span>years of presence in </span>
                <h4>30</h4>
                <span>provinces</span>
              </div>
              <div style="display: flex; justify-content: center">
                <h4>More than 2,000</h4>
                <span>key projects in more than </span>
                <h4>300</h4>
                <span> cities </span>
              </div>
            </div>
            <div>
              <div>
                <p style="font-family: Arial, Helvetica, sans-serif">
                  Its business covers dozens of industry fields including
                  government, commercial complexes, residential communities,
                  education and culture, medical care and health, and serves
                  more than 300 cities in 30 provinces, municipalities and
                  autonomous regions across the country.
                </p>
              </div>
            </div>
            <div>
              <img src="../assets/domesticmarket.jpg" alt="" />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Company Vission & Mission" name="third">
          <div
            style="
              display: flex;
              flex-direction: column;
              font-family: Arial, Helvetica, sans-serif !important;
            "
          >
            <div
              style="display: flex; flex-direction: column; margin-top: 10px"
            >
              <div style="display: flex; justify-content: start">
                <h4>Mission</h4>
              </div>
            </div>
            <div class="culturerap">
              <div
                style="
                  width: 70%;
                  display: flex;
                  flex-direction: column;
                  justify-content: start;
                "
              >
                <span
                  style="
                    font-size: 15px;
                    font-family: Arial, Helvetica, sans-serif;
                    color: gray;
                  "
                  > Empower our customers through innovative technology
                  solutions.</span
                >
                <span
                  style="
                    font-size: 15px;
                    font-family: Arial, Helvetica, sans-serif;
                    color: gray;
                  "
                  > Foster growth and future opportunities for our
                  employees.</span
                >
                <span
                  style="
                    font-size: 15px;
                    font-family: Arial, Helvetica, sans-serif;
                    color: gray;
                  "
                  > Contribute to making Ethiopia a leader in digital
                  transformation and smart technology adoption.</span
                >
              </div>
              <div style="width: 30%">
                <img src="../assets/companyculture1.png" alt="" />
              </div>
            </div>
            <div style="display: flex; flex-direction: column">
              <h4>Vision</h4>
              <span
                style="
                  font-size: 15px;
                  font-family: Arial, Helvetica, sans-serif;
                  color: gray;
                "
                > To be a leading global provider of digital and smart
                technology solutions, driving Ethiopia’s advancement in the tech
                industry.</span
              >
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                padding-top: 20px;
                padding-bottom: 20px;
              "
            >
              <h4>Core Values</h4>
              <span
                style="
                  font-size: 15px;
                  font-family: Arial, Helvetica, sans-serif;
                  color: gray;
                "
                > Customer-Centric: Prioritize the needs and success of our
                clients.</span
              >
              <span
                style="
                  font-size: 15px;
                  font-family: Arial, Helvetica, sans-serif;
                  color: gray;
                "
                > Innovation-Driven: Embrace creativity and technological
                advancement.</span
              >
              <span
                style="
                  font-size: 15px;
                  font-family: Arial, Helvetica, sans-serif;
                  color: gray;
                "
                > Integrity and Excellence: Commit to quality and ethical
                practices in everything we do.</span
              >
              <span
                style="
                  font-size: 15px;
                  font-family: Arial, Helvetica, sans-serif;
                  color: gray;
                "
                > People-Focused: Cultivate a supportive environment where
                employees can thrive and grow.</span
              >
              <span
                style="
                  font-size: 15px;
                  font-family: Arial, Helvetica, sans-serif;
                  color: gray;
                "
                > Ethiopia-First: Dedicate ourselves to contributing to
                Ethiopia’s growth as a technological hub in Africa</span
              >
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Development Path" name="fourth">
          <div
            style="
              display: flex;
              justify-content: center;
              flex-direction: column;
            "
          >
            <div>
              <img src="../assets/page1.png" alt="" />
            </div>
            <div>
              <img src="../assets/page2.png" alt="" />
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style scoped>
::v-deep .el-tabs__item {
  font-size: 17px !important; /* Adjust the size as needed */
}
.profile {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
@media (max-width: 768px) {
  .profile {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
.taber {
  width: 1000px;
}
@media (max-width: 768px) {
  .taber {
    width: 400px;
  }
}
.maintaber {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
}
@media (max-width: 768px) {
  .maintaber {
    margin-top: 10px;
    padding-left: 40px;
  }
}
.culturerap {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
@media (max-width: 768px) {
  .culturerap {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>
