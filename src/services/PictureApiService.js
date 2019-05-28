class PictureApiService{
    constructor(){
      this.apiUrl = 'https://jsonplaceholder.typicode.com/photos/';
    }
    
    async getAllPicture(){
      const response = await fetch('https://jsonplaceholder.typicode.com/photos/');
      const data = await response.json();
      return data;
    }
    
    async getPictureById(id){
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
      const data = await response.json();
      return data;
    }
  }
  
  const _instance = new PictureApiService();
  export default _instance;