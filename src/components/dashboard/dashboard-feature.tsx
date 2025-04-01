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
    "79pmFrtQkXh9CHaQfSQBusTfZvZNL4aHMqVa3gX9FFhdweaUhgYyQtUZ3GRjfGsBdnSR9vXihBWgak5C7QtEgFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hsrxqgpd7zFjhEKf7A1WpTMunoxYZSBY8qTm979DPNEKbz3dJCu2wJEGuscsy7PSQF2dXSrcMNPpupDpp9kumgf",
  "key1": "2iWEaSGVAeSQo8CbHS53iyddr5E27PQEqtebbzjbfsmAidXbbbEVzBrqauZzbHR52Y6E3U4DnDaad9JgMX8Qnj5u",
  "key2": "Pb43NqKEJ6UZhAQ8ouPvgnyPhbc5AGwUVzDR7NHyqbLeipxWVgKGWNB6C5MrWvnY4asA83cN8prtJsysHV2R5JC",
  "key3": "5pFxCckTsZx1TrjRiyG2QE5SHx4E3eQFSZhgS9MtRHZRenBWPfArAwRH1rrZU7W6SXGmLUBHvrUvsyg6S5REX5di",
  "key4": "ZdWb6La2cvpqd77RvDf8jnwPzoGy4uxobP8fd4G8p7q5tUohYm8VAwgifQrV2mh9voQUd2sGsU99hVCpJNqhy6d",
  "key5": "64p6onrPSz6snfyzcDvv4rPPUbpFDWBW7SZp7RH181zBA2jonM8T4urq1sgZc2BQLcwqqo1sgBLGNSnQvTatXk4D",
  "key6": "2Gn7uE3q7fThkZaETEwMqXn7KZHt31xcHqALBzJDfVbsSh4yxMVrxxHQiKPBmjMoEer7dWAvG2kNYt4h5oy82v12",
  "key7": "3qcHXGwZAhSKkxoKFcqsLU9bnFR1MbpDf6WBVDAtDF9RV7tq6rfVM4sAkgwA3ru7qDqx3sisFBEte8aQe3YmrS66",
  "key8": "4PxGWVNQJKDuo8rLaLDDCd5gGoWsWcx5E4j5YJVxegehQSDn7ikEKb7nNiAH92jC7Sq7tXfZdb5YpW33k5RfPVWb",
  "key9": "xrej8tEGfW4UYTZsoTf6gmrMn6c4Fm4XcskhUtjM66kx7BXJxNLyi3QxxA2MEW6MuByMRvJRoBsW3oPKZazaLZF",
  "key10": "2j876q9FenUwnxkjJJqzn71dr3Rf68Tvoys2zFSusG7eCvnvodQQz27DuteCchL25UYewXMnYyquGVYAiZEChV7Y",
  "key11": "349EZNpsCNScLVsk9e1wVb6Fme2edSTDiBZ7hxEj8x4QkZe4x5wMdvqq24wdd7g8cgsYKBJMXv1vJ87jyijQpytt",
  "key12": "3Ek6zZfc7fyNxaWBaws2JrnhGa2RksPXFcaKE86dzkxGsmTpb3DaMJxxZCxr7vzscaArXViR7i8zdtaDKvF8Htt1",
  "key13": "3UvmCFsdVxxTgWPzSc8bAmur6iUR7XzEtffU2P7Lp4EUbpqNwJCu5etJnfatL6YGWvs39NKDXbVNNBu8bhYy5xqG",
  "key14": "3sKnsN2hvvEuqsK4n6q4iXe5rXxUc7TPVDF1frmQrvkJqJr9jEift5CtH542kCh7SyVraJ5biPR428wydfTZSucA",
  "key15": "2WNp2esN1h1oWjyBM3Mj7LZqnnipTwrTXwSK9rNbJi7QKBcDTYWDpvbPwSHW31eZ2T4whb8L2eDpbckL1RiB94F1",
  "key16": "3Y5q1iUNEdppeo9mHuzs3TwK8cMkwxXbLxDK4ZZLRBdssHYAPYUCG4pdcrnCYM2mzahXosX9uCjT6UsiwXqcR8DQ",
  "key17": "3uzC54NCt48mGRkcg5DN4hhPxvMmLSssxJWArigYRtsDaEHmmD1GkFtP77bwsViYdJkdPzpMo6ntFEotU1BHZ1hu",
  "key18": "3G8LsUxbhFqdwyFBvM7VworpV2oGf2u5jts1W1X9ahb4jt4hfcFndJM1BcLDdZ8AiVZeKAMoW3W9pQ9zAiCLLosY",
  "key19": "W5ayt794bFLrGhjEd8EJ2V9FUncqWScELxgSG2K2uTmo87f9zCzWPVHV8Rfng1G4SNgYpoNN4pTGjmtxx2v9oRA",
  "key20": "5Q8PFigzJeJpWBF5Vydhty6RaKmdVHhGmZvc2dq2yGMjZSrMYjZBbSNg8EmjB8zxftfoyJmse6FZhRHY3nH1kmEx",
  "key21": "2wDLvrbReu8VPxhJPGSPZC52T5RuHLJVSg9jx87nqEuqc29gnu7nHQVVnd8z2GaGUdERC4Pq6YKf5k87x9gW98NT",
  "key22": "53tVV8ZWtVwryzh8U1H6hpDGfsFnB5Dm1Ns2JgFH68wukM4MYjbnLWdFQL7u9ofiMeNajR7sYGjTgKv1NQeVfnfA",
  "key23": "5yw5i44VMSeYRG5VMmUj4bkqEYtSyrs5rKrQx9hgsWBL3ncj9GXs3m734BV1hKmy23SptrMqC7JiXffqAK8FZMkY",
  "key24": "5Dcf3yNx3fpxVS4j5wqkD7xgYih3Cdr2z7hFSpdxUmp2HDPpcjut9yEnx8HPDK2AW3mE7wyuTkZXUSGL95GEJAFG",
  "key25": "kNTyZF9tsd9QZjFmVVvGU4MgvmLtEYEUmkGVvazRDXsTxeQjbVuYrrqof9JheG238KpktAgeAvpAd47QhN4UcLu",
  "key26": "2LC9zGyeVwGqHSxFn4ax8u7iW4QpNQVPoaCuty6kV1KjA4BGado5ZdUPem98PmmRp4DtRDBnJcbk5Ktc6ShnXopT",
  "key27": "4DKXVcHX8av27X2tEQSWWupkqH7GQFgDgbXet97N3RzA77Z1A1kvnURJaTqQhLTW7USJiKXWHxbc1izeyGGQCErT",
  "key28": "2ACFm5LM9BSxKvr7qbYqipSjGrL4xhR7HMnRzsBKH9nA2Ha3oCv6D16hafC1XUdi87AiQWakRuwPNULKCou3oLqv",
  "key29": "3NU6ebApGoxKFxYX1FYMyeRsXtrsozuJJsJjqYQqq1fnF3kDrBMQe251oxPqLz3xUPqPXfAvApwcMVmqxiN3oFSF",
  "key30": "Sfxf7cqyLQ5d7AffixdbRDfTggr7zVDzz7o3bwNpTt4B2DfmrdFyiqcB1jy1NqS2YxQ1yrthGdtEdgvVM9BVoJZ",
  "key31": "xsRuEESRr4tNxtroz5yPXhCqKyVgBgAA9mmgkQpjYZGYE76p1JRX5jdFBNCGhYnR6Lv2N8APYM8RrQTeBPzk3q9",
  "key32": "29DRv8Wczh3GcmWuvLhn54nMk4UozrhzzW3Cd9Y17R5MozENfWxceXvgMMG6ote1gFR4fVEY9qTQYQN3FYFftxFE",
  "key33": "2WPYFLRKHMnUCC4CYPgN7BH4up72mgpkSDgjHLAcadGhAT9KazKzzWaFYEyjGMZESSBx745iaNbwbpVeM4GR5FwA",
  "key34": "2c4od75KxyQ441TUTcE1uy8nxD9UdWtv6P2oZM6JuGvheCu3EkqdQvqZVMuD9dj5JxmCk3UWV8EXip9p64FR8JFZ",
  "key35": "og5fNPBzvsDSKasgrN3HRdBuobBcoBUAY4Rui4suHfP8ZqXHyFkKvkLkBUUeBPK44VEsrUHoQCRs5nhVn4sZtkP",
  "key36": "5e8TeTibgN1oZuquVYBWyEMoV8yM7zD4tLrq64FxU63FWAQeDPZ5uMt8efmgVhcY3HQBRoPrR6N1fa2HQEeC2YkE",
  "key37": "5fgcfVwApAZwkacKwui2zVvrmVHFB39Vq8pk46rXMXWm6qPT2vqv4GFc1AaKJV6xMCWoRpAvpe1tctGFshUYgxBz",
  "key38": "25fHQEWDeBNKne3cfKs4dZQxJLe3QzmZxcjtKYpzCsFm62nxunCFeYpreQwXKrC6E8R2ZTYGkTkDjV8aV2W8NmtH",
  "key39": "5jJPFLbLq9FK2qjeFhwofNwZq43eoiyeqb9z32UZFbkdvdEnoS1JEF4mHf7nV88SDWvzFvdqCvHUag8mQe9oeLMk",
  "key40": "2htkapp7WT1B1DkzvPLiaUwxrCf8W87u9DnixV3EoSZNzf6aNDFLeqjGrGBQM8jTxo5Df8E2u5UTJD3bQ9r5svFc",
  "key41": "4aDWbHH3UC3v1R9ntyZkGZ3dpnFyYcnhXzTiTw5ZCqczsaYp1f7AYr2GE9zWqxK3aQyWuDUjeUgyLq5UqYfg5g8Y",
  "key42": "5qsDLPuLsnsEnbewLALc58mRboXQ1eRN9NGTducpgSkMvFaLUythmdLaGRE5hqLynmpLBFhdFAaZxMDBeKJF8Ljr",
  "key43": "5EiPsGRmWgCTeFfN8AZUHVdc6mB5yNRoZJVBdW1WcMFGvq6E3JmNkHpB7rwMMwSjGxUGSfAXBWcC1vgXzs94PYBn"
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
