const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions in points
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette: Navy #12345A, Blue #2563EB, Gray #4B5563, Light Blue BG #F5F8FC
  const navy = rgb(18 / 255, 52 / 255, 90 / 255);
  const blue = rgb(37 / 255, 99 / 255, 235 / 255);
  const lightBlue = rgb(96 / 255, 165 / 255, 250 / 255);
  const darkGray = rgb(31 / 255, 41 / 255, 55 / 255);
  const slate = rgb(75 / 255, 85 / 255, 99 / 255);
  const lineGray = rgb(229 / 255, 231 / 255, 235 / 255);
  const bgLight = rgb(245 / 255, 248 / 255, 252 / 255);

  // Top Accent Banner
  page.drawRectangle({
    x: 0,
    y: height - 10,
    width: width,
    height: 10,
    color: navy,
  });

  page.drawRectangle({
    x: 0,
    y: height - 14,
    width: width,
    height: 4,
    color: blue,
  });

  let y = height - 52;

  // Header Title
  page.drawText('ANANDU A R', {
    x: 42,
    y: y,
    size: 24,
    font: fontBold,
    color: navy,
  });

  y -= 20;
  page.drawText('Hospital Administration | Healthcare Operations | Patient Care', {
    x: 42,
    y: y,
    size: 11,
    font: fontBold,
    color: blue,
  });

  y -= 14;
  // Divider
  page.drawLine({
    start: { x: 42, y: y },
    end: { x: width - 42, y: y },
    thickness: 1.2,
    color: lineGray,
  });

  y -= 22;

  // Section helper
  function drawSectionTitle(title) {
    page.drawText(title.toUpperCase(), {
      x: 42,
      y: y,
      size: 11,
      font: fontBold,
      color: navy,
    });
    page.drawLine({
      start: { x: 42, y: y - 4 },
      end: { x: width - 42, y: y - 4 },
      thickness: 1,
      color: blue,
    });
    y -= 18;
  }

  // Professional Summary
  drawSectionTitle('Professional Summary');
  const summaryText =
    'Motivated healthcare professional with a Master of Hospital Administration (MHA) and a strong foundation in clinical practice and healthcare administration. Passionate about improving hospital operations, healthcare quality, patient safety, and efficient healthcare delivery across multidisciplinary environments.';
  
  // Word wrap summary
  const words = summaryText.split(' ');
  let line = '';
  for (const word of words) {
    const testLine = line + (line ? ' ' : '') + word;
    const testWidth = fontRegular.widthOfTextAtSize(testLine, 9.5);
    if (testWidth > width - 84) {
      page.drawText(line, { x: 42, y, size: 9.5, font: fontRegular, color: slate });
      y -= 14;
      line = word;
    } else {
      line = testLine;
    }
  }
  if (line) {
    page.drawText(line, { x: 42, y, size: 9.5, font: fontRegular, color: slate });
    y -= 20;
  }

  // Professional Experience
  drawSectionTitle('Professional Experience');

  const experiences = [
    {
      role: 'Staff Nurse',
      org: 'Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR)',
      loc: 'Bangalore',
      period: '2022 - Present',
      bullets: [
        'Provided specialized nursing support in an advanced research and academic clinical environment.',
        'Assisted with proactive patient monitoring, emergency care coordination, and clinical support services.',
        'Collaborated with multidisciplinary healthcare teams to maintain rigorous standards of care and safety.',
      ],
    },
    {
      role: 'Staff Nurse',
      org: 'Rayuwa Home Health Solutions',
      loc: 'Bangalore',
      period: '2020 - 2021',
      bullets: [
        'Delivered compassionate home healthcare services and systematically monitored patient recovery milestones.',
        'Educated patients and family caregivers on health management, treatment plans, and medication adherence.',
        'Maintained accurate clinical documentation and reported vital changes promptly to supervising teams.',
      ],
    },
    {
      role: 'Staff Nurse',
      org: 'Rama Rao Memorial Thaluk Hospital',
      loc: 'Kerala',
      period: '2018 - 2019',
      bullets: [
        'Provided comprehensive, high-quality patient care and assisted with daily ward and inpatient operations.',
        'Maintained structured patient records and coordinated directly with physicians for multidisciplinary treatment.',
        'Supported hospital administration in optimizing patient flow, smooth daily workflows, and patient satisfaction.',
      ],
    },
  ];

  for (const exp of experiences) {
    // Role & period
    page.drawText(exp.role, { x: 42, y, size: 10.5, font: fontBold, color: darkGray });
    const periodWidth = fontBold.widthOfTextAtSize(exp.period, 9.5);
    page.drawText(exp.period, { x: width - 42 - periodWidth, y, size: 9.5, font: fontBold, color: blue });
    y -= 13;

    // Org & Location
    page.drawText(`${exp.org} | ${exp.loc}`, { x: 42, y, size: 9, font: fontOblique, color: slate });
    y -= 13;

    // Bullets with small circle
    for (const b of exp.bullets) {
      page.drawCircle({
        x: 48,
        y: y + 3,
        size: 2,
        color: blue,
      });
      page.drawText(b, { x: 58, y, size: 8.5, font: fontRegular, color: darkGray });
      y -= 12;
    }
    y -= 5;
  }

  y -= 4;

  // Education
  drawSectionTitle('Education');

  const education = [
    {
      degree: 'Master of Hospital Administration (MHA)',
      institution: 'Acharya Institute of Health Sciences, Bangalore',
      period: '2024 - 2026',
      badge: 'Primary Qualification',
    },
    {
      degree: 'Bachelor of Science in Nursing (B.Sc. Nursing)',
      institution: 'Vijaya College of Nursing, Kottakkara, Kerala',
      period: '2013 - 2017',
      badge: 'Clinical Foundation',
    },
  ];

  for (const edu of education) {
    page.drawText(edu.degree, { x: 42, y, size: 10, font: fontBold, color: darkGray });
    const periodWidth = fontBold.widthOfTextAtSize(edu.period, 9);
    page.drawText(edu.period, { x: width - 42 - periodWidth, y, size: 9, font: fontBold, color: blue });
    y -= 12;

    page.drawText(edu.institution, { x: 42, y, size: 8.5, font: fontRegular, color: slate });
    y -= 14;
  }

  y -= 4;

  // Core Competencies
  drawSectionTitle('Core Competencies');
  const skills = [
    'Hospital Administration',
    'Healthcare Operations',
    'Patient Services',
    'MS Excel & Power BI',
    'Data Analysis & Reporting',
    'Quality & Patient Safety',
  ];

  for (let i = 0; i < skills.length; i += 2) {
    page.drawCircle({ x: 48, y: y + 3, size: 2, color: blue });
    page.drawText(skills[i], { x: 58, y, size: 8.5, font: fontRegular, color: darkGray });
    if (skills[i + 1]) {
      page.drawCircle({ x: 300, y: y + 3, size: 2, color: blue });
      page.drawText(skills[i + 1], { x: 310, y, size: 8.5, font: fontRegular, color: darkGray });
    }
    y -= 13;
  }

  y -= 6;

  // Certifications & Professional Development
  drawSectionTitle('Certifications & Professional Development');
  const certs = [
    'Basic to Advanced Microsoft Excel',
    'Basic to Advanced Microsoft PowerPoint',
    'Basic to Advanced Power BI',
    'Basic to Advanced Microsoft Word',
    'Advanced Art of Prompt Engineering',
    'Basic to Advanced Design Thinking Mastery',
    'Basic to Advanced Business Analysis',
  ];

  for (let i = 0; i < certs.length; i += 2) {
    page.drawRectangle({ x: 46, y: y + 1, width: 4, height: 4, color: lightBlue });
    page.drawText(certs[i], { x: 58, y, size: 8, font: fontRegular, color: slate });
    if (certs[i + 1]) {
      page.drawRectangle({ x: 298, y: y + 1, width: 4, height: 4, color: lightBlue });
      page.drawText(certs[i + 1], { x: 310, y, size: 8, font: fontRegular, color: slate });
    }
    y -= 12;
  }

  // Footer bar
  page.drawRectangle({
    x: 0,
    y: 0,
    width: width,
    height: 16,
    color: navy,
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(__dirname, 'public', 'Anandu-A-R-Resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Resume PDF successfully created at:', outputPath);
}

createResume().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
