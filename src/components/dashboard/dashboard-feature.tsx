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
    "iWeTVbVVouAr37JrAA5AiB7UUBQUkQktWJ8Me262V9TtoKAgt8XJoCoqoaU4jVFTwKie72a2tWbrcdg8y6bNBD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rgdyBjFg4SLbKrAERqbWs374eTtebAmJw8yjQ2rR2hyyJ3nFmsHv9Rz3aucU9zZPJ66KDFtfFzZ9xS18UMTNd93",
  "key1": "554uN8CGPVxfuDuqSQuC28b9N2jWd55QHj9qJK44Lxt2HwuxpsxVmCP7JAmf1xUFJ6kiJwcK71HJDBowJW9eudjm",
  "key2": "4iDtsz5tSKKCozNKuEsjtp2CQ5CBDzEgwWADWqTtEXMGFwR9oqXspFufDDJq4kmuPti6NZ2dq52Az9oUGcGMSFGe",
  "key3": "5nQQ4BKeR4x1c9EHPXrhE8v6JAAWMsQAX8AQugqb65RRA5wfionyyy5c513TiWPjhZHfMrwqagC3xRAvUbop6Rfh",
  "key4": "2ZC3PaQ2i6948TZNJU1KCzZiJczESor2eWuQHnE53PWAvV4LNNJNGBYH5se1oxvqL4XDhKhZ8YxtrBWgprcpoHBA",
  "key5": "5PYr2wWN5Eyb5ARfB6QWsgLRY66AN63GwXoau53Ht8oy8vzbbP8ngn5Z2VPN6ErQpPTErcZ74b94j6HKDvB94nY3",
  "key6": "2cmGiFhYPwBCodrGduX9gV9GZHsP1uzLdANpXpuLa17jkYLGEy13Yb7iRbYzbUfCLAEJutQ4Rm7zQdTJYXSrB38R",
  "key7": "sm9edeDqBGwBEC3gA9epebr94MEbRMoqf9qDNSCf1CLsmd1UUsajFM9tLmupCHG2UMGTt5Z1KhmoEhHzhiRaMLu",
  "key8": "17aHMXgZowrKyCjozw1Gc6nQeWDFUgPCsRHXcTafx9CazspntwnHFc9FJ2XhYPtPwFnLYmEY8zbowh655JiNGqm",
  "key9": "5aqMaFNFhBPVcoy2JQETy8xKpo1TXHz9PLa9bdYKPVTkrD1hgmebFpUhULFk84vSDZvEEQAudpBP7zECaho8JxLS",
  "key10": "3P8bbH4cKqQeXymhmj46RcTLLP6hPHgPcTpCLNBmGhYW1uLQdVapYmJGfQiLnRJDp3wa8vBeTSLLwq3BEpAkFGUk",
  "key11": "62zpnJ2efYU9ngcwcf2bzCMcxwsjEBdWGtkBoNwetYWhG9r2W488V65QczS4K8EYQmqdW3UbPyBMGYd8edcmCaVT",
  "key12": "51aNwXyEB777QUgNpyHajstR4X3oaYNfUqLTe5jJAciBJcXRahmvxF2LPvS6XzK8HQvnoRsi28LmTGTaM2MgLRha",
  "key13": "4hmgMVm4UBwRykUbWUYg272Kiqj52d3Dry4xUB1xf1Zy7o6ZCXxXAMBui1krdhkmoo3ubPxW4SYox5Mm8yWH54am",
  "key14": "4YfwhfaZqNXFoSuQRqiuRc9A668xXKwvfXbSZWepXz2xzywRQvCfWnjrFSSZbZKBhcCqhFD3ZWQ8euTQcwFcZP7o",
  "key15": "4nQ5R7kzVZcuHosrR9j1R6vU5WwonyJjiRkSqZohnCc8N2fuNCspT4Krj1dQhNEKak35Paoxws5mmb4WGNzLEVJn",
  "key16": "2WqwNFN6QXS3z6bxeErPPtFLVbcz4TpqL4gRYHFbZSyFj5csYJRiXuYgu5MQJKCmsNcJmkJBsmn2vNKrhgsiM5Kq",
  "key17": "a43WJNdreCN63tzm2P8tWAGkVi7BsDhvwwXtqet7J9792SxY7iDDCcSNeCAG3e5ZVama9Gss8Hge3DftFJYyGvC",
  "key18": "2kZjx5avCXFRCppQSpGuPMq9pjc1n7bgorw5rJDVGFmoc7FQwbf6MV49PK9LYihV5Tdy8NHqrxCGdw4DuwxN4GxF",
  "key19": "4YiVP1jDSUogcdGi3RJ96kFZK8iz75MczV8EMPW88ejPUdfDhKgM7nXZ2tdrZ4SNEerreSiCSx955GAwn9K7sPeA",
  "key20": "2rj4e4WEGTWnBakfkbrwhmaak6Cn7ivUGuEk8Ww8Lzq1YLaBSGS681k9LVwu1HW3uDNocukDiwHXLfgJ7oaHBvK6",
  "key21": "4AckygSsz14HMJbomcSefsWJmLqvMcELKKNpqeP75qxZEJC7EZdVpbcg6UAhUvFKjTBxk6tYJMCHqsixGDGHNh9u",
  "key22": "DsSqZMoD94FfAF1TdoRDePXEDiBGSaEb8GEWwdVehHSEJaCYEWU1CU6g9E8gLZRjzUAgkmLRDPrrTee3rsbcgLg",
  "key23": "3P5SJ4Z2Umpo77vSeFVNxSaVhoViohp56ZGArRui7MB9jHbqPD8j9jR7cRUut2KBfrmHQiiatezo1k7S8gDr5Av",
  "key24": "CNYuFUZh6BPhSWSNEd1dmyg4U2i9LmH7BfUitrUx6jjzm9DFc67PQ8u5PwHyUTDPR47zVjRGQvSeWoxg4MX2Tgg",
  "key25": "4wEo2UzwCiSCaPZpcam7oWNuiHa2kzidBcb4kbyiKePdqqeYMFST5mP4ebmF1HBtVF5ynThsXh9sKSJw6YzTSMxn",
  "key26": "4sAcYBfSD6J3an1jUYHVHb3wUQDdHw1FYRbrg4C3Pia24jFTvb53z9cJzoit9KPZEfaxh3EWPyfwrbispXFyARDK",
  "key27": "2nM4VvY6im6GvnqNqQk2Y8zNRVAcVZm6F3Hhj9Fsce6HUjyGufNdbcFCwA7LPdj3s29oHhYomDssYjYjzSTL4EtN",
  "key28": "389pEKJtSFynrsC7Qob5MoXtXAEZyx28RJV7TrswZWZXLxqzsuDqSDdTUZJHQfcc3opZ8rxhwRKUEnLkfgYhQZNR",
  "key29": "5t4bJGauJEXo4dmpxatP842A4j8dmp5RUqCzNbRRF14ALMrvhgK9ksD1riWcJ5jUirwckqJJ853zZJYtkYmA3ouu",
  "key30": "kBfdZZy4JKYKgyLTaR9Su4AjAnqZJV49GrxDsYxwxdLyg6tfpfbWcPEXbEqfghhy68fEQHW3GghfWZrMK4KbMzh",
  "key31": "5YWi6AjXV4kd1SaVyvX92iR4R1TdB6zzCBCyrEMCTTLyRVJ2LBqH1yEp1RnFNuzhXvmBidNqHMD5hVcCahdZRZAZ",
  "key32": "4qkpv9tpv2K1ugs9ftYe4FcPjraVpRpX9dPYYHDxfezjtxds2NAqYVbc5NjuzLZ2maRGabDDSpdKyJ5YmtT8Zezu",
  "key33": "5MqMVF3Y7shaVu88uUTPaTQs4mai9yYqDMHn7DexBvatqMDuuaLP15eACokck3siSq7xhA8kAzy4jw5wn4rP459r",
  "key34": "2YPRe1na72AwVxjzYVPY6p4apmwkayJe1fhUpZHpfaxbrWGvyDEt3PfQEhEByhuQBVvD9F97zLdZs81FqH7iia6j",
  "key35": "3UUdL17UUjBi4JDXvURHd8VzaPuVdMWumeabdCMk7D7Z3zsWM1LGK3KMmvN5eYnmD5XkyXzsn7uAzq2YvBRAWyrM",
  "key36": "2m44u4R6aTrMWL8FG31MPSJo3uzsVBpksxPxGS76aV8N9AMRT8a9UyVomtMo1x9YBBBtuhxFmcZUgVt3yB24xRQs",
  "key37": "2VmxoEebbptj8StE98JvLb44Yuaf1T32uR8F6qnzupBJdXbU7sAQfdWagQsiiXjmzw5B3JNRm2Srcq6dHSGM95N9",
  "key38": "2MCkNkBttrmakzsp6FcQPYGitic4cf46Xg9q1FxaoLhR2m1sj1Q4C9nw5t9g2eZm5A2BmpyKHazv638r8efdjLuK",
  "key39": "36RTh3WvnALo2GxRZcnDzayEVsxGyiFUe19mHCNmNhAPqzdSMgSBJEjeyJ8PPa6DdWPUE5Di9c3pGShtJTsWXHg8",
  "key40": "5rQ2WP7tr7U5ykhFVQbYSBuUmMNMPT81Y95B2CL4LtJPCuwWVVwrRLFTcu1B7iXYtSCV6EuRgRULuWhEuKwiejpX",
  "key41": "65tyoKL8ddDkTFrWDAG1xGVukw3SohDajg9XJNfU4kfM6A5s4qEmoTu4PwY3ihpF2a1xVetkqr6gnmnAZAi7QhKC",
  "key42": "Da9LdfMFNnA24oaBBQPYUQAGR2xpCd2Ea4om6CFdao465jXPv5zm4AWV3M6QdGeJRaSNHbz9YffRP4is45UXosg",
  "key43": "5heozbYrKUXEJotApjcxRdnQ9T2uk6ujjRJ3HCHyC2Q5o3uoJVjiPX9q3qR7hZbkG16XD1CSA7WZa8YuyP3VArs4"
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
