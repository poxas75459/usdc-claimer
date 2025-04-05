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
    "2nBvkdZjeWiuiK4QEWZR7ygnEDvn1kanjP7tXSy8uxkhmBKTmfzsLJjr9Jts4Df8dwSiNHqGKpMLZw1VRN3Mimb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WQzXxtPnY3RysA8wCxjLS6BUKkusUGvgDpq2jVJsDezKNaqtHFEooGSZhxJDkRgGuH2Lonujbgie2v75zbKoMN6",
  "key1": "aCgGNT6b9Rk6gZ4YMXdpwxQJ3rYNhF4XjHJdACAdXX8fE3oWruCyHeZGXBmbdtRmHYYwS5Ywec4kd8x3oCsxceg",
  "key2": "36uyZmuFK8jvCTj9QcBCFoPZypiDi7t7tJohBi6QXbhmfV98oxKJ8vHPtvSt9ttMnDzdv1iuiL9wJceHzjoSSos5",
  "key3": "2g3iHAArVYwLNNU77rgkFy8HvgYBuQuLJrH5MT1fu2dt9z8niHRGKFVhZ9XEN1iAMdtzaXRerQo7BNXA66AHTwnJ",
  "key4": "JyAiJpCEjprAMUAKutnRmF7d2WzbjpLgEewSX2XWPgCoMibbDkhdhjCcYaZSaLuNJSnokypPwuEdaZ8kWpCGyJu",
  "key5": "44W6gFertCQJ8E6bHF5qqh6rS3WZya6JEtfNTXudPhU9DzUWP14mEbP6fwQx1vqpgAyMQVcQWwmsFnMrppsSWKVR",
  "key6": "2xbEF7ZhwiK98KKHtt9YqZzkuDBx4WXBgSLyRnBMfyJW4ETe6F2X4cVTaTGWJk4C37SK5XUmZz9FZcdNq4UbTs26",
  "key7": "3uj2NcHckJ9ARgEELeqt4KnFcFixBN9ePqDzCPh7LFTLZMEY2xok5DAz8xrSSS1NtTWMKenUEfR7erMvmLtuDXYT",
  "key8": "55cVtE1HU67oUH9zsWKCQQitxsdnpEpk3MfZWc6rRXiCrQXyhHmGo8R6FHwARtgpwbkydZuStgKH43X4yUB7syeX",
  "key9": "C97fccsZN9Bohc2uUVBmzAZv39kAEeQdgafXaxx87SHYjenL6TcVU1P41NqoU6B5fXrKqovm5jeYSE2UMzeoynK",
  "key10": "2W6E7AHpN13dCS7AbLqmDB9cFNdBc6DWMTpEB4dNU3wqhrPwNNppAU2P4nhh3jDYH9qXFaboteBY6CPuZ7aTK8vn",
  "key11": "3sQqhuMAqeSCcwPYgMXewQ9x7J1gPKSV7WQsFJ7xqWufKU9RFnkgzVwnLuFzsP3oE4XMV5ztNNYdXXQbhBxJ1CQB",
  "key12": "4VtgssA97hAq9QXzcRcTZMH9zdq8dhrcSta6jRPmvbcUj35DzTzpzqyk6HYPX8BqUAu65YFV2T6hU6gjcV93TMGG",
  "key13": "2jTTguaR95TutKsjgbT2cf66kASAtp42aYmZqYmoRPXZbX1oSuje62b3jhsrb6uBL7sHKZkpwZKpuXoCKZuK3J6u",
  "key14": "4L9ab5bo5wh8Z1vWN8yrUoW1MB1VgvSEaPnA29dSK5CHcqSWreVkoNUvdZsstQhcwC3G3VSanGxwwdzFwKBdYGsp",
  "key15": "3ZJWiNgfu6p7yMddpNRUuvvzawz7a4sbkKXQivsQ6YT6aT9W1cGvh31BC37M77tRcoc7xuUrqaN1Fncm6d96cghS",
  "key16": "34V4GkjeQ4UgqoxnZ6pgu2f4gmkLoJMnNk8NkysvrL9ivasHuxj37XtyXJCXnSc7UngKxL4bMYwcQHsqmpjBFwyU",
  "key17": "53KGYQX1QDMxvDKan3Mrvsx2vhhR3RvogicjVdXnEpd9kFdGq5zjN5wTVf5SVRqRXPcQRX9W6zBXN7z2eNqwShfU",
  "key18": "5mDhrrHcGsusTV2iQuw1mSotdz2uyPgkNbsC1wJcXMPqwTQ5wbravKysaPRjN22d7U3WHZficdNzWsDdNSnNhVo6",
  "key19": "4jurahccU29aF4YZZzVM7ZLy5jNNMikUVbBLV9FFDCPAaQwUirju5PH8Lm2HpF8WeSz7HMvz4K6RoXUNuMhn1bv8",
  "key20": "5zXxxK7zFFbXC94iKGrU5UnRHfact8BzRuNzDgYAVLMK8NdJWNqSPdjZPi6gp7YSUPW7o5Hgi1yhdceFyvNtzC7S",
  "key21": "4i9RkTGyrWZ3XJGGmDVoDH2WEtVS8hJ7VPYCDLBBvRhhhcwTu5Q3LsxMSLjZW7m7SbeWCRphh526Av95maAG63Xo",
  "key22": "2iM8WwDkSt6iT3UtHreTs2KiJbrhjMdsUZqfDYqeEAxHsyxTFZsUgiKfXHmz7UQTyfX426XiZbiXY4UwsSHo73vT",
  "key23": "4vw1sAzjLPxYVyjaFX3oZcejkX2tuEB6qYGG4MKAh5gL1VsWVvNQM6w7q5vV6cjj87qiXqERa7oC2Uk1ydEBqdDt",
  "key24": "4GicfrYdFcbBawSPLiryAV1ZmaNs18MQPwR6zgbhoxRA1pXQGps1J41aDpSDLCJyAkPMBzsXWkNVMToaFhPZEizT",
  "key25": "39iDKw7KCJjqs66Po7s59JoR4nBuWEMWd3aH28xtv6Qigr65kAuD4t6AixepF1YyW1YzJPz5nhKnJz27xpXkxZtV",
  "key26": "2Bw6s9vNA4QQ21x7nSuapAAJk3B1pkRHaUdTYpY362PNdWbSb2G5FdShzmocYQGokEPkqhZ5kpDokdrZAsQASbR5",
  "key27": "3Toj4J27chBSGWY85mSdNHjZurzEzXRYeYNRx3XQBkCpwsS5WobHFFiXYuUc4kbomXAyrYx7YYZfg9tVzCAyhdwX",
  "key28": "2DhCgdEDL3Kj9YZbdLv7qCDhoje9VCZvJodBZzbxVLYCBANVhSZixQ5CwooSDwSoK5Ey7tcpeu87MnZoJEiGQ8DM",
  "key29": "thAxejELv8JPvzJ6CZssosDFLdM3jm7Vsb6i2rEJyPit9XhXSWRwCAPyoe3EFfFvcprH11cS8FQRPP2X9oB1ezk",
  "key30": "2aEFjyGn4wAobKViuWnEj6nKWkti7PF5q6AukLjaYuL9Lqr1qrTagW17FjGSCJw7N9R77wsE8qNmnfmDZ7TeckLf",
  "key31": "acU1Tbzjt3FsqR428qnZrPC8Fdvw6LS47DdbuJbNwDQeVLbcADG6RUurmFV6iG5SfD95bFYWLmSaL8FfwqBG1uA",
  "key32": "3cY78PsppzBB5cSZDX76FQLmSKkWHNHYi1YTG2zuaP7nQ9iZ4UFMo8rGRLfJhqpzBoJLFAUwUF1cAMGAH75K7Vyc",
  "key33": "5EvUKHsXaVsGJjdmrnZHDRSwbXwqBM5LVZeQHnrWW3EYgAmdidY1zpUCUeKeyTJye6W181uM5W4zSmzyBnpCrFaP",
  "key34": "SyK6AB7r4TGRigFL1W8id8KZmeN66qNxpagi6VgVctiK9nPae5Gf7XHqfngZoa7Sor36WMaUiawqBQpaacW1jGV",
  "key35": "TmfJ3fuAzchCuK55MCBqgJwikumTpc8UtBEZcZE3jfUuqUZnF8jsZpcE8Z2UGBK1SwpijTicP7BySKZMagacjHR",
  "key36": "dyRvsdt4XAJ4vTNV4WCRRJ61nWvq9eajx9u88MeogCy1HamJvcNevJtpNsKQpwwcTCn6N4VVtivH5xUGh2exnfV",
  "key37": "4KoZUDfNyihq5GKZoZHQKUyhih9r7suAuM7VhshnH2VapCo3YiANDdTyA78q7NArNc3AjQznLua6W87y4HcApn19",
  "key38": "ATpnUdxEfbqeXyMEXWpVTfaPh2wyLd8M9LJaEyUH8B8tyTX9EhYchhWwsndCtjVzEvSeYeKWc6uPEQM65oCuj5y",
  "key39": "3GZ9fuzEfueQczKsJNSQMykwz48JCaEtvcJNfhJDUG7UPvccLh7YRpoiTCHF7kk8f3jWPPhKb4o5y5gufvW1ekJg"
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
