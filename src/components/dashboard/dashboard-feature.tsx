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
    "3jnRtHAXVbRjixK3nqSq33v6fRdavnVNdaJqc62nxUUangtZjJqUDpUfST8qAfZBqWSZCzhXvqsebRDaZoDoXS9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29kygA99uQ62osvqrLMnxXTSeb1Ga3C4dRUZbue7gEkwwGHrS8arQtkEdCBy9iwYJLErSLYgdjgf2LzxRNvTRcQY",
  "key1": "3jFpUexqxEt9tBDTdFDMeV27n2pt2CMNfsbTTUTua1ji2oBkvzyVv9KJzgBSCVuYYge4Gh3AdBhJh8b23ZR7mJG",
  "key2": "5RgFVyDEqmgM3ApYrToAe4fyqBSLB5dn2uioF6ouX552GpsYW6K3uRrZttBcqGV1Kq3ueGjsdTAxZD7A2NNv7rhn",
  "key3": "3o5gwab2wtpWRYUtoeuJWnPkqSh7kXCUR5fxDfBquHjg6FaZTzN1HevQC3nGpBFyaE6eh7iTVj9e6WwP6GdFSmYu",
  "key4": "464Sa38Z5huPFaqJFSEzfw2gh3EmQBej4JtYc7fe7NoN9MUtyNQy2CZX1XfUj57qrHw6cT4UrHHPQKURCfPFiWHq",
  "key5": "2gGg517a2HqEsrHt5CG5faEMjkW4k2TTQW1L6htv74jiDqRRVbthnsdp7spk5FNfGKrZ9coTcGajCrq95fp8HRe2",
  "key6": "2RyknBjTXYvsdYMWTgvnYaCKbzMm8SeAfhEDRcSi6VoZsH3EAkXHyLc7NVLtLBSC9fqdJSy7YGAf4inpWSNmk4FG",
  "key7": "46n3jfPWyEgXkdUkUT11DeMkBH242LeF1F6mrn1BswpCYWJt8Z4WN8ih41VAbr5obd1hBNJb4QEkpdXh7Q1pnjAE",
  "key8": "BgjmkXr3gmqzyoJA5s8AaMhNhBJ43Ze31JmHV1wByxDGVpNL8X655BZ1pxYSR7dcn24MizJnP17LUwqUaP94Jk9",
  "key9": "464L1ozXfY8qcR8DwXSEzHB2nyapiXfWDQ1siYMK4DFqEenb9L5FvndMDQDbE1EWgBmo3xeTMkovGSC8WX8HQU9N",
  "key10": "2FQmJVtfwSYGyhMPnnfpi9EKW6kTuDpiqSMPD3w77o7zA634r95r6M1KRBwieh7jpejGTaNUheUf74Pm3p41koSR",
  "key11": "56Qqn4KHL9f42qTVW7tVG3rAxgUeiF9xTQSbb3Qyn98Zhjpfs2KvWLDnzY7YwbjzRBzp9mr4F9ejFLThpGsNkhx4",
  "key12": "2RqpkG54AEF68f4aBgmkwPTWuAj135JCt5FehoXjCoGtSe18Gye3gTqR83Ss64peuQFckfdH9c5PaD4VSLx3rJVP",
  "key13": "32cZpTpaEpDnDKQoWpkgf7gqbknjUYYDyEeSNyFbZnp7Rq6jdkmGMPGQJLi6QmWUCXopQYzoFDdnTUkg5ktXLh7L",
  "key14": "55CzUmpt1ySbjVAEAWciB9gYaRep6xaXnN4utrFGFqGHeTzMAAjNSyhoYpPEsCnizpDGUbYGGkNn2TCY3Vi6dVWm",
  "key15": "4ByPPypfzptETxwc3a1HH1rwcJu8gyWGqXd9KhwhooCWWALRemnCu1BCLvbZSwfFzwZ2zzgzxJpSdw5ym1nFZiiV",
  "key16": "3gNoXfVDGmgVZUkVowW4cmPSePrkbFZQc5By7aijSMcySNWqfxFWvrzGYWDhBZdVcPKonYZ8nSKqLJ1pCQkRxL8j",
  "key17": "2k9mdEgZqYGWMogkUjcQLVuxi52aSAvMotgTyxkbtxJMy3sgv3scFiX2nhBwcjYj3fLZUy3LL3FWM9bka2Lo1zTG",
  "key18": "3Ft6fUaR8jckasg1QCUoV6ZSnMWTozVMouYXJh95mXQAzEiCBoZzMsji4uxE9jx1TqHVDwbV7UEaiYioKd3ntaBz",
  "key19": "3F3BJpqrcPQ1if4cxFK6BoUB6nexWFM1QxSwZbKZk9ziYemdmtS2haKvWga9NMktRELnn2pduSa9GRY8x7pYhcmc",
  "key20": "5H1NMwXDds3FwAe4ayn2GU8cdaJM3qFf88JNik4h2Lqppy72rt2dyWZryNKbaVqXfoJmE4CB9nwnHbRu7TX8PzQk",
  "key21": "61bL9QQVYniE1ZWLJCDh1zmveLx4HMTSdXssFioevuqEEQtpibLQoiV53hHES16QkgJNgQrCwr9Vy3Ucp9CWDP9S",
  "key22": "3vARVo8E2uXz1EfRBa3UN9Aio9pqu7Riqq9VQ6Q9GtAAhDnEWb35hJ5ai2MPmG4EGpvq1Ljwcq4eUSLrfi2qssSF",
  "key23": "3SyhtNpGDkvDft4zfU5uc6bZeGGPCDkQTwDMP3qLtgzDzxVDNRqnMz5nRSFEW1qnns77YMreLginZR4urokQD44Z",
  "key24": "2GcXtaNbpamuAYYLWiwkww9NvMvsbrDnGzMkRAFAbcDfhiLopqWLHS9aTBHU9fRQ7eNYmzoiCUtycZebB955HieP",
  "key25": "oLP8BSFum1HuTqvy3DEXFzAPZiRqFNH7vXd27Xqf7nfE27W9gcRPq7jAnePo5MmoKiMckcnShTbqifVPoGSbFAF",
  "key26": "2tdxVcUTh1xcYpf7bMJibDYwxCquJjjx2kAuZQdzzZvyN5LtXcSW7HQD6w1Giyh2BW3WELobGHQvdjY6sHFLgVpD",
  "key27": "3SGrgQwfrc9V6USJHCLsHWn2a7UKgu8EiAVkLmp22PDNMBTon4TUtc8aaiMZj7vrELCYGc8Syb4iVTmnzzjAzKt6",
  "key28": "5Udy41b7PfvWb2nCBHR979YLNsoSct1ypJan9jRLY3otn1YWMqAzh3UjwXcfXTWwJ6CSnPjg8SdrXJHNcYzYgR4e",
  "key29": "2FewXyu7dwZX21gZS7ZdaJYCcxymY6kfMijbZ5XqJe65CgEeHW234Tf7t1o715muuxB7s9Q2m2hPxmcNUQpMKwCN",
  "key30": "NfmczKAau98nGy65u1QBa4iXbyuPN4coh1j7fXWHbCGCEizP4PSdz1oNs7FEESCvqWBEytL2GhffYRh8cHDaBtS",
  "key31": "478y111iPYN6a1DDft7NcyfKK1j4XnJfMP9zq1NPGSgeDoyjTiCxJiyM6j4LFL8KcrBBaaBaBJP83GVYbfH9N28j",
  "key32": "2Vu8nEUKdZMj7t16LJcxyBy2DzkQZz5JeLLdyHDJmm36PuQCsWAzzXrxNJb7BtBNJnm3un5oqgfnuhKpQ6ac6kRE",
  "key33": "483dS67EjhBL8aLxt5AsMdnXQVtw8jNzGatCT4kU9S6pE52CJ6qnLB4NBxvgU45pj9UMQKQduhvtESJzGsd4iENq",
  "key34": "4t5UagvPWuxj6BVaeUTPctD8JSvyvAPHhScTNCcdSFyxwZBxAaSxw6s7775KZUfp2yNT7Lr4CVD3p1WBiWzS8Yen",
  "key35": "45PiMwcFnYgP7cxptBSSpqZZLVgjjG23eSRepduwFMnFtN6YRVPfGD4wdK7MxJe6B2zUgFoA1MuizgwMcHp1LYUU",
  "key36": "5vGMzV91UuJ881x1nKyinH5beFmM5mUdXtWH5oxK5km3v7sbcqShvjrNF9XKaFHtPr7QSFeRVVnbPp85PrULCjRr",
  "key37": "2nFcsRgM535YofjEwcC1rkzDhGptPy65tkMwMLDaq8jHaxb4SNaX4DESGoNGDeUZN1iCuuQCU6o65u7jDqBsGcLe",
  "key38": "5nBcMnSzgxZxv6vKWBzxsfDcyysP3rbbabHbjkCWbChpqXZLkL8NdENgsABtVmRTwuiHRLpyo8YnJmMrymTYGnKR",
  "key39": "4sGyyaf5HiKpAua94RGg9nupm8HFwNz5BR21VEcaTpTLtYg4qrZQg1EiC3PGkGqFrFA7vStzojyibHPyZB4d7fb6",
  "key40": "W5aUfF4wRwHAJpsd3gPsRFkY9GX8T41WKGRwj3QnVky17gZ8P4ZcMaMza3W3EPoEcGzGroD5KQJVsgsRNCUL6se",
  "key41": "sTE2Jgv5xauf5RhoMXSm99oDPSJEfE1peNh1Ys2J7fGcQGsuczzBz66vQp8tv2SbWqSQG58iZ99jUecoob3X3QM",
  "key42": "2JuBeSxuJ1eduJk6Yo8CwayKHu1EjSqHNajohf54vtyHHgDVSnNx2heWuzV5d3jwLHRRCC1DRUKvvzaPyX6yUffe",
  "key43": "ui7fuJRoD3aYkC9DsPaqvkNZ9APby48Fte3AqMvcGcRcChoXfVz68xcMttqUBAg23LupvaEWZwsmHVPPDEHmQxE",
  "key44": "UXJyDHbMWVUznUMevUy8W8ZTqJmNyNiPbvg4Vbzr86PdSpHAXYKuqBEvC77arSxMooiReZXsTqpmsa9yKqf9Dz6",
  "key45": "3pgF3DqKhXnSsP8aoTS6WPhDv8untWoTemnGiuADCx4pcgYa9DNbzE4t82QrjGU4jgPiYrNA9kuP73zePGEUmyk4",
  "key46": "2y2ebx92nA1LqUxRr4tcKYSHFyk9QaeieGWFa5E7qkGVCk7zkPx2AaFHDem9tRqUK4KRpgo1hVVcXeZqgGAMy1iV",
  "key47": "5dpm4fDDy3jL2C3fSLY3XeRtGxQUivPSP91hJ53VNSWeq9jt1ETB2sVUDrFH6mER82FFrJRwkqpGkzSPYcdAQU3Q",
  "key48": "52VTStLoLvzmtmDVELb3wQZsYDx1u5v3SkBDoPKacabi9vJa7UJVpznXFUHVbnZY1TH1bqynDtYu3oWQ3cFqz8ii",
  "key49": "4ymfbiqbEdQjbV6Fdw8vctKwjKc5xWRKAPcwUF8oSpaLs3HNEekCG1xnpgHLsDXKNdVvMmjprCm1yyPSdg698mwE"
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
