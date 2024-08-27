<template>
  <div style="display: inline;">
    <!-- headers -->
 
    <!-- body -->
    <section class="slider1">
      <div class="slider1__wrapper">
        <el-carousel :interval="slideInterval" indicator-position="outside" height="650px" @change="slideChange" :loop="true" class="custom-carousel">
         <el-carousel-item v-for="(item,index) in home_images" :key="index">
            <div class="Home_image slider1__height d-flex align-items-center justify-content-center" :style="{ backgroundImage: `url(${item.url})` }">
              <div class="container">
                <div class="row">
                  <div class="col-xl-7">
                    <Transition name="bounce">
                      <div >
               
                  </div>
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
    <section v-if="newsData && newsData.length > 0" class="about1">
     <HomeNews :newsData="newsData"/>
      
    </section>
    <!-- body 3 -->
 
    <section >
  <div >
    <div  style="display: flex;justify-content: center;">
      <div  style="width:50% !important;padding: 20px;margin-left: 30px;">
   
          
                    <el-carousel height="600px" direction="horizontal" :autoplay="true">
    <el-carousel-item v-for="item in carouselItems" :key="item.id">
     
                     <div class="carousel-content2">
        <img :src="item.url" alt="carousel image" class="carousel-image2" />
        <h6 class="medium2">{{ item.heading }}</h6>
      </div>
        
                     
                </el-carousel-item>
              </el-carousel>
            
       
   
      </div>
      
     <div style="width: 50%;margin-left: 10px;">
                <div style="display: flex;">
                  <div style="width: 33%;">					<img src="../assets/img/Subnews/Subnews1.jpg" style="width: 100%;height: 100%;" /></div>
                <div style="width:67%;padding: 10px;">	
          
                  <a >
                    <ul >
                      <li>集团召开“七一”表彰大会暨党纪学习教育专题党课报告会</li>
                      <li style="color:#777;">7月1日上午，集团召开“七一”表彰大会暨党纪学习教育专题党课报告会。集团党委书记、董事长、总经理董磊以《持续推进党纪学习教育走深走实，为推动集团高质量发展提供坚强保障》为题作党纪学习教育专题党课报告。集团党委委员、纪委书记、监察专员褚建坤主持会议。集团党委委员、常务副总经理郑成良宣读《关于表彰集团 2024 年度优秀共产党员、优秀党务工作者和先进基层党组织的决定》。集团、时代出版传媒股份有限公司党委委员、领导班子成员参加会议。</li>
                      <li style="color:#777;">2024-07-02</li>
                    </ul>
                  </a></div>
                </div>
	<!-- first item -->
			<div style="display: flex;margin-top: 5px;">
        <div style="width: 33%;">
          <img  src="../assets/img/Subnews/Subnews2.jpg" style="width: 100%;height: 100%;" />
        </div>
				<div style="width: 67%;padding: 10px;">
         
			
			<a >
				<ul class="right_item_contents">
					<li>安泰股份入选中国安防百强工程（集成）商</li>
					<li style="color:#777;">近日，第七届中国安防百强工程（集成）商评选结果公示，安泰股份成功入选。</li>
					<li style="color:#777;">2024-07-11</li>
				</ul>
			</a>
        </div>
			</div>

		<div  style="display: flex;margin-top: 5px;">
      <div style="width: 33%;">	<img  src="../assets/img/Subnews/Subnews3.png" style="width: 100%;height: 100%;" /></div>
		<div style="width: 67%;padding: 10px;">	
	
		<a >
			<ul class="right_item_contents">
				<li>安泰股份召开全面从严治党工作会议</li>
				<li style="color:#777;">3月21日上午，安泰股份召开全面从严治党工作会议，贯彻集团全面从严治党工作会议精神并部署公司2024年度相关工作。集团党委委员、常务副总经理郑成良到会指导并讲话，集团纪委副书记唐伽全过程参与联系指导会议。会议采取现场和视频相结合的形式召开，公司党委委员、领导班子成员、党支部书记、部门负责人、事业部业务骨干参加会议。</li>
				<li style="color:#777;">2024-03-28</li>
			</ul>
		</a></div>
		</div>
      </div>
      
     
    </div>
  </div>
</section>
<section style="padding:20px">
  <div style="display: flex;padding:10px;">
		<ul class="aijz_content_wrap" style="display: flex;">
					<li>
						<a href="/build.html" style="color:#333" target="_blank">
							<span class="aijz_title_first font1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Smart Building</font></font></span>
						</a>
						<a href="/build.html" style="color:#333" target="_blank">
							<h4 class="aijz_title_two font2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SMART BUILDING</font></font></h4>
						</a>
						<p class="aijz_title_three"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Provide all-round and full-life cycle operation and management services for buildings</font></font></p>
					</li>

			<li class="aijz_content_wrap_itemsfirst">
				<a href="/ghsj.html" target="_blank" style="color:black;line-height:22px;">
					<img src="http://www.antaiib.com/upload/image\规划设计.jpg" style="width:227px;height:155px;">
				</a>
				<a href="/ghsj.html" target="_blank" style="color:black;line-height:22px;">
					<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Planning and Design</font></font></h4>
					<span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Provide solutions for building intelligent systems and feasibility analysis of corresponding intelligent systems</font></font></span>
				</a>
			</li>
			<li class="aijz_content_wrap_itemsfirst">
				<a href="/jssg.html" target="_blank" style="color:black;line-height:22px;">
					<img src="http://www.antaiib.com/upload/image\系统集成11.jpg" style="width:227px;height:155px;">
				</a>
				<a href="/jssg.html" target="_blank" style="color:black;line-height:22px;">
					<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Construction</font></font></h4>
					<span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Provide system equipment procurement services and software design and development services</font></font></span>
				</a>
			</li>
			<li class="aijz_content_wrap_itemsfirst">
				<a href="/guangsha" target="_blank" style="color:black;line-height:22px;">
					<img src="http://www.antaiib.com/upload/image\建设施工1.jpg" style="width:227px;height:155px;">
				</a>
				<a href="/guangsha" target="_blank" style="color:black;line-height:22px;">
					<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">system integration</font></font></h4>
					<span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Integrate each subsystem into the comprehensive management system and conduct joint debugging of the entire integrated system</font></font></span>
				</a>
			</li>
			<li class="aijz_content_wrap_itemsfirst">
				<a href="/huiyunwei" target="_blank" style="color:black;line-height:22px;">
					<img src="http://www.antaiib.com/upload/image\运维管理.jpg" style="width:227px;height:155px;">
				</a>
				<a href="/huiyunwei" target="_blank" style="color:black;line-height:22px;">
					<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Operation and maintenance management</font></font></h4>
					<span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Can provide value-added services such as remote operation and maintenance, regular operation and maintenance inspections, etc.</font></font></span>
				</a>
			</li>
	</ul>
</div>
</section>

<section>
  <div  style="height: 100% !important;">
	<div  style="padding:20px; " >

				<div style="display:flex;justify-content: center !important;padding: 20px;">
        <div style="display: flex;flex-direction: column;">
  <h2><a href="/economize.html" target="_blank" style="color: #0b0c0e">SMART ENERGY</a></h2>
		
						<a href="/economize.html" target="_blank" style="color: #0b0c0e">
							<span>智慧能源</span>
						</a>
        </div>
          
      
        </div>

		<div  >
			<ul class="ainy_content" style="display: flex;justify-content: space-between;height: 100%;">
						<li style="background-image:url(http://www.antaiib.com/upload/image/建筑节能1.jpg);height: 300px;">
							<a href="/xiaoneng" target="_blank" style="color:white;display: flex;flex-direction: column;align-items: end;">
								<div style="display: flex;flex-direction: column;">
									<h3><span>丨</span> 建筑节能</h3>
									<span class="detail"> 实现建筑闭合式用能监测，为节能控制和管理提供数据支撑和决策依据</span>
								</div>
							</a>
						</li>
						<li style="background-image:url(http://www.antaiib.com/upload/image/工业节能1.jpg);">
							<a href="/gyjn" target="_blank" style="color:white;">
								<div class="ainy_content_item">
									<h3><span>丨</span> 工业节能</h3>
									<span class="detail"> 帮助企业分析各类用能设备或产品的状态，降低能耗、保障安全</span>
								</div>
							</a>
						</li>
						<li style="background-image:url(http://www.antaiib.com/upload/image/区域级能源监管平台1.jpg);">
							<a href="/qyjn" target="_blank" style="color:white;">
								<div class="ainy_content_item">
									<h3><span>丨</span> 区域级能源监管平台</h3>
									<span class="detail"> 打破传统“物理层级式”的能源管理模式，破除“部门壁垒”</span>
								</div>
							</a>
						</li>
			</ul>
		</div>
	</div>
</div>
</section>

<section>
 <div class="aicity_wrap">
	<div class="aicity" >
				<div style="display:flex;justify-content: center !important;padding: 20px;">
       <div style="display: flex;flex-direction: column;">
  <h2><a href="/economize.html" target="_blank" style="color: #0b0c0e">Smart City</a></h2>
		
						<a href="/economize.html" target="_blank" style="color: #0b0c0e">
						<span>Innovation drives sustainable urban development</span>
						</a>
        </div>
        </div>
			<div class="aicity_content_wrap">
		  <ul class="aicity_content">
        <li class="aicity_content_item" v-for="item in items" :key="item.id">
          <a :href="item.link" target="_blank" class="aicity_content_link">
            <img :src="item.image" class="aicity_content_image" />
            <div class="aicity_content_items">
              <span class="aicity_first_item">{{ item.title }}</span>
              <span class="aicity_two_item">{{ item.description }}</span>
            </div>
          </a>
        </li>
        <div style="clear: both;"></div>
      </ul>

		</div>
	</div>
</div>
</section>

<section>
  <div class="services_wrap">
	<div class="services" style="display: flex;padding:20px;">
		<div class="services_content_wrap_left">
					<span class="services_title_first font1" style="margin-left:18px"><a href="/product_service.html" style="color:#666;">产品与服务</a></span>
					<h4 class="services_title_two font2"><a href="/product_service.html" style="color:#666;">Product and Service</a></h4>
					<p class="services_title_three" style="margin-left:18px"></p>
		</div>
		<div class="services_content_wrap_right" style="margin-left: 10px;">
	 <ul class="servicescw_right_items">
    <li v-for="item in items2" :key="item.id" :style="{ backgroundImage: `url(${item.image})` }" class="service_item">
      <a :href="item.link" target="_blank" class="service_link">
        <div class="service_items">
          <h3><span>丨</span> {{ item.title }}</h3>
          <span class="detail">{{ item.description }}</span>
        </div>
      </a>
    </li>
  </ul>
		</div>
	</div>
</div>
</section>
<div class="video-container">
    <video id="myVideo" controls>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
<section>

 
  
</section>

<section>
<div class="story_wrap" style="padding: 10px;height: 100%;display: flex; flex-direction: column;">
	<div class="story">
				<h2 class="story_wrap_title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">stories of success</font></font></h2>
				<span style="float:right;margin-top: -80px;"><a href="Case_selection.html" target="_blank" style="color:black;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Learn More →</font></font></a></span>

		<ul class="story_wrap_content" style="display: flex;padding: 10px;height: 100%;margin-left: 20px;">
				<li >
					<a href="succeedstory-c-1463.html" target="_blank" style="height: 600px;">
						<img src="http://www.antaiib.com/upload/image/图片122.png" style="width: 375px;height: 203px">
						<div class="title" style="padding: 10px;display: flex;flex-direction: column;height: 350px;">
							<div><h4>Guoyang Five Museums and Two Centers Comprehensive Management Project</h4></div>
							<div><p style="height: 80px;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">The project provides 3D modeling and cultural content integration for five museums (Woyang Planning Museum, Museum, Urban Construction Archives, Science and Technology Museum, Library), two centers (National Fitness Center, Cultural and Art Center) and other venues......</font></font></p></div>
						  <!-- <div>	<span>Read More</span></div> -->
						</div>
					</a>
				</li>
				<li>
					<a href="succeedstory-c-1464.html" target="_blank">
						<img src="http://www.antaiib.com/upload/image/图片611.png" style="width: 375px;height: 203px">
						<div class="title"  style="padding: 10px;display: flex;flex-direction: column;height: 350px;">
							<div><h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hefei No.9 Middle School Smart Campus Management Project</font></font></h4></div>
							<div><p style="height: 80px;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Based on the Internet of Things, with "big data + cloud services" as the core, it integrates campus teaching, management, and life software and hardware platforms to achieve intelligent campus management, integrated campus life and learning, and digital and visualized campus facilities......</font></font></p></div>
					<!-- <div><span>Read More</span></div> -->
						</div>
					</a>
				</li>
				<li>
					<a href="succeedstory-c-1462.html" target="_blank">
						<img src="http://www.antaiib.com/upload/image/图片4.png" style="width: 375px;height: 203px">
						<div class="title" style="padding: 10px;">
							<h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Gansu Provincial Library Comprehensive Management Project</font></font></h4>
							<p style="height: 80px;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Establish a data and application platform to integrate library reader services, business management, administrative management, library equipment operation data and display, infrastructure management, energy resource management, service management and other data...</font></font></p>
							<!-- <span>Read More</span> -->
						</div>
					</a>
				</li>
		</ul>
	</div>
</div>
  
</section>

   
  
  </div>
</template>

<script>
import dlHeader from '@/components/dlHeader'
import dlFooter from '@/components/dlFooter'

import store from '@/store/index'
import staticUtils from '@/views/static/index'
import API from '@/views/api/index'

function generateMetaData() {
  var tmp = []
  for(var i=0; i<store.state.auth.seoMeta.length; i++) {
    tmp.push({
      name: store.state.auth.seoMeta[i],
      content: store.state.auth.seoMeta[i],
    })
  }

  return tmp
}
import {
  homePageLink
} from '@/views/link/link.js'

export default {
  name: 'HomeView',
  components: {
    dlHeader,
    dlFooter
  },
  data() {
    return {
        items2: [
        {
          id: 1,
          link: "/product1.html",
          image: "http://www.antaiib.com/upload/image/慧广厦-1.jpg",
          title: "慧广厦",
          description: "智慧建筑综合管理云平台"
        },
        {
          id: 2,
          link: "/Solution.html",
          image: "http://www.antaiib.com/upload/image/慧能效.jpg",
          title: "慧能效",
          description: "智慧能源管理云平台"
        },
        {
          id: 3,
          link: "http://www.antaiib.com/huizhizao",
          image: "http://www.antaiib.com/upload/image/慧制造-1.png",
          title: "慧制造",
          description: "数字工厂云服务平台"
        },
        {
          id: 4,
          link: "/huicaiji",
          image: "http://www.antaiib.com/upload/image/慧采集（暂，等图实体拍摄）.jpg",
          title: "慧采集",
          description: "多数据源多协议边缘计算网关"
        },
        {
          id: 5,
          link: "/service.html",
          image: "http://www.antaiib.com/upload/image/运维与巡检.jpg",
          title: "运维与巡检服务",
          description: "远程运维与现场巡检结合，优质、高效的服务客户"
        },
        {
          id: 6,
          link: "/green.html",
          image: "http://www.antaiib.com/upload/image/绿建咨询.jpg",
          title: "绿建咨询",
          description: "绿建方案设计咨询和绿建星级设计认证申报咨询"
        }
      ],

       items: [
        {
          id: 1,
          link: "/security.html",
          image: "http://www.antaiib.com/upload/image/智慧安防2.png",
          title: "Smart Security",
          description:
            "Improve the level of comprehensive urban social governance and enhance the ability to respond quickly to emergencies"
        },
        {
          id: 2,
          link: "/factory.html",
          image: "http://www.antaiib.com/upload/image/智慧工厂21.png",
          title: "Smart Factory",
          description:
            "Realize comprehensive real-time control of all businesses, all elements and all processes of industrial enterprises"
        },
        {
          id: 3,
          link: "/OPS.html",
          image: "http://www.antaiib.com/upload/image/智慧运维2.png",
          title: "Intelligent Operation and Maintenance",
          description:
            "Fully understand the operating status of the equipment and provide customers with information support for decision-making"
        },
        {
          id: 4,
          link: "/logistics.html",
          image: "http://www.antaiib.com/upload/image/智慧后勤21.png",
          title: "Smart Logistics",
          description:
            "Establish a unified and integrated logistics management platform to improve the operational service efficiency of logistics work"
        },
        {
          id: 5,
          link: "/education.html",
          image: "http://www.antaiib.com/upload/image/智慧教育2.png",
          title: "Smart Education",
          description:
            "Promote the deep integration of informatization and teaching, and improve the operational efficiency and management level of traditional campuses"
        },
        {
          id: 6,
          link: "/pipegallery.html",
          image: "http://www.antaiib.com/upload/image/智慧管廊2.png",
          title: "Smart Pipeline Gallery",
          description:
            "Solve the maintenance and repair problems of municipal facilities such as electricity, communications, gas, water supply and drainage"
        }
      ],
      carouselItems: [
        {
          id: 1,
          heading:"近日，公司董事长傅华陪同安徽出版集团党委委员、常务副总经理郑成良等领导，赴山东事业部调研并考察重点建设项",
        url: require('@/assets/img/newsSlider/image1.png')}, 
        {
          id: 2,
          heading:"3月21日上午，安泰股份召开全面从严治党工作会议，贯彻集团全面从严治党工作会议精神并部署公司2024年度相关工作。集团党委委员、常务副总经理郑成良到会指导并讲话，集团纪委副书记唐伽全过程参与联系指导会...",
        url: require('@/assets/img/newsSlider/image2.png')},
        {
          id: 3,
          heading:"龙腾安泰迎新春，聚力同心赴新程。2月5日，安泰股份2023年度总结暨表彰大会在公司大礼堂隆重举行。集团党委委员、工会主席李秀英等集团工会领导与安泰股份全体员工齐聚一堂，共迎新春。埃塞分公司、加纳办事处...",
        url: require('@/assets/img/newsSlider/image3.jpg')},
 
      ],
      sliderIndex: 0,
      services: [{
          id: 0,
          title: 'Dentist Treatment',
          brief: 'We work tirelessly to bring new level of health care with advanced technologies. Full diagnostic by 128 slices CT',
          img: require('@/assets/img/png-icon/ico_1.png'),
          url: homePageLink.examLink
        },
        {
          id: 1,
          title: 'Medical Treatment',
          brief: 'Hospital offers internal medicine, neurology, cardiology, endocrinology, ENT services.',
          img: require('@/assets/img/png-icon/ico_3.png'),
          url: homePageLink.examLink
        },
        {
          id: 2,
          title: 'Laparoscopy surgery',
          brief: 'minimally invasive surgical technique involves making 3 or 4 cuts in the abdomen and inserting a miniature camera and surgical instruments.',
          img: require('@/assets/img/png-icon/ico_2.png'),
          url: homePageLink.examLink
        },
        // {
        //   id: 3,
        //   title: 'Diagnostic  service',
        //   brief: 'The Hospital  owns 100 beds with world class medical services equipped with multidisciplinary international health professionals; state of the art ICU with outstanding critical care services, multifunctional operating theaters with 100 stage of laminar flow ventilation system, 1.5 Tesla MRI, 128 Slices CT, Digital Subtraction Angiography (DSA), Holmium Laser 90 watts, the latest model of the surgical Microscopy Machine, 4D Ultrasound equipment, international standard negative pressure room for managing airborne and droplet diseases, and the most advanced laboratory system, new and highly technologic equipment for HPV diagnostics and treatment, ophthalmology equipment with variable scenario for vision loss prevention and diagnostic, glaucoma treatment, gastroenterology facility for different diagnostics/ treatment of gastrointestinal tract',
        //   img: require('@/assets/img/png-icon/png-icon-13.png'),
        //   url: homePageLink.examLink
        // },
      ],
      processes: [{
          id: 0,
          title: 'Registration',
          brief: 'To create an account and make easy treatment.',
          img: require('@/assets/img/background/service_1.png'),
          url: 'http://localhost:80#/'
        },
        {
          id: 1,
          title: 'Appointment',
          brief: 'To create an account and make easy treatment.',
          img: require('@/assets/img/background/service_2.png'),
          url: 'home/item'
        },
        {
          id: 2,
          title: 'Take Treatment',
          brief: 'We are line of Lorem Ipsum, Lorem ipsum dolor sit amet. comes from line insection.',
          img: require('@/assets/img/background/service_3.png'),
          url: 'home/examination'
        },
        {
          id: 3,
          title: 'Feedback',
          brief: 'To create an account and make easy treatment.',
          img: require('@/assets/img/background/service-04.jpg'),
          url: 'http://localhost:80#/home/item'
        },
      ],
      home_images: [{
        id: 1,
        url: require('@/assets/img/banners/banner1.jpg')
      },
      {
        id: 2,
        url: require('@/assets/img/banners/banner2.jpg')
        },
      {
        id: 3,
        url: require('@/assets/img/banners/banner3.jpg')
        },
      {
        id: 4,
        url: require('@/assets/img/banners/banner4.jpg')
      },],
      currentSlideIndex: 0,
      slideInterval: 5000,
      care1SlideInterval:50000,
      card: "card",
      nocard: "",
      screensize: true,
      newsData:[]
    }
  },
  mounted() {
    staticUtils.staticVisitorInfo()
    this.getlatestNews()
  },
  methods: {
    slideChange(index) {
      setTimeout(() => {
        this.currentSlideIndex = index;
    
      }, 200)
     
    },
    getlatestNews(){
    API.getlatestNews().then( res =>{
   
       this.newsData=res.data
    }).catch(err => {
      console.log(err)
    })
    }
  },
  computed: {
    links() {
      return homePageLink
    },
    carouselType() {
      return this.isLargeScreen ? 'card' : '';
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
    title: 'Anhui Antai Technology', // set a title
    meta: generateMetaData(),
    link: [{
      rel: 'asstes',
      href: ''
    }]
  }
}
</script>

<style scoped>

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
  padding:10px;
}

@media screen and (max-width: 1440px) {
  .image-wrapper {
    background-position: left center !important;
  }
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

.marginclass{
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
  .marginclass{
  margin-top: 0;
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
.Home_image{
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
  0% { opacity: 0; }
  100% { opacity: 1; }
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
}

.aicity_content_item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
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
 .video-container {
      max-width: 640px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }
    video {
      width: 100%;
      height: auto;
    }

</style>