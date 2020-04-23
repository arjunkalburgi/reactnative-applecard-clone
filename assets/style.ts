const spacebetween = 10;

const palette = {
    purpleLight: '#8C6FF7',
    purplePrimary: '#5A31F4',
    purpleDark: '#3F22AB',

    greenLight: '#56DCBA',
    greenPrimary: '#0ECD9D',
    greenDark: '#0A906E',

    black: '#0B0B0B',
    white: '#F0F2F3',
};

const theme = {
    colors: {
        mainBackground: palette.white,
        cardPrimaryBackground: palette.purplePrimary,
        black: palette.black, 
        white: palette.white
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
        largeTablet: 1024,
    },
    textVariants: {
        header: {
            fontWeight: 'bold',
            fontSize: 34,
            lineHeight: 42.5,
            // color: palette.black,
        },
        subheader: {
            fontWeight: '600',
            fontSize: 28,
            lineHeight: 36,
            // color: palette.black,
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            // color: palette.black,
        },
    },
    app: {
        marginLeft: 15,
        marginRight: 15,
    },
    box: {
        margin: spacebetween / 2,
        borderRadius: spacebetween / 2,
        width: `calc(100% - ${spacebetween}px)`,
    },
    longBox: { height: `calc(100% - ${spacebetween}px)`, }
};

export type Theme = typeof theme;
export default theme;