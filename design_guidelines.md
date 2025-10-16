# VictoriaAI: Your Study Buddy - Design Guidelines

## Design Approach

**Reference-Based Approach** drawing inspiration from successful educational platforms (Duolingo, Khan Academy, Quizlet) combined with modern AI chat interfaces (ChatGPT, Claude). The design prioritizes approachability, engagement, and clarity for student users while maintaining educational professionalism.

**Core Principles:**
- Friendly and inviting, not intimidating
- Clear visual hierarchy for learning content
- Vibrant but purposeful color use
- Trustworthy and safe environment for students

---

## Color Palette

### Light Mode
- **Primary Brand**: 250 85% 55% (vibrant purple-blue, representing knowledge and technology)
- **Primary Hover/Active**: 250 85% 48%
- **Secondary Accent**: 160 75% 45% (teal-green, representing growth and success)
- **Background**: 240 20% 98% (soft off-white)
- **Surface/Cards**: 0 0% 100% (pure white)
- **Text Primary**: 240 20% 15% (dark navy, excellent readability)
- **Text Secondary**: 240 10% 45% (muted blue-gray)
- **Border/Divider**: 240 15% 90%
- **Success (correct answers)**: 145 65% 45%
- **Warning (hints)**: 40 90% 55%
- **Error (incorrect)**: 0 75% 55%

### Dark Mode
- **Primary Brand**: 250 75% 65%
- **Primary Hover/Active**: 250 75% 58%
- **Secondary Accent**: 160 65% 55%
- **Background**: 240 15% 8%
- **Surface/Cards**: 240 12% 12%
- **Text Primary**: 240 10% 95%
- **Text Secondary**: 240 8% 65%
- **Border/Divider**: 240 10% 18%

---

## Typography

**Font Families:**
- **Primary (Headings & UI)**: 'Poppins' (Google Fonts) - friendly, modern, geometric
- **Secondary (Body Text)**: 'Inter' (Google Fonts) - excellent readability for educational content
- **Code/Math**: 'JetBrains Mono' (Google Fonts) - for formulas and technical content

**Type Scale:**
- Hero Title: text-5xl md:text-6xl font-bold (Poppins)
- Section Headers: text-3xl md:text-4xl font-semibold
- Chat Messages: text-base leading-relaxed (Inter)
- Quiz Questions: text-xl md:text-2xl font-medium
- Button Text: text-sm md:text-base font-medium
- Helper Text: text-sm text-secondary

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 3, 4, 6, 8, 12, 16, 20, 24
- Component padding: p-4 md:p-6
- Section spacing: space-y-6 md:space-y-8
- Card margins: mb-4 md:mb-6
- Container max-width: max-w-4xl (chat area), max-w-6xl (quiz layout)

**Grid Structure:**
- Single column for chat interface (max-w-4xl centered)
- Two-column for quiz mode on desktop (question left, options right)
- Responsive breakpoints: mobile-first, md:768px, lg:1024px

---

## Component Library

### Navigation
- **Top Bar**: Sticky header with logo, "VictoriaAI" wordmark, mode toggle (Chat/Quiz), theme switcher
- **Logo**: Circular icon with graduation cap or lightbulb motif in primary brand color
- Height: h-16, backdrop-blur-lg with subtle shadow

### Chat Interface
- **Message Bubbles**:
  - User: bg-primary text-white, rounded-2xl rounded-br-md, max-w-[85%] ml-auto
  - AI: bg-surface border-2 border-border, rounded-2xl rounded-bl-md, max-w-[85%]
- **Input Area**: Fixed bottom bar with large textarea, send button with icon (Heroicons paper-airplane)
- **Conversation History**: Scrollable area with pb-32 for input clearance
- **Topic Pills**: Rounded-full badges for Science/Tech/Engineering/Math filtering

### Quiz Mode
- **Question Cards**: Elevated cards with shadow-lg, p-6 md:p-8, rounded-3xl
- **Answer Options**: Interactive buttons with hover lift effect, radio-style selection
  - Unselected: bg-surface border-2 border-border hover:border-primary
  - Selected: bg-primary/10 border-primary
  - Correct: bg-success/10 border-success with checkmark icon
  - Incorrect: bg-error/10 border-error with X icon
- **Progress Bar**: Top of quiz, gradient from primary to secondary, rounded-full, h-2

### Buttons & CTAs
- **Primary**: bg-primary text-white, rounded-full px-6 py-3, shadow-md hover:shadow-lg
- **Secondary**: bg-secondary text-white, same styling
- **Outline**: border-2 border-primary text-primary hover:bg-primary/5
- **Icon Buttons**: Circular, w-10 h-10, for quick actions (reset, settings)

### Cards & Containers
- **Info Cards**: bg-surface rounded-2xl p-6, subtle border, shadow-sm
- **Feature Highlights**: Grid of 3 cards (mobile stacks) with icons from Heroicons
- **Stats Display**: Inline badges showing quiz scores, streak counters

### Icons
- **Library**: Heroicons (via CDN)
- **Usage**: Sparkles for AI responses, academic-cap for education, chart-bar for progress, question-mark-circle for help

---

## Images

### Hero Section Image
**Large Hero Image**: Yes - use a vibrant, illustrated image showing diverse students studying with technology
- **Placement**: Full-width hero section at top of landing page
- **Description**: Cheerful illustration of students (diverse ages/ethnicities) using tablets/laptops with floating STEM icons (atoms, equations, gears, plants) around them in primary/secondary color scheme
- **Treatment**: Subtle gradient overlay from transparent to background color at bottom
- **Dimensions**: 16:9 aspect ratio, min-height: 400px on mobile, 500px on desktop

### Additional Images
- **Feature Icons**: Use illustrated icons (not photos) for Science/Tech/Engineering/Math topics
- **Quiz Success Animation**: Celebratory illustration when quiz completed (confetti, trophy)
- **Empty States**: Friendly robot/AI mascot illustration when no chat history

---

## Animations

**Minimal & Purposeful Only:**
- Message send: Smooth slide-up fade-in (200ms)
- Quiz answer selection: Gentle scale pulse (100ms)
- Success feedback: Confetti burst or checkmark bounce
- Page transitions: Simple fade (150ms)
- NO scroll animations, NO parallax, NO loading spinners beyond simple dots

---

## Accessibility & Responsive Behavior

- Maintain dark mode across all inputs, textareas, selects
- Focus states: 2px ring in primary color with offset
- Touch targets: Minimum 44x44px for mobile
- Chat input scales to 60% viewport height max on mobile
- Quiz cards stack vertically on mobile, side-by-side on md+
- Font sizes scale proportionally: base 16px mobile, 18px desktop

---

## Landing Page Sections (in order)

1. **Hero**: Large image, headline "Your Friendly AI Tutor for STEM", subheading, CTA "Start Learning Free"
2. **How It Works**: 3-column grid (Ask, Learn, Quiz) with icons and descriptions
3. **Subject Areas**: 4 cards for Science/Tech/Engineering/Math with example topics
4. **Features Showcase**: Chat interface preview + Quiz mode preview (2-column on desktop)
5. **Social Proof**: "Trusted by students worldwide" with usage stats
6. **Final CTA**: Bold section with gradient background, "Begin Your Learning Journey"
7. **Footer**: Links, social media, copyright - enriched with newsletter signup