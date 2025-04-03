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
    "4EFX4z39g6eYPFxK8C1eDaoTqMM39ek2UuvX1Rsmt5NNnMjc7AscZxz2szo75EpoqM23ZjaDLvyLPH6C5fo2WS3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oBr4CvYKcsWRy9YfYiCmWohL1iVy6uvKHDeWYh8BphZcjqFKycmDBkLhGEpd59a35KfwZsVuC7bkbtREFqGH8tF",
  "key1": "3qWPbYG6iLW5Bn1kdsQHZpDyDkFHbCjCGRuBHVLcmtFFDaURCRZ2gFjGZbB4PHZdmPfkVXEUuCUBtYsXL8JUJaKq",
  "key2": "5cVjY7TbzTTU6FMtn5tB558PvX2AL3wy8gHyR3ZCZ1cjkRZvTJ7ZEY7FCazLmPppPXBDfCGTYDQ1t5Kgjy7SBc29",
  "key3": "3veyGVGrfGuTdXiZX4nyCp9MNpaVZAR2mB31kfaYunDgscC8mG97ucFGLLRJoA1pHBDqYkCoUPgp5s7T2WG8gH9r",
  "key4": "3uaCrkcaN2mgsRNLDPYLG5EoB5QNwcNxe8j3mp4fXnAF1L9GUDgNQhckC1CWEjJBCReA1MijZdqogHymNELKJ6MM",
  "key5": "2GuZeH7yz66p9ndkD2weY3x9akMuxyDEPh9jhUyByWfm1soFxa1hQW1yu6iCqKcS3vwGRRaLp9stwqMzPnJ3N6cQ",
  "key6": "5wApgQFcFinyhQrNtFuSjGodk2SPCFxXX2A6rbEZKSm2ioPPFHWSPjTDQjCor8oHKjQZnY6jLpuEAuZr74AAkf1a",
  "key7": "2WsSzXv9ooRCtjUiE5uebP8GZeZwHjFb4FKa2uakrUSnmw6Za6KAgABqtuv7uM8Kt7ZEfs5ijZzhtg9vEwCsGXG5",
  "key8": "52Bzqi4orqoYLkDDzY1tjZCS5L3yptzQbovpm7tKi3iRbcf17CYFEQJpbpp5R1uMfN3zeVZnZWgmgEckpC9Ss25P",
  "key9": "4vw6JTeShr1W5te7DvCHDaNvSRWoT2CYjLEBuJNk6kXTxhCY6BW1eJARaKs81z7JdnTi2xwdjUS47npjtG9YXDcV",
  "key10": "3ke5ZN4dMFwCiHK3yBdidYxURz93EM5bNfbQ1VpuuhTCuA15VrZiuURee6FWVgzAt5bZngiT6gFLGnGqFSpMzL6v",
  "key11": "HKiaxbPAaQiHFv14xDqLL1QuPx82TQdUDZuKfVgh7b22NMZ4PCv3KQj89i2nLJUxYEBkWouk2VMoM2Mydwvfdap",
  "key12": "5ZJpGMgFGMFTUZgeJqnmtSk6j4CQmhtW1KLiJkUDbm41CRLdeLTYQdBQDq2RCRR8mVbv7ihEMyJg4MTCox4gaDCu",
  "key13": "5dNAC8pu3pZAnN71tLNHgUV2c2xHUBUiAhUaf2smufJiucGzQbo6RbGwPz9i4xoZtZEqLPW4cma7No5cTeqiUeSS",
  "key14": "499cZrsjzg1U4iL6AgdWLUcPq9qgVFeqfBo8W64ZfvWJ853krBcQHnvEy8hNfat9SBgB4U62yRE1r3LyY3M3catg",
  "key15": "399jtGXQreArD4Lk5wFtRdb44ufwRH8x3xDP2m9FNAh746s4udc9WgxZ7a3DirsC8vVtpr6FsBV6nTksJbKWqrWi",
  "key16": "4TQBT6dZnxF42kJXMR8bVpb8UTZKYYnMVB1WbT9ZmQdeVm6BNUf1qosLwnDEx39DswTgih6SCWgoyPgejfeAjw4M",
  "key17": "KhJAKCjN24UZzUv4hw2Sg2SZeKk8zDGsSGhGbqUvd1naDwzjVRx8QPnSePvjwU1sG7eaY2pbeyaE3u7u4QMpnZ9",
  "key18": "5Bnedfg2pcU3TDQMBAHXzhZijDyzw2SdctPRPS1cWJE3h3bH3KYkG34P9k6AT1iSRL6shpLvju1p2TviT6rYF6BN",
  "key19": "3YAx8BnY3Bnru2qHVU3EvaU7GwPYkJ3xbWjWB1mri3jEHrnPSonboEN68wN2Dt3KtcveVeTt5EFW4PikPvtYtBDg",
  "key20": "4PDQcdYnA4Adbs6zWMe1VSx8DovZ6HQL249tn7HJKXh9Q3i1C97TFSzTVgF7zW19HRx9Kixk7hPV9k8k5DMMYFEM",
  "key21": "4qZB8fqSPbeMSw21PxQe4dR1iYE9BeWxr1B7dhtAXi75XxnbF3LjVsdVpuXZoCD6gnimpFxnqXqAjV6DksJCJNKb",
  "key22": "25aaQ6qvGL4FQhSmUXLgua4v5581VbWQDsGAzL5M36FfM3rFr3KjNcZC3DhUCMNXz8C6EZwEDNMGjTLfQdnqcxyj",
  "key23": "5M3vDjZFdQcYzNLok5168h9F43eRSzD9JEVhXMsmLkcReb6VoaWqdP4H7NhE7MGY9e5aMcarT7CJ83vS5FbTXWsg",
  "key24": "621QM9oKiSpMMUDJx5mhNtSaHe1cj9uKregVKjrxowEqNHibYMV33ro3tPeyFmh4qE4YPeijmsNr57Qw456uePXk",
  "key25": "2MAbB1Yv1yy4XnezFwE36SnB9Xeg4Fv5dz5o46hLdDWfzsTsSAqeasFdN8se5WxDohQgzpcnfAV17DE5HUKt4H9w",
  "key26": "2m9YQJJDLRzAZjQka1PfHjjHekx5WEFK9wLzBvfGaZA58SXn42rgTpS37NyDyXFf2zg1bGifRmJEehheAPTnkTLk",
  "key27": "2JDcw2STMmhs4wGFtWspwPusNEEoKuYeeqDiuaMwo8iht8SDEGW7hqVbN7STn3pFo8AYENk2que5W6epaSfaAPUG",
  "key28": "44sAY4XN5rxAHSi8fW3UJcWaUoZXqWExUx9AouAWTRZeY9Vt51JLC4y93h7GujbuqRfbjTzkxP9ivZ3SjQkerjq2",
  "key29": "GGQyh2GqMLaScHAjzU6SZ55TqM2mqc3YrSZdSZbvJgjNq37rQw56LbJiY8hjtwdV5aZkNTnwkGYnYtz2pJDZ7y9",
  "key30": "2P8CsdBtU8a41Pb8uaqqfMeMBkgtYf8BCoDYuHxae3offLU3tmAcWKCZ9h3hDTWzA8N7XpWEwrLZQcHY3CRRGgNZ",
  "key31": "6PRkubQG2R7cMSPHS1rGJpQvizVMuz9qYDn8qBp9TyzPrbL1GAm8dzUrp6bWzFiQBTYJj3e8X7xyHXidRBX6HUE",
  "key32": "3fxeu3udRVcZUxErdmZf4T9fzxLB23w6YHAP3LdoY9nkPnwLcGFm5nTvu4KYHA88KJeHj6RA47oe4PedwS7pcpJa",
  "key33": "4NUoRTnKBf9eb7EMCPhDngEx1sHaWWcu88njAsNdFUFCYN3fQXVf5AbrhTeEAnja1a5QXbJtSbZwFxUDie3q2z3Y",
  "key34": "qxbTrLSCY5NMHZZFazp5bAmEim4C746Hr9jLnKzCdj1c5bZmUK266oGv34dLgczpTtBh5n3YY2QNWh1BgEoGLra",
  "key35": "3RH233JGRA7GE8GiHp9gAsXi5zvqsszNjZsSEF5tKRooFfPtse19BhwoB1XxDxJjqAFLTHyY8Z1Z7No2CzAzat2K",
  "key36": "38JsqzPoYuZC5ca3wJ4j4mt6bA3GJU5nbgGAHbB5CovYxPufQjYX4ZKGvuzjkEeu55kJ1NfFcFykuXkZYWRvo9Dr",
  "key37": "2TNn8QFsJ7a5LJt7Dt5npJ9fswW3sMWhLPNdo3RF8g9jBhAvo6eWUVUP6DSiYWWb2HzWZ4y4CVxRjikaw7M6VBVr",
  "key38": "27YCg9rhmqLZdmKDzkRCBaD18x421d1gSSWYRSdeGy9KeqH4XjkBDh5cuMkUREaCfywS1zTCQk5f7RK8fNKfaFPv",
  "key39": "2aRTBgP35SYHaGhTR1m22WuV37dzuUzYxyJkLycV5FjSdf8Gha386dYgPZJw92M1dirTe8MAfq7JwNtrWTLhrQ8S",
  "key40": "3vgXJW1xVN3CpDuoJ5kQ7HJ8EUL5CLA6WPszUtCoQ5iZGh4gYBoZxPcGod4jxJg7r6m9W69hCnGvgwk6Ji6JUKyo",
  "key41": "3hmQa9T5Wd8x2Aq4QAYWcfEDD4bbVzUn3LDLdT67BfRVyevCYP9iCVUD6HLW1sGik4JsUWvox9HVZXbreqCBd8YD",
  "key42": "44vbqvQw3iconAv6yJB1dY1e2GyBX3htENTEC5rkdQ5yUQcGbxHQwf4TJgXC1BoHBuh4esAXJNWu6Tftxhj5DgUL",
  "key43": "4VYYLpncqW4xvpLYdw5K9jXaihpwLMTWkUT9UckXmHruETSWEt7HZSs82trbQsp6oumKyeVfWdq2mAszMp3tqF4w",
  "key44": "2dWSjP8Z4WoxMzTfY77kVwzEJPE9PTj8koSbivC7wm9EkUpxMXcoXzgWNRdwDAxQVdEW6fAm1mzuJbbJYMNRgccH",
  "key45": "2Z3DYgEnuHyf9jiEXYGgMXJWuumKr56K3uSNLHWevRYwWBFamng9hL3gi7TdECpy7SKWp1Ler1oTFTL1NZBeUn5c"
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
