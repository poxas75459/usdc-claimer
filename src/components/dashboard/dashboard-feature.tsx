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
    "t2wFmFoD7vFJc1TPrc1BtE5NojGVqDURpgeKSKtjhEkVphfpkAQStiaJ8PEtTz99fVxkBJ7uQTDYdUCYXNyZqiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67EfgszBYJ75xJzyrBEVdBDpp2EtRPYC67CuiTj9m1pYDmJwe5fsdeU28z7hAyLjGfXrv4RkJky1WyR8Z9iJitGB",
  "key1": "4w2D7u9Jp4QFoAX6HU1iDJtXQgVY9vJS7nvan9SRcMKUK81FjFHhkwhShaGC9UfD4W3dpXxiLSZuWQowRa6fVaFG",
  "key2": "5AjJzkBHdCsNpUyDzN6Qj3SW86b449V1fncSf2y7fodjQa3YqeRotUTgPffSZYaTpqHiYGJLFQfHA1UgNa24b36H",
  "key3": "54YW2GoFeeVkUntwnTaXQuKYYeP89qL3bmFDJeJQiKWias6DXTJ4W1KW2CGPmePevPz3LyUB3w6Cz9nVYLNyQMaN",
  "key4": "2AR81MvCUchby1DCNqamWLtyssj75uBSmHJ2pDdTsZK116yVKgGYtuC4PwgU796vpgoyUxCJswUsXGavi6hy5Uni",
  "key5": "23dKAq7TKc4pRv51Z9k6qKoYvCD7p9WCtG1BxvhvdK8zXCyzrWhKeHiGDwxGT8PExnDnHovELctcXtnUxz8mXaA6",
  "key6": "5ZuUBpQpTNSBvs38NAsWFUdUmrNdJFd2xbr55ZksUYEMvMnZ7J4mxNpnUpgmjuNJMszbJkXNiRjscy62rac2AHmm",
  "key7": "5cojr1iyUr8mMCiktDLW7cYGyn4QJmGBKoRemd48zEYTWdzTXMuTTT1BUrjmFM7sa4sjDR54DQV5cmNMi4EwQVW6",
  "key8": "5NtNE8YkHy1TrNR3Z91s7vZKCaL6xMCrVW8T6eLh6Dvk4PnGhrQSDBTfU39ivGp59f69dKYi1PmLQ3GfuJxMMX9U",
  "key9": "UUeKkqDnZUjwC4pKe5ntzSQMWEQAgiBBnzzUHDxAoK6c2gBRcSY55o5yfz7CZ4vETEGAsrqXAnCjKMQvrbFzMTR",
  "key10": "2GZBesFW4Zgmo9ETy7f9ZeroB3Z2r9Jox7kruL6meMQ4LAp5DVBbJZQNm5hGCYwwtBkqKaVZL8Fd8PrKXtH5PVZx",
  "key11": "4UeDPTF2FXyJAzr8ojVLaK3gFd99iZAFxnDgQTeN1jeCDbpX5LvmZbPTV4TNrNKDbGjZn9RLjvdMMjDUZxkZAg24",
  "key12": "3Jkpewj4MEgDeDR5Zhmz3gFfgVVadgCyHbNP5tZdmKDGJeW5XyYhohHA3R6N2iaUH5ep8eWXwVquKDkzxSBxpQG9",
  "key13": "58dLaiQ2wgWx6yGPh3P4xkdGMC6vnRJbb6Th1n6HcqCmfiMbte1cho69E4MgvJXFS9ZAZJBCooKTLFJ4dA9Jvy7r",
  "key14": "ziWaquRPdTi9sdydh9t1p3dekM5MP3eiCF7k74HdTdnh8gqwJ468VYsxXqvVs5cQfwmWUy8AeVaV1BqSqQRyQNM",
  "key15": "fh7aJSieg6gpPrqfTerdbHhomBPxqRebPhG43PKTEGZcSfDFujBS4svoZUA1JWXK3rAi3uPXFhWVbdxyPBBy9gJ",
  "key16": "2oNx3ARs2xod1vg9jKF2MgGTb7o7LxDEPKZVtDE5kYAFYEzsJkyaBQYPJ5euyJQtiDqeEGG5maDmbvDty7qV5Eti",
  "key17": "2evtXiuoJnFXdeE9SHzzJEJtTz2fFC47eHUUVkMRGnbkS4eb5M4YZZ8z19QcwdWxWz44tDjB5b4RraUQw8QbdmJg",
  "key18": "suhLbEn1n2C1b3D3NqeBv7CxYj8VuvH9wvNbuvNEGNT7BvQxZpPN5VgBVDg3npxoL5mDUjTCgDTevAJwtTXVdkA",
  "key19": "4cz98tT1DJzpCFt8zND8Q1HHcLrVtXUSQMH115VtWs34oZdmcvRMNmdmpiecNhWUJBVHno6Lvje5BCi8DuJZq8Xo",
  "key20": "5jy2qkvcC51gVHAQJYaGBWFPaFtDcrQZRN2yn5aak17aQt71o2462bsFeQ9Q3R6ekjMJ9Howy7uqHD47ns4Dm9bR",
  "key21": "45qm16WsD1GaRfApQZs2HbdJZWT8LujiHagswvJruA3Dy7TDH9niaPnq9K3qEm8FdDmkDvBRyFSZ7LdfJcEYvshz",
  "key22": "3pHhQpk7ysYvPBELfQVwGbDPzT4tKKCQCkeZSr4frEL9JVg6wrogkgSxy2vQencRg3u6ct3FzBjwuefmjuKWBkQm",
  "key23": "5LrZBZtrHzSxZkwidrPgXBB3ehHxtK2fNo3Zxb7EntZwzutGZ3xaywHupzJpZMQFje5ABCnkqGhEUHytHyqdG2v8",
  "key24": "4qH2rw9j9XnSXFaxx1w1wMYWSBwiGAPDE8KWF8Ce8mU6gZXvjWgJD2jdPyCggUQVnPZ52hzvGoE1Ud3svCY7Q9kG",
  "key25": "W3pNCuTccdmuDoZxGQcsghJR6pPndKboHGooaczA3EHa834GazMHMEaqgZx1L9b5Y46sgxDyuB7z6zFq5Gm86zA",
  "key26": "5sVLzyJxw9ydJuozTovHBFiS4xrQThgrKhPTE2QKdEWfZTxfu2MkDfhvBoMVtXbYFWmFdwYv8mvKZujted9QEZ7z",
  "key27": "HrzC8877BkLtdwN3QCPUvLmQsdfXdmgfjc1CLwXzjF5nKysAFMvb8rnMP9tBxUrERX7pMxxnjwYj713aqLUs6iC",
  "key28": "5S6YmYe8qpfgqHbvHevmjcUReu4vYdWiZm8o7xZsbGPAF7qtLiCXXN3f3LaFKri3VmQa1zoXkYnxMSKv5aag6sDb",
  "key29": "5d28dVv2rLxEWfELs7qndz5U1LckWtQvzitzok6Ec59iQ1AtB1v84AFgVqrgy4dF8ruo7oovi8upcVRf7reHG1n2",
  "key30": "2bb7k7StLgT8NFdgFPU4YQGGZmCKCVDbfWB1mLGSmS4DCwbZX2mbB7sfsyh9wPDPRADuEHvEZ1ztsikoYaVefaFp"
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
