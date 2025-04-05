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
    "4KVaoyqhDdbJUovuEu7DUCDSAHK5vp7WYDUgLmgMFPMCJzpdRTkL2MuifcYkFL7oPhGsyaGowR9daiffayPBs34u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w3TKVezbqK2u4rFyBiRwKGBRQYZ7SbGmcrt222irZisVKNKMSgNDzyF2YGuupHngk2NG9keMvCpRxEt2sy89M2Q",
  "key1": "4z5EyvGMx2STifzGVDAcY8Zv8pxWcefWr6VFo32uvApGksxgfyABP34HtZpyssYcnonJXHgnUu5wMedJRcUFyQ8G",
  "key2": "2kmYCufLrTNB6GsjrL6fZAWRjWpg5fus5J6aehL2EwkLQ5swHnHU1TVfewf269Niefs1G2KRGP1Q9e4zJmYJsFLw",
  "key3": "2J5n4XXvWweq15rqQopR4ZtgdivkEUWrnJUCCDZYC9jpr1o655RCZwtFaRapLVZR1tNDhM7LARBPPWK1jYF9x3ZY",
  "key4": "4owekJLFqsaghQsJes84vqQAgh5e94NwDwerEJVFp8AEfoqaGzaB45xEtXBoJiGp4CT2o3eWGnynv5aXkQ7173vp",
  "key5": "4FPurJHVq9QFLcXLzNWo3kcH19iiReNffK5MgBAwZ2ZK9LrRcZWie6kKxjy8HJiwhKAdPqaQ1dm4LX2LLj2WnDuf",
  "key6": "2shSZyEUVgPkfXt2oi9K1AmtAqNt6SSezbxp5mS2Ab5P4PR1J3ZmmuBGFMeNhuz5kJPe8ejJpFJ28fJXHkp9TKZr",
  "key7": "fQBAT9onahsJ92Fj5of6MhcE4JTkwWLhKnANQM3Q7SuhfTk59ghXR3JBLsxvSVDqCdTreB7ha6TzdH7Z6r6hA6K",
  "key8": "3aHbzEsH7c9ifXmiAiVgH6hcv3R8y9cFR8JzdrwZrwr4xCg2BacNBNAC7fmo8p7aobUUegicGgEg3AW4n5Yto9iV",
  "key9": "zRDCux2724qdcEQbWz7jCQmktXhyeBTx7uRFT2JZstEHVAH2xL4bxEkmRZM11at71x5ukq8Y8Y67y4341B5Adey",
  "key10": "4bAhTU5eSDJCCD87xCMds4czcrD2MACSaNGmBXdahbxnKQUCjRKNh4AaNAsQmSESTXPZi5zHMYYNQvSn3tbyn55V",
  "key11": "3cBkfPnyZ3tZUcrNXWLNvCFqyQe2iyz53WbUvJLSMXBwFfE6F5KuLqBah9hZMJmh3DKwiLWoXrPGtimRXr8iqgbt",
  "key12": "2PbRbr9MuFZ3Qtrm8SrmgR9QeFHX4rLC385q9A56bQsuBKCdWCj9uXcfZA2SGszDXnKQ69CQseoBQnpbdUgPu1P6",
  "key13": "GZA6oqk8xTXS4eC1Zz3jMZ4GCDNeTtGA9KanAzLUTEoNMRTPGjY6Y1S3uySPraNLeBvYmudSQbGiczhwNQPGQvP",
  "key14": "Cnf7MuSuwqi4XvohWa7VdLgLZ5Wo3jWyhZGP8G4wYc95tzWaTkMzArPy8mR133NGDU3tYWe8gZzxdPk1CMfCkQF",
  "key15": "5qLsnDtR2JSSGaiXPN4PpuYyKzRnRJA5mfB4wjf2urQ5xMHEx4tSHqbBEo2PHgftm4o68uWQkuXCVWuuZjSEAhaR",
  "key16": "NT39rHdfdbXgrZNty7rp9rvuauf5XGKbxn4kdczKmzhuQzaEydaes6RexRXGnP7kvMSKeaU1pswx1WHP7G4bja1",
  "key17": "FGppVJyVQRPEcGqXcFAYZ4xNLdu6Duk1uDHHkYAcbKioFKksqv26agGe3zwfywEYaJPso8uzo3znvFMEKVE5Zws",
  "key18": "2rgH3WNbzJrdG2YS2Pf2L6BEc99FSmj4xxPXjC78wPbypNddRzHpABVg7hk3n2enUC7JCFhssgCajYTDJxzz6jFR",
  "key19": "3pi9bX6dPAExnptbqZ2VBjE4GgYdU1rKmsmtoL78ofPgppYkTPsqfX92F5pQsYoQpFj7wiXdGwZXqrJKRJdVo6tW",
  "key20": "8ZzRyT4AUygkD1zGE7BkYGnSiVGreHskGKK6mZQV9NFw9SraZdcWz9RANpjfF3s33cNJ2FbExSfWz4gXWTztcqc",
  "key21": "67S4NDJi1QSas1qLJPT5mLVK2WPcvBQysy12hnej2qheDs36PeTWB5sXRWf8tg2iN9WEmdXdJ8wKX4a9wzELQ2Z4",
  "key22": "5M3a7nXopGWrL6X57KjvJoqX5fbQX6AwqCeN179yXN4xmAuzfPjq8gyEZUGbsBXvbt4UVePDpsRXKGP9ctZB54tB",
  "key23": "4DPejFnHGVXrtKV1Z16YXYLH1rn5kRACrjarwiHX2YHRL5hwrxpU4frEnd3E6om8Aam83abBLsAxsSZimQMYddZc",
  "key24": "2N6NsGExwRsA2zD2DHe4jVGf6eqhP3t8fR13KUr2GXqUpeW5NoaiFB7hgzH7vy1inZ7c8EdFnJKE7kcwFhFbQrLr",
  "key25": "opnTHAqfNAL53pn2zdEie6ZvTuHU12oucaHhp1So8ido755bAw4pv8DR5vHS8VLE6tHw1AGoGB4D6xP12bsq8Z5",
  "key26": "5jj1BsL3GcT3v5G3w6W54SJ1dwDGqyHKrFvBDuLukqQgzKxghRkLChz3sUx4WGBVTN7dnhTsAri2QyyHWCuLcxC8",
  "key27": "4cE2a4Y6SdMvAiXtNCzDPX5p9hnEWqDgZapsFkZb6nZuZQ8rNPbtzejK6jEq5hsXUb5MQHoMP74TTnWLWfvW5YVz",
  "key28": "2sPkqvX3PcxB7BT5StRJHxzdnYE3oBhTLtDqmgTuRi7bm9grPRVwXS3yvUoimF5jfz3SZccih9XkJABCHFDogAnr"
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
