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
    "LT7iTDUXdXwhc62BtyFPU4Ra1PjtquJba7YkVof48uR9DdurPhFLjqWu7XfFto3K83NdDC5pvgm9eh8mnJwg4dR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R1dgBj4wdYGHmcGCdGyJBXfDbL2VX1CrmPQWLse5BGTDeof9LixrVCTFgox187FeueBnf1yTd4BgsUjy2QUAnwe",
  "key1": "3jvYXGYnjLaFRSCm1P4S3CDb3V14bDbDJkbweDwtgAEc4fv4rrcyuFuNJVUyE13Yb4gU33d5MTyJGSxMHjbjMcqU",
  "key2": "4uhgSN6wAJAfmLkX2zHKD7jV4ngF9f5GGYqvBBGazZw2oqyZvxQidJpb3csMrFA7wUroSe6eiStTaPXKJG9MXYKi",
  "key3": "4ksv3kVvgQze7pYWxKtHcLeQFDsaNY5766RqWq9HHFwxbDsq3YaBT2zBaDMtoqEqjdx5h7KzCdjbdZJwLHSTg3s5",
  "key4": "4yaLR1n7DuMqtBzurErGUQijSoPntNBa2vsmnr9fLqho7hCWW9WMAtSUfS2ZDx4QejurPm7QZbzfupPbBSJpSKEn",
  "key5": "3TJxHrHg73L56dfCLNFtLPVCeDqSgAu2G9JNuxejY84m2K2QqubXsj3zP5ARjCd5Pzxpo36Mz9r9FmgDYsLmj5Yc",
  "key6": "DqHNh51Dj5Ah6HVashJ5i3HPKstv7jQkWssPo36GY8gvydErnk2476biJtPCZyEAYzkjbtVc6FD2orbVN9977Gp",
  "key7": "4KZg9MRt3M1mop4Ev6atS2uU2m4zcXU4395n522VJ5ruBjVd8JZe3XXEM5CUfm1C2fjn5zrnga8m1859AY5mrLas",
  "key8": "5agovA8c9gzYv6Cvz1nb9YJxbqa7GYVDtqDZxAvorjQutBn3TP79KXzgWbRoNZyZ71GH79BMLMFcmUuHKxYKYMWE",
  "key9": "5Pv56oWBqyGLGSn1pnYNfUZgYLnSnnhmeWEJhPiL41A9PLMqHTjEYdASWW12N1MudmtMeMa58b7sxVhpNn3kCrqd",
  "key10": "5PZjMke4FAgVKxmykHt9RL21gt5Ai5s8B7qLw4K6zLsUgujRDYTWPcDyDthDLhBmUsykKrFzv4NKLpiG2fVcoeyV",
  "key11": "3Ux8MJvi8qXP8Z7uNtHJ9R5jrGoH8B6VzPy3rdeREkfi27xtBwwWQf9HdotZKQmdY3aEA6gn79V8KMm5SkJN4wjV",
  "key12": "3pS6FwEidTPBTsJ5KxqKa161RX3JRmUvvB1XLbpsSSo9KuzV54xrk4zYcXLSbKLeeVdTt6gXy7MyEQCU6JworKX9",
  "key13": "5yyAENcFgRLL9cSk3GTBqWRdnafoaYqumSoy9jH7A7YFsrDon2FKq21xHTthMUifuaG7GsyXpV8xrVyxeGCgcWAB",
  "key14": "2nTt6LTwNpeYfD5D6t326LACzw19jzx7ELebn156ivCUsbhaHDoBo7b7LZmzp519GBqQ3UwmxMRHGgibSE7S42ps",
  "key15": "31a4wYss4BLfm9wmHhwSj5rie7V9UNPKnQZEriqM3g9EHJXyJ9SQbW4mBKivaL3sSDLVLUw8uxVeSF7BA3oPbLE7",
  "key16": "4xfPjBk4cmDxt3NqAafUoiwCEbiLozWkRqhFRxw4sSLHjjBHjQPR7P3o84nZQRAxBksdk8E1Pn6Zdag8SEPLF1Wo",
  "key17": "2uXK1i3qoJgqRZ7PADeoAKv1rL5PzAX9o9BmHdHgone5ugGiohZ9hBMPRkJjRKpxnXjNmD9xKhvJeDW7u3pnQc3K",
  "key18": "2jGxU181QZucRkbJTFGQ7duVj9C7DC7kkQ7n4zEbCgPXkvkT9hZyLscynEFDHDMBusfhAQxhpdJ868kz6twQuwQA",
  "key19": "2goK8zbaom7QiqNHcJSyEdhBZcFC5hwULJbFWiYGqNZLMsotn7tZXHmWmr1HGcJCmUu3hUmTXLYQzNSDoRLPCgRP",
  "key20": "38YYoNABtZqhBwZeqoJKEFfAfAayET9tLg8w7QoCR2277TUp5fJzZJEoCJcTTj7qE5SNR579iy5Lp137aoVGtcd9",
  "key21": "5ZZveLzQQVbtiiGZUUsjsK52hnBwJ2L7iz7PaLEQNXuW1LBtJdk3FhD1kBGzsgQaHYT6Nxh8bCyw5MDHvXddtSaJ",
  "key22": "5T8WgL9iJ8BmvAdjNwDpkgTZ44J7cyAntvisJYH1HNgCjjemLVUxFbQLRgW55U1JHMuHggd7BrJszQ4i6NNd9rXB",
  "key23": "cDUxjr1FHSaDk21nNk1aRLENroa8ERdD6akAjL5GKRAF9N1KzzZaFdVQ5RENo3C8P1Ld3HjVtzKPozS5bX9RLnR",
  "key24": "2N2DcTwSuUYkMV2HbnbHKf5hRtdBzBnrjayoYPRhEWYNGb5krxZeRKDTNwXP8qU2muDuCprwmnet7ZudPdJJxYS9",
  "key25": "4W1u8bcEoWLQCqCSnJWEkYJKnWMbzacBrDt4XEWAdXErJ3LDebvFX7XERK2tC3z3xNRb1SKNL4ttqFKuJUQuzsFA",
  "key26": "czzZYBdAgi3foFkR566LdBgwNAKuhvc1qCfvrTsGL3XNCCxMqNhQ3H5toYMQATMb5doSMgTX2LzbSci9wsnCuy5",
  "key27": "2QbePibMEcqsWKZPpdmJYB9SLm33ERW8wbjDK9RM1AsvvLZtSvjyYALPZSTp5gePMihBF7K6jjxMXMCTB749KLJK",
  "key28": "27NHcRYuT71gxuMYR3mHs13uMVQpbwuBgD78rSD6C81eXiVnijxUwxq1P3gtC8vDDE4zv75cyXAhHxKj6YXRwnAb"
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
