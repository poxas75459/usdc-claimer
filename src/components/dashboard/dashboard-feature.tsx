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
    "2kTGczccEzJttWd2SGj5yy55b54uBjnkstxhH1H98Qa6XFP2QTAJ6JBimXgeALwbicfXAea6VXsRv6bx2Q5g9T5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3YNK1ZNxhCfy3hLwvw9GKPQDY3HjT955XDUWiRCtHFd5cBhJtkgrWZyJ2eHpKpP4JCHaxs1ZJUnyJi5tkGBXYD",
  "key1": "goBRYL2yPAowpjmbQC5DLAJWhLR9Wj8BrX9ngbwMvHudDDCWhRdNd89aSnTosuJnZ9vCQ3Kax8BLYE1y4EGJKVb",
  "key2": "5kj6MXEkPZyLTZnTc3NzoV55FYymejk92DSGUKzquY5WLKLrukZVij4NdftUm76TapkTsSmDVuviw1DGC3zKxPon",
  "key3": "ErFi3h8dX9N9K3geBvrk5CzLDwXU1zQ2oFzygn5HNGxHFzMC4ndfFWGu6HdRcDsufpm2kS731F4d5Y4h9mksseu",
  "key4": "4EzsFUdPktK4329vgK4QhG8UTcfU1xezC7CQ4qawLYb5W6DePiTYfni57Ze6WLGFV1qv4i3bB7iF3kRGZhUrCoGC",
  "key5": "4gLiY61hfiVuVHkRcw5X1qiWGkPoFSfa8eueTpv1qFdAS76g5NKHi6wS4AL6xwBtyWfxMTEpJNyQk1CNQ2yoBmm9",
  "key6": "4auUzyCpLbFWpBUrQoMWxRsmpxVwpQHXseHv5AyThujFn6U8hSHS1pXTN4VUtP3hVsqtmiLqHoAM5DNSbDBGNMLa",
  "key7": "4phzkY89gBH7EsimfNya6py6tec1vYFHGN9EtMHkfyWgSRYQuNQhPQruAU5ooGNKtNuBkde3P4qPfdZE7n8w5F2Z",
  "key8": "wfAUKgA3btQcXfCz1KJbgU9KRFdrPJAcu82ZzYk6duXBAuC2Psf4sxWdhDtoMrUp5G15w3LpfE4RkByhp69FJEL",
  "key9": "4D54c8cmSit9JeArTphku3hg2Azs7WCaoSX8moEnA7BmATh8WcrQ2HDBxLYiwnstyPWrEQ1YXh5jvvu73JR6wxHL",
  "key10": "9qPyQivE71UtVRF7LiJ5UnhcF34jVzS3pv1kNXPSL752zPaJDSX35PpZSu92MbsvoTgv1qNwHZRinwYNMMJKMGs",
  "key11": "ppXPf76nBnxJQTh8nqKLZoNkWKmJ27Y7dUJUrCD1bMvQRsnGVcmKwJC6FUPWjqUJngrCU4xoKGk9aKUwnCXtSmD",
  "key12": "nWUc4W1pwbyZtPYhUm9UNfqptvSafiJ6E7Y8H47dNptukRKjVGg91kAtFnVKte7SMxygiRW4TgDz495gWaifHtp",
  "key13": "4D7wEp7LkHkSSbBUcnbBQ7nVSwDF3sFft9tpidKTLuMxBxyB9kaC4aGxVJzFtxTTHEyxWXmSUJi42S9mBrU4g1JL",
  "key14": "5W6bTvNvXLqA45auFAHrdb6U74ocaizFbXNVjSiqUzsCQufB18um3ZihuxQRnnYg8VecPhFimNqqNE4VyBBWX6YM",
  "key15": "HVLHKFSggcKkP9ogjdhgHK3wMvqkGagbdii8mvjzd76ja89JRwonBJCEzTvSzythLe8CtFVwwXLP8tP6BmuNapt",
  "key16": "4dj8Kw3qFRBGkNnHq3Ygz98bbWP26ncjMyhYPtze3NVaVbG3QudweWdQrDzeoRVE5jPvXhpAfVtZ4Fz6SpDhx8fK",
  "key17": "4VczAnxHQqwRUWGH2xk5hXJDuEBEPqfG5TAidVpaRYJRcUSgJo5NyCsYRmqHbMQSbhEH8xWPJGXie4CcBcFHAAT2",
  "key18": "2ntN1tVeLGHaxLZ3eA8Lt1X9T6esxKwpMZ3johzyBSmFsdipjfnVCuPqtWhQkxwni5zccjipSEDpzQ9dAuWYX4ba",
  "key19": "2zPfBHveUr9ZJTnsWJDeFSDXMQmwjWeTw55hM6yhFjxPnno3FL8YTA4p1rkpVDdWSjB7fy3F81r4RE6Qb3oKHGbb",
  "key20": "2zjaRtWP4dRDaJxDw8wueeS4fdrYtLVaV8Si2FRM8JFHt61JHZpTLwUXrWnRN3DnwueAq9y5pNX4AVYT8rpDanD2",
  "key21": "rFBpm74iuBGg5HR8mwsvxBWxCNn81fkgV9ZQvvShiP1HwNtH27qpi4Lrk69e2LW9LCqq2VfxWdsCnJTPvW3hPt4",
  "key22": "22n6c3A5XPZVEkDWVndGLNSgZ9JpB7UbTg3JTStp1rzWh9JBYiGVWEMSZmp375p1n8icoJ2F5bbP9s5mc2zwVQjU",
  "key23": "XCHPgV9yMX53bkob1HHGyNaJrUF1L8R4hMcWBtZuvjxb86mf1rEL1RANv732tr9gTBTYeGm3dqukMunH7pHLfLQ",
  "key24": "4edLb7yt6fChk9kxviiwTABmgNcLswaHUMdP8UW8VergmdMLotVqtpHjZNz9fSae2FHvBBVwZ9nbnZeqdgqUjXRp",
  "key25": "XDTDdYwsAnvqVhchpBsRjAzQ4NFGHXRKr1CTNaxJTbpFmoqBgDjTdKzM8Cv6RjkBGcefbe7iCNfty8riWfZV5fA",
  "key26": "3zwzxTRmuNYkXUhzerZXbWP3mrWpd4Aeywrm2JJimEfBo82bYAg1UBZmhRAFRRFebskGVQNsetfrdXsQLLr8GrFn",
  "key27": "5ANiqRFR3AV32jMthunZEuH6jGbSEUdPs3pBgJxCGP4WALexP8atyouvzXrgcVX4V81GQaA2b3Cr6FwJ7yeLQpme",
  "key28": "5zL2yZiiwgqEJGvqxsP9dSiHGkBcYgrFqQXnL26tPHno919kr4v2ptvBpfGnRtCCig6S4tZhJsxqtvc6y2beNtFT",
  "key29": "3HoTaUh3GbnZk2pK37CAb3k5hEz9hsQw84tvJzCjRG3oJ5vEk8PazkvfL55B39h8zwNNZutFs96qKpov7RSjpegV",
  "key30": "3CZ9shBPCrcZba47aLseGfQrX9FDPpByBsuMcWvAXCC6GMS2f6fXajkrSHtgXFrR3grGQni3s5Zf93QBiUKFXqfW",
  "key31": "4bM125Q2nyr8UoZCkmDDBT3QWiETX11MmmNKnmGxNCEU78uZZxoBNrPEjJdHCqMP9Lem85LsqLsdMNjmRxVx6F4f",
  "key32": "129Z8rPR7mdat2NteZGJvW1S5uPNPwQDXFmkSdvDcVpWmuCRSimcT41gTKTqgKB4cRJm7QgW3UR5Vwjr3gQESTML",
  "key33": "66TT1hFPKqTdGhLt4XqWXyggDHFedX72TjcWkTsMbhVCrdfcNXMZ7z6pMowMZqdcPvnAgoba1pd2cGMLBrdxAABd",
  "key34": "1QuygDdZDS2hsu8oxkTmxm7CYpp68kZeHKRoVDtucbMGyTMmcG5UVbrSHLEgM26k7BvdoHaTq3yuzQH3ynizyYi",
  "key35": "5fiKnWvuWKjRsEncPNpscS9V3kNhsv7HjqTCWGFqQxWN1zSzN3W7EDdnSWzPq6Tm63Bg2bzxtJ5xQS5WmUvaYGNC",
  "key36": "5fsmjCKafhkyTttdMmyMbfsLU6UeV6CmVZDhLgVYt9dsVksDXZ7bh7R3iNfw54WZaTb2iQoWJr3nKnvu6i4JDVNb",
  "key37": "5XLpxpgtHVCKxBzhgpfwdfB1yhv3jVAGELEtvdnntbMHV3XRswjC2aax74SqP7Jj1EUcQRAUdz1KHvktmzsVVuLB",
  "key38": "3bULNWh2bkSLNUCNWvVLDgRLJGG99BPnhP4CiEU24eLUtNQsss7Sq5rKzDUdgWDxvgoD8GF8ad8ye5NEnhhyvQuw",
  "key39": "pppUJsNEcnkTrxDXNNPpHYj5tEmdSh6yjEtcPn1P7SzxuYSt4AezVECQxCfGXkDxBuT5GxR97fR9cvZ7vPLEcfU",
  "key40": "3fZa6YDiMpyCtPjBBqmF8tzuxtFvmupqGsa1CXXvnwHzByR2FKcEopCzP7wXs5VmXnjUY9m528y9NsPrAZmthzi",
  "key41": "3iLhcNefV13Gwn52Sa2BhDGegXeLGJ2Yuo81C8AFRLTd7L9DoWrmMJRM9n6fNhFcK5SzSxjkhWVWGRkqzBNap4B4",
  "key42": "3hsJG25CBjPgqwdnfzxQt2fczUKqH2NE3zCdzZavmaBFY37h1ehFkLkEBKe6eyJCsA1xapcbxCMN5iHqcpvfaF5b",
  "key43": "dpbmTE4y931uJEsKJ368CvgYvpDkBcyroXfBV2f1j6vmM7TnkQryffigrQTE7MpkN5KnqXYb4qqy6uQ53d7uCFG"
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
