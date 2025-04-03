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
    "3DTxpEdEWxMgynDCgf3tG1uVsTLgsAu7srtLU43nC2T7GtpYjrrM4TyM5vYHSKVwE7CfakttKRCzqK33LLK6p9Yt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bTHPVq5rAz91vv1Pmj2SeihhiqaRgSphPgFmNYs8Ak9pZ5nctQ9prUPvrDAdev8u4Edv6S2gJi1nwEYn8bnw8AT",
  "key1": "3Rkbm847yryckLEYngvgawVYyoB6YM57EmcqJHdveVpvzZTz8z7BPAuSYUtpgjyE2n7Wduftnfa8WqQDWhVk8SFS",
  "key2": "3fjU4HWQ3N8Cy3oqrR8zs3368k7TSMcpqJstfF8Ea7C8egBCgkgd1jdnYLvigAD7a3HG4iS67AgvFtojyhQ5kPgC",
  "key3": "4CbN9tQcHmUAd6TJaWGB6ZDiowACVtpCt2BeiNv6Zj5UtUarJQ8SpPXGzLF3rzVTFe8frVHCCwyW3n9VJvQadwuX",
  "key4": "41KiSwMaRYx14jhZJhXgu8xcdeHqAonNJNtV47xxBwwLnb7B4KpFRH2V6EEWf3Rvx3PKcyJhtmmyF6Y9P3uozCky",
  "key5": "7MZNfd2qPvJhnMtNvaYX8HK1cTu3jgDhQ9RrrC5T8a66UqzBJ7Ktsb2ihMQnxVmnUcBSBPULzYEQduMM3JnUCPc",
  "key6": "oSGTxZoNSCMnXnbrgvVRjbdCCLJVAUHF4umvJQtCDbWT7B5WNw3dVL5AVoAGDYribCYrCmo6P9ArZCpeJJEwszs",
  "key7": "CDhaNLcomcmWtWXsrCArnr6iMNKNvnM3HAdtY9yoBqFXtaMFyY6LsXdSZED4ZQ3nVEqsKVT7a5AVy5Qo85jDss5",
  "key8": "4k5nXAs7Bo6Hmw29v9f1bKYG2Eaws2jWS8B33cPgRRq61oVB2C3VBWgoNFGB8brn4ZbLNmEQmH8JntqcpmoFNj2t",
  "key9": "2867sghc7gJ1m2BVEALxe1BTQ4sg2YpHjVK5Txsh95TqaB77neAYJoqXJqRuEUX8pm6PXKHGkbGBVbLWTevkz5eW",
  "key10": "2PwoZSGddskyPUJgkwmQw7AGKasVJUu1NcddVZSkrGnHpEifUkh9XsUxGz6KVrerxzyRvPRPDT2mmytiAHcPq2AJ",
  "key11": "4VU7WWU5AvtDJddXvH2m5PhWpnoSzmKtqd3RKBxVywQtXYBr44kVPKSp62FXkK3vbKnoYyAzeyo89wp6xuA2TnK1",
  "key12": "3FcLGypCvWTqtAamDW1D1WkpYZAFCHVSwgJcRavwSzG1rKuNtbnQx8qfdCrA4UwFJswbm4Ha5JWWwkHgBMUUrW3B",
  "key13": "CwJKa2GTh4UMtv9iwGbSs1Qcd2yajZpa1yA37VnfvSqymUy2PYxUr6dk2yLL3jsHNsddomdbhUaAYVSBCNHhq6V",
  "key14": "5FpTf9ioPRfECgokEpzGeSnjPs9CqHEGCgiKagwHkBMH7JgqLHhMdicLgXep9s7CbZrDnJnoHpmESsuYVoro5EB8",
  "key15": "4wcsv4PG7cbJW9vYcFyxEweNe1BZeBWGEFkkp56HmSfUNvx6BABbiVwu8BZmTfLvzuHHyUhj6RGKVV8wwEoopqhc",
  "key16": "2sFHpigED8gEsvSrufUWmQwr577YUh9ZdgvJNCpLFhRzWGQggz6kajnYS9FoW7i2iNw5UDS2SApJGrF2irX6wLRH",
  "key17": "2xhjvTZky37DQL2my1xAcrzWgt9bqDDPuyNKtgZqdx4schm8yEjU84eju7vJSnRxTxnVhzk2MUgCPZCWJ7FxrRGL",
  "key18": "tWKBN5JVgVMbj9C4v1SDWW8i6KYS4e2mrNZSBg5mCsQ3WkkntZGNa2am7MUZLAYW2ewA5Fp12iv7Nnp795ZhZwr",
  "key19": "3sZ24bjS2htL6LedZ3Y4fbyNhkKWktSzh3CwNfBBBxPuJMiHPaeLyWJJyFE8YTYiTitSuqdqLs1YtxnYq5Ex3qCn",
  "key20": "3qLvhUQ9FcQHZkMS6R3BVXKUMj5dWNanqTpvytq8Y9jsDTxaB85DSYJFaoUw8SoYn5H7FuEYJtRb12pqULUUWiGy",
  "key21": "5ipXAckEaC78p8yoYMUBHpYoZvZcxWjHr7aF6FK6NQNiahZKL4MiM8XNbYeR1gCmJiB6ktNx8scKUsvnuMQanHs9",
  "key22": "2YiPDQxFCh1XjAHgn2pVjUy3TkD3kt7Wo2QkBE5yanku4auuKU7XnBCBiZ2xEzsd91wuNJK35YpJgtLSu2T4gSnF",
  "key23": "3QiVvo9VyBudirGRKGw7fxxfhSTvccK6yWEPfmZfEi5B4R9EqwAeVSg7DvfA9GXenNPujgymRZ1CYefCbcv6UjCS",
  "key24": "2RudqMXEUdNuStCvu7Nu4m8vZPinJpBSHyXzvDzVAmgfomabQubLCqJk6Pgm8sAQYVxWc8hNdhHwDroEHijoVKqe",
  "key25": "vK18NzaZvAdqGbT876gb8QnW8MWNr9y8FxTb7fAzzRQyHgbziH9c2rVznhdPx9MijpDdPDKtTgtfMSygrvxY7Jo",
  "key26": "3vDnHVPZVsT1TQQA1bFa3E7aBvy7HGFxUjpgfSudXuh5vQtUnAHPsZ4b56JvrAeG6NEWnPYTDq6WDzahS8ouaN6x",
  "key27": "5Fj3n2z6Cftr9eK3YX2jWDwmARy5jNd9WbTj9NZWRMh72ZUNUSn1b6pRDPrY4USMaEvggTPDH74xX39SRsGUDKfL",
  "key28": "3ejJcD8wEoNjbrbu2aBKdx4nJv1mDGnZ6DFWQKBbRnPeVVWmmSRo4NsYfcBDZPoTYD3maKkYT9Hechc6MHNu6NDe",
  "key29": "4RxWRujwwFjHTJg9otjFjzaAQ1ksHdKC5XWbc6Hj7z2iw5JCWyr4DaoX5aGj1yD84EF1rAkwDTG67rm7wuqRKxFb",
  "key30": "3kcykGTDLnTdWNKMfGMNEmruVEiTfdvb3Yb8Yaqd3oQBa1EEY7NyxahqfHHJ4FRKekiRav8GKJJMRaeXjkhQdvKF",
  "key31": "5eYx5jRzzF4wf6CDTHvV11hspRwV81GpjJSYwxTCVoYgCNjsNfumbP7B1JCmCwLRCrQ2vbh2guspG1AWo6CY9Poy",
  "key32": "2VbLkTue9n89oUYx4wJ51fHVVNLY9qXAyioYwQDJAJrUgmGuL5mgk8AHyESKUx5TreJevzhEQKvetDmt6CcYJ5EH",
  "key33": "UvF5jBbBpfjSbeMsiTxUEmcCHTho2JGjR8bg2g2cPtCgox69XhWwZmw9j1oDL9zu4iFwLdmHG3DHUXFBJp7bc6D",
  "key34": "GsYjDbfeyS7Nf9XHSH8DPMyFn9X52ziN7iCdNsmhHVD4VPgcdxGjKFoLjFhyz123qmYMFhziyzSjoHifY39Cquc",
  "key35": "41ZKapViUneJTdBMwusWrwtW4MPhPk9FmM1SLS4SZtfzYhrH74YEtVULr9UWF3H8o7s3BYmwJrUkSVNNd4tpZghs",
  "key36": "46h7RvWWAw2BxsrrsVJGdvdMv3c8Fj1RiFmFD3SnkDnKc1EnKGvFf7e7g1r3nn6MrnNMyqH7ckWiTSQCuJdZYb41",
  "key37": "5ciBsULvcA9e9qmTYDyaimMDLWhXRnqWzWA3vnJ4VxnCummcydLsCjnf9uM6NpatrX7twXgnV5pBVXnbwXdrssvY",
  "key38": "33QdfUoBFyqPDFGreYBP4FiGkTtafGJnLfY2TP8v1ehDQRRGuQiz2y7FspkHUSSmhEjMqA1sUML1eXQcx3ujyNN9",
  "key39": "3RKwLvJbr663BLbLQsry4uqseLVSPs6DKnqtS1mLMzaggUxUe61fPmCCuMNkQXofntS4f8TmhgweoF8XqPQFBJ7c",
  "key40": "2S2HxkVvc8YnJ8oZThPd3qd1m9zgKPUNFQY14K55rAnsAnJoMHuzsMwFpkZJ65w8RW23KjxpMrYt32fAVwTMokDf",
  "key41": "2GfEhhFnKYwRDDY2gNCXc5APzgHf4YwcUseYZGXBwy6eNwBoEVK3TTAezzbX9DxwsLHZC9EYuutXmcUVyRaTzvVf"
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
