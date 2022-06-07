

export default function PhotoGallery() {

    return ( 
        <>
        <link rel="stylesheet" type="text/css" href="assets/css/gallery.css"></link>
        <link rel="stylesheet" type="text/css" href="assets/css/lightbox.min.css"></link>
        <script src="assets/js/lightbox-plus-jquery.min.js"></script>
        
        <div id="down" class="wrapper style1">
            <div class="container">
                <article id="main" class="container special">
                    <header>
                        <h2><a href="/">Photo Gallery</a></h2>
                    </header>
                    <a href="/" data-lightbox="mygallery" data-title="cover_image.title" class="image featured"><img src="{{ cover_image.image_local.url }}" alt=""  width="800" height="600"/></a>
                    <h2>cover_image.title </h2>
                </article>
                    <hr />

                <div class="row">
                    <article class="col-4 col-12-mobile special">
                        <a href="/" data-lightbox="mygallery" data-title="image.title" class="image featured"><img class="imageZoom" src="{{ image.image_local.url }}" alt=""/></a>
                        <h2>image.title </h2>
                        <br/>
                    </article>


                </div>
            </div>
        </div>
        </>

    );
}