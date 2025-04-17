// Reloj en tiempo real
function updateClock() {
    const now = new Date();
    const formatted = now.toLocaleString('es-CL', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    document.getElementById('clock').textContent = formatted;
  }
  setInterval(updateClock, 1000);
  updateClock();
  
  // Manejo de artículos dinámicos y contador
  function initArticleForm() {
    const form = document.getElementById('article-form');
    const list = document.getElementById('article-list');
    const counter = document.getElementById('article-counter');
  
    function updateCounter() {
      const count = list.querySelectorAll('article').length;
      counter.textContent = `Total de artículos: ${count}`;
    }
  
    updateCounter();
  
    form?.addEventListener('submit', function(e) {
      e.preventDefault();
      const title = document.getElementById('article-title').value;
      const content = document.getElementById('article-content').value;
  
      if (title.trim() && content.trim()) {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
  
        h3.textContent = title;
        p.textContent = content;
  
        article.appendChild(h3);
        article.appendChild(p);
  
        list.appendChild(article);
        form.reset();
        updateCounter();
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', initArticleForm);
  
