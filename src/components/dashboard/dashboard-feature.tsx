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
    "2BBC5sYgA5TN4Xxeuq8wAGu1e6f3H6j33X4qktXvvoMaW9iioP6u9CpuyNb1XWQ9LSDBUMcDjU3SxaiXzAD1ZgLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wCuHcgLqLxpqmnGmzSpoUbBA8Huo935cjECtYUxYVz1dkyHRM9P9mh5SmaGEtR5Ng95qhQnhnPD1Ni9yB4V582B",
  "key1": "53Z46PzZZ8p3QGFnW4XRhCfmWsQTwVRhTAQZDMRiyYCNfRT5p6BsDxNmd9wXxTNS2XHygC9LTGQtTSdVDvkeKEEw",
  "key2": "4PpcdhtEvUtr7B3MDVDnXVQ576zChp9K5jkzjMNRVs4oWFx91VuLNFFoFmrN51NK2eLG1ud5BznnPArMdwUPngnL",
  "key3": "5Tz7zaenLoZGqTbwjyHAjFLi5UUQCrugGetHENd272VoBBWGAYFTuqcaKSFQFcXRoawKVwdj4mWNJYYNh8fQrEkk",
  "key4": "4v68JdhzVuZ7RyAHPAeDujwvepraix9X8LXNsP9ovK4WqUaA6h52Ubb5FQ9JqBjAX6hU4hGDPMcrg1CW9Fg2FkgX",
  "key5": "2m1ox9vpovUBxnKhonw9XCdkP2JF6xDh9Hh6vJHvobPZTbhwsodn5F2BqNg59E7m6nbNFgws4TY66rnELBA6dwJD",
  "key6": "3P16cYCeqESPmQQUeYW1UNGSLgCutsBPRtefnKzVNmEtMq4WrHAmmY6XMLaR8stnFpJVZbuHxKV3URxhhYQL23zb",
  "key7": "2C5z2kr6MRvbK9KfdJ3keaC7s5PeeMcHnWy448s5zXdJ8jkyTU5wQGaexcUsYHwZVc2b4nGQUJzBwV2edVpSnZP2",
  "key8": "2EUfBkTDGqcX6MtSnsZXAwF26ctT9esEFqCsjQaxu5qokMTiQ4JZC2m6GYopRjyVGXrabPcG7dt7WVRhLY8ggDow",
  "key9": "545WW4HpABmu6kdabCf72xRBFa7D8oxwg2W6svYaEQK5YwJwZjeG1aPrPk9xRqPpEDP5xvZRfw7co157NzoUZJWP",
  "key10": "2mbWAz3qaZJwaQSHMqfVHjkfnLiPmjXc4PLdqagUirzifSow3TfcWLfukdzRnwbQDh1Eb56qNuJsj6PhW2YCW5PL",
  "key11": "X8MeYpNVDwNbWYBdgeoqdAJFEa31U1p9oBb1cpyguG1tfkBH6n2CuAwkwUv5t4iHfqKruqDn8Ds42zbDVDt2ULZ",
  "key12": "QJtv2GNdxDrmLKTYjUwWQviAETWJjoNhjqJAcj3bghanae61nVtMJPd4FX3rUaiva3AMgQtQ4kbW1sAZXRPWWue",
  "key13": "4aDn7LuqLzGrZnKXkBj5SwQ7GRFz7RW3itebmh1eyXbwGAUKGHZmsGS7YJ827EfvJBwjH39a9dTRTRgHgi9ffxPT",
  "key14": "3DQaBUgLXaUEdkWzn5P6vwyjb7cuBrbia6hAYzZUHRgSa5QkzZsNwXw3zvDhyf88usskk7sVqXPzP6nyQwAYAWpK",
  "key15": "3b81h3qir2vjeQW8H9jHmp5q2XyjksdUMisaNvuNwy9fERp2u7gbk2FdkASkt2EEe6gnBGBDAxhAhjtuXKtDhP5",
  "key16": "3K6kX9gjR2dd6Wzpnqw3infvqD3EHLXjyH3f7km1yBFFZQLStcVtpjiwdgJPcnyU638cAzUQHMmcppwNyp4Aaha3",
  "key17": "4ypyNnEjDZxBXjFqsZLyAyyKdprebzmixV4nNB9gLBRHWq7S5NhmgcbPVgcTtfKQMaYPCqJtYRSgPVs4QDEvuKk6",
  "key18": "HeGt8SdKro2cKUb1wuVAZS8xTqWbjDS3ew4z2KXw2ee8s2QcUsGgAiEDZbWZJgLYpvsetmBSuTYcqvL7RSU71er",
  "key19": "7fTgoQy7i1XV1NrZBCN8Rpn8TLU7QrE8VkRYrsQSJMt9aXG5EmftJWJsZAebAjxwPZiNga5SNj2225EHatKiUGQ",
  "key20": "3MZfhBSiYwz94Xh2619xpuA9Tb1gKbRd6mz8RoZSq3bEcTn3AzmQXHLfXi1yj4Vva3WuTtVtStxBBbH2dVwfjpNo",
  "key21": "34WDo5QP1e9Wi3EznsQZ4Auaaujtj6Z2XQhznWcwNEjwSfxmTCZtEe4K4hBV5N5rRhs4oXFhp3268zgiFiWABTjv",
  "key22": "XE8pxhCx9fzR7SawHCwycu434SbfGL6N3JTDHtrZQHyKH56HuQjNdgHZPaKoMzNLfcpemPk9P4FhFU2X4g1ozah",
  "key23": "3KcgFafZhbRHhZ4Z8SvMv6DFQdnyvTdR3y3WEM1JwN63Zysa2osdm8fe3Aywfm5DUGbDRxkW6LF4F9X4gBbKBQzK",
  "key24": "mgNTf2TJ1ThpDgwtJQrrdNp2cw2pjKHDtBdhjB7i2V6P8BZL2SxePp9ZcCxkCpNL8r3bu3477nwnbEoSc4Tuc3h",
  "key25": "4MqUxoGc1pTaGXj1SoMyzshQ353nm2NqAhwxUx2xAgcxhhHU4MAQoUrdYnim8VcnVbcPg2zWAjVbNKUqkyuztcX",
  "key26": "ViL9XLxLmmYX718cZBg3fCRyDaccr8PekufMDSFgi9LLetgrg3LdbYkyehMPQBHBVJcHw6xrsGLzxcme5Z4PKSa",
  "key27": "4UfWVu8bGjZM5n6moxCe9dTcqKewTuYYFKwm4qP85SCgfHJeZ9N2XjNKUtR2BXHyHLL1LwWBQ8htY5iPwkXAJy1n",
  "key28": "43JXQyKjjjZtKbhwrFDNnK9pddBmfM84icji41Hc78zaCasm35psZzip3RqtLfSZYoauqtw5e7YWCJgTxknyq6vG",
  "key29": "5K2wW48WUzUEjU6ox7W7GjhoQV5UjnBdeVuiUtqFhMy9jsDgYTQ6ifoWRs7VWwj87nFQJ8MACqoVUSuE3kjuzsj7",
  "key30": "65kABgkWgHqSHHEv5nrUd2ZZs9mug4EaQ1LATbCrCXHEPoEB5eNTC7wsmGQ3yBbFLm9NCF8iQmm898m5FAfeG95Q",
  "key31": "4ESRkCUqQVAXTJHsYcagwDWHjC39phJ4hQAsJNdgjFbWWwMCVgNVhv2Tf1FoA4G6rAsXwLxmi2kvN1ZURHXUrkiM",
  "key32": "2d4gQVNaP9Nq7fQQmGUNDWJyMhLZmWxyoZ3ibj12GFT75i9KLKU7PQvSqwNBuPAihgjkwXJyow7vMMxwsyPqsm8H",
  "key33": "2jKEg5JXPRnZpQ3cAV9CtyVpzQsvM6Nax3KwudkKMdRiDBuCWmiURQTU77NafmqzeaHe24FhMvt4D5JGJucKRMoG",
  "key34": "9bVunMUzdSvMtnDQEpNedLj8ft6vfee2QJW3wp2pY7twb5K9edoHgCtZtNbAaKav814DyST1KrcKhBLjTYKaume",
  "key35": "5m3txs3tWV4DMTJV7RsgkCuir84hdve4vHQyWdeB8tzk23HrNdPYGqAv3BbsCSyzGv6toZYvsLKYZdihormYCBWv",
  "key36": "4fbyMbNvWg9cyx3xGE3Akm8mMFwQMkgqntsu9egVaMxGmZgKogLncV9ACScdSnyMne7xyVYeE3hEgQvUWz2KHcwD",
  "key37": "4TcvjbiNtFQbaUy6xAt6gdodHXD6Cw9AmHpTEmsvmRfpmyXNhUBpCPJi9zK35kfT5xJJ8JKyEWGR79NxTH3a6UG9",
  "key38": "2iy698DTn3HW3T3q8GPyhx5RPQYHes5uyv26LkzQ75XBLQsDj7KVPZR4ypo13ijZAS1WqtpQSYcMC3VmarnhsBmQ",
  "key39": "2mChhSXGgYRXN5FGiSBWjRdjgxuP5LNSFaTL61zy8M5jkujmejVheBcibxLXDJJojuhKnnBTF86ohtTA1Vg5eXeE",
  "key40": "2P1fmz91ZYF2ECQnAA985Dwoc9vHohRaz2wWCC3HkQtefFW87FBN88t7BzZuwtGq2Fv6HX75JUYYTeM7cEX71Fci",
  "key41": "3dqU7fxr9CWb8BruTdUbsCSZqekoy6bdMeXwVKp5zdwuxq7pSznY2jVgA7ZCfzsMMRnrVqQrMnEZvuKSECbdh7h8",
  "key42": "SubH47SbiVWD2htcdAfej16Frn29umXQmzsbnprHLEp2puYvMhFikm16vhTqRGwkV8L6sbo8WRL6JABhDwtUFyh",
  "key43": "2kw1iMM7tjsANWhk38MLYWikTcSftk1TJQCSkhsUHrvTg7NWGegBHLq4SHN1BnMxGgFcsCv6pgPJR5YYfbYZdZpj"
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
