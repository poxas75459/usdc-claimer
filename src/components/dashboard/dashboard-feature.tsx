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
    "4KLGkCuj4y6SfvaNB8jFhoijGDKrVLMoUzVbPmJhkPZGNbgQYPHvxRg5V8JzgP5msQBazuGxr1ze8h6Bq7B4M5SY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JKYXZ74cs2y87gDnC6v49DyjEAkuXZfnijR8qkvh58X7fmAdHbyscmQsGmHQ8K9V9YNmcVYzDQzKn7sak75RuYj",
  "key1": "2EWNaUyPx1k6NuvhXk9vZqy4i4TZCvgcJXKj1vqTkmi11XtqK6B9tAAyp1Q4Df58f9d6NDfUb9bTT9ykjDkbDSw5",
  "key2": "5Q4D65hbZZ8YyMcPvY4HwtfecnnPnF7dLYxx5s6hEWcczyrBCWPC7i95ZMdyqvMQKPUBrP8iVcEjkGiZxNcfs4FK",
  "key3": "3KaCbXisvb14o7U3xJvfXjFBG1Lz164XKy1V1sMJZN3PsjkvF9YfNNxe8kU6gUVxMUdXo5HyVC9doksqPAaSdtNt",
  "key4": "4dGvUkk229wpfKcBxbQkoPyvLmAsPUeCbQ2A3tBAzF8ckkzhDMFegsoDJcARyChg6F952x2Huddb8Go7zhnEjcGq",
  "key5": "Rxy22p6Jykc7zMNxYCA9EzuL2oqQBoj5qMqZr4CQ462mwxhs4ZdmqEkuRu18qCwW4gJb63fWufMLn5BELRmJcMv",
  "key6": "XTQZaV78375DYabSUMTpSV1zGBrWvwNi9HxJp2PPn6EnQuHs3esGqgoGwo6gauPb1mTSem5TKKP9fScQao8hZEY",
  "key7": "2DyyxhFAz1jGptzMespbuuryL9UPBJDJvz9t7CyvByiiHQ5SnHebGdWBVvi45NQmo9WxEV9nx9AcPzFGz78bTeXK",
  "key8": "JfYhvpfDdsTBWaeE7kEs6i2MJgeXKsyR2Q4rd95J7A9mzPUWLJLgS9EBUESzrYEPRhFSBiYbZXN3iFk7Hk3YqWm",
  "key9": "5mFcaYGgEKfxnpKAcADxjndEwGrKFh3hwdsn5tUn8y8GxyhF39yy3zWH88Fk9rNUgoKAURfjjA6x5U2YUc89KBTr",
  "key10": "4vy1tAgfWgEP1sawd8tJoK54WhKUtoNTLDm3AxbaUjQX2xj1C7g2oGs7ckQCCv5DNwANMf1QgchEHXHBc59Q1yRe",
  "key11": "3fEvKr3N5tTsRWQvnj7dQBcRWuKomWHR97B5ou8Acxs6FyebanacUeW2qGjzWBErk8zmH9tNwTqt7wCwchE9fyEC",
  "key12": "4BGyWtVaxXpghY7waekZmJzyVS8GmE8aePkppewnfdrSRja9YwbLUtcViotzr4dFTdbzmm4HcbqkR4QuyzWfQKbz",
  "key13": "3SLB81mTGcj5f4iZtpak3Ri9uzZjBVD2X9ETvWUY1MQpVt4GP4h1Miz3oboAitKCtKzZyq5kj1Lp1u7mnWBnjmu6",
  "key14": "129NS3xUWgWyPbDW1XQSLEp2mygAEpP2wNM9FAxKZFkktdgUWS1VE8WniK7py8DT9WAJQhA9uRpTcrjb32sXer34",
  "key15": "4SqXK6Fzxkzi1njYoMJFvyCCaLNQPtq5RGixYPWqx8ZHmEZM43i1wHPuZLWDcaXbNHuFaytcLHUaAqCJNskRQncL",
  "key16": "26jnyE3gsGfNs4LPyUkKoCfjcRfrLccsdUv2Wdh3c7CKX4JFKdjDu7wJAiwVirVZVyC4aMA85bkukK1HCa6RcU5z",
  "key17": "4N7Zr1MKZFAze1atUeTAoK1hrcaKUFAR7gB9n47w6NtPPeye3g9qkknw59pKXgRHqPzzZn6aF9X4V3vu1uLdfEMv",
  "key18": "qYMgxXtbEt4Z858CJ3QJBs2huNNEg5n2fjXyGnxZX8cJf5SdtStAbiEkQWaDEB7tWQAAH9rBZFNWY2rdY5APXaB",
  "key19": "3DxJVB1PU6hanwTFi1YipggccrHokinSvjnoeowTAcK5xZemgkWgJExSD9pJwPpCtgWKR96Ekve9Bc696XphDYJP",
  "key20": "5Yk3yjSENk97QD2vSJrsFGi6cbSNDQbWA729sQGn3LUs6oJwZzsZn2h9h8uJkQNbsZi5KaaLXuipqToY9HxbUXbF",
  "key21": "4ZN4iup9gkqNfWrmsYPHgKSFG2eRBboKYW53jfyQGAV7NCEJNRXdFY3BnsYFbi3N3gH1FuzJpGGw6xxknfTWSH2g",
  "key22": "4syq9qZXonuZYCjq7Aa3YpduL475hgRWuVbSCWQ1HgZcGcwmMkHBBCJWmbF5gEGSuYcJBFTkt9WHSBzbrns1Qq5s",
  "key23": "53PLrbvazUX9TiXUxJVup95VpU5LD9GrPEXQ7yaGfFSzvc4uavXpRHR1LCeVZnsXcF8xELLh1EMXnpTrTdSZtj9j",
  "key24": "5Pbf9yW65wRhCfBdXRbwmPWkyHJksiauAuZBmu52pKuYN6aYsnMu5PapwmfsHfR5Ha4xavNRLZAXZcCpJr1H66Q4",
  "key25": "5zAtTiE68xxkdyCXeRUBTdihx3XEn1EqimfebTzSQs5ct3jXv5VPp8F2f8TsP1uwQ12ys1LM8RQXwMkXaDfmi6Q3",
  "key26": "4TDuh6VFH9TRvkyckuVdWPnVSzNXSNK2Ak5YKfybge4GUGnwRwfgmUgYDQNGtJS4xsRkExDpzVx2zGTECr1mea3p",
  "key27": "QGx61HNcEonoGPSnjeChdKE7twVCV4eANVpMe1b2jYwJfDd3zaoKJ6eN29dEP4JMJvNV7zpSrXhQZToP7qFWSvy",
  "key28": "3PEMjqEf5RSNxcMZLaBYGSBXYiqp6y2HzMYDzShTtXyBj8GAcLSHdHkgT87h5cBvCdE5ZKLpNqvNdHSHZvbE6UsB",
  "key29": "2hCUcgrKJZSXDPttYCKN5uqf3gYXwvUTMUHPXazkF47ex4L8Ff1rAkJbuofexyugGAMx4qe1Ag5RSHZY971QNK9J",
  "key30": "iWjYQUJUByoaKxd3px3TS6EWFNy56EbnbWYYC7P9mHFTAJTNigv7mDaXBcpEFtQYLfVwGxU5sEPE3HpuHtppar2",
  "key31": "4NT9qpq5hmu46SFJQNvs9ArLuhRuKHMi8jVqgNnwTpQkeV39JebkBNMSVb9trzxMn4Dy9fynbERodo3cgZxzTnfZ",
  "key32": "4SxZNUJwfWRbkCT6s7cNovNRshy2VYSwmSe6zpuaN4pz9Naoo2Y2xHDDWgUgzzeozvGSx2ZTH4JRwvUBVZgGXKNq",
  "key33": "txJHzLXHG6Ne2CkGQM8zWDK1vieLkRZecUAqoe9wsbh2JPNdVdR1hnQYgbKKarkStzTEBo8EUYRhZcg3NpFnMCU",
  "key34": "4JLW7RMMCy75NPSAek33EuAA8TriCcH1S7kzFtBrkRvA7sU7Axrs7cGw7hcwg6JC1yd8DUL8yLE1tYh2Y5DAVsFo",
  "key35": "3tXpShLj9SR5VBHvsKGwEj4SxdPuSRPkAAGKzU5sTjmfedashHbwXtFxgefKgQxhtfmPd4w11CaJCTDARwuoFL9K",
  "key36": "2x7Lqfbpvm6By4YXgfhTTjrWb7rLxfuAHFEQPtS5RiStfv55YURPumiBsc6kYMNdYES3ipwv5RhJvicRSBvZgz1m",
  "key37": "3pHWnxui4xbJ5VJD8ka6UVK5YNXUvrxbp1Wmu2UnvkAy4RVZHBKTwPFt1hmxwq95ByTCTzxMdt8xupiRwvaX3ufs",
  "key38": "5AP8DgtMACbaUxsjRFToQNvuaMHTXR5Nk5aKQarh8EF1CmmU3n9NRzDxZ4NjmnyAYEDuqraRJcK2TpZFxujgzqoG"
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
