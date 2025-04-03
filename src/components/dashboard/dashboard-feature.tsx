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
    "3V1fok9RR61FcRXjcd9PRRBCNhW5vqvLjbqRcTXKBJsZt6idZoWTUDaRZdnn7zxLbF5FXcLNGHkDHRqjmUyZsttu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nQSePcEZNSVq6Yr9PvYV2R3X4n3Z6XgYMXzg9PFx2NxahxqTGtNeCxSiQ576GncfvnyN3UtpBZJduyr3HqnkjYQ",
  "key1": "zHpzLFta31sW877FaBvRWPQDVmLydQZq88PHEGNY9EaeYU6ioDNYfeZtcfbvrpB2dJHp7KN27WwXJdsRShQjxDn",
  "key2": "4JkodzMLGVTLz3vNv1ihAFGSaa7cx4JdQUMgghn7EGFx64RKEz6Em1H43Nq2E6ac3fDkzJpd5s9ZbcpbkhPVoSqR",
  "key3": "VLnhe5i1bXifr7JGWpKwZmG1rLo264C6t2GpNgnK7cuwD7K4fMmoHTuzTWgNNut6DKKRhFvfgKfYwceRuth7tWH",
  "key4": "42Eqeia6q1FgxeuRPYTzAXFGn4VXHKPZDVJXZZLPu1GjNeusRNPnUZQYYYHhsN6wmmRu6ZbWJ3wpbQ8ufujUSgDf",
  "key5": "56nVbXKjfnfvMZQZ3dpCwnzTCnQMpPvWmuG2DrMq7ig5CdxwPSmtJgYGJsSsTKayWmM4EyETJsPNZD5p8c5vEDfm",
  "key6": "2c3oZ7eHF2iP6CN4ttmMVFrHidCharyvfiCYoxf2m5bLmC4nxi8FFwmamFc2vinNNPRUx2mq63HKGoeJoR9k4g2q",
  "key7": "BQFGj5sL3gaV6B1UynHe6tBuE8smeSwouZkXA8jDBpBDjqY46e6Zf54mzCJbCvuutpR3MokyvBt6PtJfF7RSAKT",
  "key8": "26C7YXwfH1rfxVytZRgmmFHKKYnKvdmi16TyDjTf9mJoxLXWa5PstSYo8zdnmAWw5Perf96XHsdcJNmZy6ZXVomM",
  "key9": "5U1DSSiLqv8k7cdVZW9hW1XbsspcApqDNxrsJvYkwfSfTNWyQT1Jnvk5tyGBacPaLiZp8ZctBXwKisM8bTJomjMJ",
  "key10": "wnhCYY7Mdwaftfg4Lny4cgkiu6ALyEHNRVKuszxQgin3tvVsDykarzGgCYphQZDo7AtcadJtdUqXoecLq79eaKC",
  "key11": "4J54FhHQ3RJ8BNfKApgW3K4HgaZ55dqiXo6QAZ7y69Ueb5cZzjPUnf3TVF8DsZoBYXVusw1uSrezPJQGjDDZZTkh",
  "key12": "5Ufp272CD8WsDeiepSePrszhcemu4i6Rqey5KCD2KH2sJKzWK1oJ32eWKDKP8LqW5qHkVQyMXVk8jd3Gn2fWPTLT",
  "key13": "3xPkja9p4LevQMiXg1R3CKPrXDY6KZFQCifK2ZDEhemvHseD2K9H5LNuLHmtmQZBmZr6xBHEkKe8YVrHNFRr3jJB",
  "key14": "4eXg7ApxQy9ftaBKPHhWvB2nWfE3PgMz4ECFmncrX8uZQeSB9N8o6Cgg1fHco4ga8mezCDT6rUpUqzwjjbCBryoG",
  "key15": "4MFpTiQ2qbPHyp8bkjfuoz8WM1QCSGSzS9crPSiq419oiRAXSJ8dqdH5k8w94grSdKQHAsqfD2H77rg5nA5EmHW3",
  "key16": "bgVJeopZj3mgktg17tEq43TUoHKYM5saPSB65GBGKZjSmCJxU79XuhtYTDu3uPfgfzm51iH3VZwk3d4GucbVrSt",
  "key17": "PF7ghc8UZwGy8s2fJYKxCR5k2PJu6vdNEWGfPZhzxRnGm4egR6RBBUHHqULWraPUD5wiS74NvvZBrL73Z3LszNj",
  "key18": "5qaWoEXHxjQbvQq1Gwv3b8TqKey2xTDtxP9DyK2fv2PznjjkpCHFfFhpzRSzi699Ura42ZexzhYLoBE9t1tzNzvi",
  "key19": "2rjjBPDNt2uD1MED7Th24Q45rE2YfvJFLKJAzWQ9HRRZ8Ue6qeSBvpYDwSV2zb4LCKSanuFjuybZsVoBqReRdxss",
  "key20": "5AvusFVPT8jEFkYrXNFpiRxRDPHYXJnQbioCVhmWyYc5PRnifTd9TUUgmrCxw4sjK5DLUXwjcUCjGm6V12ocxJq8",
  "key21": "sj488wg8tEJ7Vn62cxUikR9aBv5KJ1S9zgp6m9BDN5bwsP7gDPYMvqLSM32McFprJy4qJCqGbGcyfFWzpgtoiMv",
  "key22": "4QbHGWfz7ioebncUhM1rQhtp1YHeyjZ35WtHX9qH6qgiLQWxUsJC2XF7AN83hvUqQCcipQh8farUMYrJk8CbGYjL",
  "key23": "CJJiMwimXkBQZAsvBu8vjKN8s8dQFB2QJmqF5EhaCKGHPoiEVcoNdckFQU6PQEYVFVfDJCfREZ2Vgu863ATEFBS",
  "key24": "mkquHqQwgJRNUKbH9p4U9AJJUaFVp6ZTTqfqD1mLU8XyQgUGbquKrSgMwqNnEFGXnc7yJDgYNVC5piTe7m6TurC",
  "key25": "5hfTcuZkPkNEcWND18Sh8P3uyBSsBEXL9mjWPceq2An4CjWzrdfcnwdJ5WvHf1KntJM8FUeGVDx3umo4zaaj8eU",
  "key26": "3Qt8JgwuyDYs23aXtpUX8coCPFdJkvLUtxmifrUYkGmfbHHyYsxV2ZsUMM8ZfUiKhKQ8gbaCxfYH595XjQ8Bgs51",
  "key27": "rfUfJMJKFNZ7UvNRjH2q9t5qdQWuP4oxCMzpw4x5Q8jgdqQHsbopnGS7ctqwqZvsaHZtqM3xadfP6QywZaBg7Px",
  "key28": "whcMtMfbbKL6NP8uLdwQU6qpEpKfxDs1e4Pyr4nQweJtV2iZv3ppgPNNpbPScxXLDjVbDTetviqaicn1b3LiRwV",
  "key29": "4EVeaZyxZPxZStGBtoZvk45yPRLvUtm8y5ENRt2SrK4YVSkBbXpWriKSZ1GVD7rEtTKTFBrcPoYGyPcLtxCzqbxR",
  "key30": "42xSsrBNG72fjpAeZ2LAANrrCUpoVAHhQL7ouyaUtSFF22TQWPnemTtzBq32gz6wK5PmQHXNmwrhz8qUmBQ7VQSo",
  "key31": "2xkUAufj1G9UXY5y57cBB1X4GP7zmB1wnQZq85a5dRGMNZMCoM76gWUt9aXsiLvWS8PkD8VzVcWz1kDrPR8WQAu3",
  "key32": "5uLLjwM1uBxyvaDkDfKUJ6Pd7WJ4QDZ6v3yGjd1xLoXsxRQczrPE5vMDKie3d4pBibZ6uwU3CoEy4r7kqQrbnGXK",
  "key33": "5siifBECgUcr3hzF3rzhmGgh3Wuc7GoLP9kGmtFj8uoQm5aQBLevfmLK9PpXSWRppM4ADMcWJ9MKxFpNo5oTeC4t",
  "key34": "5kCcZar5Wj5Ac7Su7zjw9RrHoe7Pyp46BaRZe2b1a7NGw9dZ2QDUo8Nesgo6LgKAbrWs9MqPo3epZ6ac2Giqx5vs",
  "key35": "2ScoDUWYrVDXeTpUVkNcSnC4R7gBJDG9LJGxmoYJqfaFJGZ364j9W9qXE4243nyF2wgNqNEiyBvU7nQFe3hXA36V",
  "key36": "R7UHAif4H16jpxSuSQe9P48nawCPPZKu8teezyVH4kpdaZ3eigLdNmQxKsEMrktsfZK4tA1Az1xkH3JRJh1P2cx",
  "key37": "49Jwf2bt8Mv3ASLs1emRip9ApAEwFGoH5Kx2TcPyy4FKENQhyPmZ1eYdg42BQy28VguA8c3346Z57dB9chzD8rB",
  "key38": "HnLThHdqRZMFU4ZGt3FCLwz9RTwiDptorfkuAypWSp9RNUGcxCp8iWcjXqQLvkAm3j2cJwRddrphK34yUXPvih7",
  "key39": "3mmEQoF43jSFXT4N2DET4CmdUC4THNSXA6X9PXGn7rqNf5yV5jF4tvKsFqpZjaJ6eptdpWXxar9eu43VfkKdvp1x",
  "key40": "41qkvdvkoLNJqDXvhY2Arb6oPKg9U3KPwe5u49KA6asgEQkxaPZJdR9AQKu5a5WMB2aDuWmHSj7emS8FT3z8gxro",
  "key41": "67NPEWEwD6t7CVnSAiXcAYNW2piRZojqGQNxVPzJSySKkeq1rpAtiXowe4gA2CgLD95kp6FThmSU4UioYV2pNnSN",
  "key42": "5BQw5GwvVWf6WPVmDPs44nVmqozchAsVpvL4hnHwVtWkBsSkdVyZ43CMgLKiVP4vyS3ycvJQWLQgJdHzW63S5cno"
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
