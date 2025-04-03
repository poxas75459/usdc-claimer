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
    "27PusN5pY8uWFQ18UTDnFV3obDgYAme3GMQ7fUXXsKb6f8r1uNMbk9QzbYfdr6WsmSMrWqu1g1QgPuZu3nwPk4dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z49aFq5BHiq7LRYma69HL8oeuwRJi4FSeVVx8awBRRDCHTUsYuryAA1o4NDUHDF5RsoWaa6Ff8YYuVvCCRCTuZJ",
  "key1": "2aNRKyqJUHdGMVw5pFTGzEaBGcfPYcJ1d5BzTafpUni8osV4Tg6ANevt5T5QruEbSTHih5QFQa5bEM5zTWdPu1Fx",
  "key2": "3o59Esz6qFfUw3S1geESak3cLNpbPy5LRgWiDgwFNCb12tcdQrgyXPpmYqVhf8emEUaEe6RDoj5jn3CvQpXwWFuy",
  "key3": "33PNDis1kSiKa36oxXJsDwM7yE5oFiLkfX3JLyC2kKQPhaATdHPBJcCzXGATZaE51WpvWittpo4qhnCwpcwoaVrE",
  "key4": "2TdW5G5PQVZ3SQuiR7eCQZ5934BgR8FT517VUvdNxjURmFnJPxekE3tXkp8kzZ6vqmC27JMLSrQisoGX5djpNMSJ",
  "key5": "7D2zWtT49NEuamjGpwtCy1mtPwfPydguZkArHQmev9vb6ogVEMoJ26TZMW4BzPjuGBsnJVjKRZPxZ72unAPktcQ",
  "key6": "3up1FhiqPbrEXTxS8YqiaPHUJtJbSPyijiHoAd5TgUvoxBfiYfNdsdVm6xJKvwjPt3zsM4Hb5Tvn2AcHs6yWtaCk",
  "key7": "4wi9yPsX2gTQ8RJ3oNycFY3EcPohUciCs6Bj8kY8QSwCYYPWcS7b6SdVJcrW94VF9xk6PHw3wZBk4ki19Bd4KqoG",
  "key8": "39UjVALFnbsJo1eXcVfxQxuahsXnBiWAgS1aoJHhcSAoUQ3h8jQtnid7reGx6u7ErJZYk8JQaKw8qunj4i9XHJ2y",
  "key9": "4zXCS4WxA8sSGPvCNz1P4ehuVm6ZknoGG6RZYbdNLouzrgUBcCR7TT3bVVF4qv9BKDXHhc6aNDnbWCgxM4qfkHPp",
  "key10": "RjuKJBPmpKac8XTQa5E3tzFtP92A2pe1yVVwVoZ2SaNZ7j9nU1cPeNCpkgEahTswMcQfzVwGXKbBq28HL5phvvG",
  "key11": "29yKBcgKvmAb46qje7GMSRfAdy1hfPQkR7QAFgGaG4XZUnQsDb7rryHny71AAMbXnGztVpvgaLjtmxJRz1W3697m",
  "key12": "3G1WXh9fq89dHWZDkmKAmjDdwdSb68K72DMyh3nPRRPtaBDRYUdawVGHt1GvkrPEo1PmSfomrgqKu5YiX8HdXhNS",
  "key13": "2UUiRmTbhXYGU5HaoDX5PYU3pzSL61ia6EZ6CmHpEyfPevVLj1MsLuR9FUGJL3rXK8sh9RSj68DjriyffEecFYGa",
  "key14": "3dA7fPHtv9QRkE917Prv5m4exeEWXXV3EnkEaAUvmiTzMYug2jN7AUrqmUEEmmz6aXKKZVzcvrPrCY9k4fcpM3ra",
  "key15": "4RR55Tama5PQNHxKXgY3wzo9F3txSFCJHgCWh3ftuPvcaaZVmzuojfQFztPD1AnYiwg2Vu9trQSZdaCEGfJF22vz",
  "key16": "2oKMuruCGf6SRyMaV5eff1MrRNCpcaknV9T3a1VQj49i7k4VMSBfsmiJCV7k3wJL2HgPpVhSYtBbCK1c5oC41gf6",
  "key17": "3Jh7oBJQVUNb45kY3eHujbKNXfHvQBED7uojfrciXisVqhZgdQqMQze4RmzHdHZGLYPiZJ6bHJTRfU3RRt4L7AUQ",
  "key18": "EEvRecHEcp91mSZUo8iZidaesRXy4KAnyzJ76WQyebXEczANwTbpoYkotEGwFa2genYrLLW7SJzGb5jTPQkxJHb",
  "key19": "3hwv7KFQ5hw6B6maW8yLr7SwgTq3kSjSJ1SjwdU1BHSRYbCtSJN8wqg68myceedhw6jEqJt2keyb9qMQJDPechg6",
  "key20": "48xAtxgWYW62QejrJtGkMZNb4taNtKVQXgFAhjuTgUxAH71V1Q4mn9xUsbBCxEehM7NW99bmi2bXfbyDu1unk9xd",
  "key21": "5fkdNQ9QRsaFJ5iG2ha6QpLNXjRcJHEfb1xJkJSCvm3F4XoPCyhjNqcCavDfaR91XMd6wjAMD6wfxfYDkjnovHnk",
  "key22": "2PzEvU7YVMF9FUw6KM7YWpa4r4PSb1vgxTnxziYBSpB2bFXWbdzM3dBWK1syrEeh9isvfxBDpeNZCqHgpxkMxVBQ",
  "key23": "4ZoeEQdAqsJAteTvX8aBvi6ReecgU3KXhzEUuhPWekFnEFvrmissejMG8acBFq3qMdpXn5D5AuLu3ThbBPf5jY8q",
  "key24": "tXsEJrPWfcN27tBiB68E44C1JFmRw331UVH4BWxP3LXUDapt8XugM87qKDc4ST191g2rZ8FUeYpjJEX2pNhmAYE",
  "key25": "4fHnVtDmHkJLWwnm8PtW6KFnruUUigMXFStUsN5ujY2n8iAgcCu2i6ekygWmTSVvNPrtdok7ELQK4YrNALiV8UVu",
  "key26": "5Riuk36AQJYYpsYR9Q7TkyefAqVRBBVW9EFUumcTS2KpedrD5UVdyi7r1oq5PGzdz4Sspcnp66Cqff1L6PARGNgs",
  "key27": "5PSQwZ9Z1gY7paFW2nuzhdeW4XU5t1aZnJEX6f4k3tDiB9qg2Cy36MdhBSE6JEFBGZhSw8NzvvrsMtx2yFAFHde9",
  "key28": "37Ynp1y1wWjusGAXynKjYGUb8use3tHFvTGvuQNJEAdzjs8jupQq2qHK87ht3ZBYdQqCnghemc3gjfsHfL834Xt3",
  "key29": "3dg7DZbCoCm1UAhSkPg9EgDBfmj4vqCnfkptTfL2MVJjfo42PsKwqh9jR25X2nc29JPo1d1yybg2oN6DewrMMf9P",
  "key30": "3WaxyqbsLU1xbGKYH9VaiLSuxFw4H4wxX72xLBcBQrURk8rWB8NCqnuLVAMYuFy2sUxGWDVcdFNheSD1BoArA252",
  "key31": "54UvRQcK2zCADPo8HuLwNfkXb8b3s6HAMyB3YWdBdxRyMEjci5bmGW1Fgt8ZwhJPCPUQtoSbS4oK4e7icgdvd8rU",
  "key32": "GB5Py1ybxZLN4UZC6scAkAePczx11T2LbZyBSnjw1qHa2zJC6e8YUrsuZiMezW3jXnNDUtBBCV5KqkLCShJy7WX",
  "key33": "2Gn4JRpWkSA5W6z2o5ZUZeKyvjHaDkK5pzieiLXHJCC7nRHni6hrdWbNFdaFC45nnfVp1KrDJEsnhLqkcmoAAZ1v",
  "key34": "5CxVmxg5t9cKeZcwnSYpxgubqjwLUCGf6iYB3Msh4rg5FKgrSDWBRxABKXCgvfNvrWSopb5kZ7vcb2TtoqAp2HQ4",
  "key35": "4Uv1gtTYBNc693JpxG5bLNeBavmA9Ko2cecendZ8ufPnpgqqebmRJ3uDaGwmozDt2nYNizRb7Q2TSSBMNTMef88S",
  "key36": "2B5uaf3pBwjbZwLbjw2Y6sySdXNf9qMW1ZLasAJ8FbSzXeW8Tv7uSUoCRTNGVQVQ63atDAaxUXYYHdJZwRTNJNMw",
  "key37": "NyNuxRqpbRNdaQVMxomadQ5epNq3jNYaAywobRg7j9Q8EUkf6nAWqZUdCUbdsTx1mf5ECRyiz3LbpoRKrSwyVp8"
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
