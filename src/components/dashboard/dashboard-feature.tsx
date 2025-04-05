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
    "s6aNVNVCemhJPjz4sVzepwD8o3PFdW8cSuqjaArEjYLfgvM65CcmNFjXipqQyrz6kZRniUDUnoZiCrXeyVtSxJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s5KW8wGxZWwuJiTTHmRJuETbbWjyDE5TKBq8T5Wm545xLnoC5hGZyt8iBExFrcfJeCEkjLsHTZeEG4CNtBoDMNF",
  "key1": "2PZtNZCEFYbFQ9DjLbTLwVnKxoDwetd6uBq9bQUSrtAjLKKD26ndBXbHX8MpxcKvHn4nhVtXUz1jU4qpdpTEW35z",
  "key2": "5XhNfDx8KEvrtzaba6PPaNPy1tkmcvgfE5iHxs8UeWVWGLa2f38tiETRKPk1FinYo5NN6326uC2WSMEJZRp1dJQJ",
  "key3": "3Vmp7EpaRyrM2E4vLtUF2zENx2Tt19oQJCPFwQ557aY9XgC5vYiJDgKNaFxhhKS2z1DvN4oRBx6YACERqGkPJSYw",
  "key4": "3uRGznpKdwAU7jkKXLEK7CaiNoR8urbFezHrSXVsY3RgjtCCjpng1rgTkkBYjcWiigY13MhYR2u1nGKB9AgbP6Vn",
  "key5": "5myf1Y2CApMVUm5kBM3LEKF5pKghUNJ3kHxfswkmbXN6hvAxXASUA87QXtREozBYPripUmkQTFKrSEVgfwtFue4u",
  "key6": "53DkHVm7FyCLh9kodp2Y6bERTJaK8kx5hMycKPNibAFHYY8j9jRJMZmwd4Q49pvGxts82sAcgQYmxEn33Xg9w4sY",
  "key7": "5LeE3Dtka8i7P99hnd59BhuR63Av8B7BWEeQA3JCiwePhm9unVN73bZSrFA1K1emE98WtHNMSJx9tebT7bTHn5Tt",
  "key8": "3YBWp67bEznALvhpGzX51oTMnDrWrhJ3p4bpndys7F2CuWNKCaBEV4duBSpZpv4y6NmpSZVcT2QYxdCWf75bDV35",
  "key9": "2QMHeYfXkqgAYe5g44AecBxbotCSs5aU3vfaVnWs3VvxKBMEjaFyQhjkTdGDgEu7J8TmFaxdbAgpqhBx3WJ4gb9K",
  "key10": "3sKpcvq8aGChKzJGt8fzpSTfSy9wWv6MyTF8bUhRhdMZn5GSR7RXUDsopvca3kiFwdux8YmS4PP1dYpuN7nsueHA",
  "key11": "HpWNV5ztNTPTSBD4FXeVQrUytaY77GHKauMbpnZhpmQKKKbuC1hUQtCtSLUQVB6etUEJS9GaCEC6tWzrXViqx1B",
  "key12": "2zqQo5EEyZW6PLnikvnMgLfnDP5YzQwNcFty4d5DJK572D2qTp3PtgDXfDHUMgviUWxed5Mf6F9ydsbyqLKEhNUn",
  "key13": "5xepgaKrG5SCFAufRA71cP4Ss96KC4H9oPCQSigT4Uu1F5Phd7r6PoJUTebxNnhgRaZNaXHnsduF59eiuergJAZG",
  "key14": "sGFY9NjgvL5qMmcrsUYtj3oGeFbVrufiPKYpt452sh5yvDpqQVYS62hDRZGjULNo6FkW69udyXUqXULzEpGh5V4",
  "key15": "4Whf5cnGrZ6CoWrY3kcfKtUzhkuY6yKVkhwY4JPiCQyeEb2vodnChc7WQGEtio5SQWSQoPuFrF9PkqY3Zfff7cVE",
  "key16": "hnvi4ttPvA8JQ6uo7C1T3M4ssriREpGt5HS3amLrjkVYikke8DVfkeJuP4Fhk1XbjTUX66T2fjM2oBMEM5R9CTy",
  "key17": "6Xv38yHvjxg1eJphUcaKU2t6qrEWyQSLoe55hSdH4eR8163BqiFGJvUdNv7foHRqT9mh3vGFfouPbDNurqDgYro",
  "key18": "26UvvG7K4VhpoEbAXuFwcUB6YLiMPTdrPi2JJ2TZMbwTwEV1ysqHhZaBzZdZKcXpAYuuGNe2GYuDZSRWKqUhkpqg",
  "key19": "2wznJJSen4Z29VAgabWVcZ2SAmxrK7ui4tJEqVNccwTQsA6ZRGdkwNAn4EJwvdf9sNEX6JupPUiaDBxahKBWnQm1",
  "key20": "4oPm2jL3KUcND9JB8SC2hwQcafHdhtSZdykVsanqgYu9o2wTzHU73DBtswaiAcJSZNN677VBvyNdzUsXuGjSSyBm",
  "key21": "5FJfkjZ991aL1PZjdAhx53X2ewPEf4jFytNHbVZNfZi1WXGJM28g6gU3eaufMSCGUcxCnAeo4XnrJne5nDHjce6q",
  "key22": "2M2hre9wxMxeEKUsfhRHU65wC47CXkKsYNqWBS9RayohNgECdy7LREZAQWaDq9TGHHy8NXZ7FLai1114epZW1Luo",
  "key23": "4NcaYze56xYHfbi83FFdpy4KuV26iTeFWhEYjeFWfSL6icjLBzrhD5K8yzonCCrrfn7qatEKQZz3tk3kNDjQEHRx",
  "key24": "3gt72iNbS8SU3y1ccevZDcVj54VYc7y6H4AKDjAnRUx54bK9YBrWL2NiZSDUqPtXdKaggN3PSBuw4Nu2gLYnirT3",
  "key25": "22aXuNLLd62YRLAZBQkRNog8FtXUkuUiCohXm5Vd7MLV5MGpy24bsCtdskckukWdPmJYufZAS2K4f7onYDsSfjVT",
  "key26": "zRJdynYfG3i6JKNVXQBHoyteZEpBTJruNJtPXXGd8PWVVCCXJHZeWTjmtpPZZj3ctzDq4x1HoRNvJrri2uknTd4",
  "key27": "ibAynv6msR5xxFTTL5QzdJ2uoeNyFSxojbFkQ1TYMmc3fMuZHYGKgXcd42BviSRqTWGHqnhy8Fi547imfRs6Uzg",
  "key28": "2Gn2Mu9u1bfdAv2j5uENW9NMa5kezmxmA4AmzdEctYpHxC9wvqPQPmKH19TNv2iSjgtBnWaiyMF1HJGZLUTaYB4e",
  "key29": "3QCfpTFT3Q323maCMbP3wEgZwbixNERvwivepEDTCSr7Mhbc9MnomizrAPfx6oh3peHC3AMGX11NoFRcTL2JKwgj",
  "key30": "k1TYyrjv5evDgnFpLXvvEb5TBqgE7Ac7fXMJNNi6qrWSyLK5hqHR6WgbuXmHiAyhMq4GCmDnEAfvpi4m8bhmXbs",
  "key31": "5Z59MEuLNhi154UQxzpETjPTjQFKfzYtNEVkNdZ6oSo2LgjVt27MFR3oxz2bWGDSbPNgALtNCZAtnDeoZPmZXV8R",
  "key32": "ak91mK4urQnJq4Qs7J1j2Aeyjdtqim67t3SRUCzgV1pADAZ6aVFyMjQ7QkKfpSDy3nBFfVkZwmdc2MPUjt3HKYF",
  "key33": "52vJTA6toZn5TJkyrfAiG4CVqm2wo8DLweBdWqLqNgJERUMiVxgCuCLH74eRvipyk7YAnpyj5V5E3oYCD1prSKup",
  "key34": "5DzgHY43sqqp3w5sMqfVNQz3EKB3CMcwB5cMSRnXDZ9zPdwKi5cdR8NFs2krTwS5ce2Am9ifm2vHQspn1D2pND5p",
  "key35": "5WmHBf1hxqm6hqp7NhGN6vicXuby4HULuGsHYH6kBZuEyUijcnvnnjqvfZv4u45AL9QjLx3ModsiAii9rgtoP1hU",
  "key36": "4cFrJuHvh3LvBWDeq1kDMunBXe8CrXnEz4p6ssFXvcEY8VTVtRqqiPfRtPjJ27RpeMRe4hJ1Wh3MqebAUNZf9V5U",
  "key37": "F8qtCoQZRYms5ne71KwwfACathyd39qziRqRxLoRK3gULnMyTmhDqS6vYht1Bgtbngv5Fyoezt1yn5T9JBMYAMz",
  "key38": "4rHe8CQeZ2G2SnVE2QvxpMAcaD9X477zPMkAULXU3FX9krvjQjrfA2mR8R6XMBBCBxxpp8XVc13DjofXAs4JhYsZ",
  "key39": "2E8mGXLYFfQPckLC5KAPHdXMUhp5ah56uMH7VHrzspgbsnAKjJKEL8UY6uBpotFLJ4zRK1HSCSmJ1uYFK5GdxCMS",
  "key40": "KniUmqKsmt9UN1huX8hPMjjFwcKcG5YGZkDnVTR9QkMupfVizuNCr1VwL89DxHJVFjfpNGzss6Hv8AqEXgsDfjm",
  "key41": "XU4aBmdYbFERaV5BSMiAxL5gVJX4ieQtXmHjh8MpRiWa1hj2shNMdEFAVas8UZagtq7JHZMge1P5Bz7javkUrZ4",
  "key42": "649hQwjkTr32YwubjhQozzNESGfEHTPqUVSMMt53fEA2Njuhfzw5EC23tzmANjydYUn1e5Zkn5BWNAUZ2EseEVE5",
  "key43": "22k6AGHECqd1PUFraX2Ffh6nRjUyWRQSXufi4MzczV9B77r6RoqNVN66w26QuaBmcMp7qawdns282heRMcYrmwpr",
  "key44": "2taayFn13dqaXbLC7SwK9HUEMgXbbfp3RPYnBapT8TGHaWm49evZzP8HY1JZ2mRAMYNRTkQBgWgzyhM55aqE1Gko",
  "key45": "5je1ThFAVqkuKvxTLzMEZBErwcmzoHcku5K6QMjeAQj8Q99mhqZGBEDr9R5zd8tc8iNuPfV2LKMkhedcdGhC4gXA"
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
