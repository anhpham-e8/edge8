#!/usr/bin/env python3
"""Generate HTML blog post pages from markdown files."""
import os, re

BASE = "/Users/lananh/Documents/Edge8/Edge8 2.0/edge8-website/blog"

# ── Post definitions ──────────────────────────────────────────────────────────

AI_POSTS = [
    {'slug':'your-next-ai-hire-isn-t-a-person','title':"Your Next AI Hire Isn't a Person",'date':'Feb 4, 2025','folder':"Your Next AI Hire Isn't a Person",'image':'your next hire.jpeg','md':'your-next-ai-hire-isnt-a-person.md','tags':[],'read_time':'5 min'},
    {'slug':'2026-ai-trends-5-game-changing-shifts-that-will-define-business-success','title':'2026 AI Trends: 5 Game-Changing Shifts That Will Define Business Success','date':'Nov 10, 2025','folder':'2026 AI Trends - 5 Game-Changing Shifts That Will Define Business Success','image':'2026 AI Trends.jpeg','md':'2026-ai-trends-5-game-changing-shifts.md','tags':[],'read_time':'8 min'},
    {'slug':'5-keys-to-reduce-ai-hallucinations','title':'5 Keys to Reduce AI Hallucinations and Build Reliable Business Systems','date':'Sep 10, 2025','folder':'5 Keys to Reduce AI Hallucinations and Build Reliable Business Systems','image':'5-Keys.jpg','md':'5-keys-to-reduce-ai-hallucinations.md','tags':['How To Use AI In Business'],'read_time':'6 min'},
    {'slug':'ai-data-strategy-moats-beat-model-wars','title':'AI Data Strategy: Why Data Moats Beat Model Wars in 2025','date':'Jun 2, 2025','folder':'AI Data Strategy - Why Data Moats Beat Model Wars in 2025','image':'AI Data Strategy.jpeg','md':'ai-data-strategy-moats-beat-model-wars.md','tags':[],'read_time':'4 min'},
    {'slug':'ai-in-data-migration-why-your-ai-program-is-really-a-data-problem','title':'AI in Data Migration: Why Your AI Program Is Really a Data Problem','date':'Sep 19, 2025','folder':'AI in Data Migration - Why Your AI Program Is Really a Data Problem','image':'AI in Data Migration-1.jpeg','md':'ai-in-data-migration.md','tags':[],'read_time':'4 min'},
    {'slug':'the-hospitality-data-gap-creating-truly-hotel-personalized-experiences','title':'The Hospitality Data Gap: Creating Truly Hotel Personalized Experiences','date':'Sep 4, 2025','folder':'The Hospitality Data Gap - Creating Truly Hotel Personalized Experiences','image':'The Hospitality Data Gap-1.jpeg','md':'hospitality-data-gap-hotel-personalized-experiences.md','tags':[],'read_time':'5 min'},
    {'slug':'why-ai-issues-are-really-data-problems-a-guide-for-future-ai-officers','title':'Why AI Issues Are Really Data Problems: A Guide for Future AI Officers','date':'Sep 9, 2025','folder':'Why AI Issues Are Really Data Problems - A Guide for Future AI Officers','image':'Why AI Issues.jpeg','md':'why-ai-issues-are-really-data-problems.md','tags':['How To Use AI In Business'],'read_time':'3 min'},
]

FOUNDERS_POSTS = [
    {'slug':'why-smart-founders-are-already-planning-for-meta-ray-ban-glasses-even-when-demos-fail','title':'Why Smart Founders Are Already Planning for Meta Ray-Ban Glasses (Even When Demos Fail)','date':'Sep 24, 2025','folder':'Why Smart Founders Are Already Planning for Meta Ray-Ban Glasses (Even When Demos Fail)','image':'Why Smart Founders.jpeg','md':'why-smart-founders-are-planning-for-meta-ray-ban-glasses.md','tags':[],'read_time':'4 min'},
    {'slug':'why-every-leader-needs-ai-leadership-case-for-ai-co-ceo','title':'The Case for AI Co-CEOs & AI Leadership: Why Every Leader Needs a Digital Decision Partner','date':'Aug 22, 2025','folder':'The Case for AI Co-CEOs & AI Leadership - Why Every Leader Needs a Digital Decision Partner','image':'The Case for AI Co-CEOs & AI Leadership.jpeg','md':'case-for-ai-co-ceo-ai-leadership.md','tags':['How To Use AI In Business'],'read_time':'5 min'},
    {'slug':'from-idea-to-interactive-blog-in-30-minutes-the-founder-s-automation-playbook','title':"From Idea to Interactive Blog in 30 Minutes: The Founder's Automation Playbook",'date':'Sep 18, 2025','folder':"From Idea to Interactive Blog in 30 Minutes - The Founder's Automation Playbook",'image':'From Idea to Interactive Blog in 30 Minutes.jpeg','md':'from-idea-to-interactive-blog-in-30-minutes.md','tags':['How To Use AI In Business'],'read_time':'6 min'},
    {'slug':'the-business-research-assignment-that-could-transform-your-company-and-your-career','title':'The Business Research Assignment That Could Transform Your Company (And Your Career)','date':'Sep 17, 2025','folder':'The Business Research Assignment That Could Transform Your Company (And Your Career)','image':'The Business Research Assignment.jpeg','md':'business-research-assignment-transform-your-company.md','tags':[],'read_time':'6 min'},
    {'slug':'why-ai-training-is-essential-for-your-career-success-in-the-digital-age','title':'Why AI Training Is Essential for Your Career Success in the Digital Age','date':'Aug 22, 2025','folder':'Why AI Training Is Essential for Your Career Success in the Digital Age','image':'Why AI Training Is Essential.jpeg','md':'why-ai-training-is-essential-for-career-success.md','tags':[],'read_time':'5 min'},
    {'slug':'why-human-ai-collaboration-is-the-future-of-business-success','title':'Why Human-AI Collaboration Is the Future of Business Success','date':'Aug 22, 2025','folder':'Why Human-AI Collaboration Is the Future of Business Success','image':'Why Human-AI Collaboration.jpeg','md':'why-human-ai-collaboration-is-the-future-of-business-success.md','tags':[],'read_time':'5 min'},
]

VIETNAM_POSTS = [
    {'slug':'vietnam-ai-silicon-valley','title':'Vietnam and the Rise of AI \u2014 The New Silicon Valley of Southeast Asia','date':'Feb 18, 2025','folder':'Vietnam and the Rise of AI \u2014 The New Silicon Valley of Southeast Asia','image':'Vietnam and the Rise of AI.jpeg','md':'vietnam-ai-silicon-valley.md','tags':[],'read_time':'4 min'},
    {'slug':'vietnam-ai-business-law','title':'\u2019s AI Rules \u2014 What Leaders Should Know'.replace('\u2019s','Vietnam\u2019s'),'date':'May 8, 2025','folder':'Vietnam\u2019s AI Rules \u2014 What Leaders Should Know','image':'Vietnam\u2019s AI Rules.jpeg','md':'vietnam-ai-business-law.md','tags':[],'read_time':'4 min'},
    {'slug':'how-ai-in-business-success-starts-with-strategic-symbolism','title':'How AI in Business Success Starts with Strategic Symbolism','date':'Jul 11, 2025','folder':'How AI in Business Success Starts with Strategic Symbolism','image':'How AI in Business Success Starts with Strategic Symbolism.jpeg','md':'how-ai-in-business-success-starts-with-strategic-symbolism.md','tags':[],'read_time':'4 min'},
    {'slug':'strategies-to-harness-top-performers-for-business-success','title':'Strategies to Harness Top Performers for Business Success','date':'Apr 19, 2025','folder':'Strategies to Harness Top Performers for Business Success','image':'Strategies to Harness Top Performers for Business Success.jpeg','md':'strategies-to-harness-top-performers-for-business-success.md','tags':['Talent in Vietnam','Global Talent'],'read_time':'10 min'},
    {'slug':'tech-in-entrepreneurship-how-ai-is-disrupting-the-role-of-the-founder','title':'Tech In Entrepreneurship: How AI is Disrupting the Role of the Founder','date':'Feb 18, 2025','folder':'Tech In Entrepreneurship - How AI is disrupting the role of the Founder','image':'Tech In Entrepreneurship.jpeg','md':'tech-in-entrepreneurship-how-ai-is-disrupting-the-role-of-the-founder.md','tags':[],'read_time':'4 min'},
]

HPC_POSTS = [
    {'slug':'how-one-decision-at-a-time-creates-high-performers-in-business-and-life','title':'How One Decision at a Time Creates High Performers in Business and Life','date':'Aug 12, 2025','folder':'How One Decision at a Time Creates High Performers in Business and Life','image':'How One Decision.jpeg','md':'how-one-decision-at-a-time-creates-high-performers.md','tags':[],'read_time':'6 min'},
    {'slug':'ai-process-culture-performance','title':'AI for Performance Culture: Process Automation that Works','date':'Apr 24, 2025','folder':'AI for Performance Culture - Process Automation that Works','image':'AI for Performance Culture-1.jpeg','md':'ai-process-culture-performance.md','tags':[],'read_time':'4 min'},
    {'slug':'strategies-to-harness-top-performers-for-business-success','title':'Strategies to Harness Top Performers for Business Success','date':'Apr 19, 2025','folder':'Strategies to Harness Top Performers for Business Success','image':'Strategies to Harness Top Performers.jpeg','md':'strategies-to-harness-top-performers-for-business-success.md','tags':['Talent in Vietnam','Global Talent'],'read_time':'10 min'},
    {'slug':'remote-team-offshore-integration','title':'Offshore Teams Made Easy | Remote Integration with AI','date':'Feb 18, 2025','folder':'Offshore Teams Made Easy | Remote Integration with AI','image':'Offshore Teams Made Easy.jpeg','md':'remote-team-offshore-integration.md','tags':[],'read_time':'2 min'},
    {'slug':'ai-strategies-high-performing-culture','title':'5 AI Strategies for a High-Performing Culture','date':'Feb 18, 2025','folder':'5 AI Strategies for a High-Performing Culture','image':'5 AI Strategies.jpeg','md':'ai-strategies-high-performing-culture.md','tags':[],'read_time':'4 min'},
]

CATEGORIES = {
    'AI in Business': AI_POSTS,
    "Founders' Secrets": FOUNDERS_POSTS,
    'Doing Business in Vietnam': VIETNAM_POSTS,
    'High Performing Cultures': HPC_POSTS,
}

# ── Markdown → HTML ───────────────────────────────────────────────────────────

def inline_md(text):
    text = re.sub(r'`([^`]+)`', r'<code>\1</code>', text)
    text = re.sub(r'\*\*([^*\n]+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'(?<!\*)\*([^*\n]+?)\*(?!\*)', r'<em>\1</em>', text)
    def link_repl(m):
        href = m.group(2).strip()
        return f'<a href="{href}" target="_blank" rel="noopener noreferrer">{m.group(1)}</a>'
    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', link_repl, text)
    return text

def md_to_html(md_text):
    lines = md_text.split('\n')
    html, in_ul, in_ol, in_bq = [], False, False, False

    def close_all():
        nonlocal in_ul, in_ol, in_bq
        if in_ul:  html.append('</ul>');  in_ul = False
        if in_ol:  html.append('</ol>');  in_ol = False
        if in_bq:  html.append('</blockquote>'); in_bq = False

    for line in lines:
        s = line.strip()
        if not s:
            close_all(); continue

        # Horizontal rule
        if re.match(r'^-{3,}$', s):
            close_all(); html.append('<hr class="post-divider">'); continue

        # Skip h1 (shown in post header)
        if re.match(r'^# [^#]', s):
            close_all(); continue

        # h2
        if s.startswith('## '):
            close_all(); html.append(f'<h2>{inline_md(s[3:])}</h2>'); continue

        # h3
        if s.startswith('### '):
            close_all(); html.append(f'<h3>{inline_md(s[4:])}</h3>'); continue

        # Blockquote
        if s.startswith('> '):
            if in_ul: html.append('</ul>'); in_ul = False
            if in_ol: html.append('</ol>'); in_ol = False
            if not in_bq: html.append('<blockquote>'); in_bq = True
            html.append(f'<p>{inline_md(s[2:])}</p>'); continue

        # Unordered list
        ul_m = re.match(r'^[-*]\s+(.+)$', s)
        if ul_m:
            if in_bq: html.append('</blockquote>'); in_bq = False
            if in_ol: html.append('</ol>'); in_ol = False
            if not in_ul: html.append('<ul>'); in_ul = True
            html.append(f'<li>{inline_md(ul_m.group(1))}</li>'); continue

        # Ordered list
        ol_m = re.match(r'^\d+\.\s+(.+)$', s)
        if ol_m:
            if in_bq: html.append('</blockquote>'); in_bq = False
            if in_ul: html.append('</ul>'); in_ul = False
            if not in_ol: html.append('<ol>'); in_ol = True
            html.append(f'<li>{inline_md(ol_m.group(1))}</li>'); continue

        # Paragraph
        close_all()
        html.append(f'<p>{inline_md(s)}</p>')

    close_all()
    return '\n'.join(html)

# ── HTML template ─────────────────────────────────────────────────────────────

def esc(text):
    return text.replace('&','&amp;').replace('"','&quot;').replace('<','&lt;').replace('>','&gt;')

def sidebar_html(category, current_slug, all_posts):
    items = [p for p in all_posts if p['slug'] != current_slug][:4]
    cat_folder = category
    rows = ''
    for p in items:
        img_path = f'/blog/{cat_folder}/{p["folder"]}/{p["image"]}'
        rows += f'''
        <a href="https://www.edge8.ai/post/{p['slug']}" class="sidebar-post">
          <img class="sidebar-post-img" src="{img_path}" alt="{esc(p['title'])}" loading="lazy" />
          <div class="sidebar-post-text">
            <div class="sidebar-post-title">{esc(p['title'])}</div>
            <div class="sidebar-post-date">{p['date']}</div>
          </div>
        </a>'''
    return rows

def generate_html(category, post, all_posts, body_html, description):
    img_path = f'/blog/{category}/{post["folder"]}/{post["image"]}'
    canonical = f'https://www.edge8.ai/post/{post["slug"]}'
    tags_html = ''
    if post['tags']:
        tag_items = ''.join(f'<span class="post-tag">{esc(t)}</span>' for t in post['tags'])
        tags_html = f'<div class="post-tags">{tag_items}</div>'
    sidebar = sidebar_html(category, post['slug'], all_posts)

    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{esc(post['title'])} | Edge8</title>
<meta name="description" content="{esc(description)}">
<meta property="og:type" content="article">
<meta property="og:title" content="{esc(post['title'])} | Edge8">
<meta property="og:description" content="{esc(description)}">
<meta property="og:image" content="https://edge8-delta.vercel.app{img_path}">
<meta property="og:url" content="{canonical}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{esc(post['title'])} | Edge8">
<meta name="twitter:description" content="{esc(description)}">
<meta name="twitter:image" content="https://edge8-delta.vercel.app{img_path}">
<link rel="canonical" href="{canonical}">
<style>
  @font-face {{font-family:'SVN-Gilroy';src:url('/fonts/SVN-Gilroy SemiBold.otf') format('opentype');font-weight:600;font-style:normal;font-display:swap}}
  @font-face {{font-family:'SVN-Gilroy';src:url('/fonts/SVN-Gilroy Regular.otf') format('opentype');font-weight:400;font-style:normal;font-display:swap}}
  :root {{
    --blue:#287BE8;--blue-bright:#3B8CF5;--dark:#101014;--dark-card:#1A1A1F;
    --white:#FFFFFF;--tint:#EAEEF2;--tint-deep:#D4DAE4;--grey-mid:#6B7280;
    --grey-light:#9CA3AF;--mint:#6FF2C1;
    --font-display:'SVN-Gilroy','Helvetica Neue',Arial,sans-serif;
    --font-body:'SVN-Gilroy','Helvetica Neue',Arial,sans-serif;
    --radius:12px;--radius-sm:6px;--transition:0.22s cubic-bezier(0.4,0,0.2,1);
  }}
  *,*::before,*::after{{box-sizing:border-box;margin:0;padding:0}}
  html{{scroll-behavior:smooth}}
  body{{background:var(--white);color:var(--dark);font-family:var(--font-body);font-size:16px;line-height:1.6;overflow-x:hidden}}
  .container{{max-width:1200px;margin:0 auto;padding:0 24px}}
  a{{color:inherit}}
  .btn{{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;border-radius:var(--radius-sm);font-family:var(--font-body);font-size:14px;font-weight:700;letter-spacing:.04em;text-decoration:none;cursor:pointer;border:none;transition:var(--transition);white-space:nowrap}}
  .btn-primary{{background:var(--dark);color:#fff}}
  .btn-primary:hover{{background:#1A1A1F;transform:translateY(-1px);box-shadow:0 8px 28px rgba(16,16,20,.25)}}

  /* NAV */
  nav{{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(255,255,255,.97);backdrop-filter:blur(16px);transition:var(--transition)}}
  .nav-inner{{display:flex;align-items:center;justify-content:space-between;height:68px}}
  .nav-logo img{{height:36px;display:block}}
  .nav-links{{display:flex;align-items:center;gap:4px;list-style:none}}
  .nav-links>li{{position:relative}}
  .nav-links>li>a,.nav-links>li>button{{display:flex;align-items:center;gap:5px;padding:8px 14px;font-size:13.5px;font-weight:500;color:var(--grey-mid);text-decoration:none;background:none;border:none;cursor:pointer;border-radius:var(--radius-sm);transition:var(--transition);font-family:var(--font-body)}}
  .nav-links>li>a:hover,.nav-links>li>button:hover{{color:var(--dark);background:var(--tint)}}
  .dropdown-icon{{font-size:10px;transition:var(--transition)}}
  .nav-links>li:hover .dropdown-icon{{transform:rotate(180deg)}}
  .dropdown{{position:absolute;top:calc(100% + 8px);left:50%;transform:translateX(-50%) translateY(6px);background:var(--dark-card);border:1px solid rgba(234,238,242,.1);border-radius:var(--radius);min-width:220px;padding:8px;opacity:0;pointer-events:none;transition:var(--transition);box-shadow:0 20px 60px rgba(0,0,0,.5)}}
  .nav-links>li:hover .dropdown,.nav-links>li.open .dropdown{{opacity:1;pointer-events:all;transform:translateX(-50%) translateY(0)}}
  .dropdown a{{display:block;padding:9px 14px;font-size:13px;color:var(--grey-light);text-decoration:none;border-radius:var(--radius-sm);transition:var(--transition);white-space:nowrap}}
  .dropdown a:hover{{color:#fff;background:rgba(40,123,232,.14)}}
  .nav-cta{{margin-left:16px}}
  .nav-hamburger{{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:6px}}
  .nav-hamburger span{{display:block;width:22px;height:2px;background:var(--dark);border-radius:2px;transition:var(--transition)}}
  .mobile-menu{{display:none;position:fixed;top:68px;left:0;right:0;bottom:0;background:var(--white);overflow-y:auto;padding:16px 24px 32px;z-index:999;flex-direction:column;gap:4px;box-shadow:0 8px 32px rgba(16,16,20,.12)}}
  .mobile-menu.open{{display:flex}}
  .mobile-menu>a{{display:block;padding:13px 16px;color:var(--dark);text-decoration:none;font-size:15px;font-weight:600;border-radius:var(--radius-sm);transition:var(--transition)}}
  .mobile-menu>a:hover{{background:var(--tint)}}
  .mobile-accordion{{display:flex;flex-direction:column}}
  .mobile-accordion-toggle{{display:flex;align-items:center;justify-content:space-between;padding:13px 16px;background:none;border:none;cursor:pointer;font-family:var(--font-body);font-size:15px;font-weight:600;color:var(--dark);border-radius:var(--radius-sm);width:100%;text-align:left;transition:var(--transition)}}
  .mobile-accordion-toggle:hover{{background:var(--tint)}}
  .mobile-accordion-icon{{font-size:12px;color:var(--grey-mid);transition:transform .22s ease;flex-shrink:0}}
  .mobile-accordion.open .mobile-accordion-icon{{transform:rotate(180deg)}}
  .mobile-accordion-panel{{display:none;flex-direction:column;gap:2px;padding:4px 0 8px 16px}}
  .mobile-accordion.open .mobile-accordion-panel{{display:flex}}
  .mobile-accordion-panel a{{display:block;padding:10px 16px;color:var(--grey-mid);text-decoration:none;font-size:14px;font-weight:500;border-radius:var(--radius-sm);transition:var(--transition)}}
  .mobile-accordion-panel a:hover{{background:var(--tint);color:var(--dark)}}
  .mobile-menu .btn{{width:100%;justify-content:center;margin-top:12px;color:#fff!important}}

  /* POST */
  .post-hero{{padding-top:68px;background:var(--dark)}}
  .post-cover-wrap{{width:100%;max-height:480px;overflow:hidden}}
  .post-cover{{width:100%;max-height:480px;object-fit:cover;display:block}}
  .post-section{{padding:56px 0 120px}}
  .post-layout{{display:grid;grid-template-columns:3fr 1fr;gap:64px;align-items:start}}
  .post-meta{{display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap}}
  .post-category{{font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--blue);background:rgba(40,123,232,.08);padding:4px 12px;border-radius:100px;text-decoration:none}}
  .post-category:hover{{background:rgba(40,123,232,.15)}}
  .post-date{{font-size:13px;color:var(--grey-mid)}}
  .post-read-time{{font-size:13px;color:var(--grey-mid)}}
  .post-title{{font-family:var(--font-display);font-size:clamp(28px,4vw,44px);font-weight:900;line-height:1.1;color:var(--dark);letter-spacing:-.02em;margin-bottom:28px}}
  .post-tags{{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:28px}}
  .post-tag{{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--grey-mid);background:var(--tint);padding:4px 10px;border-radius:100px}}
  .post-body{{font-size:17px;line-height:1.8;color:var(--dark)}}
  .post-body h2{{font-family:var(--font-display);font-size:clamp(20px,2.5vw,26px);font-weight:900;margin:48px 0 16px;color:var(--dark);letter-spacing:-.01em}}
  .post-body h3{{font-family:var(--font-display);font-size:19px;font-weight:700;margin:36px 0 12px;color:var(--dark)}}
  .post-body p{{margin-bottom:22px}}
  .post-body strong{{font-weight:700}}
  .post-body em{{font-style:italic}}
  .post-body a{{color:var(--blue);text-decoration:underline;text-underline-offset:3px}}
  .post-body a:hover{{color:var(--blue-bright)}}
  .post-body blockquote{{border-left:3px solid var(--blue);padding:16px 24px;margin:32px 0;background:rgba(40,123,232,.05);border-radius:0 var(--radius-sm) var(--radius-sm) 0}}
  .post-body blockquote p{{margin:0;font-style:italic}}
  .post-body ul,.post-body ol{{padding-left:28px;margin-bottom:22px}}
  .post-body li{{margin-bottom:10px}}
  .post-body hr.post-divider{{border:none;border-top:1px solid var(--tint-deep);margin:44px 0}}
  .post-body code{{font-family:monospace;background:var(--tint);padding:2px 6px;border-radius:4px;font-size:.88em}}

  /* SIDEBAR */
  .post-sidebar{{position:sticky;top:88px}}
  .sidebar-title{{font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--grey-mid);margin-bottom:20px;padding-bottom:12px;border-bottom:2px solid var(--tint-deep)}}
  .sidebar-post{{display:flex;gap:12px;padding:16px 0;border-bottom:1px solid var(--tint);text-decoration:none;align-items:flex-start}}
  .sidebar-post:last-child{{border-bottom:none;padding-bottom:0}}
  .sidebar-post:hover .sidebar-post-title{{color:var(--blue)}}
  .sidebar-post-img{{width:72px;height:72px;object-fit:cover;border-radius:8px;flex-shrink:0}}
  .sidebar-post-text{{flex:1}}
  .sidebar-post-title{{font-size:14px;font-weight:700;color:var(--dark);line-height:1.4;margin-bottom:4px;transition:color .22s}}
  .sidebar-post-date{{font-size:12px;color:var(--grey-mid)}}

  /* FOOTER */
  footer{{background:var(--dark);border-top:1px solid rgba(234,238,242,.08);padding:64px 0 32px}}
  .footer-top{{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:48px;margin-bottom:48px}}
  .footer-logo{{margin-bottom:18px}}
  .footer-logo img{{height:32px}}
  .footer-desc{{font-size:13.5px;color:var(--grey-mid);line-height:1.65;max-width:260px;margin-bottom:20px}}
  .footer-social a{{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:var(--grey-mid);text-decoration:none;transition:var(--transition)}}
  .footer-social a:hover{{color:var(--mint)}}
  .footer-col-title{{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--tint);margin-bottom:18px}}
  .footer-links{{display:flex;flex-direction:column;gap:10px}}
  .footer-links a{{font-size:13.5px;color:var(--grey-mid);text-decoration:none;transition:var(--transition)}}
  .footer-links a:hover{{color:var(--tint)}}
  .footer-contact{{display:flex;flex-direction:column;gap:12px}}
  .footer-contact-item{{display:flex;align-items:flex-start;gap:12px;font-size:13.5px;color:var(--grey-mid)}}
  .footer-contact-icon{{width:32px;height:32px;border-radius:50%;background:#6b7280;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}}
  .footer-contact-icon svg{{width:14px;height:14px;fill:none;stroke:var(--dark);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}}
  .footer-contact-item a{{color:inherit;text-decoration:none;transition:var(--transition)}}
  .footer-contact-item a:hover{{color:var(--mint)}}
  .footer-bottom{{border-top:1px solid rgba(234,238,242,.08);padding-top:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}}
  .footer-copy{{font-size:13px;color:var(--grey-mid)}}

  /* RESPONSIVE */
  @media(max-width:1024px){{.footer-top{{grid-template-columns:1fr 1fr}}}}
  @media(max-width:900px){{.post-layout{{grid-template-columns:1fr}}.post-sidebar{{position:static}}}}
  @media(max-width:768px){{.nav-links,.nav-cta{{display:none}}.nav-hamburger{{display:flex}}.footer-top{{grid-template-columns:1fr}}.footer-bottom{{flex-direction:column;align-items:flex-start}}}}
</style>
</head>
<body id="top">

<!-- NAV -->
<nav id="navbar">
  <div class="container">
    <div class="nav-inner">
      <a href="/" class="nav-logo"><img src="/logo.png" alt="Edge8" /></a>
      <ul class="nav-links">
        <li>
          <button class="has-dropdown" aria-haspopup="true">Services <span class="dropdown-icon">&#9662;</span></button>
          <div class="dropdown">
            <a href="/your-first-ai-hire">Your First AI Hire</a>
            <a href="/ai-capabilities-audit">AI Capabilities Audit</a>
            <a href="/caio-leadership">CAIO Leadership</a>
            <a href="/global-staffing">Global Staffing</a>
            <a href="/training-and-certification">Training &amp; Certification</a>
          </div>
        </li>
        <li>
          <button class="has-dropdown" aria-haspopup="true">Case Studies <span class="dropdown-icon">&#9662;</span></button>
          <div class="dropdown">
            <a href="/personal-brands">Personal Brands</a>
            <a href="/business-websites">Business Website</a>
            <a href="/ai-programs">AI Programs</a>
          </div>
        </li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <a href="https://www.edge8.ai" class="btn btn-primary nav-cta">Schedule A Consultation</a>
      <button class="nav-hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<!-- MOBILE MENU -->
<div class="mobile-menu" id="mobileMenu">
  <div class="mobile-accordion" id="mobileServicesAccordion">
    <button class="mobile-accordion-toggle" onclick="toggleMobileAccordion('mobileServicesAccordion')">Services <span class="mobile-accordion-icon">&#9662;</span></button>
    <div class="mobile-accordion-panel">
      <a href="/your-first-ai-hire">Your First AI Hire</a>
      <a href="/ai-capabilities-audit">AI Capabilities Audit</a>
      <a href="/caio-leadership">CAIO Leadership</a>
      <a href="/global-staffing">Global Staffing</a>
      <a href="/training-and-certification">Training &amp; Certification</a>
    </div>
  </div>
  <div class="mobile-accordion" id="mobileCaseStudiesAccordion">
    <button class="mobile-accordion-toggle" onclick="toggleMobileAccordion('mobileCaseStudiesAccordion')">Case Studies <span class="mobile-accordion-icon">&#9662;</span></button>
    <div class="mobile-accordion-panel">
      <a href="/personal-brands">Personal Brands</a>
      <a href="/business-websites">Business Website</a>
      <a href="/ai-programs">AI Programs</a>
    </div>
  </div>
  <a href="/blog">Blog</a>
  <a href="/about">About</a>
  <a href="https://www.edge8.ai" class="btn btn-primary">Schedule A Consultation</a>
</div>

<!-- POST HERO (cover image) -->
<section class="post-hero">
  <div class="post-cover-wrap">
    <img class="post-cover" src="{img_path}" alt="{esc(post['title'])}" />
  </div>
</section>

<!-- POST CONTENT -->
<section class="post-section">
  <div class="container">
    <div class="post-layout">

      <!-- ── Left: article ── -->
      <article class="post-main">
        <div class="post-meta">
          <a href="/blog" class="post-category">{esc(category)}</a>
          <span class="post-date">{post['date']}</span>
          <span class="post-read-time">· {post['read_time']} read</span>
        </div>
        <h1 class="post-title">{esc(post['title'])}</h1>
        {tags_html}
        <div class="post-body">
{body_html}
        </div>
      </article>

      <!-- ── Right: sidebar ── -->
      <aside class="post-sidebar">
        <div class="sidebar-title">More in {esc(category)}</div>
        {sidebar}
      </aside>

    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="footer-top">
      <div>
        <div class="footer-logo"><a href="#top"><img src="/logo-white.png" alt="Edge8" /></a></div>
        <p class="footer-desc">AI Leadership, Automation &amp; Global Talent Solutions. Helping organizations become Tech-Forward and achieve 8x efficiency.</p>
        <div class="footer-social">
          <a href="https://www.linkedin.com/company/edge8ai/" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Services</div>
        <div class="footer-links">
          <a href="/your-first-ai-hire">Your First AI Hire</a>
          <a href="/ai-capabilities-audit">AI Capabilities Audit</a>
          <a href="/caio-leadership">CAIO Leadership</a>
          <a href="/global-staffing">Global Staffing</a>
          <a href="/training-and-certification">Training &amp; Certification</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Case Studies</div>
        <div class="footer-links">
          <a href="/personal-brands">Personal Brands</a>
          <a href="/business-websites">Business Website</a>
          <a href="/ai-programs">AI Programs</a>
        </div>
        <div class="footer-col-title" style="margin-top:28px">Company</div>
        <div class="footer-links">
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Contact</div>
        <div class="footer-contact">
          <div class="footer-contact-item">
            <div class="footer-contact-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
            <a href="mailto:dave@edge8.ai">dave@edge8.ai</a>
          </div>
          <div class="footer-contact-item">
            <div class="footer-contact-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.16a16 16 0 006.93 6.93l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
            <div><div>+84 90 995 8581</div><div>+1 206 395 8872</div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">&copy; 2026 by Edge8. All rights reserved.</div>
    </div>
  </div>
</footer>

<script>
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {{
    mobileMenu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (mobileMenu.classList.contains('open')) {{
      spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    }} else {{
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }}
  }});
  document.querySelectorAll('.has-dropdown').forEach(btn => {{
    btn.addEventListener('click', e => {{
      const li = btn.closest('li');
      const wasOpen = li.classList.contains('open');
      document.querySelectorAll('.nav-links > li').forEach(l => l.classList.remove('open'));
      if (!wasOpen) li.classList.add('open');
      e.stopPropagation();
    }});
  }});
  document.addEventListener('click', () => {{
    document.querySelectorAll('.nav-links > li').forEach(l => l.classList.remove('open'));
  }});
  function toggleMobileAccordion(id) {{
    const el = document.getElementById(id);
    const isOpen = el.classList.contains('open');
    document.querySelectorAll('.mobile-accordion').forEach(a => a.classList.remove('open'));
    if (!isOpen) el.classList.add('open');
  }}
  window.addEventListener('scroll', () => {{
    document.getElementById('navbar').style.background = window.scrollY > 50 ? 'rgba(255,255,255,0.99)' : 'rgba(255,255,255,0.97)';
  }});
</script>
</body>
</html>'''

# ── Main ──────────────────────────────────────────────────────────────────────

for category, posts in CATEGORIES.items():
    for post in posts:
        md_path = os.path.join(BASE, category, post['folder'], post['md'])
        try:
            with open(md_path, 'r', encoding='utf-8') as f:
                full_md = f.read()
        except FileNotFoundError:
            print(f"MISSING: {md_path}")
            continue

        # Split at first --- separator (metadata / content boundary)
        parts = re.split(r'\n\s*---\s*\n', full_md, maxsplit=1)
        body_md = parts[1] if len(parts) > 1 else full_md

        body_html = md_to_html(body_md)

        # Extract first plain-text sentence for meta description
        p_match = re.search(r'<p>(.+?)</p>', body_html, re.DOTALL)
        raw_desc = re.sub(r'<[^>]+>', '', p_match.group(1)).strip() if p_match else post['title']
        description = (raw_desc[:155] + '...') if len(raw_desc) > 155 else raw_desc

        html = generate_html(category, post, posts, body_html, description)

        out_path = os.path.join(BASE, category, post['folder'], 'index.html')
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"  OK  {out_path.replace(BASE+'/', '')}")

print("\nDone.")
