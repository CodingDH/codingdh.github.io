---
title: DH2024 Poster & Introducing Coding DH
permalink: /research-outputs/01-dh2024-poster-introducing-coding-dh/
header:
  overlay_color: "#5e616c"
  overlay_filter: linear-gradient(rgba(255, 0, 0, 0.5), rgba(0, 255, 255, 0.5))
  overlay_image: /assets/images/cover_image_comp_hum.png
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  teaser: /assets/images/DH2024_conference.png
sort_order: 1
published_date: 2024-08-07
excerpt: "This poster introduces the *Coding DH* project and its research areas, focusing on how GitHub has become a space for knowledge production and community formation in Digital Humanities."
datatables: true
classes: wide
sidebar: false
layout: single
toc: true
---

[ Start with png of the final poster]

Since its release in 2008, GitHub has become crucial infrastructure for both software companies and scholars. Although scholars comprise a small portion of the user base, GitHub’s role in academic research has grown significantly, as the platform hosts work ranging from large research software projects to syllabi and datasets. In Digital Humanities (DH), there has been a strong emphasis on teaching best practices for using GitHub, especially its remote version control and collaborative coding features. However, how scholars utilize GitHub and its impact on DH research and teaching remain under explored. The *Coding DH* project uses GitHub data to examine how the platform has become a space for knowledge production and community formation in DH, focused on the following research areas:

- Identifying DH on GitHub
- Studying Global DH Coding Communities
- Evolution of DH Coding Practices

## GitHub as Digital Trace Data

Digital trace data refers to the digital footprints left by users as they interact with online platforms.[^4] On GitHub, this includes user profiles, repositories, commits, issues, and interactions. This trace data provides valuable insights into community dynamics and coding practices.

### Previous Scholarship 

Studying platforms like GitHub is a well established part of Mining Software Repositories (MSR), a subfield of Computer Science, but the work primarily focuses on enhancing software engineering practices rather than community formation.[^2] Beyond Computer Science, there are two previous studies of uses of GitHub in Library Science and Journalism, but these studies rely on a far smaller sample size than *Coding DH*.[^3] The only study of DH and GitHub was in 2016, when Lisa Spiro and Sean Morey Smith released a survey of practices.[^1] Our project builds on this existing work, as well as DH scholarship on Twitter and citation communities.

### Challenges and Limitations of the Data

- **API Rate Limits**: GitHub imposes rate limits on API usage, making data collection a slow process. Compiling this dataset has taken over two years using the GitHub Search API and General APIs.
- **Metadata Version History**: Version history does not apply to metadata—data such as bios, descriptions, or topics are not archived via the GitHub API, meaning only the most current version is available.
- **Data Access**: GitHub prevents REST API access to certain activities, such as Projects or Teams, as well as private repositories, so our data analysis will always represent a lower bound of activity.
- **Interpreting Code Work**: Not all interactions represent the same level of engagement or labor, so it is essential to consider both what data is missing and what the existing data represents. We also do not argue that coding is required to be a DH scholar, but instead want to explore those that are engaging with DH on GitHub.

## Coding DH’s Data Privacy & User Protection

GitHub is designed for sharing code, and users do not expect their personal information—their interactions, bios, affiliations—to be objects of study. The data for this study comes from user-supplied profiles and data from user engagement with the platform, enabling us to study community dynamics alongside the released code.

GitHub authorizes researchers to “use public, non-personal information from the Service for research purposes, only if any publications resulting from that research are open access.” The personal nature of user profiles means that although the data can be gathered through public APIs, it falls into a liminal space of personal information. Our approach has been to prioritize user privacy. Therefore, we are not releasing aggregated data and are anonymizing users connected to the data, except where we have explicit user consent.

## Capturing DH Activity on GitHub

### Multilingual Approach to Search

To find people, organizations, and projects that are connected to “Digital Humanities,” we started with a series of queries to the GitHub API, searching against user bios, repo and org descriptions, and topics.

We also wanted to examine practices beyond the anglophone DH world. Using Google Translate and manual verification, we found 107 unique terms of DH that correlate to 123 languages, and queried the GitHub API for each.

<!-- Load in datatables from file -->
{% include translated_terms_table.html %}

### Expanding Circles of GitHub Engagement

Our initial search of the GitHub API uncovered a wide spread of DH-related activity on GitHub, but also revealed some weaknesses of the search approach. Topics were introduced to the platform in 2019, and are less consistently used on older repos. Many users and repos have minimal descriptive text, or don’t explicitly use “digital humanities,” despite being well-known within the DH community.

<figure>
   <a href="{{site.baseurl}}/assets/images/DH2024-CodingDH-Poster-Circles.png">
      <img src="{{site.baseurl}}/assets/images/DH2024-CodingDH-Poster-Circles.png" alt="Expanding circles of data, from initial search to removing bots" style="width:100%" class="image-popup">
   </a>
</figure>

As a result, we undertook a multiphase approach to expand our data beyond the initial search results. We added repositories owned by users identified through the initial search, as well as the owners (users and orgs) of identified repos. We also captured data on 23 different interaction types and added users whose activity levels reached a determined threshold.

## Features of DH Coding Communities

[data visualizations go here]


[^2]: For examples of studies more focused on the social coding dynamics of GitHub, see: Tsay, Jason, Laura Dabbish, and James Herbsleb. "Influence of social and technical factors for evaluating contribution in GitHub." In *Proceedings of the 36th international conference on Software engineering*, pp. 356-366. 2014; Kalliamvakou, Eirini, Georgios Gousios, Kelly Blincoe, Leif Singer, Daniel M. German, and Daniela Damian. "The promises and perils of mining GitHub." In *Proceedings of the 11th working conference on mining software repositories*, pp. 92-101. 2014; and Dabbish, Laura, Colleen Stuart, Jason Tsay, and Jim Herbsleb. "Social coding in GitHub: transparency and collaboration in an open software repository." In *Proceedings of the ACM 2012 conference on computer supported cooperative work*, pp. 1277-1286. 2012. For computational studies, see Ray, Baishakhi, Daryl Posnett, Vladimir Filkov, and Premkumar Devanbu. "A large scale study of programming languages and code quality in GitHub." In *Proceedings of the 22nd ACM SIGSOFT international symposium on foundations of software engineering*, pp. 155-165. 2014.
[^3]: Andromeda Yelton, “Coding for Librarians: Learning by Example,” April 2015, https://journals.ala.org/index.php/ltr/issue/view/506; Sam Popowich, “Coding and Professional Development-Part 1: A Study in Contradictions,” *Partnership: The Canadian Journal of Library and Information Practice and Research* 12, no. 1 (August 29, 2017), https://doi.org/10.21083/partnership.v12i1.3961; Mark Edward Eaton, “A Comparative Analysis of the Use of GitHub by Librarians and Non-Librarians,” *Evidence Based Library and Information Practice* 13, no. 2 (June 15, 2018): 27–47, https://doi.org/10.18438/eblip29291; Sarah Nguyễn and Vicky Rampin, “Who Writes Scholarly Code?,” *International Digital Curation Conference (IDCC)*, Online, June 13-16, 2022 (Session G, Part 1), Online: Zenodo, 2022, https://doi.org/10.5281/zenodo.6670225.
[^1]: Sean Morey Smith and Lisa Spiro, “Evaluating GitHub for DH,” accessed August 2, 2024, https://seanmsmithphd.net/evaluating-github-for-dh/.
[^4]: Angela Xiao Wu and Harsh Taneja, “Platform Enclosure of Human Behavior and Its Measurement: Using Behavioral Trace Data against Platform Episteme,” *New Media & Society* 23, no. 9 (September 1, 2021): 2650–67, https://doi.org/10.1177/1461444820933547.

<script>
    $(document).ready(function() {
        $('table').DataTable();
    });
</script>