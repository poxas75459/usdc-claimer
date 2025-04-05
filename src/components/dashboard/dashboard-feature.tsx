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
    "3ozyH2gTj1uN5RQXgjGhLKBbUvuHQU8BAnP5ZBUMni2DcrS8KKrnHiTA4Rhm1EgUB3CnMHi9vSrB7ysjp2SbcUDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GCjixT7XvzKva7GTR5e2eRhFQjKkvRNuCHQnEf1ML9k15fJ9xyeLXraEjYAH3WV8kvEjKyBCaY6wYaN2it7VsQh",
  "key1": "2KNd8P46YKUnT19wnGkDD4Bg9HAmVpQnhKuYFf6cHYHyBHdYN93DWz9kux2CLiM5k1rHqhEwfZCgLMC7B7FArYnN",
  "key2": "5Ty5xAsXPSYQ8PyoEqB7xguzf1s3UXDNKcuio8q5oEyKpcBzenwqV2XgJdWsV4geju27Xw19z2XYpAMcrTwFz6ra",
  "key3": "5wHaZ8RNTJ79uFmYM872pijeYDkBdhU2pdDhotcd2ks2PxfwrQnMrK5A3EawVUqKokiXDYhK2N87WmTqAfKeLAdm",
  "key4": "3eDFkjScjacpmFxr7DBtCh1NmUtEjK1C6DEKkEpRadB7yfQKGPBL9zSfbMrA6S1ghQhYy4y6ZHBobtbxdPBa5W3r",
  "key5": "j1jPQPwXHWaMvfg3idn9qhcq7uh3KH3HRgoHyTdBKPyjL5ZiLjSPFVGkUcS94MLFqqZUW9seDuQVxsfoY4694cj",
  "key6": "2kHVgQBCimHiwUtQj6NMcXWhYe3NngHTUYBzDFTFcK9nNaxJz3hZf8YbocCixWF1RFnCFKT8Zg4xiBCfC2LtSK39",
  "key7": "27HuPSVrzEwAK2B7vFXnAAdTsdaPKSQZzLTjWJ9YDy2FRqfEiqVLAogukVxGP1rt4ntoms3i6V4E39EJDnZ1B3Mx",
  "key8": "5oGxxBZ1MFEov6m1WgdVh8CnPcihAXzRxbSr4Y6Bi1mJhRv9pfy6SK8BLe944YNyKaq1aqbEw9KUPuXa4NidLiqK",
  "key9": "65x2Cz979ysA7XikY7jGNk6suCjsE7PFvMUM2oh9GifzvP6LFJkbKUuYPmjonsPLTqpRhYGmcW3h55vWZZhTfT62",
  "key10": "3fdNT9xzhFNcQLP3LpGd5oLgzJAKo6huUzRwXukL1pYeNmQn2XyXQ2VdUBVhz3FKNKgVHbmVp3gjTJxBTNT5q9f3",
  "key11": "3H2uYstHADq1y8jTgLZb3D4gBsacCQC98jMf5DMrknfWckRmFDjKwmcKwFDTmUxVy7ZEsNHKYXn3ARZFncHVJY4e",
  "key12": "8PfkgdYB8wjXDiVKLG5T8PMW9AsfQ7ckyNG5RJC3aQwzm2pQzoPpKeecgBcwNPZfkNXj9Tt7XHeLKUpNs33kRYd",
  "key13": "3EieTq6aPg75uknZMVysmVQd9c2riP65qXRCn1DgySZcGATr3qyedFKPxh2QNt9tG7YkQgV9QaRMKCvEhMsCu22N",
  "key14": "5P95TzQdoDLcKa5iXyYZGwq3MCZNLejG8dovM1SRx64J9Qu4fS7iRd9pXnLqMWNLjV7r3FZjP4rx8WbVqZPicEio",
  "key15": "56qeQXPXvE3Ts68PtuCmZrTmae2M6sbZQ9qmrxapmpfCoRRJuXyNxk1vzwd31QrWmJdgx4f4PsG1Dk6SSi8R3SCL",
  "key16": "3teMBuA1Rc2auox6XUm5FAbWz2CAgFoL4eYXucTfEo2WUqL51w3SJGXimX8goZvyNJSv2HX7SBiDZr3HixBfvQoW",
  "key17": "5jengzmSE6vesqk8wMQ9AQ5uGiBAu7ZkY3ZQW1kKHKsVGNvFPpMfHBgQ3T2QtEBkDrbKXnNRUEuTBAZwnXpf3DMj",
  "key18": "wCHSVa6R4B9VkH8ysYtq37rjtr5a1jRnYeNg2UrH3RBNdFtEjdUU9eKB2s8xf9mo43UfPT52KuVK434VA2vcKf3",
  "key19": "2FEjTwP3LcAdetbkrKATYMRQSteeYTbP7d2FULpErBeDZQLHDumYvT6BoTWGZCvQP6mwZ2ySEbMB1UuhrGxzF2hE",
  "key20": "38TcyTXeHso3iSg3XkdxqYCsX2WhKB14tDxR78RivJLX7i5B5WgUgLkVkvMRXtVcmUzqTAnmVmA33HVdnPgaQMVs",
  "key21": "QGZaCYWBjRnUqjnHjVaZ7RmiSTipsWHzzN4nYQshbhaWuMv2vSJ1a8wEoPiFqDvXaeQBmWcpyTq4XYgR9Muk5P5",
  "key22": "2P497makjpgWvbpc6WMjGkrqA2eQWv7QhstmR9ueYg3FR6h4FiTfUkt7tKsMhJr7mzRcpjpQoLoTeWJ79vbZKttM",
  "key23": "YCocbj4V1Wz9y3Fn321n33kAWi5mp6GwtPF5PrFJpdEr8zBcC58neX3DWcKoETwQKnaBPBDXpq5Avryb78FTpw8",
  "key24": "v9DHg9uhE8MC7SePAYF3iTaMWXVNnwbKSSavcGnLKN6XoYu6n7J6cCQL7nZdFMSPLy8frAW4vtjeR3JrHCQwpWE",
  "key25": "55p6SmsmBbiYaBaoxySc1XMFEZZLon5ro7VvejPydoxJdniPZUfr9VP9yszx5wVvnJUgHV45uBhBJo2NzJVUH2hB",
  "key26": "2NRWChxXdA127pwMczQkFL3anqEH27XXNdgC3tLKZS9j6NH7MhAf9Le1p1gJ4n6eoFe3fNR1kmuPnNRWBvvRdow",
  "key27": "2SCeTngic6t9jgAz4ZKpn15xwpRHnbqGUtmJhNaUpmbEHymHMNU5kxgyLw323G3RiygCttCMNL2WZ4s4d14qwsHF",
  "key28": "2v2q2MNexzchYY9VMxgpCGjzV9pRxQsSBtpX5ySBdGoR8yfdMBSisZ8hB9eeqyGqrcTQ2d4kfTZRKhdnAaNmXngf",
  "key29": "qHtT8YXBzKn4o9M5TCRy7yB3AwEWHRDJsbFMyRCJqrEVrrATrU49PUzxsH9HZyGtt67gp3s5EUyTSwFrtpdyUyh",
  "key30": "5fU8Zx8Da2y5tYh8hNYpCeHr3nmcaXVKez2ovrQjSiTY9vWLbR7Ws3Fizz1NtB1Mbo8SEPJYfwBWL8G9U1YPZ3CS",
  "key31": "3wkMDJhDr81EHUKqdf5CiY8UsqMR6nqh7dveT1LMuhJZEXMBorepWY2gVXTAaKyZUwba4BU4iSwPzEVAkzdu2viu",
  "key32": "hfP7mfvqgxx5nmsBGSWuSL1Mr5s4WmBxDGufzL38o84zQPa1R7K3SXfYjhryxPxqcGEuLHkfaXicahLdEKUmvGd",
  "key33": "5ASV7KQ1LpDpLfbHLYMtsLYM9YHJ4SeoghpRYYnn823ko3ysyw18GarJDxonzjA55mN2qQ7HLCWrML3syCyZzJ2y",
  "key34": "dYpz2V3PCqztjhv8YJprUhsVjzz5j63eRYDZUK7LjiR6SfUKpsYZdLxYcnot93jjnAiS4kDbCVEJvzUKiLMY9mt",
  "key35": "3ygsU6cY8pTcE5tD2XYkL1UVRCe9YDzncGjqzLWjirhB5HtDy2sVCeVAiesskp7rw3FwawkvRjKNw8g5dSSbyeT8",
  "key36": "2foMUoLdpRo5zW7g33DMTbEDudQtmgQC6kgVrjzeoFLxE5edVZLVyHKi9Qc5X9umV6W2TC2v8mRURRmgSu8QmXsh",
  "key37": "5Btb9ArBrRwD8cvCHDGua6hZw6k5j1EUvbarDTnwajNKXR5fEvXTt58ziadREfWwuRmqwvYFwiubd2gdx7A7H47y",
  "key38": "31gYYb4k2j7Px7yU8U1Xn7pyMcJcErXh9e1KVVzX2gBes3oRCam2GVE3DtfZN6e5BmTxdBeBa7xVSYkcHycz8AdP"
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
