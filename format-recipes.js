function splitIntoSentences(text){
  return text
    .replace(/\s+/g,' ')
    .split(/(?<=[.!?])\s+(?=[A-Z0-9])/)
    .map(s=>s.trim())
    .filter(Boolean);
}

const METHOD_START = /^(warm|cook|roast|grill|sizzle|add|combine|season|whisk|dip|drain|line|melt|sift|fold|beat|bake|cool|heat|simmer|sweat|fry|reduce|boil|pass|store|start|blanch|halve|mix|make|sauté|saute|sear|place|layer|finish|serve|plate|rinse|toast|cover|remove|return|stir|chill|cube|roll|freeze|thread|air fry|oven|preheat|pour|turn|leave|fluff|spread|slice|trim|snap|shave)/i;
const ING_LABEL = /^(chicken|marinade|gravy|spices|base|finish|bir option|batter|sauce|veg|spaghetti|quick|work batch|dry|wet|paste|mayo|parsnip|carrot coriander|butternut|broccoli stilton):\s*/i;
const ING_HINT = /(^|\s)(\d|\d\/|\d+\/|g\b|kg\b|ml\b|l\b|ltr\b|tbsp\b|tsp\b|pinch\b|cup\b|cups\b|bottle\b|tin\b|tins\b|onion|garlic|salt|pepper|oil|water|cream|butter|flour|sugar|chicken|beef|lamb|rice|tomato|potato|coriander|cumin|paprika|thyme|rosemary|yoghurt|milk|egg)/i;

function splitIngredients(line){
  const labelMatch = line.match(ING_LABEL);
  const label = labelMatch ? labelMatch[1].replace(/:\s*$/,'') : '';
  const cleaned = line.replace(ING_LABEL,'');
  return cleaned
    .split(/,\s*(?=(?:\d|\d\/|\d+\/|\d+\.\d|[A-Z]?[a-z]+\b|salt\b|pepper\b|water\b|oil\b))/)
    .map(s=>s.trim().replace(/\.$/,''))
    .filter(Boolean)
    .map(item => label ? `${label}: ${item}` : item);
}

function methodIndex(sentences){
  return sentences.findIndex(s => METHOD_START.test(s));
}

function formatRecipeBody(body){
  const raw = body.textContent.replace(/^Recipe\s*/i,'').trim();
  if(!raw || body.dataset.formatted === 'true') return;

  const lines = raw.split('\n').map(l=>l.trim()).filter(Boolean);
  const ingredients = [];
  const methods = [];
  let methodStarted = false;

  lines.forEach(line => {
    const sentences = splitIntoSentences(line);

    if(methodStarted){
      sentences.forEach(s => methods.push(s));
      return;
    }

    if(/^base method:/i.test(line)){
      methodStarted = true;
      methods.push(line.replace(/^base method:\s*/i,''));
      return;
    }

    const idx = methodIndex(sentences);

    if(idx === 0){
      methodStarted = true;
      sentences.forEach(s => methods.push(s));
      return;
    }

    if(idx > 0){
      splitIngredients(sentences.slice(0, idx).join(' ')).forEach(i => ingredients.push(i));
      sentences.slice(idx).forEach(s => methods.push(s));
      methodStarted = true;
      return;
    }

    if(ING_LABEL.test(line) || ING_HINT.test(line)){
      splitIngredients(line).forEach(i => ingredients.push(i));
      return;
    }

    methodStarted = true;
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
