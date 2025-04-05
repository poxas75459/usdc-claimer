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
    "5UtxZVF19u7WSodWMA4A6DEYPZk7pMUUM42T6WiMq7SFV7dshLzeN85PiPKw9f9XWvWAe17XT4K9LoWkHvcrCGRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28bLV2YZFAryFTkusxzM6nRvK7KMTDTw78MARRFryM5khKDdiHZq9GyWrKEweS86w11F3ZPbauz2NR3K2mQsp5qw",
  "key1": "4kVNojddbrz8rLxXzfG7bv2B9DFTJPPhGgyTedMBKZFwHHvLJ7GVhkJz81u5vZsPzjN632fVbispAZw4RtYTR6d9",
  "key2": "3q3pA2gagqoQG69TM5QgUFfWehj5d5ad7ZWMn9a1MYbo2TSFgt9vJjFr7sW1DJjkiTAkjMZf88sF4d5RHijYSp4S",
  "key3": "4tUJ6GFuKw9FXiKeP4te6pqb8cVeQnNtxTQpCravMTayQ5AvBrdS2vDhh84n8eSHh98MxobR52Phqm3bo9mozeU9",
  "key4": "AFNUrJVcHjApZJ2z3yvqfqV4M2BNv8uqpUAXmT6LJwMf4hzc3okvmDcNSi5BPncMNtfz2U8VL65AnbNnPpuv3dk",
  "key5": "PjFGdQjejdPs8e1RmrWvUK5wTrfC5qVBWeaBZTPPwsm1921RGjfNN39FDvYLhniKdDGrpMKfQmWHP2LNrEqjVGH",
  "key6": "vD3dhXmQNPX4bB9rRq6v6EhNtGcmfFknxMcJS9ivsPagChwKDKDC8fMurBb4Eb41EEj2ZaE3epVkmREscv1xkPk",
  "key7": "JT1xAPaHcRE9DJZKxn29osZpV46jn2fo7rsYKHcUjHicyp8i4mhqwxNZc3LTNUpuPLS2SYp14oYDPs5mEWWcYbg",
  "key8": "5gkiM5EhoZMMkr3oDpfofWBd63rniTYaYDmgMs9JU9fhf5Wq71SCBMkqCsnWB3xNKNm8pvKfvG3CcbrHCZpjMRpE",
  "key9": "v3wMDequosJxiHUgRnuBtGyzELyk15Eo6d9RcCjQ9jz6zz1YMjNHAoX5W1X2xRrEK8ERhJD3g3ZTfhg1C4yCUaE",
  "key10": "2mJpBqeNQeZNTkyD581D8NoNj5b5TE7CifbZwJZJtmiSDuTLkSrcCMHYcWstx6ZSvkUEuPKRTvCUJU2pxoPzQ8st",
  "key11": "123wgX1oXNmRojJyaFQGbTbAV13XVQPvhknscRSkqFsfrW9rW5qqK8zwACpVF8GvFsNHwactSu1Ud8bJwtdz6KDW",
  "key12": "9jx6redL4B1CzxBz6AYUs2Ps5NkX8V3tBmMNgqMk7NNVw5hCx489STwyLVeKA16xpNibf6aDJ6QD7U9MzvzmCP5",
  "key13": "3SzrKAm6vnipe2syyRcrSVarYZ75Er64gFTbA8CibKLFBSoecYXYuZACUTs2c22RGKADaYA1Kq9Z3QHAMmJRocgc",
  "key14": "4UtVVNoSbXHdfFfzc73T4ueQ5dUSEx9YaaAsebRMwJ5TTtoHrdSQWLt7j84CAxBP2SW4rci6hPKTnqZqhHAwaN23",
  "key15": "2Y6RiiiViPY6XsDDNnF44KK5QZm1uWUKAeQq4kFtsbfsHkoDpLTBgwcNX1Gsv9aLMVbBaaeZTGh8qz6aReeJSVfJ",
  "key16": "5xpQHYtQG8MeqtBwdC6aVQXk1U6CRLTzz8F4dmoCRUVmXuZvVPuC8YHXYnbAnEZG7ZwL4EExKpn4a14ppELyVeN6",
  "key17": "5CKRKoqinh3wacta87DSSCJ8qVaohXj4kGDqBfBo3jz1buxn8cZUJQnuc6M8y2ku7Pf4HbFRfC9mjbA3gJpma4z5",
  "key18": "2XPM9Uv5Fyk6KN56XAPKeZkHksLuLB3GTx2e78XmL7wAthB341n69Lg7tMLYqdszFgxntdMmffJ9wKNidf129dmC",
  "key19": "4tZnnCar4yehT4YPoHyMNTCYP1o5rKo2sDDPRKYBJe9b8ZpQfhQxZYu3WGnGq9ucvAuuYxWN8924THyhrA6ZRBfN",
  "key20": "5ymqkf3hYZ4aqyWsDkSgYfwnwwZiYFejy1myznBVzRsWNTmUTnWJbAccMtWeudjcYNhwpsCC92MZaMzwFMT4PU9L",
  "key21": "35sXouMuiaUtQCFwqVxJ7GHj4SSP2y9z4H19kjN4jf7uTrgtoS5PB5qfFyo4qTgXXRREffdXE4YFLxsUDCGqKkFh",
  "key22": "4WpJqJbP21BpDV6cGiJGafAKBDrKnXJ64SjbYQgyq1XkvazUjrYUpo3GyAGiYEZeW2X3JVMZe1Fh9oVNN5HsyqWd",
  "key23": "3ARRGvAbzTzau9H8BtzMSpvcKgpa56ZxB8UziPPN8ujY1GCY6eHtzKdKgZoifCPjchNWvXUvLt16spWYNjdGJGqx",
  "key24": "2c1NA6pt9AveNWy8fpZmXhjTiRSGCnwrXyzta2NoH7vNiuQQzXwBBySaNZB5ptbxf6Tww5vLcerbUEz7ZbFBi5Xw",
  "key25": "2qxWZwWSb6Q4rSrzQyyDQE65a8Rn23pLF8QJGduqjgL7PQ7tNpEUSuBKRLR96knb8DaqtfbpEcBpgm778N1AVkK8",
  "key26": "3MYVN5qK9xExJoAngLbbfyvqNMVkNLbNtYaazTRgugk9FeXnfhBL7Up28kTe3gZMHDH9E19QeCRAsoNsTR32ddoi",
  "key27": "46EEPvqTbWE3bZVRTBHcUddPzWjTbqxYnwXrGpHJigRD5ubLPkVHp1xhojQNnDp4AJTb3QQ1p4EKravptsZ3ZMGQ",
  "key28": "4GicpiG8RXHRr6aK6xek5N8Lda5gzRZV7NdcovvMLyujE3rLaJmfD78XZM3W2wu4ytGCgiXiDwJmKmyuTA6esk3u",
  "key29": "5rVcYjHzetP1aJdTdbCxALN1ZTnoeurabXc9CxFGX6LhhvvdqakpRjwmByZba56J4g9WT48BRRVXgt9DqDurQ9S4",
  "key30": "2K7L3PxJqCKM4AiEd9oX4n9DqZgTCmjZmPBJSy3CCzncEXUqvmqf3yVDhffitP6u4zY9Ptdhs3mEGb3817n7g9Ka",
  "key31": "2t2cxguJhttAzWiE6q6YEEjw2h4d1c2NCpoWFjmbCANCkaFPfhWDdipS5meYHFW6QfbZZAyFx355564riyHZaFiK",
  "key32": "48fpdr8dAuiehEVWDTkMhX77b76j3sysqU8iefMm51cAsPktKxiYvn6fjkArndjnviwcGA6QNrAAjWVBE9YfEqVK",
  "key33": "45kGju7Ypr3cq1Hmpqt63tD62D6HYdZtmyi21PQupuavCoBxSspJ3WdnaLsaV7h4s3MUEaphpQ6niugpRrf1rftg",
  "key34": "2qXrpUXNACwxzPWSJJ7M6nXH71bTEujFNx2yTFKrWKV6LaQjU3gLeRXRcLmf3725Lqf8K1anfNLiBkMeqq8p23Tu",
  "key35": "5yeegw2itSAaS4qpV6QtGeWtD8kQmCafKNXtAvAHAfHUw6ccKRaC5BtNsDSn9sRMiVviJWW2vcHHZKVfRLmdCT4W",
  "key36": "xkGrEjX5yaDPkjRB3wE54Q9rtbwjPtW4XKEdggidHRQEanRCJRMrioX47o8itLU5fFg28ikTW4Ds9iPhneSKEFD",
  "key37": "4aKgeFySqxSoxURawDFsFbyVKtF8BeCpk2CkjdUPFLF8g1Z7emPYsqmcJQEwfLxifMeC5iFQh3RukjgyupdNboi2",
  "key38": "vQcU8UWJR2RhF83T46HcysFGuAVEZFnT3B3ynXTjmhurzbEAnoYYqDcvWX64noAvFfxdANGLs1hdgVF38nJNrih",
  "key39": "3Z5MPP5SozZJfCq7NM1NC5AN1NW1izqLwBFGRLja14ZwZg1UgpxahmQLfUaXAQrvdPWRwQPpRpsy3x43QZyzNa7i",
  "key40": "24eEs1R65PfbYTwYDJc4P8X4nJj2Avo9zxir1WCUhKUmi6gSx7rcbfJ8mUXfAvbPyX7PJyT1WKHeeMGrKA5HXFvr",
  "key41": "3BMFUwpLCULT3gNe6unZMFBAiBEPnucDyWLevV46T4RZw1SYrKodMBddtwAR9ndfSLyNtcq5Ey4jnGdvJJNoLpp8",
  "key42": "4WRHGCQXnpdNNUyU2AyyWZn1pCGo88EBfenhgERwWqzkKk5ao6TGMmSJSzbYHEZGPKNsFXGSVX8QhEor9jeTsLqQ",
  "key43": "2sS3FUHFX953m1FDdXQrd3wNx8UFfvaJ4zFU5trHhbMdSjdJAQxJTYVV2rv75wD8HkKUtFGCTnotXv3sxsZQsoba",
  "key44": "3fxZcGbKYVjLdyLWTpRaatjkVd4yMJd6RqVobWjLF3dHabuNrDPPs5b1QHFnTDFeXpfundRHRNwiozjycMjUpGT7",
  "key45": "55QCA7wnHQnoAac6fXCNw7VhApdK8YU6ijJerGttXj8ok7G33fHi6YJmmFKWF1N9rgWssB9PVD3aSHuUL8MFCYTE",
  "key46": "4TWYJioZe7AbHjuUcbNd4HhXiCWGLWdEj3Bm7xzC98XFvVQ4LGLFYC9VAmNY2auE1PKuBEAMCyaqWfyrxZas8ee3",
  "key47": "jkMVrzdiXUFXaAtgE8bozzwDmxcLA1iS34eHkKvg8zXocRd5d2q6jnK5BmL2rLzZEFtkWRCrP394v7m9cpavY75",
  "key48": "4CNzySiTmf5rPNNyvS1d2bwa2eiopVERSMBA616rhkwKFz9F2Z43KesCdhYiDqRcN6sjP3CdLJXueJgLSo2nPf8B"
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
