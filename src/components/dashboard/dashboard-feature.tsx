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
    "3VshPEyBf7yXF67mjPiRchg8U9ZYC3teXyBEMVNpvQVa1ji23kKN63x8XTtYH232ywrV7ZoYLWYaqfTxEhkjVto4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ogRmAQg1SLs49FL1NZGpH6x9VrwvaYgexwaFvsm8FvWVK24uxwpYdmTc4hNLxCkQRtgVXw3ov2TbHudT3N5C1Fb",
  "key1": "4pvXiDT6RVxdgMas424SvWPbDsxgur938u1RJCG9LRSoYbPZjGxg5XkXCotLYYXWQ5gCRNa7wHbfjhhWcpznx8Gd",
  "key2": "5qWHfk7hwWU7mut8Swt6fhup36SBSY1CqcnMMMMH4RYkHCjqn4yLRHGJWgBeCQBCJ8tvEMV8MBb8n7NBT8RUMwjK",
  "key3": "2HipWnVtCq1yGJyPFagJyVkaCC6rdskE3J2cFiiGsKzXxvsLgGiq2ti4SvKtCgP5DeVmU8rbkKDyhyTXDL18MpkN",
  "key4": "2jrqiPh7Kg29DvrVRscK5P7FwSMDdgNhQQuqPQrf74nbVeSK6YHdsFHz7HdyeFShfy2ax1hhEbVF1rBJ9dpB44hE",
  "key5": "4YG9oXigJdrQvDb3YDXAHiJjYdVuktXrxj3mSQbevU2gNZ4Wd8RG3zssmvora3TtzHQ9hF2ygqhnsbt11BXW9jei",
  "key6": "128ZE9pBr1Zy4va4w1ma1N5Qz6DKYmzNXvg57S6JkgrAxqDY67o7LLUsQCxAtrBxhJTv7G6qjpb3AuNJLFd92m3w",
  "key7": "5PJBd1Tkp7UxCttsTEKm6Ad5yD3cynyR6QaDQpQaqo1U48CdK182CcWw5QcTNMnrpqNv1esyaJFq7yiwta6LF8vc",
  "key8": "8QD1taMsaukZzYPMTMTeZdUXJtJTqxfgtSN6PxxnMGAaxUF8QunRG33UzQu3vTN9JoD18muW3NzqMdDxkPCmxGg",
  "key9": "9k7fCuryBbe6UYbHyzm9UJUwHp8VYi7r8c5SZ8QhtwRSvkXrrTUBvYUpDrWZFYauS2Nr9LqNHFHhNwzi4sbvpRj",
  "key10": "3ySWuUDFKcBL1jhWyg4rvQPMkWRrV8oVXdCMzYmQxf2iMn3g6WPWgiHvBzNiP8TTVAvXnpZkqNB5aznUy3vp5wM",
  "key11": "5PUGR9bJcfzpVujEZSoHdtycZ3jeyeyibccZGxYpk6x8ha8ZMfxsDzBvhfeNkx4yra49yk7jLFsfkNy1scmmdbg3",
  "key12": "2mnCvexzPL9RYAGczmLj7KWYpKDFram4NGrYwFcwLqk5QJMCVfrxkrrDqxaBLV4boBjEoR1sxcrhVxQ2mdztwvtZ",
  "key13": "VaFVRRUsf7sXeb8TEcZEkhMx9CvFF6NTLqsz1d9hdE9Tg5u7exDQDG5eJFDuKMHQcoJydX4pMp6VV6ssXxMJ9VH",
  "key14": "Z4BEbVisiJUdnYDAWCDANHRjmZN6Y4p1pbgnHaJ6xDUZARhP52WLy1KdanapJs6b1vpkBAsvWGe46XvJ7Q2Cb7N",
  "key15": "5iLFo93XsqHDPEQFbawnBkkDnTM846TrCe9pKHaeYsfoRSheUDoFWUsRDUS32qWsuELcR4nv5DJe9cY5LEvt92HL",
  "key16": "5jHjg1F1XDJL9gPPUQoKY3gaq2iJmwTdGLkJMfXrZj2dDtcZpApYJLXdtSGpHZmhQBBZBZXFa1XqFDD43TJfjuFg",
  "key17": "3QzWj1zjtXciqaxLQuTn7WSytCh9egV51o9nNhZAVcRasDctMYrvqY4sAbdJ8NnDWM7646NFNj6wTGqcjXow1uQb",
  "key18": "2eAuBe2kUUS5qG5XLaotAmJwKWCckBd6s2HrUVV4U9ewQUZuGFwrBJUwskNkzn9Ha9HMuobaUSB4Tkp1gETfCZRT",
  "key19": "3Y6Vx8ZH1H2aLF2hYMXvJk6inYenvmDMYATmPjsGGL7pPaUe3uWApmVgbrJAvu26p1iDfLUB2rih2ZDvBMnwnHQJ",
  "key20": "63uZJuYQdYxJAgQ8eUaEbEf1XTMyQhXEfFBVbSJFgd5PMaVKgLmt1JMLEByWau4hAPAskcWxyMgbdRqHJUsixUgY",
  "key21": "3W1s1Ethibru6JXg32h7qGTXfZzBKFAVoh3fgaZoBgAJFyBx4H1yg1jnmmnJKD7qr9ceeR2iGgNwuyRCmcGBQaYN",
  "key22": "3kGJ1RHMHN6aC8j9CTiD8yEHgUmHWm6JRUMnpkNbfyZN7uTECnyaAQeStaZFcgigamCpZ3ffUyeXqPCp7sfewxna",
  "key23": "55ZhJwha2Pjp9v7vZPUMvKTAaeSb1LGjb2f9GEY2aePGnAqDqeCDya9PWneh9cMwLdvc6uUfPNemcfJ9V6suJtCZ",
  "key24": "4HQzkYpD3ff9QdAnZE62SRDTCpsy8vN6SbeRW2imMj88tBLyWC2g9VymAunfS1Ba6hS8SeM3WmA4T1uH4zrcqfMJ",
  "key25": "4kWrTJRWSQ9VfqAbNFfadrnUVF7yUb6g97SH9tyURkPn5K7iMQ829cVDNFnkxf4oCTPjmER6aDtym9teyXvrSv1L",
  "key26": "3zBi5tHiG1MtB8C5Yp5okXAxFSbkWfEtPxcTHFwx6C2Qggyy5d24s6apL5KKBLiEB2ziz7YfNiYQyNogTiJaUoMo",
  "key27": "3ZWb339y1M9QsMSP26dawC644MEcEz5zX77C3G8FbgBTnMosjAR9WxMKer9442AsBecMASUbB6uV1gytAQTxq9iR",
  "key28": "5HYLf9L8CxxA4awUEMUECozC6YYV4ftAvndeJqaJ9FRGDKE2C6VPZNsxJeHS2aNebKNDeNZHLx2PYFkExF9aaYsV",
  "key29": "4CoZWmApLhSXiFbujE9wZ8t7aREAwsHsxMGUEBFLY5MJaBS52SUhUCVJptQSn3GJWEAeSfQ1Mmvp7GpwDS7n5xWR",
  "key30": "4LEvgwZcAHvvCP43G4yHNfBfcMBrCxE9N4GxdoYVPEFn5HDpvV2cc3ZrkRWh8QWcU15iud1rvJTBCa1WW3vAw551",
  "key31": "367Xq6M1PWhSKj4D7m5DUoxWH2oJ8gSmrZSMp7KKsnELyfZudwdcovxUfg9zam2yhpJmZ9zK7p5qj1W6DwHS1sqC",
  "key32": "4g7zDwuDmiyjK3JcXmBXVYvP2jWeEkYrrBAyZDcYd7c7GB5wpceBSoZM9SDD4dr6WBkEQbuX36m9yndVcsZWoJJ5",
  "key33": "9LkQ17qPpyh3JcSGBS1MHoNawYp1WBnWGBKf8NoZa23VE2D9uxRjN2nPPYJXpLkHbV1E4eS19PNiN6TfvJ8cqC5",
  "key34": "5rCRDzU4xq2Lh4NugeGUWbkAa2yqNY5oNcvpex9VHGRuD4V1oGf1FU9w6ENkxFoweh3ZGDys5y3dNvYkXtebcudJ",
  "key35": "5qcTH4914UDTJSaqBazrxrNeZrD6DCcybG55cUgU4GEetxj6eUwyd1UudKXnV5vAENcgBVuehCkxn3i2eWsWR7d7",
  "key36": "GsZSqS67dEh2Wagw2ARgHQpwChpW3jDBEjyb5TmRYPnxLimH3sDJHrseU1SdE5YNTwpbLeuQB8BdR5hDDmoTxmE",
  "key37": "3J1BgxUXe46eR52yULd5XcMY5qPBRARcfUrDzvvFPdEfRXMhoq38DY8a5p28NPhWkCLQXFhtwavyitCLePidkCXS",
  "key38": "4tNRa1qjGgMz8AXwonCoohpFm4FJeVjWGeDhcwRpSwJGCrqAW2oofszxYDXpxUefcDFvAbbq74H5cV4P1FwvibLK",
  "key39": "bJ2FGqB4jJ9KhEWwJggWkWvqU8t99mZDBkxb3qX2sUcysRdULaumYUqhU2wTRshyehx52j6b23xXXzRcyCpdi4Y"
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
