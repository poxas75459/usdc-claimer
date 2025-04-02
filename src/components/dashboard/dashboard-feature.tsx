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
    "611bnqx6v7b9wGV3CYQPn4hf54AwDyeZqQ3bsWozMSihoe2Yp3hxgooGqDWqDnkhq3qzk9M6rxirENWPaUWCWgfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZVsV1Hc9bMfgNPys7XndECrUYTK5zTUNccqsCY6P3aJKq3MRQARkgJpxkcjwAgTzfnioJwGrNikmEcfL1cxNMo3",
  "key1": "2fmhQZHfPkRr2ggPhY9xG2TCo1ioMbnEdKQwUckc993QxtUo8VrLww7PhdvRqNLHwL9Qcd1i2dTjpdDEP14bnGKK",
  "key2": "365E1oz3f8pCL7kzBgeEGNMU5mDQ47Q4yaJXjR1Tp2WG44SX9XvpxYkxuChjJbcVxCELo48VfQmaTT7i6qiCK1n3",
  "key3": "4rNhpqZKVGbbXcQVT7CFydCCnqx7CMx3UpU6pbaN8n45Tbkb8MnCJTveagPe3aHsYWHBR9LXToFG3vuCS6B3L6qc",
  "key4": "2PVn1xfvGj7iMvDN7WnTeaHrkYiCuBJCvc97rdkUKWvQRSJEH8bcvFRkc7MDfJg3pH7GfZe5AQamM5DHYtdxVi9E",
  "key5": "4QTkVbxcjCePErzH8hYktZJ1KCZQY5LS7YJi97mwnWm2fAE7SSgnHxoAdbNPj9M3dJ6kw9bWuucWHKP8B1UBZhAS",
  "key6": "26PwtDtVJ6gAR2AdydmiL6NGyK3v1p3QEQMVvVVAmhxjj5AU5ESBMtxWYLmUt3sFZ2UGE3uXhpQuAZ2L6gCpbQoZ",
  "key7": "2mTdguXtF1TU6kEWCEYA7vAVqWR4m9CmXCwYM9pFv76BCzZr71f7Uc48JsUNHkA5GJkwK35bvVccih5kPZ4oTUre",
  "key8": "4ow1xfiLdXbdfjeS9mM9ip6dKAmwkM9cmVhcfqBAeuCc2iXPwb8M5k4RxYR6qeTWGMXvcsF6x5GpwqDwWUGUYRfR",
  "key9": "5zE1T87NCPG2X2F6WrBucc5ahU2yW7rhcJWdocCpq7tmcJhn8zzCeicNKcrya3DDB2X9DTorDpEv2SSRRMdB6cVm",
  "key10": "8pGgFuFuRtenPFkjbFQsKCn1bJ8fkNRf5kAL5PFTZDjyqkeR6nwTx78RKq7y1xbyVydH278VQLWBAXvXr2Hh4wr",
  "key11": "4V9vEsfWQJ17yD8T9Hb8M5UBViVCVF2yjZcEaLjh1uVHYFsr7s4hTLGwevT4zKnLjjMFS3ZXt7hpixUnRidC9wgW",
  "key12": "5WDa42cxk1qDc3qxSucNpWeKnm9VoXhkqbyoTMmYznakSyzRbQ7W9Buwp3VWMiJnWzxPueJg1NFYf1o7GBZvtSn1",
  "key13": "53yn6cYVMCe169KGdWszr3RgxbpeQfeLzYGSeJ6GvQeFtzjvnUAvNMVB7cAJyLKACsVptDzsPHvMUSZYiReF5M3n",
  "key14": "57g4PgE9xjxwR1ZvgiN7QcAY71BH2Whz5zLyNKp3UG2hDfB4RTNdiJrbFn5WwcowwYfkUxA2uKkuxUVPxD1AWnDU",
  "key15": "k4F5gpE9QRBvHFr1QWxU7ynw1b3cCbui4WEwhFH7UX6HDBWcJ2ZLB1N7sKwfDopzx2mDx2qkVSLAqMqW18bZD8G",
  "key16": "2ChGycHC5gH5ckFQ5fJkBXz9jmKSj5M43bMXF1TghoC5xd599PVHsoJ4EGREJ7W9zAHT2wz6JgZDAV2a4FhZc7pR",
  "key17": "3bzL7C7mpK81mpA5aTZGHr3CMNujNVR7gVbgpDDmfyrFTFk4qMKMrNibwNUcVvp8X7HAyXvW2JuuervgvQEfihS2",
  "key18": "5bt3DHHQ2WrXfonxMbUymc7h3W3PBQVLLAVBYh48PkYkPJfeGsH2QqPsLKmNW1R7jfquGexAoJXHFTQX2Aa5Ycpc",
  "key19": "5KbFPHR5JDqS2vsM6J9C45NZAjfrAHBJoeFQ2QdRSAzw72XRJyB2xB5Lyrwv1bjphDGXG2pAkeiosoGQWGmrTXLh",
  "key20": "4jaMNJgcATBWTbVkc7S2oCrBzPiNPGTJXYUKJbkZUHjifwhtQR4FVzZDfc3yZATeF4PS2MYvBoE3o9Li1WL5vjap",
  "key21": "4ibbs1Bceij4AhMQEchVriHLRZbpqpUR3HNV8QPmuLYM41dKfNaTXAsrDcsTtcuN4u7E2m2HuFyMfQSJ5KL949Gp",
  "key22": "3MhknpuBwUjaX6ECZJtqBrZBdVJYUKcf2TYkiAeZrKDL1rzMQ4FBnrwwWuVXTvxL1vnXLAdw98C135tTRoUQwNsD",
  "key23": "3xHnTBopTShPy4mbFdjx8i62qa7GboXmZoPjptM9sfgRDo6niM8YTtLAk6cExCACyFM7GaDQjAYJKYFWe9qrN3Pt",
  "key24": "5gaNgjjMRHLsVyL9St3s8q7QYNffKYB2VqajM4RYEB1ktLquvGATAbwuUoRtBqFVzMANuHyxWkWZL2e8auDaiQfA",
  "key25": "42nC7pnt215pgxA7NPCjh7xBbAH9hJpZC7wpsrEPmSJxrjn6LY3PyRANL1nB6hQGRrrMDv1fjja8RNMsAdS5jL1u",
  "key26": "qLgziZH7gLBQZDx53fLkESYivq6YMchMj9SkTyr6Npq2NABEnALoyES5NFYx1HEMaJWu4hitno84gFvx1fGCtFq",
  "key27": "fJCEaUnSatGeCZ16iRRtDQnsdhh4fCBoX7Mxo2TvcUgwkzr4dWE5cMvVgvXJmPRjKbyN975CSkKzUUM7PrP9HCr",
  "key28": "42CibTkZsNUKrG7VSV4vpNvGZb8cDcXeWZiAbrRCvJrFQC6k2BmkPQNWZvdKMzQz2M4E2XU8DvPtQYrgSjzBCDRG",
  "key29": "5TEmiQnXeLpJ912Dyre7bUeedVpgKaFcH12zcii4CPHE6T1WV5b2KwT8VhXwHuza92X14eSNbZweh2pRWi3j8jms",
  "key30": "3istWpatstBy2dfJq5SM8i34V9HhPT8AVDEGJ7PoLxTTRxFfawVzixSyMotox5G1kK5yGCUEWirxVUXsbufhFYVW",
  "key31": "Zb2DLa9JKF5c4c7JLeJbwEz7yRnFTEQkySARED21wE5fDfG3BtCWsZfRYLDxEhLTSaY5T1oCSKaMosZxKZM2uLV",
  "key32": "LcHbN8A4jTzS8fA8BtCYRgW61RioV8QgXCavhnBZCHoL9kxbuntxA17ijbt1KXfEjSmAgh3KxW4ibqGZ9pWUHBN",
  "key33": "3gsXEK3keHLQdpcV6vjxWtt5EcJ4QPq1JrNRDsyaA2GXN5ZutRP4LvxY4CCtAtaU6g45KBjwzAftQU4Jrjkurrj6",
  "key34": "5jh3GQBK3HrDqs3HGrWEvfsxciXjHvGWfFxERUm479Guqw8WxZt31h7SQhi4i4fbWmDVzxyRwVUhP5LjwbMgkpDL",
  "key35": "3oYsuKtAu7F6N96aTsRk5YGAMfPtEpLJR7559qheagwCX7ShcGJ7Y2dGWBtjf1uAv6HNhPxBxpuyekciBYidA6Y2",
  "key36": "5xKiaemd2uYbZqW5FdFycp3zDzAvSfFVD3WL9QXH1MuTmGzw83WZevCvmcjyMoccw59fcXnejeipz8MgzMzkiGxj",
  "key37": "4gNDj1JHrxjLHkJ11nsDrG414KZu9bGh1s75mKLsxLaHmEi5dSi3joKiR8j9tBxM37GAu8Tk4HRMR25Zrdre4hJw",
  "key38": "2D2mA4Sx1FNkU71LEBeipoSRfB6WnUsbRTd3Dw6kf8ikpf3eXXCH1bJyZ9T9RQ6sLTNfgry2ttxLEnNPBVBt5hRZ",
  "key39": "48Kze3gmYHptE5L6BFsdoAdZgvqoV2Zub2y8W7JNFSoa3iYqzvS3M9td7oW7xAs6ppqy6cbXBCyhQ4cdQ2r8JMnz",
  "key40": "3GpUYSjDHXEnHz9GtPC1CqfLyXdUdPu36bvb71pfaEsKvQm6EJ2wL6j4r7eNxYbupSCeVtJLguhXQi3p9rGoU3oX",
  "key41": "65kPUAf4eUsCojGfwHyXHHyVfgp2KyYsf3ddcD1pwiTTGB1TWW169UkuLj388hGN2WT3QC3zqF4HZSQMtxcfke8c",
  "key42": "5WfzNbGPpcMiKNSbE6wsRFErSkXf9oXuYU28v9mo4DUp4QruCh2GJ5qa5NtnuMgnQptduhJ5kFxpSrgGYjtUV7nk",
  "key43": "2Qe1GYLFVgRAXnHKGrM113yRcbrsvo9Xz2ogBdJon5v2TTChN6pKvZEJ7TiVUX7k7ccWSxZuV9QqJL9ysZ6924YJ",
  "key44": "Hhx2YEvd4t9pnFEiTyJAAYW3hd6sDEEuqyWAQRy42d1zp1bvn31RJKKCf9sEZzWd37kMH6YbxnJbL1JZXKrSSGX"
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
