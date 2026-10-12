/* TPA content — Tirupur Photography Association.
   Full production dataset with local photography assets. */
(function(){
const P=(en,ta)=>({en,ta});
window.TPA_DATA={
  plans:[
    {id:"renewal",price:1000,period:"year",name:P("Studio Renewal","ஸ்டுடியோ புதுப்பித்தல்"),d:P("For existing member studios renewing their association membership and directory listing.","ஏற்கனவே உறுப்பினராக உள்ள ஸ்டுடியோக்கள் உறுப்பினர் தகுதியைப் புதுப்பிக்க.")},
    {id:"new",price:1500,period:"year",rec:true,name:P("New Member Registration","புதிய உறுப்பினர் பதிவு"),d:P("For studios and photographers joining the association for the first time. Includes digital ID card and membership kit.","சங்கத்தில் முதல்முறை இணையும் ஸ்டுடியோக்கள், புகைப்படக் கலைஞர்களுக்கு. உறுப்பினர் அட்டை மற்றும் வரவேற்புத் தொகுப்புடன்.")},
    {id:"associate",price:2000,period:"year",name:P("Associate / Freelancer","அசோசியேட் / ஃப்ரீலான்ஸர்"),d:P("For freelance photographers, videographers, and editors operating across Tirupur district.","ஸ்டுடியோ இல்லாத ஃப்ரீலான்ஸ் புகைப்படக் கலைஞர்கள், வீடியோகிராஃபர்கள், எடிட்டர்களுக்கு.")},
    {id:"life",price:10000,period:"life",name:P("Life Membership","வாழ்நாள் உறுப்பினர்"),d:P("A single lifetime payment for permanent association membership and honorary voting rights.","வாழ்நாள் முழுவதும் செல்லுபடியாகும் நிரந்தர உறுப்பினர் தகுதி மற்றும் கௌரவ வாக்குரிமை.")}
  ],
  galleryCats:{
    annual:P("Annual Day","ஆண்டு விழா"),
    workshop:P("Workshop","பயிலரங்கு"),
    expo:P("Expo","கண்காட்சி"),
    contest:P("Contest","போட்டி"),
    showcase:P("Member Showcase","உறுப்பினர் படைப்புகள்")
  },
  gallery:[
    {
      id:1,cat:"annual",tone:1,ratio:"4/5",
      src:"images/gallery/gallery-1.jpg",
      title:P("28th Annual Conclave Inauguration","28-வது ஆண்டு மாநாடு தொடக்க விழா"),
      caption:P("Traditional lamp lighting ceremony inaugurating the annual convention at Tirupur Trade Centre.","திருப்பூர் வர்த்தக மையத்தில் நடைபெற்ற வருடாந்திர மாநாட்டின் குத்துவிளக்கு ஏற்றும் தொடக்க நிகழ்வு."),
      event:P("TPA Annual Conclave 2025","திருப்பூர் புகைப்பட சங்கம் ஆண்டு மாநாடு 2025"),
      credit:P("K. Senthilkumar · Vision Studio","கே. செந்தில்குமார் · விஷன் ஸ்டுடியோ")
    },
    {
      id:2,cat:"workshop",tone:5,ratio:"3/2",
      src:"images/gallery/gallery-2.jpg",
      title:P("Optics & Sensor Calibration Workshop","லென்ஸ் ஒளியியல் மற்றும் சென்சார் பயிற்சி"),
      caption:P("Hands-on masterclass on precision mirrorless lens calibration and high-speed shutter mechanics.","மிரர்லெஸ் கேமரா சென்சார் துல்லிய அளவீடு மற்றும் அதிவேக ஷட்டர் செயல்முறை பயிலரங்கு."),
      event:P("Technical Masterclass Series","தொழில்நுட்ப பயிலரங்கு தொடர்"),
      credit:P("M. Prabhu · Apex Stills","எம். பிரபு · அபெக்ஸ் ஸ்டில்ஸ்")
    },
    {
      id:3,cat:"expo",tone:2,ratio:"1/1",
      src:"images/gallery/gallery-3.jpg",
      title:P("Framed Horizons Art Pavilion","பிரேம்ட் ஹொரைசன்ஸ் புகைப்படக் கண்காட்சி"),
      caption:P("Curated exhibition featuring 120 large-format fine art prints by Tirupur photographers.","திருப்பூர் புகைப்படக் கலைஞர்களின் 120 பிரம்மாண்ட கலைப்படைப்புகள் காட்சிப்படுத்தப்பட்ட அரங்கம்."),
      event:P("Tirupur Photography Expo 2025","திருப்பூர் புகைப்படக் கண்காட்சி 2025"),
      credit:P("S. Anand · Classic Digital","எஸ். ஆனந்த் · கிளாசிக் டிஜிட்டல்")
    },
    {
      id:4,cat:"contest",tone:4,ratio:"4/5",
      src:"images/gallery/gallery-4.jpg",
      title:P("Rhythms of Tamil Nadu","தமிழகத்தின் நடன அசைவுகள்"),
      caption:P("Gold medal winner capturing the dynamic expressions of Bharatanatyam during temple festival.","கோயில் திருவிழாவில் பரதநாட்டியக் கலைஞரின் தாள நயத்தை வெளிப்படுத்தும் தங்கப் பதக்கப் படம்."),
      event:P("Tamil Cultural Photo Awards","தமிழ் பண்பாட்டு புகைப்பட விருதுகள்"),
      credit:P("R. Karthikeyan · Sri Vignesh Studio","ஆர். கார்த்திகேயன் · ஸ்ரீ விக்னேஷ் ஸ்டுடியோ")
    },
    {
      id:5,cat:"showcase",tone:3,ratio:"3/2",
      src:"images/gallery/gallery-5.jpg",
      title:P("Heritage Bridal Twilight","பாரம்பரிய மணப்பெண் வர்ணஜாலம்"),
      caption:P("Member portfolio showcase capturing authentic South Indian wedding silk attire and temple architecture.","தென்னிந்திய பாரம்பரிய திருமண ஆடையும் கோவில் பின்னணியும் இணைந்த மணப்பெண் புகைப்படம்."),
      event:P("Wedding Photography Showcase","திருமண புகைப்படக் கலைத் தொகுப்பு"),
      credit:P("A. Vignesh · Royal Clicks","ஏ. விக்னேஷ் · ராயல் கிளிக்ஸ்")
    },
    {
      id:6,cat:"annual",tone:7,ratio:"3/2",
      src:"images/gallery/gallery-6.jpg",
      title:P("Veteran Photographer Felicitation","மூத்த கலைஞர்கள் கௌரவிப்பு"),
      caption:P("Honoring pioneer darkroom and studio masters who founded the Tirupur photography guild.","திருப்பூரில் புகைப்படத்துறையை வளர்த்த மூத்த ஸ்டுடியோ முன்னோடிகளுக்கு வாழ்நாள் சாதனையாளர் விருது."),
      event:P("TPA Honours Evening","சங்க கௌரவிப்பு மாலை"),
      credit:P("N. Velmurugan · Modern Lab","என். வேல்முருகன் · மாடர்ன் லேப்")
    },
    {
      id:7,cat:"workshop",tone:8,ratio:"4/5",
      src:"images/gallery/gallery-7.jpg",
      title:P("Sunlight & Modifiers Field Session","இயற்கை ஒளி மேலாண்மை களப்பயிற்சி"),
      caption:P("Outdoor field exercise training photographers on using parabolic reflectors in harsh midday sun.","கடும் சூரிய ஒளியிலும் மென்மையான நிழல்களை உருவாக்க ரிஃப்ளெக்டர் கையாளும் பயிற்சி."),
      event:P("Lighting Masterclass 2025","ஒளியமைப்பு பயிலரங்கு 2025"),
      credit:P("D. Suresh · Lens Craft","டி. சுரேஷ் · லென்ஸ் கிராப்ட்")
    },
    {
      id:8,cat:"showcase",tone:6,ratio:"1/1",
      src:"images/gallery/gallery-8.jpg",
      title:P("Cotton City Chronicles","பின்னலாடை நகரத்தின் காலை விடியல்"),
      caption:P("Documentary street study highlighting the tireless textile artisans and weavers of Tirupur.","திருப்பூரின் பின்னலாடை உழைப்பாளர்களின் அதிகாலை வாழ்வியலை ஆவணப்படுத்தும் தெருப் புகைப்படம்."),
      event:P("Documentary Fellowship Project","ஆவணப்பட ஆய்வுத் திட்டம்"),
      credit:P("V. Balaji · People & Frames","வி. பாலாஜி · பீப்பிள் & பிரேம்ஸ்")
    },
    {
      id:9,cat:"expo",tone:1,ratio:"3/2",
      src:"images/gallery/gallery-9.jpg",
      title:P("Public Gallery Walkthrough","பொதுமக்கள் கண்காட்சிப் பார்வை"),
      caption:P("Visitors, young students, and visual arts connoisseurs engaging with association prints.","மாணவர்களும் பொதுமக்களும் சங்க உறுப்பினர்களின் புகைப்படங்களை ஆர்வத்துடன் கண்டு ரசிக்கும் காட்சி."),
      event:P("State Photo Fair 2025","மாநில புகைப்படத் திருவிழா 2025"),
      credit:P("T. Muthuraj · Pixel World","டி. முத்துராஜ் · பிக்சல் வேர்ல்ட்")
    },
    {
      id:10,cat:"contest",tone:2,ratio:"4/5",
      src:"images/gallery/gallery-10.jpg",
      title:P("Western Ghats Monsoon Veil","மேற்குத் தொடர்ச்சி மலை பருவமழை"),
      caption:P("Silver medal winning landscape capture depicting morning mist cascading over Anamalai foothills.","ஆனைமலை அடிவாரத்தில் காலை பனிமூட்டம் இறங்கும் காட்சியைக் காட்டும் வெள்ளிப் பதக்கப் படம்."),
      event:P("Nature & Wildlife Salon","இயற்கை புகைப்படப் போட்டி"),
      credit:P("G. Prakash · Nature Clicks","ஜி. பிரகாஷ் · நேச்சர் கிளிக்ஸ்")
    },
    {
      id:11,cat:"annual",tone:5,ratio:"1/1",
      src:"images/gallery/gallery-11.jpg",
      title:P("Fellowship & Brotherhood Gala","உறுப்பினர்கள் சங்கம விழா"),
      caption:P("Over 350 active member photographers and videographers uniting for the annual fellowship dinner.","350-க்கும் மேற்பட்ட உறுப்பினர்கள் கலந்துகொண்ட சங்கத்தின் வருடாந்திர இரவு விருந்து சங்கமம்."),
      event:P("TPA Fellowship Meet 2025","சங்க உறுப்பினர்கள் சந்திப்பு 2025"),
      credit:P("K. Jayakumar · Bright Studio","கே. ஜெயக்குமார் · பிரைட் ஸ்டுடியோ")
    },
    {
      id:12,cat:"workshop",tone:4,ratio:"3/2",
      src:"images/gallery/gallery-12.jpg",
      title:P("Commercial Strobe Synchronization","வணிக ஒளியமைப்பு மற்றும் ரேடியோ சின்க்"),
      caption:P("Multi-light radio trigger setups for commercial advertising, fashion, and export catalog shoots.","ஜவுளி ஏற்றுமதி தயாரிப்புக்கான மல்டி-ஃப்ளாஷ் ரேடியோ ட்ரிக்கர் அமைப்புகள் செயல்முறை விளக்கம்."),
      event:P("Commercial Photo Workshop","வணிக புகைப்படப் பயிலரங்கு"),
      credit:P("C. Saravanan · Studio Zoom","சி. சரவணன் · ஸ்டுடியோ ஜூம்")
    },
    {
      id:13,cat:"showcase",tone:7,ratio:"4/5",
      src:"images/gallery/gallery-13.jpg",
      title:P("Avinashilingeswarar Temple Silhouette","அவிநாசி கோவில் கோபுர வைகறை"),
      caption:P("Fine art architectural study capturing the intricate 10th-century stone carvings at dusk.","10-ம் நூற்றாண்டு வரலாற்றுச் சிறப்புமிக்க அவிநாசி கோவில் கோபுரத்தின் மாலை நேரக் கலைத்தோற்றம்."),
      event:P("Kongu Heritage Series","கொங்கு பாரம்பரியத் தொடர்"),
      credit:P("S. Rajendran · Heritage Arts","எஸ். ராஜேந்திரன் · ஹெரிடேஜ் ஆர்ட்ஸ்")
    },
    {
      id:14,cat:"expo",tone:3,ratio:"1/1",
      src:"images/gallery/gallery-14.jpg",
      title:P("Portfolio Review & Mentorship","இளம் கலைஞர்கள் வழிகாட்டுதல்"),
      caption:P("Senior association fellows conducting comprehensive portfolio critiques for young emerging talents.","வளரும் இளம் புகைப்படக் கலைஞர்களின் படைப்புகளை மூத்த வல்லுநர்கள் ஆய்வு செய்து வழிகாட்டுதல்."),
      event:P("Mentor Walk Series 2025","வழிகாட்டி பயிலரங்கு 2025"),
      credit:P("P. Manikandan · Focus Lab","பி. மணிகண்டன் · போக்கஸ் லேப்")
    }
  ],
  newsCats:{
    announcement:P("Announcement","அறிவிப்பு"),
    event:P("Event","நிகழ்வு"),
    workshop:P("Workshop","பயிலரங்கு"),
    contest:P("Contest","போட்டி")
  },
  news:[
    {
      id:1,cat:"announcement",tone:1,date:"15 Oct 2026",
      src:"images/news/news-1.jpg",
      title:P("2026 State-Level Photography Convention Announced","2026 மாநில அளவிலான புகைப்பட மாநாடு அறிவிப்பு"),
      excerpt:P("Tirupur to host over 800 professional photographers across South India for a grand three-day convention with equipment expos and masterclasses.","தென்னிந்தியா முழுவதிலுமிருந்து 800-க்கும் மேற்பட்ட புகைப்படக் கலைஞர்கள் பங்கேற்கும் 3 நாள் பிரம்மாண்ட மாநாடு திருப்பூரில் நடைபெறுகிறது."),
      body:{
        en:[
          "The Tirupur Photography Association is proud to host the South India State-Level Photography Convention 2026. Taking place at the Tirupur Trade Centre, the three-day convention will bring together camera manufacturers, veteran mentors, wedding cinematographers, and commercial studio owners.",
          "Attendees will have exclusive access to hands-on equipment demo booths featuring the latest mirrorless gear, high-speed radio strobe systems, and aerial drone technology. Five dedicated seminar tracks will cover advanced lighting, creative wedding storytelling, color management, and business pricing.",
          "Registration is now open for association members at subsidized delegate fees. Early reservations are recommended as hall seating is limited."
        ],
        ta:[
          "திருப்பூர் புகைப்படக் கலைஞர்கள் சங்கம் பெருமையுடன் நடத்தும் 2026 தென்னிந்திய புகைப்பட மாநாடு திருப்பூர் வர்த்தக மையத்தில் பிரம்மாண்டமாக நடைபெறவுள்ளது. இதில் முன்னணி கேமரா நிறுவனங்கள், மூத்த வல்லுநர்கள், திருமண ஒளிப்பதிவாளர்கள் மற்றும் வணிக ஸ்டுடியோ உரிமையாளர்கள் கலந்துகொள்கின்றனர்.",
          "சமீபத்திய மிரர்லெஸ் கேமராக்கள், அதிவேக ஒளியமைப்பு கருவிகள், ட்ரோன் தொழில்நுட்பங்கள் ஆகியவற்றின் நேரடி செயல்முறை விளக்கங்கள் இடம்பெறும். மேம்பட்ட ஒளியமைப்பு, திருமண ஆவணக் கலை, வண்ண மேலாண்மை மற்றும் தொழில்முறை வழிகாட்டுதல் குறித்த ஐந்து கருத்தரங்குகள் நடைபெறும்.",
          "சங்க உறுப்பினர்களுக்கான சலுகைக் கட்டணத்தில் முன்பதிவு தற்போது தொடங்கியுள்ளது. இடங்கள் குறைவாக உள்ளதால் முன்கூட்டியே பதிவு செய்துகொள்ளுமாறு கேட்டுக்கொள்ளப்படுகிறார்கள்."
        ]
      }
    },
    {
      id:2,cat:"event",tone:5,date:"28 Oct 2026",
      src:"images/news/news-2.jpg",
      title:P("Monsoon Photo Walk: Noyyal River Heritage Route","பருவமழை புகைப்பட நடைப்பயணம்: நொய்யல் நதிக்கரை பாரம்பரியப் பாதை"),
      excerpt:P("Join fellow members this Sunday morning for an immersive street and documentary photo walk documenting Tirupur's historic waterways and historic architecture.","திருப்பூரின் வரலாற்று சிறப்புமிக்க நீர்நிலைகள் மற்றும் பாரம்பரிய கட்டிடங்களை ஆவணப்படுத்த இந்த ஞாயிறு காலை நடைபெறும் சிறப்பு நடைப்பயணம்."),
      body:{
        en:[
          "Documenting our city's heritage through authentic lenses has always been a core mission of the association. Our upcoming Monsoon Photo Walk invites photographers of all experience levels to capture the vibrant morning life along the Noyyal River basin and historic market streets.",
          "Participants will assemble at Town Hall at 6:00 AM. Senior photojournalists will guide the group on approaching candid street portraits, managing natural morning reflections, and composing compelling visual narratives.",
          "Selected photographs submitted by participants will be featured in our upcoming Annual Print Exhibition and published on the association portal."
        ],
        ta:[
          "நமது திருப்பூரின் பாரம்பரியத்தை கேமரா வழியே ஆவணப்படுத்துவது சங்கத்தின் முதன்மை பணிகளில் ஒன்றாகும். வரவிருக்கும் பருவமழை புகைப்பட நடைப்பயணம், நொய்யல் நதிக்கரை மற்றும் வரலாற்றுச் சிறப்புமிக்க கடைவீதிகளின் அதிகாலை வாழ்வியலைப் படம்பிடிக்க ஏற்பாடு செய்யப்பட்டுள்ளது.",
          "பங்கேற்பாளர்கள் காலை 6:00 மணிக்கு டவுன் ஹால் பகுதியில் கூடுவர். தெருவோர இயல்பான மனித முகங்கள், அதிகாலை ஒளி பிரதிபலிப்புகள் மற்றும் காட்சி அமைப்புகள் குறித்து மூத்த புகைப்படப் பத்திரிகையாளர்கள் வழிகாட்டுவார்கள்.",
          "நடைப்பயணத்தில் எடுக்கப்படும் சிறந்த புகைப்படங்கள் சங்கத்தின் வருடாந்திர புகைப்படக் கண்காட்சியில் காட்சிப்படுத்தப்பட்டு அதிகாரப்பூர்வ தளத்திலும் வெளியிடப்படும்."
        ]
      }
    },
    {
      id:3,cat:"workshop",tone:2,date:"08 Nov 2026",
      src:"images/news/news-3.jpg",
      title:P("Commercial Studio Lighting & Color Calibration Lab","வணிக ஸ்டுடியோ ஒளியமைப்பு மற்றும் வண்ண மேலாண்மை பயிலரங்கு"),
      excerpt:P("Intensive one-day workshop covering high-speed strobe sync, multi-light wedding portraiture, and certified monitor color calibration for studios.","அதிவேக ஸ்ட்ரோப் ஒளியமைப்பு, மணமகன்-மணமகள் போர்ட்ரெய்ட் அமைப்புகள் மற்றும் துல்லிய மானிட்டர் கலர் கேலிப்ரேஷன் குறித்த ஒருநாள் நேரடிப் பயிற்சி."),
      body:{
        en:[
          "Modern studio clients expect flawless skin tones, precise fabric reproduction, and cinematic shadows. This comprehensive technical masterclass breaks down the physics of parabolic diffusers, grid modifiers, and wireless TTL triggers in practical studio situations.",
          "Participants will work directly with calibrated professional monitors and spectrophotometers to align camera color profiles with export print labs, eliminating costly reprints and client color discrepancies.",
          "Seats are restricted to 40 members to guarantee hands-on console practice. All participants will receive an association certification of completion."
        ],
        ta:[
          "இன்றைய நவீன வாடிக்கையாளர்கள் துல்லியமான தோல் நிறம், ஆடைகளின் அசல் வண்ணப் பிரதிபலிப்பு மற்றும் சினிமா பாணி ஒளியமைப்பை எதிர்பார்க்கிறார்கள். இந்த தொழில்நுட்ப பயிலரங்கில் பாரபோலிக் சாஃப்ட்பாக்ஸ், கிரிட் அமைப்புகள் மற்றும் வயர்லெஸ் ட்ரிக்கர்களின் நுட்பங்கள் விளக்கப்படும்.",
          "கேமரா வண்ண அமைப்புகளையும் பிரின்ட் லேப் வண்ணங்களையும் துல்லியமாக ஒருங்கிணைக்கும் கலர் கேலிப்ரேஷன் முறைகள் நேரடிப் பயிற்சியாகக் கற்பிக்கப்படும்.",
          "நேரடிப் பயிற்சிக்காக 40 உறுப்பினர்களுக்கு மட்டுமே அனுமதி வழங்கப்படும். பங்கேற்கும் அனைவருக்கும் சங்கத்தின் சான்றிதழ் வழங்கப்படும்."
        ]
      }
    },
    {
      id:4,cat:"contest",tone:4,date:"20 Nov 2026",
      src:"images/news/news-4.jpg",
      title:P("Tirupur Heritage & Textile Life Photo Contest 2026","திருப்பூர் பாரம்பரியம் & பின்னலாடை வாழ்க்கை புகைப்படப் போட்டி 2026"),
      excerpt:P("Cash prizes totaling ₹1,00,000 across four categories: Textile Life, Cultural Celebrations, Wildlife, and Street Candid. Open to all Tamil Nadu photographers.","மொத்தம் ₹1,00,000 ரொக்கப் பரிசுகளுடன் நான்கு பிரிவுகளில் நடைபெறும் மாபெரும் மாநில புகைப்படப் போட்டி. பதிவு செய்ய கடைசி தேதி டிசம்பர் 10."),
      body:{
        en:[
          "The annual TPA Photography Contest is one of Tamil Nadu's most prestigious competitive salons. Photographers are invited to submit their best unpublished work across four categories: Textile Life, Cultural Celebrations, Wildlife & Nature, and Street Candid.",
          "An esteemed jury panel of national award-winning photojournalists will judge submissions based on technical excellence, storytelling, and emotional impact. All winning and highly commended images will be printed in large format for a public exhibition.",
          "Submissions can be uploaded directly through the member portal before November 25, 2026. Entry is free for active association members."
        ],
        ta:[
          "சங்கத்தின் வருடாந்திர புகைப்படப் போட்டி தமிழ்நாட்டின் முக்கியப் போட்டிகளில் ஒன்றாகும். பின்னலாடைத் தொழில், பண்பாட்டு திருவிழாக்கள், இயற்கை வனவிலங்குகள் மற்றும் தெருவோர வாழ்வியல் ஆகிய நான்கு பிரிவுகளில் புதிய படைப்புகள் வரவேற்கப்படுகின்றன.",
          "தேசிய விருது பெற்ற மூத்த புகைப்பட வல்லுநர்கள் நடுவர்களாகப் பணியாற்றி தொழில்நுட்பத் திறன் மற்றும் உணர்வுபூர்வமான காட்சி அமைப்பின் அடிப்படையில் வெற்றியாளர்களைத் தேர்வு செய்வர்.",
          "சங்கத்தின் இணையதளம் வாயிலாக நவம்பர் 25-க்குள் படங்களை அனுப்பலாம். சங்கத்தின் பதிவு பெற்ற உறுப்பினர்களுக்குப் பதிவுக் கட்டணம் முற்றிலும் இலவசம்."
        ]
      }
    },
    {
      id:5,cat:"announcement",tone:7,date:"02 Dec 2026",
      src:"images/news/news-5.jpg",
      title:P("Group Camera Equipment Insurance Scheme Launched","கேமரா கருவிகளுக்கான குழு காப்பீட்டுத் திட்டம் தொடக்கம்"),
      excerpt:P("Exclusive group policy covering accidental drops, liquid damage, and theft for member lenses, camera bodies, and drone equipment at discounted rates.","உறுப்பினர்களின் கேமரா பாடி, லென்ஸ்கள் மற்றும் ட்ரோன் கருவிகளுக்கு விபத்து மற்றும் திருட்டு பாதுகாப்பு வழங்கும் பிரத்யேக குழு காப்பீடு."),
      body:{
        en:[
          "Equipment protection is a critical priority for active working photographers. In partnership with leading national insurers, the Tirupur Photography Association has formalized a comprehensive Group Camera Equipment Insurance Policy.",
          "The scheme covers accidental camera drops, sensor liquid damage, transit loss during outstation wedding shoots, and full equipment replacement value at deeply subsidized annual group premiums.",
          "Members can verify their active membership ID and enroll existing serialized lenses and bodies at the association office or via the member portal."
        ],
        ta:[
          "செயலில் உள்ள புகைப்படக் கலைஞர்களுக்கு விலைமதிப்பற்ற கருவிகளின் பாதுகாப்பு மிக அவசியமானது. முன்னணி காப்பீட்டு நிறுவனத்துடன் இணைந்து திருப்பூர் புகைப்படக் கலைஞர்கள் சங்கம் புதிய குழு காப்பீட்டுத் திட்டத்தை அறிமுகப்படுத்தியுள்ளது.",
          "வெளியூர் திருமண படப்பிடிப்புகளின் போது ஏற்படும் விபத்துக்கள், லென்ஸ் சேதங்கள், தண்ணீர் பாதிப்பு மற்றும் திருட்டு ஆகியவற்றிற்கு முழுமையான இழப்பீடு இத்திட்டம் மூலம் பெறலாம்.",
          "உறுப்பினர்கள் தங்கள் உறுப்பினர் அடையாள அட்டையைப் பயன்படுத்தி தங்கள் கேமரா கருவிகளின் வரிசை எண்ணைப் பதிவு செய்து இத்திட்டத்தில் உடனடியாக இணையலாம்."
        ]
      }
    },
    {
      id:6,cat:"event",tone:8,date:"18 Dec 2026",
      src:"images/news/news-6.jpg",
      title:P("Annual Print Exhibition & Gallery Fair 2026","வருடாந்திர புகைப்பட அச்சு கண்காட்சி & கலை அரங்கம் 2026"),
      excerpt:P("Over 150 curated museum-grade archival prints by Tirupur photographers on display for public viewing from December 18 to 22.","திருப்பூர் புகைப்படக் கலைஞர்களின் 150-க்கும் மேற்பட்ட தேர்ந்தெடுக்கப்பட்ட அச்சுப் படைப்புகளின் பொதுக் கண்காட்சி டிசம்பர் 18 முதல் 22 வரை."),
      body:{
        en:[
          "Print remains the ultimate physical manifestation of photography. The 2026 Annual Print Exhibition celebrates the tactile beauty of archival cotton rag and metallic papers, presenting 150 curated prints covering portraiture, landscape, street, and abstract art.",
          "The five-day exhibition will also host daily artist walkthroughs, print critique sessions, and demonstrations on professional framing, archival matting, and exhibition lighting.",
          "Admission is free and open to all art enthusiasts, students, and citizens of Tirupur. The exhibition will be held at the Tirupur Municipal Art Pavilion."
        ],
        ta:[
          "புகைப்படக் கலையின் உச்சக்கட்ட அழகு காகிதத்தில் அச்சிடப்படும் போதுதான் முழுமை பெறுகிறது. 2026 வருடாந்திர கண்காட்சியில் 150-க்கும் மேற்பட்ட உயர்தர பருத்தி மற்றும் மெட்டாலிக் காகிதங்களில் அச்சிடப்பட்ட பிரம்மாண்ட புகைப்படங்கள் இடம்பெறுகின்றன.",
          "ஐந்து நாட்கள் நடைபெறும் இக்கண்காட்சியில் தினசரி கலைஞர் உரையாடல்கள், புகைப்பட விமர்சன அரங்குகள் மற்றும் பிரேமிங் தொழில்நுட்ப விளக்கங்கள் நடைபெறும்.",
          "அனுமதி அனைவருக்கும் முற்றிலும் இலவசம். திருப்பூர் மாநகராட்சி கலை அரங்கில் இக்கண்காட்சி டிசம்பர் 18 முதல் 22 வரை நடைபெறும்."
        ]
      }
    }
  ],
  events:[
    {
      id:1,cat:"workshop",date:"02 Nov",
      title:P("Advanced Studio Lighting & Flash Sync Masterclass","ஸ்டுடியோ ஒளியமைப்பு & அதிவேக ஸ்ட்ரோப் நேரடிப் பயிற்சி"),
      where:P("TPA Conclave Hall, Kumaran Road, Tirupur","சங்க கருத்தரங்கு அரங்கம், குமரன் சாலை, திருப்பூர்")
    },
    {
      id:2,cat:"event",date:"15 Nov",
      title:P("Noyyal River Heritage Monsoon Photo Walk","நொய்யல் நதிக்கரை வரலாற்றுப் புகைப்பட நடைப்பயணம்"),
      where:P("Town Hall Assembly Point, Tirupur","டவுன் ஹால் சந்திப்பு புள்ளி, திருப்பூர்")
    },
    {
      id:3,cat:"contest",date:"10 Dec",
      title:P("State-Level Annual Photo Salon & Awards Ceremony","மாநில அளவிலான புகைப்பட விருதுகள் & பரிசளிப்பு விழா"),
      where:P("Tirupur Trade Centre Main Auditorium","திருப்பூர் வர்த்தக மையம் பிரதான அரங்கம்")
    }
  ],
  committee:[
    {
      id:1,tone:4,src:"images/committee/member-1.jpg",
      name:P("R. Sundaram","ஆர். சுந்தரம்"),
      role:P("President","தலைவர்"),
      studio:P("Sundaram Color Lab & Studios","சுந்தரம் கலர் லேப் & ஸ்டுடியோஸ்"),
      phone:"+91 94432 12345",whatsapp:"919443212345"
    },
    {
      id:2,tone:2,src:"images/committee/member-2.jpg",
      name:P("K. Mohanraj","கே. மோகன்ராஜ்"),
      role:P("Vice President","துணைத் தலைவர்"),
      studio:P("Classic Digital Studio","கிளாசிக் டிஜிட்டல் ஸ்டுடியோ"),
      phone:"+91 98422 23456",whatsapp:"919842223456"
    },
    {
      id:3,tone:5,src:"images/committee/member-3.jpg",
      name:P("P. Senthil Kumar","பி. செந்தில் குமார்"),
      role:P("General Secretary","பொதுச் செயலாளர்"),
      studio:P("Senthil Vision Digital","செந்தில் விஷன் டிஜிட்டல்"),
      phone:"+91 94421 34567",whatsapp:"919442134567"
    },
    {
      id:4,tone:1,src:"images/committee/member-4.jpg",
      name:P("M. Ganesan","எம். கணேசன்"),
      role:P("Treasurer","பொருளாளர்"),
      studio:P("Ganesh Photo World","கணேஷ் போட்டோ வேர்ல்ட்"),
      phone:"+91 98940 45678",whatsapp:"919894045678"
    },
    {
      id:5,tone:8,src:"images/committee/member-5.jpg",
      name:P("A. Rajesh Kannan","ஏ. ராஜேஷ் கண்ணன்"),
      role:P("Joint Secretary","இணைச் செயலாளர்"),
      studio:P("Kannan Arts & Photography","கண்ணன் ஆர்ட்ஸ் & போட்டோகிராபி"),
      phone:"+91 97880 56789",whatsapp:"919788056789"
    },
    {
      id:6,tone:3,src:"images/committee/member-6.jpg",
      name:P("V. Vijay Anand","வி. விஜய் ஆனந்த்"),
      role:P("EC Member — Technical & Optics","செயற்குழு உறுப்பினர் — தொழில்நுட்பம்"),
      studio:P("Apex Cine & Stills","அபெக்ஸ் சினி & ஸ்டில்ஸ்"),
      phone:"+91 99430 67890",whatsapp:"919943067890"
    },
    {
      id:7,tone:7,src:"images/committee/member-7.jpg",
      name:P("S. Manikandan","எஸ். மணிகண்டன்"),
      role:P("EC Member — Events & Conclave","செயற்குழு உறுப்பினர் — நிகழ்வுகள்"),
      studio:P("Sri Krishna Digital Studio","ஸ்ரீ கிருஷ்ணா டிஜிட்டல் ஸ்டுடியோ"),
      phone:"+91 98650 78901",whatsapp:"919865078901"
    },
    {
      id:8,tone:6,src:"images/committee/member-8.jpg",
      name:P("T. Dinesh Babu","டி. தினேஷ் பாபு"),
      role:P("EC Member — Media & Youth","செயற்குழு உறுப்பினர் — ஊடகம் & இளைஞர்"),
      studio:P("Focus Pixel Media","போக்கஸ் பிக்சல் மீடியா"),
      phone:"+91 97500 89012",whatsapp:"919750089012"
    }
  ]
};
})();
