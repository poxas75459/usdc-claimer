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
    "4p2Y2iofk9HdX85bzgEr4EnvEDKMkzRa7Ak2Eb3dYXBzKQG3hD3WrXTk5WTPsKJcGNUVAQEx92rNtaefgRbh3GxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KdxQPUVNpnjTbyvNED3VtUBzbzyjA7c1LbSbjAJNpWwgfZTeyBQECt9WQmHRhqKEqZhVKLgpBuEXLP5YcGJ1UGp",
  "key1": "4jLoLSp7ScvCQDy5uBRDg7sYhYr2CEdbuPKNDWpqgKh9KdNeqMmTeopw56sbKBNmA9BNBczUWZqMmVYphSaQaHoz",
  "key2": "v7fVaH2K4p21Ytqso4tnsVa1mCgYWPtRzy5SrxHZoDLgcMoyv65hwcEyxezTrM24Tpt6SWjWrMgbKZAgGqjRbcz",
  "key3": "pUZzQxdwLZEjL7Ydh83JwcGZshURmL82d6LsLVufX23LzDizaJS8MZU4rWCh14FZ3BL2VDDwfxhiwavegPp747T",
  "key4": "3KQ74yopzCEhi3szMbPZLoVFEtKD3iBmvjawCAShtAQXRbsYHwANX3cpmipvX2XQXEYDS4tPuK3D469EeqerRDR2",
  "key5": "hJeFRyuUyTyhhQDoWieg4EyCFXRxRFs6Snp4iqmZNgmiCBZqvJM9HDwQqMULV9nWVYXiNa5FuhWzbCYvdxJ4ktn",
  "key6": "5J2z8LygKzCFCiEYDuVnR57KRYGcDyjprH4qPRCxBndMgyahugTxNEYimpqmjzqTkutMp5uiVn4yXqnim3jjV1EH",
  "key7": "4Wcrw26jDxKvC77iyaLv9vssAv5Rz4MQj5RMGfTyXY1SpnxyN6Yy7C7Jy7Frx2xEwon3U4NzyKzjYXSsT92L3HCq",
  "key8": "2KUxD55FAyjMDG9JPMGnYSTnZwV8T3nteZGPtQ9fnqie9r6iWzNXMfB1RmXqtYLZp4s74aQJppQPC9jFEcX5gTQg",
  "key9": "2AsFX5nM6VtgZRj3gV7DasuBeJ3mLee9qF7vYXxYQTDDRRtPb7TXYcCWY9fXLCNFQ62HSDvf8T4B66opS8vPoBhb",
  "key10": "2EYpv57jmKyRSRFWHZpYGt2c4BV6PDeTDon95Nd2UZCKBN6Si17UdChPnTGnarKT3S9aUFuJzQmrWCDzZBMBZUuZ",
  "key11": "cm9hCaQaFrntbs6fYYhX1Hph1kGCSSsX8xwrWgfnuqbPjYnsVTrQ4F38H8vTieA1aefLhpqWTLro7bcCK7fEiC1",
  "key12": "4u7R6EwHBYq53c26yCrf9LhozdipshWvJvkFRgHzYvZPP6EzDWy2oixQueadYXCqvPkkdyvDVgkMJbuf8teCfwVE",
  "key13": "63mEVSVBGGwuaj6mkNUvnLETFdjeiaaCcVrrjKqjax6CcA1LuAvfWw7yTMqzs7X4Acorm1RXDdmxaTWtSf8gHsf6",
  "key14": "3Kak34eCNhp9UvAay6V2HVBbjpjiibr2vWbR6EQxKDjgSUrCCyNptWS39kDzTkCyre3JRTVLDpcVYfngtd9ywCPp",
  "key15": "61udB8rvvGJoFmhFudvKJL2NQMBxGoKjEqzicLRvMj5ocKT4CQfTgW5WPLB1xdExLte3WsyrqvCfXqsgNyShtLQy",
  "key16": "3jK4pYihyVqqsYs3wzQJE1JoqSMN1jAkzXJ9V7jrxXBxcvnwaN57BYrnBi5UWvEX1gAvxGj6q4yjJhvVthSwY8Z4",
  "key17": "5XoRkmxpE8phzCteUP8yjoyynSj3pnkUA447goAapJ3Nr53f2MH8UK2D7sFv8LM9dP5bt8BDTD7uxV3G48rg2GuS",
  "key18": "5yfdcorhU66ofWW4quxPREcFUJQgWQWfxoj3YbrJTEjBTBzQ9fbeGyqxdiC6UH93mYyjUKubALdqnnQJWi4oqKuq",
  "key19": "3qpcDQAD76KJkqTTrSea1ifLJbXKFmLHgmaq4AU5mKBHB8CVQ54i5i7satZqMkXudM8j16nhnjzQ25zFpGUKUgZ",
  "key20": "4KE1keG9FhgJRupDw51sktcCKW9U9yiW74VH3KDwFmNAZmL7UVcgkpxhgnWRvMVaVnF2z4cseFVDDKnvs3Ar9XDj",
  "key21": "32jnCVkmXks99GRnXoFwttccKUbiRsQCFM7xbzhC1Zzwcvo3RFcKvku1NzF8HX5XKZeFpQZyefrKLbDD6mYLTszN",
  "key22": "KaTVDFjYJ9GJ7pnu4u9cNd6ojm8mssFcsdqmMmFKpaLcqhsMe7oumf5KUQg6APGSNxJ2kYkq6iWTYAw1xQvUz13",
  "key23": "P3ucQkHJPa3wvWsPwqFiBHXvmwuaB1dHpPfvx5S2Li3ewEq3NLXcBue4qx4rQqJHn1QxbUyn7XZ2mzPss2rvNm5",
  "key24": "4sJDtd5qJNzpxgHkJBDuEreroqqyB84S33gLmhtcuaSYDA33mahUDdcyCPgQU7PGG2bym5VwbGt5AzdJLuMnTfBx",
  "key25": "5y417E8yvq4yWEH3G7V7wWQxjzrnu6CJANsyswZ5UGEXsdBx7wPBnHa9BoxyQueUBBnutA7b41oG4J5K3dwXYJXF",
  "key26": "3WijjrdsMozwXgSsMptwFo51afrYaovzU8KJZRA8ihCR9nBw2snJEoGje569Uq7fv7tNCgST1VktEvsiMFivthJ7",
  "key27": "3uLf5jq3xT9VMxt3yE9THVMf9FAR8EtA5NDp1inaEZkMsQWibjV9uaHrdDGcGWjyTiamMZsC72QxtztV2yajxBEk",
  "key28": "2jg71TzKj7ZV2aXHr8v1MLX2eZqdFwrV8q5uLn2J52tZmSQUhDGi6avXLFkiPv53Vbruqs6JD65pso7vk1F5JmnT",
  "key29": "RGSRhGtbSDWfkqP25gMav3UwExSr3N3YJxCaf82piQkt2sKpxcSym7P4QaMe2zCsMUzFn7Nj4kq6qGtCusVxmFd",
  "key30": "4yamF4KkLq2MjwSWy5eT5q9ggPghF31C46Qo1nTopiht3AFATWJbvqxFUpjxCn6EH5RSZrRv5osyFSAwXxANpZ3X",
  "key31": "DPRVHavbh3UHiEG7uH3gUT4WxkRcJ5YePsfd8diQrDWh3ReMxaAb37c4waoYYghNHEkA3pZNTGsWpSyFDFAHEmo",
  "key32": "wukiqqkJ83tDGMw1aYH7jU6F7QpP7NSsXwo7kCY51kQsCZCay6D8a5hY7e6tBrTYR86mw7wTGNqqHxkfwU1jigN",
  "key33": "3TA8UjrfJDCFVyHUX5SXDU3mzRSC6Pk7YMc8Pw2WACE3bzPZ9gEhYAQsc9QwG6bDnJyaJdvUyyGYdv8hd4NvPSML",
  "key34": "5RW8Dm95V1QfgSAtYMB71ZRz2DKg3EQ9L8rK5TGJ9Ledn1QZUJj1xKV4Gp8rnMJRoR48FkmGuJWrpKF4GNUTbK2k",
  "key35": "5yFbaXjuGfAJ5k5kAQipKkKVKjWbvDNgeYbefkFbho3JRZ9pZhhioNpfBUMKfzyweUvNkx5JydxeperEBFQPbNpg",
  "key36": "48dE739kRp4A36bWpdDS1SfbUJgbZhdRLGuoXbJJrYf43j7HDWkJBa4sp8PmRD5tLrpTSM1oqtTNhjPn4A19hrJD",
  "key37": "5C2FbvP1KxkgbFXJHAJ3gRcsM9HwRH6dXC7jwkc38QNUj7TGqh15D9svRPpPbRSnTjBV36AJqhxoZbBckNsFW1Qu",
  "key38": "4BCpkMCCJ9nZ56rF5umAqRdVUSziZhtUNBzsXkNxPe8taYcCgtrExrthiPvCSAZfzpLHaV6CqffeiYSUMo7R1Bwx",
  "key39": "42vbKNto3NK9HbBLq7M7zx6mrgreF3DjU6zZc45Rt3VEH127FuUu9P5McLkCb1ZEexTvQ2Jx7qjTKoqyczppwL6Q",
  "key40": "T9Z2MEuno2RjLRepBEtuiwfxJay39mXv4frQGUSomHTcbc34GUe8n61hRSnH63qHDhFxKJfWjK11HapdWVWW5q3",
  "key41": "279TjjsBEXCKm31QZVUHfxJks2w9NMTXfhbL9f3u55oNkipAnQDgwycRwXaudQ66HqVWjjhStgkGvh2HmYnrYyXc",
  "key42": "2E1noFQnxpbT24URnnv7RLC5KzfBREzTxNczHyvhDhmMVC8du27w6WeTrmpWLhQ1FmaKkTuwji1ToTGzAUgFdEE5",
  "key43": "3Ws3EZfgzbscSzAfjWqUE7hXEWTWekPyBkUMVYHDh9m26rvvjeHf9iKdisU7nE1685WsP4LuLFxJh8pK1ZjhKD73",
  "key44": "5sEVKmEqvDSC9rKTC7H8ieHDh2jugEw4n6U99vqC3pjQ3Qf77ho2Qv6tC7XNDEsGq3X8s9YiCDuXdhTttnQfsFot",
  "key45": "YXKbAFzt2Z53t1LDvctQ9CdPvNLJMT6purwtCw5Efd1S5hUjjf1NoPqK4BTTJoJhssYq3Zz2CXxgL6tTzaXqUat"
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
