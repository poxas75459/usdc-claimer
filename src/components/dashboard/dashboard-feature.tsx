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
    "cA5mRqkUCsYted3zHuMFZbPjEebi64yJ89vFbzs7eG3gN2p8cbbhTJuEFicN4RBHUd2FvUEZB5wk47c6yNH83cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jmgkYyuiKKmjrH8xXp3uAmPPybujD4UR8H6XP1Yp7T2LE8WnrDXCY1kCECtAKpLizQMusKeqycwCJkiGMWP28TJ",
  "key1": "3vLAf4yqSpdxTv7NnMppiaWHggeiv6bRZXzUXLGt9oqsS1aLq559Rfe7s6vf8D5tVEAB1mPLdKMMY9PAQtsEVmsF",
  "key2": "4Q6SnYHaAMpACSMX8NBR7uHCJ6Jicpq2r3wajcLHPLp22zBQk3ARqLArEsZGFGE6qNE2UtQpEvSwwwmkThTMV8gb",
  "key3": "qGmJy7fJLwm7FAmzQ5iJv5tthvBbEtHNixSKEQfw5XQW9cv56xbLJEuXnEyi2EAZcZ9hFwLaVdREN51aMPf2fYv",
  "key4": "24jWcU8UutfduBMRrRE62GHdmx3wtvLiC9vraqaSEPGnuNvw3gAQtyrGcs5ohASAE9nDXpq2UfvzsjTUDdmnxYv4",
  "key5": "5HPLSoZKXJGbRSxtW9XntyJwfnyuG7aNGQbD5DmQqUYFtyxPNVy5YtG8QJfsyknTLh5q2A3ZuXtCQqMfEb5KHbH3",
  "key6": "5P2ZjbAPL9WUxB52VSuhuBghw69E2NJZdUs8LXjG9nxPdMVqVwyfmBpzvbShkB7ofDeALY9WXk4E4eZjCbCZqH4U",
  "key7": "59Uffp2bVyT28NqwdTun5QmjKqD1f3Gt5yvtafNRPZjCnFznQrLRHovBaogVjEPN9wfWCYKSEfyJHNRfqJZN1cD4",
  "key8": "4qw9UAqebgbewSx4YxK82f6NmHNr6qTv33TRYKgiFP2nbdupssuEqEdk2bAuKCBNEXBDDnKvyjMnSrczhgin3cxE",
  "key9": "5ueWw6dzJMpkg9pTjLNYr1VhC4P5qSavBLCCCjZPnFZSRu4BWRTsovSCmHf7V6aJL5TzWjK4yEhCXjUPpvEin2bw",
  "key10": "33N3yg1DQxGsFgnX8T6sQQdB47Mo7s2NkudK3hSrVvRduYzAtTGcT8vNfLzSKexfoyeRyrMDxB52hg72UuE9RVRJ",
  "key11": "itjBDowPpYAdyPB4iJTEmYuwQGg9teDgL1yGMPLAtuJdYz2uNajqxzkmNNezfA9QJhpUq2yg1XaqYzsVQrr8YcR",
  "key12": "ybijAoZKk92sN7SLEgEZvyreng4A6rDZCMFdf6rLyWE4rEx4x4aabUJVJiJrjHAWeagxGjdLcGt49RgjmwvBUQo",
  "key13": "3acX72BpqM4M7bWGt5v7jnn9gjohCDJy929AnsNxBRWYCfThiHLi15FRKBnzJydF6xfGFoPRkXwd7Q7mJhXg5xM1",
  "key14": "3iWjSfsfei41iyZDYdge1VUD5hWqAfx8a33wBBZeHfTzb4bHfxcNxXwrF16nRnkqEN9AGExLADwdyGPYdFBhjk1D",
  "key15": "r5eLS98apoKHgAriBWK4e9jarRFYFZwXGXNbrpCFGCvoLUesuKsebtdHA7LMkmiMLhYt1J5jb5tirJZZgQ2QmrG",
  "key16": "2UbxfS8BhHs1wxKDU9SZBfncNRUvBDx7fK9KnR8AVDFx2jtyRFEZtitgvc8smiupm3J1tvp21mGTCeeEb12vBsSe",
  "key17": "4xhy52YaJfm2XxSuYHnMeZDLty1VZoFpiWYjfrjKkkdq5P2spAzZihr5Qro9M1AfweiCnSY87QRwDphAaBHbuMQE",
  "key18": "41Qr4dVxUsvM171qNhJ6zxtCSWcbc8ys7V64tucE2PusXQJCC9UZF3zZ7hofi9u9Nct1VQd13Y3EJ9ERXXptsJHz",
  "key19": "33LrMiSWN8QhtSynbqr6BmYc3JVW9MTrGMJk5sRED97Ue62r5NAi1QFM5PAtctJA5jxv5quRADouWZaeNX3zoFhZ",
  "key20": "3RTPKrXGVQ4ZtW5i4JoVEqBEBdPdvmB3LdkgUr3VyVz3B4JLnEV1EhN5XcH4Bz32Ns1x1CQcYDxo7e3PeJceHjFe",
  "key21": "4sau1mRTnVesoJnwJaNL1mcQLUjPBsJyNEQDyLU1hLTDQSRPDTBxfb6ddhZfxF7PXgiLq2tcDF7nyh33H4D3JUoU",
  "key22": "23NdwH3QQSCTSRK3Ne361wAxT7sgdkQws3PC2gyj2vD91VaSfjW2xjbYuyqVisrjD5c1CPZQZDypeXnNE86jwuN3",
  "key23": "33PfpYQueLvPmJneNpWaoQ4YeLpkR8NsdMNUmwpRQy24qvDZnN7fpQ6jVeuVFCJUpKVNhoKvRbHkcCuTqTqdsxxv",
  "key24": "3P3xGwbFeXjoGHBJf8CycWkFEobkjpRzVVmMGdhDqFm6HmonG9SquMBd3VcreqJH64ND1vcWr4QmyhWAbnv11Uap",
  "key25": "4u9Z1X6koSHqoZK7LVcG8i8FFJX5rAGwsy5KUzhqxpybtiDsCSkQDAFTGcVShkvdsDRiXP8RozqzMYh6xMtdyMzk",
  "key26": "2yWn7hL5goXEDvPu7s8iMTs3fRTFDtQ6yW5ZXkQVbETBdRh5xpZxzFBN2CcSgSkEPUhGekCiYib3xQGa9P5w6AHW",
  "key27": "1W8CRgFDpuGv9YpvWwRMvMppJjoARvnLaKv7Q7L9JBVH89Ef6ZFBNyu53rXgNwFQidmNjt7eGKeyCRCPuLFEAmL",
  "key28": "NhjrHKBNNCksYzzBPLtkm1R9QNf28RTUtyhxZvmaAyti31TCvVVhvSZjxz99M7jc1Zkz75ZBheK3jSEov8HxpZc",
  "key29": "3w27MWK8G3raPx3VTbsg7tn5uyxhbsrb5mCxG6YLmrQ39RLqcUaHiS32YEGWEqxJaadfUqBwXvqPjxTefnZxkM7J",
  "key30": "5ePtFcabCXmWxXn4CH2mP6yH7gUweruR8iDPKE4osqBE1Px9pMLxszAzZPgzo9w98SaFgB3CWtumjPzChgfvSQuj",
  "key31": "2SHkJJJzAarc6KCnRGpxtjsykb8SgKwRheAWMWp4kVyCXrN6H4MvUk8HWvx1MscmGY1KQGU1v3upWpEPkL6pkAvk",
  "key32": "26aCyq1zEPq2HNyqv1b1b9cGXqesX14YXo8w93eAqB5cHjy1wBkyMNRXJW9ZFEUdGXDw3iGJ1bsNhTN8NacTfdMX",
  "key33": "2EqGNJ6NFtcWpLtbodu8LcWQduTMZGFgQ2eU4A4gpacsVgKyCJBagamWZVGfGkNnfHS7RfrRTrtRjpxipGkca6nK"
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
