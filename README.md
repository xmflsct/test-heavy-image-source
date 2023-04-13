Example `expo-image` loads slowly even when reading cache from disk.

Default example shows loading some static (small) images as well as some APNG which is around 370k. It can be observed that the APNGs load significantly slower, and worse blocks the rest from rendering including static ones which should be fast.

Changing the source showcases loading static images of both small and large size. In this case, the slowness is more evenly distributed.