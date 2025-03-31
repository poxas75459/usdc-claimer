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
    "2tTtnRpkeo3XKLHchcggZVtJ6Spj97Wfm3WbWfS6vyQ2aNWBrvTqk6ZuzQgUJzcgBRPoYHoxqK4RbNNdXiHWpxVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Byg9k7j6NYKVttMkYChEWMZC8HAx2HAw3kLsnXnt2d9ENNy5v862H7WWL3qUDRdFUmkS3ZbfGtAwGj5G9eZP2Dx",
  "key1": "3foXdTdainP1aDGQeWoGTi5hjVxtzJ1viiCBdeuN8Mv4CJqs5RQr9cU3KGsV6VDyhoPXqLEy61HUrmLCQ56P2YAk",
  "key2": "3tA2A9FYE1MUM9Pv4m3RBBnjz7d9Fqe4DmJKo1m9E4f2vywbZuEMBz3bUq9jqjQytUtywh3nthXBiYcJfkc4L6c6",
  "key3": "3Sei1qMR9TYox5pBZvBL8vY8qNJSukg5M9Tc1JvKWAUZNvqkLEM4sZNoodYseYMebPhuVeZNLwd56WuqsAdL3ZQ4",
  "key4": "58YBDXKjzCe55UGq9x39gjNrj1Q26tyHc5snhyYeq54wB4rCxYDWdzhvExSi5saqHjKSBYJyxMNrGMWiQ8kSr8aY",
  "key5": "YN59avxuxc3pB5vkHoLTfvg8ehUHkFtQ6HNkwgEjUm6DZoCF97gmGHBf3aD5D8295fR4g9hpChYPUJdCkve2Dnj",
  "key6": "5PBz53w2pxoTxKXTqbgeZVRqcskWhXiYxpr7hEkdts71zcF8K4MSq5h7p5ucdRx9oims3GsTnokrrmMyArDQhkpw",
  "key7": "5Gdbue5VBbpVKtfC6WqzJpf6VAPuYqHyKKK9NccLFYng5txj216vGvZiBWsh3GSAHkGZNQbWD1k2MokV4kPcvg8L",
  "key8": "9WLu4jfdk83nrNVcy4fCKdNBpUsFKkuMhoaDw6B6FiyZqRiFWjxwC3HPKBzEihw9J4Zfh1YfeZzREmGdJVHztE3",
  "key9": "4fo9wo7uxYw2QLCXs4peoeAD4beZhBs8gEhNE89keGDaYN6DazMs2jfbq8LTRxZDB1h8dchvJLwgryeymPLDxQyc",
  "key10": "VVgPA7eXLpqnTK84we3VrjNdN1yZgZcx86zFHPtwfqd2a3bspAgnwMAC92hPWggMjgKFAezryvEV2WaCikJM4kz",
  "key11": "5td8oBVnXYuWyCTbT4qSEmToKdUTtwHteVy4nDzcyUmi2saJVRyx4dKAXD4piYkMp1fWfR7zNNfwQmQ1xXc6jk5K",
  "key12": "5kqevZCf4FuYqrQzkx51Z4HehsMZrChsE1WyWJZRNvHLehjtbNYvRJUGBDGGxrKS84y3NaGF5XmzqqVKsjQRLNwD",
  "key13": "9kxnVHTXGM8g3AED31mXak6gJbZspxoJqicPj31pMnettPmVD8UyYUYDGYodadzbHez5KKhWKoAHmNuf3Nyowu9",
  "key14": "5MPorD5f56mZKgt7E3KwrdJ7Rq3zHi6upzvLZRyK29YsfHuvZ3HAN8fhfnbZXzPxFUEYNUrWpckRL7GzfeaDvj2T",
  "key15": "2TomyV2KFSDZtk3PstXFpnP97srHuM3M7sW9YPzMWRWme9wzu257f6kbVocenzAcAjH9L4ekBbfVrScLDcoZWHUC",
  "key16": "4JDRPKUapUocHi54YY2z64SNZhANRzJzLLpWF7F4RgDC5Wa9WFYuTps4D2UtoM1f2rTyvCHoHQ8p7qyF9eTDKccK",
  "key17": "aBMS558MaNwGQJXYK1cK9tYWTS1zekrbFJVVtvwpFDWPWbBTLacFSHAz2zuVtmwjRbXYnoYWHgydMqeXnVc6eTq",
  "key18": "663uH739kowysdVqNktEJVi1Ko8Nhzvsvb8xMP8usbyinVrKmtNp5F34Zu2fc41mGUPpQRq3VeiV5PqDW54L8hLi",
  "key19": "4kdmVus3MU544UHMo9v9THiQ61mdmroE2qs3PkWGiDHxY4wGe7PzhEHZKbg1oqreNWTr9LFVa4xwKp2aFn7UTA88",
  "key20": "TXZQ69gKrBnEVWfA5WsA6jBxkcorS1aPpNjFDM8QaMhMGrWNxCVpYzLWtCTYeD5Qa9KbnNNFYnN3WNVNZVDEmFG",
  "key21": "Hd11GBoYWhUxaTPVZYD7GKmniHSR29rKUGt25JaZMUE3U2Tv37Hkg9sdeqZyJEvPQfL7WyguRShaWiaifGiHYDe",
  "key22": "22dBAw5t87nASqWiwxhvyGMoRw3DkB953zZ5pXMLugvCdrQGjV4ZjbKkePmx8pPGWLD23zBVHdttkn8J71L1jgWg",
  "key23": "4WBwjWd6yrvotiTQGEDXSTFkqhEeV9wC5guugrqSVLFkpnqonpHDTGc7DeTjafebu5sSiCK5Z7HivomPL7GG9MW6",
  "key24": "3nimRUgr5RdmY69aABRrfkMpuavgWoWgeKm6kvnRHRhFCtdmbiBmYGr2omKpsdKXnApdfCQoZdmX8fcPqpSPG3Wo",
  "key25": "2GAmTrnobe2WCxtodVCx9pz3v9oVt36AeRybKmL6ZpuYqePCt9bt3AvmJDUkyjNYJAk5mK9AtTXfV2XzMhZuwbMT",
  "key26": "3sUmCwKSzi1KqPrJio2kTbwhMXEUkGQEjuad6Ax3ZiQAiEb5uzmihG5rkkpxTSNnZNwEkLgfqTGNXKdJx2goiCXR",
  "key27": "2tpS3YpXZTnBTnPDNtvCAfr42ZH3z7MHqkXQ9PMUKRHbEEN6EB3tJhehdrCqbnACqgxX3Aav5UUPkNuqmmnpFGEj",
  "key28": "5wmJ21sHi8hi6Wg4roWiBs1nPkN3u35VJtfMi7QPwkNbpnRkLNnJ137emfCHX9PMyAhSPbrXGpE9c9CQ8oVEcuXd",
  "key29": "2ryHejzJyxaM4osi64rzV9S5SM7gwryJ4i1FUA97QKMLZxqYZdER7ApV5GyyUNF3KDYKmfFXszUQt4DPWgapFjX3",
  "key30": "24PRJk7R7MMkf8VA4XZhEu8Q2NXExRrBV7yCbBvBQP7JAhCkvL4n7cUXg1E4dQgEQYPEQKdNdjQ7gibDoH21T5KK",
  "key31": "5GYAiKBemDn932fptkmU4Zs8gPrHj7XS65X12aEoK9y5BFgK8ZXhW6Ugd2Ku8cFx8h6zMN9839P5ofwRRnExWo4V",
  "key32": "4BMYtmRvQeysZTnrcpBnpZLY8w1DEaALFFeHMMuu42BM7H78BnLus2yyWr8DXwzzmLSQEZaqv5CLjJwquXTtTRDY",
  "key33": "5Mj5JdptAJKCD32kTamdhCHAT4SpxspPU2rSTJvPrj6bfqxFUezyyhWqMKJ21cT2tFtVsJ8ia7cjKCHWuVMLsuBa",
  "key34": "4yZU4BdSYuXqyxDYdz7CTh8G5neFFpsNmPWUknsiTBENMVAhoZE4R2SrddwbXPytEAPQuoLkM44y7DBDCLUCY574",
  "key35": "4Zpq4WttEk1boXHnpt48YcjZeWro5D6hhQZkQTqhUNV99tfkxqDKfJg1SUWZ9XzboctXuZvZzcACjPUqTBibvTNM",
  "key36": "4zGWhALdGUZfs78X6Pwvu2TP9UR77c2obFeKSkz1dgdLEEpag7A1qYRVr1cAC1gzSwwypxx2rZF8HbiZhqiLXEAb",
  "key37": "44LWgsVkjm6cAi2is2dWPYNbEJthJ1meapRawq58TJzqX6pwh7JmiN6kCvJ2vfVr5WavnnfuLDDUKs98SmhZuTit",
  "key38": "3tv7Bkgqja6vikcBXW6QTDLRA415jKGgDpELxX4AdWG5CSwAq9wRHQtmDqDsHZqasNnaDXDEuavhEXALVRgiM6Gy",
  "key39": "5TnRxt5pMdZEqjKv5LyKX3PtGH8VsfUZ5n8fw6jsbA9xR8vo1WjPbnuMiHWWdUdo8bTADz8REAgSqVm4hwHhCcSy",
  "key40": "9yUykiDxbmU6mqK8i3pmMTQVrAgD5zD46MewntaoM3uMs8DrKzvN6dEDsgkNYbGxgie8A9PUVroMcsAq8tD1DoG",
  "key41": "5h5krdALhCKzvEtDwkDwzPdshe5YQwvViMCU6izgFEjC1aWmihzxGfxmWUyBRymUqhRaFfgByAX9A34Mr2QQH8VX",
  "key42": "2e4X2kUF2R9ZSZQnq8ChG2hnjwZiKp4ePxHNWxwUTF6ySPGcH5MjeGtHmaWJsH2E56RNj1LJxkkqzzT3pBPmMGBc",
  "key43": "5LMxtnfY971XvUZed7ToKsddmm6psr4yPxtuWc7fZPsreEPkYyKu8Xkcn1yMqfjzKyvb5QRhv44UMgBQVXUuZuZD",
  "key44": "5N6Yy9Bn1fhTEmgtuAMjipVYPpUAqqWq1Nn2iVNQXkv2hDgUcFEDioKKhccCvW7DJxQfZoZEdL2GGWzvLGTPsutZ",
  "key45": "2oYk9TzTENaLSwFfbG1Nx7nXDT2dfCuJHw1EMAJM24dHaLBpgmSKtWZYDvLcsWTtCF1ELVRu5x4ihFk9A3wmWrkV",
  "key46": "2BwRkv4LpJgDLPz7FBKENq3oqhfcYyUV1LZBgZdJurkuDMc6QqYFFrT8zd3sPi2LzLRHZUjPckrKoKbwMZ4MBTiw",
  "key47": "4nqb4kXHiFdqX2psG2s3PPk8hXyqF8D4JtzQ74yzKcMDN763Yqssia7fBmaUvWDbqwSxgVo5SE5y8UH3wpS2nEce"
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
