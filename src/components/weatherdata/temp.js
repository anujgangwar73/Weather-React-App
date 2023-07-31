import React, { useEffect, useState } from 'react'
import './style.css'

const Temp = () => {
    const [searchValue, setSearchValue] = useState()
    const getWeatherInfo = () => {}
    
    useEffect(() => {
        getWeatherInfo()
    }, [] )
    


    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type='search'
                        placeholder='search..'
                        autoFocus
                        id='search'
                        className='searchTerm'
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                    />
                    <button 
                    className='searchButton' 
                    type='button' 
                    onClick={getWeatherInfo}>
                    Search
                    </button>
                </div>
            </div>
            {/* our temp card */}
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={'wi wi-day-sunny'}></i>
                </div>

                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>25.5 </span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>sunny</div>
                        <div className='place'>Gurugram, India</div>
                    </div>
                </div>
                <div className='date'> {new Date().toLocaleString()}</div>
                {/* our four column section */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {/* {timeStr} PM <br /> */}
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {/* {humidity} <br /> */}
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {/* {pressure} <br /> */}
                                Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {/* {speed} <br /> */}
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Temp