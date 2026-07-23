# JungSeong.github.io

[![Site](https://img.shields.io/badge/GitHub%20Pages-Live%20Site-0A66C2)](https://jungseong.github.io/)
[![Docs Hub](https://img.shields.io/badge/Docs%20Hub-Projects%20%2B%20Contests-5B5FC7)](https://jungseong.github.io/projects/)
[![Portfolio Cards](https://img.shields.io/badge/Portfolio-Cards%20%2B%20Modal-FFB000)](https://jungseong.github.io/projects/)

Portfolio and project-documentation hub for Robotics, CV, LLM.

## Documentation

Dedicated docs pages for QA-FineTune, AI for Industry Challenge, and Structural Stability Physical Reasoning AI have been removed. Their portfolio cards remain in the project and contest indexes without docs links.

## Local Preview On Windows

Install Ruby+Devkit from [RubyInstaller for Windows](https://rubyinstaller.org/downloads/), then reopen PowerShell.

```powershell
ruby -v
gem -v
ridk install
```

Install dependencies and serve the site locally.

```powershell
cd C:\Users\jungs\Desktop\workspace\JungSeong.github.io
gem install bundler -v 4.0.7
bundle _4.0.7_ install
bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000
```

Open `http://127.0.0.1:4000/`.

If port `4000` is already in use:

```powershell
bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4001
```

## Content Structure

```text
JungSeong.github.io/
├── algorithm/              # Algorithm notes
├── contests/               # Contest records
│   ├── index.html
├── projects/               # Portfolio cards and project documentation
│   ├── index.html
├── retrospective/          # Retrospective posts
├── img/projects/           # Static previews and GIF demos
└── _config.yml             # Jekyll site config
```

## Preview Assets

Cards try each GIF first when a GIF is configured and fall back to the static preview image.

| Entry | GIF path | Fallback |
| --- | --- | --- |
| Q&A Chatbot | `img/projects/chatbot.gif` | `img/projects/chatbot.jpg` |
| AI for Industry Challenge | `img/contests/aic.gif` | `img/contests/aic.jpg` |
| Structural Stability Physical Reasoning AI | `img/contests/structural-stability.gif` | `img/contests/structural-stability.jpg` |

## Troubleshooting

- If `ruby` or `bundle` is not recognized, reopen PowerShell and check that Ruby's `bin` directory is in `PATH`.
- If Bundler complains about the lockfile version, use `bundle _4.0.7_ install`.
- If the site looks stale, stop the server and remove `_site/` and `.jekyll-cache/`, then run `bundle exec jekyll serve` again.
