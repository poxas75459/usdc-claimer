/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "64pkomRFKZyJpZVMFgyKyASAzwUexoXy96kihtdexbEc8naCJPHnPdf1Atj2EGkbnZAjH1o1WyCaPJcLkCaSuYyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iXYVFVgEu93bWfD9ASr9mnGAmSGbUcnfXwP1QxJUEaabHFmbqPsS6kRNUTnNYCPw6gBVLmBSPD44A356zonYa56",
  "key1": "3nFaN3qcM5FPHLLrth6osWQ7dcTbehQgn1Q6MkubhDkDf7jgj8xc44x6j29bfdgjP5KNnbsXbVGFb9EEMAbejCB9",
  "key2": "NNyxK4XhCpPqjVWTX1HZbb6p5Hi94CtQHUxA164zwjBH33HunbezwDVTg8S4gz3SMimTutpk3wDyr2RL7xGcMzB",
  "key3": "4XLenDRzSVikQb6YJ7mTiBdzR6qEKnYwjVh3dSn9bXPd5CYhLmnomGRvLpsapCMpk1CXencyZEaS7wF2xfrcdk8e",
  "key4": "5wSNRmXjRgMMsFpwWnHQeDcwq37X7gn4qJJDyBQWqiW2bAcxUxZm3KLCrUaMEk1sUmJoGBxP1g8Sg9P3H6m6kfAQ",
  "key5": "3oFwR8ciBjFzjxJbYcHPRZgdUwgGEGqEsypkt2gXwsNvLB7EnpCS8n7KTRYfs3UR15gx2Vhe8FSqGgt2JUXxUBk1",
  "key6": "fupeDP8wpLbm7vnd4Sr7Gkba31UcJ2HzqxhiyMXrSwbNZmsubQ6NatWpQAq7RNSj2itLXVpZfGT8Jvqat2RN9YY",
  "key7": "5udtfwFEH9mFKtkykQvF33um11prQPjH2eNnHAfwE16PrHcr9DUwgt7iAUbrtt7ZA8QD2wNEvrVtf9yyxgkQAQFi",
  "key8": "2n91bUuPubqbjsVjgHa2RXhGgwkRScbEfU1SRTApsjVm7XNgth22sti3BaaQSMUQvFSHZsZVGzDLcCiDYDnKcDGu",
  "key9": "5nquTpHG9pPgAefdu2CKKPRLyXeUmZ4yECe5A2L3zCEQuAMgqJ5VJjZvV4Csjqwee6oqxFofRDDBpHg6Gce5ZN9R",
  "key10": "4XHtxwuiaqsC3Jt5jR1qcju6S24PJbpWVUMEBXZAMxAj8a6BpKV3v9kXfvGfEoTt4VwpArQkfs29SU94kAMCitVP",
  "key11": "4G2BdYT31rdWZmYteRtGttceFkxJf6kB4Xnbyq4wxxBCYHFt8rcwDmGnWScsexWThtxy6UeNazjS4HA11wqALDZB",
  "key12": "327kHF63JqaPEu1NJjc7fgLtRVCgV7MtXD7Pejm8j8Kk6u7mKEzutbNVrZ3cqR4tch1kRnrqtgzaN9sf4Kpc8HTE",
  "key13": "5P9Dj4u4GwdN4XVWKuC7Q5xrGoqRFwz1Q8GiZcLBawkGR1XjUW1FK8iaDxt57yQUXqgDNDKWFBk15cdieCGFcUfB",
  "key14": "CMiGYxRcWqRRioN2MxRcUsMEjFfEhdPX8qDPYqH7R8PBUzEytvKsaCJqhhdYHgn47PDCwyNSyH6rByLEH9Ztkfx",
  "key15": "48GAz3Q3VxRu5eaucAH7pqhWqCWRjjWn3NsgKnBTnoY1pR7GudMhvryzT1LeF8EACvrGRYsd1f5p634S9nqp9QHy",
  "key16": "2Xf7XMnJfh97ANL2SZL2KBmid43xCSiPsU9brtCL6rvwuPVHZNjye1uKLcLEFcvSvdVh9CSnjwc6Xz2QVRdyZyQE",
  "key17": "2vVjDVXjBHDV35s9kZMLivzAErKjjWA4q4LB74zbhQjwh12daimWGoRjHV14w98DSaqkgnGtaEdKth8pjvBYYt4W",
  "key18": "4be4M5dyshiKeJxzSVQPjzjbcZmb8Rx8bbmTrrGagj85kGFYy5UEyLKJsVqX5j24tXMwuW8m3iktr7iJy6E4cgFd",
  "key19": "3FATVVkREqzv1XGdbPe32XBk3f8UiCez7chpxC5dT9fYqw6Wq7KoUMknFJM3KnJwvWiCX6M9zJKDgzYJTqDY7nut",
  "key20": "5ZC9UqFVCjLmAzJWDkjaryWw2Jnds2SkerdsnQfXX7qqB2CWuwYvdM77a2Vowj93Dcvw4nTsoaULy2yyVreqtAD",
  "key21": "3PGUc9NA6ZbbvPpVtUom3ihGkQE9bksf7oavTfg1dEQRJ8RTgTRcHEek7mnfkD5fb8y9rd7AzzzmmWzjjzkntwDT",
  "key22": "2ePVmNY11ZLumCKxguRkh9sGfiUwxGJJ14Kxo7WuShja6DsHhEbhkX1WkRfKS6tnddHEvCDXdFbyko8JMBcwWtzo",
  "key23": "2RkTS8yHAnMGhcyUMv2FY8NsUjnEdDLL1WZRtZAeSeMTqwXvF85N74FZBBeQ1UdkzrUcVTudggAt9v1e7Nr7Eg3n",
  "key24": "2Jowt4oGLsqWYpUN7LrH6zpSTBywLDWpJ5jQRKxZWKyFLzavhwp8C4mVYupUoFyUTwwSNLKo4BHEUSDeaFGqM5KK",
  "key25": "2udmNvh5gfK5XbioddgBnaZQpJBjjriGdGUHAa1CjY34ybCQyLMjnC5e8AKh34i4B53ZJoCvh53TeqLKGeRu2qXS",
  "key26": "4tWUf59aH33wtSNNrqojZNHoRQHUH8oBfGcve4XatQVPfBc8a1TfmPZW9znCmAGGzwkjstkraDKEkENRkeE7vfHn",
  "key27": "4mmLgNKTFtCLtjBjdFbrd7HD5ydiMy7FdDGKL3Ci4nR7LoP6tLw6RxFqJkvLwfAMozoa2m4mNNxGGLqQ88mkKUHw",
  "key28": "2yg3P35ECWxkbCwvsTNzcRDdN43ghUWmnHRjF5FnVDnrApeX4qLCuZXAAb2JgMJkBhPgBw4dxTNgtYSr4sL76WBt",
  "key29": "5hsjPtqcjv4hjZrhpqP16Cf5YkpZ4ncahbAJaMaW65s55PytE8Ez7idNYRgXE8G5QEq4SBZSyF4DZkpeyEbFAyL8",
  "key30": "9oMpTpFLAAThNyUg1cpjrfsh9hrchiyqpUXDcySvzqnfgRNnMF2XtKE9QKwmjSfueApsZ7QZRAKQcbzB6wQGsrY",
  "key31": "2wq8Jdb8H6KL2ZNSvVCBhWJ4M6rTtHuzSA3fm6zmGqRHcdRE8zazSkfwc4wpdJK7K8WCBNPo5cYe6RfRQBw2Hyj8",
  "key32": "2nC1tFPZTKAttsCbaJpRkcJPoFdgJbptBHCf24BpHdbENPuqyVnUXA5nLTxcSY9pdr2ubtof4Z7RvqEx5q1BDteE",
  "key33": "4imVBNTaM5FZ7J14YbSXdQ9yS2kdLXe5xGUyfY6mY1HMRtR4VGwjnWtyVDoEKNobQoHYdcaVeFy2ze7s186sbG53",
  "key34": "4xKeiBGWrb47WPGoGrAYcFgM5UEnXETjMF7EJK3MwmYkt6ZEf42D8Fd7uzox7pMvBgRKdtDMgWpmohHUK3Nn3TRZ",
  "key35": "34QJHL2pShmmziuRAhS31yF5syQs17pib1x2UcxhFCkhAceGjXNtzGNqJ22dPpXomRfLWfGwFnETFcRLqVpQ9yXP",
  "key36": "4NcZeyJM4jsoq9mtiDFebJvPVedqKamPqMq2At8MdiJkF4DERqn1kxUXMdHbi7VZ7NJxjHTnAdhi5nL18tb7gjQQ",
  "key37": "4P61am9PazRSULgXrjFrYrySgcWXmvYmpBCoKyUY2gGhqCp4Tf6u5yJnSKaUiRKVFTsBhCZ5AAJ9muS1AZ1mw5zR",
  "key38": "5dWkcExrPV49SXF9FbiBwm5VA1dkJSViCF6Es8q3hG4VHqrqw35PT8BsCcgE2CL8MnJXW6RbjgfJcUppdZ7ixbm6",
  "key39": "Y5eHuFfum6ceJ8GXic3SBF8WJMnAxkV3pHc18yRdQBiqSV6nMGFQJecJLwREH9fBVfrn5mmCv2NebcsWsHUHRXH"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
