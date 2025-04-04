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
    "4uh6cLtsGrNfSwrBgco4D5kW8xENxw4SkYLCGaooW3z7pSCFaCZ6UNjM3agyJ1zNN41Bb1cLaNEBudF2wcL44JVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WtDRKxEZnCrXcCWfkcNuovj6ogZ9VkuvFLiHN5QdqYFux8QVECpRfgP9zHGdpfXa7TxuDgY57Pd6Cphd1iyExGs",
  "key1": "5oPrroimusManFKTQ9zDnmfeVgCRrZCoRPE2Sdsx8EjLFT9H4gtXLPyoHRbYEoNCq5P9YdbhwamPqtNQrV2oZdre",
  "key2": "5hhPuZjSdyWFF8ztcJhtEJ7LNqfhtFKSV8azSpoZx5raqXqqbGDdUaca54eY2ufoKuHp966VfJyRCKBwNe1xYx8a",
  "key3": "4X5BYJchfioumHVMtFYLjRUDMGvpoktVAVWLKhjgKXRQxSAn24gzqSoCNd3AaUghVtQaHSUJrteC7Yb6toKsTSjB",
  "key4": "2HszF5xbh6YXRe5ook4cxa2K1XEQGVxMH6AtTMzh7KR55pKxp92kBKZkgvGVP6jW3oUct7NTwNGjXL9UB3dj4zzq",
  "key5": "5qGKwZeBcn5qFGwgeyCby79H23yW1JfgYbMaahQUEzCjKV6U7L56qLL4rfGBYv1E55c9imumPBcSHTaZ83JtsTiC",
  "key6": "2vN3pTHLQiDUH9UpdNAJCZvyifwfW3a3oV16WiUVq1BX8EnLQ8qdoLZhX2mf6s2rambsKVDERvmf5PjNd955qvKU",
  "key7": "3pQkqm6WDEFPhv57NoYjDbqZnEog3ZQBT5kfkN2RoCDVnJdCeNLAiZbioPfxhwpxfdaJofrfm28bsso6Q9aqZHBq",
  "key8": "32kWyE91mGULzQMEUvNyLzemwFieETpoYc8QKHJw5fyDhbX18vhn4hY6EaM6DeeAbRuGaSqr1HQdVN1xnzzVAMBN",
  "key9": "P5DwnRX2Uw4ZeYTHPzuv4AMS7giXcy3o1MpDPNkszE2vevWni7YmTy3jVCdtF4HEWLUWpSi6X1zjSSofY2WqQ2i",
  "key10": "5pNgVH9KkUFErRjn7227hrC85jYW3jDGcZRsbiH6kxzXbsJL4nW928n51DhTNZKo1gNnwHy5H1JgRLYjsu5SaARF",
  "key11": "31HYhxsyFiDrZToc2hrNF2nD8u8q4qMEuivY2UgXqJpXrFuiUNbv2VAp4o2PNKGCjyKqwYBsi52o6fpDcS3Fj1VA",
  "key12": "4jTcsFTtxJPNmMPmWBkf36Qi5H2ug3Jqe297QBWohbjMzNqRU9TRrV2ypBBXy3wRY27G4hAVvkEsT1hPKesyTCRX",
  "key13": "548Ym7zwqeXn81ze8qEfHecJR9GwvL91nLeuX5JkbuqJJKWuMphQ97rHyNGibgSfdsoe26oi5eJLT2na72e33op4",
  "key14": "3Dt7TBoQWBbZoYUriq5fsZ9AkqM58qTLpCRZfDZ8rV64djKbj8VSHCzZBinNWSF9g9zGvHHnsSjJjxDewZfvAUwc",
  "key15": "k359DvApQrxYRcQeC7ugwfVU3mFiHqrCDCEtqRJLFaiWju3wMFwneqPY4t6vBSNnFuy9MRVYQ4H9Jwzx6kYtmG1",
  "key16": "GbF7xLWgRgJMH93doC4MwQdkVkrSV53edkTvZn25fV1HsWFpUTNCGboc3pPRyfQnAYmvriTLMfG2EBw287peBZp",
  "key17": "5UeLufpmXs4LPGrUY5iu4QHCzFRAU2hZdEsXKUDymm3jA5axopQXNyQseA5fV8ZyZWvnjUuLYK459bz9nFWTYD6U",
  "key18": "E7Q57QRMojTboFMzZUdYTUJyTy5eojnTP3g1MbPBbUdmArUouwZsxtn6tN9WHM7sVJs9tGpL4zMfRC6DiSNf9Sj",
  "key19": "5XDEaCAbRWKNJbzzBSVgeAU3jn5ygeCXyuLfSrumTZBh9UzFkeP1CLW4VWTyCDx68ge4M5Le4LB6gbwfdc6XVLbG",
  "key20": "4zzRaXDESLMA5H8zpw3himzg4mh8NioakmA4exQsgLDgaBz9Bj3uMDjm3MRfhjLuXHG7Srj9g9f2bRyUpivCE71i",
  "key21": "BzHR8QK39VWZEBk8UDJzBKr58Q24e4JpRnMKWEdpv4SszPLDaB8JTCwSzYwMDrYarQjWatfB1MBcXtGnisnyz3s",
  "key22": "x8X9CGzfR1jKNR8GUnYPLGN4zFqMvBa5vxpAWzT5SLGPwfympPWFMHoCfp72hQxYuS2ZWPwuPcHAA4rB6364jq7",
  "key23": "KLFrf1oD6Fz36rj4VTcxgCZ3GePizzxdjEo7nhDR4EAKt31vrk5JAZcJzisJPKC1gSoGKCrMV9dDKSu9nytyh1E",
  "key24": "3M3RVDGxQpPAXdFqrA3zq5hyVkVrvop6bttd6cfS8b3r4dMtxGTS3nyq8fVNJJT2TTbzgBCiQrSYoTVPwJNwEibm",
  "key25": "3ZUejMWbN5pQ97KwNuX6xjLp21fA2hZZxBgJFhCVvPhEQPVdkNjR5U6RKfqR8YTZy2dMJCCovd74mphMtRPCz954",
  "key26": "2qaC3hzPXK72LEcj2qv6mMFpQsmTYcmCRFS5gyHJjVtERQFXhJ4iFNJeUangcLsQJZXWLAhjSdN3ob7UhCL623mD",
  "key27": "3Taabzmh7SSUM4EXLfBXTam9aRRaaMtXXJpzxsmu7oF9967c1hgMWqQYtfYmMt9FJURvFvD6BM5avJLLGM3J8HZg",
  "key28": "36V22W3ruRBFJUu8CsQ6ud2c3jVvNk4dqRRZBt9o59yU9mmgU1RE9YUzyjRWmSZFH4vEViAQ1bNPiYbxKB2emwgS",
  "key29": "2ZCCbFCrZB6wpvE4ukA6o1z7712oAFbZqnRRRWqNwwGDWPisTrQKGqLUVE167ChZLK5z2zsJeK1LjoSctfBcqyTJ",
  "key30": "2wsqk42wMJ53hSvAQvBEVeo58hrvv4hEohgmUZnyp3dmF7aCvhkdQvu2nvxrVskQQsFHvwscBy6Lz9jLsV7yWaRK",
  "key31": "25hs5eH5voajNzs4RB7cvGNvrHNKRHDCvqfeQV2p2bTkZpy1CcihxgpiTFNy2BSSumsjNAaWfvKMpmnkEh3GffVe",
  "key32": "5fLckhWXvuo9R4p8JtyvRmu6Y9qCdzuA7DrdLSXdhSGEqiXSUwphgua2jEuV1CijDaD5y5LKYq5tcqA2SjVbeWjS",
  "key33": "5q1une9Wjos1qAzXa8XUeYAeCJsbdSozRrULmR32A2v4wsgmsA9YZoL1VDScDhKX6EqYNxziSKDzxEGVNjd5LoAi",
  "key34": "3Hb5XhFFye62jwTFfEHFhUQvSdbJ2hyuNyobfiYCYKnJbGnqKRw1t3QGmBMkJmwjZuZFuAGfhBkyyLHdVWgbzB24",
  "key35": "5AknKmJ947eE6H5RWJca8hRgJGtpqqjbnhBukF4FNPjwD8pnMZSFJgExd7EjRTznnbHZnvvNgzzysrNZXYU8orWj",
  "key36": "5Yo72dj9iGqxpeumFjrTmrb4cbYwVMGwg7po58HmHbWr5xkkJNpws4pwwuZJpnyU6LBYvA6i2rYnjrWSWLfm956c",
  "key37": "42tcXzkxHS15jEZPGoBsVpoobp4Va4mVqrAdBki29BqVyCnYLEJuFpXN13ekj3Zb6zEjG4WFniwcgSD9YxM2AQCp",
  "key38": "2eurr7HcNPHhhCn25B9ZbqdQR3Z8P5qPubDuPUtEgQX96qACqcKLAXYrJP67qe4QtXoHrXYr3Dg6EqWFoGp8g1xs",
  "key39": "61TjssrLeNz8Z7PHTjuv4i2N6cUakvBq6iEgVpgQcMZxa31vPgqxSRxMGVBP14CyQvYdry48JvZiP3Z89R1sWVy5",
  "key40": "49tHGv2UJysSVfLbrBs7TqB2uW6aH15snjKs2ndwvnMHF6YCmoiFjkGfTX6RVAKmfnkeFQ96GegcF2LMzTnTDjzT",
  "key41": "3hZwKfZc5afVuaPWaQYojaksjqbygM1tQPEj2JNq3PUDizsETwwg83aj8ggvXSXmFADEru26ALFvV7rMk8RDFsZ5",
  "key42": "4jzMB331ziEhrcjrKyHyEhRfX6C6dQck7L9Kux6yjQ14RfyqRXQwceRXGMyxca4SVFdeLAFb2wQ39ieoGXBJXa6r",
  "key43": "9KfnEVFQAQigu6abxaRNYNfhhTt6LmKbeBJ9qwYUYuXrY6rNRvuuawXdEj8u1GHUnuv6Qe2XibSJLPasV2Tn1FP",
  "key44": "32sdsn3v1xwDZ6efoh2xD3KiBEjDHLGzWzHQd4y5DG7vkJQpN5nGyFZvPkEMwBQaeTxKhDeHWxSVUSnqwQAufr7D",
  "key45": "42he4GnAJiGVtXmUR1sWrJGKqhrttDRTMQnPRdo97T47YMih1pQVUVW9FpDYenGX8QxAYepApeeE9J54ySRLRf77",
  "key46": "32obNPVM23ubqpAK29VWELwTSZfRHZJhCtNab1iXHepasecTCPeJ6Hu3MoS6n13HUpshoNPKZ23zPWQuHrko7dtE"
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
