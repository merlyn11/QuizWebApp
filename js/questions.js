// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: 'What does HTML stand for?',
    answer: 'Hyper Text Markup Language',
    options: [
      'Hyper Text Preprocessor',
      'Hyper Text Markup Language',
      'Hyper Text Multiple Language',
      'Hyper Tool Multi Language',
    ],
  },
  {
    numb: 2,
    question: 'What does CSS stand for?',
    answer: 'Cascading Style Sheet',
    options: [
      'Common Style Sheet',
      'Colorful Style Sheet',
      'Computer Style Sheet',
      'Cascading Style Sheet',
    ],
  },
  {
    numb: 3,
    question: 'What does PHP stand for?',
    answer: 'Hypertext Preprocessor',
    options: [
      'Hypertext Preprocessor',
      'Hypertext Programming',
      'Hypertext Preprogramming',
      'Hometext Preprocessor',
    ],
  },
  {
    numb: 4,
    question: 'What does SQL stand for?',
    answer: 'Structured Query Language',
    options: [
      'Stylish Question Language',
      'Stylesheet Query Language',
      'Statement Question Language',
      'Structured Query Language',
    ],
  },
  {
    numb: 5,
    question: 'What does XML stand for?',
    answer: 'eXtensible Markup Language',
    options: [
      'eXtensible Markup Language',
      'eXecutable Multiple Language',
      'eXTra Multi-Program Language',
      'eXamine Multiple Language',
    ],
  },
]

let grade10 = [
  {
    numb: 1,
    question: '---------- is a spreadsheet programme?',
    answer: 0,
    options: ['MS Excel', 'MS Word', 'MS Dos', 'MS Powerpoint'],
  },
  {
    numb: 2,
    question: 'The use of tenchnology to enhance learning process is called --------?',
    answer: 1,
    options: ['IT', 'ICT ', 'Information technology', 'Communication technology'],
  },
  {
    numb: 3,
    question: 'The website address of UGC is?',
    answer: 3,
    options: ['WWW.Ugc.com', 'WWW.Ugc.Org', 'WWW.Ugc.in', 'WWW.Ugc.ac.in'],
  },
  {
    numb: 4,
    question: '"Command/Control A" is the keyboard shortcut for?',
    answer: 1,
    options: ['Add Layer', 'Select All', 'All Caps', 'Align Right'],
  },
  {
    numb: 5,
    question: 'Website is a collection of?',
    answer: 3,
    options: ['Audio files', 'Image files', 'Video files', 'HTML files'],
  },
  {
    numb: 6,
    question: '"Shift" is the keyboard shortcut for?',
    answer: 2,
    options: ['Scale', 'Select All', 'Add to a selection', 'Zoom Tool'],
  },
  {
    numb: 7,
    question: 'What does HTML stand for?',
    answer: 1,
    options: [
      'Hyper Text Preprocessor',
      'Hyper Text Markup Language',
      'Hyper Text Multiple Language',
      'Hyper Tool Multi Language',
    ],
  },
  {
    numb: 8,
    question: '"Command/Control Shift C" is the keyboard shortcut for?',
    answer: 0,
    options: ['Align Center', 'Align Right', 'Align Left', 'All Caps'],
  },
  {
    numb: 9,
    question: '"Command/Control Shift L" is the keyboard shortcut for?',
    answer: 2,
    options: ['Align Center', 'Align Right', 'Align Left', 'All Caps'],
  },
  {
    numb: 10,
    question: '"Command/Control Shift R" is the keyboard shortcut for?',
    answer: 1,
    options: ['Align Center', 'Align Right', 'Align Left', 'All Caps'],
  },
  //   you can uncomment the below codes and make duplicate as more as you want to add question
  //   but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //     {
  //     numb: 11,
  //     question: "Your Question is Here",
  //     answer: "Correct answer of the question is here",
  //     options: [
  //       "Option 1",
  //       "option 2",
  //       "option 3",
  //       "option 4"
  //     ]
  //   },
]

let grade7 = [
  {
    numb: 1,
    question: 'This tool softens and blurs hard edges of images.',
    answer: 0,
    options: ['Blur Tool', 'Crop Tool', 'Brush Tool', 'Eraser'],
  },
  {
    numb: 2,
    question: 'It is used for moving images.',
    answer: 2,
    options: ['Blur Tool', 'Zoom', 'Move Tool', 'Crop Tool'],
  },
  {
    numb: 3,
    question: 'It allows you to sample a color from any image.',
    answer: 1,
    options: ['Move Tool', 'Eyedropper Tool', 'Brush Tool', 'Lasso Tool'],
  },
  {
    numb: 4,
    question: 'It is used to crop images.',
    answer: 2,
    options: ['Brush Tool', 'Eraser Tool', 'Crop Tool', 'Lasso Tool'],
  },
  {
    numb: 5,
    question:
      'It is a tool that lets you draw a freeform selection outline around an object.',
    answer: 1,
    options: ['Zoom', 'Lasso Tool', 'Ruler Tool', 'Brush Tool'],
  },
  {
    numb: 6,
    question: 'It allows you to measure distances, locations, and angles.',
    answer: 0,
    options: ['Ruler Tool', 'Patch Tool', 'Blur Tool', 'Brush Tool'],
  },
  {
    numb: 7,
    question: 'It is a tool that permanently erases pixel on a layer.',
    answer: 3,
    options: ['Ruler Tool', 'Gradient Tool', 'Brush Tool', 'Eraser Tool'],
  },
  {
    numb: 8,
    question:
      'It allows you to draw extremely precise paths, vetor shapes or selection.',
    answer: 1,
    options: ['Brush Tool', 'Pen Tool', 'Zoom Tool', 'Hand Tool'],
  },
  {
    numb: 9,
    question:
      'It lets you click and drag an image around tha screen to view different areas when zoomed in',
    answer: 1,
    options: ['Zoom Tool', 'Hand Tool', 'Ruler Tool', 'Lasso Tool'],
  },
  {
    numb: 10,
    question: 'It is used to remove unwated image elements',
    answer: 1,
    options: ['Brush Tool', 'Patch Tool', 'Eraser Tool', 'Pen Tool'],
  },
  //   you can uncomment the below codes and make duplicate as more as you want to add question
  //   but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //     {
  //     numb: 11,
  //     question: "Your Question is Here",
  //     answer: "Correct answer of the question is here",
  //     options: [
  //       "Option 1",
  //       "option 2",
  //       "option 3",
  //       "option 4"
  //     ]
  //   },
]
