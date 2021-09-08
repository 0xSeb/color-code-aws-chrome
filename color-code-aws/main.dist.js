const prodAccount = {
    number: '<account-number>',
    title: '⚠️ PROD AWS',
    color: 'red',
    warningMessage: '⚠️ THIS IS PROD'
  } 
  
  const stageAccount = {
      number: '<account-number>',
      title: 'ℹ️ STAGE AWS',
      color: 'forestgreen',
      warningMessage: 'ℹ️ THIS IS STAGE'
  } 
  
  const accounts = [prodAccount, stageAccount]
  
  init();
  
  function init() {
      const currentAccountNumber = document.querySelector('[data-testid="awsc-nav-account-menu-button"]').children[0].title;
      const header = document.querySelector('[data-testid="awsc-nav-header-viewport-shelf-inner"]');
      const footer = document.getElementById('console-nav-footer-inner');
      const searchBar = document.querySelector('[data-testid="awsc-concierge-input-hint"]');
      const seachBarInput = document.querySelector('[data-testid="awsc-concierge-input"]');
      const welcomeBanner = document.querySelector('[data-testid="banner"]');
      const logoAWS = document.querySelector('[data-testid="nav-logo"]');
      const susLogo = document.createElement("img");
      susLogo.src = chrome.runtime.getURL('suslogo.png');
      susLogo.height = 20;
  
      const isCurrentAccount = (element) => currentAccountNumber.includes(element.number);
      const accountIndex = accounts.findIndex(isCurrentAccount);
      if(accountIndex > -1){
          document.title = accounts[accountIndex].title;
          if(header){header.setAttribute('style', `background-color: ${accounts[accountIndex].color} !important`)};
          if(footer){footer.setAttribute('style', `background-color: ${accounts[accountIndex].color} !important`)};
          if(searchBar){searchBar.setAttribute('style', `background-color: ${accounts[accountIndex].color} !important`)};
          if(seachBarInput){seachBarInput.setAttribute('placeholder', accounts[accountIndex].warningMessage)};
          if(welcomeBanner){welcomeBanner.innerHTML = accounts[accountIndex].warningMessage};
          if(logoAWS){
              logoAWS.children[0].remove();
              logoAWS.appendChild(susLogo);
          }
          
      }
  }