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
    "Hw967u9fG9QiKZ5uK1rd1i3VHuXGtRiWBfZ58DRriGThn5pdJZyAXF66oGVGYVxfJBQWiZhAy5R9XPmZ84trtps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q4ocPrRGPSLvUDVQgqV9MziA1JMTVtaNoW5B9HhsTeASp9GoKfmaHA7Zaj6ceV2R7TvV2mcUF6vHF1eJAnQGw6b",
  "key1": "3fC7QgzWF4dDeD7Hhj7hfbtr4jz3sPuNfcdo4q8yrpSDXMFoETJrzi7fjy8Qzp2qbbvcDkxEzoTAYgsRpGcJGrPR",
  "key2": "HUDj6SXgabxYiidhyeEHsd1Rda9CRsGyKaYfDrfMbHQNt49DRXjyKSd9YeWXRvQqtPqd9YWMUvg5Po9C82PQR3k",
  "key3": "3GzbZpoRm1KZ3MqxPucYJi7BEgsrvogNi2G1yyffNxgasu9ADhouKZV5o33jKm9epj9jtM7mNLavsX6iL3QjQMG6",
  "key4": "5eUDwAzc6sUyjYk7PY9GExMxJLjJjv8CVFsy9yry6kUsqxMBLEAbP8Nuj79XGgmc5pLDkLsyWarvcFKUnFoP6AEe",
  "key5": "4vqtjzbaiym8zs1KjSJLoNDKfgySMoycG8tLg6AKSvDGvqiR8F451tWyGzE3sjqHg9WnGjc53Xf6GwV1qrU1YWbz",
  "key6": "4D5kHCRhZdoYP2AWXV4tt14w5m1SxitFNLp7t4MfWZiq7GB3TNf4y35AU7hoph2YCzj6n8kmuWHfwmC7fJ3AEHMH",
  "key7": "jy34zqyc1t6t1ikXvKKCFUTfbgbGSGgZGhZEhW6kVrHU6GPeL66bPPeYY6RjVMJPbnBmrZQddL9FL18g5aEQLkE",
  "key8": "4KHSrBSABzBVaBzNgobQc2xrUWX8C2ZwMsHCmvuyXnqw6YnUAH4hPRCx8pi2hEzzbznGNcntY2eBSVW6FMc3h15i",
  "key9": "34zfAQbEZSkH3mcv8BuomnNtxotAdjsoJBvztF8496f4TKY6d1FDxQjjTDCboqQrceeAWVToVvEvPs3uK5K3K34u",
  "key10": "DWHodorLSRFfnzs3tXuieWJWK7ssBxNXMcAYv94G4Gicsk8Cjd4xG3EwsQbuhjtKGAAafykJm1Qj9ZBCTrrmSSc",
  "key11": "4GRLy8ZXBWdbQuMgcGZuLP8LSe1JquBKLdqFU4sXaRV1isgzRKiq6RhtJHbrYBSs2BWfjv7uka5tevkPC3xCQTaV",
  "key12": "4u2ZJQHn4hhfoQ9JxzcqHScS62sLuT3VLAXKBJvL8k44yLVRteeVyppxvhJ7S7BebCWhSbL8RBUUNWVBp7HWAGiW",
  "key13": "2Tx3aWLEHATKfgS72ePVB7AZEqh1WRFat8ZQ9o65GnDJtDFa353tXhvCxdaV4UbLmABj1MQbWFCHc241k8oycZb7",
  "key14": "3JBKpkxMUcJRGrAorJhWXza724GBsFr8vwWq8ooyA2QvLXifn6PNxHunYXQjDVmsGJ8wwmSpYpazuT14mJwZY1au",
  "key15": "2fTnrRffKiWrp9t5Lnba6v4VYJDpugWRMcJTg77pL1xEcbBb35mtvrSNButJp6JV6Ty57eDJihwknVATeMRaV5vk",
  "key16": "57wHAsMrAffqBE3gxatoDx386BPhLAhyq3HuxxsN3F6PDHC4axtrWBhDw1Mf3kdbL36h4qg7GcwYP66NucU4j2wf",
  "key17": "46K8kzWyVKWCh4hRiZaYPyo7CAePVGPNwNS2ztSCUd2WvxwR8MAvcgrUuhTk6K4biwTnWQ1W4zx8cVWE8oLiifLG",
  "key18": "29ZTvd345wiCXKmGndZwzjAWVXv61Dxypb7Kic77qBBGqj8RZhZyiMPErGzVrGQgrumR9gwNykU2bFTnsJk9Aj7g",
  "key19": "4u25n3tQoR3PEbBvRdQr3NwkushFs7fR2TR8gG9dsLUDTQuefi8Ye6rw4TjHFU6bUQhidveF6n12Wk2cVAmViQjD",
  "key20": "3E47bfjG8u6MVxewnwfEDpNqyekQQs51C3qpLqocF5r6A9oDVT28TKv4Vk2jDdBKXuHr99MpPYKusvwYZwcpJJEA",
  "key21": "4jqEcTZrsAjXysaBjfBw7ZvgNfZnG9kdmid6quNHpWB9fS6DwmyKHBF87T2fZgDqeAvu5nsjoBauLTQX4VaQNTUo",
  "key22": "62x28arKsK97ABq5R4V7ToGPHn1N35rzkCywvwR9uXq9PArUzP33NPpypE3N1MSF7PbrFtJsEgAStbERd6bgA9wC",
  "key23": "3v56Fru8KhaNjFeXfDBjt2a6UjCJf25dHcQ3TNUSoeJXfXQ9eBUpptPXw1npb1K47JA1LoR8g963Co4Mdn78fFUc",
  "key24": "3T1pViMYRc3zm3oGK77heHW87CMnSkbrG2hN5mHaLYd6BkbXnHa1DHGvUgxt9NaDrgmyZxk3AnqoGY8mKErZLiWZ",
  "key25": "455TNTgUSscBKfjpBj8ihhbTRTkHN6roMRiumH6yqXQpAeoMgcRmzjCZA74HziuLAjfeB9RsbbVYtJJTjcMjCGc6",
  "key26": "3DBWcjhP15eQWcvfJ8w1FbBBf8gzSJjXstovgiU3stP9pJXtRyVJ3qVWgCuhGgFSiNYk71XRoKUQ1uxsb97w7k66",
  "key27": "2dPn9x22NwEGfHoQNJbx75M1Z4x2v5tLxKLDtheaDD2XTGg8ErDrNNoByCXtzTU5bqmsXuSFcCYk6mw2aWK6Vwcc",
  "key28": "288huQq43jYMsVdAMCvJk7Jwe3SeUYxu1FhvZsjkQqREA77q2G3psrqZdAsFmRdzmFgvQYtdedjivFcg5TFD6FJ6",
  "key29": "2QLW5QuZGSatKnsTbbmafrjuS23d7429yJ1ey9SDfG2nXcmyLi1j3F2w3snUjWjZ8egpHEqgXpwaQybscSQwQVkU",
  "key30": "ZJHywcoqjePB25UzyinrhRwkdwNHF9qCTAVadbPndSfwKVAYBk2SKZ4uCgUGgB8FLpsteYj33sVHQZmhDyR66vG",
  "key31": "4gpXbCQb1mErX7yqJQLRgfj34SnuaJW2kBTqDdHrKyFDjkhCxnd6Bxmoku7792CFfDBrEzDutmtuCRH4pgV3tAXi",
  "key32": "pR2jMyrQFgmMoHaK9oSsjptw4QL3eh894obQToatabsUgSL7hJjvBWLUrgyFQq7hEoMC4PSK72BFTjN3DnYZnWx",
  "key33": "5r71PjZyW5kiJBaVqDuB4Yq9KCfKbBAKg5Eiqtt6crwMvvXTzLKfcTnG25Z5epPriPqzhyx2gApcC2uhgBfxSuZn",
  "key34": "eya2EMkDeece2uKD3KtxNhAkrdFCLUSY8M9U6RzkNYvaijqAG195tSzvNS6Gv9Ns42N11mQJiuaDsu89LT51CnQ",
  "key35": "56Dx6m7UT96Fz7muhtrHSnHEkWnxVeffHWQQ3hxwM5gPzvHK4KuqFdHGwQ9SEZzs6672QVLmaA93xfjSRCiuYZVU",
  "key36": "5sZvhrhVkNMJrZKJ6BugpyMNZ7hDGHexYPiKCgNz2MNTnKmssCmcCwATaeXQgEHrXAwjpAGSEytCebmyxZGf9uaG",
  "key37": "4PkMAeyy5C8Cyw4K9AnQZBjxsGdaXHPYLpFKZpRc3S8ZJoznAotRjvSS83oBhEdKMhgiJY5GtrJc6hk2nSncJwyB",
  "key38": "2F2mEAqg5M7TyJxrgpK5TtCvCpsp4r7gVMB24GfDRWjhuZuM5GnnGEHJbEwPXZJaG3d13i2crDSqiesWfW87REQn",
  "key39": "vZvQ81Mh8toHhbzzea5qxznETZ4TSz34oLLszxcL1AEwgZv1uVf5JoXKf8M7hwgLjWAzFwRFeucn3e4LquWiz9x",
  "key40": "2dYS9jteYjQs4sgJEL3c9K9XCbMyt2o16TCkf8E4KbBrya7NNGkUC2j77yJ6EnFqCDfR3U648mGKctxTiXvmqqQk",
  "key41": "5XKVGiSgXHaig1avQMrk2sEUdssrmXEARtYu7RK7T5K6AsBvgoqBkRTTCpgzQjLTVoPZnCGacMJWzXbUSPPTzcK5",
  "key42": "5gpGvjSKdb3YqRbo7tPS5TeDYoNyokGeSKspwfAE3YLrzGBgGaDRAq5XRDsbAf1KcHhHM3yVCBC4CqxYee5E2TYX"
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
