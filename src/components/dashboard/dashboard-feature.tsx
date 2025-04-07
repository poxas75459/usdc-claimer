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
    "2v3WYk9YkxSpdEKxSvAYzHnFVCT27xZagbHC1V8JKrHgkuNhVZ8by3BGATv8ughhrAKKYGhf5ZwDbZTWMG5VCADH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pLu5RqeS1KPNUg61MTq8dK5CkKd6KCwVkaKB57MLqPC9NgFkyHseWUhdHRSJkE9bpninPqp6yDWCXRLSmtackfw",
  "key1": "236gzMGdpRZKEZjnqKeeiB36BX7sT7cMr5b9DdeJQiAD7Tg8BzAqeUaMrtMwf9qZRR7jw8LM9a6uvXdjAHmx2rVD",
  "key2": "4fNLfVAt1fh6J4rtXpu77HhX1QBWXU8qgf6oX4ajZgj8X929Etp3nPaTqot8EUQ9KzZy4DWe9f4NEuXhu7p1xYB",
  "key3": "4RmmyxcpWchh5dreMEpFqJWAmoViRrAKJ6JtdPKS3vVBUhcokVoofZ2HBqRAPoipt7AoqMrwqjsqz9kNvgy8kuCc",
  "key4": "2EYinvpisyQkeusKCuG2otNv3pD9Nr5y4hYjXwhuqXayS4vhiXEzpZrMBhJTKEbWgd4K3LzSvLQyYExoNynNU3ga",
  "key5": "4YjXJvanut9iMagcyJy92mJk6LTgeQrwJb2jj7t8dEhsJBRWDL6Ff8pBtT9BjMHKE7R3hZQrL6dFoKqPxV5hEDDj",
  "key6": "4zTGHQykZbW4zk8PhnHp3azeSviVxzqKSjHaeUQKe3vq1VNfy6XgR9T5VSiagniZuHqdsYdLDnTjQwMBRThqQ7vi",
  "key7": "5jeJC4WvPgs6yGxz3oarDfrL81d7jzHm27S9A1ZrerCRo8F2tdxyb2cTKCXddXJMVrFAgEKzNWfoWC9xXQhfemRo",
  "key8": "3bZkwJ36mNUmXrj596Tt94o3kTKbVTLxHGnGci8tqmjZhMJCGLScEawABd1rG3WhtfEzZDapT4o2kG4LK4G8YdAj",
  "key9": "47R3nuS4E4RhioofFiN43qK3km1ZUoirrMcKt1NXp39Kx486fvEyePNHYysppeBs9PYFHn9SZ8Z2yKJqrUoRfcr1",
  "key10": "2basU8ZDH9uGvMFNchXy3CJKJXzakSNNVg1fgN8sCs1SxyTvMEEvpRJUYrWMhEHavGVgcVsw6aQ19W6sWfenrLyk",
  "key11": "36Y1scPZm1r5xMYKLkF3KjdwUC2qMm6P4ckEeAE9aqFfshEKjh8vAQ8JBcUDb2nZPbZgC9duntGZtM6dDFJXAyTH",
  "key12": "2SGZeVGr485d5jqbhCyMbiRSq2FLeqvSuHn6yAZ1UtMHpZm7QzrjNyi5PWeLEjJdedsf9gGk1mq3bjMGST6e17i",
  "key13": "3cWYUfYo5TxJMXcZ1ZZabdD7Yh1AbU7R54wxiqW9JhA28WW2BgY7j1yJpYbSDfvCkJQ2Lw8VPopR9DHqgjPQuPZT",
  "key14": "21h74SUDBdp7NAHW5FJMq9QMvNzsQsDJhvxFNfPdXh1JDoQGkamzMNsbZu1n7wx62bhkcgtaYW9VecS1rfS3iZyH",
  "key15": "3LHi5tAA6pbWQfPPtmW6ruwaQy4TeXDBjEGFQ6s37xkbZsfgcXZJGLoad5ZsEEo7wVqrWKrMrhibW3wzSW4hFp9i",
  "key16": "5CW7Z4idURQ3DBRe3fJpkMo4CMXNuJRehsA8ZE1j6eYVpV5zufMTj3LSmRHSHyb5V6KJAE7XeaSucCKazMzHD8U1",
  "key17": "LtrakumBwDA9ieDvPtcxQfrEB8EHWaeXDcjnBmvSLjNHD7g8BKVHeyQjhhoxF7aqJssbvSmhdGM3mkn87p8L7So",
  "key18": "5EpBndHdym5nzYm2s7FrkfZbtHvqbxLQy3pvDAy3t4MyquKxC5iu61FG11XkfgcyMakyKZoEcmbkLidAhzjYAF4o",
  "key19": "5ebEpdMGH5n8Lmo5Vcrzq8q7MA9CFhnMp713ymBHNgof2wq7FyF6kYDkAggCeq29yFd7XbCofbAUvBPmFiGtKNEW",
  "key20": "5dgXFUXMTPyynoMSbccsTqWqgzvcaSYrG5qTNAup3Ci8ECVf7dBaYf4hsAYFGLLX6AiSm729qZ5FtTnEs9QWaKam",
  "key21": "3REXL9FTZ6rXiHSGp7KM6gu7Ph9uD4T97E4EgsfdtE6uvAk5uNvbNvUbxfDzrhsSSDr8BFZBSkFo6ex6VACG7FEn",
  "key22": "3owUzHiofgtLsK9LwyTKSZcg2rvw1g2vD3AGKx6wK7rmi77sCGBvSxiLkRtGMtCYSTZGy8JfyEJaJH9a2iQTrTbj",
  "key23": "2FmKmJ2h76PzYUdbx42QgsEGZAgJNrLQCPSaVzcxKNDFpG6ZewMHeoYvUFeveDs1xLuJyLQhU2mWCpbeZVNE2Yuj",
  "key24": "2XuJqVccpCN8E3Jtr4Dx5VBgzRvaGTf3cMuZCkENA2TwBciAhKfBrjxW1zVVBFaozpgDXCd2QtBseev8FpMKRoxv",
  "key25": "5yinmPyd8ySWx9UkU62TXueVME4n6YT6p53p7mpxAiLLRosv3siU9j2LbRNWLHKFy2c2gV36kBbm58YU8A9h6Qf6",
  "key26": "3cUY3L1BE5ofXxL4BYmqb7vVWLRMxWht6XxpsHgncDjQ3HtntP1N4F72M4QRf9b44d2YFmeAwwc5kRgWunSskKKV",
  "key27": "bfjPuhXsJnKdxrqDqFDkvctrCw4sofSbJVh49Jncootnsipr5rFm4aYY6rorAVPxfC27z4Y4oE8NDR7HJy6AuYP",
  "key28": "5ApBWLZ2sozENmoBx3wnRa8HyQyGJUhVrW2JYvBXFDW7enm5qFnKBcvB1pYC4Qio3v2gcCvPbhp1qrffDo2r3W72",
  "key29": "Y5ewFyAMzEh2WQpNxDWN9pj4fdRMtY9FFeuE4ALk6dLMzfGdznEGjE2EwU1AEBpgakrnZQcrZCKSD2MQzNXVafC",
  "key30": "upRZGWpgz5qcKE2fuJQFyGD5ehMSTxfp9i7suAneW34TUaQy2rfZhTBgE2ns8up8YDnAFMVatPt2wuoBVJkc74Q",
  "key31": "4ZEQ8bpvSNi6wRrtchUN3vk1u7Ton5FS5VhzwujCrVYfUmcyCNnqXwnNTvT3igjqV5VRbWT1sRiwip4rW8jhURkZ",
  "key32": "4xRwYYyLocURJKuhQ91KyMtVP3B3eQZeQ9NbAjE2cRG9x9cymxTSkpvhae5p8o7eBncWg7EzqxJnG7gpgFYCWdTW",
  "key33": "2xNkcxEeJ5PELEAvgoso5vqBQtWhfMDoYX5zutLtVkBGtyFPjAvm95CZJ426NFZhdNa2pXjqzFwcTL1FtrkKPU9B",
  "key34": "4KRiMfynEYYaNb8PrkVN6fnj3EsqZM45yieUdZ2BJH84RnxCF3DQ5h24hRam76cucKStCAenCEf9qK2midrDduXk",
  "key35": "2H7F7wusnFo6UBLeqSsRC542YGfboFgCQwBypy3EXEwVcX7mtXdn4SqKrL5mDVY96HUpG3WxVd7pkkCq6kc3t4jN",
  "key36": "2bUt3Eqs5JU1vdDrdkrozXcmL51tjuYAL8fq6EPN5D2SeWAhowKVAqzktL5gJqYqEgq18AfAdBmfqdVy53AcTNrH"
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
