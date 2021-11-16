import axios from "axios";

export default {
    props: ['page_url'],
  
    data() {
      return {
        fields: {},
        error: null,
        errors: {},
        data_fetched: false,
        loaded: true,
      }
    },
    mounted() {
    },
    created() {
      this.fetchData(this.page_url);
    },
    methods: {
      fetchData(page_url){
        if (page_url == null) { // If page_url not specified
          page_url = "http://b2nh-api.tintamarre.be/api/v1";
          // if(this.$route.fullPath == '/') {
          // }
          // else {
          //   page_url = process.env.VUE_APP_REST_API_URL + '/ECLI' + this.$route.fullPath; // If !Homepage
          // }
        }
    
        axios.get(page_url, {
            headers: {
            //   Accept: "application/json",
            },
          })
        .then((response) =>{
          if(response.status == 200){
            this.fields = response.data;
            this.data_fetched = true;
          }
        }).catch(err=>{
          console.log(err)
        });
      },
  },
  }
  