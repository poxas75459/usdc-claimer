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
    "4BgwGYGU42KnLs89yfFfvRJYT6rBvMU2qpoUvia7uK6dVMea5ZP2zWcvxCNXXf513Sv5HeZBtMjG2E6SPCCaG19N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D3LGv5QQ4EVnLJUEabYwmzJMrxpD2Qj7uzpRiwb8kMLCgi2CiSWZm1jnuM9pcW2cJWroUcY9H18JqK4Tab6wdsq",
  "key1": "5D3Ua4RdphyE8Nsei8TavrJVRewgAyCM17b1DCgKrTCwZbPUGESN42vwrzyJ48ZWkkAbq1EgdzEjD3T7THUhYEPc",
  "key2": "5wqArybS3NiWMAL7AN2sPQkVYcXu9a4X1gL9h1dHkmJaWy7jWPdb1EReH1MPrZ7L6n6MA6SERkKgRySaTVybiCbX",
  "key3": "3AY2r7hjgEScKy6xwPisN2CUwc4auA2PgDvct3ktmxgceLBzGsXki9neu7JLHehgxLgXMeuXu5KdcVPYYJnthpzM",
  "key4": "54zi7xwHizqkP9NRgxodbbLZ1mCaeSB8PSCRc4Qv4Vdkni4tq26GWiA2FX69eR7ppBZr4m8WDCifjjTE4NFv4zEu",
  "key5": "4xxF55jJeZhg2Zaontgzk2SKYCn7LbzB7qBvYshGrfk2vEVoNmYx8iYHmjECzEZoxsRD6pjB2FHCw73vxyMHU3qL",
  "key6": "5WPT6m7Usm6xMz2LN1A5z3mfVti81CaXWGkdQj6LTWMqLZyCXfBzGqV61n5uzGUFgxHwcg1Ee3f76YjgT97W59C8",
  "key7": "5LtGRXt7GzwZQxZuMdty8xLi7gjvkztEyPGYw5vVjYS3iFEiyWeg97ynCTwmTgUeU9EfYVYrcUhwzKvepgaWS2pU",
  "key8": "DdvS2yxPZx6U97ubTa7THxiy9K7mLtRM68QuCueFnRcq5TaWKbANjuqdh67zyeq7e2U8WQbyvnTXpWWeLjFHZ5n",
  "key9": "4qgCW4pN6fTHKwKXGuSh3LVoYNfK9SBLSkMTBxSEQyKEcoDaSNPGLZrwKH4DbAJuDSdJ3iUczcvKdjd5XJobJcvW",
  "key10": "36dKeVi4WQFgvzYUyEny93BXTM3D7MBv96g7VmeXpG9LnoE5C7zENmhFPMLXgLHQWfdf52J5GMrjA1d8Y7b3YHXt",
  "key11": "2cPHT9vGuWTSRfBgj5r1GNmAtJcZVR26QxMg1YDghe6eUtiDrE8Mf43fKdgqYvxekK2JgzVpaZWxLkcduDE9XNd1",
  "key12": "SMfnd9nnXikRgPLzfivTp1Aj6iEnjhUxzG49bmNZgixTFMCKvLSuj5fVFQW6HudkG7Mhu1UsGc3JKDMNAfC6P6e",
  "key13": "PgEue381pA2Ve8VwqjiKFvMZFPhmvpet6bUbi3MQqDZJCYJ9Rz8bxuoTPcNPmVuztrwGMbw8jqbrdUgkX7FqZt5",
  "key14": "67GdYpzkvv5pmTR1TV5ALdQ1Kg5egMw9ckLgAa7sG2fBPdWcCxP9CVuuAnN4aQ52WVZ2zTssW6VNpLpyg7Dq723a",
  "key15": "HP2gbtsvpcpNrMFxP1bq7wx2xPUZks6Snsdo6cQRYAEukxRcRsshhap5n1XWSVGaT4Ak4UqymZBqNVj4AaQeVAg",
  "key16": "4rQuFUAHtBhrSFnTzMYNKSF5EKj3Q7eJ77TpYPyzqudU4HrFbaYdeDAeMN9C89rh4SfFsP6PbV2ppkAGW9AKjgRP",
  "key17": "2aBLDUQ2GWWFwQPNw5Tvv2NhegHgNZQqucEzZLPXx2X1Lrt8DfrLjzdcYtQYUaGrRwVVFQ7Uhe5SyQFpBo7wPQZj",
  "key18": "3b9e4mtkVyy3sor3a7XyBLygvpZnLNYh3wRabCWdyAZcaeZfxaCufjTExQUc8m2Lf9vWNf8ehoxqLZs1SKLh9cFM",
  "key19": "3WkEJCaGNhYNx1aNuWM4oyKRUAzHCepdBr3s6zEzS6voUHSrxvyhs92w5WZkw6q14iny6SqpVfqvynAn23SKX6ss",
  "key20": "5UHw7gpYZzDowJW5DwZXxxe3wpf6mNW4RRjZU1wR9QwEjLumnLSB8DtN2q7iAooa6SfyNSnrB2TzPhtNtbL83AqR",
  "key21": "3wHuqEYeFd4CcSr7txYiSdSbiKvSA8VLBg3fygztDowznueQuxGtjuuXDKXCtETQtmbuzTuWQnG4ENk7vTc3ETfA",
  "key22": "aCUzjKBE6EvWwWHTmZaipqNKF1QyT5vZxEnurYVzjY6dGmbqi1uC9Ro4YuuHKQbR7QkYN3xVFqC6FUU7iuCCHWk",
  "key23": "4noLztjUvBBXmFGsnCru43jogmKwruBXQBDHiNDMUzjhXXGBD8ngpS6wW1iaSibYAvscCu1iQQb987UUYt7bqioK",
  "key24": "2oo9Lh7kdY6JGHF9HkHpmBdoyDRqi9YsZLu1TTFEAtWDehnv65XFbk2baTA35BBigkXzwpH9CVMMiJep1xM3eHKd",
  "key25": "zU55eDuXZvyFVLGioJxrrgyt9PFYEBDM7irttCkcAwFWT8MYpwnjGguymwzMazERYXMbGHNY6UYb7KCwY72azbC",
  "key26": "3wy1cSuQMMmA48m9U9naocCqN3kuWp8npvX18BGKfSVpoXecqCaH6nVCuerwbAzGbvED4YU12AQDnJyqCfBcEzFS",
  "key27": "2XW2ys96jn6TdcV1qSV51imBMQfWiv5ZmRV1sPZxjn47r3YhJtrJ1PizPrRW3hHJfmu92pt1KB4616i2Tmb5s61j",
  "key28": "PyT2Nd9FrFbJgVMNMmKeNgCpBX3goWVML4RHC3yaukKXQsyxRwcWkgoJdu3ugJRWvMcuh5M6L9RRDMGCsg5nnwD",
  "key29": "4mPemn3BiY9FiecaJ3ztENj2oorMcn9ZxZq2RvGApAWSVPC9ev8UJkooy8GRDepEcy5DxRQHECQWeRCWqXc2mDJx",
  "key30": "5K8Fig6FcMAVFbqjzfJ51wJA5qRwdq1tG5JRJUZsnm9j9QaMUcfMzowvXZU7Q7WD4DaTjz2dNzT47eEme5jJ9v1M",
  "key31": "wkiKe5BSQPc4HEJ4fXv6oVURTfg1NiXYHUsmXz7gpApXUqrDZrnX1Zze5Lc3vqt71bEBbL2oio7r2JVdTxTreKU",
  "key32": "3YYxshWHpcCx5JNUuN4gZa4VaB1bP1U415L7mBtFFTmdZUpm7yWAHtymxzC6kUPAdXbdjTANdNb74tg3wkShhmCk",
  "key33": "64t7GuRmDM8AFhCkua31e27NB8m7QCK65A6pT4qpB4FtqHyQTwRvrnpgLA9gpLZm8eGRX4GC2pVPWZdFHTBfAAh7",
  "key34": "2R8EdbgFiBeeTvVXfw27hM2yaDzrL3Msck7YJ7t3fkt6WsYi1euZXdS4Qb2PbjQQbF111khh8mENrvSDw1gKfkK9",
  "key35": "5AeM2ECqcbmLfKJJLPREq4im2pZWgGwXTPvNrVpTsaMjwdedRXc3uhViJnyvQSonmE6vncW4ojWHV3fBEdMvChxs",
  "key36": "5wBtpzWoRX5nLw5DiApyXzw6V4FXR5KQQSgLDLDC6NuD2HcX3hrfT9cjQTPMVGpfQG8LXFArCiytC6BgrjVKtDYK"
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
