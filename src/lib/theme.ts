export const THEME_COOKIE_NAME = "theme";
export const LIGHT_THEME_COLOR = "#fafaf9";
export const DARK_THEME_COLOR = "#0c0a09";

export const THEME_INIT_SCRIPT = `
  (function() {
    function readCookie(name) {
      var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
      return match ? decodeURIComponent(match[2]) : null;
    }

    function upsertMeta(name, content) {
      var meta = document.querySelector('meta[name="' + name + '"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    }

    var stored = localStorage.getItem('${THEME_COOKIE_NAME}') || readCookie('${THEME_COOKIE_NAME}');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored === 'dark' || stored === 'light'
      ? stored
      : (prefersDark ? 'dark' : 'light');

    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    upsertMeta('theme-color', theme === 'dark' ? '${DARK_THEME_COLOR}' : '${LIGHT_THEME_COLOR}');
    upsertMeta('color-scheme', theme);
  })();
`;
