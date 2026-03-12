# Planning Guide

A sophisticated neumorphic login form that provides a modern, tactile authentication experience with soft, elevated UI elements and smooth interactions.

**Experience Qualities**: 
1. **Tactile** - The interface should feel physical and touchable through soft shadows and depth
2. **Calm** - Muted colors and gentle transitions create a relaxing, focused experience
3. **Refined** - Polished micro-interactions and attention to detail throughout

**Complexity Level**: Micro Tool (single-purpose application) - This is a focused login interface with form validation, password visibility toggle, and social authentication options.

## Essential Features

### Email/Password Login
- **Functionality**: Users enter credentials with real-time validation
- **Purpose**: Primary authentication method with clear error feedback
- **Trigger**: User types into email and password fields
- **Progression**: Focus input → Type credentials → Validation feedback appears → Submit button enables → Loading state → Success message
- **Success criteria**: Valid email format required, password minimum length enforced, clear error messages shown

### Password Visibility Toggle
- **Functionality**: Toggle button switches between masked and visible password
- **Purpose**: Allows users to verify their password entry
- **Trigger**: Click eye icon button next to password field
- **Progression**: Click toggle → Icon animates → Password visibility changes → State persists while typing
- **Success criteria**: Smooth transition between states, clear visual feedback

### Remember Me Checkbox
- **Functionality**: Custom neumorphic checkbox stores user preference
- **Purpose**: Convenience feature for returning users
- **Trigger**: Click checkbox or label
- **Progression**: Click → Checkbox animates → State persists → Preference stored
- **Success criteria**: Preference saved to local storage, visual feedback on interaction

### Social Login Options
- **Functionality**: Alternative authentication via Google, GitHub, Twitter
- **Purpose**: Simplified login flow for users with existing accounts
- **Trigger**: Click social provider button
- **Progression**: Click button → Button press animation → Provider authentication flow
- **Success criteria**: Clear visual feedback on interaction, proper provider icons

### Form Validation
- **Functionality**: Real-time validation with inline error messages
- **Purpose**: Guide users to correct input before submission
- **Trigger**: Field blur or form submission attempt
- **Progression**: Invalid input detected → Error message appears below field → User corrects → Error clears
- **Success criteria**: Specific, helpful error messages; validation clears immediately on correction

## Edge Case Handling

- **Empty Fields** - Show specific error messages for each required field on submit attempt
- **Invalid Email Format** - Real-time validation with clear formatting guidance
- **Network Errors** - Display error toast notification if submission fails
- **Rapid Interactions** - Debounce validation to prevent performance issues
- **Keyboard Navigation** - Full tab order support with visible focus states

## Design Direction

The design should evoke a sense of premium tactility and modern sophistication. The neumorphic aesthetic creates depth through subtle shadows and highlights, making UI elements appear to float above or press into the surface. The experience should feel calm, focused, and meticulously crafted.

## Color Selection

A soft, monochromatic palette with cool undertones creates the classic neumorphic aesthetic with subtle accent colors for states.

- **Primary Color**: `oklch(0.68 0.15 252)` - Soft purple-blue for primary actions, communicates trust and professionalism
- **Secondary Colors**: `oklch(0.92 0.01 252)` - Light neutral base for the neumorphic surface, creates the soft elevated appearance
- **Accent Color**: `oklch(0.75 0.18 160)` - Fresh teal for success states and interactive highlights
- **Foreground/Background Pairings**: 
  - Background (Light Gray `oklch(0.94 0.005 252)`): Dark Text `oklch(0.35 0.02 252)` - Ratio 10.2:1 ✓
  - Primary (Soft Purple `oklch(0.68 0.15 252)`): White `oklch(1 0 0)` - Ratio 5.1:1 ✓
  - Accent (Teal `oklch(0.75 0.18 160)`): White `oklch(1 0 0)` - Ratio 6.8:1 ✓

## Font Selection

Typography should be geometric and modern with excellent readability, supporting the clean, contemporary neumorphic aesthetic.

- **Primary Font**: Space Grotesk - A distinctive geometric sans-serif with technical elegance
- **Typographic Hierarchy**: 
  - H2 (Welcome back): Space Grotesk Medium/32px/tight (-0.02em)
  - Body (Form labels): Space Grotesk Regular/14px/normal
  - Small (Helper text): Space Grotesk Regular/12px/wide (0.01em)
  - Button: Space Grotesk Medium/16px/normal

## Animations

Animations should enhance the physical, tactile feel of neumorphism with gentle depth transitions and subtle scale changes.

- **Button Press**: Scale down slightly (0.98) with shadow reduction to simulate pressing into surface
- **Input Focus**: Gentle glow effect with inner shadow deepening
- **Checkbox Toggle**: Smooth checkmark draw animation with elastic easing
- **Success State**: Card scale up with fade-in, circular progress indicator
- **Loading Spinner**: Smooth rotation with neumorphic depth

## Component Selection

- **Components**: Custom neumorphic inputs (no shadcn inputs), Button for social buttons, Card for main container structure
- **Customizations**: All form controls custom-built with neumorphic shadows (dual box-shadow), success overlay with backdrop blur
- **States**: 
  - Inputs: Soft inset shadow on focus, subtle border highlight, smooth shadow transitions
  - Buttons: Pressed state with reduced shadow depth, loading state with spinner
  - Checkbox: Empty state with inset shadow, checked state with raised appearance and icon
- **Icon Selection**: User-circle for header, Mail for email field, Lock for password, Eye/EyeSlash for toggle, Check for success
- **Spacing**: Generous whitespace with 24px between major sections, 16px between form groups, 12px internal padding
- **Mobile**: Full-width on mobile with reduced card padding (16px vs 40px), stacked social buttons at small sizes, maintained touch targets (44px minimum)
