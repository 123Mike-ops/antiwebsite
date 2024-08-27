<template>
  <div>
    <!-- <div>
      <img src="../assets/portfoliobanner.jpg" alt="" />
    </div> -->

    <div class="grid-container">
      <div class="grid-item" v-for="portfolio in portfolios">
        <div class="wrap animate pop">
          <div class="overlay">
            <div
              class="overlay-content animate slide-left delay-2"
              style="
                width: 100% !important;
                font-family: Arial, Helvetica, sans-serif;
              "
            >
              <h5 class="animate slide-left pop delay-4">
                {{ portfolio.projectName }}
              </h5>
              <p
                class="animate slide-left pop delay-5"
                style="
                  color: white;
                  margin-bottom: 2.5rem;
                  font-family: Arial, Helvetica, sans-serif;
                  width: 100% !important;
                  color: black !important;
                "
              >
                {{ portfolio.projectOwner }}
              </p>
            </div>
            <div class="image-content animate slide delay-5"></div>
            <div class="dots animate">
              <div class="dot animate slide-up delay-6"></div>
              <div class="dot animate slide-up delay-7"></div>
              <div class="dot animate slide-up delay-8"></div>
            </div>
          </div>
          <div
            class="text"
            style="display: flex; flex-direction: column; width: 100%"
          >
            <p style="padding-left: 10px !important">
              <img
                class="inset"
                :src="portfolio.imgUrl"
                style="max-height: 150px"
                alt=""
              />
            </p>
            <div style="display: flex; justify-content: center">
              <p
                style="
                  font-size: small;
                  text-indent: 0px;
                  text-align: justify;
                  display: flex;
                  font-family: Arial, Helvetica, sans-serif;
                  width: 100%;
                "
              >
                {{ portfolio.projectDescription }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  background: linear-gradient(
    to right,
    #008000,
    #00e600,
    #b3ffb3,
    #00e600,
    #008000
  );
  font-family: "Martel Sans", sans-serif;
}

h1 {
  font-size: 5.25vmin;
  text-align: center;
  color: rgb(28, 27, 27);
}
p {
  font-size: max(10pt, 2.5vmin);
  line-height: 1.4;
  color: #0e390e;
  margin-bottom: 1.5rem;
}
@media (max-width: 768px) {
  .wrap {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    max-width: 110vmin !important;
    height: 100vmin !important;
    margin: 2rem auto;

    transition: 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
  }
}
.wrap {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  max-width: 100vmin;
  height: 60vmin;
  margin: 2rem auto;

  transition: 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
}
.overlay {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1rem 0.75rem;
  background: #e2edf3; /* DarkRed */
  transition: 0.4s ease-in-out;
  z-index: 1;
}
.overlay-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15vmin;
  height: 100%;
  padding: 0.5rem 0 0 0.5rem;
  border: 3px solid;
  border-image: linear-gradient(
      to bottom,
      #aea724 5%,
      forestgreen 35% 65%,
      #aea724 95%
    )
    0 0 0 100%;
  transition: 0.3s ease-in-out 0.2s;
  z-index: 1;
}
.image-content {
  position: absolute;
  top: 0;
  right: 0;
  width: 60vmin;
  height: 100%;

  background-size: cover;
  transition: 0.3s ease-in-out;
  /* border: 1px solid green; */
}

.inset {
  max-width: 50%;
  margin: 0.25em 1em 1em 0;
  border-radius: 0.25em;
  float: left;
}

.dots {
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 55px;
  height: 4vmin;
  transition: 0.3s ease-in-out 0.3s;
}
.dot {
  width: 14px;
  height: 14px;
  background: yellow;
  border: 1px solid indigo;
  border-radius: 50%;
  transition: 0.3s ease-in-out 0.3s;
}

.text {
  position: absolute;
  top: 0;
  right: 0;
  width: 60vmin;
  height: 100%;
  padding: 2vmin 2vmin;
  background: #fff;
  box-shadow: inset 1px 1px 15px 0 rgba(0 0 0 / 0.4);
  overflow-y: scroll;
}

.wrap:hover .overlay {
  transform: translateX(-60vmin);
  display: none;
}
.wrap:hover .image-content {
  width: 30vmin;
}
.wrap:hover .overlay-content {
  border: none;
  transition-delay: 0.2s;
  transform: translateX(60vmin);
}
.wrap:hover .dots {
  transform: translateX(1rem);
}
.wrap:hover .dots .dot {
  background: white;
}

/* Animations and timing delays */
.animate {
  animation-duration: 0.7s;
  animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
  animation-fill-mode: backwards;
}
/* Pop In */
.pop {
  animation-name: pop;
}
@keyframes pop {
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}

/* Slide In */
.slide {
  animation-name: slide;
}
@keyframes slide {
  0% {
    opacity: 0;
    transform: translate(4em, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

/* Slide Left */
.slide-left {
  animation-name: slide-left;
}
@keyframes slide-left {
  0% {
    opacity: 0;
    transform: translate(-40px, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

.slide-up {
  animation-name: slide-up;
}
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(3em);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.delay-1 {
  animation-delay: 0.3s;
}
.delay-2 {
  animation-delay: 0.6s;
}
.delay-3 {
  animation-delay: 0.9s;
}
.delay-4 {
  animation-delay: 1.2s;
}
.delay-5 {
  animation-delay: 1.5s;
}
.delay-6 {
  animation-delay: 1.8s;
}
.delay-7 {
  animation-delay: 2.1s;
}
.delay-8 {
  animation-delay: 2.4s;
}
</style>
<script>
export default {
  data() {
    return {
      portfolios: [
        {
          projectOwner: "China",
          projectName: " 1.Hefei Smart Campus Management Project",
          projectDescription:
            " Based on the Internet of Things and with big data + cloud services as the core, it integrates campus teaching, management, and life software and hardware platforms to achieve intelligent campus management, integrated campus life and learning, and digitalization and visualization of campus facilities. Through the comprehensive collection, processing and analysis of all information on people, things and objects on campus, as well as the systematic co-construction and sharing of campus resources, we can achieve unified user authentication, unified management service platform, unified teaching resource library and unified data analysis platform for various application systems of smart campus, providing information technology for campus management, education and teaching, campus life, parent-school co-education and campus culture construction.",
          imgUrl: require("../assets/porfolio/hefi.png"),
        },
        {
          projectOwner: "Anuhi Provinence",
          projectName:
            " 2.Anhui Province Public Building Energy Consumption Supervision Platform",
          projectDescription:
            "The Anhui Province Public Building Energy Consumption Supervision Platform undertaken by Antai Co., Ltd. installs water, electricity, gas and other building energy classification and sub-item metering devices, and uploads monitoring data step by step through the network. Through the construction of the platform, functions such as energy consumption collection, energy consumption monitoring, energy consumption statistics and energy consumption evaluation are realized, providing data support and decision-making basis for industry supervision, energy-saving services, and energy-saving transformation. A public building energy consumption monitoring network covering 18 cities (including provincial counties) in Anhui Province has been built. According to the framework of 1 provincial platform, 18 city (including provincial counties) platforms, N universities, hospitals, shopping malls, and hotels, a 1+18+N building energy consumption monitoring system has been constructed. The company adopts the PPP model and actively explores new ideas and models for smart energy management with the government, jointly promotes the construction of the building energy consumption supervision system in Anhui Province, and has achieved positive results. Our province adopts the technical innovation of Internet + energy management and the business model innovation of PPP, completely breaking the traditional \"physical hierarchical\" energy management model, and building a virtualized energy management cloud platform covering all cities in the province, which uniformly supports the energy management of buildings in various cities, saving construction funds and improving energy efficiency and energy management. In April 2015 (No. 12), Xinhua News Agency's internal reference made a special report titled Anhui Establishes a Public Building Energy Consumption Cloud Supervision Platform to Release Energy Saving Potential  The Anhui Provincial Public Building Energy Conservation Supervision Platform is in a leading position in technology in China. In November 2014, the platform passed the evaluation of scientific and technological achievements of the Ministry of Housing and Urban-Rural Development; in December 2014, the platform won the third prize of China's Energy Conservation and Emission Reduction Technology Invention Award; in February 2015, it was selected into the key investment plan of the Anhui Provincial People's Government (Provincial 861 Plan); in January 2015, the Key Technology Research and Application of Large Public Building Energy Conservation Supervision System won the second prize of Anhui Provincial Science and Technology Progress Award; in April 2016, the Public Institution High-efficiency Energy System and Intelligent Control Technology Research and Demonstration developed in cooperation with the China Academy of Building Research was included in the National 13th Five-Year Key R&D Plan in September 2017 it was selected into the catalog of Hefei's two-creation products; in December 2018, it was selected into the national key energy resource measurement service demonstration project Anhui City-level Smart Energy Management Solution was selected as one of the top ten excellent solutions in the field of smart city urban governance in 2018. ",
          imgUrl: require("../assets/companyculture1.png"),
        },
        {
          projectOwner: "Ethiopian Ministry of Education",
          projectName:
            " 3.Ethiopian Ministry of Education (MOE) Cloud Project ",
          projectDescription:
            "Through the construction of the educational cloud infrastructure and cloud platform of the Ethiopian Ministry of Education, Antai shares has built a learning management and educational resource platform for Ethiopia based on voice and video fusion technology and Internet technology, integrating online teaching and e-learning solutions, and established an educational cloud service . Through e-learning solutions such as online teaching, online courseware, online discussion groups, audio and video streaming, real-time virtual courses and virtual guidance, and using advanced technologies such as virtualization and cloud computing, the agility and availability of educational information systems are improved, the barriers between educational resources are broken, and the integration and interconnection of educational resources are realized.Education Cloud designs and implements learning management systems for schools, provides online teaching, and provides a variety of e-learning solutions anytime and anywhere, such as web-based courseware, online discussion groups, real-time virtual courses, video and audio streaming, web chat, online simulation and virtual guidance. In the process of producing educational materials, the Group's high-quality resources are fully utilized. The production includes digital textbooks and video cultural resources published online in multiple formats such as PDF, audio and video.The Ethiopian Education Cloud uses virtualization and cloud computing to improve the agility and availability of the education information system and break down the barriers between educational resources. Its core concept is physical dispersion and logical unification. Physical dispersion refers to the multiple data centers of the Ethiopian Ministry of Education being distributed in different regions across the country. After deploying the cloud platform, physical data centers in different regions can integrate IT resources and provide services to various schools and education departments in a unified manner. Logical unification refers to the unified management of multiple data centers distributed in different regions of Ethiopia through data center management software. First, it provides a unified operation and maintenance management platform to uniformly manage and dispatch resources distributed in different regions. Second, it provides a unified operation and management platform, provides a unified interface to the outside world, and uniformly operates and manages cloud services.",
          imgUrl: require("../assets/porfolio/moe.png"),
        },
        {
          projectOwner: " Ethio Telecom ",
          projectName:
            " 4. Ethio Telecom Installation, Testing, and Commissioning of Microwave Work for Ethio-Telecom MDC Project ",
          projectDescription:
            "Anhui Antai Technology Co., Ltd. is proud to play a vital role in the Ethio-Telecom MDC (Main Data Center) project, a cornerstone initiative aimed at advancing Ethiopia's telecommunications infrastructure. Our involvement in this project includes a broad range of services designed to enhance the efficiency, security, and reliability of Ethio-Telecom's operations.Project Scope and Services Microwave Systems Installation: oInstallation of advanced microwave communication systems to enhance Ethio-Telecom’s network capabilities, providing high-speed, reliable connectivity across the country. oStrategic placement and alignment of microwave antennas to optimize signal strength and coverage, ensuring seamless communication across various regions.Testing and Commissioning:oComprehensive testing of all installed microwave systems to ensure they meet the highest standards of performance, reliability, and security.oCommissioning of the systems, including final adjustments and calibration, to ensure they are fully operational and integrated into Ethio-Telecom's existing network.Main Data Center Solutions:oDeployment of state-of-the-art data center infrastructure, including the latest servers, storage systems, and network devices.oConfiguration of secure and efficient systems, ensuring data integrity and protection against cyber threats.oIntegration of a robust datacenter power system, including backup power solutions, to guarantee uninterrupted operations.System and Security Configuration:oImplementation of comprehensive security measures, including firewalls, intrusion detection systems, and encryption protocols, to protect Ethio-Telecom's critical data and communications.oCustomization of server and network configurations to meet the specific needs of Ethio-Telecom, optimizing performance and scalability.Cabling and Integration:oInstallation of high-quality cabling infrastructure to support the seamless operation of the microwave systems and data center components.oIntegration of all systems into a cohesive network, ensuring smooth communication between the microwave systems and the main data center.Impact and BenefitsEnhanced Communication Infrastructure:oThe upgraded microwave systems and data center infrastructure will significantly improve the speed, reliability, and coverage of Ethio-Telecom's network, supporting the growing demand for telecommunications services across Ethiopia.Increased Security and Resilience:oThe implementation of advanced security protocols and backup power solutions ensures that Ethio-Telecom's data and operations are protected against both physical and cyber threats, maintaining continuous service delivery.Support for National Development:oBy enhancing Ethio-Telecom’s infrastructure, this project contributes to Ethiopia’s broader goals of national development, digital transformation, and improved access to communication services for all citizens.Future-Ready Infrastructure:oThe solutions provided by Anhui Antai Technology Co., Ltd. are designed to be scalable and adaptable, allowing Ethio-Telecom to expand and upgrade its services as technology evolves and demand increases.Our contribution to the Ethio-Telecom MDC project underscores our commitment to advancing Ethiopia's telecommunications sector. Through our comprehensive installation, testing, and commissioning services, we are helping to build a more robust, secure, and future-ready communication infrastructure that will support Ethiopia's growth and connectivity in the years to come.",
          imgUrl: require("../assets/porfolio/et.png"),
        },
        {
          projectOwner: "Addis Ababa",
          projectName:
            "5.Meskel Square City Hall Parking and Refurbishment Project ",
          projectDescription:
            " Anhui Antai Technology Co., Ltd. is honored to spearhead the Meskel Square City Hall Parking and Refurbishment Project. This ambitious undertaking is focused on modernizing the parking facilities and enhancing the overall functionality and security of the City Hall through a series of strategic upgrades and installations.Project Scope:1.Refurbishment of Parking Facilities:oStructural Renovation: Upgrading the existing parking infrastructure to accommodate more vehicles, improve traffic flow, and enhance user experience.oParking Management System: Installing a state-of-the-art parking management system to optimize space utilization, streamline vehicle entry and exit, and provide real-time monitoring and reporting.2.Development of Data Center and Server Room:oData Center Construction: Establishing a robust data center equipped with the latest technology to support the city's digital infrastructure and ensure reliable data storage and processing.oServer Room Setup: Designing and implementing a secure server room to host critical applications and ensure seamless data management and connectivity.3.Security Surveillance System:oComprehensive CCTV Installation: Deploying a high-resolution CCTV network to cover all key areas, including entrances, exits, and parking zones, ensuring continuous monitoring and enhanced security.oUnder-Vehicle Surveillance Scanning System: Installing advanced under-vehicle scanning systems to detect potential threats and enhance the overall security of the premises.4.Public Address System:oIntegrated Communication: Implementing a modern public address system to facilitate clear and efficient communication within the city hall and parking areas, particularly during emergencies.5.Emergency Lighting and Evacuation Systems:oSafety Enhancement: Installing emergency lighting and well-marked evacuation systems to ensure the safety of occupants during power outages or emergencies, guiding them safely out of the building.6.Data Network System:oHigh-Speed Connectivity: Developing a robust data network system to provide high-speed internet connectivity and seamless communication across all departments within the city hall.7.Fire Alarm System:oFire Safety: Implementing an advanced fire alarm system to detect and respond to fire incidents promptly, ensuring the safety of the building and its occupants.8.LED Screen Installation:oInformation Display: Installing large LED screens in strategic locations to display real-time information, announcements, and emergency alerts, improving communication and accessibility for all visitors.Project Objectives:To modernize Meskel Square City Hall’s parking facilities, enhancing convenience and security for visitors and staff.To develop a state-of-the-art data center and server room, supporting the city’s growing digital infrastructure.To implement advanced security measures, including CCTV surveillance, under-vehicle scanning, and a fire alarm system, ensuring the safety of the premises.To enhance communication within the city hall through a public address system and strategically placed LED screens.To ensure emergency preparedness with effective lighting and evacuation systems.",
          imgUrl: require("../assets/porfolio/meskel.png"),
        },
        {
          projectOwner: "Ministry of science and Higher Education (MOSHE)",
          projectName:
            "6.Supply and Implementation of High-performance computing and Renovation of Modular Data Center for Ethernet Project",
          projectDescription:
            "This project involves the supply, installation, and implementation of high-performance computing (HPC) systems alongside the renovation and enhancement of an existing modular data center to support advanced Ethernet networking capabilities.Key Components:1.High-Performance Computing (HPC) Implementation:oSupply of HPC Systems: Provision of cutting-edge HPC systems designed to handle complex computational tasks, large-scale simulations, and big data analytics. These systems will enhance the computational power and efficiency of the organization, enabling faster data processing and advanced research capabilities.oIntegration and Testing: Ensuring seamless integration of HPC systems into the existing IT infrastructure, followed by comprehensive testing to confirm optimal performance.oTraining and Support: Providing specialized training for IT personnel to manage and maintain the HPC systems, along with ongoing technical support to address any operational challenges.2.Renovation of Modular Data Center:oData Center Assessment: A thorough evaluation of the current modular data center's infrastructure to identify areas that require upgrades or renovations.oInfrastructure Upgrade: Enhancing the data center's physical and virtual infrastructure to meet the demands of high-performance computing and ensure reliable and secure data storage and processing.oCooling and Power Systems: Upgrading cooling systems to handle the increased heat output from HPC equipment, as well as improving power distribution to support the high energy demands.oNetwork Enhancements: Implementing advanced Ethernet networking solutions to ensure high-speed data transfer between the HPC systems, storage units, and external networks.oSecurity Enhancements: Strengthening physical and cybersecurity measures within the data center to protect sensitive data and ensure compliance with industry standards.Project Objectives:To significantly increase computational capacity and efficiency through the deployment of high-performance computing systems.To renovate and upgrade the modular data center to support the latest technological advancements in Ethernet networking and data processing.To ensure the reliability, security, and sustainability of the data center infrastructure.To enable the organization to conduct advanced research, big data analysis, and simulations with improved accuracy and speed.",
          imgUrl: require("../assets/porfolio/mosh.png"),
        },
        {
          projectOwner: "Ministry of Health",
          projectName:
            "7.Supply and implementation of datacenter and disaster recovery site network and server farm equipment",
          projectDescription:
            "Anhui Antai Technology Co., Ltd. is proud to work with the Ministry of Health with a comprehensive project focused on enhancing their data center and disaster recovery site. Our services include the supply, installation, testing, and implementation of network and server farm equipment. This project is designed to bolster the Ministry’s IT infrastructure, ensuring reliable and resilient operations with advanced technology solutions for both data management and disaster recovery.Project Scope and ObjectivesData Center Modernization:oUpgrading the existing data center with cutting-edge server farm equipment to enhance processing power, storage capacity, and overall performance.oImplementing robust networking solutions that ensure seamless data flow, increased bandwidth, and improved security measures.oIntroducing advanced cooling and power management systems to optimize energy efficiency and minimize operational costs.Disaster Recovery Site:oEstablishing a comprehensive disaster recovery site equipped with redundant systems that mirror the primary data center, ensuring business continuity in the event of a disruption.oDeploying high-availability network architectures that provide rapid failover capabilities and secure data replication between the primary and recovery sites.oIntegrating automated disaster recovery solutions to ensure that critical data and services can be restored quickly and efficiently.Testing and Implementation:oConducting rigorous testing to verify the performance, security, and reliability of all equipment and systems before going live.oProviding extensive training and support to Ministry of Health IT personnel, ensuring they are equipped to manage and maintain the new infrastructure.oEnsuring smooth migration of existing data and services to the upgraded systems with minimal disruption to daily operations.Impact and BenefitsEnhanced Reliability and Resilience:oThe upgraded data center and disaster recovery site will significantly improve the Ministry's ability to manage and protect critical health data, ensuring that it remains accessible and secure at all times.oBy implementing advanced disaster recovery solutions, the Ministry will be better equipped to maintain operations during emergencies, minimizing downtime and safeguarding vital information.Scalability and Future-Proofing:oThe new infrastructure is designed to be highly scalable, allowing the Ministry to easily expand its capacity and capabilities as demand grows.oThe project lays the foundation for future digital transformation initiatives within the Ministry, enabling the adoption of new technologies and innovations in healthcare management.Support for Public Health Initiatives:oWith a more robust and reliable IT infrastructure, the Ministry of Health will be better positioned to support national public health initiatives, including disease surveillance, data-driven decision-making, and the delivery of essential health services.",
          imgUrl: require("../assets/porfolio/moh.png"),
        },
        {
          projectOwner: "5 Ethiopian Universities",
          projectName:
            "8.Supply and Installation of Multimedia Studio Equipment and Services for five Ethiopian Universities",
          projectDescription:
            "Anhui Antai Technology Co., Ltd. is proud to collaborate with Shayashone Trading PLC to support the development of multimedia studios across five major universities in Ethiopia: Addis Ababa University, Hawassa University, Bahirdar University, Jimma University, and Dire Dawa University. This project focuses on delivering top-tier multimedia equipment and services, along with comprehensive cabling solutions, to establish state-of-the-art multimedia studios at these institutions.Project Scope:1.Provision of Multimedia Equipment:oHigh-Quality Audio and Video Equipment: Supplying advanced cameras, microphones, mixers, lighting systems, and soundproofing materials to ensure professional-grade media production.oEditing and Production Tools: Providing the latest editing software and hardware, including powerful computers, servers, and storage solutions, to facilitate efficient media processing and production.oDisplay and Presentation Systems: Installing large screens, projectors, and interactive displays to enhance teaching, presentations, and media production capabilities.2.Comprehensive Cabling and Connectivity:oStructured Cabling Solutions: Designing and implementing structured cabling systems to support high-speed data transfer, seamless connectivity, and reliable network performance across the multimedia studios.oNetworking Equipment: Supplying routers, switches, and other networking hardware to ensure robust and secure communication between the multimedia studio and other university facilities.3.Installation and Integration Services:oProfessional Installation: Ensuring all equipment is installed and configured by experienced technicians, guaranteeing optimal performance and integration within the existing infrastructure.oSystem Integration: Integrating all multimedia systems to work harmoniously, enabling streamlined workflows and efficient media production processes.4.Training and Support:oComprehensive Training: Offering training sessions for university staff and students on how to use the new multimedia equipment and software effectively.oOngoing Technical Support: Providing continuous technical support to address any issues and ensure the smooth operation of the multimedia studios.Project Objectives:To equip five major Ethiopian universities with state-of-the-art multimedia studios that enhance the quality of education and media production.To ensure seamless connectivity and integration of multimedia systems through comprehensive cabling and networking solutions.To empower university staff and students with the skills and tools needed to produce high-quality multimedia content.To establish a sustainable and future-proof multimedia infrastructure that supports the evolving needs of higher education institutions.Expected Outcomes:Fully operational, state-of-the-art multimedia studios at Addis Ababa University, Hawassa University, Bahirdar University, Jimma University, and Dire Dawa University.Enhanced media production capabilities, enabling universities to produce professional-grade educational and promotional content.Improved connectivity and functionality within the multimedia studios, ensuring efficient workflows and high-quality outputs.Increased technical proficiency among university staff and students, fostering a vibrant and creative multimedia environment.This project underscores Anhui Antai Technology Co., Ltd.'s commitment to advancing educational technology and infrastructure in Ethiopia, providing universities with the tools they need to excel in the digital age.",
          imgUrl: require("../assets/porfolio/shaya.png"),
        },

        {
          projectOwner: "Wachemo University",
          projectName:
            "9.Wachamo UNIVERSITY Smart Class Room Solution Supply, Installation, Training, Commissioning ",
          projectDescription:
            "Anhui Antai Technology Co., Ltd. is honored to collaborate with Wachamo University in a transformative initiative aimed at revolutionizing the educational experience. This comprehensive project encompasses the supply, installation, training, and commissioning of cutting-edge smart classroom solutions, including a cloud-based classroom system and the provision of ergonomic, standard classroom furniture. These enhancements are meticulously designed to foster a modern, efficient, and engaging learning environment for both students and faculty.Project Scope:1.Supply and Installation of New Generation Smart Classroom Solutions:oInteractive Teaching Tools: Deployment of interactive whiteboards, smart projectors, and touch-screen displays to facilitate dynamic teaching methods.oIntegrated Audio-Visual Systems: Installation of high-fidelity sound systems and high-definition video conferencing equipment to support remote learning and guest lectures.oControl Systems: Implementation of centralized control panels for seamless management of classroom technologies.2.Supply and Installation of Cloud Classroom System:oCloud-Based Learning Platform: Establishment of a robust cloud infrastructure enabling access to learning materials, assignments, and assessments anytime, anywhere.oData Storage and Management: Provision of secure cloud storage solutions for safeguarding educational content and student data.oCollaboration Tools: Integration of platforms that promote collaboration among students and between students and faculty, such as forums, chat systems, and shared workspaces.3.Supply and Furnishing of Classrooms with Standard Furniture:oErgonomic Furniture: Provision of comfortable and health-conscious seating and desks to enhance student concentration and well-being.oFlexible Layout Designs: Furnishing classrooms with modular furniture that supports various teaching methodologies and can be reconfigured as needed.oAesthetic Enhancements: Selection of furniture that complements the classroom aesthetics, creating an inviting learning atmosphere.4.Training and Commissioning:oComprehensive Training Programs: Conducting training sessions for faculty and administrative staff to proficiently utilize and manage the new technologies.oTesting and Quality Assurance: Rigorous testing of all installed systems to ensure optimal performance and reliability.oOngoing Support: Providing post-installation support and maintenance services to address any technical issues promptly.Project Objectives:To modernize Wachamo University's educational infrastructure with advanced smart classroom technologies.To enhance the learning experience through interactive and flexible teaching tools.To facilitate seamless access to educational resources via a robust cloud-based system.To ensure the physical comfort and engagement of students through quality classroom furnishings.To empower faculty and staff with the necessary skills to effectively leverage new technologies.Expected Outcomes:Elevated quality of education through innovative teaching and learning methods.Increased student engagement and participation facilitated by interactive classroom environments.Improved accessibility to learning materials, fostering a culture of continuous learning.Enhanced adaptability of classrooms to accommodate various pedagogical approaches.Strengthened technological proficiency among faculty and administrative personnel.This initiative reflects Anhui Antai Technology Co., Ltd.'s commitment to advancing educational excellence by integrating technology and ergonomics, thereby setting a new standard for academic environments at Wachamo University.",
          imgUrl: require("../assets/porfolio/wachemo.jpeg"),
        },
      ],
    };
  },
};
</script>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-template-rows: repeat(3, auto);
  gap: 7px; /* Adjust the gap between items as needed */
  max-width: 100%;
}
@media (max-width: 768px) {
  .grid-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }
}
@media (max-width: 768px) {
  .grid-item {
    width: 100% !important;
  }
}
.grid-item {
  background-color: white; /* Optional: Add background color for visibility */
  padding: 50px; /* Optional: Add padding inside items */
  text-align: center; /* Center text inside items */
  border: none; /* Optional: Add border for visibility */
}
</style>
