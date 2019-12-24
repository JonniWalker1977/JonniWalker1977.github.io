var config = {
    style: 'mapbox://styles/jonniwalker/ck3u2fjg81dx01cqcrpsdc559?fresh=true',
    accessToken: 'pk.eyJ1Ijoiam9ubml3YWxrZXIiLCJhIjoiY2loeG82cWplMDA4N3cxa3MzZXU2N2JpYSJ9.H6vPKI0UKLv733mSCXh2Lw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'THEAMAZON',
            title: 'WHAT WOULD A MAP OF THE EARTH LOOK LIKE IF ALL THE RAINFORESTS WERE DEFORESTED?',
            description: 'Getting around Philadelphia on two wheels is fast, fun, and cheaters and cats and dogs and rabbits and horses and Kakapo and Takahe and rats<br/> </p> </p> Fast, fun, and cheaters and cats its and catsGetting around Philadelphia on two horse around the field.  </br> </p> </br> </p> LEGEND </p> </p>',
             image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-19-at-13.png', 
    
            location: {
                center: [-73.603475, -11.216189],
                 duration: 4500,
                    zoom: 4.1,
                bearing: -20,
                pitch: 41.5
            },
        
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
                ]
        },
        {
            id: 'THECONGO',
            title: 'THE CONGO',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2019/12/screencapture-studio-mapbox-styles-jonniwalker-cjyiqa8mg088j1djz31ktyqve-edit-2019-12-20-15_02_43-1.png',
            description: 'Philaun, the public transit infrastructun driving (and parking)and cheat and yarn and bilbo and frodo and golum the vapour boy and dogs and Finn and Allan and Anya',
            location: {
               center: [19.552837, -3.210479],
    duration: 4500,
                zoom: 4.5,
                bearing: 0,
    pitch: 30.5
                  
         },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'Indonesia',
            title: 'INDONESIA',
            image: '',
            description: 'Indego has been operating in Philadelphia since 20XX. The system initally was focused on Center City, but has expanded service to neighboring areas to support equitable mobility options to the city\'s residents.',
            location: {
             center: [99.398401, 17.559920],
             duration: 4500,
                zoom: 4.52,
  bearing: -15.2,
    pitch: 25
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
            id: 'belmont',
            title: 'Belmont Plateau Trails',
            image: '',
            description: 'A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun',
            location: {
                center: [-75.20325, 39.99574],
                zoom: 14.99,
                pitch: 44.00,
                bearing: -40.00
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
            id: 'wiss',
            title: 'Wissahickon Park Trails',
            image: '',
            description: 'This steep, rocky gorge can be surprisingly technical. Follow the orange and yellow trails to repeatedly climb and descend through the schist hillsides (careful of the cliffs), or stick to the gravel Forbidden Drive for a relaxing ride along the creek. You\'ll forget you\'re in a city.',
            location: {
                center: [-75.21223, 40.05028],
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
            id: 'pennypack',
            title: 'Pennypack Park Trails',
            image: '',
            description: 'Pennypack is a great introduction trail system. Not too steep and not too technical, the beautiful wooded park also provides a great escape from urban life. The south side trails are originally bridle trails, so be nice to equestrians and dismount when you approach them.',
            location: {
                center: [-75.05685, 40.06839],
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
