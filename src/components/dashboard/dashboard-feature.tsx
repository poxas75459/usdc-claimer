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
    "3vR9ZJdgi5GPVqFAf2YbxZYx1dut8M5fagNyyh6Ct86czVcaVMQQLnUGNP9Q2eC8Xx8EtsrDdp92k3r2U7iLjhFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LYgrL1ZPLVN1vKbxd3ZYEYEfHow4mFFv1Q4RGwC2ZvRURkaqDwW1NhZo2FKNN1DeQCxGwdq6WEQGMUZigjVqznz",
  "key1": "VqRagqGr8m6Jksk1S3s9DhRTnubzceWBQwepe4d7eexQXSuJVaUcXkMzaHzDAj2sf7sdDaPBdki8fNZUEJ6EGuu",
  "key2": "2AGhQSFnXN1wTVLvfLwqh1LqRtj41v4ZQvJaKLR6XPYMhXoz6qMVoP9Z6G2WLzeK5RvN4Q6FXAecAMKNjR9D1vC3",
  "key3": "bu7Ts9T8AhTC9NWoouajzKeikM7eGReyJbgYFsGTXjky1WdVJEQnHFWjpY7mbRstJzWHciUefEkXDddwAJ436Lo",
  "key4": "445k6hWEWAnMPRtpYCAxuCjfZyrGVyQVtqKLq648Knjn1Pub9rBu2U1c5WjSfdZmQdidTUSUwnDmp1Pg2in6tNTN",
  "key5": "89zdqw1M7Xp3mqoSaXSw17m427XAaNzgywPG95JgTQ8YduPDGpeUnXG2BWBuKmVQ6NpXSBfY5USQAQRTJ365jaS",
  "key6": "5NEyvSKJnCTDYxuz1cyegPnecdFb1kUSzgEVCJFfgAheaSHGtFZtLRWcW9jRqGF1515QAm9QcS411Kvh5Dotj7bU",
  "key7": "izmLJKqcAiPsnKHnhk2h9qQQUDxjKTYGB1WZiGtnL4qZnMmwbs8A3Bn94MZs3QeEGhXxdbrvqyLZawkzSQs8vWA",
  "key8": "2fEvaU489x6WFQowVjciJi5TrtN251aBaRntospzytH75g4kQUFY47pSoZbgTTbiUNCftbRzfYbPB5LF8wDwjHTM",
  "key9": "52qpLLYRvKjAqb6o1sQPPsyZPe5LP7ATCdt9MnT2iEU3fo9Fjtb9xVHs1U8zs4avHUpmBkhSn4cQ3np3e4odVg7g",
  "key10": "39e5N65g3KdQ9WpTK8isJUfei5nz737s4amJBgkc1cGPyecvoeup4iR1JSPdERcoD1bTfDCHgSw7oNBwzrziNToh",
  "key11": "2vdmVBsh1KypRDQhwf61gHVLRxi2Y9Ayu7tUMi1FjAQykauJ8sKDdrF8mBmo8nEWVV2pE8zAfCz56FwBfe7EojBd",
  "key12": "3xo4VobVP5aEArBBLmTVGvAJkk9TUmo1F12tfPh3V77njCZYstu6wmJhkGKxoFSbFyuPrtpXGcER3SvqCjkHqv2S",
  "key13": "2sQXvnDYEV7BxgqhqkJH6tHite75qb6rr647DxbWxbkmzBDjfNgDVcGSv3iai7PdkPW3St5bFNVwXJyv8G8bit7h",
  "key14": "3g8cJ45R3yGE43AnvJeb9rnGNB7k2YJF7Ruj6AvfGvj4bqbTSGvy8J2385J5uqa8CDyfyprQ8vbNbJM7gFNVt6vo",
  "key15": "35J9gczFKJKF3b4BMMFNTAs3bxYuQjmuonUZvjvRvQJxJu4z5r7VCax75V9vke7PZpjM8a4Zui1ecRNVnTnkzi3W",
  "key16": "2R9NdTKqLaQrcQx2GvcAyVqP9pK7VmodAF3L93UM5CA26XXxS83dKA9bgdB7eSyqhVH2JCxDdC8RCkmJBAbPYcbL",
  "key17": "xCmMaMktg9EuubJzSJJ6vLqrDD2shdegXzDPcaKLERGQuqWapnL7n9b38kmJYaJ3dr4XZNtrUNaji5AH588ZaHW",
  "key18": "668FVQjMo3eD5epgBr9wmWXH71k1civid6HwSpMaPkyHCHbgVMArpZwEcCA2zUZkEkw5Qjqbosykp8kq6nuQiikQ",
  "key19": "497UHR812rS9148wH4FhTfQCv4XsWDJx8fMwZBeCbqjHhwZ5BPU2is3oyUu8gBWWHXKiFYKcXi5zJbUJ9oEPuUoG",
  "key20": "3oZynUn8eo3XqPPpiJAMFn3SMhHJeYk64szrrbU8j384ruxjoXFFkfVNhtEjBiCCF5eg1vN5vY58RHVDPkvdTSuo",
  "key21": "22M14R9XKH7cXvcsYwZTPGS41Gf3xMuuE4W9KjNuNeCiynvfQ6ZZwvjqoz6zHjiRFVoDYVzty7XEyHk9SeA23WPt",
  "key22": "2ku1jVtutrQdoeuDciapmVaLssZVu7jsmTJDTjWmnjj1CyHFZsKsMrGd44M356H1JF6hZDPnzLAKV7mYQ3k6gA9e",
  "key23": "3r9Fs1MuYePHRYL1ib9fMM7WSJARLqrPyVhn4ScgqRbmEQF1AGkNgcBkMrGwfB71qFJxToV9NJVo1FnewqtpsCxD",
  "key24": "3gesYYZWGFpJkHBw7ntRR9PwCumiDmrCTGkPjKCFwXUfhSCyNX8yskrcTyHmtQfqzeBU9rPZjV4jLBJz5KA9H36F",
  "key25": "5KhABcC5V6R9AKYfLVrjuQsbRXcernckcjmJ4hnrQTfRgbcMjhDrgN4knNUnnCirzVisTrxXCjQhM2snRHuzee4i",
  "key26": "4aaWLe6612t8sdQf5sT8edSkKDNQytqsRYszuA5i3f1Zp3mSywYaFcPChvfvAmFRtBNqdsNH5UMs3vJae6MrTavR",
  "key27": "31iMaycmtuZrv6EKf286CSFGfDQeep4ne73AUTx3V8c6UnWggjaAwnyxxbTpp9menjbSt856MUhryYq6iVtwCZw9",
  "key28": "3VyhytAFk3BdTgqyCR53bdUsipB8j4vfiwJvRbC96aBGGsrtkDspqFCq3pzX4333yLZCiRRYzeTmcpKdTzYFa1YC",
  "key29": "298TnvCNTqtrunFkUAoQgmgX4UBQVQohEK8mgk5yWFJDFyiU1sAxeTEGLiLFzckhZRV2DqWEBoo9vaNCrPWyiy3S",
  "key30": "2oVHqWc5qmy8Ycp2KmHuHyBxcUvwSqJFihCujpj51eY5kZ9gZ7oKqNviRa2LQMCLciZgxtq4KXZ5SYUbxfHHAGtm",
  "key31": "2Fg1MDB6nahARj5kguX5U5PzXufGXYrPZRPQdc9ZS5DSa5gf84qntTgnTy6rPtRmGakCBLUYgVGQ5vCBeXqLyyTm",
  "key32": "3ivfghvunpZeGUKVq6rYHj6wh9FB5adthQPJzTgHrnUjBtkQ2YjRUGpLg72zwrpm2WDEQJ4owe9p3CcQe8mGjbMR",
  "key33": "2ZhEKQwqxpcfEvFQ2E5njFY6woMb2B7hDvypct5hc78P3GNit9rN99qY5EV8wnZAh34kZ6Ho3Hdz4kfXyR4fEoDf",
  "key34": "3wA96U3U7VWnHGcRExACWBcVYATnzrV2CVkbgfdeanFDcwuXjqBM8mrBoAetuircKesyBMDVvuGuAqWzmnptCMQB",
  "key35": "4Ca1yscMeyMqJutvUo2JzLJR2arnhCzbN6o4rSB54FfJGFAps6rdG16UL5sGi75kMQnLTeCfvebwLuf4tov5wDNA",
  "key36": "uKje2XtueiXpiVy8iuzbUNhyVMBHVwZCvTJ4tG92X1E71QL8c4wCRytyZ99B4pziZG68KYgZDJbBXNE66RShKVM"
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
