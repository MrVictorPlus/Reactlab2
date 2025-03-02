# Лабораторная работа №2. Стилизация компонентов

## Инструкции по запуску проекта

Для запуска проекта выполните следующие шаги:

1. Клонируйте репозиторий проекта:
    ```bash
    git clone https://github.com/your-repository-url.git
    ```

2. Перейдите в директорию проекта:
    ```bash
    cd your-project-directory
    ```

3. Установите зависимости:
    ```bash
    npm install
    ```

4. Запустите проект:
    ```bash
    npm start
    ```

5. Перейдите в браузер и откройте:
    ```
    http://localhost:3000
    ```

Проект будет запущен на локальном сервере, и вы сможете увидеть стилизованные компоненты на веб-странице.

---

## Описание лабораторной работы

### Цель работы

Цель данной лабораторной работы — освоение различных методов стилизации компонентов в React и их использование для создания веб-приложений. В ходе работы изучаются и применяются методы стилизации, такие как:

- Использование глобальных CSS-файлов.
- Применение SCSS.
- Инкапсуляция стилей с помощью CSS-модулей.
- Использование CSS-in-JS с библиотеками, например, **styled-components**.
- Применение CSS-фреймворков, таких как **Bootstrap**.

### Задачи

- Ознакомиться с основами каждого метода стилизации.
- Оценить их плюсы и минусы.
- Разработать проект, который использует различные методы стилизации компонентов.

---

## Краткая документация к проекту

### Метод 1: Глобальные CSS-файлы

**Основные особенности**:
- Используются стандартные CSS-файлы для стилизации.
- Все стили применяются глобально, что может привести к конфликтам классов.

**Инструкции по запуску**:
1. Создайте CSS-файл (например, `styles.css`).
2. Подключите его в компонент.
3. Применяйте стили к элементам.

**Пример**:
```css
article {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}
h2 {
  color: #333;
}
```

---

### Метод 2: SCSS (Sass)

**Основные особенности**:
- SCSS добавляет переменные, вложенности и миксины для улучшенной организации стилей.
- Требует компиляции в обычный CSS.

**Инструкции по запуску**:
1. Установите **Sass**: `npm install sass`.
2. Создайте файл с расширением `.scss`.
3. Подключите его в компонент.

**Пример**:
```scss
$primary-color: #4caf50;

article {
  background-color: $primary-color;
  padding: 20px;
  border-radius: 8px;
  
  h2 {
    color: white;
  }
}
```

---

### Метод 3: CSS-модули

**Основные особенности**:
- Стили инкапсулируются в компонентах, что предотвращает конфликты имен.
- Требуется использование CSS-модулей.

**Инструкции по запуску**:
1. Создайте файл с расширением `.module.css`.
2. Импортируйте и используйте стили через `styles`.

**Пример**:
```css
.article {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

.title {
  color: #333;
}
```

```javascript
import styles from './Article.module.css';

function Article({ title, text }) {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>{title}</h2>
      <p>{text}</p>
    </article>
  );
}
```

---

### Метод 4: CSS-in-JS (Styled-components)

**Основные особенности**:
- Стили описываются внутри компонентов с использованием JavaScript.
- Преимущество в динамической стилизации в зависимости от состояния.

**Инструкции по запуску**:
1. Установите **styled-components**: `npm install styled-components`.
2. Используйте `styled-components` для создания стилизованных компонентов.

**Пример**:
```javascript
import styled from 'styled-components';

const StyledArticle = styled.article`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
`;

function Article({ title, text }) {
  return (
    <StyledArticle>
      <h2>{title}</h2>
      <p>{text}</p>
    </StyledArticle>
  );
}
```

---

### Метод 5: CSS-фреймворки (Bootstrap)

**Основные особенности**:
- Использует готовые компоненты и классы для создания интерфейсов.
- Быстрая стилизация с использованием предустановленных классов.

**Инструкции по запуску**:
1. Установите **Bootstrap** с помощью команд:
   ```bash
   npm install bootstrap
   ```
2. Подключите Bootstrap в файл `index.js`:
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```
3. Используйте классы Bootstrap в JSX.

**Пример**:
```html
<div className="p-6 bg-light rounded shadow">
  <h2 className="h4 text-dark">Как научиться React?</h2>
  <p>React — это библиотека для создания интерфейсов...</p>
</div>
```

---
## Примеры использования проекта

Проект демонстрирует, как можно стилизовать компоненты с использованием различных методов. Примеры кода для каждого метода стилизации приведены ниже:

### 1. Глобальные CSS-файлы

Для использования глобальных CSS-файлов, создайте отдельный файл стилей и подключите его в проект.

**Пример стилей (`styles.css`)**:
```css
article {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

h2 {
  color: #333;
}
```

**Пример компонента React**:
```javascript
import React from 'react';
import './styles.css';

function Article({ title, text }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

export default Article;
```

### 2. SCSS (Sass)

SCSS добавляет переменные, вложенности и миксины для улучшенной организации стилей.

**Пример стилей (`styles.scss`)**:
```scss
$primary-color: #4caf50;

article {
  background-color: $primary-color;
  padding: 20px;
  border-radius: 8px;
  
  h2 {
    color: white;
  }
}
```

**Пример компонента React**:
```javascript
import React from 'react';
import './styles.scss';

function Article({ title, text }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

export default Article;
```

### 3. CSS-модули

CSS-модули позволяют инкапсулировать стили, чтобы избежать конфликтов имен.

**Пример стилей (`Article.module.css`)**:
```css
.article {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

.title {
  color: #333;
}
```

**Пример компонента React**:
```javascript
import React from 'react';
import styles from './Article.module.css';

function Article({ title, text }) {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

export default Article;
```

### 4. CSS-in-JS (Styled-components)

Styled-components позволяет использовать JavaScript для описания стилей.

**Пример компонента React с styled-components**:
```javascript
import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
`;

function Article({ title, text }) {
  return (
    <StyledArticle>
      <h2>{title}</h2>
      <p>{text}</p>
    </StyledArticle>
  );
}

export default Article;
```

### 5. CSS-фреймворки (Bootstrap)

Bootstrap позволяет быстро стилизовать элементы с помощью готовых классов.

**Пример использования Bootstrap**:
```html
<div className="p-6 bg-light rounded shadow">
  <h2 className="h4 text-dark">Как научиться React?</h2>
  <p>React — это библиотека для создания интерфейсов...</p>
</div>
```

**Пример компонента React**:
```javascript
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Article({ title, text }) {
  return (
    <div className="p-6 bg-light rounded shadow">
      <h2 className="h4 text-dark">{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Article;
```

---

## Ответы на контрольные вопросы

1. **Какие из методов стилизации предпочтительнее использовать в больших проектах и почему?**
   - В больших проектах рекомендуется использовать **CSS-модули** или **CSS-in-JS** (например, styled-components). Эти подходы обеспечивают инкапсуляцию стилей, предотвращая конфликты имен и улучшая поддержку кода. **SCSS** также хорош для организации стилей, но может быть сложнее в масштабировании без должного контроля.

2. **Какие преимущества и недостатки имеют CSS-фреймворки по сравнению с другими методами стилизации?**
   - **Преимущества**:
     - Быстрое создание интерфейсов с использованием утилитарных классов.
     - Стандартизированные стили, легко применяемые ко всем элементам.
   - **Недостатки**:
     - Меньше гибкости по сравнению с кастомными решениями.
     - Проблемы с кастомизацией и производительностью при большом количестве классов.

3. **В чем отличие CSS-модулей от обычных CSS-файлов и SCSS?**
   - **CSS-модули** обеспечивают локальность стилей, что предотвращает конфликты имен классов. В отличие от обычных CSS и SCSS, стили применяются только к тому компоненту, в котором они определены.

4. **Какие преимущества и недостатки имеет использование CSS-in-JS по сравнению с другими методами стилизации?**
   - **Преимущества**:
     - Динамическая стилизация в зависимости от состояния компонентов.
     - Инкапсуляция стилей внутри компонента.
   - **Недостатки**:
     - Может увеличивать размер бандла.
     - Сложности с производительностью на больших проектах.

---

## Список использованных источников

1. [React Official Documentation](https://reactjs.org/docs/getting-started.html)
2. [Styled-components Documentation](https://styled-components.com/docs)
3. [Bootstrap Documentation](https://getbootstrap.com/)
4. [Sass Documentation](https://sass-lang.com/documentation)
5. [Material-UI Documentation](https://mui.com/)

---

## Дополнительные важные аспекты

- **Поддержка кода и масштабируемость**: Важно правильно выбирать метод стилизации в зависимости от размера проекта и команды. Например, для малых проектов могут подойти обычные CSS-файлы или SCSS, а для больших проектов лучше использовать CSS-модули или CSS-in-JS.
  
- **Производительность**: CSS-фреймворки, такие как Bootstrap, могут влиять на производительность при слишком большом количестве классов. Важно следить за тем, чтобы классы не перегружали проект.
