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
    "BhvKsphawST83DAESMbopLfR8NaveK18um9MDhqGJRmFBM9TeTCJxwDpECA9G5SxsubrBLPPhmHYE3sKBdnfods"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RY4vwo7dkG2czHWUhDBhVoPXDbLqfV1hkUSLC1ebS4onUYLvhsHgCoZKq5NuFgnBgWA3CQMXePC7Z2ASBVsYdN4",
  "key1": "epJZVjdgYtBAhMTCfcM7mFbqQ2HBSVE6P5ZHeatbz15V5HBP7dFRbYyNg8AcGDiTiMdo5rp5PxWzh8QrTitbCjd",
  "key2": "3XanjfQdvBuXpH7sf8UvSnSNKVHbDwPQStaeEPdZHNWeLdPbtYJeADNPWpRxVup5iQfQ3uC742rMUs42dsCJjPLn",
  "key3": "2gRKwXnEnECG3iqY9soG8EUNPY3hNnYUDL7uPdb9rePxE5JMQPYTKFUHvjk3H6oeREtTiX8VZpisdUpak8qU1nYA",
  "key4": "2T61cmBwFkEhTgaBqGVzytJNq3YQs8Grw2hshMEgrqG4db5PWiUrHoSs3ebtF8C8A3T19hm1pgR3Hx7bunkmkxqA",
  "key5": "Pgqw1okT23aRdxAsM4uGzBGv18Dzx3ihfNtFgbj282qDECt9w2S1NRfMCch2athav5RdKBaruwgB7SeE4xQwJsJ",
  "key6": "4LC2WNnMxZmHvV4FxUbzu9PW4cDVfugUxogWTdzVAc1erwZGgrD7qBtxuaGzBnECGiNqePBRdPGpa2YXivMdabNP",
  "key7": "2qPgjaxP6JMrcX41aY7gqaPmr28aU98HsbJA2TuW63qpeS3ppNRRAhmXoSuCAPZ6YC8zrWBm1zzZaXP9PwCVAUB2",
  "key8": "2MWQUoMs5hKeBbuN89L6xGwnLbrUbA5qnG9GzQQMwCWusXo7Hfg5MiQVufkBbBsnbVA1Y3VxEwpmHum6kCQyUbMN",
  "key9": "4sjGy8yzWFqnkUU3jGXVezco6zvAENESMP9KYeH5Fku43PqWvaHTFVHgHNur7wqGWMxSD9mHFLLRk44vGVJZw9MP",
  "key10": "3XtEa46oEJZRbQzcs2oq4BauWcXCwRwi9zhGyfKCYh89SAvLoX8uUbLtt4s8iDzWsf7YUGxPXHupu2og4cFUkcWd",
  "key11": "3Jgzfx1JRzXAb5EJin2rEk6KkSbEq178K7pKcQo63h5ucwBJkevpMmuiz3N93hMfJtzqCJSRstE2MdFcQtpMM6ca",
  "key12": "3zpgjzGSRSBfaRnN3SdGqVz2n5eQqteXVXWM4UL511KvqPstJTRMcRWR6NtnqihnahMoPoFeAsWfT1fFyQArfkG6",
  "key13": "4QjSqC3hWvfNjT3DQ2DpqCWPTQvoufff7WavVTXt4v9QoZJhxiQBFGm2c2PP3VzJJYZqHQ9BT17jB4QazUfsEhpi",
  "key14": "5vtgTdZeSFgkFsZoZ5iYFdPphhVbidXSoqiTYjZGcznBUdmzTcon3iHg5usPHH1Ao6TrKdXixYF8nYiEdTcc2sjq",
  "key15": "4iPveGaswtPBbF42wCrkydeEEWMBMdetrDfGW86jQPo6gBiXABkfAfayVYoV9hP7vVVaYoJhWqxiHuwgFvbUxLYJ",
  "key16": "2ZFWk4o6bEjZeNwzvjqv9auCX7aKx2NKLrAaqLH4voUAJwegcF1n2bjuMZwnMqBBpdJVmVZpSXovFdMy356qEhMo",
  "key17": "w1CWheSiDqaRCDwPeDvzBYu8EFLgkxZ8d9vzKa1touHoX9bcBXcUkREDBHAkWrpeHxraX3Ft8zrH25fLvrdo5z8",
  "key18": "4gdTjgRjmUVgYbSedjxNWqjDFtiiBBaWJkiM6BFyTuomwXed3N8uW9GLnoYNtaDxjCv2GVRwhbWQJdgtkj3fu9xM",
  "key19": "2oUuCg7ofKdhnKUmACB7fEkpaYdaWBRVBQ66w8jCGEpPmAdudFRHFY4hrCkaumbsVaMAn66eEzoiBfA4aTpM7V56",
  "key20": "4GGMjGS1G23sDx4M5apvHULgw9jXg9h4hT2nXen8B9LKRb81NM7CkeAgz3Ee1YLEifeHQeDhYTkTKoeGnNPcSGZk",
  "key21": "EPrBxCEoyRjShizBiDUUxMdD1ah6J8AHSU8LXHc4DFsgjFQjSqFZ8K2r17e8wv2DGe5d4FRc1yVZf7yAcVZPKpc",
  "key22": "5TN9ZNkXFiw2aFfE41xNJHMNBjYyLC8kLVerE7HtTZVQxvV7TPqbYWxoLodpsWdKUauowCmtsTQESgg798a9HzsB",
  "key23": "xy8zRe9fGgQqfUBmi9C1YtQU1vtq6b9pr4XYDirJQ1uVLj5XqVWGfcEmo9jkLHJir2rNhWsSXiwgGcqPQsfb67K",
  "key24": "3i3JWW3gzP4CBAhk9t85bcWncQPXzMR1NzF3hyqw8ZQ1zikuG4PeBrgPA2WtBQJUCibbjzTTK9oQnJoTXnehgqc3",
  "key25": "tzFgKhsqhcRPg5Ph5GsTLL6hetztSvY8Jm1fZwx4fzCAUq39Z9ED28vu91ByhuJ6sryBBvyBTN1EHsqtLQXe1jc",
  "key26": "4Tfy4a3Ur9vVMZhB3a3tWZFjY9ZQNd4JDp2zHFUbXLdL5ayV7aNX7tpA6nYDEigEmYek1T798Z7mzqM4XsAeUrbL",
  "key27": "JE2UZkSwaKzdaTWfKXZTbRK9Qd4MuF7XbUNHZ5RqSUDpX45hDSZdn23sNJ2nwaVkkwRx2PxRzsrQPCwT3Au3Se7",
  "key28": "5o3b4YBsJLpT6kFNzM8XA3mrvLMppxRpyXTnXRiGj1rKMbfvhLXKhfWVC39AfTRTpKYPAwVyQ3K6t11XLmEBdadw",
  "key29": "64Q7DrU8U5ZWVmiVRKuq8svxZ5cijdfgicYJcK9SCcyNqn9oGdYtTSFWFAA5AoFEQtrQTrc6XMQDtQai6ZdaP1R8",
  "key30": "ML1gy9vePtG4JW8ovmBFKcK6y2HKMUA58VmTtLq1R9i7yoLUcMayBYu75vLVbtJWCyYbiWEwCKU7yuaipDKZNBN",
  "key31": "4fFj5r3MneRBdHbCh6DJP5LmttV9AUuTntiG2bfKgxeQvpbGZdeKCxMLdCf89Y2VaeqJzuAgsEMkjiHm6BF2H5oE",
  "key32": "5Y11cQqEtuNbwzqUvBBh8fLcuLKme4AmJK6gNARJLdnumJ3BAaAoEkDJ4QW6DcuitCsSoYtwayRhRDSEJbro5mEm",
  "key33": "3Fz6yqdkeQPJFHLVafJnqDYD4DJzrgn66tKUaMeJcCt8qeyC9AKpmVtUPoEhgTzwLnCWyGH2mvuXiUDG8LdAZjbp",
  "key34": "4UN8VTQYhoMf7agjF62XkgGzFGb2JFRTRTM6igh64v1K4GiyFXNcKu1gxAzP3RDNzbHfHNAqPwxRtqfCzjMg6WfU",
  "key35": "5DpbpBFEYgbXchiB6rMY8BGCWFZbKY4ziiCkrWzF84BMmXzSsTB1Ey5JB7UDcGuRDMvq7fN1QtrxDPemXsPfKa5s",
  "key36": "2VNafgYqe5b1V7tX5CjS74jaUS2kmdt5rduWuRHzagjDaCF2KUoTFnK7nyB6yuzuDH1SSujyPw7VY2Fn9Et5LG7u",
  "key37": "5o96MP1Vu7APQ56sFS6D48qBf5rjB3XtcteJqecbz78oSJo4xA4JXttuRi9TioVxbtFfUYboz7pGtXhU5qN8378L",
  "key38": "5dEHJH2RCJFuABXaHgddJgtuBFwSEVWfKS4mG6uqKooYxB69L6EYGkSXp626hNk18Qq2AZr8z1Fn4qEbHzpWPWmt"
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
