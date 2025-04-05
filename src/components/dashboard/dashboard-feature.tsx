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
    "533SezxDGzuk12xD9yZ2Sg4aaeRs4LUZqpD8FJXgBqujv4U2wT49RMn5ZAoE4gL1yuWSVVHGnPVQzf6YQ2fdXEty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v1vhUwQX1JC2HTWuD8PszSdfr4b77LfgdgKrejwFHEGn1N2pfdjrHDvXiWvMW9zT42qxeHwozfh49rML4Aqfvzh",
  "key1": "3zE44zgE79W4jswWp1tMdrRd6WX4CBzdhRMZJZUope4J9vL1V8ZDgVD8D4SuZL27bVLNGifxF66iXWVFT2T1Ay11",
  "key2": "5kQkfrxqhhhh8pNnZx7H1RH7mspikRw5oTajd7YfbYuaU5gfeMxZKv3yNujVHV3ESKLEMKmeKc1k2vDaqNLnUZYR",
  "key3": "5TzupMrRb5ZTDX5fRiYPm5r7e3opnAxmNxeFUhzdxHgMULb8fanJZSiav9V1BmrvFqUMr6pDSuTsN1Tsy7V8qZ67",
  "key4": "3615MU7148L48gkW5jGVFpEZDitRudDQwQXqe6MUEpAxNMEhcE5aFasafP7sRitDbNjuMsSLnERVGUtwewkrnhNV",
  "key5": "4694eShQbRTGvSjnPZ3kr8PDP3tBcg1EpZujCkKRc76c7HBSuah1QqfNR31sa9buRQi1ZkKg469W3VSgdYf5pGWi",
  "key6": "3T3nNMYJCSMtnUAmUJb8z7pjnrowYrjXvWqDC9rCrrLysHH8ooKA2GCq6ccgsVSiMfWF4oAnxMYeSDR9Td4J6guY",
  "key7": "638mJ7ZcHrm3X2ptS7PrTaqAdfrmAdJMtWNAHbQB66g2LvQj5yeQxQxQTawETKHk1qNraMV6x4usEvpMt1rYBaU7",
  "key8": "2wUfpsBpp4RnSsFaRLANNkoWkZtn1oLPk95JnNQgqB2U8FKX9A6BVsWrUU2Se1UaK8nD24S89mjSJ2u6xSWXofu8",
  "key9": "3oNGqsAw4Hz59mT6aKoTpF9t6yVpAksfDRf9GqGPmJLPmWU5M87ut2k3oWxHQFsamu4QxxZCg2wuWaJ1f8mftkz4",
  "key10": "217hDyTLMzPRcn5VVv8dbQyEmy9TN87otqTVNRFsVKCdH6HeAizgxijtEfHE1EEHgjo2xSvJ6GQrfRha6xkSqmpg",
  "key11": "2oF5mqq3n1F5nRJQZY24m8mDJHCyo24DVQLoHar9zUvAAqjHwjFa5DvGNYnzjsBJkuq5EDc25hCiTTSmU8dFADWb",
  "key12": "496M5wDCYut1kC19au5ZaTVA4GbtQLj3PVai1gpLcFb62bSaUW2uVR9WYLXVP7k6z1SBGQ2nRqh139ED2xy9mSiH",
  "key13": "5VwFHqgqLQR2AGocRrxYYuURkJpRXBxLLZ3ZLpnuGoQgmLm7kPwfwi7gwi81q6K4ncC2AKek4qMESXc8zsk5XFpq",
  "key14": "27CFnCUAxL9aeR7hKivYd7P1uetHR1FMmWN65FRTq5UWgeGEiELNgvFApYFgWVGqAx1V4Prcg7cww9dbaG5pnJwq",
  "key15": "mVrzMRNeScAk6Eiu2PAyYpati3RuwL3wihovDCpEcxq1qaFZFY4L8q286h8bvDMz34bZ4v9B3tUG1qrPAyLYNTR",
  "key16": "2TYkukjTegsep4YrHwV3c77siuLsTkbMXBKEcF4SB6CZo9QeCNSBZTwohjkueHqyQ1sz9yDE8X5q2cXdssJS5vyS",
  "key17": "BXdKY49Gfs5NMMBRhWpbPHRG889Hpkwm1q5Wor4FCenEQDBnwMCH6AqRXKZ4dk9UKe8HuyVufi5ZtNBGdLVGAWa",
  "key18": "2dJJb4pbDFxpSDXLjtg3H1QJ7cFJMgdJ5NmHh4J8mbEr67Cn21vqKiyHcWVDAuWtXfxNypKxKCaSLXEjT8XnncBV",
  "key19": "52w9srpnzHoutAhxHicqhjs8GajqFm8gDenNDGUw5FM1uFUujhMRZnQLd1GWB3EC3Ac58dSnXFoemJX2XyoctHnf",
  "key20": "27nGNe1Yr727q7mXE8takM5FDLvbV5X9eVEq629BZm66RyFydvy6K44waLmmx8MjAwzdMCcBXcy2zDaJQq1RGK81",
  "key21": "5poshb1JHiMXCdqv6JNBKXzZTNwUAxNrsMYyWkLUp5rogjPRpALQbDQp6wMKaKUVA7q61nJvehvW1ncgFE54igiL",
  "key22": "3yAPYpGEhdJxDyMjqiiq8y9DZ7nQdcGB2R4ByXwz9J8R5xxeSrwrgbCPRh1dUhoBVLeZPUgLPYjTsA785eWHwnRU",
  "key23": "4txqwVq35SizCdLJ44sAna2XSs2fEPfXug6jSZMp9JWEEK7yVQksc6E3ipV1vwoWZ9L5yFuPWcSiP7uBQqAKwmd1",
  "key24": "2Hhbuq46rUky1Bh8CC829XYe1Bd1S4qCuVDGW35zEmUV54t9uSGAtV9cWCR5GEtsRdAUDJ41ZJi4qqrtkQ3UTXx8",
  "key25": "3WcFo5Nh2MVsZWJh881zrJjgLvhvJUX8Z8Q73RcGqKaLnUjkjuaUgGo2wMGY4tRcFAc4A7HmrhLNERKu65N9XWWz",
  "key26": "5W5jbp7KpYHLJFoWQdfSNu2eeZZYAsGNNYbuGW21TzsNNdxDgQ6woRLUuimufq6FM2egxKUVydapmft436MvNNhK",
  "key27": "4ptgYMoZuT1DTdwW3v4TkvGU89NDYeNmux7M72jX9rNXDd3gmtQnAFtKcubTteqAE54Gt8CuombAHYVaoWvUESWX",
  "key28": "3fjHLKNF3Y6PjFoaPrMsA5cQfuCMBzjffB8w9wbZJDcYs8qEVGEPVsoreZfsDtgkDpJxoMd9Tsqmr9rZ6pTP3Hq1",
  "key29": "4FFn6G17YJEvvRpeWT2BFMgjDGf8KrZqT8XcnfwfZnZHqSxgSpHSNt4edsmEGDSMADb2MpgVopXZZQtMYqbnm1gC",
  "key30": "2gFTMeo8WWQdR7yerQLeEDeJ1eHN15JERsRYSSgZek5yGccnQ2EcCH8HgzmeFC9fHaC8EwQzs64s4ZVGVZoVP4FV",
  "key31": "5xSC2BYgXJ3bGFvCZ438LJnr6tzJ4zqgwmAH3zNgXeUY4y1JRXNUQmbKwj17JwFzuvv5boBhtUkFtYzPy9gHdztK",
  "key32": "fcGic3N8aAV8xsNnG6J13Y28KEbMpMGYSMBibMtGoadXZ6TFGGu2vZYhVjobMU6PuRg6nsfEgcfRZS6UCaYUczx",
  "key33": "2HV1szJnxwBMAKL814A1VwGRUtm5K24ZoqdyV6xHFpeBCPXak6UmYL6Xp8LiqVM1NGC9wDrhKzRLRpLMVsf8w8h6",
  "key34": "2oKuWZWo1rN6TLcWgMmB4uRc2A9vUDEbdroP5Y9PZVWS5zqie2436kByNGVYrG7RawHuyeKKG96eEmhRGgML6jM4",
  "key35": "UyaZLC7vt2RqtcuPhDmRDqXrcBeH92KJ4kzTgTeFjPbcztiyiAZKZDXHCnzR5XSksuWMwPECi987RH9DbqJeh6X",
  "key36": "4hMwhoTFqvGFcc4TVcH4F5gy24zTwgcU7WbPU8YuCgqCV1S9GUfWBGUPQns6w1WEDFZUGuRkaJHu5Nx4HguojC4",
  "key37": "5LE54jMG22v1m8WP1jWHUFvGx54oW3WY89xbfGQDftgUvmS1hpRDVToa6czDmvQHuYcg3BKo3Emh6KWtomzNma8Y",
  "key38": "2MPtzNSZLhT4qqqGWUMJwoQSdroRfPA4NsoiRM2LSZoQqoEPoeKMBYceXzw1eipFbN69P9p4wKW2Y5GfTCore5Lg",
  "key39": "3Lehq6nCAxXcafQ9vhFsrstbbwTEbgGftxFmdjehmZRmVfbBCMq3mNhayRrcZPvijPpZkrfQF4WikHLepndECAma",
  "key40": "3FsfiQTnacZJorHyFMKBzzHw6YLPrWs1iMeH8ZYKorUdKq5ZMy91ZTbEDH9KABTCgsRUxR32k6j4yqTjnn6z8Xfm"
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
