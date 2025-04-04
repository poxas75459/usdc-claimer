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
    "3gfFTy23YnZTvY3n6NW3a8nTqFtezJ2E9pNyybPNSVKcd7KFEoVUinELiNw96MhgFtGgvhLbt2kRUncEzunDtj83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H8XnMk1sUrRsUw9K9azLzmY4EvwGnC9KdEdzU4d2VsG4XkYF8xGbC2Zq2MVzVATrLU9CvX2VpPb1vj94aCeFB2Y",
  "key1": "5SpDSLX6qEoNrauZaHKWwBPytUNM3aALJYuKhYaoLUtXKtipsLmbHoEuVkiC3N81KGQ3yZJcp1oMMUEUVvKBLbZD",
  "key2": "5eKMqGtAAuAVJpovAEgGLZTqCKrbnVgxJwZXE6at4Q4zoNcyzrvBvvLuFfukYnmgv3ouFcVLFTCkfNsteSV5z9XU",
  "key3": "4M217RwzvjfP1UXVne7ucahvCw25N4Ej4LDmwTQ7iyzFTRvZmy29mjKmf3PGbZA88LKu9jhDgXEhcd3cdGaFoMGE",
  "key4": "5L5bhFoBoLAS7meMLX32mbsHf46Ubfwwx4aC7bKV4FUVf2LjSMT2iGntJZDA2csCJzA9565AA4E1nUAaqqfGt7As",
  "key5": "28K8jMmqyH6V6YoWxtSYM8hynkCSE4vJresVoQzJFs5wHEVDHaRgTLk45VPydZqk2EccicsToDMVsKznWHyvjxep",
  "key6": "5M8vC9hdvKfWLguzWfcRVdgbKwkerDUyPd1GRDpi9R59X7xTxbAfQqG6pRJ64FXW2HhcTWZ8UMPKUZK696efXxav",
  "key7": "3YLfmU4QJDK4zKimf6pEH2Ud86j28SgVZ8owNPQ84RsmcdBPBx8p6rESAGVjt6MqzVoSQ5KUQYmGamffTcSxVLv9",
  "key8": "4P4E5qHHkyTG4uu1ZdWos7JDmMJ46XGXtwRFyDSvMuPAfFzgbQ8eouWLU2WU6kYMrp1j33BkgcwHuo7TTtyVr9z",
  "key9": "46wd5akN55goJQ72sacF4hAcKjn2Z63oyAp47NwjqjFTsEnx85j3Yhrdhugo3G6CAZE2K6LjpecFLAqta8Ah7BRy",
  "key10": "2F2yh2nShZX7dH8iwxoEwjw4spa19P7n1Bxn3VJ7nxHk9WtPKP4uPL43xsfy1Dv6oQrp4yVSfEr6A9EYZ4G5UczY",
  "key11": "46SkC6nHuUg8WvN224HwG5xokji7krQFgQSopDEM6C6seznQQsKgQ98pH8YfVcb9BdMscGAJR6vMsY2EENYmjfyU",
  "key12": "2epLJVB4MZL4YsLAtpmSmHVoYXKmdYRgpWcNUfMnpo8JqCJjFr3xL6SAYKCbevEU82As1eTKZMqd7CcURpbL1x1U",
  "key13": "3U8rpsuJLCzc5iz8X7qM1YWTv32P9wmCvew12TSsL49JtgkEGE2v9ycyTauhq6AgVuoTPgCoy3PTL6YY6zZVrj7n",
  "key14": "AisiaNTiFja94qFReQ5TDrqPQMdLaYqMBTHcRT6KvYtCzwUBU7K86SeZkhEiuTEEqJT6pqqKozBNcYHVczH3uWx",
  "key15": "4ewkTrJCppdhtwnb2cYm9ksHkmbutThjeqy4kn4ue56JsCjVXoVvTqrSVh1DwU1VFz1jNQYHMNiDc7Zjh4rnL1oS",
  "key16": "2QzdF13kSLVbZ5ZZj4J6ieYV9hQjxiuebPerpm1JRnAYaQgxwTHQSg9YHCeeBf5mb673Ewjsmch5n4Vji7XznjWz",
  "key17": "4rTmBFqnWWtCEVL6jDMBe2nbd69AvbRKVNjLgSgec8Y922cnLTYXeemz48JTS7UACePR4qfbnDXSxDpyjvi3dHZn",
  "key18": "45aoqkQbjeNL7xT8fGhNkQ6mLB8pRTQFfkzkgG9G2yu27z87ZMEWCgDprFxoPk4iSq7epWQRFZJVZ73CE6DMPnWr",
  "key19": "3MdzokPpfGjgGai9LkUbzNBLFqtEyiTopzdCBaYGcVTjD7R7bLHFFbSaRnVpkT67DdCSHMpzQhWwiHnxoqD2NHE1",
  "key20": "3GaurzfeJzBFS4yisHVTVG53bgKyP8SFtSTFzkAcVz2NpTccYDkgj8XHcmxWu7AhVysn3Goco6EPyY28VhW7D8mB",
  "key21": "4vzy6NnbqBRbPGnYxhedWNmKAGLx5umzCGWN92vn3RdDVRcFQamW4UmNVwWsRbC31PwQQzTJZ7nxjziQJEXLA1eN",
  "key22": "2ffmT77tzXMQeR53DmucBtQLpuTGsDLjw7dXrkZ9uVXkvReajpmPfRCnXPsMYpWkje4PeWipdn7abUgsQ7sPj5N4",
  "key23": "VKhgKf8ZW6S7qvMyhvNpzNt7hNT1HZrMHTuSXJ3pWX6W5xVFmzGegzzpW2WmUDkdTUJfgiWk85NuFxU9DJhzbd6",
  "key24": "cG8dU4GANTGhmqDGMu48MxXW8gRh51Au4TmAxkTU89RRzpD8qCfm8XYB1kRxKYwMaf3gjmGj5irujXoazhSBwrh",
  "key25": "2997g12LPTVfrT9jMjZ3BF8uFyZLTQs79B9X3Y2QZ81BYWWMvuSwW9i7eq3L2gZQtsmxHdsCrALzateWcavp3mkH",
  "key26": "3G5xmmuKGHq7im8AJmxX64WzCZm5idqS4ZmsD4XnUXdyXjnW7pfioxo48KvbG1rYxocJr9rypEsH2uu7Fa5fcM4h",
  "key27": "53BKr29gThdpbwYVEzEc9b5CVZZR7xMDTXG5uJTNqd2yG34GWEDaidMks4nJ7aMMPrjBKcxvmDRpGnDpUprTewru",
  "key28": "32Ra8pDBNY14p1a7kYt6tANqtFuWK9giHndDqeGMvVzrA8rZ6aN3zaFk144vc5REQj4gPAoSPufniSR1gvngb5gn",
  "key29": "58EgCGUPi2qM1PxYY6t2cZA2bR3DLEWWvo3PQGkSwzsRKXKreS4jpcMregYyMrNbTGqCpqrawAAyx6o83LQYa9Aq",
  "key30": "5TDjJBEu546GkSmSnimbNFxdsA9f4KowYBC9RaXGKEZ1AK54r6YicDC5DaY4UxPXSAdcQxwLfZaKYFukuCT1nZMi",
  "key31": "2dzHzMPecahat1i7p3FQSpP5kTXscqKdSoPz6fCgumQZP4wgrQYQsW3kX6Nsy4U2FQMAjs9ayBnBCbmdmxvwg6jh",
  "key32": "2oFYtjERFPmSfoMtixyiZoDhwawxhzLzvfAwGzpmBxSihoGJgPeWuG4zWKJny4cpMG5VNw6j4fnMMGkuo47r2H4c",
  "key33": "4TVWUjtkr2sBJE66jTjnUsEwpyaBRNs9aosRtuygywjK6UWmCseaYwcsftcKRZx36guS3nL2Shva7npZhkJWTEzM",
  "key34": "2xQEnS8T2g1UnVsoMnMLmTq91wYNX3cYrPcHkF6SB3JvV8VuEUNVeYZHmQm9CRBs67bAfksj8yAM6WteVLkCXbkH",
  "key35": "FpVHR1DA28UND91S2wiMKeWQrn4Stdxsc66o2hHgzVc9Yvh1cTEZmXbhRjvZJspbFmf2z5zGfsPBvyr5GKBsi2c",
  "key36": "4UkyEqNAmxSXYhvFkkr3may2RQBCoDe2qc9FQ2wecgkjxYxbg3XmeHPZKK1jhk2Gy5vgc55XQhSKFPGSpcdgxtmB",
  "key37": "mNURxZ7FpzLyE8wVvtqFjPdmcfKYWZynhzEmiBb5dCpRvHEM7ZRq3cxBdgURA59BcQgSYh8MteUqfV59XcX5JpZ",
  "key38": "46XXjihuosq2PKELNCq4gLw4tWpB7NrCyQ6eJym5rif1i3wnpAtb4FuvMc7mXXyJopNYLu58H3sDRmkNGmcEprvd",
  "key39": "3xi8NJQ1TNJvqY6iXwkjmwAEFmDj1WEVPbTuEUbQtytC23EuvNsxBX3Q3VDQp6UkLGsDXL7YrWV7v3yHzwtJS3tH",
  "key40": "3Ag4LktUauM1BQtyPmDfTHX4GgLnAWzN3vEWTeK3WWRUwsCjru78gXM69kBQGp1sSzFRF7Zt9kX5ihDiCqrVD6y1"
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
