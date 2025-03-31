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
    "46eos5qXPYvYvu6eT7J7Gso2DNwWR7ZWGaxgXHdAcXFm6tmqpEwTE2LqdcpwDc9jFXckv3Eb62ZG94FPq94YeRo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25JmvKUGHWxB4rzag4ZbuyVbMH8CCgy6KtDFRjA3MxYrQwHGMt8sSkXGGCFKt8JVkVHhzqYBmzZ8HLCn9DzQEVT1",
  "key1": "2ow4SVG6PKA5WBqKJCKFUR71wxgLSEcFvRtS4NCKqfxwQRipuGDt7TRLCMTM7FtLMVeP5ExezTfHsoAnSzFQbghu",
  "key2": "5658xGvtAyqb7z8UPAQ3oVby9pzB1YJ8mRmDXZctRxUzqGbQqFHmkMwsEFoLPv7fJnWz7saQJRP9iE3tE1ceVhjv",
  "key3": "29rxdepfrY7JhAEKvtgkxyuuEGfdVfZVYhCVTKhECBk8nU3ki5phtw1o7oMBLRURAUjUFoqLiyRKkf3Sq6UwN5ki",
  "key4": "4pYCVu4ySfk3rK3txGJeprQtdX28yN5GyQy4yXMAvG6RF6HuPB42JB3KQCrLg96EG8YUcsbYTqa74LjfbMYa8c4r",
  "key5": "3XK5mE1uhwjBPufmzM28TU4cZcYRzetH94Fv3Bf9fkhU2QPhGMjBvVjuufdpaFLujzGF1TaU51RbjE7mAP3ueDvb",
  "key6": "2JDFdKPf4akZps1D52CqrZwjjXAL1YtPKk8bfJpivuJKMEnSfbmtTNZyDrfP2Yumz6yih7yrBWdZW8ky58rii4ZF",
  "key7": "5aJ2wcPx2tjPCqTLYMyuSshNZfa5kAddAzpMnjPBLMB9bnthNQXn8px4kXJg18vX6N6U3PjnNaeXeAJuh83ZXXTo",
  "key8": "3bKz5yhtMMVeqJEcWmCsgM9UG6zMuvDxjBgUQEpPRzUCKNpoGYbvR1hu7LQdKJZTgoodzFssn83aco1EVwkfyUNL",
  "key9": "5c2q9w3kkMP2zhkTJhxFJwGyssHvpXUpEHmwkBUE9egcCmonayk2x2wHBri2W1iGvBgWLdv5vACTp9j6S5eqGv23",
  "key10": "4JXQz3W6MZH7uE56gieikuKgyJMBcuZwCDztCXZYX53wFwqcPJS7bAdBA1Hc68qGa5PtBBx8wGpahXZEk1btAozQ",
  "key11": "2bRgq6vK6VBKYhpMRraH7ep1jsx2NFi7YHhxtuVA1xBaNpvhLuvpcYyYtqMQUETqL9ZkXmk6kY25do7pzQtW8kEr",
  "key12": "4s19PRAWgdqMuBsP3M5zZdvJQSLgsSjowZo2Gq2v7HNkBPJzPhA5ALFaM1oCo2SXbfE4d22rt3T8jyyGhds56gYT",
  "key13": "2syWtB9CEedgjY97iHjdPw6TKNw1yHf5fmuCUpJjRU3kcKfH2AAhPKyqECofPMCqpN4ivBZGJ3xUkpg8YbWHUHKE",
  "key14": "2sFaSPVfoFaDVNehjrvNG2Yf7XRFLphkeyY45v9wY7mpLAJUMofzgMQHSnHahYtCztrCNRfvAWWcjyZS5omgArFW",
  "key15": "66sDMv8S5idJyYwjm4bJ6BT19ntzv4CMKVgYQtQCCTjmWfobAQGiAaLptwyPzWGSLirqaFuXk4AQiveVdFPVmPy2",
  "key16": "YMAcJpsXbNowvWiGkqo57UdwFvBHB7BMNHNxGe4DBUtaLXUgDCyCWBBqCDmsxQ9oY3nG83FXKPnPQV9rnM3XG6W",
  "key17": "3HBH5Qzr6EVtzZXNK2ZvCUPfi3sNRMNsgxypzm8P49aPtAqNTyQxqohCkkT4TQb3sb7H6Qs3DsTM2sENXGmZosXv",
  "key18": "2oC9MSmb6vUpjCoEaKG4mr2M7k4vtkgdFZqTwwgd1hX4zX8NXcsUxMcppKSG2vsJVmXgD9VhN1yDfmyyMeg6ZAQp",
  "key19": "MmTrq4Pf8izEWnd7wEXfMuHJ1oUzYdet2NvNFPJ17xYs1BrWqfaciuvMQdAGFrNqJeg267Ab1UtHo6KyHpA9V8t",
  "key20": "4Gj62Go7xdfuBbJJNHkHqbdtzU8JTs6uUt6PnjprDTtGC6TiAgCGjTmbj2vJjS7y4XoHg9kzQAKYkwD8iLmWaSaQ",
  "key21": "5ngaPpgSak9C4KcAbTWxugzgf1zjrZJz6G2Bg4Ca3QNtb1m1f76UWXyfgFCxQGZfVs92ZLeRCAXBmY6gfhCnxF9t",
  "key22": "i42mDkcdU9P8PqsiRLm1wsBzyZh9s5dkFhzquLLt6XmErR7z9GnEt12Vvqn6sAPnF2tA4SxxCHDvMEMwVCbP6Av",
  "key23": "39Rrq7M5NwKXoryzHsCakotL1P5z8KvQc8vyGnz17XTYVCGVeWtptHnea16DnePRaVWVCToqrzkGQRVDFkSxP2Ca",
  "key24": "2muL1zPhmj3J5MkFqbvMvg7mjCBNspY7PQNt8CyTMcSay8Xzm7pFBLpMTVszJRu1VBdWyEqSqAbMFJjhMUnD24mB",
  "key25": "3BbGrDwm5vSeQJEFvFhmA7hF3m2DiJnC8F878Jy1qKco4RzzPxLbwvdqrwkLgkvFpeiJeoFoGi6JiuPAc89928cs",
  "key26": "3BWp72jnqH3rhQutoMR3wnYcUocMX1PSc9s3472JoHvviQuSFHHkHK2awoiHEApc49oX91jQnowWtvLp4xq88MJT",
  "key27": "AbMGfzYiMHhBLFTPbmo4ZBkjX3TtCh8guxs3CyGQirfTP5FddMrApVq3DUX3frytCfT3qo1sb13Mdq4eUF9hsTz",
  "key28": "3hmaq3Q9EdkzmkoeYAUbH7ZP3MM1dwJN6CLYRLsqyW6oQde7RdDcbfBaWuJsGFbDdCF8AeQZgPmMYhCTEm6U2tzR",
  "key29": "5Zy37MDMMFAdNuTPQuSzXTr7hetT7pRUYAWD8eHUxrjVHh4xzZeGLde9qdefCGCDfbnAxEg5dK7BkawZ5GJu9DKb",
  "key30": "2iN2WfoTW7GXwdAGcUBwmDm8e7Q4tcG94B5hkgXr9anjnYDwDCgZCvYYJ7Q285CKCyEVGKTnh1Gp3T1gJJi8ndgV",
  "key31": "4e4Tyar7DVyJ9xPNJ9W2mabAZNJSJHDi5oAicybkmbTQqqCMCGEtKZzeUjisfjnep1XAKtRuuPHVHQ6m94qhS3wH",
  "key32": "7tmW7taBYuwem4gSxe49NavrH2g2yJH8UCqXuFBuSyLEDH3keXvzgwvxriunxCaobqd2Vi2eHfTaqaSRvdpxWBa",
  "key33": "5VXjh4J2ZqLZLRwHQDHMKvzRRFntP2EcKjrq23FMKcxQP6PNi4FXMxnZeohz77BTJcNqhywrDKYuMWgrjUQ1MgEY",
  "key34": "TKn7DrqnDy4PzzpkWaf4c83k3JxySpB59UE7tmniNrv2CsgqkoV5qvebDXLw5hHLQUGnuF5xYzkqzZYZL8HA5sE",
  "key35": "3RfjdGCp3EGcqrxRJLHLtvUMkXvYmXgDVExMoVsXCT2pm28UWiBXdJurkwR6VJ69DoYmMtdgsRRuY6KrSKDVGfqk",
  "key36": "48gagznDvroEg3DE8HXwF67FyYDcW3dx2xqZSKqsM4f7KwQ21nXwH12tuiTx8xNWsRrcX8ezLgrX8vwyphssNhYe",
  "key37": "2hsW9wWM9nwmQNRz7dtEWARhUsWYYMh9FTdT9yLkg1kD3BvaP7qujTyF9pFXLnEeLd1jji84ShZaJn5Hkjbu2fU4",
  "key38": "gbcE6nkon9A8hfpENKxegit5CS7djRcFumdWVL7bPHPJxGLkowVY7botLp7zgzLM1S4PSFsNHRr7wiAekdq8fAo",
  "key39": "32YNSNFZhnRAxiMPSqBLWCAae5Po8WdYBZUA34ugUfUpndPELJt5UTnCEu6hGumeW4BcAeXVMvNTgxaAuHvTVhdK",
  "key40": "5QsgQ3kpJVwVU3c8RPxSPjXA78HsZxLksnuTuPY6ph89sXzsjsMG6XwBSC3oTscfLcuMMQPjJDNrCi5CrDXkRAGq"
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
