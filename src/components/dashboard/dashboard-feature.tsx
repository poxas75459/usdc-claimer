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
    "3H5rFhb2cmXUD8a9NM93wkxiQoCEPVWuxyb81q1MsehneEr5vj9pPKvzVbtHZy7snKAscpywkdPq5wJR4r1poVby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4meNW6FUxP8ubYsme1HkovyDrE5eBgtT1c1eQh7QexB9QHGHvDaf9LpVzPpc5dkfFjwxuz4HRc7b22B6u4YhDJos",
  "key1": "2j5xC6TfWDYesVhzw25ERxbSTrgcvw4o8EtzkeZi4zFnkWpoaXfAXCoAtE1ixLvbn9qL52BFDHNjcWHJr6nqAKWu",
  "key2": "3ARfLvohMomJm7QkZy6mCM7EMMj84nEqyZtaDSirTQ99Uq1KSfMKKQ6fbpL8WjzJfZgBB4Cg99oMLVgQSipLgD7q",
  "key3": "4st6rYTjTJNdkKsUgABxyQ7cC1FvSTXudLQtBLpn4MdG7QHps7tr3GDB9BWhCNdLgt1EgN4sjNaGusqeDSqh8PkP",
  "key4": "5AN6KXpFwR3VYcMhbEb5mLddChBmqum1cz2v78YVDEqpkHVRybZEoa1mh1nL5E3uJQgR2SQzGTg4vexLBLoNqPHL",
  "key5": "5Ld7wTqwXjNxpK95oTu7hUZtdMTRQirNjr6wP5DwPu6fP7e64XE6PHVWzNgoyba6pnX3M3yDbsKyHaPihxpYSTQy",
  "key6": "5kLD6Kd6Lyw7K8Xm8CLyXEc8KMjLN1X2wMC9wTimVUZSRkhzDx4qskN7PLCGH2v6qV7Gw4uDD2K4uTXemgY3fBRm",
  "key7": "5pEWY8gtbTR1HotokZzohrQDC6ZPjFrKvtcpeni3Xnxd4N87dq9avHRkmQay2TFegpzLoVpu61W6qyYPdwta3aSL",
  "key8": "23g4Gh8diASKvb3W9AMPaiiSZukHb8E8DysVhhtzcLSGmSomjVDTp9GxzYSmyZcHjLZzx2YAPcYwjzQPKeS5NBgJ",
  "key9": "3S2TdoWcai5YLGEao6FsGXFmShrGHgLrQJsXw8SyPENWVEVjhnhk6rRfQwmdpFz6MyAbcNNbwLDKWqHUr3zyRNN2",
  "key10": "5GMUUbmwYVQaQujAtUDMJzKcLu3PBEFfbUxJcnunnaqUwaarT1HAZCG6rHUuJ1moBkvVs5sfkx5YhoPod9vkXiW7",
  "key11": "4JmPpWemJx6SRK9m8qwagwXDJbmmxM7zjQiKLi32atVpAKe7wtJBKqn4x1hUiMRPRt9pHZuAyZi3K42ZfVUv2SnA",
  "key12": "5bpYZTdrku7CDncj9ZdT68Ynsj3eB2HPwvnQjXd2oyXgqcJ5mWMHm15rRqjUjS2D4meNzSeoSLHT3aUhUPCDvbSC",
  "key13": "2MCxhuvxb1ojux3NgM8QwTytxatJYDbRZWjbBifUghrUfMi5E2KcbDe4YQg2xhUdwHjnYEn7yPrFqEyVGtSUCBou",
  "key14": "2oVvbKDKeBVcrHD46m692KPtHFNyE1Hf7GRwvWN3xHTLnwwiw6FjJdg5Znj6t8aYou6U2rKfYfehrD2dA4r1iHh6",
  "key15": "P33k8jZYpjKXXkwFsKJaJwPdvUw9MBCPcMqSFsv16RvpiBAjvrXRHjwEiPp1aWR9o4M1PpA2rtPA7u98Pohc66o",
  "key16": "3FGvQfqjvFZZchD9QfqggZUiLjLR29YYNG2LxHbhx1pgXx1LGgagrbz5Q8uaTJHBd2XdS8Rvih6CBpCbLNBJHhy9",
  "key17": "4UENLECjfWAzobPWKQ1qy6hDAG17DhBug5JdSpmwGBinH1us7jQ1AikSLQ8SzwpYKbG2YwBpSmbAaMVi8QJceaDv",
  "key18": "5xBdGEXhXhYuhdrUWcxy3sMvcmpZAFD8eTgh4A1Jyw3SwFLKjDqdyYAtp3taLRKf3XDzDbF5yd4q3dWJ5ynEBwwd",
  "key19": "4oynyQuSm1mPCyuE4QsJnefhVvwqK1P7BBovE4SVx15LDFqqUCvAinvHeNXMdZtuXb6wXaJSMhpXDAHxHYg63p36",
  "key20": "2TKkdu2pabWNgma5DEFY5X3uiwjEie5Q63mNPcMzzGi9ut494hPNuiSq1NL2xEcDRhbHNoavGgTjYJzmEVJWddNm",
  "key21": "5skTviVFdV7Ng9Rg4yUJuemqbL94ijPutdsZXzoC16C8cAwTweRK4pYMGARCYKrRgn84dkSiFHcPazH82HJNwoq4",
  "key22": "5oJggD3B9vz365G5zaXdDQhmeBDoyWwbXb7wy7npCTuKaJYETkci5KF6mcSrvmEsFiuVVzAzG1jkxfb69z1L4QL7",
  "key23": "cQRKdQZ5nWRHvxJ2NJpKsLqEigwCPnqHHnXMPUnvG8x1UcsXLtPaYPnJ3zTdGVuHZqY2K4TeHLBUq5ZbWRBpS6N",
  "key24": "2NobXkg5D5HTPUG1CrNm9HvHWdFyHLpVcr2ao6HLuFXcUYjgZwvaGnLq5z22UmnRppva5oJTUnjpo8Q1mN2rc4fB",
  "key25": "NvgKAoR9iB77MZYNqdgwCq1PZqXLg71bm1vTqnbquAxrKzoMNKZXgZqFcCJhJsyjTi9wJMJkmfK9HV5ggAP5ZoV",
  "key26": "NJecJrnd4ytniSaL5RQrTz3ZV6sdaJ8hVviZGosZfKurFbzK2Q6g38mJ9GWbE4X4zU3LDbQwwrxVBp56uNBJiXQ"
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
