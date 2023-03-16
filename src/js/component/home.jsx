import React from "react";

//include images into your bundle
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Bottombar from "./Bottombar.jsx";


//create your first component
const Home = () => {
return (
<div className="container-fluid px-0">
<Navbar />
<Jumbotron title="A Warm Welcome!"
description="Welcome to MaiLinh & Dan's Landing Page! I assure you it is the best landing page on the world wide web! We have spared no expense with our development team!"
buttonLabel="Click here for more info!"
buttonURL="https://www.youtube.com/watch?v=xvFZjo5PgG0"/>

<div class="container">

<div class="row">
<div class="col">
<Card
title="Lamborghini Aventador SVJ"
imageUrl="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/aventador/svj/11_17/ar_aventador_svj_m.png"
description="780HP, V12, Awesome supercar that one day I will get as an awesome full stack developer!! It only costs between $1,000,000 & $1,500,000!!!"
buttonUrl="https://www.lamborghini.com/"
buttonLabel="Learn more.."
/>
</div>
<div class="col">
<Card
title="McLaren 720S"
imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/23/2018_McLaren_720S_V8_S-A_4.0.jpg"
description="780HP, V8, Awesome supercar that one day I will get as an awesome full stack developer!! It only costs between $1,000,000 & $1,500,000!!!"
buttonUrl="https://www.mclaren.com/"
buttonLabel="Learn more.."
/>
</div>
<div class="col">
<Card
title="Corvette"
imageUrl="https://www.cars.com/i/large/in/v2/stock_photos/87a6b798-454e-4b91-83a0-4ada5897c75f/5f142d80-50da-48c7-8e33-4bfb230d9691.png"
description="780HP, V8, Awesome supercar that one day I will get as an awesome full stack developer!! It only costs between $1,000,000 & $1,500,000!!!"
buttonUrl="https://www.chevrolet.com/"
buttonLabel="Learn more.."
/>
</div>
<div class="col">
<Card
title="Rolls Royce Phantom"
imageUrl="https://cdnprs.wisconsin.dev/wp-content/uploads/2022/12/Phantom-SII-Las-Vegas-Event-Images-12-scaled.jpeg"
description="Riding in style in my Phantom that one day I will get as an awesome full stack developer!! It only costs between $1,000,000 & $1,500,000!!!"
buttonUrl="https://www.rolls-roycemotorcars.com/en_US/home.html"
buttonLabel="Learn more.."
/>
</div>
</div>
</div>
<Bottombar />
</div>

);
};

export default Home;