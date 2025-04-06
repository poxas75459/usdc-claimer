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
    "4o4CTcgsYXwZWdE2ufHsS5por9uv5j6YCwPJErzxG4syZVSHwou8vYoqU8SNxCgcm5DbV2RSPNacstcKQGYU7iiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jw7edTrrYrE94YqUqixh9qmUxPbqhxQyA8W7gmpkw7og9b289FM7Qbuzr6Wrp8BhE4NYB3P11ztXK1n5MSDhYRM",
  "key1": "5pmxS75kPjfktDykKuPNXLhBgKWNqPWKpCaXeJDS8gniKVszczaBzBniACdDe6Tg89AE5d6DgjrzAu2cUVpzjF9t",
  "key2": "3XXxuzdmcdprrgQwYHiZ8L3fmuWqZoqxb3jv2qCWGvyadjRCC3SEYttQLxJtBf3JYCveEkRgmPDAo54budfKsDPn",
  "key3": "Sty6rgkvKnxFqSkTeJKsjuDmBo6rmgtEeEH1ShJQJmK98Xeu11jqZmEUxmKB6jG8WNj1dbEseuecv8ULoEhmSRA",
  "key4": "6sGhg5GDMDAGwArF4cGCchz3GoetrXRq5ZDrj5drkQSYuaRMcfjSeDzufQFWGJTFwKC9DskdZGbqq81ugBUc6wY",
  "key5": "4ctYe2Tgfqr9fCmNkhSefwCfxEQc4p4wjDwFMRri17eXKX1dW2ud52RTYoyWKPvyexiFF5HTBS2JpPV4fsYzzhjk",
  "key6": "483RGuLaHMduipopFkxMM1vhacABxyAwMFc2AFporuU6LBEP1G7jo2tPwqTSfZumbps9CRX7BXXJYJSpuMRv3xS7",
  "key7": "4GseoKHP6wLtxsDynzrkbskBP9ZJ2Vubw6hws1wTxw2vLWvj6f2iuHHgXYqwQu3gmP1uXU5izow7QMECsM3q9hZ1",
  "key8": "5gtzMUHwUMC9HBCMzU67TeAUQQ84F1PNbWYGBkCwFjSC11ZFHEcoHsusFtUaExTdK65Uvt8Ti8DaGg82SKfsQKHv",
  "key9": "2ryDVftxeoB4FkuDmjoBjZbmodN4h7CCiyGiWbQZbNqtkZULEgGpZrGnWpi7F4bxFN8ExqFsj84P4jdthFk4d8s5",
  "key10": "2P5wQCingaDhNL1FmY9WM2YNSGseZHU8XXCpAsNoQAfax5X3LepWXo8QvEVTquP69k4zgrxmwXw2eQsdKuu9xVaX",
  "key11": "3cpkS6gPCRTiuZYSBnyLz1oNau69LUxGFfirw3hpVqJ3qEFGo64ucgH8x9VkcyiEvDKdNXmW6JbcDZjVMFLm6GRf",
  "key12": "4YATV11uYmd1VUdSF3WXMoTnnBtyWU5h5CoprV4WPHQSPE89v385nqB7eH3RT8UVEGXkbHzkaUyBRvtXXRz5hznA",
  "key13": "24J97uBcwru7WqB1ZPUWmQHqX3tWrYXnzsfkNLpz5CkV7J5EZBQs4TbePrAN5hM3TzFxbbqnZDAXn5LGu29xLAZR",
  "key14": "2uNKe76V7HhXem9wkLgzVyzPiCj97bm3VXcWLhd6AAxTxewsbpA831ZQrDmMDDYd48p5dQPkrRkkeatuNdwA45fi",
  "key15": "mVmQtDLXmQFK4yY7JG8zKefM1z7kP2fBnYPz3ujS5wchiUqEWuhn4uFKS32YmrCgBd6FNpggw3dy3Sn6Dn2HJN4",
  "key16": "2hiH9cnqaRYFqdCHLZkKCp6B5KPcdSDAxhBfTLj2mRLfyUzthJVR8U1ngmJxdpCC2mmXM2ecnHkA2mdfkaUNrVrU",
  "key17": "EPJLojQnrYQicJ9wJWgacfcJrikDEngg3eixqiqBwW7YudQdeKhYJmjYgKgYhdXE4SaBn2K79Sfs5josgHsVtTX",
  "key18": "2QxQqqAMXSD9YQAvpRqrwBvUGNzQ3wFboeJdw3M3LzWgpSstv6wRu9uHjYDwYDVM54uBZJrfkNErXhKgnqnHuLeG",
  "key19": "3bAAH1LSkUUmoqP9hPk88vYzKk7rNypDvNTi2E1HoRAgSzxLPQM7teDhTPR2MA9eCjsFjoQVeKZzcuVwFkrEubAE",
  "key20": "2BfMgTT5UULwwue3k5rENwS1ga4DgaWMzuo6G2k42Li6u22NsmQbxV2wDKTKDbBjfsgeNdQ4wyubp7u3y6x9vSAE",
  "key21": "HdNrxfggQfLNjzUm3yfwj2EQ8PxZJrUDEB3HkD9pzkM4rhg7u46d7q5uHTRwQwZRjUoHe4g1BZQk8EJaLApRhkV",
  "key22": "3wWSbAUVrTyhhCZrBUdwLVYbN2e5MTpXXpa51Ge9Cj5JnCEZGMx7xQkFeqUB8Vwim2uGiRfnjDf2TWobSwTTfN2h",
  "key23": "2hXHiNNcovDQAGwTDtBRNiaw2jkZ19V4F9Mz3KnJpH1Lmf2tVzSRz8RL8ftUXXKJjRCPAsmBTNJj2mUMGTsJVRWC",
  "key24": "kZQKLbhAYcvDg8noezK3eHGsnzBwn3Dwrj2nMGsrE1qMsSLNcnDbaPRj4bHD4jrgCB2abxcycHGsUQhbW4GWDuX",
  "key25": "3bETxHY9CcKbTooEbRtF4mzpsGrhv8ndYUpkRdbcLnF1vhC8UXYbBCPNHV2gQju7MVvNau62gbxz4RPXdbtng3g1",
  "key26": "53VjEE6JsagdJbn6KtYRYHVEAJfALVcytadvwwz575FxRNDdKCLRohzWcH6NzDG9AmsRj8ffizTHhhMcoc16uRE5",
  "key27": "zGakvfoPu3LA5HsQutfrdcLPLmkoKcDqZ9VJMR4SZas4C5or88hgeLCdwynHjMSoa5mhvyySXoSNvu6kUSKdEmE",
  "key28": "3ZHWQLxdGdXg2rMsixXEQWEdcmVJPiyMDUVFq6fbhrSv2bvumprWvkzFmR9gCZZepeKA6VFubgyo1SAjFxytLU1Q",
  "key29": "4ohpvh4RkpeVy9A481wgkp1xsugzuUkVAC7z5B2wUGLS6AK67Yr7ZMDYL3HxfBS9WmucvT9diM7vsrHCNHsB1e9F",
  "key30": "3ovRgBVfCDMibBvYGyQnC3wGvY2Vw6rAWTiCta3Gs3SizFurVJPSj197KKyuzYSFbuBTMK5enz3Pvp4YW1JEK64y",
  "key31": "2TyvCy2KRWaDKaq1wVHgKnw1p1QFqtyjNE3DdEJUZNSctqe5GDztyBXMVwrd7bSXiMsm9kVwhqZX5hfQdp3HRT9q",
  "key32": "23We3EUyD2trn1Ad4Bt32oYnVKTtNbJv62xBW98qY5epJR7QvJAjwSdUwB4LqJsRSuYexueMqk16zvCwNsgax517",
  "key33": "5LRx9oqWz57N8J1XxSSmQqRuN3vpsfNggr9qXuV56fGX4hRAaSQUCYmJGEF6y2btthDcfu4AgngN6bpJB7pEDgjQ",
  "key34": "43RtzxQeeRRawR2Hwp7NKMQv5wtKvi7N2gzW3wVjD9zSvDEVaXChMWZeJNYt8MfhK94nX45qtDr43zAuFg1Pfj7H",
  "key35": "3xtgSGWiqZ7AJsKei3U2T4fMCSxwTdrQPkVACsZd3cXC3qUmGhDhkmqjEe2M2Tm1B9CLT2S6wirZE3NDsLH7qY5H",
  "key36": "42ej7yHHH8n3AYy6eaxcdcLGbzR4NX9ZMx1oERxaMSjShqASfKSCeRhsR5zLfXEUuZY1pvgCcfpQkVTJDxw7yAAv",
  "key37": "4NQL9QCB16EXnxAyMep1Tnx4YCmmDR7NSCupFJtpdNEJEHPozFuzBMEBnr7Jc4tmDf4zLa1YYTRER2L8wyX4Yz19",
  "key38": "62rTzLt5iALxQcgVZE4SUsMc8xzdbJkubyfn9UnQwC7UAfSJxCWepmzMp5YXs2odBysMaGsQSVAiT2vV6m4SQV82",
  "key39": "V6hSLExZVyPPPGkfrepRLxJqPNfkFEfHnj5MHG75atuDmfAqPaiGwNw5ZBTPFs94wERVcVuqmrcvtWBer97YMc1",
  "key40": "2uALxfK16BV54ARkSgYBGp1MGNYy41QRdSK7W5TYA6Z9WWywMaRUhueSTGe96caM8XCb5Q99xNuNnvXXdiE8aAxa",
  "key41": "5jg6uxHLN8B8LsAEU3efajz4ZMgwmjotMKZseDRxHcfPP29bFmWhpS4Vy8Q1xPdwq9dwp7gcX3UF7YcybErxqCQW",
  "key42": "4BL1rm6cWCtas7HhkmJQU1E7JhEc4oGriWxaSBJaZhG6ipUwUiPUCdZ7Ny3FcC3tj7RGXX1chjCxYGEGS2jR7VhJ",
  "key43": "2kX1ZHwefd9E38EJuDWoUjwCGPGMY17AsnHd61aJiWK1otdRxbmkq2jc5CsDqvSic5tXYCTxyKfbn28NGHYJAsPT",
  "key44": "4Bhc63pYvUcffG1N86Mp4LyoyM6jGeDmyb4V3bK7xF5SJH2ZTeDdzGDCPUjHFZ231H7HrSSQkvxke43ZPUodTtH3",
  "key45": "4LBvWfTFF538Ymk8jEw4E7abhgvgvWDmD94H36sP2QKcX9aT11qELobVoRvzetMppjfAjqvd8dbCvLK8Z8yWnEAz"
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
