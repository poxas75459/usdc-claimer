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
    "4oZFAGkCvWNcJTJpMnUXjuMcbnU8E7SdtizoQhEQZMjhU9Hu8tX9Uv3JzNw8M7P7wq7JXAwUhDJB36oyvn58XwCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sRE89xFkoDZHASN4UKLpq2Zg1SBCETFJYPWVCiWH3NN1Y6L1cqMZvAGfs2L4EFz1iKWxFbYrV24CkVW7zCCF9Zr",
  "key1": "iNtf96tmgoiC4HENwyprv4Ur5RZdAQ9UTzPu7KfsPCcz3SjfhR7cHw54kaW8u3ttX7SP63TV4qHNa1SQyGWRMcP",
  "key2": "5iVt8FMvvgraLYagT2tHse7w3Y8VGV8mCwG6gNnJ2EYhKKhmwEdsmeF45mAz63L4ajHypmB2XaHmCQ3Y5qaZji2B",
  "key3": "3swhJwvqsaUSGnv48q64NnbxkkbJq7DrAzBZoAefjnNh8dFzrAwA1f5oT75sDYBVXx1kYzGv2wV9RGPpSK8iacjy",
  "key4": "5owP1J6Go8Lo6gbVQmStv6kL4URvw47eZjFyxoLRoE8EoGHTaSh8dxHKYrinRXdRSpWchznS6bL6Q33w32deBSf5",
  "key5": "5cGXfGtBgBbeEfdUbE6ppJv1wkqSEe1Jn5CVQtTv5CYUzheU1iwa2diWnGnDP2RZBJ28tuXvEn2w6CLa6a7zz94e",
  "key6": "4N6PVvyTy4Sgufoynn8AkAY4QKUkai3hBFyVbteDi2zZ4fQ7ToBifP1Z3MqCgSHUTndxFdWepFJaNmtgaGhF1f1Y",
  "key7": "2d9f2VsLAwHe59fB6TwmANhNKDxKSryq9MXdgeJsT1ut3FT9zWMeySfZmaDL7eq29HKMtRd9FC7vSPToAJNNB93H",
  "key8": "4NyGUSdeG4Tpx1v3Qhzis3uQcCfcbz8utJSYSXoXQR6DiwkvGwggM4ccFXDhJiDLqnP9AzPvssggFB9Zu1CvDzPL",
  "key9": "3U9ToyTnNz47Tcpq6bCWnopX3AfZ4Wec87k57KJszwLAX9GhBQ924h4tJYGTgPFTkyRP9xUsHAmUEUnziJ6sc7xT",
  "key10": "5VF9sxz7aYMnBs2Pw48dGYepDbDEKzDSvotb3FkFFTou8M9T7iZRQ6XVR3rYM8tcdASib93zXYcoJUqaCDZrRwpc",
  "key11": "5PG4C3aPXckNtqe6CSCLJm7Zc8tBjuj7SS5qr1rtBmvoTiTitok5SYzynW61cw12nrWhbyZJUZtW5AGsSbpaPutn",
  "key12": "3Q5P7JpbUDQx6iB5cUybmVwvXQwL85XpAyUavpQg1Xr87T8veA6nAxxyYGAUibJEJeFzncfwJjosjew5wYBGWpxc",
  "key13": "Qo9cxCRqYTfMRemrYhCaQZPqDTeJLyhu1vzsyhatv4Zp7wwKFuhrBihVN4fMrXQPvsq3NMTgnDnub78pGHGqeL8",
  "key14": "2qk5eKPk8UxizePS1iSrZqR8ft6ybT66yZjxNnT3fcPf1V62jE2ug15c1iRWmptyD6JK2ETqciPtpyhB89GDGH42",
  "key15": "4HEhPEvwYx6a2Fnm91kWijy4CGQwdqESKR9eAMDqy4i2Vuv8wLRWQj3UY7XAUybUQWr4oUxRvMZTHXKXymaHhn4o",
  "key16": "64y3KETPzz8sEisAciyXZXXKDAe4dBBgpHCUgVUZLBHRGhx1HWZvvwjb8RHXvDyFiqDvFsvDjhi2Z5PpzioFXnZX",
  "key17": "26ZHzTRS1BtDNcR6fKgtV1aGcgvALm8Lbhe7fcAXqqLiM2ymkFzyzPuDoWbR9VtU46ArfsKMYCf8UvtMFN2H1iBo",
  "key18": "2JoeG8TKFouQQCz9khmZpctvY5NzXeuaQWqCHScfhqCnqncZmNiDpKz9ovy8bwSTq2mRg8i9FsyZZxN7Yjkfa4k4",
  "key19": "kT24TV7jzmVHAot64EbCnjTYKbTvjSt3iC8kWYk42e4H3hoBbgCBrWdBViPBjmMywZcDudjHjsiqwuhZwAtptKn",
  "key20": "3JCwyjfc2xkCJGXF4KGURBBc9jCfXiSy3N89k2HCBFKatJAfXB9bL56TBeEPanPT7QzocC6gpa5rTby5kjm23bFC",
  "key21": "bnWcSz2zYz52RveS3hVMkH1fFxipHdrdNa6GZW3gX8HrDiq9hc8VTnmgJFz2THtThCUqz1A63PSGRExvs6pY4XF",
  "key22": "4FDi6cjPpj1hQYkoAenCFtobnA6yexSH3e9txh32aShnPm8fC4e8pn8QBUMBX3nH8e4w19ts7hEe1N6zYvVzWS3h",
  "key23": "4vrUiNfSwWn6iYPmv3JxFRkjUWaz3n31t99TQMVbfwTgJtg6qGY7rKPrYRXQRvDHLBWHms5GRytHJv6NFjTZ68m3",
  "key24": "5RWF5bvpbFbRMzNjAKT2YZQ8zrahPHE6xRV2tNXMouVLddUHJihwj65DLbmzgLVyzEvgfxMf2SSg7NE3ZRS2egaJ",
  "key25": "64iE9XR6QVQHN19E7eSDqKbESg41JF5tkNoqXzBMaqqKRNPGNZx8GRjSNRvBHEvfvYPuD4w9gRrgCngewNa9xqVc",
  "key26": "4XmQFN2oMVCnjFmN4jBjdGpSzgy9iKwRcysZ3GHsJfioKmGndkM7f6RuNAzP1Xp4o5YxfSsZtcepQpwdzxQg1SLP",
  "key27": "5P3AUtdDUUMe4Mt2TdERG9JqFfYY1ikxLjJ9nmVJ9KbXUVY7eZbqeS1jWP8G9GNisbBXW2VnFBVK3aSQ6cJYEMMG",
  "key28": "bythT2pYpsXB2VqdTuEAXKi4MR29CqzmvfZQqSyvmFMCSKG4QHbXYydw3cR6BHcmhAFSF5w22epiFb6tAs8CMnH",
  "key29": "1AxDzSokg9zo19CCPjfUhVGg9Yc3Zs4sruGvc5NJNKr4gSr1jMUZNRogPvVWYLB1BJi1WknFinY3ZHuHd6oM2Sh",
  "key30": "4rucYFwfKifDbFXcP8TVLjfDXszeojC1kMRRCYXSkEwzdzuSys6LoBKr21wW8xZtwrWyz42TBU7SvHMer1dDpY8F",
  "key31": "4vGuPjYYEH2ZdcHDz5aZvjgJLV88oo2MYLNGMY6mRPz5b2cebVSzfVtC2s2Y8qRWMFhzYvK4biE41aTF13XL24Z3",
  "key32": "5Fre1FEAdHtTFyhWgq1fJKLqxHY9n1ZiGVpSeZVLf1PuPSSnok6WVBGue7cUEsm4kMLzrHmLpVexTx7kuhPN7mfS",
  "key33": "54KQohpGty4nJV9Stcjz8Yuvp9jhEFRpq9N5z4nw4oeUrAkekzqR9eFfUFeedXzRzmAf3ohxoWDxk2twDbZ3q6T4"
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
