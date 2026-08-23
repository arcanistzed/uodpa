## 2026-08-17 - [Skip-to-content Layout Enhancements]
**Learning:** Implementing skip-to-content links often requires pairing them with a proper semantic `<main>` tag that has `tabindex="-1"` and `outline-none` so focus skips down securely without leaving confusing focus rings.
**Action:** Ensure all site wrappers have skip-to-content logic utilizing this `<main>` pairing rather than just skipping to generic `id` anchors.
## 2024-08-23 - Decorative Unicode Screen Reader Accessibility
**Learning:** Decorative unicode characters like '♥' in text nodes will be read literally or skipped confusingly by screen readers depending on the language/OS unless explicitly marked as images.
**Action:** Always wrap decorative/inline unicode characters in `<span role="img" aria-label="[description]">` (accounting for i18n where applicable) to provide a semantic description for screen readers.
