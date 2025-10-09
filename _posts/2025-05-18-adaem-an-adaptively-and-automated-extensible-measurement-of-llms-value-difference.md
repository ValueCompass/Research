---
layout: post
title: "AdAEM: An Adaptively and Automated Extensible Measurement of LLMs' Value Difference"
authors: Shitong Duan, Xiaoyuan Yi, Peng Zhang, Dongkuan Xu, Jing Yao, Tun Lu, Ning Gu, Xing Xie
paper_url: https://arxiv.org/abs/2505.13531
date: 2025-05-18
image: images/posts/adaem.png
coverImage: images/posts/adaem.png
tags: Evaluation, Analysis
status: latest
permalink: /adaem_value_measurement
---
Assessing Large Language Models (LLMs)’ underlying value differences enables comprehensive comparison of their misalignment, cultural adaptability, and biases. Nevertheless, current value measurement datasets face the informativeness challenge: with often outdated, contaminated, or generic test questions, they can only capture the shared value orientations among different LLMs, leading to saturated and thus uninformative results. To address this problem, we introduce AdAEM, a novel, self-extensible assessment framework for revealing LLMs’ inclinations. Distinct from previous static benchmarks, AdAEM  can automatically and adaptively generate and extend its test questions. This is achieved by probing the internal value boundaries of a diverse set of LLMs developed across cultures and time periods in an in-context optimization manner. The optimization process theoretically maximizes an information-theoretic objective to extract the latest or culturally controversial topics, providing more distinguishable and informative insights about models’ value differences. In this way, AdAEM  is able to co-evolve with the development of LLMs, consistently tracking their value dynamics. Using AdAEM, we generate 12,310 questions grounded in Schwartz Value Theory, conduct an extensive analysis to manifest our method’s validity and effectiveness, and benchmark the values of 16 LLMs, laying the groundwork for better value research.
