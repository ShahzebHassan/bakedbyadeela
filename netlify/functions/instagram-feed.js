// Tokens stay on the server. Without an authorised account, the browser keeps the supplied photos.
exports.handler = async (event) => {
  const headers = {'Content-Type':'application/json','Cache-Control':'public, max-age=300'};
  const reply=(statusCode,body)=>({statusCode,headers,body:JSON.stringify(body)});
  if(event.httpMethod && event.httpMethod!=='GET')return reply(405,{items:[]});
  const token=process.env.INSTAGRAM_ACCESS_TOKEN;
  const account=process.env.INSTAGRAM_USER_ID;
  const version=process.env.INSTAGRAM_API_VERSION || 'v27.0';
  if(!token || !account || !/^\d+$/.test(account) || !/^v\d+\.\d+$/.test(version))return reply(200,{items:[],connected:false});
  try {
    const url=new URL(`https://graph.instagram.com/${version}/${account}/media`);
    url.searchParams.set('fields','id,caption,media_type,media_url,thumbnail_url,permalink');
    url.searchParams.set('limit','8');
    url.searchParams.set('access_token',token);
    const response=await fetch(url,{signal:AbortSignal.timeout(6500)});
    if(!response.ok)return reply(502,{items:[],connected:false});
    const data=await response.json();
    const items=(Array.isArray(data.data)?data.data:[]).map(item=>({image:item.media_type==='VIDEO'?item.thumbnail_url:item.media_url,url:item.permalink,caption:item.caption||'Floral cakes and cupcake bouquets by Baked By Adeela'})).filter(item=>item.image&&item.url).slice(0,4);
    return reply(200,{items,connected:true});
  } catch {return reply(502,{items:[],connected:false})}
};
