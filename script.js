// Delay video load until after page render (LCP fix)
window.addEventListener("load", () => {
  const videoSource = document.querySelector(".bg-video source");
  videoSource.src = "./assets/background-vd.mp4"; // ✅ relative path
  videoSource.parentElement.load();
});

var acc = document.getElementsByClassName("according");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var panel = this.nextElementSibling;
        panel.classList.toggle("active");
    });
}

// document.addEventListener("DOMContentLoaded", () => {
//     fetch("./users.json")
//         .then(res => res.json())
//         .then(data => {
//             let host = window.location.host.replace(/^www\./, ""); // normalize www.
//             let user = data[host];

//             if (!user) {
//                 console.log("No user found, showing base template.");
//                 return; // keep base template
//             }

//             for (let id in user) {
//                 let el = document.getElementById(id);
//                 if (!el) continue;

//                 if (id === "hero-user-image") {
//                     el.style.backgroundImage = `url(${user[id]})`;
//                     el.style.backgroundSize = "cover";
//                     el.style.backgroundPosition = "center";
//                 } else if (el.tagName === "IMG") {
//                     el.src = user[id];
//                 } else if (el.tagName === "I") {
//                     el.className = user[id];
//                 } else {
//                     if (user[id].includes("<span>")) {
//                         el.innerHTML = user[id];
//                     } else {
//                         el.textContent = user[id];
//                     }
//                 }
//             }
//         })
//         .catch(err => console.error("Error loading JSON:", err));
// });

// USER JSON CODE
// {
//     "john.com": {
//         "hero-user-field": "Designer",
//         "hero-user-field-second": "Designer,",
//         "hero-user-name": "John Doe",
//         "hero-user-p-tag-1": "I design  landing pages.",
//         "hero-user-p-tag-2": "Helping startups convert visitors into buyers.",
//         "hero-user-p-tag-3": "Let's build your brand together.",
//         "hero-user-image": "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg",
    
//         "skill-icon-first-box": "fa-brands fa-instagram",
//         "skill-hfour-tag-first": "ETH Copywriting",
//         "skill-hp-tag-first": "Writes persuasive product descriptions and landing pages that drive purchases.",
//         "skill-icon-second-box": "fa-solid fa-image",
//         "skill-hfour-tag-second": "BTC Marketing",
//         "skill-hp-tag-second": "Crafts automated email sequences for lead nurturing and product launches.",
//         "skill-icon-third-box": "fa-solid fa-magnifying-glass",
//         "skill-hfour-tag-third": "XRP Writing",
//         "skill-hp-tag-third": "Creates keyword-optimized blog content that ranks and brings in organic traffic.",
      
//         "about-me-hfive-tag": "Our Story and Vision",
//         "about-me-first-box-p-tag": "We are a team dedicated to delivering exceptional results with integrity and creativity.Lorem isado ndao naodn noadn onal results with integrity and creativity.Lorem is",
//         "about-us-boxtwo-img": "https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg",
//         "about-us-hfour-tag-first": "Our Vision",
//         "about-me-second-box-p-tag": "We believe in building brands with pWe are a team dedicated to delivering exceptional results with integritassion and honesty.",
//         "about-us-boxthree-img": "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg",
//         "about-us-hfour-tag-second": "Our Values",
//         "about-me-third-box-p-tag": "We value creativity, trust, and long-term partnerships.",
      
//         "project-hfourtag-first": "Product Launch Landing Page",
//         "project-ptag-first": "Wrote a high-converting landing page for a tech startup's new product — helped increase their signups by 35% in 2 weeks.",
//         "project-hfourtag-second": "Email Funnel for Online Course",
//         "project-ptag-second": "Designed a 7-email sequence for a fitness coach, resulting in 15% more course sales.",
//         "project-hfourtag-third": "SEO-Optimized Blog Series",
//         "project-ptag-third": "Created a 5-part blog series for a real estate brand, helping them rank on Google's front page for two keywords.",
//         "project-button-cta": "Work With Me",
      
//         "case-study-img-first": "https://images.pexels.com/photos/30139872/pexels-photo-30139872.jpeg",
//         "case-study-hthree-first": "Empowering Access to Fresh Produce",
//         "case-study-hfour-first": "Problem",
//         "case-study-hp-first": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium excepturi ab, sunt in saepe architecto dolores quos alias earum ipsam obcaecati vel natus, porro tempora doloribus, inventore voluptate? Quidem, voluptas.",
//         "case-study-hthree-second": "Streamline remote hiring",
//         "case-study-four-second": "Problem",
//         "case-study-hp-second": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere culpa magni saepe natus impedit numquam nihil quis rem ex ipsum, beatae voluptas molestias sint esse molestiae debitis asperiores minus fuga.",
//         "case-study-img-second": "https://images.pexels.com/photos/29719552/pexels-photo-29719552.jpeg",
     
//         "testimonial-picture-first": "https://cdn.pixabay.com/photo/2017/01/31/13/14/girl-2022366_640.jpg",
//         "testimonial-ptag-first": "Olivia R. <span>Startup Founder</span>",
//         "testimonial-ptag-blackquote-first": "John's design gave our brand a new life. The website feels alive and engaging.",
//         "testimonial-picture-second": "https://cdn.pixabay.com/photo/2015/03/04/22/35/man-659652_640.jpg",
//         "testimonial-ptag-second": "Derek M. <span>Marketing Head</span>",
//         "testimonial-ptag-blackquote-second": "The landing page doubled our conversions. Best investment we made this year.",
//         "testimonial-picture-third": "https://cdn.pixabay.com/photo/2016/03/27/19/31/young-man-1281282_640.jpg",
//         "testimonial-ptag-third": "Sarah K. <span>Business Coach</span>",
//         "testimonial-ptag-blackquote-third": "The copy was sharp and persuasive. My audience instantly connected with it.",
     
//         "faq-button-text-first": "What makes me stand out?",
//         "faq-ptag-first": "I combine persuasive copy with strategic design thinking, making sure every word also works visually.",
//         "faq-button-text-second": "Do you work with startups or established businesses?",
//         "faq-ptag-second": "Both! Ive helped early-stage startups launch their first product and supported established brands with scaling campaigns.",
//         "faq-button-text-third": "How quickly can you deliver results?",
//         "faq-ptag-third": "Most clients see results in as little as 24 weeks, depending on the scope of work.",
//         "faq-button-text-fourth": "What industries do you specialize in?",
//         "faq-ptag-fourth": "Ive worked across tech, e-commerce, real estate, and coaching — but my framework adapts to any niche.",
//         "faq-button-text-fifth": "Can you guarantee conversions?",
//         "faq-ptag-fifth": "No copywriter can guarantee results — but my process is designed to maximize the chances of success through testing and iteration.",
   
//         "final-cta-hthree-tag": "The Portfolio youve been dreaming of is just one click away",
//         "final-cta-button-text": "Lets go for a Call"
//     }
// }