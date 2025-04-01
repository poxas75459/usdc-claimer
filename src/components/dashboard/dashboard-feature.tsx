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
    "eFT3PKy5kcQGdDgFBUvc7R2GSHrncUqnSL2Zx8ETn7Fag8j5xEKowGm5tzmqcBEawoSehU4YU8ohBjjhQWXKfEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zoWMwiQLLLVvv4ZnHfXaHWbE8RVxZHnFYUqMCxLQTuCLeac2zp1c7Z29Msce4JooVYRnVdfJazMrKeyU2MGwcVf",
  "key1": "5iu7s18mtLbcavndgxCp9NbvMWYBfLWFHXjgHQvMsnXWPXqzDATv8mcZNBc31g2FtRDCDQQxsVGDv1dW2UR9oDhW",
  "key2": "2Hmgdg26dsWhvdbzruwWJyyPREH5wKWMqtZU5KiZNQjVtjCf21Do89jsdJZsTW8f8Vn2L4vwfAvshHHnT1jKWxM9",
  "key3": "3RsshqFBEBkSaw2JkPY4QbAYvnSDp65uR8WUaCjyoDWaoS2VZgiAbjQqQ8sEf8GUDkTYq85aV4rZJgwtS3D7MRtC",
  "key4": "2crhPSFf1Zv1MvtYXoDxxyKjUCxBqHdarXf7Y2WAvaL5q4wSL8TuC2gsSUZ18mTQM55wUWvL6bkBMPpVbwsXDCij",
  "key5": "5xxDhSwwaPk4qStesLAjDbN1FqmejDEkEgzshtc8o6RYbYJJ3gsK5pwdDMDkueft1948fqCs6YoAKHKix16TAjfM",
  "key6": "2GacGyhiLxhMfLo29WCM3XtSb5ozUdQMusrUnjYWfs2gZt2bhauVc2NpuuosrJDzJuzTqFEw5afgcKSEJ5BWkcKR",
  "key7": "1PswYGYSwR7dkrZfsZcB3tPPgjqtxo9LQhQRsf5Gc2R653W3HbsfxhL6TKA4V26KpoAs3Ac6pWBzBuBHkT7pxGE",
  "key8": "5HmMzY57Eua1aFvffRY3BLeaS1m4tmdHZiccnpFrem3Vr5DLKcoDpLwBpdTPvtJQNLMJXujsBhFyugmwxx57G3L8",
  "key9": "3psX1ZYuNyAWPk8i5q6xfZuHTxY4auAVdxS67MqHeUpEjg2Z79Afm2rxsDGdsZZ7tJBac687AaTd6RiuMNCrvP47",
  "key10": "Z7o1yrbPhqPFtLagfcEWWmHsbEyehy6SDBqZr5EbdbDHUVYb5wJvPZyxUQjY8mMxM6oCJKPhyXQwhx4GDiUBvv8",
  "key11": "YDpaSBsLm5bJgdeNEsq4QqHWAT5ttMKhQXfRuoACa3KEwmoccKGzx6vbzWxgrT6U3C3KtMQXkNnDrSj9RZfbCX6",
  "key12": "2KK5fwpVGumMjAvYVDJrkznA6sCHKWoEJSRms1A8rxCWudBYEMmnXxAem26ryR453TuouNxcphQXPznmFtwKXv6C",
  "key13": "3VRTfhmztgwCEBu9EnKyRzN2DXYZb3t3b3HWeCJAKX7bfrG9zuTNs55koS8kPpVLz3aPzttpq4QJCjdVVVyraGQs",
  "key14": "5u6MCZVVRfwMsE723oUfuCr6gvrccQhLEiZgM19M1N6rUVL1caknGixtC1vnpyxnbFxd4iq2fWJoP6877gJufyKm",
  "key15": "TVq8LgstQhoVmWNw72oypWBzpmd9Q8g4jCchf8Ks2ypxJhDNekhCcojgrjsEVmcc5V2EUBHWPKVbQzD9Dh38QUp",
  "key16": "4eDLowSpF4rpvXQdFbAFNQogGovpydpXYn6wYCMpGUm8Re7msiNhxRkhUgtVVsY91pGyZzN2sf3JELty3C1diiAr",
  "key17": "4bfr5jGUUxSLS15YHyAnuod3FEKtrTabjScazCoiGnWNXC8w5hZGT1KxzT2xrh9wZDJ23m9vM8vTzADegjF8N4BH",
  "key18": "2V8yjxsPNuf2s9yruxUhc5Pa4VKJqN8C5oBR6yjRPJzrNQEgbtpffNBByeSERy8gSUC5xaJNYfbooz6v5LTtPKLs",
  "key19": "46PGXub1T6xpE9WhLcXDfty9GNpRYpd9F3xxVqzmDiprXB8yScqqK6GspYzxqFynga6wgE3yX592GGojPQVr6HiM",
  "key20": "3PsrwcUERvUsyDET89WmHEVCkGM4wXhpkwviaJgtbJrLYZ6LgLQHSVHUkhtGBBjGBPi876GiFtNu9GfGve1rnwB1",
  "key21": "5Qzsf3gzNNDbkXXYfRM8WUwLoFEra9FCE5TGRx68eSfpVPtXsFoHJ8erT1rwWa3cHFMcPH44ZXExWLxxgpR6MyKV",
  "key22": "5dm2XFS7AbU4ctZNXnWV1fNVy6dENhyqSxqTTHNzf2YHR2G45wiCTY6vsyPv5xqDRB5wKqqkrb2mSZD4f6eyCLve",
  "key23": "4VdUatTkuFH76k22xG49mhWYVqA2HgsxL7wptJA64vwKKopdkmNsScUpn4vz9YFrrcbPL9pfERbxTzymXw5kVbnr",
  "key24": "29XRCSosDA5hcYSDTCHLyiuaKHYa7C2qgRKUZR6EuQhdYtuZu2Ez4yfLkBS5KxN1nStRqpKc88Ra61rV454qczxh",
  "key25": "YWmEMBQAkgZt1n4A6SgBNdWLg7DJ2MtNpG2fwLWEeyjoguPT3WEfMakbyBkP8aiATGMcmhtFKPvmYN1d2uAER11",
  "key26": "XegCSPutgquMiTadBmzkLQtP9a8o1F16YKioLyamLmzNt6rMDAU8w1EqXRnuuQ56oxD5Mg3GfhQMxh5UGewcgma",
  "key27": "2sJYzCUxWXTT3hWvueCFa5NMcuEcR2mMNQ4sJoaJanJit1AKdzm4U3gaWgmSWRbgS8DmquyH9TB3ui7ytb93eZBt",
  "key28": "3t9q2fiV9gJM9rT1wgoXoaPE1tFgN7njZvfhoBnjMDFcr4D79D5SxbRpPPcM8DpSTiBATNX4o4wkzdmZB4pYxagi",
  "key29": "2M1CeYuvP9cQfkhQBheE6C93uaA4cvQ6vgsuc3bKiHxM2xGt5r6ejPbKH7Ysxhb5RC6iukwfhdCdLAV7QrCDDJV7",
  "key30": "5uRGPG3SC629VKMwv9uAseEFDH4kZ8fnbP71KwKMWKo5ULpJvFo1tN1M7xngLy9AkRGWcRZCnvEue7YPjefVB1RB",
  "key31": "4s3ZmoPFiCLCNZ42NCb6QAC3goosE8UjRKY8tzk8YGZ255HfejsxzwpJ1jptXgpQK6fiYaxLdubXqXXDbV7RPZjL",
  "key32": "2Yw8vm5P1kbDmwrjWsXQkjzpxMmDxAieSp8H86SrjUrM9mMUv6gibMSbnspRmqmU8pH3TWHJX8YPsnN7a7RrrPU1",
  "key33": "5ugtJy2ZMSHsZo1npC9gN3iNxcCtZGqGGQDJEh8NmwBnKGne17UHvkWauFgAeNSkRa5tgg6AYcG2xemMcXApyyrr",
  "key34": "ovUPUZUcbLnLJ5pV9m96wPcPNVJMrvx9PtbDRi143VrC76TbEsqHwdi8S5KrX6xNSehL5WvzYMjxA8NyVNLYbqN",
  "key35": "5VQX7aKZqDiMsmpcye9zUAK7fvKvdR4jAQzNfrAi7kc25iNC4qaGLXS97RRSt5yeb72GKVmnfSvLQsx7Dtrh5Xx7",
  "key36": "2Mu4ih9zJ9fmF1CTQaFZ2aDECvXCHqQYftUVHMFdRdaHKqVvbsKH68i2rwZuHhcD56XVPXgeWnocyLgRbVAkMjhM",
  "key37": "219VsbKswitYUb8v4NVMy1HXKU56fZ8ATWCc8Zhg6MJDB3YfXPJXRsdWZmGNnBLPbrKTD18Wd2FmWysmSyteCybE",
  "key38": "3h4QFwbgMZ39p3zdwJ1oYXaU4RjXGfTe4VYkqB4wVKE3siDh8A39qEyBpM814MWDkDvDbicHSeF37vETMyfqsFfJ",
  "key39": "2n1JHiryTnubfViUxjLf18fJBkiXztK21TRWCKaNJQXKemXmAVet46DqUQBrixyqjmgAhahAURDXfFi65fXwmhcV",
  "key40": "3aN3SgQ8XRA5YDfVHaMBir8UBLBy47fmYnU23UwNRUG5cHDjdxijBKjw9w3JYUCDMXMG2dJbXDtB5LxGSZBoH2n4",
  "key41": "5kEyqazfXF7aumSU8aZXefEAswnXexZYQeBE7dJ273nBWtRZ3THeGxw2DaLM6jmpaXAwhtpzA3DQwQti8mPehk6f",
  "key42": "8wUD19oZ2kc5eXxPELfzvGuEd8n5wGjbmdDEsh2KBSfZmYgfVuCqqDgovDcpCAkDG2L9b79hUCEep7Hc7mSkLJk",
  "key43": "49he6iVGC8XNXjxu368jNsVG1Eap8mtL5Njz9T3YQsURCBpVMjW5yrWaUhT45Uzn2X3w2jcrpwpM3Z5p6msiRxeX",
  "key44": "36JVqvgHv9wKiGF9djHHUXYZRKK6vpV1sfswKoiRTDM4JkvCsdQ5kqWrCvojHF5eKuTiUGhAT4uApWYjp5hQG1tq",
  "key45": "3mH8iieHC3Tf2oSm8rLPP7C7GywD8xm7h9ocnv33bj2RqEtzUwcEBJFWScY2skvdhA7FcAbjZUdQRHWv5HW32Zwi",
  "key46": "4DhAPWpeoEoPrCBVeCj6vFBGaBTbuft3XuXbPrdZiLDJzNc3cquBZBVBmAGjBBjMqcPr6xXntCyhxWHL7E9o1fnR"
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
