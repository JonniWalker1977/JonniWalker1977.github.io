var config = {
    style: 'mapbox://styles/jonniwalker/ck4o4rlxr099r1crc2n8uui36',
    accessToken: 'pk.eyJ1Ijoiam9ubml3YWxrZXIiLCJhIjoiY2loeG82cWplMDA4N3cxa3MzZXU2N2JpYSJ9.H6vPKI0UKLv733mSCXh2Lw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    footer: '',
    animation: 'fadein',
    chapters: [
        {
             id: 'THEAMAZON',
            title: 'A Dystopian Future of Deforestation',
            description: ' ________________________________ <br/> BY JONNI WALKER | FEBRUARY, 2020 <br/> </p> </p> </p> <img src="https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/01/world.200409.3x5400x2700-1.png" style=height:95px;width:200px> </br> </p> What would a map of the Earth look like if all the tropical rainforests were deforested in a day? <br/></p> The Earth would look drastically different! And it is due to OUR actions that it is changing.<br/></p> With each scroll of your mouse YOU will be taking an ACTION. <br/> </p>SCROLL DOWN<br/></p><img src="https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/01/Scroll-White-1.gif"><br/>  <br/> </p> <img src=""><img src=""><img src=""> </p> </p>  </br>',
            image: '', 
            
    
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
                    
          
      opacity: 0.54
                    
    
                }
                ]
        },
         {
             id: 'THEAMAZON1',
            title: 'The Neotropical Rainforest Realm',
            description: '________________________________ Getting around Philadelphia on two wheels is fast, fun, and cheaters and cats and dogs and rabbits and horses and Kakapo and Takahe and rats<br/> </p> </p> Fast, fun, and cheaters and cats its and </br> </p> <strong>Number of Football Pitches lost</strong></br> (2001-2018); </p> • Brazil - <strong> 36.2M </strong></p> • Bolivia - <strong> 3.8M </strong></p> • Peru - <strong> 2.8M </strong> </br> </p> </br> </p> LOCATION MAP </p> </p>',
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
                    
        opacity: 0,
                   
      
                    
                   
                    
                }
            ],
            onChapterExit: [
                {
                    layer: 'archive-6-9g1e5q',
                     opacity: 0.54,
                }
                ]
         },
        {
             id: 'THEAMAZONS',
            title: 'What if this Area was Deforested in a Day?',
            description: '________________________________ Getting around Philadelphia on two wheels is fast, fun, and cheaters and cats and dogs and rabbits and horses and Kakapo and Takahe and rats<br/> </p> </p> Fast, fun, and cheaters and cats its and catsGetting around Philadelphia on two horse around the field.  </br> </p> </br> </p> LOCATION MAP </p> </p>',
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
                    
        opacity: 0.5,
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
            title: 'The Afrotropical Rainforest Realm',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-13-at-10-1-1.png',
            description: '________________________________ Philaun, the public transit infrastructun driving (and parking)and cheat and yarn and bilbo and frodo and golum the  </br> </p> <strong>Number of Football Pitches lost</strong></br> (2001-2018); </p> • Democratic Republic of Congo - <strong> 6.8M </strong></p> • Madagascar - <strong> 1.2M </strong></p> • Cameroon - <strong> 0.8M </strong> </br> </p> LOCATION MAP </p> </p>',
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
            title: 'What if this Area was Deforested in a Day?',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2019/12/screencapture-studio-mapbox-styles-jonniwalker-cjyiqa8mg088j1djz31ktyqve-edit-2019-12-20-15_02_43-1.png',
            description: '________________________________ Philaun, the public transit infrastructun driving (and parking)and cheat and yarn and bilbo and frodo and golum the vapour boy and dogs and Finn and Allan and Anya',
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
                },
                {
                   layer: 'map-labels-test-for-dots-4gwh1l copy',
                    opacity: 1,
                    duration: 4500
                },
                
            ],
             onChapterExit: [
                {
                    layer: 'archive-6-9g1e5q',
                    opacity: 0.55
                }
                 ]
        },
        {
            id: 'Indo',
            title: ' The Indomalayan Rainforest Realm',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-28-at-10-1.png',
            description: '________________________________ Indego has been operating in Philadelphia since 20XX. The system initally was focused on Center City, The system initally was focused on Ce</br> </p> <strong>Number of Football Pitches lost</strong></br> (2001-2018); </p> • India - <strong> 0.4M </strong></p> • Sri Lanka - <strong> 14K </strong></p> • Bangladesh - <strong> 10K </strong>  </br></p> LOCATION MAP </p> </p>',

            location: {
             center: [80.201349, 15.872321],
             duration: 4500,
                zoom: 4.57,
  bearing: -20.8,
    pitch: 32.5
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
             id: 'Indos',
            title: 'What if this area was Deforested in a Day?',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/01/screencapture-studio-mapbox-styles-jonniwalker-ck3j0ith90fpj1cpeagl6laur-edit-2020-01-28-11_02_31-1.png',
            description: '________________________________ Philaun, the public transit infrastructun driving (and parking)and cheat and yarn and bilbo and frodo and golum the vapour boy and dogs and Finn and Allan and Anya',
            location: {
                    center: [80.201349, 15.872321],
             duration: 4500,
                zoom: 4.57,
  bearing: -20.8,
    pitch: 32.5
                  
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
            id: 'AUS',
            title: 'The Australian Oceanic Pacific Rainforest Realm',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-11-1-1-1.png',
            description: '________________________________ <br/> A short ride along the Schuylkill River Trail from the Art Museum, Belmont is a twisty, log-ridden rollercoaster of a trail network. It is easy to get turned around, the underbrush is at times impenetrable, and short steep sections come out of nowhere. In other words, it\'s really fun </br> </p> <strong>Number of Football Pitches lost</strong></br> (2001-2018); </p> • Indonesia - <strong> 14.3M </strong></p> • <Malasia - <strong> 3.9M </strong></p> • Papua New Guinea - <strong> 1M </strong></br></p> LOCATION MAP </p> </p>',
            location: {
                center: [114.162529, 3.378059],
                duration: 4500,
                zoom: 3.7,
                pitch: 0,
                bearing: 0
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
             
             id: 'AUSS',
            title: 'What if this area was Deforested in a Day?',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/01/screencapture-studio-mapbox-styles-jonniwalker-ck3j0ith90fpj1cpeagl6laur-edit-2020-01-27-15_34_51-1.png',
            description: '________________________________ Philaun, the public transit infrastructun driving (and parking)and cheat and yarn and bilbo and frodo and golum the vapour boy and dogs and Finn and Allan and Anya',
            location: {
center: [114.162529, 3.378059],
                duration: 4500,
                zoom: 3.7,
                pitch: 0,
                bearing: 0
                  
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
                    opacity: 0.5
                }
                 ]
        },
        {
            id: 'Chapt',
            title: 'Actions',
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
