import { Injectable, signal } from "@angular/core";

const GUARD_STATE = { fcExitGuard: true };
const CONFIRM_WINDOW_MS = 2000;

/**
 * Double-press back to leave the app.
 *
 * A sentinel history entry is pushed under the app so the very first back press
 * from the entry screen lands on it instead of leaving the PWA. The first press
 * re-arms the sentinel and shows a hint, a second press within
 * CONFIRM_WINDOW_MS actually closes the app.
 *
 * Only active when running as an installed PWA (standalone display mode) on a
 * touch device, so the browser back button keeps its normal behaviour on desktop.
 */
@Injectable({ providedIn: "root" })
export class BackExitService {
  readonly showExitHint = signal(false);

  private armed = false;
  private timer: ReturnType<typeof setTimeout> | undefined;
  private started = false;

  init(): void {
    if (this.started || typeof window === "undefined") return;
    if (!this.isStandaloneMobile()) return;

    this.started = true;
    history.pushState(GUARD_STATE, "");
    window.addEventListener("popstate", (event) => this.onPopState(event));
  }

  private isStandaloneMobile(): boolean {
    const standalone =
      window.matchMedia?.("(display-mode: standalone), (display-mode: fullscreen), (display-mode: minimal-ui)")
        .matches || (navigator as any).standalone === true;
    const touch = window.matchMedia?.("(pointer: coarse)").matches ?? false;
    return standalone && touch;
  }

  private onPopState(event: PopStateEvent): void {
    // Any other state means the user is navigating inside the app: let it through.
    if (!(event.state as any)?.fcExitGuard) return;

    if (this.armed) {
      this.disarm();
      this.exit();
      return;
    }

    // Stay in the app and wait for a confirming second press.
    history.pushState(GUARD_STATE, "");
    this.armed = true;
    this.showExitHint.set(true);
    this.timer = setTimeout(() => this.disarm(), CONFIRM_WINDOW_MS);
  }

  private disarm(): void {
    clearTimeout(this.timer);
    this.armed = false;
    this.showExitHint.set(false);
  }

  private exit(): void {
    window.close();
    // Some platforms ignore window.close(); walk out of the history stack instead.
    setTimeout(() => history.go(-(history.length - 1)), 150);
  }
}
