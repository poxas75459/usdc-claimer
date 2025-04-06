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
    "5LTuNNn2DPBdru6AGsrsbiMktSS2GjAVrdVcWveC5Ec7dKnbcz4okaSZccCszU23wG3tPbqfDMafQ6Nd2jR2iWKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ANq5kZs5E49gjpsCUV4J6UJkpa1utFg3QDdJL41UqvQeqSa7iywQK51yTwwddUN2vnTuuN4iiAnSaVv13aYbBEV",
  "key1": "3vvynoLQDjHLggxGsh8ffZ3qQ8BrGCd7MwMkGvMzzjcWaZ8sKmN62dALanwEmcxhc37bHVMj7fSzhsiHFtg4gpZ",
  "key2": "4kGULtQ2zFFgw1bD1KYpuNFvJok7t1U7gBnL7zA9z47uYKVHYeW2KdQ9Sigg1v7Rjv4k6TBm5qeBFPKhe4z7qK8C",
  "key3": "4XjvzePb7iqSfLV6ahjs6wkkS4RSLeefh1AS5Lm6PAAZcgUdBykF9CXR1yXZZhACTencSjCAPoZzEWaQzsoX2JYF",
  "key4": "4wYAbFhHuKeftszhrES1BM7RpimMBoqk271SdAFHDaDJqutFr23d3KyNXsBtWQMGxx3kKrKhTYkp1M5AwgFM94cG",
  "key5": "5EhyF7ufEHTE6dEWRzqCZRE1xftKZMj3c31d4Qa2WBgW42nvTZTQv4UNz8xaBUavgZYRuxs9pmc3bfKRkLWHuwjR",
  "key6": "4mBdxp6q8mcHULyxratmsjjs9MjNYKxATdNRebNYUMETtmQjwXJuVedjTPXkJSrPdFLHCzVqejuzg1CZ2rBwqHxh",
  "key7": "rwdo7Ws1qhY8TroBWnUhXnCcBPJH6Yaz8VwkDrkWeqH6Pmz64dkaHsewWTDDhokWB1tPytBA2EXoqxV8r5Gz4jz",
  "key8": "5Z558b7mGKsG2bG9nxG9DtZsea3L5i7YamXKbcLuNF2ohdzNFz5ajAj6FRfVDgNgkyeiRPzjahgzLVMSMTHdt2Xa",
  "key9": "5vpnfUGNjWQBbQVDJk7diPumqAgc8fs88MnKpPrZbcxrx9yf4hiu43CXoyUjYCGKc8znC3KogNWFYvWuSiYPvGWh",
  "key10": "4i6xwJZagU2NmrABKg2zcWnkgbTZkdTT9gGkJpdYSRCMVXVK1hA6NWWVQSFKNJqfHvQTC7rQ2tasBGxUnJv9Fi6o",
  "key11": "D4TFym5smBau1mD3hVzYGM6bv6exjn6K8LWYyi14GHSBKrrnMBTAzEHteftgqx3pmXS6sAiZYmMpq8QhVbVm8ep",
  "key12": "2ivSYX5iDX3K9KBbF5uxZH78FtZQ49FCkaSJNJjCeT7hNVxDLtsfawsFtiqsdMUtM7JtAxxBTpwdrme9VbDiAnEH",
  "key13": "3f9148h6exzTUo2cob68tgRJRMysjwDqKHVKjTK4cmMcrpXHApj9sQDvA4QFAMFcSa9eAjcUZQ9EHZ1xyUDJhH3J",
  "key14": "55nDUrPnUmJRHUHEWgMC9rYhyAuTJsbY2ENzS7t8ARH4m6ruuPUSFtXd8VKQtmvvPwAH63vEfhysJgdrjUJZY9qh",
  "key15": "5oqGrFjWbsKpH7p7ik9hjNKE7sJ6CQtLQEF9ngJ7NrJ8zeQ74iUcFgCzhvn4AMCqKH9HVfcRx6747NnM2sue1RPr",
  "key16": "qBg4TsxtFXTXRTfuTtyT1FwE11Dbr7sGfF421hvp7auN29bUCLM2TfbswQb8oojvJqjUAb9bR76JpQzqvm4wEN5",
  "key17": "2GCdTfExQc28zVmJWsVhQQ1mkxVhgBPZvD23CWKzhemqrnHxAtPp5ziF23Yx6VQGHtBB4eBZ5Ti8d4yf26joSDtx",
  "key18": "4eyxejjZqkp71TSDuSFspRxqqqQ9LDVhKJLa8MobdE1KzfJJScqQndddE48YXdRcJsuUXzgumHuwDyuvuf1fHWNR",
  "key19": "3asxEwgeGLAzEHMke9oEQUQDpkh1wkrE5wPb4XN5j6ECcVH5jbRXz8NtWEGjAuBiGzE4JnuCuowbTVoTERikgv18",
  "key20": "3BapW6gQbzDnL25VSvPrygqd4t3LBVHJA4vsdruWVg46L5hTFTHZvx39chMRd8dGfUwp6By6tD8EKpYFzkKpLD18",
  "key21": "3ak6n6NsjzkYoRUfj7iPQNmusiuk7C8bqqw5sTKofueSZ7XugEXwsgrbgwJPjTZJCnCeM26Vv4fhVDYe38HAjaLc",
  "key22": "4tcE5qL2b4GAA2acj2wKWLhjAZWigMYhc7LPW6hmYKwUzQmddN3vNV8jX44s7kyxpzpKXFVaoq6AUFafYkWpgVoK",
  "key23": "2bX98gw48vFGfV89G2mHkgZ6hu7PPdAopxUDUDGBLfSMcQYYoCgh9ZvLaBnSndhYD2YsSXRqnxUrb2chXq9h4nmd",
  "key24": "jCvDYeHcUVvJe2FczTeJrsepfaven4MzpeyvTXL4zstCJKHCNXLrwMdnJQzdCfUBYfx5xMxn2LD63cR2QqjrP7W",
  "key25": "3pwgq9aMZ7BnDXWXezsJcw6sfpNqFCKWwtCoGukJdATnxZUS59FmTkZd3PWPKxeFNZtxNGC8KHCmYP4R8Es7kkCH",
  "key26": "4m5yejB42mcHm3L4YDkU8nVKj5AFaRBi2o8W9baV1CzCQDo5Jjt4eLWrMQaHcHK1ri3Cft7udBhXBtpQV3xXDiPZ",
  "key27": "cvEpaFua2wCy5SpmbcprJANpxW8KR78MtbewSYqJ8gchoX6pcQE1YLGSuPQzWvPTL2XbxWibEA4mxeg8akaguei",
  "key28": "26sXpUZw5egsbbxnEddYcAMmssgvaift3tg6hx8tQo1bDuxEUkzEKsGegDxpwvAV7hStt17BKckQJ6n691MRgdxZ",
  "key29": "GsFPt1ai4oCCQHkphMxocWkEAvpebcv17GFe4BppGkowLrTtw8RhoVZ231kFNDDX4frRwgDZjMZHPUcHthxTX52"
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
