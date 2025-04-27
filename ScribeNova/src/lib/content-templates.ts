// import {
//   FaYoutube,
//   FaInstagram,
//   FaTiktok,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa";

// export const contentTemplates = [
//   {
//     name: "Youtube Video Description",
//     desc: "An AI tool that generate youtube video description from your information",
//     category: "Youtube",
//     icon: FaYoutube,
//     aiPrompt:
//       "Give me youtube video description Ideas based on given video description outline and title and give me result in Rich Text Editor format",
//     slug: "youtube-description",
//     form: [
//       {
//         label: "Youtube Video Description Title",
//         field: "input",
//         name: "niche",
//         required: true,
//       },
//       {
//         label: "Enter Video Description Outline",
//         field: "textarea",
//         name: "outline",
//       },
//     ],
//   },
//   {
//     name: "Youtube Video Idea",
//     desc: "An AI tool that generate Youtube Video Idea based on given information",
//     category: "Youtube",
//     icon: FaYoutube,
//     aiPrompt:
//       "Give me youtube video idea on given video niche & outline topic and give me result in Rich Text Editor format",
//     slug: "generate-youtube-video-idea",
//     form: [
//       {
//         label: "Enter your video niche",
//         field: "input",
//         name: "niche",
//         required: true,
//       },
//       {
//         label: "Enter video outline",
//         field: "textarea",
//         name: "outline",
//       },
//     ],
//   },
//   {
//     name: "Instagram Hashtags",
//     desc: "An AI tool that generate Instagram hashtags based on your post niche and outline information",
//     category: "Instagram",
//     icon: FaInstagram,
//     aiPrompt:
//       "Give me some good examples of instagram hashtags on given niche & outline topic and give me result in Rich Text Editor format",
//     slug: "generate-instagram-hashtags",
//     form: [
//       {
//         label: "Enter your post niche",
//         field: "input",
//         name: "niche",
//         required: true,
//       },
//       {
//         label: "Enter post outline",
//         field: "textarea",
//         name: "outline",
//       },
//     ],
//   },
//   {
//     name: "Tiktok Hashtags",
//     desc: "An AI tool that generate Tiktok topic idea based on your post niche and outline information",
//     category: "Tiktok",
//     icon: FaTiktok,
//     aiPrompt:
//       "Give me some good examples of instagram hashtags on given niche & outline topic and give me result in Rich Text Editor format",
//     slug: "generate-tiktok-hashtags",
//     form: [
//       {
//         label: "Enter your post niche",
//         field: "input",
//         name: "niche",
//         required: true,
//       },
//       {
//         label: "Enter post outline",
//         field: "textarea",
//         name: "outline",
//       },
//     ],
//   },
//   {
//     name: "Linkedin Post",
//     desc: "An AI tool that generate Linkedin Post idea based on your post niche and outline information",
//     category: "Linkedin",
//     icon: FaLinkedin,
//     aiPrompt:
//       "Give me some good examples of Linkedin Post idea on given niche & outline topic and give me result in Rich Text Editor format",
//     slug: "generate-likedin-post",
//     form: [
//       {
//         label: "Enter your post niche",
//         field: "input",
//         name: "niche",
//         required: true,
//       },
//       {
//         label: "Enter post outline",
//         field: "textarea",
//         name: "outline",
//       },
//     ],
//   },
//   {
//     name: "Tweet",
//     desc: "An AI tool that generate Linkedin Post idea based on your post niche and outline information",
//     category: "Tweet",
//     icon: FaTwitter,
//     aiPrompt:
//       "Give me 280 characters of tweet example on given niche & outline topic",
//     slug: "generate-tweet-post",
//     form: [
//       {
//         label: "Enter your tweet niche",
//         field: "input",
//         name: "niche",
//         required: true,
//       },
//       {
//         label: "Enter tweet outline",
//         field: "textarea",
//         name: "outline",
//       },
//     ],
//   },
// ];
import { icons } from "lucide-react";

export const contentTemplates = [
  // Blog Tools
  {
    name: 'Blog Title',
    desc: 'Generate compelling blog titles based on your niche and outline.',
    category: 'Blog',
    icon: '/blog.png',
    aiPrompt: 'Give me 5 blog topic ideas in bullet points based on the given niche and outline. Return the output in rich text editor format.',
    slug: 'generate-blog-title',
    form: [
      {
        label: 'Enter your blog niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter blog outline',
        field: 'textarea',
        name: 'outline',
      }
    ]
  },
  {
    name: 'Blog Content',
    desc: 'Generate complete blog content tailored to your niche and structure.',
    category: 'Blog',
    icon: '/content.png',
    aiPrompt: 'Generate blog content based on the given niche and outline. Return the output in rich text editor format.',
    slug: 'blog-content-generator',
    form: [
      {
        label: 'Enter your blog topic',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter blog outline',
        field: 'textarea',
        name: 'outline',
      }
    ]
  },
  {
    name: 'Blog Topic Ideas',
    desc: 'Instantly generate trending blog topic ideas based on your niche.',
    category: 'Blog',
    icon: '/idea.png',
    aiPrompt: 'Generate top 5 blog topic ideas in bullet point format based on the provided niche and outline. Return the output in rich text editor format.',
    slug: 'blog-topic-idea',
    form: [
      {
        label: 'Enter your niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter blog outline',
        field: 'textarea',
        name: 'outline',
      }
    ]
  },

  // YouTube Tools
  {
    name: 'YouTube SEO Title',
    desc: 'Generate 5 high-ranking, SEO-optimized titles for YouTube videos.',
    category: 'YouTube Tools',
    icon: '/web.png',
    aiPrompt: 'Generate the best SEO-optimized YouTube video titles (5 variations) based on the provided keyword and outline. Return the output in rich text editor format.',
    slug: 'youtube-seo-title',
    form: [
      {
        label: 'Enter your YouTube video topic/keyword',
        field: 'input',
        name: 'keyword',
        required: true,
      },
      {
        label: 'Enter YouTube description outline',
        field: 'textarea',
        name: 'outline',
      }
    ]
  },
  {
    name: 'YouTube Description',
    desc: 'Create engaging YouTube video descriptions with emojis in under 5 lines.',
    category: 'YouTube Tools',
    icon: '/yt-description.png',
    aiPrompt: 'Generate a concise YouTube description (under 4–5 lines) using emojis, based on the given topic and outline. Return the output in rich text editor format.',
    slug: 'youtube-description',
    form: [
      {
        label: 'Enter your YouTube topic/title',
        field: 'input',
        name: 'topic',
        required: true,
      },
      {
        label: 'Enter YouTube outline',
        field: 'textarea',
        name: 'outline',
      }
    ]
  },
  {
    name: 'YouTube Tags',
    desc: 'Generate 10 keyword-rich tags for your YouTube video content.',
    category: 'YouTube Tools',
    icon: '/yt-tags.png',
    aiPrompt: 'Generate 10 optimized YouTube tags in bullet point format based on the given title and outline.',
    slug: 'youtube-tags',
    form: [
      {
        label: 'Enter your YouTube video title',
        field: 'input',
        name: 'title',
        required: true,
      },
      {
        label: 'Enter video outline (optional)',
        field: 'textarea',
        name: 'outline',
      }
    ]
  },

  // New Tools
  {
    name: 'Rewrite Article (Plagiarism-Free)',
    desc: 'Rewrite any text to be unique and plagiarism-free with improved readability.',
    category: 'Writing Tools',
    icon: '/plagiarism.png',
    aiPrompt: 'Rewrite the given article to make it 100% plagiarism-free while preserving its core meaning. Return the output in rich text editor format.',
    slug: 'rewrite-article',
    form: [
      {
        label: 'Paste your original content here',
        field: 'textarea',
        name: 'originalText',
        required: true,
      }
    ]
  },
  {
    name: 'Text Improver',
    desc: 'Improve the tone, grammar, and style of any written content.',
    category: 'Writing Tools',
    icon: '/text.png',
    aiPrompt: 'Improve the grammar, flow, and professionalism of the following text. Return the output in rich text editor format.',
    slug: 'text-improver',
    form: [
      {
        label: 'Paste your text here',
        field: 'textarea',
        name: 'text',
        required: true,
      }
    ]
  },
  {
    name: 'Add Emojis to Text',
    desc: 'Make your message pop by auto-adding relevant emojis to any text.',
    category: 'Fun Tools',
    icon: '/emoji.png',
    aiPrompt: 'Add appropriate emojis to the following text to make it more engaging, keeping the original context. Return in rich text format.',
    slug: 'emoji-text-generator',
    form: [
      {
        label: 'Enter your text',
        field: 'textarea',
        name: 'text',
        required: true,
      }
    ]
  },
  {
    name: 'Instagram Post Generator',
    desc: 'Generate aesthetic Instagram captions with hashtags and emoji support.',
    category: 'Social Media Tools',
    icon: '/instagram.png',
    aiPrompt: 'Create a short, engaging Instagram post based on the given content idea, with hashtags and emojis. Return in rich text format.',
    slug: 'instagram-post-generator',
    form: [
      {
        label: 'Enter your post idea or theme',
        field: 'textarea',
        name: 'postIdea',
        required: true,
      }
    ]
  },
  {
    name: 'LinkedIn Caption Generator',
    desc: 'Craft a professional and engaging caption tailored for LinkedIn.',
    category: 'Social Media Tools',
    icon: '/linkedin.png',
    aiPrompt: 'Generate a professional LinkedIn post caption based on the given message or topic. Maintain a formal tone and avoid informal emojis. Return in rich text format.',
    slug: 'linkedin-caption-generator',
    form: [
      {
        label: 'Enter your message or idea',
        field: 'textarea',
        name: 'postIdea',
        required: true,
      }
    ]
  }
];

