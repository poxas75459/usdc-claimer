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
    "2kqfDmd2hNQcCW5mCkw2yqL9FPCC759LdYuh5Zr7uWbBqEjWFyJsnivU5oWWj4KPQVT7S8TqtUXLauGLy7EstvXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HE1QPWgJMyYrjXa2YDyzEPPygz8LGN8NVKhcEfxEUK5it7ezZBcLwvXRZU7R3kUtnvzKdCE1MqpKjQsk4A8ubm2",
  "key1": "2VkaY9fzR25LsPwinAc8QU115N8NxndzNcE1xXUMuXEtawznm8AAiK7X6L642cvopBeVaZw5aWXRS84MKz88dDxy",
  "key2": "SrkhW7QANojsDAWeZVDXBrDw2HLgdSHsYuwXENpWMmSVdZc4Uu1nTFNrPsf8dFkTLUuJzkRCZMVuC8WiTsADKBj",
  "key3": "3Mb9gKdUP91yNoqVWdur5x8d3uJzb56bpuCxSyYEbvPEebh7TbPWvtPPiM2MWpCLu65V3P6jufAG3v1U7gyRGnjC",
  "key4": "3mtonbRuZzf1TsrNQ7nNCo3MHkaV96m3hWPDCXg3qez4qFKDKs3ny7D7F2y6gNSvxCjPx7Xmbkut9FVsgok2TciK",
  "key5": "bXJKiQXFx8JzP1A8PxgF7qRUTz2npMp1LnuKP7u5bTqksd888MPY37SR4fKa9aruPgQxhYF3Wrv1xsAeLXjrR6h",
  "key6": "64A5YS39xfqYtw3PeLjsEbXz2TFe8jQ8vP3KXgg9euUicMKMKwysHZ6zAyCEb4NEbvK9AaYocw8ZoDMWqHKMMsyq",
  "key7": "pK9DmXbV73W5qVbp6Ubt2pKi684ZCVEW41BJ1gv3Co7Svhniu7Ya7rPJQSNmjK1dEWXHXP4fqgdWhGbqRTHfMKR",
  "key8": "5tjv9HaJuF6HntWAYt5NvbQwPgTzuuQJogX2uFZA3ztgcuNRWmv3xDx2wD9hsJqVEM9JX35zzYnpCzMtBTBYTviD",
  "key9": "28bnFQPKTwqrXkEcpyKxgqaMHB39FtVTmnCBmKPhhUG5MU4Z7wg3qAN3eys6V85Y4LKhJfF8iFaFfv5yDuciiuV3",
  "key10": "4eE8ncDntENZDXZt32V569cAR2ZJgLJHddz3qLkcpzzEBjV12hTjD6jzTEM5J5WwjDXWEMMLxY4HMcdZacBKPrvL",
  "key11": "3AyjynBteAtSTybH7zMZS4a4ZUj88tQaMNjZHurcmfDd5bqEmJad64zvchZJGn4bmE2FTAFpB1XexWoVzv1QcDbU",
  "key12": "3SuPizjc5CCX4Mhzm4ZYv7Ab1G2hdYJm9wtCX9kC2cKCkuvmqiZY3bG6QW8JArzBqQq8ZRkS84iagiPbszLbk81H",
  "key13": "4ULwuicMT6yePuocs8xdqYqCwYFoqpdzEgsvSGRvq1MD9aoGZYSM5ht4BecxB9vz3WNGJS2d44YiNdWUyHbMJY3d",
  "key14": "4j52bvjpH9V74CMM7bvB8khj4Tgc5WBT5TgugafhXtn2QgLAeb2rPL69NqjHAm9uR6VSUJGZgohqoa8Lj7EDfsz3",
  "key15": "2ZakoTnafyC4bkNgnPY7nFa5A7wgWKnPmERFNCRHzLe89nq2T3SMxdSUwGygG6y1xmm3oMBcwzp8iL9vJ66VfMXD",
  "key16": "3MgAGwmRTUoiFUMaF7bdeqgzCPEgJr6FcdcbueccKaDVfhVKQLTWUz4vQb7q6u1fuJLJNd3tnvFDFti7Q2xjaSrx",
  "key17": "3r7PtQramxQuBhbbPsvyvaeUE6gKQy4R3uSzCoPeKATqH82AApT9WnGYATW3MdvLFjuhPirrXT8ByKD5eoVwg2uu",
  "key18": "4xwqhawisd2ZUYHji4EmGFL4GiY3eEK7Ygs685BZW8mXyTRUZdoLtskvdvoCjcbFkicM9HUhrV8rg8AbHxK3qURJ",
  "key19": "CcTRpjtaCekg94NJWfX23jLmn9Kuh74ws6Jc42yAEAoyzEaqeDinAxynQ5cLytG7SQdudwuqyPTEd4GNF7wMY9B",
  "key20": "zLQvKhPFPGqdiKyu14PR4XCCijR6PsfVvR7WjiCuXyXuVFfbDrn14UCzLhkSGcU6D6PGcnnU8UAe3Ex858EDPbL",
  "key21": "2wi8WNTS2jpikahksRm7fg9u8YizBuVMvcoKckxWvJ2FBMMkbQbHy8NGBwdLc1tH1829KAAThyScWfbQtU4B5NpH",
  "key22": "67TBDJbtmZXDasXRZ5n2zSrKVsodBthwJJbGVCGVxbwYwRdfkLBwny6HPK2ucGcDeZiWs1nXG6x6hbUb6oGh74R5",
  "key23": "2Eg4rQXY9Q1UJH22uUz4J79Yt5QRs5MY4HAZBcGiCL8rWQYt3kh9PDHqnHdeUhka1qE8XwfrtQHop8StpybmKZR5",
  "key24": "C3SMmxTXpapt5jaYgAA8Nu8PnjrseZHGUrM8Pob4uNW18AdHKB7U7d2ZVbyZ2gTVZMj1p6NpYjvJZMX4Hok54DK",
  "key25": "4dhXZ8y28YsCiRSV3Psbwy635ekDwtpQSY5vrNKTnUd8W6rQV1mHpMGGpQYFhm4RL4LsxrLJHcoE8pkZEDDEkSDj",
  "key26": "oFvhyahbrmEUvgEACgaaRm7awM6bsSU1a9isH8HPkNBG1Get355sDFoVwJmg9k8uZa1uWu7qS9G6jPizywLaoB8",
  "key27": "5SPnzbGJXmBLSKQq8D8Tx3Gn6gPHtUZ65mAW7BU4uLU1ayWLVqiHreUVT9AjTCa24RXgo183w6bojhyokmzJrv7p",
  "key28": "URmCsVBPWjwbjj3fcV8aGDsvMJ5jdPjwqnQ7hLMgHMLWLCvRiqfbuyJxzmBVap5xr5yXKZM2qHN8iNHGaCXFHgP",
  "key29": "2MgWCxPoWkhK4J6uxAvRRKxuFtcSZotGM6wU2n1uSDhpro2BaQJEqQYQBYWBvFpjyV3vYYcv74NP95FJhWaYzFW4",
  "key30": "5gDsNmeqCJFkjv8h8WJCvLa2rfWSCBsnf5eCRpFb7V65E3egQMBiQzR98fT59T5hopFWrLsKP49bep3bVw1jxbn5",
  "key31": "5K9ZMwvipH9WQ3BheuFFWEbkEqvUadRfAFixsVe5kFJgMoC3w2XbT3Mgsru1nft6XfDKbuRuSiXSCGboqpQVHrqX",
  "key32": "4q9RomZCW9jrYLEUASo3steHrBvo3DuvSEJejFrqr5L2ST8CgUmrFTYqCmw86pWDmnCnRJBNmp8KoYkGkChnvCwD",
  "key33": "8wX7kiG4B21QR816p1K9AjBRpNgopHSDKnu1CR8vkTWdTqQRZE3bhjSSGNUF6rt1vDweYKHfMtV6H7dqwp3eLc6",
  "key34": "44P9trtdtPJYBSkgr1JVSZQjmsM9cj6uri4fi8TysBTg1hcaTW54KFaBeDZvKey5p2WxMLm5kvWwTSF8ctsAUtmT",
  "key35": "42Fxtj3BaHZpeUfJyUMxC67pvBRBWYtq3nmvoz1BPzvEard7ZSernRRV9HBorycoj7bJFzzUT6Ju8XPYXSKoTnDP",
  "key36": "2GYEC9RsnHLCUghdTZxyS44maYdyLmHRpa2R5JdfFT21TKym6vzekRyxHCS971363EnPEuQXoCmkVHbawmEBDhMn",
  "key37": "3VDea37naFxHFLXaLMaPvTKWRbnQVG11HhTHfpSAqx33tbjq6uSw39YVmxMKXX4Rn1mNJ7HZgw3fewidq2R794MK",
  "key38": "3CHzBCmPS1HipGqjq8wsjqg3hTnwgojSv9quJFnJqfHveRnESVHnaeh8FGqgDfkc2BvfBiUDnmvhzFAt2jXPxSN8",
  "key39": "fEGnwXTejVuaCKSWXEN7uUfcRc8t1ZHGzLtPUp6SQsPbuDRCCjz3fPU5jfSyzLCsk9LoTALBaebmCqbKqGM3TQj",
  "key40": "4yNjFUhFAn8gkSx91nnS6ny7zDUWBVYb8q8TtCeM6DQZUUZRkWcFY8mb6WdFpXYPg2Wf1WVSQL1HdjbS4kWVAFZ3",
  "key41": "3h4t92kryTNxwoj4HPvpX5AqLxbLRvYR9REEBu7qyMWTRsTQPRdq6F7SR8mThmXrMRxvcsP2qCmazaZDYphiicXc",
  "key42": "5dnHTASxmdmw9KdoUHBhD8sJ1L7LjYdG3R1W6UtBFQCzBKAbjFTodQksVUehUtYYRdXmw2ezE7rk7WCZknZYm1ZJ",
  "key43": "34vmDvU4Nz7jSQ3T8FJVTAxsp9yPe6iUuQ9EdmJirbQRucRX4f3wgUYT5K4qNjrDLc9fBe4C6tqVcW9nSPSJd28",
  "key44": "3X9b2JMt5TwMrmZFDzCn6FvuuSrkAVjdkTgWdbE3pgTdyxh3sAn2YhKYgBokd7mhb55AZXzArikPPpBLPLaxuMFK",
  "key45": "2S8mYdVKRVYxMHs1EsN4pDtiwRNdKPbxucg1kpT5H61ZNpTRHsBzrQD8zH6PuEvrbif7J3gtT3h1nqCWCT5KDGv4",
  "key46": "VEGEdw6cAcZa4mwZFLWZZC3zgYb3zEFzni5kD1Q4VygSxjBhmybF3hmHRcmgjKWYsrHrBDKzfXf56UPmafYN8rq"
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
