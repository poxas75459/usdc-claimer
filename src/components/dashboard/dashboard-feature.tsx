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
    "3oRH9GZycsTnkM9bEgPU6Xvyj1eE4ZWrB6gUG5Xjc8Eq5ocH3iCEERQrUC86BdJ1eARfBt6FVQ8qwvRoaohFUSKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62zgwRqk524bwC3Xp79nFT9DVEzVbN1iHJ4RXohMWxRoBrCQNcoE5A2xPSGZde1qcSAGBx9bXykdSs9EHRtYaaxh",
  "key1": "4ejQSsKUtLqMN9q1Cb9z8yXrwXa2qNj5jjqVXk4WC3YVdKu79pGtsBFnoJmKQgMRCtcTpKKdjuZq4jbqqycHE38w",
  "key2": "4idHh1ho4wXsQc8ZeTnAR4owyEkBxufZiuFmCuV1ZYuYT5GHRpSoAcecvMT3MbTJqCaXXoYn1njy1hPHgNNB2p6g",
  "key3": "3piuoUuqhSKtGao51DzkJQ5MHqjQb3JjtiLgU9sceScBezVYupG8VAqYskfxEY7oAFqbn5soeCcCFQAoJ727QMz6",
  "key4": "47KY3KtB32p5NspoGFuHz1WqjabUGZnk2dkmAK8aRsyQTUmMH1tdozL1jQ4eFoNnt95Hp4KspkSncvehfCS9w4Td",
  "key5": "4CAW8h7MqtMNiKVkeWhmDLkg4kNj92BVwH4ysYq7WgE68x48DpGMwnsnoSrJe1XSecUSPfsKi2Sqe8NYqvkHazX9",
  "key6": "2MPNJZURWdo9M5yUU58WNtM6RRVGSQ12bQovw8SsRgVx6CHCdeKdo8ySbiNVnZvwBogPipA4rVoQ1wnfkJtEm3iC",
  "key7": "5Mb4dp8M9n3EcWrkuAUFcrfRqrjKmA5RrgvHty1kSwMLLkNGKC7VxnRmE8dmCbmeZMG3YSbDTY4MSDsWftNrKAPG",
  "key8": "3jaHU7k75AnvJ9rvb1iy9HGRLykqosKsvAZWoduvcZqEfiRfsEvnEBaYtmBsWGsa75wBQDSYeyU22GwxywtfrFtD",
  "key9": "4KnPvsWFhJ9YFMo9yVGHFNo3mnoGHQiGk8ZDsS3c9Nr1VkBXkvKQtY4zuXU5itAQH8uT31MxZq4HDV2xikKfy218",
  "key10": "5ft1Px5ZYvSsgoHgY3XGut3nR5zXhmiaNGiCCy55mht4sGTZEKfPLXFVc5wmhd8Gmx3JjRF9zQvwdyAUAeuJgz9X",
  "key11": "3FfB1cND2fkGx9j8o7NfNkGjTdTmS7AYHQk5pzDd3sN6uHMZatPkLSqhibrj35bZLUrsFDCdU9CvxfR7AnUPFdki",
  "key12": "REo2Jm8CSXtVkR6eZ78WAKqu92fR9WUxBTtZhnhz7VaPmA4HTKE5SQWw3krVYLKxmbXT9pRQdXbnaNMjtzUGXRD",
  "key13": "5ycD5p4h9VMmc289CQMZXrbS1PVGKYGNq8JiHjp6EsexuUz5j4vgEqWxE4gXVWRFnYFV82sdNkt4NKpnHVvfx2yH",
  "key14": "3woxSmksa5Pc7TTUGWqY1E7Ak8HiTFKUHKJUPRqjafGpzhQa6A39S4avTWZb1gi7JHLeixEfmgF4yuQbTa678h7g",
  "key15": "ZsDhuAcmoV4tG9NDmLvQxbV9unStaac1C2GLJAF4JtAGtZjpy4zoVJGTwF8uVz3Dd5gHWzbHxXXtcTvpXLquiN3",
  "key16": "2NJEwfaVsUzeazRvM34FtnSnroPdBQiBbWCDAUEJoVHu5wShzPyqurAF9kK6U39DHNcFwLLVtLmBhrPbcorJoU5N",
  "key17": "42fUmNr4XetEvpWYszGqJsu4KqeWjeK6xeaJfVgsuCXmuQUP5EzohYK1yaRgcyfoyhoF3AenvuBuxVvzG6q4Skis",
  "key18": "5zLtUKUTT7HKVuu93riy4jv7DLDxg17Qp6XzyeW4GJKLrML88to1S8zfpEnKUWEDyuie9kMZ299EX1ato2DjiVqq",
  "key19": "2iywy6N8GUTb3mzek8wRHeuam4AE4XTW4Z829yhK5vUxiCY5as6PwLVCr4VPXqoh7ALr3UHEvFTAGBHZRYf7QEfU",
  "key20": "4X7khPhR1qBz5W9vcQnk8ybXiPf7JeGqeqeZrdWr1t1wMuHukkyEVLyPUksCKpE6kCn3BnDyhKv81DzysLu9bHdm",
  "key21": "37VSkDjmvAoJb4rdskLLxkTUX9EWAgyLJgVSghmnbTc7dRwwCnswmo7fzQ2cgZVHBVNrAUMxFcCRQTKvY9GdJMwC",
  "key22": "aFAVoV8ucD9G9zHi2hkGmRLrryJ5BUvgbR3VMPV4zmjnkXeonQx8dgGUoaCDk5Jqg8aPVs1zSkAyDesg25TezvC",
  "key23": "5JzGrqYRM2bKnnCuFpYweMs6xYRxgDbd2zFoQ3rmR3ABK7FGFD6PLBctxkGPNyNG4m8MwMDiu5u28D4XvxrJnrnL",
  "key24": "3h7sXTZDLzBn5saFk3xyT6DmeLw9vo2V2fZkKwWFatq1cE6vmP8gb3FJm38tmy9FQJoP66sf4wFYuS6djSFdFr4P",
  "key25": "wB4NY8irmxXEcvh21SpzofmgS4KZ3Dvo4C65co6VeD8CsFRbukRsuanrpyf9cR3MVfnjN25jyEN8xo5pMn5PT2G",
  "key26": "22SQw1HErk8oRHLKXzyvPnc1qAuBCLJYLs9ry4w88JrsYJB7PNb68p6rwek5EWcrqxCgLsh6fzg4AUKkQ4DhBDAy",
  "key27": "34ZhK9Fsbvg2t5xbw8mXk9Lowv6gYYp3n1YadpZ2gHp3YXnpAPbokXWDb4vvJsEmuHq7vQK4ChcLgr94TUBbsK4H",
  "key28": "2r81RQ83fxJbjgNwLHtSXxkefs9nV5HwNHUUJXV6H25ZwgK5Zuqd3ZucXj4cgFF7KBwKY9kcsuG2UPp9S6hHvQKF",
  "key29": "4hwhVpd6UBEwRYjXbMjL2vsEB8guCbFz9mbARmFano2zXKS2X64kmcua2kybQLLFvxsfo5sJX5nwFrmi4eFMxRXj",
  "key30": "Xq72P3XowmE7ZBCcApDDTeGQANTZb2Eex54d3L1a7MAu9YZjEaPsyvBEsheJsmwNVHmyXP2sBYkPizJtkm8Sxm3",
  "key31": "461Fpcp1ru5TjpxYvamADw4yqRXe65RuBN6C1253qN7HvQu4ZSRBn8P4itWAmwAQqdcuFFw844tE2SxoLVRUY2hu",
  "key32": "422M7NWjbsDHwCf9HpNUidz2Ht7Dg7Ngwyhr6nmG45JLrrBV5m7fxUZizU8CanZvKByw9e38RMCCsHSEnbZad6zU",
  "key33": "64FHCx48msdoquucrsBsE2SF46rETeXNY7jNdWVXBRzYty4wCBbjwJEoGrnvU4LrAJF8T5MiE7zMVZSERfzzBz9E",
  "key34": "32Qr9ussHfKmq7BToHzzKAUXUAom37bNQ4T2fCrnNug7K9UcFuKH2FwNCTMXHiipMbTaU1zCNEFrbwbQ4NxXcQzp",
  "key35": "2LKwxeRE8DKHarN1ygM8N4B7jaipwyxYKVFX8c8SjGrhZ81eiXbfzpCbKeCie2AfeaZwKgSfu293fDdUynwUSjB5",
  "key36": "2jbjq6zvGCXVvUpgsBoSENyAY2eTTcNeALowx9N55yZYmUUx8xGUfqUcpbFAbUhDJoZHTfmpFEkFP2rBuZ2fbPYy",
  "key37": "3xwtJq1cbnSz5omXozewwS1ntMut3G33BBQxZG6Xan1oPJW8KDYoycjZQFMtYFeCPsWxFXrq2KpiVhBjRMFk7WKn"
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
