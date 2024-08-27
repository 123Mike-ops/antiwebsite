<template>
  <div>
    <div style="padding-left: 30px; padding-top: 20px">
      <el-button type="danger" @click="handleback()" round>Back</el-button>
    </div>
    <div
      v-if="portfolio"
      style="width: 100%; display: flex; flex-direction: column"
    >
      <div class="headerTop">
        <h2 class="header">
          {{ portfolio.projectName }}
        </h2>
      </div>

      <div style="display: flex; justify-content: center !important">
        <p class="body">
          {{ portfolio.projectDescription }}
        </p>
      </div>
      <div style="display: flex; justify-content: center; padding: 10px">
        <img :src="portfolio.imgUrl" :alt="portfolio.projectOwner" />
      </div>
      <div
        style="
          padding-left: 30px;
          padding-top: 20px;
          display: flex;
          justify-content: center;
          padding-bottom: 40px;
        "
      >
        <el-button type="danger" @click="handleback()" round>Back</el-button>
      </div>
    </div>
  </div>
</template>
<style>
@media (max-width: 768px) {
  .header {
    width: 100% !important;
    justify-content: center;
  }
}
.header {
  width: 70%;
  font-size: 20px;
}
@media (max-width: 768px) {
  .body {
    width: 100% !important;
    padding-left: 20px;
  }
}
.body {
  width: 70%;
  font-weight: 500;
  color: black;
}
@media (max-width: 768px) {
  .headerTop {
    display: flex;
    justify-content: center !important;
    padding: 10px;
    width: 100%;
  }
}
.headerTop {
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>
<script>
export default {
  name: "DetailView",

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
          projectOwner: "Ministry of science and Higher Education (MOSHE)",
          projectName:
            "3.Supply and Implementation of High-performance computing and Renovation of Modular Data Center",
          projectDescription:
            "This project involves the supply, installation, and implementation of high-performance computing (HPC) systems alongside the renovation and enhancement of an existing modular data center to support advanced Ethernet networking capabilities.Key Components:1.High-Performance Computing (HPC) Implementation:oSupply of HPC Systems: Provision of cutting-edge HPC systems designed to handle complex computational tasks, large-scale simulations, and big data analytics. These systems will enhance the computational power and efficiency of the organization, enabling faster data processing and advanced research capabilities.oIntegration and Testing: Ensuring seamless integration of HPC systems into the existing IT infrastructure, followed by comprehensive testing to confirm optimal performance.oTraining and Support: Providing specialized training for IT personnel to manage and maintain the HPC systems, along with ongoing technical support to address any operational challenges.2.Renovation of Modular Data Center:oData Center Assessment: A thorough evaluation of the current modular data center's infrastructure to identify areas that require upgrades or renovations.oInfrastructure Upgrade: Enhancing the data center's physical and virtual infrastructure to meet the demands of high-performance computing and ensure reliable and secure data storage and processing.oCooling and Power Systems: Upgrading cooling systems to handle the increased heat output from HPC equipment, as well as improving power distribution to support the high energy demands.oNetwork Enhancements: Implementing advanced Ethernet networking solutions to ensure high-speed data transfer between the HPC systems, storage units, and external networks.oSecurity Enhancements: Strengthening physical and cybersecurity measures within the data center to protect sensitive data and ensure compliance with industry standards.Project Objectives:To significantly increase computational capacity and efficiency through the deployment of high-performance computing systems.To renovate and upgrade the modular data center to support the latest technological advancements in Ethernet networking and data processing.To ensure the reliability, security, and sustainability of the data center infrastructure.To enable the organization to conduct advanced research, big data analysis, and simulations with improved accuracy and speed.",
          imgUrl: require("../assets/porfolio/mosh.png"),
        },
      ],
      portfolio: null,
    };
  },
  mounted() {
    const id = this.$route.params.projectId;
    this.portfolio = this.portfolios.find((p) => p.id === parseInt(id));
  },
  methods: {
    handleback() {
      this.$router.go(-1);
    },
  },
};
</script>
