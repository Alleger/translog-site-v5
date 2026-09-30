# Translog — вариант 5 «Schematic»

Собственная концепция. Тексты взяты с translogcompany.com почти дословно
(«Shipping solutions that fit your needs», «Our Company», «Our Equipment and Services»,
«What we have / What we can do», «One for all – all for you» и т. д.).

Графика нарисована в коде (SVG), фотографий нет:
- схема маршрутов в стиле карты метро: Прага — хаб, линии по ЕС, по линиям ездят «грузовики» (`src/components/RouteMap.jsx`)
- иллюстрации техники: фургон, тентованный прицеп, рефрижератор, цистерна, табличка ADR (`src/components/Truck.jsx`)

Схема иллюстративная: города показывают охват ЕС, а не регулярные рейсы. Список городов — в `RouteMap.jsx`.

## Запуск

```powershell
npm install
npm run dev
npm run build
```

## Где что

- `src/content.js` — все тексты и контакты
- `src/styles.css` — цвета и шрифты в начале файла
- Страницы: главная (одна длинная страница с разделами), `#/services/express`, `#/services/dangerous-goods`, `#/news/start-translog-company`
