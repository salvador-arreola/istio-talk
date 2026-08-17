---
theme: ./
colorSchema: 'light'
layout: intro
logoHeader: '/softserve-logo.png'
website: 'softserveinc.com'
handle: 'salvador-arreola'
introImage: 'https://www.redhat.com/rhdc/managed-files/ohc/Screen-Shot-2017-05-22-at-11_29_24-PM.png'
---

# The Invisible Mesh

The Art of Orchestrating Microservices with Istio

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
logoHeader: '/softserve-logo.png'
website: 'softserveinc.com'
handle: 'salvador-arreola'
layout: table-contents
gradientColors: ['#A21CAF', '#5B21B6']
---

# What is Istio?

- 🧠 A **Service Mesh** for Kubernetes
- 📦 Uses **Envoy sidecars** to manage traffic
- 🛠️ Runs as a **control plane** (Istiod)
- 🔄 Injects policies at the network layer

---
logoHeader: '/softserve-logo.png'
website: 'softserveinc.com'
handle: 'salvador-arreola'
layout: table-contents
gradientColors: ['#A21CAF', '#5B21B6']
---

# 💡 Why use a Service Mesh?

- ⚙️ Centralized traffic management
- 🔐 Built-in security: mTLS, RBAC
- 📈 Observability: metrics, logs, traces
- 🚫 No changes to application code

---
logoHeader: '/softserve-logo.png'
website: 'softserveinc.com'
handle: 'salvador-arreola'
layout: image-center
image: 'Istio-drawio.svg'
imageWidth: '450'
imageHeight: '950'
---

# Istio architecture

An Istio service mesh is logically split into a **data plane** and a **control plane**.

---
logoHeader: '/softserve-logo.png'
website: 'softserveinc.com'
handle: 'salvador-arreola'
layout: table-contents
gradientColors: ['#A21CAF', '#5B21B6']
---

# 🧱 Istio Components

- 🧭 **Istiod** – control plane
- 📦 **Envoy** – sidecar proxies
- 🚪 **Ingress/Egress Gateways**
- 🧾 **CRDs** – Gateway, VirtualService, DestinationRule, AuthorizationPolicy...

---
logoHeader: '/softserve-logo.png'
website: 'softserveinc.com'
handle: 'salvador-arreola'
layout: cover
---

# 🔁 Traffic Management

- 🧪 Route based on request path/headers/query strings/etc.
- 🔄 Canary releases & A/B testing

```yaml{*}{maxHeight:'400px'}
apiVersion: networking.istio.io/v1
kind: Gateway
metadata:
  name: demo-gateway
spec:
  selector:
    istio: ingressgateway
  servers:
  - port:
      number: 80
      name: http
      protocol: HTTP
    hosts:
    - "*"
```

---
logoHeader: '/softserve-logo.png'
website: 'softserveinc.com'
handle: 'salvador-arreola'
layout: cover
---

# 🔁 Traffic Management

```yaml{*}{maxHeight:'350px'}
apiVersion: networking.istio.io/v1
kind: VirtualService
metadata:
  name: helloworld-vs
spec:
  hosts:
  - "*"
  gateways:
  - demo-gateway
  http:
  - match:
    - uri:
        exact: /hello
    route:
    - destination:
        host: helloworld
        port:
          number: 5000
```

---
logoHeader: '/softserve-logo.png'
website: 'softserveinc.com'
handle: 'salvador-arreola'
layout: cover
---

# 🪪 Authentication with JWT

- 🔑 JWT token validation 
- 🔐 Combine with **AuthorizationPolicy**

```yaml
apiVersion: security.istio.io/v1
kind: RequestAuthentication
metadata:
  name: "jwt-example"
  namespace: istio-system
spec:
  selector:
    matchLabels:
      istio: ingressgateway
  jwtRules:
  - issuer: "testing@secure.istio.io"
    jwksUri: "https://raw.githubusercontent.com/istio/istio/release-1.26/security/tools/jwt/samples/jwks.json"
```

---
logoHeader: '/softserve-logo.png'
website: 'softserveinc.com'
handle: 'salvador-arreola'
layout: cover
---

# 🔐 Enabling mTLS

- 🔒 Encrypt all service-to-service traffic
- 🚫 Block non-mTLS traffic

```yaml
apiVersion: security.istio.io/v1
kind: PeerAuthentication
metadata:
  name: default
spec:
  mtls:
    mode: STRICT
```

---
logoHeader: '/softserve-logo.png'
website: 'softserveinc.com'
handle: 'salvador-arreola'
layout: cover
---

# 📊 Observability Built-in

- 📈 **Prometheus** – Metrics
- 📉 **Grafana** – Dashboards
- 🔍 **Jaeger** – Tracing
- 🧭 **Kiali** – Mesh visualization
<pre>


</pre>
>**All available out-of-the-box**

---
logoHeader: '/softserve-logo.png'
website: 'softserveinc.com'
handle: 'salvador-arreola'
layout: cover
---

# 🔧 Use Cases
<pre> </pre>
✅ Canary deployments  
✅ Zero trust networking  
✅ Auditing and compliance  
✅ Traffic shaping and failover  
✅ Real-time service observability

---
logoHeader: '/softserve-logo.png'
website: 'softserveinc.com'
handle: 'salvador-arreola'
layout: new-section
sectionImage: '/live-demo.png


'
---

# 🧪 Demo time
🔁 Traffic routing <br/>
❌ Block unauthenticated traffic <br/>
🔐 Encrypted connections <br/>

---
logoHeader: '/softserve-logo.png'
website: 'softserveinc.com'
handle: 'salvador-arreola'
layout: cover
---

# ⚖️ Important notes

- 📊 Overhead: ~10–15% CPU/memory
- 🧪 Optimizations:
  - Ambient mesh (no sidecar)
  - Gateways API (https://gateway-api.sigs.k8s.io/)
- 💡 Worth it for production control & security

---
logoHeader: '/softserve-logo.png'
website: 'softserveinc.com'
handle: 'salvador-arreola'
layout: cover
---

# 🧠 Takeaways

- ⚙️ Istio abstracts networking and security
- 🧬 Integrates natively with Kubernetes
- 🔐 Adds zero-trust and encryption with no code changes
- 🚀 Great for any size of microservice deployment

---
layout: center
---

# Thanks for attending! 🙏

[Documentation](https://istio.io/)
