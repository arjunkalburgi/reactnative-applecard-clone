const spacebetween = 10;

const variables = {
    app: {
        marginLeft: 15,
        marginRight: 15,
    },
    box: {
        margin: spacebetween/2,
        borderRadius: spacebetween/2,
        width: `calc(100% - ${spacebetween}px)`,
    },
    longBox: { height: `calc(100% - ${spacebetween}px)`, }
};
export default variables;