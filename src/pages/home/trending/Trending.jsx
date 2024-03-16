import React, {useState} from 'react'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import UseFetch from '../../../hooks/UseFetch'
UseFetch
import Carousel from '../../../components/carousel/Carousel'

const Trending = () => {

    const [endPoint, setEndPoint] = useState("day")

    const {data, loading} = UseFetch(`/trending/all/${endPoint}`);

    const onTabChange = (tab) => {
        setEndPoint(tab === 'Day' ? 'day' : 'week')
    }

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Trending</span>
        <SwitchTabs data = {["Day", "Week"]} onTabChange = {onTabChange} />
      </ContentWrapper>
        <Carousel data = {data?.results} loading = {loading} />
    </div>
  )
}

export default Trending
