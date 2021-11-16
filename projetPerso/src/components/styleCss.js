import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  blocMonnaie: {
    maxWidth: '100%',
    fontSize: '14px',
    color: '#000000',
    backgroundColor: '#ffffff',
    border: '1px solid #000000',
    borderRadius: '0.25rem',
    padding: '0.5rem',
    margin: '0.25rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blocImg: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  img: {
    width: 30,
    height: 30,
    marginRight: '0.5rem',
  },
  prix: {
    justifyContent: 'center',
    alignItems: 'end',
  },
  blocBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.25rem',
  },
  blocSelect: {
    position: 'fixed',
    top: 40,
    left: 0,
    width: '100%',
    height: 40,
    backgroundColor: '#cccccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.25rem',
    zIndex: 100,
  },
  blocMenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '40px',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0.25rem',
    zIndex: 100,
    fontSize: "20px",
    fontWeight: 'bold',
  },
});
export default styles;