import { useState } from 'react';
import GoogleDorkButton from '../components/GoogleDorkButton';
import HoverCard from '../components/HoverCard'



const dorks = [
  { title: "Broad domain w/ negative search", query: "site:example.com -www -shop -share -ir -mfa" },
  { title: "PHP extension w/ parameters", query: "site:example.com ext:php inurl:?" },
  { title: "XSS and Open Redirects", query: "site:openbugbounty.org inurl:reports intext:\"example.com\"" },
  { title: "Juicy Extensions", query: "site:example.com ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess" },
  { title: "Code Leaks", query: "site:pastebin.com \"example.com\"\nsite:jsfiddle.net \"example.com\"\nsite:codebeautify.org \"example.com\"\nsite:codepen.io \"example.com\"" },
  { title: "Cloud Storage", query: "site:s3.amazonaws.com \"example.com\"\nsite:blob.core.windows.net \"example.com\"\nsite:googleapis.com \"example.com\"\nsite:drive.google.com \"example.com\"\nsite:dev.azure.com \"example.com\"\nsite:onedrive.live.com \"example.com\"\nsite:digitaloceanspaces.com \"example.com\"\nsite:sharepoint.com \"example.com\"\nsite:s3-external-1.amazonaws.com \"example.com\"\nsite:s3.dualstack.us-east-1.amazonaws.com \"example.com\"\nsite:dropbox.com/s \"example.com\"\nsite:box.com/s \"example.com\"\nsite:docs.google.com inurl:\"/d/\" \"example.com\"" },
  { title: "XSS prone parameters", query: "inurl:q= | inurl:s= | inurl:search= | inurl:query= inurl:& site:example.com" },
  { title: "Open Redirect prone parameters", query: "inurl:url= | inurl:return= | inurl:next= | inurl:redir= inurl:http site:example.com" },
  { title: "SQLi Prone Parameters", query: "inurl:id= | inurl:pid= | inurl:category= | inurl:cat= | inurl:action= | inurl:sid= | inurl:dir= inurl:& site:example.com" },
  { title: "SSRF Prone Parameters", query: "inurl:http | inurl:url= | inurl:path= | inurl:dest= | inurl:html= | inurl:data= | inurl:domain= | inurl:page= inurl:& site:example.com" },
  { title: "LFI Prone Parameters", query: "inurl:include | inurl:dir | inurl:detail= | inurl:file= | inurl:folder= | inurl:inc= | inurl:locate= | inurl:doc= | inurl:conf= inurl:& site:example.com" },
  { title: "RCE Prone Parameters", query: "inurl:cmd | inurl:exec= | inurl:query= | inurl:code= | inurl:do= | inurl:run= | inurl:read= | inurl:ping= inurl:& site:example.com" },
  { title: "High % inurl keywords", query: "inurl:config | inurl:env | inurl:setting | inurl:backup | inurl:admin | inurl:php site:example.com" },
  { title: "Sensitive Parameters", query: "inurl:email= | inurl:phone= | inurl:password= | inurl:secret= inurl:& site:example.com" },
  { title: "JFrog Artifactory", query: "site:jfrog.io \"example.com\"" },
  { title: "Firebase", query: "site:firebaseio.com \"example.com\"" },
  { title: "API Docs", query: "inurl:apidocs | inurl:api-docs | inurl:swagger | inurl:api-explorer site:example.com" },
  { title: "File upload endpoints", query: "site:example.com \"choose file\"" },
  { title: "Bug Bounty programs", query: "\"submit vulnerability report\" | \"powered by bugcrowd\" | \"powered by hackerone\"\nsite:example.com/security.txt \"bounty\"" },
  { title: "Apache Server Status Exposed", query: "site:example.com/server-status apache" },
  { title: "WordPress", query: "inurl:/wp-admin/admin-ajax.php site:example.com" },
  { title: "Drupal", query: "intext:\"Powered by\" & intext:Drupal & inurl:user site:example.com" },
  { title: "Joomla", query: "site:example.com/joomla/login" }
];

export default function Search() {
  const [domain, setDomain] = useState('');

  const handleSearch = (dork) => {
    const updatedDork = dork.replace(/example\.com/g, domain);
    window.open(`https://www.google.com/search?q=${encodeURIComponent(updatedDork)}`, '_blank');
  }
  
  return (
    
    <div className=" container md:flex flex-col md:space-y-20 flex-1 p-8 sm:p-10  ">
      <input
        type="text"
        placeholder="Enter Domain"
        className="w-full p-2 mb-4 bg-black border border-emerald-400/90 border-opacity-50 text-white rounded-md"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 backdrop-blur-lg ">
        {dorks.map((dork) => (
          <GoogleDorkButton
            key={dork.query}
            onClick={() => handleSearch(dork.query)}
            
          >
            {dork.title}
          </GoogleDorkButton>
        ))}
      </div>
    </div>
    
    
  );
  
}
