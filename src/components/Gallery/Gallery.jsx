import style from './Gallery.module.css'

// assets
import ArrowShapeLeft from '../../assets/tile-shape-left.png'
import ArrowShapeRight from '../../assets/tile-shape-right.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay";


import { getDownloadURL, ref, listAll } from 'firebase/storage'
import { storage } from '../../lib/Firebase'
import { useEffect, useState } from "react"
const Gallery = () => {
    const [photos, setPhotos] = useState([])
    const [videos, setVideos] = useState([])

    useEffect(function () {
        const photosRef = ref(storage, 'photos')
        listAll(photosRef).then(data => data.items.map(item => getDownloadURL(item).then(url => setPhotos(oldData => [...oldData, url]))))
    }, [])
    useEffect(function () {
        const VideoRef = ref(storage, 'videos')
        listAll(VideoRef).then(data => data.items.map(item => getDownloadURL(item).then(url => setVideos(oldData => [...oldData, url]))))
    }, [])
    return (
        <div className={style.gallery}>
            <div className={style.head}>
                <img src={ArrowShapeLeft} alt="shape" />
                <h1>MY Amazing Shots</h1>
                <img src={ArrowShapeRight} alt="shape" />
            </div>
            <Swiper
                breakpoints={{
                    1300: {
                        slidesPerView: 4
                    }, 1000: {
                        slidesPerView: 3
                    }, 750: {
                        slidesPerView: 2
                    }
                    , 0: {
                        slidesPerView: 1
                    }
                }}
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                loop={true}
                scrollbar={{ draggable: true }}
                className={style.slider}
            >
                {
                    photos.map((url) => <div key={crypto.randomUUID()}><SwiperSlide className={style.slide}><img className={style.slideImg} src={url} alt="img" /></SwiperSlide></div>)
                }
            </Swiper>
            <div className={style.videosContainer}>
                {
                    videos.map((url) => <video loop muted autoPlay className={style.video} key={crypto.randomUUID()}><source src={url} /></video>)
                }
            </div>
        </div>
    )
}

export default Gallery
