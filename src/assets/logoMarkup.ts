import logoSvg from "./logo.svg?raw"

export const logoMarkup = logoSvg.slice(logoSvg.indexOf("<svg"))

export const introLogoMarkup = logoMarkup.replace(
  'style="fill:#6ae120"',
  'style="fill:#020202"',
)
