import { scrape } from "tatooine"

const data = await scrape({
  url: "https://news.ycombinator.com",
  engine: "html",
  options: {
    selectors: { title: { selector: ".title" } },
  },
})

console.log(JSON.stringify(data, null, 2))
