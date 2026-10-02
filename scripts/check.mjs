import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {profile,projects} from '../src/content.ts';
const html=await readFile('dist/index.html','utf8');
const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
for(const [,link] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
 if(link.startsWith('#')){if(link.length>1)assert(ids.has(link.slice(1)),`Missing section ${link}`)}
 else if(!/^(https:|mailto:|data:)/.test(link))await access('dist/'+link);
}
assert(!html.includes('{{'));assert(html.includes(profile.introduction));assert(projects.length===3);
assert(html.includes('SafeDrive'));assert(html.includes('og:title'));assert(!html.includes('+1249'));
assert((await readFile('dist/'+profile.cv)).subarray(0,4).toString()==='%PDF');
console.log('Passed: content, navigation targets, local assets, project details, metadata and PDF download asset.');
