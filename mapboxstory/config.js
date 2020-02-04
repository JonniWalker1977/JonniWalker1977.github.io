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
            description: ' ________________________________ <br/> BY JONNI WALKER | FEBRUARY, 2020 <br/> </p> </p> </p> <img src="https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/01/world.200409.3x5400x2700-1.png" style=height:95px;width:200px> </br> </p> What would a map of the Earth look like if all the tropical rainforests were deforested in a day? <br/></p> The Earth would look drastically different! And it is due to OUR actions that it is changing.<br/></p> Their essential role to our planets climate is undeniable. What would a dystopian tomorrow look like? <br/> </p>SCROLL DOWN<br/></p><img src="https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/01/Scroll-White-1.gif"><br/>  <br/> </p> <img src=""><img src=""><img src=""> </p> </p>  </br>',
            image: '', 
            
    
            location: {
                center: [-72.603475, -11.216189],
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
                    
          
      opacity: 0.6
                    
    
                }
                ]
        },
         {
             id: 'THEAMAZON1',
            title: 'The Neotropical Rainforest Realm',
            description: '_____________________________ </br> It has been reported that the Amazon rainforest loses a football-pitched sized area of land every second. The top three countries in this region affected by primary forest cover loss are listed below.  </br> </p> <strong>No. of Football Pitches lost</strong> (2001-2018); </br> </strong> </br> • Brazil - <strong> 36.2M</br></strong></br> • Bolivia - <strong> 3.8M </strong></br> • Peru - <strong> 2.8M </strong> </br> </p></br> LOCATION MAP </p> </p>',
             image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/02/giphy-globe-1.png', 
            
    
            location: {
                center: [-72.603475, -11.216189],
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
                     opacity: 0.6,
                }
                ]
         },
        {
             id: 'THEAMAZONS',
            title: 'What if this area was deforested in a day?',
            description: '________________________________ </br>The Amazon River Basin is roughly the size of the forty-eight contiguous United States and covers some 40 percent of the South American continent. <br/> </p> </p> Deforesting this area in a day would fundamentally scar the globe. </br></p>',
             image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/02/ezgif.com-gif-maker-3.gif?', 
            
    
            location: {
                center: [-72.603475, -11.216189],
                 duration: 4500,
                    zoom: 4.09,
                bearing: -20,
                pitch: 41.5
            },
           
        
            onChapterEnter: [
                {
                    layer: 'archive-6-9g1e5q',
                    
        opacity: 0.5,
                    duration: 14000
      
                    
                   
                    
                }
            ],
            onChapterExit: [
                {
                    layer: 'archive-6-9g1e5q',
                    opacity: 0.6
                }
                ]
        },
        {
            
            id: 'THECONGO',
            title: 'The Afrotropical Rainforest Realm',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/02/giphy-Africa.png',
            description: '____________________________ </br>This scale of rainforest loss is incredibly staggering. The top three countries in this region affected by primary forest cover loss are listed below.  </br> </p> <strong>No. of Football Pitches lost</strong> (2001-2018); </br> • Democratic Republic of Congo - <strong> 6.8M </strong></br> • Madagascar - <strong> 1.2M </strong></br> • Cameroon - <strong> 0.8M </strong> </br> </p></br> LOCATION MAP </p> </p>',
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
                    opacity: 0.6
                }
                 ]
        },
        {
             id: 'THECONGOS',
            title: 'What if this area was deforested in a day?',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/02/ezgif.com-gif-maker-2.gif',
            description: '__________________________________</br> Some 75% of Africa\'s remaining rainforest is located in Central Africa. The bulk of this region\'s forests are found in the Congo Basin in the Democratic Republic of Congo and Congo. </br><p/> These forests are mostly threatened by logging, industrial agriculture, and subsistence activities, especially fuelwood collection and smallholder agriculture.</br><p/>',
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
                   
                    
        opacity: 0.69,
                    duration: 14000
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
                    opacity: 0.6
                }
                 ]
        },
        {
            id: 'Indo',
            title: ' The Indomalayan Rainforest Realm',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/02/giphy-Himalaya.png',
            description: '_____________________________ </br>This scale of rainforest loss is incredibly staggering. The top three countries in this region affected by primary forest cover loss are listed below.</br> </p> <strong>No. of Football Pitches lost</strong> (2001-2018); </br> • India - <strong> 0.4M </strong></br> • Sri Lanka - <strong> 14K </strong></br> • Bangladesh - <strong> 10K </strong>  </br></p></br> LOCATION MAP </p> </p>',

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
                    opacity: 0.6
                }
            ]
        },
        
             {
             id: 'Indos',
            title: 'What if this area was deforested in a day?',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/02/ezgif.com-gif-maker-5.gif',
            description: '__________________________________</br> This part of the Indomalayan realm covers the Andaman and Nicobar Islands, the Western Ghats, which fringe the Arabian Sea, the coastline of peninsular India, and the greater Assam region in the north-east. Vast swaithes of the island of Sri Lanka would be drastically changed.  ',
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
                    duration: 14000
                }
            ],
             onChapterExit: [
                {
                    layer: 'archive-6-9g1e5q',
                    opacity: 0,
                     duration: 10
                }
                 ]
        },
        {
            id: 'AUS',
            title: 'The Australian Oceanic Pacific Rainforest Realm',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/02/Indonesia-globe-1.png',
            description: '_____________________________ <br/> This scale of rainforest loss is incredibly staggering. The top three countries in this region affected by primary forest cover loss are listed below.  </br> </p> <strong>No. of Football Pitches lost</strong> (2001-2018); </br> • Indonesia - <strong> 14.3M </strong></br> • Malasia - <strong> 3.9M </strong></br> • Papua New Guinea - <strong> 1M </strong></br></p></br> LOCATION MAP </p> </p>',
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
                    opacity: 0
                }
            ]
        },
        {
             
             id: 'AUSS',
            title: 'What if this area was deforested in a day?',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/02/ezgif.com-gif-maker-4.gif',
            description: '_________________________________ </br> The Pacific islands landscape would drastically be changed from an oasis of green to a baron, scarred collection of islands and archipelagos. The bulk of the forest in this region lies on the world\'s second largest island, Papa New Guinea.',
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
                    duration: 14000
                }
            ],
             onChapterExit: [
                {
                    layer: 'archive-6-9g1e5q',
                    opacity: 0.6
                    
                }
                 ]
        },
        {
            id: 'Chapt',
            title: 'Actions',
            image: 'https://www.jonniwalkerdatablog.com/wp-content/uploads/2020/02/5e37f33910412421411288.gif',
            description: '_______________ </br> Lets go back in time one day. </br><p/> Doesn\'t our planet look better this way? It is time we all take action to stop further deforestation of the world\'s rainforests and stop a potential dystopian tomorrow. </br><p/> A truely global collective effort from governments, businesses and individuals is needed right now! ',
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
                    
        opacity: 0,
                    duration:12000,
                    
                }
            ],
             onChapterExit: [
                {
                    layer: 'archive-6-9g1e5q',
                    opacity: 0,
                    
                }
            ]
        },
        {
            id: 'chapter',
            title: 'Sources & Thanks',
            image: '',
            description: '• Global Forest Watch 2019 (Primary Forest Cover Loss) </br> • FIFA (football pitch size used 0.64 ha) </br> • WWF Terrestrial Ecoregions of the World </br> • Nasa Blue Marble </br> • Natural Earth (various shapefiles) </br> • Giphy </br></p> THANK YOU</br> • Allan Walker </br> • Lo Benichou </br> • MAPBOX ',
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
