import React from 'react'
import './education.css'
import {FaGraduationCap} from 'react-icons//fa'

const Education = () => {
  return (
    <section class="Education" id="Education">

        <h2>Education</h2>

        <div class="box-container">

        <div class="box">
                <i class="fas fa-graduation-cap"><FaGraduationCap color="white"/></i>
                <span>2022</span>
                <h5>B.tech </h5>
                <p>B.Tech vit-AP Pvt Uni(CSE).
                    VIT-AP University. G-30, inavolu, beside AP secretariat Amaravati,Andhra pradesh 522020
                    Expected Year of passing out (2025) 
                </p>
            </div>


            <div class="box">
                <i class="fas fa-graduation-cap"><FaGraduationCap color="white"/></i>
                
                <span>2020-2021</span>
                <h5>intermediate </h5>
                <p>Inter (+1,+2) Sri sai krupa  , 
                  Andhrapradesh 517501
                    Year of passing out (2021) 95%
                </p>
            </div>
            <div class="box">
                <i class="fas fa-graduation-cap"><FaGraduationCap color="white"/></i>
                <span>2019</span>
                <h5>10th class</h5>
                <p>ssc(class 10) AP Model School
                     Dharmavaram,
                     Year of the passing out (2019) 9.7.G P A</p>
            </div>

            


        </div>

    </section>
  )
}

export default Education