## 2026-08-17 - [Skip-to-content Layout Enhancements]
**Learning:** Implementing skip-to-content links often requires pairing them with a proper semantic `<main>` tag that has `tabindex="-1"` and `outline-none` so focus skips down securely without leaving confusing focus rings.
**Action:** Ensure all site wrappers have skip-to-content logic utilizing this `<main>` pairing rather than just skipping to generic `id` anchors.

## 2025-02-13 - Focus Styles on Generic Links
**Learning:** Found that custom button elements (`btn-primary`, `btn-secondary`) usually have robust focus states in this app, but non-standard/standalone links (like social icons in the footer and language toggles in the navbar) often miss visible focus indicators for keyboard navigation.
**Action:** Always ensure that non-button clickable elements (links, language toggles, social icons) have visible focus indicators (`focus-visible:ring-2`, etc.) when adding or modifying them.
