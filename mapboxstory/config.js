var config = {
    style: 'mapbox://styles/jonniwalker/ck4o4rlxr099r1crc2n8uui36',
    accessToken: 'pk.eyJ1Ijoiam9ubml3YWxrZXIiLCJhIjoiY2loeG82cWplMDA4N3cxa3MzZXU2N2JpYSJ9.H6vPKI0UKLv733mSCXh2Lw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'DYSTOPIAN DEFORESTATION',
    byline: '',
    footer: '',
    animation: 'fadein',
    chapters: [
        {
             id: 'THEAMAZON',
            title: 'DYSTOPIAN DEFORESTION:',
            description: 'What would a map of the Earth look like if all the sub-tropical rainforests were deforested in a day? <br/> </p> </p> Making up one thirf of around Philadelphia on two horse around the field. This not going to work is it? Footbal pitch idea?  </br> </p> </br> <p><strong> SCROLL DOWN <p><strong> With each scroll YOU </br> <p> are taking an ACTION</p>',
             image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/01/Scroll-White-1.gif', 
            image2: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-19-at-13.png', 
    
            location: {
                center: [-73.603475, -11.216189],
                 duration: 4500,
                    zoom: 4.09,
                bearing: -20,
                pitch: 41.5
            },
           
        
            onChapterEnter: [
                {
      
                    layer: 'archive-6-9g1e5q',
                    opacity: 0,
                   
               
                }
            ],
            onChapterExit: [
                {
                    layer: 'archive-6-9g1e5q',
                    
          
      opacity: 0.55
                    
    
                }
                ]
        },
         {
             id: 'THEAMAZONS',
            title: 'WHAT IF THE AMAZON WAS DEFORESTED IN A DAY?',
            description: 'Getting around Philadelphia on two wheels is fast, fun, and cheaters and cats and dogs and rabbits and horses and Kakapo and Takahe and rats<br/> </p> </p> Fast, fun, and cheaters and cats its and catsGetting around Philadelphia on two horse around the field.  </br> </p> </br> </p> LOCATION MAP </p> </p>',
             image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-11-at-18-2.png', 
    
            location: {
                center: [-73.603475, -11.216189],
                 duration: 4500,
                    zoom: 4.09,
                bearing: -20,
                pitch: 41.5
            },
           
        
            onChapterEnter: [
                {
                    layer: 'archive-6-9g1e5q',
                    
        opacity: 0.58,
                    duration: 4500
      
                    
                   
                    
                }
            ],
            onChapterExit: [
                {
                    layer: 'archive-6-9g1e5q',
                    opacity: 0.55
                }
                ]
        },
        {
            
            id: 'THECONGO',
            title: 'THE CONGO',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2019/12/screencapture-studio-mapbox-styles-jonniwalker-cjyiqa8mg088j1djz31ktyqve-edit-2019-12-20-15_02_43-1.png',
            description: 'Philaun, the public transit infrastructun driving (and parking)and cheat and yarn and bilbo and frodo and golum the vapour boy and dogs and Finn and Allan and Anya',
            location: {
               center: [17.633644, -3.210479],
    duration: 4500,
                zoom: 4.5,
                bearing: 0,
    pitch: 30.5
                  
         },
            onChapterEnter: [
                {
                    layer: 'archive-6-9g1e5q',
                    opacity: 0
                }
            ],
             onChapterExit: [
                {
                    layer: 'archive-6-9g1e5q',
                    opacity: 0.55
                }
                 ]
        },
        {
             id: 'THECONGOS',
            title: 'WHAT IF THE CONGO WAS DEFORESTED IN A DAY?',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2019/12/screencapture-studio-mapbox-styles-jonniwalker-cjyiqa8mg088j1djz31ktyqve-edit-2019-12-20-15_02_43-1.png',
            description: 'Philaun, the public transit infrastructun driving (and parking)and cheat and yarn and bilbo and frodo and golum the vapour boy and dogs and Finn and Allan and Anya',
            location: {
               center: [17.633644, -3.210479],
    duration: 4500,
                zoom: 4.5,
                bearing: 0,
    pitch: 30.5
                  
         },
            onChapterEnter: [
                {
                             layer: 'archive-6-9g1e5q',
                    
        opacity: 0.66,
                    duration: 4500
                }
            ],
             onChapterExit: [
                {
                    layer: 'archive-6-9g1e5q',
                    opacity: 0.55
                }
                 ]
        },
        {
            id: 'IndiaSriLanka',
            title: 'INDIA & SRI LANKA',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2019/12/Globe-sat-1.png',
            description: 'Indego has been operating in Philadelphia since 20XX. The system initally was focused on Center City, but has expanded service to neighboring areas to support equitable mobility options to the city\'s residents. </br> </p> </br> </p> LOCATION MAP </p> </p>',
            location: {
             center: [76.415286, 16.999026],
             duration: 4500,
                zoom: 4.6,
  bearing: 24.8,
    pitch: 46
            },
            onChapterEnter: [
                {
                    layer: 'indego-stations',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'thehimalayas',
            title: 'THE HIMLAYAS',
            image: '',
            description: 'A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun',
            location: {
                center: [92.838762, 23.957782],
                duration: 4500,
                zoom: 5.89,
                pitch: 46.00,
                bearing: 34.4
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Chapt',
            title: 'Blah blah blah',
            image: '',
            description: 'This steep, rocky gorge can be surprisingly technical. Follow the orange and yellow trails to repeatedly climb and descend through the schist hillsides (careful of the cliffs), or stick to the gravel Forbidden Drive for a relaxing ride along the creek. You\'ll forget you\'re in a city.',
            location: {
                center: [],
                zoom: 13.08,
                pitch: 47.50,
                bearing: 32.80
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter',
            title: 'blah blah blah',
            image: '',
            description: 'Pennypack is a great introduction trail system. Not too steep and not too technical, the beautiful wooded park also provides a great escape from urban life. The south side trails are originally bridle trails, so be nice to equestrians and dismount when you approach them.',
            location: {
                center: [],
                zoom: 13.73,
                pitch: 43.50,
                bearing: 96.80
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        }
    ]
};
