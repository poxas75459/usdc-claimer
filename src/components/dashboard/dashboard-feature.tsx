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
    "5igUASLXdwTKN6VDJTW1CYtdi49AKwR5M7KzJVA1LcoeokvH1mjgsUKPGbue1znmJRRPzpD9RocrXFwZ1Uuv2Azo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mxMJPeFRMBRKAEJzG5zP884wTPvB4AXuWNi244tTd7VJs6VKaA7DVhwaeusdLmRQUyn6xqM53VDqvhbmnrPfmkM",
  "key1": "2MepvqkyZfBsyHi6re8NU7yJ8dxkbhopxgUDfguC9EdXitHXk9KgCPGBaPEC6WKCyVBVJrie1H8TS97V57Q3SnTG",
  "key2": "3JtzaL84TeAZWW5ttYjdEjgde9471EJmbpYHJjTVvUfsFWSoDZTUsR4wtfa7cJWYyvpEoRxamxcSunPDCMa5TAwP",
  "key3": "9DA24vJVrMUfJnw4bwsoYkMZcZoJC72QnJfx6LrxvpwQnzNTC18i8ZNnSQJckjp1cjA9xJbreJEaaDq92u8zqAU",
  "key4": "3XSVVYWiaGyW884KGDghhB3Ro96H9mn9bg6Pq4qhaZRvu38X45Vat5FBn1SSeiYnjbNy5mBcXQMbcyDvm5nQwj67",
  "key5": "3ystMRSrB1QhcAindZhsBoXihkvmQFsYwzCR7gVeSrY1E5YuhELWZbFMWDxJCrdW6ep3uvYwGeoLRCftiHpMmXYs",
  "key6": "TJNAhTc3gqtRYaE8hEReKTwf9Pj32ewrLeMGGyng2oRoZgdzcpRgDqQvK69dWZj9zzL2miofSQBpAfEf3fDiyN5",
  "key7": "5ZX3S5xfxL7goShGd8rMtGA9gDxTQxW9Mo9FUE8WMWhTFukoQ4fWaMVXewyVkD6jkDx2Xtd3hSQ1rEVRwtY4iD9S",
  "key8": "22BQKtewMgio78cnsDAKA1Kexh1MbxPAbVtKvJK125cRcwjtHrMnQNi5tTTT6gBWfx8LCmEGEWCGqCcC75Y3VWRr",
  "key9": "jDpfibdoopGPPhahi6UkQjc2z1uVsfEnSQxNeNir21XSHG3Yg4udcXBdVamhf1AcymbJbS9bsteepcmVs7Ype2L",
  "key10": "UQtAZWAPe7vaKGWcLhSE2UMbhTA2ouy3enqpQS9ZmSunxeFiKwd8yXJdxDA4e83MoQbwAGU2SiNzqjDcRw1NG4s",
  "key11": "3Zhbztnmbf2uubfrYgjrG5Z3nyFGSJ6GmEJrgu9G3L8Hn8qZ84R5vFev4HahjzjvADRZaHpriT8emzYhhQoPvjpH",
  "key12": "8LYt7UaVDAD4mYVdy3BaawzagsVwaX7QJwwbPH9pYvexXYtAuk4xkGpHSfG9xskcAnVB8eZF4okzcUxmdumiDeh",
  "key13": "3BpTT3iofuMx4f76meN53WqnGHr6RXqEcqxc9wbzEdaqy2NXQbipa2pTDEc1T6mfq6ubgoPFS5eonPYQwqr93v5m",
  "key14": "HH7RrvVMQo1veQG3ktcZfSfQ7vzEEwp5XqriftzgVKnRTA1a6hcTZczJTh9QSr2yd3JVHFAQkr4AEKzi5EFBpU2",
  "key15": "7zsEwAFFizbnwi9bSyvqbCarpirqTeV44sedKupLBJZ3oDV7bKxgSdboHvPctVyZ4pPNEubh1YWEXwuaFNZdPQy",
  "key16": "2uoyZNUbir8REh32TMAHnQEa8xyrQSCJvcmB9MyV6pMr1CdBrSnCBqgcDpwYSG1mWWHn71M9Apn2mRhXzZctZG9i",
  "key17": "5sPnsLFr72ThQMQtHGnreo73gb9H8wMcBWuUN8MxMumoAF5EB7yvBvFwormDB1CnXyrz1E9grYZazLBywanR9XiA",
  "key18": "4efyWXiA6HGfpJjHV7CNP9F5H9g9HHnw9Tsd59LNcoiSXjfzt9Vf28QLv1d9AVhUTKeM4WQ8MSd5GZAKn7noC9XK",
  "key19": "3zmJFWMrBeRiCKpjzBzgxzWxoHcW8xocsm7FdPUNuqJ9CadK8uEqwAyxg2pvX4Qbv7ZLaruwwpty2KtE4U8dwh2s",
  "key20": "3wRbtDA2ZZMqU8vhNZ5UXaAzV82hoxoajvdVKGbh3hsFC1TjASevyYByU1CtdfoPgQzfpRwihTwS9xFjRPXHm6xC",
  "key21": "5G7g8KT2HrRKqEnVDjHRNgHoMpeaS8C6YMV5M8xA7nWmKaktgBSiMXGPyNiM4em425fDwLQzEEs9PeFZBKeyKT83",
  "key22": "5J9j5GuVLb4jRfEnyoxLPrbEgGSgwa7MvoDsPom52K5Ges8FnBcaXHKpfqvEAbnXf8fQG83MkgkCiWbBGMTrLC7c",
  "key23": "BH3eEXs7GKUw1XsPCow8n7WLXpFjKii7YdDxrh6RmVqBM4yUxEo2DJCjYDnJKXiieDA44L2G1JjejuRrNB7dCNn",
  "key24": "3ctEbTbnsXNy39RqWsChztk3W7ZnaHiEgzRZZ44mFG35sre9zYranJ47q66HETbpcSqhhiLGX1RGYS24jRkx3v2h",
  "key25": "3vgaBamne13CKZRdwjKDSBNr1vX2nGxGoVYhnr4yHccMZWXQdkibU1PUyqvZTER59bvfDxtVRKTXrx9RKk2QiXxX",
  "key26": "3dxk6njTJRT5pezGHmPyA5JE4yNEjybzejF8FqpzKYVuMoFJphxbjywT9oLSeTHy8dUjN9HqfffQZvr2YoiVWff3",
  "key27": "3ghvLo8AUqpK1jrxLX61tVNzrUuQEwtSSGxSRtu71jBbruqaaVowokPMqRLzYPJodwpqZrtDsAMueRkkcdxHpyBd",
  "key28": "3dxt2oC1S51tTv8jhfhtYS4TbC9urY7nNBue6X6Y1ZadRhWWVs8PQGtMvTqHzSLcfjJrKFT97ngh6hDYQM3Gz5GR",
  "key29": "3rkesEYHgaKfdC5qTJBjSqSfqC6xE93NUjyFHUdXzZwrc2J2bnTZtmiuk722zARijtX5bLuUCL8Mk4XD5s1kvEzX",
  "key30": "2JSVZyEopDwnka4psU3MtvDg93LgcVCyg6ay1ykuysSVpu8FX4CmogZxMS8347EHYqsKDh26YfAhnNEWZNmZ2EK6",
  "key31": "2rABejXYxHRCXyAVULwh861irZq7ArwcLbEim2PwEZbfaVcVkcEMVM8i53Uv6FFKAuMa3CjbpkpGbdYUCNZT7YGN",
  "key32": "2bZ6j7No3B4MmdJeMpzk317rc4Ftc3uo5QDe3CMffRnsZSH9ofWqh21EsszMqdBgvcmJD6TUB2dhkw24yo5nrzqw"
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
