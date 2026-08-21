## 2026-08-17 - [Skip-to-content Layout Enhancements]
**Learning:** Implementing skip-to-content links often requires pairing them with a proper semantic `<main>` tag that has `tabindex="-1"` and `outline-none` so focus skips down securely without leaving confusing focus rings.
**Action:** Ensure all site wrappers have skip-to-content logic utilizing this `<main>` pairing rather than just skipping to generic `id` anchors.

## 2026-08-21 - [Screen Reader Support for Unicode Symbols]
**Learning:** Unicode symbols like '♥' are read literally by screen readers (e.g. 'black heart suit'), which can disrupt the flow of natural sentences like 'Made with ♥'.
**Action:** Always wrap decorative/inline unicode characters in a span with `role="img"` and a descriptive `aria-label` to provide appropriate context to screen readers.
