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
    "2eJHujfRuCbSNBB4GUDjM8GJj5XcgCU5g8cDcq9trBQL92jsvyKoDuESpzEqJY6A5T2HzFzAPa5uupDda76hX2KR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vbb1HJDrGmjjSVAUjAUrxLLFYH3t5MjDGARkxYf6NBmt8TtFgAiozU8oLqhu6U3MsaSgcpY5E8seUHcF1mGzXP8",
  "key1": "kHnKYrHtZK82j8bSA4ZqWaGKaAGFCuzPUKRn37KYDM1HjiWGwwmYmDZxLvW5QukDvmQWPfehn8dxQvrJMnLtWy8",
  "key2": "4FZmG96LPdJ7AKowgiWQuJYfAF9jUAs84reKBDzexr7QndmZb7CbL4FoqUgECaCgLfQSNAjpzoHAJbNi1MZdLJ4G",
  "key3": "2jgvbCfo8ADmyMPkZcotccHHCo7qX7m1jWaZhMGG2R2s2d1Q4aXq74KqWmJo8x8pHxSfV1p3ZifUENxQY96R3B7y",
  "key4": "4wSEzHGTfPqStjCGbGP2muqyQyZnwKJbXWxNqnHVQu36Nq9VmNQHXUbm8y7pQDKTncb4JmsGdQnqyfsDRtWv3uUc",
  "key5": "4rmUH65H85penBcuX1nC46njcPRETjPnmeDjn5qN3HjLneDFEd5e9YtHqwgqTL9HpngY7A4aDJpvGApHHK5jyd8D",
  "key6": "4YNNgCdax9wskaEgaDesHxFcNrSMH7s9hxHuuGvZ5td32uSuhhFYf3bsSxqAtYVKUaYXe47gLnoW6wALme7J68ov",
  "key7": "dqzgibB6maj8T4HVkSsWmmSnR9Uxk3KAnphVDwNkfedwhHijDzSxyhng4pvxquujYyEE7bRxkrcLZzL94qN6RF2",
  "key8": "5FQDyJj1KApJQdyV3J8pNQzbh6hXm6kb8TdJFfeNTdNdmBktdLry2jwTk9GP25EtKAyPPZRxVJzN1RXepUgJyzft",
  "key9": "7N7RBbrcPRWpAsAdFvW9uSqEoCAoEv3A45NTwMLhqD2vCjzqbpmWdLFsTkEGTcFsLymBzBfVkz1cLneiwftKxdX",
  "key10": "5pUtzLwyTBjpYVn7uSnVnvBqXNAoeN59HBYT7fhbs5rkCsFSHmHysVbNnN4saixg86Ms8qj4RcNcUaX9JKM24Cvr",
  "key11": "4PHVHSDsh4QxibkzYm3ez8XgQtCjfVfVJSTfAFdmJ9kYc7tgDUqyi1Rs8Kp7KxJtHaA2WTWRAkAsqCJq43miJasn",
  "key12": "4eWXwmx2sibh5HqKghsGRMzSwzUgWnvBp8SbE5cpBgrG9gbUtatSAt59cSUGnM9WUSfB5SvJtxsHYQ3nz4dH5RWs",
  "key13": "4eZ3SSVHssp6WenxWRViDoBCARYroAA88g41xgebRy87SVqc4Kqn4E8zpxZTXJQDaJZnv3ZhgDGhyYMRGx5QLydr",
  "key14": "5374eGjB1nWkTdJCJAeG723ZbZBcHKocqZrtfZUUVNBGpy6hp42DwRYF2ckkKaYpPFufkcHR7Q8DvLSpYcmZvG3b",
  "key15": "2ZNGXupkcZuoi5y6UdpzcR4wQztZuqE84Hu1THgA4QV6EBcTQwggsvVKGt4DMiVAg3oEZ8bPR65y54E94w5HKNDy",
  "key16": "56yhUbhMYvQ8zB96p6dvZiPhx1ZGXugHVLgLdtiCiS63g5vquAzUuVtBuFBNKSVeAfMuQXgziNkAv3E6iv6hnjny",
  "key17": "vaveCvDs83d79thCXtfmTK2pnBigfkGNhjU6RAXEBxx6n2TKwb3Sbpjc5TDWoY4Vpc7iKW4ZGcb6Sedd7anqrwT",
  "key18": "P72H1JqvvfGrnMM6x5GGfZhRKWgVRHhMNLDxj4je7NzAo9T2LRqbF5Wid2AVTTHtCXxDrcmipytqivNktM1Q9cE",
  "key19": "3qgXo1Quq9VY91sSAjBdXEV8p13bNtFiRGeQyvhdqXfPvzSataxCskACbCSCCbSSMu9kUESGnkW8pdX1m2bdggoK",
  "key20": "4UyNttDBHPJjePywwB7RtHsPHCT7ZyN5dRrcCft5ZZzRg6zKSXzEf71K4pGogLqwrd2Z6neB4aFoxGnCjDfr1orU",
  "key21": "5VXAaheyB2KDBrSr23cQYtYjoGY1Xn38xGShPBqV8Q1YNoccupm41bwgHD28TH9hMQCHWvV81vJ3cBCRNHfkqvYo",
  "key22": "23XW2hUYBZFan7RtSE92HSf44b5ypcDmzFVE9FsGoUbgjmansKe7DKWGK4k636GoieFes2pux9xZdLwQVAe3vviF",
  "key23": "2xdn4EbwiQckpFThao4zvme6vHHoCtigyfQU6sR87gij9i4c34mJBtzd9GXXP3kDLbYuUVQeFaH3GPc51oL5usb3",
  "key24": "42i2KachjuVXEp33M91b4oVq5LeGRvLk43ig1pgpRkfBqXmxJogY36kbQZnTwznycqHd8qyseJ9tdPFroskF1UYm",
  "key25": "5fkMGdncFS1qyQVMCYHXbQpM1fAGvzZgBa58eAXVbsvVnfHiGgG9vqT3m4x4DAhV9TxhNVgP8cmF9wHvUzuGpbbo",
  "key26": "2wTAGJVztpfZdaoPKEdmCmHkQvSiB1E9bFJadHnELUENUaYdnM86kfeHDBy6EimwDE3HvHeeVrxnvTsmYuc9kKD3",
  "key27": "2xpqeAKP5Yiu7juNx7dbUeptoMxFutcrZnJxxNGKeqMiVwmyTUsRTZYMUT3Lw5rPJEoeb5r4xD5nQoF7DPM1AqsU",
  "key28": "3hQfasaSK4rB8QYDp69zdwfqEi2pgCC5E8CDXrJt66E77mEq9KBXpAbpCsor3g8KDGj6DCkx9JPoeb8HJBDiofmA",
  "key29": "EEoLHu94fFKkP6yEzGc21J8VrxKuWCrogZi6a8aJdiBSTCq5JhXN3w6GXSn3naBt3uqmxMuwA3oeWX39oYodk8Q",
  "key30": "5xYopxktVdfs28tZGUA5stMHteZmH8jpKtFvx2ANaTkzQFv6E1kV5b2HcTSZvMCJ6UfAtzJ1iAxS7K2oRmzr3x4J",
  "key31": "46apBdzDm4W2bdsFEepQZV18Y6PhFy8kMxZM9rct5ewUYP6gPJruLmthWsiowANsT853gMynkuyh5pGfULJqRmb",
  "key32": "VDGG9LLLD3wmKneubasZdxLCgooqduef1pVgqi2YKMRyW6g2cPxGa7ryyjF6Tuk52czBRqFy8g5TXspZxdR5AUU",
  "key33": "58uPq3762E3PW1qnUYzhvizP4Mmxr2DRhUSd5kHmMku9HGXFaaKzA5qfaz2NUpyFQGsuk6vp7qsVjkDovE7CiW6n",
  "key34": "3Jf2vosiGqYuX1LuxiyUeHtAULa5F7RjCTJWA3uN9w71TcjNqSe4UfTmvf7R6Cn1Vx5irHtJfaNjvkdUiGqQmx1i",
  "key35": "3jGd15XgFXQNeC1xSNYmXJR55q1s2ATrKBw1ksDX5oDQV7qtsrjRbP2gBHLqT7EPK5tWtfrzspeAG6pEbynHyJ6V",
  "key36": "3fXPCggxrwqAsaLZkjw7QyGWguaveXUN5hYarfd7QnAhcofFgfPi6cPBpKSny2hhovqP2C9kUWZmvrZ28Uwm586V",
  "key37": "2iYLbB5NCkk28PEkynjboG82eoUpHBfJzVfeFHaJwF9sZMFUbuC43onZY2FgenJCypGkMA8LfGzNwrcS7LfgC74f",
  "key38": "5HrFkN7ptXmZgrQMFnCQpQRHu9JchDqzWsVAGpZ7tGsFNTuShQL93KHB9Da9sKP2CMWxhXipM5pqN9Sz1nmgJcQ2",
  "key39": "5EpVTgxNYEVjLTvBPoB7qjxoBtgqpRCwHkenhFUN9LDmXWsbR5rLCWTvbyqZswFF1T53y243JFzd8pKcYgQj81ch",
  "key40": "oi6mkEG8wEA6xHnFvMDGi8NbB9jBXMpBKLBFk5snDK1Z98VeqYQbnLkb35zCyzph1F1xdWhYoH8ZJXBTvnHG1rG"
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
