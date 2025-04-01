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
    "3ZpvgYAy4iCqk3Auo2uoK1o1Wg6tAanf8kdDVb1jPfzWvfJfKUx4WrGrTuQ3Lu6sTuNbNrPE5ztUTJjRaPczxBHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eHhvKzCyrsAP4LFjiNhP94knACYyk9zBetDQBCi8YNrnjgQGvfqo1PawSZL9dUR7PM7RerBptLC71vnAw6TxkwR",
  "key1": "Ri62Zq3VZo7ApUJGRERvWBtnjbWjdjnHm8yxL2ssadS4tTji9vMnaBjbdLHLhsUGHrMiVUvuy93McLPDzYDEDdr",
  "key2": "4Rn2V2yX93FDya6w8Nf3WVz9tFVVzWbLydu3V4jTkp5JTCtMXb1mEodZtLLzCnXiZJA3Y2NqexTsMUGpzXRCmE5Y",
  "key3": "4vTz5EBC6uVM22PFF2MxEfL5NpWAMdZwcWsRnJzGFGcmqUMSQ8nG34hx5jgYJG7Xmm8pyAGpRrps9Ry5CNNRVa3d",
  "key4": "33othjtFEgUahpXMcPXZS5vkakuUZdxi5t6hCD2vekVb7T8hS1vbCuLRurbS4BoSHQMadzXtCmUuvXYTWXVEhRUY",
  "key5": "529ByFUaEpQnAoGX1FGVTa3tWjVqcT2xzZvUyysZn5Q2AnwvV9VK1fvWYpEUhVY9edRtszHhjQT6cVvAh3J55AKn",
  "key6": "4Rap9GyspiE6r96Q6acudBZCPHv7dR9sMBmpdurpuFQNB4CVhL4kQBCrqADMf2HgncnoqdwEzibnAa84KptqCrpW",
  "key7": "dWcrBjDdVCuqLJbTzBvbotdexzReeosH2cBscE4rRJGLgE2Qj5J62HAzsemv7ezUYTgtxhK7oQiMNkcc4hZb2UU",
  "key8": "3LK8tEZT9kskQbH583uHSwiJgTtzcG7vqTgBi5dx5MV5FkdiVQNDeMTH7vSUUTz1Kf8EZAqoKyH3A13hjxrWehks",
  "key9": "2WYfSovuKL1fuHNvUrSZ2zXPeWuBMBg9H9GdhALxXmpZi9twzvE3mWadYNzPQDNpQ2LuYNCDHCE5W26MCGCfgzF4",
  "key10": "3r6Ax34WZ8HFun3JmU3GctSZkBxR5WbArnvnCfGgJ8CxN1Sh2EfvFdZJXRNmx8fNizdyuAMu3RF2NBj8WwXJGAnq",
  "key11": "KjFZ6zKmhFT1RCt3MkyyB4sHKLPDbp5Caik61Fvova1rUn6eMZMD7ee93TchB19jeahMkF4x3eMZqptgGeDL5W3",
  "key12": "62UyLFVtPySrQLGcRhT2v5697j34u4WFQzvgVAyMQFdtEGVpheZTWnfbSq3KekUJyudXCChFFnTuoqJ2ZkPZ697V",
  "key13": "P6Rvwfd76fcPPxbrCkp5DdmAJiu6cyWJoKjYdSdmNSqJW8QMsCcDkCP2UZ6i3EbFHVshWwntkAhniZGR4mU6B2i",
  "key14": "3oBn2Bz1jstkbLPumppF3B5uuDzxv7ybac9e5TYJYfJ1s3wfBVmQ32Mo7C5yezGLAYXFYya6p9iw9Q3MBXx8mF8W",
  "key15": "51EuWfsVwT9mmoHfTLEQT1bBvcE6NRF6AzVK6B8UMX6YiQCqieWB8WUC8exFXBTxqR6BLCS8TyoLBXxCyxTjkQH",
  "key16": "5881cvURXgCUkhPMxSQeoW1qaQ2hXKjNoEhw5RsjXynnAU3AUko5En6DiwGsaXHu9g6usP7aXonWgLQuRTt2W7AZ",
  "key17": "4wZNvXj9dD26w48NUVPybA8CXGnMpniQN8mpa6KXtGpnaopEXFRzaVoUSH4jDJPmnjhUXcpMbU5SWmKD9Do1YUdm",
  "key18": "4DdFR2TGd5nRHNEY9Qi6HwwFCbmq1gztqqXU7gqcHRMBkwjumaLUpmJ2FvPxp1vWoVkFZYANKkPNe9axahsR36ef",
  "key19": "2JzvudhWCY8s4JS4igx3xLnKQjAC6bZPCVpLzcKCfUv2TZabdRxVFBxxcqUkfx7jGtM7YoyeGErSMYmpLvPckyRM",
  "key20": "4JM62Uq6qZSN5KGLHdmgiCFJx7SiqGFeGFrCVkQyGk6t9mPjH1JRxVjmYK8XZVYcxmTHrHwVb3pCjQZeDmPgpamC",
  "key21": "4XCuT3FCTpKWReNmPu3BTXyAR4gNet3Mmo4HuW6UWr99oUVvd2VjhgXVhAcA8K6ZskX6UgtBWyUxJ2PG9cxfaCyd",
  "key22": "7uLdP5LdqM25SEiiHdUUWSSdWsW7tnnRuxWppuVFLmz7nZ35LGdbvS7ixDcVsLf3e3o2XBG2TFCMKd8Sd2jamnN",
  "key23": "5dTTZdbGcuL8ov2koLyAixXnGHBRTbs8eScNFhGKoaRvMQS7KGFf8zTPm4t6ee7rrxwXVhexuXfzmLnZ9yeeetE9",
  "key24": "4AkW3yZ8TX6Bs4ecwBqkMvuzF1v5kWB7ZkdaAqckC5Fyj9cLZBdt63v74Q18CQz2KCrRXiAXTZBxcjCa2g42GaTC",
  "key25": "dco15hLUMiuvoA6zz8x6fyeQsAjJr6FGogtdvmzEFgw7zfd1roFFsvbz2LDmkECvLoR7J5vYTvJYVWH9qXpyy33",
  "key26": "4RUTgQBQ7mKsyyb7sxY1vWteyat6GctPF26zNSFs3VZAjBLLYfaVFvqMpPbQyN4n7W53ejVSKH9tTXHrGaN9zfPh",
  "key27": "4bTwn9dHKdYfvWqpYA47EN9R8otQvPKg73ppsTzGpU3yhZHcLpLUCHGBmWMjR54C522U6TjwAvbK55ukz4vLpMM3",
  "key28": "5onDq3VU5xpxqeKkmQaZ5hx5QJDpz36ghQou4UhRwU47AdLc2zSh6axfXo8xhiwmxn8ZzDQcbLZAN2xs61SDQQPR",
  "key29": "2QH3XUkgMQLkqujDzZLhHYWH4M75bfTXbvMZGiV8kefB6zACBgT4eZZ9fZ9WWk1YXoEZpaV3QdsXbamV3pk6kJUK",
  "key30": "3AL5EbpANXwgAEFBzto3q9zYutHMDwEuzPMyz1Y4kAD5ayBgH72epwLBLpf1PmqMAPpHLv6TutKRNNQTanzAkcNM",
  "key31": "4oYvrrnKcJfY1HaoMN11zuNPBeuy45pN3hkeaTmjULvSgZ5ZvYM4DDhhjkjXLiaaXf8c7GH9CYbddQwrjyyYPMQ6",
  "key32": "Ye7YsJBshB8mHrta7nnUqZUudHJUgrFBeiCsZFXSRoEaT3QvPT6q5NbmnQB8SgGKNV3vRb55FJYLDA5G8ZTKcfC",
  "key33": "N6Ag4UpgAS9h7nEeYUiESdhGPcyiSffVFHrkukqb4niDmF5pbpPRe21WmqRAue7A2W7XA6WH8y9hK6syVQDeTJj",
  "key34": "5SkSdiC62f2B6i2jYEVvz8v3iX35WGnTSWNLov9gEB6jHhdmuVZX4hUY8ZP7gnGVeWm9SjeVnmkpaw1jNQ2iWRKD",
  "key35": "2ifnEPobv7gZdUhrqqoSbWRHhESR19YpNJPTeF9mfFL6RQQkFr73AcHqqyUt8aqULbsBYrYFupFj7Y5FKvCSiYru",
  "key36": "TREi1pdtomQyor6ihv21vnFTQ7mD76NZob6hmMfmVyg9S7JGwsMvUbGmWYNXkFHnLG1TCjcNMxmqg4BDSFX4df2",
  "key37": "5JrhJNkwFKjCw48gZ9CwqzKu97tDFSH2NN91gUUuvvmvJUZ5usZZ9QuN8777Px63BrDncm6WmRfZJRA2DNXgeAgb",
  "key38": "5uDJRZy6Cq5YtGT3QEF7e9npaPmGm4qCN9o2P3E51G37Pn9Mm7hzX77HWKM1g7qZ71kKqtoVjESSHnQtfGsk5NbY",
  "key39": "5dieJ9mJXfJCDAia5deijEHpTgQiJy1nn1Z29Ya3T1GpWiscbWSTupui9JYxqBnQ2qPbysrAeWDMzDYYX41dKAhr",
  "key40": "3AmjVH8jaUF5uCaUajm3ZQcnNmqjpte2DvcymRcgedfgMQPm9KGi7vwr7BiMGtA7wEnrUsSDu1WDcuL41n6BVEYX",
  "key41": "mDgKQm64GjMoMS2iRVGJ7ntjXPaD8doMSEqaBT3smJzVf7qXbmejZ5LWbGBVTYRsHXZSsKKd9jPEWErBVg5vBN3",
  "key42": "5MrtqUPfdwVEu3T8NECG9BNX6eHVLTVM2bd1cjRz1M1JAed6bRMP93g7VpmUDzVvqZi4EWhvuiye78JJNjVSyrfP"
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
