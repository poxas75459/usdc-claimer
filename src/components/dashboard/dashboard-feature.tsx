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
    "Bez8yCB6Qb5RUnasNP4rxbfQYZ9MHuxeQRZPGBrL16z7xuw9tMQEVchtPiizieAgJwxNsVg1zWVNtJKjBsrGESX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CYpP9JQo5GREoYZSGZyytGqiDFTXRjZRw2qnwmM6wuS7j3AtBA8bDpkyMhmLmTPMTNLq8xP5kspAQvGga4zY3MB",
  "key1": "5jysDWn3AYa2qHoibKBJry6LyCFJxpusbFLchiDCvo9XPzoKqimGjeaRSZr3oxbzJE59BbVPaWcBXmmykxbD9V2t",
  "key2": "2tvq11WxC8GC6JojRJrgqpPZCKqUrvCbeL2JUStPuh4CxsndSmHnLaUZcs79VNM3cNXAC5Nq1CjEqxDk825whVoD",
  "key3": "hXbuSDpfxYnV9PxVowRhYHPGUTSeuFmMsCvo6rWSV9u7YdkA7zDJDP4N2JAao5LY35Ldar3PLBY8pKAAwXBnJqC",
  "key4": "4w1C8nEmE2gUJMZTUQw5eGpxNNwdkzJ7pqSX8xtKUWkHDmStKYQ6qBHzBMwanx5rwaCPsaQGdyfMQpBmmVN244qr",
  "key5": "2BUuFkAYeqHXGnTS91RL15KhpsbxVQgSwWx3R333fhwVAx3wmtWwjw6yB1joPqoJDk7B85p6oVpd4E4nJGFerhZ9",
  "key6": "c9j1FPJPyacHronu2VgGNdZ33j5uyGnc1jA8E7cKC7gZ5HeUuUncQZeC5pxGfw96A6qYtgb7HtZVokMz3qvpQuK",
  "key7": "3qtuW7mHvQcxfZvnn86YfbUVsJV9wCDQMkRFT4CjpFCZv6z3J23PLNjqT2kohcsAhz4aY5me944G3D8fXA6CWJvY",
  "key8": "5aLj1PWMDWq7UfgMnop8v3RtA3rEybLUwiz6kaDTpyvszv7PAUwnG6XVtwVerNLsyE3nhKtu7jWYB2xaeKq1soh1",
  "key9": "5JgFzeGykS6ozok7oVqN2gPdAejTunp9Lv4s9gKAW34FntVdZiH4vsUy9DJKsSjPW1C3CZg34TDrseaJasrHuBPQ",
  "key10": "1U9NUDZ3si8cn5GDdBHaHgonLBtmBSL4ndvmK5tizXYi5CEvnjV6HVtKPdeRJ5M7nUPb7XXqBL6EuV4JisLuMh2",
  "key11": "484rjdzzR59bwDLNr1oTX9jiqu5E5LXtCAjPWbhjwUuW7ZY2tpokU2hzuQhwW5FoeQbfkRnpzJUyyBU9QoF1gPjx",
  "key12": "K82oW1Gp9W5fH1sRWqx4mVReWeUn6vejb8XMAMvgEpVCFAv9sSviU82YyAPH4pfMhHBgaHxb9uYkT1V7KbC2Knx",
  "key13": "59vYm4CyrYRgmK1nirmigaTVM9T6dDPCbGaJg1GFUEKwbqvyTZFYGQy7YuSiBLVVFPc1u8vACxXvP8rJVqTHKRe2",
  "key14": "3UhyP5qEmXh14vocGLXwV1yFT2zg9vUXKV1Epvh24ra2pyuKaN4dLWybJFWKwpcMZF9YYGWEoShTudQa5CZ4SrQv",
  "key15": "4yKCGVuhKHvh35BeYJ3CPjzSracWbALj3zJ12Zy6ApB95aCXZrGSFdXPpfUSjEQ1DY6ayxuUczwduH5jXr1g6pJq",
  "key16": "5z576STQvzEL9obxaeQ3HpzU6VULq6PU7pnHGq3rQQTUvmWTb9dZqNttXZ3aMFNqxehZQwTYMwmerVPtAobuSGSa",
  "key17": "GGhPaGBKEdhpUy4VrubMi7rAxL249bRUXvzsd7PjbLrrqP2ubqbivzQqu8ZUadyEy3L4kFoRUSBfYzCw2hrupJN",
  "key18": "4XoJVQ1aoHC2dg3SmpsJA394Byvrd2cWybVhEUgnteDvLZSBesnRTC9k1mf5airdNnnrzfACSZuG9S1XU7QavzC8",
  "key19": "3ZauuY1tjp1mGrpN96diyGhRxzQBr5LUJfLnSLXkR4qdQ1iF6VUU9nmGanzMWck1SiyUwcmQBb9GQNyB5UHKH4Bz",
  "key20": "5MTctPJ7ELnmw5JUjU2c1kgDGoed49FxRMh9xFAzbchk4FZnVDk858RdChShWDwcfrFYNSvd1Zj489WexHgqB3N2",
  "key21": "5PHUvfx6wNmJ9rEEHszT3nFgM2b6Bx8cGArca3v2gAjJ2wbKM4xNoumF7dFXZXqYeAd1FzjPuBrU5YqUyVsHr17n",
  "key22": "3GkGgFqgTPfv42pghJR4W8HpwpfRLZs8e7AWyMPR7KnV2TwfpNvGUAZaucQnjscNteZnU34sgLhTN1PjQPeWM3rK",
  "key23": "4j17QCon2ZtHAwFNYsCu41vNTgi6Jsq5UfRhWNmrNsuJnmMqSjrKxLUxYw6KXfs1sVrjK7tMXcnKTwwqKs8DFfWt",
  "key24": "37jXqaxKDvn2aSyWsNd5doLRVdBrpojitojTfXSND3kKMe7vJUfYRNnxcKuJiK77kgyZpF59L3GawzXNhuSWp8qn",
  "key25": "3NZ9K1jBzBpqJJNhM2y3Gqk8kCe7BUp2MZtKNx6PahCGhptSRcZPu54stnEaKwxEGkLkBYnTpHHCYXkB4fs5zZhz",
  "key26": "66HmEH9KnnnijHuQrygNmfcxmVk8FjXK1X2g6ACr2vUqEdgSjWb9kWgRbZM5dYWWoLJsTh2cguPQ6XugWhJJcyVi",
  "key27": "fVNStfgSWzAijnDDf91VB6Wj7a1xJVfmgwWWVp8YXjENZkHLecy1uxfSHuoLL6yXp1aGBFiVPBUGMFnzctSfKUH",
  "key28": "nJY5Tgy9xBfimuC4DNNjRADSUC9CcGgH5GxddLi1qXCaZPZPMTD1DAZJDRWibTutBiG9R9d9mPEZH249qvvFR5y",
  "key29": "32sK6bHSk9qfaM391hZcP7jr1Z7qUbd6kHXxHuVvmhNekzs3Y9pP5X2fFvJqAuEqGLG5xNFmZ8pL8iPfTwnRjGGh",
  "key30": "3FXKoXbybrR9V8PGpYDZpqWTAZKbjNqPvAignx1S1Gm7psSWcW8dz8sVSToZCkrhDFhabgVyQBjPpiaQGm9aqysE",
  "key31": "4X5vu2wxvSas1Jr4EKYgSTJxCtWJdGfZAxCePcX9EoEcoo9DthdPYiRJSoVz5xiJwm9nVV4anXK3M3RfhyGDDGgm"
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
