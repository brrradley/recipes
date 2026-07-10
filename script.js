const recipes = [
  {
    title:"Tikka Masala",
    category:"Curries",
    tags:["chicken","BIR","cream","75c"],
    ingredients:["500g chicken thighs or breast, large chunks","80g Greek yoghurt","2 tsp ginger-garlic paste","2 tsp mild chilli powder","2 tbsp vegetable oil","3/4 tsp salt","1/2 tsp turmeric","1 tsp ground coriander","1 tsp garam masala","3-4 tbsp vegetable oil for gravy","1 tsp cumin seeds","1/4 tsp dried thyme","1 large onion, finely chopped","1.5 tbsp ginger-garlic-green chilli paste","1 tin chopped tomatoes, blended","60-80ml double cream","Small pinch sugar","Fresh coriander","Optional BIR finish: 120ml full-fat coconut milk and 1/4 tsp red food colouring"],
    method:["Warm the marinade oil with the chilli powder for 20-30 seconds, taking care not to burn it. Stir this into the yoghurt with the ginger-garlic paste, salt, turmeric, coriander and garam masala.","Coat the chicken well and marinate for at least 2 hours, or overnight if possible.","Roast or grill at 220°C for 15-18 minutes until lightly charred and just cooked through. Keep the resting juices.","For the gravy, heat oil in a wide pan. Add cumin seeds and thyme and let them sizzle for 30 seconds.","Add the onion and cook slowly until deep golden brown. This is the main flavour base, so do not rush it.","Add the ginger-garlic-green chilli paste and fry for 1-2 minutes. Add the ground spices and cook until the oil starts to separate.","Add the blended tomatoes and simmer for 10-15 minutes until thick, glossy and rich.","Add the cooked chicken and resting juices and simmer for 5-8 minutes. Finish with cream, sugar and coriander."],
    notes:["Reviewed: this makes sense as a home/BIR hybrid. For the BIR version, coconut milk replaces or softens the cream finish rather than needing both in full.","Useful check: chicken should reach 75°C if serving straight away."]
  },
  {
    title:"Pilau Rice — Star Anise",
    category:"Rice & Sides",
    tags:["rice","basmati","takeaway"],
    ingredients:["200g basmati rice","2 tbsp vegetable oil or ghee","1/2 tsp cumin seeds","1/2 star anise","1 small cinnamon stick, about 3cm","1/4 tsp dried thyme or 1 bay leaf","1/4 tsp turmeric","1/2 tsp salt","350ml boiling water","Optional: tiny amount of food colouring for takeaway flecks"],
    method:["Rinse the rice until the water runs mostly clear, then soak for 20-30 minutes. Drain well.","Heat the oil or ghee. Add cumin, star anise, cinnamon and thyme or bay and let them sizzle for 30 seconds.","Add the drained rice and stir gently for 1 minute to coat the grains in spiced oil. Add turmeric and salt.","Pour in boiling water and stir once. Bring to a boil, cover, turn to very low and cook for 10 minutes.","Turn off the heat and leave covered for 5 minutes. Fluff gently with a fork and remove the star anise and cinnamon."],
    notes:["Reviewed: the 200g rice to 350ml water ratio is sensible after soaking. If not soaking, use a little more water."]
  },
  {
    title:"Curry Gravy Base",
    category:"Curries",
    tags:["base","batch","onion gravy"],
    ingredients:["10 medium onions, chopped","4 tbsp oil","2 tbsp ginger-garlic paste","1 tin tomatoes","2 tbsp tomato puree","2 tsp salt","2 tsp paprika","2 tsp hot curry or madras powder","2 tsp chilli powder","2 tsp garam masala","2 tsp coriander powder","2 tsp cumin","2 tsp turmeric","Water, enough to loosen and simmer"],
    method:["Sauté the onions in oil until soft and starting to colour. For better depth, take them further towards golden rather than just translucent.","Add the ginger-garlic paste and cook for 2 minutes.","Add the tomatoes and tomato puree and cook for 3-4 minutes.","Add the spices, stir well, then add enough water to loosen the base. Simmer for 20-30 minutes.","Blitz until smooth. Adjust salt, chilli and thickness depending on the curry you are using it for."],
    notes:["Reviewed: this is a big onion-heavy base, not a finished curry sauce. Labelled as a base so it makes more sense in the app.","Useful tweak: add water gradually. You can always loosen it; reducing a watery base takes longer."]
  },
  {
    title:"Chicken Tikka 2.0",
    category:"Curries",
    tags:["chicken","tikka","air fryer","75c"],
    ingredients:["500g boneless skinless chicken thighs, bite-size","3 tsp garlic and ginger paste","3 tsp garam masala","1 tsp turmeric","1 tsp amchoor powder or lemon juice","1/2 tsp mild chilli powder","1/2 tsp dried fenugreek","1 tsp salt","3 tsp mint sauce or 1/2 tsp dried mint","3 tsp mango chutney","1/4 tsp red food colouring, optional","100ml natural yoghurt"],
    method:["Mix all marinade ingredients together, then coat the chicken thoroughly.","Marinate overnight for best flavour, or cook straight away if needed.","Thread onto skewers and air fry on a rack at 200°C for about 14 minutes.","Check the chicken reaches at least 75°C internally before serving."],
    notes:["Reviewed: good fakeaway-style tikka. Thigh will stay juicier than breast."]
  },
  {
    title:"Chicken Bhuna",
    category:"Curries",
    tags:["chicken","dry curry"],
    ingredients:["4-5 tbsp oil or ghee","2 medium onions, finely chopped","1 tbsp garlic","1 tbsp ginger","1 tsp coriander powder","1 tsp cumin powder","1 tsp chilli powder","1/2 tsp garam masala","1/4 tsp turmeric","500g chicken thigh, diced","2 medium tomatoes, blended to puree","1/2 tsp salt, then to taste","Fresh coriander to garnish"],
    method:["Heat the oil or ghee and cook the onions until soft and golden.","Add garlic and ginger and fry until fragrant.","Add the ground spices and cook them out briefly without burning.","Add the chicken and cook until sealed on the outside.","Add the blended tomatoes and salt. Simmer until the chicken is cooked and the sauce is thick and clinging rather than loose.","Finish with fresh coriander."],
    notes:["Reviewed: bhuna should be reduced and intense, not swimming in sauce. Add small splashes of water only if it catches before the chicken is cooked."]
  },
  {
    title:"Sweet & Sour Sauce",
    category:"Fakeaway",
    tags:["sauce","Chinese"],
    ingredients:["2 tbsp tomato ketchup","2 tbsp sweet chilli sauce","2 tbsp light soy sauce","50ml rice wine vinegar","50g caster sugar","50ml orange juice","1/2 tsp MSG"],
    method:["Combine everything in a pan.","Bring to a boil while stirring until the sugar dissolves and the sauce is fully combined.","Taste and adjust with extra vinegar for sharpness, sugar for sweetness or soy for salt."],
    notes:["Reviewed: simple and workable. For a thicker takeaway-style sauce, reduce slightly or thicken with a small cornflour slurry."]
  },
  {
    title:"Sweet & Sour Chicken Balls",
    category:"Fakeaway",
    tags:["chicken","batter","75c"],
    ingredients:["2 large chicken breasts, bite-size","1 tsp salt","1/2 tsp MSG","1 heaped tsp cornflour","150g self-raising flour","1/2 tsp bicarbonate of soda","1 tsp salt for batter","100ml water","100ml milk"],
    method:["Season the chicken with salt, MSG and cornflour.","Whisk the flour, bicarbonate, salt, water and milk into a batter.","Dip the chicken into the batter and carefully lower into oil at 170°C.","Fry for 5-6 minutes, or until golden and the chicken reaches at least 75°C internally.","Drain on kitchen paper and serve with sweet and sour sauce."],
    notes:["Reviewed: makes sense. Keep pieces even-sized so the batter browns before the chicken overcooks."]
  },
  {
    title:"Chocolate Fudge Brownie",
    category:"Desserts",
    tags:["brownie","chocolate","gastro"],
    ingredients:["600g quality dark chocolate","750g unsalted butter","250g cocoa powder","200g plain flour","3 tsp baking powder, or 1 extra egg depending on desired texture","1kg caster sugar","12 large eggs","Optional: white chocolate chunks"],
    method:["Preheat the oven to 160°C and line a regular gastro tray with greaseproof paper.","Melt the chocolate and chopped butter together over a bain-marie, or microwave for 90 seconds then in 10-second bursts, stirring regularly.","Sift cocoa powder and flour into a separate bowl. Add baking powder and sugar and mix.","Fold the dry mix into the chocolate mix in stages.","Beat the eggs, then mix them in until the batter is glossy and silky.","Fold in white chocolate chunks if using. Pour into the lined tray.","Bake for 35-40 minutes. Cool fully before lifting out and portioning."],
    notes:["Reviewed: the baking powder-or-egg note is unusual. Baking powder gives lift; an extra egg gives a slightly more set/cakey structure. Pick one and note your result."]
  },
  {
    title:"Tiramisu",
    category:"Desserts",
    tags:["mascarpone","coffee","overnight"],
    ingredients:["12 large egg yolks","400g caster sugar","1.3kg mascarpone","960ml double cream","8 double shots espresso","3 packs lady fingers","Cocoa powder, to dust"],
    method:["Line a gastro tray with greaseproof paper and set up a bain-marie on a low simmer.","Whisk the egg yolks with 320g sugar over the bain-marie until the sugar has dissolved and the mixture is pale yellow. Keep the water gentle so the eggs do not scramble.","Remove from the heat and cool to around 30-35°C.","In a separate bowl, soften the mascarpone with a spatula. Gradually fold and stir in the cream until the mix forms soft, not-quite-stiff peaks.","Add the mascarpone cream into the egg mix in parts, mixing well while keeping it light.","Mix espresso with the remaining 80g sugar. Lightly dip the lady fingers and lay the first layer in the tray.","Add half the cream, then a second layer of dipped lady fingers, then the remaining cream.","Dust with cocoa and refrigerate for at least 8 hours, ideally overnight.","Lift out carefully. Cut the perimeter first, then portion with a hot knife for cleaner slices."],
    notes:["Reviewed: method makes sense. Main risk is overheating the yolks or over-whipping the cream/mascarpone."]
  },
  {
    title:"Frangipane",
    category:"Desserts",
    tags:["almond","bake","gastro"],
    ingredients:["100g flour","320g sugar","320g ground almonds","6 eggs","350g butter, softened","200g berry puree","Cherry coulis for swirling and serving","Sugar syrup for glazing"],
    method:["Cut butter into small pieces and allow it to soften at room temperature.","Combine the flour, sugar, ground almonds, eggs, butter and berry puree. Start by hand or gently, then use a mixer once the butter begins to combine.","Spread into a gastro tray. Swirl cherry coulis deeply through the mix, then flatten the top.","Bake at 175°C for 20-25 minutes, or until set and lightly golden.","Brush with clear sugar syrup, then cool, cut and serve with cherry coulis dip."],
    notes:["Reviewed: good, but it needs a doneness check. A skewer should come out mostly clean, not wet batter."]
  },
  {
    title:"Crumble Top",
    category:"Desserts",
    tags:["crumble","bake"],
    ingredients:["500g flour","500g butter, softened","300g sugar"],
    method:["Rub or mix the softened butter into the flour and sugar until crumbly.","Spread on a tray.","Bake at 180°C in 5-minute batches, stirring between batches, until evenly golden."],
    notes:["Reviewed: works as a pre-baked crumble crumb. If it feels greasy, chill it before baking."]
  },
  {
    title:"Chocolate Soil",
    category:"Desserts",
    tags:["crumb","garnish"],
    ingredients:["100g butter, chopped","200g dark chocolate, chopped","250g golden caster sugar","100g plain flour","1 tsp baking powder","30g cocoa"],
    method:["Melt the butter and chocolate together and mix until smooth.","Add the remaining ingredients and mix until combined.","Spread on an oven tray and bake for 10 minutes.","Remove, stir and allow to cool. Blitz or pulse into a crumb."],
    notes:["Reviewed: makes sense as a dessert garnish. Store dry and airtight."]
  },
  {
    title:"White Chocolate Soil",
    category:"Desserts",
    tags:["crumb","garnish","135c"],
    ingredients:["300g caster sugar","150ml water","320g white chocolate"],
    method:["Heat the sugar and water to 135°C.","Fold in the white chocolate and remove from the heat.","Allow to cool, then blitz to a crumb.","Store at room temperature for up to 7 days."],
    notes:["Reviewed: this is a caramelised sugar crumb technique. Use a thermometer; the temperature matters."]
  },
  {
    title:"Berry Compote",
    category:"Desserts",
    tags:["berries","compote"],
    ingredients:["1kg frozen mixed berries","4 tbsp brown sugar"],
    method:["Place berries and sugar in a pan over low heat.","Bring to a gentle simmer and cook for 20-30 minutes until soft and syrupy.","Cool before storing or serving."],
    notes:["Reviewed: good basic compote. Add lemon juice if it tastes flat."]
  },
  {
    title:"Custard",
    category:"Desserts",
    tags:["vanilla","eggs"],
    ingredients:["570ml double cream, single cream or milk","6 large egg yolks","50g caster sugar mixed with 1 tbsp cornflour","1 tbsp vanilla extract"],
    method:["Heat the cream gently to just below simmering point.","Whisk egg yolks, sugar/cornflour and vanilla in a bowl.","Gradually pour the hot cream into the egg mix while whisking constantly.","Return the mixture to the pan over gentle heat and whisk until thick and smooth.","If it overheats and turns grainy, remove from heat and whisk hard in a jug or bowl until smooth again.","Cover the surface with clingfilm and cool."],
    notes:["Reviewed: good. Cornflour makes it more stable and kitchen-friendly."]
  },
  {
    title:"Caesar Dressing",
    category:"Sauces",
    tags:["dressing","anchovy"],
    ingredients:["Mayonnaise","Garlic puree, roughly 20% of the mayo amount","Finely diced anchovy","Parmesan","Lemon zest or lemon juice","Black pepper"],
    method:["Mix mayonnaise with garlic puree.","Fold in finely diced anchovy, parmesan, lemon and black pepper.","Taste and balance with more lemon for freshness, parmesan for savoury depth or mayo if too strong."],
    notes:["Reviewed: the 80:20 mayo-to-garlic ratio sounds very punchy. Start lower on garlic if using strong puree, then build up."]
  },
  {
    title:"Béchamel Sauce",
    category:"Sauces",
    tags:["mother sauce","roux","cheese sauce"],
    ingredients:["500g salted butter","500g plain flour","Full-fat milk, around 4-5L depending on bottle size and desired thickness","2 tbsp Dijon mustard","2 tbsp garlic puree","Salt to taste","Optional grated cheese for cheese sauce"],
    method:["Melt the butter in a saucepan.","Stir in the flour and cook for just under a minute to make a smooth roux.","Warm the milk separately. Add it to the roux a little at a time, stirring thoroughly to prevent lumps.","Bring to the boil while stirring until thick and glossy, then simmer for a couple of minutes.","Stir in Dijon, garlic puree and salt. For cheese sauce, add grated cheese off the heat."],
    notes:["Reviewed: original said 2 bottles milk, which is vague. I’ve marked the liquid as adjustable because roux thickness depends on bottle size and final use."]
  },
  {
    title:"Cauliflower Cheese Sauce",
    category:"Sauces",
    tags:["bechamel","cheese"],
    ingredients:["Béchamel sauce","Cheddar or Gruyere","Dijon or French mustard","Salt and pepper","Nutmeg","Garlic powder","Onion powder","A splash of double cream"],
    method:["Make or warm the béchamel gently.","Add cheese off the heat or on very low heat so it melts without splitting.","Season with mustard, salt, pepper, nutmeg, garlic powder and onion powder.","Finish with a splash of double cream for richness."],
    notes:["Reviewed: makes sense. Avoid boiling hard after adding cheese because it can go grainy."]
  },
  {
    title:"Honey Balsamic Dressing",
    category:"Sauces",
    tags:["dressing","emulsion"],
    ingredients:["Super-chilled olive oil, about 3/4 bottle","1 tsp Dijon or French mustard","1 tsp rice vinegar","1 tbsp honey","1 tsp balsamic glaze"],
    method:["Mix mustard and rice vinegar first.","Slowly add the chilled oil in parts while whisking to emulsify.","Whisk in honey and balsamic glaze.","Taste and adjust with vinegar for sharpness, honey for sweetness or salt if needed."],
    notes:["Reviewed: the ratio is oil-heavy, so the mustard is doing the emulsifying. Add oil slowly."]
  },
  {
    title:"Caramel Sauce",
    category:"Sauces",
    tags:["dessert","caramel"],
    ingredients:["1 block butter","1.5 cups dark sugar","1 cup cream"],
    method:["Melt the butter and dark sugar together in a pan.","Whisk until the sugar feels less grainy and the mixture comes together.","Add the cream carefully and whisk into a sauce.","Simmer gently if it needs thickening."],
    notes:["Reviewed: useful quick butterscotch-style sauce. Use a deeper pan because cream can bubble up."]
  },
  {
    title:"Teriyaki — 4L Tub",
    category:"Sauces",
    tags:["teriyaki","salmon","batch"],
    ingredients:["3.5L cold water","4 cups light brown soft sugar, about 850g","3 cups light soy sauce, about 700ml","3 tbsp garlic puree","8-10 tbsp minced ginger","10 tbsp cornflour","10 tbsp cold water for slurry","10 tbsp rice wine vinegar","If using ground ginger: 2 tbsp ground ginger, plus 1 extra tbsp rice vinegar and 1 tbsp lemon juice at the end"],
    method:["Bring the water to a simmer and dissolve the sugar.","Add soy sauce, garlic puree and minced ginger. Simmer for 5 minutes.","Mix cornflour with cold water to make a slurry.","Add the slurry gradually, stirring until glossy and thickened.","Stir in rice wine vinegar, then taste and adjust."],
    notes:["Reviewed: makes sense as a batch sauce. Add slurry gradually; you may not need all of it depending on thickness."]
  },
  {
    title:"Beef Dripping & Hendos Sauce",
    category:"Sauces",
    tags:["beef","Hendersons","jus"],
    ingredients:["1L beef stock or veal jus","200ml red wine","1 tsp red wine vinegar","4 garlic cloves, finely chopped","1 shallot, finely minced","Small sprig rosemary","20g caster sugar","100g beef fat or dripping","100ml Henderson's Relish","30g butter, or more to taste"],
    method:["Gently fry the beef bits if using, shallot and garlic in the dripping.","Add the red wine and rosemary. Bring to a boil and simmer for 2 minutes.","Add red wine vinegar, beef stock and caster sugar. Reduce gently for 10-15 minutes.","Add Henderson's Relish and taste. Whisk in butter at the end.","Remove the rosemary before it dominates. Pass through a sieve and chill for up to 3 days."],
    notes:["Reviewed: good Sheffield steak/gravy style sauce. Hendos is strong, so add and taste rather than blindly tipping in more."]
  },
  {
    title:"Peppercorn Sauce",
    category:"Sauces",
    tags:["steak","cream"],
    ingredients:["100g green peppercorns in brine, drained","50ml brandy","1L double cream","200ml beef stock or jus","50g butter","6 shallots, finely diced","Splash of oil"],
    method:["Heat oil in a large saucepan. Add shallots and peppercorns and sweat for about 5 minutes, or until softened and lightly caramelised.","Add brandy and reduce by half.","Add cream and bring to the boil.","Add beef stock and butter. Simmer for about 5 minutes, then taste and adjust."],
    notes:["Reviewed: works. If too spicy from peppercorns, add more cream or stock."]
  },
  {
    title:"Tuscan Sauce",
    category:"Sauces",
    tags:["cream","chicken"],
    ingredients:["600ml double cream","200ml chicken stock","200ml white wine","4 tsp tomato puree","1 tbsp garlic puree","4 white onions, finely diced","Oil and salt"],
    method:["Heat oil in a pan. Add onion with a pinch of salt and cook for 4-5 minutes until soft.","Add garlic and fry for 30 seconds.","Add wine and reduce by half.","Add tomato puree and stir through.","Add chicken stock and cream. Bring to the boil, then simmer for 5-10 minutes.","Do not over-reduce if it will be cooked again later. Cool and refrigerate for up to 3 days."],
    notes:["Reviewed: makes sense. Add spinach/sundried tomato at service if that’s the intended Tuscan-style finish."]
  },
  {
    title:"Smoked Aioli / Smoked Mayo",
    category:"Sauces",
    tags:["mayo","smoked","7 days"],
    ingredients:["4 white onions, sliced","2 tbsp smoked paprika","2 tbsp garlic puree","Salt","Vegetable oil","500ml mayonnaise","4 tbsp smoked onion paste","100ml maple syrup"],
    method:["For the paste, heat oil in a saucepan. Add onions and salt and cook until caramelised.","Add smoked paprika and garlic puree and cook for a couple more minutes.","Blend until smooth and cool. Store the paste for up to a week.","For the mayo, mix mayonnaise with smoked paste, maple syrup and salt. Bottle and store for up to 7 days."],
    notes:["Reviewed: solid. The paste is where the flavour lives; get the onions properly caramelised."]
  },
  {
    title:"Pomegranate Korean Sauce",
    category:"Sauces",
    tags:["Korean","sweet chilli","7 days"],
    ingredients:["4 bottles sweet chilli sauce","1/2 bottle gluten-free hoisin","1/2 bottle pomegranate juice","3 tbsp smoked paprika","2 tbsp onion powder","3 tbsp garlic puree","200ml gluten-free soy sauce","1 tsp cayenne pepper","Sesame seeds and black sesame","Salt"],
    method:["Mix the dry ingredients, soy sauce and garlic puree into a paste first.","Add the sweet chilli, hoisin and pomegranate juice and mix thoroughly.","Add sesame seeds and black sesame. Taste and season with salt if needed.","Store for up to 7 days."],
    notes:["Reviewed: this is more Korean-inspired glaze than classic Korean sauce, but it makes sense for bang bang/chicken style dishes."]
  },
  {
    title:"Cream Cabbage",
    category:"Rice & Sides",
    tags:["cabbage","cream"],
    ingredients:["Cabbage, shredded","Garlic","Shallots","Oil","White wine","Double cream","Optional thyme","Optional rosemary sprigs","Salt and pepper"],
    method:["Sweat garlic, shallots and optional thyme in oil until translucent.","Add white wine and reduce.","Add double cream and optional rosemary sprigs.","Simmer until the cabbage is coated and tender. Remove rosemary before it gets too strong and season to taste."],
    notes:["Reviewed: ingredient amounts were missing, so this is kept as a method/ratio prep. Add cabbage after aromats if you want it softer, or after cream if already blanched."]
  },
  {
    title:"Cucumber Salad for Salmon",
    category:"Rice & Sides",
    tags:["cucumber","salmon","teriyaki"],
    ingredients:["1 cucumber","Soy sauce, a good splash","Sesame oil, a good splash","1/2 cup teriyaki, loosened with warm water if jelly-like","Sesame seeds","Salt"],
    method:["Halve the cucumber lengthways, then halve again.","Wrap it and smash lightly with a rolling pin.","Roughly chop and place in a container.","Add soy sauce, sesame oil, teriyaki, sesame seeds and salt. Stir and taste."],
    notes:["Reviewed: good quick smashed cucumber. Go easy on salt because soy and teriyaki are already salty."]
  },
  {
    title:"Salmon with Teriyaki, Slaw & Pak Choi",
    category:"Mains",
    tags:["fish","teriyaki","service"],
    ingredients:["Salmon portions","Salt for the skin","Hot honey","Pak choi","Slaw","Teriyaki sauce","Rice","Cucumber salad"],
    method:["Salt the salmon skin heavily.","Fry skin-side down over medium heat until the skin is crisp.","Flip the salmon, drizzle with hot honey and finish in the oven for 5-6 minutes, depending on thickness.","Blanch pak choi for 2 minutes.","Fry slaw and pak choi for 30 seconds, then add teriyaki and fry until glossy and lightly golden.","Plate with rice and cucumber salad."],
    notes:["Reviewed: method makes sense. Watch the hot honey because sugars can burn quickly."]
  },
  {
    title:"Harissa Chicken Pasta — Gastro",
    category:"Mains",
    tags:["pasta","chicken","harissa","batch"],
    ingredients:["1.5 tins chopped tomatoes","Diced onions, enough to fill 1/4 gastro","3 tbsp bicarbonate of soda","3 tbsp salt and pepper mix, or season to taste","Harissa powder","Vegetable bouillon","1.5 packs chicken breast, cubed","Paprika","Rosemary and thyme, finely chopped","Garlic","1 large courgette","1 aubergine","3 red onions","2 peppers of each colour available","Spaghetti","Oil and salt"],
    method:["For the sauce, combine chopped tomatoes, diced onions, bicarbonate, seasoning, harissa powder and vegetable bouillon. Cook uncovered until almost fully reduced and wet, around 2 hours.","Marinate cubed chicken breast with harissa, paprika, herbs, garlic, salt, pepper and oil.","Dice courgette, aubergine, red onions and peppers. Toss with oil, salt and pepper, then roast for about 8 minutes.","Cook spaghetti with a drizzle of oil and salt, covered by hot water plus 1cm. Original note says dry pasta takes around 20 minutes.","Combine sauce, chicken, roast veg and pasta as needed. Portion at around 60g pasta per portion if following the original note."],
    notes:["Reviewed: this needed tidying. The bicarbonate amount is high and will reduce acidity fast; taste carefully and add acid back if it tastes flat or soapy."]
  },
  {
    title:"Spiced Sweet Potato Soup",
    category:"Soups",
    tags:["soup","sweet potato"],
    ingredients:["4 tbsp olive oil","8 carrots, diced","2 large onions, chopped","4 garlic cloves, finely chopped","2 tsp ground cinnamon","1/2 tsp cayenne pepper","Pinch nutmeg","4 sweet potatoes, peeled and diced","3 tbsp chicken or vegetable bouillon base","2 bay leaves","2L water, then adjust","Salt"],
    method:["Heat oil over medium heat. Add carrots, onion and garlic and cook for 8-10 minutes until starting to brown at the edges.","Add cinnamon, cayenne and nutmeg and cook for 1 minute.","Add sweet potatoes, bouillon, bay leaves and water. Bring to a boil.","Reduce to a simmer and cook until the vegetables are very tender, around 10-12 minutes.","Remove bay leaves, blend smooth and season to taste."],
    notes:["Reviewed: good. Browning the veg gives sweetness and depth."]
  },
  {
    title:"Tomato Soup",
    category:"Soups",
    tags:["tomato","basil","batch"],
    ingredients:["6 carrots","1 celery stick or head, depending batch size","4 onions","5 garlic cloves","4 tbsp vegetable stock or bouillon","2.5kg tin plum tomatoes","6 large ripe tomatoes","50g basil","100g caster sugar","100ml white wine vinegar","Salt and pepper"],
    method:["Peel and roughly slice carrots, celery, onions and garlic.","Heat oil in a large pan and soften the vegetables for 10-15 minutes.","Add stock, tinned tomatoes and fresh tomatoes.","Bring to a boil, then simmer with a lid for 45 minutes.","Remove from heat, season, add basil and blend smooth.","Balance with sugar and white wine vinegar to taste."],
    notes:["Reviewed: sugar and vinegar are high enough to treat as balancing ingredients. Add gradually if the tomatoes are already sweet/sharp."]
  },
  {
    title:"Soup Base — Parsnip, Carrot, Butternut, Broccoli",
    category:"Soups",
    tags:["soup","base","batch"],
    ingredients:["Main vegetable: 3kg parsnip, 3kg carrot, 5 butternut squash or 3kg broccoli","3-4 white onions","4-5 garlic cloves","2 tbsp vegetable bouillon","1L water, then adjust","Cream: 1L for richer soups, 200ml for asparagus-style lighter soup","Salt and white pepper","Optional coriander for carrot soup","Optional Stilton for broccoli soup","Optional smoked paprika for butternut soup"],
    method:["Sweat onions and garlic in oil until soft.","Add vegetable bouillon and the main vegetable. Add water and cook until very soft.","Lift the solids into a blender and blend, adding cooking liquid gradually until smooth.","Add cream to finish if using. Season at the end.","For carrot and coriander, add coriander to taste at the end. For broccoli and Stilton, add Stilton while blending or finishing."],
    notes:["Reviewed: the shared method makes sense. Add liquid gradually so you control thickness instead of ending up with watery soup."]
  },
  {
    title:"Parsnip & Apple Soup",
    category:"Soups",
    tags:["soup","apple"],
    ingredients:["Parsnips or honey-roasted carrots as base","Apples","Vegetable stock","Cumin","Fennel seeds","Garlic powder","Onion powder","Salt"],
    method:["Roast the root veg with honey if using that version, or sweat diced parsnip/carrot in oil for a cleaner soup.","Add apples, stock, cumin, fennel, garlic powder and onion powder.","Simmer until everything is soft.","Blend smooth and season with salt. Add cream if you want a richer finish."],
    notes:["Reviewed: original note said honey roasted carrots, which conflicts with parsnip title. I’ve kept both possibilities and made it usable."]
  },
  {
    title:"Dauphinoise Potato / Chips",
    category:"Rice & Sides",
    tags:["potato","gastro","3 days"],
    ingredients:["5kg peeled potatoes","1L double cream","6 medium shallots","3 tbsp garlic puree","1/2 pack fresh thyme","25g table salt, roughly to taste"],
    method:["Sauté shallot, thyme and garlic puree in oil for 2-4 minutes until softened and lightly caramelised.","Add cream and salt, bring to the boil, then remove from heat. Blend the cream mix and allow to cool.","Slice potatoes to 1.5mm on a mandolin and pat dry.","Layer half the potatoes into a lined gastro tray. Pour over half the cream through a sieve.","Finish layering the potatoes and add the remaining cream through a sieve.","Cover with parchment, press with a gastro tray and bake for 1 hour at 160°C.","Remove the press and parchment, then bake for another 30 minutes until golden.","Cool, press and set in the fridge before slicing. One gastro makes roughly 30 dauphinoise portions or 60 chips.","Store chilled for up to 3 days."],
    notes:["Reviewed: good professional prep method. The cream should taste slightly over-seasoned before baking because the potatoes absorb it."]
  },
  {
    title:"Champ Mash",
    category:"Rice & Sides",
    tags:["potato","mash","3 days"],
    ingredients:["4kg white potatoes, cut in chunks","250g salted butter, cubed","200ml whole milk","Salt"],
    method:["Place potatoes in cold salted water. Bring to a boil, then simmer for 30-40 minutes until very soft.","Drain well and return to the pan to steam-dry for 5 minutes.","Pass through a ricer, then through a sieve if you need very smooth mash.","Beat in butter, milk and seasoning until smooth and creamy.","Cool and store chilled for up to 3 days, or serve as needed."],
    notes:["Reviewed: method makes sense. If it is called champ, sliced spring onions would usually be added, but they were not in your original list."]
  },
  {
    title:"Moroccan Veg",
    category:"Rice & Sides",
    tags:["veg","couscous","stuffed pepper"],
    ingredients:["2 large red peppers","2 orange peppers","2 red onions","2 courgettes","1 tbsp cumin","1 tbsp coriander","1 tbsp ginger","2 tbsp olive oil","1 lemon, squeezed and roasted with veg","Salt and black pepper"],
    method:["Preheat oven to 200°C fan.","Cut peppers, onions and courgettes into bite-size chunks.","Toss with spices, oil, lemon, salt and pepper on a large baking sheet.","Roast for about 30 minutes until soft and charred, tossing halfway.","Use for couscous or stuffed peppers."],
    notes:["Reviewed: works. Keep veg chunky so it does not collapse before it chars."]
  },
  {
    title:"Spring Greens in Tarragon & Chive Butter",
    category:"Rice & Sides",
    tags:["veg","butter sauce","emulsion"],
    ingredients:["1/2 pak choi","3 asparagus spears","Small handful peas","1 gem heart","50g butter, diced","50ml fish stock or fish bouillon water","Chopped tarragon and chive","Salt"],
    method:["Heat the stock in a frying pan.","Add the cooked or prepared vegetables and warm through.","Add diced butter and toss to emulsify into a glossy butter sauce that coats the veg.","Remove from heat, add herbs and season with salt."],
    notes:["Reviewed: this is a pan-emulsion technique. Keep the heat controlled so the butter emulsifies rather than splitting."]
  },
  {
    title:"Yorkshire Pudding",
    category:"Rice & Sides",
    tags:["ratio","bake"],
    ingredients:["Plain flour","Eggs","Milk","Salt","Oil or dripping for tray"],
    method:["Use equal quantities of plain flour, eggs and milk by volume or weight depending on house method.","Rest the batter if time allows.","Heat oil in the tray until properly hot.","Add batter and bake at 195°C for about 18 minutes without opening the oven early."],
    notes:["Reviewed: ratio makes sense. Hot fat and no early oven opening are the big wins."]
  },
  {
    title:"Fish / Beer Batter",
    category:"Prep",
    tags:["batter","fish"],
    ingredients:["Quick ratio: plain flour, soda water and beer in equal parts","Salt","Optional lemon and malt vinegar","Batch version: 1kg plain flour","5 tsp salt","1 tsp bicarbonate of soda","30ml white wine vinegar","1 pint beer","1/2 pint soda water"],
    method:["For quick batter, combine equal parts plain flour, soda water and beer, then season with salt.","For the batch version, whisk flour, salt, bicarb, vinegar, beer and soda water together until smooth.","Keep cold and use promptly for the lightest result."],
    notes:["Reviewed: original said 'sofa', clearly meant soda. Vinegar plus bicarb helps aeration."]
  },
  {
    title:"Calamari / Courgette Dredge",
    category:"Prep",
    tags:["dredge","7 days"],
    ingredients:["500g cornflour","3 tbsp smoked paprika","2 tbsp onion powder","2 tbsp garlic powder","1 tbsp ground coriander","Salt and pepper"],
    method:["Mix all dry ingredients thoroughly.","Store dry for up to 7 days.","For courgette and aubergine, slice first and lightly dress with lemon juice and olive oil before dredging."],
    notes:["Reviewed: good dry dredge. Fry a test piece before service to check salt."]
  },
  {
    title:"Beef Strips Dredge",
    category:"Prep",
    tags:["dredge","beef"],
    ingredients:["Gram flour for dry mix","Onion powder","Garlic powder","Gram flour for wet mix","Water"],
    method:["Mix gram flour with onion powder and garlic powder for the dry dredge.","Make a separate wet paste with gram flour and water.","Coat beef in wet paste, then dry dredge, then fry or cook as required."],
    notes:["Reviewed: ingredient amounts were missing, so this is preserved as a technique card rather than a precise recipe."]
  },
  {
    title:"Chicken Wings Dredge",
    category:"Prep",
    tags:["wings","cornstarch"],
    ingredients:["Cornstarch","Seasoning as required"],
    method:["Coat wings evenly in cornstarch and seasoning.","Shake off excess before frying or roasting."],
    notes:["Reviewed: very minimal note, but useful. Cornstarch helps create a crisp, dry surface."]
  },
  {
    title:"Confit Tomatoes",
    category:"Prep",
    tags:["tomatoes","3 days"],
    ingredients:["1kg vine cherry tomatoes","1 tbsp garlic puree","Thyme and rosemary, finely chopped","Pinch pepper","Pinch sea salt","25ml olive oil","25ml vegetable oil"],
    method:["Slice cherry tomatoes in half and place in a mixing bowl.","Add garlic, herbs, seasoning and oils. Mix well.","Lay tomatoes cut-side up on a lined gastro tray.","Dry under the gantry heat lamp for around 2 hours, moving the tray occasionally, until they resemble sun-dried tomatoes.","Cool and refrigerate for up to 3 days."],
    notes:["Reviewed: good low-temp drying method. Keep them cut-side up so they dry rather than stew."]
  },
  {
    title:"Toasted Mixed Seeds",
    category:"Prep",
    tags:["seeds","garnish"],
    ingredients:["300g mixed seeds","Oil","Salt"],
    method:["Toss seeds with a little oil and salt.","Spread on a baking tray.","Roast at 190°C for 5-10 minutes until golden.","Cool before storing."],
    notes:["Reviewed: good garnish prep. Seeds burn quickly, so check early."]
  },
  {
    title:"Bang Bang Chicken",
    category:"Mains",
    tags:["chicken","gram flour","batch"],
    ingredients:["6kg diced chicken thigh","300g gram flour for dry mix","300g gram flour for wet batter","3 tbsp garlic powder","3 tbsp onion powder","Salt","Cold water"],
    method:["Mix the dry gram flour with garlic powder, onion powder and salt.","In a separate bowl, mix gram flour with cold water until a thick batter forms, thicker than beer batter.","Add wet batter over the dry mix and combine with the chicken until coated.","Fry or cook according to service method."],
    notes:["Reviewed: original lacked final cooking instruction. I’ve kept it as prep because the service cook time depends on piece size and fryer setup. Chicken still needs 75°C internal."]
  },
  {
    title:"Ve-duja Arancini",
    category:"Mains",
    tags:["vegetarian","rice","prep"],
    ingredients:["10 tbsp extra-virgin olive oil","5 small onions, finely chopped","2 tbsp garlic puree","900g Arborio rice","600ml dry white wine","2.5L water or stock","Black pepper","150g vegetarian Parmigiano-Reggiano style cheese","180g ve-duja","Saffron","Salt","Panne ingredients for coating"],
    method:["Heat oil and cook onion for about 1 minute, stirring often.","Add garlic and cook for a few minutes without burning.","Stir in rice and wine. Cook for 5-10 minutes until the liquid is absorbed.","Add liquid in stages, stirring occasionally, until absorbed and the rice is cooked enough to bind.","Season with pepper. Stir in ve-duja, saffron and cheese.","Spread into a gastro, cover and chill for at least 1 hour 30 minutes until firm.","Slice into equal cubes, roll into balls and panne.","Freeze or serve within 3 days."],
    notes:["Reviewed: good prep method. Stock would give more flavour than water if available."]
  },
  {
    title:"Short Rib of Beef Maple",
    category:"Mains",
    tags:["beef","slow cook","3 days"],
    ingredients:["10 short ribs","300g sweet chilli sauce","300g gluten-free soy sauce","1 bottle maple syrup","2 tbsp garlic puree","500ml beef stock, plus more if needed"],
    method:["Sear short ribs on all sides in a large frying pan.","Place ribs in a deep half gastro.","Mix sweet chilli, soy, maple and garlic puree and pour over the ribs.","Add beef stock to cover or nearly cover, then cover tightly with foil.","Cook at 160°C for 2-4 hours, until tender.","Remove ribs, cool, glaze with a little sauce, wrap and store for up to 3 days.","Save the cooking sauce for serving."],
    notes:["Reviewed: makes sense. The time range is broad because rib size varies; tenderness is the real doneness test."]
  },
  {
    title:"Lamb & Beef Lasagne",
    category:"Mains",
    tags:["lasagne","ragu","batch"],
    ingredients:["4kg lamb mince","4kg beef mince","10 onions, finely diced","20 garlic cloves, sliced","1 celery, finely diced","12 large carrots, finely diced","1 bottle red wine","4 tbsp dried thyme","3 tins chopped tomatoes","400g tomato puree","3 tbsp olive oil","Salt and pepper","4L béchamel","Lasagne sheets","Parmesan and cheddar for topping","Optional pancetta if using house method"],
    method:["Brown the mince in batches so it browns rather than stews. Drain excess fat and set aside.","Wipe the pan if needed. Sauté pancetta if using, then add onions, celery, carrots and garlic and cook for around 5 minutes.","Return the mince to the pan and add red wine. Reduce the wine by half.","Add chopped tomatoes, tomato puree and thyme. Simmer gently for 2-3 hours, stirring occasionally.","Layer ragù, béchamel, Parmesan and lasagne sheets. Repeat.","Finish with lasagne sheets topped with béchamel, Parmesan and cheddar.","Bake for around 45 minutes, covering with foil if browning too quickly.","Cool, portion and store chilled for up to 3 days."],
    notes:["Reviewed: original mentioned milk in the method but not ingredients. I removed it from the core method; add milk only if that is your house ragù style."]
  },
  {
    title:"Courgette Moussaka",
    category:"Mains",
    tags:["courgette","lamb","prep"],
    ingredients:["4L lamb and beef ragù","2 tbsp allspice","2 tsp ground ginger","2 tsp garam masala","2 tsp dried oregano","Courgettes, as needed","Béchamel for topping"],
    method:["Bring salted water to the boil and blanch courgettes for 2 minutes.","Refresh in iced water.","Cut each courgette in half lengthways and scoop out the seeds.","Season the ragù with allspice, ginger, garam masala and oregano. Taste and adjust salt if needed.","Fill the courgettes, wrap and store for up to 3 days.","For service, top with béchamel and bake until hot and golden."],
    notes:["Reviewed: makes sense as a stuffed courgette/moussaka hybrid. Garam masala is unusual but can work with lamb and warm spice."]
  },
  {
    title:"Onion Jam",
    category:"Prep",
    tags:["jam","7 days"],
    ingredients:["2.5kg sliced red onions","160ml oil","600g light brown sugar","15g thyme","200ml balsamic vinegar","400ml red wine","Salt"],
    method:["Heat oil in a large saucepan over medium-high heat.","Add onions and cook for 15-30 minutes, stirring often, until tender and golden brown.","Add thyme and cook for 3-5 minutes.","Add sugar and leave for around 5 minutes to melt before stirring through.","Add balsamic vinegar and red wine. Bring to the boil, then reduce and simmer for around 10 minutes, or longer if it needs thickening.","Cool, season with salt and store for 7-10 days."],
    notes:["Reviewed: good. Jam should be glossy and spoonable, not watery."]
  },
  {
    title:"Chorizo Jam",
    category:"Prep",
    tags:["chorizo","slow cook"],
    ingredients:["1kg diced chorizo","1L apple juice","1 tsp paprika","2 tbsp garlic puree","2 tbsp onion powder","Water to cover","Salt to taste"],
    method:["Sauté chorizo lightly in a little oil.","Add garlic puree, onion powder and paprika. Cook on low heat for 2 minutes.","Add apple juice and enough water to cover the chorizo.","Bring to the boil, then simmer gently for 2-4 hours until the chorizo breaks down.","Top up with water as needed during cooking. Taste and season at the end."],
    notes:["Reviewed: makes sense as a slow-cooked relish. Blend or crush at the end if you need a smoother jam."]
  },
  {
    title:"Thai Special Plating",
    category:"Plating",
    tags:["Thai","fish cake","service"],
    ingredients:["Fish cake","Thai curry sauce","Mixed leaf","Asian slaw","Sesame dressing"],
    method:["Place Thai curry sauce as the base.","Sit the fish cake on the curry.","Finish with a dressed head/garnish of mixed leaf, Asian slaw and sesame dressing."],
    notes:["Reviewed: plating note only, but useful to keep."]
  },
  {
    title:"Asparagus Prep",
    category:"Techniques",
    tags:["asparagus","knife work","prep","soup"],
    ingredients:["Asparagus spears","Turning knife","Container for trimmed stems/root ends"],
    method:["Snap the woody bottom from each asparagus spear rather than cutting. The spear naturally breaks where the tough part gives way.","Trim the very tip only if needed for presentation or if the end is damaged.","Use a turning knife to shave away the little shards/scales on the stem and remove any purple or tough-looking bits.","Keep the root/woody ends separate if the kitchen is using them for soup or stock. Simmer them for flavour, then remove, blend only if tender enough, or pass well so stringy fibres do not end up in the soup."],
    notes:["Technique note: snapping is used because asparagus gets woody at the base at different points on each spear. Cutting the same amount off every spear can leave some tough ends or waste good stem."]
  },
  {
    title:"Dressing Ratio — 3:1:1:1",
    category:"Techniques",
    tags:["dressing","ratio","emulsion"],
    ingredients:["3 parts oil","1 part sweetener","1 part mustard","1 part vinegar"],
    method:["Whisk mustard and vinegar together first.","Add sweetener and mix.","Slowly add oil while whisking until emulsified.","Taste and adjust: more vinegar for sharpness, more sweetener for roundness, more mustard for body."],
    notes:["Technique note: mustard helps hold the dressing together."]
  },
  {
    title:"Mise en Place for Desserts",
    category:"Techniques",
    tags:["desserts","prep","organisation"],
    ingredients:["All weighed ingredients","Lined trays","Correct tools","Oven preheated"],
    method:["Weigh and set out every ingredient before starting.","Line trays before mixing batters or creams.","Check oven temperature and chilling time before committing to the recipe."],
    notes:["Technique note: desserts punish missing ingredients and timing mistakes more than most savoury prep."]
  }
];

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const state = { q: '', cat: 'All' };

function text(r){
  return [r.title, r.category, r.tags.join(' '), r.ingredients.join(' '), r.method.join(' '), (r.notes||[]).join(' ')].join(' ').toLowerCase();
}

function cats(){
  return ['All', ...[...new Set(recipes.map(r=>r.category))].sort()];
}

function renderChips(){
  $('#chips').innerHTML = cats().map(c => `<button class="chip ${c===state.cat?'active':''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
}

function filtered(){
  const q = state.q.trim().toLowerCase();
  return recipes.filter(r => (state.cat === 'All' || r.category === state.cat) && (!q || text(r).includes(q)));
}

function renderSection(title, items, type){
  if(!items || !items.length) return '';
  if(type === 'list'){
    return `<section class="recipe-section"><h3>${esc(title)}</h3><ul>${items.map(i=>`<li>${esc(i)}</li>`).join('')}</ul></section>`;
  }
  return `<section class="recipe-section"><h3>${esc(title)}</h3><div class="method-copy">${items.map(i=>`<p>${esc(i)}</p>`).join('')}</div></section>`;
}

function render(){
  const rows = filtered();
  $('#count').textContent = `${rows.length} ${state.cat === 'Techniques' ? 'technique' : 'recipe'}${rows.length===1?'':'s'}`;
  $('#list').innerHTML = rows.length ? rows.map(r => `
    <details class="card">
      <summary>
        <div>
          <h2 class="title">${esc(r.title)}</h2>
          <div class="meta"><span class="badge">${esc(r.category)}</span>${r.tags.slice(0,4).map(t=>`<span class="badge">${esc(t)}</span>`).join('')}</div>
        </div>
        <span class="chev">⌄</span>
      </summary>
      <div class="body">
        ${renderSection('Ingredients', r.ingredients, 'list')}
        ${renderSection('Method', r.method, 'paragraphs')}
        ${renderSection('Review Notes', r.notes || [], 'paragraphs')}
      </div>
    </details>
  `).join('') : '<div class="empty">No recipes found. Try another search.</div>';
}

$('#searchToggle').addEventListener('click',()=>{
  const p = $('#searchPanel');
  p.hidden = !p.hidden;
  $('#searchToggle').setAttribute('aria-expanded', String(!p.hidden));
  if(!p.hidden) setTimeout(()=>$('#search').focus(),50);
});

$('#search').addEventListener('input', e => { state.q = e.target.value; render(); });
$('#chips').addEventListener('click', e => {
  const b = e.target.closest('[data-cat]');
  if(!b) return;
  state.cat = b.dataset.cat;
  renderChips();
  render();
});
$('#collapseAll').addEventListener('click',()=>document.querySelectorAll('.card[open]').forEach(d=>d.open=false));
$('#themeBtn').addEventListener('click',()=>{
  const n = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = n;
  localStorage.setItem('recipe-theme', n);
});
document.documentElement.dataset.theme = localStorage.getItem('recipe-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
renderChips();
render();
