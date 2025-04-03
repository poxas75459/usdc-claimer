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
    "28okBdkKe9wSfQvKDxsuzveWjnrZQghndCwh2FkjMnPmvwpRu7R3GRGeWy2TsPXJEE58NnKRgQ2CGQ2oSYT83aqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pkTZdCQ3jLa5BnhxdCNq9L85bkwcdwdxhNe1TqCpLXGsaqJYCsZWwnmqN2gjTCuggVvsWAGeHNSKPnQnXG6FD8c",
  "key1": "3J5M9SwSmRodHcjc4rC6ZnbRGSpJxm4fQk4xGKLoxUcQXbkqqEKgcpMq1Bzxc7t8M84eUHfucZJss89tzapjjGa9",
  "key2": "2jJY4FeX8kvDCKhpbc7678XqMeRmPEHViofGHD6supUsVyGjiTHFqPtiAqiDwQEQigDvyYSzwMgMuURWR1xxNmua",
  "key3": "66D3YXCaPsi2M2E4mvKF4qwnr1D9iLgatn5PYiFP6s3Wk7hqjv9D7N23VY7gyreYXuV1TBpXBTUYBd1gVAEG836D",
  "key4": "3oqrWpBe7wAztQ9N793sp965YwSRLzYPiJaVepf2e8bLg7LCkkZRDz32XmApmeNrf7yacj1LoV1aTcYFGkCKUTci",
  "key5": "3SAhWQTEtQ2tEKTWC6HXPAjmiYm3kgwMq7BpAZmNA6eUsVBfStWy2RH2b7E2X4AKejdXVvktWZ6i61BFRcSc9ZGc",
  "key6": "5yTi6gHVyDdPSmJQwBMeThqdVhxAfNfvVmbYut16xQvLFb9mfVM7NwUrd4WakGQ5vGMGrxKCRuMdHAcsZPDFxVXp",
  "key7": "3mWhXGM6hdKjUxcZxNAZi1qbJvHHUJgsEbVEV9FaPRK5tFef56HsRZZfXqBGFbdMAiXZebkhEbcEmZFuPmCM83f8",
  "key8": "5T4j94XFwEsmnCShzb7LwzU77kEeZhekWwHt14DqaGz4orRXMdR5gVWNzrw92J2G8SnwfMfGjgodiupYAH3noDP7",
  "key9": "3YCyuL3w5HESRkRsmzycwUKRRZcLxPDmU1uvYKCMRGtCwK5d4cRn9QndnsfXVxGsjQC2FN4nfK6nxt7d68MnA8b3",
  "key10": "4QPq6RSXAQVZeC6s5D7VhTH35L5kk6pX9RUdm7iHpxesKLpTh6S18crnZB7iQ7KYREyKG3iYTJdQWV1RFvVJdhz1",
  "key11": "5aoeQFj2YqTcR1pAXUDpiYvMNCzbgEom8CZ8pBWnhatLhrcGRw7yufe3LA391NqCn485aUPeDRVjH9eXjsKhL5Py",
  "key12": "W66ChWVH7fTdMiHyPdFCQcnPmCrZ2hvQNGKLDvtDtfNWq7quXyg2NwhaNCEmx4nregJNg9L7haDZyrQBM2mY4Xi",
  "key13": "5CxVQsCw9Twjfxh9z2X6tK7c5AaRJ111fepM6zhh3C3adGPaocbCwwBzpuqVjyEqs8hr8CwS3vrLUaSYgTAeZrYn",
  "key14": "8YC94L1FTJAqAHazD6Tk6aFfF1uyQo8HEMTF77cXbL3UraVt1iVNj5Wp2wd7w3TFVWhd5WsKvxFQSNTDjkimWpd",
  "key15": "2FgqXDRpnosVVeWzdvKyyWAgZkgbPtmpp9wrkZGd6cuLaJJMkwuS6jRWFjk4Hgs5jiz5CUw6SJrUwYPLd5Am15BB",
  "key16": "4bjWkuWNsHtq71AXVyGBBR1i27gbdttsoN5AL7MTJc9YFNTC4fY4jkznJBzResWB3QuZWrjPoRQxtg9853XPhjut",
  "key17": "5h6i1PMAaAy4KhdjGgZyonbxW74ZGdRE3xPSNpS3fRUfN9AE4p2atKA7TZtisALios2hmfHMCCQWF9aR4E4YZuzT",
  "key18": "2zWAbnoJDdZjFEvyt4K948wXD7J5F3LjCXXxANgtXv1jfxgwgjNdmBvd1NiisBX5v9nLAfTgjwYXyS3RYTs3HKiL",
  "key19": "53ChPdiwbwYvhaXwfVy3xeDhQW7CpbZsX8RfdCWkcW2Uw5oUY7YnhSa4XS3RvmmxPTQ1eLBCwF1gN8tSK3VvPxnY",
  "key20": "2UHsiD1fhZX7385v6oUwrU6Wp1XaXC1YTPhwXURMWmw4SVoUeFNarGTcHL8itAsXgY1vHyhb8P7q4wQi6UnQ7eDi",
  "key21": "56Dd98f2jL34egbXuh43jbgKXutyg1QQLoZzdr5PQivDUcFMCLzWRNsgK2JZs6NYN4TrELw8WWyXE8EsCkXmCyQo",
  "key22": "66Pw71jamv7Dj8q3ytnkEP8YSmUjcf2R7sPELRpe3M6Cc4z9Zjrednjk9cD6Z3YcxNVtQjQjU9LJwZZxfkAFd3hF",
  "key23": "2hVsoZ2rZofP7fMMu2VxTdjzJcXyHAKkEraXgpz96T76RAfVxkYPZS3gNU7nxENnxhuyiR4e22Fz3wjJJQfy1PAs",
  "key24": "31XYAzVX8LKfZC3qohGi6iPWSAE2o89h6p87HR8muJ28N1iBbhnHYrWzEu1n1ZJGsCuABjQh1uPZDRdG4FyJb7TB",
  "key25": "qX1sYjQPq1Ad2BGDEaUJNtbEafGxGxs8WXcV1NgWMCzjiAamL4hFqN3JR5cARmodFKhDMcKacume3Tic9YmYbVU"
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
