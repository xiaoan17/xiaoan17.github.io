// 论文 / 专利数据 —— 新成果按年份顺序插入即可，页面按 year 自动分组（降序）
// 字段说明:
//   year      发表年份(数字)
//   title     标题; url 标题的链接
//   type      Journal / Preprint / Conference / US Patent
//   venue     期刊或会议名; impact 可选,如 "IF = 8.2, Q1"
//   authors   作者数组,名为 "Bocheng An" 的会自动加粗
//   citations 引用数;0 或 null 则不显示引用徽标
//   tags      研究方向标签,对应页面上方的筛选按钮:
//             traffic-flow / trajectory / risk / graph / potential-field / control / patent / llm / car-following
//   links     额外链接 [{ label, url }]
//   abstract  可选,填写后自动生成「展开摘要 ▾」
window.PAPERS = [
  // ---- 2026 ----
  {
    year: 2026,
    title: "VARNet: A Transformer-Based Model for Vehicle Trajectory Prediction with Variable-Length Input Sequences",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:_FxGoFyzp5QC",
    type: "Journal",
    venue: "Journal of Transportation Engineering, Part A: Systems",
    authors: ["Bocheng An", "Chuang Cui", "Rui Gan", "Xu Qu", "Bin Ran"],
    citations: 0,
    tags: ["trajectory"],
    links: [
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:_FxGoFyzp5QC" }
    ]
  },
  {
    year: 2026,
    title: "Efficient Large-Scale Traffic Flow Forecasting via Multi-Subgraph Spatio-Temporal Graph Convolutional Networks",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:LkGwnXOMwfcC",
    type: "Journal",
    venue: "Journal of Intelligent Transportation Systems",
    authors: ["Bocheng An", "Chuang Cui", "Rui Gan", "Xu Qu", "Bin Ran"],
    citations: 0,
    tags: ["traffic-flow", "graph"],
    links: [
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:LkGwnXOMwfcC" }
    ],
    abstract: "Proposes MuSTGCN, a Multi-Subgraph Spatio-Temporal Graph Convolutional Network for large-scale traffic flow prediction. Divides the graph into subgraphs around pivotal nodes, trains each subgraph separately, and merges outputs. Validates on 8,600-node real-world datasets with significantly reduced training/inference time and GPU memory."
  },
  {
    year: 2026,
    title: "Beyond Static Evaluation: Co-Evolutionary Mechanisms for LLM-Driven Strategy Evolution in Adversarial Games",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:roLk4NBRz8UC",
    type: "Preprint",
    venue: "arXiv:2606.10389",
    authors: ["H Li", "Z Ge", "Z Zhang", "X Yuan", "Y Lo", "Q Liu", "Bocheng An", "D Rong", "J Liu", "A Li", "J Wu", "D Yin", "D Shen"],
    citations: 0,
    tags: ["llm"],
    links: [
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:roLk4NBRz8UC" },
      { label: "arXiv ↗", url: "https://arxiv.org/abs/2606.10389" }
    ],
    abstract: "Introduces FAMOU, a code-evolution framework for adversarial multi-agent games with three co-evolutionary mechanisms (evaluator co-evolution, hierarchical deep evaluation, weakness pressure). Won 1st in hardware and 3rd in simulation at the AAMAS 2026 MCTF Competition, achieving 0.526 combined score and 61.7% win rate on unseen opponents."
  },

  // ---- 2025 ----
  {
    year: 2025,
    title: "Mitigating Traffic Oscillations through Connected and Automated Vehicle Control: A Platoon-Level Cooperative Adaptive Cruise Control Strategy",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:ufrVoPGSRksC",
    type: "Journal",
    venue: "Applied Mathematical Modelling",
    authors: ["Z Zhou", "C Wang", "H Ma", "Bocheng An", "L Li", "Y Zheng", "C Bao", "X Qu", "B Ran"],
    citations: 1,
    tags: ["trajectory", "control"],
    links: [
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:ufrVoPGSRksC" }
    ]
  },
  {
    year: 2025,
    title: "Goal-Based Neural Physics Vehicle Trajectory Prediction Model",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:W7OEmFMy1HYC",
    type: "Journal",
    venue: "Transportation Research Part C: Emerging Technologies",
    authors: ["R Gan", "H Shi", "P Li", "K Wu", "Bocheng An", "J You", "L Li", "J Ma", "C Ma", "B Ran"],
    citations: 18,
    tags: ["trajectory"],
    links: [
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:W7OEmFMy1HYC" }
    ]
  },
  {
    year: 2025,
    title: "A Unified Risk Metric for Freeway Vehicles Based on the Spatio-Temporal Overlap Probability of Predicted Positions",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:u-x6o8ySG0sC",
    type: "Journal",
    venue: "Accident Analysis & Prevention",
    authors: ["Chuang Cui", "Bocheng An", "Linheng Li", "Xu Qu", "W Li"],
    citations: 2,
    tags: ["risk"],
    links: [
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:u-x6o8ySG0sC" }
    ]
  },
  {
    year: 2025,
    title: "Planning Safety Trajectories with Dual-Phase, Physics-Informed, and Transportation Knowledge-Driven Large Language Model",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:IjCSPb-OGe4C",
    type: "Preprint",
    venue: "arXiv:2504.04562",
    authors: ["R Gan", "P Li", "K Long", "Bocheng An", "J You", "K Wu", "B Ran"],
    citations: 2,
    tags: ["llm", "trajectory"],
    links: [
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:IjCSPb-OGe4C" },
      { label: "arXiv ↗", url: "https://arxiv.org/abs/2504.04562" }
    ]
  },
  {
    year: 2025,
    title: "Microscopic Vehicle Motion Control System for Autonomous Driving",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:WF5omc3nYNoC",
    type: "US Patent",
    venue: "US Patent App. 19/233,577",
    authors: ["B Ran", "Z Wang", "Q Yang", "Bocheng An", "B Liang", "R Guo", "Z Zhou", "M Li", "K Wu et al."],
    citations: null,
    tags: ["patent"],
    links: [
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:WF5omc3nYNoC" }
    ]
  },
  {
    year: 2025,
    title: "Roadside Edge Computing System for Autonomous Vehicles",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:u5HHmVD_uO8C",
    type: "US Patent",
    venue: "US Patent 12,333,932",
    authors: ["B Ran", "Bocheng An", "Z Zhou", "M Li", "K Wu", "Y Cheng", "Y Yao", "H Shi", "T Chen", "S Li et al."],
    citations: null,
    tags: ["patent"],
    links: [
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:u5HHmVD_uO8C" }
    ]
  },

  // ---- 2024 ----
  {
    year: 2024,
    title: "Vehicular Speed Prediction Method for Highway Scenarios Based on Spatio-Temporal Graph Convolutional Networks and Potential Field Theory",
    url: "https://dx.doi.org/10.1109/JIOT.2024.3479221",
    type: "Journal",
    venue: "IEEE Internet of Things Journal",
    impact: "IF = 8.2, Q1",
    authors: ["Linheng Li", "Bocheng An", "Dapeng Zhang", "Rui Gan", "Zhi Zhou", "Xu Qu", "Bin Ran"],
    citations: 4,
    tags: ["trajectory", "graph", "potential-field"],
    links: [
      { label: "IEEE Xplore ↗", url: "https://dx.doi.org/10.1109/JIOT.2024.3479221" },
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:UeHWp8X0CEIC" }
    ],
    abstract: "Proposes the Dynamic Edge Graph Convolutional Network (DEGCN) for microscopic vehicular speed prediction using a vehicle generalized-dynamic graph with potential field theory. Outperforms baselines on three real-world datasets."
  },
  {
    year: 2024,
    title: "A Freeway Vehicle Early Warning Method Based on Risk Map: Enhancing Traffic Safety Through Global Perspective Characterization of Driving Risk",
    url: "https://dx.doi.org/10.1016/j.aap.2024.107611",
    type: "Journal",
    venue: "Accident Analysis & Prevention",
    impact: "IF = 5.7, Q1",
    authors: ["Chuang Cui", "Bocheng An", "Linheng Li", "Xu Qu", "Huhe Manda", "Bin Ran"],
    citations: 13,
    tags: ["risk"],
    links: [
      { label: "Elsevier ↗", url: "https://dx.doi.org/10.1016/j.aap.2024.107611" },
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:9yKSN-GCB0IC" }
    ],
    abstract: "Proposes a freeway vehicle early warning method based on risk map using Modified Time-to-Collision (MTTC). Warning time reduced by 29.6% and 73.3% of vehicles change lanes away from the accident vehicle."
  },
  {
    year: 2024,
    title: "A Freeway Traffic Flow Prediction Model Based on a Generalized Dynamic Spatio-Temporal Graph Convolutional Network",
    url: "https://dx.doi.org/10.1109/TITS.2024.3396382",
    type: "Journal",
    venue: "IEEE Trans. Intelligent Transportation Systems",
    impact: "IF = 7.9, Q1",
    authors: ["Rui Gan", "Bocheng An", "Linheng Li", "Xu Qu", "Bin Ran"],
    citations: 21,
    tags: ["traffic-flow", "graph"],
    links: [
      { label: "IEEE Xplore ↗", url: "https://dx.doi.org/10.1109/TITS.2024.3396382" },
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:qjMakFHDy7sC" }
    ],
    abstract: "Introduces the Generalized Dynamic Spatio-Temporal Graph Convolutional Network (GDSTGCN) with a learning-based generalized dynamic graph structure that evolves with real-time traffic data. Outperforms state-of-the-art models on four datasets."
  },
  {
    year: 2024,
    title: "Stability Analysis and Numerical Simulation of a Car-Following Model Considering Safety Potential Field and V2X Communication",
    url: "https://dx.doi.org/10.1016/j.physa.2024.129706",
    type: "Journal",
    venue: "Physica A: Statistical Mechanics and its Applications",
    impact: "IF = 2.8, Q2",
    authors: ["Linheng Li", "Bocheng An", "Zhiyu Wang", "Jing Gan", "Xu Qu", "Bin Ran"],
    citations: 17,
    tags: ["car-following", "potential-field"],
    links: [
      { label: "Elsevier ↗", url: "https://dx.doi.org/10.1016/j.physa.2024.129706" },
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:Y0pCki6q_DkC" }
    ],
    abstract: "Develops an improved car-following model under V2X environment. The field-based model outperforms the distance-based model. Stability improves as the number of leading vehicles increases."
  },

  // ---- 2023 ----
  {
    year: 2023,
    title: "Anisotropy Safety Potential Field Model under Intelligent and Connected Vehicle Environment and Its Application in Car-Following Modeling",
    url: "https://dx.doi.org/10.26599/JICV.2023.9210006",
    type: "Journal",
    venue: "Journal of Intelligent and Connected Vehicles",
    authors: ["Haozhan Ma", "Bocheng An", "Linheng Li", "Zhi Zhou", "Xu Qu", "Bin Ran"],
    citations: 24,
    tags: ["potential-field", "car-following"],
    links: [
      { label: "Publisher ↗", url: "https://dx.doi.org/10.26599/JICV.2023.9210006" },
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:YsMSGLbcyi4C" }
    ],
    abstract: "Proposes an anisotropic potential field model considering vehicle impact variability in different directions, introducing equivalent distances, co-virtual forces, target forces and lane resistance."
  },
  {
    year: 2023,
    title: "Cooperative Control Strategy of Variable Speed Limit and Lane Change Guidance in Freeway Bottleneck Area",
    url: "https://dx.doi.org/10.1061/9780784484869.128",
    type: "Conference",
    venue: "CICTP 2023",
    authors: ["Chuang Cui", "Bocheng An", "Xu Qu"],
    citations: null,
    tags: ["control"],
    links: [
      { label: "Publisher ↗", url: "https://dx.doi.org/10.1061/9780784484869.128" },
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:d1gkVwhDpl0C" }
    ],
    abstract: "Proposes a cooperative control strategy combining variable speed limit (VSL) and lane change guidance (LCG) for freeway bottleneck areas using model predictive control (MPC)."
  },
  {
    year: 2023,
    title: "Mass-Based Omni-Directional Risk Indicator (MORI) for Multi-Participant Traffic",
    url: "https://dx.doi.org/10.1049/itr2.12405",
    type: "Journal",
    venue: "IET Intelligent Transport Systems",
    impact: "IF = 2.3, Q2",
    authors: ["Haozhan Ma", "Linheng Li", "Bocheng An", "Ziwei Yi", "Xu Qu", "Bin Ran"],
    citations: 8,
    tags: ["risk"],
    links: [
      { label: "Wiley ↗", url: "https://dx.doi.org/10.1049/itr2.12405" },
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:2osOgNQ5qMEC" }
    ],
    abstract: "Introduces the concept of \"risk pair\" and develops an omnidirectional risk indicator (ORI), with mass-based superposition (MORI) for two-dimensional complex traffic scenarios."
  },

  // ---- 2022 ----
  {
    year: 2022,
    title: "A Cooperative Lane-Changing Approach Considering the Motion Similarity between Vehicles",
    url: "https://dx.doi.org/10.1061/9780784484265.137",
    type: "Conference",
    venue: "CICTP 2022",
    authors: ["Bocheng An", "Xu Qu"],
    citations: null,
    tags: ["trajectory"],
    links: [
      { label: "Publisher ↗", url: "https://dx.doi.org/10.1061/9780784484265.137" },
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:zYLM7Y9cAGgC" }
    ],
    abstract: "Proposes a cooperative lane-changing approach using motion similarity between vehicles under connected and automated vehicle environment, improving IDM and MOBIL models."
  },
  {
    year: 2022,
    title: "Prediction of Traffic Swarm Movement Situation Based on Generalized Spatio-Temporal Graph Convolution Network",
    url: "https://dx.doi.org/10.19818/j.cnki.1671-1637.2022.03.006",
    type: "Journal",
    venue: "交通运输工程学报",
    authors: ["Xu Qu", "Rui Gan", "Bocheng An", "Linheng Li", "Zhijun Chen", "Bin Ran"],
    citations: null,
    tags: ["traffic-flow", "graph"],
    links: [
      { label: "Publisher ↗", url: "https://dx.doi.org/10.19818/j.cnki.1671-1637.2022.03.006" },
      { label: "Scholar ↗", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=BPZAsM0AAAAJ&citation_for_view=BPZAsM0AAAAJ:Tyk-4Ss8FVUC" }
    ],
    abstract: "Proposes the GSTGCN model for traffic speed prediction, reducing RMSE by 22.79%, MAE by 22.97%, and MAPE by 16.73% compared to ARIMA, with training time 75.71% shorter than LSTM."
  }
];
