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
    "5Y8jYhJwPApdDi2R3s9kdmcgZDm5Ktia9cezQCMbTAzbpNa73iy2gFCW5anXLwGnsyWDBpotcows3fRpuWApwncZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7kuvQPAhLHbZRNGtktF2NMTbEByzgaLJny7W9GbmUNft54RJrmDC2Znne421Xop8vsj2oyZePxuwLn5KTtrjGEZ",
  "key1": "9oRSxwRpwssx83R4UxWFGweALWeHsXSSLwmKimUTvFDmeq8rxJBA4wAwZCHR3su9rP6WyEXamfUp7fHJvBTU4TJ",
  "key2": "44EMXZEtrAf4JFVCcjN8AzLBiTqH2sGwNVUCZU7EdWcmz4SA44j95PmaQSZZZ2nfwhxoRtbx7YLYMeCbhCwuLbGw",
  "key3": "5TFjKetn6bH2pRnkWMkG7h9HSt8enikxeWURGiLUi6nqyL4QeBx3Z9VDDwoDoDquMJcNDpFUo7oKpqyMpta94vBQ",
  "key4": "5ijUSj3Pnw8CABgYwj8VvefUapCVzyvadnnunRCqtWvC5W5EqLPxhp3NvasScghEhjfcijhEhcTQ3pwP1Q3Q8mxd",
  "key5": "5aF6XVbbnSzogHNaG5j9TBTJCeAmLSzaH99ub8LwUqcCYyAP7TB7P5xGs4YBoFt41MbRHX5au5nSbRwWVKHh9FCy",
  "key6": "4HZCWa362na57KsX8TS6UdPvt8PBBQUhpJGVQWmbwZyDCJEcjCYJCdr2DCjakAfMHwxg2vQzP6tXAcrgFkB5MrMa",
  "key7": "5j6LhhwNF3pjThSj9nymZLHBRuaXD4aaEfy5omxTg2356EKwd7nhp14CpVCfD8JeDYDxsAjTXUBtoJucvbuJdvF",
  "key8": "4UfDLMrBF8dwwZiLuEEEyEqfREm1SicvwSj4GPZmoof9pf9CM86ipwiCWiVmkRZB8YtZPaA5Ntmn7vpJHq71rWqL",
  "key9": "51yeShep6s2WEakgTBavPeVAGKi562J2F2dvJj3RCLAUZG48NuNTgEKXRmqU5JzMiWfHS7JsxUD5w37Q2BjqhpjT",
  "key10": "3zTdSh7jAMLb7AoXUg1Ntq6D5PDfJTiJXQvBXoczvCXFdjMTkLE6mHL9R6VUn1vzST7KLgi6rio6Uf8UoCvLfqK9",
  "key11": "2djVxvdV6PQjnMeQojC3rn7cUwxf4HyJ8jmgNj73hATr7JxaCy68UAJfwHUwhJKTaaysh4jAF1DVEAHkK6YtZRPi",
  "key12": "43GjsiAz5G9coQkvR6AjMfcVyxr3nhSPQLKNxX5UdsDShbW77DyTvWR3sMTf62NDZg4xbTfsVjQoAArHxHkvCpMi",
  "key13": "3NNuF7b7fAwdXktmcMdEEyJNX72ficqWN69922shq4F9ctCfyrAZrYqnTJQNtrnug2XTg8BWnX37DA23EDxhsh7y",
  "key14": "5B4TuRV2HULGJvJLb46jijyyvmWbngeXgjfzYLYJRsSbUGUagTNy23M7PiMPVePB9DrjsxgiJiJ5mX8A2KhpxMF6",
  "key15": "2SUYG4Wp7oEY7VYhNPM68zQAYFDMwsVxPi2FEfHquVgbyV6tBfXdVzEtP1sfEzu4y1xVZ7WYhxVfHxSYnHvD5pW5",
  "key16": "5JSnF9nX1gWXLucy6yVV6EoPZimyhp9ik4S4M6eWLaGHdPp5rGWz97LRcKZtiaJAmsSjziXgA56BcJbTLGe5czTV",
  "key17": "bZJombxDokjeatEiVoe7PTnyfmytiHggGakQCs8C5SBaR17aqLp9w9so6sLHPqhHbDAD8cMP7ReLj5Jp7vpnhnH",
  "key18": "291yxVe9rXCBHSXQcN6JHgdE2ytdSogbohaU9DURYPFwzvgxa7U5vu2PZkAzvNcQuE2P4QvGaYBVnPz2NvsJzEU7",
  "key19": "4pqdfWXjx9CUcN1RSGVGFqmnZp8W7zHd9rgaUMPXeUvRQdr4HnhwiqGVPxYxzE6WxCVAo5JtBSHrdcXrXYtG4t5y",
  "key20": "v29sqd1Q9yqfdJ29ayroRrAbAKvQqKVL1R6TZmhp9J4whMzr74B12zDWSuiB6v1aZdMmQjTe2s7su4KLNtCp8Xd",
  "key21": "4HXbZ8XCeUTq4VgXxzmCL6f9WcZcoMbdLiLhYGESPU1rBpfJN84R56WTdBtxxJ2SGgnw6NX2iXUbGbR7U5G4cpRX",
  "key22": "j3vYpiZAJ61Z12XbzFp1Qia3CGSBMotuFUN6ZdCMV3M1z6gCC8bViLDZ4QtPkbLyFd9MTT43Y6TvU6dXr9bipUD",
  "key23": "2p18NTEC4coLFw6u5T3xHkEigLSDYGWK3HuDPWWgdWby2R3PEMMuG7hQqzhsLnG8eBNKDTFFkFLw1qGiSgD92Yw8",
  "key24": "2YvNrwzi9o7HJmU8owMieTDZU2Cr6mCLENs9AaC5oaygMSnM5F2QwnC6Xoirsgg7YTA323WrFWKZLZ9zk77xCztR",
  "key25": "2pwY1DquuU3JwpMmVnEsrUoubrJenTb4w3v9D6ENjvgU5WAyWbztvwqg2zdm93rpRY96V368NASMXW5xcxnnYMMt",
  "key26": "4sV1zeS1JX7z6UdHZPqx2MYttQ6hpuHs5v96yH5352xUKNayixFZT6tEqYMJqK6aECjXhjQTV2hEsKTR6mWynP4i",
  "key27": "3wTLwawArs8xuqy663w2TwpAvDfA5yMEiWh9DQsYK4fie6FHz7MjpvsLAmXKPLEwkbi6ER4yryKHgqXg21hEV62z",
  "key28": "53xySBBLDvb227v4Jm4eHZFBsuxwCd3vw1o8BJ6tM3qocvESbsUxJk9cXxJDNszbRKZXrULdtjjVB3rMwHzeH6HT",
  "key29": "3En6WKNaaCqa3Mh7Xtu7ps1Kz85jemSyVAwKDsvb3ctpaTteM4jyS3nLQWCp95iCCg2EymmZB9fT1qwwWU3BKygS",
  "key30": "4h9i1DFmCuFTmvD7VnDyr1VBnscctiSYyiq5rcHunFfGeQF9xBqGriq17P38sseszazKSySJEnarhXvuTpDiBmFj",
  "key31": "3ErACssUrQo1Pi6XqSpBvEnB1cMknnhedmX5LGwG2CMU1sGwfPgre8ySf3uE6TVgp2pR1iygETvsXh2eSjYHnNp6",
  "key32": "5PuhBv9VzefH8GgoEYbwE9NTKa2yjQYYFxEY4YkrtCNMo1cm9ypXkoEAyf7e14DPMqDVtAX1LUiYZehbFZS2vvbw",
  "key33": "52b1ZJKFFJuv3ePGE73xijzmRFxbT2jk8tzQ1eDmFeoGfhESmt4zNrASyjZvbCrbHCqfxcKUwAZ1DoenemrLtrKE",
  "key34": "3oZSdYkLwn1PasSWjrQkqPKEs65AKLm9EAyFiTbRmF6p5gSsnf4berdtYssYaJFTYvH3HGwqRrZGX7jv5B6HcnbS",
  "key35": "hK411crfFa9NeedJ61beFMGrGKeBQA4qPrd42iqyyJ7JhMAQczTjJ1D5FdgZNZ2TmERQVBQPFGyyTyE4PLxPaoV",
  "key36": "kpzbxJMQf4rAFTXViXN3oYgPEwHuRQRF57rtSp3gF7TNz1dxVAfUJc3RD74ZKfrmqFoocxGEmneZtb6BDakr3VX",
  "key37": "4JgW52ryuLnpyHM9e95VXhxtd1kZpGwfzi4SYsxxhSDQwtzi4ZEZzEi3eoheiEjzimzfFPV9eV3kajLwkifrTTJf",
  "key38": "3HY7XWSzBVGZaaQDAfm9AYvwq7StACx3UoBM8NhTHJonh8P3vwjXwdTD662ypDuXxVZqaDWs2qjgyTXhxRtE3DMk",
  "key39": "4oMHwzKLZsgrkqpMXxvhvoo8q62NMJS5w5iVdwJCsuGBqm5JWXGx7JVtG9mxYYrqNnbxkX6oEWpksW9n6YnkkrXK",
  "key40": "5uK9FqNh4VNJkRn4ZKNKUmR1M121WYaGJe4wKnkEzP8S8tytmWWtWFV5kah4MkmctbbdZsQYRuSSU7XaoYgL6pDr",
  "key41": "45jT8e9WCps39v1R5CfdeiVQKbJNgZumLYRPxgVhWVTXJWYzwiA1XRbZfUg9CMzTiPWYLFGP5kTWm5qR457E73Yk",
  "key42": "4iAQkXPUKytBhwvABmxUCZRsnydgDz5bDiB2HG6SGWmyF4YmJuFKvGrYY4AaMU1emHA9JjpppMtLgJEN13f3zVTo",
  "key43": "5MV9UuEz3sC2hCnTtvGUupeRW1yMmk73esZanQ8HDfHPLUw57hvNfnEShLdj1xKE1MGP3JBiqrhLJzWnvcLvkkjo",
  "key44": "47Y2x97NhKUk8Ee9hhan5xXEucUtkmTCiJZN271Uj9uNRaNBpvAndGZRHeZoTqZgzsY3DhSyqxATZQg28bhQ6T4J",
  "key45": "D4Je1Hhmos9CmoPLPfUtTPAHjJL5juBtrTbLmtt5uXebrfPX7CaQhsgHxsB7GMcj9VrMJcsmyqWHrPHutHcQLnB"
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
