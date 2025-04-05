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
    "8hjx4q6WXFr8HrbeYDfCejb1KyzuXsZkzDwArk4mviTbkE1oGwYUuUA1j8vdRLybGiGRvFQM2FnDkqQS7CmbU39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e8raWaBhqxGhS9MPHaTJ3xB7uYJ31KVPAqe2CCpWaq1vgZhx4reC2pg8tmg5MgzYwjYzELeZgVQCpQgX2yzHAcQ",
  "key1": "5RJab4HfbdBndNLozf7DW3yb1AmuwpaBLySaaVoUChSXzUBk3muP4NbNCvHWmeXpGgNvAaeCszxcP7CtcLNjY6rF",
  "key2": "5XDPvZhfFwBPepiMD8LEUJFVf5xr1QKXNzCMdzjxPZWM9iTSmRsUPAwpW4VEZuS1FNJV1VmdVeMqdrDerkETHesz",
  "key3": "3ttGe5jghfJgcWL19u57fMTTNvTVtHRAv83PsrKWPdiH3oTcX1oQH2YH8VszV3QzfHSTKPTTak92D4LVja9vAoUR",
  "key4": "5AkKFp77n1WpBGrny9yvUwHgkTy9UKxqeE12vzLXNGWqwxXtm7yedLyqWzgTqGekLGBsdZhhDPnSizKEBrxUPaUq",
  "key5": "5zntP3WrviLLx4JwwkLnLBu1ADCkeX77jmxSj45fuHHfVFfTs23c13iFWihoi2EZvc4WxE5eJdeGutu5TjZEKt6H",
  "key6": "3gHmYvokwKs5BMgjEtiRddjtLVKQGCzUMza2efCpEqxGxmC3unH2CniKn1Q7t1WnFHmNBuTvp2w89i1rNww8mkCg",
  "key7": "eJFQehoY33SGn8B7G4NubLQLCQjqRtvAuMUH6vzaP9kpsFuoe6Kj1zygfwcaq19gf4mcDs7FK2X63akwqq5BYTN",
  "key8": "25bpzVwA7nCf4qi12npaYE93FQw76uHsrFLnWKuYW1nZUXBoMcbz55tjrAKYgphssarBGrMu2nD9L7iPEiMrwVjB",
  "key9": "4K5DrQteCMLbRHj25HMQzwaCyxaEbSTgFf8RVankKfvAvaeThWAUu9B3WQHCHKs5Eihwd32PBhfq2UVzP6dm5s6h",
  "key10": "BMM5nKBKruVVXGHaxuRxcKRszCcijv2sU2gis6R2teCzjZ7LxWjuXGhRE3uqmFpA1N6b2PViFBMHHA4EPxFKMYq",
  "key11": "z91qmgwhbw355DvpmVNGiAM5tZTR6GEviWVuvHup2UwHTPnipad2F9AZSksYKKpgeWGgyPfnJbFKBDMU6TcmLm4",
  "key12": "55xUBNzkb4fdsSKgTtLHVoBcfJQ8ztToriGpeusA8YdfMuyFijC38XsHCvnJXMa4Xqc79b746iFqpeZBgto9Eais",
  "key13": "3o7uUNoygaqdFE9Wu4zf8H9wPkyvSMxkizLYDwyxVnFCsaxqUT28tT6i4FJBvMFGbGfBhD7bxAA5a3vxcMPGnW39",
  "key14": "36qakwFjro7ZWSE3rouYzW9c5K7PXyfaC6kkTWJkBp64DzLTCFkq7UX1KRWkut6cRdphzfbTG9qiwFAsNBp23TvS",
  "key15": "NNfJznTSMg7WC6YUThppncTw15ux8nzqg7AHwVHWP82QdRf1fb9dNeuVvizE9Vz89WikWNpqh5Cy85YCNRRwbgJ",
  "key16": "5fUSXQd4wfZMWRFq2z28JUX6QzjRT2FmJPWEAyXRjPgBh5QQTScJeD1j8Ppe8SQrAKkYc1A28wHd3DQs3dtHFGTS",
  "key17": "2cuMuxyXhTcovUUVkuLKZ7fUk15BZes12PtAPoNBwod2P7wswVkjSqpAv3mJewHJpnvVrbEVXdhWeeaNumv2n61R",
  "key18": "3tvHg3oPxkKQ23uGBXW3PhnCg3SmahS6r5q6ZvECVN4jYfqg67ZbW1TgA8fRoJ4pQvKLRfEPnvbuVEH6w3dyLdpS",
  "key19": "4k7jexVkEsNsvHD4heJqy8VHJMWPjkSuB3YAfgfY4uzTUdsGKf2ZY6Bem4L5SZj5LojCKqgoL5bmoJXLCuUE7T2Y",
  "key20": "46WjPtNdokyPqtfVYdqGJxuinzLtbaQ4eZKTSxyvQxnrYkXyu6f1e4vpbrqL2PHV2FS1y18BNjGrWxs1KpJz7qep",
  "key21": "392NLyEcMCgxxQjeUi9Zhxq1kwXhXCiy24RiPRPGvnp35nysWfBk3Qg8AdqKseDatfdUphgoZGzRMUGzXF8j2NLi",
  "key22": "3ebuXdvD9iyWTrGi7Xw57U6QVouPzv3t1KDi9dXX4eEzmBpFr8ZS1PFbcRwSz5RJ3ox6eSCnv9FxUfxyQmM9PDhS",
  "key23": "Xxb9GnmtVpDrZXG2Kxck85tXeQzhR7RAkDAkMoko7jghGTxuK11fGkWehxHii8H9a9kzMjDe9QBEk3oXdgbvZDB",
  "key24": "JM2v5GuY1z9vRenhWGeQ6ncP5959SRq3dvx1f9p2fi6wsgup3HvPE3FhAznoXFTzLYKrQSihx5R5GzbqvMo7Mbd",
  "key25": "4kE1qXFSxkk7h9wUfK7KAgrrNkaNvSJtiDbPHhwu7aGEb49oMdcRoPhhxnRV9BXCetYrJmz3XtE6qqw3DFV5dTMq",
  "key26": "chC516QKt68XiwDSU5qU5veLnW5Mh6Zgd2YCS3gT5e2qAAgHafwrpUqHKUYuz3S1EjWBmyg9Jvf7GVwd2wwaRao",
  "key27": "4yywXBNN2wHXgz5os22qhGSd4kfK6GngmNYK76cRiAK8EoA21h1NHYPPZGJkyQjHvby8jLcUtDRuZuVtH7o6K8UQ",
  "key28": "2L5eUaKp5wSUQhdn6aqqHwXGSnjQGV3bLkRGbRP4cyFLq899xv26V5Dy1JdHwz4FaUU12stPxrzzWoZZKFUVzkzG",
  "key29": "4YjZsdkErVNVZo4H7hCKVmwSGXPe5dSBVuc3BiQ3meUUR97GHp6nFPz51Qncv6jMrfAhoDFd2dQ8S1xjr7gLnaxM",
  "key30": "2kniAkt2p2WggjomYGYcQ5JFEkhYoWf9kHUxagHkxVG2gCoU4vfiqtnbC99JPh5yB6qELCEJmT3GqjDtZu9oau7m",
  "key31": "TQJX9ap8bYkpViWFJXVos1XQ1cWBbnMRAkiJR4n4FdVntH1mnqHk7SNjd4V1AkqsrUzv4DNvqnAVmpBU9aomw5K",
  "key32": "4ViAvVmTEc9u7ZvFRvLgyWcG9dqf8KgJ2Fr5hwRhJdWy3tCYB2jJerFjXuwj1iXGFALQ9iZFLwtzvUG1wuqXRKe9",
  "key33": "5FQc2WHhB98W5MM5uULjxVrcEcv9UsVNfhsUsGqrRaAjCYjCihaRyGe9AsP6SngZCioxDSusjHhucwg9dTYcDMUj",
  "key34": "gpf3kNVAV9rF25B7YUbcpYmQuAoc9fEgYg5Ad3LULvcutYAqo1VvAAT3VdvDwDmiaudCfsZzZhFg9vDYjFg2oK8",
  "key35": "2jbK74dTyD1Rqr2QEfVCJ1XTv3HHnWASTkZwjo9y3qo7vCJoDKpLAe3FVnxFmquSc6sTu91cJWCLrnQxckVYHC6F",
  "key36": "2jmpSHTWqZyL7XLGg89sFbe1uvdDT6SY673wuAfKbew57CHiaKmYxE4HWfmvHV2Bhr4mzM8G4YviaxsmELqF8Eoq",
  "key37": "38s72iRuaoZTdoLmRimUoJKMjc3fpSSDPvEiCA2xCY1Jjbo1Ha37TpNwnFmemQqdLY2BuXKFq8YDNL8GR35ixf1k",
  "key38": "5eK7Czmeo3n9HqWosizWSMkQMKB3EwXb3fjre9zBNxrf33T7mUiX5TZGiDVM64hhpFaDZ4ULtqGrDeW1eDTiXbah",
  "key39": "28GKeMrorormYM6yaDfUQ2M6qvkvHuS7s84GUoaK3esxMiyY8eYfQ8QK8o9eFCSgqFTBmaDKn4weT5BPSCev25wc",
  "key40": "R8NBk21DbvkFrfeq4YSin2WPbGTvbvwGckTkcwVGZvNHzfLurc5gxhXkT6D9yn7vBrpQBHMvSeqJYHXC2cWscu4",
  "key41": "2tiGVBNWNjv4mvM3YahhDZZc7gvMFJtNEuWSUqSSjjJT4BY9qQ5tycf2idKiFxK8nDSf3fgr29avnWW4D6V9M4UG",
  "key42": "4H9n62c1M8C315eDdeiNkAQBogW2gBWVwQRVYnC9JpT6D2XgaedNYPRWXevXVoLAfA6PceVbuqAwVY6tH4bzxXLQ",
  "key43": "4DcKmGWsrg4aiNiAPKUuWhrjbzXH8M81EkC96FdWSoVMzbz7yzg2hPsPGvgZfAK8uQidzLt85CkYFSHWLAsQjxp9",
  "key44": "5LcT7qykqXfJHNgq2PdAbWsDM3XKWvgLvkx39GCYSGp75NStmgZzed9g8duZJobg1nruKJ1Ee29193NNi1bjGtSA",
  "key45": "jYqKPLHzC9dGEcUxN6FpHbX6jNmscYBfrTaqbGSWy9oyWrLPk49TFGXGb3Rn4abr855bvjf9Hq1vbdVHsycurEt",
  "key46": "3i53A7y4b8wzcYsgxFo1jFU4UCXtVr8pQhKLH6ud2A7Qf3qAqYxT3ru7ENWraHwCgzWsFVgUwAQDuXvV2mBidsz6",
  "key47": "4fsEeidCSRkbzLttWHxwGk9fmdB98Po8Ew1ahNegCdnRnZq1uqkaKZx2mQwVHPvjwd8RXxDQWLhHrKSJXAay8zdZ",
  "key48": "bw6tknozdTi9KxeKCEjtDVNc7mjhxYq2PCSoZT2jt2xsEkqcyXxhghogApXD2Qvkd6yKmL2BGvBpr9MRnAwkaTa"
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
