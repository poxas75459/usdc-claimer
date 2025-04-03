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
    "5vfTc1jmEtn5KggepdCSZQE3E7KVtJmozNJnZiPqsciuJjqpWtx6ru6R28WUeErcv3jYCcZ9P36Z5QzJp1ZvSerQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pPwFvxZjKicCjNG7mh7vSD3v4G6T67oteb7TLxpoHAZzizP594FLffaUqpEPxepnCNxqPR1sk2QKKcEwuRqLE8S",
  "key1": "HNK7F8zH9jg6urwhrsHLcCzXfmktgV8aaViVbU8E9RDmQUzAM3jLAvyPgod3DiEiRecaMKHSD9pqDfWAbuZieRw",
  "key2": "4p5zpYcRR8S38Y5bQX5GKaYmupRpFbWKyYx6inCXD3fqnNXrEqhFHuKfkekDiiMEZ844w8wLn2vzbnQq3wxWY1LG",
  "key3": "5ZyV8Gr3kF9NKSPRqqcXatrovRG6QPeRewaVutgijqvnubYbn7hDwpqGHxe5mq9JjvVX1XqmPpWF98mZbpStvGFd",
  "key4": "1XqBwE5Zf4c8rigyM8RR7GBUusvxgxGWeDUfW4jb65QHGumBdJvT2W318oRx1VEcieFGcujgFyWPSomavbbzxr1",
  "key5": "5AKgLjrCoN2wtDMszAPsHabc36bmX7SXebsgSBz8euJgHtWVbSFAFUhnZTPdmW4UGtfNKBn4kd9EKXvHcb4AjgPt",
  "key6": "3CwWAivm7L2Rh4okBrR6PVkWXZsdLwgUrwqPmf5Smr57CJgsC9opohMi9hccdkQZurrVG1KkgYkCHk2SLHcrGGjb",
  "key7": "2gvPuJPBguvEL1MDkhhsh6ZGhVBR3QiLjpQoipshW63ZwjYPGtvM1GpA428X2mSHfafq9gdnC2JN9F3HgQdCUJ2P",
  "key8": "2AhSJvt1y8w7wizKhttAQEHL8h8oSbV8XS8QUDQb13gtejQ46gibacUH99sr3xq8DgxBEAZknD3mVPF8uweqU2Ap",
  "key9": "2NjADWWojzzzZhWrvXR23w1MNCfWxV7op1rZLhDPizfi1afDJFtKhV1ui3VtZ5BaWxjPL2bZRyyAKVYE3qsFVhzZ",
  "key10": "48RDFqvBRs6WdCUXvA57fE79PwxF7DQzKRZCVRABAaBoeXnfCsorEksQeT4H6NaHrQe2YNGstKpenLL81wXwTFDA",
  "key11": "494WAEmJT1mi5xeme7XG2rPKHWDUDeNezASrpQg5Ym7KtT9NVQeRVLyUzm7ZEzVRLbMrcHYZE3Xxg3zNrJy9mjLM",
  "key12": "3RsSGfwCRfRF3rZ5A8f7Qm5eyw9vtNTtbkSPo4upAg4fg3QoXZMNQ6qDmcDrHZFdyFZKBaqYroXAzHkP34RPVCb6",
  "key13": "2wUfYS6tCqcPpWQLCUgCUx5f9ECJNmsXQQbHnC4hqX25Ky4pMM53dcDpvxhgP6i4SfQnvqcxzX6pCYGRLZ1dsmN5",
  "key14": "4Z6UzwErnGKZP7o67XFoJLPgTdXyNRqNGpJkwWrWcmRR6J1CXJ8mz3c3vS3qdjYDRnKruqhVrZArfhojp9v1WSmL",
  "key15": "4goBpqzg64RSZgiXmEe9txaU1GXPGaHb9yPiUYLZKg52ccqh51K9Xg6BETHaMkfGxESY9kKF3rDFEjBBXFNbGykk",
  "key16": "3Jvhd63DaroU8gNC11goLTLAxG2mcCqC3EBhW35b4cYFMsWaY2H3UXVT8m9mQfqzS3yYywEhLii2rqKUzyfD4skD",
  "key17": "5pVP9p4aDFyySz2hZEK2XyVrZCcW97SC9aTnba4A8MsDW29NehsA4tiiECHoBToaNcbqnY49fY1q4bF5D8UApCX",
  "key18": "ab8bcJ3TH6Ckv2Fq3jsMiSaqyhD68fmAnJiW4DkXuSPGH3zhC1Df9C26rp26gNi8DFCLsMWmrdUhNZ7FQqenSEB",
  "key19": "377jbsLju1EZYPx9yTdhdoVGc2q7LCynpUzsjhg47TPuMzsZ6sHUY2Z3Qv4LLedV3gJdjD7uMaiR2TMAGQXEWE2o",
  "key20": "4PGGpgcvkUJiT9Be6w4orUAd2ucuyHbhwc73zeUuZUtscuMZBkQQfhjWeJdoH1kDiiJW4zVFzFETEABxVxMRU8FZ",
  "key21": "3t3u1aAK2i8KD5V1aNR1rtezNxRqu72zYCJ9mHWfemzBX81odihsuhX8jvsn4jom6rGvwS7qaLNpfp9p461X5BsQ",
  "key22": "37AvkJYNgGoNUkafSgZedM8zRLzg1ynv4SpML8HoiwZCScU79B2E8co57CcKcHmfk5YUPrZAPkWjWTi4VHP9pZKb",
  "key23": "2yRapeCSq2qQysx57N1FZGwxQDQHqQsgmvNreKPK6HUGTKwfV8tmyNDUMu8XYgUiyZskRVF9M44p9J7py9HogvSV",
  "key24": "cQPc2aDi7PwVWTScUNcfg5Sq89fUViNxzpdbaJMKED7oJHPJpYWB4B3J3MrwCW38uPf2C9YnReT7JtfY5UnoHyf",
  "key25": "5jhsbWN5M2aAwTaLnWnvT16rHxjCaddJHLbCDXyAfe8nSaAu1UN9LvHBtBWTaJKndnRajH43aoHoyFVUrGiW88uu",
  "key26": "2SuzNg1GZT9TjZajWf2N8aFFY6r4ZvNHQZMt7mzfHAAqZzHZw7RMSsrno2KPYpTu3VteFTT1A1ebbBuMaVfZAgsn",
  "key27": "4SyLsnTgxWM1aRf66gPgfZuCx86RRTQVgWjYS3oHqpfYvbeiwL7Rk4cFe2D6h3YDwYj2hKW7kfPWESnkwzQMrBro",
  "key28": "3q4Ts9XhVMa9TdXQVAan57sRtcxyrPxoxSQYx9yNeZsJr6AAQzDNgzcziSNGewX8LzzHzDAx3Ao76fCD34WZKyok",
  "key29": "5mxxwa3upnaTt4GFwxkDGdJ9piXgPDYevq7dZzTQ3QvjiXrEEdoPcJVgkD2pAaA3tCwWeHjsEtUXsEtjhA6u2YCa",
  "key30": "5LLp3e33yC9Ts9ibgbdVZ6BziZCteMk7Verr6ebbo1Akpp8Lq8wNSUaMRbHDV7jhii6nU2cVExxezJPKpt48gukb",
  "key31": "3JXwSqB9tnVzm6DmXNZCFVtcY51ZqtxtohMwzGPYBdfuTXEt22dGhnCHobxJrESQvnfgcbDSsAdixLdpJzzyHKiM",
  "key32": "4jt9psHWtz4hGRtax6ZhSBxX1guav33A3Dw6CyePnLSmQNrNNqnL1tL5VPmVkwSoeRPx8jDGmZbdDeQoogCjVmpK",
  "key33": "1wSpZbpgVVcvCYn2H4gpPxXV94uj2MMC1G28kKT9JgzRjTJE2V55NHkkXtMwZCFrQvvTxt9RHV6rX4cD4NaTWW7",
  "key34": "5pQPng2ZGvWA4FBjuuCUfhTmHuZmd8jpnUZeSM8ksu8tjpr9BYrt68P9bYftJDUYg4PaehqMGACua8C4RBU5mSqD",
  "key35": "3ioh6hoGGn8t4MsuvSC2ZRUwVspNWSqVvRvPDfGmKJFjjzC81TdusuovJ4rq1oTxGEU4awQ5ZMfBnX75wGy36bya",
  "key36": "232h5bBLxoecZSPtg1gnxJZ52JJvmVVwkieCGyQK6ryeReEfWtst5DMUXGAh1gTApzeyXrCUzbMhWXhMi8CjqSpX",
  "key37": "18wHU9jZ1HnWE6qqnzA8yvvRAiYbeFgVQLQYCM8rYHbLZMcVsbW71hr6tVKFazfDg1MiAb7tzttBmhY5h8gxN1P",
  "key38": "5i1HQsBtxwkPFomJvUKupHiRvQsVXTCqSvMtjKo6qsnUBdxj6iJSYdR1ZQHuJFJ9utqe9GfQUaTytvSQfQ9sAWrC",
  "key39": "2mo8CVSPCD2i5BnKyZBfJjmoPw5S3MXnCyjmA1hJF4n2DJvTXx4srZvMobZtZxCaV2gZrb6yRzQDsYGQburq6UFv",
  "key40": "2rfuhkAonvrm9JSUTWjBevSazEQXXDgMu8feLc34ocZxTNvvWCDpAW89SjxemERScHAsAA5epkyigDF2NEx3Eh9B",
  "key41": "5aWXh61tyavbcALaJ1ZxrZzR5MbtJ3fQZ57d3QvnGWx8KqYawYT2XT7X1fWNPZQ95ck6iNKFdmMw7nntH3VQgWgD"
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
