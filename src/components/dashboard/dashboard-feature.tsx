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
    "4JiiriqBEJMMvvX8xUeqvV7gMEKupPkdBKdW77wa7Hae4tVEXVxiwXd3MJfq5NG1TrJGShjsjjRhWTRvMqUSfN6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SLrWM96C6fpST9XQbuUjotDhnU3RnC2hLMQeJoL4PHbiGjxC1Vjp4D5oixjuUVxHtQx5MRbeUy3WZK2X9wuktKR",
  "key1": "2zJyL2gEgPVUHQoqg43iJv531n1ajNteQFufC3RoVq7T1V5M8FY4ZrdCw8367ZbyoaK1tHsVC9Mm5GMrist2SdhV",
  "key2": "5mDjYr2KW8JjMVnF8BhRdGzJstMTyr45KgD7YjFz27Z1BRRDzkSjh7od1kMQrVTqR9ExxnqCw6FqVJcodq1dXnx1",
  "key3": "2THFpZGWV48kUXvND9TPyVfQBej5jFA8SxNCLRAADvtJZV5o7v8i2BYH8x1LUDasCc6T4cNZMLAuWQZYuQwAEaJ9",
  "key4": "pERe3z7aZdMZzfhTHwyMbPiqQQvu4GZE4j92dTqHrBPCv8k94xhqspuqFxRApvpumqXtLYpDppCi85dhMthJay3",
  "key5": "45hLhGJU3Yhg9sAgbnFBThVcKiXHDbvTuHzdBzsMd5gS6P4BQwzjzcMTCD9oAGR7Zs5cweU36veAW8d4bBaA3Z6d",
  "key6": "BbUGR1QfJvKAhE9bxZBPtGHUzhYhLqZ8VchJeMKm39uJ5HVQzJm4jWJ3YpNuw1NpXNeeriLY9at6XjMkkBAiM7c",
  "key7": "2HqfufEmsGXfQCjqkpcdsXx7JASk8f2QCVPFR2UxYsxacYhgfnPfx3hddXCFz2ffm2vuCZgiaaWGhZ6JCP8zGr4s",
  "key8": "2ufA49hV2usgaySNJapqCpy7SeBRYJhPo1UPY1aN55NVaW52rDty4tUsYp6xcUtXeekr91UaebfRPwoAMTRyizGj",
  "key9": "4RhU9opMwWDZSCakVhZLREs1SZobRqLf1hDWfJDfeFXFti6gvCHTPZGiuDZxHHnhRtf9DogWTxSk3MPitUpR6Vyp",
  "key10": "pqNS46jZ7BUh3fVem3AetVYt5inDVHn5Hmm2YgvFLCg4tHVD3BQezQFFpaPeXswgBdMg24rEtgMkhDeChZBSVyU",
  "key11": "2Cc6RNAW9pm3Rk2sx8fAtVsCvVnw6EjXEr5Bo9Y3Co6ddqED3ZMiUa69EjWZ7bZxKF7XcYmj8hVWGyHz39sMAdRL",
  "key12": "y212n5yyV3uLeTNPURjnjM9szkMd5y1RVanKwDGmKbQwaQnNRviSN44JWYoeJ7EyhouMJsepPx7Mutppfq9JoT6",
  "key13": "3hmP69FVmASPWxDkzmzQpSDzhnvozRFH1SYLua6MsopyrAjV4yWhkNMj4diq4MqHtTN7Q9FXxKCiDQnoDSYsAhrB",
  "key14": "4KdrUFcFtVZnGscHAnebXw3HapL4YEPE5N31kj5WT4ukWZQBzq8vSQLtVFTzYzNp5EcGWPuGjR9tnSBnizd5tLoD",
  "key15": "B5EwhVueFDoJE5jUgbWAe7ACJhp82x4VeNy43eVgEvG8HxYByejj8UnAzY4JSkckArum7LH6MvGkJiSJtHSpfND",
  "key16": "5YDHuhdCoNg8CPja1iHsDHCAGAvbg3yDPpYMjWmXNdbG6eGh3vSsM8o4no2zUaCvfSxe8Tuh51FwGd7x8yxFiXae",
  "key17": "5avpLvfRVEQYhy4D1ZBv42CviHiZaHw93U6KgazQcpmkuNyLaaTEuy4o5TjzEsy7wu8y1MpJ8h1tNtbXdXL6dPAv",
  "key18": "4RYAdf3XKXeQWphU9X7hMVsvfvXDkB4jmiwsVPTWBG5H7PuZDtTag9MXsQUdECrfXZQ8Et3ACj2ZGeFRM8bKoEJo",
  "key19": "2fg8tEyZr8aa7KtW6Nu5s3dzSh5tzLWsUV6eWoQZq1xPMuk8RwuYGdhi3HjZ89zWTE8wdH2UTiTYDfzeeiLPKqxV",
  "key20": "59x6Wy1qDAJY5TzixeEv8wrgpaKh2SqRf5BH3vRjMVf8ByC7mqb5scNz8m7xwCkrpPkYr4UTVWNCdPrnuBSbHPDq",
  "key21": "25QCuzckzAUf3zC2pheQXeJbbddHYdseJL6zyFG9yZHU21NB8X17SLUGXBi2LHE3yMiNRURyWL7PjsdTWgyGP8By",
  "key22": "3NT5t5XYdYEEcGcA6umbb2bFR8jZqR2HiKKLB6VXEdKJDFPRJZpGJKKRTgaVDhHGJHKyqCJxGCfmwZWT9hrQrvuv",
  "key23": "GmKxfPP6MpaQmPjz147Mt7iWsCXWjx1azgKvsdwmcx63ZtfPWQ8rb1RtqB3c7X1rQ7W5FKcnLpWUV6pxrRQCN55",
  "key24": "2aXSniHZJpTceZ2SnMwFP471ASLjJSPZbRQmA4sGNjDMinh9GuBe7zhtnW5PLr7sBVz8DJ21NyJPWWXeyPbFJsa5",
  "key25": "5YwkrjGdfmKpzUKuDZkMNBTFxzECptaPh8swDZ7hQv5RzP6F4sj6Diiaiq8v6vjqcsswiVh9q5N8kUKTPp59mBuw",
  "key26": "2Cnp8nF2HSbXgkedDbDkGKV8LnXUkhyPVuTcChocCv8qxwgW5QQ1JiJZj6hNvYg7i7zJBA9nrYWd1t9oEch1mVoh",
  "key27": "2kURdzZQNdru5yyPUZiTkz2xTLsTXMthn3BfTTxVFMKFaxHUi59VBX84YoqcJ2iEvAfyZUneEwJNmwijgkFWYfky",
  "key28": "5FCqCR5YHnjAtHQ9WSmSmy9upWNCCXFFRew1wzkiwFTXEwd9AWaAewMLkobo3W6t8bLMif4EjG45UqVrBZBpKdUn",
  "key29": "5SwqTEgH6NQwkdtUoYvESEgQERQqxRDHLvmezRjzXhhjucWhMp5z7HRgH9h228vWWuYmzh9CXsTHxJmuMKRUxjmV"
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
