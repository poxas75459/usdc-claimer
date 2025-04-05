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
    "N8mUCML3SbemcwStW8kfxdW3vRsjrr7faakM6CbZSsfKuLRPnXVshGnbiXCUqHXSq9t2PWkpVUzVCLCRGuE4KaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35diT21kz575Hy41awJ54kfgPqNDc7vr1EkBbP8YJrvQCGxX96jf74dGG6zLezppu7yy4YCcwFrsaSfXyMigmESD",
  "key1": "3hagg6K1qC2WkyN9sBjeUYYoDUartWDiBb9Gk1DqkPo4MuqeKmfjPyAxwXK5WyxVMpTd4ypYimGiPZPF2avo3Ae2",
  "key2": "2fxjxmjkJNKsCxpGkDQM7icxHgn97FXi5h4QcQ2thxvv22WBq2jBGhRQget4Y2To7ZdhdwskPbgXjJbpG7e8RqU1",
  "key3": "5dsaufdQqE1xhNjL6Lqwt3cp9Dj5ALMwp1mx7F6JCVFLm6YrX3taeLFBBJmKLy74xeuUokqDg7rpNwhVGPANJp76",
  "key4": "55pkr7ZkCVLo6VTnv2tF5jrxH1dQXrbL3XixKP73izMdsAC5Dj8yGe9HTC13qT44an66KkKk3jr3jLT18DaKtLSS",
  "key5": "4sWaiEgh415MtRJQ5pzpxP9fPZk7V9vnr4TfUBoUDkkFG93ptM9Mg5EwkJg5WdfmfSCzc5tyRXyuV2LtDBundyr1",
  "key6": "3nPWj9fGhCD6W3H3Myet2Ppue3BZAzY2C5jvdGCKVTdqPRSwENWbkZ3cyQ69E1YkYjrPaygQSxLUZArtWn3qHNeW",
  "key7": "35aDi2zJgC7UCaKBQnAJwQtmw8LR1gt86wQryiUSAcJsTiY2VU3hQYww2jvF6GUASToJj8KcEVRGK5C2e5kSVddX",
  "key8": "2CnMXWjDFcUHzwwY2YCXpothhV7GRpWLmaJqL5dMEhvvVQ6NTnd4i4TrTZTd33dqSp4miUBzeYbdJeLTTSzGYxGV",
  "key9": "3iu1z7aeA3ZFcfQRXFB9kNMzzdV2vndqRwowqQ1GPyAPrFXBgqtwtcwW3jfoF4KPkcASQzMTDHMqaT96ynb5x1fV",
  "key10": "5jEGtZJPD63rCuy3TL5SoJbbJCc71WwaQR37PXVJmfktY5wWaLi9oW5uUPzeJjqumGZDACWWuxm5B2GJK97sVNg2",
  "key11": "5SGkrCuk2esK2pGHupfkxFDFwJPeXd4hqC2Hm7RxRXfoLvVtjgwuSAEqLhhxoQ7ZtVNyqXXSFEy7VvoB23P2MBT9",
  "key12": "47kUumNT2egepW1ujTPxeoE4vw6BUCUbhY5k4rDAWuxAhcj326oAhGqnDJB19WQ6N44Qdohq7fnriUsfouzt4m97",
  "key13": "3jJaueHAN2eiuUz63tfixQvb9hRhdMz1YfsGJWwToywpMyrW1K78KriaJP21FX224kAa9cmsBKjTk6jiiS1XxP1H",
  "key14": "4sSwAqfnZ3jND9BdKDvvmVwYXZfTdnMkrfdCgyHfLmeRLNjEWxdhvsyS6LrJMaBUdi3QiCstSyhT5douVRCu6B2U",
  "key15": "2uX79J7pGdhkKYvACRfmiJNisdJ3sjR1xewkeXQ3RZv8sPku8xapdnvoZE3g4kegwLz3J7mCEqmadbZBeKpkwQxB",
  "key16": "4XGL7yXAKu99vndDmqGnhstMpMcLQbc3fVgqnTuo36bVU3NHkTjQaHwJQDkWLxkfxLzoQPwhdgWEApzKB448byo4",
  "key17": "4WaWZtfYyYR4VBNm17RnG8QDsuDQQc8NwBxNvm35oN53WHCyq9CUsEaAQ3wzohT5tTBpE38fvgFYq4Vs4YrG7XhF",
  "key18": "4rE5jNq5PUKN5XrMgbbmSNqfa456dh4xNqLK4Gh5sNDGYDdUrWQdE8w2nLjiTVjBhdtnU4AmoqYiXNP6BQHGuHBB",
  "key19": "3ZNfCJxMpXxNgama2hDXn1EYo5kNsEARqNToA5sNEMvm9fMzv6CgMfKcQeS4b42kmcxFiHgPvJXXd8cuFG76haKH",
  "key20": "4GcSzaHpnRP7urPTTH5PFFUSheM24hy3R5xFC4As45X1h87xfRxjVYfHLUwrVTp79Pr2FKrDREK8oqAWoWqL7aor",
  "key21": "ZY1bE9c8P8uahKH4k4TuJRJJAkTTTK2WV8jadeeCW3Eo977EKaVq8vSmaicYfGd4utVWYeWpSareLmFZASW5EN8",
  "key22": "2j7WZKGzYbV7j6yVQi2ZdfLMf6sijxPA5xUJ68UiZVZLvENGJf4hEmhXBgoU4YUaHEMLHFk61ExXBuANaFjGffEL",
  "key23": "rLmHMjTDxmiCvJF9aApB3jXV6ZLntQqg9bTG35nPcGUXNpJw3RyFPrbFTGMV4Vgw2akV3BSnY8kLupe7PFzcqyj",
  "key24": "5BhCwpoHiRrTGXaTCJJmUXzeUGGnHTXrvg5qv7f4r5UJ26J5cDCDjo7uuDyH7ES63ds5z7V3yTdQLxbFR2D6vacC",
  "key25": "24FcmchD9joKkVE3z1e5pK8qGxzzSsmTcFv3KagRZW8Aw47EUg34sRNfSxD5Ao7iH9wkmhndbZEJzbU7JzS2q6fV",
  "key26": "5HKfVyHkqtum7ziSLVyuVJPLjPmT2cuPnMEf7CeC95YxW8mcMfrHhfoMu97rRMNRb9JyHjBrjdAmTyQJEvwMLaL",
  "key27": "4NXLG8LsuFxbGYxZHcNpHVbmrpXxMUJef3i8gwsZapQ4LRtq5xi4PQT5aUa4DqbkbvqtL24xteQEsYb47bR393jg",
  "key28": "3D1J7VeHGrAGoyQCx6PF1wouZUQ3LSXThQnyVkYyY6wibS2sDkU8TULJpXLRjh6xra8d51FGC1LEFPRUqPtTwzLz",
  "key29": "4gqLZj6TC7J3EnRKXkDbsQQM6oF75TQ3mqUzH72Aihyy8vfCzrhfnkCR2qAd7YPf9AdhmLnKyVkLgmBmZtvaYM1Y",
  "key30": "2pbfsod7VHzN1F1tSWBTeSiTDJJ1KSTawqCU1gJLYzbVg2wCdAVdRCfKgtBemcjJVUZAVgSsLPdxzS71VZ8AZfUY",
  "key31": "8DxW2MCU5SNXkVVNDUTcr1AgG9XNW1UybMZxjpvXmxBsZuh5zn5VTiVpjV3d8o7L4B9KinB9cDUCpqVuqBSDbj5",
  "key32": "2qwbbbeUkJgby9tNZiaaY5WxTEt4k7vhso4xqEeGbuwkMewqWhFrv7HBwaQLtQTUKoqakuD3tspjiaW2KnuPynNE",
  "key33": "2E39ynz5mJoFtixiUsT8JYM1ywGm2oWbhHgnm9LXtVu19k5fqj5tPv2wp46of67dh8yY3z5jWz4znev1qJKRuTsk",
  "key34": "4Z7CurZTqhWxv55jnmYbsJePUQ2doMeXH6Evafp6nxZCMe8pBtLnijxyzMtXxjt7xnSzuXysB3vUzGGWMbUxD7Lo",
  "key35": "wQn73Bu1XuCu54b28L4NRX5K74YEo2rwo1VaV6JPvRa59pPcUPAER96cpBoaLFAvPraPH81JXxVc8P1YJrekWfe",
  "key36": "3ZsF3nyaoJaVWJxtaSifDBfZArUQq3vV78LSryKPvu7cnDM8HCbrB66WJ1Epa9K7NvN48tgXooEhzNJ42n9i6yJN",
  "key37": "5sb8NJuaUpDUodHkLxj4QdTXYKEtLRq7Bs95G5efDDJhusHeyw37bovRZkriUkJkEJuTwGDmnhYHugkEmxZuN3ca",
  "key38": "2nxYRLLT8UemDqtdb4Ff317GAdHiTxXqEWck2x1KxdxWzSzQ2AyDbhUbhbNzuEcedyiSc9Qq1HWqPc8NHjGXfxGA"
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
