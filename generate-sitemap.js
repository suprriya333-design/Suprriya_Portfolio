// Update routes and run with Node.js
const routes=['/','/about','/projects','/contact'];
console.log('<?xml version="1.0"?>');
console.log('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
routes.forEach(r=>console.log(`<url><loc>https://yourportfolio.com${r}</loc></url>`));
console.log('</urlset>');
