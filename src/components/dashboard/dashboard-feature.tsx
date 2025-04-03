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
    "TKbLUYd4akhzcwbhz9MQ1dBrCVHhUdj8xPNnBwESpBPwYdSErncY37Sxhd7T2jemSnBxwsBb9Kwzdnx48kvumoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g5gMPg3QMzd5Jfa2FLJzU8Jq97e8vCDj3Gq59Xn5A9WGK7GgpxEa5Z7XNt2ChiMp2pxdXCkVAUE2KkhkcYrdv7S",
  "key1": "46LumzwJ2sh5ksnML6QSep4xi5yBmi93exrJZECWEv9K8iFCGY8Fhn7dxyiuFkRNvQVWpF7yuJKBRtdEuL2ypysm",
  "key2": "5FznqkkQUS4Vo5i1dnAGJUqJKDPT1ZNEW3kue7pzvUN4F43fjQ5sbpvyDLFLR73X5Qhrj4BSZBhZN2zsyeRtVTnS",
  "key3": "3WKi2Nhz9yiAzKHEQJXGvJfzakNcyEwLPuTYTqGGt6R6FLiTqvBJXo6GauuU8c6pPVDqF1GLFJEVh4nUYECQZrnF",
  "key4": "4xvNRjxjiTdA1vCZCfHFkxU56n6AmuZAHiqMirCc4fz5SHjD7msPwNEw9pRyBDL7XzNHos6BR7PtVAEKhuTWGWjQ",
  "key5": "3nDXWRWrKEK6L6V9zC1SGR8g5qE7xnDavk48rmrXFnU6QMN1iMbST97RGDsegkAqSReiMD1dwHWS4mTdpqxtYJAV",
  "key6": "2Z1EETsK6LuSZLKMG1NaofxcQuh1hSeaSUs4uxffWE2eAHjWE4X92rjSg9cNGP58H4VBQtjEmWNy8WMX89goj41F",
  "key7": "i9AxioYmH6qZomR1KLE2FxLnBFZHWrzTAGJQDUWCKBxr1qPSezcieYn5JcE8ymjsuBvwrtbKAc6vqjJB5PMU5Q6",
  "key8": "47B1d7f3gP8DFceWPbvuHgAMTbKBCdgvGjd5Yp1d4QWjAcLJGaRUDPUEn7n3F7LfkUSS8GFRPa5uVjqS9HsZYrkU",
  "key9": "3E4k4stpGdN9j5FX5tyJXNZpBVB16fSy82o67kHL3G3NUqNtQnqBha4qHJJEm3uH5x8riyPJ5qZTPtigCRvSvuaF",
  "key10": "2aBZGqMdPZGJcs53R2BkmoS7dua1Cr9nGzfpqhmFWQ5fN5TTz8v9rMSEmsqBKK7Xp1hWRPUgpo8JhaF8BdaiusoY",
  "key11": "4Y7PYMwkAFxXMjaL4XU7Di8Sd55mxxT5xHuvVHN2AD299VJ87UPcW8A9dBynRERECFnJ7KsiMKGVrrL2ZV7XAzMP",
  "key12": "3qTUB55W6kgD8cMnXxMxTucnE3JBaL4ybim62PtXJqDia1gqQdft7S3otyw8yC4VdbRvJgg7L9VuUCYzB37ABF1i",
  "key13": "2PWbqVr7bBYGmUgCtaD6VRn191sscohSySYCmn5XNKubH6Whqv26UXWnK9QUbk2ENWNg7BEzzy1jzcxAMWkmDcdg",
  "key14": "4YEgqZLDdBKq6RG7e2fHVHk47LynE25nVKyMaswuGuoLugX2hTvXJtkxvtgWu5iznxVqh1PueMLdboequdcgeXXf",
  "key15": "3a8UvEobzVeVEpqdJ1weYQQGpxg8wowE2PZ8RTExjUKyfgeCEYAfLypwfdMhcKDsxbv8oVQ3p12qdFV36AZMHiLn",
  "key16": "2hzb3PcYWqY3WCd19G3sM9dS1xKKTymcF3MFxnrMuQC1BqzhKj7RjxSi8btS42yhiTcLJU4jvaBu6CdXuCboviRn",
  "key17": "2zg8ChPtGUhNrHNv23hmftCtxRHavBptd5qAmBRvh656tJSxAMYhP8fqCShGnRQbqbVqZZpZAnYTvb1NWbt1CBav",
  "key18": "BFX6E6iQ5GJ2KuQ5fvkc8dUqpmuJGsJAYcw8WMvu69mgyhgu3r9mgNVKVFimLJr1rqf8LT3CVSzKsnqxgsFuVuE",
  "key19": "4WxQeEsMA683cbVKTYmw4kVQdWEz9WGDnZq6jTAANefYmrA8QT8Ff6nznWpuvSDHWbtWjAZwvun1nZDJYZdE5tt2",
  "key20": "5Rocnk3b5qRpiS6RX57d4wGqaKNT3JYya9CTUdFFk51qxctTVB2v3pBiCP3YQ3RKzXPZZGT4kcFaUacvYjED9kbT",
  "key21": "2rvovJuBzwniS2e4fqDB134hBXxqsdFpjRsebB5rXWCotZTYT8Wr11Ls8JjbSmM7Es3qXkXHB2aWt5Gms2gMbkTq",
  "key22": "3zjuJppe8oVe8VmAhrv9E4N3D4ChDZ6avSrBrk774o7AepLQtLn9Tuf4DKYNdTXoWX7zUUn145PZxCRfX49QTyTm",
  "key23": "3adL8Q6uJwtapxxwFAj5j6y9agAPdhvo3Lc2eWpSFyVVaa1EehyNmsQUy9kGXCCfmgf7Z6LNAxDGHLuj7FgSv5hC",
  "key24": "3CvXC4F445q5ZQb5kWHefBXvoA5yxT9hgqBcE8tb2BGKcjohSV9VCMvMwakh4CjSC4ufYg53yBrexemPV3x1hmqw",
  "key25": "3ZiRupAiZ8PFSwoXfGpjgMwU8SwcWvpc9WiN6dPeXvGFkm4vQo6jHgkPcb7KJfG7fM4oEpYoCB4jRLkxogM5nnEJ",
  "key26": "5ZL838oRj54fTKwsVCB7GKSvqA3wUzcBHci5UQpSL4A3eiayFYSLmiqLzcLr3Ws77aRfBJndqLzbjAsWCf8W2jon",
  "key27": "3cqFfvccZ3unhFEtWxWC6pfTkMPvPsidzUwHurCAp9iQEKNHBeAnJpGjTSVVsb82sbM38CrqjwFmHvCrk7UvXhdt",
  "key28": "3kuviB9b1qQ7SNStQbZnPxj5dTwEv2yzE2BTX5K8FonTAnBg6diEEw7nj4Z2sYGkspGfHZTaXW4bH6gsUM3X7q9m",
  "key29": "344p9TGHjbrMPUZRHiS7mTovhEJT274YAQGQNrW1ZExLugTB7FD25qoMjgz7kpSkwvpnbUSm639cuAK8vheAEYYg",
  "key30": "4ZxrCSWcdnX8PeiCDkkhGNfgVgorvJr71iMoUEme9D6ZbSA9Hbaw8ZScYuwqyTbEYJvwX1xceRKYfBzUEtjwD6Qf",
  "key31": "5HfGjVQxqGW3WvJkn27HVJMbFLwM8anqEvxTaR8mJwDLgoMguNWoAD5qB8b51GYo3pc3V4jbGqUSvAHh86VvtSBU",
  "key32": "3E9ZNKVE4GrJa196x9bWyz2wKDpHDQDeJ8WxRZzeJmRNsfqsMZ2VbpxjjDnp1BfKNr5WfxREyn4ZumbiN9Zizdfy",
  "key33": "5gxWAnrkv9D8EY36gGxcWo9W7EKSTamoxreK5UyofaG1QYjAttvZaJ1QcPp7LxPzzkQw4Ujki9a5WhUSGXkEMLCx",
  "key34": "2rS1WjTmEqYBJ9Do9TmasksWzcV2Eu2EGBCLHhRrF5Zn9e2P9oCQgm3TpHYuD1bBZhZYfq9AffvNR55b79E5xran",
  "key35": "2x89hwhnb9jU6FE1Tv1x19izU8WJHN2xBTANmRPyJAvui6MfAFePPgWADwqZVo6XLQEKtJZeMo178a1ZYtxkACVn",
  "key36": "2w1zCrwFRRRMNVpFGVr1faRpRuVrL6PfxF1wdEtdh958Q5sS8ZpTR8LdAwv7jpvi2AA4LRxRhmnrTU5TT2nsyTMk",
  "key37": "Bi3LTFMcz6QnPdBFAB1y8E3LDGajHx9KrWp6xHtRrrWBaLzqmCvQJUUYtsz3JCqt7B1fp3y8HNCBqdXmZdhufrM",
  "key38": "4VwaRSgD7RxvrtBzAwLGbPRxEprw2LGDv1U5ipRiA5zXcSC25YGXMHLd8VkFAdaC2GWgPV6jNuz5WYk8X41k4aXU",
  "key39": "mvmbbua5acf86CkLq6XDmzp6wpvszAKX29LuhCXukGBQ9ahWzS9DDHdSDR6Tz1WnWms3FXkS2o2he54bEekpYve",
  "key40": "4GwuWmNBrAeJc6ognZfFurkpEY1MG1crEHFEBAJuhcvQzv4aDLtYtUQLWVNCJMEam7Ehgj1g6vW3BPBqHujd9R1q",
  "key41": "2XSG5yMtbf3G1TDbKciUzweZ3dFNcmKQxnPU2H1fw7ZkYT5iBtTUbJokjdJ2x7Wp6y1Bn7ouh8NAsxPavPDM7Tor",
  "key42": "2J3wXfFia8XvXxznGvauu7gPJ1QkhizprPVqSuf1zz8b2mSaw16gdYzjZoEZAtHWi2AA7DDK4mekQXvntp7a8Qw3",
  "key43": "27439WZkDVVurrXcMxVU4qrVqSiuz1W4oezseezhWEU6uDwkZgjxLXQCbKtmMV1Wb6yehUooUUgk7vWZRNk94TBb",
  "key44": "3oG4YJ5cNrbZLe6tyPUzytStcddq74V3PxK51PgbBLVVM3FhTRnFRmgYny6FgX3FZU8KwbsRfiAf6Jr2iJJs7sFR",
  "key45": "3ruDatkUPgsD9RBovgqZ2QegkeCM2pZQaY3mE3PjcTai7VEaCT9d6ZbnXSbtZ2opMc7znQbuJ8HSvSwobjeyEpeY",
  "key46": "5XqcKnV7vfHH8W38nNcBS7KUGsw1bJ7ghSgJbVhBVEFqn7L9GRUDioEdMcCJRMzRXhhqTt3jo7u3wDcJPoS6MUYg"
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
