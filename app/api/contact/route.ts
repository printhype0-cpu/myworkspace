import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, serviceInterest, message } = body;

    if (!name || !email || !phone || !company || !serviceInterest || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const contactData = {
      name,
      email,
      phone,
      company,
      serviceInterest,
      message,
      submittedAt: new Date().toISOString(),
    };

    console.log('Contact form submission:', contactData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully',
        data: contactData 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
