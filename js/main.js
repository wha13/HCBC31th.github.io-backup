import{initUtils}from"./utils.js";document.addEventListener("DOMContentLoaded",()=>{Global.themeInfo={theme:`Redefine v${Global.theme_config.version}`,author:"EvanNotFound",repository:"https://github.com/EvanNotFound/hexo-theme-redefine"},Global.localStorageKey="REDEFINE-THEME-STATUS",Global.styleStatus={isExpandPageWidth:!1,isDark:!1,fontSizeLevel:0,isOpenPageAside:!0},Global.printThemeInfo=(()=>{console.log('      ______ __  __  ______  __    __  ______                       \r\n     /\\__  _/\\ \\_\\ \\/\\  ___\\/\\ "-./  \\/\\  ___\\                      \r\n     \\/_/\\ \\\\ \\  __ \\ \\  __\\\\ \\ \\-./\\ \\ \\  __\\                      \r\n        \\ \\_\\\\ \\_\\ \\_\\ \\_____\\ \\_\\ \\ \\_\\ \\_____\\                    \r\n         \\/_/ \\/_/\\/_/\\/_____/\\/_/  \\/_/\\/_____/                    \r\n                                                               \r\n ______  ______  _____   ______  ______ __  __   __  ______    \r\n/\\  == \\/\\  ___\\/\\  __-./\\  ___\\/\\  ___/\\ \\/\\ "-.\\ \\/\\  ___\\   \r\n\\ \\  __<\\ \\  __\\\\ \\ \\/\\ \\ \\  __\\\\ \\  __\\ \\ \\ \\ \\-.  \\ \\  __\\   \r\n \\ \\_\\ \\_\\ \\_____\\ \\____-\\ \\_____\\ \\_\\  \\ \\_\\ \\_\\\\"\\_\\ \\_____\\ \r\n  \\/_/ /_/\\/_____/\\/____/ \\/_____/\\/_/   \\/_/\\/_/ \\/_/\\/_____/\r\n                                                               \r\n  Github: https://github.com/EvanNotFound/hexo-theme-redefine')}),Global.setStyleStatus=(()=>{localStorage.setItem(Global.localStorageKey,JSON.stringify(Global.styleStatus))}),Global.getStyleStatus=(()=>{let _=localStorage.getItem(Global.localStorageKey);if(_){_=JSON.parse(_);for(let e in Global.styleStatus)Global.styleStatus[e]=_[e];return _}return null}),Global.refresh=(()=>{initUtils(),Global.initModeToggle(),Global.initBackToTop(),0!==Global.theme_config.home_banner.subtitle.text.length&&location.pathname===Global.hexo_config.root&&Global.initTyped("subtitle"),!0===Global.theme_config.navbar.search.enable&&Global.initLocalSearch(),!0===Global.theme_config.articles.code_block.copy&&Global.initCopyCode(),!0===Global.theme_config.articles.lazyload&&Global.initLazyLoad()}),Global.printThemeInfo(),Global.refresh()});