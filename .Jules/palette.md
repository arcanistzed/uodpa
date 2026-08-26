## 2026-08-17 - [Skip-to-content Layout Enhancements]
**Learning:** Implementing skip-to-content links often requires pairing them with a proper semantic `<main>` tag that has `tabindex="-1"` and `outline-none` so focus skips down securely without leaving confusing focus rings.
**Action:** Ensure all site wrappers have skip-to-content logic utilizing this `<main>` pairing rather than just skipping to generic `id` anchors.

## 2026-08-17 - [Unicode Symbol Accessibility]
**Learning:** Screen readers often read decorative unicode symbols (like ♥) literally (e.g., "black heart suit"), which can be confusing in context.
**Action:** Always wrap decorative or inline unicode symbols in a `<span role="img" aria-label="[description]">` to ensure proper screen reader accessibility instead of them being read literally.

## 2023-10-27 - Added active state to navigation links
**Learning:** The navigation menu previously lacked any visual or semantic indication of the current active page, violating WCAG principles for providing context and hindering general usability for sighted users.
**Action:** Implemented dynamic path checking to apply `aria-current="page"` to the active link. This allowed for semantic indication for screen readers and styling using Tailwind's `aria-[current=page]:` variant to provide clear visual feedback without custom CSS.

## 2026-08-26 - [Refined Focus States and focus-within UX]
**Learning:** For interactive cards like blog posts where the whole card should look focused, using `focus-within:ring-*` on the `<article>` wrapper paired with `focus-visible:outline-none` on the actual `<a>` tag creates a much cleaner, more inclusive keyboard navigation experience compared to basic focus rings. Changing `focus:` to `focus-visible:` on global buttons and links prevents annoying sticky outlines for mouse users while keeping things accessible for keyboard users.
**Action:** When adding focus states, prioritize `focus-visible:` to differentiate between mouse and keyboard interaction. For clickable cards, employ the `focus-within` pattern on the container for polished accessibility.
