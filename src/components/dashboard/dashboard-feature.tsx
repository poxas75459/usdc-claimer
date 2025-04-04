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
    "4pn9Jk5jguAFeChY95Jdv4CTUEXRbsEXxuqbUomoJpSV7jKQM8o9mguy62kPgdyTwXUtHCcUG3dRb4JEQWfLth6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "riatZDjgEvSEMZPeNwVK7Yvvja1aJjJPhNK7h41jUuv5ZsRa2qVLHkvVzRk84daH7PDea8HwoSvUavTo3TxrYbb",
  "key1": "5rg4UKA9xRfbem8q2nrEEnbtkoz85HT3SdCzzhGLRbqHATouthhtV5xrnkRv7QZQANoWCX98Tny32x2pYNHSE7h7",
  "key2": "5xF44DSkwv4asnqk7yGoxQS9cLwYxQLuQrVLjUUSZw72TmjynWTEV5JZKpmArms98LUr5rhUTZgfkuimApJRaZ3Q",
  "key3": "5R1N9avu4mnqKvGiQbky3Xd966DWUEKtX4GUAgWtDyjxpGh38eSSWGVWh2qNZpBwkweWEmcGrxadLfJsM2WpoNzN",
  "key4": "3YH1d5RMxn5BAoWGJJTtiuMXYHWbHbwtKgjGUrfZ6f66TBfPGo3UkvnLBh19gb1EtwrT74qKu7km59bFRSds93Xd",
  "key5": "3ZrsDBnP7x8G6eRaSuTs5UqBoJNS3U99mrMz5eMKZ32gSNjhNBwxkc1i2TvJJThAHwZc35C75WGM6RQ2xKLo4DUA",
  "key6": "4bjfCgouVMRBZ7AYKT8Dwg7Pr7TycpxbkTigpF813vmECfkLSzDW4mWhUDGNkcNc9CKd7uqzS127sNL6Sm65Fgom",
  "key7": "5895ByqVaaSi7y1gnexN2KhdjkqMGh67puRA5sV1PZ1oddyZVxrzpYQh1xdjGmTWZzAt9erEpK8CZQh5oEDL9rBB",
  "key8": "5zBk2jbx63rn3VdZdy4xfeCpThPbkZ3E9WQEZCgX92mve4zkdBwykuNW2GmHJ5qdvusRpYokAGMzZWCPm6eMWrsx",
  "key9": "482HXHb43u18yHt7i9aZjkkckcCLmG3pwagB2a256xueRUL7E9YhsoRVd8ze3dyhhRpMxrfAghVmGVY7CDSTEwiM",
  "key10": "5HASunq4FowQURGsj79mVX2f9AsTRWwWkGa11g1BBEAdVBapJUNqisZ3ka3VNDq3whuimkCqsiYBwgyW1s2VHhEu",
  "key11": "3UYvDosZ2kJSUbxFbedJNm3tXNCYsovKq4kUJmsjVCRCMnGXkyLtdoBC4i4qsiufre3SPZrc7FomMmwbCTaDeaNH",
  "key12": "4ZDkKCVZPwRMHR3dLcMsY1CCwkHC6UfXfdLTB1GuW8SEyWg7i69nPjS4pg5gKeccLyj1a56yYwGe9kMKFv58cp8a",
  "key13": "2hfoJKD4QgqVAhe7APpEU9WwfASgFf4gQrGZdjJQWKY78T22AqrnDLrCmwguq1SnkwAhgBsmhwRMurMHRRNsuGv3",
  "key14": "41DVDPzfFLqkcfeGb1WEHJqoVGSjm2inSJHn3UKpXrr6juapiYxizvNAPq5u7dvmZo19NF3MmKNbUesrJJfdejC",
  "key15": "GVQNeJPX3hYSeG6JVqGjnN5sb1RRm8z65eZWtfjBqbkeaAsTZfgwHSRJa7PCAQD4DFT233a9LgQPuM7o4v4dRbT",
  "key16": "g8tH1jkw297bqy5MHottmPwbcy49yzd2VEkR2PmdFr6H6poYjUnbexWowgf12F4sTGj3JXrxgVdfgASu79564sf",
  "key17": "2berPvYbBsXEvNM34cRpg9dyj9u67NHeo7Yy6TXDkosfcFg6TnLHdEKs4G7DYN7pkfSDtwgkG3fpQAKVsFjBQapD",
  "key18": "5PQPjyZgyEWrNumCUykgnC45Ao6n6g6s5KKGyoYGCvSDSNVquHULw5s4XZCvMMDZv5oSqt95FW4b3t2ebtpPVA43",
  "key19": "2RGwT9qNAx1YMxkS88nqN5DqWERthb3pL7Ac7Y6P4WfVyo7eH2hRtgQDHg1shLTDE1HaEmi1EVMJsDdNdFHiTfw1",
  "key20": "WktGGrk8AcQeEwkbbSjEeuHrfAYMJM43SsuboiT3TUJGTH5XNtGmnQcPToeit1HChwqHBTxG3iKGzAPzP9wxE4q",
  "key21": "s3Lz8YTL4oVZctGB5LMMoXfRPgtj8fUGyjovU2Q7NhwTwwrSYvVbZ4LUotMmAsGVya2SXRzu4cqZTx8MzdpwMyH",
  "key22": "63MhcTN1xcf1mcLV7VvcSjGcw3J69r5uy3q9xTtG67r1Skx4y1GegvPs7D9xrRvbqH9Eycpd4Wqg3CuCRNsUPeTs",
  "key23": "5hGDvzaHXYe8igFcGe3c9HNt6rCG5Lqb7fFu9evJ3cwBWJjw4SensBNLAmhz4TPtWfUxbfngjSqtpHr9PZuhyv31",
  "key24": "5M465JuC2ytFdHron3pkYc8TeN3taZ21xLH4gdREYPbnKScZ4g3Ej3tjbxU42GHMp7MLinzefbUKAChXX5gReKXm",
  "key25": "5PKj4P1cuoSnyR6aXmRJxGXeVGYDTL8GtWCpGXDEpFNRE5Dz775HpZCc1xrkJ1Q6fJcbTWkG2YGbbFk6E21yWo91",
  "key26": "53F7Pqv2vwjuErrqzBYuvKpQsPiNZvEATFccCKsUmRnhy6jpfsVhvCoEbP1jAayJz7HxVw5nn8FTyrBiV4HCRN8J",
  "key27": "5vbePiijDyvvrTydUkCDcVWWwTJEmnKmyNrXr7cWhFeQ8ab7Aqieoe9pTd91xw1SFTL7ECYF82JXt5zkmmNBv5py",
  "key28": "23pYp7qqaB64GSQnfFBWQ6hVMaiCT6YzwqvG9p28mJ2ey2cj8hU6UhkSDUEjrNEYNNzvdEJ4gCsx2gR4dY8bLS9r",
  "key29": "4B9TAqW4YzkU5BuDmWAWrxa1DtHpVjT8T6kkzG48Y2aHx98qT51yuXSYwk7npmRTbXe2bMhiTqSJDT4Ucq1yB1Gn",
  "key30": "49STGMBEr4hK9k2NNM8Nq6zKoak6A1orWgkVtFqHJW7cP6gay4pmxT6g7oQ6FAifpaKoRgyh8EEXPNCWyyLh8nM3"
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
