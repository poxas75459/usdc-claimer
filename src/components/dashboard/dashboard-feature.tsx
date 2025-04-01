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
    "5tBin8gYK4do2DSRgrCbTChPyEYEvP4tFHWQKY3nTiq5LAuPAmGri3LgErMdWs7iU9UkLd5gTbqhWCd9M6XAcBCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tBUU6WjHyqZTtyB2BT9mTVWNzeGuuQKZ668KGqSdQNKkKuMhFJDW57AuJS7yHkg2GibLB3tqd3nkSWBc6q6CyBe",
  "key1": "kYoJqMf6WMn7RfH7d14GcFSEcYrh4tZVyD2qyLHuPAYo6y6neNe6zmQmn7CQssKJgsfahbFQdo7cY53GKvvHVYM",
  "key2": "5TJ8fkja1QyxGgWRXyanXawktxxBj8JXE9jdbRff8GKk2zpospcUWw6cQocBb7WLVaeoc5LreqhtN3T6rhYH38ai",
  "key3": "3r482eWoXAgFgWk2ce6Rfr9QLZ8GiuQxK1xna8c2DasaZ9LcUokUkFDHGTDDE5RVGEo5Rxf5fEdmHLYx3PYVZBBj",
  "key4": "3bmyL2bV3ZwdXhViv9EDEt4rUoF3A9Xbchfke7pTiuHyr4EvKyiEx9zUHPATWMjqEReVGTf23Cs5vujqdBhf8XUq",
  "key5": "4i3msheBXiPrJBqtoqtHgMcdQJkuCcksHvAVPaJLENcm9DMh3HDtdyz7Q8n6Yc5CB9T25GnXHaTzhw4tVE4xgb1V",
  "key6": "t6sDUXWwVD9vVyzZTug7CX6Juyzw38s46Keu2Srn5Sz8QMerWTh5xxm3JBA65G2vv7BUhf5E62Wfra9EPncp3mS",
  "key7": "5rixKvYmTLLtjpyuVnu3tfAnKEuqMRX9NZB1WFY8WNZCsHVL5W6YzZrhVTEhCEjRiwJHN5EbPNipQYmSDPPew89z",
  "key8": "3bqUuM7GeDaiYSVHnzmBrnKU7bMAGp3X4tWGUQzexxnysuF6xA35gwVoVJvd4QittmSAMhRgZpjamvXn1djAs4yp",
  "key9": "EerhJmLodPuXiNc2WPh5XRUgypmeC5vCU2C4ozuHVWSK31GFnzhutSLCSxHzUdyQKNxH5Wk8kNnKKzZCCs6XVHF",
  "key10": "4h3Q2NpjaWRHdybLMQmBmvbT29yseqxGHParjAFmqvMNKF7xj1wFimMQHVs4dyFuJJpWS1AX3gm4rPY4ki4X3ZN8",
  "key11": "3VUCATQy7XqqRAnRxUw1JekB7w2BfH7kfE4k8ssdCxFnm9UfJ9vfSyLka7S931SAkNFEzJ6M6sCGdVDy8osao5P",
  "key12": "36i8Feq9A2u1v3wAnJoSsNvZDLtbTp5FJxw4BemvG85SMdveUUTXvLwVYTwxyEU8sVM578RHUcooYwRyDWH9CzVD",
  "key13": "2CJWDd4bfc2UYfSCs58PFwb2YAT5Y1xEt6R2Dv4Yb65gSufdDEXDNA6BJghmiPkNh1f4rnEPigATSsRXQGfGsiXU",
  "key14": "2oukgAqdKAufkiXqDLWW9LeNv8i1sTJqGPMU4RxTrrw7RcXdh8pvqFvhT2NwCQ3c9UjxjsEAqkAj5GVwjAETzsVy",
  "key15": "2vNdF4MSFci4T3mRmeZqpxShvMqZiSczCgbPemosy4bsWwVg3ijm8Z5QgWxWP9cQ8EgB3uxk5N2XY4ENKTaGTFAQ",
  "key16": "9DcR8CWKy9GPEuiRz1UNdVtXD2cdfBpjd7xtiy5t1gG39x75ydbVL6AmueA4xdLpsdgFgF8f1HGqmorAT6Ktiio",
  "key17": "57QoFX5Ca1TCsP793HaoskcDgg2XGZZtcWPikMCttgpz9ScGbtfQSYFmxo4U6ZCUS7iguADr8CbWER31fT8f3mTq",
  "key18": "5HbUUtvimwTvJkrFrZpqUhRJiGKcKwJeJj92TnWXSz5mpkubjEKBSBchxkJpDhBo42kHrr8gzom1PCj9sGpAkQxW",
  "key19": "5qxu5cZx2pfTtpF2q7U6Nfe8YuEaYCc475fpWZxdQ3GZdiJRx8WWaowXYYCp3vVHNTxRR2qCcrEAYLvoDXxJjcJ2",
  "key20": "56ceuKhLY7q6fALpXnZB6eLn8j5qSWo1uYCT5jaGpXk7omWT9XrzVeZRTtK2p5jGWPwvW1FEYEta6SuF4fLC569R",
  "key21": "g8vFPnMGM6367HR7XV2uyzyuQdv8Fnihi1se5QePGYdR6vjxtC46GXyjX9aWN7DmvaYm9RLcb5TmXA7B7fXqBVH",
  "key22": "4ReCCLhF4SCNhzWKc1oeDwjw9YRu7MyjfQtSncw36ZWAMXvCMAeGGCjAFBTnDEFSUVmAZ7Ym1J6CvRZt8AdTxVs7",
  "key23": "3BbhzpF7BBC7c5tLWLNwLnADxxgLxHwRcREG8Jg2VEK4463BPtLgSHwHLtnPQB7SHvJjy1HJE4nK1zTE35NCfLaS",
  "key24": "2DxmrWJCntNPmeaHQM4dAXxQJy5sr7hvd2w1Tz8rsXY8kbDB8SFwWE9rDeh38ZihFBLom7j6j4EYiyypFVPmVVv7",
  "key25": "5M7hLanQok7w7EDPSCX9BwDyATkirFA6uA2Ckh5Lw5yfGCD3iGHn7LzwShh4KiX3yRh2BWaC6G3BEuhmjvxbpBrs",
  "key26": "2pJ7RiqGkc8ExMKfcmkt1y4JQ9yL4YYqCBVy24DwPHYUE37PTtdavSfyArQkD3s9eXrGaCEeTCifGWT5NP7fz4c6",
  "key27": "2i5sfoCx1xeWkBFnVdoN2JGdcoK94r8SG2MMdhD41GgUHCzwsFCXBa5heA9g1hEv9aLEk8rGMiAXPsNoeDELEaXd",
  "key28": "2cj5vsxhKjYkkgB7tKP2a8U7x5ZYmSyKZb7pqDSES5Vi65mQCcvuSFPepBYAeD8b4RoYcsZhwfcxaE4kfqpCQai9",
  "key29": "stdZkGLDmPfZzM8JccFbU9F7GjZYQVbfXdwiVXGMYnJejGEKrhRpG3BfN7C5HPpDFS6W9Add9yuiydzmQbSXm56",
  "key30": "3wDVthCmtVFeiYGmNqPXrZJDfuk2qrnYU86wLH6iMiQhQW9gkQ15BHz7xdVpcR3Kkv7jAg2FDVh295YGePWP1KyF",
  "key31": "3XeybnrkxYo8yVpSue22S7JDWnpjn9RufK6Js9RzETq1aRCPP9Xzd4fJ8mWizx8jFFPmSDvXxqNhG7PaqavE2ZHD",
  "key32": "4cgQPMK79Xy2r7Atn2cEjhimyAyka71vt3XcBd86SrrPunGuNfEFkmw6mWXS46vtwjSN6PnZSrUh4Jev12imSuax",
  "key33": "5zaSwnsEREQM2dkMSn8TGyX7Q7PKz3SF5WATF7NPenX2onE1ggvVHvfHCsx7kofxf1ayXiqMxsJqwvbrXXUwHTGf",
  "key34": "5N7qYhQ2F9SSyXzrpKDzqceTD14w3qVEGwHnTugugm5rceHgGg3oKUBuQHcgXYqbBf4Q4JrSCYEmyS2cJycEZzZr",
  "key35": "26JjoCq3VGNgpyZTmXGyExVpabkfF1JQaUCxsVSQmbGoaFAJvgPPec6EEmhevHyaaKAobFACAkYwuGojdTudkLHA",
  "key36": "5HKFVDWDGkmx1d1EgDe1oDpF7ogySv36hUVjg2acQmGbAF89kEfMDqeYyCSmSVZXsbPCRZdyzZ5h3Jwjx7jHeu8H",
  "key37": "2PqA6QzPDS67bdC2DW61JVTFDWRu7gXQRc4J4aefH2TKTMoxJDgMSa8Wx1RQHJxsBaqKgEu4D7XFEapyoznsy8Qf",
  "key38": "2VCSaV5HyQ76DXXjCMNgbCoWaRtS3GdjxkWrCutpeE29ir8hAUf2ue7R7CZDVapucNtCsRXHkXqzViFi7fam5nMt",
  "key39": "4EumuQpmk3pjutkGnbSkmz5B8xYctHbfqZgY3fV6dDJKaHcvhXxJgNaH9F8zGpX2ChyppViRPrWY8KtEarJtnE7B",
  "key40": "5zCakSyyvQEhz1N1mNUT7PkyhkhBE6G22ek91Y3pXzJdwAAEXdWmqTKs5usxbktqZK3K1wC4cHKapz4H7GZkUQBg"
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
