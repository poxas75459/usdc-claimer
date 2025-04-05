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
    "5SpjnF4FeGJ7r5w7K9kmkxqs412BS2nDnfs4En3S8tAwBfiejyiKsticMrc7rHifHa4uzxBwowTrtQBgJAaRjZvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w6UAzFjcWHZLBnHzWyErnMJyt6zHDLH6yHJNMFxFHzB1mvtPoD88Vh2qfSxZwL9m5ANBDgTNNtmtZxeYZuaC6ze",
  "key1": "JioAoyStsbg1pQjZfv9tCZMYmvoeryY7TUDTTyYCxpUq6NMjZogAz4wLNUtbXw4PxzVnP5gVEcvFoxjxte5T9ve",
  "key2": "3j8AWPbKXS8rpcUy9pw8JKeW8B6PwiVjf5q8mK26LRJk6F8enG1rQqAmLRDscnNtnCT4zGwfgPjbFPe1gE1s8dij",
  "key3": "LZvba6rsVUwsW34LQTFs5LjLs9grG6tEbDzdaffT4cEadM9H7pcMfjqWXxPp88vue6Z7hbh2dg2dBfg6bbdgchc",
  "key4": "59xDMhGEkedX9kWNLQYfj17USgdjhFCpDeoyAvo4ghWVBtn9HKdhorqYXMpGc8ZPA9J7UZhnJNokwDCL5B4sivfa",
  "key5": "ScEdxoT5r5SjW8wWd3Ryyn1YZkcrd3fyhS1VENDEKwDLKmgMSBZiEwPsaTwoU2uTX5tA8kpZ1GMg9iWQJLa33xm",
  "key6": "28Zhbkpo4FQ9FSpKeDRKe42BAnUhybjAnmzBLXV5dcmteYvEQBbL4r6FBitJ8oDAWPDhYNEYprp3NgyFjovytPrq",
  "key7": "44QESmGqKyBaKXgYxgKXe92KduURb7k4atgKgVq1F4HfKDhRUpYPAt5Gs1eTyFnZM3Ty6DfGnyJVHRHKBTeZqxpW",
  "key8": "h9TReBQfXi9kUfiJhCYp38R9pHiSQdv2nj5qAGaUgUxynWyjdqr5EgzBZ5n2Qr9TYZUv5n2j8nHA54iiD1Jcr1Z",
  "key9": "22tdaoeQ1MVqLTXwnR22QTZXg7D8xFhZDq2zmsvWh2VaKGWAynCeMLnDYd5fHQorHExK32tnCTk6u7CDvCVvenwM",
  "key10": "3UNEvkd4DYiNhSksTo8Art1nbe3bqyXh6W3D18BWpqe6cmSytVcL9UVNvqLiU5L4hP7CLq1pZsLuQ8AgNdkJ2gjA",
  "key11": "52Fx5CPe7AVyQxQjNDyYp8Vnmhk8fMEMq5M5wScViLMiwoMLynxiny3WZnBhej7ESEYpojNYm1TmMZCYUasCeVov",
  "key12": "4PGfbPLd7o5cAiFpTfCjZGvYxk7MCZQxe4xLco3ZiexUH4M35BkaoRSSAeDH7hxuKNTjjWK37E7A8Eb9qtnRy1Xo",
  "key13": "4SN8fMudzvgjY5Rsbw4d6MitQvm1KFh7zs2ingrUWZkcwu4uZZFgyQy4riN6kRMwbwSZ2dHfXkPa6qjnTQmEBhTJ",
  "key14": "5qWeiXC7iHdgmHBZz76aKwkWzZP8FoP3rwGfZqGih8SqrY1iXcZc39AFJyv6iPvtvmWoy1AUVeiPxf5rdy9T8dii",
  "key15": "3v58EKwhMk29g5ccpkva39cKm97LTD6RALqyCq6FUAiDT6ZMjhYNFMG75GVaZHeVfobgtU1PAyYNY8iKmpYrNCjx",
  "key16": "428EaQkqRCJpHeUFm9v7YyEh893rWuq4L3uGRbcfEiCi1BrUs4bypy2LH1pwj6JmYqpBG34SXyk6fyfk1LqMGuC7",
  "key17": "3519ovz3C3ZjJ5eQMCCVtPF6cTpE9p6aUAsx7akUqdS6p3DHYczgpgXP4FMsqKWsLb3gr2Rg8icxEXio4q45pLDf",
  "key18": "MxqSKC59Ne2pCKhGEkt7KQEWu5vh67aUL4KZLwrPxumsyj9mGLFLRsRynSLhc4MkRnRG8tfpEsbsXJmvpPQZJcW",
  "key19": "61qX2wZrprBGcZEbehkkBqbfXkaWB2QReDX7PCJxB7bLUQQUY8WJyFMayCdFXzqZYF1tohb9ycDmdyYuiCcuyZnW",
  "key20": "33pMk2DVYQZDdjZGMUzM4EUWPjQLxAEARYX4Wqz18FQnk61XWzGFpQtSv8iPKQS27KSHsx4jZV9Mv26zPD9GsNm7",
  "key21": "4vRHHDqUkQantYBYTn1o8MLRZbUrJ3HhL49UwjcLSgcmbieSJb3DDMW325RbdAwf4nsRxhSYzBpq1GCkeKGKUPR7",
  "key22": "53feVVLiW4fyRCxU6u9bAWtNZXr6J2gUGYRJKzcQoQAngv9A4amuwow9zQQhWaNCa8ndeyrFY1NGakbaXhT6V7T3",
  "key23": "MEw4wVmLGFCpYtryUsPWKpDMTbxSLq6PRQ3Ld5vGq8biaJVFc4yQvXN13umYGxicrKEMdfD8A73i1JWT46R6LUT",
  "key24": "3aXBkx4vh85QfejzUTdbyLA7GX7bFDMcH1EYasQ5fv8vwhM9o147eiuDp81qUuRHBfEgnQKFQKa8949hH3Mntp9R",
  "key25": "33tZnLxHod3m9Rui7eVHvDASobVbviuKFUdLRPrViWHPeubyzVELeyuwBd6V58nRt4p3Guw62995kkcXs23R1L22",
  "key26": "4MADCK2m38U3qTcsJ5V1ceUPEZLHMLejUmRhz42TaADvaLZfkuxHZTJ7AB6WraGv94g4nswVkAEUxc8WDVy8exJW",
  "key27": "56QuJ2ji6JKvEn6Mwk47K6icn7TtcEcBvd3GEs6zFJxCBqE2UmKe7gq7fiQ3gcCcr3a8tcJUomArRjgSewznYini",
  "key28": "zVJrFRV3FkAGqqkdgDwQ5uap8pHpFHoAV6pbVGfvCGSeL8VJvyzcpwZQb3Pd1cqRBDU3FFikb3u25ZqiZtxyzqB",
  "key29": "4MtT6CijTV5eqWLRjfr3r5ewnxz9LrLzC6QiXaMc5UEx2xWoJA42v3frsDTs9Y7fM7bGyLJVE3ES8LKUVzKgTbwv",
  "key30": "2yDEg5zYT39mKDSL6xjFoVN9vHDNThMsLUx2Df6tzRUX1emLjVEZMcryFUiRJRk37frVeFyCSYqdG4tZQ3UqFJ5k",
  "key31": "51YvjkKsje7uu2tRNE3UxdsqSFQPSNEAJpdqrS1rZhhBALQRuhLzTKQ1gJnpW1k1cd4zWN51baPAdYj2JeD8Tgjn",
  "key32": "5LVzFNrx6vHNHiFVFUQ6o89AjvniFtHe8hgsu7xGVjy6oV4iyxuGPeEwkCL4YMM5bju94A17jYRM5KWpCr248AR8",
  "key33": "5d17zqK1yGDN7vG1AxmCA8JSLoujh43sZf3mYNsBVUj7LMsjbgmQAaSWjJjbTr7nAGKtfndDAeB7TMhxY9bRGhZE",
  "key34": "4wi3hkhKjZ54DiBW53RH9EyQbSCghMPk1PRhQgfkVsFcyXAG8PGdRjB7uwkBnvA9qiQeMTEytbCUR5Sya83Q3vps",
  "key35": "24KbLiaZXK1ftUPdcu9ndGXN3zV75xqfteQ6ZB5hCYcE6sJ9bRcRxeqbi9gWQLq4n7o7JWqNTqDAfkbQMr5GbFo6",
  "key36": "3ohwjXzVGxvsH32Er42TFupEmdx73JuSt2YDaLupS19dafbhNRhpy97rCS9A4cQzte6JUvkUK8ie3JfkJHtrrTVP",
  "key37": "2AhsSFcQixg9WKWXAgA2obD7F1pMsgkswTHUcUcsAzsqvgxpDyi42Vmwi8s2dBpwSZdVFHEcUGMsiQK7VGaJNbFf",
  "key38": "2xUrk99tvhMbsf4qRt8UTKRJXTZKobKceRq5WsJAdvFeY15nn3YdRCH6g1K1MRhsTFLyPLv8TH3iiWCYnYnyAeZj",
  "key39": "33c49bDnn7KP2yBxhog6at41TaVBBZe969Q32ZuxafRWK5bY9pHjZkKDZY27KNjnA57UANqS6Te9WGMK5yGoVawi"
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
