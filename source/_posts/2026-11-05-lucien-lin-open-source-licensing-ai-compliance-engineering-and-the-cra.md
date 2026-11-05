---
title: "Notes from Lucien C.H. Lin's Talk on AI Compliance Engineering and the EU CRA"
tags:
  - Open Source
  - Licensing
  - AI
  - EU Cyber Resilience Act
  - Kaohsiung
date: 2026-11-05 12:00:00
---

On the afternoon of Wednesday, November 4, I went to the Enterprise Open Source Forum, titled "Enterprise Open Source in the AI Era: Management and Value Creation", in Kaohsiung. The event was aimed at AI and tech startups and SMEs, business and product decision-makers, R&D staff, and open source communities and developers. It was organised under the Digital Industry Administration of Taiwan's Ministry of Digital Affairs.

<figure><img src="{% asset_path kaohsiung-mrt-hello-kitty-artwork.webp %}" loading="lazy" decoding="async" /><figcaption>Artwork on the glass wall at Formosa Boulevard Station in Kaohsiung, on the way to the forum. It is part of a collaboration between Kaohsiung MRT, Hello Kitty and the metro's famous station-master cat Mikan (蜜柑). Mikan, an orange-and-white cat adopted as a stray at Ciaotou Sugar Refinery Station and named station master in 2020, is actually the main character of the display.</figcaption></figure>

<figure><img src="{% asset_path formosa-boulevard-station-dome.webp %}" loading="lazy" decoding="async" /><figcaption>The Dome of Light at Formosa Boulevard Station in Kaohsiung, with the Hello Kitty and Mikan display</figcaption></figure>

This post covers only the second talk, by Lucien C.H. Lin (林誠夏). He has a background in technology law and is the founder of Herding Open Source Management Consultants Ltd. and co-founder of OSLN.tw, the Taiwan Open Source Legal Network. He previously worked with the Open Source Software Foundry (OSSF) at Academia Sinica, conducting research on public licensing models. Today he specialises in AI and copyright, intellectual property and open source governance, and he is the Creative Commons Taiwan chapter lead. His talk was titled 「開源授權還重要嗎？從開源管理到 AI 合規開發工程」, roughly "Does Open Source Licensing Still Matter? From Open Source Management to AI Compliance Engineering."

<figure><img src="{% asset_path lucien-lin-speaking.webp %}" loading="lazy" decoding="async" /><figcaption>Lucien C.H. Lin speaking in front of the forum backdrop</figcaption></figure>

I'm writing from his slides (v.20261030), so this follows the structure of the deck. Any mistakes in interpretation are mine.

<figure><img src="{% asset_path slide-title.webp %}" loading="lazy" decoding="async" /><figcaption>The title slide of his talk, v.20261030, dated 2026.11.04 and released under CC-BY-SA-3.0-TW+</figcaption></figure>

The talk had three parts: AI's impact on open source development, a pragmatic stance for the AI era (including the EU Cyber Resilience Act and AI compliance engineering), and using *genuine* open source as a collaboration base.

## Part 1: AI is changing open source development

### Vibe coding and maintainer pushback

Lucien opened with "vibe coding". He cited a TechCrunch piece from May 2026 on programmers refusing to work without AI, and a METR (Model Evaluation & Threat Research) study on whether AI really speeds up programming. His cautions were low code quality, inconsistent bugs and vulnerabilities, accumulating technical debt, and developers understanding underlying principles less well.

He then showed how open source communities are reacting:

- **FFmpeg to Google: "fund us or stop sending bugs."** A public argument about who pays for security work as AI tools generate more bug reports for volunteer maintainers.
- **Flathub's hard line:** no vibe-coded apps allowed.
- **Linus Torvalds using AI to fix a kernel bug**, a reminder that senior maintainers use these tools too.
- **AI usage policies** from Jenkins, OWASP (for Google Summer of Code) and LLVM.

<figure><img src="{% asset_path lucien-lin-presenting.webp %}" loading="lazy" decoding="async" /><figcaption>Lucien C.H. Lin presenting at the forum.</figcaption></figure>

His summary: AI assistance in open source is *neither all good nor all bad*. It needs suitable rules, and people need to keep hold of core human skills so that decisions stay reasoned and evidence-based.

### Case study: the Python chardet 7.0 dispute

This was the main legal case in the talk. The facts on his slide:

1. `chardet`, a widely used Python encoding-detection library, had long been under the **LGPL**.
2. The maintainer, Dan Blanchard, announced a "ground-up rewrite" assisted by **Claude Code**.
3. Version 7.0 was released under the **MIT License**, keeping the same project name, API and package location.
4. This set off a dispute over whether it was a legitimate relicensing and whether it respected open source methodology.

The slides show GitHub issue #334, where a commenter quotes the maintainer saying he did not write the code by hand but was deeply involved in designing and reviewing every aspect of it, and that 7.0 is an independent work and not a derivative of the LGPL code. The deck also cites Shuji Sado's essay on whether you can relicense open source by rewriting it with AI, which raises the possibility of "license washing."

To frame the case, Lucien grouped licences into three families:

| Family | Examples | Rough idea |
| --- | --- | --- |
| **GPL-like** (strong copyleft) | GPL-2.0/3.0, LGPL, AGPL-3.0 | "Everyone must stay free, always." Derivatives must be GPL, and distributing binaries means providing source. |
| **BSD-like** (permissive) | MIT, BSD-2/3-Clause, Apache-2.0 | Keep the copyright notice and disclaimer; after that, almost anything goes. |
| **Other** (file- or module-based copyleft) | MPL-2.0, CDDL, EPL-2.0 | "A bit free, but not too free." Open code stays open, but you can separate by file or module. |

<figure><img src="{% asset_path slide-license-spectrum.webp %}" loading="lazy" decoding="async" /><figcaption>His spectrum of open source licences, from strong copyleft (GPL, LGPL, AGPL, on the left: "everyone must stay free, always") through the in-between licences (MPL, CDDL, EPL: "a bit free, but not too free") to the permissive BSD-like family (Apache, MIT, BSD: "almost unrestricted freedom")</figcaption></figure>

The chardet slide pairs this with an arrow from LGPL to MIT with a cross through it. I read that as the crux: whether the rewrite is a new work or a derivative of the LGPL code decides whether the maintainer can change the licence at all.

### Do we still need to hand-write software? Clean room engineering

He showed Artcraft, a set of open source clones of Adobe-style tools built with AI (covered by Ars Technica in October 2026 under the headline "Software is over"), and asked *why is this allowed?* His answer was **clean room engineering (淨室工程)**.

The legal logic:

- Software code is protected by copyright, but only its **expression**, not ideas. He cited Article 10-1 of Taiwan's Copyright Act and 17 U.S. Code § 102(b), which exclude ideas, procedures, systems, methods of operation, concepts and principles.
- So coding style, painting style and writing style are not protected, and learning technique is acceptable. *Cumulative copying* of code, sentences or fragments of a picture is not.
- Taiwanese courts look for **access (接觸)** and **substantial similarity (實質相似)** (Supreme Court judgment 81 年台上字第 3063 號).

A successful clean room therefore (1) avoids inheriting expression and learns only concepts or logic, and (2) avoids output that is substantially similar to the original.

To make this concrete, he used the Taipei Metro map. A generative AI model converted the official map into a Tokyo Metro style, and in another step extracted only the *facts* about which stations connect, then drew a Seoul Metro–style map from that file alone. A station network is fact, not expression, so learning the facts and drawing something new differs from copying the picture. The Artcraft slide ends with a bare question mark, which I took as an invitation to judge whether such projects really meet those two aims.

## Part 2: A pragmatic stance for the AI era

### Open source isn't going away

Lucien argued that open source projects are usually **not started in order to be commercial**; they produce benefits first, and commercial use expands afterward. Open source is an effective means of cross-boundary collaboration and underpins ecosystems built on open standards. The slides cite Jensen Huang, Nvidia's reported $6 billion push for a US alternative to Chinese open models, its Nemotron models and the announced Hugging Face acquisition as signs it isn't disappearing soon.

His conclusion for companies: build on open source as the collaboration base, use AI tools to build distinctive features quickly, and treat **prompt and agent engineering know-how as the new moat**.

### Don't reinvent the wheel, and the EU Cyber Resilience Act

This was the section most relevant to anyone shipping products into Europe.

**The key shift.** His discussion question was how the legal responsibility of a *manufacturer* that integrates free and open source software (FOSS) into a commercial product differs in kind under the CRA. The slide quotes the Act: when a manufacturer finds a vulnerability in a component, *including an open source component*, it must report it to the person or entity maintaining that component. Using open source no longer pushes the risk "upstream"; the manufacturer is accountable for it. He placed this beside **ETSI EN 303 645**, the consumer IoT security baseline (no default passwords, vulnerability disclosure, software updates, secure communication, input validation and so on).

**Three duties for products with digital elements:**

1. **Fix:** across the expected product lifetime, in principle at least **5 years**.
2. **Report:** via the ENISA / CSIRT Single Reporting Platform, within **24 hours / 72 hours / 14 days** for vulnerabilities, and 1 month for serious incidents.
3. **Notify:** tell the affected users.

**The open source software steward.** To avoid crushing open source projects, the CRA creates a lighter role. A steward maintains a cybersecurity policy, cooperates with market surveillance, provides documentation, and reports serious incidents or actively exploited vulnerabilities. Importantly, **administrative fines do not apply** to stewards.

There is also a tiered certification scheme. Under the CRA, a product is either default, important (Class I or Class II) or critical, and the assessment route ranges from self-assessment to third-party assessment and designated certification schemes. Where technical documentation is openly available, Class I and II products can move down to self-assessment, a real incentive for openness.

<figure><img src="{% asset_path slide-cra-steward-and-tiers.webp %}" loading="lazy" decoding="async" /><figcaption>His CRA slide. Top: the five duties of an open-source software steward, ending with "administrative fines do not apply". Bottom: the product categories under the CRA (default, important Class I or II, or critical) and the assessment route for each, with the note that openly available technical documentation lets Class I and II move to self-assessment</figcaption></figure>

**What a company should do now.** The vulnerability reporting obligation starts in **September 2026**. His checklist, as I read the slide:

- Take stock of which FOSS in your product line already has a steward (Apache, Eclipse, Linux Foundation, Python Software Foundation, Mozilla and others) or commercial support (Red Hat, SUSE, Canonical, GitLab, Elastic and others).
- Track the version numbers of every open source and commercial component.
- Deliver security patches through the **upstream** route.
- You may outsource fixing and partly outsource reporting, but **notifying users is yours to carry**.

He pointed to Red Hat's CRA stewardship guidelines as a worked example, and showed a table of October 2026 security advisories (Linux kernel, Node.js, Python, Go, Rust, Java and more) as a picture of what keeping up with upstream looks like in a single month.

### AI compliance engineering

This was the heart of the talk. He framed it as two questions: **is AI-assisted coding permitted, and how do we reduce the risk?**

**Early Copilot policies.** A typical ICT-industry policy of that era said: Copilot may be used but must be registered; key projects (those involving company patents or flagship products) need explicit **approval**; ordinary projects only need **filing for record**; turn on **Duplicate Detection**, added after the US lawsuit against Copilot, which flags code too similar to public projects; and require developers to **read and confirm by hand** the code they submit.

**Do AI coding tools come with a warranty?** For Copilot, Claude Code and OpenAI Codex: **free tiers, no** (including open source or open-weight versions); **paid tiers, to a limited extent**, through a mechanism to defend against third-party claims and a limited indemnity. The exceptions were the most practical slide. You are not covered if you failed to tell the provider when trouble began, settled without them, or hid facts, or, for the indemnity, if the fault is yours (knowingly unlawful use, copying it yourself, not turning on the detection filter). His takeaway: **process records and version control matter a great deal.**

**Lessons from Wine.** As a model of strict clean room practice, he showed the WineHQ Clean Room Guidelines. Do: write test programs to verify Windows API behaviour, and ask the community when in doubt. Don't: disassemble Microsoft code, read Microsoft source even if publicly released (with a narrow MIT/LGPL-compatible exception), inspect debug symbols, look at ReactOS code, and, notably, **don't use LLM tools to generate code**, since there's no guarantee the training data meets the clean room rules or that the output is LGPL-compatible.

<figure><img src="{% asset_path slide-winehq.webp %}" loading="lazy" decoding="async" /><figcaption>The WineHQ page on screen, with tabs open to its Clean Room Guidelines and the Wikipedia article on clean-room design</figcaption></figure>

**His practical checklist:**

1. **Company policy:** an allow list and a deny list.
2. Use AI **as a tool**: finding bugs, patching holes, security scanning.
3. **Don't use AI to translate a whole third-party program.**
4. When necessary, ask AI to **analyse the interaction logic**, then write new code from that logic.
5. You don't have to rewrite everything; use MIT or other permissive APIs directly.
6. Keep **version control records**, including the prompt and agent engineering documents exchanged with the AI.

<figure><img src="{% asset_path slide-ai-compliance-engineering.webp %}" loading="lazy" decoding="async" /><figcaption>His AI Compliance Engineering checklist: a company policy with allow and deny lists; use AI as a tool to find bugs, patch holes and scan for vulnerabilities; don't use AI to translate an entire third-party program; analyse interaction logic and then rewrite; use MIT or permissive APIs directly; and keep version control records for verification</figcaption></figure>

The rule behind it: *knowledge can be learned; expression should not be inherited wholesale.* He suggested asking of any AI-assisted result whether it is purely knowledge or interaction logic, whether the original expression is still there, whether it could amount to an adaptation, and whether the AI was first told to deconstruct the original architecture and learn from it, instead of being ordered to translate someone's code.

## Part 3: Use *genuine* open source as the collaboration base

His definition: software that can be freely modified and redistributed, with **no restrictions on duration, scope or purpose**, is genuinely free open source. An open source licence (under the FSF or OSI definitions) is non-exclusive, irrevocable, royalty-free, without warranties, unrestricted in purpose, time and place, and grants the freedom to run, copy, modify and redistribute.

<figure><img src="{% asset_path slide-six-characteristics.webp %}" loading="lazy" decoding="async" /><figcaption>The six characteristics of an open source licence under the FSF and OSI definitions</figcaption></figure>

The upshot for companies: as long as you comply, a licence you have obtained **will never be revoked**; the rules are those of the terms *when you got it*; and the obligations are to credit the source or, where needed, share alike. He tied this to Article 3(48) of the CRA (Regulation (EU) 2024/2847), whose definition of FOSS turns on exactly these freedoms to access, use, modify and redistribute.

He also gave brief examples of law arriving from other directions: US export controls (publicly available software is lightly controlled, encryption is the exception), the California AI Transparency Act (SB 942) on labelling AI modules, and California's age-verification bill (AB-1856), which excludes purely self-installed open source operating systems.

<figure><img src="{% asset_path slide-california-ai-transparency.webp %}" loading="lazy" decoding="async" /><figcaption>The California AI Transparency Act (SB 942) slide, with the 2026 SB 1000 amendment on GenAI hosting platforms</figcaption></figure>

<figure><img src="{% asset_path slide-california-age-verification.webp %}" loading="lazy" decoding="async" /><figcaption>The California age-verification bill (AB-1856) slide: operating system providers may be required to supply a user age-range signal, with purely self-installed open source operating systems excluded</figcaption></figure>

### True, quasi and fake open source

The talk ended on the theme that **source available is not open source** (源碼可及 ≠ 開源). He showed the "fair-code" family (Business Source License, Commons Clause, Confluent Community License, Elastic License 2.0, Server Side Public License, Sustainable Use License): seeing the source doesn't guarantee a stable, open basis for use. AI models were his sharpest examples of drift:

<figure><img src="{% asset_path slide-fair-code.webp %}" loading="lazy" decoding="async" /><figcaption>The fair-code website on screen: "Fair-code is not a software license", but a model where software is free to use and its source is open, yet commercially restricted by its authors</figcaption></figure>

- **Meta:** Llama 1 with GPL-3.0 code and non-commercial weights, Llama 2–4 under community licences, then, per his slide, an Apache-2.0 model and a later proprietary, API-only one.
- **NVIDIA Open Model License:** not traditional open source, since it is revocable and tied to US export and sanctions rules.
- **OpenMDW (Linux Foundation):** extends self-restraint to copyright, software patents and even trade secrets.
- **Moonshot AI's Kimi:** MIT for Kimi 1, a modified MIT with a display requirement at scale for Kimi 2, and a source-available licence for Kimi K3.

Under the heading "真開源、準開源、假開源" ("genuine, quasi, and fake open source"), he walked through model pages such as DeepSeek-R1, gpt-oss-120b and NVIDIA Nemotron. The practical point: read the actual licence on the model card, because the label "open" tells you little.

## Takeaways

One of the most interesting things I learned from Lucien Lin's talk is that you should record how you prompt. Knowing how to prompt is valuable know-how, so the entire process of prompting and iterating should be documented in detail. Company leadership should care about this and have engineers document their prompting process. Process evidence is itself a compliance strategy: version control, prompt and agent documents, and approval and filing registers are what you need for a vendor's indemnity to apply, or if a clean room claim is ever challenged.
