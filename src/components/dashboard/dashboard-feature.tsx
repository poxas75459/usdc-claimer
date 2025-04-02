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
    "4BxJkqPhXgSuogmdDZBiFMUor7r4y6r5mo6LEAwfjt8TKKLt7JMi1W8qNWZLk96Q7iAsewWxFXSy6wAnUgT5cyrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wyb5dEqG7yDqHEKbyYPWHNYPbEhXxGNQhb8xerR6xZCsbxcA7eGNrdTfeU3kkw3m6vk9ezACMaLG4LHiMDLVEnw",
  "key1": "2xdwDtfL3BGMgtxYV6XUwwEznnarLbhWRMBJBM5peBnWHQCMWmpJty1sm3Vy2DuBrioZCN4U9BoaXbuQTMgoccKL",
  "key2": "5RTARV3Xpz2PyCqNcgK4mtL4EeBGYjx4wroc5o5dxC2GNXVR9JY1GZw1R5t5pAjfe3ytxL6Hq4pGqpnz8UE9Zk91",
  "key3": "5bxNmvZQLNZzdXQaSBzs9GTYXpxF7krXU2JLQuG5c9yDA5XnLvKtbq3NDTNfocQebjVu1Uen6SUwB3CBZurV3fVx",
  "key4": "zJzizJtMm6dN5WFiq81MKoRcRZvgQPQNKiirUVJ9wqY5EsTVkYppJucKRG4uK5M8hHjCpFvu3k3tn1T9gS3PbNv",
  "key5": "5dkhMjxSTGS2BSnt79xWsKvXtxeYFqabRSnnwHydo1FGTbEfhYBSKJnDYzj7mqF88tmW1jGEL6os238b8WyAvrqj",
  "key6": "2fJchoToGstaoHpU68DvvJ7JzobRZELSHxHnY3Rq4udXy4WBbrw11qQ1aAuj7pWpsoq5keFLMzB62j97B3gD5yUD",
  "key7": "LhFuVdRATYXHeeEQ2HJdwbJ26f6HacWacqZFGj39w7MiEi8HxiqeNbd6EaLqnwnhwtgVr2UkhvLadU6ZfJXFMrT",
  "key8": "2p3F4Xgba1W6idHD3b6LLwFMahF7ZKNd5TmSGj4GJcrVudyG1CPTfo5LFqUkihrtd3t9oRXPQfwx2KRhFjuxHXH4",
  "key9": "4fZUcTfjw2gMderqaqUKtajLa6aE7A9poxgFWXi8BYffzJSdaui5Jj9UrWbPLiZ8HhQ7pipCZ3MDLmjNP1N11xu9",
  "key10": "3fGS7xoExo5FgsZ6oFhUXFP7txnm5UVjjaoK1jijSLb6jv216ppSv7KMZ6KMoSuTAvtZkrDV1v2uWu4tCDdPCHWz",
  "key11": "2Mj3CMJXzz9cx2ycQAE4udemHqEgRZEpENUhQnvPpSBQajzp9dQnGsn7x9eC92nKNRiGFiksfEuFkhHGD3yJUDSW",
  "key12": "2m9c4E8ikWhcQzrRbzq9LufqorrXyBht3tmbKHbeb2oMbVetj1QdnAQroWdmCneJpkv6g1y97VBvoyeCgmr4QqbJ",
  "key13": "28sgvPNpGywTdeuK5FzbuuzPD3k1aRMhK1T2DzMTsrhvSoTj87AWbCg7eLzCeJYn7jewMtwac4dWs2EE3mSzoAW7",
  "key14": "653SbGadm2Z3N7CqocJ1DeW9v71yDRpiL6jBx24Wh7U1y6ECSd7k2kcJRC7tdF3BNqS7jZcbXgSTPv2Cp2fESPbG",
  "key15": "3zFCL2FfNwGhGzmB9vUak5jvNFAwkHC3SLFdRNxHjhNjtcxgAJ2C7tkw9viKKqa3Gg8nUdBWhAoRB8n1iFdYqsab",
  "key16": "sBBkDwupfwfVhtPRMCkdKwkQdVFdoByt6PVRM3opxnWyKnzQVK3t8VqZwduhwhheCgAnMe9x7j4adcy8TYuHRG1",
  "key17": "4V9BFYpq19STniUFMmyL66zo2GMKiea4PBWbBq8re2ocFRg96ZQtMBSUxVCWs5LQkY7BEZvZH8i1zYjQQc9NW6qF",
  "key18": "2JTwpt7Z2tePLtR8sHsvpKP2i5gvtzU5ZQkWqGLrwsjCptGsTmfnH1S8fErshSVXS2WYyZ4dg8HNnus3jcb5KsY4",
  "key19": "5zVtZ296uJbNUMBUigspN138LtzQNKVnAjptrt8bEnDsPP4CmNynHmXjVb9DqH9resVkwTcSrQ5dANr56bTWYe5q",
  "key20": "62tLRwpUX9PQcN4XyDqDxzqhNZeRiG3jaMhuo3pWXLC5Q5yiDNoryGHXGy1pM9SRE2SgVEQ5KLbanHT9AidHRmfi",
  "key21": "3kiefQYLc3sUHKjY1yRoVDBgcYhW9eQaqvE1bGvEhMdDYi5DoNvfsmKGGcrNgpdgqqQo9CZrdDUVpz7gLR6mcnWv",
  "key22": "2ADsjkoZNQxF4sQ9ayLRQbLMtPZFqsqFNSvfpqJLKbwr9g16sHu3W6XLTzWpZet9o5Mzh1RATTZLrRDBGtuZezLD",
  "key23": "4Rss52dZsRYbAvMKWeojim8eG5oBrFbvrJ1v23D89FoTJhAmKk9CoYWoorztfSqbFH4kUYGHLVaqGDbSbHChgZJd",
  "key24": "296Mu73CoPP7oauB4Lg8K4WJvZWNBZwWVVNAR454S4NnES65vH5RwWGNRcTnrmLAaiuRdMgY954xTg23qT4i6c47",
  "key25": "2y3xo7ipXSpskkpXdzY4msxSoWJprFqx3gnVLRV7Ac3dC1TpgfByDRjje13zaasXoSdTEMPzEpv6NLUdeU2ucoYs",
  "key26": "q9PNUjwZgg3xDBgZLKv2DJ3jWAPhZ8EaxASwDYXK3cnwzCu8V2EVpSyBeKeX1VHUy5zxqkQnf82deGct1c26iJi",
  "key27": "4qQkcghxQE6Wr5XkzM7z5b3M6o6JRVyzPAMeSU9sHHe9XR8mrVgAavy9yEsCFKnEgsKJPpDKMKxys7wzF66BrnLc",
  "key28": "3ToNwX91jtUwukk9cJZodfTMQyrdfJav5DC1HF1yjmo2nSpovBfnfncpDwXZC9jis9xDXyNifyVtbYSg7w95ZLYf",
  "key29": "44KadcMWEMvQHepBjzoW7wzM6GeQRfEHPu5vM4er2VrQhZUCH7y45KFdpzCzZHZZvDKQT8YYGE8gUqq5JKkMgxFa",
  "key30": "4TwcmKcJ3fLFgo13stcbrp94c5V9EWBiy6bXHw9R5bzrae49sMEFE5uJyC6MqCA35zgJg3WDMTyhxwucyeYrCGN1",
  "key31": "2SPY3WL3LMRiGHDYmSssJn7iKmFk1i1UHxVYSHtWoKVE8CnQmve44imuXmUzfCpojsMmbcgLySZB7QC2A9hVq5JT",
  "key32": "4qguUJ1Wyyyo5AJs2uCkoqYNYwPjzoDThVVuhr4YxNPqVrm8P73cFAMSdSG5CMxszasp912kJBoM4gm4QE3GJrN7",
  "key33": "2y7xZ2yf8s7BJtN4RUCwwjMoTkyXZLtRb7Y8QDwrV7Y5Sd3eJ9BXr77ZWTtSXiUUpaohTmBg4ouS5icTVpKmedQg",
  "key34": "52N6LuGYmhDoeJJnZgqRmcVxLqnW1ov9T97E239THuNs8qUNqwG746NaPPJA7zMDmqFMPuQrwYGNgu9o88PDnPfQ",
  "key35": "3UBwU7hsfqeFw9M5QxhyanCg3qUABuTYW3F1wTTDBASt1a6PNqHp8cbRrxAR2hwfygYppCcRWXrm2q4q8rpcu5id",
  "key36": "3iuoGGhkL8t7GYn6E3ECnu7FsGcoEHxZS318dAZwprac8NtoHzHU1aRU9SEw73QHw2Gse6XrBpqB4GJsEnmKuZNu",
  "key37": "5WrHATfJhuFFAMvQZVDJQp7WiWFtt1teZsYTEJTS5P7dX4rCf39PkGnEHzzGtEhzspTLK3fDMTmdX2WekLDfnscJ",
  "key38": "2eShiz5yMqQNLfrXHMrq3oe4YRaWg236eb6J1MP4UVtZU5WjBZVA2pLQgc4ardGrJpAzUbfp1B1o8tBYnXGbksAu",
  "key39": "4f43VdT5H5uLRYYSuJ5gAi32oLqvgzt9wZMyH4CPkjhVfjFRc1StyjJRjz5otSgBPFHm2C2w436kyCrcg4wGL3HD",
  "key40": "3KKUCVnP5jVGSrJqhC4ygpF7SJ3rqgRSy9HZnrVAk4vWYQRFnwPxWyMmnGaAJo9TX8QZcwQfHLxNenxJMDxGcBG6",
  "key41": "ma4aUN2bqjPKyfTmzcq2Pq49wTyvnKAr925SmS45JEhGVq2fdNY7YQNPw6Abkcdkj96UzcR8dsYwogcwb1hCwjs",
  "key42": "2zq15P2PqyDn28joTzciRowZdQX9AMXGqiC3h2ZzUDc3SkbddAurpRAymbvvRo8VeHT5K1Ncs5q4ChLPaQk9mjqw",
  "key43": "45bGXhJVTFkh9RLUZkW1puoK2C498gncJTyvs6FY89TaD5uXBeNxGetqbDJi7M2mX56NxD2zDPAbVXUCTakwMzYE",
  "key44": "5nfdtpV8JMm4ytV5nCXSDR6BrZsnuRiq2kRGXVnGzJCF4qDz5XWm8NrCKPJbBQFsuZsAm2EfavaLY7tyok1ddn9k",
  "key45": "4qeJgoEnjx2QR2k7KspQsw592vyuKfH5eE4Nsyetfn69ddpEFJpBXNKfQxx1TkaXkDwQMpTeZEnG6UAP7ZiT51W1"
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
