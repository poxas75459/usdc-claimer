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
    "3stb1k7EGdqhcTqjUuxko4wyZjccWCpLjuczmhNTtukfwMNyGPkNyBXXDBLjWDejNvFskWQ1KSh4Nv3iAyX73Ypm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NVh8Lt4GwW624xtL3K1ZR6xeu3uhrcCbzU8Tw4toRPDMHKWL2dZgV5Hz9NFv3XWGcw2Y2K1fWyLS3TDVmSymqMJ",
  "key1": "JmkGTRgzPYEL96w5pJL14dGVeoYwYrWuzhnKmo94FWShz2GWbZMjoKUcDg1AT3uVWdnsTqkkCwcP5xZs7CKphPP",
  "key2": "erEXhdzNzHbM7aNEiSERQb5qb7XdxuXuL1mTEb12L2VwVpxE6g4J3r1TSuzNYMXBfWTL93nt9rgwVznNGMgRb7f",
  "key3": "FowDrMvJWhk3phfcEbj87MRy3G1zQU8X86CH2Qj7gvzuanVNe8jxvzJ8L2LMZATRX4625ETPaMHLe79icjdB8bo",
  "key4": "3ByjTomF9iB9DBkJ3Xyx5UDv5CqULGNyyJjs7FeZ9G6hnWMTEaTxvKTJWwks4Kn9NcxNAqjVVzW5anv6FFPqrzH7",
  "key5": "3KuGJoKn1W2rcKQqUXmZdfuf8iqMkMBH6tUaE9dVDuTuUkjQwqpqSijwVzFyQVBVEEm8XgFuSF55D6W1aGNDF3XW",
  "key6": "k8iPNHVuEg5FfJ8PsAjiHo1MLAWzK3DXq7f4PhU9HZBZGUgx14BcPhcCicjToLLoms4PgP8HfD9V3e7b9dNYifE",
  "key7": "bWJaKsRrwPWHRs1HJYjtCz9ibmaPMkc8gmDG6E8W1uvPtPLQ7grwCJJd3xjaYKpeMgKPevZNegrkYMF9nG42BXh",
  "key8": "27m1GsP45PY1qJQnRaK9oQ5NohYdcb1G2PFWrFc9D4a8gsZc7qA6T9mrjwNGzNtTdG6Nz2HvqzsHjD7QqwzPzX8a",
  "key9": "3Nq4aYoWYvVbieTnPgej6SpTKtTUsw3bv58C6H4XktpV1rbExgUZPFh7ZznG18vzt4QmpchyDMNrpFqcSBcKzoEb",
  "key10": "2TKomgangrHwow4ABNHuSN4ak3wtCQXHLdMEXN8MMopDgFuqb6HukD8VnmqcRK3WK9Xotmcn9n6m6XN4P1fpBrYA",
  "key11": "4535h8ZJk16KcNmYXpuDNtHaERc8DY8421UxLnrRJT56bwvY1tdF4gCL8z2cwDBjSLmWBipak6ePtYC2VBkShff2",
  "key12": "3KkY37v2sk9rRPtDu5ZwqNg9pVxDqBZJvCWaDi9JhhKxWkBocSJHa9DwSDe6oZHSv4uAEvrKn32tm2qcKpGac1sm",
  "key13": "Tugegi1v5VCsszMrzFM2QRJXjWQ1cuiYSdX2Z8VtaUAYgrxM1DshwopPuDdPsyvX9E441W5RuUdXvCLgRyzdTcd",
  "key14": "4kSEpvgA2n8Qx3nd5FGfmo4Kipxqp8E36XSBQkFoJx8aF6aqvguqt7vPsC4okdMWP8X5BiJ1s2uyUzWcC7NNGDet",
  "key15": "3AjS2XgyMdCaYHVC1t1qjDeqyPawf6pyiPbxMzddxeS58i5DTJPmSj2n2VZ9246hfUXQMVDRRcWKycL2h3qpi48p",
  "key16": "5sTX8SvqMXALdTrt56TTK1zzTLLC3ZfPwt93qVur6pA2R7FEAMmgdT7G6gecU4TP7QZtgRKqZowBbUWJveSGAJgf",
  "key17": "55ebf1whzrsxwEojWYX8TJRMLjpm7nxTa2KAHhJdXFJmubj1VgHe8XQVHgHHUo4D6pHqpJH4Gcvm8LWSkHf6gTvQ",
  "key18": "3ZE7bvdbzYLAVXV971P587CLXzKnf4W74R1twprcuJGpcteRfxPzVtnfVuqZshJLEDWXWf6GitKEwREzgMbmmxpi",
  "key19": "3nqreEf7DEXzvVXeQkKzXPqj2T9rdZrV6dakG4NKq2xyAC4u4xyBVGbkHa4QSgKXcCSDcXDdMXxb3SPqXiBz1XqS",
  "key20": "383cyzdmtdFzhJtYXxiyEhKZ5As6oonrzi3sAogiuuFcttqMe5RDvLno5UdfW6anU6vubwvh9Z4dCCR7ew3n9vjf",
  "key21": "5jDYTJTKJYNfsztwygMpi2WgvZSZr24fk9cr1bfiGNYtEQjkvNyBRC7pwLiNeCYsWTQeN15pk2wxrCcr41QauLvg",
  "key22": "5BCFVwx1qa4E3g7ftjzmbKButgF3XFQzKhp4WizGxfBfonhcQ5jbkms63HBkGGahPucymN2ay7doVd9vkZ2rrCz9",
  "key23": "5Q7MSgjWxQ2668TZR6wuYWsX4TUhsK6N3PGVztARfW5Ys3rtRzhYfGxWmubNpKCK94R7L7HEkTsqbzRDS8PkVbNF",
  "key24": "3CWxDMzHZbSkXA4wQeqwMNfS7xjq8MeoQzyzCgGWjVJxgiUe4XW9xHtSW4fo1NcGR32pTXoHNHkDvgDAS5EQmqDX",
  "key25": "4XYdokcfjdxVH9uCpL7tTjqvazTfjNTi3JMWau4nECYc8JDoT5gwxWdwUBQ54DR7tHy6KX2Tko1Gm7HJW5CcpMUy",
  "key26": "2tq4bkqdBbuNBQ8aLiiKn4uD4iqFQyPdksRQE7e7WZbrKXqCH1roxrGVxB4iuW6WkWL66rfievTmvY3XWZX4zSSo",
  "key27": "32mwFkoF7SERPp3JjZR46MkRV7KpgbSSmP3iTaAf4KSsc8UL745Y7qnUFaKsvxnpryT95A8rMuZVYgJ13DPBqiB1",
  "key28": "34jRdvTMuWyFbEURh5tKeon48MuxG3d5YGBCqX7ToZwxHeFbwR2P2535iE8dvya97wPSZwbHzeNEPwBF5oxWHnTa",
  "key29": "5m2p4anscoByS27Z8WTzJ32kDHf8BRvCqGZzoLWVaFNpE2vvQXYJH5VDfdB2yULNtHzp4mCeeYhf4tuSp7n3zbaY",
  "key30": "2Hxdp6hcW92qBLWuNyrA7b24AwoAHF5VaeLzu162eozC1uB3AwTuDq9hkZrGNrtCitJET3S8Pbdm7Y9z5Z8s4m63",
  "key31": "3ihT46SaKtV2GXtzaWahvtu9oY5cN3t61qe9CysXmhbM4kcjXo73Q73c5nZVbHkbnwLgh1UeCNk7mrmmvQqhZ7tz",
  "key32": "2AEkRwY4ui1xM2cZW82y6Wz4xvuGMQs2BEfnxxMJZmy9VF35REq8F8tw7zt7HrwZuABJTHmrWN5q53cT1bYNZErY",
  "key33": "43EeBPgte4u81g7cnLrUq11AKVMUX4ioXc4ZkRMreTivo4etNvw4cr1F9HcbFWrWnFTebPqCGthDK3uunN2rpX6R",
  "key34": "51yte4xsHYC2j5hS2Pd7hpNU4tXCXgyPDsDp9eJyHQtMe7wKTXCNxsfjpoZsuCEy75yMAZ5dGUnZMsUyJ3D2zM6m",
  "key35": "LND8rfRomN4ZBy9CFLw1xuVQCk3w94drnfoTDZ4sATD3GDkMx6Gcp4Uo3Qqb8kRsV1SQntjFKzjv5JQn3ov7uRm",
  "key36": "4tx1QrBCCC46fC2H4RDghv9S28Hb2WM9FiRCxutbU78nq8xFGE4EhAdy5UwTEdz5tRopFaLkZwg1BU1fY1gfCiHH",
  "key37": "48g1oWrqnRc2r2TV654VQMu6UR9Zoyj8STJ3PEZ478wxngUqkYvEEKFMpmswyJNt32TPCEe7FbesUx76J54byfJJ",
  "key38": "315wRjcR9pnzqeFReVRsXNjMMzhkH9kRTZGeZYE3HGzAcenuUZTbDjjH4C2mdQpVxYauQLmNo6gDnwWhZybmvt9U",
  "key39": "249Nj7Rko64pQEdSCKnN3BMkVvJHgmF54FxvzCmMjQS8nyEgrsmx52iS8XbsRfWpeEFoWWtpXBMa72xxuFqHQU1f",
  "key40": "3BLSTPmiqto9RiujAo47e75R9AooWu59PQ63KKTUuJ89X4f6FsmtRjhVrHazSqzpkAL8NFHKBPAYZ3eKb7rA1NmE",
  "key41": "4WFyuRfxb9TCN29dKZUnTn2DpFc5X8MTFgfKfEwUGL8P5cnd2Lq2uCy72BgnD7jpZ76Ai9wYkD3yKcZqGbKXDjBa",
  "key42": "4jG4hZYUMxg14kPLBerRwP9hL3cMo4FGx9JR7Bjb51fdDDtJt5kCiAsre3xf6iBHvhZKyqZJvRaXk6L97ks2R27F",
  "key43": "o4bzFwWHjBGj113YwcdDQBk54sYBUcWvscYVXr65zVE6aJUkY3AAptPEWv8scNop9Wdd8sFLAhthBDRqZLBDWM2",
  "key44": "yFhCGvbRCZR6EhshFHoqKAhAZWe26pThZfzH5MFmnzTMntegE3TTq4cJvjaDpRgt2s6A98NBDpxJdJCpx1Q5PqN"
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
