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
    "d3dGqSAEUTfgC1A2FcR4FsJcd2rP4fsgwNicGyzw5ZCiZhEuBtNMcTBzDXpC538NVX9sG5bB1UeLuCK1mf9jWvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Uf4VFmTrmYt5GXSETFtSVb75V8y4UJanxG3SBdNvZoUpDRYBFiA3HvKvh7sqbAEmJ1eLKC3cSj94iSYuZ99Ydo",
  "key1": "58wproQNpaEqGs1cL5wWSRP3gEjtTSbytnEfccGFzVJvSxSKsSiwfHUkCgXCoUAcxmjxiAsG3xHsZYZ5PtMRDxYJ",
  "key2": "3ZK2nniRrJc88qq3SWP59a671G9cg3Km5SVBoWty7arcRmU3AzQLjzjN7WxityEPkBkzVA1JTmkj9NcSYTjpUKjt",
  "key3": "2ohCGF5Riyn3uY3p7UBbzQLcGGrKtVpXQvKuYrzvAh489gYVErAmdNCiYq5Z1nW3DDnYEW6gMz6DUkfqug5ZpRbM",
  "key4": "22iZ5tQeq2KVNkgtCWBASNBH44LBYhDv5zkGvBG5S6sgC1qdCwbfc6kMRwjQvk5K9Dnoaz3RVYF1kQoA5VnxjG5o",
  "key5": "X87j1NeX8bxHxpCQLDPFxAEqbrvmSPLbqNefpa5ss1TMm1P99rvsTQQSubyU1jSfqoGM4QCGcnviXbrdXW76X1W",
  "key6": "38AWimvocF32ppSs7Dh4EnHfsW5zVBWxjFUqYeyGBeZGQ8qG2zSwPUhUgK6VQVdWHusJYYJrSpf9jKmJhdSzHGqm",
  "key7": "4zAUZ82xZUPQXFMiw4eVaXZurEKq9T2dL6ESFvBXpj2zPnZazxZShGHJ3pfKFjUqhG3avD7pBnCiZ11mSjgdEsDK",
  "key8": "2E9xYZa1mowqkYWhmq1HGDNBUGRp3bhXXHsriZAbKXk6nZjtoJNdmpi4yLp4Do3Seocwv5GGbqBhzCAR9NYFbPp1",
  "key9": "5HMuTwLyYuNpQUzBcjqrnaUnm5wQ6w8uVfo6LL51VVokmazA8DZiw1bmwkRQoF2W781dM81zGDrG458T9uz8tbZJ",
  "key10": "WB2Z1wVsJC4chj784oNTNYbTT1izK9rCEM1fMUnm1avzmVWH5P5DfR9bz99gzcqcUwvKeNmJJx5GYTyivvXEUr7",
  "key11": "3XbNqJ45tKty1ch4cU2jXKPSQxupL84SfMTqhYnjCvbEXgB9sGFoQBPiBzr58vCsnRQdkEhYo6d5UnHN9Aga2VAr",
  "key12": "2TCkDPFiFztuYZQxgv4vzgn9Hw6ro35eMwFk7eQdYRcSA14vZPpgtiDxnKoxkYqGFCHZXZKTcQCHTFgjGvgtfjaQ",
  "key13": "5t4YH18zSMBTCbMEeakbhrJip2iju6t8hFj5Hb168AtnZRsFEjdjaTgfYhBsXSRsGotVgx1i1GyLL27esJ8xKWe4",
  "key14": "3UWBfPSjiRbvSArijVE58oqqW79Tz5ZdSYYCdBL52nm9FGDWcGZL1irKXhQDRjgobXGi4NnSM9k42WwyGJKDy8tf",
  "key15": "4EZf9TYeYuWBKuqkBfudnFHDkWV6xKru8N7hCz8ZqCXsVv9zeqw8rMzgYrBaQiZRmuhEbPcroF8Tf4ou2qAfkyrd",
  "key16": "56nuBgpBSE9iTt7Y4z9SLPHe5afHgw4p1hKyEMPtaxHxAcbcNucibKvmAudDWc1CxanHWe6SFPr4Gpk9ixiYHvrS",
  "key17": "21YoRfThoXbistja7hLrDwKn731bqEhyxokmwMmpGBAgbT6Xrk8QDr8jahkVnpTu2WB6c5Wh89qzHBRD9uBt8XdP",
  "key18": "5WME1xm5k2fMDjJimuGmC4Q3v8pYt7UM81yZqNSqkJg8a8Gs2nx3KdhjS1dBn1c5z7bYpEXbZMjX6t6AJG3Xnwzw",
  "key19": "d48UPRjpvEFzd4QmdEJGo9JCsAyiVxrjASQy5nxpSYaEPzqsQfzUnr7XBMfFdfPeVMGYgy6zWUpsB6ghw7H946C",
  "key20": "2U49vb94ju6uazxcJGihEhbrNCJXPfFr7wzvFWub7mYXhFf5vBKtiWi5JcxNdVhUWMX9y2ZqQQts1uTBmkxpqFx1",
  "key21": "yQpJbVFdPQNM3Ns7boaAk3SQxnKBKzycGDV9Jm8XEYa5HJubqtwRhJDRadxqa9XkFgqrgcDhVuPPbz9Fu7Pc52V",
  "key22": "2iTNFQ2wjq7bLMN5ctQsv9sFXGW2qaPCruryECy6c83nH2UisqhwSNwP1xuhWJNF6ZDh6E8jupxGxLnqVPV332nC",
  "key23": "3zpJA39VkLSNwsGZ1rzZnt1QAugnESa6TfhimYRN7kJNzuoCogAFtkjgWbBYCVdovQWszimWw6PQfqodkx99HRCQ",
  "key24": "53bzaGUcHApPfaT6vxoqYy3p8ZtVWaMCUedQwoioXnfCkeMVpueXYBPYPauEMP4pxeHYnRRs6b6RNBbDhoD3U24k",
  "key25": "32GpLobWgVahC7aRJ6RgGkacCG9S92hM4GXjQGfKMh3UGEi3eWN9jM9jb8FhsG7cudiqmfqqRSSCv7RxHN3hZtmK",
  "key26": "5qCfZsB4ohwVpbZFR8Qxq2y4azUTteJZyVWqxJBu9SXKTviAFNe4avbzvzL9iUpQQV92v1PMDujvmQffo8xDqDn3",
  "key27": "2dg8DvUJMjoSqMWNqFC1WRMpUc5Vwmj44CUV4F8eTuyRKKdnEVR5YNmqKkZmQ5NGNN4Vxf5ezp1Xs1b2K4UXw3nK",
  "key28": "5wwWvLfXMoBMe1htW6wHAQbPj3X6Dp7YasKHBeyZ4LY5vesxdZCf5dczzmM6YyxxtbV1YhEn8qfQEX5rgfsPcYvv",
  "key29": "67mDBgs3RmtDQrW1JasXR8Juq55Fp1ac3YNAat3tsaWiVmrzdQhwE4HqSXLrhVPnc9DMHqvuHA8usHnqGHXQzQEG",
  "key30": "2y1biiMkedxQtrcATmQmE4oLpRNZXuNPxnPzhKjR3xtMbjpcYi9YPihEFtKbryky42dZSMMAqgKK8qZPa3kdyWa8",
  "key31": "45SM4TRh55NskqaCqy7CZMRgSajP9sToGHV7MxEy2A7WxAPaAZqcTbmJ9LUnQKfuRfzm3ANySxTNz2o8wh9GTkf8",
  "key32": "5mdgQ7TDeARB4QAg4HBQpAK2rAemQ6D7kcPLWcdFqbYJx1NqxAMRu8GKGEruHvJJgEnutebdQkMWm6Qi8Hf4ZZF6",
  "key33": "5rpBhbNdMQqNhsLjbxJD25LaqMcHGjoq2EVT3Z6iEZejZDzDCBJJtbwKDsgBUo6VQyUM2e633sjcJde3fvkmE63b",
  "key34": "2nV4cDKNufJ3dJjPVU9WqqvvxLUCiF8uQNTvN1rHsdCueSGkGsLJAU9yaHP2Ea8Jfb1gxKgDhbR1AkRYvxqfaz5e",
  "key35": "39uwpYmPXiGtFi75X1bvbDwwJrxF4XdoA29QkjRiS5gxEGgJkqXGbnRB8NPEEc5DuGjdJNhtYqV89QVmk5QoFRfZ",
  "key36": "4wYpNbhVHWAUD2bkiT9q5nsLeLCj6Kk2gkRdoECVXHLxHKnNT5V4SAvG7ZujcNjG8tY1bUAkBkD93oyzgynLZria",
  "key37": "2kYhX57JVRnhy1uA8YwnV9aAe9Bo3fBikKUtZciJwEwWCcAqueBboYdKvb4vpbSxWVmoBvVj7GLr5tepfdqpZ5XX"
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
