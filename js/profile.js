import React from "react";
'use strict';

class Profile extends React.Component {
    render() {
        
        return (
            <div>
            <img src="img/ProfilePic.jpg" class="figure-img rounded col-md-6"></img>

         <div class="col-md-6 align-content-center justify-content-center">
      
          <h2 id="funHeader" class="row captionTitle justify-content-center" style="">About Me</h2>
          <hr class="justify-content-center" style=""></hr>
          <div class="aboutWrapper">
          <figcaption class="row about figure-caption d-flex" style="text-align: center">
            Software developer with a background in web, client-server applications and software development cycle, with a focus on testing. Skilled in working with cross-functional teams, proficient in various programming languages, technologies and methodologies, including Agile and Waterfall. Interned at Lockheed Martin/CWEP involved creating documentation, troubleshooting software bugs and designing new features for the production branch.
          
          </figcaption>
          <hr class="justify-content-center" style=""></hr>
      
          <div style="margin-left: 1.8rem; margin-right: 1.8rem; padding-top: .8rem; padding-bottom: 1.2rem;" class="row hi-icon-effect-3 hi-icon-effect-3a">
              <a class="col btn btn-secondary hi-icon" style="background-color: #333333; margin-right: 1.5rem" href="https://github.com/ghiasyalexandre" target="blank" role="button"><i class="fab fa-github fa-xl"></i></a>
              
              <a class="col btn btn-secondary  hi-icon" style="background-color: #0082ca;" href="https://www.linkedin.com/in/ghiasy-a/" target="blank" role="button"><i class="fab fa-linkedin-in fa-xl"></i></a>
              
              <a class="col btn btn-secondary  instagram hi-icon" style="background-color: #ac2bac; margin-left: 1.5rem;" href="https://docs.google.com/document/d/19I8bSM32SW5Uj1uzMZR66mZxYbtSH_zTVHioR0nKX4I/edit?usp=sharing" target="blank" role="button"><i class="fa fa-file-pdf fa-xl"></i></a>
            </div>
          </div>
        </div>
        </div>
        )
    }
}

const domContainer = document.querySelector('#react-profile');
const root = ReactDOM.createRoot(domContainer);
root.render(<Profile/>);

export default Profile;