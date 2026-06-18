export type BookCategory = 'Personal Growth' | 'Finance' | 'Psychology' | 'Business' | 'Health' | 'Philosophy';

export interface Session {
  id: string;
  title: string;
  duration: string;
  description: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  listeners: number;
  sessions: Session[];
  totalDuration: string;
  category: BookCategory;
  description: string;
  about: string;
  whoShouldListen: string[];
  whyListen: string[];
  keyTakeaways: string[];
  communityNotes: string[];
}

export const books: Book[] = [
  {
    id: '1',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e5906b245?w=400&h=600&fit=crop',
    rating: 4.9,
    listeners: 12847,
    sessions: [
      { id: '1-1', title: 'The Power of Tiny Gains', duration: '6 min', description: 'How small changes compound into remarkable results.' },
      { id: '1-2', title: 'The Four Laws of Behavior Change', duration: '7 min', description: 'A simple framework to build better habits.' },
      { id: '1-3', title: 'Make It Obvious', duration: '5 min', description: 'Design your environment for success.' },
      { id: '1-4', title: 'Make It Attractive', duration: '6 min', description: 'Use temptation bundling to your advantage.' },
      { id: '1-5', title: 'Make It Easy', duration: '4 min', description: 'Reduce friction for good habits.' },
      { id: '1-6', title: 'Make It Satisfying', duration: '4 min', description: 'The role of immediate rewards.' },
    ],
    totalDuration: '32 min',
    category: 'Personal Growth',
    description: 'Tiny changes, remarkable results.',
    about: 'Atomic Habits reveals the surprising science of small habits and how they can lead to remarkable results. James Clear presents a proven framework for improving every day through tiny changes.',
    whoShouldListen: [
      'Anyone looking to build new habits or break old ones',
      'Entrepreneurs seeking consistent growth',
      'People who feel stuck in their routines',
    ],
    whyListen: [
      'Learn the science behind habit formation',
      'Discover why motivation is overrated',
      'Understand how environment shapes behavior',
    ],
    keyTakeaways: [
      'Small 1% improvements compound into massive results over time',
      'Focus on systems, not goals',
      'Identity-based habits are more powerful than outcome-based habits',
    ],
    communityNotes: [
      'The chapter on habit stacking changed my morning routine completely.',
      'The 2-minute rule is deceptively simple but incredibly effective.',
    ],
  },
  {
    id: '2',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    cover: 'https://images.unsplash.com/photo-1554224155-6726b3ff935b?w=400&h=600&fit=crop',
    rating: 4.8,
    listeners: 9234,
    sessions: [
      { id: '2-1', title: 'No One\'s Crazy', duration: '6 min', description: 'Understanding different money experiences.' },
      { id: '2-2', title: 'Luck & Risk', duration: '5 min', description: 'The hidden forces behind success.' },
      { id: '2-3', title: 'Never Enough', duration: '6 min', description: 'The hardest financial skill.' },
      { id: '2-4', title: 'Confounding Compounding', duration: '5 min', description: 'The eighth wonder of the world.' },
      { id: '2-5', title: 'Getting Wealthy vs. Staying Wealthy', duration: '7 min', description: 'Two very different skills.' },
      { id: '2-6', title: 'Tails, You Win', duration: '5 min', description: 'The power of small outcomes.' },
      { id: '2-7', title: 'Freedom', duration: '6 min', description: 'The highest dividend money pays.' },
      { id: '2-8', title: 'Save Money', duration: '5 min', description: 'Building your safety net.' },
    ],
    totalDuration: '45 min',
    category: 'Finance',
    description: 'Timeless lessons on wealth, greed, and happiness.',
    about: 'The Psychology of Money explores the strange ways people think about money and teaches you how to make better sense of one of life\'s most important topics.',
    whoShouldListen: [
      'Anyone seeking financial wisdom',
      'Investors looking for timeless principles',
      'People building their wealth strategy',
    ],
    whyListen: [
      'Understand the emotional side of money',
      'Learn why intelligence doesn\'t guarantee financial success',
      'Discover the true meaning of wealth',
    ],
    keyTakeaways: [
      'Financial success is not hard science but soft skills',
      'Wealth is what you don\'t see',
      'Controlling your time is the highest dividend money pays',
    ],
    communityNotes: [
      'Finally understood why saving is more important than investing.',
      'The concept of "enough" was eye-opening.',
    ],
  },
  {
    id: '3',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    cover: 'https://images.unsplash.com/photo-1456512975857-32f6c406c8e6?w=400&h=600&fit=crop',
    rating: 4.9,
    listeners: 15623,
    sessions: [
      { id: '3-1', title: 'Two Systems', duration: '6 min', description: 'The characters of the story.' },
      { id: '3-2', title: 'Attention and Effort', duration: '5 min', description: 'How mental effort works.' },
      { id: '3-3', title: 'The Lazy Controller', duration: '6 min', description: 'Why we avoid mental work.' },
      { id: '3-4', title: 'The Associative Machine', duration: '5 min', description: 'How thoughts connect.' },
      { id: '3-5', title: 'Cognitive Ease', duration: '6 min', description: 'The comfort of familiarity.' },
      { id: '3-6', title: 'Norms, Surprises, and Causes', duration: '5 min', description: 'How we make sense.' },
      { id: '3-7', title: 'A Machine for Jumping to Conclusions', duration: '7 min', description: 'Quick judgments and biases.' },
      { id: '3-8', title: 'How Judgments Happen', duration: '6 min', description: 'The mechanics of assessment.' },
      { id: '3-9', title: 'Answering an Easier Question', duration: '6 min', description: 'Substitution heuristics.' },
      { id: '3-10', title: 'The Law of Small Numbers', duration: '6 min', description: 'Misunderstanding randomness.' },
    ],
    totalDuration: '58 min',
    category: 'Psychology',
    description: 'A groundbreaking tour of the mind.',
    about: 'Nobel laureate Daniel Kahneman takes us on a tour of the mind and explains the two systems that drive the way we think.',
    whoShouldListen: [
      'Decision makers seeking clarity',
      'Psychology enthusiasts',
      'Anyone who makes important choices',
    ],
    whyListen: [
      'Understand why you think the way you do',
      'Learn to recognize cognitive biases',
      'Make better decisions in all areas of life',
    ],
    keyTakeaways: [
      'Two systems drive our thinking: fast intuitive and slow deliberate',
      'Overconfidence is the most powerful bias',
      'We are blind to our blindness',
    ],
    communityNotes: [
      'Helped me understand my own decision-making patterns.',
      'The WYSIATI concept explained so many mistakes I\'ve made.',
    ],
  },
  {
    id: '4',
    title: 'Deep Work',
    author: 'Cal Newport',
    cover: 'https://images.unsplash.com/photo-1499750398443-b4abd6634e8e?w=400&h=600&fit=crop',
    rating: 4.7,
    listeners: 8456,
    sessions: [
      { id: '4-1', title: 'Deep Work Defined', duration: '6 min', description: 'What it means and why it matters.' },
      { id: '4-2', title: 'Deep Work is Rare', duration: '5 min', description: 'The current state of knowledge work.' },
      { id: '4-3', title: 'Deep Work is Meaningful', duration: '6 min', description: 'Finding purpose in craft.' },
      { id: '4-4', title: 'The Four Rules', duration: '5 min', description: 'A framework for intentional work.' },
      { id: '4-5', title: 'Embrace Boredom', duration: '6 min', description: 'Training your concentration.' },
    ],
    totalDuration: '28 min',
    category: 'Business',
    description: 'Rules for focused success in a distracted world.',
    about: 'Deep Work presents a rigorous approach to professional success in a distracted world. Cal Newport shows how to cultivate the ability to focus deeply on demanding tasks.',
    whoShouldListen: [
      'Knowledge workers in any field',
      'Students and researchers',
      'Anyone feeling constantly distracted',
    ],
    whyListen: [
      'Learn why focus is a superpower in the modern economy',
      'Discover practical strategies to eliminate distraction',
      'Understand the cost of shallow work',
    ],
    keyTakeaways: [
      'Deep work is increasingly rare and increasingly valuable',
      'The ability to focus is trainable like a muscle',
      'Embracing boredom strengthens concentration',
    ],
    communityNotes: [
      'My productivity increased dramatically after applying these principles.',
      'The monastery approach resonated with my work style.',
    ],
  },
  {
    id: '5',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    cover: 'https://images.unsplash.com/photo-1507003211169-0a81dd7a8f5b?w=400&h=600&fit=crop',
    rating: 4.9,
    listeners: 11023,
    sessions: [
      { id: '5-1', title: 'Book One', duration: '6 min', description: 'Debts and lessons learned.' },
      { id: '5-2', title: 'Book Two', duration: '6 min', description: 'On the river of time.' },
      { id: '5-3', title: 'Book Three', duration: '6 min', description: 'The inner citadel.' },
      { id: '5-4', title: 'Book Four', duration: '6 min', description: 'The present moment.' },
      { id: '5-5', title: 'Book Five', duration: '6 min', description: 'The cosmic view.' },
      { id: '5-6', title: 'Book Six', duration: '6 min', description: 'The governing self.' },
      { id: '5-7', title: 'Book Seven', duration: '6 min', description: 'Your ruling mind.' },
      { id: '5-8', title: 'Book Eight', duration: '6 min', description: 'Internal peace.' },
      { id: '5-9', title: 'Book Nine', duration: '6 min', description: 'Living in harmony.' },
      { id: '5-10', title: 'Book Ten', duration: '6 min', description: 'The whole is complete.' },
      { id: '5-11', title: 'Book Eleven', duration: '6 min', description: 'The craftsman of your life.' },
      { id: '5-12', title: 'Book Twelve', duration: '6 min', description: 'The end of the journey.' },
    ],
    totalDuration: '72 min',
    category: 'Philosophy',
    description: 'Ancient wisdom for modern challenges.',
    about: 'Meditations is a collection of personal writings by Marcus Aurelius, the Roman Emperor. These timeless reflections on life, death, and duty remain profoundly relevant today.',
    whoShouldListen: [
      'Philosophy enthusiasts',
      'Leaders seeking wisdom',
      'Anyone facing life challenges',
    ],
    whyListen: [
      'Learn stoicism from the original source',
      'Discover timeless strategies for resilience',
      'Find peace in turbulent times',
    ],
    keyTakeaways: [
      'You have power over your mind, not outside events',
      'The obstacle is the way',
      'Live each day as if it were your last',
    ],
    communityNotes: [
      'The perspective on mortality changed how I live.',
      'This book saved me during a difficult period.',
    ],
  },
  {
    id: '6',
    title: 'The 5 AM Club',
    author: 'Robin Sharma',
    cover: 'https://images.unsplash.com/photo-1506905925346-21b31eb810f2?w=400&h=600&fit=crop',
    rating: 4.6,
    listeners: 7891,
    sessions: [
      { id: '6-1', title: 'The Spellbinding Tale', duration: '6 min', description: 'A meeting with a tycoon.' },
      { id: '6-2', title: 'A Daily Architecture', duration: '5 min', description: 'The 20/20/20 formula.' },
      { id: '6-3', title: 'The Virtuous Cycle', duration: '6 min', description: 'Building momentum.' },
      { id: '6-4', title: 'The 5 AM Method', duration: '5 min', description: 'The exact routine.' },
      { id: '6-5', title: 'Twin Benefits', duration: '6 min', description: 'Mind and body.' },
      { id: '6-6', title: 'The 6 Thieves', duration: '6 min', description: 'What destroys potential.' },
      { id: '6-7', title: 'The Victory Ritual', duration: '4 min', description: 'Your evening matters.' },
    ],
    totalDuration: '38 min',
    category: 'Personal Growth',
    description: 'Own your morning, elevate your life.',
    about: 'The 5 AM Club shows how early rising can transform your life. Through an inspiring story, it delivers a practical framework for maximizing your productivity.',
    whoShouldListen: [
      'Anyone wanting to wake up earlier',
      'Productivity seekers',
      'People starting a new chapter in life',
    ],
    whyListen: [
      'Learn the science behind morning routines',
      'Discover the 20/20/20 formula',
      'Understand peak performance habits',
    ],
    keyTakeaways: [
      'The first hour of your day sets the tone',
      'Greatness requires solitude and stillness',
      'Small daily improvements lead to stunning results',
    ],
    communityNotes: [
      'Finally became a morning person after years of trying.',
      'The story makes the lessons memorable.',
    ],
  },
  {
    id: '7',
    title: 'Why We Sleep',
    author: 'Matthew Walker',
    cover: 'https://images.unsplash.com/photo-1541781774-7c16d51f6e2f?w=400&h=600&fit=crop',
    rating: 4.8,
    listeners: 10342,
    sessions: [
      { id: '7-1', title: 'The Golden Key', duration: '6 min', description: 'What sleep really is.' },
      { id: '7-2', title: 'Caffeine, Jet Lag, and Melatonin', duration: '6 min', description: 'Sleep\'s enemies.' },
      { id: '7-3', title: 'Sleep Cycles', duration: '6 min', description: 'The architecture of rest.' },
      { id: '7-4', title: 'Sleep as a Lifeline', duration: '6 min', description: 'Why it matters more.' },
      { id: '7-5', title: 'Your Sleep Declined', duration: '5 min', description: 'The modern crisis.' },
      { id: '7-6', title: 'The Alzheimer\'s Link', duration: '6 min', description: 'Deep cleaning the brain.' },
      { id: '7-7', title: 'REM Sleep', duration: '5 min', description: 'Emotional first aid.' },
      { id: '7-8', title: 'Dreams and Creativity', duration: '6 min', description: 'Nighttime magic.' },
      { id: '7-9', title: 'Sleep Tips', duration: '6 min', description: 'Practical solutions.' },
    ],
    totalDuration: '52 min',
    category: 'Health',
    description: 'Unlocking the power of sleep and dreams.',
    about: 'Why We Sleep explores the science of slumber, revealing how sleep affects every aspect of our health and how we can harness its power.',
    whoShouldListen: [
      'Anyone who sleeps (everyone)',
      'People with sleep struggles',
      'Health-conscious individuals',
    ],
    whyListen: [
      'Understand why sleep is the foundation of health',
      'Learn practical tips for better rest',
      'Discover the consequences of sleep deprivation',
    ],
    keyTakeaways: [
      'Sleep is the single most effective life enhancer',
      '8 hours is not a myth - it\'s biology',
      'Sleep quality affects every aspect of your life',
    ],
    communityNotes: [
      'Changed my relationship with sleep completely.',
      'I prioritize sleep like never before now.',
    ],
  },
  {
    id: '8',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    cover: 'https://images.unsplash.com/photo-1507003211169-0a81dd7a8f5b?w=400&h=600&fit=crop',
    rating: 4.9,
    listeners: 18945,
    sessions: [
      { id: '8-1', title: 'The Cognitive Revolution', duration: '6 min', description: 'How we began.' },
      { id: '8-2', title: 'The Tree of Knowledge', duration: '6 min', description: 'Language\'s power.' },
      { id: '8-3', title: 'A Day in the Life', duration: '6 min', description: 'Ancient communities.' },
      { id: '8-4', title: 'The Flood', duration: '6 min', description: 'Our expansion.' },
      { id: '8-5', title: 'History\'s Biggest Fraud', duration: '6 min', description: 'The agricultural trap.' },
      { id: '8-6', title: 'Building Pyramids', duration: '6 min', description: 'Creating order.' },
      { id: '8-7', title: 'Memory Overload', duration: '6 min', description: 'Managing information.' },
      { id: '8-8', title: 'The Scientific Revolution', duration: '6 min', description: 'How we learned.' },
      { id: '8-9', title: 'The Marriage of Science and Empire', duration: '6 min', description: 'Conquest and knowledge.' },
      { id: '8-10', title: 'The Capitalist Creed', duration: '6 min', description: 'Money\'s influence.' },
      { id: '8-11', title: 'The Industrial Revolution', duration: '6 min', description: 'Transforming energy.' },
      { id: '8-12', title: 'And They Lived Happily Ever After', duration: '6 min', description: 'Are we happier?' },
      { id: '8-13', title: 'The End of Homo Sapiens', duration: '6 min', description: 'What\'s next.' },
      { id: '8-14', title: 'Into the Future', duration: '7 min', description: 'The new species.' },
    ],
    totalDuration: '85 min',
    category: 'Philosophy',
    description: 'A brief history of humankind.',
    about: 'Sapiens explores the ways in which biology and history have defined us and shaped our understanding of what it means to be human.',
    whoShouldListen: [
      'History enthusiasts',
      'Curious minds seeking perspective',
      'Anyone asking the big questions',
    ],
    whyListen: [
      'Understand where we came from',
      'Question assumptions about society',
      'Gain perspective on modern life',
    ],
    keyTakeaways: [
      'Humans dominate because we can cooperate in large numbers',
      'Our success comes from shared myths and beliefs',
      'Many aspects of modern life are arbitrary human inventions',
    ],
    communityNotes: [
      'Changed how I see the entire human project.',
      'The most perspective-shifting book I\'ve experienced.',
    ],
  },
  {
    id: '9',
    title: 'The Lean Startup',
    author: 'Eric Ries',
    cover: 'https://images.unsplash.com/photo-1553729452-74d892f4e85c?w=400&h=600&fit=crop',
    rating: 4.7,
    listeners: 9123,
    sessions: [
      { id: '9-1', title: 'The Lean Startup Method', duration: '6 min', description: 'A new approach.' },
      { id: '9-2', title: 'Define', duration: '5 min', description: 'Starting with hypotheses.' },
      { id: '9-3', title: 'Learn', duration: '6 min', description: 'Validated learning.' },
      { id: '9-4', title: 'Build', duration: '6 min', description: 'Minimum viable product.' },
      { id: '9-5', title: 'Measure', duration: '6 min', description: 'Innovation accounting.' },
      { id: '9-6', title: 'Pivot or Persevere', duration: '6 min', description: 'Making the call.' },
      { id: '9-7', title: 'Batch', duration: '5 min', description: 'Small batches mean fast feedback.' },
      { id: '9-8', title: 'Grow', duration: '4 min', description: 'Sustainable growth engines.' },
    ],
    totalDuration: '44 min',
    category: 'Business',
    description: 'How constant innovation creates radically successful businesses.',
    about: 'The Lean Startup provides a scientific approach to creating and managing startups and how to get a desired product into customers\' hands faster.',
    whoShouldListen: [
      'Entrepreneurs and founders',
      'Product managers',
      'Anyone building something new',
    ],
    whyListen: [
      'Learn to test your ideas quickly',
      'Minimize waste in your venture',
      'Build what customers actually want',
    ],
    keyTakeaways: [
      'Build-measure-learn is the fundamental feedback loop',
      'Validated learning is the unit of progress',
      'Entrepreneurship is management under extreme uncertainty',
    ],
    communityNotes: [
      'Saved my startup from building the wrong product.',
      'The MVP concept changed how I approach everything.',
    ],
  },
  {
    id: '10',
    title: 'Man\'s Search for Meaning',
    author: 'Viktor Frankl',
    cover: 'https://images.unsplash.com/photo-1508737027454-e6454ab8e490?w=400&h=600&fit=crop',
    rating: 5.0,
    listeners: 14567,
    sessions: [
      { id: '10-1', title: 'Experiences in a Concentration Camp', duration: '6 min', description: 'The first part of survival.' },
      { id: '10-2', title: 'The Psychology of Camp Life', duration: '6 min', description: 'How prisoners coped.' },
      { id: '10-3', title: 'The Meaning of Suffering', duration: '6 min', description: 'Finding purpose in pain.' },
      { id: '10-4', title: 'Logotherapy in a Nutshell', duration: '6 min', description: 'A theory of meaning.' },
      { id: '10-5', title: 'The Will to Meaning', duration: '6 min', description: 'Our deepest drive.' },
      { id: '10-6', title: 'Life\'s Meaning', duration: '6 min', description: 'Discovering your purpose.' },
    ],
    totalDuration: '36 min',
    category: 'Psychology',
    description: 'Finding hope in the darkest places.',
    about: 'Viktor Frankl, a Holocaust survivor, shares his experiences and profound insights about finding meaning in all forms of existence, even the most brutal ones.',
    whoShouldListen: [
      'Anyone seeking meaning in life',
      'People going through difficult times',
      'Those who question life\'s purpose',
    ],
    whyListen: [
      'Gain perspective on suffering',
      'Discover the power of meaning',
      'Find strength in adversity',
    ],
    keyTakeaways: [
      'Those who have a why to live can bear almost any how',
      'Everything can be taken except one\'s attitude',
      'Meaning must be found, it cannot be given',
    ],
    communityNotes: [
      'This book got me through the hardest year of my life.',
      'A reminder that we choose our response in any situation.',
    ],
  },
  {
    id: '11',
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    cover: 'https://images.unsplash.com/photo-1579621970563-0be1e6e95d79?w=400&h=600&fit=crop',
    rating: 4.8,
    listeners: 12345,
    sessions: [
      { id: '11-1', title: 'Two Dads, Two Views', duration: '6 min', description: 'Growing up with contrasts.' },
      { id: '11-2', title: 'The Rich Don\'t Work for Money', duration: '6 min', description: 'A different mindset.' },
      { id: '11-3', title: 'Why Teach Financial Literacy', duration: '6 min', description: 'The missing subject.' },
      { id: '11-4', title: 'Mind Your Own Business', duration: '6 min', description: 'Focus on assets.' },
      { id: '11-5', title: 'The History of Taxes', duration: '5 min', description: 'How the rich pay less.' },
      { id: '11-6', title: 'The Rich Invent Money', duration: '6 min', description: 'Creating wealth.' },
      { id: '11-7', title: 'Work to Learn', duration: '6 min', description: 'Skills over salary.' },
    ],
    totalDuration: '41 min',
    category: 'Finance',
    description: 'What the rich teach their kids about money.',
    about: 'Rich Dad Poor Dad is the story of Robert Kiyosaki and his two dads - his real father and the father of his best friend - and the ways in which both men shaped his thoughts about money and investing.',
    whoShouldListen: [
      'Anyone starting their financial journey',
      'People wanting to understand money better',
      'Those seeking financial independence',
    ],
    whyListen: [
      'Learn the difference between assets and liabilities',
      'Understand why the rich get richer',
      'Discover a new mindset about money',
    ],
    keyTakeaways: [
      'The rich buy assets, the poor buy expenses',
      'Financial literacy is freedom',
      'Don\'t work for money, make money work for you',
    ],
    communityNotes: [
      'Simple concepts that school never taught me.',
      'Changed how I view my career and side projects.',
    ],
  },
  {
    id: '12',
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    cover: 'https://images.unsplash.com/photo-1518531933037-91b2f5fcbd96?w=400&h=600&fit=crop',
    rating: 4.9,
    listeners: 13456,
    sessions: [
      { id: '12-1', title: 'You Are Not Your Mind', duration: '6 min', description: 'The beginning of freedom.' },
      { id: '12-2', title: 'Consciousness: The Way Out of Pain', duration: '6 min', description: 'Ending suffering.' },
      { id: '12-3', title: 'Moving Deeply into the Now', duration: '6 min', description: 'Dissolving the past.' },
      { id: '12-4', title: 'Mind Strategies for Avoiding the Now', duration: '6 min', description: 'How resistance works.' },
      { id: '12-5', title: 'Mind Strategies for Avoiding the Now', duration: '6 min', description: 'Breaking patterns.' },
      { id: '12-6', title: 'The State of Presence', duration: '6 min', description: 'Accessing awareness.' },
      { id: '12-7', title: 'The Inner Body', duration: '6 min', description: 'Anchoring in the now.' },
      { id: '12-8', title: 'The Portals into the Unmanifested', duration: '6 min', description: 'Gateways to presence.' },
      { id: '12-9', title: 'Enlightened Relationships', duration: '6 min', description: 'Love without pain.' },
      { id: '12-10', title: 'Beyond Happiness and Unhappiness', duration: '6 min', description: 'Finding peace.' },
      { id: '12-11', title: 'The Meaning of Surrender', duration: '6 min', description: 'The ultimate practice.' },
    ],
    totalDuration: '66 min',
    category: 'Personal Growth',
    description: 'A guide to spiritual enlightenment.',
    about: 'The Power of Now explains the connection between negative thinking and emotional suffering and offers practical teachings for living a more fulfilling and peaceful life.',
    whoShouldListen: [
      'Spiritual seekers',
      'Anyone struggling with anxiety',
      'People wanting more peace of mind',
    ],
    whyListen: [
      'Learn to quiet the constant mind chatter',
      'Discover the power of present-moment awareness',
      'Find relief from psychological suffering',
    ],
    keyTakeaways: [
      'The present moment is all you ever have',
      'Pain is created by resistance to what is',
      'Ego is the voice in your head, not who you are',
    ],
    communityNotes: [
      'The most transformative book I\'ve ever experienced.',
      'Simple but life-changing insights.',
    ],
  },
];

export const todaysPick = books[0];
export const featuredBooks = books.slice(1, 5);
export const mostLovedBooks = books.filter((b) => b.rating >= 4.8).slice(0, 6);
export const recentlyAddedBooks = books.slice(6, 12);
export const continueReadingBooks = books.slice(0, 4);

export function getBookById(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}

export function getRelatedBooks(bookId: string, limit: number = 4): Book[] {
  const book = getBookById(bookId);
  if (!book) return [];
  return books.filter((b) => b.id !== bookId && b.category === book.category).slice(0, limit);
}

export function searchBooks(query: string): Book[] {
  const lowerQuery = query.toLowerCase();
  return books.filter(
    (b) =>
      b.title.toLowerCase().includes(lowerQuery) ||
      b.author.toLowerCase().includes(lowerQuery) ||
      b.category.toLowerCase().includes(lowerQuery)
  );
}
