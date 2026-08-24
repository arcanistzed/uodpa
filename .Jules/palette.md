## 2026-08-17 - [Skip-to-content Layout Enhancements]
**Learning:** Implementing skip-to-content links often requires pairing them with a proper semantic `<main>` tag that has `tabindex="-1"` and `outline-none` so focus skips down securely without leaving confusing focus rings.
**Action:** Ensure all site wrappers have skip-to-content logic utilizing this `<main>` pairing rather than just skipping to generic `id` anchors.

## 2026-08-17 - [Unicode Symbol Accessibility]
**Learning:** Screen readers often read decorative unicode symbols (like ♥) literally (e.g., "black heart suit"), which can be confusing in context.
**Action:** Always wrap decorative or inline unicode symbols in a `<span role="img" aria-label="[description]">` to ensure proper screen reader accessibility instead of them being read literally.
