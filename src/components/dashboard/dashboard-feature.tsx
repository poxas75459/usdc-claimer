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
    "3EkrsGtNZNZXHqxobCBA83uZ2cNTwsKnjy5J9fuoSnRbqmYmeMLbMo2QHNUPsJQTD8uat6H8LZUYsD5vY2XMDawQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rkz9vYdFq3jQfEnzWsGSbsAyWUM1vdxY9zkQaLZod8ZR5auZDLtVRQo7BZQGNr4wKCTuh3WPuvCEqmWhis2gKLQ",
  "key1": "VoPLLWA34BGwSqxyfBRUhPcYznJDEF3BcFTAw3YYEtWJxbtWQvZ1HLsy1rzGE76wcxZVCAv9RYAp2JZVJTVFu2r",
  "key2": "2goGbHmVKRQ99kjGThjzSuWacddPLufajmccqMZGje1vcVmS4yh9rwwLoEwWRXFRwkAM4kbeFocuybEcNfASHwFc",
  "key3": "29yzJnwGkDivWoz6zXqmFHTBhMRD4U1Ax9GxX5C3SUTzA3E9QRxuHKSYZ1qrGqXPtzJefeHB6ww7feHNHN3gSt9F",
  "key4": "4C2Rh28R7hZnS1nBWoFy2jviLcknQpe9oL1UVkzYmYUrivTsRi4nhisAXAWFYYJLDgGhGuTmeWBeKryhK1L547qW",
  "key5": "4C8QXxyC6kbsyr3G1epN3UPJG1JSmvScZLQCGp5zqpB4JZVWFjumVmDmGhxR2jKNkmysvyZx7VHad67DMt864i2Y",
  "key6": "3GiGPTM3uriKDoB4HtbDeZSkD1z6VoBnG75gebNSranKK9kj219fszDpusiQfiSKSyR1gCdcqwb2ePaFDVdTfzw",
  "key7": "3CLfiC8fouCcaz3RrmNAMCbqcj1oByoURhGfAqtazmZkSvsPteVQGMs8xMuwBsNP8bzhQEa3jm3LADMHL3r2t9za",
  "key8": "5NpmFYG4LvyoxhRsVZVC2K1g2Hx46HZmLiAah7gkzAr24yzaLndcgrf95n28B1CPqpKwnrinXR7JZpu3WpTZVcwM",
  "key9": "2L3EwUe19T9aqYCBpV98RtpPcXe6kyihkhJTvKpqf2S4P9QiEQBWuzpVNnVLTfvDH6RZzpoPW4LbGwpeMyUQgDi5",
  "key10": "2fk6XuRsLs6wjuVtMZ6Jy1tK9DbZVgdBw6DLJdxjsLazVvzbDeTtQLTWTSJ5FSvhzkYSP3QTKvQ3WhCnY4Mv5xHV",
  "key11": "V8m8qy6BRnSGutyhMZraoh3KzKthfJEqsS9KUV3qPzd8EwGvkad3pYLBe9ushoei2fzfXcZwQbeyk8h5HcG6pNk",
  "key12": "2Gv7tRuQpGxHc4rFK8rKDb3SavdTTkUH2Zy9EJvmEEkfwsH6qUCWMDTLTAidNsbWMoXCjsk2FjfdCJBTmpcUmvV2",
  "key13": "2mEkXw5wDfoDUBJkscH3719PXv4yNwugeo4aC3j42BhQd8hvoBapDrHCinGJSAVK1ZMSUp6JumLo66u8kJTwhjzC",
  "key14": "gPUBqteZEpU7xQCj19RVpjkRshBA534UhytQXhJe78cNPA7VEc4n23SW8hckDhnVMEUBZ2igbxrUBSKtSjVGnmL",
  "key15": "5mEjk2Jy3KfdWL7apVuGN59irkgUbmz8iLMr5VqyEbnNau83VwKumvazY3sEKpLfpRyEQxrRDJ3u5ehex7DZHudW",
  "key16": "Wg2Chg3A7ksYYajjGgDx7u8sXNZaciVi8TaMuADWZpKhG84oc7agNwryT4553e9umi91gEWdNfPjzpJ9fP9bJA9",
  "key17": "4aFW8vKRExaHpcVXTReH8qzriyEJH6e2VgrSMc9cbevFfUVSAPaAPSTAdF1ETy9HScaJcZktAr2apgK1s1umApc3",
  "key18": "3ratiyaAKjTjyL3ZmGFapzU9istaYpfBXKf2GE3EzVHMVsahpTTwsam77y8vZV6BoF3AyC1BsD5wi1WzQ3vLFFwW",
  "key19": "433UvcdgGQwDPrQpMyp22gPsBCUtaA4mbyQzRNWymrRs8iQGX9Ban9y1ySz48AjKjibfjBXPYjazhynMbvDkAoPa",
  "key20": "Bzyof5wZVH8sFHfHH9rgAw1xuCaHpcZyEDufi1koAPvmGANc1qT8gpQcMukBjexDMv2S9nUeFMd5rbU4ExNac64",
  "key21": "3mNKqSbHQHU36KJf1QxnyGc9VPpbfUv53ButXDmE5t4UEtn7tFcgPa8JDFeMNqZPT1Jha91n9aKzm317wPbwFUha",
  "key22": "mHumxqUfBhhNDwkQy85bfqmJ6FRgErFX9ddLwWhaUwkixRCd5xjfRYddptTuywZ78u2cR7dbVrtTVomygui4NKi",
  "key23": "2n67nWNnzU2uBFLEwnHj9PqEU9RmDeHfsVkktoaL8ASQTRGTd2tbVBCLbXVAoetwTtWQoXpsstXxGpWKLhoxiRJw",
  "key24": "3aANzRcP2DHhmUssGhFZLNFi5B7Eo5EzYag3Koo8Ri6MnAzM37jWemmmaqNKgFes5NVhSsZPCfzXsEkzE5eHAVEH",
  "key25": "4c3D52JDwKHWZBRvtCxc5rqstKFHQHB8xj6nXaSTH9oQVDFCupMEcsijBAKMXkiNJDueEXwGT2qBF5RBFQPiQKC8",
  "key26": "2SpHhgMgh39uvVh4QYD1gk1BSu2xG6ryCjkAXiyUwMxV55ubNRaYJMBkNi33qY8zYHFX5E2zbaUZjBgceQ1eudk7",
  "key27": "AnusMaqL3DbtJCYwnzuknK7aEYnpPFh8mYLj2jKHb613govpLY81snQZ7pA2hQ3zPedDrSs7pU7zTnnxAK1oWHL",
  "key28": "4T3U5VUNG6WXydYEA9xF5rjdvLXkU6cx3eBigPkLySoebVv3HV62F7MK8gTqjV5f8A2tfk4muyxCWZUN7e2Dh3PW",
  "key29": "2SrcCHVKKpTP5ouQhx7Zei1RDrLFo8JbjFGqFuv7ajjd5qZ6KWkf7WgAFnvDNQCAvXt1MLtM6vXND3jNFiegXxen",
  "key30": "22bAJRPDQfiDDbfkvucREe4kYFiqyptbhJypGTaqqczXBo8UrZsYvUtgP6STwjrTjf9rwXuQLKjrmS3ihQCZVUF7",
  "key31": "4jyhLLKjHCu9hZDMnEQt2sNDK8T5Pg2QhL1yhhmvB2MTwhwd9PLpP615obMvMwm8AUZJzh24rRUjFvgXBipBeV9d",
  "key32": "4rAjqH7PBWdEZrkkb1NXEVXxnDdDu5gjW2qt7MPZr7A51MLU4ogeZu6mYStLazVDJJB2QBEV5qdikhHHirRURiA3",
  "key33": "zukVWkTFijij67qf6YikrKaLSSFnuTBB3zf8Qo8LosfBXvM3eoVU1nxM6K1XJMV6WMWYHR4Bp734QPj9HfqFC7Q",
  "key34": "2nBGH5ctabvHtwWjUziqiGx39v3Q7jZzVViRJKHzAsJTqyrRyGNDt2Y8x79zUQgwCVwMe7kbCKRSbxwj4eJ3BGXH",
  "key35": "NfndUMruyzg8WXuuncJ8S6nK4ZqB62DtnPAHtnjSTKiHD5d5ZfwiW2d2SiTEoT61w7ZMa2ezbofhjjTKETLPeoe",
  "key36": "4TLoC2KBNG5J9H5iu7EjyyKrZp8webHvBjSsCBdCezUoKtBZH6W2cqjLhzjAFQtmNM56ApCu4sUpHeQDuW9BpVom",
  "key37": "29X2k3HiPgwinRYpqUAEqvibcJCj3vowDFoR66467YdoBPKUUeSFxyhb1eWx3apQf3EJ696Fzyh4JvrEMeRwwMhd",
  "key38": "2DYDv4wum42QDvAwMqPTTWEPNL5VPUc3rtkYXkExpHwdzWBE3C59w3PyQEvGqAnSMt4SDoT9Dc5aK61ApqXkkpaK",
  "key39": "ihhCqCmug21xikxwvz4svCgCCKYahoWLX5czySjj68gmKcgEUPWp5B4Xs5Xc2qaaE3N6XfrCV2dQc1672nifATg",
  "key40": "2UawmmhEXdYGwD5r5yhn75tJ3WfxRhCZdp9TsD3sjzYUrxgEDPMtdSA1X6dB6wV4fxqRXoqfCf9xmeMV6sbmo9E5",
  "key41": "Mhb7ZuGojjZcR2i7fzY2V6SrKWkmFnJujj5euaJFY1WAGgQ7qGrVbH7KgtuzP4VG6J6Ke9HzHoF2qeMkyzdK1Wq",
  "key42": "32b5PmhovUF4VMruan53z1o9vkMMogGUWznmvjkHuRTBcTQtfkkgJwTHVDZCvVYHyiUXxhKJ7HCydXNtBdZcjX8L",
  "key43": "2pbCgRPwBhL3Qb6dfZHHUu3WiehfNcYygga3nvEMRaNGD3hNGhsCCr8G1SMRnYmVK6UwrTMbyA9KUR7xTjZSrJfb",
  "key44": "2wcE8VNSZxcFtMcGUwhfhTSMjSbnSQXFFkZD88bjV672Niy3KCYjYMNoMEbaFUi4shgvdmCRpwoCAgNQVXjRvzKT",
  "key45": "5ad43Smrddu4tecsboT8G9R7kriP3rg4nUah5N3mqcjaKiKtEHgyCkwBK9PPfqabxQ6GvWxFH8JNtzmrsV2ZzvhU",
  "key46": "3v48vGQ214grMy4eDFqyZ3xtoJdCFsrydSdZck7HnTsa6YyBEDs2wU19tcmtwHgV1XGZXxnuWr8PZaXJSJC8sRwu",
  "key47": "gWU5cnsYe3o3U3V8me497uHLtoZC4YtUBVTe2gSicP5AShGhFVHbtAJeWkH6Dw2NGDf8b6AWJNVwik9PidrTaDJ"
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
