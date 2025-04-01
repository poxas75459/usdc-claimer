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
    "5iMUGSxm6no1H1WYCRtASr38Wqu1Rbbt4zw5BQTFe51Q98Cdrwd4yrp45R3c2gsuXwTSYnjpuHdxhU178HYeC2Za"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PTzSHoxZ3ZUPAZQG4HtRnj2CBnArn941J8pDeV9qkBEHpyYdQcLJwR4RQ41z7a7BDubAgz9s76bWW9uyz4HmAFE",
  "key1": "4WVziSUxi6GiMEVj2dJ162uZ5iypjAmQDMVtaYus19jVTgpZ8zKbMYTuLbuDjeqMxgYDqYWPiVKXvg6x3TRYUG8u",
  "key2": "4jdDo7HUnjdcKbTNhj9GGtEJ5EP4ZP5Krtbswk63vvET8dueNAMAYqEKcx8VRkhinsXAfQqqUYKkHm3mCmAcPi7V",
  "key3": "52rFr2PGsF7GiyH3oxHLVULAYgun9KvoHfQCRViXNL8HPjy1ZnCNYhsmvE3C5pQfJzb76ddKPKd4rkfQcsMF3QEd",
  "key4": "2WunYgjxzXmyAtuBSFnAko1fkRXrkkbCDXHowKe7CEZUHEBK6xautxHYqNLDNCnWiDt1qBxvc1Rd5xqeazPzUm7U",
  "key5": "4dZiFnaRutcTfAypX3nseC4XAv47SfpdGj4E7uCUzQrx9sfQjfY1Lg9KGEc9pxtJJx2JYQZcfN4CeJx2WfN3KDgq",
  "key6": "2TdVUWsr8TeWhqdgqeHzszx4mbWSojXRyfQgha7cBcPkXJ2aEGnCrHYBYV8dEjCG1Abo54b9dT2nzdy8fsCAGEXJ",
  "key7": "67XaDB2cvLueVxmXVyy7CyRnMPiFuWQP8JNuB4wB1SATzqnTTg6LfjSUJDUPb3W51NX5Jjp2omrfNhe7RiKn8b5d",
  "key8": "4LwvCVxoGmi2jWKzdoSowZhE84M7erbaeYZkAW8wu6vd1qy6Qic85mPAoreiUsUe5vJFKt9n6pAFnwBsm2m3vm6Z",
  "key9": "pLJge49CHSHFGrRK1zsCjuA7MmakHf3sZBAx9RQkaawJYWEZVEPynn7AcmbawgQSKK2AqmByXDvgAQ35TUSsJc5",
  "key10": "2tek7crJuU9ocTQfLgiLopN6ieKnAZCQ8UUkXQHjwMdNBKw2UA9DAibebH5P135YDz4mfFb72KnYE9u7dvsoXU15",
  "key11": "2VBs2TXZZsVKTUmgxwrzFvVWh6Mir31scRwQuAF69npMxMLDHRLhNuoecgBo6cVabscZ6jJnrU1SYRjTvoLQnhGn",
  "key12": "4yk5A3nzPCrJu6a4L3bbRiJXVQonG2rxjLivhPKQvLsPbFyrerrTs3MguHZ4MsjQWXYojZkdJvhXfVaAWXEAYfjd",
  "key13": "4cgevkW6bfiSBsb2vBBbM1T2cGdbLB1R4zvbVHUioam1U5q9Vtzgyvymzb8857aNjmhSGitZM87LcoexgSBtURoC",
  "key14": "3poUnnrN47qHxMKpNvPPqsYB1GsdqJrNPXzeCr7XJ4wzjSENLZLeJQt46XCdTWnEmTEpfSyFADYyd2oQoE8ZTMdK",
  "key15": "5JqiKasgSZDKtp6BDbcqSxmHrFNVcLUxZa9AfHv2BzBExkK1uuMoj6N8CoLQnscfipMgP2nkXt6iv1XQ5sLMzoyB",
  "key16": "64WQBbFCgkA5LxjaC5w7w62iT1B2RvRfT9dLBkBMPDqCz2CfqVAjrxxZoyNxm9cyqCcAoGvtet8yJW5RKBMxevRD",
  "key17": "Ls3Eew4LZZ8n63xcXWz3pYMKBNjvkCJoZTRyv8FvvqWQUKQhtveX6nuY8mcnzPrhZUTCNxMAzxxSqUVbUQzLFfJ",
  "key18": "5g1x8M349wkGbyJVZoBcu46xGMNLvVFNmDQ78Mz374N2HbAgZ5f64muMGJY4hW8wsfYdCpVkDiREDYiHBFPANPoS",
  "key19": "2ZKrEn41mXGcgNWXiaUQ1ruZ34pB4vESTGurZTYFbE7zfedpEWvxhknHe3RgGzMDQQhExG8UTQ2gXq4gn6tJuKnV",
  "key20": "4RqCkT7dmYwqkidpujq3PV6yEKEzq5kd1xXVzhfJvfFuja6o6Q4Bt8NfZLceYoA8uJuBgK5oPFsS8YYz7N3aee3Y",
  "key21": "2YNuLamcpcxEV6bPWNUVrn1NPrfnwrhP239MiEgdV2sWSzB7jmogLALGJL3enezdsgWQD1V6MYLzhPbtsGNnPsc5",
  "key22": "5DK23jwSDD1L1WL7EbrzgB2bqH6r7XikLADPAjdpXrPZzaVNBVF2SVzgW3SViJMzG6ipiFL39GN5aowndg4yMWM6",
  "key23": "44ShgH52cYhdqYhd7rZ7RQyuaVowFopJu81i1uhHAuNjZDSsTRLHzuYh4XazwMJU6sHCmnVMr4qvpGGDdVRw7obs",
  "key24": "4BsN2QXYJuESQh8ynGdFZxnvBmYhJUUcwvjjZKhnRZiKKAEQfoGGVKp2dr3hwcE7jMjYSLM8x7MKUuyfHbWnjGaP",
  "key25": "4eFQR1qFJV7ukaai7gnKC6wwRAquv4oFjTJg8QxsJ3W1CuKBCfjr1f1ijfrccD1u2qzaADFQSWH6YT2s1Jyv9SGZ",
  "key26": "3KPMw7F8BzgLg1f4qhCVzBn3PuW3wc8awzLxALZa2ptcoLb57p8BbqQwkNHHCripv5wAC1QkZUqh4kcrpzkbxMnM",
  "key27": "4YJD8RUXp16nZrcbtz8hA3rbSh8c8tUdGLea1eZTfoGxgoqCSti5A7zkAcxbQ1WucbDT8eWiazGNCVyNVknamwEJ",
  "key28": "3QLFuHRN9AVFAmAnoSWfBTVmSYhPyufmnx43tMR9PSiGEmdwZefW3B8XzGvjy4g4kPwc7jUu9Lxg8qjDteJtjrSZ",
  "key29": "2Yp8Wv21rx9m2mRqvAVfg49fQdfrX6BqHGxZ1w4vTGjewM8xznXbKNWXiUbsBkGK8E9jReAuJWeoMncf2KxEA3p8",
  "key30": "3VBxQ4S9zwyhfQ8kXcZPXDG6PtsaBD5HLsTW3PSJfCxJw7yx4P13YaakYxoQshjYnvhFooLDXWtY1P93FNiwAyjn",
  "key31": "fNbsyh592vQTs3zSozG5S8YJnSPChKKhwa2FhAyvMmBCzN5kUoZdPnZFByRxWMyFr1u32vDPXpdY4dNQKHy85Da",
  "key32": "4swGE4aiEjE24yoL7ZhJ74pmY7iDQbyaM1rSCK6X2cEeKjHDWzEMnTQcVekwuXbRFsL8tT8vWiMay5oYehNG4fzx",
  "key33": "64WifUZDJwXGmQk76t6LcLeeTw2JvgfXaVBystrz2BFF4D9TBGKJXRYjaPGPpM5HRcFozkEfkTi3VbfcfwNK5F3L",
  "key34": "5CC4BSgNchuoFn6inhjDTfMbXXtF2EikTp5LDnzzwLLCy5iSE5BY2nrwokHbKbrUjJiUdMaupubzeJd5uC2kmsRa",
  "key35": "3EDYnuZ5qDxaG7pqamuM4P518yukMX9gDQdL3QvM8xB39hpsiCkda4SWcBDDC461kLWreyKhZe2eink99yFhnTTj",
  "key36": "TNx161fhseKAjLnu7gDtrLzMCoTNzvezpaW5YFyehPfxwzjc7xcYMJX1Wy8NKYFxRQuKUvryYSL2UejYUo23h9c",
  "key37": "L8WpXvnoBwZgeR21JTWU3Hvv6VJKgCEyWaog84HCTpBPdfbcyaN3gUDmW1AKGYNg5HU4BedVG7VnGVgCR1eYseZ",
  "key38": "kkS5DM3dJeEthNonm8sZqiSoYwRMa5enZzFRn2Jm4d423n4zmrpkkocs6Jp4srxhjPNULB9sJ2ZSp1WGfYaf6Qa",
  "key39": "4KrE9xqagVoLjGZoRNAvJ4CrzKHM8i7imCRKqXF5EwzXRHNEGYEfXRMYFPsdRXK1bygp1M2a6g6LRARgWUFofJUi",
  "key40": "3cRA9wy9pk1QQ85vMBKX3qnqgAkKBzQpynxAtht9yR1VHXhvx1GQ8kJKuxcGwr1Vi8J8PHQUiZ4mbt2yTZviADQN"
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
