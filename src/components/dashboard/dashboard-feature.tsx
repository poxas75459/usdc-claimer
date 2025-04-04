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
    "3oMhGAu46eMC74bBRxWpqsMKzJErwn4Gyp3GwPmLkd7WzpzARar4zdmYyjTGJwq7uBJMnYcMicWg54Z64QiKhFHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22C515kwpAbA1ta9RU9NCHgnxKDPvLm838ouxS5zXaCe2C5zTuAiWMcdtjaLXR51xxAfMwXSAwrN4H9KSmzkghqX",
  "key1": "2ceyrcjYrtXEVw5KmsYP4ugZM5r5fkSBf8pYoAYSPNwf99EHMr9NoUY3DFhG7EJr5CmZsriJGPUXRyPprjgtfRm3",
  "key2": "CHbcrGXSnUW4yaKdfeb7QsNnAn268bwkz7YfWzR9gEcb3odcf8XeiG2RyAWpFFDWA9cGEnUcosStLZfscFbrojj",
  "key3": "2qQJGwWXo5pU22Uh15RJg18bfh17jkq7zenNrRY8ZCwDFrTWvPDRx3buCs36sj5xajg9z8gH3rpSVwoXGpz9vp9",
  "key4": "4RnbttCjnBpJQPADjQEhCuBYgRgLZYseuqiQ8hPMqNsvxvD8Cg47BQZdJVdgj8h9qmoVRvAZfvma2ZtQurjaCzUP",
  "key5": "66PiEzMa1PyKjk93SAmTiXwt1qTviTDWZST4jcmda8AA9p4Eh2Gt4qqpMtPirT9BiuuMgDpJhjMnxssJZEdbKoE",
  "key6": "3AJKcVsQzcGJZtvjYqnZCQgxLoPXaCmxCVXFZXP9mdzU6m14eNTrNcMGYAxTZ4Br68rexHS7zerdNZwLYK7A7ttn",
  "key7": "4a5UADdSDpaSjHNHv6sTaQtLqtTsizcstHbTHc83xudavMyS1GaMJFnY2HUTo3Q2QMmMkPTUYriiRHTmiUxWeNQk",
  "key8": "58FA55Yo7eC43fHDgfUj2MYuckURE3myBTn66uH6WM6UEFEtb6FtCsaajN6GL7whZc3vTrKepXbAgM3SJSjCkfeK",
  "key9": "3TXWzVy54inMYR37BSozi6TkJFDwTp2QNGhbrD9AiDv7kwdv3JRhtmmdHrtvPw74gpcRxw6m5cmofK7NgSzEm42m",
  "key10": "5Q6p2ft349gMoCkgdbWWnoFcHZAUxk8r6RD6jjUrAgvUChv4nuvxGFxBHoh64UoMFSs3azCfDWwxSAek88p5TNFg",
  "key11": "2CF6E7KhSTf4fjmykGKnGNGJUz59YyYQvnF6J7cDm8P1khHZsNQzGXJmdmaE73tUd24j2Yzjmbs8xzJS4D2M7VhB",
  "key12": "4Uhd5Jt3vJqmmJ7DJuHzTiSkxLzDoLFAH75KbTZYu3vaNWF15kwAXcJF2pz9ofZkb4Mf1BFZ9BsBDs8WHJeYfrNt",
  "key13": "41AMZ3UmqtqTMepNZnZGLF5JQDhUFhyU5v8afZsLBtrdi1Cwgdq2nenuDshvHY8PCeevZe53ZnVfViikh4F3WV9r",
  "key14": "43gt2kMEisPtWGwXobraP3WzhLz6ktvXMEf2pSXtX3pWBTiN2VXn8iP9SjGUd2ayR8UCapzkLrgirZKNr1J9jpmK",
  "key15": "5nGmoScUcByh9tjeJ7xGVZXksM63gzfvW7h9NPvXaCicDZ1FyYprBPTsjhaE5H19ym4ZeRTjQz3L5hyXU2jBr5ue",
  "key16": "2qRySktnDCeZZJZhyZjd6L8eP7w79oCHwthkBy7hg6PSZUQJCaECXJ1q3ELDqEaUCB2gs3XzLrSvUcCGiACFgwfB",
  "key17": "2VsF2Qu8vM2tsmArkbqWnEiitqKfckkN4fwMm7JxSmMVEb4JPGQ1KgMgPAcQdRo1ZMGRRDqHwPzqmp76uJggorqZ",
  "key18": "3FZZSFpAAWxCrCyckq3UMXgDw2xhBPQxnfHWa8KSfNN9rvQdjCzBSonWEP1epTPUtC4PJYisHyKPoVwhVrUrgWmL",
  "key19": "4ibAPtc3GdsQ6t64wkrcApf9ScmLQhViCjtGkkEiD7LgjnBEAXgeLuTkgfpg4gCyBiRpg1skLrV7pwFawF68R63g",
  "key20": "4gERdngRtr4r9Z6C5tN8VAq39jWdZjV2NAWRmjyBrdx87EBhc8Dk5paFnHcnrZf8mL5mzLNJXMyaGWqX8QghGyyt",
  "key21": "DuYfPkUsV5K2W8niKzg2a7PxqMycgKdRJDycofgtDFXjecZHGVJ9frtA56KYuBdR3g25Ua56mQn59W4MmPFoWHk",
  "key22": "2GqPeH5qxE4tEu5nK5sQmJ8hgbqLRqwwGz4N8V9cfv5Tq2C4hvDUhbG7KeVhsnyP7QZhbHhVv5c3RPc5jfRwPYYe",
  "key23": "3sW4mDC12p7Dv7DkrXeNoxG8tSxowy4eNMPkUP5eYVqmvEHZrUDhTZKnAefHceQhP8T3t1uvTdXN2Lm313ykbeLU",
  "key24": "5kYakLCpVZ9CpXbCUxtF6chyve78dwxeBsVipnjXkyxG7SgThrKtPbyjEzEr89yXJVeQ1fom3rgorkjoDsoXxjSV",
  "key25": "2JUh4TroqmkoTRW1n2n8VMS2LEiBcLHfuHzSCXJnZiDCojSC81MAGBF7exTLBBMiuah7Ycj5D97qD6WmAYZ4mSt1",
  "key26": "PR47EVx6qT6Jrp3AoZ6QRToDR3pDUHWhiV5Myo9z4nX1WUc1Q1osNEFjf1hVLHskTpDeL7Tx6T8qNdhyAHQuZUX",
  "key27": "4JMaSu3xY7cnCd3WNdv8GuB4dN3pKfhdugS1qHoB4KhSJZPmRVhwaU42SrneMRd9tAL2xCi6Ghopnru9r9oceuWx",
  "key28": "5NNdetjszdMxefEsYw8mQhGe6RhpM4teN7kWAFA8yCDnGPSvWajFe9MksvrQgvQQsLmp7ZTSQAWgLRKpHnwXbwiD",
  "key29": "4egDTQtz7PAFrwLubPP4HBHnVedHvzRRREN8Gyq82CwPGxBHjRnCpQ7zP6zFFsq5pzDzCAzxQFMapN2LYvNNqfxJ",
  "key30": "2cZRwd5oP8QzRwj2BADmoVDKfUgLgsciKCWJsfpggJdpLv1Uk8VJFt8zb1c6yZZ8Q8WyZEnrv1d67fwH798SJc67",
  "key31": "5vUz14Pcthg27eeEChiNwr5okC2DsqrKhpAaLnec8HZCcfrYePLt3TwEbnJBfarCD1xLSbs1bx7oxgbCYXZBDsiG",
  "key32": "3K5b7cuUzLjJ5HWrXJqoGkQc6gUCVnhSKgtmoWFSu6J9kMRcippw4A4dK1iGgcYXMBfbMjDsgwDPDfC1JVGs6Mvh",
  "key33": "FXn86p3FdcrWpqRevf2qKB8Lf27TW6cwNkBaa8DvZ1BuXd7fvzoLyE6YxvZfY49d8VDunfoRQ1bVESwDZJPsjzM",
  "key34": "2jNod9AVLGSPVac58tgfsd9cNHSHg2wMVCUTHijHApTLxLTjFKSS7FaXPAeQhfatGgAdi5K62E761AafsK6hbkh6",
  "key35": "3ZTxzFYbpyhwithAn4oP7xufZFHkh4j5YRZuDNzgfasi8hZzq3esNHWA7tj9paYBBfU7sQxtvM2JLoqJqyXtxVUx",
  "key36": "2QQitcrhhxmLB5MJ9cPWDeaSuPQXWHqPLK2R7vvveyFZPuQX7fx4dec71oUoGLzmmAPF9nsBvfTheiR2zsnRtkWt",
  "key37": "8GioapbHewWTpZBHSwSKYpyukAnyeSL4Q6Fu6NErAPmAz59MseipQbqUWM8bt2BktRX2BgYip7ZWgfKo8YR85HR",
  "key38": "5NXGjPwrNoeErDY9Cd5ZSKaDtYkf1TtRyymWU8wDk63J5XBvD4UBXR2yNrRowQywz8EdnWysg6segThWkWruFS38",
  "key39": "2dBVN1VHpeABcawQhJjMNVaZuxK6CJLYRq4Ua6r2TQFjNot8GLCWQ48xsDAyiBFTYt9SV2iUqg5oyTLLrG9qdApY",
  "key40": "2WCoP7S4tKEbme8zGYSFxBTR1XGKLUDNm8ZaBQT4kRH8BouitP1Kw5G21fsuJXEqR6RLT3i6o9ccVJ8adti4FvcL",
  "key41": "2dRKZsJ5TyCzZ9C7qmqv1ZT8JiL8X1UZ6S2YWxeUF3Fsx85DDoQEWrtDEfovDFx2NKgP5zQg7DZ4fu57EyhpS2TR",
  "key42": "3AT3Pm51QcuTG4w2fbLmfGMYWQKkvtdRtdy5eT3nWgzoaZWnUxLxdYuWMTbPbh6DVuzMwxYjkV3QDmSfWCjWEdDG",
  "key43": "3gP5mW1JxjMGvzcfCXibWSV5kK7vQ8cvkYim7WbeGXrPWnYQkWFyGn2U9XEhACXbG1LNj9oaBueRvVbCsoHQUwGB",
  "key44": "5f5axfLFw2ZAKDZeYm5qr4cs4y3mhY6U21RsaYnYLgW8iFhLUbmgqnGyGqsapWhB2aNYuobRFY4aZc1qFtJu45q2"
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
