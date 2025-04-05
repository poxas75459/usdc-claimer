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
    "3aajy1RNGwj6LfR6p4exwd4XqKypCdwmnXToUitUoYFnd6H1QoqgCs9SQqSrF6FLrvioQqvatt85u1cigxuMPcGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uMLkwb5SpqQ3rnTCqyoRAJ2zCczJabWJDkP4KrxQX8CXZjxZPjBSCpEGUEpka5GyDHTumCTnHS332wK2qoxMSSU",
  "key1": "8Yj17rsFCuHbPq8i55x9oUZ5fFTrENKqnEEhoMcEUUpm9DcVXtGJs34aEm377cQPx1fogYpNG641GkGAfU9Pw2T",
  "key2": "359exLbbPx6YnvRkUnaoN3DVdhRnKf7M2f2rP6zUhXJ4JNHnhM4zjBEVcP9mrmZXRn8YCK8GMS5JG2Amkt2sgZd3",
  "key3": "4xpVFeXosX7qZddwi93iCbPyFwutYUvkanhoVZBffm5ZHCBjjFHo9iR5bXGdt1K8dsUiKFvr8nbNK8wXFuaquMc6",
  "key4": "2N3FCtvTCkrxMvtW2pytiQJcDKmhjap7PMWEvE8spRYzET9dHjUNsq9XjD78xL4x4jZowHvhyEe6x9qUYqyiAKam",
  "key5": "5xyPayHEohZAM7y73QGUhGnxHWfTtRR1K6PfxSz5uNhWdTxtvgL6n3TYUZxJzmJ6ew94px8yoH8XUWnKVZUtfbxf",
  "key6": "4eRxsLtnTocja1uUe29dBzqFw8D5FPTJChxV5eEbYVR3d4tJAZF4es5BzMDapvJq6RR8QUv9pBEiojgZtZTnasxd",
  "key7": "2MhE1FydkWNJrVVirVyDqvErKDabFsT4w887iiq228XGjHvcyX6PUkRsh1FjvPSZDJP1usA641nLwiDsrdDjZiEp",
  "key8": "5Zpw2ST2xEgxstt5hVQNPUKCsisenf6tocd9u9sntCg1s62vzhCL1MwnE1TYxYvtGRNnYYhNYZBLaQ26YtoUswk6",
  "key9": "3EyP2UzmgRB7uNQoaVjXBazWixwk87UiU2zUxs1eArHN8NPCVTPheQEt5riM4noxSaWcAgZqCKAE8DgxYattqyQf",
  "key10": "58z138AGvUvkbpGokzVyFSzyPm9mQPtjUZq46H2apCxnH6xNaSvM89MQJJ2oLsa7Ev6BzgaK1Qm4YYvWWCyYeiHE",
  "key11": "ixpba1tUos9MuVbs9pU4uMrkwW8NDUB6YCHt4DK4ADZUeKYAdRPcptCNwrCQGSjgHRMMKBabhkzk8gjEmd4jXmL",
  "key12": "2EHybFPaD9ESMrPDCgWn7qa1gsU2xRJq6cScxTDzSw7HREtfArjgytTJykppBz3PLYXnbSwkDoJVnqNHCGusbT72",
  "key13": "28PV9aeyrQiXqD9qLYN4V7p62ndwi9DeFq4ZKyi1GuBD7f8TqZyzAK3TUpu6jZLWDvpzxk9XFz3YVqsNJEEMZLim",
  "key14": "3kp2y45VSswBBKjeJs7Se4hnjaWUxeNbcbyzpBiemybw3qxUVSpDov2fYchvFhy8EaLAYrvhFFkiou6FoiPqCr2r",
  "key15": "2qZ2AryRn1iZWoV8vUMHD9AjLVJ2RkKZPB4UwJZHLCkRH4347ws2J7UU2d9dh595G3Vc43XBpRL2auQEha2c5UPn",
  "key16": "61dmkBmoe5KRrn3nPwbJSndbBYYGu66KfqFYibdtfu3B89q7suNfk7VdhB2Bn4dnKurTNDnj5NrTSEzTZSWbBp3J",
  "key17": "wVjsuKeMPNCkHe1qApkn2DTWBZe1Xe4r5kYrZe2usSqS5YC8BAnwLVXfWMBMaB9HwHb6jTdQ8Vso4tg1RowhjPH",
  "key18": "3pRhcQWQ8dxP5jsrMYs7sfbM98qcKHFUxHiwoK7zMwt8hwyLo5cDsyJj9vWzET7n31u721EcXQvZS74Ttb3ZYyGy",
  "key19": "sKUTGpLNWGrkLYK5A1KdbsDSMB3vRkwytJ5rVR1wbAuksdMwLUSfe1ebhiXKYPQK9MkShZnhCCnh2PjgRR4bvsy",
  "key20": "2E9jgd866jLowQkTDrWDm5DoEXjZGWQcyagdjUUDXmnAiCGgaHGw4JQdChVmCECrHH1bNs5K9B6wx3K4kKKUkn5A",
  "key21": "3hDgTtajnTHQgfUqXn8nbHTu4PddxL5D6RqATesVPeomXzmw8Sm9BB7jdeeRqAHW1Jf8kpYwNLGnqWkPTpdURzYV",
  "key22": "2T6XzuUCFBVCNu93hZkQB86Uu5WLaTeVUqCtdjqEoidq6qDLX4eWqRaor6XMwKm4mfonVgmRudikHpfp2hTdi2td",
  "key23": "2BTo1Y535G2DGBnY49TN9TyxEC12pFQ4YQDoqK1DDHNGtKHB5UG1wEPm6Y2ap91F7sFyXFJw1vSEmfyyHr53Wkx7",
  "key24": "avB3QmWja9yiSpCwNe9CRLVJCu5WBpa564Rhk6dYTEoq8ZftQcdNBkW7wYJtcrTBbAYsHK8dHEqppRbUL9ffh2f",
  "key25": "3VMr819gwVhwHjKkxsxUHaQxeKYkpZ8XSNx98GeivQvtTbryfV5vqrhD32VcsH4wSArtjS7pZryGAm5wDsYJ1rEy",
  "key26": "4R1ZVyb5B1nA3DA2UKr4qxwVWegaSkpPZRTdTSdbVrz11RhMxq4FqjYCYiSzScsDopt6dqwEeL9QY1SWa1zwGhoE",
  "key27": "5Ujz7Qyjsvxb2apAJ3AzbUn1VKkRU7RAVTEKdUQJDsVrAVxaJ3jh9328W9dP3sZrgP3mxGd3jiFpXhp4ZryJ5M9L",
  "key28": "2Kciq387Se3xFoChpiHbTi4zzfkVdnu45MBH2mU2FFwCrcRmrGHCtvoBKPU42URvCXWvRzGnVQAi7vyjzWsYmqbV",
  "key29": "3sKFT8ve4ssGEcUv8PtBUPifcFCPnQDD5yKbuee2pZcRUjkGyf5tEH1kVQvbgskoYs42S8b2L7VYW2BjjfogKmJN",
  "key30": "3Lev8tTVuxpCn2K1xSbcY1doxHKc3Hn8VFw3yk1ciBTkqsRw1F2c9ANYppwWtVVaJm8GGhUDYpa8br4HXSMYYwM7",
  "key31": "4NU4NCwESLdceTjpAWQErHbBFfeaWz3Q1qUKNJwZjGBFAa91u9ExjFDgo29ypxKv7C3MsMX1Ud8M5JqVh4vSBGvP",
  "key32": "5FKkZAr9VJkpBuW662RdPVgb9KeovEtfHATqRW8yg85kXx8fgz9rojmDka9FmQ9kjUn5HFPje1ZCNQ2xEZdzkMxw",
  "key33": "3JaR5XV4dwzpFBGQzhHbzbyQ8ietECQqjGNksfdPRSyTjc6BnzZCw56jAGjZwc1kthiR3DiN89T7oxqzbpjqFaei",
  "key34": "2zauK6oTA7UkPSkTSPvkbfxaqW1aSm8JPFJrCPRNzodTGEWS8Zz4YupNV4Uvy6zWAoWvgqJxxPcnYYYqEFFj4iMw",
  "key35": "6f67NGEWYNP4DMfe6ttDkWC8qmo9DefM65j3PtWdSFM3Epc9NBVws6igs3uu4KxjXYho8YZY98hp9m7cfTxRJsJ",
  "key36": "mudg63zPBVNSB2TCK2reNyY7S4vKmDjHtDY3N8Y1QMaBMUbjJ6Mbi8KyxeuwTX2ME1DKJVVJYpN8Cho9N2XD9gD",
  "key37": "3hLEmZe83xkmDXdELtPZekZ21oGa2jmEvgvKZb7xkXybdx2bDivfLoxz2EhvSTrMqicJqVeqZoMiVivbNuBULjVr",
  "key38": "5MzaBDZzaaaGhFSGvBDHaFb5DRuifhRAU1s3PmNaWysVMgVa5QyHHWdNJ5q5G4hSSUvKWfuujZNst7CYqT2vTWsz",
  "key39": "2nGEsN9hf4FUAFNrpuACUBYHhS48dqo7bGZM2TZgRpvT51VLQNyhdM3y6eQwvZdLJwxcz1vAmLqLW1wvgJRFQ18d",
  "key40": "2ajBVjAN1xBksSZA2tY9CYR6cNahXMQaixFhtv4V85y8wJq29GW7DBfw7MtBBGQxwWYsjeaDsTXmhb6uyAaZn48o",
  "key41": "5UvDsc5zB2d42H1hU756oNrPsu78oFZCKHwHP5nk7Fgx9JVVY5cu6aeL6H7fWXoLLYyKE4SJjyxBBDwfZR2xTKD7",
  "key42": "2K8B8UxdYKev944SZgbbbohenvyQuYhTtMK8DTxudhe5HmjMr6PYvYmvMUju88vusVuQAKAKAi5aH6T1fGJePEUu",
  "key43": "2Tpn4SdeUXv8C1i8n9Bwp6vqtkRR6GmzuEHQA4R4H1K8oRtdesa4E75YydXthi45dKLzQW9zVyLkYLkVYUCUsQTi",
  "key44": "jzyDs1sM6os521UAPrZS9mNLyyY7G3P9aSjuvhRup6eYWYJYMXKGaDf3iP9PqdL8NqRqthc7hV8FQBukCfdWfCh",
  "key45": "2YJejJkGs4kctqdRmmvWrTTdLQbzLi7WQr4nZjspWY335gdhxKzJPSZUmnyHEtJphUf5JKJPB66JFSnKLEr1ZEA9",
  "key46": "2JXB7pVeo3xS8gcK1BVJyNYSEXDkF1tJV4xYtDfKiRCeqBUa27hvvmP6dyadH3UyEgHwwERVMFQoM9dUou5xiuWk"
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
