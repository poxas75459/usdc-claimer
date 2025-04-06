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
    "4gZuZnEJXw3drgADpoCnBbr85h996nEVAN3Mxr41a5Knm9fZLYd1Uhk7Kx2HqgJTnMJwCMfz4rF97b4xNvurqLNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZjrMtWQHNVpjMZ4YMMJ6kqPmQATnPEkuN1uAG59V3uZiJLEWdEdtBUV1cN4r54c8a2mmAatS2CtTKQWVyjzDsmQ",
  "key1": "9uSBove98dk839uJwT8QQp4a9mn5ertZku26gDcGqxJ6a38z2iWsiP5NGEfmLBCJgjt5ovTZwE69S82NCjr1zbj",
  "key2": "4hZ9zRGx33JSk2MGhZJHWDb2c4jJWisfyuN8UQd8jPqEbmXTNo3DM9Mbt3dQThSbTL4nSd5g3abdSNrpXy9asZhC",
  "key3": "59qtJ4ouyGweMAcEbG6rERqvhzxFw9vtLPUmLh4ti5LTRu8Drg3Fjb846Q8VGtAFjxQ1NHSzLi6xDikjGCjYbHG",
  "key4": "2RXVv2iozgYYtZWuU5uabAVxsyxZG3YcGF6xJr6spQq3Mqxb73QM5iDADwdcvtcVJ7L1HG4cWhE7dUWKH1eTv7wD",
  "key5": "4cVjdGjX5WRCFDCzxCRD2Mv8W2i9GLFaMb6wEus5KvAGpYoS8f64HCmFCNYjqJmYNgqTgTTeCguQXP95KduiexPP",
  "key6": "5o84U1DQWp6u37Eji93yq7c4LpUC5Q4L9CrhSCZeasy6bB7WRk5cwoLfT9xUhFGFL2JZhFRfFYvqRJxGu4My7GbR",
  "key7": "4qvm5j1nKSBoBXwsPM3veTSWz4kKVDPoKqzZdaua9GnV7Nmsje21jt3yTK9UeZQoLGUHYzYUeMssWCoBHBEA7qMB",
  "key8": "2qCwydgxr2fgkWc1oboy7eMANvJ3uqyG1oicCvpcRJuq8hMkCpQ7caCsUFAMFRn4YLmnxBd4oQUSDVnxv5UDJtKD",
  "key9": "2PjeNNd4kk8n4FmMpshBq5PXemBF7YzyadnvHMudUxz4UfFNcXoJxsT8WV3CxJCLQ1Ui6bXwdWJhi1DgqewAdBjY",
  "key10": "2ANd1amr7Wsx8T1ZZjTVBQ8f7ZHUvhY4A3t9VNynruHg366GMiEREcdokmBWruLbJoDfMC2yZtAT7xTMA4b7Z41x",
  "key11": "3LnZaKyybeVWsJNX5N6jLD4Q5QZgF3LdnaXgAkyyyS1rH7xdsao2BADPWsWnAhZ4CAgbJ1gtUpjpmEUWP22LZ8Qa",
  "key12": "4JzPSDwfdbVoGufQhmwe1VDFn1KFC3h1eU7R5wM3EBir8FHU3kEr6jyWX9umMhrFEnJQKCu1hJbM24ZYQWRKmdGt",
  "key13": "cpMZkmGspNUiNtE4DHhwgXLEzMaFWaHsvDEvpck43rBte3uWfXxK9uwEsV5X4sC2UHoNcUwRzJKk6pB6EbWSQhs",
  "key14": "2BaezfBR7nvNE42YmGz9MMRjVJQaqXacTVxm4Ygg3QxxSi9vRAeJvZ39Uimfwts2VX6TB38KzcerZ6P6fBdwRMMC",
  "key15": "3dvuGvEhadB9JTXDGHwGEmhvoEMnD1Tz3Gm6YVz2gExyQ3L9LszTbkqQ4Xv3naSDhUuNvrDNGPNgTg4Q4URf5Fv5",
  "key16": "293J8QMJBUAW6TVhizU8RxWBzp2agRjRux2iAp4TT7ScizjGHGGzm7u9GPjY73s1XofW2JcMnSxuHyhGtKXDcnVv",
  "key17": "211qhPtgxi5Qzkg4MF52ehf8EJ62fLXmKMkJbXip7DzrPYjQFsBFtP3qCXf6mH9MZsEVp8NiNL8NAMoXnwQ8UADY",
  "key18": "2Mvd5yy8T8L3Vac8aCeZB74cpxQWLLH4jBZzMQfphDUuVDyPyKAUb3iLMZ3nf77s3aFDHmoPeJWXuZQ56kFW2yQC",
  "key19": "4TQeaihnjrEis2TvmPu8eMdATfic8xRx2nrGB6Y7A7FwwiAdurtZWvGqRp4PnCsirF7Q3Whsbjs97W1R8Dh9fPFD",
  "key20": "2JxpTW9cxnChKj3HPbgbX4CDTqBUQuHqHADWHH6rKhro54L9Ax4YzAkfyJFtZnZ87gBZu6iVnGeqAp8FBdRhV8Te",
  "key21": "5DSZdgKFmxZMuPFxb9Yfvfr25S5MQBoBkqYcGBsKpi8j9hvwNU942wbqr7mR7JM9dgy4pd35u7uYX6dVASrr28v",
  "key22": "4krZ4D1XEtYf3GxbNrmFXWm5xUGjT8uno7uH1sLoWDn6CAY9toaQzYSQcwLbT4MU15LUBMycZV8K62arW4qfNJDX",
  "key23": "2uCJxPcjEwzjDj8QxAL79Wnq19NwFoTYAysRf427gfa54CtCp4bvPhwvKVsWQ6AtMKLzrT2ZndRNvYEzXFHg6o9K",
  "key24": "5eqd7gvM4SvrHWHyqqg9B6Uf8h1ZyjtH3XZzwwP3eqdPXn3S3Fm2EYf4GunEr3T93yVX8my2VynVx5E6htqKcg5D",
  "key25": "47PtADBbPH433ToqGES3SEMbRGrPngNrWfkAcJzqa3GeRAZtKbkEdAbwowNmJGEbhBKfrcqd6eSYzGQwsv1fnf6u",
  "key26": "5mSXvQeYKWrAQr2yHpbcd4vkSXp6HwpgYHhyRPj1Ea3gqV2nSNHRqJFre6vDaTuTDXfADDNc1kshLPfd6JHWVwbQ",
  "key27": "5xiBb9EE9mrs917oaZcpG4nYM7vuABJsVqVMeM8GApQX7RBuQNxYQKseybbwtDjK2k5SxR2fENTjeVoZasYRS7f3",
  "key28": "3114SA5bXmDZYrsXPxURoVJcU9pwjnnHuipbZYRPnz2KJm53vUkWFCDJp37Nuc9u5G7K52QgPXk89riN2QxBAesD",
  "key29": "4iw6QmxznSDGBB9sBmTZCaLk7fUcgUaxZ6ubhVGV9jqopqo7mdeVRav7YUMKu4hHFnUnof6w4gU4eMSSzJw3zXLm",
  "key30": "5oYm2Y3wYaBPrSQMHbXJdco1qBNG993GcjpFx21WpHYZ9tTJSWHVXGSNmiVcGhwUvrsFVLBe8ag5jB9ZuBKgjXXZ",
  "key31": "5vYqtYwT1Hggs6UVeGx3ZoHB8pSp8xfrVV3urtpbTDGrK8Nr8xka27s3st6ZHs5wwBkaibFz9JwFzANb8kStaiDv",
  "key32": "GtzVcw9rpwASsqHBdvjWYspy1cpD9iJyxtEywmSzWECvFwPRrc5pcK5h5c4oQwv1V9QdvgmaZmMNzujsMmqGx7F",
  "key33": "33qDWRVqYv8i6pRvviU1H1Voi7WyW3iHb15AEJARRyQhRto8mYMecwbUgzuHF5Y69HEkYzjqubnZgmNo2YWJjLTh",
  "key34": "5MUC99Gj4ewSVuCX8XLvckCPQBzgr9uFN8CRESHFZKpMnQ6ZB9saM12wzzaTXmHGzDNaQqhpvzvqt9jNPeSov3xc",
  "key35": "4mrnbuAgkqXkWvoq19CXJnfeHyvDQ7rD2oiBxKzkRb57NLCNrAaiXiZ3vq4fNTEWBNRe7G6oBYKCKXyKSjFFog3e",
  "key36": "27ZcH8MVw13jicGkofRGYqAz4bJmEAkxwYdZyqN3A92G8SFW3s1nzgd9Bmc866wZpiRGvCPSFeKAhK6eU66SFWHH"
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
