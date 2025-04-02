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
    "33GKG3zDY219eih2vcTeak2dWVHpAU7YgSYRSBGmJLTMv5C6eVZGDz8KEkpUzbecJiMsPxcj1sVLAkLHSu8Uge4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kyASaRRAu37Yk7V185GZfrZjNvVz4yasAASaQQJSB3Yyz4Cx9vAmzFNFYNDgL3u6WUhinVY4g8jFkae57kcdAXs",
  "key1": "41PSJB8mdgU5Aym4xh1muzFyoam5Yp9f9dHNynumCTm6CS71BUKjt6ezrRdd6qEND7zSyAE5MBP2E8QEnBYojRa9",
  "key2": "4Bi88k1wKj6JRRtWfHCpi519oUW1yfvb8BX2EAALLTv5Uj8sEXuGBUyrmM98joEuf76wbmSrxQ866XcBgPLqmc7U",
  "key3": "3sdT91iwjsEPej1dXnoqCjBHLPKpHCyKYjPTC6CvrAnzQcwFfUufcqWZHqXKvQTpweN6kY2b9AuKG8QPe14BLdwE",
  "key4": "3LRvfn3dqhbgXbC8kVH1NgHBBNicNWxrV4f93nsTvphrqMFgB6LQsXkD6zu2vNSKRYTZ5rXAKmUoBCF8B2BNNtsP",
  "key5": "1rdQSggLvcb2DTRVtiqw4fKtwniXCicrSKsq6rPopvhGv92i7v8ZHPUZmnr2zMPn8SL2m4e9ABay4vmUyfo6ioY",
  "key6": "ganm6Ft4qjDkV6FvTvFF9uKkX7JJZiJSPCQFAxNZfn7zaHjhsGAHruWLJVHzi2PAmrq5ucoAz5BBVoJEnD59HUT",
  "key7": "4hxLg8kosHXDukmTdR4fayLLVt4zKF3ccE1B8bZAewLpVro46B9Y1eLKbZAUcAoh1rN1fMjWyfPxxZddfPVuGy1k",
  "key8": "4bAzVTi2KGQpdUXrWupHUgeVEprgTdyFLdqzxHgrY5C9uhbagQNbQVKKTaWo7uPHvKcpVdiJyk1cXNwvn7x8qXWA",
  "key9": "3qCRvuqqW4if2Xp5BTRcFxanruR1UjwST4Q5dHm24kixbJHhVZAbTA8RrSWmmNwTTz7hp2YgYUkiYAbdgvqGkh9v",
  "key10": "426tVxTKCxmp7AkX5MAPJH1JZWUrgbHQnQ3PrPReq8VBA14cKnHBhf3LsH9ZGG2obNg9ACo4WMMCjsd1iocvKWWb",
  "key11": "8n7HqWBLgvLpFNzbhXRVwN6c1eXEm2hKqdn36qrjw1FosZH24bZADBhCgMYaLLCtryxujJxGXJ6Ce2zGHWFk5Xf",
  "key12": "27drgFmNsG4mHvAbWrU12th3UHomckFqVyJ8AMgJFs8Q8SEvuqmQH9r4LHFStQyTy9AGdAjMDUgq4FxPWwTUSXhA",
  "key13": "5QGeNS7Cd2mY6AeKQVtL8qQrm7fgcpuaAPBBQPFTV4TLWVdamiow8RnayZgnzNax4pbyTL2xDRVcK4Hc6Y1euRes",
  "key14": "cxCqPpFPCoeAHb5CeA2ZUCXfQS3WCfUMEcfhLeMATBQEiZPS2t4zuaogz3YQuNuGv69c7To6AQNyJ7Uiw5hzgnD",
  "key15": "37jJpymwRMJEbTedEYr1KLgdZCwSxakgt8hrHFXD2rjAiJ1R7SHNBaArXUD9N1SWb3vENeg3CZjz1vLdJXVehj1U",
  "key16": "5w9CwGiT9yCJH7XqwJeweeix3WuioGQKno1VjUYMs5L4Lg7VsKjqqaXYQGYQQXH29mdDecfTd2h9Gym22qwGqroq",
  "key17": "4uqJSVpUXcWhj5arogt7LXVQwbJ4Pkh5HD8HDc2Nx6nv3jKtGurA54c7bxVVqrnq7bC59ng7RrRQpLpzBVfV4qVm",
  "key18": "3nurWLrYr8efEZKS3fmm7ERHnBExtzAodZBoDpNhN911DkxS71jGGSzPPJ7p3WXaaznuaCcth97NgjkaQn6ps4pB",
  "key19": "4sRXAFcUrmLhBcgEYNPvU6F2p1uY7XyT9dGBzox4w35qqFVnBcjMmeaG3hPmmBpN8hLrM6yE11TBSduDD9FeQtSM",
  "key20": "obpzRGnXVNHAYW3myjsszyFSZCH9GGBe6PX3yVQZ31gPX3v3hACnaRyifGFEh489LYD7W2wsKgyZX6whBxea2fQ",
  "key21": "sf8qby2RhpWAks5qAA1hguauGoWEGkXK9Jhj66w3cDoJLc4YnE9fVhtNB8j6ocB3U7urLXcCqFYibBDHfz9bzrE",
  "key22": "EAZwPCBjfpV2Ro8CAdJoCvVo9C55WoZyTbkfcaVa3C3KCvSdq1pdCEUmqATCDYwJf4bYvvGkb3TPnjkErbxrQZh",
  "key23": "4nxnorVBgCY86BmA1nbarGpbKKnMmV1iPQwdbmti9YvfXNWJNeJQRFRfmpnEDCB26MzfMYcsHUcLCkBRxL64wR3H",
  "key24": "4cauUe7nWnM97kKvFFeew598KTwto9UvgNKQoNpqFETySAazYtXnAr7L4jnuAjNuAT13TyarbypnhTm661tP6jy4",
  "key25": "34oYreFAa77RUZsTknWQ2Uyke7LVen6YqXL8R1sdpTo4qW4vbdhMraSLqGqyzSNZTDovv9AXCXijbkMZnWNBK4ay",
  "key26": "2YoReHeZBPrsgmVR3QTxAMK14nzVGE5ktHZjR2yAB8BaQgTC4jq3FFRpv5TMYMZLcwL4AbhC88yaCbr9oxQfnxUW",
  "key27": "2iZKrgx1Pck1ZSot9NvtdAs1mbas68pNz6s1S2Q77B4ZwVHFrcsVBhfEKeo7aFd3xy9Gg16SoLUyx8x3qG3b9i7",
  "key28": "4JNCPYvLwWg7C3KenMvBSbVRtwf94JuQetZ6eTTvZhZnjR98DzRvaMqrxkZ35Z82CyKEuRbfTtgan4UAWUDvvg3a",
  "key29": "3WTE1HynTT1HJUXAQSCNtN1r4wTEEiRBHV2t8faeKwfjiyWoxPuwME759yrwojFqHypAUkRh3aswFHXLVTyKGDKW",
  "key30": "4uSHD8JXB1XCWLNKjktrYbmJcFXNyDByTRL1kEA15Y6mSjeYVxdRKZfTs8gXiyR4hCMLPXd3pVeoEi4ALXVuqTcv",
  "key31": "53RD6it4tsmaM3r1eLM54jFk6j2t3tKVbXtsCzkbNN3LsPx7jrspb1zyurJsovGQZbwWNtx5u6Egu1qp66PhD6NF",
  "key32": "4i1yXhtTDr4VaX7B5rMdy6nGiwByXepbzxu1vuPLGgVU9oRFE7oUZuKCdY3JVt1gVMFzog62K2U9JfWqCVPCfkVW",
  "key33": "2hovhDbE17HFhwkTNrsjA7VxABpyzXvHU5fK1psQbEDwks1jsqLJhwHZPTGTmX89VFsyCZhfdqe8v3nR6Kx3jUXb"
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
