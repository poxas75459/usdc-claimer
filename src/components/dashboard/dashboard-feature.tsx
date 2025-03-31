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
    "227GRBLVzqczz8SdWiJW2CSEeAtWz9VQGF3Bt8rihF2c5GB9Ws1N2uswjjwqdePX9ikE2nHUdtvFeE8DjtWdZhZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h8ePHMqpgvTnvNXy4a8T3wP8fyMmcT3TbtLJjCTmp6p1nptHqaNbgovLTcMjeXbRUXv3QKdVadshMPpxUqBJ6so",
  "key1": "49nr7G3NDviUS1gEDKVuEncKTjfDdE1b7z8QwgU168Z84YFUsnszUKwhXyV7aas8ReCaxdKPNubWa67po8CZHRBU",
  "key2": "55SKe1EtWuGk8FygLT7tLAVi9tQjaytSd3A6KRYqfs5Ruipj8BMaaRU221FPwHktAbvyMurigL7QYHDxks72Y3XC",
  "key3": "2L6dEi4VG1uyri9KCGTAND8CkxDmnHzvk6CEoMHqBTnf8LUB6bC5SAefCqHoeuQ185UZEX2dkUXMZgvyTyrX6u9y",
  "key4": "5ugBznHAQnJQYCe27KCBr9Xa8JnQ7ZGAwHYQneis5uF9D3wNQgSRTRpxsfbytCNGrZbjj9qJ6jdQHfJU8LHpMFBt",
  "key5": "5uutRELdJn3NUZGbgvg6KveUNyakK8N1hhJhaBbTrzybrdBxKtT1j8WxBFZH81yExfWmMp6BdRYpmGEUnj1wdFWJ",
  "key6": "5oEMRRxahXrA32kf2ZU1FwDMZ31LUEEi9Y3RSyHrdnGuKTD9nJVH29aLjckZG35UjHjg7SoCezexthq1BN6kvnqc",
  "key7": "5qG7jm7aHosYFgHuXEoB6DPjwecfdMLyyZem8Q9ZJA2S9mx8Z8JsH9ZxtkUMNBmMurT5gS9KKZ9yYLNVSK2H8y33",
  "key8": "2T6S2LbLCy7YSjJA5boGBdSS4m35QThg2uepeAL8KXyVvdTuTHUaJScf36EYvwiVXpM5H779s9oeLEeTHSXqePMS",
  "key9": "42otRgHxH7Puq4xgmLCNgBrvMRXZViWviyW9dTQVeMUgZQgwk5PUN7aE2MDrzYup4fnYmhLSEL2Jm5dmEwDqiuFB",
  "key10": "5dkWcCGnipUTTecYA9iKiuvtySfywBFFvf1tqnMhRtJRGBJmJVipVBSoR96UTjyAHWZvv9TpiBi1wtfUdkCqwLNZ",
  "key11": "3P7ZEtLqnNPPubHhbP1KyPxjQviWHDRzPWix7N9fmWxSNxfLPcHtbCb4VviLzvuSj3TUXELyqs1321ecnd5Hvgde",
  "key12": "2L9fsa853HJMHWjRkJuCznVhCXa28sn3PGhMz2Pocv4mJmKNZR2FGB55LfDAb8X3GKjme8tVCsxdxkUpisTnfYVN",
  "key13": "3qR7tEz1P457jRvyUxinkQHEkJZgHm75m48Jv2V2edaWHajhGhnL5DCkXMyguguBb1W6PdxFCgBhG4j8x5LsVsyg",
  "key14": "5dPFxth3wk1ntm7kPt8Y2R9qnYQ5UUJiSzhq3d7EkVAHWi17LyNCJo8k2WnvT13VgfB5mo67mWMxfsxfBzc6ZqMc",
  "key15": "38Xdu11pyWnx6CCU4v3ti3AxrwKJqNQEFbB1ZqTWTEJ1tWWq87daqgsw2kzZam6jvqmYHM2hwXvh5nyhgrwa6ALg",
  "key16": "2Urcb6LXTSxh6qXmjt2279HdJri3f3cvD1Ep4sskRs5a3xtWEePc9nhnofJ16gkjkqApPM2tGDjCNc6b55P6QmMb",
  "key17": "2v9RbMDEJXYPJp41pUjEZubvkAhdYstz53y1HuZ94rHhQxiXjw8yiiywDx1n5EQ48Fpq6onSFSDhYkpyBrxDJvxd",
  "key18": "VWJXFvtHBBcsQLNvXiMULzJiAjiuhyWmxRHJKWQXHP6Ji23jzzNUYuFco1VAiMs76rCcH1Hdp6WPYPJRY4Rb6Ex",
  "key19": "3jdW5amHbL1w68eMQQxevShqCz2Y94QH2qMzYmap4pjWHPBwv5BTWDDgvJKdCcJNyuEe4zyvH23JAQGZFNyRj3Vf",
  "key20": "F19pVz73k7BM7ubeVjnw939kpLdAJCy7mTqYiGEWU95vGUzm6RQBC4YPpDSytGunTWy9YjEKwSRKJNPNKcLUyM5",
  "key21": "4cJd37iPTtVG5U2oJRwCmG4AdwDcsRRsWNU9wZ4Ys2rd7ZNRJgshEC8tXgFVr1nrx7wCbZZrFU518AfwtukQk7uc",
  "key22": "kgRWQ92dXPuuFcycyKdpsA6JWLEK9nfbZCaBNjeHtkoHkHj1x63rctd2NVVJ7wXTV2FFvvoDoNYJW5zTjD52Z8q",
  "key23": "ggpZoL7bD6P7x1Sej1WxCB5c6UWxF5CD6MGN5LMeQMHZ5jdsMEYBFm9aXAdqDSQ2KKgrw4P4tp8cfjaMVPLc6X6",
  "key24": "3vGKjaTh7ExnVkdvT8ovFo3K7z5vGUr34vuvC9JBPEvEEHNHAJhsJvLG5rPLGzPr5udMUnpUQRJawDSbTBB46vnJ",
  "key25": "3pzrivS1Rg9Wi3VwsrcYNLxZzNbRZ7yr1Qq5N36V48MHNJRAYMah1FmhiLRiSCepiiyd3auEspKJD41BnnXFsqPM",
  "key26": "47VZLTM3U22xdBX16hkPMr5iRHTnaUiXqbQRaSV8miiHF7MBaqPeK9Z8LzyLVUSJT4dFiL1F4mdGEJrefq5seQKv",
  "key27": "386oTdnVjz9dwmy1NNDUV12VrX4Fmto9E3xZUYCz2c2LuJu96c8HWqRGtBj8DdpA6eEfwEDgSmL5cPgkKtJg1vps",
  "key28": "iAshHNoUfUjzwyNhcxoDiDUKev2iPnAtAUQGGQza4hbFyoSqn2TW6AV1PJAFAmrnkbRj8y7avyPxB3eUbfje29G",
  "key29": "4DT5mS8jNe9JQ4NfmVCjEwmrFuf1Tz5gFhzBwocC3cEe2arXgzPWgzbhtRd5VNVoRuJXeiwBdc82PJNGqSQgCbQb",
  "key30": "3bJBRvn7PXmzar4gAirDn2FxmXC5qtfr67V9xCVbPFKZKnKHiqxxsDYaWg7ER9C4aWiiqqyoN8T1FzYUAjKeFaz9",
  "key31": "4qFHBLfQSz1mMFzMbFGxTUBw5yGH6nd3ngcB97A1wKH5aaiYRJPf7yG9JVxmFNeC2Gt5FHD3qZiPmDP4KEBVoN8e",
  "key32": "5cDGAATqqACLAfUs4NzRevKsarmq3PYPuFUqrN51eFUtBaXXuHLuZYzTb3mviEqPLDo6Pzrup47ZUAmjyBafeHTo",
  "key33": "5baCg44hfhvYpSmMYqakQhUNpsPZiZK9hqpCUgHSRLFaQShTxdcgdZftbrhqWAZk5pcWSFLvDNUqEdNLmg9x1YEZ",
  "key34": "4yi6to5DuxftXTCMC6by875UFDUao9V33Rpfu76Vbbrx3KWpvnjcwMuSvnNPkvYQp44aLST7iYxKirhwe1FApuqC",
  "key35": "4i1ZVH79iVCakwJZH1q2CLMqKCmzzf2vXHJ64P3gPyGzFxbFVWxiVdGgTnKwZtNWntjjpCNHTv4gX5Y5bhJ3eX3q",
  "key36": "398LdzY6fY4JKrxYMdx7QDc1R2BDegBSd6GgPPn6YoKSczpXnCbi9PW3wQVSTU3botoT2SdyS5t2bU9kyzmxJZvq",
  "key37": "2WceBgebz395qyKVL6UVJPt3mqRgUEMkYxTZkJMo5CSGVU7jgXtR3PfnSRLYcisyGUz65Su9TYWd8vCjynWJ1N1h",
  "key38": "2adtgWstGUGz4K8Zhe5KmSVBAN2eLLVhpF2gEcoUjdp654natCnaSgRrYx9zsQykacTWuY4bvKSMwG9tcVQSDNpA",
  "key39": "33MoeJCi4xbtKYh2KBeLe7QiLi3hsb6J9GkPm3an8r1xntdmq1xM4XTU6TBwNgzPTPFQraMbT3jqzm43ZCwFVDMT",
  "key40": "2CR3x1sRV1xuR7E3w5R5XqrquVbsuN76qnz1MQac2EPecBRGDcTXYVYSyB7GXjaBJX1BBuUiWMKqVYSyiFcUxkUo"
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
