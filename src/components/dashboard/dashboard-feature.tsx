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
    "LJAvYdSP5ACpGFLaUWo69GDYgxv1Au4hxoqZKMz1gS79X7v69hmXDDJ8r6oZWdE3rHwzMWqtyyqCZX1DKa6qWnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nmfxvzEVVKzSwpSeavf7GdPCqS2gTRGCN5mJ7J2cuuMyj34BaQC8yEyVfW9XeeggiE12hTo9Mu3ESCTrkKMJjsV",
  "key1": "1wdkCR2VfXJ6cxQCN9TNWadyFYB2zRfDBo9XVJQXhU2RB5ePBmqv91mnfB8xZWHYmhokDjCorasfHjAaeVkNo6T",
  "key2": "EzeyCqAXLy1Nam2h6D6xuKk97Ar81Jrpypm72ZNqjgFBGXhSBuo6Bc1NndtM3jNkyXtj6RmQA3sfEJ4q7S6iE5f",
  "key3": "24P18aveZBotwZQJYM4wjwWJDjLHyxHpzrG5TqKbiEaoUpFjUkAqDvBWc69NVkD1xfMzxwzeThKhJYgw6oAjF4av",
  "key4": "5VbBS56JZQpHoGCXG5iiAP66CeXiEthGPvHNeYRtcpmg3tj3CBxou7mQBJAEV4BWoRx6ovFVjpq7ZXEMKLb1gUdU",
  "key5": "211eDdKdPoKgDL8xfziknx4GQAZ29UxgNiFK1TUqSbLgS5GB7zGjygsn3bXUxqhdy4D2bBKz6pF43eq15YXQ9UYA",
  "key6": "2P13BdSAiEm2SN7QgAKPrSv7xBni8cCfAUzD2Ng4R7bYvrPEqLiEvEx2NZ3H1VqXCUWKdAsrvP5ZHB8VgrcTk8si",
  "key7": "qNiJHNYyqqiAEQgWKMgbdrsN1t7AjUB383fHTzFk7a9s3hwJV4ecfy6nFZKgMzrycJpTUZN9y2c39BKcp6ci6ZC",
  "key8": "36cxew7AW2UztXvKXr7DiSSCSMAsD8m61hBM2KtjM5iVqCYhL9fsaFJPmgDqVErYXw94QVaqJNVgPA9jQiajucxS",
  "key9": "2NiJn3FsJwsE5uyZkvCwty66D7eqWbNQBMKEmx8KXqQTZ4DgBoTLfy1yHdHgV4fc5RPjVYpAeTYpu1mA4N5qTvrN",
  "key10": "mXUtmEoxXWJmCU526VACkyTkFBwChb2kRE1GeCErhs512P7bX4bhog9Ar1P8iKPyiAjqVKuhzVaev7DdmXjvnPu",
  "key11": "3tNRsC4wdRxwGN8DCx9ZTBdDhM3iRQ6wMcV3HSq64gKsfX2pzVET7PXiPsN8ApyGKjHrZCqJXi8rSkxaJV74FWsf",
  "key12": "FymAANP35fs4zFbahU8FoVEFNApDr6J5eizuESDfBhjcngcuQaL3ArMheiu8tzs1UbpD58MLapCgnx8EfACgECo",
  "key13": "59KEvWvwczYKsGKH3T7FJHEjdVhv7XiHfVyQzkAzZJmzcuQmYiy2Csw6pppMzepJ8ibMXcZ4pnyV9AF5eNs1wnJH",
  "key14": "2NUKe4TKWppUknWKuF1TMvShcFEjJjj4KEjVe9pop5pUbMuARGd26KmWVQEyzHuS4qLX4W4cZ3WSBSiYxmKWgB1L",
  "key15": "3XtAgk1joKHjbmLDiSLtasGZzPZmYzTKKhQppE5EwKytBGSYoCmajuhEXFwnTCadvmuTfhMgJteLHBKbWyt9V66q",
  "key16": "siHt5LoWu7u8wRkeTSYH4rvMbToQP2pYsiTfZCzErYEYp62bUsUq7K59j7UgL1Xs5ZUqPuZNvbmUBEpaLv2Zuns",
  "key17": "5vFz2Bsy5ZkwCMKro9ZqVr7FgSrj4vAHGa3odWAeqqEYeBQa13tcA2LcsuJMaYqk4spy951gdKUuT6hNbkoqzFVa",
  "key18": "4DyPzF4az4dxNJUUNKz8pDEeE7jYNsFgzXrZWVa75XaRCocT8GFKa5aRUgxaUBkGtR9wjZshXwz6Nq6EBwpRHcrr",
  "key19": "2QX1P3LULHudn7G86y2PGtWRsiLPDMUmqtjQisstVf9Z5fte5Z2U3Ckvc7axsSQr8aMFgdP3f7CKaoYtc91MQ2VR",
  "key20": "XMmSWa7wTG8NmE62XbKx2Nmfw5PHjBVAvtTbsmMjLSSvHudgfuHcjH3wjpBTAP1oKdUdEzwy5ePspJc85P47nX2",
  "key21": "652FrmqXVsvHHjMwivvmmF2fExzv6Fm7wq92ZDqJA5KsxopLPBZCcDpUTV1Jh9wdTzPHoAPFcrr4St5dLF693P3X",
  "key22": "5HioE99qmRLRXkzqLjT6t5KE9962aD2bgENZgv1QsJ9YcajWvu5mrgprqk1xZD4nZw31Ck69xtCJf2ZfD4aojVzK",
  "key23": "2kR3dtAnDcs7Atxc2UE42xFN3saEdpQzwG6g282Lq1eCbTXFsV6hh9bXLZKsAmiGmdGeK2FdFw7iYcETtxb7gRMN",
  "key24": "iC6PbnVj16LgQrzSw33XBLsgjSFYSfcv8XEjyv213rWb5zynaC85viZBQdCCzgEeKrriecBENutrmffFZSTKZHf",
  "key25": "2do1gGL6jYKphr6RZdSQCRPhLYyubNWCpKSSbpbPGnqGx8upXen2nsQrhtoCuTJbPCW5LCCZbFw4xfg3DPG2pNT5",
  "key26": "5iAreexPSDXHgGyP8nxcaBMTyanomwzbW23dJme3qV7tDp1Keim8DzmPVAdBR1kAvCrHUr9AAuZougHct65QQbgv",
  "key27": "4PRJwmwKxogrEpDEBpeehmk3RqXkgrZXyHpYWzTVi1xaG1SAecyx6pBM9m23uUPzoPjC6KM8b3gpeo2sWhWmZ1Np",
  "key28": "npRUwF76mHydrL8vWVDcj6kUkFsYSZrdUida5fa3koS9gdMYQNK8qqxfjBhxS9TacNxokvNo9VAU3taHwHhwUhE",
  "key29": "51WF4phjRq3X8jEpKSPy23FFE7XHHPN6bmkJ5L2dSc1KXuhmYMTGZTiirRkE3jSWxAZwyA5NKVGc2qrNk2fiiZJ9",
  "key30": "kpojDRy8vyUKsMA9uhjLMj3sicxurCgdq5GiunrrgH93pqYdL7oMWuX117byngmHRbSeLrUpTEuJV1e6GHgyGHb",
  "key31": "5gCcPweNZZZrR1MFmcX9GpD2hGLDZw4C6NcZt9vHkdZfrVLbV2z8J3uhBY4jq1DQMwEa3dN2sws6FF8YdpYHMpgV",
  "key32": "3t2R4iSnBDd1dua9yZ1F2HCNfkTGizNntmjiwECnLG9Sb9Tn47hjPN9QjQSJf5c7ikPdLJi1UTfVSP3XpDjB47vV",
  "key33": "5gEFv4FcJEsHTvyBcUfcabBBHYiKWWrJrfs5qUVdUXhsZwKf2NxzNoCpJ7NHs3q5zaKG2Vwev6atXtTQRv2JuVqW",
  "key34": "v1fZiWReeMcKFvXDVk37LhRt9jY72sTPTqGqvNLVWksaD8dWEGEAMiAFa6TB8Hs4fYEvxZpfVTRyc8GoQxsRcyZ",
  "key35": "2FC1Fk9grWYufT2J4yiUpC2fTyuFcBm74N6Mh5WHouvVDmQvW2oEQoRw6V9fyoFduWQAwd2P65M4iHZkdBNnQPqZ",
  "key36": "Vmn2SXsZErz9ATmFkENBuTKpp3e55dQHVxfBiskXB88519CqtSqim7G3eSYuwYpBCpDu8hk58g4vjwhjyKmSLF8",
  "key37": "3gTGGu6taSEC6rbz4KWbopbTSTNNiZbg5TSoFfk5Z1hymwRCgLxzkjHU3heTHrZ74XdyqD5qbbx2X69NsrGXT5nh",
  "key38": "3qQcjEhdFnzn3gPjJthFAtmAhWGobeXB2a47rgMpi6vSkQWsqMG69Uoz1oskDtkE1CZuRFCf7ZA9V4BtY4wr1YDT",
  "key39": "2SR3AyocRBbgwboVH96hH7dh4ZXMeMRE5ZfEjDoFsrzXuy4y63b5yV1Zw6LtrbAEv5TJqubqttzydM5pbPzwPYhP",
  "key40": "3ikfTMJeM6Ga5CfnEWFCpYq7JoXThGW9cetGA2VS4NRXheVGEX3E6hsJdoLssrYXz9pAgoyT4fYLyzr91z8FKGkQ",
  "key41": "xMN5zSr2zkcNJKbzFSmJRRaxwrotv8jcEf9MgCB2WNc4tNdJLce76FYRFyqX4oUmsw6oPLU2yCsHoP6tWxrv9xf",
  "key42": "63hfF2K6WsKU3cUqyYD9niMwsqirscXPSvC1snwmGrbBSKa7wrGW4GGeDH6SLaBL3RnhnD7MLSbsRMP9cUmYLsbf",
  "key43": "2N5YkwWQ2BkvMDom46xQzdND8TTirTBMPQmTjKfNaqC1STmLw67KGKdFcY6hrcYhNnn48s6nkCVHvCo7Y6UJ4tws",
  "key44": "56WM5HghNSXsSv5jpQTu84KKdtcMKMNys4ow5quBx7toZCo5gvYF9j4u49f9ckGGYbuzRM7bHJGTmBjJuBokBR5M",
  "key45": "2TWaTmqNQRCzQdtYyyTyj674crZDAh49HVi3EZU5CUrse5fQmyYBtT8yyNHvK65hKm1BH9Xq8ZJJzdjpreMEfC79",
  "key46": "38jDV3LHvBPQcHSXcAKRYYPomEk5FTA8218Xtbwcz7AY6nc2wXJxT6b9toawdmWRP2PndJZfcCJ9CwrhMG5yx3bV",
  "key47": "5zoc4vWPR6GEBBRJG29uE6VHX6HWy8s22sekoWNgJHHsenwr3x8FMEnj84cPVLWugaSY7PE6Ppvnt8oywfoWeun4",
  "key48": "5v5i6e16M9ETehQvkFDezf8MiqoVGWUdUV7Rmdqy4h8LKrsHC5tqSWaHK3det3A1L1qE94hqdesQ3k8ivuTFZhCr",
  "key49": "3HvX8oFxGFgFfPm7RcMK4sBf3BeFNiejDrSpmafTKxVzArh5Xx35pVATouXAUyJZdmZMHjqe3S78vKh6Piaws2FV"
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
