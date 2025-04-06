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
    "5RRzMABazovTruCXuQqx3dNqWkp1hNtZfF5qdHxLsFKiRMnYjaNY6nr5NEZ4ihztT8QLFr3j6yHbGiQZ7Zs4vKHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YtceX8q7dZzYc8VXh42vuZMgPUC3baA8ntQJmVYZMHjmmPemQMozjKFGvoXYMpPYevzN82DKdJDfpDiD8BCHSw1",
  "key1": "4ZQhB3Rcfo81VBurD5bZhKjEXmcexps1zWyEFQTEpzcXkAAj57PwtKb1SNaFuD7CRmfNPe2KHeB6hG7b9gEH8Yvw",
  "key2": "3LbnsF65nPxLk58EU3n77ZzKdyXZG8hCk7EV3G3QWZuUbvzAPo2UVhdi3bf73YXt4mUjsrrdjBJVrZtNTBmCZG2K",
  "key3": "57LL6HizDycvq9BqrUBVc8uPxJiHdzqqLRNemtF52LWKxJjd9DLtfLtnNgte57Xb2eLTFpH4msKVEp2ZVJi5dxAZ",
  "key4": "3gABA9PFejkSmESQcYPijPb9y21D6Yu6r3vqf2iLZrA6ywb7cvMi1xqSJmh1DYsuqKmbRG3xrviTd5yybiM9wBrF",
  "key5": "5j5Xos5pzSMqsKsKCy9Wx37jZ9a6tmg3WUnep5LHSkMQuoH4WHjJGi6ERv1v9shScThsvBsWrtgVWnxfkv3Q2Jzc",
  "key6": "atUxsTofUnJqrWyxMd6CEbv9eNnb5V4SrmzrTLeEPXpCMzLdw5G86sKNkPepiSiRxZsJygVpst96fnwGDDYMVi8",
  "key7": "ddQjEFeV8njKBLYXgDgirHRUnVvKR78CuCCfdNeHFtqA68aRkDGjhsf7fQg1KKSdwCkTYddfDq6g5wqyNjPpA1b",
  "key8": "5irEQdbNnjX1YtHCSmKmYwfP189vPAGtqLtJg5vogWxv4pPwRZ3Q1WvgrGX5VQ3Td7QwMVrS5TGuoGs47qW5XtVt",
  "key9": "5wu3wPzJYuViJ8BVQJ6gesZ5XXFLBbyiwDGLVrUEpK6feiuaR7LeV2AWvALMzJy33LLV5MHZ6KVCqEn5pAGsX9TE",
  "key10": "h5BcHrKjGZ2yU1DqX2yy2SXkrZPrN66GfL4z6AtHphh7KnyGtiZ7odszRN72x7mTT6y4nCXGZ1A7J5hDtDqMM4A",
  "key11": "3D1yuKSLYZFUdgoQVFkQeZ2NpH592P5UPgBRfdKrtyorHmNgSdcu8U3SPAmXJWYW5myvKxQCcTgc6BmcJtL6GRL5",
  "key12": "27JZcvoXK7FhAf4HdmtJ2rnNjpdoNoYc4pedG6wLf8rE2pWHwAzqfFBHL6NBfhWjBxJExVD4gMtYtrCrwNRkGubG",
  "key13": "2Fo9ydPJ1GeYykeJnfy3q8J1RkgFbCkmumXX2NYSZAtCaz5vdCDmeLBGxJC4gYDrofuZVrmub6g23sqsHDUCojwB",
  "key14": "5A36JP7ehsb6TQ5ik9CF9cxoS8KUNv7WBw5aSEH7abJiazS9f5qD18Zux2jypp9kpVp6Y6HDtzUyu6V4rt3UeYgi",
  "key15": "3dJgnsVXYBkd5T1xDLusmARZTRySR5g3DQ8bmMGhkCeSZSDeqYaLv7NStFPS9TuBbYkyhCqm4USKrcCiCmE5V3a",
  "key16": "2mTE2B9ctUYUbVL2NY1ncXPS53v2wrxzxiZ9nzNddD9oAqs639StHvDBtxyazoQHwLSXSJzbGzkXZNfqHnSQ83tw",
  "key17": "5VV1fiGLKDSPFaJMVf16iZzJtAURCD3kKbQkKgmM6AReQTDM7vL9niwbeuoD4WKX6qFQYeYumnp1CptztieA2kWR",
  "key18": "4tZfj3Yi9sHoPnukyzbRPks518M6mHwRLS4dNCvF6qLZ9C5qrdmx1tfUWA66mrqyMCMw5Ud6U4U2wJGJ4AFFH4Ni",
  "key19": "UPUGKwtxZBbdUC2xar9V75jsTsN9CNA6MJ9c3LrTg8kmSw59sktMY9DGSif2uWe45t8RFytfbGuRCZhBZ4kHVWK",
  "key20": "49Xpbe9fKbUhvDDU5DMmz78PwdyBUu4AJybcf5pM6SsfWYam2jNCs1bn59jF62ZieoQgEuAZfmd41C81A68oh7mi",
  "key21": "Giu3aZJuzFPnz5kBnQD656ckVkktwwvrxTpnqLAP2G3hGG6ymeNmdUz75YmYtCX1jxJsvnMFDBy6snJuMa7c12t",
  "key22": "4ZShdtWQF37SAf2Dv3TnryanpUF6KiQEYpNfHRCamt9j1QR83bkH3NRxweV2KLrLAeMVzP4AC6jqtYebmZpXs7cw",
  "key23": "4m3irWLVrbcfGyBNtrWpkjGV36sUD8xcXaiBcYsQwfGhT9Xim6oMFwXpGKcrQmjrfKp6V5uzm9bmpkSp7jn7V78x",
  "key24": "4e6AL6cCD2vgpb5jVTyQyrWBLDjAj8w7eqm1K6pub6nfXXpqCqfU9jvyQustijns5rKQyQ6PmFjjyXWwA9xGHfkv",
  "key25": "2ffAQR49ir3eKMt6ebSLrLdp8RaQUUca4g5Urb1PdGxjLTLDpRTj9rH9J2UqTQmddFxfQyeUKzsNbfZZUsPKTSWp",
  "key26": "4wjQ56CwFdpDCfcNoZcdEmgpQASkVnNZ7NLqmvhvCCEfJvPc6a4q9riaaDQFaifzicnuZ6ZH8Vfa3oNUfpKqxciw",
  "key27": "5UjJmcjXLNkKuMFQcDBcTMD33seoNLL5h3bwD768eapvTnfDRPzgUjxT3pft2XhhDzG41rp1UQer82BSYq4RQfdj",
  "key28": "2Kkx7nmtwyvc6PMYvq6gaQdESkgWL7o5MmS2WUkGfC2qSKYpzVhE3VmHbrfE2GxGt7VvPUnZaTKTAm4DfPzR3rVw",
  "key29": "4146hd9E1nSuU84vt4LjnqndtjUaS3Y2TVqvoVCXRkiY93GGdHKs7ttLEN3Fz7bz6ngTVBpnNNKoNToexMEVKuxt",
  "key30": "3h4NTymc2rUniJw5GYtXT1A7Ug9qK98mVZXFETu92FRe1iZvGT5PFpnnvXNkawY3BN67TR8tCbWoFFQDpQtHDyu2",
  "key31": "BkPWcLwfcY4BWCZyV3UX3RxAczZTULexCZ59Z26JaTyikD4TC2YDEaohPnbKrtXYnbNy9dDY7XqcnkxUs7poqfE",
  "key32": "DuA36pNLA4sNfwJbqMeT8QqyXWoK6BSy6bZNRDW1xuZm8RWTz4dwrjn2LwSUqx4cPKAeKCbNxBQEN4SFNQQCqk6",
  "key33": "tHP4MFLxRvcFBYaj7Wh2FbHDmssvf2BxvynvDmbG1eivFftzovrd3u99Fz9AYyeZcuwMuS4e8mQysHGfvAAH9qt",
  "key34": "36ttZWLWDKMUhEWzo1HcBkjjGfUvTw8BhvuP6NaW74hJFAW9StBwzvDNYcEv4qK6yVr3DRQCCFHmeN5hvjF7aXHe",
  "key35": "39CfYr5bMiYmBngVik4YPKUCxfu8zkZ6Et3UZBd7drMSDD1d1JyMKnn3UNWTkLrzXawCSLGApnTkw8p5QfH4FTqe",
  "key36": "bcZvWut1VsX9g1useCBKBFtEXR4vxFsRM5WVLp5qdSNyjqMGpqUcBcHVJHioGwT7ovsp6LUnXNuwnoQRqtsqTkL",
  "key37": "23JfPDuh7bBuCFFzjJNLnsYoNXwQnAevCEvG4dUawz36fhGxkjYwe89ZJRY3WiMttprmzqQ3a7SLjMSCX5zWBWrS",
  "key38": "punPZtNNZmAx779YhSfRCY1AkyffNaiNijzeSDefgi3Qx4nNYFZj6Q9zuwJzQo9PkWksZQ7HF1j2ad8HBxXXQkp",
  "key39": "3FFCCiiFxGEFWwRWRURt3dngBHC35z3hKa8G9PxmjKgVNqTgLWnXQ5JWJVao6LKRc6SDvJs9H5WgVmjoMuaiBLrk",
  "key40": "2iWTuDnEh6EHxzZ4Qi3BmkvocsCoK1mEv7zVD9Az3yK4C4WvNt3uLCu5VTyCZC9SmTLcgs3hSx9Zz3Q3ZCtKwv5H",
  "key41": "4XqZWx6gdfxqntzsc3GT2FPwt4a9gm8mrf5kUL1Gc2ixKEPHDy72JedhiGRqGAqbu6V29J92tPWZQd1bjjp9Y3kJ",
  "key42": "4BNiibCyLWE4q3w849wL5Sb5upG8GL1sLacajkgJGFL7MwjoppJYPphedeobuVsEZ76tUG9K94TuNunJPPrjdtsN"
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
