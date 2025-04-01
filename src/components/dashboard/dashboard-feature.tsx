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
    "5jivdkZgwmxus6wLQxvXAsyaGbYR5KS1dZHo4rjj5Ggi8n8JNPVeAPcLQKdVzUxNpPTskdQxuHxzzv9vZvSWEQpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RnccaTH51VWDYa1zEg95P5xwfUxrwrciFWqt8Ks2yiZH1q4yRZG9HupPacn2ZdwdTGAVPKhC8zSGYsG9EFfsFHA",
  "key1": "5NMmsGVCWD1EF66PBPv37ip32TCbFSsx1pn83BfatoXzhVBwHDcY4nR9XRy4oTHpGyqMtLbZDSDaJvZs9CKcRzfq",
  "key2": "21kZxf5SD1RDek1v5q3VgdkRpsq6PNi2Ng3ZFboJfPKLvie44vViJcUzs6rkBf3mejJAY7FUqMwpU3UWsREyu75D",
  "key3": "5fL5Wsy7pmawcApvMqgxbfeCck1bzHstixALv6jogx3EiVASdQqDQfrnCMdAqFzNwNSEPWyarK4LufDgRcTPjJos",
  "key4": "2ktoQirpvLzW2SsJYSKjXHFkLGLkxnDuQE5DTJarr93F8HwyAFGGCpZJikGvesx5DcDrHfYh9fdgpsmeWHSidpse",
  "key5": "4Ng6FHoYw2Fa4LaWXccXbrzZUBsPm9r1Udrq5Jg6wzY9E19tqj7sPktDTxrHwNfNFmLs4iUuKbQTtge5EXPkZRdH",
  "key6": "4tVt4FZcr8kxFm6rktRCMQBoF49mWgp7XLkk3srGKBdDfsqYpNpKZPWN7c6JgT88Ei2upeqmbohBjJdgCjRseDQg",
  "key7": "qKc6sfguaAr2ht2NYfWQv7MvvkVq31K8p3JrV7nQV7p3Ujp3UDaCWbMcKhmGFPXXtGHjY4EcA4ZMCwEEe67Ckze",
  "key8": "67HjACJWmrJLsQbyDAPAmTWwi4FR1UQbLmDoj4QARHjd7bCZtWuS69LCoJiHvGxJ28cF3dhJ8bXgtkJb6USr6tVp",
  "key9": "47G7Wc5EMZFzjVV9t1zwgrLMy7CmoGp4m7oNDbS6tF6tJ3E7kSjmj4gFQhkDBr2HyGgbH8ykTqvfU9w2DjTE18ij",
  "key10": "24JtDJNfnGfAWzVu7vBFVAGkmSmH8PpEycNcWY2HDmhxz22N49mwKdKwTXECnPCRvTmuPoGD1qGuy262GL6q9Gvu",
  "key11": "3ubwgiuGp1ktt7TQsdGj3HKPoDk54kfpjSzqjWc4PTWjPTu9QH7qHQ7SkcEnasGrP42f8enWmQJ5g2ZCtb6pu5s3",
  "key12": "4qofYgTCw9aXp97nWggcyqekfRqYvterrHZA1gmp3KRBeb9x3PGBdnHDxi8iy4bh31BVWzWtPxkknAZE4KrjC7FR",
  "key13": "4dsXvQffTvdpeFJNVef8uCMoCNA3i5fXLECanUSNX5zReEMVToey2bYxRKi1xYK1pG5cGmEfmbx9VyUXPx4rB1RQ",
  "key14": "56R4Mn4mAggJ6Tke6MsqhJxKuREc8MZTrS2JQApZnMhnRNtWzYpgp8SzbR1dbQNe6FcuPF7pFngnG8dNZyVQFCUx",
  "key15": "3nyp788Z2T7eZmkGGcqkzuLgHyumyKb5UJWUxNUFwRcysS6iXr4bUm5EeYQszqrNe9S8AaaEKqQT2KYQXPrXdYDA",
  "key16": "259h7q18HZ1jytd6sFJVYFJqpHaJwKYh1Wwi97dL2SQGmkBVLkcSjGJnmorWLZxjWKVsqG2RYvsQMVhYYj5Zm5aL",
  "key17": "4wAStB4TaWK8iysTF2skFxZBtxEtubc4366WGzkmFewtWe4BwVhsKr7kBchLj3goSGAYDf2b4KpgnoZAZgYdb3Sd",
  "key18": "438GMRC87WqG9xc3DkKBnwbXCEExCR8F1JTJSZbYER9B7dfjoPQjm9ANtPjGudKmbyroNPiZi6BrhATiBeb3LDXw",
  "key19": "5hHrZEMTWqyVJXuprBo592TdcjVxSszQ9GbpP3BDKoXBXmfZSEusg4kBsPzf1wqFH7eTs9ypw3nuwg7phfaAoMRY",
  "key20": "5BJreJPHL4QKQqVMmX6XT1PgjkjZ2G7k1nnpJmd2rnfs6TTmKCXDE2KvdDB4tuoGC8k5adGNBHa6M6mG2xSwMHtz",
  "key21": "4bXjg7vdntPPLCYR7gnfrEc15V87KT1o7JUMgErW33TEww9GGmSv51vZVr9VAAxb4Fen7Rf9GHTZ1aNn1kaY4zbr",
  "key22": "jKyj5rxYDFbKKjqGTny6wSayANjQbE7UwAiTt6nJbN3uxmRFzo2nzZUoUNJtHkRE5g4tdjnoFT4QgvZWfNE9fYo",
  "key23": "3p8iQiq14k4MAHDzab8pkUjPwnrJpCBJdJZn6avEeqLr8Em1mN8t8of5BgFyTA58yKsP8S8HP3be1owC3b6k9977",
  "key24": "3wxqj4Z6safgbUm5GyS3R6tKnE4rDPtMtPTMShh3ruW7L15QZzupqrtDm2Fvrce3fuajXRvFtpzgNWrkeBx5FLuJ",
  "key25": "3KqPGsRqgfRin1Kw213RtWA9vm912YrS9pehgdnkf4DxHgDVcq7oLgckk8ZCVhqnWBUgzxXA92dMCfMwbQZf1Lqa",
  "key26": "4a8dPXe93Q94mzKsonZZT31ungNE8DomEwd3am1u7MMwufYoM62v2dh91qjzts1pWoUkt1jYN1RzURAvYBBgwnVf",
  "key27": "46arWu6ZQiLybaHjHcY4wRSz6P6MrpCycgStn797zyfA8XN9bu4CkD6eL2WDvppH81dLCUK2UAjVLBjSj5R6WfLf",
  "key28": "5jnZ51otDxLLmf7Re6r6Eot9k7TPeo1xdr6DbvSN9th9DuCSXUv3DtZXxvmjPBj7Eoo8fPYY1KRSm6uB5Q28bMqk"
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
