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
    "3CPdqSqPav1aqqkYn3ep5zEcmxBtMxrdXzHfdNnGpUiWJeMQJbeKE9rC4Fvwhbcj8JZLaDK86Esf6NfahCNzCmS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g4ZtuMT3f1HGMRhJZWgEPKGKfWZ8KVL1o3GgyAxbiRBbL3n5G2fba27onutNnejXecCKBUm9uft6ca192uoDiur",
  "key1": "HZJcycANNZ9y7vA4ghkypybwm9iEz5ieRUqxLuQvZ47UFLYouf8qhzmtz5hQRcvwVT8ZBZByGstiHJ9yXaxWkC2",
  "key2": "4UVM4ZKCayQxDEBKfHwQZFPiRbh9fR8YhAMzBeucCbpErC31mm37d2dM6VZ9Fc54PeEpZRBiYZeu6VzcyerGG4Le",
  "key3": "3v9TGgvJQiobPQ85UNPKg6i1FJh3HLrdNtUMpWRESjtz92wsjkt3yDEo5GezaGCBN9dawZkAVWyiNWzWWhgGo8pY",
  "key4": "2frJyZbfhD9PVK6EJnm2YzDCC41xew3oz7xJVvXrUVmrQSLRaN9sDENxDPsUz3S1S5Dd4TDrcnzd4jRRUrmgkUnK",
  "key5": "5tWDbhKV69cY2SnKwz1zav3Gh56UH9reeBuGPJQE21Cst9MdSfyUgNWEKmHDQuQYhsfGA6nLcR3kGYHUa9uW6emS",
  "key6": "PEiyNu2EGTC8rK3PuD4ExC6itKwLpEabXDKcVGtNBiFEjZVvuQi1nkUPC9HgHJCJ57bzwuEYvYjunEm5DtEBRvb",
  "key7": "4K8MmwRs4WX6DsYCejUuCj7BmdwZLxhPGuTHfxKCQTNkw6vTW52mBV2jgmCmTwZWzBPJWkHEJgrMPkNwPrT1MNAD",
  "key8": "3YmMTRwJy9UrYA6cc6jMFhwgc3J535A1zFid93CPXTGdKjbK8cY9DErmbBojqjmD787xQ2qdKCAKLm3jNSh91jF6",
  "key9": "5Hy8jgowm4J5RU6q5gWjRPWtapnvFDYHYJa9PzPBywi7Cs8nARc86BsbSsjPxXGt8pC7HLmLtjU5hUjZ9kHB5Poc",
  "key10": "3gMyWcPfwehjxm8Be87d9z2qJo78FM2zbUxuFxqcWMWiErJKCfvmYZ2fRrxS7C4wGdj5ZVDCvA16LMGAhyecndte",
  "key11": "4P9P2ZryKSu7a3UuUgJ3WuavSk462ZhQbkAiuKLn5oxmS6xXkVPQQMt1Q2cfmPQZ9us2MZ1iBjWzSsLQQf7dM9S5",
  "key12": "rNf62A37cfFxdAuLKPwWH7tpy1dnyNmE8o91DCmjBV7VdLfaCCaoCWQUr648RYw4zLUvkCtMxmLDEXVjHbxK7dh",
  "key13": "5NbxMV7qpcmxaU4a7BKJ4ELBkt9uqkAJhSCapoPJWot3Y78UNGUAJ4YP87TijkwE2QqSodqG8Uv8Ebu4rViywZTq",
  "key14": "hjbHUkxkZiQwMgJGqAbWMVNCH82b1KwWLyAvmAAuzF94UmNTNu4JZpKaSnyYAy1vjSouaK5gwrkSEL94xFTEUBA",
  "key15": "4tACFcZEhhiCd3mkJW1He5KA6hUxFoWadwxbWSVwZURJrYnvYhpthDmq96kAybNHi47mcVdArPMY3Q2bZsstHgbK",
  "key16": "xDpUwepTKqN5P1NgvLJW8bfnSTt9B8TBkxwXRpNUnyvNUxm7D5zDvSYc7RnmPv5vFbQgbBbGqYLnxkSq8dYPrjp",
  "key17": "4Xjam5LxjUbwbqTW9jYw7v3YGmMhEWdapCbL8i73k2QsaHSQh9mznfg5NbYwNZXGhesySdJpqXNCJnVY2Bsq1kAo",
  "key18": "12UbPi9AiS3Ji29PScFaJDtzoTdrDVZVu3dEmKkAVYnD9CSH1W431o87oqVmB9AMNfygP1v7Qg3nCn4V1Fu7jen",
  "key19": "3VkV6N6yiPXbXz1eGeiHKu2JAGBV2YF52txwezBLCKRCSt5NMDGvy14o2XEcau69HaZEc1F8HK3cMYmoXEQoZP5k",
  "key20": "3Pv46Hbi3oeCjqKhuvvgia5MYvattqKZBizYSYyatWAomQK9ZdkG4rsg6dKtrvVqxiFhCWMW6eTGQZBTWMYNQU9d",
  "key21": "5wu2gVTLqpCwddAxH9DtW5ZrJAE3SqSjiYgZ72xkb6ppC93EHaTwRekJ88CJzzUzyUcZkWUf4BEvertRKcf5ppQJ",
  "key22": "5Jv4FqtNv17aQNaHUwNtFoaYBYzrLwKU317CarkMVpQjogE3MKWmDzGNG5ug3KjJgHy1opT22L3hArmmo5BGrMrS",
  "key23": "6KFPnMzuE6RJfPg1Q9km4dRYrfSRwyh2xQJdeZketMHnGCLYbQ7DHpLyogAuQvBx2LdCGZVutMr7SuwZRNRsP98",
  "key24": "5GJ1sfrnhexV3hrWKvaUx6STRzTkvVgJuQCQsjyQwBU613tJph8p8bZNgGNKS4g2c8BgVMwmCUUa6P8A1PhWpuHA",
  "key25": "4UyjigXak41UsVoK31ss4rjQHSTdpqAMXpjS9ReDL3cvkLxD11x9B6AjMnY9Tc3pTRw8AWoLUSJYH8PzatYSge9D",
  "key26": "3XioPmWrZto3pzmU7LWWKbNdq2ZGgr1CPFpayCCDUeg2Ci7EnF39XaV2e5PEG2PW7eZeFiPFb9hDcmfu82ZCieFe",
  "key27": "wFapuHSrKjQvf6Jqr11nJcFRFhpKfVJ1AAr3R4qyotEgQ1R6RwiRbQekPcJ58CXvMUzsiivznyG6SQ6FAf1NDfS",
  "key28": "36y95V6G98DcxTHSjvKqyK5DvagSiFWos7QuUz7iCKypVvbkQ6bVkzxRZWH7v8Q3x82xviQtUtAz3kXumYFKe9ki",
  "key29": "3ew1g6AGkEngLZkoWzZ19tDFuP7uhKCmA3unsz5dkWMo6MGPbS7bou5vLXy9NdfNzjAWde1Qcq8shQ4hP3yhgLsX",
  "key30": "525ydZxKx5n6gFfkuJUQEshN3nNjU6EGK2S45A7ggY3V2ga3F1wFCx4oNMosEEdjT4vw1KrzHdA3UQ5WnDqJmYBv",
  "key31": "3msM346gpHqyB1CAeBFEs6dM7Q7C6BPSYmXTCWZFM35ciRWXp9TZ8qAmkTqqYxJGvuh7BhJ3T4xS7e8m1Zdf8LBp",
  "key32": "4fUkH4547cVjoGVfE1gQ1w4HsymsSeZPX8WL8s3gy744gAt5Vbju9gkw8DvTYiw3BSJLdHeqmWHLWvcnFy3istvo",
  "key33": "2MjhXM2Cu3JwnXjtcU7ErtQJZMQKNgeppLntGS33tB88B1ZhZpWjbb8Ru4vrrMryNvc246HMdPTnm7pJo3TQrBEE",
  "key34": "492NKysWj6psu7LejJpGAgDzEyc9FJmiY12mhbjT39CP4kVpXaDU2fBHjo9rWoitvT2mjtuTwnPHpCUpbfvzGAje",
  "key35": "5HZgE8VMjHWXfVTdqem3vVtgaqU1W31HiS7ZiDqJKhf9VNZeGzkfywc8tqAGMUnuXcLs26Sbom1hk2MervgKuzW9",
  "key36": "5jG8y4QvDhB6c2tNkvD9EboMdaPvvXfS9XvFGGDEWQzrXfmpHq5vPuCd1Y373Q7e9oo7PDCPMqDd6AsUz7tYJJVF",
  "key37": "Ns2DQwJmzWuhjg5cWdBGGHSGtrQ8PHntq2SfWYifZiYTrdmVEYWeWCq3a85WeD369y48ESoauAisiqGxLSTVw62",
  "key38": "qUhxrd4UmrGsDYDPVgGseAfpBZqz7nTRaZan9UYgeYBn1EvWMbP7ykYVrcci6uUVAmm7EfvTcDndycaPkpZ6rJc",
  "key39": "2Ly1wteS3yWmqm59vdHoDL2jwtqu9mA6Bddg8HhX5N25jwXhQzuh86JKgpoKiRQxDZgVnWrTaHB9uzqfxzM5Xb8T",
  "key40": "3QNNXUjmZ1JkAk4qzf1FhFLL3DNqrTEYQKRHxRiwtAUcsyBgARFaiEsQ5GQMKGxT1L6u5cLQLpJq4oQ2DDDtCKLN",
  "key41": "5SihhCxoVA59bNbeqsTBJX4GKDFjPQgRZ8E2iq6cdrY3HmtxpSQwJWK8faDCEYwS5wbUUSsS3rFJjGZu9xB5oF7S",
  "key42": "3YR5imKzqFNQjoEHxQUMsA7jDY7ek8AZveVwvj63txN1SCvaqNUsC3Bug3qumznAVwGLqtMc6R1wPUkmgMP2BhEX"
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
