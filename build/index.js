require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=App;var _lib=require("../lib");var _lib2=_interopRequireDefault(_lib);var _sampleData=require("./sampleData");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var _window=window,React=_window.React;function App(){function renderCustomCell(data){return/*#__PURE__*/React.createElement("button",{onClick:function onClick(){console.log(data);alert(JSON.stringify(data));}},"Click me");}return/*#__PURE__*/React.createElement(_lib2["default"],{data:_sampleData.SAMPLE_RESTAURANT_DATA,options:{columns:{name:{path:'name',lock:true},neighborhood:'neighborhood',cuisine_type:{path:'cuisine_type',lock:false},monday:'operating_hours.Monday',rating1Week:{path:'reviews.0.rating',label:'Average ratings 1 week'},rating1Month:{path:'reviews.1.rating',label:'Average ratings 1 month'},rating1Year:{path:'reviews.2.rating',label:'Average ratings 1 year'},anotherShit1Week:{path:'reviews.0.rating',label:'Another average ratings 1 week'},anotherShit1Month:{path:'reviews.1.rating',label:'Another average ratings 1 month',lock:false},anotherShit1Year:{path:'reviews.2.rating',label:'Another average ratings 1 year'},randomRating1Week:{path:'reviews.0.rating',label:'Random average ratings 1 week'},randomRating1Month:{path:'reviews.1.rating',label:'Random average ratings 1 month'},randomRating1Year:{path:'reviews.2.rating',label:'Random average ratings 1 year'},yetAnotherRating1Week:{path:'reviews.0.rating',label:'Yet another average ratings 1 week'},yetAnotherRating1Month:{path:'reviews.1.rating',label:'Yet another average ratings 1 month'},yetAnotherRating1Year:{path:'reviews.2.rating',label:'Yet another average ratings 1 year'},lastAnotherRating1Week:{path:'reviews.0.rating',label:'Last average ratings 1 week'},lastAnotherRating1Month:{path:'reviews.1.rating',label:'Last average ratings 1 month'},lastAnotherRating1Year:{path:'reviews.2.rating',label:'Last average ratings 1 year'},custom:{label:'Custom column',renderContent:renderCustomCell}}}});}

},{"../lib":"diffex","./sampleData":3}],2:[function(require,module,exports){
"use strict";require("babel-polyfill");var _App=require("./App");var _App2=_interopRequireDefault(_App);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var React=window.React;window.ReactDOM.render(/*#__PURE__*/React.createElement(_App2["default"],null),document.getElementById('root'));

},{"./App":1,"babel-polyfill":5}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var SAMPLE_RESTAURANT_DATA=exports.SAMPLE_RESTAURANT_DATA=[{id:1,name:'Mission Chinese Food',neighborhood:'Manhattan',photograph:'1.jpg',address:'171 E Broadway, New York, NY 10002',latlng:{lat:40.713829,lng:-73.989667},cuisine_type:'Asian',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 12:00 am',Wednesday:'5:30 pm - 12:00 am',Thursday:'5:30 pm - 12:00 am',Friday:'5:30 pm - 12:00 am',Saturday:'12:00 pm - 4:00 pm, 5:30 pm - 12:00 am',Sunday:'12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank.'},{name:'Morgan',date:'October 26, 2016',rating:4,comments:'This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!'},{name:'Jason',date:'October 26, 2016',rating:3,comments:'I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff.'}]},{id:2,name:'Emily',neighborhood:'Brooklyn',photograph:'2.jpg',address:'919 Fulton St, Brooklyn, NY 11238',latlng:{lat:40.683555,lng:-73.966393},cuisine_type:'Pizza',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 11:00 pm',Wednesday:'5:30 pm - 11:00 pm',Thursday:'5:30 pm - 11:00 pm',Friday:'5:30 pm - 11:00 pm',Saturday:'5:00 pm - 11:30 pm',Sunday:'12:00 pm - 3:00 pm, 5:00 pm - 11:00 pm'},reviews:[{name:'Steph',date:'October 26, 2016',rating:4,comments:'Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long.'},{name:'Steve',date:'October 26, 2016',rating:4,comments:'This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city.'},{name:'Sam',date:'October 26, 2016',rating:5,comments:"5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time."}]},{id:3,name:'Kang Ho Dong Baekjeong',neighborhood:'Manhattan',photograph:'3.jpg',address:'1 E 32nd St, New York, NY 10016',latlng:{lat:40.747143,lng:-73.985414},cuisine_type:'Asian',operating_hours:{Monday:'11:30 am - 2:00 am',Tuesday:'11:30 am - 2:00 am',Wednesday:'11:30 am - 2:00 am',Thursday:'11:30 am - 2:00 am',Friday:'11:30 am - 6:00 am',Saturday:'11:30 am - 6:00 am',Sunday:'11:30 am - 2:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'The tables at this 32nd Street favorite are outfitted with grills for cooking short ribs, brisket, beef tongue, rib eye, and pork jowl. The banchan plates are uniformly good, and Deuki Hong’s menu also includes winning dishes like stir-fried squid noodles, kimchi stew, and seafood pancakes. If it’s available, make sure to order the kimchi and rice “lunchbox.” Baekjeong is a great place for large groups and birthday parties.'},{name:'ZS',date:'October 26, 2016',rating:5,comments:"I've been to Korea before and many other Korean BBQ places. We had the regular pork belly and a beef (forgot which cut) and a seafood tofu soup. Two meat and a soup was just prefect for the two of us. We could have done one meat and one soup. The portions of the meat are great! The beef was juicy, tender and so good. The sides were excellent. "},{name:'Emily',date:'October 26, 2016',rating:2,comments:"MEH. I've tried their Jersey location as well but Kang Ho Dong meat quality is severely decreasing. A Korean bbq place with whatever meat? I think NOT!"}]},{id:4,name:"Katz's Delicatessen",neighborhood:'Manhattan',photograph:'4.jpg',address:'205 E Houston St, New York, NY 10002',latlng:{lat:40.722216,lng:-73.987501},cuisine_type:'American',operating_hours:{Monday:'8:00 am - 10:30 pm',Tuesday:'8:00 am - 10:30 pm',Wednesday:'8:00 am - 10:30 pm',Thursday:'8:00 am - 2:30 am',Friday:'8:00 am - Sat',Saturday:'Open 24 hours',Sunday:'Sat - 10:30 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"In 127 years, little has changed at Katz's. It remains one of New York's — and the country's — essential Jewish delicatessens. Every inch of the massive Lower East Side space smells intensely of pastrami and rye loaves. The sandwiches are massive, so they are best when shared. Order at the counter, and don't forget to tip your slicer — your sandwich will be better for it."},{name:'Allen',date:'October 26, 2016',rating:5,comments:'If I lived in NY and got diabetes from eating here every single time I ate, I would do it over and over and over again just for that first bite. These guys know how to make a sandwich. The heart attack comes free of charge! Came by while I was visiting NYC. First pit-stop when I come back :)!'},{name:'David',date:'October 26, 2016',rating:2,comments:"Ok so four of us came. One more later who didn't order becauase it's so expensive and simple. Seriously, a bunch of meat albeit you can sample beforehand on rye/white/wheat bread. Cheese extra. Pickles free, you can just ask them at the pickup counter. But seriously 20 bucks gone for an non-flavored half sandwich. And a line that is long, especially if you want seating. I'm down to just take a quick look where Sally and Harry sat and leave to the other delis all around NYC. Oh and they accept Samsung pay."}]},{id:5,name:"Roberta's Pizza",neighborhood:'Brooklyn',photograph:'5.jpg',address:'261 Moore St, Brooklyn, NY 11206',latlng:{lat:40.705089,lng:-73.933585},cuisine_type:'Pizza',operating_hours:{Monday:'11:00 am - 12:00 am',Tuesday:'11:00 am - 12:00 am',Wednesday:'11:00 am - 12:00 am',Thursday:'11:00 am - 12:00 am',Friday:'11:00 am - 12:00 am',Saturday:'10:00 am - 12:00 am',Sunday:'10:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Roberta's is the epicenter of the modern Brooklyn food scene.The pizzas are fantastic, but the restaurant really flexes its muscles with the vegetable dishes. In addition to the pies, consider ordering the radishes, the romaine salad, the roasted beets, and some of the charcuterie."},{name:'Raymond',date:'October 26, 2016',rating:4,comments:"Roberta's, one of the better pizzas I have had in my life. Very trendy and hipsterish spot. Came here for lunch on a random weekday afternoon and when we arrived, there was a line forming already. The space is a bit cramped. You'll get to know your neighbors soon enough. The pizza is just delightful and delicious. It's a ncie plus that you get to see them firing up the pizzas in the corner. The major issue with Roberta's is the trek out to the Williamsburg/Bushwick."},{name:'Laurel',date:'October 26, 2016',rating:4,comments:"The pizza is fantastic, not THE best I've ever had, but would definitely go back since it has great food and great ambiance. Definitely worth going to. It has A LOT of hype in the New York food scene, and I question if it deserves all of it, but it's still a totally great spot to hit up when in the area!!"}]},{id:6,name:'Hometown BBQ',neighborhood:'Brooklyn',photograph:'6.jpg',address:'454 Van Brunt St, Brooklyn, NY 11231',latlng:{lat:40.674925,lng:-74.016162},cuisine_type:'American',operating_hours:{Monday:'Closed',Tuesday:'12:00 pm - 10:00 pm',Wednesday:'12:00 pm - 10:00 pm',Thursday:'12:00 pm - 10:00 pm',Friday:'12:00 pm - 11:00 pm',Saturday:'12:00 pm - 11:00 pm',Sunday:'12:00 pm - 9:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Barbecue aficionados agree that Billy Durney is cooking up some of the best Texas-style barbecue in the city. Straightforward classics like smoked brisket and baby back ribs are always a strong choice, but there are also options like pork belly tacos and a lamb belly banh mi. The space is sprawling in a way that feels like the real deal, and Durney himself can usually be found working the room, and keeping a watchful eye on the smoking meats. It's counter service only, and there's often a line, but for the scene and certainly for the meat, it's easily worth the trip to Red Hook."},{name:'Michelle',date:'October 26, 2016',rating:4,comments:'Overall, a great try of New York BBQ. The restaurant décor is rustic with a good amount of seats to sit and enjoy the meal. I definitely would love to come back and try that monster of a beef rib!'},{name:'Ai-Mei',date:'October 26, 2016',rating:4,comments:"mmmmmm, what a gem this is in bklyn! I loveeee how soft their brisket is here. Their pork tacos are to die for, their different variety of ribs and lastly, their lamb is not gamey at all. Super wallet friendly for the amount they give you. I highly recommend this spot- after eating here, you can definitely walk over for Steve's key lime pies."}]},{id:7,name:'Superiority Burger',neighborhood:'Manhattan',photograph:'7.jpg',address:'430 E 9th St, New York, NY 10009',latlng:{lat:40.727397,lng:-73.983645},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 10:00 pm',Tuesday:'Closed',Wednesday:'11:30 am - 10:00 pm',Thursday:'11:30 am - 10:00 pm',Friday:'11:30 am - 10:00 pm',Saturday:'11:30 am - 10:00 pm',Sunday:'11:30 am - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Brooks Headley’s tiny East Village cafe is so much more than a veggie burger spot — it's one of the best bang-for-your-buck restaurants in Lower Manhattan. Headley and his crew turn seasonal vegetables into delectable salads and riffs on American comfort food favorites. The specials menu changes daily, and the rest of the menu is constantly evolving. You can get a lot of food to eat here for under $15 per person."},{name:'Gabriel',date:'October 26, 2016',rating:5,comments:"I was turned on to this place following the glowing NYT review. Its near my area of the city so I figured why not go? Man they weren't kidding, Superiority Burger is probably the best vegetarian experience I've ever had!"},{name:'Shivi',date:'October 26, 2016',rating:4,comments:'Great flavors and very satisfying. Craving a sandwich, I stopped by on a Friday night with a vegetarian friend. Super small location with just a few seats inside. Ambiance is a bit industrial, good is definitely much more sophisticated than the look of the place! Ordered the superiority burger anda side of potato salad. The potato salad was very light and tasted clean ( less mayo, lots of dill and some cucumber) -- refreshing for a humid summer night! Sandwich was surprisingly delicious - it is very small ( funny allusion to a White Castle burger) but it packs a punch! Not only are there layers of flavors ( amazing sauces) but the party itself had a great texture Ahmed flavor-- well done and so wonderful! Will definitely stop by again for an overall amazing burger/sandwich. Staff was super nice and accommodating but not out of the way friendly.'}]},{id:8,name:'The Dutch',neighborhood:'Manhattan',photograph:'8.jpg',address:'131 Sullivan St, New York, NY 10012',latlng:{lat:40.726584,lng:-74.002082},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Tuesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Wednesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Thursday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Friday:'11:30 am - 3:00 pm, 5:30 pm - 11:30 pm',Saturday:'10:00 am - 3:00 pm, 5:30 pm - 11:30 pm',Sunday:'10:00 am - 3:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Over the last five years, The Dutch has turned into the quintessential American restaurant that chef Andrew Carmellini and partners Josh Pickard and Luke Ostrom sought to evoke when it first opened. It’s a great choice when you’re craving a steak, a burger, or oysters, and the menu always includes plentiful seafood options as well as pastas. The Dutch is now an indelible part of the Soho landscape.'},{name:'Loren',date:'October 26, 2016',rating:4,comments:'I randomly came here on a Saturday night. I was pleasantly surprised with the food and the service. We had the calamari and the ceviche with avocado, and then the catfish. Oh! Then we had the banana soufflé for dessert with ice cream. It was all delicious and well put together. Would love to eat here again.'},{name:'Lori',date:'October 26, 2016',rating:4,comments:"Aside from the slightly claustrophobic dining area and the fact that you may have difficulty hearing your dining companion, I'd return to The Dutch without hesitation. The food is surprisingly well-executed and conceived, and our dinner service flowed smoothly without a hitch. Just make sure to get a reservation in advance, as I'm sure more than just a few other people will have the same idea."}]},{id:9,name:'Mu Ramen',neighborhood:'Queens',photograph:'9.jpg',address:'1209 Jackson Ave, Queens, NY 11101',latlng:{lat:40.743797,lng:-73.950652},cuisine_type:'Asian',operating_hours:{Monday:'5:00 pm - 10:00 pm',Tuesday:'5:00 pm - 10:00 pm',Wednesday:'5:00 pm - 10:00 pm',Thursday:'5:00 pm - 10:00 pm',Friday:'5:00 pm - 11:00 pm',Saturday:'5:00 pm - 11:00 pm',Sunday:'5:00 pm - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Joshua Smookler’s two-year-old ramen shop serves one of the best tonkotsu broths around. Beyond ramen, Mu also offers some high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train.'},{name:'Brittany',date:'October 26, 2016',rating:4,comments:"Overall, I would definitely recommend this place if you enjoy thick curly noodles with a thick, intense broth.  If you don't there are still other options but I can't vouch for those."},{name:'Sally',date:'October 26, 2016',rating:4,comments:"One of the tastiest and most unique ramen places I've been to in NYC, but also the priciest. I think overall its worth the try. Not an everyday casual ramen shop though."}]},{id:10,name:'Casa Enrique',neighborhood:'Queens',photograph:'10.jpg',address:'5-48 49th Ave, Queens, NY 11101',latlng:{lat:40.743394,lng:-73.954235},cuisine_type:'Mexican',operating_hours:{Monday:'5:00 pm - 12:00 am',Tuesday:'5:00 pm - 12:00 am',Wednesday:'5:00 pm - 12:00 am',Thursday:'5:00 pm - 12:00 am',Friday:'5:00 pm - 12:00 am',Saturday:'11:00 am - 12:00 am',Sunday:'11:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"Head to this laid-back Long Island City restaurant for beef tongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."},{name:'Rob',date:'October 26, 2016',rating:5,comments:"The hype was real. Please go. Get the ceviche. And the tres leches. You're welcome"},{name:'Jason',date:'October 26, 2016',rating:4,comments:"For a Michelin star restaurant, it's fairly priced and the food is fairly good. Started with a strawberry margarita which was good in flavor but not much alcohol. Had the chicken enchiladas with salsa verde and it was really good. Great balance in flavor and a good portion. Extra tasty with their hot sauces. My wife had the lamb but it was a bit too salty for our taste. Although, it was cooked very well and fell off the bone. The highlight of the night was the tres leches cake. Probably the best I've ever had to be honest. Not too sweet and very milky. Overall, one of my top 3 favorite Mexican in NY."}]},{id:1,name:'Mission Chinese Food',neighborhood:'Manhattan',photograph:'1.jpg',address:'171 E Broadway, New York, NY 10002',latlng:{lat:40.713829,lng:-73.989667},cuisine_type:'Asian',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 12:00 am',Wednesday:'5:30 pm - 12:00 am',Thursday:'5:30 pm - 12:00 am',Friday:'5:30 pm - 12:00 am',Saturday:'12:00 pm - 4:00 pm, 5:30 pm - 12:00 am',Sunday:'12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank.'},{name:'Morgan',date:'October 26, 2016',rating:4,comments:'This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!'},{name:'Jason',date:'October 26, 2016',rating:3,comments:'I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff.'}]},{id:2,name:'Emily',neighborhood:'Brooklyn',photograph:'2.jpg',address:'919 Fulton St, Brooklyn, NY 11238',latlng:{lat:40.683555,lng:-73.966393},cuisine_type:'Pizza',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 11:00 pm',Wednesday:'5:30 pm - 11:00 pm',Thursday:'5:30 pm - 11:00 pm',Friday:'5:30 pm - 11:00 pm',Saturday:'5:00 pm - 11:30 pm',Sunday:'12:00 pm - 3:00 pm, 5:00 pm - 11:00 pm'},reviews:[{name:'Steph',date:'October 26, 2016',rating:4,comments:'Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long.'},{name:'Steve',date:'October 26, 2016',rating:4,comments:'This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city.'},{name:'Sam',date:'October 26, 2016',rating:5,comments:"5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time."}]},{id:3,name:'Kang Ho Dong Baekjeong',neighborhood:'Manhattan',photograph:'3.jpg',address:'1 E 32nd St, New York, NY 10016',latlng:{lat:40.747143,lng:-73.985414},cuisine_type:'Asian',operating_hours:{Monday:'11:30 am - 2:00 am',Tuesday:'11:30 am - 2:00 am',Wednesday:'11:30 am - 2:00 am',Thursday:'11:30 am - 2:00 am',Friday:'11:30 am - 6:00 am',Saturday:'11:30 am - 6:00 am',Sunday:'11:30 am - 2:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'The tables at this 32nd Street favorite are outfitted with grills for cooking short ribs, brisket, beef tongue, rib eye, and pork jowl. The banchan plates are uniformly good, and Deuki Hong’s menu also includes winning dishes like stir-fried squid noodles, kimchi stew, and seafood pancakes. If it’s available, make sure to order the kimchi and rice “lunchbox.” Baekjeong is a great place for large groups and birthday parties.'},{name:'ZS',date:'October 26, 2016',rating:5,comments:"I've been to Korea before and many other Korean BBQ places. We had the regular pork belly and a beef (forgot which cut) and a seafood tofu soup. Two meat and a soup was just prefect for the two of us. We could have done one meat and one soup. The portions of the meat are great! The beef was juicy, tender and so good. The sides were excellent. "},{name:'Emily',date:'October 26, 2016',rating:2,comments:"MEH. I've tried their Jersey location as well but Kang Ho Dong meat quality is severely decreasing. A Korean bbq place with whatever meat? I think NOT!"}]},{id:4,name:"Katz's Delicatessen",neighborhood:'Manhattan',photograph:'4.jpg',address:'205 E Houston St, New York, NY 10002',latlng:{lat:40.722216,lng:-73.987501},cuisine_type:'American',operating_hours:{Monday:'8:00 am - 10:30 pm',Tuesday:'8:00 am - 10:30 pm',Wednesday:'8:00 am - 10:30 pm',Thursday:'8:00 am - 2:30 am',Friday:'8:00 am - Sat',Saturday:'Open 24 hours',Sunday:'Sat - 10:30 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"In 127 years, little has changed at Katz's. It remains one of New York's — and the country's — essential Jewish delicatessens. Every inch of the massive Lower East Side space smells intensely of pastrami and rye loaves. The sandwiches are massive, so they are best when shared. Order at the counter, and don't forget to tip your slicer — your sandwich will be better for it."},{name:'Allen',date:'October 26, 2016',rating:5,comments:'If I lived in NY and got diabetes from eating here every single time I ate, I would do it over and over and over again just for that first bite. These guys know how to make a sandwich. The heart attack comes free of charge! Came by while I was visiting NYC. First pit-stop when I come back :)!'},{name:'David',date:'October 26, 2016',rating:2,comments:"Ok so four of us came. One more later who didn't order becauase it's so expensive and simple. Seriously, a bunch of meat albeit you can sample beforehand on rye/white/wheat bread. Cheese extra. Pickles free, you can just ask them at the pickup counter. But seriously 20 bucks gone for an non-flavored half sandwich. And a line that is long, especially if you want seating. I'm down to just take a quick look where Sally and Harry sat and leave to the other delis all around NYC. Oh and they accept Samsung pay."}]},{id:5,name:"Roberta's Pizza",neighborhood:'Brooklyn',photograph:'5.jpg',address:'261 Moore St, Brooklyn, NY 11206',latlng:{lat:40.705089,lng:-73.933585},cuisine_type:'Pizza',operating_hours:{Monday:'11:00 am - 12:00 am',Tuesday:'11:00 am - 12:00 am',Wednesday:'11:00 am - 12:00 am',Thursday:'11:00 am - 12:00 am',Friday:'11:00 am - 12:00 am',Saturday:'10:00 am - 12:00 am',Sunday:'10:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Roberta's is the epicenter of the modern Brooklyn food scene.The pizzas are fantastic, but the restaurant really flexes its muscles with the vegetable dishes. In addition to the pies, consider ordering the radishes, the romaine salad, the roasted beets, and some of the charcuterie."},{name:'Raymond',date:'October 26, 2016',rating:4,comments:"Roberta's, one of the better pizzas I have had in my life. Very trendy and hipsterish spot. Came here for lunch on a random weekday afternoon and when we arrived, there was a line forming already. The space is a bit cramped. You'll get to know your neighbors soon enough. The pizza is just delightful and delicious. It's a ncie plus that you get to see them firing up the pizzas in the corner. The major issue with Roberta's is the trek out to the Williamsburg/Bushwick."},{name:'Laurel',date:'October 26, 2016',rating:4,comments:"The pizza is fantastic, not THE best I've ever had, but would definitely go back since it has great food and great ambiance. Definitely worth going to. It has A LOT of hype in the New York food scene, and I question if it deserves all of it, but it's still a totally great spot to hit up when in the area!!"}]},{id:6,name:'Hometown BBQ',neighborhood:'Brooklyn',photograph:'6.jpg',address:'454 Van Brunt St, Brooklyn, NY 11231',latlng:{lat:40.674925,lng:-74.016162},cuisine_type:'American',operating_hours:{Monday:'Closed',Tuesday:'12:00 pm - 10:00 pm',Wednesday:'12:00 pm - 10:00 pm',Thursday:'12:00 pm - 10:00 pm',Friday:'12:00 pm - 11:00 pm',Saturday:'12:00 pm - 11:00 pm',Sunday:'12:00 pm - 9:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Barbecue aficionados agree that Billy Durney is cooking up some of the best Texas-style barbecue in the city. Straightforward classics like smoked brisket and baby back ribs are always a strong choice, but there are also options like pork belly tacos and a lamb belly banh mi. The space is sprawling in a way that feels like the real deal, and Durney himself can usually be found working the room, and keeping a watchful eye on the smoking meats. It's counter service only, and there's often a line, but for the scene and certainly for the meat, it's easily worth the trip to Red Hook."},{name:'Michelle',date:'October 26, 2016',rating:4,comments:'Overall, a great try of New York BBQ. The restaurant décor is rustic with a good amount of seats to sit and enjoy the meal. I definitely would love to come back and try that monster of a beef rib!'},{name:'Ai-Mei',date:'October 26, 2016',rating:4,comments:"mmmmmm, what a gem this is in bklyn! I loveeee how soft their brisket is here. Their pork tacos are to die for, their different variety of ribs and lastly, their lamb is not gamey at all. Super wallet friendly for the amount they give you. I highly recommend this spot- after eating here, you can definitely walk over for Steve's key lime pies."}]},{id:7,name:'Superiority Burger',neighborhood:'Manhattan',photograph:'7.jpg',address:'430 E 9th St, New York, NY 10009',latlng:{lat:40.727397,lng:-73.983645},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 10:00 pm',Tuesday:'Closed',Wednesday:'11:30 am - 10:00 pm',Thursday:'11:30 am - 10:00 pm',Friday:'11:30 am - 10:00 pm',Saturday:'11:30 am - 10:00 pm',Sunday:'11:30 am - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Brooks Headley’s tiny East Village cafe is so much more than a veggie burger spot — it's one of the best bang-for-your-buck restaurants in Lower Manhattan. Headley and his crew turn seasonal vegetables into delectable salads and riffs on American comfort food favorites. The specials menu changes daily, and the rest of the menu is constantly evolving. You can get a lot of food to eat here for under $15 per person."},{name:'Gabriel',date:'October 26, 2016',rating:5,comments:"I was turned on to this place following the glowing NYT review. Its near my area of the city so I figured why not go? Man they weren't kidding, Superiority Burger is probably the best vegetarian experience I've ever had!"},{name:'Shivi',date:'October 26, 2016',rating:4,comments:'Great flavors and very satisfying. Craving a sandwich, I stopped by on a Friday night with a vegetarian friend. Super small location with just a few seats inside. Ambiance is a bit industrial, good is definitely much more sophisticated than the look of the place! Ordered the superiority burger anda side of potato salad. The potato salad was very light and tasted clean ( less mayo, lots of dill and some cucumber) -- refreshing for a humid summer night! Sandwich was surprisingly delicious - it is very small ( funny allusion to a White Castle burger) but it packs a punch! Not only are there layers of flavors ( amazing sauces) but the party itself had a great texture Ahmed flavor-- well done and so wonderful! Will definitely stop by again for an overall amazing burger/sandwich. Staff was super nice and accommodating but not out of the way friendly.'}]},{id:8,name:'The Dutch',neighborhood:'Manhattan',photograph:'8.jpg',address:'131 Sullivan St, New York, NY 10012',latlng:{lat:40.726584,lng:-74.002082},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Tuesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Wednesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Thursday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Friday:'11:30 am - 3:00 pm, 5:30 pm - 11:30 pm',Saturday:'10:00 am - 3:00 pm, 5:30 pm - 11:30 pm',Sunday:'10:00 am - 3:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Over the last five years, The Dutch has turned into the quintessential American restaurant that chef Andrew Carmellini and partners Josh Pickard and Luke Ostrom sought to evoke when it first opened. It’s a great choice when you’re craving a steak, a burger, or oysters, and the menu always includes plentiful seafood options as well as pastas. The Dutch is now an indelible part of the Soho landscape.'},{name:'Loren',date:'October 26, 2016',rating:4,comments:'I randomly came here on a Saturday night. I was pleasantly surprised with the food and the service. We had the calamari and the ceviche with avocado, and then the catfish. Oh! Then we had the banana soufflé for dessert with ice cream. It was all delicious and well put together. Would love to eat here again.'},{name:'Lori',date:'October 26, 2016',rating:4,comments:"Aside from the slightly claustrophobic dining area and the fact that you may have difficulty hearing your dining companion, I'd return to The Dutch without hesitation. The food is surprisingly well-executed and conceived, and our dinner service flowed smoothly without a hitch. Just make sure to get a reservation in advance, as I'm sure more than just a few other people will have the same idea."}]},{id:9,name:'Mu Ramen',neighborhood:'Queens',photograph:'9.jpg',address:'1209 Jackson Ave, Queens, NY 11101',latlng:{lat:40.743797,lng:-73.950652},cuisine_type:'Asian',operating_hours:{Monday:'5:00 pm - 10:00 pm',Tuesday:'5:00 pm - 10:00 pm',Wednesday:'5:00 pm - 10:00 pm',Thursday:'5:00 pm - 10:00 pm',Friday:'5:00 pm - 11:00 pm',Saturday:'5:00 pm - 11:00 pm',Sunday:'5:00 pm - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Joshua Smookler’s two-year-old ramen shop serves one of the best tonkotsu broths around. Beyond ramen, Mu also offers some high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train.'},{name:'Brittany',date:'October 26, 2016',rating:4,comments:"Overall, I would definitely recommend this place if you enjoy thick curly noodles with a thick, intense broth.  If you don't there are still other options but I can't vouch for those."},{name:'Sally',date:'October 26, 2016',rating:4,comments:"One of the tastiest and most unique ramen places I've been to in NYC, but also the priciest. I think overall its worth the try. Not an everyday casual ramen shop though."}]},{id:10,name:'Casa Enrique',neighborhood:'Queens',photograph:'10.jpg',address:'5-48 49th Ave, Queens, NY 11101',latlng:{lat:40.743394,lng:-73.954235},cuisine_type:'Mexican',operating_hours:{Monday:'5:00 pm - 12:00 am',Tuesday:'5:00 pm - 12:00 am',Wednesday:'5:00 pm - 12:00 am',Thursday:'5:00 pm - 12:00 am',Friday:'5:00 pm - 12:00 am',Saturday:'11:00 am - 12:00 am',Sunday:'11:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"Head to this laid-back Long Island City restaurant for beef tongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."},{name:'Rob',date:'October 26, 2016',rating:5,comments:"The hype was real. Please go. Get the ceviche. And the tres leches. You're welcome"},{name:'Jason',date:'October 26, 2016',rating:4,comments:"For a Michelin star restaurant, it's fairly priced and the food is fairly good. Started with a strawberry margarita which was good in flavor but not much alcohol. Had the chicken enchiladas with salsa verde and it was really good. Great balance in flavor and a good portion. Extra tasty with their hot sauces. My wife had the lamb but it was a bit too salty for our taste. Although, it was cooked very well and fell off the bone. The highlight of the night was the tres leches cake. Probably the best I've ever had to be honest. Not too sweet and very milky. Overall, one of my top 3 favorite Mexican in NY."}]},{id:1,name:'Mission Chinese Food',neighborhood:'Manhattan',photograph:'1.jpg',address:'171 E Broadway, New York, NY 10002',latlng:{lat:40.713829,lng:-73.989667},cuisine_type:'Asian',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 12:00 am',Wednesday:'5:30 pm - 12:00 am',Thursday:'5:30 pm - 12:00 am',Friday:'5:30 pm - 12:00 am',Saturday:'12:00 pm - 4:00 pm, 5:30 pm - 12:00 am',Sunday:'12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank.'},{name:'Morgan',date:'October 26, 2016',rating:4,comments:'This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!'},{name:'Jason',date:'October 26, 2016',rating:3,comments:'I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff.'}]},{id:2,name:'Emily',neighborhood:'Brooklyn',photograph:'2.jpg',address:'919 Fulton St, Brooklyn, NY 11238',latlng:{lat:40.683555,lng:-73.966393},cuisine_type:'Pizza',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 11:00 pm',Wednesday:'5:30 pm - 11:00 pm',Thursday:'5:30 pm - 11:00 pm',Friday:'5:30 pm - 11:00 pm',Saturday:'5:00 pm - 11:30 pm',Sunday:'12:00 pm - 3:00 pm, 5:00 pm - 11:00 pm'},reviews:[{name:'Steph',date:'October 26, 2016',rating:4,comments:'Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long.'},{name:'Steve',date:'October 26, 2016',rating:4,comments:'This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city.'},{name:'Sam',date:'October 26, 2016',rating:5,comments:"5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time."}]},{id:3,name:'Kang Ho Dong Baekjeong',neighborhood:'Manhattan',photograph:'3.jpg',address:'1 E 32nd St, New York, NY 10016',latlng:{lat:40.747143,lng:-73.985414},cuisine_type:'Asian',operating_hours:{Monday:'11:30 am - 2:00 am',Tuesday:'11:30 am - 2:00 am',Wednesday:'11:30 am - 2:00 am',Thursday:'11:30 am - 2:00 am',Friday:'11:30 am - 6:00 am',Saturday:'11:30 am - 6:00 am',Sunday:'11:30 am - 2:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'The tables at this 32nd Street favorite are outfitted with grills for cooking short ribs, brisket, beef tongue, rib eye, and pork jowl. The banchan plates are uniformly good, and Deuki Hong’s menu also includes winning dishes like stir-fried squid noodles, kimchi stew, and seafood pancakes. If it’s available, make sure to order the kimchi and rice “lunchbox.” Baekjeong is a great place for large groups and birthday parties.'},{name:'ZS',date:'October 26, 2016',rating:5,comments:"I've been to Korea before and many other Korean BBQ places. We had the regular pork belly and a beef (forgot which cut) and a seafood tofu soup. Two meat and a soup was just prefect for the two of us. We could have done one meat and one soup. The portions of the meat are great! The beef was juicy, tender and so good. The sides were excellent. "},{name:'Emily',date:'October 26, 2016',rating:2,comments:"MEH. I've tried their Jersey location as well but Kang Ho Dong meat quality is severely decreasing. A Korean bbq place with whatever meat? I think NOT!"}]},{id:4,name:"Katz's Delicatessen",neighborhood:'Manhattan',photograph:'4.jpg',address:'205 E Houston St, New York, NY 10002',latlng:{lat:40.722216,lng:-73.987501},cuisine_type:'American',operating_hours:{Monday:'8:00 am - 10:30 pm',Tuesday:'8:00 am - 10:30 pm',Wednesday:'8:00 am - 10:30 pm',Thursday:'8:00 am - 2:30 am',Friday:'8:00 am - Sat',Saturday:'Open 24 hours',Sunday:'Sat - 10:30 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"In 127 years, little has changed at Katz's. It remains one of New York's — and the country's — essential Jewish delicatessens. Every inch of the massive Lower East Side space smells intensely of pastrami and rye loaves. The sandwiches are massive, so they are best when shared. Order at the counter, and don't forget to tip your slicer — your sandwich will be better for it."},{name:'Allen',date:'October 26, 2016',rating:5,comments:'If I lived in NY and got diabetes from eating here every single time I ate, I would do it over and over and over again just for that first bite. These guys know how to make a sandwich. The heart attack comes free of charge! Came by while I was visiting NYC. First pit-stop when I come back :)!'},{name:'David',date:'October 26, 2016',rating:2,comments:"Ok so four of us came. One more later who didn't order becauase it's so expensive and simple. Seriously, a bunch of meat albeit you can sample beforehand on rye/white/wheat bread. Cheese extra. Pickles free, you can just ask them at the pickup counter. But seriously 20 bucks gone for an non-flavored half sandwich. And a line that is long, especially if you want seating. I'm down to just take a quick look where Sally and Harry sat and leave to the other delis all around NYC. Oh and they accept Samsung pay."}]},{id:5,name:"Roberta's Pizza",neighborhood:'Brooklyn',photograph:'5.jpg',address:'261 Moore St, Brooklyn, NY 11206',latlng:{lat:40.705089,lng:-73.933585},cuisine_type:'Pizza',operating_hours:{Monday:'11:00 am - 12:00 am',Tuesday:'11:00 am - 12:00 am',Wednesday:'11:00 am - 12:00 am',Thursday:'11:00 am - 12:00 am',Friday:'11:00 am - 12:00 am',Saturday:'10:00 am - 12:00 am',Sunday:'10:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Roberta's is the epicenter of the modern Brooklyn food scene.The pizzas are fantastic, but the restaurant really flexes its muscles with the vegetable dishes. In addition to the pies, consider ordering the radishes, the romaine salad, the roasted beets, and some of the charcuterie."},{name:'Raymond',date:'October 26, 2016',rating:4,comments:"Roberta's, one of the better pizzas I have had in my life. Very trendy and hipsterish spot. Came here for lunch on a random weekday afternoon and when we arrived, there was a line forming already. The space is a bit cramped. You'll get to know your neighbors soon enough. The pizza is just delightful and delicious. It's a ncie plus that you get to see them firing up the pizzas in the corner. The major issue with Roberta's is the trek out to the Williamsburg/Bushwick."},{name:'Laurel',date:'October 26, 2016',rating:4,comments:"The pizza is fantastic, not THE best I've ever had, but would definitely go back since it has great food and great ambiance. Definitely worth going to. It has A LOT of hype in the New York food scene, and I question if it deserves all of it, but it's still a totally great spot to hit up when in the area!!"}]},{id:6,name:'Hometown BBQ',neighborhood:'Brooklyn',photograph:'6.jpg',address:'454 Van Brunt St, Brooklyn, NY 11231',latlng:{lat:40.674925,lng:-74.016162},cuisine_type:'American',operating_hours:{Monday:'Closed',Tuesday:'12:00 pm - 10:00 pm',Wednesday:'12:00 pm - 10:00 pm',Thursday:'12:00 pm - 10:00 pm',Friday:'12:00 pm - 11:00 pm',Saturday:'12:00 pm - 11:00 pm',Sunday:'12:00 pm - 9:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Barbecue aficionados agree that Billy Durney is cooking up some of the best Texas-style barbecue in the city. Straightforward classics like smoked brisket and baby back ribs are always a strong choice, but there are also options like pork belly tacos and a lamb belly banh mi. The space is sprawling in a way that feels like the real deal, and Durney himself can usually be found working the room, and keeping a watchful eye on the smoking meats. It's counter service only, and there's often a line, but for the scene and certainly for the meat, it's easily worth the trip to Red Hook."},{name:'Michelle',date:'October 26, 2016',rating:4,comments:'Overall, a great try of New York BBQ. The restaurant décor is rustic with a good amount of seats to sit and enjoy the meal. I definitely would love to come back and try that monster of a beef rib!'},{name:'Ai-Mei',date:'October 26, 2016',rating:4,comments:"mmmmmm, what a gem this is in bklyn! I loveeee how soft their brisket is here. Their pork tacos are to die for, their different variety of ribs and lastly, their lamb is not gamey at all. Super wallet friendly for the amount they give you. I highly recommend this spot- after eating here, you can definitely walk over for Steve's key lime pies."}]},{id:7,name:'Superiority Burger',neighborhood:'Manhattan',photograph:'7.jpg',address:'430 E 9th St, New York, NY 10009',latlng:{lat:40.727397,lng:-73.983645},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 10:00 pm',Tuesday:'Closed',Wednesday:'11:30 am - 10:00 pm',Thursday:'11:30 am - 10:00 pm',Friday:'11:30 am - 10:00 pm',Saturday:'11:30 am - 10:00 pm',Sunday:'11:30 am - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Brooks Headley’s tiny East Village cafe is so much more than a veggie burger spot — it's one of the best bang-for-your-buck restaurants in Lower Manhattan. Headley and his crew turn seasonal vegetables into delectable salads and riffs on American comfort food favorites. The specials menu changes daily, and the rest of the menu is constantly evolving. You can get a lot of food to eat here for under $15 per person."},{name:'Gabriel',date:'October 26, 2016',rating:5,comments:"I was turned on to this place following the glowing NYT review. Its near my area of the city so I figured why not go? Man they weren't kidding, Superiority Burger is probably the best vegetarian experience I've ever had!"},{name:'Shivi',date:'October 26, 2016',rating:4,comments:'Great flavors and very satisfying. Craving a sandwich, I stopped by on a Friday night with a vegetarian friend. Super small location with just a few seats inside. Ambiance is a bit industrial, good is definitely much more sophisticated than the look of the place! Ordered the superiority burger anda side of potato salad. The potato salad was very light and tasted clean ( less mayo, lots of dill and some cucumber) -- refreshing for a humid summer night! Sandwich was surprisingly delicious - it is very small ( funny allusion to a White Castle burger) but it packs a punch! Not only are there layers of flavors ( amazing sauces) but the party itself had a great texture Ahmed flavor-- well done and so wonderful! Will definitely stop by again for an overall amazing burger/sandwich. Staff was super nice and accommodating but not out of the way friendly.'}]},{id:8,name:'The Dutch',neighborhood:'Manhattan',photograph:'8.jpg',address:'131 Sullivan St, New York, NY 10012',latlng:{lat:40.726584,lng:-74.002082},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Tuesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Wednesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Thursday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Friday:'11:30 am - 3:00 pm, 5:30 pm - 11:30 pm',Saturday:'10:00 am - 3:00 pm, 5:30 pm - 11:30 pm',Sunday:'10:00 am - 3:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Over the last five years, The Dutch has turned into the quintessential American restaurant that chef Andrew Carmellini and partners Josh Pickard and Luke Ostrom sought to evoke when it first opened. It’s a great choice when you’re craving a steak, a burger, or oysters, and the menu always includes plentiful seafood options as well as pastas. The Dutch is now an indelible part of the Soho landscape.'},{name:'Loren',date:'October 26, 2016',rating:4,comments:'I randomly came here on a Saturday night. I was pleasantly surprised with the food and the service. We had the calamari and the ceviche with avocado, and then the catfish. Oh! Then we had the banana soufflé for dessert with ice cream. It was all delicious and well put together. Would love to eat here again.'},{name:'Lori',date:'October 26, 2016',rating:4,comments:"Aside from the slightly claustrophobic dining area and the fact that you may have difficulty hearing your dining companion, I'd return to The Dutch without hesitation. The food is surprisingly well-executed and conceived, and our dinner service flowed smoothly without a hitch. Just make sure to get a reservation in advance, as I'm sure more than just a few other people will have the same idea."}]},{id:9,name:'Mu Ramen',neighborhood:'Queens',photograph:'9.jpg',address:'1209 Jackson Ave, Queens, NY 11101',latlng:{lat:40.743797,lng:-73.950652},cuisine_type:'Asian',operating_hours:{Monday:'5:00 pm - 10:00 pm',Tuesday:'5:00 pm - 10:00 pm',Wednesday:'5:00 pm - 10:00 pm',Thursday:'5:00 pm - 10:00 pm',Friday:'5:00 pm - 11:00 pm',Saturday:'5:00 pm - 11:00 pm',Sunday:'5:00 pm - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Joshua Smookler’s two-year-old ramen shop serves one of the best tonkotsu broths around. Beyond ramen, Mu also offers some high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train.'},{name:'Brittany',date:'October 26, 2016',rating:4,comments:"Overall, I would definitely recommend this place if you enjoy thick curly noodles with a thick, intense broth.  If you don't there are still other options but I can't vouch for those."},{name:'Sally',date:'October 26, 2016',rating:4,comments:"One of the tastiest and most unique ramen places I've been to in NYC, but also the priciest. I think overall its worth the try. Not an everyday casual ramen shop though."}]},{id:10,name:'Casa Enrique',neighborhood:'Queens',photograph:'10.jpg',address:'5-48 49th Ave, Queens, NY 11101',latlng:{lat:40.743394,lng:-73.954235},cuisine_type:'Mexican',operating_hours:{Monday:'5:00 pm - 12:00 am',Tuesday:'5:00 pm - 12:00 am',Wednesday:'5:00 pm - 12:00 am',Thursday:'5:00 pm - 12:00 am',Friday:'5:00 pm - 12:00 am',Saturday:'11:00 am - 12:00 am',Sunday:'11:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"Head to this laid-back Long Island City restaurant for beef tongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."},{name:'Rob',date:'October 26, 2016',rating:5,comments:"The hype was real. Please go. Get the ceviche. And the tres leches. You're welcome"},{name:'Jason',date:'October 26, 2016',rating:4,comments:"For a Michelin star restaurant, it's fairly priced and the food is fairly good. Started with a strawberry margarita which was good in flavor but not much alcohol. Had the chicken enchiladas with salsa verde and it was really good. Great balance in flavor and a good portion. Extra tasty with their hot sauces. My wife had the lamb but it was a bit too salty for our taste. Although, it was cooked very well and fell off the bone. The highlight of the night was the tres leches cake. Probably the best I've ever had to be honest. Not too sweet and very milky. Overall, one of my top 3 favorite Mexican in NY."}]},{id:1,name:'Mission Chinese Food',neighborhood:'Manhattan',photograph:'1.jpg',address:'171 E Broadway, New York, NY 10002',latlng:{lat:40.713829,lng:-73.989667},cuisine_type:'Asian',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 12:00 am',Wednesday:'5:30 pm - 12:00 am',Thursday:'5:30 pm - 12:00 am',Friday:'5:30 pm - 12:00 am',Saturday:'12:00 pm - 4:00 pm, 5:30 pm - 12:00 am',Sunday:'12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank.'},{name:'Morgan',date:'October 26, 2016',rating:4,comments:'This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!'},{name:'Jason',date:'October 26, 2016',rating:3,comments:'I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff.'}]},{id:2,name:'Emily',neighborhood:'Brooklyn',photograph:'2.jpg',address:'919 Fulton St, Brooklyn, NY 11238',latlng:{lat:40.683555,lng:-73.966393},cuisine_type:'Pizza',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 11:00 pm',Wednesday:'5:30 pm - 11:00 pm',Thursday:'5:30 pm - 11:00 pm',Friday:'5:30 pm - 11:00 pm',Saturday:'5:00 pm - 11:30 pm',Sunday:'12:00 pm - 3:00 pm, 5:00 pm - 11:00 pm'},reviews:[{name:'Steph',date:'October 26, 2016',rating:4,comments:'Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long.'},{name:'Steve',date:'October 26, 2016',rating:4,comments:'This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city.'},{name:'Sam',date:'October 26, 2016',rating:5,comments:"5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time."}]},{id:3,name:'Kang Ho Dong Baekjeong',neighborhood:'Manhattan',photograph:'3.jpg',address:'1 E 32nd St, New York, NY 10016',latlng:{lat:40.747143,lng:-73.985414},cuisine_type:'Asian',operating_hours:{Monday:'11:30 am - 2:00 am',Tuesday:'11:30 am - 2:00 am',Wednesday:'11:30 am - 2:00 am',Thursday:'11:30 am - 2:00 am',Friday:'11:30 am - 6:00 am',Saturday:'11:30 am - 6:00 am',Sunday:'11:30 am - 2:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'The tables at this 32nd Street favorite are outfitted with grills for cooking short ribs, brisket, beef tongue, rib eye, and pork jowl. The banchan plates are uniformly good, and Deuki Hong’s menu also includes winning dishes like stir-fried squid noodles, kimchi stew, and seafood pancakes. If it’s available, make sure to order the kimchi and rice “lunchbox.” Baekjeong is a great place for large groups and birthday parties.'},{name:'ZS',date:'October 26, 2016',rating:5,comments:"I've been to Korea before and many other Korean BBQ places. We had the regular pork belly and a beef (forgot which cut) and a seafood tofu soup. Two meat and a soup was just prefect for the two of us. We could have done one meat and one soup. The portions of the meat are great! The beef was juicy, tender and so good. The sides were excellent. "},{name:'Emily',date:'October 26, 2016',rating:2,comments:"MEH. I've tried their Jersey location as well but Kang Ho Dong meat quality is severely decreasing. A Korean bbq place with whatever meat? I think NOT!"}]},{id:4,name:"Katz's Delicatessen",neighborhood:'Manhattan',photograph:'4.jpg',address:'205 E Houston St, New York, NY 10002',latlng:{lat:40.722216,lng:-73.987501},cuisine_type:'American',operating_hours:{Monday:'8:00 am - 10:30 pm',Tuesday:'8:00 am - 10:30 pm',Wednesday:'8:00 am - 10:30 pm',Thursday:'8:00 am - 2:30 am',Friday:'8:00 am - Sat',Saturday:'Open 24 hours',Sunday:'Sat - 10:30 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"In 127 years, little has changed at Katz's. It remains one of New York's — and the country's — essential Jewish delicatessens. Every inch of the massive Lower East Side space smells intensely of pastrami and rye loaves. The sandwiches are massive, so they are best when shared. Order at the counter, and don't forget to tip your slicer — your sandwich will be better for it."},{name:'Allen',date:'October 26, 2016',rating:5,comments:'If I lived in NY and got diabetes from eating here every single time I ate, I would do it over and over and over again just for that first bite. These guys know how to make a sandwich. The heart attack comes free of charge! Came by while I was visiting NYC. First pit-stop when I come back :)!'},{name:'David',date:'October 26, 2016',rating:2,comments:"Ok so four of us came. One more later who didn't order becauase it's so expensive and simple. Seriously, a bunch of meat albeit you can sample beforehand on rye/white/wheat bread. Cheese extra. Pickles free, you can just ask them at the pickup counter. But seriously 20 bucks gone for an non-flavored half sandwich. And a line that is long, especially if you want seating. I'm down to just take a quick look where Sally and Harry sat and leave to the other delis all around NYC. Oh and they accept Samsung pay."}]},{id:5,name:"Roberta's Pizza",neighborhood:'Brooklyn',photograph:'5.jpg',address:'261 Moore St, Brooklyn, NY 11206',latlng:{lat:40.705089,lng:-73.933585},cuisine_type:'Pizza',operating_hours:{Monday:'11:00 am - 12:00 am',Tuesday:'11:00 am - 12:00 am',Wednesday:'11:00 am - 12:00 am',Thursday:'11:00 am - 12:00 am',Friday:'11:00 am - 12:00 am',Saturday:'10:00 am - 12:00 am',Sunday:'10:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Roberta's is the epicenter of the modern Brooklyn food scene.The pizzas are fantastic, but the restaurant really flexes its muscles with the vegetable dishes. In addition to the pies, consider ordering the radishes, the romaine salad, the roasted beets, and some of the charcuterie."},{name:'Raymond',date:'October 26, 2016',rating:4,comments:"Roberta's, one of the better pizzas I have had in my life. Very trendy and hipsterish spot. Came here for lunch on a random weekday afternoon and when we arrived, there was a line forming already. The space is a bit cramped. You'll get to know your neighbors soon enough. The pizza is just delightful and delicious. It's a ncie plus that you get to see them firing up the pizzas in the corner. The major issue with Roberta's is the trek out to the Williamsburg/Bushwick."},{name:'Laurel',date:'October 26, 2016',rating:4,comments:"The pizza is fantastic, not THE best I've ever had, but would definitely go back since it has great food and great ambiance. Definitely worth going to. It has A LOT of hype in the New York food scene, and I question if it deserves all of it, but it's still a totally great spot to hit up when in the area!!"}]},{id:6,name:'Hometown BBQ',neighborhood:'Brooklyn',photograph:'6.jpg',address:'454 Van Brunt St, Brooklyn, NY 11231',latlng:{lat:40.674925,lng:-74.016162},cuisine_type:'American',operating_hours:{Monday:'Closed',Tuesday:'12:00 pm - 10:00 pm',Wednesday:'12:00 pm - 10:00 pm',Thursday:'12:00 pm - 10:00 pm',Friday:'12:00 pm - 11:00 pm',Saturday:'12:00 pm - 11:00 pm',Sunday:'12:00 pm - 9:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Barbecue aficionados agree that Billy Durney is cooking up some of the best Texas-style barbecue in the city. Straightforward classics like smoked brisket and baby back ribs are always a strong choice, but there are also options like pork belly tacos and a lamb belly banh mi. The space is sprawling in a way that feels like the real deal, and Durney himself can usually be found working the room, and keeping a watchful eye on the smoking meats. It's counter service only, and there's often a line, but for the scene and certainly for the meat, it's easily worth the trip to Red Hook."},{name:'Michelle',date:'October 26, 2016',rating:4,comments:'Overall, a great try of New York BBQ. The restaurant décor is rustic with a good amount of seats to sit and enjoy the meal. I definitely would love to come back and try that monster of a beef rib!'},{name:'Ai-Mei',date:'October 26, 2016',rating:4,comments:"mmmmmm, what a gem this is in bklyn! I loveeee how soft their brisket is here. Their pork tacos are to die for, their different variety of ribs and lastly, their lamb is not gamey at all. Super wallet friendly for the amount they give you. I highly recommend this spot- after eating here, you can definitely walk over for Steve's key lime pies."}]},{id:7,name:'Superiority Burger',neighborhood:'Manhattan',photograph:'7.jpg',address:'430 E 9th St, New York, NY 10009',latlng:{lat:40.727397,lng:-73.983645},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 10:00 pm',Tuesday:'Closed',Wednesday:'11:30 am - 10:00 pm',Thursday:'11:30 am - 10:00 pm',Friday:'11:30 am - 10:00 pm',Saturday:'11:30 am - 10:00 pm',Sunday:'11:30 am - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Brooks Headley’s tiny East Village cafe is so much more than a veggie burger spot — it's one of the best bang-for-your-buck restaurants in Lower Manhattan. Headley and his crew turn seasonal vegetables into delectable salads and riffs on American comfort food favorites. The specials menu changes daily, and the rest of the menu is constantly evolving. You can get a lot of food to eat here for under $15 per person."},{name:'Gabriel',date:'October 26, 2016',rating:5,comments:"I was turned on to this place following the glowing NYT review. Its near my area of the city so I figured why not go? Man they weren't kidding, Superiority Burger is probably the best vegetarian experience I've ever had!"},{name:'Shivi',date:'October 26, 2016',rating:4,comments:'Great flavors and very satisfying. Craving a sandwich, I stopped by on a Friday night with a vegetarian friend. Super small location with just a few seats inside. Ambiance is a bit industrial, good is definitely much more sophisticated than the look of the place! Ordered the superiority burger anda side of potato salad. The potato salad was very light and tasted clean ( less mayo, lots of dill and some cucumber) -- refreshing for a humid summer night! Sandwich was surprisingly delicious - it is very small ( funny allusion to a White Castle burger) but it packs a punch! Not only are there layers of flavors ( amazing sauces) but the party itself had a great texture Ahmed flavor-- well done and so wonderful! Will definitely stop by again for an overall amazing burger/sandwich. Staff was super nice and accommodating but not out of the way friendly.'}]},{id:8,name:'The Dutch',neighborhood:'Manhattan',photograph:'8.jpg',address:'131 Sullivan St, New York, NY 10012',latlng:{lat:40.726584,lng:-74.002082},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Tuesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Wednesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Thursday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Friday:'11:30 am - 3:00 pm, 5:30 pm - 11:30 pm',Saturday:'10:00 am - 3:00 pm, 5:30 pm - 11:30 pm',Sunday:'10:00 am - 3:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Over the last five years, The Dutch has turned into the quintessential American restaurant that chef Andrew Carmellini and partners Josh Pickard and Luke Ostrom sought to evoke when it first opened. It’s a great choice when you’re craving a steak, a burger, or oysters, and the menu always includes plentiful seafood options as well as pastas. The Dutch is now an indelible part of the Soho landscape.'},{name:'Loren',date:'October 26, 2016',rating:4,comments:'I randomly came here on a Saturday night. I was pleasantly surprised with the food and the service. We had the calamari and the ceviche with avocado, and then the catfish. Oh! Then we had the banana soufflé for dessert with ice cream. It was all delicious and well put together. Would love to eat here again.'},{name:'Lori',date:'October 26, 2016',rating:4,comments:"Aside from the slightly claustrophobic dining area and the fact that you may have difficulty hearing your dining companion, I'd return to The Dutch without hesitation. The food is surprisingly well-executed and conceived, and our dinner service flowed smoothly without a hitch. Just make sure to get a reservation in advance, as I'm sure more than just a few other people will have the same idea."}]},{id:9,name:'Mu Ramen',neighborhood:'Queens',photograph:'9.jpg',address:'1209 Jackson Ave, Queens, NY 11101',latlng:{lat:40.743797,lng:-73.950652},cuisine_type:'Asian',operating_hours:{Monday:'5:00 pm - 10:00 pm',Tuesday:'5:00 pm - 10:00 pm',Wednesday:'5:00 pm - 10:00 pm',Thursday:'5:00 pm - 10:00 pm',Friday:'5:00 pm - 11:00 pm',Saturday:'5:00 pm - 11:00 pm',Sunday:'5:00 pm - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Joshua Smookler’s two-year-old ramen shop serves one of the best tonkotsu broths around. Beyond ramen, Mu also offers some high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train.'},{name:'Brittany',date:'October 26, 2016',rating:4,comments:"Overall, I would definitely recommend this place if you enjoy thick curly noodles with a thick, intense broth.  If you don't there are still other options but I can't vouch for those."},{name:'Sally',date:'October 26, 2016',rating:4,comments:"One of the tastiest and most unique ramen places I've been to in NYC, but also the priciest. I think overall its worth the try. Not an everyday casual ramen shop though."}]},{id:10,name:'Casa Enrique',neighborhood:'Queens',photograph:'10.jpg',address:'5-48 49th Ave, Queens, NY 11101',latlng:{lat:40.743394,lng:-73.954235},cuisine_type:'Mexican',operating_hours:{Monday:'5:00 pm - 12:00 am',Tuesday:'5:00 pm - 12:00 am',Wednesday:'5:00 pm - 12:00 am',Thursday:'5:00 pm - 12:00 am',Friday:'5:00 pm - 12:00 am',Saturday:'11:00 am - 12:00 am',Sunday:'11:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"Head to this laid-back Long Island City restaurant for beef tongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."},{name:'Rob',date:'October 26, 2016',rating:5,comments:"The hype was real. Please go. Get the ceviche. And the tres leches. You're welcome"},{name:'Jason',date:'October 26, 2016',rating:4,comments:"For a Michelin star restaurant, it's fairly priced and the food is fairly good. Started with a strawberry margarita which was good in flavor but not much alcohol. Had the chicken enchiladas with salsa verde and it was really good. Great balance in flavor and a good portion. Extra tasty with their hot sauces. My wife had the lamb but it was a bit too salty for our taste. Although, it was cooked very well and fell off the bone. The highlight of the night was the tres leches cake. Probably the best I've ever had to be honest. Not too sweet and very milky. Overall, one of my top 3 favorite Mexican in NY."}]},{id:1,name:'Mission Chinese Food',neighborhood:'Manhattan',photograph:'1.jpg',address:'171 E Broadway, New York, NY 10002',latlng:{lat:40.713829,lng:-73.989667},cuisine_type:'Asian',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 12:00 am',Wednesday:'5:30 pm - 12:00 am',Thursday:'5:30 pm - 12:00 am',Friday:'5:30 pm - 12:00 am',Saturday:'12:00 pm - 4:00 pm, 5:30 pm - 12:00 am',Sunday:'12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank.'},{name:'Morgan',date:'October 26, 2016',rating:4,comments:'This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!'},{name:'Jason',date:'October 26, 2016',rating:3,comments:'I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff.'}]},{id:2,name:'Emily',neighborhood:'Brooklyn',photograph:'2.jpg',address:'919 Fulton St, Brooklyn, NY 11238',latlng:{lat:40.683555,lng:-73.966393},cuisine_type:'Pizza',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 11:00 pm',Wednesday:'5:30 pm - 11:00 pm',Thursday:'5:30 pm - 11:00 pm',Friday:'5:30 pm - 11:00 pm',Saturday:'5:00 pm - 11:30 pm',Sunday:'12:00 pm - 3:00 pm, 5:00 pm - 11:00 pm'},reviews:[{name:'Steph',date:'October 26, 2016',rating:4,comments:'Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long.'},{name:'Steve',date:'October 26, 2016',rating:4,comments:'This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city.'},{name:'Sam',date:'October 26, 2016',rating:5,comments:"5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time."}]},{id:3,name:'Kang Ho Dong Baekjeong',neighborhood:'Manhattan',photograph:'3.jpg',address:'1 E 32nd St, New York, NY 10016',latlng:{lat:40.747143,lng:-73.985414},cuisine_type:'Asian',operating_hours:{Monday:'11:30 am - 2:00 am',Tuesday:'11:30 am - 2:00 am',Wednesday:'11:30 am - 2:00 am',Thursday:'11:30 am - 2:00 am',Friday:'11:30 am - 6:00 am',Saturday:'11:30 am - 6:00 am',Sunday:'11:30 am - 2:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'The tables at this 32nd Street favorite are outfitted with grills for cooking short ribs, brisket, beef tongue, rib eye, and pork jowl. The banchan plates are uniformly good, and Deuki Hong’s menu also includes winning dishes like stir-fried squid noodles, kimchi stew, and seafood pancakes. If it’s available, make sure to order the kimchi and rice “lunchbox.” Baekjeong is a great place for large groups and birthday parties.'},{name:'ZS',date:'October 26, 2016',rating:5,comments:"I've been to Korea before and many other Korean BBQ places. We had the regular pork belly and a beef (forgot which cut) and a seafood tofu soup. Two meat and a soup was just prefect for the two of us. We could have done one meat and one soup. The portions of the meat are great! The beef was juicy, tender and so good. The sides were excellent. "},{name:'Emily',date:'October 26, 2016',rating:2,comments:"MEH. I've tried their Jersey location as well but Kang Ho Dong meat quality is severely decreasing. A Korean bbq place with whatever meat? I think NOT!"}]},{id:4,name:"Katz's Delicatessen",neighborhood:'Manhattan',photograph:'4.jpg',address:'205 E Houston St, New York, NY 10002',latlng:{lat:40.722216,lng:-73.987501},cuisine_type:'American',operating_hours:{Monday:'8:00 am - 10:30 pm',Tuesday:'8:00 am - 10:30 pm',Wednesday:'8:00 am - 10:30 pm',Thursday:'8:00 am - 2:30 am',Friday:'8:00 am - Sat',Saturday:'Open 24 hours',Sunday:'Sat - 10:30 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"In 127 years, little has changed at Katz's. It remains one of New York's — and the country's — essential Jewish delicatessens. Every inch of the massive Lower East Side space smells intensely of pastrami and rye loaves. The sandwiches are massive, so they are best when shared. Order at the counter, and don't forget to tip your slicer — your sandwich will be better for it."},{name:'Allen',date:'October 26, 2016',rating:5,comments:'If I lived in NY and got diabetes from eating here every single time I ate, I would do it over and over and over again just for that first bite. These guys know how to make a sandwich. The heart attack comes free of charge! Came by while I was visiting NYC. First pit-stop when I come back :)!'},{name:'David',date:'October 26, 2016',rating:2,comments:"Ok so four of us came. One more later who didn't order becauase it's so expensive and simple. Seriously, a bunch of meat albeit you can sample beforehand on rye/white/wheat bread. Cheese extra. Pickles free, you can just ask them at the pickup counter. But seriously 20 bucks gone for an non-flavored half sandwich. And a line that is long, especially if you want seating. I'm down to just take a quick look where Sally and Harry sat and leave to the other delis all around NYC. Oh and they accept Samsung pay."}]},{id:5,name:"Roberta's Pizza",neighborhood:'Brooklyn',photograph:'5.jpg',address:'261 Moore St, Brooklyn, NY 11206',latlng:{lat:40.705089,lng:-73.933585},cuisine_type:'Pizza',operating_hours:{Monday:'11:00 am - 12:00 am',Tuesday:'11:00 am - 12:00 am',Wednesday:'11:00 am - 12:00 am',Thursday:'11:00 am - 12:00 am',Friday:'11:00 am - 12:00 am',Saturday:'10:00 am - 12:00 am',Sunday:'10:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Roberta's is the epicenter of the modern Brooklyn food scene.The pizzas are fantastic, but the restaurant really flexes its muscles with the vegetable dishes. In addition to the pies, consider ordering the radishes, the romaine salad, the roasted beets, and some of the charcuterie."},{name:'Raymond',date:'October 26, 2016',rating:4,comments:"Roberta's, one of the better pizzas I have had in my life. Very trendy and hipsterish spot. Came here for lunch on a random weekday afternoon and when we arrived, there was a line forming already. The space is a bit cramped. You'll get to know your neighbors soon enough. The pizza is just delightful and delicious. It's a ncie plus that you get to see them firing up the pizzas in the corner. The major issue with Roberta's is the trek out to the Williamsburg/Bushwick."},{name:'Laurel',date:'October 26, 2016',rating:4,comments:"The pizza is fantastic, not THE best I've ever had, but would definitely go back since it has great food and great ambiance. Definitely worth going to. It has A LOT of hype in the New York food scene, and I question if it deserves all of it, but it's still a totally great spot to hit up when in the area!!"}]},{id:6,name:'Hometown BBQ',neighborhood:'Brooklyn',photograph:'6.jpg',address:'454 Van Brunt St, Brooklyn, NY 11231',latlng:{lat:40.674925,lng:-74.016162},cuisine_type:'American',operating_hours:{Monday:'Closed',Tuesday:'12:00 pm - 10:00 pm',Wednesday:'12:00 pm - 10:00 pm',Thursday:'12:00 pm - 10:00 pm',Friday:'12:00 pm - 11:00 pm',Saturday:'12:00 pm - 11:00 pm',Sunday:'12:00 pm - 9:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Barbecue aficionados agree that Billy Durney is cooking up some of the best Texas-style barbecue in the city. Straightforward classics like smoked brisket and baby back ribs are always a strong choice, but there are also options like pork belly tacos and a lamb belly banh mi. The space is sprawling in a way that feels like the real deal, and Durney himself can usually be found working the room, and keeping a watchful eye on the smoking meats. It's counter service only, and there's often a line, but for the scene and certainly for the meat, it's easily worth the trip to Red Hook."},{name:'Michelle',date:'October 26, 2016',rating:4,comments:'Overall, a great try of New York BBQ. The restaurant décor is rustic with a good amount of seats to sit and enjoy the meal. I definitely would love to come back and try that monster of a beef rib!'},{name:'Ai-Mei',date:'October 26, 2016',rating:4,comments:"mmmmmm, what a gem this is in bklyn! I loveeee how soft their brisket is here. Their pork tacos are to die for, their different variety of ribs and lastly, their lamb is not gamey at all. Super wallet friendly for the amount they give you. I highly recommend this spot- after eating here, you can definitely walk over for Steve's key lime pies."}]},{id:7,name:'Superiority Burger',neighborhood:'Manhattan',photograph:'7.jpg',address:'430 E 9th St, New York, NY 10009',latlng:{lat:40.727397,lng:-73.983645},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 10:00 pm',Tuesday:'Closed',Wednesday:'11:30 am - 10:00 pm',Thursday:'11:30 am - 10:00 pm',Friday:'11:30 am - 10:00 pm',Saturday:'11:30 am - 10:00 pm',Sunday:'11:30 am - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Brooks Headley’s tiny East Village cafe is so much more than a veggie burger spot — it's one of the best bang-for-your-buck restaurants in Lower Manhattan. Headley and his crew turn seasonal vegetables into delectable salads and riffs on American comfort food favorites. The specials menu changes daily, and the rest of the menu is constantly evolving. You can get a lot of food to eat here for under $15 per person."},{name:'Gabriel',date:'October 26, 2016',rating:5,comments:"I was turned on to this place following the glowing NYT review. Its near my area of the city so I figured why not go? Man they weren't kidding, Superiority Burger is probably the best vegetarian experience I've ever had!"},{name:'Shivi',date:'October 26, 2016',rating:4,comments:'Great flavors and very satisfying. Craving a sandwich, I stopped by on a Friday night with a vegetarian friend. Super small location with just a few seats inside. Ambiance is a bit industrial, good is definitely much more sophisticated than the look of the place! Ordered the superiority burger anda side of potato salad. The potato salad was very light and tasted clean ( less mayo, lots of dill and some cucumber) -- refreshing for a humid summer night! Sandwich was surprisingly delicious - it is very small ( funny allusion to a White Castle burger) but it packs a punch! Not only are there layers of flavors ( amazing sauces) but the party itself had a great texture Ahmed flavor-- well done and so wonderful! Will definitely stop by again for an overall amazing burger/sandwich. Staff was super nice and accommodating but not out of the way friendly.'}]},{id:8,name:'The Dutch',neighborhood:'Manhattan',photograph:'8.jpg',address:'131 Sullivan St, New York, NY 10012',latlng:{lat:40.726584,lng:-74.002082},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Tuesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Wednesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Thursday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Friday:'11:30 am - 3:00 pm, 5:30 pm - 11:30 pm',Saturday:'10:00 am - 3:00 pm, 5:30 pm - 11:30 pm',Sunday:'10:00 am - 3:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Over the last five years, The Dutch has turned into the quintessential American restaurant that chef Andrew Carmellini and partners Josh Pickard and Luke Ostrom sought to evoke when it first opened. It’s a great choice when you’re craving a steak, a burger, or oysters, and the menu always includes plentiful seafood options as well as pastas. The Dutch is now an indelible part of the Soho landscape.'},{name:'Loren',date:'October 26, 2016',rating:4,comments:'I randomly came here on a Saturday night. I was pleasantly surprised with the food and the service. We had the calamari and the ceviche with avocado, and then the catfish. Oh! Then we had the banana soufflé for dessert with ice cream. It was all delicious and well put together. Would love to eat here again.'},{name:'Lori',date:'October 26, 2016',rating:4,comments:"Aside from the slightly claustrophobic dining area and the fact that you may have difficulty hearing your dining companion, I'd return to The Dutch without hesitation. The food is surprisingly well-executed and conceived, and our dinner service flowed smoothly without a hitch. Just make sure to get a reservation in advance, as I'm sure more than just a few other people will have the same idea."}]},{id:9,name:'Mu Ramen',neighborhood:'Queens',photograph:'9.jpg',address:'1209 Jackson Ave, Queens, NY 11101',latlng:{lat:40.743797,lng:-73.950652},cuisine_type:'Asian',operating_hours:{Monday:'5:00 pm - 10:00 pm',Tuesday:'5:00 pm - 10:00 pm',Wednesday:'5:00 pm - 10:00 pm',Thursday:'5:00 pm - 10:00 pm',Friday:'5:00 pm - 11:00 pm',Saturday:'5:00 pm - 11:00 pm',Sunday:'5:00 pm - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Joshua Smookler’s two-year-old ramen shop serves one of the best tonkotsu broths around. Beyond ramen, Mu also offers some high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train.'},{name:'Brittany',date:'October 26, 2016',rating:4,comments:"Overall, I would definitely recommend this place if you enjoy thick curly noodles with a thick, intense broth.  If you don't there are still other options but I can't vouch for those."},{name:'Sally',date:'October 26, 2016',rating:4,comments:"One of the tastiest and most unique ramen places I've been to in NYC, but also the priciest. I think overall its worth the try. Not an everyday casual ramen shop though."}]},{id:10,name:'Casa Enrique',neighborhood:'Queens',photograph:'10.jpg',address:'5-48 49th Ave, Queens, NY 11101',latlng:{lat:40.743394,lng:-73.954235},cuisine_type:'Mexican',operating_hours:{Monday:'5:00 pm - 12:00 am',Tuesday:'5:00 pm - 12:00 am',Wednesday:'5:00 pm - 12:00 am',Thursday:'5:00 pm - 12:00 am',Friday:'5:00 pm - 12:00 am',Saturday:'11:00 am - 12:00 am',Sunday:'11:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"Head to this laid-back Long Island City restaurant for beef tongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."},{name:'Rob',date:'October 26, 2016',rating:5,comments:"The hype was real. Please go. Get the ceviche. And the tres leches. You're welcome"},{name:'Jason',date:'October 26, 2016',rating:4,comments:"For a Michelin star restaurant, it's fairly priced and the food is fairly good. Started with a strawberry margarita which was good in flavor but not much alcohol. Had the chicken enchiladas with salsa verde and it was really good. Great balance in flavor and a good portion. Extra tasty with their hot sauces. My wife had the lamb but it was a bit too salty for our taste. Although, it was cooked very well and fell off the bone. The highlight of the night was the tres leches cake. Probably the best I've ever had to be honest. Not too sweet and very milky. Overall, one of my top 3 favorite Mexican in NY."}]},{id:1,name:'Mission Chinese Food',neighborhood:'Manhattan',photograph:'1.jpg',address:'171 E Broadway, New York, NY 10002',latlng:{lat:40.713829,lng:-73.989667},cuisine_type:'Asian',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 12:00 am',Wednesday:'5:30 pm - 12:00 am',Thursday:'5:30 pm - 12:00 am',Friday:'5:30 pm - 12:00 am',Saturday:'12:00 pm - 4:00 pm, 5:30 pm - 12:00 am',Sunday:'12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank.'},{name:'Morgan',date:'October 26, 2016',rating:4,comments:'This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!'},{name:'Jason',date:'October 26, 2016',rating:3,comments:'I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff.'}]},{id:2,name:'Emily',neighborhood:'Brooklyn',photograph:'2.jpg',address:'919 Fulton St, Brooklyn, NY 11238',latlng:{lat:40.683555,lng:-73.966393},cuisine_type:'Pizza',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 11:00 pm',Wednesday:'5:30 pm - 11:00 pm',Thursday:'5:30 pm - 11:00 pm',Friday:'5:30 pm - 11:00 pm',Saturday:'5:00 pm - 11:30 pm',Sunday:'12:00 pm - 3:00 pm, 5:00 pm - 11:00 pm'},reviews:[{name:'Steph',date:'October 26, 2016',rating:4,comments:'Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long.'},{name:'Steve',date:'October 26, 2016',rating:4,comments:'This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city.'},{name:'Sam',date:'October 26, 2016',rating:5,comments:"5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time."}]},{id:3,name:'Kang Ho Dong Baekjeong',neighborhood:'Manhattan',photograph:'3.jpg',address:'1 E 32nd St, New York, NY 10016',latlng:{lat:40.747143,lng:-73.985414},cuisine_type:'Asian',operating_hours:{Monday:'11:30 am - 2:00 am',Tuesday:'11:30 am - 2:00 am',Wednesday:'11:30 am - 2:00 am',Thursday:'11:30 am - 2:00 am',Friday:'11:30 am - 6:00 am',Saturday:'11:30 am - 6:00 am',Sunday:'11:30 am - 2:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'The tables at this 32nd Street favorite are outfitted with grills for cooking short ribs, brisket, beef tongue, rib eye, and pork jowl. The banchan plates are uniformly good, and Deuki Hong’s menu also includes winning dishes like stir-fried squid noodles, kimchi stew, and seafood pancakes. If it’s available, make sure to order the kimchi and rice “lunchbox.” Baekjeong is a great place for large groups and birthday parties.'},{name:'ZS',date:'October 26, 2016',rating:5,comments:"I've been to Korea before and many other Korean BBQ places. We had the regular pork belly and a beef (forgot which cut) and a seafood tofu soup. Two meat and a soup was just prefect for the two of us. We could have done one meat and one soup. The portions of the meat are great! The beef was juicy, tender and so good. The sides were excellent. "},{name:'Emily',date:'October 26, 2016',rating:2,comments:"MEH. I've tried their Jersey location as well but Kang Ho Dong meat quality is severely decreasing. A Korean bbq place with whatever meat? I think NOT!"}]},{id:4,name:"Katz's Delicatessen",neighborhood:'Manhattan',photograph:'4.jpg',address:'205 E Houston St, New York, NY 10002',latlng:{lat:40.722216,lng:-73.987501},cuisine_type:'American',operating_hours:{Monday:'8:00 am - 10:30 pm',Tuesday:'8:00 am - 10:30 pm',Wednesday:'8:00 am - 10:30 pm',Thursday:'8:00 am - 2:30 am',Friday:'8:00 am - Sat',Saturday:'Open 24 hours',Sunday:'Sat - 10:30 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"In 127 years, little has changed at Katz's. It remains one of New York's — and the country's — essential Jewish delicatessens. Every inch of the massive Lower East Side space smells intensely of pastrami and rye loaves. The sandwiches are massive, so they are best when shared. Order at the counter, and don't forget to tip your slicer — your sandwich will be better for it."},{name:'Allen',date:'October 26, 2016',rating:5,comments:'If I lived in NY and got diabetes from eating here every single time I ate, I would do it over and over and over again just for that first bite. These guys know how to make a sandwich. The heart attack comes free of charge! Came by while I was visiting NYC. First pit-stop when I come back :)!'},{name:'David',date:'October 26, 2016',rating:2,comments:"Ok so four of us came. One more later who didn't order becauase it's so expensive and simple. Seriously, a bunch of meat albeit you can sample beforehand on rye/white/wheat bread. Cheese extra. Pickles free, you can just ask them at the pickup counter. But seriously 20 bucks gone for an non-flavored half sandwich. And a line that is long, especially if you want seating. I'm down to just take a quick look where Sally and Harry sat and leave to the other delis all around NYC. Oh and they accept Samsung pay."}]},{id:5,name:"Roberta's Pizza",neighborhood:'Brooklyn',photograph:'5.jpg',address:'261 Moore St, Brooklyn, NY 11206',latlng:{lat:40.705089,lng:-73.933585},cuisine_type:'Pizza',operating_hours:{Monday:'11:00 am - 12:00 am',Tuesday:'11:00 am - 12:00 am',Wednesday:'11:00 am - 12:00 am',Thursday:'11:00 am - 12:00 am',Friday:'11:00 am - 12:00 am',Saturday:'10:00 am - 12:00 am',Sunday:'10:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Roberta's is the epicenter of the modern Brooklyn food scene.The pizzas are fantastic, but the restaurant really flexes its muscles with the vegetable dishes. In addition to the pies, consider ordering the radishes, the romaine salad, the roasted beets, and some of the charcuterie."},{name:'Raymond',date:'October 26, 2016',rating:4,comments:"Roberta's, one of the better pizzas I have had in my life. Very trendy and hipsterish spot. Came here for lunch on a random weekday afternoon and when we arrived, there was a line forming already. The space is a bit cramped. You'll get to know your neighbors soon enough. The pizza is just delightful and delicious. It's a ncie plus that you get to see them firing up the pizzas in the corner. The major issue with Roberta's is the trek out to the Williamsburg/Bushwick."},{name:'Laurel',date:'October 26, 2016',rating:4,comments:"The pizza is fantastic, not THE best I've ever had, but would definitely go back since it has great food and great ambiance. Definitely worth going to. It has A LOT of hype in the New York food scene, and I question if it deserves all of it, but it's still a totally great spot to hit up when in the area!!"}]},{id:6,name:'Hometown BBQ',neighborhood:'Brooklyn',photograph:'6.jpg',address:'454 Van Brunt St, Brooklyn, NY 11231',latlng:{lat:40.674925,lng:-74.016162},cuisine_type:'American',operating_hours:{Monday:'Closed',Tuesday:'12:00 pm - 10:00 pm',Wednesday:'12:00 pm - 10:00 pm',Thursday:'12:00 pm - 10:00 pm',Friday:'12:00 pm - 11:00 pm',Saturday:'12:00 pm - 11:00 pm',Sunday:'12:00 pm - 9:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Barbecue aficionados agree that Billy Durney is cooking up some of the best Texas-style barbecue in the city. Straightforward classics like smoked brisket and baby back ribs are always a strong choice, but there are also options like pork belly tacos and a lamb belly banh mi. The space is sprawling in a way that feels like the real deal, and Durney himself can usually be found working the room, and keeping a watchful eye on the smoking meats. It's counter service only, and there's often a line, but for the scene and certainly for the meat, it's easily worth the trip to Red Hook."},{name:'Michelle',date:'October 26, 2016',rating:4,comments:'Overall, a great try of New York BBQ. The restaurant décor is rustic with a good amount of seats to sit and enjoy the meal. I definitely would love to come back and try that monster of a beef rib!'},{name:'Ai-Mei',date:'October 26, 2016',rating:4,comments:"mmmmmm, what a gem this is in bklyn! I loveeee how soft their brisket is here. Their pork tacos are to die for, their different variety of ribs and lastly, their lamb is not gamey at all. Super wallet friendly for the amount they give you. I highly recommend this spot- after eating here, you can definitely walk over for Steve's key lime pies."}]},{id:7,name:'Superiority Burger',neighborhood:'Manhattan',photograph:'7.jpg',address:'430 E 9th St, New York, NY 10009',latlng:{lat:40.727397,lng:-73.983645},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 10:00 pm',Tuesday:'Closed',Wednesday:'11:30 am - 10:00 pm',Thursday:'11:30 am - 10:00 pm',Friday:'11:30 am - 10:00 pm',Saturday:'11:30 am - 10:00 pm',Sunday:'11:30 am - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Brooks Headley’s tiny East Village cafe is so much more than a veggie burger spot — it's one of the best bang-for-your-buck restaurants in Lower Manhattan. Headley and his crew turn seasonal vegetables into delectable salads and riffs on American comfort food favorites. The specials menu changes daily, and the rest of the menu is constantly evolving. You can get a lot of food to eat here for under $15 per person."},{name:'Gabriel',date:'October 26, 2016',rating:5,comments:"I was turned on to this place following the glowing NYT review. Its near my area of the city so I figured why not go? Man they weren't kidding, Superiority Burger is probably the best vegetarian experience I've ever had!"},{name:'Shivi',date:'October 26, 2016',rating:4,comments:'Great flavors and very satisfying. Craving a sandwich, I stopped by on a Friday night with a vegetarian friend. Super small location with just a few seats inside. Ambiance is a bit industrial, good is definitely much more sophisticated than the look of the place! Ordered the superiority burger anda side of potato salad. The potato salad was very light and tasted clean ( less mayo, lots of dill and some cucumber) -- refreshing for a humid summer night! Sandwich was surprisingly delicious - it is very small ( funny allusion to a White Castle burger) but it packs a punch! Not only are there layers of flavors ( amazing sauces) but the party itself had a great texture Ahmed flavor-- well done and so wonderful! Will definitely stop by again for an overall amazing burger/sandwich. Staff was super nice and accommodating but not out of the way friendly.'}]},{id:8,name:'The Dutch',neighborhood:'Manhattan',photograph:'8.jpg',address:'131 Sullivan St, New York, NY 10012',latlng:{lat:40.726584,lng:-74.002082},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Tuesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Wednesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Thursday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Friday:'11:30 am - 3:00 pm, 5:30 pm - 11:30 pm',Saturday:'10:00 am - 3:00 pm, 5:30 pm - 11:30 pm',Sunday:'10:00 am - 3:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Over the last five years, The Dutch has turned into the quintessential American restaurant that chef Andrew Carmellini and partners Josh Pickard and Luke Ostrom sought to evoke when it first opened. It’s a great choice when you’re craving a steak, a burger, or oysters, and the menu always includes plentiful seafood options as well as pastas. The Dutch is now an indelible part of the Soho landscape.'},{name:'Loren',date:'October 26, 2016',rating:4,comments:'I randomly came here on a Saturday night. I was pleasantly surprised with the food and the service. We had the calamari and the ceviche with avocado, and then the catfish. Oh! Then we had the banana soufflé for dessert with ice cream. It was all delicious and well put together. Would love to eat here again.'},{name:'Lori',date:'October 26, 2016',rating:4,comments:"Aside from the slightly claustrophobic dining area and the fact that you may have difficulty hearing your dining companion, I'd return to The Dutch without hesitation. The food is surprisingly well-executed and conceived, and our dinner service flowed smoothly without a hitch. Just make sure to get a reservation in advance, as I'm sure more than just a few other people will have the same idea."}]},{id:9,name:'Mu Ramen',neighborhood:'Queens',photograph:'9.jpg',address:'1209 Jackson Ave, Queens, NY 11101',latlng:{lat:40.743797,lng:-73.950652},cuisine_type:'Asian',operating_hours:{Monday:'5:00 pm - 10:00 pm',Tuesday:'5:00 pm - 10:00 pm',Wednesday:'5:00 pm - 10:00 pm',Thursday:'5:00 pm - 10:00 pm',Friday:'5:00 pm - 11:00 pm',Saturday:'5:00 pm - 11:00 pm',Sunday:'5:00 pm - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Joshua Smookler’s two-year-old ramen shop serves one of the best tonkotsu broths around. Beyond ramen, Mu also offers some high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train.'},{name:'Brittany',date:'October 26, 2016',rating:4,comments:"Overall, I would definitely recommend this place if you enjoy thick curly noodles with a thick, intense broth.  If you don't there are still other options but I can't vouch for those."},{name:'Sally',date:'October 26, 2016',rating:4,comments:"One of the tastiest and most unique ramen places I've been to in NYC, but also the priciest. I think overall its worth the try. Not an everyday casual ramen shop though."}]},{id:10,name:'Casa Enrique',neighborhood:'Queens',photograph:'10.jpg',address:'5-48 49th Ave, Queens, NY 11101',latlng:{lat:40.743394,lng:-73.954235},cuisine_type:'Mexican',operating_hours:{Monday:'5:00 pm - 12:00 am',Tuesday:'5:00 pm - 12:00 am',Wednesday:'5:00 pm - 12:00 am',Thursday:'5:00 pm - 12:00 am',Friday:'5:00 pm - 12:00 am',Saturday:'11:00 am - 12:00 am',Sunday:'11:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"Head to this laid-back Long Island City restaurant for beef tongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."},{name:'Rob',date:'October 26, 2016',rating:5,comments:"The hype was real. Please go. Get the ceviche. And the tres leches. You're welcome"},{name:'Jason',date:'October 26, 2016',rating:4,comments:"For a Michelin star restaurant, it's fairly priced and the food is fairly good. Started with a strawberry margarita which was good in flavor but not much alcohol. Had the chicken enchiladas with salsa verde and it was really good. Great balance in flavor and a good portion. Extra tasty with their hot sauces. My wife had the lamb but it was a bit too salty for our taste. Although, it was cooked very well and fell off the bone. The highlight of the night was the tres leches cake. Probably the best I've ever had to be honest. Not too sweet and very milky. Overall, one of my top 3 favorite Mexican in NY."}]},{id:1,name:'Mission Chinese Food',neighborhood:'Manhattan',photograph:'1.jpg',address:'171 E Broadway, New York, NY 10002',latlng:{lat:40.713829,lng:-73.989667},cuisine_type:'Asian',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 12:00 am',Wednesday:'5:30 pm - 12:00 am',Thursday:'5:30 pm - 12:00 am',Friday:'5:30 pm - 12:00 am',Saturday:'12:00 pm - 4:00 pm, 5:30 pm - 12:00 am',Sunday:'12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank.'},{name:'Morgan',date:'October 26, 2016',rating:4,comments:'This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!'},{name:'Jason',date:'October 26, 2016',rating:3,comments:'I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff.'}]},{id:2,name:'Emily',neighborhood:'Brooklyn',photograph:'2.jpg',address:'919 Fulton St, Brooklyn, NY 11238',latlng:{lat:40.683555,lng:-73.966393},cuisine_type:'Pizza',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 11:00 pm',Wednesday:'5:30 pm - 11:00 pm',Thursday:'5:30 pm - 11:00 pm',Friday:'5:30 pm - 11:00 pm',Saturday:'5:00 pm - 11:30 pm',Sunday:'12:00 pm - 3:00 pm, 5:00 pm - 11:00 pm'},reviews:[{name:'Steph',date:'October 26, 2016',rating:4,comments:'Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long.'},{name:'Steve',date:'October 26, 2016',rating:4,comments:'This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city.'},{name:'Sam',date:'October 26, 2016',rating:5,comments:"5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time."}]},{id:3,name:'Kang Ho Dong Baekjeong',neighborhood:'Manhattan',photograph:'3.jpg',address:'1 E 32nd St, New York, NY 10016',latlng:{lat:40.747143,lng:-73.985414},cuisine_type:'Asian',operating_hours:{Monday:'11:30 am - 2:00 am',Tuesday:'11:30 am - 2:00 am',Wednesday:'11:30 am - 2:00 am',Thursday:'11:30 am - 2:00 am',Friday:'11:30 am - 6:00 am',Saturday:'11:30 am - 6:00 am',Sunday:'11:30 am - 2:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'The tables at this 32nd Street favorite are outfitted with grills for cooking short ribs, brisket, beef tongue, rib eye, and pork jowl. The banchan plates are uniformly good, and Deuki Hong’s menu also includes winning dishes like stir-fried squid noodles, kimchi stew, and seafood pancakes. If it’s available, make sure to order the kimchi and rice “lunchbox.” Baekjeong is a great place for large groups and birthday parties.'},{name:'ZS',date:'October 26, 2016',rating:5,comments:"I've been to Korea before and many other Korean BBQ places. We had the regular pork belly and a beef (forgot which cut) and a seafood tofu soup. Two meat and a soup was just prefect for the two of us. We could have done one meat and one soup. The portions of the meat are great! The beef was juicy, tender and so good. The sides were excellent. "},{name:'Emily',date:'October 26, 2016',rating:2,comments:"MEH. I've tried their Jersey location as well but Kang Ho Dong meat quality is severely decreasing. A Korean bbq place with whatever meat? I think NOT!"}]},{id:4,name:"Katz's Delicatessen",neighborhood:'Manhattan',photograph:'4.jpg',address:'205 E Houston St, New York, NY 10002',latlng:{lat:40.722216,lng:-73.987501},cuisine_type:'American',operating_hours:{Monday:'8:00 am - 10:30 pm',Tuesday:'8:00 am - 10:30 pm',Wednesday:'8:00 am - 10:30 pm',Thursday:'8:00 am - 2:30 am',Friday:'8:00 am - Sat',Saturday:'Open 24 hours',Sunday:'Sat - 10:30 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"In 127 years, little has changed at Katz's. It remains one of New York's — and the country's — essential Jewish delicatessens. Every inch of the massive Lower East Side space smells intensely of pastrami and rye loaves. The sandwiches are massive, so they are best when shared. Order at the counter, and don't forget to tip your slicer — your sandwich will be better for it."},{name:'Allen',date:'October 26, 2016',rating:5,comments:'If I lived in NY and got diabetes from eating here every single time I ate, I would do it over and over and over again just for that first bite. These guys know how to make a sandwich. The heart attack comes free of charge! Came by while I was visiting NYC. First pit-stop when I come back :)!'},{name:'David',date:'October 26, 2016',rating:2,comments:"Ok so four of us came. One more later who didn't order becauase it's so expensive and simple. Seriously, a bunch of meat albeit you can sample beforehand on rye/white/wheat bread. Cheese extra. Pickles free, you can just ask them at the pickup counter. But seriously 20 bucks gone for an non-flavored half sandwich. And a line that is long, especially if you want seating. I'm down to just take a quick look where Sally and Harry sat and leave to the other delis all around NYC. Oh and they accept Samsung pay."}]},{id:5,name:"Roberta's Pizza",neighborhood:'Brooklyn',photograph:'5.jpg',address:'261 Moore St, Brooklyn, NY 11206',latlng:{lat:40.705089,lng:-73.933585},cuisine_type:'Pizza',operating_hours:{Monday:'11:00 am - 12:00 am',Tuesday:'11:00 am - 12:00 am',Wednesday:'11:00 am - 12:00 am',Thursday:'11:00 am - 12:00 am',Friday:'11:00 am - 12:00 am',Saturday:'10:00 am - 12:00 am',Sunday:'10:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Roberta's is the epicenter of the modern Brooklyn food scene.The pizzas are fantastic, but the restaurant really flexes its muscles with the vegetable dishes. In addition to the pies, consider ordering the radishes, the romaine salad, the roasted beets, and some of the charcuterie."},{name:'Raymond',date:'October 26, 2016',rating:4,comments:"Roberta's, one of the better pizzas I have had in my life. Very trendy and hipsterish spot. Came here for lunch on a random weekday afternoon and when we arrived, there was a line forming already. The space is a bit cramped. You'll get to know your neighbors soon enough. The pizza is just delightful and delicious. It's a ncie plus that you get to see them firing up the pizzas in the corner. The major issue with Roberta's is the trek out to the Williamsburg/Bushwick."},{name:'Laurel',date:'October 26, 2016',rating:4,comments:"The pizza is fantastic, not THE best I've ever had, but would definitely go back since it has great food and great ambiance. Definitely worth going to. It has A LOT of hype in the New York food scene, and I question if it deserves all of it, but it's still a totally great spot to hit up when in the area!!"}]},{id:6,name:'Hometown BBQ',neighborhood:'Brooklyn',photograph:'6.jpg',address:'454 Van Brunt St, Brooklyn, NY 11231',latlng:{lat:40.674925,lng:-74.016162},cuisine_type:'American',operating_hours:{Monday:'Closed',Tuesday:'12:00 pm - 10:00 pm',Wednesday:'12:00 pm - 10:00 pm',Thursday:'12:00 pm - 10:00 pm',Friday:'12:00 pm - 11:00 pm',Saturday:'12:00 pm - 11:00 pm',Sunday:'12:00 pm - 9:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Barbecue aficionados agree that Billy Durney is cooking up some of the best Texas-style barbecue in the city. Straightforward classics like smoked brisket and baby back ribs are always a strong choice, but there are also options like pork belly tacos and a lamb belly banh mi. The space is sprawling in a way that feels like the real deal, and Durney himself can usually be found working the room, and keeping a watchful eye on the smoking meats. It's counter service only, and there's often a line, but for the scene and certainly for the meat, it's easily worth the trip to Red Hook."},{name:'Michelle',date:'October 26, 2016',rating:4,comments:'Overall, a great try of New York BBQ. The restaurant décor is rustic with a good amount of seats to sit and enjoy the meal. I definitely would love to come back and try that monster of a beef rib!'},{name:'Ai-Mei',date:'October 26, 2016',rating:4,comments:"mmmmmm, what a gem this is in bklyn! I loveeee how soft their brisket is here. Their pork tacos are to die for, their different variety of ribs and lastly, their lamb is not gamey at all. Super wallet friendly for the amount they give you. I highly recommend this spot- after eating here, you can definitely walk over for Steve's key lime pies."}]},{id:7,name:'Superiority Burger',neighborhood:'Manhattan',photograph:'7.jpg',address:'430 E 9th St, New York, NY 10009',latlng:{lat:40.727397,lng:-73.983645},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 10:00 pm',Tuesday:'Closed',Wednesday:'11:30 am - 10:00 pm',Thursday:'11:30 am - 10:00 pm',Friday:'11:30 am - 10:00 pm',Saturday:'11:30 am - 10:00 pm',Sunday:'11:30 am - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Brooks Headley’s tiny East Village cafe is so much more than a veggie burger spot — it's one of the best bang-for-your-buck restaurants in Lower Manhattan. Headley and his crew turn seasonal vegetables into delectable salads and riffs on American comfort food favorites. The specials menu changes daily, and the rest of the menu is constantly evolving. You can get a lot of food to eat here for under $15 per person."},{name:'Gabriel',date:'October 26, 2016',rating:5,comments:"I was turned on to this place following the glowing NYT review. Its near my area of the city so I figured why not go? Man they weren't kidding, Superiority Burger is probably the best vegetarian experience I've ever had!"},{name:'Shivi',date:'October 26, 2016',rating:4,comments:'Great flavors and very satisfying. Craving a sandwich, I stopped by on a Friday night with a vegetarian friend. Super small location with just a few seats inside. Ambiance is a bit industrial, good is definitely much more sophisticated than the look of the place! Ordered the superiority burger anda side of potato salad. The potato salad was very light and tasted clean ( less mayo, lots of dill and some cucumber) -- refreshing for a humid summer night! Sandwich was surprisingly delicious - it is very small ( funny allusion to a White Castle burger) but it packs a punch! Not only are there layers of flavors ( amazing sauces) but the party itself had a great texture Ahmed flavor-- well done and so wonderful! Will definitely stop by again for an overall amazing burger/sandwich. Staff was super nice and accommodating but not out of the way friendly.'}]},{id:8,name:'The Dutch',neighborhood:'Manhattan',photograph:'8.jpg',address:'131 Sullivan St, New York, NY 10012',latlng:{lat:40.726584,lng:-74.002082},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Tuesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Wednesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Thursday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Friday:'11:30 am - 3:00 pm, 5:30 pm - 11:30 pm',Saturday:'10:00 am - 3:00 pm, 5:30 pm - 11:30 pm',Sunday:'10:00 am - 3:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Over the last five years, The Dutch has turned into the quintessential American restaurant that chef Andrew Carmellini and partners Josh Pickard and Luke Ostrom sought to evoke when it first opened. It’s a great choice when you’re craving a steak, a burger, or oysters, and the menu always includes plentiful seafood options as well as pastas. The Dutch is now an indelible part of the Soho landscape.'},{name:'Loren',date:'October 26, 2016',rating:4,comments:'I randomly came here on a Saturday night. I was pleasantly surprised with the food and the service. We had the calamari and the ceviche with avocado, and then the catfish. Oh! Then we had the banana soufflé for dessert with ice cream. It was all delicious and well put together. Would love to eat here again.'},{name:'Lori',date:'October 26, 2016',rating:4,comments:"Aside from the slightly claustrophobic dining area and the fact that you may have difficulty hearing your dining companion, I'd return to The Dutch without hesitation. The food is surprisingly well-executed and conceived, and our dinner service flowed smoothly without a hitch. Just make sure to get a reservation in advance, as I'm sure more than just a few other people will have the same idea."}]},{id:9,name:'Mu Ramen',neighborhood:'Queens',photograph:'9.jpg',address:'1209 Jackson Ave, Queens, NY 11101',latlng:{lat:40.743797,lng:-73.950652},cuisine_type:'Asian',operating_hours:{Monday:'5:00 pm - 10:00 pm',Tuesday:'5:00 pm - 10:00 pm',Wednesday:'5:00 pm - 10:00 pm',Thursday:'5:00 pm - 10:00 pm',Friday:'5:00 pm - 11:00 pm',Saturday:'5:00 pm - 11:00 pm',Sunday:'5:00 pm - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Joshua Smookler’s two-year-old ramen shop serves one of the best tonkotsu broths around. Beyond ramen, Mu also offers some high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train.'},{name:'Brittany',date:'October 26, 2016',rating:4,comments:"Overall, I would definitely recommend this place if you enjoy thick curly noodles with a thick, intense broth.  If you don't there are still other options but I can't vouch for those."},{name:'Sally',date:'October 26, 2016',rating:4,comments:"One of the tastiest and most unique ramen places I've been to in NYC, but also the priciest. I think overall its worth the try. Not an everyday casual ramen shop though."}]},{id:10,name:'Casa Enrique',neighborhood:'Queens',photograph:'10.jpg',address:'5-48 49th Ave, Queens, NY 11101',latlng:{lat:40.743394,lng:-73.954235},cuisine_type:'Mexican',operating_hours:{Monday:'5:00 pm - 12:00 am',Tuesday:'5:00 pm - 12:00 am',Wednesday:'5:00 pm - 12:00 am',Thursday:'5:00 pm - 12:00 am',Friday:'5:00 pm - 12:00 am',Saturday:'11:00 am - 12:00 am',Sunday:'11:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"Head to this laid-back Long Island City restaurant for beef tongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."},{name:'Rob',date:'October 26, 2016',rating:5,comments:"The hype was real. Please go. Get the ceviche. And the tres leches. You're welcome"},{name:'Jason',date:'October 26, 2016',rating:4,comments:"For a Michelin star restaurant, it's fairly priced and the food is fairly good. Started with a strawberry margarita which was good in flavor but not much alcohol. Had the chicken enchiladas with salsa verde and it was really good. Great balance in flavor and a good portion. Extra tasty with their hot sauces. My wife had the lamb but it was a bit too salty for our taste. Although, it was cooked very well and fell off the bone. The highlight of the night was the tres leches cake. Probably the best I've ever had to be honest. Not too sweet and very milky. Overall, one of my top 3 favorite Mexican in NY."}]},{id:1,name:'Mission Chinese Food',neighborhood:'Manhattan',photograph:'1.jpg',address:'171 E Broadway, New York, NY 10002',latlng:{lat:40.713829,lng:-73.989667},cuisine_type:'Asian',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 12:00 am',Wednesday:'5:30 pm - 12:00 am',Thursday:'5:30 pm - 12:00 am',Friday:'5:30 pm - 12:00 am',Saturday:'12:00 pm - 4:00 pm, 5:30 pm - 12:00 am',Sunday:'12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank.'},{name:'Morgan',date:'October 26, 2016',rating:4,comments:'This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!'},{name:'Jason',date:'October 26, 2016',rating:3,comments:'I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff.'}]},{id:2,name:'Emily',neighborhood:'Brooklyn',photograph:'2.jpg',address:'919 Fulton St, Brooklyn, NY 11238',latlng:{lat:40.683555,lng:-73.966393},cuisine_type:'Pizza',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 11:00 pm',Wednesday:'5:30 pm - 11:00 pm',Thursday:'5:30 pm - 11:00 pm',Friday:'5:30 pm - 11:00 pm',Saturday:'5:00 pm - 11:30 pm',Sunday:'12:00 pm - 3:00 pm, 5:00 pm - 11:00 pm'},reviews:[{name:'Steph',date:'October 26, 2016',rating:4,comments:'Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long.'},{name:'Steve',date:'October 26, 2016',rating:4,comments:'This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city.'},{name:'Sam',date:'October 26, 2016',rating:5,comments:"5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time."}]},{id:3,name:'Kang Ho Dong Baekjeong',neighborhood:'Manhattan',photograph:'3.jpg',address:'1 E 32nd St, New York, NY 10016',latlng:{lat:40.747143,lng:-73.985414},cuisine_type:'Asian',operating_hours:{Monday:'11:30 am - 2:00 am',Tuesday:'11:30 am - 2:00 am',Wednesday:'11:30 am - 2:00 am',Thursday:'11:30 am - 2:00 am',Friday:'11:30 am - 6:00 am',Saturday:'11:30 am - 6:00 am',Sunday:'11:30 am - 2:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'The tables at this 32nd Street favorite are outfitted with grills for cooking short ribs, brisket, beef tongue, rib eye, and pork jowl. The banchan plates are uniformly good, and Deuki Hong’s menu also includes winning dishes like stir-fried squid noodles, kimchi stew, and seafood pancakes. If it’s available, make sure to order the kimchi and rice “lunchbox.” Baekjeong is a great place for large groups and birthday parties.'},{name:'ZS',date:'October 26, 2016',rating:5,comments:"I've been to Korea before and many other Korean BBQ places. We had the regular pork belly and a beef (forgot which cut) and a seafood tofu soup. Two meat and a soup was just prefect for the two of us. We could have done one meat and one soup. The portions of the meat are great! The beef was juicy, tender and so good. The sides were excellent. "},{name:'Emily',date:'October 26, 2016',rating:2,comments:"MEH. I've tried their Jersey location as well but Kang Ho Dong meat quality is severely decreasing. A Korean bbq place with whatever meat? I think NOT!"}]},{id:4,name:"Katz's Delicatessen",neighborhood:'Manhattan',photograph:'4.jpg',address:'205 E Houston St, New York, NY 10002',latlng:{lat:40.722216,lng:-73.987501},cuisine_type:'American',operating_hours:{Monday:'8:00 am - 10:30 pm',Tuesday:'8:00 am - 10:30 pm',Wednesday:'8:00 am - 10:30 pm',Thursday:'8:00 am - 2:30 am',Friday:'8:00 am - Sat',Saturday:'Open 24 hours',Sunday:'Sat - 10:30 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"In 127 years, little has changed at Katz's. It remains one of New York's — and the country's — essential Jewish delicatessens. Every inch of the massive Lower East Side space smells intensely of pastrami and rye loaves. The sandwiches are massive, so they are best when shared. Order at the counter, and don't forget to tip your slicer — your sandwich will be better for it."},{name:'Allen',date:'October 26, 2016',rating:5,comments:'If I lived in NY and got diabetes from eating here every single time I ate, I would do it over and over and over again just for that first bite. These guys know how to make a sandwich. The heart attack comes free of charge! Came by while I was visiting NYC. First pit-stop when I come back :)!'},{name:'David',date:'October 26, 2016',rating:2,comments:"Ok so four of us came. One more later who didn't order becauase it's so expensive and simple. Seriously, a bunch of meat albeit you can sample beforehand on rye/white/wheat bread. Cheese extra. Pickles free, you can just ask them at the pickup counter. But seriously 20 bucks gone for an non-flavored half sandwich. And a line that is long, especially if you want seating. I'm down to just take a quick look where Sally and Harry sat and leave to the other delis all around NYC. Oh and they accept Samsung pay."}]},{id:5,name:"Roberta's Pizza",neighborhood:'Brooklyn',photograph:'5.jpg',address:'261 Moore St, Brooklyn, NY 11206',latlng:{lat:40.705089,lng:-73.933585},cuisine_type:'Pizza',operating_hours:{Monday:'11:00 am - 12:00 am',Tuesday:'11:00 am - 12:00 am',Wednesday:'11:00 am - 12:00 am',Thursday:'11:00 am - 12:00 am',Friday:'11:00 am - 12:00 am',Saturday:'10:00 am - 12:00 am',Sunday:'10:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Roberta's is the epicenter of the modern Brooklyn food scene.The pizzas are fantastic, but the restaurant really flexes its muscles with the vegetable dishes. In addition to the pies, consider ordering the radishes, the romaine salad, the roasted beets, and some of the charcuterie."},{name:'Raymond',date:'October 26, 2016',rating:4,comments:"Roberta's, one of the better pizzas I have had in my life. Very trendy and hipsterish spot. Came here for lunch on a random weekday afternoon and when we arrived, there was a line forming already. The space is a bit cramped. You'll get to know your neighbors soon enough. The pizza is just delightful and delicious. It's a ncie plus that you get to see them firing up the pizzas in the corner. The major issue with Roberta's is the trek out to the Williamsburg/Bushwick."},{name:'Laurel',date:'October 26, 2016',rating:4,comments:"The pizza is fantastic, not THE best I've ever had, but would definitely go back since it has great food and great ambiance. Definitely worth going to. It has A LOT of hype in the New York food scene, and I question if it deserves all of it, but it's still a totally great spot to hit up when in the area!!"}]},{id:6,name:'Hometown BBQ',neighborhood:'Brooklyn',photograph:'6.jpg',address:'454 Van Brunt St, Brooklyn, NY 11231',latlng:{lat:40.674925,lng:-74.016162},cuisine_type:'American',operating_hours:{Monday:'Closed',Tuesday:'12:00 pm - 10:00 pm',Wednesday:'12:00 pm - 10:00 pm',Thursday:'12:00 pm - 10:00 pm',Friday:'12:00 pm - 11:00 pm',Saturday:'12:00 pm - 11:00 pm',Sunday:'12:00 pm - 9:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Barbecue aficionados agree that Billy Durney is cooking up some of the best Texas-style barbecue in the city. Straightforward classics like smoked brisket and baby back ribs are always a strong choice, but there are also options like pork belly tacos and a lamb belly banh mi. The space is sprawling in a way that feels like the real deal, and Durney himself can usually be found working the room, and keeping a watchful eye on the smoking meats. It's counter service only, and there's often a line, but for the scene and certainly for the meat, it's easily worth the trip to Red Hook."},{name:'Michelle',date:'October 26, 2016',rating:4,comments:'Overall, a great try of New York BBQ. The restaurant décor is rustic with a good amount of seats to sit and enjoy the meal. I definitely would love to come back and try that monster of a beef rib!'},{name:'Ai-Mei',date:'October 26, 2016',rating:4,comments:"mmmmmm, what a gem this is in bklyn! I loveeee how soft their brisket is here. Their pork tacos are to die for, their different variety of ribs and lastly, their lamb is not gamey at all. Super wallet friendly for the amount they give you. I highly recommend this spot- after eating here, you can definitely walk over for Steve's key lime pies."}]},{id:7,name:'Superiority Burger',neighborhood:'Manhattan',photograph:'7.jpg',address:'430 E 9th St, New York, NY 10009',latlng:{lat:40.727397,lng:-73.983645},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 10:00 pm',Tuesday:'Closed',Wednesday:'11:30 am - 10:00 pm',Thursday:'11:30 am - 10:00 pm',Friday:'11:30 am - 10:00 pm',Saturday:'11:30 am - 10:00 pm',Sunday:'11:30 am - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Brooks Headley’s tiny East Village cafe is so much more than a veggie burger spot — it's one of the best bang-for-your-buck restaurants in Lower Manhattan. Headley and his crew turn seasonal vegetables into delectable salads and riffs on American comfort food favorites. The specials menu changes daily, and the rest of the menu is constantly evolving. You can get a lot of food to eat here for under $15 per person."},{name:'Gabriel',date:'October 26, 2016',rating:5,comments:"I was turned on to this place following the glowing NYT review. Its near my area of the city so I figured why not go? Man they weren't kidding, Superiority Burger is probably the best vegetarian experience I've ever had!"},{name:'Shivi',date:'October 26, 2016',rating:4,comments:'Great flavors and very satisfying. Craving a sandwich, I stopped by on a Friday night with a vegetarian friend. Super small location with just a few seats inside. Ambiance is a bit industrial, good is definitely much more sophisticated than the look of the place! Ordered the superiority burger anda side of potato salad. The potato salad was very light and tasted clean ( less mayo, lots of dill and some cucumber) -- refreshing for a humid summer night! Sandwich was surprisingly delicious - it is very small ( funny allusion to a White Castle burger) but it packs a punch! Not only are there layers of flavors ( amazing sauces) but the party itself had a great texture Ahmed flavor-- well done and so wonderful! Will definitely stop by again for an overall amazing burger/sandwich. Staff was super nice and accommodating but not out of the way friendly.'}]},{id:8,name:'The Dutch',neighborhood:'Manhattan',photograph:'8.jpg',address:'131 Sullivan St, New York, NY 10012',latlng:{lat:40.726584,lng:-74.002082},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Tuesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Wednesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Thursday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Friday:'11:30 am - 3:00 pm, 5:30 pm - 11:30 pm',Saturday:'10:00 am - 3:00 pm, 5:30 pm - 11:30 pm',Sunday:'10:00 am - 3:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Over the last five years, The Dutch has turned into the quintessential American restaurant that chef Andrew Carmellini and partners Josh Pickard and Luke Ostrom sought to evoke when it first opened. It’s a great choice when you’re craving a steak, a burger, or oysters, and the menu always includes plentiful seafood options as well as pastas. The Dutch is now an indelible part of the Soho landscape.'},{name:'Loren',date:'October 26, 2016',rating:4,comments:'I randomly came here on a Saturday night. I was pleasantly surprised with the food and the service. We had the calamari and the ceviche with avocado, and then the catfish. Oh! Then we had the banana soufflé for dessert with ice cream. It was all delicious and well put together. Would love to eat here again.'},{name:'Lori',date:'October 26, 2016',rating:4,comments:"Aside from the slightly claustrophobic dining area and the fact that you may have difficulty hearing your dining companion, I'd return to The Dutch without hesitation. The food is surprisingly well-executed and conceived, and our dinner service flowed smoothly without a hitch. Just make sure to get a reservation in advance, as I'm sure more than just a few other people will have the same idea."}]},{id:9,name:'Mu Ramen',neighborhood:'Queens',photograph:'9.jpg',address:'1209 Jackson Ave, Queens, NY 11101',latlng:{lat:40.743797,lng:-73.950652},cuisine_type:'Asian',operating_hours:{Monday:'5:00 pm - 10:00 pm',Tuesday:'5:00 pm - 10:00 pm',Wednesday:'5:00 pm - 10:00 pm',Thursday:'5:00 pm - 10:00 pm',Friday:'5:00 pm - 11:00 pm',Saturday:'5:00 pm - 11:00 pm',Sunday:'5:00 pm - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Joshua Smookler’s two-year-old ramen shop serves one of the best tonkotsu broths around. Beyond ramen, Mu also offers some high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train.'},{name:'Brittany',date:'October 26, 2016',rating:4,comments:"Overall, I would definitely recommend this place if you enjoy thick curly noodles with a thick, intense broth.  If you don't there are still other options but I can't vouch for those."},{name:'Sally',date:'October 26, 2016',rating:4,comments:"One of the tastiest and most unique ramen places I've been to in NYC, but also the priciest. I think overall its worth the try. Not an everyday casual ramen shop though."}]},{id:10,name:'Casa Enrique',neighborhood:'Queens',photograph:'10.jpg',address:'5-48 49th Ave, Queens, NY 11101',latlng:{lat:40.743394,lng:-73.954235},cuisine_type:'Mexican',operating_hours:{Monday:'5:00 pm - 12:00 am',Tuesday:'5:00 pm - 12:00 am',Wednesday:'5:00 pm - 12:00 am',Thursday:'5:00 pm - 12:00 am',Friday:'5:00 pm - 12:00 am',Saturday:'11:00 am - 12:00 am',Sunday:'11:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"Head to this laid-back Long Island City restaurant for beef tongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."},{name:'Rob',date:'October 26, 2016',rating:5,comments:"The hype was real. Please go. Get the ceviche. And the tres leches. You're welcome"},{name:'Jason',date:'October 26, 2016',rating:4,comments:"For a Michelin star restaurant, it's fairly priced and the food is fairly good. Started with a strawberry margarita which was good in flavor but not much alcohol. Had the chicken enchiladas with salsa verde and it was really good. Great balance in flavor and a good portion. Extra tasty with their hot sauces. My wife had the lamb but it was a bit too salty for our taste. Although, it was cooked very well and fell off the bone. The highlight of the night was the tres leches cake. Probably the best I've ever had to be honest. Not too sweet and very milky. Overall, one of my top 3 favorite Mexican in NY."}]},{id:1,name:'Mission Chinese Food',neighborhood:'Manhattan',photograph:'1.jpg',address:'171 E Broadway, New York, NY 10002',latlng:{lat:40.713829,lng:-73.989667},cuisine_type:'Asian',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 12:00 am',Wednesday:'5:30 pm - 12:00 am',Thursday:'5:30 pm - 12:00 am',Friday:'5:30 pm - 12:00 am',Saturday:'12:00 pm - 4:00 pm, 5:30 pm - 12:00 am',Sunday:'12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank.'},{name:'Morgan',date:'October 26, 2016',rating:4,comments:'This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!'},{name:'Jason',date:'October 26, 2016',rating:3,comments:'I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff.'}]},{id:2,name:'Emily',neighborhood:'Brooklyn',photograph:'2.jpg',address:'919 Fulton St, Brooklyn, NY 11238',latlng:{lat:40.683555,lng:-73.966393},cuisine_type:'Pizza',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 11:00 pm',Wednesday:'5:30 pm - 11:00 pm',Thursday:'5:30 pm - 11:00 pm',Friday:'5:30 pm - 11:00 pm',Saturday:'5:00 pm - 11:30 pm',Sunday:'12:00 pm - 3:00 pm, 5:00 pm - 11:00 pm'},reviews:[{name:'Steph',date:'October 26, 2016',rating:4,comments:'Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long.'},{name:'Steve',date:'October 26, 2016',rating:4,comments:'This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city.'},{name:'Sam',date:'October 26, 2016',rating:5,comments:"5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time."}]},{id:3,name:'Kang Ho Dong Baekjeong',neighborhood:'Manhattan',photograph:'3.jpg',address:'1 E 32nd St, New York, NY 10016',latlng:{lat:40.747143,lng:-73.985414},cuisine_type:'Asian',operating_hours:{Monday:'11:30 am - 2:00 am',Tuesday:'11:30 am - 2:00 am',Wednesday:'11:30 am - 2:00 am',Thursday:'11:30 am - 2:00 am',Friday:'11:30 am - 6:00 am',Saturday:'11:30 am - 6:00 am',Sunday:'11:30 am - 2:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'The tables at this 32nd Street favorite are outfitted with grills for cooking short ribs, brisket, beef tongue, rib eye, and pork jowl. The banchan plates are uniformly good, and Deuki Hong’s menu also includes winning dishes like stir-fried squid noodles, kimchi stew, and seafood pancakes. If it’s available, make sure to order the kimchi and rice “lunchbox.” Baekjeong is a great place for large groups and birthday parties.'},{name:'ZS',date:'October 26, 2016',rating:5,comments:"I've been to Korea before and many other Korean BBQ places. We had the regular pork belly and a beef (forgot which cut) and a seafood tofu soup. Two meat and a soup was just prefect for the two of us. We could have done one meat and one soup. The portions of the meat are great! The beef was juicy, tender and so good. The sides were excellent. "},{name:'Emily',date:'October 26, 2016',rating:2,comments:"MEH. I've tried their Jersey location as well but Kang Ho Dong meat quality is severely decreasing. A Korean bbq place with whatever meat? I think NOT!"}]},{id:4,name:"Katz's Delicatessen",neighborhood:'Manhattan',photograph:'4.jpg',address:'205 E Houston St, New York, NY 10002',latlng:{lat:40.722216,lng:-73.987501},cuisine_type:'American',operating_hours:{Monday:'8:00 am - 10:30 pm',Tuesday:'8:00 am - 10:30 pm',Wednesday:'8:00 am - 10:30 pm',Thursday:'8:00 am - 2:30 am',Friday:'8:00 am - Sat',Saturday:'Open 24 hours',Sunday:'Sat - 10:30 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"In 127 years, little has changed at Katz's. It remains one of New York's — and the country's — essential Jewish delicatessens. Every inch of the massive Lower East Side space smells intensely of pastrami and rye loaves. The sandwiches are massive, so they are best when shared. Order at the counter, and don't forget to tip your slicer — your sandwich will be better for it."},{name:'Allen',date:'October 26, 2016',rating:5,comments:'If I lived in NY and got diabetes from eating here every single time I ate, I would do it over and over and over again just for that first bite. These guys know how to make a sandwich. The heart attack comes free of charge! Came by while I was visiting NYC. First pit-stop when I come back :)!'},{name:'David',date:'October 26, 2016',rating:2,comments:"Ok so four of us came. One more later who didn't order becauase it's so expensive and simple. Seriously, a bunch of meat albeit you can sample beforehand on rye/white/wheat bread. Cheese extra. Pickles free, you can just ask them at the pickup counter. But seriously 20 bucks gone for an non-flavored half sandwich. And a line that is long, especially if you want seating. I'm down to just take a quick look where Sally and Harry sat and leave to the other delis all around NYC. Oh and they accept Samsung pay."}]},{id:5,name:"Roberta's Pizza",neighborhood:'Brooklyn',photograph:'5.jpg',address:'261 Moore St, Brooklyn, NY 11206',latlng:{lat:40.705089,lng:-73.933585},cuisine_type:'Pizza',operating_hours:{Monday:'11:00 am - 12:00 am',Tuesday:'11:00 am - 12:00 am',Wednesday:'11:00 am - 12:00 am',Thursday:'11:00 am - 12:00 am',Friday:'11:00 am - 12:00 am',Saturday:'10:00 am - 12:00 am',Sunday:'10:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Roberta's is the epicenter of the modern Brooklyn food scene.The pizzas are fantastic, but the restaurant really flexes its muscles with the vegetable dishes. In addition to the pies, consider ordering the radishes, the romaine salad, the roasted beets, and some of the charcuterie."},{name:'Raymond',date:'October 26, 2016',rating:4,comments:"Roberta's, one of the better pizzas I have had in my life. Very trendy and hipsterish spot. Came here for lunch on a random weekday afternoon and when we arrived, there was a line forming already. The space is a bit cramped. You'll get to know your neighbors soon enough. The pizza is just delightful and delicious. It's a ncie plus that you get to see them firing up the pizzas in the corner. The major issue with Roberta's is the trek out to the Williamsburg/Bushwick."},{name:'Laurel',date:'October 26, 2016',rating:4,comments:"The pizza is fantastic, not THE best I've ever had, but would definitely go back since it has great food and great ambiance. Definitely worth going to. It has A LOT of hype in the New York food scene, and I question if it deserves all of it, but it's still a totally great spot to hit up when in the area!!"}]},{id:6,name:'Hometown BBQ',neighborhood:'Brooklyn',photograph:'6.jpg',address:'454 Van Brunt St, Brooklyn, NY 11231',latlng:{lat:40.674925,lng:-74.016162},cuisine_type:'American',operating_hours:{Monday:'Closed',Tuesday:'12:00 pm - 10:00 pm',Wednesday:'12:00 pm - 10:00 pm',Thursday:'12:00 pm - 10:00 pm',Friday:'12:00 pm - 11:00 pm',Saturday:'12:00 pm - 11:00 pm',Sunday:'12:00 pm - 9:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Barbecue aficionados agree that Billy Durney is cooking up some of the best Texas-style barbecue in the city. Straightforward classics like smoked brisket and baby back ribs are always a strong choice, but there are also options like pork belly tacos and a lamb belly banh mi. The space is sprawling in a way that feels like the real deal, and Durney himself can usually be found working the room, and keeping a watchful eye on the smoking meats. It's counter service only, and there's often a line, but for the scene and certainly for the meat, it's easily worth the trip to Red Hook."},{name:'Michelle',date:'October 26, 2016',rating:4,comments:'Overall, a great try of New York BBQ. The restaurant décor is rustic with a good amount of seats to sit and enjoy the meal. I definitely would love to come back and try that monster of a beef rib!'},{name:'Ai-Mei',date:'October 26, 2016',rating:4,comments:"mmmmmm, what a gem this is in bklyn! I loveeee how soft their brisket is here. Their pork tacos are to die for, their different variety of ribs and lastly, their lamb is not gamey at all. Super wallet friendly for the amount they give you. I highly recommend this spot- after eating here, you can definitely walk over for Steve's key lime pies."}]},{id:7,name:'Superiority Burger',neighborhood:'Manhattan',photograph:'7.jpg',address:'430 E 9th St, New York, NY 10009',latlng:{lat:40.727397,lng:-73.983645},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 10:00 pm',Tuesday:'Closed',Wednesday:'11:30 am - 10:00 pm',Thursday:'11:30 am - 10:00 pm',Friday:'11:30 am - 10:00 pm',Saturday:'11:30 am - 10:00 pm',Sunday:'11:30 am - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Brooks Headley’s tiny East Village cafe is so much more than a veggie burger spot — it's one of the best bang-for-your-buck restaurants in Lower Manhattan. Headley and his crew turn seasonal vegetables into delectable salads and riffs on American comfort food favorites. The specials menu changes daily, and the rest of the menu is constantly evolving. You can get a lot of food to eat here for under $15 per person."},{name:'Gabriel',date:'October 26, 2016',rating:5,comments:"I was turned on to this place following the glowing NYT review. Its near my area of the city so I figured why not go? Man they weren't kidding, Superiority Burger is probably the best vegetarian experience I've ever had!"},{name:'Shivi',date:'October 26, 2016',rating:4,comments:'Great flavors and very satisfying. Craving a sandwich, I stopped by on a Friday night with a vegetarian friend. Super small location with just a few seats inside. Ambiance is a bit industrial, good is definitely much more sophisticated than the look of the place! Ordered the superiority burger anda side of potato salad. The potato salad was very light and tasted clean ( less mayo, lots of dill and some cucumber) -- refreshing for a humid summer night! Sandwich was surprisingly delicious - it is very small ( funny allusion to a White Castle burger) but it packs a punch! Not only are there layers of flavors ( amazing sauces) but the party itself had a great texture Ahmed flavor-- well done and so wonderful! Will definitely stop by again for an overall amazing burger/sandwich. Staff was super nice and accommodating but not out of the way friendly.'}]},{id:8,name:'The Dutch',neighborhood:'Manhattan',photograph:'8.jpg',address:'131 Sullivan St, New York, NY 10012',latlng:{lat:40.726584,lng:-74.002082},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Tuesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Wednesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Thursday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Friday:'11:30 am - 3:00 pm, 5:30 pm - 11:30 pm',Saturday:'10:00 am - 3:00 pm, 5:30 pm - 11:30 pm',Sunday:'10:00 am - 3:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Over the last five years, The Dutch has turned into the quintessential American restaurant that chef Andrew Carmellini and partners Josh Pickard and Luke Ostrom sought to evoke when it first opened. It’s a great choice when you’re craving a steak, a burger, or oysters, and the menu always includes plentiful seafood options as well as pastas. The Dutch is now an indelible part of the Soho landscape.'},{name:'Loren',date:'October 26, 2016',rating:4,comments:'I randomly came here on a Saturday night. I was pleasantly surprised with the food and the service. We had the calamari and the ceviche with avocado, and then the catfish. Oh! Then we had the banana soufflé for dessert with ice cream. It was all delicious and well put together. Would love to eat here again.'},{name:'Lori',date:'October 26, 2016',rating:4,comments:"Aside from the slightly claustrophobic dining area and the fact that you may have difficulty hearing your dining companion, I'd return to The Dutch without hesitation. The food is surprisingly well-executed and conceived, and our dinner service flowed smoothly without a hitch. Just make sure to get a reservation in advance, as I'm sure more than just a few other people will have the same idea."}]},{id:9,name:'Mu Ramen',neighborhood:'Queens',photograph:'9.jpg',address:'1209 Jackson Ave, Queens, NY 11101',latlng:{lat:40.743797,lng:-73.950652},cuisine_type:'Asian',operating_hours:{Monday:'5:00 pm - 10:00 pm',Tuesday:'5:00 pm - 10:00 pm',Wednesday:'5:00 pm - 10:00 pm',Thursday:'5:00 pm - 10:00 pm',Friday:'5:00 pm - 11:00 pm',Saturday:'5:00 pm - 11:00 pm',Sunday:'5:00 pm - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Joshua Smookler’s two-year-old ramen shop serves one of the best tonkotsu broths around. Beyond ramen, Mu also offers some high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train.'},{name:'Brittany',date:'October 26, 2016',rating:4,comments:"Overall, I would definitely recommend this place if you enjoy thick curly noodles with a thick, intense broth.  If you don't there are still other options but I can't vouch for those."},{name:'Sally',date:'October 26, 2016',rating:4,comments:"One of the tastiest and most unique ramen places I've been to in NYC, but also the priciest. I think overall its worth the try. Not an everyday casual ramen shop though."}]},{id:10,name:'Casa Enrique',neighborhood:'Queens',photograph:'10.jpg',address:'5-48 49th Ave, Queens, NY 11101',latlng:{lat:40.743394,lng:-73.954235},cuisine_type:'Mexican',operating_hours:{Monday:'5:00 pm - 12:00 am',Tuesday:'5:00 pm - 12:00 am',Wednesday:'5:00 pm - 12:00 am',Thursday:'5:00 pm - 12:00 am',Friday:'5:00 pm - 12:00 am',Saturday:'11:00 am - 12:00 am',Sunday:'11:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"Head to this laid-back Long Island City restaurant for beef tongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."},{name:'Rob',date:'October 26, 2016',rating:5,comments:"The hype was real. Please go. Get the ceviche. And the tres leches. You're welcome"},{name:'Jason',date:'October 26, 2016',rating:4,comments:"For a Michelin star restaurant, it's fairly priced and the food is fairly good. Started with a strawberry margarita which was good in flavor but not much alcohol. Had the chicken enchiladas with salsa verde and it was really good. Great balance in flavor and a good portion. Extra tasty with their hot sauces. My wife had the lamb but it was a bit too salty for our taste. Although, it was cooked very well and fell off the bone. The highlight of the night was the tres leches cake. Probably the best I've ever had to be honest. Not too sweet and very milky. Overall, one of my top 3 favorite Mexican in NY."}]},{id:1,name:'Mission Chinese Food',neighborhood:'Manhattan',photograph:'1.jpg',address:'171 E Broadway, New York, NY 10002',latlng:{lat:40.713829,lng:-73.989667},cuisine_type:'Asian',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 12:00 am',Wednesday:'5:30 pm - 12:00 am',Thursday:'5:30 pm - 12:00 am',Friday:'5:30 pm - 12:00 am',Saturday:'12:00 pm - 4:00 pm, 5:30 pm - 12:00 am',Sunday:'12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank.'},{name:'Morgan',date:'October 26, 2016',rating:4,comments:'This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!'},{name:'Jason',date:'October 26, 2016',rating:3,comments:'I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff.'}]},{id:2,name:'Emily',neighborhood:'Brooklyn',photograph:'2.jpg',address:'919 Fulton St, Brooklyn, NY 11238',latlng:{lat:40.683555,lng:-73.966393},cuisine_type:'Pizza',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 11:00 pm',Wednesday:'5:30 pm - 11:00 pm',Thursday:'5:30 pm - 11:00 pm',Friday:'5:30 pm - 11:00 pm',Saturday:'5:00 pm - 11:30 pm',Sunday:'12:00 pm - 3:00 pm, 5:00 pm - 11:00 pm'},reviews:[{name:'Steph',date:'October 26, 2016',rating:4,comments:'Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long.'},{name:'Steve',date:'October 26, 2016',rating:4,comments:'This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city.'},{name:'Sam',date:'October 26, 2016',rating:5,comments:"5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time."}]},{id:3,name:'Kang Ho Dong Baekjeong',neighborhood:'Manhattan',photograph:'3.jpg',address:'1 E 32nd St, New York, NY 10016',latlng:{lat:40.747143,lng:-73.985414},cuisine_type:'Asian',operating_hours:{Monday:'11:30 am - 2:00 am',Tuesday:'11:30 am - 2:00 am',Wednesday:'11:30 am - 2:00 am',Thursday:'11:30 am - 2:00 am',Friday:'11:30 am - 6:00 am',Saturday:'11:30 am - 6:00 am',Sunday:'11:30 am - 2:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'The tables at this 32nd Street favorite are outfitted with grills for cooking short ribs, brisket, beef tongue, rib eye, and pork jowl. The banchan plates are uniformly good, and Deuki Hong’s menu also includes winning dishes like stir-fried squid noodles, kimchi stew, and seafood pancakes. If it’s available, make sure to order the kimchi and rice “lunchbox.” Baekjeong is a great place for large groups and birthday parties.'},{name:'ZS',date:'October 26, 2016',rating:5,comments:"I've been to Korea before and many other Korean BBQ places. We had the regular pork belly and a beef (forgot which cut) and a seafood tofu soup. Two meat and a soup was just prefect for the two of us. We could have done one meat and one soup. The portions of the meat are great! The beef was juicy, tender and so good. The sides were excellent. "},{name:'Emily',date:'October 26, 2016',rating:2,comments:"MEH. I've tried their Jersey location as well but Kang Ho Dong meat quality is severely decreasing. A Korean bbq place with whatever meat? I think NOT!"}]},{id:4,name:"Katz's Delicatessen",neighborhood:'Manhattan',photograph:'4.jpg',address:'205 E Houston St, New York, NY 10002',latlng:{lat:40.722216,lng:-73.987501},cuisine_type:'American',operating_hours:{Monday:'8:00 am - 10:30 pm',Tuesday:'8:00 am - 10:30 pm',Wednesday:'8:00 am - 10:30 pm',Thursday:'8:00 am - 2:30 am',Friday:'8:00 am - Sat',Saturday:'Open 24 hours',Sunday:'Sat - 10:30 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"In 127 years, little has changed at Katz's. It remains one of New York's — and the country's — essential Jewish delicatessens. Every inch of the massive Lower East Side space smells intensely of pastrami and rye loaves. The sandwiches are massive, so they are best when shared. Order at the counter, and don't forget to tip your slicer — your sandwich will be better for it."},{name:'Allen',date:'October 26, 2016',rating:5,comments:'If I lived in NY and got diabetes from eating here every single time I ate, I would do it over and over and over again just for that first bite. These guys know how to make a sandwich. The heart attack comes free of charge! Came by while I was visiting NYC. First pit-stop when I come back :)!'},{name:'David',date:'October 26, 2016',rating:2,comments:"Ok so four of us came. One more later who didn't order becauase it's so expensive and simple. Seriously, a bunch of meat albeit you can sample beforehand on rye/white/wheat bread. Cheese extra. Pickles free, you can just ask them at the pickup counter. But seriously 20 bucks gone for an non-flavored half sandwich. And a line that is long, especially if you want seating. I'm down to just take a quick look where Sally and Harry sat and leave to the other delis all around NYC. Oh and they accept Samsung pay."}]},{id:5,name:"Roberta's Pizza",neighborhood:'Brooklyn',photograph:'5.jpg',address:'261 Moore St, Brooklyn, NY 11206',latlng:{lat:40.705089,lng:-73.933585},cuisine_type:'Pizza',operating_hours:{Monday:'11:00 am - 12:00 am',Tuesday:'11:00 am - 12:00 am',Wednesday:'11:00 am - 12:00 am',Thursday:'11:00 am - 12:00 am',Friday:'11:00 am - 12:00 am',Saturday:'10:00 am - 12:00 am',Sunday:'10:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Roberta's is the epicenter of the modern Brooklyn food scene.The pizzas are fantastic, but the restaurant really flexes its muscles with the vegetable dishes. In addition to the pies, consider ordering the radishes, the romaine salad, the roasted beets, and some of the charcuterie."},{name:'Raymond',date:'October 26, 2016',rating:4,comments:"Roberta's, one of the better pizzas I have had in my life. Very trendy and hipsterish spot. Came here for lunch on a random weekday afternoon and when we arrived, there was a line forming already. The space is a bit cramped. You'll get to know your neighbors soon enough. The pizza is just delightful and delicious. It's a ncie plus that you get to see them firing up the pizzas in the corner. The major issue with Roberta's is the trek out to the Williamsburg/Bushwick."},{name:'Laurel',date:'October 26, 2016',rating:4,comments:"The pizza is fantastic, not THE best I've ever had, but would definitely go back since it has great food and great ambiance. Definitely worth going to. It has A LOT of hype in the New York food scene, and I question if it deserves all of it, but it's still a totally great spot to hit up when in the area!!"}]},{id:6,name:'Hometown BBQ',neighborhood:'Brooklyn',photograph:'6.jpg',address:'454 Van Brunt St, Brooklyn, NY 11231',latlng:{lat:40.674925,lng:-74.016162},cuisine_type:'American',operating_hours:{Monday:'Closed',Tuesday:'12:00 pm - 10:00 pm',Wednesday:'12:00 pm - 10:00 pm',Thursday:'12:00 pm - 10:00 pm',Friday:'12:00 pm - 11:00 pm',Saturday:'12:00 pm - 11:00 pm',Sunday:'12:00 pm - 9:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Barbecue aficionados agree that Billy Durney is cooking up some of the best Texas-style barbecue in the city. Straightforward classics like smoked brisket and baby back ribs are always a strong choice, but there are also options like pork belly tacos and a lamb belly banh mi. The space is sprawling in a way that feels like the real deal, and Durney himself can usually be found working the room, and keeping a watchful eye on the smoking meats. It's counter service only, and there's often a line, but for the scene and certainly for the meat, it's easily worth the trip to Red Hook."},{name:'Michelle',date:'October 26, 2016',rating:4,comments:'Overall, a great try of New York BBQ. The restaurant décor is rustic with a good amount of seats to sit and enjoy the meal. I definitely would love to come back and try that monster of a beef rib!'},{name:'Ai-Mei',date:'October 26, 2016',rating:4,comments:"mmmmmm, what a gem this is in bklyn! I loveeee how soft their brisket is here. Their pork tacos are to die for, their different variety of ribs and lastly, their lamb is not gamey at all. Super wallet friendly for the amount they give you. I highly recommend this spot- after eating here, you can definitely walk over for Steve's key lime pies."}]},{id:7,name:'Superiority Burger',neighborhood:'Manhattan',photograph:'7.jpg',address:'430 E 9th St, New York, NY 10009',latlng:{lat:40.727397,lng:-73.983645},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 10:00 pm',Tuesday:'Closed',Wednesday:'11:30 am - 10:00 pm',Thursday:'11:30 am - 10:00 pm',Friday:'11:30 am - 10:00 pm',Saturday:'11:30 am - 10:00 pm',Sunday:'11:30 am - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Brooks Headley’s tiny East Village cafe is so much more than a veggie burger spot — it's one of the best bang-for-your-buck restaurants in Lower Manhattan. Headley and his crew turn seasonal vegetables into delectable salads and riffs on American comfort food favorites. The specials menu changes daily, and the rest of the menu is constantly evolving. You can get a lot of food to eat here for under $15 per person."},{name:'Gabriel',date:'October 26, 2016',rating:5,comments:"I was turned on to this place following the glowing NYT review. Its near my area of the city so I figured why not go? Man they weren't kidding, Superiority Burger is probably the best vegetarian experience I've ever had!"},{name:'Shivi',date:'October 26, 2016',rating:4,comments:'Great flavors and very satisfying. Craving a sandwich, I stopped by on a Friday night with a vegetarian friend. Super small location with just a few seats inside. Ambiance is a bit industrial, good is definitely much more sophisticated than the look of the place! Ordered the superiority burger anda side of potato salad. The potato salad was very light and tasted clean ( less mayo, lots of dill and some cucumber) -- refreshing for a humid summer night! Sandwich was surprisingly delicious - it is very small ( funny allusion to a White Castle burger) but it packs a punch! Not only are there layers of flavors ( amazing sauces) but the party itself had a great texture Ahmed flavor-- well done and so wonderful! Will definitely stop by again for an overall amazing burger/sandwich. Staff was super nice and accommodating but not out of the way friendly.'}]},{id:8,name:'The Dutch',neighborhood:'Manhattan',photograph:'8.jpg',address:'131 Sullivan St, New York, NY 10012',latlng:{lat:40.726584,lng:-74.002082},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Tuesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Wednesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Thursday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Friday:'11:30 am - 3:00 pm, 5:30 pm - 11:30 pm',Saturday:'10:00 am - 3:00 pm, 5:30 pm - 11:30 pm',Sunday:'10:00 am - 3:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Over the last five years, The Dutch has turned into the quintessential American restaurant that chef Andrew Carmellini and partners Josh Pickard and Luke Ostrom sought to evoke when it first opened. It’s a great choice when you’re craving a steak, a burger, or oysters, and the menu always includes plentiful seafood options as well as pastas. The Dutch is now an indelible part of the Soho landscape.'},{name:'Loren',date:'October 26, 2016',rating:4,comments:'I randomly came here on a Saturday night. I was pleasantly surprised with the food and the service. We had the calamari and the ceviche with avocado, and then the catfish. Oh! Then we had the banana soufflé for dessert with ice cream. It was all delicious and well put together. Would love to eat here again.'},{name:'Lori',date:'October 26, 2016',rating:4,comments:"Aside from the slightly claustrophobic dining area and the fact that you may have difficulty hearing your dining companion, I'd return to The Dutch without hesitation. The food is surprisingly well-executed and conceived, and our dinner service flowed smoothly without a hitch. Just make sure to get a reservation in advance, as I'm sure more than just a few other people will have the same idea."}]},{id:9,name:'Mu Ramen',neighborhood:'Queens',photograph:'9.jpg',address:'1209 Jackson Ave, Queens, NY 11101',latlng:{lat:40.743797,lng:-73.950652},cuisine_type:'Asian',operating_hours:{Monday:'5:00 pm - 10:00 pm',Tuesday:'5:00 pm - 10:00 pm',Wednesday:'5:00 pm - 10:00 pm',Thursday:'5:00 pm - 10:00 pm',Friday:'5:00 pm - 11:00 pm',Saturday:'5:00 pm - 11:00 pm',Sunday:'5:00 pm - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Joshua Smookler’s two-year-old ramen shop serves one of the best tonkotsu broths around. Beyond ramen, Mu also offers some high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train.'},{name:'Brittany',date:'October 26, 2016',rating:4,comments:"Overall, I would definitely recommend this place if you enjoy thick curly noodles with a thick, intense broth.  If you don't there are still other options but I can't vouch for those."},{name:'Sally',date:'October 26, 2016',rating:4,comments:"One of the tastiest and most unique ramen places I've been to in NYC, but also the priciest. I think overall its worth the try. Not an everyday casual ramen shop though."}]},{id:10,name:'Casa Enrique',neighborhood:'Queens',photograph:'10.jpg',address:'5-48 49th Ave, Queens, NY 11101',latlng:{lat:40.743394,lng:-73.954235},cuisine_type:'Mexican',operating_hours:{Monday:'5:00 pm - 12:00 am',Tuesday:'5:00 pm - 12:00 am',Wednesday:'5:00 pm - 12:00 am',Thursday:'5:00 pm - 12:00 am',Friday:'5:00 pm - 12:00 am',Saturday:'11:00 am - 12:00 am',Sunday:'11:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"Head to this laid-back Long Island City restaurant for beef tongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."},{name:'Rob',date:'October 26, 2016',rating:5,comments:"The hype was real. Please go. Get the ceviche. And the tres leches. You're welcome"},{name:'Jason',date:'October 26, 2016',rating:4,comments:"For a Michelin star restaurant, it's fairly priced and the food is fairly good. Started with a strawberry margarita which was good in flavor but not much alcohol. Had the chicken enchiladas with salsa verde and it was really good. Great balance in flavor and a good portion. Extra tasty with their hot sauces. My wife had the lamb but it was a bit too salty for our taste. Although, it was cooked very well and fell off the bone. The highlight of the night was the tres leches cake. Probably the best I've ever had to be honest. Not too sweet and very milky. Overall, one of my top 3 favorite Mexican in NY."}]},{id:1,name:'Mission Chinese Food',neighborhood:'Manhattan',photograph:'1.jpg',address:'171 E Broadway, New York, NY 10002',latlng:{lat:40.713829,lng:-73.989667},cuisine_type:'Asian',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 12:00 am',Wednesday:'5:30 pm - 12:00 am',Thursday:'5:30 pm - 12:00 am',Friday:'5:30 pm - 12:00 am',Saturday:'12:00 pm - 4:00 pm, 5:30 pm - 12:00 am',Sunday:'12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank.'},{name:'Morgan',date:'October 26, 2016',rating:4,comments:'This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!'},{name:'Jason',date:'October 26, 2016',rating:3,comments:'I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff.'}]},{id:2,name:'Emily',neighborhood:'Brooklyn',photograph:'2.jpg',address:'919 Fulton St, Brooklyn, NY 11238',latlng:{lat:40.683555,lng:-73.966393},cuisine_type:'Pizza',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 11:00 pm',Wednesday:'5:30 pm - 11:00 pm',Thursday:'5:30 pm - 11:00 pm',Friday:'5:30 pm - 11:00 pm',Saturday:'5:00 pm - 11:30 pm',Sunday:'12:00 pm - 3:00 pm, 5:00 pm - 11:00 pm'},reviews:[{name:'Steph',date:'October 26, 2016',rating:4,comments:'Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long.'},{name:'Steve',date:'October 26, 2016',rating:4,comments:'This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city.'},{name:'Sam',date:'October 26, 2016',rating:5,comments:"5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time."}]},{id:3,name:'Kang Ho Dong Baekjeong',neighborhood:'Manhattan',photograph:'3.jpg',address:'1 E 32nd St, New York, NY 10016',latlng:{lat:40.747143,lng:-73.985414},cuisine_type:'Asian',operating_hours:{Monday:'11:30 am - 2:00 am',Tuesday:'11:30 am - 2:00 am',Wednesday:'11:30 am - 2:00 am',Thursday:'11:30 am - 2:00 am',Friday:'11:30 am - 6:00 am',Saturday:'11:30 am - 6:00 am',Sunday:'11:30 am - 2:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'The tables at this 32nd Street favorite are outfitted with grills for cooking short ribs, brisket, beef tongue, rib eye, and pork jowl. The banchan plates are uniformly good, and Deuki Hong’s menu also includes winning dishes like stir-fried squid noodles, kimchi stew, and seafood pancakes. If it’s available, make sure to order the kimchi and rice “lunchbox.” Baekjeong is a great place for large groups and birthday parties.'},{name:'ZS',date:'October 26, 2016',rating:5,comments:"I've been to Korea before and many other Korean BBQ places. We had the regular pork belly and a beef (forgot which cut) and a seafood tofu soup. Two meat and a soup was just prefect for the two of us. We could have done one meat and one soup. The portions of the meat are great! The beef was juicy, tender and so good. The sides were excellent. "},{name:'Emily',date:'October 26, 2016',rating:2,comments:"MEH. I've tried their Jersey location as well but Kang Ho Dong meat quality is severely decreasing. A Korean bbq place with whatever meat? I think NOT!"}]},{id:4,name:"Katz's Delicatessen",neighborhood:'Manhattan',photograph:'4.jpg',address:'205 E Houston St, New York, NY 10002',latlng:{lat:40.722216,lng:-73.987501},cuisine_type:'American',operating_hours:{Monday:'8:00 am - 10:30 pm',Tuesday:'8:00 am - 10:30 pm',Wednesday:'8:00 am - 10:30 pm',Thursday:'8:00 am - 2:30 am',Friday:'8:00 am - Sat',Saturday:'Open 24 hours',Sunday:'Sat - 10:30 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"In 127 years, little has changed at Katz's. It remains one of New York's — and the country's — essential Jewish delicatessens. Every inch of the massive Lower East Side space smells intensely of pastrami and rye loaves. The sandwiches are massive, so they are best when shared. Order at the counter, and don't forget to tip your slicer — your sandwich will be better for it."},{name:'Allen',date:'October 26, 2016',rating:5,comments:'If I lived in NY and got diabetes from eating here every single time I ate, I would do it over and over and over again just for that first bite. These guys know how to make a sandwich. The heart attack comes free of charge! Came by while I was visiting NYC. First pit-stop when I come back :)!'},{name:'David',date:'October 26, 2016',rating:2,comments:"Ok so four of us came. One more later who didn't order becauase it's so expensive and simple. Seriously, a bunch of meat albeit you can sample beforehand on rye/white/wheat bread. Cheese extra. Pickles free, you can just ask them at the pickup counter. But seriously 20 bucks gone for an non-flavored half sandwich. And a line that is long, especially if you want seating. I'm down to just take a quick look where Sally and Harry sat and leave to the other delis all around NYC. Oh and they accept Samsung pay."}]},{id:5,name:"Roberta's Pizza",neighborhood:'Brooklyn',photograph:'5.jpg',address:'261 Moore St, Brooklyn, NY 11206',latlng:{lat:40.705089,lng:-73.933585},cuisine_type:'Pizza',operating_hours:{Monday:'11:00 am - 12:00 am',Tuesday:'11:00 am - 12:00 am',Wednesday:'11:00 am - 12:00 am',Thursday:'11:00 am - 12:00 am',Friday:'11:00 am - 12:00 am',Saturday:'10:00 am - 12:00 am',Sunday:'10:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Roberta's is the epicenter of the modern Brooklyn food scene.The pizzas are fantastic, but the restaurant really flexes its muscles with the vegetable dishes. In addition to the pies, consider ordering the radishes, the romaine salad, the roasted beets, and some of the charcuterie."},{name:'Raymond',date:'October 26, 2016',rating:4,comments:"Roberta's, one of the better pizzas I have had in my life. Very trendy and hipsterish spot. Came here for lunch on a random weekday afternoon and when we arrived, there was a line forming already. The space is a bit cramped. You'll get to know your neighbors soon enough. The pizza is just delightful and delicious. It's a ncie plus that you get to see them firing up the pizzas in the corner. The major issue with Roberta's is the trek out to the Williamsburg/Bushwick."},{name:'Laurel',date:'October 26, 2016',rating:4,comments:"The pizza is fantastic, not THE best I've ever had, but would definitely go back since it has great food and great ambiance. Definitely worth going to. It has A LOT of hype in the New York food scene, and I question if it deserves all of it, but it's still a totally great spot to hit up when in the area!!"}]},{id:6,name:'Hometown BBQ',neighborhood:'Brooklyn',photograph:'6.jpg',address:'454 Van Brunt St, Brooklyn, NY 11231',latlng:{lat:40.674925,lng:-74.016162},cuisine_type:'American',operating_hours:{Monday:'Closed',Tuesday:'12:00 pm - 10:00 pm',Wednesday:'12:00 pm - 10:00 pm',Thursday:'12:00 pm - 10:00 pm',Friday:'12:00 pm - 11:00 pm',Saturday:'12:00 pm - 11:00 pm',Sunday:'12:00 pm - 9:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Barbecue aficionados agree that Billy Durney is cooking up some of the best Texas-style barbecue in the city. Straightforward classics like smoked brisket and baby back ribs are always a strong choice, but there are also options like pork belly tacos and a lamb belly banh mi. The space is sprawling in a way that feels like the real deal, and Durney himself can usually be found working the room, and keeping a watchful eye on the smoking meats. It's counter service only, and there's often a line, but for the scene and certainly for the meat, it's easily worth the trip to Red Hook."},{name:'Michelle',date:'October 26, 2016',rating:4,comments:'Overall, a great try of New York BBQ. The restaurant décor is rustic with a good amount of seats to sit and enjoy the meal. I definitely would love to come back and try that monster of a beef rib!'},{name:'Ai-Mei',date:'October 26, 2016',rating:4,comments:"mmmmmm, what a gem this is in bklyn! I loveeee how soft their brisket is here. Their pork tacos are to die for, their different variety of ribs and lastly, their lamb is not gamey at all. Super wallet friendly for the amount they give you. I highly recommend this spot- after eating here, you can definitely walk over for Steve's key lime pies."}]},{id:7,name:'Superiority Burger',neighborhood:'Manhattan',photograph:'7.jpg',address:'430 E 9th St, New York, NY 10009',latlng:{lat:40.727397,lng:-73.983645},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 10:00 pm',Tuesday:'Closed',Wednesday:'11:30 am - 10:00 pm',Thursday:'11:30 am - 10:00 pm',Friday:'11:30 am - 10:00 pm',Saturday:'11:30 am - 10:00 pm',Sunday:'11:30 am - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Brooks Headley’s tiny East Village cafe is so much more than a veggie burger spot — it's one of the best bang-for-your-buck restaurants in Lower Manhattan. Headley and his crew turn seasonal vegetables into delectable salads and riffs on American comfort food favorites. The specials menu changes daily, and the rest of the menu is constantly evolving. You can get a lot of food to eat here for under $15 per person."},{name:'Gabriel',date:'October 26, 2016',rating:5,comments:"I was turned on to this place following the glowing NYT review. Its near my area of the city so I figured why not go? Man they weren't kidding, Superiority Burger is probably the best vegetarian experience I've ever had!"},{name:'Shivi',date:'October 26, 2016',rating:4,comments:'Great flavors and very satisfying. Craving a sandwich, I stopped by on a Friday night with a vegetarian friend. Super small location with just a few seats inside. Ambiance is a bit industrial, good is definitely much more sophisticated than the look of the place! Ordered the superiority burger anda side of potato salad. The potato salad was very light and tasted clean ( less mayo, lots of dill and some cucumber) -- refreshing for a humid summer night! Sandwich was surprisingly delicious - it is very small ( funny allusion to a White Castle burger) but it packs a punch! Not only are there layers of flavors ( amazing sauces) but the party itself had a great texture Ahmed flavor-- well done and so wonderful! Will definitely stop by again for an overall amazing burger/sandwich. Staff was super nice and accommodating but not out of the way friendly.'}]},{id:8,name:'The Dutch',neighborhood:'Manhattan',photograph:'8.jpg',address:'131 Sullivan St, New York, NY 10012',latlng:{lat:40.726584,lng:-74.002082},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Tuesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Wednesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Thursday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Friday:'11:30 am - 3:00 pm, 5:30 pm - 11:30 pm',Saturday:'10:00 am - 3:00 pm, 5:30 pm - 11:30 pm',Sunday:'10:00 am - 3:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Over the last five years, The Dutch has turned into the quintessential American restaurant that chef Andrew Carmellini and partners Josh Pickard and Luke Ostrom sought to evoke when it first opened. It’s a great choice when you’re craving a steak, a burger, or oysters, and the menu always includes plentiful seafood options as well as pastas. The Dutch is now an indelible part of the Soho landscape.'},{name:'Loren',date:'October 26, 2016',rating:4,comments:'I randomly came here on a Saturday night. I was pleasantly surprised with the food and the service. We had the calamari and the ceviche with avocado, and then the catfish. Oh! Then we had the banana soufflé for dessert with ice cream. It was all delicious and well put together. Would love to eat here again.'},{name:'Lori',date:'October 26, 2016',rating:4,comments:"Aside from the slightly claustrophobic dining area and the fact that you may have difficulty hearing your dining companion, I'd return to The Dutch without hesitation. The food is surprisingly well-executed and conceived, and our dinner service flowed smoothly without a hitch. Just make sure to get a reservation in advance, as I'm sure more than just a few other people will have the same idea."}]},{id:9,name:'Mu Ramen',neighborhood:'Queens',photograph:'9.jpg',address:'1209 Jackson Ave, Queens, NY 11101',latlng:{lat:40.743797,lng:-73.950652},cuisine_type:'Asian',operating_hours:{Monday:'5:00 pm - 10:00 pm',Tuesday:'5:00 pm - 10:00 pm',Wednesday:'5:00 pm - 10:00 pm',Thursday:'5:00 pm - 10:00 pm',Friday:'5:00 pm - 11:00 pm',Saturday:'5:00 pm - 11:00 pm',Sunday:'5:00 pm - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Joshua Smookler’s two-year-old ramen shop serves one of the best tonkotsu broths around. Beyond ramen, Mu also offers some high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train.'},{name:'Brittany',date:'October 26, 2016',rating:4,comments:"Overall, I would definitely recommend this place if you enjoy thick curly noodles with a thick, intense broth.  If you don't there are still other options but I can't vouch for those."},{name:'Sally',date:'October 26, 2016',rating:4,comments:"One of the tastiest and most unique ramen places I've been to in NYC, but also the priciest. I think overall its worth the try. Not an everyday casual ramen shop though."}]},{id:10,name:'Casa Enrique',neighborhood:'Queens',photograph:'10.jpg',address:'5-48 49th Ave, Queens, NY 11101',latlng:{lat:40.743394,lng:-73.954235},cuisine_type:'Mexican',operating_hours:{Monday:'5:00 pm - 12:00 am',Tuesday:'5:00 pm - 12:00 am',Wednesday:'5:00 pm - 12:00 am',Thursday:'5:00 pm - 12:00 am',Friday:'5:00 pm - 12:00 am',Saturday:'11:00 am - 12:00 am',Sunday:'11:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"Head to this laid-back Long Island City restaurant for beef tongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."},{name:'Rob',date:'October 26, 2016',rating:5,comments:"The hype was real. Please go. Get the ceviche. And the tres leches. You're welcome"},{name:'Jason',date:'October 26, 2016',rating:4,comments:"For a Michelin star restaurant, it's fairly priced and the food is fairly good. Started with a strawberry margarita which was good in flavor but not much alcohol. Had the chicken enchiladas with salsa verde and it was really good. Great balance in flavor and a good portion. Extra tasty with their hot sauces. My wife had the lamb but it was a bit too salty for our taste. Although, it was cooked very well and fell off the bone. The highlight of the night was the tres leches cake. Probably the best I've ever had to be honest. Not too sweet and very milky. Overall, one of my top 3 favorite Mexican in NY."}]},{id:1,name:'Mission Chinese Food',neighborhood:'Manhattan',photograph:'1.jpg',address:'171 E Broadway, New York, NY 10002',latlng:{lat:40.713829,lng:-73.989667},cuisine_type:'Asian',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 12:00 am',Wednesday:'5:30 pm - 12:00 am',Thursday:'5:30 pm - 12:00 am',Friday:'5:30 pm - 12:00 am',Saturday:'12:00 pm - 4:00 pm, 5:30 pm - 12:00 am',Sunday:'12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank.'},{name:'Morgan',date:'October 26, 2016',rating:4,comments:'This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!'},{name:'Jason',date:'October 26, 2016',rating:3,comments:'I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff.'}]},{id:2,name:'Emily',neighborhood:'Brooklyn',photograph:'2.jpg',address:'919 Fulton St, Brooklyn, NY 11238',latlng:{lat:40.683555,lng:-73.966393},cuisine_type:'Pizza',operating_hours:{Monday:'5:30 pm - 11:00 pm',Tuesday:'5:30 pm - 11:00 pm',Wednesday:'5:30 pm - 11:00 pm',Thursday:'5:30 pm - 11:00 pm',Friday:'5:30 pm - 11:00 pm',Saturday:'5:00 pm - 11:30 pm',Sunday:'12:00 pm - 3:00 pm, 5:00 pm - 11:00 pm'},reviews:[{name:'Steph',date:'October 26, 2016',rating:4,comments:'Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long.'},{name:'Steve',date:'October 26, 2016',rating:4,comments:'This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city.'},{name:'Sam',date:'October 26, 2016',rating:5,comments:"5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time."}]},{id:3,name:'Kang Ho Dong Baekjeong',neighborhood:'Manhattan',photograph:'3.jpg',address:'1 E 32nd St, New York, NY 10016',latlng:{lat:40.747143,lng:-73.985414},cuisine_type:'Asian',operating_hours:{Monday:'11:30 am - 2:00 am',Tuesday:'11:30 am - 2:00 am',Wednesday:'11:30 am - 2:00 am',Thursday:'11:30 am - 2:00 am',Friday:'11:30 am - 6:00 am',Saturday:'11:30 am - 6:00 am',Sunday:'11:30 am - 2:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'The tables at this 32nd Street favorite are outfitted with grills for cooking short ribs, brisket, beef tongue, rib eye, and pork jowl. The banchan plates are uniformly good, and Deuki Hong’s menu also includes winning dishes like stir-fried squid noodles, kimchi stew, and seafood pancakes. If it’s available, make sure to order the kimchi and rice “lunchbox.” Baekjeong is a great place for large groups and birthday parties.'},{name:'ZS',date:'October 26, 2016',rating:5,comments:"I've been to Korea before and many other Korean BBQ places. We had the regular pork belly and a beef (forgot which cut) and a seafood tofu soup. Two meat and a soup was just prefect for the two of us. We could have done one meat and one soup. The portions of the meat are great! The beef was juicy, tender and so good. The sides were excellent. "},{name:'Emily',date:'October 26, 2016',rating:2,comments:"MEH. I've tried their Jersey location as well but Kang Ho Dong meat quality is severely decreasing. A Korean bbq place with whatever meat? I think NOT!"}]},{id:4,name:"Katz's Delicatessen",neighborhood:'Manhattan',photograph:'4.jpg',address:'205 E Houston St, New York, NY 10002',latlng:{lat:40.722216,lng:-73.987501},cuisine_type:'American',operating_hours:{Monday:'8:00 am - 10:30 pm',Tuesday:'8:00 am - 10:30 pm',Wednesday:'8:00 am - 10:30 pm',Thursday:'8:00 am - 2:30 am',Friday:'8:00 am - Sat',Saturday:'Open 24 hours',Sunday:'Sat - 10:30 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"In 127 years, little has changed at Katz's. It remains one of New York's — and the country's — essential Jewish delicatessens. Every inch of the massive Lower East Side space smells intensely of pastrami and rye loaves. The sandwiches are massive, so they are best when shared. Order at the counter, and don't forget to tip your slicer — your sandwich will be better for it."},{name:'Allen',date:'October 26, 2016',rating:5,comments:'If I lived in NY and got diabetes from eating here every single time I ate, I would do it over and over and over again just for that first bite. These guys know how to make a sandwich. The heart attack comes free of charge! Came by while I was visiting NYC. First pit-stop when I come back :)!'},{name:'David',date:'October 26, 2016',rating:2,comments:"Ok so four of us came. One more later who didn't order becauase it's so expensive and simple. Seriously, a bunch of meat albeit you can sample beforehand on rye/white/wheat bread. Cheese extra. Pickles free, you can just ask them at the pickup counter. But seriously 20 bucks gone for an non-flavored half sandwich. And a line that is long, especially if you want seating. I'm down to just take a quick look where Sally and Harry sat and leave to the other delis all around NYC. Oh and they accept Samsung pay."}]},{id:5,name:"Roberta's Pizza",neighborhood:'Brooklyn',photograph:'5.jpg',address:'261 Moore St, Brooklyn, NY 11206',latlng:{lat:40.705089,lng:-73.933585},cuisine_type:'Pizza',operating_hours:{Monday:'11:00 am - 12:00 am',Tuesday:'11:00 am - 12:00 am',Wednesday:'11:00 am - 12:00 am',Thursday:'11:00 am - 12:00 am',Friday:'11:00 am - 12:00 am',Saturday:'10:00 am - 12:00 am',Sunday:'10:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Roberta's is the epicenter of the modern Brooklyn food scene.The pizzas are fantastic, but the restaurant really flexes its muscles with the vegetable dishes. In addition to the pies, consider ordering the radishes, the romaine salad, the roasted beets, and some of the charcuterie."},{name:'Raymond',date:'October 26, 2016',rating:4,comments:"Roberta's, one of the better pizzas I have had in my life. Very trendy and hipsterish spot. Came here for lunch on a random weekday afternoon and when we arrived, there was a line forming already. The space is a bit cramped. You'll get to know your neighbors soon enough. The pizza is just delightful and delicious. It's a ncie plus that you get to see them firing up the pizzas in the corner. The major issue with Roberta's is the trek out to the Williamsburg/Bushwick."},{name:'Laurel',date:'October 26, 2016',rating:4,comments:"The pizza is fantastic, not THE best I've ever had, but would definitely go back since it has great food and great ambiance. Definitely worth going to. It has A LOT of hype in the New York food scene, and I question if it deserves all of it, but it's still a totally great spot to hit up when in the area!!"}]},{id:6,name:'Hometown BBQ',neighborhood:'Brooklyn',photograph:'6.jpg',address:'454 Van Brunt St, Brooklyn, NY 11231',latlng:{lat:40.674925,lng:-74.016162},cuisine_type:'American',operating_hours:{Monday:'Closed',Tuesday:'12:00 pm - 10:00 pm',Wednesday:'12:00 pm - 10:00 pm',Thursday:'12:00 pm - 10:00 pm',Friday:'12:00 pm - 11:00 pm',Saturday:'12:00 pm - 11:00 pm',Sunday:'12:00 pm - 9:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Barbecue aficionados agree that Billy Durney is cooking up some of the best Texas-style barbecue in the city. Straightforward classics like smoked brisket and baby back ribs are always a strong choice, but there are also options like pork belly tacos and a lamb belly banh mi. The space is sprawling in a way that feels like the real deal, and Durney himself can usually be found working the room, and keeping a watchful eye on the smoking meats. It's counter service only, and there's often a line, but for the scene and certainly for the meat, it's easily worth the trip to Red Hook."},{name:'Michelle',date:'October 26, 2016',rating:4,comments:'Overall, a great try of New York BBQ. The restaurant décor is rustic with a good amount of seats to sit and enjoy the meal. I definitely would love to come back and try that monster of a beef rib!'},{name:'Ai-Mei',date:'October 26, 2016',rating:4,comments:"mmmmmm, what a gem this is in bklyn! I loveeee how soft their brisket is here. Their pork tacos are to die for, their different variety of ribs and lastly, their lamb is not gamey at all. Super wallet friendly for the amount they give you. I highly recommend this spot- after eating here, you can definitely walk over for Steve's key lime pies."}]},{id:7,name:'Superiority Burger',neighborhood:'Manhattan',photograph:'7.jpg',address:'430 E 9th St, New York, NY 10009',latlng:{lat:40.727397,lng:-73.983645},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 10:00 pm',Tuesday:'Closed',Wednesday:'11:30 am - 10:00 pm',Thursday:'11:30 am - 10:00 pm',Friday:'11:30 am - 10:00 pm',Saturday:'11:30 am - 10:00 pm',Sunday:'11:30 am - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:"Brooks Headley’s tiny East Village cafe is so much more than a veggie burger spot — it's one of the best bang-for-your-buck restaurants in Lower Manhattan. Headley and his crew turn seasonal vegetables into delectable salads and riffs on American comfort food favorites. The specials menu changes daily, and the rest of the menu is constantly evolving. You can get a lot of food to eat here for under $15 per person."},{name:'Gabriel',date:'October 26, 2016',rating:5,comments:"I was turned on to this place following the glowing NYT review. Its near my area of the city so I figured why not go? Man they weren't kidding, Superiority Burger is probably the best vegetarian experience I've ever had!"},{name:'Shivi',date:'October 26, 2016',rating:4,comments:'Great flavors and very satisfying. Craving a sandwich, I stopped by on a Friday night with a vegetarian friend. Super small location with just a few seats inside. Ambiance is a bit industrial, good is definitely much more sophisticated than the look of the place! Ordered the superiority burger anda side of potato salad. The potato salad was very light and tasted clean ( less mayo, lots of dill and some cucumber) -- refreshing for a humid summer night! Sandwich was surprisingly delicious - it is very small ( funny allusion to a White Castle burger) but it packs a punch! Not only are there layers of flavors ( amazing sauces) but the party itself had a great texture Ahmed flavor-- well done and so wonderful! Will definitely stop by again for an overall amazing burger/sandwich. Staff was super nice and accommodating but not out of the way friendly.'}]},{id:8,name:'The Dutch',neighborhood:'Manhattan',photograph:'8.jpg',address:'131 Sullivan St, New York, NY 10012',latlng:{lat:40.726584,lng:-74.002082},cuisine_type:'American',operating_hours:{Monday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Tuesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Wednesday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Thursday:'11:30 am - 3:00 pm, 5:30 pm - 11:00 pm',Friday:'11:30 am - 3:00 pm, 5:30 pm - 11:30 pm',Saturday:'10:00 am - 3:00 pm, 5:30 pm - 11:30 pm',Sunday:'10:00 am - 3:00 pm, 5:30 pm - 11:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Over the last five years, The Dutch has turned into the quintessential American restaurant that chef Andrew Carmellini and partners Josh Pickard and Luke Ostrom sought to evoke when it first opened. It’s a great choice when you’re craving a steak, a burger, or oysters, and the menu always includes plentiful seafood options as well as pastas. The Dutch is now an indelible part of the Soho landscape.'},{name:'Loren',date:'October 26, 2016',rating:4,comments:'I randomly came here on a Saturday night. I was pleasantly surprised with the food and the service. We had the calamari and the ceviche with avocado, and then the catfish. Oh! Then we had the banana soufflé for dessert with ice cream. It was all delicious and well put together. Would love to eat here again.'},{name:'Lori',date:'October 26, 2016',rating:4,comments:"Aside from the slightly claustrophobic dining area and the fact that you may have difficulty hearing your dining companion, I'd return to The Dutch without hesitation. The food is surprisingly well-executed and conceived, and our dinner service flowed smoothly without a hitch. Just make sure to get a reservation in advance, as I'm sure more than just a few other people will have the same idea."}]},{id:9,name:'Mu Ramen',neighborhood:'Queens',photograph:'9.jpg',address:'1209 Jackson Ave, Queens, NY 11101',latlng:{lat:40.743797,lng:-73.950652},cuisine_type:'Asian',operating_hours:{Monday:'5:00 pm - 10:00 pm',Tuesday:'5:00 pm - 10:00 pm',Wednesday:'5:00 pm - 10:00 pm',Thursday:'5:00 pm - 10:00 pm',Friday:'5:00 pm - 11:00 pm',Saturday:'5:00 pm - 11:00 pm',Sunday:'5:00 pm - 10:00 pm'},reviews:[{name:'Steve',date:'October 26, 2016',rating:4,comments:'Joshua Smookler’s two-year-old ramen shop serves one of the best tonkotsu broths around. Beyond ramen, Mu also offers some high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train.'},{name:'Brittany',date:'October 26, 2016',rating:4,comments:"Overall, I would definitely recommend this place if you enjoy thick curly noodles with a thick, intense broth.  If you don't there are still other options but I can't vouch for those."},{name:'Sally',date:'October 26, 2016',rating:4,comments:"One of the tastiest and most unique ramen places I've been to in NYC, but also the priciest. I think overall its worth the try. Not an everyday casual ramen shop though."}]},{id:10,name:'Casa Enrique',neighborhood:'Queens',photograph:'10.jpg',address:'5-48 49th Ave, Queens, NY 11101',latlng:{lat:40.743394,lng:-73.954235},cuisine_type:'Mexican',operating_hours:{Monday:'5:00 pm - 12:00 am',Tuesday:'5:00 pm - 12:00 am',Wednesday:'5:00 pm - 12:00 am',Thursday:'5:00 pm - 12:00 am',Friday:'5:00 pm - 12:00 am',Saturday:'11:00 am - 12:00 am',Sunday:'11:00 am - 12:00 am'},reviews:[{name:'Steve',date:'October 26, 2016',rating:5,comments:"Head to this laid-back Long Island City restaurant for beef tongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."},{name:'Rob',date:'October 26, 2016',rating:5,comments:"The hype was real. Please go. Get the ceviche. And the tres leches. You're welcome"},{name:'Jason',date:'October 26, 2016',rating:4,comments:"For a Michelin star restaurant, it's fairly priced and the food is fairly good. Started with a strawberry margarita which was good in flavor but not much alcohol. Had the chicken enchiladas with salsa verde and it was really good. Great balance in flavor and a good portion. Extra tasty with their hot sauces. My wife had the lamb but it was a bit too salty for our taste. Although, it was cooked very well and fell off the bone. The highlight of the night was the tres leches cake. Probably the best I've ever had to be honest. Not too sweet and very milky. Overall, one of my top 3 favorite Mexican in NY."}]}];

},{}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.accessObjectByString=accessObjectByString;exports.getUniqueValuesByPath=getUniqueValuesByPath;exports.getFilteredColumn=getFilteredColumn;function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function accessObjectByString(path,obj){var separator=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'.';// let val = o;
// s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
// s = s.replace(/^\./, ''); // strip a leading dot
// const a = s.split('.');
// for (let i = 0, n = a.length; i < n; ++i) {
//     const k = a[i];
//     if (k in o) {
//         val = o[k];
//     } else {
//         return;
//     }
// }
// return val;
var properties=Array.isArray(path)?path:path.split(separator);return properties.reduce(function(prev,curr){return prev&&prev[curr];},obj);}function getUniqueValuesByPath(path,arr){var separator=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'.';if(typeof arr==='undefined'){throw new Error('Cant call getUniqueValuesByPath with an undefined iterator');}if(_typeof(arr)!=='object'&&!Array.isArray(arr)){throw new Error("Method getUniqueValuesByPath arr argument must be an Array, but received '".concat(_typeof(arr),"'"));}return arr.reduce(function(acc,el){var elValue=accessObjectByString(path,el,separator);if(!acc.includes(elValue)){acc.push(elValue);}return acc;},[]);}function getFilteredColumn(path,data){var filters=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];var separator=arguments.length>3?arguments[3]:undefined;if(_typeof(filters)!=='object'||!Array.isArray(filters)){throw new Error("Method getFilteredColumn filters argument must be an Array, but received '".concat(_typeof(filters),"'"));}return data.filter(function(el){return filters.includes(String(accessObjectByString(path,el,separator)));});}

},{}],5:[function(require,module,exports){
(function (global){(function (){
"use strict";

require("core-js/shim");

require("regenerator-runtime/runtime");

require("core-js/fn/regexp/escape");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"core-js/fn/regexp/escape":7,"core-js/shim":335,"regenerator-runtime/runtime":6}],6:[function(require,module,exports){
(function (global){(function (){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],7:[function(require,module,exports){
require('../../modules/core.regexp.escape');
module.exports = require('../../modules/_core').RegExp.escape;

},{"../../modules/_core":29,"../../modules/core.regexp.escape":137}],8:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],9:[function(require,module,exports){
var cof = require('./_cof');
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

},{"./_cof":24}],10:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_hide":49,"./_wks":135}],11:[function(require,module,exports){
'use strict';
var at = require('./_string-at')(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

},{"./_string-at":112}],12:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],13:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":58}],14:[function(require,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};

},{"./_to-absolute-index":120,"./_to-length":124,"./_to-object":125}],15:[function(require,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

},{"./_to-absolute-index":120,"./_to-length":124,"./_to-object":125}],16:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":45}],17:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":120,"./_to-iobject":123,"./_to-length":124}],18:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_array-species-create":21,"./_ctx":31,"./_iobject":54,"./_to-length":124,"./_to-object":125}],19:[function(require,module,exports){
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var toLength = require('./_to-length');

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

},{"./_a-function":8,"./_iobject":54,"./_to-length":124,"./_to-object":125}],20:[function(require,module,exports){
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"./_is-array":56,"./_is-object":58,"./_wks":135}],21:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":20}],22:[function(require,module,exports){
'use strict';
var aFunction = require('./_a-function');
var isObject = require('./_is-object');
var invoke = require('./_invoke');
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

},{"./_a-function":8,"./_invoke":53,"./_is-object":58}],23:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":24,"./_wks":135}],24:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],25:[function(require,module,exports){
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"./_an-instance":12,"./_ctx":31,"./_descriptors":35,"./_for-of":45,"./_iter-define":62,"./_iter-step":64,"./_meta":72,"./_object-create":77,"./_object-dp":78,"./_redefine-all":97,"./_set-species":106,"./_validate-collection":132}],26:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof');
var from = require('./_array-from-iterable');
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

},{"./_array-from-iterable":16,"./_classof":23}],27:[function(require,module,exports){
'use strict';
var redefineAll = require('./_redefine-all');
var getWeak = require('./_meta').getWeak;
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var createArrayMethod = require('./_array-methods');
var $has = require('./_has');
var validate = require('./_validate-collection');
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

},{"./_an-instance":12,"./_an-object":13,"./_array-methods":18,"./_for-of":45,"./_has":48,"./_is-object":58,"./_meta":72,"./_redefine-all":97,"./_validate-collection":132}],28:[function(require,module,exports){
'use strict';
var global = require('./_global');
var $export = require('./_export');
var redefine = require('./_redefine');
var redefineAll = require('./_redefine-all');
var meta = require('./_meta');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var fails = require('./_fails');
var $iterDetect = require('./_iter-detect');
var setToStringTag = require('./_set-to-string-tag');
var inheritIfRequired = require('./_inherit-if-required');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"./_an-instance":12,"./_export":39,"./_fails":41,"./_for-of":45,"./_global":47,"./_inherit-if-required":52,"./_is-object":58,"./_iter-detect":63,"./_meta":72,"./_redefine":98,"./_redefine-all":97,"./_set-to-string-tag":107}],29:[function(require,module,exports){
var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],30:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":78,"./_property-desc":96}],31:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":8}],32:[function(require,module,exports){
'use strict';
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = require('./_fails');
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

},{"./_fails":41}],33:[function(require,module,exports){
'use strict';
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

},{"./_an-object":13,"./_to-primitive":126}],34:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],35:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":41}],36:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":47,"./_is-object":58}],37:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],38:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":84,"./_object-keys":87,"./_object-pie":88}],39:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":29,"./_ctx":31,"./_global":47,"./_hide":49,"./_redefine":98}],40:[function(require,module,exports){
var MATCH = require('./_wks')('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};

},{"./_wks":135}],41:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],42:[function(require,module,exports){
'use strict';
require('./es6.regexp.exec');
var redefine = require('./_redefine');
var hide = require('./_hide');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');
var regexpExec = require('./_regexp-exec');

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./_defined":34,"./_fails":41,"./_hide":49,"./_redefine":98,"./_regexp-exec":100,"./_wks":135,"./es6.regexp.exec":232}],43:[function(require,module,exports){
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = require('./_an-object');
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

},{"./_an-object":13}],44:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = require('./_is-array');
var isObject = require('./_is-object');
var toLength = require('./_to-length');
var ctx = require('./_ctx');
var IS_CONCAT_SPREADABLE = require('./_wks')('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;

},{"./_ctx":31,"./_is-array":56,"./_is-object":58,"./_to-length":124,"./_wks":135}],45:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":13,"./_ctx":31,"./_is-array-iter":55,"./_iter-call":60,"./_to-length":124,"./core.get-iterator-method":136}],46:[function(require,module,exports){
module.exports = require('./_shared')('native-function-to-string', Function.toString);

},{"./_shared":109}],47:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],48:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],49:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":35,"./_object-dp":78,"./_property-desc":96}],50:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":47}],51:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":35,"./_dom-create":36,"./_fails":41}],52:[function(require,module,exports){
var isObject = require('./_is-object');
var setPrototypeOf = require('./_set-proto').set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

},{"./_is-object":58,"./_set-proto":105}],53:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],54:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":24}],55:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":65,"./_wks":135}],56:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":24}],57:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object');
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"./_is-object":58}],58:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],59:[function(require,module,exports){
// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object');
var cof = require('./_cof');
var MATCH = require('./_wks')('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

},{"./_cof":24,"./_is-object":58,"./_wks":135}],60:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":13}],61:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":49,"./_object-create":77,"./_property-desc":96,"./_set-to-string-tag":107,"./_wks":135}],62:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":39,"./_hide":49,"./_iter-create":61,"./_iterators":65,"./_library":66,"./_object-gpo":85,"./_redefine":98,"./_set-to-string-tag":107,"./_wks":135}],63:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":135}],64:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],65:[function(require,module,exports){
module.exports = {};

},{}],66:[function(require,module,exports){
module.exports = false;

},{}],67:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

},{}],68:[function(require,module,exports){
// 20.2.2.16 Math.fround(x)
var sign = require('./_math-sign');
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

},{"./_math-sign":71}],69:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

},{}],70:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};

},{}],71:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],72:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":41,"./_has":48,"./_is-object":58,"./_object-dp":78,"./_uid":130}],73:[function(require,module,exports){
var Map = require('./es6.map');
var $export = require('./_export');
var shared = require('./_shared')('metadata');
var store = shared.store || (shared.store = new (require('./es6.weak-map'))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};

},{"./_export":39,"./_shared":109,"./es6.map":167,"./es6.weak-map":274}],74:[function(require,module,exports){
var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_cof":24,"./_global":47,"./_task":119}],75:[function(require,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":8}],76:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = require('./_descriptors');
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

},{"./_descriptors":35,"./_fails":41,"./_iobject":54,"./_object-gops":84,"./_object-keys":87,"./_object-pie":88,"./_to-object":125}],77:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":13,"./_dom-create":36,"./_enum-bug-keys":37,"./_html":50,"./_object-dps":79,"./_shared-key":108}],78:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":13,"./_descriptors":35,"./_ie8-dom-define":51,"./_to-primitive":126}],79:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":13,"./_descriptors":35,"./_object-dp":78,"./_object-keys":87}],80:[function(require,module,exports){
'use strict';
// Forced replacement prototype accessors methods
module.exports = require('./_library') || !require('./_fails')(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete require('./_global')[K];
});

},{"./_fails":41,"./_global":47,"./_library":66}],81:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":35,"./_has":48,"./_ie8-dom-define":51,"./_object-pie":88,"./_property-desc":96,"./_to-iobject":123,"./_to-primitive":126}],82:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":83,"./_to-iobject":123}],83:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":37,"./_object-keys-internal":86}],84:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],85:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":48,"./_shared-key":108,"./_to-object":125}],86:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":17,"./_has":48,"./_shared-key":108,"./_to-iobject":123}],87:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":37,"./_object-keys-internal":86}],88:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],89:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":29,"./_export":39,"./_fails":41}],90:[function(require,module,exports){
var DESCRIPTORS = require('./_descriptors');
var getKeys = require('./_object-keys');
var toIObject = require('./_to-iobject');
var isEnum = require('./_object-pie').f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

},{"./_descriptors":35,"./_object-keys":87,"./_object-pie":88,"./_to-iobject":123}],91:[function(require,module,exports){
// all object keys, includes non-enumerable and symbols
var gOPN = require('./_object-gopn');
var gOPS = require('./_object-gops');
var anObject = require('./_an-object');
var Reflect = require('./_global').Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

},{"./_an-object":13,"./_global":47,"./_object-gopn":83,"./_object-gops":84}],92:[function(require,module,exports){
var $parseFloat = require('./_global').parseFloat;
var $trim = require('./_string-trim').trim;

module.exports = 1 / $parseFloat(require('./_string-ws') + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

},{"./_global":47,"./_string-trim":117,"./_string-ws":118}],93:[function(require,module,exports){
var $parseInt = require('./_global').parseInt;
var $trim = require('./_string-trim').trim;
var ws = require('./_string-ws');
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"./_global":47,"./_string-trim":117,"./_string-ws":118}],94:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],95:[function(require,module,exports){
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":13,"./_is-object":58,"./_new-promise-capability":75}],96:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],97:[function(require,module,exports){
var redefine = require('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

},{"./_redefine":98}],98:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var $toString = require('./_function-to-string');
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":29,"./_function-to-string":46,"./_global":47,"./_has":48,"./_hide":49,"./_uid":130}],99:[function(require,module,exports){
'use strict';

var classof = require('./_classof');
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};

},{"./_classof":23}],100:[function(require,module,exports){
'use strict';

var regexpFlags = require('./_flags');

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;

},{"./_flags":43}],101:[function(require,module,exports){
module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};

},{}],102:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],103:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');
var aFunction = require('./_a-function');
var ctx = require('./_ctx');
var forOf = require('./_for-of');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

},{"./_a-function":8,"./_ctx":31,"./_export":39,"./_for-of":45}],104:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

},{"./_export":39}],105:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":13,"./_ctx":31,"./_is-object":58,"./_object-gopd":81}],106:[function(require,module,exports){
'use strict';
var global = require('./_global');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_descriptors":35,"./_global":47,"./_object-dp":78,"./_wks":135}],107:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":48,"./_object-dp":78,"./_wks":135}],108:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":109,"./_uid":130}],109:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":29,"./_global":47,"./_library":66}],110:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":8,"./_an-object":13,"./_wks":135}],111:[function(require,module,exports){
'use strict';
var fails = require('./_fails');

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};

},{"./_fails":41}],112:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":34,"./_to-integer":122}],113:[function(require,module,exports){
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require('./_is-regexp');
var defined = require('./_defined');

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

},{"./_defined":34,"./_is-regexp":59}],114:[function(require,module,exports){
var $export = require('./_export');
var fails = require('./_fails');
var defined = require('./_defined');
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

},{"./_defined":34,"./_export":39,"./_fails":41}],115:[function(require,module,exports){
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require('./_to-length');
var repeat = require('./_string-repeat');
var defined = require('./_defined');

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

},{"./_defined":34,"./_string-repeat":116,"./_to-length":124}],116:[function(require,module,exports){
'use strict';
var toInteger = require('./_to-integer');
var defined = require('./_defined');

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};

},{"./_defined":34,"./_to-integer":122}],117:[function(require,module,exports){
var $export = require('./_export');
var defined = require('./_defined');
var fails = require('./_fails');
var spaces = require('./_string-ws');
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

},{"./_defined":34,"./_export":39,"./_fails":41,"./_string-ws":118}],118:[function(require,module,exports){
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],119:[function(require,module,exports){
var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":24,"./_ctx":31,"./_dom-create":36,"./_global":47,"./_html":50,"./_invoke":53}],120:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":122}],121:[function(require,module,exports){
// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

},{"./_to-integer":122,"./_to-length":124}],122:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],123:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":34,"./_iobject":54}],124:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":122}],125:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":34}],126:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":58}],127:[function(require,module,exports){
'use strict';
if (require('./_descriptors')) {
  var LIBRARY = require('./_library');
  var global = require('./_global');
  var fails = require('./_fails');
  var $export = require('./_export');
  var $typed = require('./_typed');
  var $buffer = require('./_typed-buffer');
  var ctx = require('./_ctx');
  var anInstance = require('./_an-instance');
  var propertyDesc = require('./_property-desc');
  var hide = require('./_hide');
  var redefineAll = require('./_redefine-all');
  var toInteger = require('./_to-integer');
  var toLength = require('./_to-length');
  var toIndex = require('./_to-index');
  var toAbsoluteIndex = require('./_to-absolute-index');
  var toPrimitive = require('./_to-primitive');
  var has = require('./_has');
  var classof = require('./_classof');
  var isObject = require('./_is-object');
  var toObject = require('./_to-object');
  var isArrayIter = require('./_is-array-iter');
  var create = require('./_object-create');
  var getPrototypeOf = require('./_object-gpo');
  var gOPN = require('./_object-gopn').f;
  var getIterFn = require('./core.get-iterator-method');
  var uid = require('./_uid');
  var wks = require('./_wks');
  var createArrayMethod = require('./_array-methods');
  var createArrayIncludes = require('./_array-includes');
  var speciesConstructor = require('./_species-constructor');
  var ArrayIterators = require('./es6.array.iterator');
  var Iterators = require('./_iterators');
  var $iterDetect = require('./_iter-detect');
  var setSpecies = require('./_set-species');
  var arrayFill = require('./_array-fill');
  var arrayCopyWithin = require('./_array-copy-within');
  var $DP = require('./_object-dp');
  var $GOPD = require('./_object-gopd');
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };

},{"./_an-instance":12,"./_array-copy-within":14,"./_array-fill":15,"./_array-includes":17,"./_array-methods":18,"./_classof":23,"./_ctx":31,"./_descriptors":35,"./_export":39,"./_fails":41,"./_global":47,"./_has":48,"./_hide":49,"./_is-array-iter":55,"./_is-object":58,"./_iter-detect":63,"./_iterators":65,"./_library":66,"./_object-create":77,"./_object-dp":78,"./_object-gopd":81,"./_object-gopn":83,"./_object-gpo":85,"./_property-desc":96,"./_redefine-all":97,"./_set-species":106,"./_species-constructor":110,"./_to-absolute-index":120,"./_to-index":121,"./_to-integer":122,"./_to-length":124,"./_to-object":125,"./_to-primitive":126,"./_typed":129,"./_typed-buffer":128,"./_uid":130,"./_wks":135,"./core.get-iterator-method":136,"./es6.array.iterator":148}],128:[function(require,module,exports){
'use strict';
var global = require('./_global');
var DESCRIPTORS = require('./_descriptors');
var LIBRARY = require('./_library');
var $typed = require('./_typed');
var hide = require('./_hide');
var redefineAll = require('./_redefine-all');
var fails = require('./_fails');
var anInstance = require('./_an-instance');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var toIndex = require('./_to-index');
var gOPN = require('./_object-gopn').f;
var dP = require('./_object-dp').f;
var arrayFill = require('./_array-fill');
var setToStringTag = require('./_set-to-string-tag');
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

},{"./_an-instance":12,"./_array-fill":15,"./_descriptors":35,"./_fails":41,"./_global":47,"./_hide":49,"./_library":66,"./_object-dp":78,"./_object-gopn":83,"./_redefine-all":97,"./_set-to-string-tag":107,"./_to-index":121,"./_to-integer":122,"./_to-length":124,"./_typed":129}],129:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var uid = require('./_uid');
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

},{"./_global":47,"./_hide":49,"./_uid":130}],130:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],131:[function(require,module,exports){
var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":47}],132:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":58}],133:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":29,"./_global":47,"./_library":66,"./_object-dp":78,"./_wks-ext":134}],134:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":135}],135:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":47,"./_shared":109,"./_uid":130}],136:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":23,"./_core":29,"./_iterators":65,"./_wks":135}],137:[function(require,module,exports){
// https://github.com/benjamingr/RexExp.escape
var $export = require('./_export');
var $re = require('./_replacer')(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });

},{"./_export":39,"./_replacer":101}],138:[function(require,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { copyWithin: require('./_array-copy-within') });

require('./_add-to-unscopables')('copyWithin');

},{"./_add-to-unscopables":10,"./_array-copy-within":14,"./_export":39}],139:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $every = require('./_array-methods')(4);

$export($export.P + $export.F * !require('./_strict-method')([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":18,"./_export":39,"./_strict-method":111}],140:[function(require,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { fill: require('./_array-fill') });

require('./_add-to-unscopables')('fill');

},{"./_add-to-unscopables":10,"./_array-fill":15,"./_export":39}],141:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $filter = require('./_array-methods')(2);

$export($export.P + $export.F * !require('./_strict-method')([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":18,"./_export":39,"./_strict-method":111}],142:[function(require,module,exports){
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_add-to-unscopables":10,"./_array-methods":18,"./_export":39}],143:[function(require,module,exports){
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_add-to-unscopables":10,"./_array-methods":18,"./_export":39}],144:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $forEach = require('./_array-methods')(0);
var STRICT = require('./_strict-method')([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":18,"./_export":39,"./_strict-method":111}],145:[function(require,module,exports){
'use strict';
var ctx = require('./_ctx');
var $export = require('./_export');
var toObject = require('./_to-object');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var toLength = require('./_to-length');
var createProperty = require('./_create-property');
var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":30,"./_ctx":31,"./_export":39,"./_is-array-iter":55,"./_iter-call":60,"./_iter-detect":63,"./_to-length":124,"./_to-object":125,"./core.get-iterator-method":136}],146:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $indexOf = require('./_array-includes')(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

},{"./_array-includes":17,"./_export":39,"./_strict-method":111}],147:[function(require,module,exports){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = require('./_export');

$export($export.S, 'Array', { isArray: require('./_is-array') });

},{"./_export":39,"./_is-array":56}],148:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":10,"./_iter-define":62,"./_iter-step":64,"./_iterators":65,"./_to-iobject":123}],149:[function(require,module,exports){
'use strict';
// 22.1.3.13 Array.prototype.join(separator)
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (require('./_iobject') != Object || !require('./_strict-method')(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

},{"./_export":39,"./_iobject":54,"./_strict-method":111,"./_to-iobject":123}],150:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});

},{"./_export":39,"./_strict-method":111,"./_to-integer":122,"./_to-iobject":123,"./_to-length":124}],151:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $map = require('./_array-methods')(1);

$export($export.P + $export.F * !require('./_strict-method')([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":18,"./_export":39,"./_strict-method":111}],152:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var createProperty = require('./_create-property');

// WebKit Array.of isn't generic
$export($export.S + $export.F * require('./_fails')(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

},{"./_create-property":30,"./_export":39,"./_fails":41}],153:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

},{"./_array-reduce":19,"./_export":39,"./_strict-method":111}],154:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

},{"./_array-reduce":19,"./_export":39,"./_strict-method":111}],155:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var html = require('./_html');
var cof = require('./_cof');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * require('./_fails')(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

},{"./_cof":24,"./_export":39,"./_fails":41,"./_html":50,"./_to-absolute-index":120,"./_to-length":124}],156:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $some = require('./_array-methods')(3);

$export($export.P + $export.F * !require('./_strict-method')([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":18,"./_export":39,"./_strict-method":111}],157:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var fails = require('./_fails');
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !require('./_strict-method')($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});

},{"./_a-function":8,"./_export":39,"./_fails":41,"./_strict-method":111,"./_to-object":125}],158:[function(require,module,exports){
require('./_set-species')('Array');

},{"./_set-species":106}],159:[function(require,module,exports){
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require('./_export');

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

},{"./_export":39}],160:[function(require,module,exports){
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = require('./_export');
var toISOString = require('./_date-to-iso-string');

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

},{"./_date-to-iso-string":32,"./_export":39}],161:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');

$export($export.P + $export.F * require('./_fails')(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

},{"./_export":39,"./_fails":41,"./_to-object":125,"./_to-primitive":126}],162:[function(require,module,exports){
var TO_PRIMITIVE = require('./_wks')('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) require('./_hide')(proto, TO_PRIMITIVE, require('./_date-to-primitive'));

},{"./_date-to-primitive":33,"./_hide":49,"./_wks":135}],163:[function(require,module,exports){
var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  require('./_redefine')(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

},{"./_redefine":98}],164:[function(require,module,exports){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = require('./_export');

$export($export.P, 'Function', { bind: require('./_bind') });

},{"./_bind":22,"./_export":39}],165:[function(require,module,exports){
'use strict';
var isObject = require('./_is-object');
var getPrototypeOf = require('./_object-gpo');
var HAS_INSTANCE = require('./_wks')('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) require('./_object-dp').f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });

},{"./_is-object":58,"./_object-dp":78,"./_object-gpo":85,"./_wks":135}],166:[function(require,module,exports){
var dP = require('./_object-dp').f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || require('./_descriptors') && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

},{"./_descriptors":35,"./_object-dp":78}],167:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection":28,"./_collection-strong":25,"./_validate-collection":132}],168:[function(require,module,exports){
// 20.2.2.3 Math.acosh(x)
var $export = require('./_export');
var log1p = require('./_math-log1p');
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

},{"./_export":39,"./_math-log1p":69}],169:[function(require,module,exports){
// 20.2.2.5 Math.asinh(x)
var $export = require('./_export');
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

},{"./_export":39}],170:[function(require,module,exports){
// 20.2.2.7 Math.atanh(x)
var $export = require('./_export');
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

},{"./_export":39}],171:[function(require,module,exports){
// 20.2.2.9 Math.cbrt(x)
var $export = require('./_export');
var sign = require('./_math-sign');

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

},{"./_export":39,"./_math-sign":71}],172:[function(require,module,exports){
// 20.2.2.11 Math.clz32(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

},{"./_export":39}],173:[function(require,module,exports){
// 20.2.2.12 Math.cosh(x)
var $export = require('./_export');
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

},{"./_export":39}],174:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
var $export = require('./_export');
var $expm1 = require('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

},{"./_export":39,"./_math-expm1":67}],175:[function(require,module,exports){
// 20.2.2.16 Math.fround(x)
var $export = require('./_export');

$export($export.S, 'Math', { fround: require('./_math-fround') });

},{"./_export":39,"./_math-fround":68}],176:[function(require,module,exports){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = require('./_export');
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

},{"./_export":39}],177:[function(require,module,exports){
// 20.2.2.18 Math.imul(x, y)
var $export = require('./_export');
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * require('./_fails')(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

},{"./_export":39,"./_fails":41}],178:[function(require,module,exports){
// 20.2.2.21 Math.log10(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

},{"./_export":39}],179:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
var $export = require('./_export');

$export($export.S, 'Math', { log1p: require('./_math-log1p') });

},{"./_export":39,"./_math-log1p":69}],180:[function(require,module,exports){
// 20.2.2.22 Math.log2(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

},{"./_export":39}],181:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', { sign: require('./_math-sign') });

},{"./_export":39,"./_math-sign":71}],182:[function(require,module,exports){
// 20.2.2.30 Math.sinh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * require('./_fails')(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

},{"./_export":39,"./_fails":41,"./_math-expm1":67}],183:[function(require,module,exports){
// 20.2.2.33 Math.tanh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

},{"./_export":39,"./_math-expm1":67}],184:[function(require,module,exports){
// 20.2.2.34 Math.trunc(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

},{"./_export":39}],185:[function(require,module,exports){
'use strict';
var global = require('./_global');
var has = require('./_has');
var cof = require('./_cof');
var inheritIfRequired = require('./_inherit-if-required');
var toPrimitive = require('./_to-primitive');
var fails = require('./_fails');
var gOPN = require('./_object-gopn').f;
var gOPD = require('./_object-gopd').f;
var dP = require('./_object-dp').f;
var $trim = require('./_string-trim').trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(require('./_object-create')(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = require('./_descriptors') ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  require('./_redefine')(global, NUMBER, $Number);
}

},{"./_cof":24,"./_descriptors":35,"./_fails":41,"./_global":47,"./_has":48,"./_inherit-if-required":52,"./_object-create":77,"./_object-dp":78,"./_object-gopd":81,"./_object-gopn":83,"./_redefine":98,"./_string-trim":117,"./_to-primitive":126}],186:[function(require,module,exports){
// 20.1.2.1 Number.EPSILON
var $export = require('./_export');

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

},{"./_export":39}],187:[function(require,module,exports){
// 20.1.2.2 Number.isFinite(number)
var $export = require('./_export');
var _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

},{"./_export":39,"./_global":47}],188:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var $export = require('./_export');

$export($export.S, 'Number', { isInteger: require('./_is-integer') });

},{"./_export":39,"./_is-integer":57}],189:[function(require,module,exports){
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

},{"./_export":39}],190:[function(require,module,exports){
// 20.1.2.5 Number.isSafeInteger(number)
var $export = require('./_export');
var isInteger = require('./_is-integer');
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

},{"./_export":39,"./_is-integer":57}],191:[function(require,module,exports){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

},{"./_export":39}],192:[function(require,module,exports){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

},{"./_export":39}],193:[function(require,module,exports){
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

},{"./_export":39,"./_parse-float":92}],194:[function(require,module,exports){
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

},{"./_export":39,"./_parse-int":93}],195:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toInteger = require('./_to-integer');
var aNumberValue = require('./_a-number-value');
var repeat = require('./_string-repeat');
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !require('./_fails')(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

},{"./_a-number-value":9,"./_export":39,"./_fails":41,"./_string-repeat":116,"./_to-integer":122}],196:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $fails = require('./_fails');
var aNumberValue = require('./_a-number-value');
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

},{"./_a-number-value":9,"./_export":39,"./_fails":41}],197:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":39,"./_object-assign":76}],198:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":39,"./_object-create":77}],199:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperties: require('./_object-dps') });

},{"./_descriptors":35,"./_export":39,"./_object-dps":79}],200:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":35,"./_export":39,"./_object-dp":78}],201:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

},{"./_is-object":58,"./_meta":72,"./_object-sap":89}],202:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_object-gopd":81,"./_object-sap":89,"./_to-iobject":123}],203:[function(require,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function () {
  return require('./_object-gopn-ext').f;
});

},{"./_object-gopn-ext":82,"./_object-sap":89}],204:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":85,"./_object-sap":89,"./_to-object":125}],205:[function(require,module,exports){
// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./_is-object');

require('./_object-sap')('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

},{"./_is-object":58,"./_object-sap":89}],206:[function(require,module,exports){
// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./_is-object');

require('./_object-sap')('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

},{"./_is-object":58,"./_object-sap":89}],207:[function(require,module,exports){
// 19.1.2.13 Object.isSealed(O)
var isObject = require('./_is-object');

require('./_object-sap')('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

},{"./_is-object":58,"./_object-sap":89}],208:[function(require,module,exports){
// 19.1.3.10 Object.is(value1, value2)
var $export = require('./_export');
$export($export.S, 'Object', { is: require('./_same-value') });

},{"./_export":39,"./_same-value":102}],209:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":87,"./_object-sap":89,"./_to-object":125}],210:[function(require,module,exports){
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

},{"./_is-object":58,"./_meta":72,"./_object-sap":89}],211:[function(require,module,exports){
// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

},{"./_is-object":58,"./_meta":72,"./_object-sap":89}],212:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":39,"./_set-proto":105}],213:[function(require,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = require('./_classof');
var test = {};
test[require('./_wks')('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  require('./_redefine')(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

},{"./_classof":23,"./_redefine":98,"./_wks":135}],214:[function(require,module,exports){
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

},{"./_export":39,"./_parse-float":92}],215:[function(require,module,exports){
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

},{"./_export":39,"./_parse-int":93}],216:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var userAgent = require('./_user-agent');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_a-function":8,"./_an-instance":12,"./_classof":23,"./_core":29,"./_ctx":31,"./_export":39,"./_for-of":45,"./_global":47,"./_is-object":58,"./_iter-detect":63,"./_library":66,"./_microtask":74,"./_new-promise-capability":75,"./_perform":94,"./_promise-resolve":95,"./_redefine-all":97,"./_set-species":106,"./_set-to-string-tag":107,"./_species-constructor":110,"./_task":119,"./_user-agent":131,"./_wks":135}],217:[function(require,module,exports){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = require('./_export');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var rApply = (require('./_global').Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !require('./_fails')(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

},{"./_a-function":8,"./_an-object":13,"./_export":39,"./_fails":41,"./_global":47}],218:[function(require,module,exports){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = require('./_export');
var create = require('./_object-create');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var fails = require('./_fails');
var bind = require('./_bind');
var rConstruct = (require('./_global').Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

},{"./_a-function":8,"./_an-object":13,"./_bind":22,"./_export":39,"./_fails":41,"./_global":47,"./_is-object":58,"./_object-create":77}],219:[function(require,module,exports){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = require('./_object-dp');
var $export = require('./_export');
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * require('./_fails')(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_an-object":13,"./_export":39,"./_fails":41,"./_object-dp":78,"./_to-primitive":126}],220:[function(require,module,exports){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = require('./_export');
var gOPD = require('./_object-gopd').f;
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

},{"./_an-object":13,"./_export":39,"./_object-gopd":81}],221:[function(require,module,exports){
'use strict';
// 26.1.5 Reflect.enumerate(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
require('./_iter-create')(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

},{"./_an-object":13,"./_export":39,"./_iter-create":61}],222:[function(require,module,exports){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = require('./_object-gopd');
var $export = require('./_export');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

},{"./_an-object":13,"./_export":39,"./_object-gopd":81}],223:[function(require,module,exports){
// 26.1.8 Reflect.getPrototypeOf(target)
var $export = require('./_export');
var getProto = require('./_object-gpo');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

},{"./_an-object":13,"./_export":39,"./_object-gpo":85}],224:[function(require,module,exports){
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var isObject = require('./_is-object');
var anObject = require('./_an-object');

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });

},{"./_an-object":13,"./_export":39,"./_has":48,"./_is-object":58,"./_object-gopd":81,"./_object-gpo":85}],225:[function(require,module,exports){
// 26.1.9 Reflect.has(target, propertyKey)
var $export = require('./_export');

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

},{"./_export":39}],226:[function(require,module,exports){
// 26.1.10 Reflect.isExtensible(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

},{"./_an-object":13,"./_export":39}],227:[function(require,module,exports){
// 26.1.11 Reflect.ownKeys(target)
var $export = require('./_export');

$export($export.S, 'Reflect', { ownKeys: require('./_own-keys') });

},{"./_export":39,"./_own-keys":91}],228:[function(require,module,exports){
// 26.1.12 Reflect.preventExtensions(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_an-object":13,"./_export":39}],229:[function(require,module,exports){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = require('./_export');
var setProto = require('./_set-proto');

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_export":39,"./_set-proto":105}],230:[function(require,module,exports){
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = require('./_object-dp');
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var createDesc = require('./_property-desc');
var anObject = require('./_an-object');
var isObject = require('./_is-object');

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });

},{"./_an-object":13,"./_export":39,"./_has":48,"./_is-object":58,"./_object-dp":78,"./_object-gopd":81,"./_object-gpo":85,"./_property-desc":96}],231:[function(require,module,exports){
var global = require('./_global');
var inheritIfRequired = require('./_inherit-if-required');
var dP = require('./_object-dp').f;
var gOPN = require('./_object-gopn').f;
var isRegExp = require('./_is-regexp');
var $flags = require('./_flags');
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (require('./_descriptors') && (!CORRECT_NEW || require('./_fails')(function () {
  re2[require('./_wks')('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  require('./_redefine')(global, 'RegExp', $RegExp);
}

require('./_set-species')('RegExp');

},{"./_descriptors":35,"./_fails":41,"./_flags":43,"./_global":47,"./_inherit-if-required":52,"./_is-regexp":59,"./_object-dp":78,"./_object-gopn":83,"./_redefine":98,"./_set-species":106,"./_wks":135}],232:[function(require,module,exports){
'use strict';
var regexpExec = require('./_regexp-exec');
require('./_export')({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});

},{"./_export":39,"./_regexp-exec":100}],233:[function(require,module,exports){
// 21.2.5.3 get RegExp.prototype.flags()
if (require('./_descriptors') && /./g.flags != 'g') require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});

},{"./_descriptors":35,"./_flags":43,"./_object-dp":78}],234:[function(require,module,exports){
'use strict';

var anObject = require('./_an-object');
var toLength = require('./_to-length');
var advanceStringIndex = require('./_advance-string-index');
var regExpExec = require('./_regexp-exec-abstract');

// @@match logic
require('./_fix-re-wks')('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

},{"./_advance-string-index":11,"./_an-object":13,"./_fix-re-wks":42,"./_regexp-exec-abstract":99,"./_to-length":124}],235:[function(require,module,exports){
'use strict';

var anObject = require('./_an-object');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var toInteger = require('./_to-integer');
var advanceStringIndex = require('./_advance-string-index');
var regExpExec = require('./_regexp-exec-abstract');
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});

},{"./_advance-string-index":11,"./_an-object":13,"./_fix-re-wks":42,"./_regexp-exec-abstract":99,"./_to-integer":122,"./_to-length":124,"./_to-object":125}],236:[function(require,module,exports){
'use strict';

var anObject = require('./_an-object');
var sameValue = require('./_same-value');
var regExpExec = require('./_regexp-exec-abstract');

// @@search logic
require('./_fix-re-wks')('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});

},{"./_an-object":13,"./_fix-re-wks":42,"./_regexp-exec-abstract":99,"./_same-value":102}],237:[function(require,module,exports){
'use strict';

var isRegExp = require('./_is-regexp');
var anObject = require('./_an-object');
var speciesConstructor = require('./_species-constructor');
var advanceStringIndex = require('./_advance-string-index');
var toLength = require('./_to-length');
var callRegExpExec = require('./_regexp-exec-abstract');
var regexpExec = require('./_regexp-exec');
var fails = require('./_fails');
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
require('./_fix-re-wks')('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});

},{"./_advance-string-index":11,"./_an-object":13,"./_fails":41,"./_fix-re-wks":42,"./_is-regexp":59,"./_regexp-exec":100,"./_regexp-exec-abstract":99,"./_species-constructor":110,"./_to-length":124}],238:[function(require,module,exports){
'use strict';
require('./es6.regexp.flags');
var anObject = require('./_an-object');
var $flags = require('./_flags');
var DESCRIPTORS = require('./_descriptors');
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  require('./_redefine')(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (require('./_fails')(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

},{"./_an-object":13,"./_descriptors":35,"./_fails":41,"./_flags":43,"./_redefine":98,"./es6.regexp.flags":233}],239:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var SET = 'Set';

// 23.2 Set Objects
module.exports = require('./_collection')(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

},{"./_collection":28,"./_collection-strong":25,"./_validate-collection":132}],240:[function(require,module,exports){
'use strict';
// B.2.3.2 String.prototype.anchor(name)
require('./_string-html')('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

},{"./_string-html":114}],241:[function(require,module,exports){
'use strict';
// B.2.3.3 String.prototype.big()
require('./_string-html')('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

},{"./_string-html":114}],242:[function(require,module,exports){
'use strict';
// B.2.3.4 String.prototype.blink()
require('./_string-html')('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

},{"./_string-html":114}],243:[function(require,module,exports){
'use strict';
// B.2.3.5 String.prototype.bold()
require('./_string-html')('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

},{"./_string-html":114}],244:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $at = require('./_string-at')(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

},{"./_export":39,"./_string-at":112}],245:[function(require,module,exports){
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

},{"./_export":39,"./_fails-is-regexp":40,"./_string-context":113,"./_to-length":124}],246:[function(require,module,exports){
'use strict';
// B.2.3.6 String.prototype.fixed()
require('./_string-html')('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

},{"./_string-html":114}],247:[function(require,module,exports){
'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
require('./_string-html')('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

},{"./_string-html":114}],248:[function(require,module,exports){
'use strict';
// B.2.3.8 String.prototype.fontsize(size)
require('./_string-html')('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

},{"./_string-html":114}],249:[function(require,module,exports){
var $export = require('./_export');
var toAbsoluteIndex = require('./_to-absolute-index');
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

},{"./_export":39,"./_to-absolute-index":120}],250:[function(require,module,exports){
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export = require('./_export');
var context = require('./_string-context');
var INCLUDES = 'includes';

$export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"./_export":39,"./_fails-is-regexp":40,"./_string-context":113}],251:[function(require,module,exports){
'use strict';
// B.2.3.9 String.prototype.italics()
require('./_string-html')('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

},{"./_string-html":114}],252:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":62,"./_string-at":112}],253:[function(require,module,exports){
'use strict';
// B.2.3.10 String.prototype.link(url)
require('./_string-html')('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

},{"./_string-html":114}],254:[function(require,module,exports){
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});

},{"./_export":39,"./_to-iobject":123,"./_to-length":124}],255:[function(require,module,exports){
var $export = require('./_export');

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./_string-repeat')
});

},{"./_export":39,"./_string-repeat":116}],256:[function(require,module,exports){
'use strict';
// B.2.3.11 String.prototype.small()
require('./_string-html')('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

},{"./_string-html":114}],257:[function(require,module,exports){
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

},{"./_export":39,"./_fails-is-regexp":40,"./_string-context":113,"./_to-length":124}],258:[function(require,module,exports){
'use strict';
// B.2.3.12 String.prototype.strike()
require('./_string-html')('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

},{"./_string-html":114}],259:[function(require,module,exports){
'use strict';
// B.2.3.13 String.prototype.sub()
require('./_string-html')('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

},{"./_string-html":114}],260:[function(require,module,exports){
'use strict';
// B.2.3.14 String.prototype.sup()
require('./_string-html')('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

},{"./_string-html":114}],261:[function(require,module,exports){
'use strict';
// 21.1.3.25 String.prototype.trim()
require('./_string-trim')('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

},{"./_string-trim":117}],262:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toObject = require('./_to-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $GOPS = require('./_object-gops');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":13,"./_descriptors":35,"./_enum-keys":38,"./_export":39,"./_fails":41,"./_global":47,"./_has":48,"./_hide":49,"./_is-array":56,"./_is-object":58,"./_library":66,"./_meta":72,"./_object-create":77,"./_object-dp":78,"./_object-gopd":81,"./_object-gopn":83,"./_object-gopn-ext":82,"./_object-gops":84,"./_object-keys":87,"./_object-pie":88,"./_property-desc":96,"./_redefine":98,"./_set-to-string-tag":107,"./_shared":109,"./_to-iobject":123,"./_to-object":125,"./_to-primitive":126,"./_uid":130,"./_wks":135,"./_wks-define":133,"./_wks-ext":134}],263:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var $typed = require('./_typed');
var buffer = require('./_typed-buffer');
var anObject = require('./_an-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var isObject = require('./_is-object');
var ArrayBuffer = require('./_global').ArrayBuffer;
var speciesConstructor = require('./_species-constructor');
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * require('./_fails')(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

require('./_set-species')(ARRAY_BUFFER);

},{"./_an-object":13,"./_export":39,"./_fails":41,"./_global":47,"./_is-object":58,"./_set-species":106,"./_species-constructor":110,"./_to-absolute-index":120,"./_to-length":124,"./_typed":129,"./_typed-buffer":128}],264:[function(require,module,exports){
var $export = require('./_export');
$export($export.G + $export.W + $export.F * !require('./_typed').ABV, {
  DataView: require('./_typed-buffer').DataView
});

},{"./_export":39,"./_typed":129,"./_typed-buffer":128}],265:[function(require,module,exports){
require('./_typed-array')('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":127}],266:[function(require,module,exports){
require('./_typed-array')('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":127}],267:[function(require,module,exports){
require('./_typed-array')('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":127}],268:[function(require,module,exports){
require('./_typed-array')('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":127}],269:[function(require,module,exports){
require('./_typed-array')('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":127}],270:[function(require,module,exports){
require('./_typed-array')('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":127}],271:[function(require,module,exports){
require('./_typed-array')('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":127}],272:[function(require,module,exports){
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":127}],273:[function(require,module,exports){
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

},{"./_typed-array":127}],274:[function(require,module,exports){
'use strict';
var global = require('./_global');
var each = require('./_array-methods')(0);
var redefine = require('./_redefine');
var meta = require('./_meta');
var assign = require('./_object-assign');
var weak = require('./_collection-weak');
var isObject = require('./_is-object');
var validate = require('./_validate-collection');
var NATIVE_WEAK_MAP = require('./_validate-collection');
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

},{"./_array-methods":18,"./_collection":28,"./_collection-weak":27,"./_global":47,"./_is-object":58,"./_meta":72,"./_object-assign":76,"./_redefine":98,"./_validate-collection":132}],275:[function(require,module,exports){
'use strict';
var weak = require('./_collection-weak');
var validate = require('./_validate-collection');
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
require('./_collection')(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

},{"./_collection":28,"./_collection-weak":27,"./_validate-collection":132}],276:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = require('./_export');
var flattenIntoArray = require('./_flatten-into-array');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var aFunction = require('./_a-function');
var arraySpeciesCreate = require('./_array-species-create');

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

require('./_add-to-unscopables')('flatMap');

},{"./_a-function":8,"./_add-to-unscopables":10,"./_array-species-create":21,"./_export":39,"./_flatten-into-array":44,"./_to-length":124,"./_to-object":125}],277:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = require('./_export');
var flattenIntoArray = require('./_flatten-into-array');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var toInteger = require('./_to-integer');
var arraySpeciesCreate = require('./_array-species-create');

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

require('./_add-to-unscopables')('flatten');

},{"./_add-to-unscopables":10,"./_array-species-create":21,"./_export":39,"./_flatten-into-array":44,"./_to-integer":122,"./_to-length":124,"./_to-object":125}],278:[function(require,module,exports){
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export = require('./_export');
var $includes = require('./_array-includes')(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')('includes');

},{"./_add-to-unscopables":10,"./_array-includes":17,"./_export":39}],279:[function(require,module,exports){
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = require('./_export');
var microtask = require('./_microtask')();
var process = require('./_global').process;
var isNode = require('./_cof')(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});

},{"./_cof":24,"./_export":39,"./_global":47,"./_microtask":74}],280:[function(require,module,exports){
// https://github.com/ljharb/proposal-is-error
var $export = require('./_export');
var cof = require('./_cof');

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});

},{"./_cof":24,"./_export":39}],281:[function(require,module,exports){
// https://github.com/tc39/proposal-global
var $export = require('./_export');

$export($export.G, { global: require('./_global') });

},{"./_export":39,"./_global":47}],282:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
require('./_set-collection-from')('Map');

},{"./_set-collection-from":103}],283:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
require('./_set-collection-of')('Map');

},{"./_set-collection-of":104}],284:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Map', { toJSON: require('./_collection-to-json')('Map') });

},{"./_collection-to-json":26,"./_export":39}],285:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});

},{"./_export":39}],286:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });

},{"./_export":39}],287:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});

},{"./_export":39}],288:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');
var scale = require('./_math-scale');
var fround = require('./_math-fround');

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});

},{"./_export":39,"./_math-fround":68,"./_math-scale":70}],289:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

},{"./_export":39}],290:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

},{"./_export":39}],291:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

},{"./_export":39}],292:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });

},{"./_export":39}],293:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});

},{"./_export":39}],294:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', { scale: require('./_math-scale') });

},{"./_export":39,"./_math-scale":70}],295:[function(require,module,exports){
// http://jfbastien.github.io/papers/Math.signbit.html
var $export = require('./_export');

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });

},{"./_export":39}],296:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

},{"./_export":39}],297:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var aFunction = require('./_a-function');
var $defineProperty = require('./_object-dp');

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});

},{"./_a-function":8,"./_descriptors":35,"./_export":39,"./_object-dp":78,"./_object-forced-pam":80,"./_to-object":125}],298:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var aFunction = require('./_a-function');
var $defineProperty = require('./_object-dp');

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});

},{"./_a-function":8,"./_descriptors":35,"./_export":39,"./_object-dp":78,"./_object-forced-pam":80,"./_to-object":125}],299:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

},{"./_export":39,"./_object-to-array":90}],300:[function(require,module,exports){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = require('./_export');
var ownKeys = require('./_own-keys');
var toIObject = require('./_to-iobject');
var gOPD = require('./_object-gopd');
var createProperty = require('./_create-property');

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

},{"./_create-property":30,"./_export":39,"./_object-gopd":81,"./_own-keys":91,"./_to-iobject":123}],301:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');
var getPrototypeOf = require('./_object-gpo');
var getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});

},{"./_descriptors":35,"./_export":39,"./_object-forced-pam":80,"./_object-gopd":81,"./_object-gpo":85,"./_to-object":125,"./_to-primitive":126}],302:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');
var getPrototypeOf = require('./_object-gpo');
var getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});

},{"./_descriptors":35,"./_export":39,"./_object-forced-pam":80,"./_object-gopd":81,"./_object-gpo":85,"./_to-object":125,"./_to-primitive":126}],303:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

},{"./_export":39,"./_object-to-array":90}],304:[function(require,module,exports){
'use strict';
// https://github.com/zenparsing/es-observable
var $export = require('./_export');
var global = require('./_global');
var core = require('./_core');
var microtask = require('./_microtask')();
var OBSERVABLE = require('./_wks')('observable');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var anInstance = require('./_an-instance');
var redefineAll = require('./_redefine-all');
var hide = require('./_hide');
var forOf = require('./_for-of');
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

require('./_set-species')('Observable');

},{"./_a-function":8,"./_an-instance":12,"./_an-object":13,"./_core":29,"./_export":39,"./_for-of":45,"./_global":47,"./_hide":49,"./_microtask":74,"./_redefine-all":97,"./_set-species":106,"./_wks":135}],305:[function(require,module,exports){
// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = require('./_export');
var core = require('./_core');
var global = require('./_global');
var speciesConstructor = require('./_species-constructor');
var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"./_core":29,"./_export":39,"./_global":47,"./_promise-resolve":95,"./_species-constructor":110}],306:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-promise-try
var $export = require('./_export');
var newPromiseCapability = require('./_new-promise-capability');
var perform = require('./_perform');

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

},{"./_export":39,"./_new-promise-capability":75,"./_perform":94}],307:[function(require,module,exports){
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });

},{"./_an-object":13,"./_metadata":73}],308:[function(require,module,exports){
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });

},{"./_an-object":13,"./_metadata":73}],309:[function(require,module,exports){
var Set = require('./es6.set');
var from = require('./_array-from-iterable');
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var getPrototypeOf = require('./_object-gpo');
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });

},{"./_an-object":13,"./_array-from-iterable":16,"./_metadata":73,"./_object-gpo":85,"./es6.set":239}],310:[function(require,module,exports){
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var getPrototypeOf = require('./_object-gpo');
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_an-object":13,"./_metadata":73,"./_object-gpo":85}],311:[function(require,module,exports){
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });

},{"./_an-object":13,"./_metadata":73}],312:[function(require,module,exports){
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_an-object":13,"./_metadata":73}],313:[function(require,module,exports){
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var getPrototypeOf = require('./_object-gpo');
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_an-object":13,"./_metadata":73,"./_object-gpo":85}],314:[function(require,module,exports){
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_an-object":13,"./_metadata":73}],315:[function(require,module,exports){
var $metadata = require('./_metadata');
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });

},{"./_a-function":8,"./_an-object":13,"./_metadata":73}],316:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
require('./_set-collection-from')('Set');

},{"./_set-collection-from":103}],317:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
require('./_set-collection-of')('Set');

},{"./_set-collection-of":104}],318:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Set', { toJSON: require('./_collection-to-json')('Set') });

},{"./_collection-to-json":26,"./_export":39}],319:[function(require,module,exports){
'use strict';
// https://github.com/mathiasbynens/String.prototype.at
var $export = require('./_export');
var $at = require('./_string-at')(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});

},{"./_export":39,"./_string-at":112}],320:[function(require,module,exports){
'use strict';
// https://tc39.github.io/String.prototype.matchAll/
var $export = require('./_export');
var defined = require('./_defined');
var toLength = require('./_to-length');
var isRegExp = require('./_is-regexp');
var getFlags = require('./_flags');
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

require('./_iter-create')($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

},{"./_defined":34,"./_export":39,"./_flags":43,"./_is-regexp":59,"./_iter-create":61,"./_to-length":124}],321:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

},{"./_export":39,"./_string-pad":115,"./_user-agent":131}],322:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

},{"./_export":39,"./_string-pad":115,"./_user-agent":131}],323:[function(require,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

},{"./_string-trim":117}],324:[function(require,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

},{"./_string-trim":117}],325:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":133}],326:[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":133}],327:[function(require,module,exports){
// https://github.com/tc39/proposal-global
var $export = require('./_export');

$export($export.S, 'System', { global: require('./_global') });

},{"./_export":39,"./_global":47}],328:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
require('./_set-collection-from')('WeakMap');

},{"./_set-collection-from":103}],329:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
require('./_set-collection-of')('WeakMap');

},{"./_set-collection-of":104}],330:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
require('./_set-collection-from')('WeakSet');

},{"./_set-collection-from":103}],331:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
require('./_set-collection-of')('WeakSet');

},{"./_set-collection-of":104}],332:[function(require,module,exports){
var $iterators = require('./es6.array.iterator');
var getKeys = require('./_object-keys');
var redefine = require('./_redefine');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var wks = require('./_wks');
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

},{"./_global":47,"./_hide":49,"./_iterators":65,"./_object-keys":87,"./_redefine":98,"./_wks":135,"./es6.array.iterator":148}],333:[function(require,module,exports){
var $export = require('./_export');
var $task = require('./_task');
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

},{"./_export":39,"./_task":119}],334:[function(require,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
var global = require('./_global');
var $export = require('./_export');
var userAgent = require('./_user-agent');
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

},{"./_export":39,"./_global":47,"./_user-agent":131}],335:[function(require,module,exports){
require('./modules/es6.symbol');
require('./modules/es6.object.create');
require('./modules/es6.object.define-property');
require('./modules/es6.object.define-properties');
require('./modules/es6.object.get-own-property-descriptor');
require('./modules/es6.object.get-prototype-of');
require('./modules/es6.object.keys');
require('./modules/es6.object.get-own-property-names');
require('./modules/es6.object.freeze');
require('./modules/es6.object.seal');
require('./modules/es6.object.prevent-extensions');
require('./modules/es6.object.is-frozen');
require('./modules/es6.object.is-sealed');
require('./modules/es6.object.is-extensible');
require('./modules/es6.object.assign');
require('./modules/es6.object.is');
require('./modules/es6.object.set-prototype-of');
require('./modules/es6.object.to-string');
require('./modules/es6.function.bind');
require('./modules/es6.function.name');
require('./modules/es6.function.has-instance');
require('./modules/es6.parse-int');
require('./modules/es6.parse-float');
require('./modules/es6.number.constructor');
require('./modules/es6.number.to-fixed');
require('./modules/es6.number.to-precision');
require('./modules/es6.number.epsilon');
require('./modules/es6.number.is-finite');
require('./modules/es6.number.is-integer');
require('./modules/es6.number.is-nan');
require('./modules/es6.number.is-safe-integer');
require('./modules/es6.number.max-safe-integer');
require('./modules/es6.number.min-safe-integer');
require('./modules/es6.number.parse-float');
require('./modules/es6.number.parse-int');
require('./modules/es6.math.acosh');
require('./modules/es6.math.asinh');
require('./modules/es6.math.atanh');
require('./modules/es6.math.cbrt');
require('./modules/es6.math.clz32');
require('./modules/es6.math.cosh');
require('./modules/es6.math.expm1');
require('./modules/es6.math.fround');
require('./modules/es6.math.hypot');
require('./modules/es6.math.imul');
require('./modules/es6.math.log10');
require('./modules/es6.math.log1p');
require('./modules/es6.math.log2');
require('./modules/es6.math.sign');
require('./modules/es6.math.sinh');
require('./modules/es6.math.tanh');
require('./modules/es6.math.trunc');
require('./modules/es6.string.from-code-point');
require('./modules/es6.string.raw');
require('./modules/es6.string.trim');
require('./modules/es6.string.iterator');
require('./modules/es6.string.code-point-at');
require('./modules/es6.string.ends-with');
require('./modules/es6.string.includes');
require('./modules/es6.string.repeat');
require('./modules/es6.string.starts-with');
require('./modules/es6.string.anchor');
require('./modules/es6.string.big');
require('./modules/es6.string.blink');
require('./modules/es6.string.bold');
require('./modules/es6.string.fixed');
require('./modules/es6.string.fontcolor');
require('./modules/es6.string.fontsize');
require('./modules/es6.string.italics');
require('./modules/es6.string.link');
require('./modules/es6.string.small');
require('./modules/es6.string.strike');
require('./modules/es6.string.sub');
require('./modules/es6.string.sup');
require('./modules/es6.date.now');
require('./modules/es6.date.to-json');
require('./modules/es6.date.to-iso-string');
require('./modules/es6.date.to-string');
require('./modules/es6.date.to-primitive');
require('./modules/es6.array.is-array');
require('./modules/es6.array.from');
require('./modules/es6.array.of');
require('./modules/es6.array.join');
require('./modules/es6.array.slice');
require('./modules/es6.array.sort');
require('./modules/es6.array.for-each');
require('./modules/es6.array.map');
require('./modules/es6.array.filter');
require('./modules/es6.array.some');
require('./modules/es6.array.every');
require('./modules/es6.array.reduce');
require('./modules/es6.array.reduce-right');
require('./modules/es6.array.index-of');
require('./modules/es6.array.last-index-of');
require('./modules/es6.array.copy-within');
require('./modules/es6.array.fill');
require('./modules/es6.array.find');
require('./modules/es6.array.find-index');
require('./modules/es6.array.species');
require('./modules/es6.array.iterator');
require('./modules/es6.regexp.constructor');
require('./modules/es6.regexp.exec');
require('./modules/es6.regexp.to-string');
require('./modules/es6.regexp.flags');
require('./modules/es6.regexp.match');
require('./modules/es6.regexp.replace');
require('./modules/es6.regexp.search');
require('./modules/es6.regexp.split');
require('./modules/es6.promise');
require('./modules/es6.map');
require('./modules/es6.set');
require('./modules/es6.weak-map');
require('./modules/es6.weak-set');
require('./modules/es6.typed.array-buffer');
require('./modules/es6.typed.data-view');
require('./modules/es6.typed.int8-array');
require('./modules/es6.typed.uint8-array');
require('./modules/es6.typed.uint8-clamped-array');
require('./modules/es6.typed.int16-array');
require('./modules/es6.typed.uint16-array');
require('./modules/es6.typed.int32-array');
require('./modules/es6.typed.uint32-array');
require('./modules/es6.typed.float32-array');
require('./modules/es6.typed.float64-array');
require('./modules/es6.reflect.apply');
require('./modules/es6.reflect.construct');
require('./modules/es6.reflect.define-property');
require('./modules/es6.reflect.delete-property');
require('./modules/es6.reflect.enumerate');
require('./modules/es6.reflect.get');
require('./modules/es6.reflect.get-own-property-descriptor');
require('./modules/es6.reflect.get-prototype-of');
require('./modules/es6.reflect.has');
require('./modules/es6.reflect.is-extensible');
require('./modules/es6.reflect.own-keys');
require('./modules/es6.reflect.prevent-extensions');
require('./modules/es6.reflect.set');
require('./modules/es6.reflect.set-prototype-of');
require('./modules/es7.array.includes');
require('./modules/es7.array.flat-map');
require('./modules/es7.array.flatten');
require('./modules/es7.string.at');
require('./modules/es7.string.pad-start');
require('./modules/es7.string.pad-end');
require('./modules/es7.string.trim-left');
require('./modules/es7.string.trim-right');
require('./modules/es7.string.match-all');
require('./modules/es7.symbol.async-iterator');
require('./modules/es7.symbol.observable');
require('./modules/es7.object.get-own-property-descriptors');
require('./modules/es7.object.values');
require('./modules/es7.object.entries');
require('./modules/es7.object.define-getter');
require('./modules/es7.object.define-setter');
require('./modules/es7.object.lookup-getter');
require('./modules/es7.object.lookup-setter');
require('./modules/es7.map.to-json');
require('./modules/es7.set.to-json');
require('./modules/es7.map.of');
require('./modules/es7.set.of');
require('./modules/es7.weak-map.of');
require('./modules/es7.weak-set.of');
require('./modules/es7.map.from');
require('./modules/es7.set.from');
require('./modules/es7.weak-map.from');
require('./modules/es7.weak-set.from');
require('./modules/es7.global');
require('./modules/es7.system.global');
require('./modules/es7.error.is-error');
require('./modules/es7.math.clamp');
require('./modules/es7.math.deg-per-rad');
require('./modules/es7.math.degrees');
require('./modules/es7.math.fscale');
require('./modules/es7.math.iaddh');
require('./modules/es7.math.isubh');
require('./modules/es7.math.imulh');
require('./modules/es7.math.rad-per-deg');
require('./modules/es7.math.radians');
require('./modules/es7.math.scale');
require('./modules/es7.math.umulh');
require('./modules/es7.math.signbit');
require('./modules/es7.promise.finally');
require('./modules/es7.promise.try');
require('./modules/es7.reflect.define-metadata');
require('./modules/es7.reflect.delete-metadata');
require('./modules/es7.reflect.get-metadata');
require('./modules/es7.reflect.get-metadata-keys');
require('./modules/es7.reflect.get-own-metadata');
require('./modules/es7.reflect.get-own-metadata-keys');
require('./modules/es7.reflect.has-metadata');
require('./modules/es7.reflect.has-own-metadata');
require('./modules/es7.reflect.metadata');
require('./modules/es7.asap');
require('./modules/es7.observable');
require('./modules/web.timers');
require('./modules/web.immediate');
require('./modules/web.dom.iterable');
module.exports = require('./modules/_core');

},{"./modules/_core":29,"./modules/es6.array.copy-within":138,"./modules/es6.array.every":139,"./modules/es6.array.fill":140,"./modules/es6.array.filter":141,"./modules/es6.array.find":143,"./modules/es6.array.find-index":142,"./modules/es6.array.for-each":144,"./modules/es6.array.from":145,"./modules/es6.array.index-of":146,"./modules/es6.array.is-array":147,"./modules/es6.array.iterator":148,"./modules/es6.array.join":149,"./modules/es6.array.last-index-of":150,"./modules/es6.array.map":151,"./modules/es6.array.of":152,"./modules/es6.array.reduce":154,"./modules/es6.array.reduce-right":153,"./modules/es6.array.slice":155,"./modules/es6.array.some":156,"./modules/es6.array.sort":157,"./modules/es6.array.species":158,"./modules/es6.date.now":159,"./modules/es6.date.to-iso-string":160,"./modules/es6.date.to-json":161,"./modules/es6.date.to-primitive":162,"./modules/es6.date.to-string":163,"./modules/es6.function.bind":164,"./modules/es6.function.has-instance":165,"./modules/es6.function.name":166,"./modules/es6.map":167,"./modules/es6.math.acosh":168,"./modules/es6.math.asinh":169,"./modules/es6.math.atanh":170,"./modules/es6.math.cbrt":171,"./modules/es6.math.clz32":172,"./modules/es6.math.cosh":173,"./modules/es6.math.expm1":174,"./modules/es6.math.fround":175,"./modules/es6.math.hypot":176,"./modules/es6.math.imul":177,"./modules/es6.math.log10":178,"./modules/es6.math.log1p":179,"./modules/es6.math.log2":180,"./modules/es6.math.sign":181,"./modules/es6.math.sinh":182,"./modules/es6.math.tanh":183,"./modules/es6.math.trunc":184,"./modules/es6.number.constructor":185,"./modules/es6.number.epsilon":186,"./modules/es6.number.is-finite":187,"./modules/es6.number.is-integer":188,"./modules/es6.number.is-nan":189,"./modules/es6.number.is-safe-integer":190,"./modules/es6.number.max-safe-integer":191,"./modules/es6.number.min-safe-integer":192,"./modules/es6.number.parse-float":193,"./modules/es6.number.parse-int":194,"./modules/es6.number.to-fixed":195,"./modules/es6.number.to-precision":196,"./modules/es6.object.assign":197,"./modules/es6.object.create":198,"./modules/es6.object.define-properties":199,"./modules/es6.object.define-property":200,"./modules/es6.object.freeze":201,"./modules/es6.object.get-own-property-descriptor":202,"./modules/es6.object.get-own-property-names":203,"./modules/es6.object.get-prototype-of":204,"./modules/es6.object.is":208,"./modules/es6.object.is-extensible":205,"./modules/es6.object.is-frozen":206,"./modules/es6.object.is-sealed":207,"./modules/es6.object.keys":209,"./modules/es6.object.prevent-extensions":210,"./modules/es6.object.seal":211,"./modules/es6.object.set-prototype-of":212,"./modules/es6.object.to-string":213,"./modules/es6.parse-float":214,"./modules/es6.parse-int":215,"./modules/es6.promise":216,"./modules/es6.reflect.apply":217,"./modules/es6.reflect.construct":218,"./modules/es6.reflect.define-property":219,"./modules/es6.reflect.delete-property":220,"./modules/es6.reflect.enumerate":221,"./modules/es6.reflect.get":224,"./modules/es6.reflect.get-own-property-descriptor":222,"./modules/es6.reflect.get-prototype-of":223,"./modules/es6.reflect.has":225,"./modules/es6.reflect.is-extensible":226,"./modules/es6.reflect.own-keys":227,"./modules/es6.reflect.prevent-extensions":228,"./modules/es6.reflect.set":230,"./modules/es6.reflect.set-prototype-of":229,"./modules/es6.regexp.constructor":231,"./modules/es6.regexp.exec":232,"./modules/es6.regexp.flags":233,"./modules/es6.regexp.match":234,"./modules/es6.regexp.replace":235,"./modules/es6.regexp.search":236,"./modules/es6.regexp.split":237,"./modules/es6.regexp.to-string":238,"./modules/es6.set":239,"./modules/es6.string.anchor":240,"./modules/es6.string.big":241,"./modules/es6.string.blink":242,"./modules/es6.string.bold":243,"./modules/es6.string.code-point-at":244,"./modules/es6.string.ends-with":245,"./modules/es6.string.fixed":246,"./modules/es6.string.fontcolor":247,"./modules/es6.string.fontsize":248,"./modules/es6.string.from-code-point":249,"./modules/es6.string.includes":250,"./modules/es6.string.italics":251,"./modules/es6.string.iterator":252,"./modules/es6.string.link":253,"./modules/es6.string.raw":254,"./modules/es6.string.repeat":255,"./modules/es6.string.small":256,"./modules/es6.string.starts-with":257,"./modules/es6.string.strike":258,"./modules/es6.string.sub":259,"./modules/es6.string.sup":260,"./modules/es6.string.trim":261,"./modules/es6.symbol":262,"./modules/es6.typed.array-buffer":263,"./modules/es6.typed.data-view":264,"./modules/es6.typed.float32-array":265,"./modules/es6.typed.float64-array":266,"./modules/es6.typed.int16-array":267,"./modules/es6.typed.int32-array":268,"./modules/es6.typed.int8-array":269,"./modules/es6.typed.uint16-array":270,"./modules/es6.typed.uint32-array":271,"./modules/es6.typed.uint8-array":272,"./modules/es6.typed.uint8-clamped-array":273,"./modules/es6.weak-map":274,"./modules/es6.weak-set":275,"./modules/es7.array.flat-map":276,"./modules/es7.array.flatten":277,"./modules/es7.array.includes":278,"./modules/es7.asap":279,"./modules/es7.error.is-error":280,"./modules/es7.global":281,"./modules/es7.map.from":282,"./modules/es7.map.of":283,"./modules/es7.map.to-json":284,"./modules/es7.math.clamp":285,"./modules/es7.math.deg-per-rad":286,"./modules/es7.math.degrees":287,"./modules/es7.math.fscale":288,"./modules/es7.math.iaddh":289,"./modules/es7.math.imulh":290,"./modules/es7.math.isubh":291,"./modules/es7.math.rad-per-deg":292,"./modules/es7.math.radians":293,"./modules/es7.math.scale":294,"./modules/es7.math.signbit":295,"./modules/es7.math.umulh":296,"./modules/es7.object.define-getter":297,"./modules/es7.object.define-setter":298,"./modules/es7.object.entries":299,"./modules/es7.object.get-own-property-descriptors":300,"./modules/es7.object.lookup-getter":301,"./modules/es7.object.lookup-setter":302,"./modules/es7.object.values":303,"./modules/es7.observable":304,"./modules/es7.promise.finally":305,"./modules/es7.promise.try":306,"./modules/es7.reflect.define-metadata":307,"./modules/es7.reflect.delete-metadata":308,"./modules/es7.reflect.get-metadata":310,"./modules/es7.reflect.get-metadata-keys":309,"./modules/es7.reflect.get-own-metadata":312,"./modules/es7.reflect.get-own-metadata-keys":311,"./modules/es7.reflect.has-metadata":313,"./modules/es7.reflect.has-own-metadata":314,"./modules/es7.reflect.metadata":315,"./modules/es7.set.from":316,"./modules/es7.set.of":317,"./modules/es7.set.to-json":318,"./modules/es7.string.at":319,"./modules/es7.string.match-all":320,"./modules/es7.string.pad-end":321,"./modules/es7.string.pad-start":322,"./modules/es7.string.trim-left":323,"./modules/es7.string.trim-right":324,"./modules/es7.symbol.async-iterator":325,"./modules/es7.symbol.observable":326,"./modules/es7.system.global":327,"./modules/es7.weak-map.from":328,"./modules/es7.weak-map.of":329,"./modules/es7.weak-set.from":330,"./modules/es7.weak-set.of":331,"./modules/web.dom.iterable":332,"./modules/web.immediate":333,"./modules/web.timers":334}],336:[function(require,module,exports){
(function (global){(function (){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"diffex":[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=ReactTabularGrid;var _lodash=require("lodash.clonedeep");var _lodash2=_interopRequireDefault(_lodash);var _pathutils=require("./services/pathutils");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var _window=window,React=_window.React;/**
 *
 * @param {array} data
 * @param {object} options
 * @param {object} options.columns
 * @param {string|object} options.columns[]
 * @param {string} options.columns[].path
 * @param {string} options.columns[].label
 * @param {"string"} options.columns[].type
 * @param {boolean} options.columns[].lock
 * @param {boolean} options.columns[].hide
 * @param {boolean} options.applyHiddenFilter
 * @param {object} options.icons
 * @param {object} options.icons.lock
 * @param {string} options.icons.filter
 * @param {string} options.icons.lock.on
 * @param {string} options.icons.lock.off
 * @param {object} options.icons.hide
 * @param {string} options.icons.hide.on
 * @param {string} options.icons.hide.off
 * @return {JSX.Element}
 * @constructor
 */function ReactTabularGrid(_ref){var data=_ref.data,options=_ref.options;var _React$useState=React.useState([]),_React$useState2=_slicedToArray(_React$useState,2),columns=_React$useState2[0],setColumns=_React$useState2[1];React.useEffect(function(){var newColumns=Object.keys(options.columns).map(function(key){var base={name:key};if(typeof options.columns[key]==='string'){base.path=options.columns[key];base.type='string';base.lock=false;base.hide=false;base.label=base.name;}else if(_typeof(options.columns[key])==='object'){var _options$columns$key=options.columns[key],path=_options$columns$key.path,_options$columns$key$=_options$columns$key.type,type=_options$columns$key$===void 0?'string':_options$columns$key$,_options$columns$key$2=_options$columns$key.lock,lock=_options$columns$key$2===void 0?false:_options$columns$key$2,_options$columns$key$3=_options$columns$key.hide,hide=_options$columns$key$3===void 0?false:_options$columns$key$3,_options$columns$key$4=_options$columns$key.label,label=_options$columns$key$4===void 0?base.name:_options$columns$key$4,renderContent=_options$columns$key.renderContent;base.path=path;base.type=type;base.lock=lock;base.hide=hide;base.label=label;base.renderContent=renderContent;}return base;});setColumns(newColumns);},[JSON.stringify({data:data,options:options})]);return/*#__PURE__*/React.createElement(ColumnsComponent,{options:options,columns:columns,data:data});}function ColumnsComponent(_ref2){var _ref2$options=_ref2.options;_ref2$options=_ref2$options===void 0?{}:_ref2$options;var _ref2$options$applyHi=_ref2$options.applyHiddenFilters,applyHiddenFilters=_ref2$options$applyHi===void 0?true:_ref2$options$applyHi,_ref2$options$icons=_ref2$options.icons;_ref2$options$icons=_ref2$options$icons===void 0?{}:_ref2$options$icons;var _ref2$options$icons$f=_ref2$options$icons.filter,filterIcon=_ref2$options$icons$f===void 0?'fas fa-filter':_ref2$options$icons$f,_ref2$options$icons$l=_ref2$options$icons.lock;_ref2$options$icons$l=_ref2$options$icons$l===void 0?{}:_ref2$options$icons$l;var _ref2$options$icons$l2=_ref2$options$icons$l.on,lockIconOn=_ref2$options$icons$l2===void 0?'fas fa-lock':_ref2$options$icons$l2,_ref2$options$icons$l3=_ref2$options$icons$l.off,lockIconOff=_ref2$options$icons$l3===void 0?'fas fa-lock-open':_ref2$options$icons$l3,_ref2$options$icons$h=_ref2$options$icons.hide;_ref2$options$icons$h=_ref2$options$icons$h===void 0?{}:_ref2$options$icons$h;var _ref2$options$icons$h2=_ref2$options$icons$h.on,hideIconOn=_ref2$options$icons$h2===void 0?'fas fa-eye-slash':_ref2$options$icons$h2,_ref2$options$icons$h3=_ref2$options$icons$h.off,hideIconOff=_ref2$options$icons$h3===void 0?'fas fa-eye':_ref2$options$icons$h3,data=_ref2.data,columns=_ref2.columns;var _React$useState3=React.useState(columns),_React$useState4=_slicedToArray(_React$useState3,2),config=_React$useState4[0],setConfig=_React$useState4[1];var _React$useState5=React.useState(false),_React$useState6=_slicedToArray(_React$useState5,2),settingsStatus=_React$useState6[0],setSettingsStatus=_React$useState6[1];var _React$useState7=React.useState([]),_React$useState8=_slicedToArray(_React$useState7,2),uniqueValues=_React$useState8[0],setUniqueValues=_React$useState8[1];var _React$useState9=React.useState(data),_React$useState10=_slicedToArray(_React$useState9,2),filteredData=_React$useState10[0],setFilteredData=_React$useState10[1];var _React$useState11=React.useState([]),_React$useState12=_slicedToArray(_React$useState11,2),filters=_React$useState12[0],setFilters=_React$useState12[1];var _React$useState13=React.useState(null),_React$useState14=_slicedToArray(_React$useState13,2),showFilterMenu=_React$useState14[0],setShowFilterMenu=_React$useState14[1];React.useEffect(function(){var newFilteredData=config.reduce(function(acc,column){if(column.hide&&!applyHiddenFilters){return acc;}var columnFilters=filters.find(function(el){return el.name===column.name;});if(!columnFilters){return acc;}return(0,_pathutils.getFilteredColumn)(column.path,acc,columnFilters.values);},(0,_lodash2["default"])(data));setFilteredData(newFilteredData);},[JSON.stringify({data:data,filters:filters})]);React.useEffect(function(){var currentConfig=config.map(function(el){return _objectSpread({},el);});var newConfig=columns;if(currentConfig.length===0){if(newConfig.length){var newUnique=newConfig.map(function(_ref3){var path=_ref3.path,name=_ref3.name;return{name:name,path:path,values:path?(0,_pathutils.getUniqueValuesByPath)(path,data):null};});setUniqueValues(newUnique);}setConfig(newConfig);}else{var populated=currentConfig.reduce(function(acc,el){var prevColIndex=newConfig.findIndex(function(_ref4){var name=_ref4.name;return name===el.name;});if(prevColIndex===-1){return acc;}var name=el.name;var _newConfig$prevColInd=newConfig[prevColIndex],label=_newConfig$prevColInd.label,path=_newConfig$prevColInd.path,hide=_newConfig$prevColInd.hide,lock=_newConfig$prevColInd.lock;var newEl={name:name,hide:el.hide!==undefined?el.hide:hide,label:el.label!==undefined?el.label:label,lock:el.lock!==undefined?el.lock:lock,path:path};acc.push(newEl);return acc;},[]);if(populated.length){var _newUnique=newConfig.map(function(_ref5){var path=_ref5.path,name=_ref5.name;return{name:name,path:path,values:(0,_pathutils.getUniqueValuesByPath)(path,data)};});setUniqueValues(_newUnique);}setConfig(populated);}},[JSON.stringify({columns:columns})]);function onFilterChange(columnName,id,value){var prevFilters=_toConsumableArray(filters);var currentColumnFiltersIndex=prevFilters.findIndex(function(el){return el.name===columnName;});if(currentColumnFiltersIndex!==-1){if(!value){var itemToRemove=prevFilters[currentColumnFiltersIndex].values.findIndex(function(el){return el===id;});prevFilters[currentColumnFiltersIndex].values.splice(itemToRemove,1);}else{prevFilters[currentColumnFiltersIndex].values.push(id);}}else{prevFilters.push({name:columnName,values:[id]});}var newFilters=prevFilters.filter(function(cat){return cat.values.length>=1;});setFilters(newFilters);}function manageToggleFilter(columnName){if(showFilterMenu&&showFilterMenu===columnName){setShowFilterMenu(null);}else{setShowFilterMenu(columnName);}}function manageToggleLock(columnName){var newConfig=config.map(function(el){if(el.name===columnName){return _objectSpread(_objectSpread({},el),{},{lock:!el.lock});}return el;});setConfig(newConfig);}function manageToggleHide(columnName){var newConfig=config.map(function(el){if(el.name===columnName){return _objectSpread(_objectSpread({},el),{},{hide:!el.hide});}return el;});setConfig(newConfig);}function renderColumn(_ref6,columnIndex){var name=_ref6.name,path=_ref6.path,type=_ref6.type,label=_ref6.label,lock=_ref6.lock,hide=_ref6.hide,renderContent=_ref6.renderContent;var header=label||name;var columnUniqueValues=uniqueValues.find(function(col){return col.name===name;});var columnFilters=filters.find(function(col){return col.name===name;});if(hide){return null;}return/*#__PURE__*/React.createElement("div",{className:"tabular-column",id:header,key:"".concat(header,"-COLUMN"),"data-index":columnIndex},/*#__PURE__*/React.createElement("div",{className:"tabular-header"},/*#__PURE__*/React.createElement("div",{className:"tabular-header__wrapper"},/*#__PURE__*/React.createElement("div",{className:"header-label"},header),/*#__PURE__*/React.createElement("div",{className:"header-actions"},/*#__PURE__*/React.createElement("i",{className:filterIcon,onClick:function onClick(){return manageToggleFilter(name);}}),/*#__PURE__*/React.createElement("i",{className:lock?lockIconOn:lockIconOff,onClick:function onClick(){return manageToggleLock(name);}}),/*#__PURE__*/React.createElement("i",{className:hide?hideIconOn:hideIconOff,onClick:function onClick(){return manageToggleHide(name);}})),showFilterMenu!==null&&showFilterMenu===name&&/*#__PURE__*/React.createElement("div",{className:"header-label__filters-container"},columnUniqueValues===null||columnUniqueValues===void 0?void 0:columnUniqueValues.values.map(function(el){return/*#__PURE__*/React.createElement("div",{className:"filter-item"},/*#__PURE__*/React.createElement("label",{htmlFor:el},el),/*#__PURE__*/React.createElement("input",{type:"checkbox",id:el,defaultChecked:columnFilters===null||columnFilters===void 0?void 0:columnFilters.values.includes(el),onChange:function onChange(_ref7){var target=_ref7.target;return onFilterChange(name,target.id,target.checked);}}));})))),filteredData.map(function(el,index){if(renderContent&&typeof renderContent==='function'){return renderContent({data:filteredData[columnIndex],columnUniqueValues:columnUniqueValues,columnFilters:columnFilters,config:{column:{name:name,path:path,type:type,label:label,lock:lock,hide:hide},global:config}});}switch(type){default:{return/*#__PURE__*/React.createElement("div",{className:"tabular-cell",key:"".concat(header,"-ROW-").concat(index)},(0,_pathutils.accessObjectByString)(path,el));}}}));}var lockedColumns=config.filter(function(column){return column.lock;});var unlockedColumns=config.filter(function(column){return!column.lock;});return/*#__PURE__*/React.createElement("div",{className:"tabular-container"},lockedColumns.length>=1&&/*#__PURE__*/React.createElement("div",{className:"locked-columns__container"},lockedColumns.map(renderColumn)),unlockedColumns.map(renderColumn),/*#__PURE__*/React.createElement("div",{className:"options-container","data-toggled":settingsStatus},settingsStatus?/*#__PURE__*/React.createElement("div",{className:"tabular-settings"},/*#__PURE__*/React.createElement("i",{className:"fa fa-times close-settings",onClick:function onClick(){return setSettingsStatus(false);}}),config.map(function(_ref8){var name=_ref8.name,label=_ref8.label,lock=_ref8.lock,hide=_ref8.hide;return/*#__PURE__*/React.createElement("div",{className:"tabular-settings__item"},/*#__PURE__*/React.createElement("span",{className:"tabular-settings__item-label",title:label},label),/*#__PURE__*/React.createElement("div",{className:"tabular-settings__item-actions"},/*#__PURE__*/React.createElement("i",{className:lock?lockIconOn:lockIconOff,onClick:function onClick(){return manageToggleLock(name);}}),/*#__PURE__*/React.createElement("i",{className:hide?hideIconOn:hideIconOff,onClick:function onClick(){return manageToggleHide(name);}})));})):/*#__PURE__*/React.createElement("i",{className:"fa fa-cog open-settings",onClick:function onClick(){return setSettingsStatus(true);}})));}

},{"./services/pathutils":4,"lodash.clonedeep":336}]},{},[2]);
