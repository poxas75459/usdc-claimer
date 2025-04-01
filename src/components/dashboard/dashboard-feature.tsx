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
    "1nxNG8VEeygn9N71yERiKmyhcuVx6vnun3XjT3AoEHMczgjbZ5iG3Szqf3wjVruztuhSuohpWxsBfdEhp89r8ZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eqT7WWEXTztzUJ2awKhaXy6upEMqs4k4MxjnHqKnbVVVF1eL7j23DYCbix5oif2NjWhrgq9w8JcYH4Qw4SAq5QS",
  "key1": "5V6DdNKzniHaKCsc2wdMtK1ivD2aNw6r2H4ob4JsgDn94SVpkcBHPv4DKGZ763CBZWC3DuLke47kehpVEgvi9H8a",
  "key2": "4YRQjKvpgsmJVPxMaZndSjsfxwNkbsu2CrvAkgQbYGkukcXegwJ2TdWQu3bfheFEUXdVr5PU8BUy4nAzb16JsZsz",
  "key3": "Ppkx6SWFKQUxouuWp1hV8b31UES8fPFdWZPESuD9MbxyVjzcFXi51p5SAfyRrR92mNNgRF9wtHqtBQGq2gDgqK6",
  "key4": "23zCCUB6b99fqjrXveJX6xv2uxYCXqNn5DxGav1JRSzFUme7ybaDshGv7VVJdnPXkbHFY5z3p7QLnfMnWgZj1Mrv",
  "key5": "58a9Z2QtDDx2c7TK5K3KWmoELsKfGpUtgFdLe4nN23Jswm2qxqiwo3w43oVqoQZRVxMq55BKDsPiPmgmgtage2gY",
  "key6": "5hhVMooQn7WP3B8B62gYSEiNcZfQaxpxkqdwFYNPUPSZwZJW7NAeMFWYbiBLP4CV5fYGAAG8EBbdhVNHrjThebDB",
  "key7": "4fHTiLZ3QnVZXFs9ZidCRD1oZVvW9ypSejfU2j3vHvKBKE1W3aCCorNYDuTCrmqziPMWtXn6pYzkNzeehYNQRhCu",
  "key8": "2KwHbszbbS6MWphzKb3JpAmmzs1qRPfj3QLid8GUK2yibz5mJYE59xKsRuDJ4kPZf9XnP6vesyCi5jcdxPxGau6o",
  "key9": "3fJFuexPU96pKahbGLgpF16JCwU6TvSdaG1NYzbXq5R2vMCQyVoP9LesVrBsFUHz9o6hShDmxggV6k9LC8319M9b",
  "key10": "2fLC5h9xDz7CXoXqQJDdqGJDApfDSjb4cwsndDx4DeV8CQHZb5mmvHDhQZVcjhibfoPoh2HkuLKUgxcjKUjfSqX9",
  "key11": "4XDG4jAyJhVHfwERxV17BN6euBRgkcKYrCfx5ZpqSDUzGft9S5s2AV6LLoGdbTuqJr5PVD6iUoXP8SKtABbqDoJp",
  "key12": "2C46puLCht8bmS8Ha24rv8XQ46kkm6cLEhC6sZZn4nAXFM425gRKcKssDb6yGULNNrjvTV11ymYKs6gLkV4k3y1f",
  "key13": "5XMMv8mwVdzpqgJVaq9EZYqhZg9BswSq5PPkQzzejuYJBC1vCw3i8zHvwxiFRPNqvj5ui5MP3GKWEHKPFajxg25M",
  "key14": "4rcomZUXnSKUG1c3wehTnGcbkZ9MMpgPAWSVZWvPKYhpsXmzPRwG6SFRDkmNHqc7YjCTfWpBeKfYmtPxaC26vykS",
  "key15": "U6N31huMwxQ4WdLXEjfppZqd3G6HB8R3pqNJzyVyQZn8oYUDE6ieuBLUXEJhGDTvwH4n57MeMdSUoezwjZPFvN2",
  "key16": "3t8ZaTBH4nGm5MvjNesqkfGaySYGRwmSEGEHPdL8Bn6XsCJBdnpSVVjr3pum2RNUiESfSrYo8Jmhuvuy69i8trJA",
  "key17": "4qm12HhMs1pQ46K3tTb1P62VhEDXhzNwpNGAsj96pYBnEoUCg4sBqXXAG3zz6ynxhUVhjhd4t1Y3spFzHiwKUDm5",
  "key18": "3DLQ2rL4zbcLzFTH4SHwJJcWzve4rP77XmHQGxWG8JhvYxjKN8Yc9RxzQX2h7wHi5Zg4QuGVhtizrbTrpew4DATw",
  "key19": "58kfdeEvXpwsWPBpXLioE1yFbS1CoDaw86eZbagTSiFgEvQZjNnBXQg3u8aKUA3diuwPwRZKmxGWN48xxvPLNnkG",
  "key20": "2oNfg7mh8eeE6xhxAZSmpdi9vAxgWRzgSPH3DEhiy6L9KDvWFyanVUnRd4kniFgqrFBXjnKdA4Vm9cRyBWmgpxEe",
  "key21": "3hQBteGWyNWNkBbsiD3gw2xzVJ9cnCT1GBnoKbQsUQe44NeFFpKaGJ7Zqn7iTW9cs2bQyNT711aymuorD9sDdoxr",
  "key22": "2oYUBfusfsLMUZZcEXC8iya64Y4uBF5tVzZakQpWJh4gfzCQfVLQLDySWgCMKwLtETcDu9usWwFPcFrcaWV9hxNn",
  "key23": "5xYFm5ZZYXwetoLxUS9D7V7afaRi8dKPWuogg8UDDZhpcL9KS7UmLkkq1txZr6U2TYqW7G5kYok8P7kddVEcnSYa",
  "key24": "AERUTKyRPK45FU7Lpn1cSZZ6g56PT2Mw8uMn5o8zpk7BjmRBekKjcV3sJGfv4U4xRNKzD14xia4x6n4ot2JuvnB",
  "key25": "48xREseC9fJG2LzJJBBLVN6me1LLwBbg1gexhftmQND6LsRFPE2YNcQh8QAmTNGPHrjuBRtLQbQf2QRAx92H4Lfu",
  "key26": "4AttJ4keEJRYMZC7ktNKeTH9g87PXV9tWRdMksbuRVXsJdn5m1NjTrPxJ9vKRKrUfgSPFXNtidsEGTUT3TzcYXh1",
  "key27": "2uCzU6JUchCCbqc8N5i1dQdfGQs89DvN1WEC9UnbXNatib9rMbky3qgddEFKi8yPQXctSvHKKcDv81nCBhV41z8U",
  "key28": "WqqzSU9g6aZjTVNaQRY9VzcyxrPcWpE8izoWHRDJon4kpzYWdC8NC2gsBtsuJsxnTLSJfrPNyUU8FA6PG9CnLq7",
  "key29": "36oCoDfjL3vwq9W3PLTch7DsbjhjZTjEJqD8sQXvnQ6tXt8o51MkCeQEmMcpv7CyMd5xLyrUu4EP9HwjTCw8uJvN",
  "key30": "5KGEFqxMA3DCd3ktQxnW26zDCBZ4jdtQmgBJzArWnhgkRUU8M1dAGRXHc1vaLxN1TEr3hYhc98VTfSRRisHgHj6T",
  "key31": "48229y6fzSbQGmp734xTssivm7BUmM5ss1XH1udB25F1HaEa3tmwJ7zs3UHpXV2e9aG91MpP3Uaa83nCmi51cMjs",
  "key32": "3iuPcw47No6PAmzu4N7hr4TaRxCBkngbGR5HF2FttxAEuU2deevM8qhJ2A6Kj886myszwfU2vY3muAqBmDGKDchN",
  "key33": "t4HzTbgzyg4er6AuwcT3z3L7H688LKmuiM6qzTT1YubD61Kg4RKxawtJJtY2tQh38Y1Sk8KLD8X7zKfeN5Sq8vg",
  "key34": "2RUkZPnGAv3qjGTXt7GcFKtfdxHZ5pA5CJPFYhbpAJxEqGH73dxuDuoY3kYe8cC4QmZLvJwwVzK8YjJqHghMr5x5",
  "key35": "5XYtyRq6ag8gW1f39hvNjzLK5kjLXLXES5pEiwEkCj2jpCoQZm9XQ13nV43xFYXJdM7qzepsgHUYJrU9m8fAZwab",
  "key36": "32UNc4VgPxqsu8qNaJCDcXNmDrqqLYnPdXJywKQXmoKnQ6PVkBg9hinaBVskANrC7CRiHMXbfLv1LFdt6q5XRKEg",
  "key37": "3MRLB1yhg2PpDfWAfpoGZznJu8yh89b1MU14oyvigu97NBwtTmhEpXf2KqwmtYhU2Ef3F1aksz1PwwMWKJm76oHZ",
  "key38": "45JWPW2uk9RVpRGiz6HZCL5GQLAciYVMKYNZYSVRWbqcb1cfrc7bGJmvSXgzKji1argEoRHF5qWBxU9xannHRGA8"
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
