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
    "2KCDPSQ6Xypz2m3NojdRDKiDC6RqydvAvKerSnPEKwvyo5TNEjFEmDJqmQPEc1Tg8caj6wTvHYqVyUUT4h5bSDm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LKkYTS2qubJ7B6NCvSjzHWKH5aYWksiotJXdg6G54jmFf63wSPRPEC5L8fPW1XRxwCKXywDzGRtgxZYU3YcJYFu",
  "key1": "3vrC2nyeu7tpasmrtYFhGtX9Yok45kosYaAG9gCUJ5xYUeboMRRtroTSLgTHnqohUUu1THD93L2PmQzVszwBkqPE",
  "key2": "5Z2xrzeqmrh8CDszjTijtgcD3MAU8JJnVvgeVurTvuGeHkDgWXgxKk14Y3QwBBKajiPN3WnRCgf4VboejSfhKRy3",
  "key3": "517ZVEk4Ej9hWQDhKtuXj7sPEtjJvF8E3HYaCMEGAMmN4b1aFMUTqEJsGhJ5KHAmfkwwchY69o19UvbFHxUX5fV1",
  "key4": "3QSXhGFKnGAKnBBFu4Hqb5s8C63asVsyryCd2ivEH4FxM8C1SZihbnzGDv4skNLYvRGnxzzR2eSfCp76assN6fv9",
  "key5": "4qmjVADncXQS7zkmkLRmGK26UXhXTfqeUmQnTLPUNaYCGwLjekARWkFTdEnrbxNQxz2DsB2ktjHVPfuBf8oY8nvw",
  "key6": "29zzb4komChjMZwoyFYZjwChgcohDMKozqQVUnP4EpD7DEqwzR8EmNKAm1vhMgvmBGGjYBhP7svtLzkLRJZtyEMA",
  "key7": "5h7cN1koqGBJKFFcFP2V6TracgNbcd2v8fXYYwQfg9ic7H3zUwcgUMBYZ1qAf2288bhLtren9hYCch7KK6msZ6JZ",
  "key8": "4sMSJFX4Rp89XFeb3W432yY874Aa9ix7fkktZEr2zg3GQz3dBJsVSF8sruxeQcHGRKtWfKzLtcqnBbDA212mo7eE",
  "key9": "43T4AKjmg5Sp5WNBt5rivtgbkBVL9r4AUoThGhtBF9U7mBMFaT5pXx6Svx25oLdd9tWnCswwnMP2j8xVY3V21jci",
  "key10": "4LTZkug3gaPwKWWXAi1DyAXHHDHguu45QAMfS4z7GFSCEXhoEJTKfscy7zenXvX8BWgwWw5BDVTqfoxLZE31vmuE",
  "key11": "4gH2unDvieNuDjnjqPi2WVd9kNyVtfZw6uMPAGBw5p1o8e54WksodfEe69d1QJnnAU5zGyFsC2ar4N9tMp1DnATd",
  "key12": "4KZiygNvjYWYnJT9AFWMvWyT9s6gJg6UHFEosMSzLak7xk3bkgcKpWrVGVa4uM132gqsx3gkKoftMh5tPEAi4C3L",
  "key13": "4kYYh4WZb61sNRJf4VSmmEv7hqZ2UmHBucAPMWuwFGcE3KmJwNqVG9KAa1JwnDcoS11dZxmQrfrPGQZAFBUJqvVM",
  "key14": "76oTGXbWBYox3n5hVXxZh1sZhDoPqwqva1CHk2RxKVRzZdUqRGbjkwyqPzDHTi9nmqbvEYoveBaUTofPp6YvsyT",
  "key15": "YU8aPC9VmdazxcA28bxSFGgdoYSceB79hXgmdW69NGqEocjsV478T1tScr31dKVgvfDoUJ51E3tEu4PF7QotMCj",
  "key16": "4peQXAtLpLrRrySFKUVHDgn9caNi9GZxknHd1zf2Z1EC3KRqZuTpFFekigeqP3qeMdDJraMH981LSyGHxmyKwC9d",
  "key17": "2au3An1TKexvVH5Yy7ppuvm2YzG7oMHyVgqB6EiDBrLpGi7krtgBrNge54eWnvq82M87hTShvQNUV3xH24VzNhL",
  "key18": "82rQD8r8WvcN2z1BaMgGfDcVVjV5ku2dycAyfR1jSWBrqMBddQ9XnEEATkt8kt9m78mVBVMqtkzAv7BsW78EZ4n",
  "key19": "2oYTvzuS6xNsnyoAAjBrQWhEmdAyxUgPj3gQdaAFDhhZXD9MKEHTH9FismczGSCa2uA5ijbq6K2FyV17G1jvvMAu",
  "key20": "rq4efkjZHUbzTRHjmAukvx99MSgRbfzhHH8yVuejJA8fbfnCc1PMrs6hkrCJBbRu71nTNFWUvJR15jJuTf2Atk8",
  "key21": "57LRFr6wY6JnM22DzGqEqYDL7pgEGwykLCXJFcYHCTFJf5FJkJgHuhh1TujbYQF6hXNAr4BiKmReYZmQ77Df1EYz",
  "key22": "2zmSKwFm59uYQUJAmkUArcsX2WGDezWxqcginyb2DWHFD8Gnmvs58vuXy9uz4pih1JgoVPMJdbZpiSSPMvPaqTqP",
  "key23": "2Wsan3JY8jUAUM4xVrM9aUGocBQkox2edcpV9XN1TAxaWsujuQBcQN3wF1VAVEDFbm6weFuHWuafEqcFqmAE6zKd",
  "key24": "3oV1gvzWPNUmj5dfeTEQNtwVYLwQwbjhBBUnD3Q1cubGah62ae4cuY5at3W7q1ou3fMKKdppNiUuBM3Bdvn16h6P",
  "key25": "5UXBA9DMX4JLy9ANj6fzwLLWZBZunpooHTjSsj84EShSR1n3YmvbnaAHtteHXd3aVMPp6Y4zfVE4XjcHzCxrZGVq",
  "key26": "6Yc3zLpgVghUtTjVmhPzB9gs8Xxcj9jfxjcZvFKZPmpURxdxTGVkNTpGTU4NDjpvBrfv6ayUKeSuVdSi7uqddVQ",
  "key27": "64eTjxmek3YKqW7n5V2th3FsWMTKpCNvY3fWZjY9m8zE2mLKRRnvXVLS8MTWNx5z7yRQNuo4vP9V46hh31Pai4Xr",
  "key28": "34tRsQTvXUhwRe7YaMJ5UycUJuWL98bSLdtiTcJRvjwwJFjf1BDgeLbobVADHmkfd6pC1v9EtdcgP7JgHxfPcZzZ",
  "key29": "5gBqnAudvPjJuUkNzukjvyMujc6FMbrLV8evxJGZf5pPoqcyAUDXand1TyxAUMayRhWektvnwrDzLqkD7yPWseGR",
  "key30": "3g1yaNKVULfnK2iwzDi9Qf2GCh9xJSp9f7mqQGSKFNRTqVognqPhqb3PaUvYYPc7RZLrUFX2s97C76CLQmz97JhJ",
  "key31": "2GSbfjwuocCRt7dnnHAgJ2ffkAi8GEV8nXhNtwD49hoP7QQkZhCUT2GpB34g49934GFhFdkFzeQpQAU8NuXGhTqz",
  "key32": "3xw7T5th5G9fFDDBUR9MK6bayUXPKBvgFwv4wGvvr9pReeoY4my2b6Pe287eFYArR33QMg2sQRN5WJZJmWwxvz7X",
  "key33": "4NtBRkJ31Vp1sptSyuYes2dzLuYhoXDxAQ2vbcPtrfVk6bCedjN3qRoHVFLBsE6BzbQTZ1cojxRswWqLsbR8HnTP",
  "key34": "4NVG5M8XVTZukvwmL5JKaVr9X6QVhmY2hqP6sd57XYRgoS7gBKFubgcBcttfQkVW6QoyihAPGuarnPXHkCQbuQwA",
  "key35": "4wZWuLV4b6kuYkvFij6YUT91qPytxtgtxQS28aZXSBncrcVpw3mebKKF4UXyJTmvsTyoJmLoL7kY9qY4J8TgxZ6h"
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
