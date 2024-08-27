<template>
  <div style="display: inline">
    <!-- headers -->

    <!-- body -->
    <section class="slider1">
      <div class="slider1__wrapper">
        <el-carousel
          :interval="slideInterval"
          indicator-position="outside"
          height="450px"
          @change="slideChange"
          :loop="true"
          class="custom-carousel"
        >
          <el-carousel-item v-for="(item, index) in home_images" :key="index">
            <div
              class="Home_image slider1__height d-flex align-items-center justify-content-center"
              :style="{ backgroundImage: `url(${item.url})` }"
            >
              <div class="container">
                <div class="row">
                  <div class="col-xl-7">
                    <Transition name="bounce">
                      <div></div>
                    </Transition>
                  </div>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>
    <!-- body 2 -->
    <!-- <section v-if="newsData && newsData.length > 0" class="about1">
     <HomeNews :newsData="newsData"/>
      
    </section> -->
    <!-- body 3 -->

    <div class="custom-scroll-container" style="width: 100%">
      <div
        style="
          display: flex;
          justify-content: center;
          font-size: larger;
          font-weight: bold;
        "
      >
        <h3 style="font-family: Arial, Helvetica, sans-serif">Our Partners</h3>
      </div>
      <div class="custom-scroll-content">
        <div class="custom-scroll-item">
          <img src="../assets/partners/huawei.png" alt="" />
        </div>

        <div class="custom-scroll-item">
          <img src="../assets/partners/dahua.png" alt="" />
        </div>
        <div class="custom-scroll-item">
          <img src="../assets/partners/Hikvision.png" alt="" />
        </div>
        <div class="custom-scroll-item">
          <img src="../assets/partners/Inspur.png" alt="" />
        </div>

        <div class="custom-scroll-item">
          <img height="50" src="../assets/partners/dell.png" alt="" />
        </div>
        <div class="custom-scroll-item">
          <img height="50" src="../assets/partners/nutanix.png" alt="" />
        </div>
        <div class="custom-scroll-item">
          <img height="50" src="../assets/partners/sky.png" alt="" />
        </div>
        <!-- Add more items as needed -->
      </div>
    </div>

    <div class="firstHe">
      <div class="imageHe">
        <img src="../assets/img/logo/logo.png" alt="" />
      </div>
      <div class="headerhe">
        <span
          style="
            font-family: Arial, Helvetica, sans-serif;
            font-weight: lighter !important;
            color: gray;
          "
        >
          Anhui Antai Technology Co., Ltd. (Antai), established in 2001 and a
          subsidiary of Anhui Publishing Group, is a high-tech enterprise
          specializing in Smart Cities, Smart Buildings, and Smart Energy.
          Expanding internationally in 2016, Antai established an Ethiopian
          branch, successfully executing key projects across various sectors in
          Africa. The company is committed to creating an information ecosystem
          for buildings through cloud computing, promoting the harmonious
          development of cities and the environment.
        </span>
      </div>
    </div>

    <section style="background-color: white">
      <div style="padding: 10px">
        <div class="flexClass">
          <div class="flexClass2">
            <div style="display: flex; justify-content: center">
              <span
                class="aijz_title_two font2"
                style="font-family: Arial, Helvetica, sans-serif"
              >
                Smart Building
              </span>
            </div>
            <div>
              <el-carousel
                :interval="slideInterval"
                indicator-position="outside"
                height="200px"
                @change="slideChange"
                :loop="true"
                class="custom-carousel"
              >
                <el-carousel-item v-for="smart in smartBuilding" :key="index">
                  <div
                    @click="handleClick(4)"
                    style="padding: 10px; width: 100%; cursor: pointer"
                  >
                    <div style="display: flex; justify-content: center">
                      <img
                        :src="smart.imgSrc"
                        style="width: 200px; height: 150px !important"
                      />
                    </div>

                    <div style="display: flex; justify-content: center">
                      <span style="font-size: 15px">{{ smart.title }}</span>
                    </div>
                    <!-- <p>{{ smart.description }}</p> -->
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="flexClass2">
            <div style="display: flex; justify-content: center">
              <span
                class="aijz_title_two font2"
                style="font-family: Arial, Helvetica, sans-serif"
              >
                Smart Agriculture
              </span>
            </div>
            <div>
              <el-carousel
                :interval="slideInterval"
                indicator-position="outside"
                height="200px"
                @change="slideChange"
                :loop="true"
              >
                <el-carousel-item
                  v-for="smart in smartAgriculture"
                  :key="index"
                >
                  <div
                    @click="handleClick(2)"
                    style="padding: 10px; width: 100%; cursor: pointer"
                  >
                    <div style="display: flex; justify-content: center">
                      <img
                        :src="smart.imgSrc"
                        style="width: 200px; height: 150px !important"
                      />
                    </div>

                    <div style="display: flex; justify-content: center">
                      <span style="font-size: 15px">{{ smart.title }}</span>
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="flexClass2">
            <div style="display: flex; justify-content: center">
              <span
                class="aijz_title_two font2"
                style="font-family: Arial, Helvetica, sans-serif"
              >
                Smart Hospital
              </span>
            </div>
            <div>
              <el-carousel
                :interval="slideInterval"
                indicator-position="outside"
                height="200px"
                @change="slideChange"
                :loop="true"
              >
                <el-carousel-item v-for="smart in smartHospital" :key="index">
                  <div
                    style="padding: 10px; width: 100%; cursor: pointer"
                    @click="handleClick(3)"
                  >
                    <div style="display: flex; justify-content: center">
                      <img
                        :src="smart.imgSrc"
                        style="width: 200px; height: 150px !important"
                      />
                    </div>

                    <div style="display: flex; justify-content: center">
                      <span style="font-size: 15px">{{ smart.title }}</span>
                    </div>
                    <!-- <p>{{ smart.description }}</p> -->
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      style="
        display: flex;
        justify-content: center;
        font-size: larger;
        font-weight: bold;
      "
    >
      <h3 style="font-family: Arial, Helvetica, sans-serif">Our Services</h3>
    </section>
    <section
      :style="{
        backgroundImage: `url(${require('../assets/img/banners/backu.jpg')})`,
      }"
      class="secoWana"
    >
      <div style="padding: 10px">
        <div class="smartEducation">
          <div class="smartEduHeader">
            <h3
              style="
                font-family: Arial, Helvetica, sans-serif;
                font-weight: bold;
                color: white;
              "
            >
              Smart Education
            </h3>
            <span
              class="aijz_title_three"
              style="
                padding: 10px;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 18px;
                font-weight: lighter !important;
                color: white;
                font-weight: bold;
              "
            >
              Smart education leverages advanced technology and data analytics
              to create personalized, efficient, and engaging learning
              experiences, enhancing both teaching and learning outcomes.
            </span>
          </div>
          <div class="horizontal-scroll-container">
            <ul class="horizontal-scroll-content">
              <li
                v-for="smart in smartEducations"
                :key="smart.id"
                class="horizontal-scroll-item"
                style="width: 250px !important; cursor: pointer"
                @click="handleClick(1)"
              >
                <img :src="smart.imgSrc" class="horizontal-scroll-image" />

                <span
                  class="horizontal-scroll-title"
                  style="
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 15px;
                    color: white;
                    font-weight: bold;
                  "
                >
                  {{ smart.title }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="aicity_wrap" style="background-color: white">
        <div class="aicity">
          <div
            style="
              display: flex;
              justify-content: center !important;
              padding: 20px;
            "
          >
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: center;
              "
            >
              <h2
                style="
                  display: flex;
                  justify-content: center;
                  font-family: monospace;
                  font-weight: bold;
                  font-family: Arial, Helvetica, sans-serif;
                "
              >
                Smart City
              </h2>

              <span style="font-family: Arial, Helvetica, sans-serif"
                >Innovation drives sustainable urban development</span
              >
            </div>
          </div>
          <div class="aicity_content_wrap">
            <ul class="aicity_content">
              <li
                class="aicity_content_item"
                v-for="item in items"
                :key="item.id"
                style="max-width: 370px; cursor: pointer"
                @click="handleClick(4)"
              >
                <img
                  :src="item.image"
                  class="aicity_content_image"
                  style="height: 70px; width: 100px"
                />
                <div class="aicity_content_items">
                  <span style="font-family: Arial, Helvetica, sans-serif">{{
                    item.title
                  }}</span>
                  <!-- <span class="aicity_two_item">{{ item.description }}</span> -->
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="videoClass">
        <div
          class="video-container"
          style="
            display: flex;
            flex-direction: column;
            padding: 20px !important;
          "
        >
          <div>
            <span
              style="font-size: 25px; font-family: Arial, Helvetica, sans-serif"
              >Our Work</span
            >
          </div>
          <video id="myVideo" controls>
            <source
              src="../assets/video/Addis Ababa Multimedia Studio.mp4"
              type="video/mp4"
              style="width: 100% !important"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="story_wrap">
          <div class="storry">
            <span
              class="story_wrap_title"
              style="
                font-size: x-large;
                padding: 20px !important;
                font-family: Arial, Helvetica, sans-serif;
              "
            >
              Stories of Success
            </span>

            <ul class="flexPort">
              <li
                v-for="portfolio in portfolios"
                class="singlePort"
                style="cursor: pointer"
                @click="handleClickPro(portfolio.id)"
              >
                <div style="display: flex; justify-content: center">
                  <img
                    :src="portfolio.imgUrl"
                    style="width: 150px; height: 150px"
                  />
                </div>
                <div class="storyBody">
                  <div style="display: flex; justify-content: center">
                    <span style="font-family: Arial, Helvetica, sans-serif">{{
                      portfolio.projectOwner
                    }}</span>
                  </div>
                  <!-- <div style="display: flex; justify-content: center">
                    <small
                      style="
                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri,
                          'Trebuchet MS', sans-serif;
                      "
                      >{{ truncatedProjectName(portfolio.projectName) }}</small
                    >
                  </div> -->

                  <!-- <div>	<span>Read More</span></div> -->
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import dlHeader from "@/components/dlHeader";
import dlFooter from "@/components/dlFooter";

import store from "@/store/index";
import staticUtils from "@/views/static/index";
import API from "@/views/api/index";

function generateMetaData() {
  var tmp = [];
  for (var i = 0; i < store.state.auth.seoMeta.length; i++) {
    tmp.push({
      name: store.state.auth.seoMeta[i],
      content: store.state.auth.seoMeta[i],
    });
  }

  return tmp;
}
import { homePageLink } from "@/views/link/link.js";

export default {
  name: "HomeView",
  components: {
    dlHeader,
    dlFooter,
  },

  data() {
    return {
      portfolios: [
        {
          id: 1,
          projectOwner: "Ethiopian Ministry of Education",
          projectName:
            " 1.Ethiopian Ministry of Education (MOE) Cloud Project ",
          projectDescription:
            "Through the construction of the educational cloud infrastructure and cloud platform of the Ethiopian Ministry of Education, Antai shares has built a learning management and educational resource platform for Ethiopia based on voice and video fusion technology and Internet technology, integrating online teaching and e-learning solutions, and established an educational cloud service . Through e-learning solutions such as online teaching, online courseware, online discussion groups, audio and video streaming, real-time virtual courses and virtual guidance, and using advanced technologies such as virtualization and cloud computing, the agility and availability of educational information systems are improved, the barriers between educational resources are broken, and the integration and interconnection of educational resources are realized.Education Cloud designs and implements learning management systems for schools, provides online teaching, and provides a variety of e-learning solutions anytime and anywhere, such as web-based courseware, online discussion groups, real-time virtual courses, video and audio streaming, web chat, online simulation and virtual guidance. In the process of producing educational materials, the Group's high-quality resources are fully utilized. The production includes digital textbooks and video cultural resources published online in multiple formats such as PDF, audio and video.The Ethiopian Education Cloud uses virtualization and cloud computing to improve the agility and availability of the education information system and break down the barriers between educational resources. Its core concept is physical dispersion and logical unification. Physical dispersion refers to the multiple data centers of the Ethiopian Ministry of Education being distributed in different regions across the country. After deploying the cloud platform, physical data centers in different regions can integrate IT resources and provide services to various schools and education departments in a unified manner. Logical unification refers to the unified management of multiple data centers distributed in different regions of Ethiopia through data center management software. First, it provides a unified operation and maintenance management platform to uniformly manage and dispatch resources distributed in different regions. Second, it provides a unified operation and management platform, provides a unified interface to the outside world, and uniformly operates and manages cloud services.",
          imgUrl: require("../assets/porfolio/moe.png"),
        },
        {
          id: 2,
          projectOwner: "Ethio Telecom ",
          projectName:
            " 2. Ethio Telecom Installation, Testing, and Commissioning of Microwave Work for Ethio-Telecom MDC Project ",
          projectDescription:
            "Anhui Antai Technology Co., Ltd. is proud to play a vital role in the Ethio-Telecom MDC (Main Data Center) project, a cornerstone initiative aimed at advancing Ethiopia's telecommunications infrastructure. Our involvement in this project includes a broad range of services designed to enhance the efficiency, security, and reliability of Ethio-Telecom's operations.Project Scope and Services Microwave Systems Installation: oInstallation of advanced microwave communication systems to enhance Ethio-Telecom’s network capabilities, providing high-speed, reliable connectivity across the country. oStrategic placement and alignment of microwave antennas to optimize signal strength and coverage, ensuring seamless communication across various regions.Testing and Commissioning:oComprehensive testing of all installed microwave systems to ensure they meet the highest standards of performance, reliability, and security.oCommissioning of the systems, including final adjustments and calibration, to ensure they are fully operational and integrated into Ethio-Telecom's existing network.Main Data Center Solutions:oDeployment of state-of-the-art data center infrastructure, including the latest servers, storage systems, and network devices.oConfiguration of secure and efficient systems, ensuring data integrity and protection against cyber threats.oIntegration of a robust datacenter power system, including backup power solutions, to guarantee uninterrupted operations.System and Security Configuration:oImplementation of comprehensive security measures, including firewalls, intrusion detection systems, and encryption protocols, to protect Ethio-Telecom's critical data and communications.oCustomization of server and network configurations to meet the specific needs of Ethio-Telecom, optimizing performance and scalability.Cabling and Integration:oInstallation of high-quality cabling infrastructure to support the seamless operation of the microwave systems and data center components.oIntegration of all systems into a cohesive network, ensuring smooth communication between the microwave systems and the main data center.Impact and BenefitsEnhanced Communication Infrastructure:oThe upgraded microwave systems and data center infrastructure will significantly improve the speed, reliability, and coverage of Ethio-Telecom's network, supporting the growing demand for telecommunications services across Ethiopia.Increased Security and Resilience:oThe implementation of advanced security protocols and backup power solutions ensures that Ethio-Telecom's data and operations are protected against both physical and cyber threats, maintaining continuous service delivery.Support for National Development:oBy enhancing Ethio-Telecom’s infrastructure, this project contributes to Ethiopia’s broader goals of national development, digital transformation, and improved access to communication services for all citizens.Future-Ready Infrastructure:oThe solutions provided by Anhui Antai Technology Co., Ltd. are designed to be scalable and adaptable, allowing Ethio-Telecom to expand and upgrade its services as technology evolves and demand increases.Our contribution to the Ethio-Telecom MDC project underscores our commitment to advancing Ethiopia's telecommunications sector. Through our comprehensive installation, testing, and commissioning services, we are helping to build a more robust, secure, and future-ready communication infrastructure that will support Ethiopia's growth and connectivity in the years to come.",
          imgUrl: require("../assets/porfolio/et.png"),
        },
        {
          id: 3,
          projectOwner: "Ministry of science and Higher Education",
          projectName:
            "3.High-performance computing and Renovation of Modular Data Center",
          projectDescription:
            "This project involves the supply, installation, and implementation of high-performance computing (HPC) systems alongside the renovation and enhancement of an existing modular data center to support advanced Ethernet networking capabilities.Key Components:1.High-Performance Computing (HPC) Implementation:oSupply of HPC Systems: Provision of cutting-edge HPC systems designed to handle complex computational tasks, large-scale simulations, and big data analytics. These systems will enhance the computational power and efficiency of the organization, enabling faster data processing and advanced research capabilities.oIntegration and Testing: Ensuring seamless integration of HPC systems into the existing IT infrastructure, followed by comprehensive testing to confirm optimal performance.oTraining and Support: Providing specialized training for IT personnel to manage and maintain the HPC systems, along with ongoing technical support to address any operational challenges.2.Renovation of Modular Data Center:oData Center Assessment: A thorough evaluation of the current modular data center's infrastructure to identify areas that require upgrades or renovations.oInfrastructure Upgrade: Enhancing the data center's physical and virtual infrastructure to meet the demands of high-performance computing and ensure reliable and secure data storage and processing.oCooling and Power Systems: Upgrading cooling systems to handle the increased heat output from HPC equipment, as well as improving power distribution to support the high energy demands.oNetwork Enhancements: Implementing advanced Ethernet networking solutions to ensure high-speed data transfer between the HPC systems, storage units, and external networks.oSecurity Enhancements: Strengthening physical and cybersecurity measures within the data center to protect sensitive data and ensure compliance with industry standards.Project Objectives:To significantly increase computational capacity and efficiency through the deployment of high-performance computing systems.To renovate and upgrade the modular data center to support the latest technological advancements in Ethernet networking and data processing.To ensure the reliability, security, and sustainability of the data center infrastructure.To enable the organization to conduct advanced research, big data analysis, and simulations with improved accuracy and speed.",
          imgUrl: require("../assets/porfolio/mosh.png"),
        },
      ],
      items2: [
        {
          id: 1,
          link: "/product1.html",
          image: "http://www.antaiib.com/upload/image/慧广厦-1.jpg",
          title: "慧广厦",
          description: "智慧建筑综合管理云平台",
        },
        {
          id: 2,
          link: "/Solution.html",
          image: "http://www.antaiib.com/upload/image/慧能效.jpg",
          title: "慧能效",
          description: "智慧能源管理云平台",
        },
        {
          id: 3,
          link: "http://www.antaiib.com/huizhizao",
          image: "http://www.antaiib.com/upload/image/慧制造-1.png",
          title: "慧制造",
          description: "数字工厂云服务平台",
        },
        {
          id: 4,
          link: "/huicaiji",
          image:
            "http://www.antaiib.com/upload/image/慧采集（暂，等图实体拍摄）.jpg",
          title: "慧采集",
          description: "多数据源多协议边缘计算网关",
        },
        {
          id: 5,
          link: "/service.html",
          image: "http://www.antaiib.com/upload/image/运维与巡检.jpg",
          title: "运维与巡检服务",
          description: "远程运维与现场巡检结合，优质、高效的服务客户",
        },
        {
          id: 6,
          link: "/green.html",
          image: "http://www.antaiib.com/upload/image/绿建咨询.jpg",
          title: "绿建咨询",
          description: "绿建方案设计咨询和绿建星级设计认证申报咨询",
        },
      ],

      items: [
        {
          id: 1,
          link: "/security.html",
          image: require("../assets/servicearea/smartgovern.png"),
          title: "Smart Governance",
          description:
            "e-Government Services: Digital portals for public services, payments, and information. Citizen Engagement: Platforms for community involvement and feedback.Urban Planning: Data-driven decision-making for sustainable development",
        },
        {
          id: 2,
          link: "/factory.html",
          image: require("../assets/servicearea/smarttransport2.png"),
          title: "Smart Transportation",
          description:
            "Traffic Management: Real-time monitoring and control of traffic flow.Public Transport: Integrated systems for buses, trains, and other public transport.Smart Parking: Solutions for efficient parking space management.",
        },
        {
          id: 3,
          link: "/OPS.html",
          image: require("../assets/servicearea/smartutility2.png"),
          title: "Smart Utilities",
          description:
            "Energy Management: Smart grids, renewable energy integration, and efficient distribution.Water Management: Real-time monitoring and control of water supply and quality.Waste Management: Automated collection, recycling, and disposal systems",
        },
        {
          id: 4,
          link: "/logistics.html",
          image: require("../assets/servicearea/publicsafety2.png"),
          title: "Public Safety",
          description:
            "CCTV Surveillance Systems: Advanced security cameras and monitoring systems.Emergency Response: Rapid response systems for emergencies and disasters.Crime Prevention: Data-driven strategies for reducing crime rates.",
        },
      ],
      carouselItems: [],
      sliderIndex: 0,
      services: [
        {
          id: 0,
          title: "Dentist Treatment",
          brief:
            "We work tirelessly to bring new level of health care with advanced technologies. Full diagnostic by 128 slices CT",
          img: require("@/assets/img/png-icon/ico_1.png"),
          url: homePageLink.examLink,
        },
        {
          id: 1,
          title: "Medical Treatment",
          brief:
            "Hospital offers internal medicine, neurology, cardiology, endocrinology, ENT services.",
          img: require("@/assets/img/png-icon/ico_3.png"),
          url: homePageLink.examLink,
        },
        {
          id: 2,
          title: "Laparoscopy surgery",
          brief:
            "minimally invasive surgical technique involves making 3 or 4 cuts in the abdomen and inserting a miniature camera and surgical instruments.",
          img: require("@/assets/img/png-icon/ico_2.png"),
          url: homePageLink.examLink,
        },
        // {
        //   id: 3,
        //   title: 'Diagnostic  service',
        //   brief: 'The Hospital  owns 100 beds with world class medical services equipped with multidisciplinary international health professionals; state of the art ICU with outstanding critical care services, multifunctional operating theaters with 100 stage of laminar flow ventilation system, 1.5 Tesla MRI, 128 Slices CT, Digital Subtraction Angiography (DSA), Holmium Laser 90 watts, the latest model of the surgical Microscopy Machine, 4D Ultrasound equipment, international standard negative pressure room for managing airborne and droplet diseases, and the most advanced laboratory system, new and highly technologic equipment for HPV diagnostics and treatment, ophthalmology equipment with variable scenario for vision loss prevention and diagnostic, glaucoma treatment, gastroenterology facility for different diagnostics/ treatment of gastrointestinal tract',
        //   img: require('@/assets/img/png-icon/png-icon-13.png'),
        //   url: homePageLink.examLink
        // },
      ],
      processes: [],
      home_images: [
        {
          id: 2,
          url: require("@/assets/img/banners/banner2.jpg"),
        },
        {
          id: 3,
          url: require("@/assets/img/banners/banner3.png"),
        },
        {
          id: 4,
          url: require("@/assets/img/banners/banner4.jpg"),
        },
      ],
      currentSlideIndex: 0,
      slideInterval: 5000,
      care1SlideInterval: 50000,
      card: "card",
      nocard: "",
      screensize: true,
      newsData: [],
      smartEducations: [
        {
          href: "/ghsj.html",
          imgSrc: require("../assets/servicearea/campusinfra.png"),
          title: "Campus IT Infrastructure",
          description:
            "Provide hardware, networks, and services that support the technological needs of an educational institution, enabling efficient communication, learning, and administrative operations.",
        },
        {
          href: "/jssg.html",
          imgSrc: require("../assets/servicearea/campusmanage.png"),
          title: "Campus Management",
          description:
            "Administrative Systems: ERP for administration, finance, and HR management.Student Information Systems (SIS): Enrollment, attendance, grading, and performance tracking.",
        },
        {
          href: "/guangsha",
          imgSrc: require("../assets/servicearea/smartclass.png"),
          title: "Smart Classroom",
          description:
            "Interactive Learning: Smart boards, interactive projectors, and multimedia content.e-Learning Platforms: Online courses, virtual classrooms, and digital resources.",
        },
        {
          href: "/huiyunwei",
          imgSrc: require("../assets/servicearea/cloudDesktop.png"),
          title: "Cloud Desktop",
          description:
            "Virtual Labs: Access to software and resources from anywhere.Remote Learning: Seamless access to classroom resources for remote studentsetc.",
        },
        // Add additional items to fill the grid
        {
          href: "#",
          imgSrc: require("../assets/servicearea/smartmultimedia.png"),
          title: "Smart Multimedia Studio",
          description:
            "4K/8K Cameras: Advanced cameras for capturing high-resolution video content.Studio Lighting: Professional lighting systems with adjustable settings to create the perfect ambiance.",
        },
        {
          href: "#",
          imgSrc: require("../assets/servicearea/IntegratedManagementSystem.png"),
          title: "Integrated Management Platform ",
          description:
            " data center management, network management, security management, parking lot management, education and teaching management, intelligent building management, campus affairs management, etc.",
        },
      ],
      smartBuilding: [
        {
          href: "/huiyunwei",
          imgSrc: require("../assets/servicearea/bas.png"),
          title: "Building Automation Systems (BAS)",
          description:
            "Centralized Control: Integration of HVAC, lighting, security, and other systems for centralized management.Energy Efficiency: Automated energy-saving measures and real-time energy usage monitoring.",
        },
        {
          href: "/huiyunwei",
          imgSrc: require("../assets/servicearea/smartsecurity.png"),
          title: "Smart Security",
          description:
            "Access Control: Biometric systems, smart locks, and secure access management.Surveillance: Advanced CCTV, facial recognition, and real-time monitoring.Intrusion Detection: Sensors and alarms for detecting unauthorized access",
        },
        {
          href: "/huiyunwei",
          imgSrc: require("../assets/servicearea/smartconference.png"),
          title: "Smart Conference Room",
          description:
            "Advanced Audio-Visual Systems: High-Definition Displays: Large screens and projectors for clear presentations.",
        },
        {
          href: "/huiyunwei",
          imgSrc: require("../assets/servicearea/iotintegration.png"),
          title: " IoT Integration",
          description:
            "Connected Devices: Integration of smart devices for seamless operation.Predictive Maintenance: Monitoring equipment health and predicting failures..",
        },
        {
          href: "/huiyunwei",
          imgSrc: require("../assets/servicearea/smartlight.jpg"),
          title: "Smart Lighting",
          description:
            "Adaptive Lighting: Automatic adjustment of lighting based on natural light and occupancy.Energy Management: Use of LED lights and smart controls to reduce energy consumption.",
        },
        {
          href: "/huiyunwei",
          imgSrc: require("../assets/servicearea/communication.png"),
          title: "Communication Systems",
          description:
            "Unified Communication: Integration of voice, video, and messaging systems.Emergency Communication: Reliable and immediate communication channels for emergencies.",
        },
        {
          href: "/huiyunwei",
          imgSrc: require("../assets/servicearea/smartpark.png"),
          title: "Parking Management",
          description:
            "Vehicle parking guidance and reverse vehicle searching support.Visual electronic map for remote management of parking lots.",
        },
      ],
      smartAgriculture: [
        {
          href: "/huiyunwei",
          imgSrc: require("../assets/servicearea/smartfarm.png"),
          title: "Smart Farms (Large-Scale Wild Farm)",
          description:
            "oSmart Farms Technology ArchitectureoData Collection And Monitoring SystemWater And Fertilizer Irrigation System",
        },
        {
          href: "/huiyunwei",
          imgSrc: require("../assets/servicearea/precissionfarm.jpeg"),
          title: "Precision Farming ",
          description:
            "Use of sensors, drones, and GPS for optimized farming practices.",
        },
        {
          href: "/huiyunwei",
          imgSrc: require("../assets/servicearea/iotagri.png"),
          title: "IoT in Agriculture ",
          description:
            "smart devices for monitoring soil, weather, and crop health",
        },
        {
          href: "/huiyunwei",
          imgSrc: require("../assets/servicearea/totalagri.png"),
          title: "Total Smart Agriculture Solutions ",
          description:
            "Smart Agriculture Development BlueprintSmart Agriculture Technology ArchitectureSmart Agricultural Information Services",
        },
        {
          href: "/huiyunwei",
          imgSrc: require("../assets/servicearea/greenhouse.png"),
          title: "Greenhouse ",
          description:
            "Greenhouse Technology ArchitectureAutomatic Skylight SystemAutomatic Sprinkler",
        },
      ],
      smartHospital: [
        {
          imgSrc: require("../assets/servicearea/telemed.png"),
          title: "Telemedicine",
        },
        {
          imgSrc: require("../assets/servicearea/iot.png"),
          title: "Medical IoT Devices",
        },
        {
          imgSrc: require("../assets/servicearea/hanal.png"),
          title: "Healthcare Analytics",
        },

        {
          imgSrc: require("../assets/servicearea/or.png"),
          title: "OR and ICU Monitoring Systems",
        },
        {
          imgSrc: require("../assets/servicearea/sf.png"),
          title: "Smart Facilities Management",
        },
        {
          imgSrc: require("../assets/servicearea/cs.png"),
          title: "Communication Systems",
        },
      ],
    };
  },
  mounted() {
    staticUtils.staticVisitorInfo();
    console.log("Current Path:", window.location.pathname);
    console.log("Full URL:", window.location.href);
    this.getlatestNews();
  },
  methods: {
    handleClickPro(proId) {
      this.$router.push({ path: `/detailProject/${proId}` });
    },
    handleClick(serId) {
      this.$router.push({ path: `/detail/${serId}` });
    },
    getImagePath(image) {
      return require(`${image}`);
    },
    slideChange(index) {
      setTimeout(() => {
        this.currentSlideIndex = index;
      }, 200);
    },
    getlatestNews() {
      API.getlatestNews()
        .then((res) => {
          this.newsData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    truncatedProjectName(word) {
      const words = word.split(" ");
      if (words.length > 10) {
        return words.slice(0, 10).join(" ") + "...";
      }
      return word;
    },
  },
  computed: {
    links() {
      return homePageLink;
    },
    carouselType() {
      return this.isLargeScreen ? "card" : "";
    },
    isLargeScreen() {
      return window.innerWidth >= 768;
    },
    // linkTo() {
    //   const hostname = "localhost";
    //   const port = "80";
    //   return `http://${hostname}:${port}/#/`;
    // },
  },
  metaInfo: {
    title: "Anhui Antai Technology", // set a title
    meta: generateMetaData(),
    link: [
      {
        rel: "asstes",
        href: "",
      },
    ],
  },
};
</script>

<style scoped>
.description-paragraph {
  width: 100%; /* Ensure the paragraph takes up full width of its container */
  height: auto; /* Allow the height to adjust based on content */
  font-weight: 400;
  font-size: small;
  word-wrap: break-word; /* Ensure long words wrap onto the next line */
  overflow-wrap: break-word; /* Fallback for better text wrapping in modern browsers */
  margin: 0; /* Remove default margins if needed */
}

.horizontal-scroll-container {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px;
  border: 0px solid #ccc; /* Optional: Add border for visibility */
  scrollbar-width: none;
}

.horizontal-scroll-content {
  display: flex;
  flex-direction: row;
}

.horizontal-scroll-item {
  flex: 0 0 auto; /* Prevent flex items from shrinking */
  margin: 10px; /* Adjust the margin as needed */
  text-align: center; /* Center text inside items */
  width: 250px;
}

.horizontal-scroll-link {
  color: black;
  text-decoration: none;
  line-height: 22px;
}

.horizontal-scroll-image {
  width: 227px;
  height: 155px;
}

.horizontal-scroll-title {
  font-size: 1.2em;
  margin: 10px 0 5px;
}

.horizontal-scroll-description {
  font-size: 0.9em;
}
@media screen and (max-width: 760px) {
  .custom-scroll-container {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
  }
  .custom-scroll-content {
    display: inline-block;
    animation: custom-scroll 25s linear infinite;
    will-change: transform;
    width: 100%;
  }
}
.custom-scroll-container {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}

.custom-scroll-content {
  display: inline-block;
  animation: custom-scroll 25s linear infinite;
  will-change: transform;
}

.custom-scroll-item {
  display: inline-block;
  width: 200px; /* Adjust the width as needed */
  margin: 10px; /* Adjust the margin as needed */
  background-color: white; /* Optional: Add background color for visibility */
}

/* Keyframes for the scrolling animation */
@keyframes custom-scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.carousel-content2 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel-image2 {
  width: 100%;
  height: auto;
}
.medium2 {
  margin-top: 10px;
  padding: 10px;
}

@media screen and (max-width: 1440px) {
  .image-wrapper {
    background-position: left center !important;
  }
}

.aijz_content_wrap {
  display: grid;
  grid-template-columns: repeat(4, 0.5fr);
  grid-template-rows: auto;
  gap: 20px;
}
.aijz_content_wrap_itemsfirst {
  list-style-type: none;
}
.aijz_content_wrap_itemsfirst a {
  text-decoration: none;
  color: black;
}
.aijz_content_wrap_itemsfirst img {
  width: 100%;
  height: auto;
}
h4 {
  margin: 10px 0 5px;
}
span {
  display: block;
  margin-top: 5px;
}

.carousel-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

.image-text {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #035fbb;
  font-size: 35px;
  font-weight: bold;
}

.marginclass {
  margin-top: 200px;
}
/* .carousel-content {
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transform-origin: center;
  transition: transform 0.3s ease;
} */

@media screen and (max-width: 767px) {
  .carousel-content {
    transform: scale(1);
  }
  .marginclass {
    margin-top: 0;
  }
}

@media screen and (max-width: 767px) {
  .slider1 {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .care1__content h2 {
    font-size: 30px;
  }
}
.care1 {
  position: relative;
  /* height: 550px; */
}

.carousel-item {
  width: 100%;
  height: 100%;
}

.carousel-content {
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.Home_image {
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.custom-carousel .el-carousel__item {
  animation: slide-animation 1s ease-in-out;
}

@keyframes slide-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.aicity_content {
  display: flex;
  /* grid-template-columns: repeat(3, 1fr); */
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  list-style: none;
  padding: 0;
}

.aicity_content_item {
  width: 20%;
  padding: 10px;
  text-align: center;
}
@media (max-width: 768px) {
  .aicity_content_item {
    width: 100%;
    padding: 10px;
    text-align: center;
  }
}

.aicity_content_link {
  text-decoration: none;
  color: black;
}

.aicity_content_image {
  width: 100px;
  margin: 0 auto;
}

.aicity_content_items {
  margin-top: 10px;
}

.aicity_first_item {
  font-weight: bold;
  display: block;
}

.aicity_two_item {
  display: block;
  margin-top: 5px;
}

.servicescw_right_items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
}

.service_item {
  background-size: cover;
  background-position: center;
  position: relative;
  height: 300px; /* Adjust as needed */
}

.service_link {
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  box-sizing: border-box;
}

.service_items h3 {
  margin: 0;
  font-size: 1.5em;
}

.service_items .detail {
  margin-top: 10px;
  font-size: 1em;
}
@media (max-width: 768px) {
  .video-container {
    width: 100% !important;
    margin: 0 auto;
    text-align: center;
  }
}
.video-container {
  position: relative;

  width: 40%;

  margin: 0 auto;

  text-align: center;
}
@media (max-width: 768px) {
  .story_wrap {
    justify-content: center !important;
    width: 100% !important;
  }
}
.story_wrap {
  height: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 60%;
}
video {
  width: 100%;
  height: 100%;
}
#myVideo {
  width: 100%;
  height: auto;
  border-radius: 50px;
}
.cover-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background: rgba(0, 0, 0, 0.5); /* semi-transparent background */
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 768px) {
  .cover-text {
    display: none;
  }
}

.flexClass {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
@media (max-width: 768px) {
  .flexClass {
    flex-direction: column; /* Switch to column layout */
    align-items: center; /* Center items horizontally */
    justify-content: flex-start; /* Align items to the start of the container */
    width: 100%;
  }
}
@media (max-width: 768px) {
  .flexPort {
    display: flex;
    flex-direction: column;
    justify-content: center !important;
  }
}

.flexPort {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 10px;
  height: 50%;
  width: 100%;
}
.storry {
  justify-content: center !important;
}

@media (max-width: 768px) {
  .singleport {
    width: 350px;
    height: 200px;
    padding-bottom: 15px;
  }
}
.singleport {
  cursor: pointer !important;
}
.flexClass2 {
  display: flex;
  flex-direction: column;
  width: 30% !important;
}
@media (max-width: 768px) {
  .flexPort {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .flexClass2 {
    display: flex;
    flex-direction: column;
    width: 100% !important;
  }
}
.smartEducation {
  display: flex;
  width: 100%;
}
@media (max-width: 768px) {
  .smartEducation {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
.smartEduHeader {
  width: 50% !important;
}
@media (max-width: 768px) {
  .smartEduHeader {
    width: 100% !important;
  }
}
.storyBody {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100px;
  width: 300px;
  overflow: hidden;
}
@media (max-width: 768px) {
  .storyBody {
    padding: 0px;
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 100%;
  }
}
@media (max-width: 768px) {
  .videoClass {
    display: flex;
    flex-direction: column;
    justify-content: center !important;
  }
}
.videoClass {
  display: flex;
  flex-wrap: wrap;

  width: 100%;
}
@media (max-width: 768px) {
  .firstHe {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }
}
.firstHe {
  display: flex;
  width: 100%;
  justify-content: center;
}
@media (max-width: 768px) {
  .imageHe {
    width: 100% !important;
  }
}
.imageHe {
  width: 18%;
}
@media (max-width: 768px) {
  .headerhe {
    width: 100% !important;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.headerhe {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 768px) {
  .secoWana {
  }
}

.secoWana {
  borderradius: "30px";
  backgroundsize: "cover";
  backgroundposition: "center";
  width: "100%";
  height: "250px";
}
</style>
