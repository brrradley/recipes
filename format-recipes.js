function splitIntoSentences(text){
  return text
    .replace(/\s+/g,' ')
    .split(/(?<=[.!?])\s+(?=[A-Z0-9])/)
    .map(s=>s.trim())
    .filter(Boolean);
}

function splitIngredients(line){
  const cleaned = line.replace(/^(Chicken|Marinade|Gravy|Spices|Base|Finish|BIR option|Batter|Sauce|Veg|Spaghetti|Quick|Work batch|Dry|Wet|Paste|Mayo):\s*/i,'');
  return cleaned
    .split(/,\s*(?=(?:\d|\d\/|\d+\/|\d+\.\d|[A-Z]?[a-z]+\b|salt\b|pepper\b|water\b|oil\b))/)
    .map(s=>s.trim().replace(/\.$/,''))
    .filter(Boolean);
}

function looksLikeIngredient(line){
  const l = line.trim();
  if(!l) return false;
  if(/^(Cook|Warm|Roast|Sizzle|Add|Combine|Season|Whisk|Dip|Drain|Line|Melt|Sift|Fold|Beat|Bake|Cool|Heat|Simmer|Sweat|Fry|Reduce|Boil|Pass|Store|Start|Blanch|Halve|Mix|Make|Sauté|Sear|Place|Layer|Finish|Serve|Plate|Rinse|Toast|Cover|Remove|Return|Stir|Chill|Cube|Roll|Freeze)/i.test(l)) return false;
  return /(^|\s)(\d|\d\/|\d+\/|g\b|kg\b|ml\b|L\b|ltr\b|tbsp\b|tsp\b|pinch\b|cup\b|cups\b|bottle\b|tin\b|tins\b|onion|garlic|salt|pepper|oil|water|cream|butter|flour|sugar|chicken|beef|lamb|rice|tomato|potato)/i.test(l);
}

function formatRecipeBody(body){
  const raw = body.textContent.replace(/^Recipe\s*/i,'').trim();
  if(!raw || body.dataset.formatted === 'true') return;
  const lines = raw.split('\n').map(l=>l.trim()).filter(Boolean);
  const ingredients = [];
  const methods = [];

  lines.forEach(line => {
    const sentences = splitIntoSentences(line);
    const firstMethodAt = sentences.findIndex(s => !looksLikeIngredient(s));
    if(firstMethodAt === -1){
      splitIngredients(line).forEach(i => ingredients.push(i));
      return;
    }
    if(firstMethodAt > 0){
      splitIngredients(sentences.slice(0, firstMethodAt).join(' ')).forEach(i => ingredients.push(i));
      sentences.slice(firstMethodAt).forEach(s => methods.push(s));
      return;
    }
    if(looksLikeIngredient(line) && line.includes(':')){
      const [label, rest] = line.split(/:\s(.+)/);
      if(rest){ splitIngredients(rest).forEach(i => ingredients.push(`${label}: ${i}`)); return; }
    }
    sentences.forEach(s => methods.push(s));
  });

  const safe = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const ingHtml = ingredients.length
    ? `<section class="recipe-section"><h3>Ingredients</h3><ul>${ingredients.map(i=>`<li>${safe(i)}</li>`).join('')}</ul></section>`
    : '';
  const methodHtml = methods.length
    ? `<section class="recipe-section"><h3>Method</h3><div class="method-copy">${methods.map(m=>`<p>${safe(m)}</p>`).join('')}</div></section>`
    : '';
  body.innerHTML = ingHtml + methodHtml;
  body.dataset.formatted = 'true';
}

function formatAllRecipes(){
  document.querySelectorAll('.body').forEach(formatRecipeBody);
}

const observer = new MutationObserver(() => formatAllRecipes());
observer.observe(document.getElementById('list'), {childList:true, subtree:true});
formatAllRecipes();
