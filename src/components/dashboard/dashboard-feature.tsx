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
    "62MSHopYoZyo2NWMaA3ogbnn5rXZwAz1KWbBSyPtbEUs8Q7VZrDyP9mKBCBdcnKYV2Xc1BdznCvpHRpdov6SWfwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "258CRhiCQEazms9y2fGMsixjU4NWe92zEdx56GAxTqeVzkJBrxkKrPWhpE6BMWT8xz85oX1NNXALEr16wLHFXqtN",
  "key1": "5q5hJGHT8DnhVrjTRo5RcmHCdFN1ehbvEdcEiojFhkFbzG6o6PUEjiqvk7eFeBzL7xhsTNzLenrtEC8eSjKMZNA3",
  "key2": "3p7FpNLhoG9NSzKddRjDRwYPzx53Cjrri7fVu7caeo6ZCHtZVaDTyPdXN8RSbSfNwtpZQ29amSoxzBLimW9uF17z",
  "key3": "3bxaNuXAbSMzPwSAGuHUSz9pMB8wsnpHKuD51vk47P5erppUtHDDEjuc5ZdZH7eAcvWoSMC5zRgXUFuKCUHwfq3T",
  "key4": "5UbigSR1RZorV2TMwds7swT4PPJm4o157LV4XiuW9tLxgEg2hbt6sSLjLjagWnKYrg426S8AmVBF9ooButQ1x9wP",
  "key5": "3113TQJ3gAVg5hZxgMfRoQRLcHfQCva4BdLHAgjNR6rPMNQvPxEdjEzgyJUepVW4zRCsiFvf29xHWCu4epVpPsNK",
  "key6": "QsgybLx8jnzA2uJZzcaNSAFAKxoTgJ9tkHQKZmpDcFScBEVEEpeyCtNmRx7yN4RFAnKL9suG1emJso2kW7Uu3gr",
  "key7": "5Qjz19QAeXB5Dm9ZC8xr4byAbt9iKsNbqnCWEi9rFNDC2JbKXC7wdA1LDGJagKqFKzMmGUdpjW8vnQi5fvkXyiXF",
  "key8": "xCPfHyKVWBpqciBH7LDwVunLReBq9oJqXrYrSMVnx6SbDQrgEi8nTPaJLn3aRn5mAiMYjcFNggWHwHaPNR7srNd",
  "key9": "4Dk4K8CeKS1kagNsm1xEi9FFcoZCGnhiBEEnubmPj2wpjw2aEeWJSB7wjd9sE5VhfNFYHiMJ4tuEYAsCofh2NdEv",
  "key10": "2rH78GpgwavmqQ8vUZP5RWLnXeEx4y8BTH6XfkG5euTWY9tpmZYZA8ZkK4NBFBqigvHiEV2FK1MaPPfkZekAMLtL",
  "key11": "2NKfhewUmzYxWzMTk2oZBCKim3vChAnzyMFVNTge2vWv6gDz2ZpBJ42peNHgBEYHYigW9ZiJxYizepwqZZs2WrwR",
  "key12": "4QKsYXzLuoEq5eS4LCaSfueZmRjZkGGYFcehSSrERn6ibKb4r3oiwTbmbkoAXfWdhgbw9hb5vmGVKYwP1ziwwiit",
  "key13": "i3vBNhmEHn4euHXKQnqGxcABQfJKDVBphthWnhYqAeLYNarbsjFLnhLWGdJ5om6DPSXqQHLFeowhokMtvv7KCbz",
  "key14": "ZeFbCVBCugmFR8bWfxVUYgQ5w4sNN83Lsomp3zP2XH4yECeFVNEu4XBLi4pf2221EhsQqtLeKCb67LUmcFSTWtd",
  "key15": "3VZ3Qsfs5YWLgFvybYUXRHW3mXtXcZx194cquocBEWPsYgCCnsfnwsTQj7JbRCYfxy67PD5nj4NqceddL7A8FXna",
  "key16": "2hskU7EgsA7mSmiFcsJDFDmS9Uk4ipkiyAVpjjAJdFgW3jnuuJyQDE9wcMctB9zE7ver67fGz3D7zbNRbVkF5ARV",
  "key17": "dwtZfyTJFWLi6UCbsn3wSY6SQ2XoY2GCjHepP84jMKuuAURKdBTvGA3yZELLAqhyWqruXZMgNuJzFBDocJYLkzN",
  "key18": "285f6Er1T5RQUQjXLtZ5J6b9SiT8DKrHfCjMT4gQa74A3YgBBbMfUAmG3Mnf5GdVoWxERKp6pqowMmX5hvfAsAoz",
  "key19": "3zwohoW8iukoNhgFJrtxeTorJtXCHAxMdHGJpnxAmtT56Fg9jvnunJtBrs1CWemgMWPbRXWjUGhkikHbgWsuKLMG",
  "key20": "2zZbwPFay71dPNuaCesZYPvsAqhzBRidBY32m7mHigD6h2qTMDrAi56JApZiQVAPETjQ1JFKEvY59QWzY4RPVuVW",
  "key21": "2ujRJ2Sjrm6St1QBBKA4sknS7DZdCaY7ZzsY4oSyQXpTkqJU8pzzsfZjvJjbnFJdDj4UqKsNuwqTR1Y4jdQjXzan",
  "key22": "2AUsMy8NRo7yWQHknp3VwMXjXkGGEy5YwkTTT8gFdTqFDp3MhXM4pe28nHtyjDq8YgG3ExSSZefnqZv3jQStzVf8",
  "key23": "5cse6eWVnJL1NBThVVuYMfoGkhAkRNXNoPZ6NVUapPeHJVoGaYvxiiF9nNntS8Js2K7oGGwZ5SpAncMnW7y891fC",
  "key24": "4ketGFC6ZjnfpAq3JSqGPaLVGjr4himbnmqK4SNo1ykF9jhS9piyNDY2dfgxLrcFRRmYPig3Soubv5bR7RvqunYq",
  "key25": "4fqDknArc66AndM8tGFueA3r2A1gWxXQbSuQcpgqrxfFS8UaRZ2veFw6C7DfxwsX9TWrwfUUqNFDWm9dAyMzfPUi",
  "key26": "DVFJZbgcAWutSQohfoSFZqRcAvW6mhC5Kxfxa2qGgzBhEb6de8s7F5ceDKywXroL5mbdVX7nNY2W9JtL3pN1H7d",
  "key27": "nr8MAh3A8zZrbTUu2WbPkxwH5toErFbhfWVwMzX74Mex8dsKcY7MXoLv1ecZFaW1gbEzQXvT9rwdMf6P1dPN5MJ",
  "key28": "51nFaiNqFdjSkg8kgEmjdYvLcXotBzpYS5thDPrnpCw41tGFbSLowj11J7xikjg8HrgZ6FDgsWfc1nUxk4qvgEUm",
  "key29": "2mdjxpakzabhusWroqy3ADFBHXtyFuZ6ZLzqsyqfmsqr5rt2VV9nm67RY4JjoN9yPoBH3eRjVK8qhSwTVX6z4uUv",
  "key30": "3KUdcJSWG8z6SZuWkfZxLkaLDSyX8LYWhvX1C2uYWbHXnJhMGT8ABVfZBgECGq1RT53QW3Eyou4xT1yVtZE5THQr",
  "key31": "4WsQAMjh5jfsJdhBoAZEyNcU66UbaUvdMn5bFjuMssnLfB1w5GREGxhgEETy94hjq7GG9TGuVMg3u7LzTKhiAe93",
  "key32": "N5rBEpSj33by99MS1TZtZSVZj83nmiZdMcEJTfTAWgMN8LA7DN8Prxp2afhPSJXQQbL8xc7vogkCuapsLfdnWit",
  "key33": "p8XuSfeaJBhjDUpGejazbHt19ip6Rf1V4DiwttGE62KsGjf6iXVQAxF3mAom1mgtErDxHrygadzXBcTFh7U41DN",
  "key34": "4u2qeZenZWAc1PgEcbMnDVZQuCG9CLtfNPdG6PLwaLUBPWPwrQNyw8G8aaoC4PYiMtWHQ4HFYPxxJ3t1AHnJNhPm",
  "key35": "28gxpssyW4XTZTKioz93LN5FXXsg6jgxk58H1VybmWFGyjCoAx6NZMVMrzfNXpgXdazpJcqhVZWhgHqtj85FpvGS",
  "key36": "3ykRAR6TLXu1JZoT8xH2buuBiTcTUYzKin46uk1Sd8oamGLspUU4AkXX4oQxkHqStGDhkWZ2ihodxYoy6121qvok",
  "key37": "26s8wfJH4KmJPmqwekpbgRM7uQ5onWveXfRYxRRxAyoQRWHTjkVfLRFAze7ya5NokbvfRvxXA8ND1s7F1NkG1vLD",
  "key38": "34LHFjDbmWMpydDxxENiqWhfVFuphMhLMUeXDsrdrJNn76y25Mff1QC3BFj2JaiJugX3BgJsu85jsw85qGeSTd5Z",
  "key39": "47uFdT4DUMQeZvtaZJ4JzpoRMPUM9gZLiDhs5NWRi9UhNGdg5d44y5oMFGdbia62SYTCFxue6WUKukyM1q3fm5Ch",
  "key40": "5KB9jDuBQkU3EvwzWzvc8ZZiLMy7Z2hFSCBaUfY4Ncxgo27GYUCb1n45n6guJjLunRdZjWmZ5qZr2uWj4rn3hQDV",
  "key41": "3YJqgjqR5QfrX8d3RWS9G7xX12fZBtHieu9p8QZKW1eKaVvahqcmcqBNJYF4oVkSW91vZw28KPowtW2f1HqwbgVc",
  "key42": "2fZf4J8iu2DQceJYevyE55YPZ4rdZik9ELqhe2BUk3AcKXURYJ7ncDTHbByEr8bLkd9Ryt9AywFGGQnCF9J2z6ur",
  "key43": "4MLsRB4NjceBPoHt1epqUATreNsrtKudxoPuVignsUewvjGNzEg2xzStbFYZM8exmvEnfFVfktCK4fCA8Vvxrbe2"
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
