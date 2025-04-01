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
    "Mux1KB5Cw8dHKPcq7CqyPGhyLAdxMMaJkvt3yjYDfd1M1Hn9rX9cBa3DSutrBwBWryXKyQDkxAAcQxj5Azp4wqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RFpmVZPo3Ea5knjP4ncWXseUy2zjQdmXBSyHRTnXoHTo5o513FNdqbquSG3M5MRqMEfzAX85dt7bDaVbT33evDi",
  "key1": "oFGN38UWHM1t8pYVX3G1LceTb1me4qyGBZ16yKBajnGcDV54XRH2Q3ULqwhY13XHkF3iBnUGzmgJavJKXzJYiiM",
  "key2": "2KtPuvrMxGhYLsMNznCyaR1zwJoDPS3bLZsWaWkEKoz7QssrQ3YeyYcA9VZmHDvZTFpTd2HjMc3HRouhZfwr14Z6",
  "key3": "2SC2x8VAxrmurqbGPqxiphd1NzHjQYdehGb5iik7es6SL3kJmDh2DDstRXPdvcZefHhe5DS7wVtL1xE8T5i8F4rM",
  "key4": "349b3pvQzzygJPf41CYe23PnKgYtibmPgeoDR9uAKbjg7X3uw7eoiWhBEXfWgdppaDrqKuUbTEBMtdGFFy3r7XuK",
  "key5": "2PbYd8PHQR1MKRnBHoT4EbdNQatDVZbY9nRS5moqFk9LJNGYx5UTDotKtnyGK8tdHCCdaCBMV8J3cm1bEXqHZjy4",
  "key6": "tayHLgErf7vAfsUoBLTjJj49xLyWkpFsHjK7NkWS9j55TTHXBKP7nm17LZeNH8T3e6ZEjhyw7PckqvpBvAph29Q",
  "key7": "4ue3MPDJZYGLWPciVsitwce87ZLbCHe2qzTmGpuCp1Y4pBMWQLngjZ5H4fzEQyh3TM632kurBEGcJmsr7t25Yvxg",
  "key8": "5aFJ8KH15wiixYXDQ9HDUhjrErhi7mHvbqTcTcdigRshQ35TvvtpcDwTfgQbeSVheYnYumZpxNWcfAg5u7V4d75j",
  "key9": "2w9qmqgSjBHFgh1b7ixsyAmY9WJaFafWgUR2iZ3Etk73xkGhNhvh5rq9JUDmcC9EvYudL4o1K2teRnQbiPKqj8p1",
  "key10": "57TVRPAWx8Gkm84DnbCpBa1sF94MRx6W5ou1LmHQKyNduxUqsZr64nVM8k6xau3R5Hj4LtFidwvi3DgfCUXmqNsS",
  "key11": "xHouZ56t2VYkWtXPsdepWG3rfML1oC69k6FTSVDXWBU6gWY8FPhhntEeZWGzkWbrJJ6oaQz5bRH6X5CRsVxtpu6",
  "key12": "4PvB2be4Ei5YZWSPpRWtN4Z15881VbuXrzeEXnLjg3osbqyrH2Sn58qEHZdz5KshFKKQEoVSJG5kUBHBJCcnqK5a",
  "key13": "23NFC68cazaTpBDbNm3ZMigNmtb5s5HNM3NTqsfqBSTzPBnp4cnuHJc27sDEk4rLWGrktGhXM6F2YfrWZAARqZZi",
  "key14": "ETkH781sL4z37P7UDfWJcLR4rmMpcXzoxvY87TuchmvEBxXDHTDHNDMbg84bT1ucpPt7HHVocH2xzPwzqNkMBJg",
  "key15": "2w5hE8VqXAENrGrji3eYcRmCjYqnpcGP5XXbopfVRsFHn6XsuKCKxa2rSkn72uobu77g2TWVk9jv85q51n6xmqfS",
  "key16": "2t2FNVkL488ZM5UwfWKHDwb2c7augwG8G6WbSLyKYm4fGpYujEbNJg7GTZQ8ckeqrbqDyJ1fs1JKvFxRHtFg8SVm",
  "key17": "2tLoxXHDxyGydAAiAx6Zh18YDxTAZ8oy89PM1nAmpVK1AihRhSqykWZbhScQGK8txH2wGKWSYifnQmZDVjYGR8yv",
  "key18": "4VE7oEpqh8pcoPzmmrZK4tXbGLeGAS5gGS8J2bLLbmRdXg8SHVbxRC2ie8z5mCoRYzkdGcGEHSVrmgaUqECEQED3",
  "key19": "5za9HstXsi4AdSQyyJq41gu6CaRoDjYjDwLKkmL4pm5v6VD9MGE67QiTxZEcx1VbYL6Hmvj2GAAZMkCR33yHWYjH",
  "key20": "8ciNK45XHBiAPXQV9oMLpxbHN2XnMRThQs3BvHAvvba2Mm5YCJUUehAE1CZtmJmMyv2YVPABAZEMxgMpQgcwX2n",
  "key21": "4kYU4erC4zhrRxQpNVDymoyngkBsJcLwE4RQFs2rbep7qAQXot3ar4veGXs7m9CpAAsG3VkJ7y6pJ7sBhgPAtj9C",
  "key22": "fwt417iafodB3TFFBtLXx3r3wdvWLysyHMqweyWGi4XF2NvQ8s3dToLcJd3qf9njNVC2jcx54nMoEWtHo32uGYa",
  "key23": "5RB4m8P18pHv51U55TWDF1UtsvoiCgSHyrcvjych4QJe3MwfSRWpdmBToeuPoBWAvZSQmBV89gkFxxZfe8ppdMKu",
  "key24": "2TeC24NmCc8pexJddq74PdDJzCDuSima8WXea2iRKCQrQpX9wHZ9Z74NRCsqoVfroLZ7yFSH1q12JeMRyXJcvMb1",
  "key25": "3Y7EJZE7GxZPkNkZpDvbqcscUg97zNuRoo78dwZNqnDj9vrfAdN2UxPzbvpVqTznEYgwEj3rSAPZXjxMcNqaQaLx",
  "key26": "5ypLamN9jo7HsphXdJCGk85rUT1EwQDfgjU2oxM3pzCUeNfpN6qatDuFGy4DRefaSmkfmEogY4L611Lbp53tBCoP",
  "key27": "4m3bjnt3cqrA8onzuGC2jLFybqy1iHafajNxGzfrMi6VaVQAGrhxz8KCXg6fP76R2oVPpZnUL4VmpTBcFvJEMCeb",
  "key28": "3bfRYStt6f5uGQciFhiiyZXDertF9oBzzohrLGdF2ibs2wBd1CPUtXByYkqzpdRc2PGtsiJen9GbzAuVqY3FV2CT",
  "key29": "AGeMaBXyHTEg6WdBsEbWEfs8ktUb78voTmaXfmjnCTUoqADApLxWkj1gmxyFswKg1vnQA6fhySpG2SDPnnfto42",
  "key30": "4dfa4z4ey6JJnGWuohUuFzPsrQUwoFYpZxbvdSSUANjMCs2HrLyaZt7qDm4GZBfyzuYBTzgtZYtzfEGnTp9X5fFe",
  "key31": "2qDDXUj75T95MA8sRJpb3CRvSFz5qjPJFJnjwRnoJLcrnrurcA6YCzUJWwy8ey7cy4rLKp2ARBZqyntkeykMxU69",
  "key32": "4EfwbajL1fyy6n2T5v7dDtLEm8V3FZVTB81EqmSkPXiTJymNs4HZ9QQiFUwYdgtaQQmB9YY1rNgxbFbUUXiYbBpQ",
  "key33": "2x87DdR6HhVE2u3WYFJYRHZ3tndneZaBDZdAiGEwD8UvAsVoXr28MNZMNiqc72Q3oZjLspLm87X1svHGtqfbSJXr",
  "key34": "47oV5tYqGP3tgbztY9Zv1Gqwju9XPpcUKPqs2tWhhgVjP7WYikaYGvDYJWkUJJ7WH1x9Zs3sdHaumADjJhbKoBYR"
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
