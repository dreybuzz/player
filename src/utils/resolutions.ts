import { Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

const CURRENT_RESOLUTION = Math.sqrt(height * height + width * width)

export const PREDEF_RES = {
  iphoneX: {
    px: {
      width: 1125,
      height: 2436,
    },
    dp: {
      width: 375,
      height: 812,
    },
  },
  iphone8P: {
    px: {
      width: 1080,
      height: 1920,
    },
    dp: {
      width: 414,
      height: 736,
    },
  },
  iphone8: {
    px: {
      width: 750,
      height: 1334,
    },
    dp: {
      width: 375,
      height: 667,
    },
  },
  iphone7P: {
    px: {
      width: 1080,
      height: 1920,
    },
    dp: {
      width: 414,
      height: 736,
    },
  },
  iphone6sP: {
    px: {
      width: 1080,
      height: 1920,
    },
    dp: {
      width: 375,
      height: 667,
    },
  },
  iphone6P: {
    px: {
      width: 1080,
      height: 1920,
    },
    dp: {
      width: 375,
      height: 667,
    },
  },
  iphone7: {
    px: {
      width: 750,
      height: 1334,
    },
    dp: {
      width: 375,
      height: 667,
    },
  },
  iphone6s: {
    px: {
      width: 750,
      height: 1334,
    },
    dp: {
      width: 375,
      height: 667,
    },
  },
  iphone6: {
    px: {
      width: 750,
      height: 1334,
    },
    dp: {
      width: 375,
      height: 667,
    },
  },
  iphoneSE: {
    px: {
      width: 640,
      height: 1136,
    },
    dp: {
      width: 320,
      height: 568,
    },
  },
  iphone11Pro: {
    px: {
      width: 1125,
      height: 2436,
    },
    dp: {
      width: 375,
      height: 812,
    },
  },
  iphone11ProMax: {
    px: {
      width: 1242,
      height: 2688,
    },
    dp: {
      width: 414,
      height: 896,
    },
  },
  iphone12Mini: {
    px: {
      width: 1080,
      height: 2340,
    },
    dp: {
      width: 360,
      height: 780,
    },
  },
  iphone12: {
    px: {
      width: 1170,
      height: 2532,
    },
    dp: {
      width: 390,
      height: 844,
    },
  },
  iphone12Pro: {
    px: {
      width: 1170,
      height: 2532,
    },
    dp: {
      width: 390,
      height: 844,
    },
  },
  iphone12ProMax: {
    px: {
      width: 1284,
      height: 2778,
    },
    dp: {
      width: 428,
      height: 926,
    },
  },
  iphone13Mini: {
    px: {
      width: 1080,
      height: 2340,
    },
    dp: {
      width: 360,
      height: 780,
    },
  },
  iphone13: {
    px: {
      width: 1170,
      height: 2532,
    },
    dp: {
      width: 390,
      height: 844,
    },
  },
  iphone13Pro: {
    px: {
      width: 1284,
      height: 2778,
    },
    dp: {
      width: 428,
      height: 926,
    },
  },
  iphone13ProMax: {
    px: {
      width: 1284,
      height: 2778,
    },
    dp: {
      width: 428,
      height: 926,
    },
  },
}

export const create = (designSize = { width: 414, height: 736 }) => {
  if (
    !designSize ||
    !designSize.width ||
    !designSize.height ||
    typeof designSize.width !== "number" ||
    typeof designSize.height !== "number"
  ) {
    throw new Error(
      "react-native-pixel-perfect | create function | Invalid design size object! must have width and height fields of type Number."
    )
  }
  const DESIGN_RESOLUTION = Math.sqrt(
    designSize.height * designSize.height + designSize.width * designSize.width
  )
  const RESOLUTIONS_PROPORTION = CURRENT_RESOLUTION / DESIGN_RESOLUTION
  return (size: number) => RESOLUTIONS_PROPORTION * size
}
