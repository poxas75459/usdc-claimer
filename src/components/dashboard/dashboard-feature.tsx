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
    "5TgfakrRWL6cEH6v4tG5zWbzAK5eMi522rJxMx9yThBUEcHWMtHZ7Eeb5pmziHVvmY8a2Y5JzK4TaKEbgYHufZ6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NTZGuG8QpTZuvfkhGCwv7TzaaFEaSZ3Si4EfEt8eeztutMNpoMCDhZGE1QmgK8uoUP8p4rH1ak6q6KETwqGDt8B",
  "key1": "4AxRvfnC7VVBKkavUwpUDNqWEnEHpAEJf5JpRhBsQPeiWD2KXV4K2skHDyxKNKvmp45BoCH9uhcT7oMyz7TscNRd",
  "key2": "3YVyGZK1V9mBYajDjw7TZDrXuaVnYzDi22dJQD4Go8ZLeJwayyhyQBRRUpR62f7cQzecUF66PhQwa6d9pS4cjx4M",
  "key3": "5LLARxpyMQ41xkkNpqPjdFL5G6CN6QRHB6P2q8ZyVUrnc572ZTJiu7RxFtfMSxRQ3y7HvoCRzqcPMbLw7qBmHvWR",
  "key4": "2AxpLW6Njc4VtTZhJacBkUMkQnMmy74KHK1rdzpZvpFn828RZMAJVa7ZWv8cPTtyxAbEVwgJFfy378pQLJfAkwLw",
  "key5": "3vggJ48AbMYkGU7MSiLQbRp4NmcW9Qb4ikpAFKjdNRzgYWUxvr5CbEX5cZE4NzdYQtXYFCBipNgncJxVqtcCQL7K",
  "key6": "5xDZnQ4sYGbbRcLTvwogAPDhzkcZYokVQ2jWsXPv94FjZkWn3ZybX41ouMMJT4HLugwbq1skYroGn5gxm4s8R7uR",
  "key7": "3F5XKVv6Fa2F5PmgTEq8oktdGUACrdEU8aGLPxoFyyebWV8myG2AuttMaEPkovf2rAoeturN9cWS5wbUxeRJt2sf",
  "key8": "3KZSjWjC2wEG9haQb33xqrSoxC6btLdgduexLe7Rzf2kA2xCWLw1fHBoJkBsKyR1aQKPbdSgmafgHZUqLa3NJJCy",
  "key9": "4NdynKJuCtvcfdVx3DWQ9NXe7aCN5QGE2HxykZAJknjVu4ph7vJnWsefTWu9fwmywkBEzuBtYHYUXPLrmP3TtfHJ",
  "key10": "33hokUdRFjzuHpk2sWuKjMYRU4x7VA9KETKvatY7WqruR31gofgJDvte7jBqUjoi6gTge6qeSxy78qMict6sAwe2",
  "key11": "yqvXfRw8Vx6kU36JroUju58zp5tZTPfZoZrp5fQHfbFrgACj3QUnqDFzJgrK23GdiFYT7AEZ55pifR3pa54dL1q",
  "key12": "33eTQPVtLj27yMdku6PDaCPbpEuZGT2GHYYyWFNsjaFCt9qVkptPqkaFsx3hRH9cocNoVrxia1ifxCftZEf4VHtR",
  "key13": "2K7WCg8opat3E71SzjBFgRfQ1TF1LLMGNvW1wSkMcCVaJNNC5ZBBMU8mCoFGTxu7irbRBUBRPTDDdhLAgWXFwGuj",
  "key14": "UzUzJDchDJCE32z4VVNcFTBbK9aLcJieE2BTt6kgfCzvuTdEPq5jqTmkPd1zM7itcfpsrtdXxMQjQRNnL63JCCu",
  "key15": "2ifkkbXtMFt7h2JHqnGtQwUdN3Z9VhDfMdisiJeMsifubxc9KRWmfdHAVhe49W9j6RPgA3xg4FGNUfHgpr7sa7GQ",
  "key16": "28BMvEsQSta5ZRMFBjC5F96PJgCnDNrnMh2L776ocSB2sf9E1PQxTSTf4u6GLiBrpVnNBvAY8X2ZZ9URN98EQaz8",
  "key17": "4FRetUwagLqhvFrdX8q2aJq5ipQkXg6awQ8Ny5woivMMUKjvPo8qLjvyyY8qpADe4sSZS3Zot1ajA5kvZQAWH1W",
  "key18": "WrBRVX3YjkEMmi7qH8xz8sHpBy9UYprwpCTtEFs7UgzCHFnhRbWhYctr5p63YyT5ifrm3EAF9QvH43VksvYHQxg",
  "key19": "3pnN2STror1XrASne33DQQysczsje5BrfwGNzb2yWKbC53F5WuVzkfJJec5S7uPRKuGZWt3mddVguF8jVCNvjNVX",
  "key20": "4SdeVYfprvoM694R5MMEre7fy3xxfccVrVpWBuh9tziULcoJKM8Fv2FAjQELQEDaWsfABx2b8hpPdSQmvfyPzDoG",
  "key21": "4GhzrBXjUUoZKo7qnftX1EEeUoodo8Q8bVy1ARrGd8wVpuWj3U3RpUxreyfDwSFfRjNLhgZr2LN1L7vfApiVhoST",
  "key22": "2xMZDvZbBsBEtazC2sQYnX29nbaSoQ1gkJdbShgdMhu2WN7eSHFesWgczRnBJ9zByrjQLv6EnHMphrx9zgFnFynv",
  "key23": "x6qAoHkQ1HdhwAKaQKPHhYvDgiYxKV6TU6aTLBKJGWFDE2LQ6eA9MFyWquRmJXyfXk9vMeyLDQCeGBjFMzRM5ik",
  "key24": "xGLYMGvG1Zap5mpEbrDBuoaCb3pYGCzyZQSXuw8CE1PL6x5HAje4Jo3K5ZEiFKap17MZtsHoZF4h5F1fbCvJrLn",
  "key25": "2GoshhRQ8eLMfE9ecMnY77P5PcvcVnPWA472x76CKwpkmCrNWxfU4EGMqfXTCgYKFGg181MoQaBjkPbDmQ7Kzx5G",
  "key26": "58hQL1vgAGUKgn6k4UbmmFr3D8rk7LbZuczkiQZhZpYPnvcmWd6fsxavoA4HVZR4hXshQmsMq349nmq2LFVFFYtr",
  "key27": "2ombGpEU7QsPw86vwxMG4ji3WydEggdJTzBHqQz2dq7hPgnuH2n7PdWFFhoj7SaYpcyYUvFkkzVLmVG4CMGfDs9f",
  "key28": "2wQzZ2LsqadAHVC4nhDwgn2eJJ8haMcFotP2tfrVNdtKqjP647pCDTcfu7T1hgxA3rp42QYzSaEYhbxPQfMfnpjw",
  "key29": "4fo1rrQsdG3v8yVQaUbskf1JDnvLk75BFWe7YTwVLuEeCdeCiWkz417D4rWrTXiLtdxXSGFJqYoprRwz2prQWF5x",
  "key30": "4VfMhFVpAnPVQ2tgBapaTHpu7cgvhcBZidrERmnVFMiC6Uk7GRmuYNRcNAE9fMFv6gu97cZkY2SGNwTkpZLEAtcZ",
  "key31": "5x1DGYyadQQEwL3m5cxnbo5xvD7bqBqU4YFQfCphcvZLnckPbBfU7amGxEELuCiA8abdQmwNoaSiqzxzmL1RmC9J",
  "key32": "3AC22QAvkUMsRvhfNxqM9zLUxpXjzqXccVmnSZBqJr4Mi2nPduQt387VDNkhtUANqhKThDqTRz7pyZPFU9Xf62E9",
  "key33": "8DC3onrndXPWbf4KxwiUPkPa5XgDyahuJa155Ws2HyBLvQbUZUnDJiirjaLLYVuCCjS2LrCJciJE6bo41wuSigQ",
  "key34": "4rBPHCEbRnQWR7m99thpCdQPQUxfJfd5dmUoyPAVhXZZpsfp6cv9WK9HLd9JELomYUQuxRP2zbByCq2J84kAa6va",
  "key35": "5n3qakEVB12Nrqwijbu82zeDy51LbLRzjxd8zT8jUZvMnNxdc4gQV551ML1Jtf44CCWnWmnWA5ZV34ysiP9tGT1c",
  "key36": "2pRNdU5pxLykNP4QrCCFaM3TwX3fEvMuxV1YBNzPX7V8EZokzvZE8PVzTzMUEeKusNT5ChjFisnDbUoNMgaS79e7",
  "key37": "38NceycozenxW7cB2vvX2PaDSiwmEFRTUhicwtPBTWuBGDCqF6xC4HZHdjvug1PEpCZ9wvGDrgUd7PmUC5EHQ85c",
  "key38": "5Ysq6NNkEgzVjv9RBprov7Ho9nDKyTAtzTafwRR5sdmw1cjYGyJUGaZZD7GNYKBgRZF2j7KMas6XFJGavNABsGJo",
  "key39": "5gFbFzSe4smSCpe4PmyXy2gmgKC3d2YEAabvK9MxD5QSQmoGUnRRxPZxCmGfQqDJnAhFLMLMwL35djJdycsvwga",
  "key40": "4aQgznq9Pbss42xbMqV77uqz37EqHX5rgjR7xDFCUMukUBBFQkdgEBnXUZpro4jnhSZQ8PB4Yz9bNPDU48rF1aiX",
  "key41": "rYKAG8EjomQ7HZ7KfaZPcGw2vTVFhpeA9sKx46osdkYkk9Eb4PygPiwmosLBwDaVHrjxbunzRLapuSZ8VXDSpoV",
  "key42": "5JJtvFmvW4oq4yLbgZnDgYR2CazEviypHkEbSB3nzTph9nBAcBaLGtVuZC1xBpxix7cPNXzdBSpPsxtkLEh1Da7A",
  "key43": "4BbhJR3uQavjmFD6CrWCGPEhMtxexynaEhLcG7unD2uuT8qUgt3UYHWzx7c4LMxjNW8gbsxVyfhyJ5PEjrQiiHWM",
  "key44": "2ZqXmZCLChgZrThBDPLzybJiB39aTvNY2NgpyVeAxbi2FAAn3FHFnUeqqC7UrXTnESvU94BYKedCopVWcZz9fyg9",
  "key45": "3hPoq3fL5ifEaKW7Z8XAQdUfVrSQzy5phSGp1KgvjM73JphDrLFwVCnbnLtHzjbCQqB3QTNir3qM3VCQELUcn9Hx",
  "key46": "4oJVjzbZ9HEVfttvk6gMdYeyqiSarQhrWeK7Evxvoxjj3CztLVLxapWUKHtkBnSQsX7eHqFQRSYBNAeDMKkRNxYe",
  "key47": "3C5EDZSu1AeQLose32HkDwPxMY9gzbQ3NK5Uxtj3rmsy9Aq4oVS3MHaPvgSRzJyWhjKBua6UDVhzn7asVQeguStj",
  "key48": "5EjzgEt9m4W3A8vgrFKFGAdh9kJHPEknzswKLqUV1pV1yxyFvHRQwuPcdj4oEnb6P3q7tUFRdxRPa2xdv3trmudH",
  "key49": "jQzDRLPpmmGXaBAHRsSV9sL4JQLbAH9LiTPnNaPXxoi7jxNnbhAtGcB3GRcVwxok4e3e2dxdTCgvsYifePWzXaL"
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
