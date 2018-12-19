import { ImageFileRotator } from "image-file-rotator";

export const ImageRotationNormalizer = (maxSize = 1500, jpegQuality = 0.7) => {
  return {
    normalize: file => {
      return new Promise((resolve, reject) => {
        try {
          const uploader = new ImageFileRotator({
            maxSize: maxSize,
            jpegQuality: jpegQuality
          });

          const canvas = document.createElement("canvas");
          uploader.readImageToCanvas(file, canvas, function() {
            uploader.saveCanvasToImageData(canvas);
            resolve(uploader.getImageData());
          });
        } catch (error) {
          reject(error);
        }
      });
    }
  };
};
