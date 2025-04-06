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
    "4yNRqrH5VkwzUj93CU1CT8WJrfeGbf3g8Yb9fty13b9eLzPjQDHxkPymswQVYmR5NqfP9FGLzG5T8HvdhGd1okoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zho7UZHJFgtzd9eeffBikQVtNezB5SQNH1cnMbcYQHJ2NSyPs2hBUjxL8dpFbwu4aTykh93XZXcZgDwZqqHYgFi",
  "key1": "36ALB1YoAaJDWUhmvZm87eYAkfgJ89GiD2hEnMXFZMNCiAhJDMeyey6EUp1UivF6NoZaVadWLEo2TQwkc5jfHZeh",
  "key2": "5tqYicjPeDGTmLVSTvgPpCh4saHU6yQDFqCLpZExXgMLFaMUqzgSbFjdr1uu42tet3S5wt6CansDUzRxAwn43vKN",
  "key3": "VQWDtZWSdtZhQgFttpHUzuBVHVERziSYZcwjTs5YgyX2DdUYMb4Vznjjm2PsUuzyh67e91TgZeP1AWJvUTDwSwt",
  "key4": "37pnFuLMu7A7quQB8zrDDpBiJRhgYYrEEbqTNogxrwLpB8miyKkHF8DHwTM6znZECpSZ3hJLVoLoKRHF7YDzBEtd",
  "key5": "4eKkvBFZmdoMWtc7FnHFNyQPndSikeLvp648Q3Rm9Gsn6giG57AhjhnqKNoUof4t5ebo6w6CSqDHi84Qq28DDkHq",
  "key6": "3bZ58a3KjAty9TMEPk78pb8dXfZGiQ8YyUMeVEtRaBhd2nSqydC8SCuz5ionXoDrdXRxYM3xuLyJqzBRSdWMbx8t",
  "key7": "5qar5LwZFBYF7zW75j8zZoLG4QEu9qbE9yUoRBzaDFihUbqp6CKvpmStoLFi2MsLoK49HkCmKjR9hXeWKqnoVnp1",
  "key8": "5Ktw6rJBGqNybtzM8nkAvTTgkz9FJqga6GzyXcAyXLThP6qCSAjRzBK8k5G68UVTjKveyKquRuydVUBstpH6Ni1e",
  "key9": "gGbPnDjwEw9kMjFC764Uk35zS6cPE11Gj8s92WXy2D1kcYne2uszqU2X7umCGeALt6xh6T2Eknj1FGgb4Bpami9",
  "key10": "4hf2NJipGbjfjpXRrkqUiSZiWf8TExiqtjrKNxkP1MQscbhhd8WVKUrwxqEyHfCsVLYRq1zZdsdGB2KyeCemvytr",
  "key11": "2ARNRbx9ybRc4aJqwvsvV5vbP8jQdQdJhoS9S52uh2crt5cznQtu5sqPZTWaVkR9U4fbdHCYwymnVN8Ks6RXCcj1",
  "key12": "3QvzkgzZWArsbYcSQeL47StqQMF8znp7tXRo5rF119eCcUwtNeTWbpxrKjYmDJPUEq1yta2xH4WLsereZgVjrnG4",
  "key13": "5o8QN44msVvnUNTgs1ujoCzts5mU7hAJvzZZxwMrYP7MmggctjZyP1dX9ETs3ZxZeK3p5SB4DPkkKx3LBJt5Veb6",
  "key14": "3EiJsLHRehrEa2B7EgWtdqf3xJLsyw2VaDhHWAr698WBfktYmb4832cmdkM2hxfJL5NTtN6A79RB1McDN86qgD2K",
  "key15": "4xWCe7aopayjKuvx4nk97jjXaXp5dQmuctoxouZ7fMCbWBxgQfWP3dHKtyHswQ3W2DGhyBGNsCXEZgj1Xs4k6FwQ",
  "key16": "3PJ6DUCz1XdixHJWpzJrrqUD3op3UygcUZXFHnT7gAfRf5G29z2Ysc49xpPwMKgfxasa4G7E9XDYTjZXBRKkXapt",
  "key17": "2ZKhpVhGADd9SUE5aUDbYUNra7MCqBjxdUoXuDd5pb1LyN9Tuxoctm6RoRq5zLdbhwEH8HQn3gkNsSQaaTEJLAyx",
  "key18": "5n27qQE8rQwn8XDVF7EsLeye4uArTANaP3mvTgrA72qDkW1UmGBZm5qYDmXFxXNcwgb6K24zQdPnDmKhqAsB1tVE",
  "key19": "3F7johhvzhQ5yuQmAiffAiYkk5xgUMyoMEDR6FRWM1EPf849JS7Ut6Kfrp9HMhCiX5qzWyXSaDtht8KUHUVWrcff",
  "key20": "22QPBVsNw6iK1ihi5pvrp8cbJs9jCESVbL3AHQ6Sm4WnynEGnBE7xKiHMXN9NGyn2bY2LUqwz41Cwr4ar6gqX7QD",
  "key21": "1EX6gpdiAKGSaNumE7rGBBdoGpQ8qW4K3dbxAZ7VpKuvHpABHNA1GiLrhTwjvyiwZJQRNuMeWm43V7n96WS5oEd",
  "key22": "3yhBHvKExHn88nAedGcRd6uvubUwQW5dBEoMVYgTb4aELVisGT9DAGoC5gEHQC8kYu3XtRA2NU26HDeRpY4v2PPz",
  "key23": "CjpuqizjSCnxMaKmuvFpKALGb5jWm1nVmeFzM8gtFuhdLGywTkuUzTLKfuczjJ2FWshqhkWy6DTE95foWzFXdNX",
  "key24": "2JBng4Mws7Ez14AJTfWP7HJDA4ieaUB7gqvjgRCSQiB6L6dh5fGmXpE5rJF4n353chmmAe31MNxC6UXwKN4sGQxF",
  "key25": "WChjbKffBvcp18whT3w31MgbY6FyHpNTzv8BtKJ4hjf8ichHH3JqLyyPthBMsssLNZJhK3euxAu7UTwwBRBcmtj",
  "key26": "usCqbRb2zaPcQ4pEMr4pKbxchRdgFTeNzkbj76LcK58EPfpDtaDLpcSw9XHHTxgNTgzhbGKtCzwoFw7oAoDBfEi",
  "key27": "5jBdRt7ZLzi5NnphDwZLQpmUNoNkPY2y2F4AD28djJ9YvufuGv9pTvpzMkEKat2P6QPkFdoKTKikzv5b2MqirCrM",
  "key28": "668wLqCAEGZV7VV2w7CgThPLbutzsbgG8eqPQs1KhH36FgJkpddN9vp3idDPAvH83myS416bRsn9uDZbLq3voj8g",
  "key29": "4Cnk37ifChWs3AFGPBwL8MxXubu7QbPEBeJr9ZjnULeXMo2X23yUiM3t62stsHKCVfUG59Y3PErsjPZEFvZNyE5R",
  "key30": "5QJ7gnvtrZGqKeCq5JuoP2Lc1zfaXmjGaXFjRMgU66ZFC7agYTD58QKhadfsC1f9styr4QdHN89tn4UF8Eb4Z1zk",
  "key31": "gvA8TH6LChptnZUXKy5RYPv7rGSe3JT6CkA29ZE1QCLAVZZmUbqFRHTdmWWSBDKDuR9gUCCFBHjUnEkDrXVwks4",
  "key32": "4FawSSkYjaxtWhKTSafMfKpF2VXcFbuCwNVdP4DYVTeCYV5HUZbZiV9pdji79VwhZ3Bk172bFMVYzJBKNci8ndHN",
  "key33": "h5ioF5HSzVuTSy8tbJVGJpL8g8gegU1GGyS1ib8yAXH4vWaubyHkGqRMsnbuXhoUSpC9xaRaD6N9NucMJqnHNVD",
  "key34": "EKGnXNWQq6fLpZT38r5wK7XBWLGk59NcBjDvrp4UiTjGrqG7zvW7PonHcKXJ87pF2GHNFLTc7wXR8nuEaDSj6px",
  "key35": "7XB5NgiRBiMbesetUmxahWHmq8oXWzYxw7ouoYx5u5gh4yU9CKWnd2rL4V8MnPacPEw4Msc6zgaCK9XS5STExzk",
  "key36": "3mvGg8Zci9gbxKZjsjqkwy5VSyQE4kHqUSjE9LE7UtbgPUUhwHiBAEHvvb4DKicrqtvVp3w3tkBpNAVSGkzstaTR",
  "key37": "4R7Lywqrb4k7i4P2mFhGpZ86vhUJMPqGZ2sFoVrXonnWD9jKSJBV7fuFtdy6cDjuniYXtjw5UgJJX4jK89MfJqpF",
  "key38": "3GRC8APsTpwWjTtVZ4G2f6aAfYnSpiGwXXhYcE8rK3N6kRttaiXYncSZopnBWCYbkqru92BhEEQm9QG1b9mh8TAt",
  "key39": "4yM6AUMgWdvvdNqhUY5iiM3sQ3oU7f9MuCbiC5e8N6RqJRJqq8YqjF1iWG9yWDXzeAhPX7ejqZyPC9CBtT1yiiPR",
  "key40": "2uPpkvycshHfpFZekfp84cXmksRuxKHLHXfWpWVBtkyBLH68Aqtd2v3QeE1jkkovyG1RgbGrYbJgoryZRpZyh1xN",
  "key41": "5T6AGhrZZDJa6fyzEmfYLmh4BrQR4xf1ZwwDW4643pwLFjnhbkirXkZUJbNQRqiuBdxd1E2fVA8XennxHFGfeFRM",
  "key42": "58qzxkpn9T9hheswvCMzSpPFhGHB2NQdKYWhzgyJnLLB8QexQm2VuTJC5aDtu9AEsi5YMUTyv71X8Rfz8vrVhtsP",
  "key43": "33SdY7y7HvAAnDQwMmAte2Dbw6D611dbCccWYx6ehKf3UzUaXwtJm2ev1D5yW9FkgUhycrGnnwPH7BsFaaLizq7y"
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
