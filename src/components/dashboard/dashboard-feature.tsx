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
    "2SjgSeVb7dJNwPeLmzB3SncdLoJe8TWrsXoz9f2HdZjZN7dZvaa7tNGdsZLEiCX1kGfXVZRf2XYF6VH7ykTisEhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9nyR1WWktRPmqwciQ4j1vifZtro866euZCWRRD1t7qMouysLHwtqXUkWT1YpDwCLpd5rAhnjSdYjc9qNfHdyWnA",
  "key1": "5UhweiVTjsy1Mj9egNRMtvFxU29pM2vxahEyNnGvhr5RNmvgdZqCYk4AGmhBQibZUcjgCQRfisyCiywQZC1n8z2U",
  "key2": "51J2skMUA4oVa9NdwBPWpatue7qzdxTLLT8J3osJVGTyaFRoy1XeioN9Jb37qBGBu4o9FYSTWL8BhXqPQ9uPXu65",
  "key3": "4mUaBnek8d7BRxxnjrhqrUjsy5Pr2itTbEAp2HgzdDRcuVFTeM9kqcaL8VfrGoyAXkiqwbcMT74EqjCgRgY3s1MG",
  "key4": "3PBtRBL5FJfoM9UVaEWPeMY3UXqxfsgS5waaKxUfg8LfoS5zg3ArYT8mdB6BcMw7Jwn1hC8iqDyp4JRRxFVs7maa",
  "key5": "4oNJcUMiLykJB35ZcqYUzJBZ8npjwJjtcE8WwLY6fLtit928LxZdq2JctE7Pyg5D8eeJw9B1fFjieVr828ULb59X",
  "key6": "2mJ45q4p8otBw4ko55BuZ7BChueNqTkESaND1f8QQHZDehAKqjpRikh548hn4bdHHxroBsvsM8HSR3JCS7jJ9Ldg",
  "key7": "3doLXhsbxWryUF23w85RRE6QCzmZnaPEkoqYbaaWyX5aeSpPx6u7Kop6PZmsm63zZsB19bJx1XkzXz5vJ3fnL8XV",
  "key8": "3KWoUfbxQtEz2BCjFK3LbV3jabPq4tAhAjzAVU1NyASkboMTiaFoZ8QBPUDNMKWHCGZm1z4zbnxP2H9hc7CnXDpn",
  "key9": "2pXXPZsFzxGbgoo2RPbmS553DzaUJXC4K8ZrURBVxGzZz6BGctuGm29bthzcE4vci3s4XRHq8o9AA7t9XXvMu3Ty",
  "key10": "4nLsXh8i1EMtr6t1fNmDrJyoxk7YcVvG8mJ5zZp5r6UiHw3wfwMe75MEw7jTneScd3TWyUecBREk5HYaFqquhwAb",
  "key11": "5PR72XoPd1ScYWz2zkTZ9uWrnJtGe1m2kRhaGFBPCUgdJQCjAvxSHnXTRAY5jAZpgk4D4V7bPfBc3KVcT6KZKPM1",
  "key12": "MU6r64HeLSsqU5saE8Xap8HEKn67gg5uEXUhyGfAXesqD8HqjD9ZgjPbhxnuEcwhWgd5J3XAiYnSFi6ZVeDsKiG",
  "key13": "3uGnN8gCPt5YiSntGxPCJfecsPkc5zEQ9xnPaGgp3nLAUzGNtGuJbZfA82LNkYfRZEdSrRPJn4vHvsYCdf42eEC6",
  "key14": "y3RqtL6RxkTmgNyxSUQcG4TosZeDYzxLaVLCf3BzwZt97ccBDyDzjR5JKE9wR4fucJYaqYtFRBx9ffL8Y1roRBG",
  "key15": "25wg3zrZk9JhNX2xPFWRvSLEEjvCP2UwbyHgSdyMVuNb1JeJmL5fyDtzVUZ343RuVvyUJH6aR2MCK642Mc7C6eix",
  "key16": "a8rsyZ45uhXoQz2er8UVa4EPkCskZcd4GhsK6oLi9Kn2Yaf4weKYXMrsEcgMiPbHjWiLyBjhYGHmayC5Sf6nPiH",
  "key17": "3CNtguFRkCRFJ1FiDs6cY1FATdBsYHv99UWYCKGvkHFrPP6NPh9U26UqWXcaYpWRm1vADGrH88e5uHs3cMyWwhhP",
  "key18": "67oaZzTnygi5DBDfB2SKq4j9iuNoSZXyWxVxwNgmKZ2mWHSvXiJ3H6EWfyeyeShHYFpdrmpo2sdkennz8GyY8zpP",
  "key19": "5RnkxhKjgMcNKo53iYLKFTdid91ex4zaEfftDJWrthhA5GeXopBKGYstSvHg3RwVB7xS3wehCDbpmAFFUCf4nyC8",
  "key20": "43Eodx7noCSNhzeA72YtStEjHbSJMzsCrCBRqXTwHDgpGfzwEWzsNpyCw2W2S9KqDwksiiM4dfw4FB1SZJWyMXfb",
  "key21": "5Crykq1FGedHn23Ynd9r9awgv6v5hikfaeKS7VQqoGukLnEiVWMFTiu24JQDPpwcH173nNRs7ydfELh5m1v2ztEz",
  "key22": "w8uqHdE4eQqcAzP8MvPEabqegUeDhtepJNw1SYoSx8gpeR4WJ8arWsAAJFzsS85JPUvH4adbbTJ1sr1JUPd7ds4",
  "key23": "5x1jgGCpn2kFaoPYnYjddBXgdXrGfoWzANDPzj5bZWpERK37ZFGLQv4mgUXiuiMEsgtRSDXNkwfQMDeJfBKkcL3J",
  "key24": "4K4Kr5a79RA7y5to6A4g3oLowJrzy9uNwYymMP3F8S7ty7xde9N2WwUj8qRMpt18Ri4RyZ2Tq71AGz5iHJ6e8Yv2",
  "key25": "5jQN3LgicRTxrZxNHjRtsz8LCDuLo5kxmEbCCaN97mAPpc9eAzysBrKai239QYULpnaHY9j13Qw81FYQ4z1B9t9V",
  "key26": "5pg3Nrw59Zf6hmU3uVs5c7JUtfX7Sk1ZJ4aa2DAxZ7xtCTA58MLZ5w4W7vWXuJzx92FrWHsReUVj7ieqLvucUxCh",
  "key27": "4uDm6p2n1mJ4EraVh7x55a63bmCoqfco9RTTcLUfHkKCmvX9x39QyjL3SFmdY8fUWmPqRtntQNHVoG7bZoaaFmg",
  "key28": "35K2UP15U3aBZ9w3AtgCpNNirUn6Bgda45umSBmRTzKFpfEtzPmRotfwFwCfiPPWzoiDpo2kYYfSmcDRa3aiaAZd",
  "key29": "TCTuR6WMrd5c54DKXEowpBWLdCzqsaqNVNwqSkRdEutGn2W4cvkmfb2XerDULukxbCSuZAZqno1DmCxLAjgLjjW",
  "key30": "5ipntNCjr5Fvq3BaDCLgrshnR74DFwkjmvzG4nutGQ3c2wNGpbp5rFhnoX1hqffdpZ2HFu79RxbpUmi6vUbVzwuN",
  "key31": "4gBj8Bps4LoG7vaBonKc9tUuM4kWNynr6t7YmNbAYDPj7avQJex3FktyD4wbyjC6b5wxHPsM7aPu2MhmFB69jbAZ",
  "key32": "QbkSqP4PABJRsCUTKrcDZ4zqUDujXaSHHzJstVRXoXZqtswq9qWSQfBXKBkrHNELnXnWuxJjVSrv1t4mSqUNygh",
  "key33": "52R54TeHbHKhVMn7WRezgLwXRAQHKjPBYHEpyxU97oVBSpNB3yKxJDfxNrua1RbEPed7QytbqDxp3BUKKmvVut4d",
  "key34": "33PyuhkrjhDpcvvHybFnbip2erbdaa9G2WFTMr9nD3ZZpwf2KW9jZFk7YKXPTFGHJh4a8RDuCLitijusqxuUZSTP"
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
