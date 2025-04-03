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
    "UwukAxNTqd69VehY44ZySTcR51Y6DMLcezVRSZzHUy8HzxHHsyetEGtS9aKevFDcNX7Bq4XJn1ahJrA9fdBKiBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gWTAmGs5ZLktgitAHnB2vPc2wYpmbQVxwhMZecHqc2sGCTVGvyTr6qKmZzyHe6YR17d62AUu8hrTYUjuL7MKnut",
  "key1": "4NkmEg954XEQBJuiummqkLmeqmjQjaa5RFy46bT2qoEj8GEHhvCAV5h8jN4X9pEYxrYVyLuMkj7mVLVhBpP5ZdLa",
  "key2": "5HcYVjuMpF9PbZgbyH51AaDobjFPEP9NCXKsLsnNRVv13ATZyY2QpVSBoUoMtfGcqf5yu3WybtYPBtxKK7evPsox",
  "key3": "3HeTN4uiCAMZEMG6DMaJTXyMvKASnyLfkKJ2MiR76Hj6QnLiVtySkkSqp9uZibrCuAPjbxbpEh9Yg4x2dcU1AaF7",
  "key4": "hCmBGys2aUYM9CkgB2yDrEmJTk8YkZuyJpNKeCP771SsggR6Fv8tKuQMqWysSpzR3yTUsUUarToVQ6Zzode6C3V",
  "key5": "3o2epWzGCEwBy4dGvw3cmsAYjwywJtYm7FQTd9schY7bmgyYqdcQhQJQz1brQG5mKnBxFsTjtPfqFv4kZGDfA6a5",
  "key6": "svebBJixRwcdQapMb1aCVs9fkMqcY1zDnsYHvDjKrRDcCbFwNDY6cpK9yNhsSa45NTScqwHAPbobXTLWwjfP841",
  "key7": "4ziAhpw8rffdFdW1o4dNGbS9pkvkb4W3C1Etq65h2DccFDke86BzkzgRzM6MowJbfA4AMEN4EkEL62t268kaAf4J",
  "key8": "KdM9wjinWMrxYyarfnmTbyeXk8xnzA9XJzmFb2jxYHpXpyyfykDYTj6bL8XTjvwsHrbo8ePnMDzTdj9AvdpTVrB",
  "key9": "4GGG8nuMm9g4mky11J9ZcYNZThwGv31GoUhKjG9t1FNcvkLK54YcJXojLrW6JFmnKy6GXazKEWT3i438Y1siLMaH",
  "key10": "3sx3KxMeig1LtKjLJGq3W9wjqBvKysXKmRJn1pnssq84Ha1zThDFwWCQfZYqQDwWDSmVjsG49t1ZKh7gxXKfAT7z",
  "key11": "5efU3gXh6aop8gHijNiEQxqfPRNxEknFRAWyroB5FLK2P8cCZky9i5rkRd5jWuHACyjjF31MMmKGsmtazDJU3MVG",
  "key12": "acSTjQg6HAV7cjfcG4sd25x7Ht4TU88cRTbhSmntTWyXNZbJFZvCSmpeStWN6sRHtRbMqe7WLKYdXr2ajiihkvT",
  "key13": "3WGg9o3ut4Eqo96ByHEfEhKY1GzGA47g85BcMrLRtrZH79r7ynUnW6bcPno5P6Lt6DicJaQWhBcX5DyURdz1sgH",
  "key14": "4x9TYU75YMucjJ8RhGBkXL7JQF8BaTqmBxx15mvJX4Wrvdg3rzigN6WUaFQgGy68Vf1mS7QDwKp93hENkokiXrEs",
  "key15": "re3qZtgggbEzm3MhNWKqP48BShUinrqubniHCnxmSyHJSLyiYY6cePWKXGzyyHg5UrurWdnWTQ7LDVa4LozDbD9",
  "key16": "4ifzTaxXHhyUnCHTeP4anXeDR9v8TK4jyjTg6aCWwnUrNED6MxXqHWP1VrGLfK6rq35Ekf3Xaaow1rKu96gZSr1T",
  "key17": "4xBYGzBWfMWk6xeVbGcJu4Vemu1HcZD6mSfjYS5YfqDH86qtrQGnS28Z1PxwqkGNDonkcLmywydQZJfZBnM9ZNyH",
  "key18": "3kq8VMNqcoai7ENoFbFiBQWoZdptLMfB5F5hn7gybQYzZLxrU8hxygN9wEzzuFPRxXZWrwwWirmzaWthxTMRbphj",
  "key19": "4mpiuPquxWAuK5NkXDSKZHXm5NAC1ZDa8odGV63VggoBCiciAi1JJtf5RT9yJzECwD19WcR1MrEZ2X3EiHhr9GHb",
  "key20": "5bxaLT9aiYwQoBEvDKQk7fD4Kh1zHarYe14DXHEGU33Zy5jBEVEPjBdDu5yKUXwgaZTUEZAZVs4jLj1vuWzcjhBB",
  "key21": "64xWwniGEHapQ6kNg7QsT2KjystKmcHYzgcJq6R5XD8T5umsVaHEd3eve8c4o43PZubAd2NtscP48juihEEByypB",
  "key22": "4gvFqz65yBYzpSt8PXA8hrSkrbZgaZ1oBB3tEnPWMFwE3J8UhvfJhhfkJm9tokRTsgc2vhpjZxPBGEW1V137c7po",
  "key23": "2wYKXaYty8vcZon5HHtEHtFk2UQgLkSVVWJ42pHxV5sepj3vWCzrL7ELfmJXhYkiqFWNW9SfPCrzoS7p25WfMjqJ",
  "key24": "2hUCJgW6J1juA2yQb6HCsRJrGvLUGiG4AdmavkBw4mGVQdEUrKzNbDg7EXAWyAjuQVkUoG6BYB6934AS5xbBCTzr",
  "key25": "4ifQMt2GhJHg88oEES67HETBFmUJiNfZwMse6uFGC9mtRavZ1hBYJjuj5B941b64UvnDcoC5uSXvU5yNK4BDfoLQ",
  "key26": "3XWCjgH3mw1FpVYkJHcoiNXo4ymUZEsfFkHgnNhjbKJWkuYjCMbkyFawpyLha6ym1cRGJep5vimc5taaQTsgcoxv",
  "key27": "2MpVuN4WrtkCVtHUB6sNzCgCzzggvroLBPTsvJyChF9jYcGF1T8j5ZVPKP2xnZq4o1SEMvCyT81XGWB5Lh5a2UoA",
  "key28": "2TzADqkizoiL3mvFM2HYesLki7fmDX2xSinPpmgzSEZ3Pf5EP484QdEJVXNXdMWnQTqChFiLo8n6qcHBMHNe6Pva",
  "key29": "63phLcNEZUW582SUcvinSBrAXC2Pah5vV2KdFS1YgfsXX91CYhfgVTgJ1CPQso1yqV5Ao4pmmwzUpgjBrUg1yr4s",
  "key30": "NFhMBxmtmPDtNuMjK3PRMeqMRyHA5Fb6SPgfJ3AvhDfon2ocXPKouYDk9wQvDHuYKwztSksnXLfB12hTb2iiuAE",
  "key31": "wYPzoMbQrLKAtBSsbKacAJrvooLCBSRytcSG5DEBvHNyxxucrnnukZasGeNtPMqtUBKRreWbhAsgkix4QP2po2M",
  "key32": "3PfizKD4CQDPPfwkwiXJXk9CRnMsGaei1JjytvSMtXE1czyRUrYKv2ZpVe1BPWdaWXckDTJTzC4ZiizjRr2ZSgwe",
  "key33": "y16gMMaNoiKhdFBAi8PKfdW2n2xFndMQMUPuPFrMVX89wbegA18qr6GLAQCCJ5ehhxhpn1pnjnawqXYGDNSNGKo",
  "key34": "7iQW1NUv1HerYYDu8udgzmMtdz8HU1pAjYnUDyBBXGyaXLdMkyjhNA7o2kw1GxZvHrhAgLQqXBFg52igpFPj3Ts",
  "key35": "Zz5AS5KRJU9ugMCd9fBRjJgR3RHnfVYAJpAVaGDZAYQdkivbpsHTDWNBB3TEM2ZzapaA4vLqXFjHuTQ6BQftmWG",
  "key36": "5U5wjf9HwWmhM3eP9Xx6G3J2DfFkGJ3GWwbb4DLoXx5C66W5jULH3VQiaaWge2cKTxSxMiSozJdeNhY66SgqRwYh",
  "key37": "4eYd6mWa9YirJFySWUfCXzzr3WLnPbTwoAic74zJsfi3b3FtxyyDXhuXsphUJSZK4dkJvKhEUtV3TVrcfJ865g55",
  "key38": "5PLVhyG74FzieXYBXQRnYWwuTuapfZc5R5uk35Q6Aa9TAk2q97tmEeShgdowqZmwqfdBZwY5oAQnCZvd9dH3gf6R",
  "key39": "43JLwXQuzGoxVxPQtHLHPUypganJY6erK1VgTZXC7F1TSeQP59EcAH4akFc87jPsYdF9Qo6Dtc2SNGMwbqL9CZKF"
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
