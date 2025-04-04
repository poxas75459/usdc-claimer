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
    "5fQhdynZU5cQorYjzXmXVimYr4xaoHfGKdAt99UvEhCXRzCVjBLxU3eZZ3vo5giBCgDm7aWqcPSWYExKat8eTFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hdme2btabbFM5rGc56aePCwufQJ1Vrb7RLWU4Afsqa2hCsZKu1z7ovueFbh8Ada6HrXnMKwTvqLSY91H2eTsJ7m",
  "key1": "Rs6RhogA6tntPFJPj8aT4rV6RysX1rDWtPCRMLMnZ8kFJYaHEkmXjEJLDkdb45Vv866dX1va4iy9Ai5qv4eXyjn",
  "key2": "5FmSvvttFwdEtYFTWgZj76pMTqhLtsx5MApYEvcdKJ86AW6kvJxV1cDjQQWGUdP5uztEdQsqMMG9LStsCPpQzT9s",
  "key3": "GrixP6Uwzvx5CuCJdq5CE4BYW6AGpUooyG26PghrEK4ZP6oaD3cmqjeAEKoAUvgHuXZHw1QJjgXmMsJpbnfpEw4",
  "key4": "26bJS9tRcfySRqkwMrYRrqRkzP5qEy6no1ekJSRYsLrQ2Uve4FvV2iX7Kt6hhragDK5d4nUax21xdrYLad975Hqo",
  "key5": "381G4GyGwoqszEgr34XegyiGfuB5AKmDuxvUzJCiqQz1jArtZvJkCDJvWNF73j95GCoNnJQ2rEoVruyvLYUDwi1g",
  "key6": "2se1G88VNKV9Aa52XWoYrpv7b7ydBrudaVP3TFEWo51AtWvGy9gQHnRfsqa2GdXhf7ksPBzuLU6GaY9twHrCYHXs",
  "key7": "TCTZFGKYpCdwkmbTYgG4SBqyRUAJC1LMuS4HvucgXDWSZrxCw25QcA1BPyMfFZX3dBGyWTaYDBb5etFu5r8jRzT",
  "key8": "3tiUthgqKEB98d7MDHC6CkfBQGpov1M8UganjVweMiRxemQJoWLxeNaVu3ea3sfLHgMTr2p9pkLUUZQ7QUpYHQe",
  "key9": "wa11XZJMdi9mGnR3SpsvJ43TAQ1zivwQBtfe1kLNGoomNHDMrqA4cZgtQ8YxT6TAfwZCCnyM6mGio3uATs4FF4P",
  "key10": "3XDMp38EnpT5cgn3tjAXT1qwbqSbuRXAHAJjEWXYPTncCsY3TfqbjnsiT4fTEzCNvBrj5ckif2Cn1KL4uoMuqbtU",
  "key11": "4XcBG3PDw9nvAZQVYo4uWGANiMup995sEwHV2VVcQ1FnB4oK4HAgVYW7SQC5Nw9ppY1HXSMEnVRkmVZ7GTLZQE9Z",
  "key12": "4m5yWATNQpB9CqrxyUh1NDqyE4w3rUTjgtSC9tGpc6ex6nV7ZZp8WP53cSaiACPywmRYkzJNtSeHncGJis91U7iE",
  "key13": "af88PX2esKFpHYTDM967sGUSLLh1UsmZ6Z392thuWrhB5KuC8UFE6SzcvCc3FF5wSSoZMf6x8VpvevUTRoXR3ZQ",
  "key14": "3NJZfUBSvQA7teo9nt8BSrDkR95UH3SpTFguBttsh63646NAWu4W6rVBpthTyAzDjaadRPLCCvt4Zo7ECN6Bm7pu",
  "key15": "3FtHyQ3DrwzZHPsk8NC8oAsQGjrGdakeoYDZzMqQvL5XWwapnMpnmZ2MVCuAEKqB6QbYpLzNkgUmLt9k9jmna2Na",
  "key16": "puaEGSk6ownkRn4c3B39iPV3HEvTmjyjUdVbVVRmmFFJ7d3omLmHWasSYTc4rTCcN6DpZNshg49q1861QrDw4Fz",
  "key17": "2SfLoCLYxaBiPdupLwdNe56rVnj17YRsQeZadMPTQiPvpaY6eBuzRi4eyJu5AkKfYHkTbJtZSwFKnaDTYw9fdntg",
  "key18": "4zqdCoaAkVHSGC4JPZNkzuYMKcHLWTw7ZVzbhKJnSZNnpQZiDBu3zkQvnjMhiBMTGV7n5oZroZjeC2j3fpNaHj57",
  "key19": "37caxwwsbhYPyaYgdE1krVDLDR6aY5MgaKufs7VmeUCJ6AamNKR6EdncEgaW6H1tf3imrLhvWK5YmVpLPrefcoNv",
  "key20": "4bRJkznrJ1p6AdwMPLLqPMeDBWuyK5wHyBmgWg66ZPP5k3xavXZCR3gaJU4EWAotg3puKVGAwpik94NjTPRyEQxw",
  "key21": "s7ZKvVCUF6jBLsLTDSoc4KHy7jD3hA4z2cA8RKySjdzXjhBcMzKfnUWiLTLfhLUuqgoreb2uSCQdh9MYGRTYirW",
  "key22": "5wYS5yrhyaC1ghka7WnKxB4STV4Nezvtzgrs9mcHVchkRpLXSDqZ4abDNASBdp2re5vvqGsmZ8RHWy6oV2FHeWza",
  "key23": "3rhaDGN7FgLp9k5Ron5RW1YKuMQgqddPDZofRwMEnRkxNTgFKzK7nEo11LnzPKfNPy8rdZrjU7WYfGmbu7sPYrk1",
  "key24": "35zFjt3SWczh2mT1Wqbg5KxEXpNQ7qgewa7RCbms4VWcgXtfbTqj4gXtkB7HmuNRveS6qNyoDEpsdS3U54EPgnSR",
  "key25": "FiPhJzn3DHCHcHtnqSaVxuAXV7vt1MGqJ6PuXJB1GvpADvfjRgwUK91wF9QGZvF3q8R39Yz1m5EDAm91DvD8J14",
  "key26": "9vARytUVkk8iT1BxJgkKy8Gt75MQTYXs1eJwirhJm2YpkP25TEDSVyNxuXHZG9NSqWzEW72M9qJ7qY4gDVisF3Q",
  "key27": "47RzDc9K38B2xAwHtMFGMfd2YG27KsthdkxchxGHs5RBc5kBNDmVbphodauN4NPU4y8C4HUAxkLfiYfPArsL8xpF",
  "key28": "2e9jTdU7bXAUY9ezkeKRaaU2AfP8rQS6NUjxvbni5spqUv2xVPR5yhdzXgxdm3T8m6QisFmzfh7rTwBrXDBM8DEc",
  "key29": "3tiRgBQgiqqw35kDe7rsHhpKEaBg1uD3FdALTjkMJzuk8BNLruo6N9XEbtKiU7GSLiQayrJq4MAp1YWQ4uT85zRJ",
  "key30": "4cg9fdT5tGDj7XCYT5ik8FWmqrfgcBZFV9LkzCZYDmKbPbWvqThaAqWm7LdRXpm7A3qgCpwpw7fmBuc4t6eBtEhS",
  "key31": "3NoH7QKXe9y5t4ayseTBU6V9wrdXvJeRhK3Jx6tMn7bQc1XyjXA2yoZbDjY5V3n1Evr6Xo8Aj9zt1DkANRDkB9iH",
  "key32": "4QS27WkDcWmTX8jLg8yu83N7roBQjDn9HphDDGs3EFkzKpNnaFM5ZcuDstesQRiLSHsbRJBGtMiu2WFrbowTbbzi"
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
