'use strict';

function sheet(inner, center) {
  var d = document.createElement('div');
  d.className = 'modal-bg' + (center ? ' center' : '');
  d.innerHTML = '<div class="modal-sheet' + (center ? ' center-modal' : '') + '">'
    + '<div class="sheet-handle"></div>'
    + inner + '</div>';
  d.addEventListener('click', function(e) { if (e.target === d) closeModal(); });
  document.body.appendChild(d);
}

function closeModal() {
  document.querySelectorAll('.modal-bg').forEach(function(el) { el.remove(); });
}

function showComingSoon(feature) {
  var titles = { vault: window.getCopy('common.vaultSoonTitle', 'The Vault') };
  var bodies  = { vault: window.getCopy('common.vaultSoonBody', 'Coming soon.') };
  sheet(
    '<div style="padding:0 20px 8px;text-align:center;">'
    + '<span class="material-symbols-outlined" style="font-size:36px;color:#adada9;margin-bottom:12px;display:block">lock</span>'
    + '<div style="font-family:Space Grotesk,sans-serif;font-size:18px;font-weight:900;margin-bottom:8px">' + (titles[feature] || 'Coming Soon') + '</div>'
    + '<div style="font-size:14px;color:#5b5c58;line-height:1.5;margin-bottom:20px">' + (bodies[feature] || 'This feature is on the way.') + '</div>'
    + '<button onclick="closeModal()" class="hs" style="background:#e9e8e3;color:#2e2f2c;border:none;border-radius:12px;padding:12px 24px;font-family:Plus Jakarta Sans,sans-serif;font-weight:800;font-size:14px;cursor:pointer">Got it</button>'
    + '</div>', true
  );
}

function showShareSheet(url, name) {
  sheet(
    '<div style="padding:0 20px 8px">'
    + '<div style="font-family:Space Grotesk,sans-serif;font-size:18px;font-weight:900;margin-bottom:4px">Share review link</div>'
    + '<div style="font-size:13px;color:#5b5c58;margin-bottom:16px">' + (name || 'Project') + '</div>'
    + '<div style="background:#f1f1ec;border-radius:12px;padding:12px 14px;font-family:Manrope,sans-serif;font-size:12px;word-break:break-all;color:#2e2f2c;margin-bottom:12px">' + url + '</div>'
    + '<button onclick="window.copyText(\'' + url + '\');window.toast(\'Link copied\');closeModal();" class="hs" style="width:100%;background:#cafd00;color:#3a4a00;border:none;border-radius:12px;padding:13px;font-family:Plus Jakarta Sans,sans-serif;font-weight:800;font-size:14px;cursor:pointer;margin-bottom:8px">Copy link</button>'
    + '<button onclick="closeModal()" class="hs" style="width:100%;background:#e9e8e3;color:#2e2f2c;border:none;border-radius:12px;padding:13px;font-family:Plus Jakarta Sans,sans-serif;font-weight:800;font-size:14px;cursor:pointer">Done</button>'
    + '</div>'
  );
}

function openMoreSheet() {
  sheet(
    '<div style="padding:0 18px 4px">'
    + '<div style="font-family:Space Grotesk,sans-serif;font-size:18px;font-weight:900;margin-bottom:14px">More</div>'
    + '<div style="display:flex;flex-direction:column;gap:6px;margin-bottom:14px">'
    + _moreRow('verified', 'The Vault', 'Certificates & approval history', "showComingSoon('vault')")
    + _moreRow('help', 'How it works', 'Quick walkthrough of Receipts', 'openHowItWorks()')
    + _moreRow('refresh', 'Reset', 'Clear all data and start fresh', 'resetDemo()')
    + '</div>'
    + '<div style="background:#f1f1ec;border-radius:12px;padding:14px 16px;">'
    + '<div style="font-size:11px;color:#adada9;font-family:Plus Jakarta Sans,sans-serif;margin-bottom:2px">Receipts is in beta</div>'
    + '<div style="font-family:Space Grotesk,sans-serif;font-size:13px;font-weight:700;color:#2e2f2c">Built by Nobody Creative</div>'
    + '</div>'
    + '</div>'
  );
}

function _moreRow(icon, label, sub, action) {
  return '<button onclick="' + action + '" class="hs" style="display:flex;align-items:center;gap:12px;background:#f1f1ec;border:none;border-radius:14px;padding:14px 16px;text-align:left;cursor:pointer;width:100%">'
    + '<span class="material-symbols-outlined" style="font-size:22px;color:#5b5c58">' + icon + '</span>'
    + '<div><div style="font-family:Space Grotesk,sans-serif;font-weight:700;font-size:14px">' + label + '</div>'
    + '<div style="font-size:12px;color:#5b5c58">' + sub + '</div></div>'
    + '</button>';
}

function openHowItWorks() {
  closeModal();
  sheet(
    '<div style="padding:0 20px 8px">'
    + '<div style="font-family:Space Grotesk,sans-serif;font-size:20px;font-weight:900;margin-bottom:16px">How Receipts works</div>'
    + _howStep('1', 'Create a client', 'Add your client\'s name, company, and email.')
    + _howStep('2', 'Start a project', 'Name the campaign and add content for review.')
    + _howStep('3', 'Share the link', 'Send the portal link — no login required for clients.')
    + _howStep('4', 'Client reviews', 'They approve or request changes with comments.')
    + _howStep('5', 'You get the receipt', 'Approved posts generate a Certificate of Approval.')
    + '<button onclick="closeModal()" class="hs" style="width:100%;background:#cafd00;color:#3a4a00;border:none;border-radius:12px;padding:13px;font-family:Plus Jakarta Sans,sans-serif;font-weight:800;font-size:14px;cursor:pointer;margin-top:8px">Got it</button>'
    + '</div>'
  );
}

function _howStep(num, title, body) {
  return '<div style="display:flex;gap:12px;margin-bottom:14px">'
    + '<div style="width:28px;height:28px;border-radius:50%;background:#cafd00;color:#3a4a00;font-family:Space Grotesk,sans-serif;font-weight:900;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0">' + num + '</div>'
    + '<div><div style="font-family:Space Grotesk,sans-serif;font-weight:700;font-size:14px;margin-bottom:2px">' + title + '</div>'
    + '<div style="font-size:13px;color:#5b5c58">' + body + '</div></div>'
    + '</div>';
}

window.sheet          = sheet;
window.closeModal     = closeModal;
window.showComingSoon = showComingSoon;
window.showShareSheet = showShareSheet;
window.openMoreSheet  = openMoreSheet;
window.openHowItWorks = openHowItWorks;
