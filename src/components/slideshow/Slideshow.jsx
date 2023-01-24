import React from "react";
import './Slideshow.css'

let slideIndex = 1
showSlide(slideIndex)

const plusSlide=(n) => {
    showSlide(slideIndex += n)
}
const currentSlide = (n) => {
    showSlide(slideIndex = n)
}

const showSlide = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlide")
    let dots = document.getElementsByClassName("dot")
    
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slideIndex.length; i ++){
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className += " active"
}

const Slideshow = (props) => {
    return(
        <>
            <div className="slideshow-container">
                {
                    props.slideshowList.map((list, index, arr)  => {
                        return(
                            <div className="mySlide fade">
                                <div className="numbertext">{index + 1}/{arr.length}</div>
                                <img src={list.img} alt="" />
                                <div className="textcaption">{list.textCaption}</div>
                            </div>
                        )
                    })
                }
                {/* next and previous buttons */}
                <a className="prev" onClick={()=>props.plusSlide(-1)}>&#10094;</a>
                <a className="next" onClick={()=>props.plusSlide(1)}>&#10095;</a>
            </div>
            {/* the dots/circles */}
            <div>
                {
                    props.slideshowList.forEach(element => {
                        <span className="dot" onClick={()=>props.currentSlide(element)}></span>
                    })
                }
            </div>
        </>
        
    )
}

export default Slideshow