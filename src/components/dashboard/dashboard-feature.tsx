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
    "3ATVhzfJ4p7NMN5U3V158ZWrwyFi4RfU6CapUkdRCcokhrAYC3qpGDChpWm9YkppHSG2rReTa2N8j1mWdmhNJSrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tDv61gNYMs6GMvAkCEbsYuq4gfQitcCPzz76ueFQkJYNNeUnpFfas9zSrLv79dPMhUCqTp3xGkRcD2r7R5ocZtq",
  "key1": "23rADtfJaGHMMoRfbtYxmrSRExNp4R7JPggNvFgddyVsYAMzT2fe9qDuKeCWPhs5rTPeLTro1CNpcNq7w8wdZtpu",
  "key2": "2xur2xGxGZt7bAeT6z6nn3xfU5StZNVh6NjWGpZURzt27o3vDN88g9Q9k9yhCJ6oknx9qnhSjaCfnAAvvbfqsSjW",
  "key3": "2Mwj1KvGHjYZ3fK3f25WTbSjtvPVtouYzyxXGZs8T4CLkW9Gv6hk7nZ5ArdBMP4dK9cb92n3YAa8RxnvhzG9BWr9",
  "key4": "yqREVmBYKtPuW3Zazxm5c4YwqBZ6WiNg7PxwXJdGnovM2NjS5JSR4kp8t6zpu1W5kqGybz1KyGAEM8TxvjvMNk4",
  "key5": "4x1r3Q8dLZZXqScDarRjhsCDZH6QHY3gMxrqHJTjdFBTYMjo3LY3sGDPSy5q2xQVvZ9Xwoe9WKXYiugxta19QMfK",
  "key6": "5r5mbkHvuvx8U1g4kuVK6Uedfy9EP573YconT8xs7JsebE8ZSrZp4gituF829mKq6aZSifPGtgo92ZxyEvumSGWy",
  "key7": "5pTFZJjuagezjhvQ8F7fXWJzkMYvR69PNdUrGJbz2Z5geaNtyLoSJEhuE6yRFRYA6RCBJ2PnktuH3q4JsfyyyKR2",
  "key8": "Lf1RAGkRU1UyhgfpsxYU8iKCkuBPGto8FL6C5prnxjbjnoEof3FnBrAMBXDdVW4mkG5apuXSRnxrEQr1Nbz6XMy",
  "key9": "362g1quMHN13BFrPUgxDdeTgKfhB2KCR2WEysw7jYyfLY4pefXLBiV2QHB3DacBwtiec3GPrhUPXpyif69SJLwji",
  "key10": "2Jj2EuTvdNijEXyBbBMHpn6fin9XLRqhpnoMDfk8LBgFPvesJ7FKSzpvAymLWKzLMsNkY4qSN2bMEciq9ecpwhPq",
  "key11": "5tG9zh7VJ5Czr5Ne7kteyAGF1ADYN5jvjLp4kzdzntoVfjcmAbwipKjgezEbESfJ8aygNawUzvsptnn9VgqnnjA",
  "key12": "6gmrif4vSdcS42zfTpisXwDP6ssMCSRb1fVjEQJmvMKCq9mFsr7SXswWPfh5UfVh28g2BVXNoZLuSeQHWkA3QtD",
  "key13": "GswsNocWqV7Y8X2u4NiJRsrXqcqivZyZRNzyhkk7vNUrGZGifxeEyn5QU6gyfWN9mdBkPhXNZCCnRHrGjVShoRH",
  "key14": "4Fv42gxEiQYPD37y3KG89RUT95JZS2cnLxF9dXEddLXWTEoSqrQAoqLAWki8LFEjQYXMckH897XP5kwMx16SWM36",
  "key15": "5c9gJMw9BeKxdT9tmQJ2vjWYjBXZGDvZMccsRdWVUjd88m44fgCGBdAxCx43Ym3e76kD5i6uRpbhkbkwojggPPLj",
  "key16": "1o35xfqqLLRWb6mFD52irXuiiNpvLKhPnxcQgHvRhKvpQYrH5TMB8TRt5uw9bgA1PNjYPdKeFr7PozXB9GTXS1q",
  "key17": "3Kbws8hFqU1FZbKmUv99kKsP5dAmtMmw9685EQnQuP31frfjEzjuf7DZ95AWcgBCFkQtiTjWYhmasZQyKgXiosgc",
  "key18": "4mex8pYUg8CFZNM2kSe3aYvFkwQAYTgvm9wDnZ2LEpdjyTde475nZFhntBv1eK9VUcmEny77KWku7gXXeEyTNWZz",
  "key19": "3UaujczvCh8NiABQZsbzc49mvGMr6SzEF6KXaynpY7LF3iy5LyRMLPEhS1HpzqyWR45ATxFK5BKpiW1Y5DQ8A3Fi",
  "key20": "5GhWrDfua6anJVmE3CVnYrFBv12WivCT8XocDqfZZB8XT7SdgPXWDMxg3ZmHUEkPW9cePTBS9dYS7xzCfA9oAW4Y",
  "key21": "bcbraQXLXXvDqmUBYvPTsg624BFMmbrEPc8Ux3YYK15g9GuRb62e6zTwZJpjhHcVs4vWNLrwc2nMLwGQp6NYjWW",
  "key22": "2JWJeiuw5hQnKhnfEWYXP67dgK96yu9hEHUQEJCyiUr6sipFrmnvaqjdLAa1Eqt64FiWyfGyn7KPM9t6ZCFHX1wU",
  "key23": "57XzVuzRazXqtQW4Gu9sH1WpUHG338L6FPLwSXcCTiX6A6Qve86BWxcAZBSP4DpohcoWRXBvcVebh915NpcaRTMu",
  "key24": "4KJuubXXR8LbVXLsiVo1uGtFiUuedsZS1fBsP3PF8D9ng8rhwcJmzYYk9DDA7oJHARiu5rh4uxiedPJdFx7s4w6B",
  "key25": "3T5VQnMCJWfMNDURrAGsaZxstgqgs9SiKeudYviPLfYPa3JNeCpjDaF6oCAWXrsDrrCkfbvTKHVKLPNrLXaqJ5a1",
  "key26": "7dqSzcYr1X2Gd89n2qcN4zwbD1YjaQ4VTR4ZjGrEYD1mz23pV8wCC4C3SAhERgGmjBNh5h4PkzMPdsDUMDS2bKG",
  "key27": "5kBC9aonstp4HYqm4YWzCSsr7dGEhhj3RrsCTnRYx88hUjk1TojwS44yGWucsHzdxCaJkczzLn9F9nmjrz8fnn4m",
  "key28": "25iD3VG3xDNtfuhkwPV9W8XAvr6nsddaTYxtRfzg7xtDD3pnowp6cGLGNZuyformX6RfyaFz6ZrPQR98tkw7PsgT",
  "key29": "3zV7ejbUztrhb1KCAkA8w8C2SqeLjcMmi3y3mCkRTsm5oJ28sc6YVtUKb6BqCqhyDQ4ZKb3kGSrV7eGcns1pxXGy",
  "key30": "4h1EDo8matFz1cCgy58Hay9JRwBiVuRUY5SK7aDVJp9rGBYyr1ZLCK77Ew6qp6uskhvD43NpB1Rq7cutBcWC99Lj",
  "key31": "4hjL8DNjzZhpZ8LPsLA8WcxDoeCVBoG5o75NpXYbx2NvHEDzrGz1b149SbJCuAHESDbWhcEP8BxZAdmzwSG94KpY",
  "key32": "46fUKrK4nVe3UksYvmUCXakGkicbKbFbdySusAx8RgvhmTCjxwmMQMpbNxQvb1e7fFDnfTHyUeKgwuFEu5MLM1dH",
  "key33": "2x7gTgGqeHrQn4hPSsRmP73uMX8DvgNLe72ShbkDDrDZiWWUF3dNXm7whgALfxyZmAT22VnvFqqbswVBJSdxTqoj"
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
