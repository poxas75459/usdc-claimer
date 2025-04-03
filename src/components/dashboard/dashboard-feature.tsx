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
    "3j6mHpZqExCUi3hoLBT57QMtNJrbmpZYL5kkkddtARAz136jzp7cSdK4bd4j9NJfh7FZfLyPRn4xBCeQ3SMPfUmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BLaJd1edrD8R34sQAp16BQzX7ruiFgr7K2sbA5VpJbpkWLp2SUoSzQdTpsTrcLhwWq5WrpjYxmVfZHPcXuRo8zr",
  "key1": "2e6haEixuPVFwaKXckCyJTDTtUYU3PtktL7oVSJngDQCRoNDdgqxkefYeh8mySUW5rS7maRihfdDVMPg65cn6gFF",
  "key2": "5jnuzWiX4Ac18xqUss2r135vbjFZfPJMPDu2Gn9arKAvAMDWywcUC1cUXA1WSnJknFqEsrpZ6vaR9g9oihanjPzp",
  "key3": "411RUbFEZAqcjVxD44PG5ecmC8yc1ab2rJMU7dTK7JKSbKGoeA6vUHU9umdPaBCpe7DNbgNRvrzN9JZLtm6tt8ke",
  "key4": "6BTNUTQnhtw4fULVFGukTLLQfAngBrF2iNpzTKM9gy5kUCzZqPXTzsXMxBSrSrgLgf4cXxicUdR8n539xDScQ7f",
  "key5": "JZKJz5G2AsQGsBujQtgVD8N4EEVfh6qy2LdtS8xAexvqMZf7Lt6LjVJw2ZHpis8u4zLp7L5Hf1qenXL25rTedxB",
  "key6": "2pVahh1uEV5J2UR1rwXCrnQneGJ92XTrsDEd1G5NjffyHYSanX4PTdgo9biLZS9ksyZ2BSGjzzi9H9iGqmpdJv5A",
  "key7": "4kQMdMJUWu2VLuGDLVfK1nnt32FJdror7gJNWZL3joi27QavXS1QGWZgQsgo2An97CKwsW255oq5k4ENK6R6WngJ",
  "key8": "Ek4ikaF62GvCrTeJHMvpjoxvqdve7yzuWpnnFeu4HUZsV6CgMk2gAA2EL8TU25LNZVC35SkmgKftB76Y2TSdK29",
  "key9": "59qPHw5CQGKiEfa2zMhrEEo29ho4RxDe6muXxo7BYMQKTkp96TGGUVorc9N2nedJy8hqs7BkK2FBaPeryCfH77QH",
  "key10": "5r47Adw29VGkVYGNYr8BjL1TsQVLEdYDizbth1rZxahhrPcuNDxEUFGmXyxuYb3YFhb9VJAXsTzWKjXiiPqFmQxC",
  "key11": "4i6NkjDhYcfsNZEUFPJ9y7PGmk3xajyzN4SQxb7LyedW4dP8Ge66pUUrFdqoc7F3852DBDQz5CjPa3GDuc8grEep",
  "key12": "2aiYdCXitZ7LmczdwsvryaAY2dM9bZLXS5bkUEqcCvPRF2wymvqYYG3pc23vLydVTecUDztvUUyXwF1s82MiMg1u",
  "key13": "5G5XTWcRm5439KTBubqkT4ZUwjp4uhB7S6DedbyrK8t6fuPUTPbBw4c1Hc4XHBVf9C7pAVsNfAwChaz1pvm7pJ7H",
  "key14": "w4z1oAU91uuFWDy3oTH5g6yFA3rUWzYVZTTBA8TakHUnoecneVHn3fwMcYzTj5szashhjuoSp7PgKwty2wqVf5j",
  "key15": "2DRiEuTBaPAWza6ANuNCHAnnr9CMXHXmbaKeGB9c7TU5srrQr5YyWMPpGS5VfvrQn9MHVE7tEnGZJ4GyTBpSx9Ar",
  "key16": "kAAUKErCwc2DDrLo69wLecWvi4NSu82tEx4BK3BGynn3xYmVrtKNH1JahLjH8TVxLprSZarfzz6o1XxAsxjzavJ",
  "key17": "2QHmBHvf7qBHhMbnX23dqDhJNXijNSB7rW5s8YYos2ERpkt5MiySHis55DDLhKZ81XZ7M8KStkRwTR3YTZTzc5Am",
  "key18": "5AiqkrZct6tN2axjaXbNoG5hdPnwd4ciihh17hV8DDDXVnA3jPH77QQPSFJ14bMmN3JyyVLiZhtAL35Sc7rVsFCP",
  "key19": "2EJc3h8mJsdnGzye84B8QEnyxcGVmQD6DkZn75TPiVjZqV5LSuj8DXMVK5ayVHkKLGga5jByEVh5bR1DrnSSb8dV",
  "key20": "2WSHdryT7cCNCDn9KDVKcBP9jBesnsY2MWxDpzQXpW6aHxeHihJhBLHKwRhmmnjfiJwXDruFdDLKE1mwbczdTB2r",
  "key21": "3m7HXqLZ3513wh2cnUmtUX7wcUBhsTmBsGFX9n6rag99cw2e5J9BkFtXAYRZ799E2NoBdgjZuFDsGUtBV7tRucYC",
  "key22": "7HJ3ftEut8CZ94mzo8sDhJHCyvqETzmm55TQ8NaQQpW5MMd8qV1QhGosXyEQxhT4iN5dFPhNteDP8V3FmUB1YEV",
  "key23": "JjDAEMfYVuAX7WXqCdzC3CN62thbecjHKT8MUe8GFw8oTsHJ891zEtGbR5Z7GoPLyEYXFgHWJGtDB16jCxXFHKL",
  "key24": "2dkiT3GhNFQRpqW7ypcHY2HxMWryMMp92hAhWpavJvdgKg1KgqaYSHwbPR2KsU7WmMjkB61uvKBuURrghDgPX7MS",
  "key25": "2kK7fpwapEKuSbbXxWUW4gzCnt4Gg9KQB5ePxTr8j3orrti7kjQYLSSj645GgjvmvEEqnzfhjtvrmfLkS4zQuqaY",
  "key26": "599o2CLQHBWuQBL1rrHfaeaTaEcZPbymUYg1xVYMS6wcQRRjiNKffoH4DYMpYoDtERnCRigvD34GFEsUzcLtacko",
  "key27": "5EDiCEXCAAqpj445w4PBsd3c3Ugm3TNKyWXWFR9MenfJ2mYmBzY9pnr9ULGrKDc1GPopdm11kLcVLcayj94Sbhce",
  "key28": "41XcTZHhqmLQLbxUu1mYF7FSgnhWXfWDkCTHC6EQhESDuSDG3GLGeiWQeFCqViEBYkAcme6YnpZZfbG7JpJqAPeH",
  "key29": "JHqJoKtAVQgH37xXUQQ37NW5TdRXg6aFWPj1rhCEPnFkgdRE2zKGv3gcbJ4TmabxaJcZNjMVFRBtr2MniXJGKRm",
  "key30": "4kdfWmftNdA9pQ4Jhpztahg7a4V6aKEhgs7scm8UHpVqtBNnmmx2aHYYtn54C3JugrYV2cgp4adZWEz1xwBwu2CZ",
  "key31": "eBwehRVBdBNevRzmTxKVK6p3hfDQoW96cbfqmkNJjvgc1ef13u9MsfbmwhMn9msaBS1UuG3EmrWQ8rCGxwfWWJw",
  "key32": "5juARfaUsVYkDs2ZDNH8nVN7xPGwrMwDYMJ9uBYgThzcVgHm5ZXJgboco2t3GoG2jyiayo99fdeB8BKSDyJpTjzh",
  "key33": "2UPChKZb41JQvptLGPZDcSmk3mzahKPxm691hYGb826pW5oZ9p5LdhGotdMaxWM82KzzDCehcwi7V7uXNTt7qKp9",
  "key34": "29ZK3gzitEsd9DDx1uX87sNXSvdZ91guK7FjoLUKdjPGu5fcjZ7METf3LKjdtyXh2WvzJ43KqDUw2oHP6pmhfjtb",
  "key35": "3whQUVjZi8L7VU5WoyabsG5F548U7WAjq3pdtzY7iEQXazoAMLNkfoKbqRbUsAfwKZKQXJWR1eaAEc4WkBj2rjTs",
  "key36": "25aUjifxbLr4Z2ZDzK6kdDxrj9RQkdjoY5LxTEpTtUDEyxrESJdcTANWX9mfkQg7zigrCZz5TyamvU87zm21dFJS",
  "key37": "4yhhjB5E8yZy2eAt8fBgpS6iYAqyarCXYCJs3CSRUeWMXgSU3DbCTwPUy5EgW4LnH6EfctgqgsisDBPciSk23DuR",
  "key38": "2WYpZuv5ngAFU9tcN6EZ8znvCxuKKCEyca2yJfhnyhKBHyr9fgyfQKyten6qnqGewUUKn5v2RyjJdeMHbnXfCVKB",
  "key39": "4GwrXEBViA78hZfPdks6qnZMugA7tLAG1wqeSsqQwxmz9d7J59cbjznZqmG2jbWbyWkasvpWWzG49uDRYubn1LE7",
  "key40": "2GnqGAPBiKmj9ygMxPSQFgekzTwq5b2DFtmi4jT47AsCiHiroyCjavrb1PUFekjmPvsBnMG3q3E7MYD3ipFSdTiD",
  "key41": "3XYjEwSiGMZo6zyigqP7BYk1e7MevyLyBMTGLqP7AWKLVx8f9CSpaF6mcdJKzwpnAds9EK1PGqmF6mxmn8cy59X6"
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
