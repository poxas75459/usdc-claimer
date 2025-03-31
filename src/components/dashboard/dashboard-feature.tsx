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
    "CppEatE4QYZZatFAkdFwcgtTocPzC3wJNriQz9z9vRAXquFHrFAac2B4Jhmr6dx47Puw6tz2eh3QDr8meKgGD1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bhp6m7vcFJLUcjSXTfEjFNS985FbBpnzF4zVnuyZ5ieWYXfcxKqxtwzn4HfGp3gxmRv9vuwV9G8uxUHmyn8KMUa",
  "key1": "5g4JCoFfPnqJxkjL5iQV1Wi1eJyDiaTzLgHxJBK6gmKvkRtWCcGmmdHT13JDoEByWSJeaRjjLyXhFNsRnH7rmUJM",
  "key2": "3xb2H8UFrTVMo3zkHy9M4sE45x6mSCqfs1nfn3wWrcHiYp6WbtzTofvbEw8dm89os7PgwquoXkZvit8RQbw7C3dw",
  "key3": "z6v9vbKdTjKzPoeoyb11bGtDsWVBYxVRso7DvNfmtu8bUtyw7uhpuYJhXqofy1Lgb37qj5b3aESMHVdYw8nJvz3",
  "key4": "2CiesRwDM3LgXAbnEKZqzuZbRvkxCmY3QUvHWDxRzaabcsEzpSKZUM1a7JEw935r8BPyxAZabgqf8sTwuUXbWJjC",
  "key5": "4epLw6eBnqzXzSFetph2LBvXskVDysGJikKKThKQ6e3QCGaJjhdF6JsXUSbv9iCtwVpbXMwXRmzJ5zxNTi2EFyN1",
  "key6": "5akC8D7kiTgYMvLoPEdmWHt6x41JTLhntzmfJXqU2ewiBXM8J8YX9sVFoX95vsZfHP9HCAyNCwvymjXRuctiYXgY",
  "key7": "2MGShLQh9zwNXHiMETafk1PLLqGSWdQFyFk7eWtkyH1U2HMq4SeMjdhJSgtqVmjJ4rstDTczDyqGuG9DcEXPJBcE",
  "key8": "TqKvJFbNydNb9KeLsavWqQMSv99fy8RBjZf79tJKSBu4GVcHrAXuQnB3rj9VU4vBXYLpkKHchd8W92iJjvP9YNR",
  "key9": "2mMXUokEZGFk4XpezUZSm1jitgDycntpnMVku2ZMYZyZDoWAGVkZ867ZdWXkHQVn6qgzjkut6HMuxgEdv8GbfD3W",
  "key10": "3rtLL39qbL299enWiRLgf6Cq5e71RvnCHmicD1KKdTNw5tcb7unb8kgJu7krjgp5N2oH43pfjR5GYCqVg9HkQpp6",
  "key11": "2tJNpGcRtkaivVZHwSH9Qu7nUoULsULFdGKk4Yj3ywGDVamJoAmZUbqV7oAZhFjBM9bcj5jRRDxBEczAXLkKM6Ty",
  "key12": "38nx1BiBd4EXEfBdyx5khLBUANco7QfvpSdxzytCF3Nqdr2GYzZ3DMEhimoWWbxXNd3XXzhzo2YNMFHBfD1PWkVa",
  "key13": "37nNt3vd3tY9wDvmqhfsd7kPyRGxmhCLrApzSWuwbyQZRu9m3ujoMDQnqF3DUhAW2ghwhRjgNNapb1n45ZPz3zCF",
  "key14": "3hbysMQgxDQWCnHvXKt4qqdh2v6AvAjG51JWKDqcXBjDjGJDnREpV7Q2FZcjzZvrKqDnfiBYjMxVVdmrrr2J7yDA",
  "key15": "RFhdkkJsVqVV1CojJ8VhwjWvKrHrDFNUZd3BPNkCrVMmRjbrw4ttytvCv7yowHjaApkUX3KMHn7cnDmRW8fxpKD",
  "key16": "4Lbrzb9x2XW3bw6AJxJyzr7DaUAHp41gkciCpccHLv5y1pEgBamSaEnFQMpd8X554HrdrSaTbT43svZSLALVFYgL",
  "key17": "4cJmH6BHmU1sXW5drCEwNMrYcficE2wq9EtjycWMstNqk9iWEZXxd7DoXG24WNoTnZDmzpBJhYehXYK6DAvKgmDs",
  "key18": "3NvkcULcZjUsc5YHjzAWoV7FpepjruE3cJQr6uWK6cCtUegjkM6zG7gG2sF1eCj5ifUQQyxykBn6ddSfpzMeLH6L",
  "key19": "4GKiy9QX4Mre6u2Gx3CMMEfMqgpf8QCYGhSPWmY4nEhzhiGexuxuS12Q3idN3g8Y4WEkgY3Z2nTnwfbMowEKk7KP",
  "key20": "2pfYi2Ma6MLs7i426NVRd1yf4LSmsaAGqR7bxiyUevZgq3XdxwHWkwDuyAcbgRZQYoPvojb8CaN1gop7Z39PLVf3",
  "key21": "3UxfwEXmtwzL6mbDCnQoJXj5MiUSnYJKPShyKAfzWFpBg6JqRnDGAQryxyugMDmNT7ivDvwjJj3qH387GqoT8nZy",
  "key22": "33ueun4xG7oi4ywR7CysTCzgow5YwLTifREVo9Z7JZjV7KXguetkxHQiMHWoVKW9rD8ge7DHRpMsWaVknPvFNJci",
  "key23": "31GtN8hRg3wKVwb35BeKPRjaxoB6VmyqQFvkNqfBnarnj66EdcthThdXGtBbPhWDwGZEXMRUMxJri7JmM1TWK17R",
  "key24": "BHdDNt5B8aUAhQwfowCDv1J7MKHtFANZ3HTaBAQU46uArEJu8c1CCKcsYmLC4rZ1rp9RNyA3KRSUjC3RvNnqbgV",
  "key25": "Hsdajph5DfCNZCr3AJZWssEEuH4hw69qFwRANek1VjZUSHNedpzuuSTGQJm746gbcf1fG5xjXWfs8kBXjAfAZES",
  "key26": "o4zzWZMycbVjhje4VESQ7L5LSdV47pgjNdH1isvoAZnm3CYr2BjCSL8iSEKMUugHnN2Ao8rHjP54ezVHSEb3VzX",
  "key27": "LEx9eQYZkLReRvz3cAVCinjJd4j3JHWaH4DVKuHmQpvpNJcuR37JP1MH5JKn1mwEwD2CCgVJjdGhSf7eGm3oiLZ",
  "key28": "5B93RY2SJzhhi1Fd1qgozJm26NNa7ExvfkdgpUxXvsFB2cQ4fZ5yDRTfpQQ1pwx8T894yy8QV14dppvzQBd4udJG",
  "key29": "2tgJUnWXYBZUzfbPNxfuuWM7VZR1ku6aEqdCEX8jTAtTasZvxxWQM57vsg1pWv2NYCPfyq2h2CjKzBMdaXvKybnC",
  "key30": "5oLczvraF9DFhQz4uuLpCrX4xAwkyPCzSaG8E7gMG2DfXj2HVr4tkZWJjCYBRTyM9wWJdntbaAWjc6cLL8mRSwHy",
  "key31": "R1sunnS8XHYg7kfR4WspNJw3B4tQ3bukU7tN2zTgqJkNpvmyM4moUGVgJTUpiE5PyMyLVq8zKftiF7L15sdJ2Vi"
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
