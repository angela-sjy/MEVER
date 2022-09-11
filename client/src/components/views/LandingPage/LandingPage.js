import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';

/*
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox';
import { continents, price } from './Sections/Datas';
import SearchFeature from './Sections/SearchFeature';
 
const { Meta } = Card;
*/

function LandingPage() {


    
    useEffect(() => {

        Axios.post('/api/case/cases')
            .then(response =>{
                
                if(response.data.sucess) {
                    console.log(response.data)
                } else {
                    alert("판례들을 가져오는데 실패했습니다.")
                }
            })


    },[])


    return (
        <>
            <div style={{ width: '75%', margin: '3rem auto' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2>  판례에 관한 정보를 여기서 확인하세요. </h2>
                </div> 

            {/* Filter  */}



            {/* Search  */}



            
            </div>
             
        </>
    )
}

export default LandingPage
