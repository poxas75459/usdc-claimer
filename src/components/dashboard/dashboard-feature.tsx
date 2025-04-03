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
    "2WcBfD8QK3qnMHiVtNT3WMTU9dqr6SSLmXQxaLLoUgTVhQYy1DfStnFkU3PtJtDyoACzYke6fwKr9VPxGsUj2h8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DSSnKzRiXSLN2xUxsxn2MNrVZ3YGpjn3Sa6GYFBabD3PcNi4hu4aVjMjVKrAggtFChWMMBLK8GGG1vtRiygCpfN",
  "key1": "3dkyVCsTP2Q3NKgmp4BLe8JhfpAYtFQzLCyTpQAWt4E1hD1qDtbbBFrfzrJPmWvSUUM4qVouYrPEDM6nx62QhKTR",
  "key2": "3qL1RoW2gSgDQ4JScY7pFxjoBcTiUWbHXW1L6NyKA1ow4T6FzQc4HDkkWshWYMHojhCm4Hh5xCgTjjt2QaQvQbJm",
  "key3": "2vSwuKfLLoM84c9rdTQPUAeccorDEBtWdYyDdxATCkJUqYnPuT9qjcn61iL7d2VXopBwdNWt5T2zDLbYrQNVdjRD",
  "key4": "3N17hZBCyh2oZaccneV93WbVBW2Et5e4oGtDY9TpZLHY7CFWhajCVjEoU3NYRDNuSYT69HWCmswQbwZCcUXbmPVY",
  "key5": "22Rehsa2DAwWJejxuz8yytULp9y6GT4JjdBFejczVgpRfnWhKJSYugP46xjXPkDk2hBK1d4Stqg2PJ3PLBoCsVWp",
  "key6": "3ESzxrXYFx7mBdyzYcoExi8j1nezpAxzpJ1QJuxQBFfYXwyyJZ2YhHGuqWyZiVkcGq94PbC6XVL7Sk1iMNRwFBso",
  "key7": "4WwZEVmX8ApcFhhzupfiB71Cq5Q8xyNZhPpjS7ySHZmA77WfXr8F1MNh4SBmHjUXgpM1vpQQZ8TcHUcJY5QKCvh2",
  "key8": "2fyK2nZivMtLyGVLDViEkGVvWeAwnQJvRYjR6EnuofFHydnoroguzknMz1z73Gov6MXGz9wK6v6hniCPPwYBZET4",
  "key9": "31u7S7KynKwm2JzvvbBiGtkt3MLPamnjDd4iJUT18PQAg64xkABHNYU6PpXYan117WiPfJE6977EfUzSgzqGiFHw",
  "key10": "SG6uRqv9b1ND9zg11meHu8wcKV2kx9GycQniFaFxMq3Yf7taPrfThfvRrdveztrBxcCnxGzS4pH8eXVANPuxwUG",
  "key11": "7tdx1phW7oYUTVYeRi5vxngxhBMzcNrPU77bbLVu6KUBjVSCJwDrdpXMxE5yUtV22Sw66DJrUYLTsVEN1aQVVkh",
  "key12": "5GrP8mDFf8hGkjSCaoMb6yRhc2KGt4WSdVNeUgCksFmsTQXE1dhqQ7JH3SypkxMxLuzeKPYHiTVVsgcC22MDLhV6",
  "key13": "GJnuR8ZCQYL8hZDBUU7LvkKFMXoPwPx5tkSJPbvT512CAURAKfLQtqWvj8Fwx3sTPxzQDutNuKVXMMgX3Z5tES3",
  "key14": "GaDg46gNv2YmGjrBGEEDY8mEVxkPQ3g5SMXoSaivYnp7XE4VZfzoFqhrehaLFz1cUDonBMStAhqWcxzhgmJUSVN",
  "key15": "2oZ9t4osC3p18gaVMujyvjYAdzEHUS3BD2LErKcdS9C4eYdWSfLviqxhMgh6oniqYA52M4MDizPw1FcAZ253KDw9",
  "key16": "5K9WwgteFtK7S8gDonybdqc1df7KvTQTaE4zubGPrmGGjrujo1R39TE3WQpQjUViB6cDwSH5qHFfiyxPR2PVkhWo",
  "key17": "4dpve6VoJ78mqMNJJF13omofSeyn1ibTBHPdUr6qQRMweuoi21pWU1ASeNKuhXx47nBdZzujXo7AxRtNvw9dxWpH",
  "key18": "3buGxEKkLCqNxDXhzuZ1rTSmDukWtdUvtK3DQ6B9yKT5xJcQqfLd7Vw4xW1jCmn3BswgZWXoQgg4etnen5Ufafrp",
  "key19": "5wYf45ZjfhytSoJDq8XYEY7LkTSGad3XzN3ZX5B4QRhdBUkp3Az3hWnrEpeWzDPtf1epmhsp7mbpxqz5y1edZD2K",
  "key20": "5K92N78MrJPrmmQStS6XZVy1fmVj5ZX6VEdysNr1fpdZHU8jerrXxTWT2bYD6aNffjQ3s5k3jt162c4Y66dPyLZ1",
  "key21": "4ANo5zM1ZEegnKBRMT2a2cgz267kRpkX7DXWQZzp2GNAHRvka8kZ1rdGiqcfRwSGARmArh8hGerRHAJa1tBXDbtz",
  "key22": "VEJLspNCu7bKDkWcMtACFjz8WwZ8e5kQx3ZBZEYZKok3SXu9f8SbqbfqYeoxcQHiS8B6X54jAGTwYuCCQDf6p8S",
  "key23": "4EG8Lht2CWhBLmQCBqRMkgyXRhLF61656oK3jsStVioZ1shWGwuaL5ZfamY8HFygBbdNW81hPDoFY44mGyQtum54",
  "key24": "V55zFr5P5ooHAX2Znp7ZUtzZPaHFPNLBoNucjPsPTU5oQ5LRuq1kjMiy5ga1qEU5QEQMfM44jV1C2oQF4zxkA57",
  "key25": "4nQ6rww2Nc5EhxNUbRUZnX24RLnFCmXfzfnuMjeH2P8wtYNBXunBGqvpdyS1cBK8RPLgaAkArXMeEmGeretavKtz",
  "key26": "3w1F9X6Qs3ojPG3exmXzQRJmj5NPJkiPnzQQKu1n8oLMVbLBxYisUezZm6GtxidHWKQGv6RgJTXWRqXXbAuWxTU5",
  "key27": "5Y7gPuHDy9MpQ32sFcmp6UG1Hdoy4nghWTPJtr2R9UxSDgebg42bjCC3WKutvEjTU8AKeFpQ8oUyyskYihiqJg8w",
  "key28": "5csVQzzHHHdnCrz8vbd6Lp79ekFHEM4YS7LpBYbFbYZKwjc9RgzSsjGC6JaJt8JZAEqnUxUGKnuk5TcgESpbJYwx",
  "key29": "2prMXP3LWiuZZPrR22KYSLrBZMga8ZsZoPwAkzWWwxvtDpKomYJg4iHa7Qkp8e19Mm3g6Rd3YyDyMc8fY5xE32Bg",
  "key30": "4TgbrvFajJGvK2JkYZMTZpi2nyDdLiGHACBZ41ZvZQQUyzdJzPDiauMEFyf1aeGg9NgzkcLuAWwrumeRFXjMj63d",
  "key31": "3gwGye8ihPBoDzpv1o9kN19pAL9V3pBvvnQRqRHqhKoKrRacyWctxoAskqwZY8t4UrQgW2PCKqNem76kFrShe8qs",
  "key32": "ojoPJiJRte1CWVdEfhHE9c7WgP1M9Dbd1RkMpnKv7Ch4CFJsqJNtv22hnpYczDh6Bjkj7gnyfXNubQY2GEdD3BV",
  "key33": "3hTgeXNhABtYi8AL2qMiN2Ka3gZgF3iND31HfAi9tgReZ5Btf1LtaB9amGg6iA1RzVdbZJ1RfPFt2hBUwtFVZQcD",
  "key34": "51RcYAMKL4Rrn6cFwyc19gXKsYRyyisEir9DgNdHcHtXWNy1prancNgpsyFE1Zh6URk3t3hNiyZ14YQXMzBWnd8d",
  "key35": "2n8pAVM8LTKozJvLBihzRZbEUBdibVdF5Yu7v1BVi33PKoHVtUDYYSfvyJzPT2HXBbn5L5drZAtWJm3ourts918L",
  "key36": "3zHDUfPFomTuYaDdYGBFWvsrGEMJXWdzRtbLmLie8JG1FAg9Cd4jrL2JrvP7oFycsesDqmA2oPNWGzw1iJWaRns8",
  "key37": "3rCbAsuh7MaQfvRxd7PZYaPqhZxXrousxSEWdMHyaDGrYJx5r9H5KK3JQcSFVXSEjma9xpuzXRnYQidTdSwyBsUE",
  "key38": "2moK7HWRzZjPZQz3CSw3hTgKRqHnS2M6MQ4XYFbE7MzcqV47kjXZAEhby1ztU7wGEacUUwspfD97HECveV8e9VBd",
  "key39": "fSeeFQRHcsKdPWYigWNcHgicravyRtZpzs8wuDEnUXgJezLVmG59mhLc4a4SFkt6vWpHuJuxKZbUg6cs5ueubck",
  "key40": "2vDVSniPxcaJcp7pTvJtwPuaUV1XBEeYTXznWYfZ1Q8JGKzmtwzaY3px1iKD4WoTbi2GDq25Tnbu2bNJXYedwQfp",
  "key41": "4RKq7gAsyhCUtqG9A4MpDkL7XuwfMBzcThG43L3NBGTaoyUFQwRCopV7n1gjcNrGpXMXfghjhQaabk4y4qTtLseA",
  "key42": "3wAgWKFMrsGuvCDPTkLYeSsQTezCpp8HnpPA5CXz31AT2Yrg53LT7ZLvtC1kF5vwdgWWk4XVhQVmi54W8ekwUTJH",
  "key43": "4dMkdpJFQ21qBkYAqQLdmMsQGnGLdSaaDckif3RVNzT6uXZ1TiNyYBZknwaeTyyNFdztT8yr4QdhXQdvhAScEhR3",
  "key44": "3M3BVziHmLdW3aimDvCuHbzBe2jZ9kvW5t2WRhMtWHn47u3qXKCBAVkgppuMcMZiuEufCmoEzVM2EZk96hwFDLGz"
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
