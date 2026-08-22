# The Invisible Mesh - Istio Talk

Slide deck for **"The Invisible Mesh: The Art of Orchestrating Microservices with Istio"**, presented at a **CNCF CDMX (Cloud Native Mexico City)** community call.

Built with [Slidev](https://sli.dev), on a customized theme ([slidev-theme-unicorn](https://github.com/Dawntraoz/slidev-theme-unicorn) by Alba Silvente) rebranded to follow the [CNCF brand guidelines](https://www.cncf.io/brand-guidelines/): Clarity City typeface and the official CNCF color palette.

## Talk overview

- What Istio is and why a service mesh matters
- Istio architecture: data plane vs. control plane
- Traffic management (Gateway, VirtualService)
- Security: JWT authentication, mTLS
- Built-in observability (Prometheus, Grafana, Jaeger, Kiali)
- Live demo: traffic routing, blocking unauthenticated traffic, encrypted connections
- Trade-offs and takeaways

## Usage

```bash
pnpm install
pnpm dev        # start the presentation locally
pnpm build      # build for static hosting
pnpm export     # export to PDF
pnpm screenshot # export slides as PNG
```

## Structure

- `example.md` - the slide deck content
- `layouts/` - Slidev layout components
- `components/` - header/footer components
- `styles/` - theme styles, including the Clarity City font setup
- `public/` - images and fonts used in the deck

## Credits

- [Documentation](https://istio.io/)
- Theme base: [slidev-theme-unicorn](https://github.com/Dawntraoz/slidev-theme-unicorn)
- Brand: [CNCF Brand Guidelines](https://www.cncf.io/brand-guidelines/)
