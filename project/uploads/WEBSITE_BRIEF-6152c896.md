# Pulse — Your Music Library, Native on Mac.

## Main Headline
**Pulse**: The remarkably fast, lightweight, and native audio player for macOS designed specifically for massive local libraries.

## Tagline / Subheadline
Dust off your MP3, AAC, or WAV archives. No cloud subscriptions, no internet connection required, zero distractions: just peak performance focused entirely on your music on Apple Silicon.

## Target Audience
Music enthusiasts, digital collectors, and audio purists who own huge, meticulously curated hard drive archives (e.g., from the old iTunes days or high-quality purchases) and are looking for a lightning-fast, native tool unburdened by streaming-era bloatware.

## Core Features / Pillars

1. **Optimized for Massive Libraries (~20k+ tracks)**
   Built to scan and digest massive local archives in mere seconds. It automatically detects MP3, M4A, AAC, and WAV files by scanning your Mac's folders in the background using `FSEvents`—guaranteeing real-time updates without you ever having to hit a "Refresh" button.

2. **Native & Lightning Fast (Swift 6 & SwiftUI)**
   Written from scratch for the native Mac ecosystem. No Electron overhead, no foreign web interfaces. It consumes minimal RAM, ensuring smooth 60/120fps scrolling even through tens of thousands of tracks. Features a beautiful, clean, system-standard 3-pane layout.

3. **"System-Wide" macOS Integration**
   Native support for hardware media keys, Control Center integration, and Touch Bar Now Playing panel thanks to the macOS `NowPlayingInfoCenter` API. Fully supports the automatic system-wide Light/Dark mode.

4. **Gapless Playback**
   Delivers continuous, gapless playback without silent interruptions between tracks by implementing an advanced, lookahead `AVQueuePlayer` audio engine.

5. **Instant FTS5 Search & Playlist Management**
   Powered by an internal lightning-fast SQLite database to find titles, artists, composers, and more instantly. Supports full native Playlist management with drag-and-drop interfaces, manual artwork replacement, and open standard M3U file importing!

## Release Tech Specs
- **Minimum OS**: macOS 15 Sequoia
- **Architecture**: Universal Binary (Mac Apple Silicon & Mac Intel)
- **In-App Updates**: Ad-Hoc update system powered by **Sparkle** with transparent release notifications and OTA (Over The Air) downloads.
- **Privacy First**: Zero telemetry. It simply doesn't ping the outside world with your metadata.
