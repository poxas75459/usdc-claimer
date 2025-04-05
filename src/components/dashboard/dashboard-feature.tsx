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
    "2o36eKJV5L7fPrJHewgQNy5ctbJJYM9Kx9TnA4ERE9BhF94BKsnCMNhzL9J22GULCSLbSd7wjCxYWkG2wgunzpzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7UrTwYsDsesF4t6oKgXpi9yK2vsK8QEuThSgAUqRAURGzsNvdNNXP7WJcWLikxX5kQAmnXztj3QvG8uTCXs2ueN",
  "key1": "KpFgkyTNxMwHEfpKfz1oavFugRh1fE8CQ1eU7v8xCA9JnkdKfHBQAVqP7A6AjofxqC6oVYZzE6WCYeZUxoEF75F",
  "key2": "3d6kxTkoF3xUCxkRo5gCUYyojb92ahfNfsSUsj72HjFXcAnWwaBCcjVv51dkS9HRYCZpgESGvh7sutVcjxBqKG1Z",
  "key3": "5xbuAUxdkBKFGXaFaY6pH4qAeRdzvT5DJcA3bMRHKt5t6Uz1DUUbLF52ksCRkD3tdkULkm64usnwj1e7rEJhCMBY",
  "key4": "iqLykVSst7sKQf3DvkdU5MYb1TniixdaBYD9p1PNP1mwtpsnmomj1bgwphhPGbbpm1XKysNw6xoZcyy7PRqTV3N",
  "key5": "E9TsWiLjK4DUbXrZT6g8ycDPffU9XtfEC2hNyxNKj3uU1RNGfjzd2399qWvspeA2beJNp6SCAzi6yoeKqWfDK8f",
  "key6": "4a8Rxe7ufxJujnM524nxkubZLob86BoFVasKt32P35ZAsYm1fqTg1riK59MwyZSZbmdEP6RciwbcFmcy1iz3sddj",
  "key7": "4R2cTqBwcEDRVQrz1UMRAfuRQ8PxELgYPGnSPtG751QmxZYYQBvStmUGs1uXnZDYwmVFoTWG5NeREFebBpYQYpTc",
  "key8": "xAe8nz33cgh2iTuuctZSaVaGnbBf2dEpqftm8FSS4Tqg82Yr3hNPFpabZtNKuccwvNCd7vkQ6Rs8J2XpkCFjdHr",
  "key9": "3Uby1pZkzGjHa5qWa7YzPEBKv96m3Xjxq1tHCuQNjQS5cZYB1D7fD5tw2exwLtkfFPTE2h2PK5amWFdnirufH3hK",
  "key10": "3rK8PTrXmt63LRpk8GZqRwG7vwnQpfQnb5rnHzb8NfpitF4DdXrXtw8CemryJRKEYCyCFpk3Uzb3KrZLqPDkk7cT",
  "key11": "38vT8WDsGgm5DZAuodfBZ3SEjE6yrjso2WfByCMwjBnJ5zVj1yd2J6q8i9VkVYoHK6Qeu6Qc72iHiXEWmiqK7cBc",
  "key12": "8ocjcxRHtyY7VLcSceeFZ8M8EMnYdyFnHVmqJjwLdgSsmhdVWtruEBMHyjx2cTwqCr5WHz86FEJzZVb56aQ4aey",
  "key13": "5tehvzR3kMDoJJjej8nksk2JcJAv1h9JSkiR8LApe4J7MqD1uYNLgbAyNtKFNZEESN5XZMqNPr5dgZivQHxnY5Tm",
  "key14": "3YSVw2s2d58rQRniCdAxfETWUwu6qFPeNWbQfdTUqcWk5UJ3bKaEZSKcuSzCrTGKQGnSSfVfj8U4WNEy5iCxvNcY",
  "key15": "3x967spnixsX8ikrZmHy3JSmwkATVbR4c35geoDToM4BJj3qLZcoacMwXWBGpkWVDDrmRQVr9zbFtDJm4Ygf3Ssy",
  "key16": "5VLnBUY4cCHZTnDVyhjMjyDHSK9x8hAmP7jfGQs2GAjiu1KTSQBAXzUC4amjZ3RCxAZPvVhEv4sTL3fccWnpKana",
  "key17": "5rctqZsu9SRJfQmRUhMmAc8htzAuWWxSkTHqAuwPdKE4bYdQrnLEDzTnYNhocWV9bdNNuPXS9WVyngN4jM4MLguD",
  "key18": "2gtpCJxHz1Bj9WecMUAcSbTQYhQ4siuQzpC3wNRc3FQQuzf1hAXrMXif6UjjoMiWN4htxTW2J5DLKtF4R9cERFiH",
  "key19": "5WeYAkFijsTCUTmcNJHvtiN1o9TBY5tvnZd7hyYxBg5PiCkKdxLc7enbZWa8ZnJWFT3dNbq29MJKZWMafQBNWYzt",
  "key20": "46ngk5YgAcSWvi5sNfB3L4X6TBrNA5i6d8g8TYCwtsyDcsTpMM5q9xXk5ZqjkCx3uGkJ7RhGG68eHeGrAAUULjC5",
  "key21": "2ZPoiatjy8moEwziC5yEW4Zy3FG1WDngpiKR9ZsoJtD9BPsLrYmLTactYDmyiFscURh1sc9b7WhLhaqCSaWe6Rcq",
  "key22": "5ppcZJ6jYJvZcLkpaoFEYzVHXctxnViJ4LwTTHMfw1CM9UiBbdJuQQhkSkXaLtxhDdHw8GWfBAJAzc1F7ACjv2bY",
  "key23": "4airayhNfGPcz9UgknEfUwJ8arERsJe7xNnQBt8fBQuqGyduZx2v6aQaJFew9mCv9AwZs3AGcc7WHVokTEUiynsc",
  "key24": "4sX9TJPNWku42BFAPwje5B9YykoMNGVkEVsqaa4aKGR3ZvtQbXJK3SURzwgoV5KhHs3T3m5X8bNypPDHPLjsonFT",
  "key25": "2TD4oQ3Wub7X5kNnubNXW8zJPCiJGfNKG55tkF6RdkaXDXFrqv1USUxmRmWDT9eqPRwNxHB8jizi2qMtNypaoyrM",
  "key26": "RPa39DFKfut8QnTK3iuF7rhDBYytanMHdGcgC5mtu24cosL2VfH6NbvrnoRmaTXWV5ELrn8CYMoJeRWm9rdYAkj",
  "key27": "4h8414PjPzXtvxSwCZ1wnCk731i9zrY9UdWqxSPe72uT5bfBHc7wqKkR32bHTQ72ZGUUAFdWfGXgTntFbxaRerUN",
  "key28": "Ca3pjrmeFoPPGJQSXB25GhLkc2kAKA5Zoq8nBaufgG75ru2EVPsY5gC6895YQicXreLhsjCNQdSzPxj84PJqgcB",
  "key29": "2vBSGCvRHueaK4m2WyQ5BCA9YVMPHSBdydMxVqM9rCQq38dtfpSZhaV8uK91Q4HuSCoHkDpoGHsvwk1DvQXWKz8Q"
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
