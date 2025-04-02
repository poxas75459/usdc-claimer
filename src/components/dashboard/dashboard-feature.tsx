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
    "2XMfUUUH7vcw7ykGkQXFX3rX5yT16M5zV21Bi3ZVzDeJNkkLDuySZ17UzEZAS6GfYfQjH7pb6hjSMBWJad8fJ8rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YTHPh7bCD616ZocTwqx2p7TjX8j7qiPd6AeYpuNHBEppEW9BHbH2ZnNoTdkrpU7g8Lhc8RgZgkciaXxYgLVoswe",
  "key1": "ZDTronWqqR626ExuLkN862gzhzLZskxCcmJuWAbe7cudfhrMK12u9WSqMi9WXaReKpkK1V8GPBsRQ1PRW5yi9Cy",
  "key2": "5MnLwGkqstirFbC9rdE8BtnNfSS8kHGcnyVTu1LZ3VYTZXbVr2rtpAyvWhBN9427AQUyGtUTDf2GtRJt6gmKG8JL",
  "key3": "2tME6BGXpYzFQXZqZSQ4qinPPPuXpuTfXfc4c35oSpyLNR5n2bMwUMPUMD791xDJExTW34dWeAg3KyCMVQVsCKj4",
  "key4": "66vbQMqW2LH9FhaK6LFMHZasDmfYNJy7E1nBPq6wSZDhzz5q1PDnK6sfk4Qvqoa1QtBK6jXi5Ke27wWqF2MAa1oL",
  "key5": "5yBsak98dnCzfGF8v8WMsEFd4gVLJ4UmqY2pETzEWTjemmus2gtaBZjE291rSht1npxTzCpSAvkPSUMXVZk3MVCE",
  "key6": "4btCKMTXfv1XudB5deJHRaFQZLfXn4cJc56xufVcL9uLygdTPhA7qVy7iSMNd1VD8t6cHKBbDyH2XYU1t5jLWGsD",
  "key7": "4v7Eu69JhDcPEgb4rp26mEMLSyQovkk4MJwdFZJfxe4t9C5ermfBQXYHyeUKmkVZVfUSiGBtMsDwWPVozdgt18YC",
  "key8": "PKoYhNBvrNWVTFgbda5iPxJqUC5CFvmnUNw59DKdtDKsGY3YfL28ukWxfP8JD32W3NjYYDu49mMd4edqkkQwEP6",
  "key9": "2gt4pUogAsnQJ94MB8WX3k3nuGwqYDK3u9E2XX5e2WG298vDrSwgvKk1rTs2J3Rfvha8bqfxtwSER3fb7EVyPuBx",
  "key10": "4LM8Fcct9fm3LHiBr5vrimzXBc6SzB5gGkXmeooqxB6YZZFTV8JzdKeH7FEVgyu5vfTqcY4uKzkbpedHN6ZT324j",
  "key11": "22XkqermCQDS6YhAnhMj1PzJSo6Q7dvBmuHrhALY6DrR9hjD5Cirr7DZY8Cw74Pzpw4KXpxjRQFEMcQygLCfkaTz",
  "key12": "64bRgDWKXrz4fUSUhxr86vc6YSS4gV37HJNGXLFrVZjg8JnaEinMxZ8YuZVqXPMfDFotK1nXEhfsWKQYR1aD8w98",
  "key13": "4pngwM8CTnBeYsziY31qyVjZmaDpndxUjJbBxsdAcBagDQsS7P8SEpjM3HDGdBgbntDxqCCaSeiw2g2wdr4zsT63",
  "key14": "2aLNcjxNo2DQ22BrDEkxRzbN7VeRdPqwmMXcAqv2zdBCYhfMNgD6FYuBMSB75yXiEeedr7pgAyGxzAW5hqJWL9oC",
  "key15": "4bFbzu6vxrcgeQ7nWpEBoB7BeCXTTocQaKYskdMhsua4SoMof6KbBh31dAp5FREV9Ae8vwUVAJj8UD7B3kCamrUA",
  "key16": "2Yj1uKXKkhsyS8PVwaUv1CBFDx9P8kqhqekpNBkNJyVFDckM4Gc79Zep1xzcnbgTbgzgDmGU1QSFEMvDmk7qCzW6",
  "key17": "3dzFNe4vqhWUjHVfZPiuPAyXnXLZ2ZzLw6n54iJ6a47cVZ3BVDp4xGewHfNWuJPmfUWtBE9fZ4UUw8zqtn1tYA1t",
  "key18": "5nigWwaBEsuGDxagpMRfe7t91EQuQ23iSN6y4MDk888XbZs5ppdeuQKW17aeF9ZQv3XVXBGpXxEEpxtcfLv8tsGU",
  "key19": "5YERV3j3sZEGvUXywZTSmeSWqgobYTCimDq2u8txuokDDDugEAyFDZCZs9kKMCADVTbXJtL32ZJc7PJL7gwxc5VT",
  "key20": "4LF8iWpqU5sNnkT8BQXbyGaReh6UAXPb9KQE2pC9ERsEv6FZXSAgbkRZ8AkKnSL2WVc4fSuR52br4L94US3iBZMa",
  "key21": "5HJi6RjEFUM9uWpvx996URdVSqvVgUXPwkLYXYU8HAjQemansARCRRJhBEvoMqiE11fzsx2sv1jCCM3AwxADoAxq",
  "key22": "5wHzUQ39ZJLWgU1EKARfi5YCBgFDLeTxUeSufzHPuAUhBb37ifqToCaJoJVkTtp9ewq7yAUWcVypw2214TSYv3zz",
  "key23": "5eYTeL4J8qZYb5hwTLvxieXTsZ9knRbZSKJmDSwdJBSvJSKHUxgnCiMKBZvHdfiJYpuYiAUbPtkX5ANgWFfqfSgi",
  "key24": "4z3oRvnTPx9HmvUSXUBdsqvSpdPDmtPXkLzWzyMYqtRYt3AM8YMe5Esgbwakh4ZGY242mSsHttPhxSqiSPpgGP6g",
  "key25": "37ycpCztYWC5FyKq3JvEU28VgSVG9dxQzNqJL1AzWPvKMdP1iraRfifUQxS2fRCNT7r1YRF8snP7ktHHYKooKUU8",
  "key26": "5Ro24h4hBZwcJ8GCUPNLwiQT7oG8CkP4xQc3KqnSAGo8cGgs1g1CX5CdQBawmFhXhGkD3LUEYhDq7Kr8CetZsbsw",
  "key27": "3FmK73UXxYQoyLWBwioajW8xkyMqiAkNRwQ99a8A8N5grwvMmotPJqn4Wv8VBic2XBS6B42E15o7NrqcnthBpLAA",
  "key28": "5BaoMfCYnyTKr39U1wYJyZAASdBDrrr79XKcggBo1jmrJLP1snWwkajjJZ1xXLLNrmqbAhonxeccvhwGAH4YGhDk",
  "key29": "2qUCKKYjfitHMgJcdXtBZDm7osMM7Z5uKL3wYMRifL2CoFMmKrtqXYRGCYd8sU7PdRmNHjBHiJx5YYeVij2eUXBy",
  "key30": "4gYhfWRTBoPNET8FJoXi45JH42kSLTioPq6WPQCkPB7egvGPuhyjdyWySVRgcoCfif8JcvJh9ZHD3664WyDSsseF",
  "key31": "3aJ8xDBf9FEjdM2ddkUQPZ98BV8jB9DXC4AM1m9GjqLifRA5ou879x5kfTJLdP94P3V5jwFBqstNpLe51aHxfeSo",
  "key32": "37w7c9Lm9ifdoL7CNcReskzQEoeSVgeJJYx28nobdK99DZm2eCD3psXmxVJcY23LJs4Z3WpwoBNERbt58aaajaMy"
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
