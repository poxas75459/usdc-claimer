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
    "22MYPtDxkEzLaN52cCmMRnkSDnNPzfKniYP5yEwRg37SV1HkbLhTiDMH1NuzsxinMHDpaRGUbowj4owfmKGZMWSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MsT8q43mzGSDwURXvFH7oTsjjE9pfXTY21eLuqAsMExQGB1rSNH2n8yrGxFi5ebYevTu2Gg8NYXYDzFFKp3bHZx",
  "key1": "tgybStbGydBPRb1KJehBHdAPhFMWKLXRRiSdG7xGuRBZVBQw8C7kNA1kU7zPDFwrQQQS75YyxohQNvfUcFwfTPg",
  "key2": "4XkxBXZKaKhUjYXaFqndZvtfnnc9zF4ytSYYi2vTLXuXJgpEQX97gCcNNrh9CahtakP1g1NqMZKgd3fTUJUjTR9S",
  "key3": "5s8jyKwiJivLM8sxbe1PKWFq6ARy3To6VNgi1HA63GAqDdfB9j2jjTuWHNDUKen3vjQFpwkaHfypZAwFMHKaXpu4",
  "key4": "2o2x9dDrGPwGxkzUAYhLY9idfoncLQwwwvPuS578uZJCViiwJW3bJ8ERqpdzj4xg9KxN8fZgeJ2Z4JiidvoECKq1",
  "key5": "52xcUdrssMxLYA2DMaqKFaUkG31HuuGJ1fGPkBW1RwB5RQGsCL1qKzMPs4BMgvaFSkEjHtJ7sCtyoSmXw6oXV7x9",
  "key6": "53LqhBj7vugb7WjZXFbxhzSR4rzEEAW8HPCTzQ1W8AHWXZZ2GTd9kqicZBnGfG5h4v28tqi1bRGF2xPcmCKzHtYU",
  "key7": "4rgZm7HFv9NFoEq6WNTvD68GpxbpQah7LwSwPD3okSMpzudwt4NjCqGjJkAg8Y6jEYnC8TmfBqjztkzgrrDQysc6",
  "key8": "51wrLdvQ1DRsB2NggmLJxnn329b9vPEdfMK2kX5TmhM2E1HSDQibaoBEywg6jz79iJPTFjZMHPBQybwpB5bNmqr9",
  "key9": "53CDik8q6GNcA2VBKb53QGcLg4yDZvRRebZPPxmNk4f7Ampa1ViGxR5h3Aws35Ei2xnB7ALTJXYJy559iUsWMycN",
  "key10": "3z5cuE4gKfx1PisAy3Cvc3RKCK926tCypSdG3S1BEefqUin6bAESYXpBdhyBbb3Jh7a7N7fAK4PbbSodiX7QDKpk",
  "key11": "24mJN6E4GVQzk8GPosGpiDTceu8sEiHtwXZs9F1fotvKmhZDKcauAPiktKJK6Ezsw6EVgBd59m7vMEPLq7yHmrZR",
  "key12": "4ZENjKZu6PbwJFm3k4xyQZa9jJXxZAh3nWcn7CUWGWw6XZ2YXjRKXWBtZJnJggcH2UqkEejxXELLULiZS5uNveW6",
  "key13": "2xJapCz4BPTZ1FLxHj3AJQ8d5e55gaymQjKYRwNepDCMbunQmRjg3RYkgf5yzJ5GzcDwhYQ2v3YCs3VzgiqbN6LF",
  "key14": "2iMjLAqH9h8JMx1VkXf4e5y7SoiEeoSFbaJEhSxTEXaXQqbJQu8xgRQFCYDMtgyncHH8M8xtJHacH8VJaXEnznv3",
  "key15": "wf6hhvnaMegrZg8TDrP8kTjgAsqDjnT9iCREVqD4X1HNNwc1zZKS5hu24ccTmyHr98bG9MNV2je6X1mnVoGMo9F",
  "key16": "27s29qunvNBsbqDFfW3AQ8yMwsRE6TwjFVqnJwzR4thjjRXRkTmJPfqxHE7htEEv6fmzKyCLjYCwfCzveTjT5diF",
  "key17": "5uutFBPKFRwFmv1yF1mwQGtKMyXPN8nfjw1YzNKKeUS6NgKCgc1SMivEjqfsUihWeRubUQqNJbwRM5waLso533ni",
  "key18": "4gQX3dewXnfiBb1Nowh261TfEzmKCc5BQHAUdbgmW8bbnfA1BbV5ijwPqALY3vyE38XLaBwFqZwU8TxXBNAEt1PR",
  "key19": "4ngTxvWWJrLWG6WYX99EQjAxJy95Yzc3RZruudEHpAdGjrf8LyvdFuRYbgJViRDujS5euWqnFkLMeUrSRSN5NAfd",
  "key20": "5P7yjbkKqzt6gKBWLJPB6CDiSJDyXpmmnPxF29ETueQpD3vc914NBKM8wkCN5WH7vgpSxEQ52ojt6Geibr4hyvZ5",
  "key21": "4o9d2CzPLLK43zzBoEp6ysyRM4bkgFp1Vpm4isPBecKSV3zMK3jbqyWN7WdL4peQ95YQA1Kf4BxLZYV498hJWLga",
  "key22": "4ovhmz23RsDrY4ovUjk7UuHqsRbWjBtXw9zaXYvyiukZCvpWbjPtucc2zKcREPMUCHDbm1hjmWHPF2magQKyt4Yv",
  "key23": "49LDHtYJxS7UhwZHZNsD6jbSyevDAiMboK3EmaLrnfo29E86Y87tUTCtZfsFcFuzgyH4bPciSQsYevQTHC6dPEee",
  "key24": "aHo7WVACrcYiTrAqyUDUiAaf5H8cosKY8qB2WJk47qS8PBnhxYoEk7zy3UeYQmKJEW4GWbfsQxB3uQ3ndwiBYui",
  "key25": "C3JY1u5bfM7DdgKXjw7HKgQvQw84MwPh8TXVoFmDSHDixvMe3g2sDiwt4cgM6QPVNMhX3HaR1F3uSWPeiEUTwix",
  "key26": "5KuMMr7fixtXqB1RZ6uLqojYAu6u5dSYbkrMWzsp8REj2z7ueGG5HkpwjH5ijVCkSABrNg3rWCV2ZMN9k1Ak5Gg2",
  "key27": "5vBw1V1BmdJmVsQhV9bQ3rpkKKoRBLGY8D4DHov7UAGsPxRpkJDtMTxgwF7VWaLzqv4Q6i9pUwp8g3DTFaYJeTp5",
  "key28": "53UhYL2JbnrsNoFcxHJypogvAXr3TRJSXCMBTL42dBHb4woooSjTvQvzpibZHgSGsMYXf5uW5XVKgRP8ACg8fqga",
  "key29": "4R9BxMXRu8pVy8Wp1SBntgZfia3L21c3nqsi2CBqm6K3rruHVhuuM75bpdhRnnyRpGJwasQU7rMbAeCE1AZMBp7t",
  "key30": "63zfMgkVp5nCUNpUTrV7Ba6L3KjdET6X465Wsvn6RyqNstbt3wBrcmA15xUxbbr9mMZcoSPaUfY81J8yzVu8c8aQ",
  "key31": "2nrgrRtdWN8wM98PLATuscWvXrmR8hUmcrbBx7MnXqjxG7YEMR31aiFoqmPJSS5a983iQGDScX1HiD75i4yxJJnJ",
  "key32": "ABrq8oAuCk4YVXW48jhvDagmAWavMbgsGSKDgyUYVumKgQok3hKc9qqG7atW7oyVxkyx3QZGrmZxdGxcgwTXvsb",
  "key33": "r2HvsdFdggXUmx7h1a7FiY4bXKQuB2wWxGoinS7awUUvP59Mcn6V1dKtpez5ePKK7MGtUw6qjVJWt76kAx63VTz",
  "key34": "2os66TFPu4wW9N1TNfUSkivUDsP3mN2k9hu6XMw3RhTWqoFpyJGqAAGGy5DkuF1h4KisDwU8YBq76HMAmMQxiKnW",
  "key35": "2jDNBYJpWtrYbAEDMQDh1fwZdVYfsfZbiL8cQ7cbzW5pKCXeDV2iJ1hNBdjVDJYrVQpv8Geu8joJDT7Mae5Dkiko",
  "key36": "3L5tQwRZdcjDiUejU9JesFjaLbjDXsYavQtADiLdHM4FoCfpwYFJtbkctsDzDxSEjP9NxGXi8sWmUxh8UQDVHrtn"
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
