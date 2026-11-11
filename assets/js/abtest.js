(function () {
	var s = document.createElement('script');
	s.src = 'https://cdn-prod.securiti.ai/consent/cookie-consent-sdk-loader.js';
	s.setAttribute('data-tenant-uuid', 'ed91c418-0537-4d55-90cb-bcb3c584dd65');
	s.setAttribute('data-domain-uuid', 'a604147b-4460-45cf-9242-949e4db774b0');
	s.setAttribute('data-backend-url', 'https://app.securiti.ai');
	s.setAttribute('data-skip-css', 'false');
	s.defer = true;
	var parent_node = document.head || document.body;
	parent_node.appendChild(s);
})()
