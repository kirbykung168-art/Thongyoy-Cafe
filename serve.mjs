import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT=fileURLToPath(new URL('.',import.meta.url));
const PORT=process.env.PORT||5173;
const MIME={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.mjs':'application/javascript; charset=utf-8','.json':'application/json','.webp':'image/webp','.avif':'image/avif','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.ico':'image/x-icon','.xml':'application/xml','.txt':'text/plain'};
const send=(res,c,b,t='text/plain')=>{res.writeHead(c,{'Content-Type':t,'Cache-Control':c===200?'no-cache':'no-store'});res.end(b);};
http.createServer(async(req,res)=>{try{let url=decodeURIComponent(req.url.split('?')[0]);if(url==='/')url='/index.html';const p=normalize(join(ROOT,url));if(!p.startsWith(ROOT))return send(res,403,'forbidden');try{await stat(p);}catch{const fb=await readFile(join(ROOT,'404.html')).catch(()=>null);return fb?send(res,404,fb,'text/html; charset=utf-8'):send(res,404,'not found');}const b=await readFile(p);send(res,200,b,MIME[extname(p)]||'application/octet-stream');}catch(e){send(res,500,String(e));}}).listen(PORT,()=>console.log(`THONGYOY · http://localhost:${PORT}`));
