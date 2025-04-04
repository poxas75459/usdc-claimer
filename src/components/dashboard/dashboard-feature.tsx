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
    "4xLPUgwbrnkotS2QRi9AHPu86R2DVxBve7PjmUNqQUwaZbf6tYJZ9MWR3xiTVGySmL3uBjVdqesGY7p2Drahn2qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "591PNcJVMLcxBZgCL77q1B9BSdHv14rqn57gUu4nC6q6Rdnw5JrfH5pZUJ1U6sZdY1W9jj1BMwkNe8Pg2HBxv3CF",
  "key1": "2XxQUGEsSnP4Sne37ZSBDBjMPh2f5zm1t983tCWzWfKECQ389JpZ8uoSWWTJgomJr1QbZ4sqaJd581u8DJrLeyyR",
  "key2": "4qAr5X5HBeXqAsXpnaDNYdGMjyfTCbWfXqAuu67Eg9mtGwbyQkZqPNdUi5KSdXNidoYhzpWmRt3DmUPBfNhGfB6B",
  "key3": "5jNRsbXgg2KZ6cbLrsHYmz4E1vqBQoTQJbBswMmt5Mh6VrPsTnhaPAZ113aaDQRQtj5uWpra34wE8Tc1hnJny5QA",
  "key4": "24QpuueDy9geuPLhQNLR7n4nHhTzkS3NiJkTfmfdqCy8zX3mAdg3H92ec1tEmM371gQ2KBreuq5vPeoVQ31EPQKw",
  "key5": "2m4GqjehqjVPnXTkWZqoauu7aU3YVAhrtWKhQFJ1L6ocR1trFP3N86XxsNrYAS39fpkG3E5yfggZ9Ypyh7tYunAa",
  "key6": "3bN2hz4yYWBiG5wqssBrfxhdVycC4cCyxNtMHQXia5tX8UpA1Df4GHUWUxmcmbs1PFZvtDkjJ5KLBBzkhnphknpj",
  "key7": "5uMSvmJdHUM7sJxacb14wSUqnbQkM9dRhcSLWhuLgG1BaLar5MaM5JGgvQWCqBYUdB2DAMqb5puJRuxCLEmhnig8",
  "key8": "3i34VdtVeUPV2UU7m5PKJ9tvHYnfMkVQjfgPA5u7HZ8n8oaXKLjvm2GsXiv3QEYZ8q4BKbVbQJJywkseugGscDeD",
  "key9": "2PUyL5bV7nL6piU2ouFtpPJno6N5aYP5gpHoq9iEEYJHK62P9DpLQDCTD6Fi2xFRxYCCh7Y9qLPkyKbi3EcrVp2n",
  "key10": "2tZBFS9KoicRMgeh1fqz4TuAbDuKa3W1vCzBo3bThvimLnmZj1NTZrZbcQ2XzBAD71sHHR6oei3JNQBp1WGbpvfX",
  "key11": "5iKYhUnhdT1aRZpPRKg8Di9pztdpfMp3b9CJAmrLS3zM3Kk2QyDD4aXGCCK9LjavRVTyi6K3dQ1AxssGbrYQ97PR",
  "key12": "4G2g2yEj9MDQPt3piraSWeR3QeN5UTMGSkKKTjFb8v5KeUWP51wBPbv1pyJFMxuP2TgUurYbhj27XQeHf9uPWfL9",
  "key13": "2zVfycxmcxEYu8oCSNUEFcBiL2kNoMUXisr12KTmGfK513on8aftauWbnX66jTEWqaGnyzTfqkiEaZemNhdLBP7M",
  "key14": "2bU18uvJXbKSRat3kUqn9GgiHSm2VQQAyWEwRFPTcrFo5KrfT7qdoTMDtmL8oFBmZ78y85kefVBaEtSD2MhM7cEj",
  "key15": "2aCBygVtNeTuVRyz9ngpCBvPaUcQwHxZHwdLUDMGyjt6FtTd5WBtUaHoA1wNJf6fvBo6wThzgFs2BkGRTfbn4W62",
  "key16": "2HqgBadixuAh4AQetfHLx8RUbqXNRYnePxKZk2t5YLieWqQrZv48TcMQmRbkrUiNrzG8vJQDMQLWB6kLLpVEojS2",
  "key17": "4Li4wHJeZgaQAY9zY4pzdrU5seb2er2XkbauP1iJSdxJtrtaXCEC2f88KJXKaPXn1Tu4tUuKKysyZHeazej38QVC",
  "key18": "4Ays8BuvoNPexu9E8BpuXwNJ724RJdZi2JmTaxVD1fK7EqXNcYrXmTd2AoTTjoB2yfKETUveDuSisVuZ86hgEg9Z",
  "key19": "4MPqBN6UY4Zr5DxjXceqccojecHnm7E1LUdk6kZd2MY9b2cxC2Ew12wRAABftvV8srRzt7m2W2Eac1iRkc5VZq6G",
  "key20": "2RFcJXNCx6VUm8C9rq8fNJPrxx6poKY7qQxwMdBEpP4H7ewtaLTz1TumuCbow7HBiDAT1oFUj8JWYZQpzCHzkgWq",
  "key21": "4chfWz6HbDCQpEz6cJWroJiStQBEJoi8n4KHtqM8bEASGV4b6QoYVrSTt9k39geu2NDWTX9ZDZz9CVk6N9jiCMH8",
  "key22": "3kwf5igQ79H8NCxTjLgue4Pi8JH5c6W3VqoEaAhWwgPZVsrZbPBmKGznqE4fAWYjq1fc9nVjNqDv3ZQCT71a8fgG",
  "key23": "3DVSvXdcaSyUUp4Uzcu9sEm6MmBnewWYQ6VRKHPg8VEcXABEcXLgfT86r1rNScTHdVDyAeYdxKoanLjkcerRg9V7",
  "key24": "icRNDchNUYHNmJBEo2iHg7PFgc51L8dT6KBE95THdgjoKzZCGJ1gVjeKnxAxqg7btEfAH2wBDBmMzYgR4r93ijB",
  "key25": "5uqh3HTgCUGV3opu8TEf5hHcMvGZnGJnVxS5krjkuxFnggP3zYErp8ec15FGbNGzkS1GVESpEaYkekMQBLkJKF4n",
  "key26": "ifWjBbY8PY24W16b1p8HuG2zF8VEATLeR3uN5LU7mHoXAwZiRQLbL5q5HGhf8GExgpjNiZueJi7wrdcZpwrvvwE",
  "key27": "4LG4jB7sNSe6EnS7C5iWHuWNJfVdkLvmyRowA2eE7BHgGh4Fe1NDfTHSxwSuJnDJopCBwEFSswa9AT4vzwfeBujM",
  "key28": "3p4RMcTbXR9d9qYGitm4MyQznNqbg1SmwHhghEjudj2xHPj36mK87xjxPHq9TGswDazn4xjH9qhZru2VFXNVjHjK",
  "key29": "3Uu3gRJjndAdn5HdfWNfyrXNS1eBJkw9sLGK8gok9iJGDXzi7K67CyHLyStLM5gVFiWXFezUnAT4pkzQ4nGAACN4",
  "key30": "5uYUk1VybPMztnBFR4KDzM63Esakbp5MMFZSDfMBo9xp2kTfdjMvMExZstnNukREA4rJfgrA8QBXzC78ssFWHGks",
  "key31": "3YHB8XYTSiuMQUft5cXPbNXzr11c8HyfSe3hu5wFMULpKBzp1RHoP9tT448Q71EatNK3U7TsM8cbtqLqUPgyLadj",
  "key32": "59JSiZVDccydHv7mtgtJWGWRPnamkGCwEPSkc7MbnPbkvGoPVYreTan3oC3KVp4YfbTQkGMojdzbZFRZNYJRABnu",
  "key33": "3ov4VzG1wTMu4ZsBB2jyNGWoCF7QS8ZZyb5Vrm2oCKKHuKWigNdroc3NRJ2MYtYvdsEmgiPiSFnbVj5i8hegA8B7",
  "key34": "hbZZkLpkE8vMwjRYBD228MwSAJX8qGTkXvwLZcRUsCrWBNjV5pCHexGKnSpD4RyNEfTehV1Q6p2xH25XnpTDva4",
  "key35": "2WMfG2AwrAk2Hb3yc2LuSqfyR2S7znKx4fJs8LG1C6x8zuZLubYZGoiFfwA8W7iD93YatNTC4hFPPWUjPhMNbwX3",
  "key36": "4zSomoDhYxksf5mvgXrL9B81oqXzbNQtoKWAmAtcfAyfV3QRoQXMLCZ8YEjvVQYq68Jbb6bWNJqMqEGTrJ1Zz6nZ",
  "key37": "3r47YBqXyx5hc2c2h3z57FVfusXuD5rJ9qsPnMvyBGLTSWe1WgpURFNmBawNm1RWGnppxqr6rV7JN7YMs5FpU7jT",
  "key38": "5a4uJ2RJnsrQeZqpP1vciUMEWt9Suw2kRd25ZxZDv2dw3bWegUfEPZwSBM26v7osZWctxbLn1FPaVDbZqtbRZk9H",
  "key39": "5rZrf86gR25M922bWyQicyBPVzQWZrEobHwcTszTdMiegKefQtvxYgrixxtefjD6qAMGfK9mSkZKrohDZhwGoAX4",
  "key40": "2jnyFG5nhZJtsccR2x2nr2pKCKucPZstJq2uz4fjSNCQZvd3RL3ypcPtwh46NZZ1KZ7A2hZBtDBgZCaLrk7t56dS",
  "key41": "5Vuak3VTqZXjekKVtXfN2i33mvUyZvzQWN3nco5oDENUxvhdGbUBoEWkv7vweg36see7Ci6k9gnA4hM3fV9hx4YX",
  "key42": "3GfNerqe57ncS8MCiC2aE7g2nzC2jPVShDMCNgQd8DmZMSMNMii2UZrVo9itB64XCkHFNSHwwTNqaXW3Hjh6Kbe8",
  "key43": "2ZaYZANyPNeUZp6x4NHN6GxoqzK3cTVKyzrXDTBE3aqfgQ2SVfS7xAXXHvAyBeosB4CMyMFnqxfkaetKfWY6tSoP",
  "key44": "2PH3fGvfasLdg38kp8VxPp37rVZn8z7PUXuTrUJfJHnPuS7gXouxLNAC4YNtSeRtscGKh8BFZstC4G5NawP8UCaE",
  "key45": "4JS2VpkRJyQ5PpCxq7i89FZK8zA1JfouwZGRKKaTHuBjidwjFfjJXoyFgcyDCdxKn49EbgPBF595128BmZ8MLhRL",
  "key46": "4gHwasYo432gf2EabTzgvs9KRh1T5nLrRsbNV9zp8Cs2fhSxzLf81Wsp5L6Xc31zs8qsuFzUixKBWfYYZ8utYRpC"
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
