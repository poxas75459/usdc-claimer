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
    "vXZdpjzvbVBowifr7JSKaiMeLABnydNQztX3opgz2YMcLrcpbUthygYN72KUUUgFYqX7BTjF7qn3FVVMsFAMaUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KbKzB3FohC2rCUutYAgF2sjQPMHXR6TSe7aWSPzhUdFf3gThW2z7z7jGdHtpB8xiCoWa2Tt9QR8DeSqpWbNS5xs",
  "key1": "51tLfUSNoxxhKfwhKQKKdqYXwxxeM3BU4D4XPYjyfbtEX1zZREoNo8ZAxUutyBoWexLMWvLvspx66rYvUssdAqda",
  "key2": "1CkCfhopbf6u5m7G78yA6QXsmSvcTCSUYXZLya2LiDTJejAyDyu4PJ4skpRfaGk6ES1CQyVQBJSWA6LV6fvNzBN",
  "key3": "65G9HEyt4ufphoah9mgZhqAeUZxwoY2GqkQunn9q6Lx1SXXk9rn15f1G3pALfRC9bZvbs4VgN4hKXqTmPLRuSz6D",
  "key4": "5YAeezgpUz6w2FqmeACd7sdkEhh4cTCXjsrdZLN5xAuvwD92NR5NEF1jCdpE9FGVTPS2pKKg1oCzFcNKJCEx9Ywo",
  "key5": "2P3YxVt8WCoxNddowTqCSfiowcW7oWDSbKD41yNAkwVtatyBHnf8QSzB3HPuB3LrkyLaBiHNcZcohw7PdPgPyUh9",
  "key6": "2EuKcX92KncA5JMx3hSiCbfqLHsqunEZ7EmeN5cxs77GCcgNPk15wvy2YpDmWbtffzqFemrJ9Dihwtho2EDpSJw1",
  "key7": "579Qhsy4suKA94iA9g3AUBixCcfLWLy11bgD4EdJ6njuQMgz1uvRJcCVj7qPrgxGctz9rUcLs7BxwbtfeRzqhoxk",
  "key8": "4VdYZKBoCMuKfZvwx3kPuBS76zpg6XAvd2QgqSPEQrLcvNvx9HKWGjPVz8RktTzbBhJH8g4q3LcrVH61VYBhxTas",
  "key9": "436ZAgH6dgSCsFc6BVHkHz12TcyU4V1fbSNDRYuq9mR3xoerNGzfQ6PrLVUZbnGFoEmywzeBqo4J9H78XjBdaehe",
  "key10": "3XaAtNKacCdbhFyoMmqSWU8gUi6gZYMjL8CFKmDrMsoVzvBrLvf6532AzUiTiiXP5XBwRNHTb6UZ8xqUmFNBnPPT",
  "key11": "YRCc3SMsfyh3KMZamjSgiPnGEANS8fE5HJVcMJzpoEszu6iAW7QbiS3R67pbYoufBnxHNgfiwrG3n9LrJNC9A3C",
  "key12": "5h9W6vJsMa6P9aFYAeiHkumDQ6E8zmxYDoMKupTR4xMMPoxo37D7FuqndgdfGnuYi2BeCfoNcr9bnuJaFQCBSdRc",
  "key13": "3Pkk6oeJ72gGXzoYKuD52Et7UMEhLY8dPq7UQfX6R5Z1aF489UrQ19Fr4NzDdG7gEvEWv2eSuumjT5rtUroguNX7",
  "key14": "271bTtPXL6hh2FueJNB4229xSGJ8T6CeN9bfCsngA3h1zTJjrabicDfhNebeyGWYMWhzDSPitRB1QyKbCQZMTBJd",
  "key15": "67TDV6b3v9LkAwRihWmbVMhZaKj14f3K5sbBKYTLbsFKFWNykUkAaGJNbkUYXS2yE7EocDf9wecbK58qJxQZNgZv",
  "key16": "2zVGHAPpGvNxKw68DoAsyQtXKnp97F9FDHProLDfdp9Mn8yBLsgpjrg8yx8RnYaarXwXYbsjJ9WMVtvGCdNe4iwg",
  "key17": "2XQT5ieNLfzVAAk1X5LwvbDhpgHPydECyBv3uVs1578JWWSrkYDJCS3UdzdPNFJ2ViVSMfbt71sJUBMCvAN8Znx2",
  "key18": "3nTUnPN7itVMSJ8x8uMbVsGhTqU5c7Dvfrcc2LZDuv7MzAhFpzsMSorFqFA1vykHa1GmERhPzbiYq4YUcj75wYUZ",
  "key19": "2wMT5DsJxJzKML9tEkGDP4868Pu3Suzy2oAj2eBHXV144DiKvQ4GudYAnFYDD8yKimikbVbhZ4bqLvqixRitTHDR",
  "key20": "UY63JacsJhAEM7eSYh59vof13Uj1hs53avLhtqZorCiZiFTBPpVUxmJFpdE5n1ss7dgt9B7MGw7K2DJNRLD7ZiJ",
  "key21": "5ETHXCAipS4riCCzfLcRXmMqY2LiStNQ86HYkorcubX6VkjqkwQvUZyTeinA7DmPVja4vQJokNpo7rvToa6wK2Fh",
  "key22": "673baqQiJXWVKhiEx5uzcisSegTCanx57eq5CL9qD1hUzuEhQWHDqu7hZiwnR5UJu9QNuS4zAoJB1ydxcFes5J8t",
  "key23": "53658gZBvfYVnbBo1mr3wZqtavf5J2xr5FeWucW51vQiAYJxwTZ6daNXSTrSVWMhEWiRpiKKq5gqDqTYmEqyxcG2",
  "key24": "5SZqZ6R45Qqjy7c3GMg6EznsgvX9XxDzP4C2tqZUV5foHCRopWj9wwvt2AWuqBKCQ9U4Jj8acwWctVGfyPf2q22z",
  "key25": "Gy3Eu3zvpYoB3VSkJ2Dkh756HAJwGdJLKPGaSBAUJ72fRkcKFkF2igk4UGbtLFaTpmqR9WEnzJvrR1U6awyrzs8",
  "key26": "2Jf3k8rBf8d6XZFw1McjE2qhycNG9zyEweWoizr7JFGky2nkJqPCtLuZPzLQ74MjK5RP7T3kEs6RqYwoS7bmfkJJ",
  "key27": "5KcTXyUQf3E6zTxrwXajnny8CPc63q6X7GK232V5AnDzNy7Uv6pZudFoNsZpdhP4noB3giqrukQ66xeqxE6JVSve",
  "key28": "5AHnsGkRtikVeAJgUjstbwpxUezk9tESiat32sbbh9BDQsQ9re3rBtsZ9oYdFwqwUoByk68qfzFcuRB8dmDAhy8Y",
  "key29": "2pZU6p6shcV4PHT2FBJkSPqav71nsw2mui2ZEBkywxWGxNYpepYLiPAFmkt3qC1s4btfGndgfiKk63GbjrvENiEu",
  "key30": "53dbWB1upGsmNPLcg89K8MriwutuyabhpjmfTrqVjjmEuS3xgb55bYbTztPyNcTeya8W6wzNT4C3y7L1uGv9fqgN",
  "key31": "5aeHLykLLT48WVeR2bNgVxCVj7bvhNR2ushs3CCb1h495rAFds8ekbokjKxsogBT1ZRNM16SXKjgrj2kQ8JiJovF",
  "key32": "2aoiBK6TNyVpbU27afZCwfuGK6h38jenNR818CA9PWD9v818bgNvYCK9SBTPrsTvuXiiRdr3KCCD8pozq5KC1rD2",
  "key33": "31dTeCAqncMephUyTD78iopGzeRwgBdvQdYwbnQf67av8mZJHkJMrwnWwvAG6HeAV6tnEt3sQ7q2YHhmiqU9QUsf",
  "key34": "5wpAgDc3dmMpF5GUbsdFn3juZfPgaVobp2kN2twmqjVwwYJm1hVb9BHw3qMRXvZwGVpGKcQELuTW7zLPACCXNrfu",
  "key35": "4og3TVPKzaFNcXMAW6MXF1SCuFYMaXvZdnTexEhUKrC6BmydSEhQTJDWptcS7XetoXz8nG8ebqqA7bjZQV9gcqaL",
  "key36": "2LhbbTm1S7TLxHhYmtn9u7eaWEVZrCGDPJwdzAsYwUDVQC7RKrk5KGo1JmZGHzAPfs5RfdEyNvXCFasBd592DYw7",
  "key37": "3ZBYq7rMpVZKXeGx823gRZQWXRZ2ZfXvc8hYAjh5ZVygkg78UmuqFMdRcGoywxQiSR5EvNYsg36u7XTFnFoy6PzL",
  "key38": "5MMPZzsaK47gYDG2ipLNMsBWVyRgMY4Ax88wt74LQwTVGPjUYvSEabasKgSvMVx4Cxv4JzZSJ9KSrGSvnFVGYAu4",
  "key39": "4R6CvAmq33ryNAZjTcse97yTERXC46uuBb3fmjk5sCrZ9yjaiXdSWwdPYxtX5JkPvH2RXVuVvtrKswSbHfzH6JWL",
  "key40": "41Js5cngqnPK9XxjmENj1khHqnfGjzwZwrZJKBv4chDfbmQxmv5UaqZN8Gyo2sdfh1FPBronHVptj1Kz2xPgLGDS",
  "key41": "5X1JyYd97MEZg947fcfSfSiF3qvDVZpMTETcJ5CLCzufyJBkbVnNoMMpH4otNu4zsEXwtHNgSWK9cF6vnpiRfnPY",
  "key42": "4YDN58qA85RLk3cf9fkMnED3Ep98ZVyYGgdrchjzXawsuakkDypgdFsmFGemdTk2tRmXJMyihyETSRer8y5WW81L",
  "key43": "3hxpWV3yRv5yEYKbUxMbQJG26MJkgFPZThcBbmZyxLBbsMaGA7T1DZ3tbGRNPTPRweGKuXwvAzptfDPgFYw7QUYE",
  "key44": "2M9P2PVehncLvxiAwWkV5HHc55FWHY1EF7DNsWggx1U86umCak3foyLTFikKuHfesXdi61DhnRcKU1iCjBA9C8Zv",
  "key45": "3Ec2uVP2PPNmQmkHy5wSiTcW7TCTCGgRHN6QGqCLSDHvSBRAAHfY2Az5ekFbrAbtVjNoRv8GxiZSWFM74a12iz4j"
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
