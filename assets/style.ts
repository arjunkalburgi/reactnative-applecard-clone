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
    gray: '#666666',
};

const themeElements = {
    colors: {
        mainBackground: palette.white,
        cardPrimaryBackground: palette.purplePrimary,
        black: palette.black, 
        white: palette.white,
        gray: palette.gray,
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
        cardTitle: {
            fontWeight: '500',
            fontSize: 15,
            lineHeight: 24,
        },
        cardMain: {
            fontWeight: '600',
            fontSize: 26,
            lineHeight: 30,
        },
        detail: {
            fontSize: 14,
            lineHeight: 20,
            color: 'gray',
        }
    },
};

const appStyles = {
    app: {
        marginLeft: 15,
        marginRight: 15,
    },
    box: {
        margin: spacebetween / 2,
        borderRadius: spacebetween / 2,
        width: `calc(100% - ${spacebetween}px)`,
    },
    longBox: { height: `calc(100% - ${spacebetween}px)`, }, 
    card: {
        margin: themeElements.spacing.s,
        borderRadius: spacebetween / 2,
        width: `calc(100% - ${spacebetween}px)`,
        padding: themeElements.spacing.s, //`${} ${theme.spacing.s} 0 0`,
        backgroundColor: themeElements.colors.mainBackground,

        // shadowColor: 'white',
        // shadowRadius: 8,
        // shadowOpacity: 0.5,
        // shadowOffset: {
        //     width: -9,
        //     height: -9
        // },
    },
    shadow: {
        height: '100%',
        margin: 0,
        padding: 0,
        zIndex: -1,
        width: '100%',
        position: 'absolute',
        borderRadius: spacebetween / 2,

        // backgroundColor: theme.colors.mainBackground,
        // shadowColor: '#a3b1c6',
        // shadowRadius: 10,
        // shadowOpacity: 0.3,
        // shadowOffset: {
        //     width: 9,
        //     height: 9
        // },
    }, 
}

const theme: any = {...themeElements, ...appStyles};

export type Theme = typeof theme;
export default theme;