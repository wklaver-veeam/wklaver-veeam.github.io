/* Harbor & Pine "chat widget".
 * The cookie is set ONLY after the visitor clicks "Chat with us".
 * A crawler that doesn't click will not see it (Session 1 planted fault).
 */
(function () {
  var btn = document.getElementById('chat-open');
  if (!btn) { return; }
  btn.addEventListener('click', function () {
    var d = new Date();
    d.setTime(d.getTime() + 1 * 864e5);
    document.cookie = 'hp_chat_session=' + Math.random().toString(36).slice(2, 10) + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
    var p = document.getElementById('chat-panel');
    if (p) { p.hidden = false; }
    if (window.console) { console.log('[hp-chat] session started'); }
  });
})();
