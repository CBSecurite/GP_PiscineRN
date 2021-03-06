import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockGris: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '428px',
    height: '430px',
    backgroundColor: '#D7D7D7',
    paddingTop: '90px',
    paddingRight: '25px',
    paddingBottom: '20px',
  },
  imgCroix: {
    position: 'absolute',
    top: '30px',
    right: '30px',
    width: '60px',
    height: '60px',
  },
  imgChaussure: {
    width: '400px',
    height: '280px',
  },
  blockBlanc: {
    width: '428px',
    backgroundColor: 'white',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    padding: '27px',
    marginTop: '-25px',
    // border: "1px solid red",
  },
  marque: {
    fontFamily: 'poppins',
    fontSize: '15px',
    fontWeight: '500',
    color: '#C4C4C4',
  },
  model: {
    fontFamily: 'poppins',
    fontSize: '22px',
    fontWeight: '500',
    color: '#000000',
  },
  blockBoutons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '30px',
  },
  boutonGauche: {
    border: '2px solid #C4C4C4',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '20px',
    paddingRight: '12px',
    width: '171px',
    height: '52px',
    fontFamily: 'poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '22%',
    letterSpacing: '0.2em',
  },
  boutonDroit: {
    border: '2px solid #000000',
    borderRadius: '4px',
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '171px',
    height: '52px',
  },
  imgPanier: {
    width: '28px',
    height: '20px',
    marginRight: '10px',
  },
  textBuy: {
    fontFamily: 'poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22%',
    letterSpacing: '0.2em',
  },
  blockText: {
    fontFamily: 'poppins',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '138%',
    fontSize: '16px',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '50px',
    paddingBottom: '70px',
    padding: '10px',
  },
  textFin: {
    fontFamily: 'poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '218%',
    color: '#000000',
    paddingTop: '5px',
    paddingBottom: '5px',
    padding: '20px',
  },
});
