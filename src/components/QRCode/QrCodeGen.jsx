import React from 'react'
import imageQrCode from '../../assets/images/image-qr-code.png'
import style from './QRCode.module.css'

const QrCodeGen = () => {


  // TODO: For futur custom link : https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example&bgcolor=00f&color=fff&margin=50&size=260x260

  return (
    <div className={style.bg}>
      <div className={style.card}>
        <div className={style.image_box}>
          <img src={imageQrCode} alt="QR code" />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>Improve your front-end skills by building projects</h1>
          <p className={style.text}>Scan the QR code to visit Aurelien Gremy portfolio and admire the road of knowledge i traveled</p>
        </div>
      </div>
    </div>
  )
}

export default QrCodeGen