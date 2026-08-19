## 2026-08-17 - [Skip-to-content Layout Enhancements]
**Learning:** Implementing skip-to-content links often requires pairing them with a proper semantic `<main>` tag that has `tabindex="-1"` and `outline-none` so focus skips down securely without leaving confusing focus rings.
**Action:** Ensure all site wrappers have skip-to-content logic utilizing this `<main>` pairing rather than just skipping to generic `id` anchors.

## 2024-10-24 - [Keyboard Focus States in Astro Components]
**Learning:** Astro components using Tailwind CSS can often miss explicit focus states for keyboard navigation on custom links or interactive elements. `focus-visible` is a great way to ensure keyboard users have clear focus indicators while maintaining visual cleanliness for mouse users.
**Action:** Always check if custom navigation and footer links have explicit `focus-visible` states defined (e.g., `focus-visible:ring-2 focus-visible:outline-none`) to improve accessibility without degrading the default mouse UX.
