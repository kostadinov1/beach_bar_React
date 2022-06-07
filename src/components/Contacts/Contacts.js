
import { Link } from "react-router-dom";

export function Contacts() {
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
                <form method="post" action="{% url 'contacts' %}">
                    <div class="row gtr-uniform">
                        <div class="col-6 col-12-xsmall">
                        </div>
                        <div class="col-6 col-12-xsmall">
                        </div>
                        <div class="col-12">
                        </div>
                        <div class="col-12">
                            <ul class="actions">
                                <li><input type="submit" value="Send Message" /></li>
                                <li><input type="reset" value="Reset" /></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}