import "./Hero.css";
import landscape from "../assets/images/photo Formal.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMicrophone, faMap} from '@fortawesome/free-solid-svg-icons'


function Hero() {
  return (
    <>
      <div className="container bg-black text-white">
        <div class="container bg-dark text-white pb-5">
          <div class="row justify-content-left">
            <div class="col-8 mt-5">
              <h2 class="mx-3">I'm Naroz Ezzat</h2>
              <h2>
                <span class="text-warning mx-3">End Front</span>Developer
              </h2>
              <p class="col-6 mx-3">
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  aliquid quisquam dolores provident null.
                </small>
              </p>
              <button class='btn btn-warning m-3'>HIRE ME</button>
            </div>
            <div class="col col-lg-4">
              <img
                class="mt-5 rounded"
                alt=""
                style={{ height: "200px" }}
                src={landscape}
              />
            </div>
          </div>
        </div>
        <div class="text-center bg-black my-5">
          <h2>My Services</h2>
          <p class="mx-5">
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ad
              dolor quaerat esse facere natus sunt illum veniam ratione,
              commodi, quo alias aperiam explicabo veritatis ipsa illo vitae
              rerum.
            </small>
          </p>
        </div>
        <div class="card-deck row car mx-5 justify-content-center pb-5">
          <div class="card col-3 bg-dark text-white">
            <div class="card-body text-center">
              <span class="h1 text-warning">{<FontAwesomeIcon icon={faCode} />}</span>
              <h5 class="card-title mt-4">Web Devlopment</h5>
              <p><small>Blog E-commerce</small></p>
            </div>
          </div>
          <div class="card col-3 mx-3 bg-dark text-white">
            <div class="card-body text-center">
            <span class="h1 text-warning">{<FontAwesomeIcon icon={faMap} />}</span>
              <h5 class="mt-4">UI/UX Design</h5>
              <p>
                <small>Mobile App, Website Design</small>
              </p>
            </div>
          </div>
          <div class="card col-3 bg-dark text-white">
            <div class="card-body text-center">
            <span class="h1 text-warning">{<FontAwesomeIcon icon={faMicrophone} />}</span>
              <h5 class="mt-4">Sound Design</h5>
              <p class="card-text">
                <small>Voice Over, Beat Making</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
