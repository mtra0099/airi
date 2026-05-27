# Future Features / Polish

Tracking ideas to polish the AIRI + Hermes (OmniRoute) setup on michaserver3.

## Avatar / stage
- [ ] **Dance + one-shot animations.** Engine supports `.vrma` (`loadVRMAnimation` + AnimationMixer in `packages/stage-ui-three`), but only the idle loop is wired. To add: source a dance `.vrma`, expose a "play one-shot animation" method on the VRM viewer (ThreeScene/VRMModel), wire a trigger (Dance button + voice/chat command "dance"), return to idle after.
- [ ] Livelier / rotating idle animations or idle gesture variations.
- [ ] Real preview thumbnail for the Kazuki model in the picker (currently reuses AvatarSample_A's).

## Voice
- [ ] Persist the Whisper model across container recreation (volume on `~/voice/docker-compose.yml`).
- [ ] Option to try faster-whisper-medium for better STT accuracy.

## Access / ops
- [ ] Optional hard wake-word gate (only send audio after "hey Airi") vs the current prompt-level approach.
- [ ] Push the local-only fork commits (PWA denylist, onboarding flag, voice bootstrap, Kazuki preset, emotion remap, HUD toggle) to GitHub when a fresh PAT is available.
