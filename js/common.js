// ToolForge - shared utilities

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast('已复制到剪贴板'));
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('已复制');
  }
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 1800);
}

// ============================================================
//  Ad management — zero impact when no ad provider is loaded
// ============================================================

(function() {
  const slots = document.querySelectorAll('.ad-slot');
  if (slots.length === 0) return;

  // Detect active ad provider from a meta tag (set during deploy)
  const meta = document.querySelector('meta[name="ad-provider"]');
  const provider = meta ? meta.getAttribute('content') : null;

  if (!provider) {
    // No ad provider configured → slots stay hidden.
    // To preview placements, add data-ad-preview="1" to <body>
    return;
  }

  // Show slots now that we know ads are active
  slots.forEach(s => s.classList.add('loaded'));

  // Placeholder callbacks for each provider.
  // Real init will replace the innerHTML of each slot when
  // ad scripts are included.
  window._tfPushAd = function(slotEl) {
    if (provider === 'adsense') {
      // Requires <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXX" crossorigin="anonymous">
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } else if (provider === 'baidu') {
      // Requires baidu ad script on page
      if (window.BAIDU_union_widgets) {
        window.BAIDU_union_widgets.push(slotEl);
      }
    }
  };

  // Push all visible ad slots
  slots.forEach(s => window._tfPushAd(s));
})();

// 百度自动推送 — 仅站长平台已验证站点生效
(function(){
  var bp = document.createElement('script');
  var curProtocol = window.location.protocol.split(':')[0];
  if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  } else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(bp, s);
})();

// 百度统计
var _hmt = _hmt || [];
(function(){
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?a795267e9550c75f3fe2d978e9b4e4b1";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
