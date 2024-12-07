document.getElementById('generateResume').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const hobbies = document.getElementById('hobbies').value;
    const training = document.getElementById('training').value;
    const experience = document.getElementById('experience').value;

    // HTML Preview
    const output = `
        <div style="text-align: center; margin-bottom: 30px;">
            <h3 style="font-size: 32px; color: #333;">${name}</h3>
            <p style="font-size: 18px; color: #666;">Email: <strong>${email}</strong></p>
            <p style="font-size: 18px; color: #666;">Phone: <strong>${phoneNumber}</strong></p>
        </div>
        <div style="margin: 20px 0; padding: 15px; background-color: #f7f7f7; border-radius: 8px;">
            <h4 style="font-size: 24px; color: #333; margin-bottom: 15px;">Education</h4>
            <p style="font-size: 18px; color: #555;">${education}</p>
        </div>
        <div style="margin: 20px 0; padding: 15px; background-color: #f7f7f7; border-radius: 8px;">
            <h4 style="font-size: 24px; color: #333; margin-bottom: 15px;">Skills</h4>
            <p style="font-size: 18px; color: #555;">${skills}</p>
        </div>
        <div style="margin: 20px 0; padding: 15px; background-color: #f7f7f7; border-radius: 8px;">
            <h4 style="font-size: 24px; color: #333; margin-bottom: 15px;">Hobbies</h4>
            <p style="font-size: 18px; color: #555;">${hobbies}</p>
        </div>
        <div style="margin: 20px 0; padding: 15px; background-color: #f7f7f7; border-radius: 8px;">
            <h4 style="font-size: 24px; color: #333; margin-bottom: 15px;">Training / Certifications</h4>
            <p style="font-size: 18px; color: #555;">${training}</p>
        </div>
        <div style="margin: 20px 0; padding: 15px; background-color: #f7f7f7; border-radius: 8px;">
            <h4 style="font-size: 24px; color: #333; margin-bottom: 15px;">Experience</h4>
            <p style="font-size: 18px; color: #555;">${experience}</p>
        </div>
    `;

    document.getElementById('output').innerHTML = output;

    // PDF Generation
    const pdfButton = document.createElement('button');
    pdfButton.textContent = "Download PDF";
    pdfButton.style.padding = '12px 25px';
    pdfButton.style.backgroundColor = '#007bff';
    pdfButton.style.color = '#fff';
    pdfButton.style.border = 'none';
    pdfButton.style.borderRadius = '6px';
    pdfButton.style.fontSize = '16px';
    pdfButton.style.cursor = 'pointer';
    pdfButton.style.transition = 'background-color 0.3s ease';

    pdfButton.onclick = () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.text(name, 10, 20);
        doc.setFontSize(12);
        doc.text(`Email: ${email}`, 10, 30);
        doc.text(`Phone: ${phoneNumber}`, 10, 40);

        // Add Education
        doc.setFontSize(14);
        doc.text('Education:', 10, 50);
        doc.setFontSize(12);
        doc.text(education, 10, 60);

        // Add Skills
        doc.setFontSize(14);
        doc.text('Skills:', 10, 70);
        doc.setFontSize(12);
        doc.text(skills, 10, 80);

        // Add Hobbies
        doc.setFontSize(14);
        doc.text('Hobbies:', 10, 90);
        doc.setFontSize(12);
        doc.text(hobbies, 10, 100);

        // Add Training/Certifications
        doc.setFontSize(14);
        doc.text('Training / Certifications:', 10, 110);
        doc.setFontSize(12);
        doc.text(training, 10, 120);

        // Add Experience
        doc.setFontSize(14);
        doc.text('Experience:', 10, 130);
        doc.setFontSize(12);
        doc.text(experience, 10, 140);

        doc.save("resume.pdf");
    };

    document.getElementById('output').appendChild(pdfButton);
    document.getElementById('resumePreview').style.display = 'block';
});
