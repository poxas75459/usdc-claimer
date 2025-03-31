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
    "5myaC2cRZ17gjYgNiTGXkaTZmY6BsuZzMky45AAPeVi54TK2MgpPiNe6EZZUCnA2gf9XqCjAfLcKFg5iM3F9qakp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BzajTuikgMDYVY7WJqzQTv1TEiUDEbdfC4AtNVENgMArkw8AoguzJ1TtisuAc45GaWx1f3BsRgSD1PkQgXcgzCC",
  "key1": "2kQf1dLuN42zZpry9vGWWwbxvShcJxT6cJjUBgkCjPZySvpfU79PQSr6LgUhhp38NbRJrTK93Zw3YHibX24SkQi7",
  "key2": "3DkwbfaKZ9LzHWtdpPSvwmDjuBdeZk3CYzdkbC2NQLwTNe5KYt9EAv3wobegKK9182vFHAkrUs9P7oC2Zq4DHinK",
  "key3": "3tCdydWF4Q5X5yGhQRkoP7R9q7ZL3aZvW1kfX7YPGw9G1joHgyZzAiTq4fzsM1sbde6zj4Qgo7vkddGvJaZhGno1",
  "key4": "2CKchbBqg3ki2D2MLZd7b5b87xNgxipxAwzkUC6XpHg5WYa73BtaaSejDbgLjM9DQiUaiYtht9kHxRbB6AKdGPKV",
  "key5": "35D3kUygFxwnySGKr5A8enHezgHBmGT3Gxt8EaQQbvgNgTQCFRxH6UjHmSnc2Dji8v7tJdkCJpz1epKtGYVtmamy",
  "key6": "oVqfF2Sp9w7vuNcuHf5XMuCPcTcGbS7DM7oh5S8DGZcCUjiTi9HqA1azHcr7xM3C2q48roqviYhLnVamGq8nipu",
  "key7": "aQTY8HyASbqujPH96mP6a2xMuPKriVGej2FJkWQmHq2XcU3NLsy7cCk7D2NuLY6sZNcuYyoaPsToXChgXxTG4GJ",
  "key8": "4xHjgEHXJF4Kzo8kKX4UsqQAUFWL3mXL9zu8V1DAS2VCmBc912KqKXpWG7fnbra7CCbtgkhvJoUvaRjVYa8PdaUo",
  "key9": "31pNcbrQcchUqXULsPVKPwBtqDpWUXVsujEqcsWeusrupykuMGWxc2A9L1S38uXqkvkueHzBd1QmAdfNBZhHAMCf",
  "key10": "46tH21B5oHkdEdKzHxHog3eNaGZ89e5K7DX2xydA2kU7Dp7NAWnhMMV6oCcKzhiP5WcuJJcQW7W3XAQiGBbPtx2i",
  "key11": "5weyTaaAioVBJYSy1igbJCun42Rq1Q6pgPqnjh6qa3pjXZwErQ7VCxVLtXXz5BKRtNVvFDaYbwEfaoTQoNtkmcaK",
  "key12": "3wNPhPiPn68BK7PrwosHxvYuQprrj3spkeBtx4nZsPDrKbBAGnG4j92HMbMn3rPDjsjV6MDgRqQVbDURpYVEwRFf",
  "key13": "5d4WypvmwLq3jTysVzA5KKHVKuZZ5kEtX4PbpJNWvVJ816g9z2wwP5tjf6Rx7799Zex9wjsideEFTUTszic5KbFB",
  "key14": "2oBJAvyfq9PAqApuJYBh6HBG4sS1pCuVUMV2YGoptrTuSzRjPwJT3Qmyqgnt94DobTus3XZmaL7YeGc9PbdXvh9n",
  "key15": "4QNdu6bMQgYfJYLxhFTW26L32sKjk4ZweFe2spCogEjNywyiun34vbNCN6CnSkN7ZWH7jdG1ZxbdAdPVnoLKv7w1",
  "key16": "4UL4Km6aUa5LTKK8SkLpmotqoG9u5DJzt9dKZYHEFHCwxXEgYYg5yrP68xoHsUEThHYb4nY6PgkRzpUoxbDy1bSA",
  "key17": "2ZxW5mctu37mXnDzaWRxUBZ1f1ZDTQRopMm489DyuN1XbzSx9gSjneDvHS5bRnb7FsMzqLSbC3P2b4LJecbZjZP9",
  "key18": "2RNd7iTz2caG5HweNpgx9gTDuuEfah5KvxGVWtP3Gj8yYk8QdrtePYVhmW1WhmfDLBvLyt7MGbpVCNzGPfLw92Cw",
  "key19": "3U4RVCU8hM5KMeHnSAwyWUFStCSQ8iWeEqWDoTA8yAatn3yQvgXuU3v5XmxqQJMcDuwBPdVZ72J1pbojNZ8jzCwA",
  "key20": "5gkbrdSqdHX1H6HqFjNhW76VNXiUad2nXkaRdisG8WZNCXZLuAeQ8GfKaCFYTQ2r1ifdC1sYy4ormwAVrZtScRzf",
  "key21": "4bnJnwHZLjd4biFfsfcUFtmHfrwiw9WNuSpiGnZJwfKvozR47oMPbu8YtV4QXkfQ8VgWvDET36qw561zUy1tUPMJ",
  "key22": "5VjaKQDbXCAH5wDv5daTa662Ws6QfAv2e2L4M3E6tH88XNvUfX13oDcXQb6ZS1euxgjPogpoe5pYshmiVmYfH7Cb",
  "key23": "2aPyb8K3niaM8b2dc2UaUrBQs2NkRcBzVK4psZVNnFBPrYqE5uJcMXaJA4PiWqTLsY1zywoJedS5EixfhBKkg6S9",
  "key24": "3uCov4Kr6zbZL8QF8wyaCfbgaMCeNdRW3Do48KvhrXZQ612unYKCvYTpAPMgUMALtjsakFyg3fjfgNdSwnVA5riw",
  "key25": "3pkSvPWhmSv3wh7qAsZAwY5ZdL6G7dCo9kadT4owQix6NamAp5w7QbonAhLXFaA8MGCqF33gpXPVAF19Ux8br9Ad",
  "key26": "24ewhGV1P5gb27EzhrvDhUEcV5mqZqUih8sR3Hk8tdDVuhkZY8HWH1KAeaap2LpEDjQueV5iNP2sqX8qR5whoGDi",
  "key27": "4Fdx4WPaJTkUx4yhZqAGozZyXUUAtVAYkEPk4sSdBT823GQ3PvkGzrpBvMyHgFdeTZT9sJaNxEwJWgHSUgknsxTZ",
  "key28": "2otEmP7rF5uWLy4nCxCs4h39NzeEneTZUi2cD6yYRYJz9KEun99cP7vg31r4aghphE6Kx7hyKAAjCvogn8rp77cr",
  "key29": "NWmiKqJyjvwxNiWKrAbmidPxw3wiSoBNbrJHAXRpveTfZntVdDEDSqcqsnmjirUUD8Zugf59KgAyRe7qk92Z4vK",
  "key30": "3vHRnq64CKVmM77jmBnkqAK2N5vBVnBjUJ8Rnno2LU1q7NicVu2bSiYnYk2w3jRfRN5K7bRqyJSYHLxq7qGWDdLz",
  "key31": "5LuXXspSeu8wzPBcvJWgPDJPBvhhk4687Hm7C1uugBxXHKqFzupzQWv3FSWZapsXwBsmZVojdU98aCQYakbCxqNw",
  "key32": "5tcXcSBe6d6fAprUfjJvtNn1WgirS9UHpzmRfpDYBowbdGZnXtqtdtRxZEPsX7YpXorT1qgwgWuy3Sx3AXLGuAbv",
  "key33": "2zxF6YEJEVwNSqmLJ9NjuZQMifBYPH1rzJxFniXoGANc4vRPoLy38yveYnYBY4mEZ6d8Ldbp6MVKdG71MMuVqpoc",
  "key34": "2Ls3QrZDyrtA8Uor21tRhUwt41RXytRwXwKySsoYgPt7jAHDKCyHjMWGfnHGLwfhX2aJxQS3fXpuGRwuAYgySvTt",
  "key35": "Hv9TMmzBXhRERhgMbSNsQnh6wqDgg3ne8bUrLWVeND2dVHyLZMwJf4BeYRxY1XBVS7pKT6APZPfrXRKtXbbqFZB",
  "key36": "4jJbJyfJpeeHXLkRaCn9pc3xudUzyYH7sRVU62TPPV8wfvQjtKm84KdUG4BScxikLvhwgon847BKWev79ZYhkMAf",
  "key37": "5gHpoj35S8rDHKyEce6wCa5v31MzYGiaZrYLn7kPfB6KfVAj8rEEPpubjGmfzbFjpHbfhHfmMsQMssjyU2h4e3gC",
  "key38": "3EQXuFgfCsjmQvyPYBSjReEDg1K8dtBcpUgSozPsjYAgSWB2UmNpaFtu1J5jXb3FRfMrHMxCz7NFX9pSCLyeQK8v",
  "key39": "5aRyxiLLCbtcvfiGQBD73ojHMFEDugfFqt5CVt98oahAzVqBWG1FiLfzpPysEtA9amnd4DaKpodwkRyGtj1WDXYt",
  "key40": "5Hw5GXUQQBxujgSWNjNfLNJ3JQhF5VgNUFSthY2gkfuFDaPz7TH1TLiKCv1f4LpiCLaZkGBboywDaHuFa61eQqp1",
  "key41": "2j9FwepBKukdRJ1keH5xpHLghNE8xjiAWpvbixDRjSfEKJu9ekiEB15UQadXAsmRekZbsp8nNJWRHXh6yy6zWG9"
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
