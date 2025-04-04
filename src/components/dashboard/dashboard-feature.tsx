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
    "2XuW3ro3x7yY5p8FtVrtbrRMJzzUPbQFq8GHkfLZr4JQjoznVMLLAQa9m3UJf9hNcr23JbNndSKSUM3heuCV5tYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zh8PsiDozPHtgLnbbK9GtdvXHj5MfxZbPjBctFf2PD9JMSToTpLtm3GdoLj9gzsptm9QSgXsJ2oYSpEzDXsdjyV",
  "key1": "4ryP5xEHaBaPtE6sbhFczngbzoNzRQR3CxjiGTtLX1pWJJUx9isswo28M4Tbi2srxmqwS78xuY9FV1mAxUnYZhRw",
  "key2": "3R4Ge3sEp3CSkrKhqJnEr95B6AeLTMVQDxMXPhNW9vFpi3e3uVDFrFvat7pXhtioh7wgiBpacdPrzaxN7AWN3z8Y",
  "key3": "5wrNh2hDoH9DaZzTLe3piyXrXbG9d9nwAygpxiv4NKDonaKYNqGZDPhJCCyknPDybtHqvHegbQLrFbZ6L4u1bBNt",
  "key4": "2LmDFpJZuXnEvPYLTDq9WdYXZdeVPd9GCMdzhDDscSUYw1rZvKeDpaYTa4HKyppVxBYHSY8T2xnoQdaz9DLBHVq8",
  "key5": "xiEcyWixvmUjkNi15PxuiXeCZzniQAVaMvjgNmo32VNjg2X2rmNmQxawqvQ7kaiYMKkMo53PcYjNxHJ2djFQ9Fv",
  "key6": "5Fuq1njWMz8c4MEgzAVRcLub6vt8BpRcaHNrMe2MPtVvQGdQ6U9WDtZWPpn5txj9K2NPXtEpkC1m8Rm5JNoZre9t",
  "key7": "2MqVGAQXLHzAe3UedzA1A7GqiNkKkSgrVJTgFjXdLRSUZ3Krh2H2BAAyWbGWRCrt5M7kyCaJXkncRkwYACavBUqX",
  "key8": "4HHNsPxfhiWKiACNQpbXyyVEMC4RbWBFUhjNUux7PLgvdNFMvCo1mPAXiDrLjFeBvz6RPBKcD8mfeeBikQXQGRne",
  "key9": "39t6J6ASY3mmHurfG4EtVWPvt1AmBY1Z979CLPX1fmWzsUz5K83yLRzK5fyCriLX83WpJZnfmgKPrk7ViKFLG2qj",
  "key10": "4XKNqdJeWq174CPP73aKeonX9mJPTa1itN5yApUXAb4qQ6xTzzpk6Uq2WhmcbqFDsMoPskomeN7dkRqfXGGene7S",
  "key11": "Xndrc1JbFgzn6MG8Lrsd4gZK31ujyCvzULdz1iQYnPPFf62QLjHqY4yX5AGTjCohYYEEyfthFkMbaqwqLAmLtYt",
  "key12": "2QaB9WNDSsL8GzCMnENSnqVHh6gy4Fq1hTMmjr6ywfiVgQ2f3foy2sUupsF4SNWFqhcFWAsvtybUGRSQX9V8Bmoj",
  "key13": "25JFRCJMFTaCfEMmKsZ3yEXkGBUQxopKUbtH66BsrqY3SdyJwHfSwLsDLXLGd1hmZQr6W7aN3c54sSVm1qXbcz3j",
  "key14": "2Zwr6BGn3RHc1hCquxSrGmkax2c8fj7S3umS22d4WLgJQS8sN5rBc2icAdehP2GhWmcdHh8bDoa9G7KEae43UH4h",
  "key15": "52kkAu1s7qhBYa7uDXUpREkxGrtor4A5Xkc36mKnXoHJBMn6t6xgm4eu5dfNANZLeXrQ925v3fiJgMjvjDHxVmSp",
  "key16": "2wx4Y2J7JGPH33Xwgz7oE8z5Y7WidwzRxH4hZL6x71um1pK4KpaKzFxEDL7inN4ndXeY2Zb6ABZwm4EQscHZWqxE",
  "key17": "3gRL6iZpR1R2AEYx8FGgPuZcgHB5GgtjPpG7HJUZX2Tex5CxchdjcWWZ2EBeqU3wuVEa5DxeWuKJheQWkTUTm2Tz",
  "key18": "3crKLLT4K7LAadxZzHt1wZtzyD6PMAfV7hzWtihjUC3LyozgamdtVEBXWTUiwSL4Ai2vxmXH7RmxVYj8F9ZHQP4p",
  "key19": "4vtZvHVGYM8ggJAWwhSmR91pd1SPD6jfRyYEYUxkMLV8h9sJE5GPSQUMmfQhKNt1R6d3YVneZaxAAGQHoVaimGhy",
  "key20": "3h1vhLu6LLEJEsE7GmicqgvM6mYHN6zVhEjBdzFbX1AuVpqb9LBiq6aNiEjPPS1cH3YZX3HugFWaYjvaad73Ytec",
  "key21": "5gx2HCzKjbJnGG7yxvWAWtYHMtg8QDNkc1WpvGj6Zv5VrSUoddzGtE2k2catWyYTZWupG9ddacSDZf2WGa5HazCW",
  "key22": "41qUmG3SDPqeEjwu2XpooDTaWKaH161B687yv7P9MSzuwPuMftgKY3NN1TypLYLA1omT3o5d2qTLjaKneivTYanc",
  "key23": "5mdzYCkGqNNKn5q6JhFdLXtfCuPixob97FFnjZHCJiX92MP3ASofJnZsJ1xEa3U96B77mtWuSkYb6brF3UErLaLm",
  "key24": "57GQmJUaNXy4wiPP7WrphBD8djuXLALQfFs3q6CNs6SiQxFuzbnvdbcdak8StaApm23RMzMuwvFsngH86hJUf97X",
  "key25": "npR9kCD9DLjYQCVJjykgcwTTWWPhzWise8qahNaTrEAUai3X99ygBgUNqDu3E7UBTHMF5JMDr3TvUsxZ1BGi9zK",
  "key26": "EhPPHWsgCYM6KEZEXRn8NLswUyK5mPnjU3CTjxpqzqduLEN27NWLtdG3ErgTgeRK3mN31Vo11ZzLp8nfvh9u6hR",
  "key27": "ca4AxqSnx6WdHjM4QCSkU8ZfpUUzgozpfjYSFq8QwEFwo2jVUWU7SVrBrPtcheHAHmL5ren8QkaAg8wZa9q6jpT",
  "key28": "iAXqytdCpZRerWHJzZLH6hc3YbFVu8g7VAKTaR7kL8kbpg3zwGjQXz7H1FSy3KMZTsbgbCBHh6HZCqzndA448nm",
  "key29": "5cMbwkBF63bP2htNUjzDtLFptymMp3kBw6T1S757G1tkCvYnoGZFwwcmAdXCcHf3Nf8yTUbJ3huzCzzwyZnG7SHc",
  "key30": "4bGeKfjdNrCvuFb5yMepXWEfPL3ymLdjoVLZeiLWNepWsrEyyo56oBDmmSZ2SXJjt6a2FQD3c3SZTYebfLPa1hsb",
  "key31": "qTrYxxkLs283VEXEsHyEbFtzhkvgB8AgYKWcer1gegKm1nST3HwqJg7AeNc96a7ZMakg78NgYLaHTMh8cSy166k",
  "key32": "iPW6h2fFNZtvXLukCVoqcXgJ9Aid3Ga7JGoXL3zr9xCPU5rsL1cNJJN9KBZSyQ49DxksCB6Hs3mEG8c2hU9PjVa",
  "key33": "2CRQwbiG4Qbf2m7UPP1TLhnbqassiAqYo7yjhQzjdNhbLpinrQSrCiobVopWQxyhFKry4ZoR6ZmAqtp6BchbdRBf",
  "key34": "4wsMjetYNWNArLnjfcmHGJ9zagK7pv4Kng2X6LGQx4rcuqoJ2hccS99qLdsWoazJcZFL2cwLrEU3GEGxHv2FFTS8",
  "key35": "3Cu1BKX7aNkfJnQLnUfmTHW6Ao99C1JHo5ADm8LwQy8UPSJHJcJfjUTxopJ8ZNcxP28zETkA2vHkpnnMNrDPtwR",
  "key36": "4AkHqndD4yGLNMPunAiQ3CG9zpBauFrzRNPsjmcxNUgQBqAwoeprtRK2kYJYwYRKoKLBhz4gaRnYe2fz6E5mC1gW",
  "key37": "3YQnZyNe7kyPoqNq4HxkJzaTji8puQxXju1y7iXqQG4x2HhAE3it5T1QCFxLqA67pBFqpyczGVXqPvSRumK6D8Np",
  "key38": "2Qn8c2WjMbWrigsd2mWCgk5DZtZ3c5mL3FhRThs4WgYWT9a11XqMt6vLusEuHw2o1SAKFEcTvPHajBsBzNYRgD3V",
  "key39": "4MDq4bhaPoJbz7bQsQKLDcpoNeEduwvRF45Nu1F3AejWWc8pqTRQiS9aQdRyET6kRs6Equ64Vh1A5hECURNBUMHt",
  "key40": "3nj4k1R7gXaGA7LQuLcV38gR53inFndr1XKC48BPo1dFUyma46fBEqkMBX45bpJ3KVmnzahs5cpXp1MGcp7gNbva",
  "key41": "3qvJJxQKhuBnHr73cHU9hUhiE6xqr4gT6RDdacLHiUPu72QdTJQnMab1JNNau6rJU3WDq1Gxmwmox4E4rENWExj2",
  "key42": "4wxhpsGEPREqVcRmFeGZqMJpBRuxCSHrBooBYzLHYmWQ5rR8gs2pnX4MUUQPTq3xyJ2HyTRzo1q4EahQw5af3zrx",
  "key43": "3PwBT6TgvAiXvcxFQ7QWMkdyS3NMtGQJ1jcC7hkxWbMZwD7tXwnpdgpwBEpZhvf6PwESfKgNqhqgKC4SKozAtHGX",
  "key44": "646DdSULmCCQFpcaLnbMu2mw8XMa18rMKsLSSJZvXiUEMZrd5FErhSMNnnjLbjbJ6enB7Src4o7Za1fhqB3ifdtX",
  "key45": "3S2FT4iLFKryrTMzKwK8UKJxypkRSKJ8s34Ya8vPipv76pXdNsEYSTfU1FeMgnBzcii2mtsNzD5pyxzcNkmfpYeL",
  "key46": "p176Dx6Au63V2YQppEnfuVh1stA7i2CLR9epp9DgDQ3s44FsSXHWYz2dzQh32V2dYXWmjixRTDrn3itWkSSdG27"
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
