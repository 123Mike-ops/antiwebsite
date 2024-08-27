<!-- headers for all pages -->
<template>

  <div>
    <!-- header top -->

    <el-drawer
    :visible="drawerVisible"
    :direction="direction"
    @close="drawerVisible = false"
    size="100%"
  >
  <div class="drawer__overlay">
       
      </div>  
    <div class="drawer__background">
      <div class="drawer__content">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect" style="background-color: transparent !important;">
        <el-menu-item style="font-size: 20px; font-family: Arial, Helvetica, sans-serif" index="/">Home</el-menu-item>
                            <el-menu-item  style="font-size: 20px;font-family: Arial, Helvetica, sans-serif" index="/services">Services</el-menu-item>
                              <el-menu-item style="font-size: 20px; font-family: Arial, Helvetica, sans-serif" index="/portfolio">Portfolio</el-menu-item>
                            <el-menu-item style="font-size: 20px; font-family: Arial, Helvetica, sans-serif" index="/about">About Us</el-menu-item>
                            <el-menu-item  style="font-size: 20px; font-family: Arial, Helvetica, sans-serif" index="/contact">Contact Us </el-menu-item>
      </el-menu>
    </div>
    </div>
    <div class="d-flex justify-content-center p-2" style="font-size: 10px;">
    <div class="box_shadow">
        
          </div>
          <div class="box_shadow">
        
              </div>
            </div>
    <!-- Move the header__top1 content to the very bottom of the drawer -->
    <div class="drawer__footer-wrapper">
    <div class="drawer__footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="header__top1--left text-center text-lg-left">
              <i class="fa fa-map-marker"></i>
                 <a href=""><span style="color: black !important;">Anhui Antai Technology Co., LTD</span></a>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="header__top1--right text-center text-lg-right">
              <div class="header__top1--email">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span style="color: black !important;">Stock Code : 831063</span>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </el-drawer>


    <!-- 中间层 -->
    <!-- <div> -->
  
    <div class="header__middle1" style="display: flex;justify-content: start; max-width:100% !important;">
    
        <div  >
                  <el-button @click="toggleDrawer" icon="el-icon-s-unfold" type="transparent" class="button mobile-drawer-button">
        
                </el-button>
                  
                </div>
       
                <div class="header_name_logo" style="display: flex;justify-content: start;">
                  <div class="header__logo">
                    <a href="/">
                      <img src="../assets/img/logo/logo.png" alt="Logo" style="height: 60px;">
                    </a>
                
                  </div>
                </div>
              

          


        <div class="header__menu" style="margin-left: 30%;">
            
                <div class="container">
                  <div class="header__menu-outer">  
                        <div class="main-menu">
                          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"  style="background-color: transparent !important;">
                            <el-menu-item style="font-size: 18px; " index="/">Home</el-menu-item>
                          
                          
                            <el-menu-item  style="font-size: 18px; font-family: Arial, Helvetica, sans-serif" index="/services">Services</el-menu-item>
                          
                 
                              <el-menu-item style="font-size: 18px; font-family: Arial, Helvetica, sans-serif"index="/portfolio">Portfolio</el-menu-item>
                            <el-menu-item style="font-size: 18px;font-family: Arial, Helvetica, sans-serif" index="/about">About us</el-menu-item>
                            <el-menu-item  style="font-size: 18px; font-family: Arial, Helvetica, sans-serif" index="/contact">
                              Contact us
                            </el-menu-item>
                          </el-menu>
                         
                        </div>
                       
                      
                    
                  </div>
                </div>
            
          </div>

         
  
      </div>
          
    </div>
    



  </div>
</template>

<script>
  export default {
    name: 'dlHeader',
    data() {
      return {
        route_to_comingsoon:'/comingsoon',
        route_to_appointment:'http://13.40.25.112/appointment/',
        currentLink: '',
        activeIndex: '',
        currentLink: '',
      activeIndex: '',
      drawerVisible: false, 
      direction: 'ltr' 
      }
    },
    methods: {
      handleSelect(index) {
           this.drawerVisible = false;
      if (this.$router.history.current.fullPath != index) {
        this.$router.push(index);
      } else {
       
      }
      this.activeIndex = index;
    
    },
    toggleDrawer() {
      this.drawerVisible = !this.drawerVisible;
    }
    }

  }
</script>
<style scoped>
/* .el-drawer__header  {
  height: 5px;
  align-items: center;
  color: #72767b;
  display: flex;
  margin-bottom: 10px !important; 
  padding: 20px 20px 0;
} */
::v-deep .el-drawer__header {
  margin-bottom: 0px;
  padding: 10px  0;
}
::v-deep .el-menu-item{
  color:black !important;
}
.box_shadow{
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin: 0 3px;
  padding: 5px;

}

.mobile-drawer-button  {
    font-size: 24px;
}
.header__top1--left i {
  margin-right: 5px; 
}
.drawer__background {
  background-image:  url("https://amymhaddad.s3.amazonaws.com/morocco-blue.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.drawer__overlay {
  display: flex;
  justify-content: start;
  align-items: start;
  /* margin-top: 5px; */
}

.beautiful-element {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.drawer__overlay .btn2 {
  background-color: #1400f3;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.drawer__overlay .btn2:hover {
  background-color: #45a049;
}

 .drawer__top1 {
  background-color: #f8f8f8;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  margin-top: 10px; 
}
.drawer__footer-wrapper {
  /* position: absolute; */
  bottom: 0;
  left: 0;
  right: 0;
}
.drawer__content {
  background-color: #f8f8f8;
  padding: 20px;
  /* height: calc(100% - 150px);  */
  overflow-y: auto;
}

.drawer__footer {
  background-color: #f8f8f8;
  padding: 20px;
  border-top: 1px solid #ddd;
}

.el-drawer__container {
  background: linear-gradient(to right, rgba(154, 115, 115, 0.9), rgba(11, 42, 244, 0));
}
.drawer__menu {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
@media (max-width: 767px) {
  .main-menu {
    display: none;
  }
  .header__top1 {
    display: none;
  }
}
.mobile-drawer-button {
  display: none;
}

@media (max-width: 767px) {   
  .mobile-drawer-button {
    display: block;
  }
}
.header_name_logo{
  display: block;
  justify-content: center;
  align-items: center;

}
.header-name{
  display: flex;
  flex-direction: column;
}

.custom-class{
  color: #52588b !important;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (min-width: 768px) and (max-width: 1200px) {
  .custom-class {
    font-size: 12px;
  }
}

</style>