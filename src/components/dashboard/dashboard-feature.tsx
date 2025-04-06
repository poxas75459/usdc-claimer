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
    "2pNoroyv6K5RrhCTC1U1FXmzYqMJhWoKQwAKX6dG7cLFHsi9oA6BemrMuT7XcN5iPbCZomwEmJZJMGQMRSWkscvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UPMp1sZiW5vkFMqELkrWBGnNbuL2JPaVzLtya6PCYSpQU3vLzjhvpLDxrbqT4KoqMc6SWqQ9ewyWkyFtZYhuNi9",
  "key1": "3FM5qfcCreSXoGrf73T3jRJyyxQXft8eWRnrcvaWPPocpsmTCXtrHzBQPWZhJzCEiNUAzKvUf9FCQRtLPJJhsG8C",
  "key2": "34HRVMJfDXRwXbsRuerAb7HoAgoBndLA4Kfh2tm7VjhbyXYv9CqY95zLfZEc8vAk2tD35s7v49hEqCZr9Z1BskTd",
  "key3": "ChPzKLTmo9bvmurjKo6gfGA9QcFTwSbHb5PP8eHBSKAMyAK1Uu1627Rs2GRw7SoY3TyTuYptuVQwesSosDc3YAc",
  "key4": "3d5sqymhEnfqXXTaKRcvhgihbsSChJxLRvWeCsCMSBWVY95WJkVREU9zdHHWDcJYaFZyPnGYQUw3CuSjd3E5cBS4",
  "key5": "5BvBhUAzvMakWbZNd8hDRaze6cPUpvCXHp98wWS15v4DdPvgUbBw6hjMzVZXgQjK5avwxUBUunPGXFJ41MSKP8Ee",
  "key6": "5GAczrDSm4s2YUwWkJDicSrzjiLCCMJL24rso2SW2MVEBJKy6KXg1h2WQwAyvdE1rZvhKLeG3DaCFt9KSHtVL8Q",
  "key7": "48B3DenZN4PRaU59HPoTVz3TCcYT57efm8E17dmpASCJTUSFfU1i9YARQWUzh1X6kJ3yxSHYBoKv6xm7WqVZgFTr",
  "key8": "4WnZj4chnEzXt2WkveZjueqYoBiEeEqGkLng9YnTWLNqT1NkPoejDNfqSinpDwe6J8ziegkTXxQ9kWKuM1PRofaX",
  "key9": "3cwTHLvE9bSn1LKvoSN39BczoFs7WEWpnzYBndv6RYz45k4x9BM9gyv4CeKLmE74TGwTDrAaEiYksZomg9UnmMYR",
  "key10": "4ZiSLUqasdQqRYXfpqLEZXcYNn5LYdsXamY2zBmrEJxXC9FCz1gMUG53iRKWffZpjj6ypX8tKWmxFRn9LSQGm5xJ",
  "key11": "4FbAkcUFBrX4i5bbNTaUEHRenWNxErdUXyuezZ9uqmvCEsW3xy7Bjhxxyzz4UdfhWfCjSMkoia2BEAVNBgq4xd1i",
  "key12": "5NbeqRKjBXcqX7dcA3jaX3CvMsUXYN1uWnJX8vmCdUMirQgw79Sbz4uQ1odJ21jwHgeSbGQUgf6hnxF5ap8yZG4U",
  "key13": "NXsCmBogUULaEqB2bby8v68djRYkFkSAC4CCYv8wC7jtK3gZ9UG3eTmhNu6xpCZfwHFydd3VwgskPWrq3FD9i4R",
  "key14": "3m3JT56uB9wRBUVFhH7g94awVVJPGczRJ3AGF6xfLVtctkjbRAFXV7ArWZhb2adDKV2hekFuEt7ccNGjzFs1rTM6",
  "key15": "5y6mm8JR7PL79k1kXKXywrT2BDUuXFrMyFKsZ3PjFg6kAW8g7mRhgyNCeeJj3tHJAn3fX7gmAw4NZU2RyhESTsqt",
  "key16": "52EEou76EAJEdce68B6BxmtMsPpGMtGUJBprgQoZr5pquSAXQSbo5o39rgHdwgSzBi8BXd4HZnaoCwjcYw9Vnv4K",
  "key17": "GMfcKKjc6xwZ2F6u7u9QLPJQEQZQuKYfvedXnix75BgqSXaXb1xv1pDq8SZ9XmiibbZiteyCCk7UPAqgADC4Etz",
  "key18": "3ciTrg79jZ2De34YZFnKckKG617Vw3ExMHjpGqqJv4PeQNTobYpbogg3fEuFAV9LTxjHwBKN9AyZ5vKGNCddscAV",
  "key19": "36CSPRJPpvYhoWQx9NTkeuickkA21yDRju2BDz4Ky4uKajsEMUGt2oNZfrDcfKcNkDU8C3PTNjXYJnbdqw4jWBXo",
  "key20": "67VfedjaZs3T8gL9fLa5e9asE28SkrrfQ5iHfixNGZXeMtfFXfoQz8FAk186aNVKb2b8b54Cw18tXkoLLH6Y7cwb",
  "key21": "5r23NPx2TR1RN6Q1t2uDqrr5jwrZH1NdU14KT53tEWJQAheoW97FPef1CtbrCaSLxYpfJ33YBBWFUu25T465qnSo",
  "key22": "28jfSdtjUfm7JG7DtPgTL1Khkke3FNiQmX4UtHA1WvUW5ZF8kpqf3wkTD9Z68Bk728GAMCXDkoMceYMbEnZT3DFL",
  "key23": "4GNdDU1ua8396tYUxZZHPk1jXJbawfFsNWRUD4YGhQdPLs58RjopRggDz1r1GcaDAkt87qUMcCaqXADGtYDEECNG",
  "key24": "4Gvsm2ojDEHmrpFM22bgGGBpLTjWVtEzNj9QaaVtj1SHvFoJU3wRueXTivyCbjp5ybLGkTJbnLh8gYX7rdbqkZ71",
  "key25": "23wio5qBj1wHgAnu245WKN3FFAS73Ugqn7FzVPSaabpyoqeLhBd9xZoqp1JzpsbsUC4NbtoB7QaXUZtN6ijwAQ8P",
  "key26": "bxuA1Qf4xSiUJpCSdFvdzjw52SECCaqCcz7JvSjMcBMMaAXRDy72Djd8zreJAFXVURJpqLU7YQsGM9vr6jnQ9JW",
  "key27": "cTSEKV319tEPkqqoobCFQrUnxHaiDHzFiEqYBL9D1f5hz4c9va5L85DA7zDpFguezEmJPYsxBr19d7QZSHm5nqX",
  "key28": "5MH3VG9Lar8WAcPWTWAY9gk3bEvzctMRJBYsbfwBwpENPHabmhwKvST1KJZeiTowJASoNNZx4aANUL83tn4dpa9g",
  "key29": "78RrTAvZzvzwn7WZTqEud7yBmPh5DZjT8Zgxt8Wyv5jFrr6pMsg9ZohNppyUvhmqNsQ1xdrqdtomHsUdAouNdYk",
  "key30": "5cVa992wHc4EWXg8zbK8ZsKYbAj88j2ve9c4guLZXhLqSm1Ghhmtm61duAPQY63VpsTxjyc7Ae81bj7W7YHo9fkP",
  "key31": "25wbhVddrq8N9DcMVAchBWWdLZLBFozeUJF5SzJj6nnCiTGBaFUo9UjUeJFdzXomNM2dt9n9SEXNXVh6qde9y8VV",
  "key32": "5KFwSJ44EZvSXNCXjf7Nqey13zMapANaqUX9HyKAjqRcgbQ5e7auCfqtVHr5EB5ZYCk7J1U4WtDnpFmbVpYDSWVV",
  "key33": "yGWH8CbxbdqBAZ9fQ5nKEFk6rurLCSu5L5Sozmfnh2VGvTwcegUwRFsHnxCqZpPzB4VvXbH5kbcxscUbdDNcL5f",
  "key34": "3XckLvrmub95GGPNeMennY95ug8Ao6f2xsSbdaU4dChjt7rxZE7FNykLZ5USXbwFDxWAgW6NobBLsUcCsp4r1JnP",
  "key35": "4qqdCcWHErWsWm5MQ7ZCYeCMceAWZzjEHCyQ1NNgPJxwgFSBi7woyKq8rADgCZRsbv9QXkfVHszPkjnRpnN5dPi",
  "key36": "39oZB43a14UkMeMFhB1G1Zp5CYvLJXmqLVqnUjWCSw7YxT8xveA7oZw4yDex9C4e73K1UjAA5y2ZoL5DoUq9XpXk",
  "key37": "5hDPhTMY4dLp9MkZcqSeBqT7Vx7SvinEjgmV9MNN12omyWbfL6msi6JdDTEiqtYhM6EcfLv7Yd5DmsqPeqvJSbkA",
  "key38": "2HPsdJk2uK9wyCS39x1Ar5vmAUMpaBkyX8uS4X9iBuDiWMkS1q7bwcQA4Gbc47aEX2UDPzxSi8wysZmoqKQzRPzz",
  "key39": "25AtMivRbD4mRVLiK8mAucmebVMKku2fysRBUjtYMhc9jbgtHiqtX7fCMGjb9jEKAskZWFmEeVmgsB2WLhTr8ujv",
  "key40": "39HEuFszujmdpTU2GRMrpA72NvEjMpcH5spoJK97LGupn9fwSFMW15oxCx9Qbh6YGeUT43tRFHJa5o6a9sna9cZZ"
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
