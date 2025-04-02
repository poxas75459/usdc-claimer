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
    "5aFJdFHSJvViJ3DwJUemcVuhTtPm3JGXsumT3upejgzeCsmfELMXAWbMzhEzBMYBjMepXHx19G65TLgmVTu3To2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b7ps6rf9dgfjSxoG5mtMYUDhNyo5aj75x6QepiwVUPy48YM3MYpYVridHfTUFGdfHbY5XBAXg7z1X8StGRVd2Be",
  "key1": "4S2kjVzNUARJ8ZXVTuDGPw4vNavSGYJo9eSyREW92A72YWk4wicNjV2kSU86tXFo7s7fZHaXghtab48AXu1D1f2E",
  "key2": "3QGRNSfuxCvBK7xf1F4cxDfdV91UKxPxEVaDrACkjTmLtEB2p4zEKyuUcBm4Lr7k4rKvW3DvV83YKDEb8ugqyp2g",
  "key3": "5kVyibLKZrQdC6Wt6sjYTy8jHb6Wd4oafnR2hx9SSqi2kDyUgx8e3ysiY6WVZBwoMgyqNB65ih3R3DvLX8Tgvtw5",
  "key4": "5zgxq8guKdMN2BLvxyfNdRizGCw3BswHVzY8s7HHwQiCPpkY2MPcFUNRJhVUCv9XmhAuwnfr3ZDmRrDJu5FrC7uv",
  "key5": "oxjAMJppzrz4rnkoNnVL5n3sm7ZMkNEQZ2BnpW7bbmGbaX8wmxYMaE2haXD8YFhQwTaC3qSuJSvX8CjGkpbsJtL",
  "key6": "4yhJvhwoWqfbTNVKJszysuEz9J7k5LGGf1cdENjkY5oimJ6Lmzg79GEjXTE1g7MxJK9qecFUMrvucKSrBLsSHowJ",
  "key7": "3bxNo5i7BoVaJhv7CSs9TiAuumgTFvfNY33JFyw2MsG3G6ny6P7SC7XiD5xnwBD1fhTd7auArJQbGTjRmRVmtEtc",
  "key8": "36ZUPEZRe2qtAq3ZiVKZjYKmV3Amyz2ubHT7E2zyA2hhwuQDxHtqTTYGERtJ4Tf8xHSb6vc7zNChbSrkw3SaCJ1x",
  "key9": "4N8cVGDiVYUTapwzfFpPgURiX3gMLCad9T8oYySVr3uD4QwU8USij567WT6QX7DPm9RLD9wny7QynmsLxSAXqDRQ",
  "key10": "CjUCBDEUWWNxxBHTLFw8ysvUdMSX2Uqhj21fpMgFHPBBUK7EXsunVBTkxrYm58tz3jGnFpW5NSbFm2n2JDL3EzY",
  "key11": "3ch8AxX4fxGHXVpg1vmXaVf2xnzjYVoWLHbxXM26FWpYW2gBsjCR5wWpEJbmpAFHe9ERUDPSvi33FtddGHhDG2zF",
  "key12": "2CESbYy8yyfjyUrrg6G5RcEuydvhme4dFZJHyTfiQz7Gh9knxWkbqeKN7gkmb3fAvrK7Kc7EgnQwYPKtHY8iYdy5",
  "key13": "3d35VoMg348KjLH79Q9UjAZntSnUa1q6ER6KcBJS45Qc9oX1FwEHdXpAwk7Yn4tpjSjTD4y9ztT3Q8KAnu6kn3Ad",
  "key14": "4C6sp2dZRayRymcRypWYU3gLfjadoCz4icYqbG16SRoenZtSTvD4mWSsaBAxL6bZUaFKyPVHtXRxzLpkuNUaX2nv",
  "key15": "25RJuqc5xtAmjnPZcC6jMKDqNa46S8pr7yuVtPfRcE3gY92ZZUagYkvKzUSGH9LswxcvRdV3FarNGyAxkzjK63y6",
  "key16": "iVrHijDz6Vd3rTy3SYXATNjUVCaDhzaVgbJf6viMWHqgTcvCxohPWZpkX7mRnC6NEi6fzkQ8T7vYnSouuMjqeW1",
  "key17": "29rh1x5zaSqEFeEXxHS5ChSayrMZqdVbcHJntskH5kgvFjCUrZ9uLUKNMWC4M3ChSEcamFsRGtV5XGjewrqWdVN2",
  "key18": "4JjWddRhooEmxYeFD61cS9aaeno8ygg9WCiHiQwL9ACfkZ7NUpyNvqYQJbZirDNYqGe5CuwLRCeaPJmV5CZF8oT4",
  "key19": "3idqmoqUo8yGfZghxQMZEpvDkBpnTwciQYr7z3pQ6EBqbznuw3u1cUS2yYmqPCu3x1XhuNc8pbJkwEEkwbKXgzze",
  "key20": "65X3TrDKZV2LxKeLZjsyiS1zdfbV4WLRB6VVVGspVXtapyxcMFXL93qWvgJvJzKnEtkGaAtcgr5gCBbPzkMr9Mw4",
  "key21": "2QG3fXfwUakB3xnh3fUabxoK81qotEw1eBWLMx7CCWzmzxexLuqqi1BwNfAr4dUbbTjGYNBZxdrUg4FLntknGdAC",
  "key22": "617gUb2NUSvjhngb6AZsgk19HJxYxGJFyRrpjTQHFNGKGG4XUTzN6ADErvLtE6RVzpTCXcq6Ca1f6sqb5azRqPka",
  "key23": "5A2hEZpPZcmDr2wAmBQSgWd9pCDW9C7UwV29iReYTsnrNSWhGdSCsHvY4TMgXeQ4KFncpg448Zv8bUVAKugFCoFE",
  "key24": "2PYhjBUrb5iaxawTBzEjdu1bLz6ffm3t42j4wrNWW6f7qT9VvbeRVgrZ1Z1M5GzgGrCa4A8Hk6WvknKj2jgj2C1L",
  "key25": "3T7sPJky3jc3dEcEVgzV6U2Qh98DfuEx8yUoqo2SzF6DzXkQ3DeVMBVzgwRsGKfzxZK8VmmMnLHkYGbgVoywoe7h",
  "key26": "45pVoPsiBT4LFvowcUSen6k3HPh9aojhuVMFsyN3c6EFX2DytM2buoV6MFLBooswfkxz9Nf3WMwCPvW9qWFu3zxq",
  "key27": "5MbBEy8SHpRuUNZW4YziiCfADcjxnkHSAELWcaeEtsZhgyeZmEackts9gA8JLgNmjM6PD96uFAqZCvcJ8RKi2jJc",
  "key28": "42ghHPLDWBuWpQJmop3nz7TLB8QeucxjCP1qGnQEzVFrbkaacWNsHrNnh4U6Ca2a3UE4QGTaDcMTw3S8r2Md6FRB",
  "key29": "tTaR3X51smV5XpC4aeYoYeHhWLSGdtpg2cwY7KjhfQyomjaMbyrTRvDV7paoEpLQiEwao6QcyyDZWirbhQ4ba2P",
  "key30": "R1uRfSB1epJ6A91PrFZFE4cuu7QwBMSFa9amUJx41CjreVhzMZVpircwQvL4JCDmwmjYtq4kQ2dTuukDLULrVi6",
  "key31": "3fbvt5seWsusj67hzLxiKr7aynxwbHFgzYtPkP1EUuCvBhr4zfmzP6hGyf7xamp5HbBrc3Hv3xqZBERV5qByzhcn"
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
