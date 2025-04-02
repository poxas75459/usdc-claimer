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
    "fcZwgcxt8SoxNLTjq8Uvqn4wqkDJgGAKKMGawa91T5jg4pr8vUWaqfdHQNtU84SJJQ3LUaFTSMDMF3DHpTyNuH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25LzFrdqzpGHjhKKwq4U7owS2cvSUhWfJ98dpxK9mrw8LGFQs3jdHqTntGN5RHCNftMowkUnGu435RkgndE1nmnN",
  "key1": "3Z6BD4brcnsJzDjtc1kDMPghzocpxkirE8FMpttvAbJWZ8osKBXe8aKX3BEYQ2TUQX77dJL5e85jzLEuEmEReFrq",
  "key2": "3et5F6yyMRcaLkQNbY3YWiKu9Zm3G3asGX5ZTtrjKp6Zg2frV4ZUujdjbPQx2Lt7X3wyJWR1vVWZjXx1nHmfUrd6",
  "key3": "3u8Y9j5JVLK3MTGA16LkhEU487dvWSShs7cVpbFqLo18QPmDmWdET3VKehhLUJZvu6fmw5dv2yVFTiRVkXvguGYR",
  "key4": "5vQZc18A1HbsE3psZzVr7khW5xfauxQeptwjKwZ691GgLKF9bngfGMBnP8L3eiHEo1w9fBJkeC9d3Zf1mprSEDCe",
  "key5": "21qrJQLg1AtrZPKQtMm8KgvVkphjG7XMJAKVqWUxsJiousss8PyFg626iQy9h7juVZwHQcuD1EASXMLujg8Tu5aZ",
  "key6": "35m2mRBvdUZFFkXj6CRG6AQ8zjAQFqPijDpN9nT4eRvwY1wfsK4QyEvFDbwQ1ATjqd3Ga1a2As8bKep3UDULvjHu",
  "key7": "41yfKHXZnuvUWNniMNRK5P8jh9hW7RBzijrCVnbyya8NL8Pcw8d1aYErevMfQ3NmAHK3HvikAuMHUArLxSmxwx51",
  "key8": "4JJfG5ZG4PC7k2KcZ5UtKATpCrd1rkjF5MqKnVm6CHvbEe6CutzHaUJUToV8wrhGfzg5wfRjF4THiiZY1wp9K5xF",
  "key9": "4gPLnsCbmbDowtwVM3Fw6KDK2uNNbNpJAqe6qXTjvb1hKrvcfwMH4yzv63f4NTq27bTwzMjx9PG7MmUhR6r8a45i",
  "key10": "5GvST7K984bG7oykNPMLye67YWRobx5EPwTWejJm3LrPEpMGhvXT1wn9b3unRSrJZcgHGkmrs7dK3RLtWYKKTuUr",
  "key11": "XnGdyZjQ9Cnwtn3QkeoxVpnwLcKGBSQXjUaUakBvQgULEi2JAve3ToFRR8xwJzrzV1NUB3tiiEJpGHdetoG47Ei",
  "key12": "4iYFeeSjwDHZmbipAS55mZCsp6gk531QyqJkC4x6e3roVUStdpedZr3XaJRtcTtHMEv18C4sawcXHiZN9pw7N4Zi",
  "key13": "34wQsBKTjdusYh3Sv2D7StDaobjWPknm4aoBSvj6vZfeEvL5gP2BcmxdNFtmAC5uAjPNmczV4s1DQQsuBEqWxc7W",
  "key14": "5CTqrw8vkcNaLQ7m6kRetsUX6GfvEqXRiYLHukMBzf8Z5v5iRDvJ3KTnNBm4D5yPWygmDkMCdNkAQ3FbyRKoyPYJ",
  "key15": "2K2CkeuoYwkDcXgjp3Y6TgCH76h9g762BhG4BQ4F1vgkuuY23aDMKyFSvsVCMyoQcvEjGnR6qofwJtZJ9483HvdR",
  "key16": "3MT2q8TYaRDbMCdeCE2stBiPvsrnUMTaTVS1oSC2WA1XsjF6ZuHKHCDFwDx5FEgtTnAbN1odjiRDmPWyZfoeoqCx",
  "key17": "QfUhLwVdM6gKR1nJhucwPHWhWBDqtqJmFfxtQBnpntb5XBx66TzoXukgwKhbwfcKiMrG8HnLAbdjT7U6Rq9rRGd",
  "key18": "nfCwxYzuwTSnypUzWzkawLwfC7DwtXFwjYAYAnfHLGzSTkyHZnFnbEhWTVTy2hN73tb7W8Wshi9Sh8xcTXV9pra",
  "key19": "25sFJAopX4NnKUPfZGGSqRckobanm45NvV6sXEN5Lg8cPnfvLXVPt2bGP6xFYvxUTWDpGYnKsJ5L2oguJcLkgkxY",
  "key20": "U2cWhm77XLforYijGkqswdmXhWjo24kkA6qo1hJHBsr1HVJZWo6Qf9qaDn4yc6vu8n9VB2ZfgJr2LrxREjsvuXe",
  "key21": "4BHi9jY2N8svvfZukeZYP1P3q3TSL2xZ9jybHvvKBQedYPabAUUVZmwSiqCqnsHhGrcggjrQcrXbRrYyBmqofzC2",
  "key22": "5R6XctzuDDAXQkBp9g5XMdPHx3CBEWwAw15sJhAJxkWQhRQfQp6vpXAhWDMJr8zPTQgUJA483Wf2xBNQC7zsMpqx",
  "key23": "tgQVfCP2tgCMT5T7nWy7VAsRiDwHc85XRc9YaWneGgmbAiytxEdk7hdA8RKvMKFmReHtAE2mcngggKmXmgewHws",
  "key24": "5GaR28BKookhR3YsfED8fJECEPwmNeWAkcZerfMJPFfb8fxwLCqvD6EGopE8e4AwhBUTncSSkZzBLVbgSf9C3369",
  "key25": "3ZdpePwGiUancBex5bb2uWGf4FwD932L3yT1BNjRpdNEfmTdGgXqV59joGmqSE2PcHgv34xDqFPXuygZv242JDNr",
  "key26": "3Qd1QwkwEPw4NGdMoyd1BPdGVnVZU88GSrmZMnzh2n2CFttCdJ7zZBcZ52Dqqwg9zDpmMGAGm62tn5wL5DNyUqE6",
  "key27": "3uBP8ciRJwEdkASp5A63TJ4CLAD2GZ69dfZLe3qJtBFsHhAmYHegD9nfUatG1eKRBH8NiWLP3T3NTXyKbo2tbSZp",
  "key28": "3Yc8WAPmWS2sv4KJCSCSToyxEz1Z6LTCCWsHLzNoHup9sJ7wNyrvHdoGs8BQR3xKDEGeeE1tiXkiYFtomgNXGTWM",
  "key29": "5pWrv3vHaBXUKHedtZkXEUjLZMpPMjQ11nLM4JP5vRWa8YbxbQH22z8xri1W3fV9PtC8AjEeKmgXRRyBirhqUkjz",
  "key30": "67AsE3dcJwcr4KTs9yxUFrapnt1kVoDUKoqgo755CCibsuFp25Y2Wg83p8ZmvXKcuDrLoZm6TyJa1Jn2S1xUfemE",
  "key31": "2QaeR7vt8tsSrUsGbMLJ5zXPb54QbBspiEDBqf96En9EPcRbSGstpM9NFbDKYbYX54WZa1WDTv6tBaVijj3XoGih",
  "key32": "4gqNujRXRmWFNG8YtGWL63W6KTRzjQbK4mL6QUhnwz9X8odT2ad4TAQvFNGVFS8Pz1N6JgJDKAsTVn6yb7YwREZW",
  "key33": "5KdrkXiumf2QMYZg9iLK4PQd9xW7Mbvu5V3zKsSw2Wfq3zudwGrAnDyiMouVXmP8jxzXTFt5cKtjenn13iB41rLy",
  "key34": "3Xq7UpWcNBdqKyZnvcf9HE1rZqTkz9RGURkgPWHqCUuRKi4Neu2EwTUXxxjzf5DKF5QuBpNjUVJG6xQLYNHSF12R",
  "key35": "4kpWVq9Q7LgR9eXk82wX3xFGnjZL5kqpLZgmk2hHaQZk4gCsQDMGd1wfmJerxuf5Z7VQywtratyXikymBssfL6aZ",
  "key36": "4Pix22ww3RP9MgULVFhLD8qQavjUSmYGGHpxMsWqsEJkv7SFtnrEURJKGQvqragAYtZvGzoqX15CEERciQ8pboFX",
  "key37": "4YaMQt5TaSeHS9oYUNf1VPjsnnzEwT79kP1frtfy3L2MhLMvoJ1KrdyomM7VM3FX6gn5ggcZTLqe3wrL9SxS76PL",
  "key38": "2FgJaZgUX6QXEjM4aoBfMx4q5vSu1dAPVdNuCEAZWnchcoao3xMH4AqCo9ndjGtf35hLTv5SRuL8edWSTXpHo54t",
  "key39": "a1RMSu4EB1cKwsWt7jAeff1p5m1aMZQ1Pj2XvoMM458sUyUX62fnjGHegLemwKTUPnc2kPP2iBJgpxLjgv4jmge",
  "key40": "NfDXe1YFrNVW7sHsfbLzGd9LJkyeea5FrJqLRwPZ8emU6Wdw8j6Uk77X7sGhyjAiqXw92HPZexRiyYdCR8RMM67",
  "key41": "3pjXYghiS39RSBaviPvfWdUqHud9D9gjk1BdRB6JT9sQUMq3AyC7ALARzGuGRqh9VdnHLWApfr7VSxt7hwGuKMp",
  "key42": "2dAyQhsAAWadQdkmR5ge1HmxqgQe5awSRGmQHj4yTR5YXEfAN6jB5JYpbK6QZBVXNXX9jwvxzsyDUyjer93EYSCo",
  "key43": "2tYeyvdAYXSpiDd4NkCHvAaWnF3R89mefUNM3H7tUHZxSiueY1ZoBgU8898M2CKgwdAQW2KSChDhppm47hasrHyz",
  "key44": "66TxfM4ioiqtMQALkTFWQHaVCpDV1JiEsVb2FjcxqhiocQzPp6Zh26SmW1PnScMcGm5QhdH3mDH1HqMDN4gAYyGk",
  "key45": "4bi3fjR3ypQSEPLiB9Siyda5M7WJMJbHgGnWV9PmbZL2FQM5ZudLzsQNmbjrGzBRsK3x2puRbSNyt8B9nX5n1Fvj",
  "key46": "3cwaFEE2q6QHxdjHXSozjwdLzs3B1eM8qdMKRsVK87BWPC3RpJvV2SVqZCZN3uwWJf3ofTNqtiGZ8uhLcktuQAUP",
  "key47": "5nEDFyFJ2yfTHGaiPpX2amYsa3MHKrNBvqJg1hpPCYmuDajvvQXjLrKKf1z1qDotnA6m5qZgE5EuKeaKBsH2Dauz",
  "key48": "3bXv4ThL4Ahzq8HQ3g5FkR54jVefGGABEyZhgJP3wU2xDtxxtDczyRP6hbpLVFpGYybAP3XRsJ12MS2u1dqUviMB"
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
