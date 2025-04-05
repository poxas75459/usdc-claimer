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
    "4cHciB2B8cHGdP8L5WWZVmzLJdM4k3omFzBtK7yEZdX3p7Eu8Kw7mnXcF2P4BdKgPmgPHmnwTKHp6wzMq3g7Ma5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BpsqfTSoQLN2V9VAfY8AM5fba5Huy37BwuxBfDjjujtn1ahcyALFCUcHNRBiWjjmyncQXkzjud29wY7BZyDd4wn",
  "key1": "3U9bjXAL3ryvcptLYBCSjYPYJX9DUV1yhb55KW34geEPAj2ZwCe5wq1jLhJYgThXspXGmGnK6Rhs82LJ7TgSEqSQ",
  "key2": "4XxhtLfKJPHT3afJUDp42yubAEcK8hQySctGCPWaMbytY5XSpvk61y43ZGf3YAtQJ3scaJxRzNgP4PXJUdWZFpqv",
  "key3": "48126n2j6n1Th4QY6H9RFnBnbCy2BBeNCZFKAsQnhEiV5XDPmXd9ubyhsQsbmE4DXsU5hTqend9UGoJAA4UMy1KC",
  "key4": "2DFieaAAnRAKgEGdRtp9xYf7cS5kmBcc4yDWvsWGq29kWy3vFPiM2q5HHb3Dsazhktz4RbQi31VZMdAcHtQ6zubx",
  "key5": "3HxqxrPZWykgZbA9MvYL8rW1LWUGmhh4kzUuPAGd9Y5wgQFjHrVQwGK1qf9SooaiHSigi6i4tXURkbUrfE9kq5YC",
  "key6": "4Pmw9pCqXGv78X3nsgHXoXKzEUiFp5fRQsbnsRvtXrZo8p8ToES1dg68rcrwXdYrdTAD7MxxYBBzGanTZ8wvt5Ft",
  "key7": "284xgz91DxGQn8uRX4R8TPQkzquToCRi977hpD1V48vEU8zgrvoSnxMdMVjGCaJxjVuAW63n3fqic7L7A9oqTLb6",
  "key8": "4TPdPLWaYzubFdtz4bkGdFqYZ3xudmBdKKvDfDv4HuBwKhLv7waybRuUqhy6hy9kU4KvskkDhoHzQS24sB8o9U2g",
  "key9": "2K6Wi5Qmg5yXhRZtz9uZpxq1QJrk53E7eaHxoLLHzo5oeZLVVt2zQq29EEQKahCCFTctudMqhYeVVtE2pgBXFB6m",
  "key10": "3Hydq4itKoB8XCpbUutojFLms75Zd7oTdo2HVZ5rmsutGD6yU3bFF23NGvXSBrqWyey4iGrHKXsqLKK3uP5WRUxP",
  "key11": "5cAgp26g2rcWH12ktDw2FZzYTEW4uWXRiJabzX5XB5uo6fR8B4WkhbHwSasEnvrbBsvHEAcaJURUm6Riu2YVt2NK",
  "key12": "2BCLV6KKWXdfQVSpCjBxGptsAD3BxV1qxWADYYyVyu3gkhoksPydhJ18Grh7XeSmCHD3FeJghtNqu15SGfff9SEW",
  "key13": "tLASEtE73E5rKD9bXenxpWmueBmo8P9MogpGLcPmPdXg5oa9jWwv3TcPwHYquMwM3VxFWV2UR1wgfu35M2R8VRP",
  "key14": "4iuTBeFPNKB6Gacg9yTc4KthS6LH1T8Xpkq4yp9WY9RLoAgZdEfgU5B7ydBcQZi692DkQhPwkCp2Xhp2AN8bYF1G",
  "key15": "THHwBRYT5YXnHQJ1d6pYZLqQhXXr2PyfEF9cSoLQ6Mh4JwUwpoMnpuyy9CzaWLvtW3Q8bomzps56p9hSzGUobMu",
  "key16": "pN34NEBb4yGT312uaULvuUzU91unjSekrLNQHvwq94bGTHhAtHXq5edpmNLbSvYoyfHLWzrBLqAXL1yCvUtTbVL",
  "key17": "3Vdwh2FjaYxKmwvazXCsDXQ2w7BqcqVnuBJBUd7Vc2PuCnFChNbC6naw8hWJVKg6jkNawKKMDcFngwsvwYX7CwGc",
  "key18": "opudKo65fVu4pd1JXADwGqhcrspEPysJ6D5tWpjDaxrQ4SVixDttH3CN8ryMxQog7Dk9VyFj4vVmSRj5C6wP5Rc",
  "key19": "2XXQGubq2fBuCac2S6RUV2Rh5E45Gdjz5nWKndQF3uJjLgdd2AqjV5nQJenbyDG5AnUBMh2Fs66xHnBW6MSFAPA4",
  "key20": "5BCgGZfq8kZE47iga2C4M6mfq8pywou3UsG5Nk4H4vNED3XAgjcZa5nE8Gmq7jhxmZQzQtQxpCeRi4X5XVbZcX8s",
  "key21": "S3aS1doVR7cskhgotHAa5avst7WAYAQACdADMcT48ZwmoWCfeBo5CxCZR64oDk1PMkUtSQzHcw8QjKRX9L6pCUU",
  "key22": "WhsuNEzDPXANYsgamDFBNPuEgGaEWYk25AzPwy1TTmCf9Wy5iUWaKL8zLBnwvHX6xJRFHPX27stctb3xhYpMrRp",
  "key23": "3UBfHMQPWXBmyBvnKGyQ7tWChuHE1qD6NuRbsUv3gjPSPaNdaRmUmNnmhLoiYgN5ZT5NeNmmzSkvHecCpGj7mXU4",
  "key24": "51zRAvAZWncmXkkYz84CPFeNt4YrVieiNFHSneaBRpjE9XQFVEfj8cZbvHcb6yajBU9DgHJDJPjtrBe55XPRMy84",
  "key25": "4uTPCBAcNdCUsnkGCAUYqadMQw4qt6Y6TBwtcWv4yugbVkhJT3WyL6UPftyAtbtvm8A6gKC3zr7Mu3RwDuQvFsQQ",
  "key26": "5usCb1drun7GyvqMYpqhzGUxZ91n5cjPkAiu9QiVD5ge39ENvFPS1wjasCQBoL4rcRRUXtG4tCqzS9SJuFqfL7G2",
  "key27": "3MgdrWpVyANBvmqenHHe7gANwroRNT8nmYDjGPUfsZQU1XcJmTupPWqVNZ88WwuysyqT6aBZZNpYfxApSrQmssyM",
  "key28": "4Qaf8gAtBn7wL7hs7mGiLXg2DcPAmv1AaJ1JQmFs73YPkvdGzJmUJnKatqfvSZP9c7tDDxtDMQug5rTTDazNzeK5",
  "key29": "3Lbi8UUPvbRsVXW3kxsVPu9Q7K61Ri6MhtNfjCGhELad8fuGyxt4viHRL43w4gZYu5jwyv2Rw97BTo9fwWuRuVtV",
  "key30": "4HRiJbq3D95Uuzk8gUS7vrbciyYR3XN5zduQYJ3QALSzScMnQHkYDYMLkzje1DVJW8UZgf8RdWJiabPv9MubDSMs",
  "key31": "3ZPxCeJZuSaReC1DhzeMY68Cpzap8MfyN7gSaXNwWyRVC5T9JyrzoWT7d7Qa5Q3Q5vQhjmPUFqrJP8HY487WGxLt",
  "key32": "2o3o5oVpzEN3Q2ao1GaAZzphNQvPmV6Xxnnx4frj7fBp1x26mWTQSZ8b4Y7LzXVwLmg2PA86SsiXZVEBSTKBcLU8",
  "key33": "2xkSikfCtiKQ7YyJjrpFGyj4BmxSCBmcSNQBcfDRgcSCvF5fFG8wFd5jrdG2xdp71bAk3Ta2J2S7tMywGE5k2a1P",
  "key34": "ksSSuVLpAp7CHfQdQmTMcMmkNiRkdxUAupBg7MA2GmASJAfmBuACshC6BYKpFb9K3Qewxz6DcSHgLqZAqwv7g21",
  "key35": "2pajEnbUaWaUw7km4DbRmJ6S8RhkKTSaRn92sdiP5TfCcUfb5h7Hu4esfdSbafiZNvRyF4bPwioARnQ1eUcdVkg2",
  "key36": "5GYJ7y98Zq9bdZTQMCXkC7Fx1iZ4u84W3hW4N5H94fqmoLjLFBdStifpcqDxbeNRN39TdNFLW2xwkmXgCKHnChJ6",
  "key37": "4PFMTGwBTHNkxPJ8siRVhyA67EzYBdWNpFEWfQLPFq6txUm7rZiULX2259AGbgCvT5a7NUsh3MXAdbLMqQ7ySzWv",
  "key38": "NS2B74DDXLFHoQtM8ioXfYSm88gDd82XZhy5xpY3Lm5oCh8qnx5cQRi9DgctGMMZZ6a81gNUzm9pfP3pHEV8ruT",
  "key39": "DTs3njEchid8MxTZeD6Gm9hA7F8fNd5rbB7DC9s8yAWQDJ9bV64YkY6SRE1gceQ17kdoxHBTGXnp4bjoopp6dan",
  "key40": "5HtCizfeNZnMZ6sKmV2BoYsiVutcSedgX6XeSmJeqFRApoQVRTggFo9w7R47VpBffpTHhdjNGncw2Laygr2iJGCC",
  "key41": "M9x55gAy35AUGRP5yar3WydNUk3ZuDKKuuALqwV2e5EN79QEwjmeQfshN6LnQsp1PRpbnt5LhkFUQohW3eXRSjw",
  "key42": "2Ugyx22xzjqhSLzQLpQBEjq8KedgJsgPUaAZbJ42aYN3YM1fmusvFk7eFKJ1S6RQYpQ57JLARRBHjYFmoxwArPwa"
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
