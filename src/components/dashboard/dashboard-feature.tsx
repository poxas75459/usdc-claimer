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
    "5FwYc5CwkrJRnkdQSG57WghJvajp3zVj3mycVQYnibBi6krAkachCPCaFbkPjN58h3F1djgJ7XKs637dSLuQmrqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66BWrc9EgJKADdJ8eeBGqQRtViGTwWtkPeZNhvGfgERSS5PuYjgCU2GQquDe5Hq4tCboy32sky2Eaji1GXzMjLp6",
  "key1": "9HxbCRqAKZguyAcDqVBG9trpzqUphpafoZ39nCnSPhHsLJ76CPZZuGFM58QCoPZPwyc79Poo6QF6iCnEWM9rTGH",
  "key2": "3R9hZYVsFA1bQ9nUK9PEQhR3Y4dCWBCyspZyu8GCY1KqzmYq3VaTLin7VvJerW6GkQCjn2R8q1WbSuDSjwdJsqZ6",
  "key3": "3y7GbVcLPNWUKJLifKdiwBFEE4qmDBLCdWgHLGYup5Dcg1Vxe5HkeHhbyPHBmhyvYL2uSz8U9VpNzqFmXredDNZg",
  "key4": "Mcpsg6e2z4re1T66FquDfdLian8Ym9mxcWwY8RkMmsvVMrKbh9eZFKpvjXyUArXhpLzSbHvhkyejeE4htT5zhoK",
  "key5": "2Dc1PitZ1NVcy5UdvE9StpY9UQgyvjP4eAE85yKE8MB2KEE1MrwsBfTUFHmV7myhK3LBeqdfVBAb3sFGdvyrqETh",
  "key6": "4FYYsjmBEQxRGjqZjqdmt9PssspFZo7KhbMUPjyiWkjtH1WfeP2Yddbvznwba6BCSLi2e3ZrCdPLnM59onrWVUgS",
  "key7": "3x2RN7XiYzUAq52tRaoL4JVKZnVny12hHT1HHCovSsBnBKf5tuJj7m3uBBK6VSTtoacq226sUrAFH3e4Rapmv2pF",
  "key8": "2ncRB2XnVuyrnNVwgSTvVhJCbi2ZcbPq5KgSbL4R1zCNyXUMR1E4eHnLyUgCj3jaScfE1dQdZAp7X5fCp3zdy8vW",
  "key9": "65MgMVwPY7zVvxP9qkr87g2hGfbBoUPvwEKgzSTQxQ2aAQhDNLEdneYCYoKc8phfXK7ma4WMygBdTAyWHp5VYy4C",
  "key10": "3pB1YNtTNELTACxQRQnRcETU52AgboByk3S5yWG5dbAwqYKeJbo9gUTi5UGADRQJoxhobaD9ac7FU2nGV5vYKwBg",
  "key11": "3RkDSbUZfSwAfCU2Q7eqBtjH1yrFAcDmFm5rPVgQtAsRuEqeRVFE2tJ6EK2JFPyDCjt4YdbMniGapprgjLUbDT1E",
  "key12": "sH8FDHs6pPPPe4NkdzNdQTF1JBAGKeaPx2W5CEsh2NDudMH4A2owqM7SCnSyWuX7NYZ5PvAuKywBuqrVgYCNstJ",
  "key13": "5uEZf2naFARFSoboNu6WVyiYW6Nizy7RzQfDyvPPMd3naqVhPhmposGCJ9UPJESc4FhYNCXvb1ZJpTTqGvf43smu",
  "key14": "4MchwaKxfmWcSgKRcFVKDBr1yGVivuqETXEzyLDX6FLB2reTGLfSfxA8ZDerbHgEqxJJKSz5JbqZ8pAN9iNXvwVQ",
  "key15": "CYoQqtsMQb7UY1erJpkZjDKLZbeQvnP8BrXsUGyPKoSA4G7AAhhNANG2GxfJdA63cqh3vChg4j7yAbRpY9zRpsW",
  "key16": "3in2RxfPNAKCfYfKs4dpy6GhAf2yiz6QFBApRszb4HLJLjz182VjiUVkbbBMLYQFRhtcM7nuKiifv1psKQs3evuE",
  "key17": "27zmQRGkVz3qe88tNnm2Ao5G49rdHT14FQmcyufao2nFrMKnKrBgEgTurjfxBUu7Bb6xodoYoXV4BqymJjTrZSGr",
  "key18": "2x4Wk7nQveHx1MPeHJQsuPxKGKgDdzgBmahvbVWcMBxGNYg81gwKrwf2nDFTsTofiJwKdj6tL8wsTCL6jNdxEqoy",
  "key19": "KJdeHpDiKss23yurNjYPi513quKPbXLTrRwDLkGo3pCWKfm4LksSjgf4cGjrBdqY8NG92XPiGtEjheqyJxD1ktx",
  "key20": "3wGmbrNUMqzJdmqYi3A2JcXDQQDMxyDCEqEkCWdGuuPD1PvAuyvBU8e7kGnd3Y6HuoLYRh2NyMSoAz43BZV8RkrQ",
  "key21": "3aoRq1CwT8oT81zeJjSjBej2QkGpj3WfRj5dKMNXpcPkRh49LghARRUrsu7S84aD8yxaMtsaJn5ia5XDKTqcUnux",
  "key22": "5u2gGykb6sajb46D1fGoQsNTrdEPTV9MTdZScb1d98msZdvwr2tTKQ4ircQfNzWDwkyn8iXsVZyJSp4QsKmhJeXT",
  "key23": "3esqRvvsBf9ZKtQCVCbktF2D3Szmrd2cuq81XhrMY4ugvuXrZZTyKaa9QobmveKXmcfwtXJJesjYNd9fTD6E75Ex",
  "key24": "4KmBbWzo5UUg4N5nCYRUFuMf9GPrMZLwdCfwYeyjrjakVbptNYPY6q7nJe1RWaTWJWavScTrhh584RkMZ9JgJKrT",
  "key25": "5hWPsLn2R5nGxMWwXRZHmaNWjrggP2syzNZaXfcPBK5gG2JBwiXRsFD1q7dAfMtaA7Bau3rKWWQiYKzNg5bU841D",
  "key26": "Pt4b3uX6h6zituWz5Rxvo7bPKBAcH8zAupREqJFg4B19sqE9wPHrK22boN79Aa3PCozcm6H2Fd8ztedT3Piyg2N",
  "key27": "27cYnbs7T9biR26i9o48D2LTQC8hwA5JLDqVeaihLn3BttrRWep3JWifXHKmHksi86kBnxsA582ebcLJcFYJZQ64",
  "key28": "4L1GMNcEn2sP9XPgy3RDdGwDMzUYfuKvGRKnuBDsNSJ3LbJky8eh7AJ6qgQS3Z4oiT9X7FGQpjvHxp1ymrzVP4zd",
  "key29": "4rzHTMF52aV2o8CcV2hAJC7aMLztNpTNZ4QpSE1B1foDHcYD2VkUkpBfNH4vA9KPZx3Yb6yGoqKbDckBbXMK5jsp",
  "key30": "3w5EAcD2tU95Jfw9PFGKXDihmUNLDJrd4P49fc6Ecfmh1QEpMn1y6RvAdDBPj32v9saXDk4PXLTh4TAHUKQqsFrL",
  "key31": "4FWa8pgFzKbR1guV8RL5eAsHTcgEtTs6yoG99rb1pi45C732HvVWHV3KFgLqTcmUPXaiDQyhG2FrJx8k7Z5W61bT",
  "key32": "4PzVXZRRJcuxAnx4oQWNP3QUgYMXPAR1cevDzJArxGki9nEagd1hb2nM3WLcLPi1si6f7gE97Qh55GaX43xkT37N",
  "key33": "2SoaHmEKwaUb28ydBkZ2rEikTgt475KFKrfA2f8HhWVfZCum3BXchX1Ywmkbw3LU8cXnsiATyk3RoAkTDgo8Lqb9",
  "key34": "HWB1xHnUMmiJmunbZv2xMXCJP4GcvaYhEZFqvgc1Sn93wHRP9pBMnaDSww1Rq2Tnm1j8DjtyMqhb99mhHogDtih",
  "key35": "wJSq5SGsoXhxcHSEURJAbt4Gj1aU2AArykd38pcK7Nj4258QBsBZaqVTpLaL5k9QjZ9S5mejQ2mHUPu5fhcnsy3",
  "key36": "5y8kuYuq1eoGtdTpLYMjJZDVNwrZ3MUNRNFoZxXSVbNzBjiHgxe7A3dib9dbUgwPebioVCzNY8QwLzNN2Mk5SYMs",
  "key37": "42tLB5D42GstNdFtxw8LShiXHtHxrfq69vRgNukJBR1oFuamQozSKRLa357PqaqELp8HSd4iGvz39D8ydGF11vRU",
  "key38": "3Yrt3dBcHK5L31ZbkyV28kD93DyNu2eF2UbZsu9PmBjsA8UBkmgKRxzmBswVYwZLCj23iHHEmtabs8dj5a4swA18",
  "key39": "4QpzBcviCgqu5vtajTqK21mXBEZg74eVgRhBSA9rZED9KHBDQVYoMdNnKtqmMBYNNMWfAzKT6f195J9anUPB4T7m",
  "key40": "5M6bJCTJR3rN8C7mdHxJyxW1HCjNjuXj7p3Phsb3TWkjComx8eGzpRxS6Jp2CNCUWLfFAWy35WWzYULMEXtwvPC5",
  "key41": "bq1vA7pnoqR8oV5ztg2XF92nw6CPcqBAL6vKETCDU1V9cRU9Uy1rGqUkCQ1AnrwnLk6K4g4NSbF6b5nGybUfnb9",
  "key42": "2brvT91Nm4x1ZVZbSYJHq6sFBYbVQteYQFtzhU6D9XLHZEoBan9L48T4m3ra5FNXpdvQfyint8bTgSGZugJQud11",
  "key43": "3vQnACcEhT3htUvF1NoUqPfri6L9SEzvg6S4Qj5uy2mHppzGgKiWTHFxY2M5AAuAS5GN6wYpKwP2JTHYVtgQDapd",
  "key44": "5dqQ87uXwomWLp7JArzTStsig8jbPxpynvLbkJv288gcWiyxuuDFWv5g5Nx7PTr2YJLHUwB4BBn9rWvxxbcqKFci",
  "key45": "651wbdfLJpdC1D59gsv6uSumAbDwoqXBEYHoJnDphwXpmyiXnESJV8cLRAew3xScT9pdLcefrwaafo2XUAHakJKN",
  "key46": "2tCTbXCrH456yeHTiefHuJJGZpfcj3mKmcPEjy8n2qcVoTW7AAE4WTmxZsapYVjkqWfnCbEzKpTRChHTbiWcShoV",
  "key47": "VWzwyTBnjdL3mcpty7ztcZ4QPRGh2T4qJwoAaKgHzfgN6NfSMgLhL5iUPqsMbhQEevfgcLUD4p3VbeHUBtBCTrT"
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
