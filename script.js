'use strict';
/* ForensicsLab – Part 1 core. Content is general introductory digital forensics material
   (the supplied slides were not available), so it is NOT lecturer-specific. */

/* ---------- DATA: single source of truth. Append more questions to each qs array. ---------- */
// qs item: [type('mcq'|'tf'), question, options[], correctIndex, explanation]
const CHAPTERS = [
{id:1,title:'Introduction to Digital Forensics',
 overview:'Digital forensics is the identification, preservation, analysis and presentation of digital evidence in a legally sound way.',
 notes:['Goal: establish what happened using evidence, not assumptions.','Branches include computer, mobile, network and cloud forensics.','Work must stay within legal authority, privacy rules and the approved scope.'],
 terms:{'Digital forensics':'Scientific process of handling and analysing digital evidence.','Scope':'The devices, data and timeframe an investigator is authorised to examine.'},
 misc:['Forensics is not just recovering deleted files.'],
 cards:[['Digital forensics','Identify, preserve, analyse and present digital evidence.'],['Why scope matters','Work outside legal authority can make evidence inadmissible and breach privacy.'],['Observation vs conclusion','Observations are facts seen in evidence; conclusions are interpretations needing support.']],
 qs:[
/* ===== 20 MULTIPLE CHOICE ===== */
['mcq','Which best describes digital forensics?',['Repairing damaged computers','Handling and analysing digital evidence in a legally sound way','Installing security software','Writing malware signatures'],1,'It is an evidence-focused process, not repair or tooling.'],
['mcq','An investigator finds interesting files outside the authorised scope. What should they do?',['Examine them anyway','Stop and seek proper authority','Delete them','Copy them for later'],1,'Work must stay within legal authority and the approved scope.'],
['mcq','"The file was opened at 14:02" is an example of…',['An observation','A conclusion','An assumption','A motive'],0,'It is a recorded fact; motive or intent would be interpretation.'],
['mcq','Which is NOT a recognised branch of digital forensics?',['Mobile forensics','Network forensics','Cloud forensics','Meteorological forensics'],3,'Mobile, network and cloud are branches; meteorology is unrelated.'],
['mcq','The primary aim of a digital forensic investigation is to…',['Prove a suspect guilty','Establish what happened using supportable evidence','Recover every deleted file','Install monitoring tools'],1,'The aim is to establish facts, not to start from a guilty verdict.'],
['mcq','Why does legal authority matter?',['It speeds up tools','Evidence gathered without it may be inadmissible and may breach privacy','It makes files smaller','It removes the need for notes'],1,'Unauthorised access can harm both the case and the individual.'],
['mcq','Why is documentation of each action important?',['It looks professional','Others can scrutinise and repeat the work','It replaces evidence','It is only for managers'],1,'Documentation supports reproducibility and defensibility.'],
['mcq','A key difficulty of cloud forensics is…',['No data exists','Data may be held by third parties in other jurisdictions','Clouds cannot store files','Cloud data cannot be timestamped'],1,'Access depends on providers and may involve different legal regimes.'],
['mcq','Which best contrasts forensics with incident response?',['They are identical','Incident response focuses on containment and recovery; forensics on establishing what happened with evidence','Forensics only handles phones','Incident response never uses logs'],1,'The two overlap, but their primary aims differ.'],
['mcq','Mobile forensics mainly deals with…',['Phones and tablets, such as messages and app data','Only printers','Only network cables','Only server racks'],0,'It targets data on mobile devices.'],
['mcq','Network forensics typically examines…',['Traffic captures and logs','Paper records','Keyboard layouts','Screen brightness'],0,'Packet captures, flow data and device logs are typical sources.'],
['mcq','Which quality is most essential in an examiner?',['Impartiality','Speed above all','Loyalty to the client\'s theory','Secrecy about method'],0,'Findings must be objective, whichever side they help.'],
['mcq','Locard\'s exchange principle, applied digitally, suggests that…',['Digital activity leaves no trace','Interaction between systems or people tends to leave traces','Only deleted data matters','Logs are always accurate'],1,'Contact tends to leave traces, though they may be hard to find or interpret.'],
['mcq','A hypothesis in an investigation is…',['A confirmed fact','A testable explanation not yet confirmed','A legal ruling','A hash value'],1,'Hypotheses must be tested against evidence.'],
['mcq','To examine an employee\'s company laptop, an investigator should first confirm…',['A friend\'s approval','Authorisation under law and organisational policy','The brand of the laptop','Nothing, since it is company property'],1,'Ownership alone does not remove legal and policy requirements.'],
['mcq','Reproducibility means…',['The same examiner gets lucky twice','Another examiner following the documented method can obtain the same results','Evidence can be copied freely','Reports are identical in wording'],1,'It depends on documented, repeatable methods.'],
['mcq','Anti-forensics refers to…',['Techniques that hinder investigation','A forensic imaging tool','A type of hash','A backup method'],0,'Examples include data wiping, obfuscation and timestamp manipulation.'],
['mcq','A corporate policy-breach investigation is usually governed by…',['Only the examiner\'s opinion','Organisational policies and applicable law','Social media rules','No rules'],1,'Both internal policy and legal requirements apply.'],
['mcq','Digital evidence is best defined as…',['Only deleted files','Information in digital form that may support or refute a claim','Printed screenshots only','Any software'],1,'It may support or refute a claim.'],
['mcq','Which action best reflects forensic soundness?',['Browsing the original system freely','Minimal alteration of originals with documented methods','Deleting temporary files first','Working without notes'],1,'Soundness means minimising change and documenting what was done.'],
/* ===== 10 TRUE / FALSE ===== */
['tf','A file access record automatically proves deliberate human action.',['True','False'],1,'Access can be caused by automated or background processes; corroboration is needed.'],
['tf','Digital forensics is used only in criminal cases.',['True','False'],1,'It is also used in civil, corporate and incident-related matters.'],
['tf','Examiners should report findings whether they help or harm either side.',['True','False'],0,'Impartial reporting is a core professional duty.'],
['tf','Privacy considerations still apply during an authorised investigation.',['True','False'],0,'Authority does not remove the duty to limit intrusion to what is necessary.'],
['tf','Recovering deleted files is the only task digital forensics performs.',['True','False'],1,'It also covers logs, artefacts, timelines, attribution support and reporting.'],
['tf','Documentation of actions is optional if the final result is correct.',['True','False'],1,'Without documentation the result cannot be verified or reproduced.'],
['tf','An observation and a conclusion mean the same thing.',['True','False'],1,'Observations are facts seen; conclusions are interpretations.'],
['tf','Findings may be challenged in legal proceedings, so methods should be reproducible.',['True','False'],0,'Scrutiny is expected; repeatable methods strengthen findings.'],
['tf','Cloud data is always stored on the suspect\'s own device.',['True','False'],1,'It is typically stored on provider infrastructure.'],
['tf','Not finding an artefact proves an event did not occur.',['True','False'],1,'Absence of evidence may reflect deletion, tool limits or other causes.'],
/* ===== 10 FILL IN THE BLANK (accepted answers) ===== */
['fib','Digital forensics involves identification, preservation, ______ and presentation of digital evidence.',['analysis','examination'],0,'Analysis follows preservation and collection.'],
['fib','The devices, data and timeframe an examiner is authorised to examine is called the ______.',['scope'],0,'Staying within scope protects legality and privacy.'],
['fib','A testable explanation that is not yet confirmed is a ______.',['hypothesis'],0,'It must be tested against the evidence.'],
['fib','______ forensics examines traffic captures and logs.',['network'],0,'It reconstructs communication activity.'],
['fib','Techniques that hinder investigation are called ______-forensics.',['anti'],0,'Examples are wiping and timestamp manipulation.'],
['fib','Locard\'s principle says every contact ______ a trace.',['leaves'],0,'Applied digitally, interaction tends to leave artefacts.'],
['fib','A fact seen directly in evidence is an ______.',['observation'],0,'It is distinct from interpretation.'],
['fib','Work should be ______ so another examiner can obtain the same results.',['reproducible','repeatable'],0,'Documented methods make this possible.'],
['fib','Examiners must remain ______ and not favour either side.',['impartial','objective','unbiased'],0,'Impartiality underpins credibility.'],
['fib','A written record of actions taken during an investigation is called ______.',['documentation'],0,'Contemporaneous notes support the account later.'],
/* ===== 10 SHORT ANSWER (keywords + model answer) ===== */
['short','Define digital forensics.',['identif','preserv','analy','present','evidence'],0,'The identification, preservation, collection, analysis and presentation of digital evidence in a way that is legally sound.'],
['short','Why must the scope of an investigation be defined?',['authority','legal','privacy','admissib'],0,'Scope sets what may lawfully be examined; going beyond it risks inadmissible evidence and privacy breaches.'],
['short','Distinguish an observation from a conclusion.',['fact','interpret','support'],0,'An observation is a fact seen in the evidence; a conclusion is an interpretation that must be supported by observations and corroboration.'],
['short','Explain why documentation matters.',['reproduc','scrutin','record','defens'],0,'It creates a record others can review and repeat, which makes findings defensible.'],
['short','Name three branches of digital forensics.',['computer','mobile','network','cloud'],0,'For example computer, mobile, network and cloud forensics (also memory and database forensics).'],
['short','Explain why a file access record does not prove deliberate action.',['automat','background','corroborat','user'],0,'Access may come from background or automated processes such as indexing or antivirus; other artefacts are needed to link it to a user.'],
['short','Why is examiner impartiality important?',['bias','both','credib','objective'],0,'Bias undermines credibility; findings must be reported objectively whichever party they help.'],
['short','State two challenges of cloud forensics.',['third','jurisdiction','provider','access'],0,'Data is held by third-party providers, possibly in other jurisdictions, so access and legal process can be slow or limited.'],
['short','What is anti-forensics? Give an example.',['hinder','wip','encrypt','obfuscat','timestamp'],0,'Techniques that hinder investigation, such as secure wiping, encryption, obfuscation or altering timestamps.'],
['short','Contrast the aims of digital forensics and incident response.',['contain','recover','establish','evidence'],0,'Incident response aims to contain and recover from an incident; forensics aims to establish what happened using evidence. They often overlap.'],
/* ===== 10 SCENARIO (options; explanation doubles as model answer) ===== */
['scn','Scenario: A manager asks you to read an employee\'s personal webmail, which is outside your approved scope. What should you do?',['Read it quietly','Decline until proper authority covers it','Ask a colleague to read it','Copy it and decide later'],1,'Model answer: stop and seek written authority; scope and privacy limits apply regardless of who asks.'],
['scn','Scenario: A login to an account is recorded at 02:00 and a colleague says "he obviously did it". How do you proceed?',['Agree and report guilt','Record the login as an observation and seek corroborating artefacts','Delete the log','Ignore the entry'],1,'Model answer: report the fact, then look for other artefacts (device logs, network data) before drawing conclusions.'],
['scn','Scenario: You realise you did not note several steps you took. What is the best course?',['Invent notes that look right','Reconstruct honestly, flag the gap and its limits in the report','Hide the gap','Redo it secretly'],1,'Model answer: be transparent; fabricated notes destroy credibility, while stated limitations are acceptable.'],
['scn','Scenario: While examining authorised data you find unrelated illegal material. What first?',['Keep looking for more','Stop, record what happened and escalate to the proper authority','Delete it','Share it with the team'],1,'Model answer: pause, document and escalate; do not extend scope on your own initiative.'],
['scn','Scenario: The opposing side asks how you reached your findings. Best response?',['Refuse to explain','Explain your documented, repeatable method and its limitations','Say "trust me"','Change the method'],1,'Model answer: transparency about method and limits supports credibility.'],
['scn','Scenario: A lawyer asks you to report only findings that help their client. What do you do?',['Comply','Report all relevant findings impartially','Resign silently','Edit the evidence'],1,'Model answer: duty is to the integrity of the process, not to a side.'],
['scn','Scenario: Someone offers their phone password informally for examination. What should you confirm first?',['Nothing, accept it','That authority or consent is valid and documented under procedure','The phone brand','The battery level'],1,'Model answer: informal offers still need documented lawful basis.'],
['scn','Scenario: Relevant data sits with a provider in another country. How should you proceed?',['Log in with a shared password','Go through proper legal channels or provider processes','Guess at passwords','Skip the data silently'],1,'Model answer: use lawful routes; note any limitation in the report.'],
['scn','Scenario: A tool shows a file as deleted but you cannot recover it. How do you report it?',['Claim it is recoverable','Report the deletion indicator and state recovery was not possible and why','Say it never existed','Hide it'],1,'Model answer: report what you observed and its limits; deleted does not guarantee recoverable.'],
['scn','Scenario: Two artefacts give conflicting timestamps for one event. What next?',['Pick the one that fits your theory','Check time zones, clock settings and sources, then report the discrepancy','Discard both','Average them'],1,'Model answer: investigate causes of difference and report honestly.']
]},
{id:2,title:'Understanding Digital Evidence',
 overview:'Digital evidence is information stored or transmitted in digital form that may support or refute a claim. It is fragile, easily altered and often copied.',
 notes:['Volatile evidence (e.g. RAM) is lost when power is removed.','Non-volatile evidence persists (disk, USB, SD cards).','Evidence must be authentic, reliable, complete and admissible.'],
 terms:{'Volatile data':'Data lost when power is removed.','Authenticity':'Evidence is what it claims to be.'},
 misc:['Deleted does not always mean gone, but it does not always mean recoverable either.'],
 cards:[['Volatile','Lost on power-off, e.g. RAM.'],['Non-volatile','Persists without power, e.g. HDD, SSD, USB.'],['Order of volatility','Collect the most volatile evidence first.']],
 qs:[['mcq','Which is the MOST volatile?',['Hard disk','USB drive','RAM contents','Printed log'],2,'RAM is lost when power is removed.'],
     ['tf','A deleted file is always recoverable.',['True','False'],1,'Recovery depends on overwriting, storage type and other factors.'],
     ['mcq','Why collect volatile evidence first?',['It is bigger','It may be lost soonest','It is easier to read','It is always more important'],1,'Order of volatility prioritises data that disappears fastest.'],
     ['mcq','Timestamps may be unreliable because…',['They never change','Clocks, time zones and copying can affect them','They are encrypted','They are random'],1,'System clocks, time zones, synchronisation and copying can all alter timestamps.']]},
{id:3,title:'Basic Digital Forensic Investigation Process',
 overview:'A structured process keeps investigations repeatable and defensible: identification, preservation, collection, examination, analysis, reporting.',
 notes:['Identify what evidence may exist and where.','Preserve first, then collect, then examine copies.','Report findings clearly, separating facts from interpretation.'],
 terms:{'Acquisition':'Creating a forensically sound copy of data.','Reporting':'Presenting findings and limitations clearly.'},
 misc:['A single artefact rarely proves an entire event.'],
 cards:[['Process stages','Identify → Preserve → Collect → Examine → Analyse → Report.'],['Why work on copies','Protects the original from alteration.'],['Corroboration','Using multiple independent artefacts to support a finding.']],
 qs:[['mcq','Which stage comes first?',['Reporting','Analysis','Identification','Examination'],2,'You must identify potential evidence before anything else.'],
     ['mcq','Why examine a copy rather than the original?',['It is faster','To avoid altering the original','Originals cannot be read','Copies are legally better'],1,'Preserving the original protects integrity.'],
     ['tf','A single artefact usually establishes a whole event.',['True','False'],1,'Corroboration across artefacts is normally needed.'],
     ['mcq','A good report should…',['Hide limitations','Separate facts from interpretation','Include only conclusions','Avoid method details'],1,'Clear separation and stated limitations make findings defensible.']]},
{id:4,title:'Evidence Preservation and Chain of Custody',
 overview:'Preservation prevents change; chain of custody documents every handling and transfer of evidence.',
 notes:['A hash (e.g. SHA-256) fingerprints data to verify integrity.','Matching hashes support integrity, not authorship or guilt.','Chain of custody records who, what, when, where and why.'],
 terms:{'Hash':'Fixed-length value computed from data; changes if data changes.','Chain of custody':'Documented record of evidence handling and transfers.','Write blocker':'Device preventing writes to source media.'},
 misc:['A matching hash does not prove who created the file.'],
 cards:[['Hash','Fingerprint of data used to verify integrity.'],['Chain of custody','Record of handling and transfer of evidence.'],['Write blocker','Prevents changes to original media during acquisition.']],
 qs:[['mcq','A matching hash between original and copy shows…',['The suspect is guilty','The copy is identical to the original','The file is legal','The author'],1,'Hashes support integrity only.'],
     ['mcq','Chain of custody documents…',['Only the analysis results','Handling and transfer of evidence','Software licences','Network speeds'],1,'It records who held evidence, when and why.'],
     ['tf','Dragging files to a USB stick is equivalent to forensic acquisition.',['True','False'],1,'Normal copying can alter metadata and miss unallocated data.'],
     ['mcq','A write blocker is used to…',['Speed up copying','Prevent writes to source media','Encrypt evidence','Delete temp files'],1,'It protects the original from modification.']]},
{id:5,title:'Computer Storage Basics',
 overview:'Understanding how data is stored explains what can be recovered and where evidence lives.',
 notes:['HDDs store data magnetically; SSDs use flash and may erase data via TRIM.','Data is organised in sectors, clusters and partitions.','Slack and unallocated space may hold remnants of old data.'],
 terms:{'Sector':'Smallest addressable unit on a disk.','Partition':'Logical division of a storage device.','Unallocated space':'Space not currently assigned to a file.'},
 misc:['SSDs can make deleted data harder to recover than HDDs.'],
 cards:[['HDD vs SSD','Magnetic platters vs flash memory.'],['Partition','Logical section of a drive.'],['Unallocated space','Disk area not assigned to a current file; may hold remnants.']],
 qs:[['mcq','Which may reduce deleted-data recoverability on SSDs?',['Defragmentation','TRIM','Partitioning','Formatting labels'],1,'TRIM lets the SSD erase unused blocks.'],
     ['mcq','Unallocated space is…',['Always empty','Not currently assigned to a file','Encrypted','RAM'],1,'It may still contain remnants of earlier files.'],
     ['tf','A partition is a physical component of a drive.',['True','False'],1,'It is a logical division.'],
     ['mcq','The smallest addressable disk unit is typically a…',['Sector','Partition','Folder','Volume'],0,'Sectors are the basic addressable units.']]},
{id:6,title:'File Systems and Operating System Artefacts',
 overview:'File systems organise data and record metadata; operating systems leave artefacts showing activity.',
 notes:['Common file systems: NTFS, FAT32, exFAT, ext4, APFS.','Metadata includes created, modified and accessed times.','Artefacts: recent files, logs, registry (Windows), browser history, USB records.'],
 terms:{'NTFS':'Windows file system with rich metadata and journaling.','Artefact':'Trace of user or system activity left by the OS or applications.','Metadata':'Data about data, e.g. timestamps.'},
 misc:['Last-accessed times may not update reliably.'],
 cards:[['NTFS','Default Windows file system.'],['Artefact','Trace of activity left by OS or applications.'],['Timeline reconstruction','Ordering artefacts by time to understand events, noting clock limitations.']],
 qs:[['mcq','Which is an OS artefact?',['A blank disk','Recent-files list','A hash algorithm','A write blocker'],1,'Recent-files lists record user or system activity.'],
     ['mcq','Metadata is…',['Encrypted content','Data about data','Deleted data','Malware'],1,'E.g. timestamps and file sizes.'],
     ['tf','Timestamps are always accurate.',['True','False'],1,'Clocks, time zones and tools can affect them.'],
     ['mcq','Reconstructing a timeline requires…',['One timestamp','Correlating multiple artefacts and checking clock accuracy','Ignoring time zones','Only browser history'],1,'Corroboration and clock awareness matter.']]}
];

/* ---------- Storage with error handling ---------- */
const KEY='forensicslab.v1';
let state={theme:'dark',xp:0,done:{},attempts:[],answered:{},cards:{}};
function load(){try{const s=JSON.parse(localStorage.getItem(KEY));if(s&&typeof s==='object')state={...state,...s};}catch(e){/* storage unavailable or corrupt: use defaults */}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){}}

/* ---------- DOM helper (textContent only) ---------- */
function h(tag,attrs={},...kids){const e=document.createElement(tag);
  for(const[k,v]of Object.entries(attrs)){if(k==='on')for(const[ev,fn]of Object.entries(v))e.addEventListener(ev,fn);else if(k==='class')e.className=v;else e.setAttribute(k,v);}
  kids.flat().forEach(c=>e.append(c instanceof Node?c:document.createTextNode(c)));return e;}
const $=s=>document.querySelector(s);
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const chap=id=>CHAPTERS.find(c=>c.id===+id);
const pct=n=>Math.round(n*100);

/* ---------- Stats ---------- */
function stats(){const done=Object.keys(state.done).length;let t=0,c=0;
  for(const v of Object.values(state.answered)){t++;if(v)c++;}
  return{done,t,c,acc:t?pct(c/t):0,level:Math.floor(state.xp/100)+1};}
function weak(){return CHAPTERS.map(ch=>{const ids=ch.qs.map((_,i)=>ch.id+'-'+i);const a=ids.filter(i=>i in state.answered);
  const w=a.filter(i=>!state.answered[i]).length;return{ch,a:a.length,w};}).filter(x=>x.w>0).sort((x,y)=>y.w-x.w);}
function updateGlobal(){$('#gbar').style.width=pct(stats().done/CHAPTERS.length)+'%';}

/* ---------- Views ---------- */
const view=$('#main');
function show(...nodes){view.replaceChildren(...nodes);view.focus();window.scrollTo(0,0);updateGlobal();}

function dashboard(){const s=stats(),wk=weak();
  const cards=CHAPTERS.map(c=>h('a',{class:'card',href:'#/ch/'+c.id},h('h3',{},'Ch '+c.id+': '+c.title),
    h('div',{class:'bar'},h('i',{style:'width:'+(state.done[c.id]?100:0)+'%'})),h('small',{},state.done[c.id]?'Completed':'Not completed')));
  show(h('h1',{},'Welcome, investigator'),h('p',{},'Learn, quiz yourself and review flashcards for six chapters. All numbers below come from your own activity.'),
    h('div',{class:'grid'},
      ...[[pct(s.done/CHAPTERS.length)+'%','Course completion'],[s.done+' / '+CHAPTERS.length,'Chapters completed'],[s.t,'Questions attempted'],[s.acc+'%','Quiz accuracy'],['Level '+s.level,state.xp+' XP']]
      .map(([n,l])=>h('div',{class:'card'},h('div',{class:'stat'},String(n)),l))),
    h('h2',{},'Needs revision'),
    wk.length?h('ul',{},wk.map(x=>h('li',{},h('a',{href:'#/quiz/'+x.ch.id},x.ch.title),' – '+x.w+' missed of '+x.a+' answered'))):h('p',{},'Nothing flagged yet. Take a chapter quiz to find your weak spots.'),
    h('h2',{},'Chapters'),h('div',{class:'grid'},cards),
    h('div',{class:'row'},h('button',{type:'button',on:{click:resetAll}},'Reset all progress')));}

function learn(id){const c=chap(id);
  show(h('p',{},h('a',{href:'#/'},'Dashboard'),' › Chapter '+c.id),h('h1',{},c.title),h('p',{},c.overview),
    h('div',{class:'row'},h('a',{href:'#/quiz/'+id},h('button',{type:'button'},'Chapter quiz')),h('a',{href:'#/cards/'+id},h('button',{type:'button'},'Flashcards'))),
    h('div',{class:'card'},h('h2',{},'Key notes'),h('ul',{},c.notes.map(n=>h('li',{},n)))),
    h('div',{class:'card'},h('h2',{},'Definitions'),h('dl',{},Object.entries(c.terms).flatMap(([k,v])=>[h('dt',{},h('strong',{},k)),h('dd',{},v)]))),
    h('div',{class:'card'},h('h2',{},'Common misconceptions'),h('ul',{},c.misc.map(n=>h('li',{},n)))),
    h('button',{type:'button',on:{click:()=>{if(!state.done[id]){state.done[id]=true;state.xp+=50;save();}learn(id);}}},state.done[id]?'✓ Chapter completed':'Mark chapter complete (+50 XP)'));}

/* Quiz */
function quizSetup(id){const c=chap(id);
  const types={all:'All types',mcq:'Multiple choice',tf:'True/false',fib:'Fill in the blank',short:'Short answer',scn:'Scenario'};
  const sel=h('select',{id:'qt'},Object.entries(types).map(([k,v])=>h('option',{value:k},v)));
  const cnt=h('select',{id:'qn'},[10,20,'all'].map(v=>h('option',{value:v},v==='all'?'All available':v+' questions')));
  cnt.value='all';
  show(h('p',{},h('a',{href:'#/ch/'+id},'‹ '+c.title)),h('h1',{},'Quiz: '+c.title),
    h('p',{},c.qs.length+' questions in this chapter. Questions and options are shuffled.'),
    h('div',{class:'row'},h('label',{for:'qt'},'Type:'),sel,h('label',{for:'qn'},'Length:'),cnt),
    h('div',{class:'row'},h('button',{type:'button',on:{click:()=>{let p=c.qs.map((q,i)=>i).filter(i=>sel.value==='all'||c.qs[i][0]===sel.value);p=shuffle(p);if(cnt.value!=='all')p=p.slice(0,+cnt.value);runQuiz(id,p);}}},'Start quiz'),
      h('button',{type:'button',on:{click:()=>runQuiz(id,weakIdx(id))}},'Retry missed only')));}
function weakIdx(id){return chap(id).qs.map((q,i)=>i).filter(i=>state.answered[id+'-'+i]===false);}
function runQuiz(id,idxs){const c=chap(id);
  if(!idxs.length){show(h('p',{},'Nothing to practise here yet.'),h('a',{href:'#/quiz/'+id},'Back'));return;}
  const qs=shuffle(idxs).map(i=>{const q=c.qs[i],k=q[0],txt=k==='fib'||k==='short';
    return{i,k,q:q[1],acc:q[2],opts:txt?[]:(k==='tf'?q[2]:shuffle(q[2])),right:txt?null:q[2][q[3]],exp:q[4]};});
  let pos=0,score=0;const miss=[],bt={};
  function render(){const Q=qs[pos];let locked=false;
    const fb=h('div',{class:'fb',hidden:''}),nx=h('button',{type:'button',disabled:''},pos+1<qs.length?'Next question':'Finish');
    const done=(ok,msg)=>{if(locked)return;locked=true;if(ok){score++;state.xp+=10;}else miss.push(Q.q);
      bt[Q.k]=bt[Q.k]||[0,0];bt[Q.k][1]++;if(ok)bt[Q.k][0]++;state.answered[id+'-'+Q.i]=ok;save();
      fb.textContent=msg;fb.hidden=false;nx.disabled=false;nx.focus();};
    let body;
    if(Q.k==='fib'){const inp=h('input',{type:'text','aria-label':'Your answer',autocomplete:'off'}),sb=h('button',{type:'button'},'Submit answer');
      sb.addEventListener('click',()=>{const v=inp.value.trim().toLowerCase();if(!v)return;const ok=Q.acc.some(a=>a.toLowerCase()===v);inp.disabled=sb.disabled=true;
        done(ok,(ok?'Correct. ':'Not quite. Accepted: '+Q.acc.join(' / ')+'. ')+Q.exp);});body=h('div',{class:'row'},inp,sb);}
    else if(Q.k==='short'){const ta=h('textarea',{rows:'4','aria-label':'Your answer',style:'width:100%'}),sb=h('button',{type:'button'},'Submit answer'),row=h('div',{class:'row'},sb);
      sb.addEventListener('click',()=>{const t=ta.value.toLowerCase();if(!t.trim())return;const hits=Q.acc.filter(k=>t.includes(k));ta.disabled=sb.disabled=true;
        fb.textContent='Keywords found: '+hits.length+' of '+Q.acc.length+' ('+(hits.join(', ')||'none')+'). Model answer: '+Q.exp+' Now mark yourself honestly:';fb.hidden=false;
        row.append(h('button',{type:'button',on:{click:()=>done(true,'Marked as correct. Model answer: '+Q.exp)}},'I got it'),h('button',{type:'button',on:{click:()=>done(false,'Marked for revision. Model answer: '+Q.exp)}},'Not yet'));});
      body=h('div',{},ta,row);}
    else{const opts=Q.opts.map(o=>{const b=h('button',{type:'button',class:'opt'},o);b.addEventListener('click',()=>{if(locked)return;const ok=o===Q.right;
        opts.forEach(x=>{x.disabled=true;if(x.textContent===Q.right)x.classList.add('right');});if(!ok)b.classList.add('wrong');done(ok,(ok?'Correct. ':'Not quite. ')+Q.exp);});return b;});
      body=h('div',{role:'group','aria-label':'Answer options'},opts);}
    nx.addEventListener('click',()=>{pos++;pos<qs.length?render():finish();});
    show(h('p',{},'Question '+(pos+1)+' of '+qs.length+' · '+Q.k),h('div',{class:'bar'},h('i',{style:'width:'+pct(pos/qs.length)+'%'})),h('h2',{},Q.q),body,fb,h('div',{class:'row'},nx));}
  function finish(){state.attempts.push({ch:id,score,total:qs.length,t:Date.now()});save();
    show(h('h1',{},'Result: '+score+' / '+qs.length+' ('+pct(score/qs.length)+'%)'),
      h('div',{class:'card'},h('h3',{},'By question type'),h('ul',{},Object.entries(bt).map(([k,v])=>h('li',{},k+': '+v[0]+' / '+v[1])))),
      miss.length?h('div',{class:'card'},h('h3',{},'Review these'),h('ul',{},miss.map(m=>h('li',{},m)))):h('p',{},'Every question correct.'),
      h('div',{class:'row'},h('button',{type:'button',on:{click:()=>runQuiz(id,idxs)}},'Restart'),h('button',{type:'button',on:{click:()=>runQuiz(id,weakIdx(id))}},'Retry missed'),h('a',{href:'#/'},h('button',{type:'button'},'Dashboard'))));}
  render();}

/* Flashcards */
function flash(id){const c=chap(id);let deck=c.cards.map((x,i)=>({f:x[0],b:x[1],k:id+'-'+i})),pos=0,side=false,only=false;
  function render(){const d=only?deck.filter(x=>state.cards[x.k]===false):deck;
    if(!d.length){show(h('p',{},'No cards marked "Need practice".'),h('button',{type:'button',on:{click:()=>{only=false;pos=0;render();}}},'Show all'));return;}
    pos=Math.min(pos,d.length-1);const x=d[pos];
    const card=h('div',{class:'card flip',tabindex:'0',role:'button','aria-label':'Flashcard, press to flip'},side?x.b:x.f);
    const flip=()=>{side=!side;render();};card.addEventListener('click',flip);card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flip();}});
    const mark=v=>()=>{state.cards[x.k]=v;save();side=false;pos=(pos+1)%d.length;render();};
    show(h('p',{},h('a',{href:'#/ch/'+id},'‹ '+c.title)),h('h1',{},'Flashcards'),h('p',{},'Card '+(pos+1)+' of '+d.length+(only?' (practice only)':'')),card,
      h('div',{class:'row'},h('button',{type:'button',on:{click:()=>{pos=(pos-1+d.length)%d.length;side=false;render();}}},'Previous'),
        h('button',{type:'button',on:{click:()=>{pos=(pos+1)%d.length;side=false;render();}}},'Next'),
        h('button',{type:'button',on:{click:mark(true)}},'Know it'),h('button',{type:'button',on:{click:mark(false)}},'Need practice')),
      h('div',{class:'row'},h('button',{type:'button',on:{click:()=>{deck=shuffle(deck);pos=0;render();}}},'Shuffle'),
        h('button',{type:'button',on:{click:()=>{only=!only;pos=0;render();}}},only?'Show all':'Practice cards only'),
        h('button',{type:'button',on:{click:()=>{pos=0;side=false;render();}}},'Restart')));}
  render();}

/* Search */
function searchView(q){q=q.toLowerCase();const r=[];
  CHAPTERS.forEach(c=>{if(c.title.toLowerCase().includes(q))r.push([c.title,c.id]);Object.keys(c.terms).forEach(t=>{if(t.toLowerCase().includes(q)||c.terms[t].toLowerCase().includes(q))r.push([t+' – '+c.terms[t],c.id]);});});
  show(h('h1',{},'Search: '+q),r.length?h('ul',{},r.map(([t,id])=>h('li',{},h('a',{href:'#/ch/'+id},t)))):h('p',{},'No matches. Try a term like "hash" or "timestamp".'));}

function resetAll(){if(confirm('Delete all saved progress in this browser? This cannot be undone.')){const t=state.theme;state={theme:t,xp:0,done:{},attempts:[],answered:{},cards:{}};save();route();}}

/* Router */
function route(){const [,p,id]=location.hash.split('/');
  document.querySelectorAll('#navList a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')===location.hash));
  $('#nav').classList.remove('open');$('#menuBtn').setAttribute('aria-expanded','false');
  if(p==='ch'&&chap(id))learn(id);else if(p==='quiz'&&chap(id))quizSetup(id);else if(p==='cards'&&chap(id))flash(id);else dashboard();}

/* Init */
function applyTheme(){document.documentElement.setAttribute('data-theme',state.theme);}
function init(){load();applyTheme();
  $('#navList').append(h('li',{},h('a',{href:'#/'},'Dashboard')),...CHAPTERS.map(c=>h('li',{},h('a',{href:'#/ch/'+c.id},c.id+'. '+c.title))));
  $('#themeBtn').addEventListener('click',()=>{state.theme=state.theme==='dark'?'light':'dark';applyTheme();save();});
  $('#menuBtn').addEventListener('click',()=>{const o=$('#nav').classList.toggle('open');$('#menuBtn').setAttribute('aria-expanded',String(o));});
  $('#search').addEventListener('input',e=>{const v=e.target.value.trim();v?searchView(v):route();});
  window.addEventListener('hashchange',route);route();}
init();
