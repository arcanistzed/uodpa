## 2026-08-17 - [Skip-to-content Layout Enhancements]
**Learning:** Implementing skip-to-content links often requires pairing them with a proper semantic `<main>` tag that has `tabindex="-1"` and `outline-none` so focus skips down securely without leaving confusing focus rings.
**Action:** Ensure all site wrappers have skip-to-content logic utilizing this `<main>` pairing rather than just skipping to generic `id` anchors.

## 2026-08-24 - [Accessible Decorative Symbols]
**Learning:** Decorative unicode symbols (like ♥) used inline must be wrapped with `role="img"` and a descriptive `aria-label` to ensure screen readers announce them properly instead of mispronouncing or skipping them.
**Action:** Ensure all future inline decorative symbols are wrapped in accessible containers.
