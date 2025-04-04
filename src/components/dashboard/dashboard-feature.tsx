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
    "5m9Dbf8asUESfG6X2Bat3SUEL5p4FrtXnPSNfWaYjXZqeFGgnnGyFMYfWLYYiqEJFMtoo7tsWweMqUSzd6WhSpZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QtbW311T5bSdXYiR3yh5xqzx2GbhLZ2JqL7E1544azp3UyCFCp9YbKWbSdJ7BT8biW1Sbzmi5X6D3bkrkHuKi5e",
  "key1": "JvnVuYZFvGovJKUPKZS5NPjJp52Mv62VzGMFiTViUZV59NT4FrdmTXcMULtNXDUD17sMcsTCTNY7rTYKHe6V7p6",
  "key2": "4gkJxFpqhTtDE1XCeKKrM2o3iuDq2MTGKLbh6qvta93664SH1Jg7FBAyq9f5bDUTVa8GEvKTBnQPUrk1er1EMwNp",
  "key3": "5dbvTF7Le72LafVNyjMJuLaAPagwhWWWQuuhzjTSM6vbanFYAcLfGqEDBVaTNZhsXHugxZy5yFPWef7RGZiui6Sv",
  "key4": "24MpQ9sZcpyc7Kc8oANwTTraTJ9Xs1WPDuJTDvBQiuSQ1vooHbwRqWBy7uuSHEX4C3oNMwvuZWxKVmzYngsjoW9K",
  "key5": "4rDjcsyQ7zrcyPUPtbTaxsQ9WyZKbbvYyCcR5EBVzaR24SEngZVRtRYuJ8HWTAHrrgftwp7JBVARsDHTwDqqf1tk",
  "key6": "3Ek8TDjpni7qoV9SZCwiQ6yPdVZX439miMuZ88Vmd8Bx4Qa3zky9iH6Js1stdNHZEfSZAYY1epizTX6ZqnWW8Vg5",
  "key7": "KgjPMtBTEKZtNscR7nwHs1tXFVpNeDrmAuV7SGbj8pVKob9iHwCBosgQkNskUZCaxTsRBQNhMLZBFgvemDqe5Ay",
  "key8": "2EusSLYWRzVWo1RjSgSvUZpu8423hjiDHK2KSoj8iHCUuGAHsmHqcrw7jkLMb3MPnkPMboV4mtQGMQoBxcS7CXgX",
  "key9": "2LKuDAbbKXAbZ2EtiikV1LhPv62KDPUKosZcKdJoNrAFvLyVvuezPDM3xPHh7PgXogoRBmg2dHKRpfUeYTi3EZCR",
  "key10": "b58TifgS3qGBy7Q4tYMxuM6boYUPAZ3zwVEnKHs9KpwhKr4sNpUfnN63fU2LHgjEENX2SHmxTL7gaNCyf21WfdD",
  "key11": "3fBxDohZWaGqRd2FKFvER3sjaFh9TbGQ1JNyFGS7nbnXj6Rp2aZmEhXAtzyW1A9QH7t7jpf99Pj2wBAkksEtjNqg",
  "key12": "2LW8ygZAGqNyuy7mJFpG5Bu6Qi3NmQjwAajHidN6C1ADUCx5vaL8CYs2ugVfAs7ZX2fAqWkpJyx1SNFAndW8u5Lo",
  "key13": "2mGTziZ4MvZWcCJbQB9H5xBxrEJD7NzJ31bRKioerm54b2kk5kHrmkVPXsbXYwE2YTtxgQ75sfzXyZazkdYycmx6",
  "key14": "5Dzmpa7EsJP6NBF9WvWZc2VUcDLesF2kBv57s2vNJTjVRtNKyxytSS8GQoe1d1ik6MScxQ2ghYy8Pwuznk72Zr3N",
  "key15": "49FUXdyiRv1QXJyVetaaYP5e7LoSt8Yd3mGtFqeoZNHstVG9Uvv2841pRSgKtV9sQvX2UJxwXEZwV6EAwoF1mC5",
  "key16": "9nEbkzNr8qviGWjvS4oMeZE4ASawXzkZZ3nwS88d1eEzZtVyjctTQCk81dT8py6yLt3VUoAmBbBx55XwdPogfrG",
  "key17": "53BsDXF4WYoLGBeTD4wyk2LEbjgxfbvCwCF5BvESYeLyHx4nHmj4aJXQuwN6nNeArt6DQeRvwS1zjY3Re1U7bYCG",
  "key18": "27kigpTn2CVnCc9WtNfguG5H2GZCKg85tEUX596k3jVD9XFUrmg2jzQxEoiB9hj5RNSpHB1jwAhnM3bZbESbtEvx",
  "key19": "38WETXBBaB9L56wdowcKnLYC6a92HmgsxBQKwYhECZkmNo5tFd8oyrEfAbwsATYbSLQshtQJ3tZ9T4qoM2FDAuS2",
  "key20": "4w6SxukrviMAipgLGd55GAPsFR9mxXPqvAN88mTP4W8yMFeThUqvDBFXYxQRHFr9XAXpaduFgxUdXP1Vr6r71eiQ",
  "key21": "4SKBvQuu1y7ihiJfaAenF5F5eWJVWZ2sh1iyrxg6ohw1McAhVCytCFJtLy2MFgdFpq5Ae1pbVGy3W3C7KPfA6c2W",
  "key22": "3MkQLAW2vm9Fc2GUCRP1hcvZbdqomndtj6vs6wfiWqbAFSZLZvsxfNpoXYs17Y22wuPMmhuMya7HirPZ9KMPSsAd",
  "key23": "5fS7Fb8eFvhjL3fzK24zAZ41AW9YyLAn4n9hXzVbSA8rDmchRA3h1XRfmr3iyc9VsiMarFT76kev7DCNRvTScj89",
  "key24": "5eFL5mCmakYSwPw6jVS3b877z6Qnxj6EsfoME9YsH5KYWa1JraFrbPxn36FzrjfsCD71B9a6oHh3g9tqw3ahjKFT",
  "key25": "62sB3Lic3BqsGB3AwLiAiroPHQpzz7Vap7txLP5ApWpmgQGxhAqLtVsyjaBSRDXSAJEZ65iELoXZ7J6vN5eiqgtm",
  "key26": "5dZpoMnfT3jFpv3kimeZK2t151dCwJFxF4Ma2JKE2ExrEeB73N66dPnEaYvH7ibZE2QWvbaMc2BMu2EVaUvk4Ezn",
  "key27": "3nmpZMZV6RcHHoL9ywzXfPNEimMUdemEJQxaYqtnfJrX2y7o8ZQnAz5SzmswD2vegptNsgzzFag82aLi7m29CGmp",
  "key28": "4AQ3288muRE5PuYTkp5Wb1R4LRjNCfiBTm2wgN9JZsryxG7HiHRUKHcFaR7CTDtirzfNJYkQLVGopswnx1LqiHxP",
  "key29": "486rvJmre4sDoLpa5Hrbb78TfkKQD1yEWk7NxqdY4S2Zxkgjfodihxk7ZSsRHuYvKoZaBeqaA2hTv6ky6KGf1hWu",
  "key30": "1HampsPbNiJm7H4fo9bp99cNYnxHEEYT4d6bozmNSXf1cFsQK1BVLAUa4hkeESb1fMHkjncuDF5JNH6oKmeS16W",
  "key31": "2cCU5J5VYzw8fpkpBsuGDVD1aVQjGE2GMYq9dDbEnjXu7qWSurjr83AkraCRfjDe4zozwmeaDbSNJKBjUiTZi59",
  "key32": "3y5VRUoCeX9xfFrA3WYneyGApsFZ8exbB93t4K8ocHX811rgsizkTLdJ4XTMFsjW5XvM6hG9wid5YAhDkEQSLMz6",
  "key33": "UY2Hnqn6oMy4SDutyKLAm2o7cp1mFfJ6J4U7LHArLro9JyfoVVsK15e4ytEEb1aNKR28uUSSiLNkNSoM2JzpAXH",
  "key34": "3KF3nyrk111a7ZzNudYpzzsfZr3JrBYhC4j4HK6fCPCzRVCgkBK6BuBaT27gvquXGwfbQErQeAeSYRsdyTBjmj72",
  "key35": "4bxu9jLkMccnCZsB2AtrsASH2Kj84ghCY6HigNuu3q2TzEeHvhrcbQHU5Mxa3kktWeSZCSLPWbR5Rnwnhr5FeNTi",
  "key36": "hTcceguaGSKXQi8Vkbc5tGHLt9AboL1b17QMrRcsSKp6vfbKq8SqBuNPoiYoiTKz3L7Jvp24xTpgLwXeGktQgod",
  "key37": "5TkmqY2iWAsMizQzaaDoTmxA1xzwHbH5xECtt7uhL7sLKEdU2yZy9Ayfs6BNJB6uaxrKUviwbaatW5r585V6peRk",
  "key38": "3s7eADPwttnVqMgcjTRCYUw3gkNfR17WWyLFmWYDhyCdm8uYEPe3arWWzvDZ9svtxAJVcpT2Vs3G7XgKkUQyfPHu"
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
