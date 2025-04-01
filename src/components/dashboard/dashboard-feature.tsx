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
    "38HVYTYdV4goazShH1JoH4gyeGELeKg61yECFH13g85NPVXY7pLzDhQdKJfV5q16vKBoTJQLaJ7aQP2NXNK7b7Pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zfZZpSfKVFPzEH4wvUnU7xeBUE8FHfNffg6PY5GGmet4KkqpadzTM7MewFtR3ETEX7RQHPwKfXygTvKCw6jgu7K",
  "key1": "5Ay1MbCGuNj1jWnvZDKC1Yp6VcqrYrKrd3cyZZU4zPmpDsn8PhRe2ka7A1B1aLpgtCpdTwJnuygdpXCtkoepJwio",
  "key2": "4yADerCQNQ2xJXHkYMexqPAxiL34F6evfSbMyUhPdxufa1DmjK1fRD34nNPAgPNo9WteRsGch5wFbSypf5qVAAtz",
  "key3": "4FXZ95KNRnfguGw29oHKf3q9KsMhQXs5xhH6eMXNh7T78s8yLqeC7dPUCjQGULEP1JPXDW4LN4jFeTwALFJk54U",
  "key4": "2hTMcb8F5tHs9rBEngMGUdzWTwPfTxTR7CRQnHFALW8gqRTU1evK1kUSY7q8W1asrk9xYmgxoy2Y9Kd98TuV7hSo",
  "key5": "6Kdxh8p4dQu414sTVMyQ6udLmaSVNt3Hu5sK9qWV1kjUKYQ2JUJagQTzmCZuc2VhJWP29bArairnh6Ew1i49QMf",
  "key6": "4xT5A8bMQM2DyPNWtGfYcYkhDfCY9C2h9zdj4NXTQunLCa6XyiQAtc3A8kV8t39UMQWyp83Lq15M822Ty8cCaKHB",
  "key7": "2GhUt7fmpVhhpTgvXoMDbKVqs3GA4VD8yE7q2xRyYVQDNqVg9tnXojysWhQRD7rGnKmWepzfPKFFUA68YfbrZQ94",
  "key8": "2ZaX9jFu7xokm6mQpnJe4pJ81g1iYQfmZ49wfjF4L5RGeSAuUPRm9SHpQu3qCnRPxiB8NK3ebrx8pWmrMjrWdx3H",
  "key9": "PP3FXNGCJkSn2mWZxutNTbevryveZXNijpADTe4g6yaDXH58hrYk6utT7NXzYSKLRsGiuM5C91MzHgvFGX8MBZd",
  "key10": "3LfrCzdB65tRkSsgUoNYXjUm7urNbb26g8Ncq1gqhTq4dnX7DesYQS4t2VHv7fXeqLbSYaWgMKXyRWVa7ECz383o",
  "key11": "2eUNqyVzct9tKdDBeXib1DfYJf2XdzLpGY1f1oCGSX7VZmFBb5MsgKywXgFF2poxA2PG6tEyYx74zGf81xL31JKv",
  "key12": "5UmmSQPTHzQqQfn6aQabcTaixrvKx6EA6zP89UeeuHZ4LVG9oDVTXf1ooQ7rK5VWzYr3W7GPf6pYpAxeiEnExmxX",
  "key13": "3vNoqiZPE4MHB2WTakxTCMMmKKsMScKWRVJ1FW5rNFhkuMYjQ9oxxDZH2SVGrP7XU6cw6JVtoPeqBDjMxGA9brt9",
  "key14": "5pLZr5CN76RTc8Cg46Qpmj4PazxkuNmyCfV8GXgTvMjhizbNR3UuzWkbfQviomdV6x59fiwdShBiDPJPNLYE9LS2",
  "key15": "2kUP5Utm262cUSwRb8vXqtvieoxe1QvGJVQvzei3RwqZb7dBxyjGNGUJMmhWxAWEWWopFXqBDf9EFzVc3PA9vzvh",
  "key16": "37bK37vM7g4N2jYEE8CnocnCmMY5pDgTFAAY2RfHP2pVPjgdMjWL9pRFshc1FAQQecRWxqsr6pWHyZ4yjyfz4EBi",
  "key17": "fNnaFZZDqvt1AuxoJJAyzyAF76Y1LdV1epHG8T5VVLeXiEYFKmvsgYoUpZSmmR8Wyu398LrXbekxpu2FwfbnMVt",
  "key18": "5w4RcGtcC1U3LtZTK51HyKCQnqB8PznxvvE31UhSu7WZFjwg8Th5kkvSTWvP8ikit9QTkuEVzCd9WttYa8396NwY",
  "key19": "3zAgeLXKjPEcF6SeQiVckoWTuVBWAcxEefXAHtb6zCW7V16ACkbAXovn3bXDTgey1yxrmjBpW25hAVCkJk2JZZzG",
  "key20": "ozCGEyKbTEkaVcxqwBxKSmKehbg2cR5uv28tgbicfgKcuDUy6y5Xrg5UzNvVK2t8KgFsjxDcK7UQffAvg4sdoyn",
  "key21": "2vpRPphQxgLEeazWLPtPPDLUspaoFfzhjdxvZA6cdi8BVD5ddXECysUgk6nbprQ8azE6cBgNPMUQxkYnt4AMX5ur",
  "key22": "61BUD5xACvWmsWknofGLugezUD3MaJ6sPJTVWpJt4nNjmWaacv5Pqdt27URRaVXRVffeGHkgLZy9eQ5KHhn9cedj",
  "key23": "2jt8UUgZfAm6r7x8yfTtjBWV7SrdZiMGhrMF7oN2BY8wTG14bcaCp7B8hcwpp925bWV3cLurSBh1mvLBvo11Cm1Q",
  "key24": "5uqEnD16pKwxetYfxBP3VUSWSt618DtPYd76UrWXF9HjkTPmbaM5NAWxcnhjHge6iJGzd6oFhhL6QVurL52kYShH",
  "key25": "5nNUEdcv4EZjgKPUuV9bB34jq7Xqg6a7A6coWPBeRXmabWzM1i1ojsFaYck6KqJsKLhDi6BNB5RvrQcb9JEX4qgt",
  "key26": "2woe4MoZ6nS6hPo9SfQfyDFDQL7LRmvUdg65yK398K7KfN6oekaQ1YJAbPTu66G433E21XQkNTiNpfqhvyGS7zrG",
  "key27": "5Zg7QRZWsBVqCJjJvzmXQCqKri2f49X3xaYvas879CfxKpH7KuFLLwi8UgYUztvukojcYFXSQFDeR9CHBuDy7vbg",
  "key28": "4H3xwqU2zsnaUcZACF3aqr5PUtsh9mwzxmtAuVkV2f6tPPUejYo5yvFmqD6aiRL5dyxsydyGWca5Wd3iSdRLJN1A",
  "key29": "3YFWtYNb5mEvtKK5AdU9x6q6uQuG9C2V4mxsWKLPQZyCYgEMmJaeeXoevbPrh61bmbRrbXoPdFdGwuY7bnRFqtjS",
  "key30": "JtH2fhYVBvTL7FXFtHiJvt7gLtxiEwbXjVP5m85pYqab1qCWqcwehoxWbbT4ddMvtcQkxvv32LZ4KWACuAd6CsK",
  "key31": "5h4PCcBPo5eQiNonJnrTCEC7pkNuQfcAgknDYFfq7mdX1uqJ4y5ejtjsSQ55iFELKyfDCSoBLGPXDoEaJfrfueXS",
  "key32": "2xmCNroTSjhkifcXtVyGCcxHgtkzC4ZPAFfNSfNrc6tL58o2LKdo6kevs5GmRFjsJd9GiSbRC5xXXiUfTWXjR294",
  "key33": "UZfjWNyt3BfitBkmbQhVStchGbm4vvE28fvyu3VNVDQj5QYmSo2ggjVWKHTph6Woym9oAYxtYsQKCcCfiHJCjZB",
  "key34": "33usdv5fjD8ruMaawH2H1wZNBG7nqfctLeU6SyQDUGVvR6gHug9Kv43HGyBbpHd21C1X4yfViDzaCaEsPx8K1Dzt",
  "key35": "5WQGfxmw5aGh6nSVnPEntMNwfKAyEdAepadTqw4jC4rSpxRQySe9pXDmGRgUGujbGa1fG1Yw5PLJJNXL66bT8uAR",
  "key36": "63YUMyvt65GSWVSgGo6Zviv2sauKm5CnesRBWoqWp4Qzr7cUbNwEpdLrNubM4oEYzCwsaJ7UNp5S2qQeC7PJMY1W",
  "key37": "21NBcwziioU2q5sJ2FLBpC3LPKq6gaNCSqWLcddqU847ZA7LJn6Do5UZCp39j5bXw2DWxQj5dTJJRtdt41Cdr758"
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
