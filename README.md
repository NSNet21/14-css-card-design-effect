# 14 - CSS Card Design Effect Demo

**Live Demo:** [**Link**](https://nsnet21.github.io/14-css-card-design-effect/)

## 📸 Preview

![Expand State](./assets-preview/expand-state-preview.jpeg)
![Collapse State](./assets-preview/collapse-state-preview.jpeg)

## 📜 Project Description

This project is a demonstration of a highly interactive, expandable card layout with a horizontal scroll container. The primary focus of this exercise was to build complex UI interactions and state management using **Vanilla JavaScript** and to implement creative **Advanced CSS** techniques.

Users can click on individual cards to expand them, view all cards at once, or use their mouse wheel to navigate the horizontal container.

---

## ✨ Features

- **Interactive Expand/Collapse:** Click any card to expand or collapse it with a smooth CSS transition.
- **Global Controls:** Buttons to **Expand All** and **Collapse All** cards simultaneously.
- **Horizontal Wheel Scroll:** Use your mouse wheel to scroll horizontally. **Hold Shift** while scrolling for increased speed.
- **Animated Close Button:** A 'close' button animates into view on active cards. It uses `event.stopPropagation()` to prevent the click from bubbling up to the parent card.
- **Custom Styled Scrollbar:** The horizontal scrollbar is styled to match the project's aesthetic.
- **Dynamic Indicators:** Indicators are wired to each card for navigation (though the logic is still in development).

---

## 🛠️ Tech Stack

- **HTML5:** Semantic markup for the card structure.
- **CSS3:**
  - **CSS Custom Properties (Variables):** Extensively used for color palettes and theming.
  - **Transitions:** Powers all animations for smooth state changes.
  - **Filters:** Used for the `blur()` and `brightness()` "focus" effect on the images.
  - **Pseudo-elements (`::before`):** Used for the complex "curve" shape on the content block.
- **Vanilla JavaScript (ES6+):**
  - **DOM Manipulation:** Manages UI state by adding/removing the `.active` class.
  - **Event Handling:** Uses `addEventListener` for clicks, wheel events, and `event.stopPropagation()` to manage event flow.

---

## 🧠 Key Concepts & Implementation Details

### <u>JavaScript Logic</u>

The core logic revolves around managing the `.active` class on each card element.

- **State Management:** The `.active` class is the single source of truth for whether a card is expanded or collapsed. All CSS animations are triggered based on the presence of this class.
- **Event Bubbling Control:** A key challenge in nested interactive elements is event bubbling. The "close" button is _inside_ the clickable card. To prevent clicking "close" from also triggering the card's click listener (which would re-open it), `e.stopPropagation()` is used to stop the event from traveling up the DOM tree.
- **Wheel Event for Horizontal Scroll:** The script listens for the `wheel` event, calls `e.preventDefault()` to stop the page from scrolling vertically, and then manually updates the `scrollLeft` property of the container. It even includes a "turbo mode" by checking for `e.shiftKey`.

### <u>Advanced CSS Technique: The "Fake Curve"</u>

The most complex visual element is the curve connecting the main image to the content block.

- This is **not** an SVG or `border-radius`.
- It's a "fake" shape created using a `box-shadow` on the `::before` pseudo-element of the `.content` block.
- By setting the element to `transparent` and giving it a large `box-shadow` with no blur, it renders a solid shape offset from the element's box, creating the illusion of a complex curve.

```css
.card.active .content::before {
  content: "";
  position: absolute;
  top: -80px;
  border-radius: 50%;
  right: 0;
  background-color: transparent;
  width: 80px;
  height: 80px;
  box-shadow: 75px 70px 0 40px var(--violet-lt-50);
}
```

## ⚠️ Known Issues & Project Scope

This project was primarily an exercise in **JavaScript interaction logic** and advanced **CSS shaping techniques**.

- **Responsiveness:** The layout is not fully responsive for smaller viewports.

- **Reason:** The "fake curve" technique (using `box-shadow` on a pseudo-element) is fragile and difficult to scale fluidly. Making this design fully responsive would require a different approach (e.g., `clip-path` or SVG backgrounds), which was outside the scope of this specific logic-focused exercise.

---

## 👨‍💻 Author & Quote

**Created** by [**NSNet21 (NSNet).**](https://github.com/NSNet21)

> "CSS gives it a soul, but JavaScript gives it a heartbeat."
