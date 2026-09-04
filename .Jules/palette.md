## 2026-08-17 - [Skip-to-content Layout Enhancements]
**Learning:** Implementing skip-to-content links often requires pairing them with a proper semantic `<main>` tag that has `tabindex="-1"` and `outline-none` so focus skips down securely without leaving confusing focus rings.
**Action:** Ensure all site wrappers have skip-to-content logic utilizing this `<main>` pairing rather than just skipping to generic `id` anchors.

## 2026-08-17 - [Unicode Symbol Accessibility]
**Learning:** Screen readers often read decorative unicode symbols (like ♥) literally (e.g., "black heart suit"), which can be confusing in context.
**Action:** Always wrap decorative or inline unicode symbols in a `<span role="img" aria-label="[description]">` to ensure proper screen reader accessibility instead of them being read literally.

## 2023-10-27 - Added active state to navigation links
**Learning:** The navigation menu previously lacked any visual or semantic indication of the current active page, violating WCAG principles for providing context and hindering general usability for sighted users.
**Action:** Implemented dynamic path checking to apply `aria-current="page"` to the active link. This allowed for semantic indication for screen readers and styling using Tailwind's `aria-[current=page]:` variant to provide clear visual feedback without custom CSS.

## 2024-11-21 - [Focus Management in Custom UI Components]
**Learning:** When custom UI components like mobile menus are toggled via keyboard (e.g., closing with the Escape key), failing to programmatically return focus to the trigger element causes keyboard users to lose their context on the page, significantly hindering navigation.
**Action:** Always ensure that when closing modals, menus, or disclosures via keyboard events, focus is explicitly returned to the element that triggered the open state.
