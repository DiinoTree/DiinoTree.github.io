/* ==========================================================================
   AYMAN YUHAS PHOTOGRAPHY — GALLERY CONFIGURATION
   Current Order: Events -> Portraits -> Street -> About -> Book
   
   REMINDER FOR LATER:
   When you shoot more individual portrait sessions and want Portraits first:
   1. Move the 'portraits' list above 'events' in the GALLERY_DATA object below.
   2. In index.html, move <section id="portraits"> above <section id="events">.
   
   HOW TO ADD OR REMOVE PHOTOS:
   - Method 1 (Automatic):
       Drop photos into 'images/', then double-click 'update-gallery.command'.
       High-res originals are preserved in 'images_original/' and optimized automatically.
   
   - Method 2 (Manual):
       You can add or rearrange items below.
       To add a caption: { file: "street-01.jpg", caption: "Groningen at dusk" }
   ========================================================================== */

window.HERO_PHOTO = {
  file: "hero.jpg",
  alt: "Woman wearing headphones on a park bench surrounded by red autumn leaves",
  position: "50% 50%"
};

// Optional: Drop 'about.jpg' into the images folder to display your photo in the About section.
window.PORTRAIT_PHOTO = {
  file: "about.jpg",
  alt: "Portrait of Ayman Yuhas"
};

window.GALLERY_DATA = {
  events: [
    {
      file: "events-01.jpg",
      shape: "wide",
      width: 1800,
      height: 1200,
      caption: "",
      alt: "Packed dance floor with red smoke and stage lights"
    },
    {
      file: "events-02.jpg",
      shape: "wide",
      width: 1800,
      height: 1200,
      caption: "",
      alt: "Group of friends posing and pointing at the camera at a party"
    },
    {
      file: "events-03.jpg",
      shape: "wide",
      width: 1800,
      height: 1200,
      caption: "",
      alt: "Three people in orange shirts and fluffy orange hats posing"
    },
    {
      file: "events-04.jpg",
      shape: "wide",
      width: 1800,
      height: 1200,
      caption: "",
      alt: "Smiling partygoer in an orange cowboy hat holding up a fan"
    },
    {
      file: "events-05.jpg",
      shape: "wide",
      width: 1800,
      height: 1200,
      caption: "",
      alt: "Group of friends posing together at a bar"
    },
    {
      file: "events-06.jpg",
      shape: "wide",
      width: 1800,
      height: 1200,
      caption: "",
      alt: "Partygoer drinking a shot on a crowded dance floor"
    }
  ],
  portraits: [
    {
      file: "portraits-01.jpg",
      shape: "tall",
      width: 1200,
      height: 1800,
      caption: "",
      alt: "Man in a pinstripe three-piece suit with his hands steepled, against a dark background"
    },
    {
      file: "portraits-02.jpg",
      shape: "tall",
      width: 1246,
      height: 1800,
      caption: "",
      alt: "Woman in a dark suit seated in an armchair beside a bronze statuette"
    }
  ],
  street: [
    {
      file: "street-01.jpg",
      shape: "tall",
      width: 1200,
      height: 1800,
      caption: "Groningen at dusk",
      alt: "Man in a high-visibility vest adjusting his headscarf, black and white"
    },
    {
      file: "street-03.jpg",
      shape: "tall",
      width: 1350,
      height: 1800,
      caption: "",
      alt: "Couple holding each other on a canal-side curb at dusk"
    },
    {
      file: "street-04.jpg",
      shape: "tall",
      width: 1440,
      height: 1800,
      caption: "",
      alt: "Person sitting on a sunlit patch of grass under dark trees, reflected in water"
    },
    {
      file: "street-05.jpg",
      shape: "wide",
      width: 1800,
      height: 1200,
      caption: "",
      alt: "Person with an afro and goggles sitting on a ledge, looking at a phone"
    },
    {
      file: "street-06.jpg",
      shape: "tall",
      width: 1440,
      height: 1800,
      caption: "",
      alt: "Crowded train platform seen from above"
    },
    {
      file: "street-07.jpg",
      shape: "tall",
      width: 1200,
      height: 1800,
      caption: "",
      alt: "Police officers standing beside a person wrapped in a flag, black and white"
    },
    {
      file: "street-08.jpg",
      shape: "wide",
      width: 1800,
      height: 1200,
      caption: "",
      alt: "Three people sitting with their backs to the camera against a yellow wall"
    },
    {
      file: "street-09.jpg",
      shape: "tall",
      width: 1200,
      height: 1800,
      caption: "",
      alt: "Marchers carrying flags and signs at a demonstration, black and white"
    },
    {
      file: "street-10.jpg",
      shape: "wide",
      width: 1800,
      height: 1200,
      caption: "",
      alt: "Couple on a bench overlooking a valley and mountains"
    },
    {
      file: "street-02.jpg",
      shape: "tall",
      width: 1350,
      height: 1800,
      caption: "",
      alt: "Woman on a park bench surrounded by red autumn leaves"
    },
    {
      file: "street-11.jpg",
      shape: "tall",
      width: 1440,
      height: 1800,
      caption: "",
      alt: "Two skaters sitting on steps with their boards"
    },
    {
      file: "street-12.jpg",
      shape: "wide",
      width: 1800,
      height: 1200,
      caption: "",
      alt: "Group of skaters sitting along a canal wall"
    },
    {
      file: "street-13.jpg",
      shape: "wide",
      width: 1800,
      height: 1200,
      caption: "",
      alt: "Man on a bench at a viewpoint with a dog sniffing the ground"
    },
    {
      file: "street-14.jpg",
      shape: "wide",
      width: 1800,
      height: 1200,
      caption: "",
      alt: "Arched alley with cafe tables and warm-colored walls"
    },
    {
      file: "street-15.jpg",
      shape: "tall",
      width: 1440,
      height: 1800,
      caption: "",
      alt: "Narrow street of orange buildings with a figure climbing the steps"
    },
    {
      file: "street-16.jpg",
      shape: "tall",
      width: 1440,
      height: 1800,
      caption: "",
      alt: "Busy narrow street hung with bunting"
    },
    {
      file: "street-17.jpg",
      shape: "wide",
      width: 1800,
      height: 1200,
      caption: "",
      alt: "Two silhouettes walking through a dark tunnel towards daylight"
    }
  ]
};
