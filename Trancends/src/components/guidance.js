import React, { useEffect } from 'react';
import '../styles/Guidance.css'
const Guidance = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://mediafiles.botpress.cloud/a0ca7f95-8dc7-4d63-8c43-9ba1aab438aa/webchat/config.js';
      script2.onload = () => {
        window.botpressWebChat.init({
          // ... your configuration
        "composerPlaceholder": "Chat with bot",
        "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
        "botId": "a0ca7f95-8dc7-4d63-8c43-9ba1aab438aa",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "a0ca7f95-8dc7-4d63-8c43-9ba1aab438aa",
        "webhookId": "de866944-61db-4b01-b6c7-b51cf56981a6",
        "lazySocket": true,
        "themeName": "prism",
        "frontendVersion": "v1",
        "showPoweredBy": true,
        "theme": "prism",
        "themeColor": "#2563eb"
        });
      };
      document.body.appendChild(script2);
    };
    document.body.appendChild(script1);
  }, []);

  return (
    <div className='chattext'>
      <h1>Guidance is important in every step you choose</h1>
    </div>
  );
};

export default Guidance;
