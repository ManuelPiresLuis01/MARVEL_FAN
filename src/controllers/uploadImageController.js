import cloudinary from '../config/cloudinary.js';
import uploadImageUrl from '../models/uploadModel.js';

export const uploadImage = async (req, res) => {
    console.log('Received file:', req.file);
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    const result = await cloudinary.uploader.upload_stream(
      { folder: 'marvel_fan' },
      async (error, result) => {
        if (error) return res.status(500).json({ error });

        const imageUrl = result.secure_url;

        uploadImageUrl .upload(
          imageUrl,
          req.user.id
        );
        res.status(200).json({messae:"photo Uploaded",url: imageUrl });
      }
    );

    result.end(req.file.buffer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Upload failed.' });
  }
};
