
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Contacts() {
     const onSubmit = (event) => {
         event.preventDefault()
         
         let formData = new FormData(event.currentTarget);

         const email = formData.get('email')
         const phone = formData.get('phone')
         const message = formData.get('message')
         console.log(email, phone, message)
         navigate('/')
     }

     const navigate = useNavigate();

    return (
        <div id="down" class="wrapper style1">
            <div class="container">
                <section >
                    <div class="mapouter"><div class="gmap_canvas"><iframe title="google-map" width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Balchik,Delano,%20Bulgaria&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><Link to="https://www.whatismyip-address.com/divi-discount/"></Link><br/><style>.mapouter position:relative;text-align:center;height:auto;width:auto;</style><style>.gmap_canvas overflow:hidden;background:none!important;height:auto;width:auto;</style></div></div>
                </section>
                <section>
                    <header>
                        <h3>Where You Can Find Us?</h3>
                    </header>
                    <p>Address: Balchik, ul. "Akad. Daki Yordanov" 28, 9600</p>
                    <p>Phone: 123423423234</p>
                </section>
                <header>
                    <h3 id="reservation">Please fill this form or Call Us on tel.:1232342341234</h3>
                    <h3>We will get back to You shortly!</h3>
                </header>
                <br/>
                <h3 >Contact Form</h3>
                <form onSubmit={onSubmit}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input name="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Phone Number</label>
                        <input name="phone" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Message"></textarea>
                    </div>
                    <div class="col-12">
                    <br/>
                    <ul class="actions">
                        <li><input type="submit" value="Send Message" /></li>
                        <li><input type="reset" value="Reset" /></li>
                    </ul>
                </div>
                </form>
            </div>
        </div>
    );
}