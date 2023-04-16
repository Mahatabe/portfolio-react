import React from 'react'

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="d-flex justify-content-center my-5">
        <h1>Education</h1>
      </div>
      <div className="container education-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2023</h3>
            <p>Bachelor of Science (B.Sc.) <br /> 
            Ahsanullah University of Science and Technology <br /> 
            Computer Science and Engineering <br />
            CGPA: 3.359</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2015-2017</h3>
            <p>Higher Secondary School Certificate (HSC) <br /> 
             Dhaka College <br /> 
             Science <br />
             GPA: 5.00</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2005-2015</h3>
            <p>Secondary School Certificate (SSC) <br /> 
             Ideal School and College <br /> 
             Science <br />
             GPA: 5.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
