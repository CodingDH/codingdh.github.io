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
classes: wide
sidebar: 
    title: "DH2024 Poster & Introducing Coding DH"
    nav: dh2024-poster
layout: single
toc: false
altair: true
---

Welcome to the *Coding DH* project! This poster introduces the project and its research areas, focusing on how GitHub has become a space for knowledge production and community formation in Digital Humanities. The poster was presented at the DH2024 conference, held from August5-10, 2024 in Arlington, Virginia, USA. You can learn more about the conference on the [DH2024 website](https://dh2024.adho.org/).

## Download the Poster
<a id="download-the-poster"></a>

<figure>
    <a href="{{site.baseurl}}/assets/images/DH2024CodingDHPosterFinalVersion.png">
        <img src="{{site.baseurl}}/assets/images/DH2024CodingDHPosterFinalVersion.png" alt="DH2024 Conference Poster" style="width:100%" class="image-popup">
    </a>
</figure>

You can download the poster as a PDF file by clicking the button below:

<a href="{{ site.url }}/assets/files/DH2024CodingDHPoster.pdf" class="btn btn--primary" download="{{ site.url }}/assets/files/DH2024CodingDHPoster.pdf">Download PDF</a>

## Read The Poster
<a id="read-the-poster"></a>

### Introducing Coding DH
<a id="introducing-coding-dh"></a>

Since 2008, GitHub has become vital for both software companies and scholars. Although scholars are a small part of the user base, GitHub’s academic significance has grown, hosting everything from large research projects to syllabi and datasets. In Digital Humanities (DH), there’s been a focus on using GitHub for version control and collaborative coding. But despite its importance, the role of GitHub in DH research and teaching remains under explored. The Coding DH project investigates GitHub’s influence on knowledge production and community formation in DH, focusing on:

- Identifying DH on GitHub
- Studying Global DH Coding Communities
- Evolution of DH Coding Practices

#### Contextualizing Coding DH
<a id="contextualizing-coding-dh"></a>

Studying platforms like GitHub is common in Mining Software Repositories (MSR), a Computer Science subfield. However, MSR research mainly enhances software engineering practices rather than examining coding communities. Unlike studies using archived data collection projects like GHTorrent, we employ custom code to work directly with GitHub APIs.[^1]

Beyond CS, there are two previous studies that are relevant to Coding DH, which explored coding practices in Library Science and Journalism, respectively. But these studies rely on a far smaller sample size (~1000 and ~100).[^2] To date, the only study of DH and GitHub was in 2016, when Lisa Spiro and Sean Morey Smith surveyed DH scholars on their coding practices. Coding DH builds on this existing work, as well as DH scholarship on Twitter and citation communities.[^3]

#### Challenges & Limitations of GitHub Data
<a id="challenges-and-limitations-of-github-data"></a>

- **API Rate Limits:** GitHub imposes rate limits on API usage, making data collection a slow process. Compiling this dataset has taken over two years using the GitHub Search API and General APIs.[^4]
- **Metadata Version History:** Version history does not apply to metadata—data such as bios, descriptions, or topics are not archived via the GitHub API, meaning only the most current version is available.
- **Data Access:** GitHub prevents API access to certain activities, such as Projects or Teams, as well as private repositories, so our data analysis will always represent a lower bound of activity.[^5]
- **Interpreting Code Work:** Not all interactions represent the same level of engagement or labor, so it is essential to consider both what data is missing and what the existing data represents. We also do not argue that coding is required to be a DH scholar, but instead want to explore those that are engaging with DH on GitHub.

#### Protecting Users’ Data Privacy
<a id="protecting-users-data-privacy"></a>

GitHub is primarily designed for sharing code, so users do not typically expect their interactions, bios, and affiliations to be studied. While the data used in this study is technically public, it exists in a gray area between public and personal information. GitHub’s terms of service permits researchers to use public, non-personal information for research purposes if the resulting publications are open access.[^6] However, Coding DH is committed to prioritizing users’ data privacy, and therefore will **not release any identifiable user data**, in either aggregate or individual form, unless we have explicit user consent or the user is extremely active on the platform.

Our goal is to **balance user privacy with recognizing those contributing to DH code work**, which often isn’t as visible as citations or grants.

### Searching for DH Activity on GitHub
<a id="searching-for-dh-activity-on-github"></a>

#### Identifying DH Globally
<a id="identifying-dh-globally"></a>

To find DH activity on GitHub, we initially used the GitHub Search API, which returns results for users, repositories, organizations, topics, issues, gists, and even code, as long as it includes the search query.

<figure>
    <a href="{{site.baseurl}}/assets/images/multilingual_process.png">
        <img src="{{site.baseurl}}/assets/images/multilingual_process.png" alt="Searching for DH activity on GitHub" style="width:100%" class="image-popup">
    </a>
</figure>

Since GitHub is a global platform, we not only searched for DH in English, but also across all **183** ISO-639 languages. To generate these terms, we used a combination of existing DH translations and automated translation that we verified manually, giving us a total of **106** unique terms for DH that correlate to **123** languages.[^7]

<div class="notice--info">⚡️ If you would like to see our list and provide feedback, you can view it in Google Drive <a href="https://docs.google.com/spreadsheets/d/1A_M8m1rGSY-9ivV7RgDlSAOaMPRLFqsUsV_KQjyyYac/edit?usp=sharing">here</a>.</div>

#### Digital Humanities Dominant?
<a id="digital-humanities-dominant"></a>

<figure>
<div id="github_entities_tagged_or_searched_by_translated_term"></div>
<figcaption>You can hover for more information, select items in the legend to highlight, or zoom in to see more details. To reset, just double click the chart.</figcaption>
</figure>


Our initial search yielded results for only **18** of 106 terms, corresponding to **30** potential languages. While Chinese, French, Spanish, Italian, and Portuguese are well represented, ‘Digital Humanities’ is the dominant term. This raises the question of whether GitHub is mainly used by English-speaking scholars. However, given GitHub’s over 100 million active users globally, this is unlikely.

Instead, the dominance of the term “Digital Humanities” likely reflects the platform’s limitations. For example, **GitHub encodes all top-level repository and user names in ASCII, which does not support character-based languages**.[^8] This likely leads to the use of the term DH even in projects where English is not the primary language.
 
Additionally, the platform has evolved over time, which presents challenges for data collection. For example, topics were introduced in early 2017 and are less consistently used in older repositories.[^9] Many users and repositories also have minimal descriptive text or do not explicitly use the term DH despite being well-known within the DH community.

While our initial search uncovered some DH-related activity on GitHub, it also revealed the limitations of the search approach, which relies on users’ explicit engagement with DH and the consistency of GitHub’s data.

### Expanding & Exploring DH Coding Communities
<a id="expanding-and-exploring-dh-coding-communities"></a>

To get a more comprehensive view of DH users on GitHub, we **added two more steps to our data collection process**. First, we added any user who owned a repository or was a member of an organization that was identified as part of DH in our initial search. Second, we then also scraped data on **23** different interaction types between users and other GitHub entities, and added those users whose activity levels were in the top 25% of activities, for a total of **~43993** unique DH users.

<figure>
<div id="combined_users_created"></div>
<figcaption>You can hover for more information or zoom in to see more details. To reset, just double click the chart.</figcaption>
</figure>

These graph show that while few GitHub users explicitly mention DH in their name or bio, many users are involved with DH repositories or organizations, and even more engage across them. But there is also a noticeable decline in the third stage. This trend is partly due to the graph reflecting the date when users were created, however, it also raises questions about who gets to be a coder in DH and whether we are providing that opportunity to the next generation of scholars.

<figure>
<div id="correlation_matrices"></div>
<figcaption>Hover for more information.</figcaption>
</figure>

Exploring metadata for each data collection stage shows that DH users from our initial search have weaker correlations across categories, indicating more heterogeneity among these users compared to later stages. While these patterns may be due to sample size, future Coding DH research will explore if these trends also correspond to linguistic communities. 

Ultimately, by detailing our data collection process and initial results, we argue that we need to view coding as more than just best practices in DH, and instead understand how these trends are shaping the future of DH.

#### References
<a id="references"></a>

[^1]: For examples of studies more focused on the social coding dynamics of GitHub, see: Tsay, Jason, Laura Dabbish, and James Herbsleb. "Influence of social and technical factors for evaluating contribution in GitHub." In *Proceedings of the 36th international conference on Software engineering*, pp. 356-366. 2014; Kalliamvakou, Eirini, Georgios Gousios, Kelly Blincoe, Leif Singer, Daniel M. German, and Daniela Damian. "The promises and perils of mining GitHub." In *Proceedings of the 11th working conference on mining software repositories*, pp. 92-101. 2014; and Dabbish, Laura, Colleen Stuart, Jason Tsay, and Jim Herbsleb. "Social coding in GitHub: transparency and collaboration in an open software repository." In *Proceedings of the ACM 2012 conference on computer supported cooperative work*, pp. 1277-1286. 2012. For computational studies, see Ray, Baishakhi, Daryl Posnett, Vladimir Filkov, and Premkumar Devanbu. "A large scale study of programming languages and code quality in GitHub." In *Proceedings of the 22nd ACM SIGSOFT international symposium on foundations of software engineering*, pp. 155-165. 2014.
[^2]: Mark Edward Eaton, “A Comparative Analysis of the Use of GitHub by Librarians and Non-Librarians,” *Evidence Based Library and Information Practice* 13, no. 2 (June 15, 2018): 27–47, https://doi.org/10.18438/eblip29291; Bounegru, Liliana. “The Platformisation of Software Development: Connective Coding and Platform Vernaculars on GitHub.” *Convergence*, November 20, 2023, 13548565231205867. https://doi.org/10.1177/13548565231205867.
[^3]: Sean Morey Smith and Lisa Spiro, “Evaluating GitHub for DH,” accessed August 2, 2024, https://seanmsmithphd.net/evaluating-github-for-dh/.
[^4]: GitHub Docs. “Rate Limits for the REST API.” Accessed August 7, 2024. https://docs.github.com/_next/data/oHLzDh_BIxlv53zBnxzT2/en/free-pro-team@latest/rest/using-the-rest-api/rate-limits-for-the-rest-api.json?apiVersion=2022-11-28&versionId=free-pro-team%40latest&restPage=rate-limits-for-the-rest-api.
[^5]: GitHub Docs. “REST API Endpoints for Projects (Classic).” Accessed August 7, 2024. https://docs.github.com/_next/data/oHLzDh_BIxlv53zBnxzT2/en/free-pro-team@latest/rest/projects/projects.json?apiVersion=2022-11-28&versionId=free-pro-team%40latest&category=projects&subcategory=projects.
[^6]: GitHub Docs. “GitHub Terms of Service.” Accessed August 7, 2024. https://docs.github.com/en/github/site-policy/github-terms-of-service; “Using GitHub Data for Academic Research · Community · Discussion #111308.” Accessed March 24, 2024. https://github.com/orgs/community/discussions/111308.
[^7]: WeKeyPedia. *convergences*. GitHub, 2024, Archived on November 2, 2023, https://github.com/WeKeyPedia/convergences; “List of ISO 639 Language Codes.” In *Wikipedia*, August 6, 2024. https://en.wikipedia.org/w/index.php?title=List_of_ISO_639_language_codes&oldid=1238905855.
[^8]: GitHub. “CODEOWNERS Should Support the Directory and File with the Name of Non-English Language · Community · Discussion #64754.” Accessed August 7, 2024. https://github.com/orgs/community/discussions/64754.
[^9]: GitHub Docs. “About GitHub Topics.” Accessed August 7, 2024. https://docs.github.com/en/github/administering-a-repository/classifying-your-repository-with-topics/about-github-topics; Ganesan, Kavita. “Topic Suggestions for Millions of Repositories.” The GitHub Blog (blog), July 31, 2017. https://github.blog/engineering/user-experience/topics/.

<script>
    var json_file = "{{site.baseurl}}/assets/files/github_entities_tagged_or_searched_by_translated_term.json";
    vegaEmbed('#github_entities_tagged_or_searched_by_translated_term', json_file);
    var json_file = "{{site.baseurl}}/assets/files/combined_users_created.json";
    vegaEmbed('#combined_users_created', json_file);
    var json_file = "{{site.baseurl}}/assets/files/correlation_matrices.json";
    vegaEmbed('#correlation_matrices', json_file);
</script>