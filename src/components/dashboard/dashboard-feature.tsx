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
    "3qdvkL2PCySprYB8Tq7UQEXXAkXQH2XCJoZBgYRHZWvwtnWnuGJwwERwnQQ6eEmLLEo4FQN6u1po44kw39ocD1Zd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "291w5ppWmxcrdAGypQaWx2EBEVyvGkUpezqX9BwGzSiWxy5mMSALPCYFZucGMBrmZNSBjnkg4Ky1HYu9MQqeifYL",
  "key1": "2SP1JXoNdHhyrzonNN63G2xg8K9eD24u7tP3mHwuzVBxB6ennAcG1AH6wu1y3x9k93JStoTAgbVk8m1cF3YpcHWm",
  "key2": "SFjmeLAEEVAjUWtzZCA6MtsssVh5mPcGoVf7W2mPrsgfVa4eaa1ygxBmMiKzTLdqG92LkXDhEB2z6PVD9XxCdaq",
  "key3": "2D7nXoUMQ2AQ57gsPPZarYciZ47g8va3utMzWUnXzgaYJcLCJjYMACK8dTHCiDdKoMpSVvqccpj3aQVia1NBYtXA",
  "key4": "fUsAW5UgjpK1KbCp88u4p8KrwQu5hDjKt6Utkhm7ZWytZfbtC5kP7vHQX9qQxfvMdH4AxPYy1GhieXc1aU8iWug",
  "key5": "3HsPdhF7fuDQA1bL2sD6uGYULcsjwKy24U1q1DyK4zdWA6F7fVfc77xDPC7rAuLdUjCn7932sC5QJsBYKsM2AC7j",
  "key6": "52Q5QzmeG12wTYe8CgwpmK2G1xP9yEyFashScFmCfbP2qeHjx6CwnT3Ny2ke1P3xhJM1U6AShceVHaZ5yNDuymDp",
  "key7": "5veimjcKZRpLQ9jjTNg8HkyjZZRAXM55nZ1tpLeXX2ho2vqiMxJuBBdQyDBeS25Pue1bMiMPqkuoSnvD1ZquMVn5",
  "key8": "67BmPRQf5eo9uGsePVqmchgwpeMLsuW2sLZHTLyLEopb6yrcq2iGn4wwsQDUJS2mAxBP2dfwYE1dt9cgcAgrCkx9",
  "key9": "2BhB9t94YPDQ9q2fph7p3AMdLMXQ7gKm7KsxumGs7s3n5mGd7C4pYy1fVvW96hrbFXVNaup6w8EXK8bJK2wqqHuy",
  "key10": "2ybXBpCpP3jr8N2QyfVn4nNJJTmyY66pwnTBDWfD3T85J7dQDTzCmuyeZzN4jkSqfBQgRGLvNbrB8Pfryi7xW9Be",
  "key11": "3dFFfwZ2xUVSyK6bNP8AeAnQ9u6Grb2tPoWfU7AoKFtdPfrHWg6mBvkfzRmny78Ug1JEfV2L68KCdQNHW7D6ddCb",
  "key12": "4YMXtThNHtCJ5FbWAVjbKrNuB5Bkj1YNgZ5791qWN7jQYLbo3tNPfmRoXbPj5k3Zk2EsdJmbCpZNmEGjypGsd8qD",
  "key13": "4TwMeP2fTgZrqQnjowMou7fE7ukYKXxHxtkjaR2kQG6aoWQcTRkstuefpTW7cmP46bhVEh429mHpV4Ea8oHqZ8Rx",
  "key14": "4F6SBiARXWUJXwjAXqMBCSeSAiSofmUZ43tGpGHgMnLReBRJgaxr1wwznJnMefpN5YkGmPcZReG9AaYaMvyN6c1m",
  "key15": "3CE3JUW3GuypDpzgYeni9TUnK2LDosnADkwg2urXWJdcDB3DWSXEiuD5Q7gdin32zPGnLFUtuhWWvqrGAGnJusen",
  "key16": "5BwGaLkhP6LzX5ZgVsKNja1ksREVgyoGu6NRZeBp2LwZSAMAnF16ammrfCVUJ9qTxaaF2S58sawRwUZdM3ypWQUd",
  "key17": "3Hd7i6uYnf2CEBXuwsZF2A23PgLuw6xQrtgWGqPijCCBnnrN3Y79Df6V9eDWbU1WfYUM21wm8hHtSsbaFsFgANoL",
  "key18": "4jX9otntMKs2q2ruizwzCnJE5VxchScVcakWubaH6NRBV43Lguof9WyQmxqLw9KgQjJE79kwqVP1r6DHqyygGQsJ",
  "key19": "4kQSYQxJ2KFigJzho4W8u5adLTtzperbztkw4rff9kSj3gFsJDjYa8LPHBA955G6Af5SS33E2mpz83NQKddLc823",
  "key20": "3SmgTPCvBD9kUBNiKhcL1JYrgxWiQpz8bNwXxce45e5Jg3rjfHZR5u6CVJiaMeNY4p19a9zjHrJmuzKheTcjXQe4",
  "key21": "2Vj3WvVTgu67P9EGWpiRFBYkwTKzzEgC1XbkpFbM4GABhsnxxq6tV6Ge3NDgFGpLAJQJv8GzoVt7kM4yFEZg9yfc",
  "key22": "4qmMUrqMvyEficvTLK3VaXzeChNcm6zdxdLpEXkASkmC3KeqDbSW6jGFGUvhCghQKHpHeh8RSZsPz8Bu759BRFyr",
  "key23": "3MDAaA5yWv2ewXMNZHfLdjPAXRVP8Xh6ME9CbCaDLkH4R1xJ2tMxak3KRdsNRWozJFESfRgTgN6YpwaRcmTmCuaS",
  "key24": "38GVnmp8VwtHvktmEhWyqoHqdLdusT5CrL1TmzFNksEY5YRD2grvij9kn1CnGdrDenZnyJus3GiADJVZdGewGtUw",
  "key25": "3pSEJsZqByLUkqtkbt2WDj5T1hwbTWC3dA7T8jXCNGUvufM3MvGUw1K6kpjQimP3CrupfEmcNYXfhABZvkovwZZH",
  "key26": "3G62roMcjGQPFbf7T4VTZr3uKhAt6fMRrMQZdVKXUvtg5AJ1ntnnp9ATt4c8Yv14hqm5zUj2xjMUFWN262Vpxd3R",
  "key27": "3wBW7GpTRrTofmbsoFZUeKAaP8cciMefEq1sYEQcbcYJ1kbR7xnZWVCuBA2r4CsHQAoBfsqiQJaoqrCYJdz5kdjE",
  "key28": "39zKWwE2MCk2zSCx5oK5ETTpBiFaRZaVjrFZF9cuSZm5WGws5YePky8dbm1cRoEzXShXnLyRy3Yz9Suyxe5dzm3C",
  "key29": "f31yUzEkD7WepgSUgC2pQH627JuT3adkRgBoVZb5HgcKVMFjXNeo23jq6SwDnQmaiQA6GPmbBsy8nNNAxuQ4GgG",
  "key30": "5dFM6ouKyuP1kKkiE4V5T6LWeRY67RWPeP2mMyDwrNYxgKHiBnXNT5jwYtfnVVeyTkZgLKZZD5aXqV24qpH5T8Jg",
  "key31": "4Jyzgtnw7kqfi2oiHfnHgYHN4iiLFHc9eS9RRP5pswQuBzzTrYbAN73Z5kQUA8SAD2XZtFbBcUxQ5YpdfdZzHsbr",
  "key32": "8BriQZYUtpEqq9opbQbEmKmNwEzWNvybEG8ncjMLdxUkB45bUgMEfDbM4KVYPyKozrjuaWXpN9Q3dUF2Hsmy6DR",
  "key33": "NQHBvZGETtGunS8tUWAzAYZivgdb3iW8jPFEjZQKNYoeYeTheUveroSP8bUfX35CGUgtyQp57emBsFzv36qmZdX",
  "key34": "54RMk8tx5CHviAdafuVrYcghLjNRuu8QbFay5xzRpnZEKYmxx6ikKtaafFP8BvW8Dc88zYSdhESyiPRxpi2W5EBC",
  "key35": "Xi8Cm59YwMrKgRQrvcoQASx5MLjxcsDUKRgKkZU5MPu9qmciwTbgrT74dchn7ZJJtKEHMmJVWiZgmh5Z4JNSzUs",
  "key36": "TCbdQgUJXtDSrhkxXMEFAGqDMy2zgkXPbU4P2gK1fKJLjAw2YRzQV59aEEz8wLKvNqNhk26xQPDHUsS8EyB5faL",
  "key37": "4m2RCXN41NxzNvoXfF1epkdc4fuubhQcAPAadEu8D4PdfotuH3Fr1VD6eoaZxoU2dCLnQGPGjHRvGuEsm79TFKUH",
  "key38": "44NNzx7c97aNgmrfuqMTCgXppvrNVHc1Z7frzC7P6XpYMYA9kL55Qkr9F8WWf7pnwmg4RF6WnHMZ8vCPPQ5M9AXC",
  "key39": "5aqzZQNTBLh3LECyPhZX6S3w5hFi6YUkTnCEy9fXiBQgwEo4QN7BwUPKuzmMseCLsLiwTn4PczHwkaBzkUHSoZR5",
  "key40": "5HBpGxxiaQoBbRVUTq3Ea1o6VHQDuBPRxofmBzB8nefMcXmNXukrUfhS7cn7tm12xwHkG1e7hXrSLGq9d4Az52x8"
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
