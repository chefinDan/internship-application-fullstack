const VARIANT_URL = new URL('https://cfw-takehome.developers.workers.dev/api/variants');
var urls = [];

addEventListener('fetch', event => {
  event.respondWith(chooseRandomUrl(event.request))
})

async function chooseRandomUrl(request) {
  const rand = Math.round(Math.random())
  try{
    if(urls.length === 0)
      await fetchVariantUrls()
    return await fetch(urls[rand]);

  } catch(err){
    return new Response("Error fetching resource at: " + VARIANT_URL)
  }
}

async function fetchVariantUrls(){
  console.log('Fetching Variant URLS...')
  const fetch_response = await fetch(VARIANT_URL);
  if(fetch_response.status !== 200)
    throw new Error(fetch_response.status);
  const body = await fetch_response.json();
  urls.push(...body.variants);
}