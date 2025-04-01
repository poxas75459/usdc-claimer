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
    "Xqbr4H66HRdSCsAbjaEsdWhvdFCVJ2wCQQ5M3HYgXsK6tCiRJCb6m3YupUtxAJhgZezfzQ7hyTZCPehdqSLeeKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62CeKN236tXCNR9L6ai5P7BRkdicPU6HAvYk6WbsnCws3DmoUdxKC4Fn6p5cTHUQgLFa8vz4FXDw5BRued22uvCq",
  "key1": "3qHvi6Xu849NqtU5DSzrW6qAuW2D9zT6e2EvjpUodeYvGa6jMSmSPGQFjvMAkiTjZWx1cJVtnbmv14y9DFfjfvDy",
  "key2": "f5fWvB3bwYY7jLm3wZPdbZF1VFCbgFM42iHkTqbpxvTeZce69xcaWnRXzVSiTTJw56Dk1T7ezhJaJJW1zKwJzuo",
  "key3": "2MnkTZh3ETC1QJQSJgoGHyqFz6Q5EUPg18LwK6oXETkR7JnPHJS9i5DrSN1jii3TDR2qt4pyH8ipQHHBXqTgz3H9",
  "key4": "2LynaARxNEpsYu2vTPP5vRtaQhDaS2vFmKfyp25xdNQUeqhGv8fydqcdpAwpxnsJCJKThkLXLr7aPKfrqj7c9Lbk",
  "key5": "24z3YdNvytjzJTn7ZP3VUbxha7uKvsaioLzizbAifow1dYb52cxnY6Mm1K9Rs2k7Kn35ZZKohBYCvmQE6kFJYJCp",
  "key6": "5cRSdKjMb9pcCCmeSnMu7tLihCNC1T6t5Ame1tyby84kNjApUDwgsZTEZX8GAdcazNjpDMdhXWjpn1MmMB8rEjWK",
  "key7": "46cryowRW29Srfqa3yXutSck6v2Df1PSrvHReFYTk25HQzv27FvcaHTgcj14fSsWoAz1NqTh29RAqDpa2CRmCagH",
  "key8": "V3SmXDH8nzw8zWLKzwV6bJzoD7R2Bqb51KmtwHuCJe4tVpMY889XEhHZawAcDMRG5rsffy84oQfywW4A2vXiUpz",
  "key9": "28g9TtQ4q3PGEUZ1ngf9K9aqwCttXxUU5cAetA1sDVNhHWikeZBKopjgjM3ZJGgF6HZw1PuLVaQFPBrFdLZbmJ5n",
  "key10": "5iKsLtBME2nrzQexBukaAbxfqnZaiHAV9WMByNq4THGetfQomKNYu7WNC54qWEYrN3RuyoYLYnouFZVRJyw7d1G7",
  "key11": "2zCwYxoho5mJn3DUdm4HHWR2Z8cbFjMpxYmLrPa4tKVLCdeb9deZ49fyyk3MZxFsb7FHFVkHChpAxLTkCWQhnAUj",
  "key12": "4KcMqw9uJLy27kYkFsso5nGsg4asHVPcQNGceP2uUkYoYVmmASPTgo4cXRpzhpmuMNKeVS4U7SRGFgo4vEd4bsQz",
  "key13": "RGHNpsiH5L7bvHf8tsNvDUmStNY4b1fabzK3uKwk8gTfnvcziwJPZwzUjFe1nxh7fjRtRjwxx2BCUrFBJdpaF5R",
  "key14": "5mY1adbusjkjMgHAf2yHP6gHbpeVhx28sjhgMMk4N2MLxZEc2G9WvV8MUG7xnvWHCJ1tLkJdzuiNDgzWdT4cAP8n",
  "key15": "3ehdn36ESJ1AoQAaBjVErnbhb2mdAMjHSF3AmSu8gS4wxgGWpCKyX2KkwTPXHDZNqRar2CbjB3WWioMtWJmVH9Hf",
  "key16": "5KpdwF516ekfbiM8cJZETGv4bY7vWvUxwJfBELDz4vBtMTWa9KE6k8PxF6JvVWwLPoPTv3XJQenQi3idp3abYzkp",
  "key17": "5odRti3muhw8CBjbPTcaUzdYakw698My3p3TqkQrHsCzZX7VzSRCSrwXhd9pg8wx5EaERWJNesmUf1JiMC11Kdbc",
  "key18": "41vpEZZSQijDcmY9EWe7VDzvbHPJjNYFqkobKrmsWYsVKowdVcmxeafxCYsdqT6UpnVadAvg57tftX5ED9Z3d8G4",
  "key19": "5tg5cijKzmKAfqSzRPjfgFrTUjxtvJcfiwVhPbAcoUdphgh66aYz2mY3PKwfyE5oUvsBf5R7LWYqQSMBpRAr29pv",
  "key20": "dh2wq7SNnabQEhU2JCoQTmU7X8PkuZ84AxMzubbtdnf7W99SFft6R7aBHEfwZCFrNBjV21g1aSdqbjkbAY4dBH5",
  "key21": "3DfkUMH7E6iLrpWLMfRQp8PyS6T6PqStZkiZ69vZCQjbtMWD3KoQc3A3YhYWa8ZQMjgCRg5M1jxvkUJpZVkaZ5zr",
  "key22": "5qAWFv5RGrxkCt6tzmaiM5ToD4YjvJkg2Q7GFxaPtPqgaQC8bSAw4dmdkyAuH21BedA1RYzn1g669nrctkNSiYPz",
  "key23": "51kDA6tUL9pVpS9b7MVuT3c3kxsw4ieymDrhD5AUBAPDSnH3mKEAFB8WHvjgmhxowMV8Sek85fonSN2jk22jTcLe",
  "key24": "5Z3nksSLBPjiMVSfZjBsbGKAD4cN5amr4QXQp36Aqgd6zzk2RFuQsiM6BTatEgnaAtCk3dfdsFpYHyhhJf2iUYeM",
  "key25": "3Y9dY2TNxwRcE6a7ZDLFoeQCSeMFoEHHmr6GdEMqBwWQu78UzNXjLyghT97tgsN9tMUET3Sak8iPbXkUBp6cifRg",
  "key26": "35pZ4B36cdzW79QiuGS7GJffKormRrqkLNv4PdCbhnqC4uKRmLVML9XTMth9SqNCD8HzbHseaXiQ2nU7sKs8Jonz",
  "key27": "22hrHY3sHg8rUtViUyuhaPKurvTeZDZvvRuPDyMymaonwFh16GUbWcV1Mtx5sAQ8Ck9aQeo5r8VevFGHWbLBzuUa",
  "key28": "5dJ8Yh4MQpt1qW6SBHdYjpzqJtx79braZ1E4oUSBG1A4dbVSwjcJQW7ENJPb1V4KmQxZWFK8FuKMXQ3qJkTmvMyv",
  "key29": "4VqLHQ3wT3CbvY68gCbsuW215YHHTtu9oX3UmFzS6m1HK4YT1K8UELn4my63vw1QrLZkmxKtssHqCqnZy9fvvoY3",
  "key30": "2ddSDmcjuQpWjXvBAFi4LjbTE8g1RwgLNh3PsXQxW36ULnPaAGk8xwtMKUbUtTczA2woiA7CSCYY7CXQ5VuPaMtK",
  "key31": "3cqR3J3GjeGDKWX9PYaJm7gv7dPBZA63wsnNsFLDLu1UdyEWU8sadEa8DLYfDe67wx7wRZWxQqc7ZSwWYthz4uES",
  "key32": "4BPzXDR8s2VoYt8dSHbTHgvMocwFGxrkCbRwoH9MxzmdQ4Tm4wgouAVJThRTGo8xnvNoBQYDAQ9B9UKkinzuThzf",
  "key33": "45Z2aXCbdspkh9HzD2eJe7XyDJNyDbxGERiicAJEs9Au27satLWPvMFCNxh92Ncdmgf9pqc71boXqVQgLCGQjzJV",
  "key34": "5ND58ZS2VTD8ikXgHnx4xoo8zZ79ArrHaeHBiShXEHc8jsGLBrhw84nK5vZoAZbGtzL38DdpfDDy2r9hXd47Qz7n",
  "key35": "66eJqBC6kRh1yhVMW6evzsjCtG5vZn2NezZz7DAvBpVDTrqB6yinFQNZv4XPQ9QXFr2F2H9F4XGSe64AB6iN7Qbx",
  "key36": "31wscqcVEEWY6zDdexBqe9HXH5cowkipCVefjuu9zExt4EYQZ6JgTM9D43KwDJXZrHr5UxNjc7eNLyWiEwkAz3NN",
  "key37": "5gAtKfRmS4NnopNnsory2Zgp4U62eQxyEAfgNNkzVdBKj9MUkU6MKgYMg5aNyi1zZFE7PdHTYT1EZPfESf857Xbz",
  "key38": "5rAiYTmmb2fzy9AC7R3XqAqDNLXkwBHB47uABsxzY2SQtZJuWoqq9mNyfJch5FhdBk9BYD7XYPg3DH8hmyH7VsVz"
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
