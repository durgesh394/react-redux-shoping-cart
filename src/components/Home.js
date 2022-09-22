import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Header from './Header';
const Home = () => {
    const data = useSelector(state => state.ItemReducers)
    return (
        <>
            <Header />
            <div className="dataContainer">
                {
                    data.map((datashow) => {
                        return (
                            <>
                                <div className="datawrapper">
                                    <Link to={`details/${datashow.id}`}>
                                        <div>
                                            <img src={datashow.img} alt="" className='datashowimg' /><br />
                                            <spna className="name">{datashow.name}</spna><br />
                                            <span className='price'>Rs.{datashow.price}</span><br />
                                        </div>
                                    </Link>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home
