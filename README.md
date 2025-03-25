# disable-unredirect

A GNOME Shell extension that disables unredirect fullscreen on GNOME Shell >= 48.0.

For older GNOME Shell versions, refer to [this extension](https://github.com/kazysmaster/gnome-shell-extension-disable-unredirect/tree/master).

## Build from Source

### Requirements
- `zip`
- `make`

### Build & Install
Run the following command to build the extension:
```sh
make
```

To build and install the extension:
```sh
make install
```

## After Installation
Restart GNOME Shell for the changes to take effect:
- **On Xorg:** Press `Alt + F2`, type `r`, and press `Enter`.
- **On Wayland:** Log out and log back in.
