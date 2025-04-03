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
    "5d8C9ECLwuf5dMpCefy1t9cxBLDPZ7dGtfS97JEutRdZM7jy9AUJBWtEM17CdHFQ7yVtRFEXuUB1uhzMaNzeJweD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MRZUCWpi8z1kjRLgjEX5V3NeMWt7pTjFwzzciaAbJrWVjdXovkYae83hkpr2heZi71jCPqnhftLMkMH6bTBmTN3",
  "key1": "4uivyFFQUuWQeFz4PjaGWtgCEaD6jUzYXZ3AkirGXiMZm6NzvrqC2nwCJmMGcMPbm9pZtxGXEexoJAHt47iFjp6w",
  "key2": "3X4R85t13FDCtzztfZYvayhCzi4L934qvRVNox8mueTKQAo8nF7jBwRUWNn8Hf87hYM5bReFUDG3ArCo8qdCVEjm",
  "key3": "2aXdbuuJqyXgDiiTMwpvApUodW7ZQQpraFtBvXHq4cHoFznUsYLJgxRvT7MrR6PTRX1MfZ3JoFAvK7fg3bL8wixv",
  "key4": "3Bvq7jDh3jo5v9BQdupP4XFPsBVsF9frqvnyKysrdJzsY4fDdWir9a5esdwvDabc68RFkPdeMR6xFi2JgCSNxvZv",
  "key5": "4WhbuAmUnuV9uCtWnBf3joPxp3HghAxn5EBZ6QKrRvWGy9E4gEmNdiFjqkkfAoc3a5E83HEud21MqrPp81Gc3BeJ",
  "key6": "58vRvGYBc2ZLeeuJmCyfCzfWrrfZt29VTfS12JXz8XMuz5HbaQ7wdmjho2hYGX1Kw6TVvfBfRZdGi9gHP4tivetX",
  "key7": "65yXKmUhjq5JLXRrv1yqPbvcQdxRppvStvS3aRU7gjs99qTNwmZ89BmMV6WqZgavxH7q3Z6b3apNzfCy7gsCoA8S",
  "key8": "4YFqGJHGP5zTiVDo92fpedzDJ6WvNtQgfDqbH8bw3uGR2KpJDYCPJKu3u8ahVjeo5AJe9tsNZbvdPyrNCak7a8VG",
  "key9": "61qBjBWfrQLu8My1GnHj457sTU5RxiCpTrg2A9oqQJ3CfftksWvs58sLTZ9Z3o6HdNec1v5zi1rLogqBVbt5RytJ",
  "key10": "xFzhE6BZZi7anJQTavwL6izBji9BkhmfnJtfPbXBkgrT9UAbgDoVmBiq12aSvfpYwAwyTABvfy2TDvApEY8hrcL",
  "key11": "27xuhzMgxFA47aEKHZiaAx4ms3s2wFCFKqyfion8gWDkgS27Gd7o7XP3hQKHMaan2GkiWmfAxBsHhcCuQ4q9Eq64",
  "key12": "4KzPEbhm1YfRDzkC33Coqda1RaCvjpVkjdurne7nNkTez69BCbcN46aDPGCfMVbFsNRdmwajdLRh7Q4djxbkMxAK",
  "key13": "35QLm9q46rzhw7mvnYF7VnKrRe1EM6H9PbydyJrNDF1c62bZaj8KADQezbopJKi39LcqL13p4wR7i5hgbuad8hNb",
  "key14": "5UvKs8aEy6P43CcwCakxjFdWdeWfb3WPNH6kpBeMimX5P8DpoAYcbFjqhcx4QVQVzpAoRej4LqoA5cxqFqMkZKyJ",
  "key15": "5Je3Wyb2gzapCuVJgQ41QFh4rkYWnBfyqYAK965oBDDWtqZoS4yPHzNW7u6iWvRA2bNoWtjES2pMQZJSMKSohrxK",
  "key16": "4CW7NtLRp3TSgboJcEWW3j9y9RK7xKuAuxBDMVXvo5dQCLhn98VJj6xcpVedqxQP2MJPeFikhPaBYP1x1C7zTs67",
  "key17": "oX857fnDJAMyndWeaxz5Cwujtbvtf8z88TkuzcJv9ix6rt3jHCnuz5jcyCZhZr6YGKQVNSkSt5YL9L8LXyMFGfi",
  "key18": "4WV2wLwiBHMp7aVnME75YnRB7dy5QG4AdihUFD2rELEK2DjbDeg6ty5QfeQdJ56WrLHWBkDrejJG2uUXadrpkhcL",
  "key19": "4KJt4zBaBDC6VaJDJXmeGtsiKwuYfM5GapCF6PjkKHj1deCVAfteSH7fhZmhh3PkH11g4prNwUD6johZbHC5TpPt",
  "key20": "3YrajV57as56LvG2sTutYh2c78fxkSrYQAA1HXyXP5fKzZ4vsA1pBtuxrge1XEFf7v3zYhs6Ke72iHtTfwyYpUZM",
  "key21": "5XNpPPEDwgPWBqviLC5A2j7TjAM5HK91RWnt2qGhTUnYKmFp1i3m3kfWGu5F3w3TqaaARKwC8TUDas2Z21JEqYX7",
  "key22": "2yd7e6kZuCiSEAdjJzvou3rzz3Tnd6Sb1BjXDq2YVsVvDejMitt8LDFa93it82Cj7hdL2C1k3XjM3x6BRrj1LXJq",
  "key23": "5famz24V6PPuYRrcMAXtWFCpXVnMbJX6aR8k2bmQN3W8wFiqSd4n3ZYGw8zyS6PSD8bvAnD7Rf8gGeHUXSUJi3N9",
  "key24": "525UTLzrLkinyYGA2UazoWX7EQTMELN4yZbiAw5YuNtWNWf7Dgz1fWg6SppdjTPDQ3aajghMaNxMpS3EPiQCsyPm",
  "key25": "7qPk7dYtom6roQy2BuGdems3dDzc1K2FVAjMVSzsGZJoN4EynxomQJEgciWc6LPHgNRkxdfwnKJWfRVqU2CBfVY",
  "key26": "hxd5LX76JSZCgrVZws1yru5oryeDszJXfTtREg61usoY4mYshkghY9xntiXaTX4ew3p7PEMCYXQMePz6ZdDuhzG",
  "key27": "2GccS2i2EHLdnFiUquyVmXUZnKTZjZTqLq2eep9iE2nSqiu7UsTMowumehkQgHJSEhPqekX268aceVHWdG3j72eg",
  "key28": "2Z1pCzBd6PHc56U16X6wzesHViaWKyMtYj2zyPCWduagoo9Rcj6RgvYKi7t9JJhgrJytvsWyYE8wsGXzDvtP2LKf",
  "key29": "2AppMmhqgiQQ9wtpPvgUvHpvWuHxUyCKzuSSdPUGrn3vUcohQqMfUbygLyMR8FGGgV7LANfEwa2AF2rC4LXQPvG5",
  "key30": "3JxGT5A69q1cq3aJWjy72GBzgRRH92G96PBjKrVixiKSdaXmgaCYqynGK6JitTF3gH3vTY2NfsdcM33Lc8W68y4m",
  "key31": "4x3811QjaCNsXGyTnK9osiSjCUV3hZksEyYk6tuGuyTCPJGgwzEb5fAHB4Px6TwfEv4YJYvY1McxwbnqmAw6KNiT",
  "key32": "5xGTARpWPs1T1kDR3H9hqFqmPgyqmkcVTv1XDemGLh5M2mi1FLSFmdbDfUiAgdZ6nu7fhVNmSXAGyM6bSDSg9QCT",
  "key33": "BBpQ5DmERo8Q87c1MhiRY2H6wuW65Pkw4h8CVpK6vXpq1UW2zXWsEjoWAcY2RL2huANazXbpfAhRBmj8e1SF5pb",
  "key34": "x3XX1Q5T9srqALKwpW4S8M6XPPpty7r5ZPJkvZ7ipyAZyCaRwMH7kj7P4K3pcAR2dnsoXywjVJVixZsJG8tCVNW",
  "key35": "wHDcE626wvxrZ3ggFArnZeBCgDYmpLaXXCSUT6JExpvZj8rWV1Wp657789bBY4eMg4NimxZmHYrxB8nWgttLjSq",
  "key36": "xMxwDnZ9V7sY8FjqD62r4mkeNxPoFTdNaauU2WCxyxQEwpPMq6Vk5uieX72swCJAgoJV69vnMnLsgUrbhsisWgr",
  "key37": "5GdFxv2xNZUdAvievL4mvZpaQJxXg9ahZd88mkbZYuYzXohrT1yDggvgC7aXZiuBFgdZRfZ5B15Ep45KY2kP5g3Z",
  "key38": "MXRKN4H3V6Y9xuWdq2GDe7vJiUtZze78QVt2jwWAvNWUp7xv5BKtdh5xBmMkRXa7Zm36Sozqtk4UmTSqkHJHEV4",
  "key39": "5SY5JTCw4pyk9jszZ9h1H8ZEcoSkT3ZBqXNW47ccboCs27QzGv7QtawcAtz2CAjACVRFQcvFUYB95DKN7PbSsEGk",
  "key40": "2egZfu6eE5mEY6v65wdRQeiubnZWwMdAByNGQKFkW112HjfXF8daWJfjJ7Zi27tqDzjtQ7Tz3HYkfPENPgkK5hVy",
  "key41": "25bjgyVGhnip6Q5J6omo7HdArJAESzzGi8MvZd5buLX6vCbwZZi4zoyQpbPEBcJF6kzmazM2YtvZ1ZCeatYVM4hR",
  "key42": "5x1ZiBSotViKgFKhMoaUtVdyT9o4MQNQNLsjYsxxfRfXZne7Wi4yqSb9k4jrHH9zFkUJksRACVJTaXSXMevkGzVE",
  "key43": "KqwxT9vjybX5oZWT5usMTfKzrJ5BV9CurZfHkZRVxAvb7DwPav46VCUnD8MZPNyr6T17roDtTDMRXP8kMbAg6pR",
  "key44": "zotd9V1jDBvyd5p8eKvvFPugDguqJaTR8WQevjWJo6TTrwe26x4KgBUmZ8A1VMeiTgmZrD81qQFoiTuzhfCzvmC",
  "key45": "3AHTiqi6VhzK434NsDsBrxGdGmDXP5VxLcC4SQXmY8od9f3J7Wjb2eehCq7kPRxDckdNSNXRhKWLMvdpArS7wDUC",
  "key46": "3REAVZ4MEcTxhTzP1dCtGQ9ATLxcYYdFKZ76kcQJxXvpw9CyenmUryWiFBpSgeXyZDACSB76bKhm1AuvyydG8nkz"
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
