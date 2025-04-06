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
    "41aeDwpAFzv14pihHfAL8snDeJKgvvb1YLVyef8NtaWfWVmXxAnwTuHsgrPsqURRrJi5VzRyvWEFKLxNnEGwQfBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64hf1YHRHTvT7Tj8zdz7EdisrUgmvd8srExZPEFfe231mGvSJNiexm2FYJ5aibZBHLtGKwa2F94PUApBSWg4sBtB",
  "key1": "5vW641sxsKSdv2NMoVeZbLx6pFKJW8YRgNnwoLqYNt1GK1LWHnbiDHwo9avKuBZQkBHYNfUBJFYrC5DCXK5nkxHb",
  "key2": "4jS8ftFAoKQsW8ZwxS7MuSv2Sv4nkvPbhSH6mAcWtzbNjEU9Vc4CS46fFPt85AsU2UzuBaPsDC3vKfXMttL54RBy",
  "key3": "L6aPmgVwUegTmgZNrNY5hat14kPAsYMo7BCjY7mxx8mureoxD7o9KVB3bU8iWeXqcpzmhCGL7sfRRgFyNAYcmqc",
  "key4": "5GA1eweDvVKBN95p1MnU3hHj2NTG1yfVJLUNRMWanJEbapAYnSCmgc9bLis8od7cUeLh1Gnb7Ra8fxmaaUuZ3GNV",
  "key5": "5Dm9r8b9ZtzEaskbrkgRE7JkxpZkNsmFMKkWkbrmH6P3oeJPZYNQ81qNzqHchSo9gtY8NoxmM2VXAVfgnxWieZY1",
  "key6": "2qc7kdZuUwXpRpRC5Z8sk3jVwH67FKvvF2fQPZr4U9wm54z9Mv5vSbxU7CzwynwqkDGfLJA7YcqskrogQxV6Hg8z",
  "key7": "4h7ybkz3JsmFWiAyZhtd3AzxV2dUSLC7nZMtnhmqoeBv6sCvu2Vye6dhnLKYeNT4rdvmUQFTBH39YqXa8X59MQUq",
  "key8": "2Rx83hmRSSWex47GZYB4D4Rd95N7ySDN2TEsskJcDpNNN4134HDxvZEVz7eianjrFMVYRyXhFRWSsL9PFGVMPQgQ",
  "key9": "4cMzc8jn3HQDNJbXLFxYUU6otKGqYdey2YjQvTLNPqxzTFpyFWTk5PXCgbPWEt37e1Snwoe4LC3jXyc5j75MP9Lu",
  "key10": "4STGGPyuuVcPeZeS4783QsN6sjVSxjnqGFjAbXFToy2dcXaLTs2es93aPiuSsAEnFvfE8jVMXECts631BrceVCfo",
  "key11": "2a1in9p76EPz1p95B7Lxi85VidxqekFen1WZ1GxZZuGAcvSfCeuLAf5z2M376fX2FPHTvoinRkPq86orkg6kqAWq",
  "key12": "67YoTYkE2W2UrMbV13k3Mwc6k1xkqb9p5JZbK9t4BftsP2XR8v8LXy2zvPX3D84GZt7s6FruGMSWzdtgTTarMCjx",
  "key13": "5WnwhngU3wUq7WRUFfBR9oap8NhKA13KHtPF9tDMc3d1YkkdcDJ46wQJ3iHswxux3Y1x2eZzdSnsNYvSbEFnENjJ",
  "key14": "4UNzXQLwMrfteJueShUsjC563t7mRvSuYKSbBbJhwNLsyMfrruPQL9xqV8Bb8dHK9yRoWKMyLYFYvbGsG1zP3YiP",
  "key15": "5CyHVG9f9j2P41V8rPtCAYLNGVGnM1Ubd67X2HDzh3KcqAUCCKm1Nvkf2ptNegj3vuTPqWRZWczr29cuWYpBx7jE",
  "key16": "aefGBvAAxsvuZ8fuKkLraYq1ZCDVbcEqQkAUXaTcxpsm35yqLVQi15wihD5Tnii4npeRAFEpsdBiXKo91dJb3tu",
  "key17": "wFvhvcLECUXqLwZ2ZguXHd7yD58KvrvCDY4M1YTJoZ5VRV3gpX2xQcdUx9LShjb4guZs5z9iAKjtUpbsoz4EHB4",
  "key18": "4k6atLUcX9Yt6NcHQBMpjPMxkuEUYAXN42dKUFwywC9xCB6BsjN7UsKRkufCwJStbLr6oXuqs3Gg5C7AgUN57s8T",
  "key19": "3BZiSpDR1CHG6wrMkguLuX6VPzhFJV6XUPDSiYooT1nvKMeVZnReKa7d6EVapEoBHHjHEs9mw5DCrzAB5QsUXiRd",
  "key20": "Rgu5FyTqnKJTzkZfyWChfajoiDttDA44sMWTvJuBZttEQA8N1v6ECRVYUUdKJvZuXPc3nyqmbb2wtWg9chmA2Zg",
  "key21": "2aNqdrniikpSkJ794pnf1kg1hd2XifjYC7HKzQwm5zoEVLY9DmhBUhUyCu6Du8sABnj9DkJManvNGyjrHNiY18oj",
  "key22": "4APLTC8Mdx5661r1pSKgMgfu3Mda5aUd4Y5dERB8ukmRMQSodWJ2PEz25uwesUaxuxvBdKKiZkQP3apXwqh1QoFq",
  "key23": "3XE1cPHva5GTUTTDg2bqP7TRVo2RSBYCgC1BWiTUSEBv2gcNk4Z6vs1mAXfuyhcvVM3UR1s1iD1QDEwxD6U7W5Qw",
  "key24": "4W39sGAD72QCstdcSSNQZ193TmXbxJoFibJmYV4Fa4cohX8kxWSjpdMJR3BPttqxMTiRB3xhtUJP8TvEtfegP2XR",
  "key25": "3uwpF9vm6pnGvqGRkpCHaCm868mkUsQ2RtXSDoF94VjE9fbtsxeRmDEQnmFhmWrfMaVSTVS9j9gYaiRMMreFTRLQ",
  "key26": "5uwsNNWBnAnhZ2LKrzbFtuz3L3ikn6PzYd1UWLSe2MMeMsvhV15zedDnT928pJoQuJyYqNFAy5whPYRWE55gaqer",
  "key27": "5bR3CR4kHwNm9BH4c5hudbemLLWPr53qB6Vg1RMuL7kxc9tMWPAm7dEMijue3DmLYNqKgwX3iJkiA7xSYUa6ZYmZ",
  "key28": "564SntfpiyVevMWqUqmdmWjf7gZQPdCvXBpjMkTPZBSZot69hQx6GM4CxhSBKB2Y65onCHm4mEcvUmbqQRS2EeRP",
  "key29": "5rdjhc6MBwS7V2eWLFKzyQa9GpbMVRxKgbiFan9UUoPAZdHUaDyT3kKDvSS7Cv2TMjRR1YwR8RefKTr3QnJQFL6d",
  "key30": "5rNEbEHgc8gUQE6oqsJep53bmWVAxDNt2uo71m1sPzoL1ivmb55KRzw3MDLGXY2ZwuFikuV1CSS6kVCAA4bprGWp",
  "key31": "HwFqS4yCGjnQV2Ec1ynxtb8AQTKKb8u2ETgSrQLXvXHUoExH3sozLZuomBjML9knsGbxM6qq3MdkjkU9jKRtvcn",
  "key32": "3zFZgc4kLbb2wwaitnXY4y7onYAtwu5BtsoQjJcbJigr9cNP51iMgJD7UTRuh1biBmEQg7ZKDBZN9M2X7fcPqH54"
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
