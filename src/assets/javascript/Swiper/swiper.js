import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = {
  template: document.querySelector("#ytb-template"),
  targetContainer: document.querySelector('.swiper-wrapper'),

  init(){
    this.getData()
  },

  getData() {
    const baseUrl = 'https://www.googleapis.com/youtube/v3/playlistItems',
          part = 'snippet',
          apiKey = import.meta.env.VITE_API_KEY,
          playlistId = import.meta.env.VITE_PLAYLIST_ID,
          maxResults = 10,
          url = `${baseUrl}?part=${part}&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`;

    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      let list = data.items;

      for (let i = 0; i < list.length; i++) {
        let clone = document.importNode(this.template.content, true);
        let iframe = clone.querySelector('iframe');
        iframe.src = 'https://www.youtube.com/embed/' + list[i].snippet.resourceId.videoId;
        this.targetContainer.appendChild(clone);
      }

      const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swiper-pagination',
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
      
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }
}
export default swiper
