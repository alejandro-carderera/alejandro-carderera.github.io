---
layout: page
title: Book
description: A SIAM monograph on Frank-Wolfe algorithms for constrained optimization, machine learning, and large-scale data science.
img: assets/img/publication_preview/cover_book.jpg
importance: 0
category:
permalink: /book/
nav: true
nav_order: 3
---

<div class="d-flex flex-column flex-md-row align-items-start mb-4">
  <div class="flex-shrink-0 mr-md-4 mb-3 mb-md-0 text-center">
    <img src="{{ '/assets/img/publication_preview/cover_book.jpg' | relative_url }}" alt="Conditional Gradient Methods book cover" class="img-fluid rounded" style="max-width: 200px; box-shadow: 0 2px 12px rgba(0,0,0,0.1);">
  </div>
  <div>
    <p style="color: var(--global-text-color-light); margin-bottom: 0.25rem; font-size: 0.9rem;">MOS-SIAM Series on Optimization · 2025</p>
    <p style="margin-bottom: 0.75rem;">
      <a href="https://www.pokutta.com/">G. Braun</a>,
      <strong>A. Carderera</strong>,
      <a href="https://cyrillewcombettes.github.io/">C.W. Combettes</a>,
      <a href="https://www.seas.upenn.edu/~hassani/">H. Hassani</a>,
      <a href="https://aminkarbasi.github.io/">A. Karbasi</a>,
      <a href="https://sites.utexas.edu/mokhtari/">A. Mokhtari</a>,
      <a href="https://www.pokutta.com/">S. Pokutta</a>
    </p>
    <div class="mb-3">
      <a href="https://epubs.siam.org/doi/book/10.1137/1.9781611978568" class="btn btn-sm z-depth-0" role="button" style="border: 1px solid var(--global-divider-color); margin-right: 0.25rem;">SIAM</a>
      <a href="https://arxiv.org/abs/2211.14103" class="btn btn-sm z-depth-0" role="button" style="border: 1px solid var(--global-divider-color); margin-right: 0.25rem;">arXiv</a>
      <a href="https://arxiv.org/pdf/2211.14103" class="btn btn-sm z-depth-0" role="button" style="border: 1px solid var(--global-divider-color); margin-right: 0.25rem;">PDF</a>
      <a href="https://github.com/ZIB-IOL/FrankWolfe.jl" class="btn btn-sm z-depth-0" role="button" style="border: 1px solid var(--global-divider-color);">Code</a>
    </div>
  </div>
</div>

---

*Conditional Gradient Methods: From Core Principles to AI Applications* offers a definitive and modern treatment of one of the most elegant and versatile algorithmic families in optimization: the Frank–Wolfe method and its many variants. Originally proposed in the 1950s, these projection-free techniques have seen a powerful resurgence, now playing a central role in machine learning, signal processing, and large-scale data science.

This comprehensive monograph guides readers through the foundations of constrained optimization and into cutting-edge territory — including stochastic, online, and distributed settings — by uniting deep theoretical insights with practical considerations. It uses a clear narrative, rigorous proofs, and illuminating illustrations to demystify adaptive variants, away-steps, and the nuances of dealing with structured convex sets.

Most of the algorithms in the book are implemented in the [FrankWolfe.jl](https://github.com/ZIB-IOL/FrankWolfe.jl) Julia package.

## Endorsements

> "Conditional gradient algorithms have become an essential part of the algorithmic toolbox in machine learning, signal processing, and related fields. This monograph offers a comprehensive review of both classical results and recent generalizations, including extensions to large-scale settings. The presentation is notably clear, featuring illustrations, detailed proofs, and application examples. It will serve as an important reference for graduate students and researchers in data science."
>
> — **Francis Bach**, INRIA

> "This book is a thorough and accessible guide to one of the most versatile families of optimization algorithms. It traces the rich history of the conditional gradient algorithm and explores its modern advancements, offering a valuable resource for both experts and newcomers. With clear explanations of the algorithms, analysis, and practical applications, the authors provide a go-to reference for anyone tackling constrained optimization problems. This book is sure to inspire fresh ideas and drive advancements in the field."
>
> — **Elad Hazan**, Princeton University

## Audience

This book is intended for optimization researchers and theorists, machine learning methodologists, and algorithm designers. Graduate students in those areas will also find it of interest.
