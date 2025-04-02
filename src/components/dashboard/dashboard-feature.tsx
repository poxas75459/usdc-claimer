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
    "3cxz3gMwzLVFxemfU7m1rW21KyCvkUw1jaRtDFChxoxJaQgPrs8HzRonV1LcbxJBrLeCyH6RZMNto6qVvWE27iw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43eX5Dwex7XEYyRCnpnNn15ZpmYE69BaaXRf7LBwjgFK8qREAz1CkSt7zK2XRAuMF6ZwrNdQsYcLWPFDnZLaAr7K",
  "key1": "3uahZYYe84VuwMoRdyFG6HeFJGirCmBMN6KMGBKL31bc4YuWzR6WwwJUNM3LB5yV1hBKALXcKjtCVm1fzbdrjgzx",
  "key2": "3Mj5gAQaX2Mkho9a98xb7JNt4o9zxVgeAa4rg4ivkrdtFJjFSX4VLt6i2szEfZT9hV4PZcMWy2KXfYRdmtU17TiL",
  "key3": "2sEbViokTBUGxFLt2twk8PV8hBNue87RJ7TqNpoBjmWuRShGjb6sMxbH8tJ9CZjrdDyeJWA28dk2iDYzFSaEmdX",
  "key4": "rX8vo9G6LxmFmYP13ffVqRmPPPVE5iT1muqDiJE7nFnKAN2CutNeUuSRBWCw6KWq76DEMtic9Sf8hT8j8WJ4q5Z",
  "key5": "4SzafvoW1HNEyo7Eg8Gq6j6huqpVTm4PLjaTdYsJH4pXwAG25sGk1UiHnEpYPdZTCCfHTfNchgW5Ho2pzjuvrxLo",
  "key6": "35W2TAE7RzxnGnxcCDUHDw4Y9JphVkYJoPBpccfs6SVGHr2V5kVwbyThrCKKxC5feFBmW95QVBx6BFCCjWercKd6",
  "key7": "GED6d8zNwbqRiAsQ5XUjhkJJ51jHbs7WoJAkhvPeSbtPexaYKS32eEP2dyRWSVLSo9kCQYiwTuLe74qUyPKcJCx",
  "key8": "53BwPB5tRvYCSVdrbdK2MiHKxjugCpBURUwMdxyctzNYT16iPnExHgK3cHGvYgJjFfzHjwhKZWivYuwdZmtS6q21",
  "key9": "41MZtZXUsD6baHEWpuvUQPoNEQG8DMz7hXSJENF7XwhGf7EusQwsU1aJK4gjegXTD6uKm2aJnfdczRxxrR8Tb411",
  "key10": "aLyndPaZhFJm8Cd2F8F7NZsKHcHisgk7vK4HuWfBeM8aZRW8yFMN3YZda6wX3AQzfqLYvEcY4NgcK9xHeJ8tA61",
  "key11": "2BpDmr2V4Lxamaz4d3K3XfxpTiZVXXpF7FMsN1V5kr3A896tWH9P2zsem5m1q9npSkkCM1CTPXeesQVM2RzHQxe8",
  "key12": "5MdSyGsgxEXTsvBKKnrgGUrZvAkYDW6kZb85ygW9copmKco4fmg4bdFNnCpWS6TZWwpjqu9TK7x5gzW2yZKEyEMj",
  "key13": "2cgV6MvatHLwgAEHTxxscx2U4NTDi5CciGRr2iWMA4EnXdr4mDNYcCtNcGfinAuiCRT3zsSsmvXgRGA3oMsfvoa6",
  "key14": "5k9CCTiqWQzEWdoUquDEfT1ppyvvXBdAuCUg1oGcL5LcLTCjfK9wd2aN2vqzW83H8qTK94o5LEP5osHhy9DG2kbg",
  "key15": "4TFN8JDED2W27pWwjME4LTuGn5AyiHDvKM6NTBNhca1mfzbrN3FFZKRt557PXys3KTFP661oftMzkuKMAhgwK3i7",
  "key16": "2qHBn7MfgY2C1QdHYeraXTU74E6p8XwNxEg7pmoLxjec5m5LRmgEyLDYVcX7pk3K2y2H8FqmwsuaYbwExmhzaWth",
  "key17": "5TSBR8QBE1X6dhKw5Jje3AhHhtMaj4zeSKHUZq8eWqZHswS6pdJGRQrmWWHrRQgHtQecCj23g9eHZ3TrA4iCLNVq",
  "key18": "3ngmdnzNZ8bZttT8tcQnNwGVoWR94vzTvT7iGSE3YD9c6zwBWaFkqVP8EFyPxL44Xp9SCKMJ9DWpxNoM4fpU4tc7",
  "key19": "3RUwiA8faWSeLyMFYu31McHanXY4pgVk2aLr7c8QwNZiqLpG1xcs7WryFAHpDWN4i16Zi8gzKCGEPz6snjqaRhGb",
  "key20": "3JXTzTyoXZLZTxnFfH7iP4FB7aS5W9RMoTJZo1VR86BqjAR7HypdkSPtW6F3YPC4Dxkd2etyoW9GmY1ruGtXASFV",
  "key21": "523qZ6odqwkdAzCjtUfzGkiZ6ziyXTZNZc6AzcrFqyvbSLdRJpiuJq9FAD4M4zn9Z6yQ9ek5WAFeAt3hfZqmfs7X",
  "key22": "3cAyQQ13TGYpnie89b7cjcfC12Buq3EbPG7NVcy3VptfnM9vxi6vnbzNGBS78vj75fqTPVo74c2wdU1GTdikHWVq",
  "key23": "2fQAY7x4yhEXNvhnRHGXQgnCd2WmhGQAkMxniGho2VWnrqF5xrwCqAzrpde9xYn3gN6ejVX9wBokQ3E5sVvwJXZZ",
  "key24": "2L3nrYB2vbkEQZmSjqfgApAe9itaSoKnUuZEsy49cAm7QFGzgCGonryFqAhgc8Aun36eRkgg8nvVfgNyWGwkdQ1j",
  "key25": "5M4imC4MbH446XoVC6YXk7bRfQphirNrdb5M8aVwa9XqGaefMVcHFvVLwARYNy3yCbkcpSBVxSnJieiyFHMVWwSg",
  "key26": "3R5RH8YD86NREMGSJr69SRFaUBkb9Vqfjb6hnMY6Mp6beXpRXLB6qRKUQFM1ZvBKLSrSSLejrkoitj3ADyjAhSYM",
  "key27": "xxeCHadDp788Fov36zmvxEhqJLNPEtrXN7G7uxLpN2iPRJtmZ1qPG34evqbrFozyap2pnABMVbwWtzXC41vUniM",
  "key28": "5uPGyskogB3ozgdf9SFajcenaPe1WMc3bgZHRfRP13tdAUd858n6xvhDxHFJR7tCttv8hR5hfMHWgXMuVB9NPfjP",
  "key29": "59NZFoF7K47Y3yNaYrMiMQzU88stUwVEvg4iyeop7YfpZeCcM4sFgNR2YuZEPuYaYFCHatMFt8KMzCHjW1wKcxPT",
  "key30": "4oUqE7NHjdKSCCFfKDpCf6KxApwNgRHaxdfg7avLFx3ViEjAGZy1hNcXebh1KDguT93QTQyjSjp2T9j8wbB7TkX2",
  "key31": "5keSoznmBpd8JW3xD4T8675oTjE88mikDpG54x2V1t8hUHEjeTyyHX3VCdhQkJ5QLKqLHuJqHo7NFEtmQTgzr3WZ",
  "key32": "UnjwXmxXrRrKtVDFub4WbaBwFx8mjGfoVHqSpA5kbRocwMVK16oVBSkgLRzAryKXNVNntdKLP3DCiUXQ3wdcx5F",
  "key33": "4m2ymKdeb4hgQs9JSBoKrLjf62AJBX5CzSa4XrenGw7gCxVczJNJJ6VwrmxPZEA2hAg2mt28BA23nvWXpVHBmf2s",
  "key34": "4ehzCjPGRHvgEWz81An15MUfF6mYVZTFK3BVFG5r1WBMTvYvgJQbgSV4rJP2EesBvrYtaB7sab1ixZicG5kcZ2ee"
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
