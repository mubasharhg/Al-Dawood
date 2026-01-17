
import React, { useState } from 'react';
import { getACAdvice, editMaintenancePhoto, generatePreviewVideo } from '../services/gemini';

const AIExperience: React.FC = () => {
  const [issue, setIssue] = useState('');
  const [advice, setAdvice] = useState<{ text: string; links: any[] } | null>(null);
  const [loadingAdvice, setLoadingAdvice] = useState(false);

  const [image, setImage] = useState<string | null>(null);
  const [editPrompt, setEditPrompt] = useState('');
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [loadingEdit, setLoadingEdit] = useState(false);

  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loadingVideo, setLoadingVideo] = useState(false);

  const handleGetAdvice = async () => {
    if (!issue) return;
    setLoadingAdvice(true);
    const result = await getACAdvice(issue);
    setAdvice(result);
    setLoadingAdvice(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditImage = async () => {
    if (!image || !editPrompt) return;
    setLoadingEdit(true);
    try {
      // Remove base64 header for API
      const base64Data = image.split(',')[1];
      const result = await editMaintenancePhoto(base64Data, editPrompt);
      if (result) setEditedImage(result);
    } catch (err) {
      alert("Failed to edit image. Check console for details.");
    }
    setLoadingEdit(false);
  };

  const handleGenerateVideo = async () => {
    if (!image) return;
    setLoadingVideo(true);
    try {
      const base64Data = image.split(',')[1];
      const result = await generatePreviewVideo(base64Data, editPrompt || "Make this maintenance scene come to life");
      setVideoUrl(result);
    } catch (err) {
      alert("Failed to generate video. Ensure you have selected a valid API key.");
    }
    setLoadingVideo(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">AI-Powered Maintenance Tools</h1>
          <p className="text-lg text-gray-600">Get instant troubleshooting advice or visualize your home maintenance projects.</p>
        </header>

        {/* Advice Section */}
        <section className="bg-white p-8 rounded-2xl shadow-sm mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3">1</span>
            AI AC Troubleshooter
          </h2>
          <div className="flex flex-col gap-4">
            <textarea
              className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              rows={3}
              placeholder="Describe your AC problem (e.g., 'AC is leaking water', 'It's blowing warm air')..."
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            />
            <button
              onClick={handleGetAdvice}
              disabled={loadingAdvice}
              className="bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              {loadingAdvice ? 'Analyzing...' : 'Get Instant Advice'}
            </button>
          </div>
          {advice && (
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">AI Recommendation:</h3>
              <p className="text-blue-800 whitespace-pre-wrap mb-4">{advice.text}</p>
              {advice.links.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-blue-900 mb-2">Sources:</p>
                  <div className="flex flex-wrap gap-2">
                    {advice.links.map((link: any, idx: number) => (
                      <a key={idx} href={link.uri} target="_blank" rel="noreferrer" className="text-xs text-blue-600 bg-white px-3 py-1.5 rounded-full border border-blue-200 hover:bg-blue-50">
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Visualizer Section */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3">2</span>
            Maintenance Visualizer
          </h2>
          <p className="text-sm text-gray-500 mb-6 italic">Upload a photo of your AC or room to see how a new installation or painting job might look.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <input type="file" onChange={handleFileUpload} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              {image && (
                <div className="relative group">
                   <img src={image} alt="Original" className="w-full h-48 object-cover rounded-xl" />
                   <p className="text-xs text-center mt-1 font-bold text-gray-400">Original Photo</p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                className="w-full p-4 border rounded-xl"
                placeholder="e.g. 'Add a new central AC vent to the ceiling'"
                value={editPrompt}
                onChange={(e) => setEditPrompt(e.target.value)}
              />
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleEditImage}
                  disabled={loadingEdit || !image}
                  className="bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 disabled:bg-gray-400 transition-colors"
                >
                  {loadingEdit ? 'Editing...' : 'Edit Photo'}
                </button>
                <button
                  onClick={handleGenerateVideo}
                  disabled={loadingVideo || !image}
                  className="bg-purple-600 text-white font-bold py-3 rounded-xl hover:bg-purple-700 disabled:bg-gray-400 transition-colors"
                >
                  {loadingVideo ? 'Animating...' : 'Animate (Veo)'}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {editedImage && (
              <div className="space-y-2">
                <h3 className="font-bold text-gray-700">AI Edited Result:</h3>
                <img src={editedImage} alt="Edited" className="w-full rounded-xl shadow-lg border-4 border-indigo-100" />
              </div>
            )}
            {videoUrl && (
              <div className="space-y-2">
                <h3 className="font-bold text-gray-700">AI Generated Video:</h3>
                <video src={videoUrl} controls className="w-full rounded-xl shadow-lg border-4 border-purple-100" />
              </div>
            )}
          </div>
          {loadingVideo && (
            <div className="mt-4 p-4 bg-purple-50 text-purple-700 rounded-xl text-center font-medium animate-pulse">
              Our AI is crafting your video... this might take a minute.
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AIExperience;
