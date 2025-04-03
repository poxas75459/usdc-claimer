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
    "5qiH9F8vGEHzM9LrtEkFvkhyUm46km7bHJganzqBqcpmJeEkxBjKLDCfLbh6Sbebb54iF7UzB1974AqsVUiU3K6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wzLNtmikBprKy1QaSJEiusGNfjKe8sqTqEYApmyEg6SPbteXKDRGGCw1ESMiRZf3rot2cRGXMXTX8fHrVm3HBdD",
  "key1": "3bTHSksi3K91nFERDJ9SwC4DKyCB1jfBriXfy97ADR4TQbKdnyjigDkCHF6ofhquqMYEfYDF7dFheormwKXESKpy",
  "key2": "3ZQm3zP8UCk7ysfPZZALmA8WPDscR4HCjSMEoRsAf5AFqHzn1hMZEYvYE8UoaDE5BSYqPzJd4QR9brq86FFkXizR",
  "key3": "5tTfVTTV6F28SRfBz4fFT5TgbiKgMwNXh4hS3TJ2jv8Q7uUCng6QjwMJeC3SGvRDG3ekug6qMhiHSChR4Hxu5pkG",
  "key4": "5Y7xG7fG9iVSwGzz3XSzeidB9RZ2jJqiUM5o3V2d5kP33LRBTpc9KYq5vQUBTtfNxPjxzSf1HB5STbGiKbN4RUgW",
  "key5": "431Ur7tgprCLPWSr8wcAwe1ivgZzkfWG2fq7rcbYHv9n3QCQdxhMcqF52yfdNxdKEaTqiNwQPCtL6HPoDeD9Sjfr",
  "key6": "2GexuhCTe6qMit5w9FPo4q6RRNfgsnUABMYsig4qrJUWKwVpFKPPQCn4n1MdfMuTgkwUb1howNxzvSnAbpPBkCN2",
  "key7": "5bqseGRNmMHAiicnhFKGKV2w3KB83tGb39XjkpG9PZeuWvyavUQybjWckEbzb76UVJ3n5tHer9q2ib1swQJKgS84",
  "key8": "3zaczZr5v8VSR9pngCJVF3ge9vfH73Rp59kxUuRkVrD3RzdQhXArb2jYMMRGm8cvWLuphZqGRyNtzZQe3KZyYaTm",
  "key9": "5abfnWhzb3Pfw6jWANsqVjCaUn7LGFifpZDX7PAqvhbqTy3LW6Ek9U5t5gbYTzf6WSv9Cx4oLomUyN1zwzpA42Xa",
  "key10": "2YGuCMb2hwgD1jFkDrbFSkFHPHceXDWYmXzMjiAEaYBmQB9wjQMTeo6maGzC1TyWzXP6tRaRMoqHpp6F9xVhnYfU",
  "key11": "4nCdkoA1Cy2cQAX4rMgcyxn81vXDGmo23zWsNXGghUgRqjjhUJVLfyvh4rsBmdp4dR2brnso1wTKmBrEzFp96xiK",
  "key12": "5ikU3kWUqhz39JGMGf8v5HNccx8WouuQjhzCMKGNqwtcYCABpTPyQzfsM44mN5z1wp2vFeQqWHM5yUTqyPa6pgWY",
  "key13": "3j4YjtRRrTUN1vFAK7wSDQ1BG2UkzX18FfFfabwuD4gKV76BcWAHSEFatcatgDDvLyHhFMQgtZSFwTWgm5LZUcN3",
  "key14": "3qNE4adUfZQzD4TPcgi4eFoKGoVhQsFqQdFqeW561LkvW4nCN5DndreynHsTnvu2rrkR74KVu5J9jBC4ZQqai79f",
  "key15": "2mMYm93Nz16vRrKZu7GV5swtEi5VWUe8asM6y679dnDxKNcro38VU9eqJbDonKLVC1h6fg96WA8pkXrTXerrJ3JX",
  "key16": "2LdRNB7MXvRhogGya32dLV3ZdxUfroy3APoB3UjaDhhfDwCZ2TQNThBbqNycp66myYP8uC1BdfSpjx7tRqy233fj",
  "key17": "2Bg8a5VFNhQ1oXKKAzpuCLjHw3DevmY4Mav5NV5aaHJsGDSzWa7Cc9oeLpPden2k75bLrzT66DgsDdcRFs4SfqNm",
  "key18": "3fcS668PdyJ6YcyQDpHviryYU3GehWh63i1bGkfJwwg8Q2yGgbYUJj2RwxEwovrh9chvTcbA3KejXZQXiqAiVbwv",
  "key19": "2jVySBVNJV1vatEUfZs8ZCNk2ZWW1ykFgEjLbBVP2mnKTz8gJannpJMFray6CceiAxtmeEyAcUvntLGRpdkeZKtx",
  "key20": "3BJvhRDKg6RjU4wbihU97P5ApPK57r5Ec2GBrEnXWCBqsbnxkMiHAXpwUxj2ri3WTYoQ5c2scc7RWmv7BfTnfmEL",
  "key21": "65KENjBCf3bTSDjfWLfpiZ7aKjcU7k5i9JbKFsAze6TdGu6tpbHHbUAyAgMXHQotrrVgJh2HgrGH8Vor9pKvUkGQ",
  "key22": "4MWYTmpEbes1M5TPBdR3Lf3kaHH3Jg4q939M2ockG3YZUTUmKye4strAb13c1gtVurbQqesvZdVAK4qA3xA7CyTh",
  "key23": "5bgsp3pzgxEvpxEbGS54WHTPGaq8T2Uvv1nzYFpLK382pU7QDPW6fEJUsTTA8t9TeE7g5MCNPJSZAjdapaCLGAyd",
  "key24": "4hHt68i2PJatG8SeC4NpyAgy3q2H31YD1ytMxz7NCoJBTTheQraiiK3BjDqBb8YLCK3svZA8Mtqrsk9BriCk8dsC",
  "key25": "tqKe3W1w9sXPMs8nD6dwSK6asPnF3ZfNGhyzzKxa6BRxGYoQAgLwp86GgBDATFk9nY9DpMKgqhZpNETvxWH87RS",
  "key26": "5MjJEv8mJD9Z1FjNnECWkkv1FPfEydN8454CmvCE2LBbitGpWBfMXoiTQpS62Jj8mqjHnsZ7cEtt8GKLLbefotsz",
  "key27": "5Qyw67VNENA8Vh63sLhHuspZZs4vUio6KJ1ESyYrRNPCxLitnCw5yJjHbbCM5apU13efQaEhaNMDZnTDsghFKFnC",
  "key28": "3vdDJFUKJwdhdSXzDHnSVun1GFk1r1zLDUMXnkH2T4UdYnbKUoyke2hZrxmyWZ25gLnGWU8116PybddL88K3ijhx",
  "key29": "LpSkAZYYuLfV92R37oxkyAXH3eY9pAwgcXPTPnUU1UpRHibmFRPU3S32NkbV3FE4sRx8Gmqpi9pdG6KvLRMujBp",
  "key30": "4yrNtNB5MoC6KRudv4wHYG6JC37JrDWXiN9fjrieR1M7zKLET2jiJZPw1kG2TZwakyEMhQrmoSk52VFsdEZEQ3sM",
  "key31": "2axLFAQB3nH6q7zX2Mw8c8ERJYBXT8r9ZCAzjMqjVLYFqenUxDjFehcEB3Y7uGJ8c6iz8d9nnw916kMVh91yozHG",
  "key32": "4wKj72wEMLX4JtmZgJFSCgD9hQW5MwJtGsiK6XYNwXHBxcj8TYPm6oXXNrbWbueJRmnaC8u9awgWRve6joX4hR5k",
  "key33": "5kKNoK3eb9C7uvG5KhRXpBxWdj8adVwYM2LrrigzrnnUz595QgQrDNrFF8PKZx2h2cvKh7DAjmQ4Df2vGQ9hUHCn",
  "key34": "5yxH3wm8qACekTMYwA5E2khqwirMXjQ2Eo69LR1XS55Lby6buBm2fXu8LUHJHrdQ3DHrAwMS9VyoGbMREtecbpiu",
  "key35": "39Ypi9bhdGqStRsnNTmSAmjhyD5YroDbzQWwq5jo3DnUr1BMezVHqm7VLm9Sb3Uv8fUjcjv8UmGJf4QBT4hCKBEV",
  "key36": "5MGsZoBPFLLoCRNnkeoCzRopWfMYBHkALJfkBY8YNEruxAr5MLcQq2mweGKPpeUdPR6PmrvHYoPyWtUQKMsrWf1"
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
