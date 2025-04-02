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
    "2VfVf7b2xURdEd8LVo5f3aZTRY8DnvWVv7b8k32hMyvxgaehi4y99ribxrz9YJHEiLfMYHiCnHPbet3YMg6KFeU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sCiP4owYPikoRwEFjt4kikB4SZazxY2wd5AQurv44CrnuRr37xZP13JCn6Ukwrm1atqyYBrZeQfFRgJCciR7U9o",
  "key1": "4PNRynVBrFwazLYJ5ZTwv5NbXrJD4LhK7LN32u9yPKnau29k66fhWB4RXhpUZvPWaMJWgVp53CjXBAFASkuya3Hq",
  "key2": "5nXZ6JZaevgD6grbrQB7QYoXZcwWV7EPb4JFWCMSXuZthmSfnb4RhkXFBFJoerodqpznrg9Vn3tJ4SPnSaozzvkY",
  "key3": "H9e4woSX9NXGCF5jQDWBf7LpmT9ECj4HkajPYUK5ie6SDs5zf1hfzXYp3KTAMVb4npuTW2DGRXMkzwFGqhWsi4y",
  "key4": "5jqY6R9WSBqvokrTtok3DdZd4xCPk1hJvHnBMoAyhHquX63W7r9PY5LUVsxj2YvNQ4dPDmw3wbZFVLC89dCgqYq3",
  "key5": "31B3EUV2P29Kqu28kgBsFobRian1XjzCznNSpoafDj7gpJHZRRA76YEsuKh8jwSb3KjKocBcPBmCuoXrfSTfEDdd",
  "key6": "1KGQE7B9QoyVFDBV7qNB1sk3Vqf1pqoFgpR53dRt5jV86yxgNypbvGpHrd3XjwKeeJojrBhTuUsTehfakBh5Aag",
  "key7": "EbsJ3Exuxb5bo7vg8SRNSehXP3Sd8zCSpKJddZPCyYGqdVMe3yyPC5t9z73ciUsJ9zhQF4UmwUMt8zpu36MGdUG",
  "key8": "XKJWZ7BbwiFYCvywUTE1gB36vjHX4hvyRb5jFi1vbYSEtAx9xuZjLqEqhqZRVXZoYvKiPYzyy3LrQ4srGPgp4wB",
  "key9": "uBPzStdZSUD3KLChGP1tMP7xWhehNoR5Ar34HrN11v67MZACWw2fWcpN9UQMfAZUAmb4oY3Kch7ByEq5oSZGghh",
  "key10": "3RDMYnXmMpPMzbnSB1Qm81ZbZfn3AvHzgcNq7fBM1cCda6b6FaPBXmXs7u42AM5qJwGuyW5QS2tugHCVLhGNL3pY",
  "key11": "5tPbC3qioPQo578U8hXSmVhwgPbTVTKLNNcgoQim6XgZp7NqVphMAHxRd6mXqdRKeevz3uWYSh3mPKV1gomvRXx5",
  "key12": "5usvnmX7K85nCbuLByaHbNaJqCQfRYZhZckHoN1F9o862fr49yKPP6y19wqzwkreMm6dWD2FANZKt8xqC9h4Yg4X",
  "key13": "36qJ3MZYaRUUSArpRkBgBmNQoK3HmcUz5R38ERQaDYNbc6RLuZsojsvc5mjnh3NbCVKaK9cFwxSqkeknuJDvkdiw",
  "key14": "5SfWp8NEYrbFGxv8GJPAhstLn1BBZ5KEdj6xpsjaTTaGSyV7RA14ACjh6u4Uk36benY4GKCxwai6NBXECS9FzzHv",
  "key15": "2ad96PT1WGBGFr6phRhkDkYcRQDRM8yF2ZqsJmG1MZSFv2vi9isVUyQ55ACHbna9EPLtYBnE9L5LafS1C1wz28kR",
  "key16": "2mnKXaftsdBitSaHg6DYTmPETvcreDbyi8FsrG6mBqaxsMiygX2wnvezcUpDA5zicYtKasQH6qntXquy4Hg6Tz8g",
  "key17": "49jxM8b7aFMAiGR7R8rW8A2vzNzDqDyKu5d91nd8DYiPAnwX5q5Yj3JFkkuoeeM4UDZofzSfybY5cfRv2nCX3UCC",
  "key18": "2xqKZzaVFWemukY73Qj8D4Z54762H15utNHzvM87PFyEETmq3jXmoLsEiNWpwcjCnU4hZyJ7XYrZx9iSGJrTU6FQ",
  "key19": "3PRMc1R31B8EbGRTJtJ95gJyi1xn6mEDcdmcZ2M1yJZKuqkZsG9H7BKYn8jZedKBd9r76vBejBuhgZkuSNRK9qnK",
  "key20": "x17KVSjTfJSCmCTStWVbPUMTmznRExEvdt4q2hqakLz6gncMVFPx4PB75dSWfupncwKE9Ga2V8d6WMvE8uVCZyz",
  "key21": "NzH29TMek7JsipBhmb4AgQgqY3YnBZ8jhbQ3wRimjidpNDHaXUAQwnLPiewptQa1Zkpze7GbCs8q2UV2nvQczXc",
  "key22": "3LCAMC6y6mdqp7WgA8iHvfD7y5FFXwjwjvPF2DngS3iNMyb1aTNcvYpw34zTE8uBqycBQVvvYfP5gsan6EcvVTeQ",
  "key23": "r4vWvDr6h58UFVPgYtkCrFG5bAgNfqXEvNt1KzLUe8zcFqemzwepHwGDFizJkFFkqcnKy7TWtMoABvMqyCzkzf5",
  "key24": "G3TtY5e62RpDbDDchFaappRCFw3uPwpsLLUgY19TnhhGFQywLej7dqAyVhMqSa75tk8v6kzmGqxUUkCJw8Kt2mk",
  "key25": "3EiNUvWJC5qeyrLdHjPBZsMxh5ogN5uhP5V8zVkEmUoUATgdMhsoNrVMkhktjpzhguYQdzwD5gxMyekzrJvJe25t",
  "key26": "H7cmFHDdFr8dMJDYuZdHL3CUGLuCKwXbsTYvkncYNPEf6ekFLRJLWbKfnWYWjXruSGvx1W5RuZ4zRvHF4na3ViA",
  "key27": "XCqG8ZCBoWtftcAkQwkgBeYnMCeiE43PC7vXCuuurYpsQemj9DJU4Eg4Z2d2Miqh2jYB2BWDFSRq9hCMBwhWzMQ",
  "key28": "3ixFNcju7QRSCEmotsBHcqqfu3RkeFSLjBHBmdKKArQT8rNeq8hwiDu3EUMCB1XkfXASqYyiDMhaqAGtK5599t1U",
  "key29": "4au3x36dKp7vReZp1PVekjtAtH8mAD89BXpk3pN1YxYPnsgYgzjpmT2xe34mi5SJkJpA88zGyK4JCbFyyUZjGmP4",
  "key30": "22PkvCSE66xyYdY6R6oUrXG9qg3VU52zcX9fnwPhSWdeoREiaYhL7NZcwd5nuUwQ2ECALr24rJHTLrKCyiwQaGub",
  "key31": "oXAawBcNNE3UpNsMpKe2zdD26aUaLDpmStU3buuqrMe8H3z3jx2rW5vQikR5KmEGBvgGPZUtNFj33N5UYVtNwYc",
  "key32": "3H4PXViKHvSF4PcufRwuXiHALHUHfb5ujTiSUaJ4DHHj27a4w9sbu8YNUfd88fNCAWYkrZuxBAFAF9W5rcYVujtL"
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
