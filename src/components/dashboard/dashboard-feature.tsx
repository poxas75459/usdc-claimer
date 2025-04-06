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
    "29Cc9WxBNEpisQ5rBTgYC4ZxaxBUUFPH2ekB2EcaLvmZHcUtJAqHcjSwcmWoijtgCEDLbGxPHuTLqBZdC2SMcEuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "noTtpcmG4fnw3br3vvd3AwqpZrShBT1HSJEQfJmWEMKqafLr6zW8c8LEF6LiKhwxpFGRRFVP5mWghh1WQJwcneW",
  "key1": "5bWD5Uu7kQWbpKeUznrPzcPVnKX8iTG2gYW2DxkPBm9ik5XTih8Z5z59KjnwqQnnwGnuw2BiJNgfp9MRTqZ7WX57",
  "key2": "KWQgDJUs6E3xSvW5sruBpYLSWSjfNADyRwqfra724vE6dQ7G5DGinZLrx9YFz7bnzAvZE7UdyHxjpXJbudYmdpx",
  "key3": "3kp9A57UJyn5UupMYc7TaNghfpD528JzJpXJkV24yP9gBbpSXBKdQmKq5YMQtJD3A6Z8z2Qjug1MT3wAjfDkAHdm",
  "key4": "5SqPY1sakqdYg1MTC1YzHV6aGrK2ve5UyTX2eeQzGcVzFGELzaDomDKFbFXdcPzUYUAg8YgLBfij4yjor9x5VV6f",
  "key5": "3TTueujANCjEhuYB5to9qCkVVzFqozqU3MughbWwjko3w2BroNe9wF8hQ7mnmRBbpgF7ZtqrTQS3rf8tPu5WEyGm",
  "key6": "2Xd9zVTcUZh5LgzndZpR9E4qtM2USW791UKmtJJzGKCyqVAA8fg7rrAc83VKFMyEdFntL6HyJgA3dX8f2SJCezwi",
  "key7": "3fuTyAQ3UxiMvp7ARtzie8QEjLK7hfkRJV5gGshktNBYxJ3VNwUL2PCUQE13z61DSecajQQYh9wvsUUxXuRC7Hcp",
  "key8": "3BBNSFoActexhwTL2R2GT3xXoRwMfNrbw3jHirBTaa9Z21UsyePpVAeopHJYbZgHEHM5jLkGfHdHnW9xMjXCu7tD",
  "key9": "NMKUnKFPnnQTk4FWfbB6N1mrJhG3iLfUozn3yDuX6464GprLLvh5tBkK4sqG3xLdEyaGpomm7EwwW6mWVkG9gtz",
  "key10": "4wD8W7nxEmH1CcFZy2CBuRxHYgcwz1HQqGuo7H6mUwX34dnnZ8Ewt4Gth5Rnn2XSAdDrBxr7FeNj9QX2mhYbQxbx",
  "key11": "3VcPDpJqbhjW91dVfjKDKPCuqPGD6uX5PZrpZYKSAuQEwfpq4xTtG2F6rQH8b3YeVx5uKeX8AcNhw9od433XCqK6",
  "key12": "5mV8najtTX485QUT6kcfc5x9GRbHVQP7HzJBJ9k7u55i4VnrtvnJkTuFMtifjGxgHYerQn9QV4XDpLrGjB95kJF5",
  "key13": "5z5co338UJMyhy44Q3RnWqpxgFwj2NzXYgstSbsKV5DWdCrZxNnHEnb1Caj6cyaU1mEvX6tvkJy3vTCXfeC2zz3i",
  "key14": "4vKFbNyRCV9nepNDotdt1Cg3EXzwCB9jvrMYtDxL87ymp6SiVqWy2wb4FfN8oGtUDBzAxnoC8QUqzsNqnHD59K8Q",
  "key15": "2aixACyVY9RStGZzsBzUakkBvDnFNtt15uQKtk8pqg4qq8HRiP5tETkBn9bKYUVAqrh3pbH8reK9jQBX5uzQ47rJ",
  "key16": "4FeYJvFS29zpkyPivCoVKzLBsBRWBqYCz8mbAWnkJ9oiitxwWbnUVve2UnqTvpSPVbguGxW7aegeuwQRJXZ9Gzdf",
  "key17": "33nGuAG9mSXpvT4DHQLW2ygzxYrFvhnUW9T6QtiPJ2EukP4aMZk4Zobz7FwQCFLeEVRmqN9NVjKSDGmuj4eh2pMA",
  "key18": "4kCpRB2v6P8rhraApKyzR4yDQZJy1xufSPT2BP5MRGAfq33chCt1VBCx3uUXAdu3G4RD1tKSMdTa71gYN6ExxcU2",
  "key19": "2jADan8jCNp73EPsdo4ndmj7X12EX8bgrkfJ2T2xdC3o891wBU4ywaNV8QEwLxMwRnC9PeuTi7hd96VLrjoN2jYK",
  "key20": "4hhj9V75WWfzpGAjba328VoJVvrswofnrufRFE7n4GfnrKRCgpUJCdEAco8fUhXhWfcf28poWmFP5vqsmcGUQj3W",
  "key21": "FDHAQn6hntp63r5jLLcmMCFDSr7MkEUQVZfJ4FdE1qQTUw1wGD76dUWERu256GX7R8PsikLqAg41n2yVGaPbyXA",
  "key22": "5voFKJeJjUfkT2hHBkApv2aZU6sHz2XY1dN4i5qHA4xUushoUyhNyizc4JbncsnRup2XFUtMaKRfSPXGgdVRpqaM",
  "key23": "DrTNHsGLzJAPSpmEKBECznF6FaSFJviy24LeDuUzoiLWSQsqjZUr5gf9mxaqMB756sLSZtQqgZGkE9Rcwb6BsrC",
  "key24": "2wrxM4BHT67BBYd8ejSDasA3hUXhiqP8yS3XazMpvCgjv58XQinQCxN4nQZ9VnLm9jhLFeG5QNNdWpibJAneY4nZ",
  "key25": "4149hwQ18drdjgNnSkEs16CgrsS7uvPMcN8T65RGL8R2zidWM2UZp2hBXnXuFpQ79UBznCU4TFDDMZ5vBdub7t11",
  "key26": "g3UEf96Vu9n91dE7qGBxAvRjzpeNqYB4v7sXeH8DjR3R2yn1qEG5g16y33ATFusuho62KBRmYR8MpKUNE2NcTYb",
  "key27": "5B4pYnQNgJ8SK6HYijefGFrJQzicp6yqBABzDEthQkTWf9jGRVjW1DoGh3BDnyh5a1cFenWzAJKbFL2LkKmLwwvC",
  "key28": "4sV4pdbrsWA3DrJMozbKQcvEycyMk4AZTybYPnWXgeiAwZAvCVCKjtiiTVZ7d74gtWfy758xTPFf8JPxPbMhDiEk",
  "key29": "kSjCBU5qQ1EHcxMLC6FgkxYq217kv3Dr865qapZa4h7XRejtgUW6hMLzishFjJncTgCk5FSB9wyEVARoYvMeLjP",
  "key30": "376ejFNF1kBnh7NjdQnbARNBrPmkvuRcQYN9ck3XAzVUaPHqXh6fh1xgaMZumsNwv2Z9siGTMyxuYvXqKc2RmUyz",
  "key31": "3UCUvs1fJwgAwJr27f6MR4WZnDHVevpYqrFJE3nbvkNom3m6WFmr8CkvAPfoM7FNkamvKgsBcbm2oUhh7eQ21wqW",
  "key32": "62juVycmRPmYtLyKwUnrCs28dr94UqPRgkQkHJ2CnwYhRXgPdikbqcKB34TJ1p5HDj1aBByrHmgFtTc819owLMLf",
  "key33": "4o3KzzUEDTbNuYpTpsPLzvwtKNPJevTCAPNvWUU7e833NnWYh77fSkzUxhWuXdkVGCMzkLP77drhTnHxxdsRntR7",
  "key34": "48NPgNgwDtnpVh4TaAMBmHcyHrXXHH8xs2wyBMwDbXoHZPtxiy4ysDFRmxFtAUi4psipY8ujhmzsZmvMt8kDDrXt",
  "key35": "2Ac1HtLKAnkKYMQsDeMh1F9xk9ShookR2e9qodUjsKD7vaape6SdvWdL8PMCDQmMV53ViH3Yj3TKpyTNMXPuGVak",
  "key36": "QoYbh5M8QwEEhYdraEL9PaG646X3XyXXn2P4aDwxGBaeTBXCXx3acLwSKdg5CgqRmwbp7vEtU8HMVTXLGr5QrCp",
  "key37": "5dmq2mjinBzQC4D2Lf6DUVbvUYRc4UoympGWeuWACyLe1gjgL3oUikwxEnqyYs3xs2ay77WAiyFS7ToBJ98tQLAC",
  "key38": "5kqZTtJ4cyxYwshJ398DTjUwToZDKHRAkYwhz33RfHUCLT7ZeR4bEWs4g3E9Q2fRLEzYtd8xfXwHZAmHvGnqXVWA",
  "key39": "4TSLbLyA3qwcWUCT3mhFJubpNZnsPtKP7KaFmxyxXQykLtPPRTzcGkjDog8hitgUStrSjTk1FXPZpNRFpUcNX3b3",
  "key40": "4Nb6DPuyKzVzVT4SzHKCEBnnvKcTWtTzyg4kHBLNAWGPKro1xp9C9hmB2zZmST1S5fHiHPFhZPomtFgYgCCB8pt3",
  "key41": "33H9GM7j1emnqAAYHbwTH4tx7U2YxDsmXHj1V6qkWHUctgGri5wrtj2hviuh2PGCuWNPBkma3F4XZ13iPGvSeLkE",
  "key42": "5ZkYNJosQQEqwwuauvLaxJB3AKjDAwmKVpKMTAKj98RGEEm84TgVDfxjHQVvyUftjsvzWkRW5dfZ1MuXa5tFdN6a",
  "key43": "3HrcgW8TMFbfZr223ZCbYSxTtzHF6eQpML2PLDHGk3morf14xY81q9KPSz8xZn72iDD8HeQNi6aAzJU3S9MqL1RB",
  "key44": "DPDgdq36ZMXKZ8iWHJgpzj4WP8iQswFpZwEPukwaTM77AGum9XceVKf2oJtTCEQ2ZGtZL4XLUiKFX5mSgZP2jNq",
  "key45": "2oKcxKJEiL2JejnYUSBYBaiJrQYL1359rAfVG5PMhdrbQx4SnGNWhsM8JVvVdv2yxYVsCwsPCtryAiarUh7SVhp9",
  "key46": "4AKTh3n6NqbCBqqUpy8VqFA1yVc667hwQpJscudekMVgSQMNhahDMgqnb8WFnDeP6pUuM1qfSLLNjgmHbPhMTGKp",
  "key47": "46s36PHX4tGvU57vRvPsy2ZH6W8EgxR1y5x3ThsQDLLJ443Ebba9LuEXVaoztKBThiRymX7BoBXXi75LRRE1C4th",
  "key48": "5kENkw4BeiXT7aPRa87eCDzZ3VANG9wP6ZxupUZiNrzqtouB9VSPQiSD2B8tCQoWkXcmPKjJrWMPpzWtbbga7D2h"
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
