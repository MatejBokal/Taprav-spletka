// data/partners.ts
export interface Partner {
  name: string
  logo: string   // path under /partners/
  href?: string  // optional link
}

export const PARTNERS: Partner[] = [
  { name: 'Pivoljub',  logo: '/slike/partnerji/pivoljub-logo.svg',   href: 'https://acme.example' },
  { name: 'Ego-team',     logo: '/slike/partnerji/egoteam-logo.svg', href: 'https://globex.example' },
  { name: 'EPS Grafika',    logo: '/slike/partnerji/epsgrafika-logo.svg', href: 'https://globex.example' },
  { name: 'Kavarna Tiskarna',    logo: '/slike/partnerji/kavarnatiskarna-logo.svg', href: 'https://globex.example' },
  { name: 'Piknikbox',    logo: '/slike/partnerji/piknikbox-logo.svg', href: 'https://globex.example' },
  // …etc.
]
