---
---

# About Us

We are _Computing for Secure and Intelligent Networks (COSINE) Lab_, led by [Dr. Tamoghna Ojha](https://people.iitism.ac.in/~tamoghnaojha/) at the Department of Mathematics and Computing, IIT (ISM) Dhanbad. Our work is focused on exploiting "distributed intelligence" in future IoT networks, especially with resource-constrained nodes with challenging network dynamics, to facilitate energy-efficient and secure decisions on resource allocation and management. Our current focus is on applying AI/ML techniques in UAV-IoT networks, Edge computing, Non-terrestrial networks, digital twin, and edge-cloud-continuum. We have recently received a few research grants -- to develop **Low-resource AI Vision system for Mining** supported by TEXMiN Foundation (DST TIH), a **special lab setup grant**, and **Faculty Research Scheme grant** from IIT (ISM) Dhanbad. 


<div style="border: 1px solid red; padding: 10px;">
<b>We are recruiting:</b> PhD position available at our lab in the Department of Mathematics and Computing, IIT (ISM) Dhanbad. We are looking for self-motivated candidates interested working in areas such as AI/ML, UAV-IoT networks, Edge computing, Non-terrestrial networks, digital twin, and edge-cloud-continuum. Interested candidates need to email with their latest CV to <a href="mailto:tamoghnaojha@iitism.ac.in">tamoghnaojha@iitism.ac.in</a>. Eligibility: M.Tech. in Computer Science or M.Tech/M.Sc. in Mathematics & Computing. More details: <a href="https://www.iitism.ac.in/phdadmission"> in this link</a>.
</div>

## Our Sponsors and Collaborators

{% assign imgs = "images/iitism-logo.svg|IIT (ISM) Dhanbad|Sponsor, images/texmin-iitism.jpg|TEXMin IIT (ISM) Dhanbad|Sponsor, images/collab-institutes.jpg|Collaborators|Collaborators" | split: "," %}
{% include scroll-gallery.html images=imgs %}

# {% include icon.html icon="fa-solid fa-newspaper" %} News

{% capture raw_news %}
June 2025: Our collaborative work on 'ML-based SDN Security Enhancement' accepted in IEEE INDISCON at Rourkela, India. $
May 2025: Received _Faculty Research Scheme grant_ of INR 19.99 Lakhs from IIT (ISM) Dhanbad. $
April 2025: Congratulations to Shubham for being selected for ISRO internship. $
April 2025: Our collaborative work on ‘Secure Metaverse access’ accepted in MoCS workshop (IEEE ISCC 2025) at Bologna, Italy. $
April 2025: Serving as TPC member for IEEE LCN 2025. $
March 2025: Received research grant from TEXMiN Foundation (DST TIH). $
February 2025: Serving as TPC for IEEE PIMRC 2025 and VTC-Spring 2025. $
January 2025: Joined the editorial board of Scientific Reports (Springer Nature). $
December 2024: Best paper award at IEEE OCIT 2024. Congratulations to Amala. $
December 2024: Mentor and host for ACM India Anveshan Setu program. $
December 2024: ‘Scheduling in IEEE 802.15.4-DSME’ accepted in IEEE WCNC 2025 at Milan, Italy. $
November 2024: Received Special Lab Establishment grant of INR 29.97 Lakhs from IIT (ISM) Dhanbad. $
November 2024: Our collaborative work on ‘IEEE 802.15.4-DSME’ accepted in IEEE ANTS 2024 workshop at IIT Guwahati. $
October 2024: Amala’s (PhD student) work on ‘Off-chip Based PUF’ accepted in IEEE OCIT 2024. $
September 2024: Inception of COSINE lab: Dr. Ojha joined IIT (ISM) Dhanbad as an Assistant Professor of Mathematics and Computing. $
{% endcapture %}

{% assign news_items = raw_news | split: "$" %}

{% include news-ticker.html items=news_items %}
