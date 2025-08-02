// original code credit: https://metemo.neocities.org/do_gallery

'use strict';

const _GALLERY = {
  path: '',
  
  masonry: 1,
  masonry_direction: 'both',
  
  images_per_page: 24,  
  
  max_width: '300px',
  max_height: '300px',
  
  min_width: '100px',
  min_height: '100px',
  
  grid_gap: 40,
  
  max_pagination_links: 9,

  grid_card_layout: ['image','title'],
  
  view_card_layout: ['image','title','tags','download','description'],
  
  // Language:
  
  Find_tags: 'Find tag(s): ',
  Search_mode: 'Search mode: ',
  Search_OR: 'OR',
  Search_AND: 'AND',
  Avoid_tags: 'Avoid tag(s): ',
  
  Showing_results: ['viewing ',' pieces of '],
  See_all_tags: 'See all tags',
  Prev_page: '← step into previous hall',
  Page: 'Page: ',
  Next_page: 'step into next hall →',
  
  Next_result: 'see next piece →',
  Return_to_gallery: 'return to main hall',
  Prev_result: '← see previous piece',
  
  Permalink: 'View',
  Download: 'Download',
  No_description: '<p><i>No description</i>.</p>',
  
  
  // codestuffing, do not eat:
  
  archive_text: document.querySelector('[name=archive]')
                  .innerHTML,
  gallery: document.querySelector('[name=gallery]'),
  
  archive: [],          // Objects
  do_grid: true,        // .grid or .view?
  curPage: 1,           // current page
  find: [],             // tags to find
  avoid: [],            // tags to avoid
  s_mode: 'OR',         // inclusive 'OR' / exclusive 'AND'?
  allTags: [],          // for filtering
}

if (window.GALLERY)
  for (let key in GALLERY) {
    _GALLERY[key] = GALLERY[key];
  }


//=====================================//
/*                 INIT               */
//=====================================//

getQueries();
parse();

//=====================================//
/*                 GRID               */
//=====================================//

if (_GALLERY.do_grid) {

sessionStorage['do_gallery-returnLink'] = location.search || '';

sessionStorage['do-gallery-find'] = _GALLERY.find.join(',');
sessionStorage['do-gallery-avoid'] = _GALLERY.avoid.join(',');

const grid = document.createElement('div');
grid.classList.add('grid',_GALLERY.masonry?_GALLERY.masonry_direction:'nomasonry');

const searchForm = makeSearchForm();
const res = document.createElement('p');
res.classList.add('results');
res.id='results';

function resizeGridItem(item) {
  const grid = _GALLERY.gallery;
  const rowGap = _GALLERY.grid_gap;
  if (_GALLERY.masonry_direction==='vertical'||_GALLERY.masonry_direction==='both') {
    const rowSpan = Math.ceil( (item.scrollHeight + rowGap) / (1 + rowGap) );
    item.style.gridRowEnd = "span " + rowSpan;
  }
  if (_GALLERY.masonry_direction==='both') { 
    const colSpan = Math.ceil( (item.scrollWidth + rowGap) / (1 + rowGap) );
    item.style.gridColumnEnd = "span " + colSpan;
  }
}

function resizeAllGridItems(){
  _GALLERY.results.forEach(card => {
    resizeGridItem(card);
  });
}

if (_GALLERY.masonry)
  addEventListener("resize", resizeAllGridItems);

_GALLERY.results = [];

function createGrid(arr) {
  
  /*                 GRID CSS                  */
  
  const style_el = document.createElement('style');
  style_el.textContent = `
  .grid {
    display: ${_GALLERY.masonry&&_GALLERY.masonry_direction!=='horizontal' ? 'grid':'flex'};
    flex-wrap: wrap;
    grid-gap: ${_GALLERY.grid_gap}px;
    
${_GALLERY.masonry?'':'/*'}
    grid-auto-rows:
      ${_GALLERY.masonry_direction==='vertical'||_GALLERY.masonry_direction==='both'?'1px':'unset'};
    grid-template-columns:
      ${_GALLERY.masonry_direction==='horizontal'||_GALLERY.masonry_direction==='both'?'repeat(auto-fill, 1px)':'repeat(auto-fill,'+_GALLERY.min_width+')'};
${_GALLERY.masonry?'':'*/'}
    
${_GALLERY.masonry&&_GALLERY.masonry_direction!=='vertical' ? '/*':''}     
    grid-template-columns: repeat(auto-fill, minmax(${_GALLERY.min_width},1fr));
${_GALLERY.masonry&&_GALLERY.masonry_direction!=='vertical' ? '*/':''}
    
  }
  .grid img,
  .grid video,
  .grid iframe {
    box-sizing: border-box;
    max-width: 100%; 

${!_GALLERY.masonry||_GALLERY.masonry_direction==='vertical'?'/*':''}
    max-width: ${_GALLERY.max_width};

${!_GALLERY.masonry||_GALLERY.masonry_direction==='vertical'?'*/':''}

${_GALLERY.masonry&&_GALLERY.masonry_direction!=='horizontal' ? '/*' : ''}
    max-height: ${_GALLERY.min_height||_GALLERY.min_width};
${_GALLERY.masonry&&_GALLERY.masonry_direction!=='horizontal' ? '*/' : ''}
   border: 25px solid transparent;
   border-image: url(../images/border/pictureframe.png) 50 round;
   filter: drop-shadow(0px 0px 7px #1d1d1dff);
   image-rendering: pixelated;
  }
  
  .card {
    display: grid;
    width: fit-content;
    height: fit-content;

${_GALLERY.masonry&&_GALLERY.masonry_direction==='horizontal'?'':'/*'}

  grid-template-rows: ${_GALLERY.min_height||_GALLERY.min_width} auto auto;

${_GALLERY.masonry&&_GALLERY.masonry_direction==='horizontal'?'':'*/'}
    
${_GALLERY.masonry? '/*':''}
    flex: ${_GALLERY.min_width}px;
    grid-template-rows: ${_GALLERY.min_height||_GALLERY.min_width} auto auto;
    grid-template-columns: ${_GALLERY.min_width};
${_GALLERY.masonry? '*/':''}
    
  }
  
  .card a {
    margin: auto;
    text-align: center;
  }
  
`;

  document.querySelector('head').prepend(style_el);  
  
  const first_image = (_GALLERY.curPage-1) * _GALLERY.images_per_page;
  const last_image = Math.min(first_image + _GALLERY.images_per_page, arr.length);
  
  res.innerHTML = _GALLERY.Showing_results[0]
  + `${first_image+1}&ndash;${last_image}` + _GALLERY.Showing_results[1] + arr.length;

  for (let i = first_image; i < last_image; i++) {
    const card = getCard(arr[i]);
    grid.append(card);
    _GALLERY.results.push(card);
    const img = card.querySelector('img,video,iframe');
    
    function check() {
      if ((img.tagName==='VIDEO' && img.classList.contains('ready')) || (img.tagName!=='VIDEO' && img.complete)||img.tagName==='IFRAME')
        resizeGridItem(card);
      else
        setTimeout(check,100);
    }
    
    if (_GALLERY.masonry)
      check();

  }

}

const search = filterArchive();

function createNav(bool) {
  
  if (bool && search.length <= _GALLERY.images_per_page)
    return '';
  
  const nav = document.createElement('nav');
  nav.classList.add(bool?'bottom':'top','pagination');
  
  let allTags = '';
  if (_GALLERY.find.length)
    allTags = '<p class=all-tags><a href="?'+(_GALLERY.avoid.length?'avoid='+encodeURIComponent(_GALLERY.avoid.join(',')):'')+'">'+_GALLERY.See_all_tags+'</a></p>';
  
  if (!bool)
    nav.innerHTML = allTags;
  
  const number_of_pages = Math.ceil(search.length / _GALLERY.images_per_page);
  
  if (number_of_pages === 1) {
    if (!_GALLERY.find.length && !_GALLERY.avoid.length)
      return ''
    else return nav;
  }
  
  const find = _GALLERY.find.length?'&find='+encodeURIComponent(_GALLERY.find.join(',')):'';
  const avoid = _GALLERY.avoid.length?'&avoid='+encodeURIComponent(_GALLERY.avoid.join(',')):'';
  
  if (number_of_pages > _GALLERY.max_pagination_links) {
    
    let str = '';
    
    for (let i = 0; i < number_of_pages; i++) {
      const curPage = i + 1;
      str += '<option'+ (_GALLERY.curPage === curPage ? ' selected' : '') +' value='+curPage+'>'+curPage+'</option>';
    }
    
    const frm = document.createElement('form');
    frm.hidden = true;
    
    if (_GALLERY.find.length)
      frm.innerHTML += `<input type=hidden name=find value="${_GALLERY.find.join(',')}">`;
    if (_GALLERY.avoid.length)
      frm.innerHTML += `<input type=hidden name=avoid value="${_GALLERY.avoid.join(',')}">`;
    
    const inp = document.createElement('input');
    
    inp.type='hidden';
    inp.name='page'
    
    frm.append(inp);
    
    const sel = document.createElement('select');
    sel.innerHTML = str;
    
    sel.oninput = $ => {
      inp.value = sel.value;
      frm.submit();
    }
    
    const lab = document.createElement('label');
    lab.innerHTML = '<span>' + _GALLERY.Page + '</span> ';
    
    const prev = document.createElement('a');
    const next = document.createElement('a');
    
    prev.innerHTML = _GALLERY.Prev_page;
    next.innerHTML = _GALLERY.Next_page;
    
    prev.href = (_GALLERY.curPage - 1>0) ? '?page='+(_GALLERY.curPage-1)+find+avoid : '';
    next.href = (_GALLERY.curPage+1<=number_of_pages) ? '?page='+(_GALLERY.curPage+1)+find+avoid : '';
    
    lab.append(sel);
    nav.append(
      (prev.href===location.href?'':prev),' ',
      lab,' ',
      (next.href===location.href?'':next),
      frm
    );
  
  } else {
    
    let str = (_GALLERY.curPage - 1 > 0) ? `<a href="?page=${_GALLERY.curPage-1}${find+avoid}">${_GALLERY.Prev_page}</a>` : ``;
    
    for (let i = 0; i < number_of_pages; i++) {
      const curPage = i + 1;
      str += ` <a ${curPage===_GALLERY.curPage ? 'aria-current=page ' : ''}href="?page=${curPage}${find+avoid}">${curPage}</a>`;
    }
    
    str += (_GALLERY.curPage+1<=number_of_pages)?` <a href="?page=${_GALLERY.curPage+1}${find+avoid}">${_GALLERY.Next_page}</a>`:'';
    
    nav.innerHTML = (!bool ? allTags : '') + str;
  }
  
  return nav;
}

_GALLERY.gallery.innerHTML = '';
_GALLERY.gallery.append(
  searchForm,
  res,
  createNav(0),
  grid,
  createNav(1)
);

createGrid(search);

} // END grid view






//=====================================//
/*                 VIEW                */
//=====================================//

else {
  
_GALLERY.find = sessionStorage['do-gallery-find'] ?
  sessionStorage['do-gallery-find'].split(',') : [''];
_GALLERY.avoid = sessionStorage['do-gallery-avoid'] ?
  sessionStorage['do-gallery-avoid'].split(',') : [''];

if(_GALLERY.find[0]==='')
  _GALLERY.find = [];
if(_GALLERY.avoid[0]==='')
  _GALLERY.avoid = [];

const searchForm = makeSearchForm();
const search = filterArchive();

const index = search.findIndex( o => {
  return o.src === _GALLERY.curSrc;
});
const img = search[index];
_GALLERY.curImg = img;
const card = getCard(img);

_GALLERY.gallery.classList.add('view');

const pic = card.querySelector('img');

function createNav(bool) {
  const nav = document.createElement('nav');
  nav.classList.add(bool?'bottom':'top','navigation');
  
  nav.innerHTML = ''
    + (index - 1 < 0 ? '' : `<a href="?image=${encodeURIComponent(search[index-1].src)}">${_GALLERY.Prev_result}</a> `)
    + `<a href="${sessionStorage['do_gallery-returnLink']||'?'}">${_GALLERY.Return_to_gallery}</a>`
    + (index + 1 < search.length ? ` <a href="?image=${encodeURIComponent(search[index+1].src)}">${_GALLERY.Next_result}</a>` : '')
  
  return nav;
}

_GALLERY.gallery.innerHTML = '';
_GALLERY.gallery.append(
  searchForm,
  createNav(0),
  card,
  createNav(1)
);

}






//=====================================//
/*              FUNCTIONS              */
//=====================================//


function getQueries() {
  const queryarr = location.search.slice(1).split('&');
  queryarr.forEach(q=>{
    let [key,val] = q.split('=')
    key = key.trim().toLowerCase();
    if (key === 'page') {
      _GALLERY.curPage = Number(val.trim());
    }
    if (key === 'image') {
      _GALLERY.do_grid = false;
      _GALLERY.curSrc = decodeURIComponent(val.trim());
    }
    if (key === 'search_mode') {
      if (val.trim().toUpperCase() === 'AND')
        _GALLERY.s_mode = 'AND';
      else
        _GALLERY.s_mode = 'OR';
    }
    if (key === 'find') {
      if (val.trim()) {
        const etags = val.split('+').join(' ').split('%2C');
        etags.forEach( et => {
          _GALLERY.find.push(decodeURIComponent(et.trim()));
        });
      }
    }
    if (key === 'avoid') {
      if (val.trim()) {
        const etags = val.split('+').join(' ').split('%2C');
        etags.forEach( et => {
          _GALLERY.avoid.push(decodeURIComponent(et.trim()));
        });
      }
    }
  });

}

function parse() {
  const lines = _GALLERY.archive_text.split(/\n/);
  const vidre = /\.(?:webm|mkv|flv|vob|ogv|ogg|drc|gifv|mng|avi|mts|m2ts|ts|mov|qt|wmv|yuv|rm|rmvb|viv|asf|amv|mp4|m4p|m4v|mpg|mp2|mpeg?|m2v|m4v|svi|3gp|3g2|mxf|roq|nsv|flv|f4v|f4p|f4a|f4b).*$/i
  let makeNew = true;
  let captureCaption = '';
  lines.forEach( li => {
    
    const t = li.trim();
    
    // empty line - expect to make a new obj
    if(t === '') {
      makeNew = true;
      captureCaption = '';
      return;
    }
    
    // first nonempty line = image source
    if (makeNew) {
      makeNew = false;
      _GALLERY.archive.push( {
        src: t,
        id: 'image-' + t.replace(/\W+/g,'-'),
        tags: [],
        fileName: t.slice(t.lastIndexOf('/')+1),
        attributes: [],
        isVideo: vidre.test(t)
      } );
      return;
    }
    
    // parse lines for most recent image
    
    const img = _GALLERY.archive[_GALLERY.archive.length-1];
    
    // tags
    if (t.startsWith('#')) {
      const tags = t.split('#')[1].trim().split(',');
      tags.forEach( tag => {
        tag = tag.trim();
        addGALLERYTag(tag);
        if (tag) img.tags.push(tag);
      });
      captureCaption = '';
      return;
    }
    
    // key: value
    const match = /^(\w+)\s*:\s*(.*?)$/.exec(t);
    if (match) {
      const [key,val] = [match[1].trim(),match[2].trim()];
      
      if(key==='caption'||key==='description'||key==='details') {
        captureCaption = key;
        img[captureCaption] = '<p>'+val+'</p>';
        return;
      } else 
        captureCaption = '';
      
      if(key === 'tags') {
        const tags = val.split(',');
        tags.forEach( tag => {
          tag = tag.trim();
          addGALLERYTag(tag);
          if (tag) img.tags.push(tag);
        });
        return;
      }
      
      // otherwise
      
      img[key] = val;
      return;
    }
    
    // attribute=content
    const matchA = /^(\w+)\s*=\s*(.*?)$/.exec(t);
    if(matchA) {
      const [att,con] = [matchA[1].trim(),matchA[2].trim()];
      captureCaption = '';
      img.attributes.push( {name:att,content:con} );
      
      return;
    }
    
    // new paragraph per line when capturing caption
    const blockre = /^<\/?(?:body|article|address|aside|footer|header|h\d|hgroup|main|nav|section|blockquote|dd|div|dl|dt|figcaption|hr|li|menu|nav|ol|p|pre|el|area|map|table|col|colgroup|tbody|td|tfoot|th|thead|tr|fieldset|section|script|noscript|form|details|summary|dialog|figure)/i;
    if (captureCaption!=='') {
      img[captureCaption] += blockre.test(t) ? t : '<p>' + t ;
      return;
    }
    
  });
}

function addGALLERYTag(tag) {
  if (_GALLERY.allTags.findIndex( t => {
    return t.match( RegExp('\\b' + tag.replace(/\s+/g,'\\s*') + '\\b','i') );
  }) < 0)
    _GALLERY.allTags.push(tag);
}

function getCard(obj) {
  if (obj.card)
    return obj.card;
  
  const card = document.createElement('article');
  const description = document.createElement('div');
  const taglist = document.createElement('ul');
  const ref = document.createElement('a');
  
  card.id = obj.id;
  card.classList.add('card');
  
  taglist.classList.add('taglist');
  
  const img = obj.isVideo ? document.createElement('video') :
    obj.isYoutube ? document.createElement('iframe') :
    document.createElement('img');
  
  if (obj.isVideo) {
    card.classList.add('video');
    const vid = img;
    const source = document.createElement('source');
    source.setAttribute('src',_GALLERY.path + obj.src);
    vid.append(source);
    
    if (!_GALLERY.do_grid) {
      vid.setAttribute('controls','true');
      vid.setAttribute('autoplay','true');
    } else {
      vid.setAttribute('preload','metadata');
      vid.addEventListener('canplay',()=>{
        vid.classList.add('ready');
      });
    }
    
  } else if (obj.isYoutube) {
    
    card.classList.add('youtube');
    
    const fr = img;
    fr.src = obj.src + (_GALLERY.do_grid?'&amp;controls=0':'');
    fr.setAttribute('frameborder','0');
    fr.setAttribute('allow','accelerometer;'+ (_GALLERY.do_grid ? '' : ' autoplay;') +' clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    fr.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
    fr.setAttribute('allowfullscreen','true');
    
  } else
    img.src = _GALLERY.path + obj.src;
  
  if (_GALLERY.do_grid) {
    ref.href = "?image=" + encodeURIComponent(obj.src);
    ref.classList.add('permalink');
    // ref.innerHTML = '<span>' + _GALLERY.Permalink + '</span>';
    ref.title = obj.title || obj.downloadName || obj.fileName;
  } else if (obj.isYoutube) {
    ref.hidden = true;
  } else {
    ref.href = _GALLERY.path + obj.src;
    ref.setAttribute('download', obj.downloadName||obj.fileName);
    ref.classList.add('download');
    ref.innerHTML = '<span>' + _GALLERY.Download + '</span>';
  }

  const title = _GALLERY.do_grid ? 
    ref.cloneNode() : document.createElement('h1');
  title.innerHTML = obj.title || obj.downloadName || obj.fileName || '';
  title.classList.add('title');

  
  obj.attributes.forEach( attr => {
    if ( attr.name.toLowerCase()==='class' )
      card.classList.add( ...attr.content.split(/\s+/) );
    
    else if ( attr.name.toLowerCase()==='title' )
      ref.setAttribute(attr.name,attr.content);
    
    else img.setAttribute(attr.name,attr.content);
  });
  
  description.classList.add('caption');
  description.innerHTML  = obj.caption || obj.description || obj.details || obj.detail || _GALLERY.No_description;
  
  if (obj.tags) {
    obj.tags.forEach(t => {
      const li = document.createElement('li');
      li.classList.add('tag');
      const a = document.createElement('a');
      li.append(a);
      a.href = '?find=' + encodeURIComponent(t) + (_GALLERY.avoid.length? '&avoid='+encodeURIComponent(_GALLERY.avoid.join(',')) : '');
      a.textContent = t;
      taglist.append(li);
    });
  }

function determineOrder (arr) {
  const rarr = [];
  arr.forEach( str => {
    switch( str.toLowerCase() ) {
      case 'image':
        _GALLERY.do_grid?
          rarr.push(ref):rarr.push(img);
        break;
      case 'title':
        rarr.push(title);
        break;
      case 'tags':
        rarr.push(taglist);
        break;
      case 'download':
        _GALLERY.do_grid?
          rarr.push(''):rarr.push(ref);
        break;
      case 'description':
        rarr.push(description);
        break;
    }
  });
  return rarr;
} 

  if (_GALLERY.do_grid) {
    ref.append(img)
    card.append(...determineOrder(_GALLERY.grid_card_layout));

  } else
    card.append(...determineOrder(_GALLERY.view_card_layout));
  
  obj.card = card;
  
  return card;
}


function filterArchive() {

  const avoid = _GALLERY.avoid.length ? createRegex(_GALLERY.avoid) : null;
  const find = _GALLERY.find.length ? createRegex(_GALLERY.find) : null;
  _GALLERY.avoidRe = avoid;
  _GALLERY.findRe = find;

  let filter = [];
  let search = [];

  if (avoid!==null) { // avoid is always OR

    _GALLERY.archive.forEach( o => {
      for (let i=0; i<o.tags.length; i++) {
        if (avoid.test(o.tags[i]))
          return;
      }
      filter.push(o);
    });
  } else filter = _GALLERY.archive;

  if (find!==null) {
    
    // image must match ALL tags
    if (_GALLERY.s_mode === 'AND')
      filter.forEach( o => {
        let s = 0;
        for (let i=0; i<o.tags.length; i++){
          s += (find.test(o.tags[i]))
        }
        if (s === _GALLERY.find.length)
          search.push(o);
      });

    // image must match only one tag
    if (_GALLERY.s_mode === 'OR')
      filter.forEach( o => {
        for (let i=0; i<o.tags.length; i++) {
          if (find.test(o.tags[i]))
            return search.push(o);
        }
      });
    
  } else
    search = filter;

  return search;
  
}

function createRegex(arr) {
  const strs = [];
  arr.forEach( tag => {
    strs.push('\\b' + tag.replace(/\s+/g,'\\s+') + '\\b|'+'^'+ tag.replace(/\s+/g,'\\s+')+'$');
  });
  return new RegExp(strs.join('|'),'i');
}

function makeSearchForm() {
  const searchForm = document.createElement('form');
  searchForm.classList.add('search-form');
  searchForm.innerHTML = `
    <label class=find-lab><span>${_GALLERY.Find_tags}</span><input type=text name=find value="${_GALLERY.find.join(',')}"></label>
    <label class=search-mode-lab><span>${_GALLERY.Search_mode}</span><select value=${_GALLERY.s_mode} name=search_mode>
      <option ${_GALLERY.s_mode==='AND' ? 'selected' : ''} value=AND>${_GALLERY.Search_AND}</option>
      <option ${_GALLERY.s_mode==='OR' ? 'selected' : ''} value=OR>${_GALLERY.Search_OR}</option>
    </select></label>
    <label class=avoid-lab><span>${_GALLERY.Avoid_tags}</span><input type=text name=avoid value="${_GALLERY.avoid.join(',')}"></label>
    <input type=submit>
  `;
  return searchForm;
}

const hoverStyle = document.createElement('style');
hoverStyle.textContent = `
  .card {
    transform: rotate(var(--initial-rotation));
  }

  .card:hover {
    transform: scale(1.05) rotate(var(--initial-rotation));
  }
`;
document.head.appendChild(hoverStyle);

document.querySelectorAll('.card').forEach(card => {
  const randomDeg = (Math.random() * 10 - 5).toFixed(2);
  card.style.setProperty('--initial-rotation', `${randomDeg}deg`);
});

