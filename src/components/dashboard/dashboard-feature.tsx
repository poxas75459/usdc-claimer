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
    "5GRATQanKdRDMLQG7KwzuNctVkgfNoMb9PKfcnFgmosDrM6FabP8nGndasySfPFVacrsdAbweuN5AJKJKc5ndb32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r7dhvrWKiXBsj5eiKKmQBCvEkVXeMz8TijXbuwsMNGjGoGJdCemnM1ePeqxB5mPW7SfbWsqbmQdnNRA4AcNYCQ2",
  "key1": "2m9ZvDBY8SeAFV73oTy4EbuBxp7mYtP112hkcbVXB8hTMgwiHgPzh7EfSUfHH1ksZjBtybnKREvK8HbdbB8Horhv",
  "key2": "5Xm5z6B7DQAvYNSK4B7XWgApM9iwZucXjkBMzRtASn7fFhYSchwVM6He4ovGcwVkeQLXTEbeSnoNLhzrzcxPPDcr",
  "key3": "2zCYCnwAfQrwAD534Qy28yqgCMDEgH5fs7EY7TMdFPWXVThCeLXeoYo8g8zop4eu9K3hKgGS1x3a8dQ9V1BomYxF",
  "key4": "3kBbRJeqQgSrrCwL8oVAk5X2oUuvA849xCkB6U96oj61QE8AR5pFXo6kwKDWFXmWdSqsSW2JEq7Bj1fg62DGUCn5",
  "key5": "35nYt42YPNQ6TN8SuD7g2aEpkTcHVM7sNsTEQFacqM7EjXmre36W96Gn1ac2L42i7xgz3ci2nCpXytsQrgkK7DGb",
  "key6": "ixTyLaTZcoKGdXjTedL9xHuxma6aYo2eWCJ92Ti6gCshynFbHRcdjVEX1kE8N8ufnbp2DybzzZdGS6n5nrnyJCV",
  "key7": "2FHmA42fMT1KEhcP5dvyL6B2K5JYYJNekHahWbiz653BJriVsUzywACbZqp7D6wn7vhsDyVz3jEKvD9qAHhQpMX4",
  "key8": "2sEJfh6gYpCxqzSMgk5HBAp19bstV6jo6NXzgw1ndNaQMyWMRxZjb8KT4gpfLgwKjNVLahYdCW7tc3wtJFE99fWC",
  "key9": "21L38row7n7uD85pnVQfsGktJ5MmZ5moQf1Ahpjxm37SzuLpq4dVQAKT23XQi4GYDjkbFsbZG9hVdCcu8hnZ3ZJh",
  "key10": "R1Q14cgcRNkWi8ApjFHkiFymWm9Vhr2VGce26ZgZvurcPsSyK8WqjktSLDj4LqFWDqnRPexpebAseBQCkuPcvYZ",
  "key11": "35a6BxXC5TNWaf9AD14qjheUyetRx5MipnKBVDWcp7PybsZ8KuQsrzQ2VHDGVr1Gj2K4JV9DPfGfBFpT5ZdVRySP",
  "key12": "4PCF8md7e5BG627W9QW2mJhZpZufKcFvyNNFuUgoxEyDaAhfKwRbhL31od2uZv7uBrk6gfY9cUm23cKuEo4AHCHX",
  "key13": "2EVXGDVASjCcP2fJejtedsKcjQXR6av6BQFctpd8UqjQ7CzScTvT8axa7Pq8DPQLjqUWgvgj6f71tWA5uwb9HTMN",
  "key14": "4LdY1wvP94nbmAU2mDCKowysaeQE93siGkts9zMGdqD3q1eVjKHfD6uszH4GtK6kqXgGk6SiDFa8CohDWJwxTRaN",
  "key15": "yU2voWcqHML7vVLEKYhj76rig3Ycmk8V5jbsSevxXJDSgN453gsU9asJMf5CJsZHbtpkYpooD2bci3mQBzoKD3u",
  "key16": "4AHd2rj8GWFWYpECYjPcNo5jpTqt5SSCxEBwuwBFGRM1GsTqftkKcNeZ8sNaiWvMnzgH48zUf1pBhAcujyxizb36",
  "key17": "2eF1GUaDFnN1Asg9wqK9aRu6BypiWoUtCbcr1v3daYhvKpLEMBbQCHSpE1sEjQVhTW6Hq2LgvdFPrkneXooH7nV2",
  "key18": "2rqnqtB6igW7QVGo556w5bUeSiTNmNZqjC8ZSML8kFGsoRUApuBGk2HxwwmPGrH8H3zWvvqoUo4vMhj1tW8WVp7a",
  "key19": "5njBAgUzcxRWH3MSgyjNjwuGAQJyUYRCnREvG3shC7FKpbeHE4AwEDERyexxaFGGhZG1ivfpktWMTm9mU9Tdezt2",
  "key20": "Wa3icKn7FUwLhT2b1zZzJjy5tiuVtCCqS3JXzFBKNN54n6tHqRiTiQMG39oVJCdTn8XibdQxMzWc2ADUgfSWqur",
  "key21": "3VxUZsHnPFd4aBGiphYVHWi6gd6d8xQXDhCGv4qkykwUhBRJ5hf6UE2mcc4q1YDr2YmkrVy1zWXnGGXwS18bmrBK",
  "key22": "4jD1Bb2jRdK5aENb39BJ4mc8jvjDPqLarkAZZyW5h4UJr48mUwknnmHxWv69RDkhB9TZ5x1cmvrzj6FKmNyg6z4U",
  "key23": "Z6hUM3DLWwVNqP6PKBZSxceEJ6LW8mVK8n8Pq1XU98oyEefbvKU6vqUGyRsGHhBL8qgDQALEyQcEQXpptxiegHv",
  "key24": "3ZiNLcuZLfH8FpdZp5BtwHXfwMyjvUnbi7ECwWQq5rJFuHaLjPXQ5xCHxF8jpbo2UpeZLJSFZm67cQ8pKamQyJgt",
  "key25": "ZHLd5dWnNv4mkKJuLeJWYo9qfeVNwxTYirqkHbWmmsjza24aQx1xw9eWRGLkjfVYWstfNo6AmmPqyzc2sdYivrh",
  "key26": "5keGMvZwP2KtoR61o2j3eM5hgSvR9hSziDBAwbTs1WiShyAC2PpCX17McHKajzcvh4Xv2DnMzrnpeNamdwgqdmG9",
  "key27": "2v5ab8aZkKVVFcZdJYJMZTbz1oDSRfZNmVCtQChv7wJ2uWXxsxWvjaHPTD94jx7x6FXUVEcgWfvUxuwEoiGFqjwa",
  "key28": "YTPVoeKX84c2cXUBwNgSEG7NaTVSNkNKuVTyNJsPd6AYt4cKtD8LXdJ3DAJR89HQixALW2ib5f387KQ7ehNvaCt",
  "key29": "35zzdUbcqDmRd7cfJ2aMgm4eLg2dXbV6onTwus16UuRC8hqS7YRzPViLQAgYU7pfbd3ZzCgHcMYQy2EHKDFxYcYx",
  "key30": "35csBKSksrQZkew2jsPJiezYcyYgupYgGRQvziEBe6E9DVgkZ7Gdd4n7nZSuoZ8p11p8gRXCaDKPuNEQZGDAqUHP",
  "key31": "4rnGSD4pdz8WYNgjWxPK5HKKBNtNEdvp9z52UUr3vvSFgefJs9PHerP6pP66i6zZf5yPgtxK8VQPwEbTvwzupZNF",
  "key32": "4cdSr96U7HwnDUHRb1BcJH9a7vHPAw1HNzHVTfh4xS7TzdrjgJHELgW4zzbhuck2ExoQeBmCGXjFjKM3aodpLqqf",
  "key33": "5gXHXEGavrTQjvz1MQsjgCHwNZasR2dzJvv6EYbfvT6oMp6B5t81QHZJmtLV9y96ABnXvFomgJ4Z4vjX1LP5vv6G",
  "key34": "4Qw4EpmWdv6x2JGgLfzWYwBx5SAtndqGg5PApw83t8hTN22QfbbtW36Ho9tNouUVF5uyD8ra2QMWvEkXVKRzwKLV",
  "key35": "3cBzaqMVHMz5cnXBVteQUnQ8NZpjqU8AFQVgaeFEtVGhprW7qKeFGiutuuz2X6g1LN2pkqN7wwQbebMAFNBwe9FR",
  "key36": "2cn66yT92nPZvQycpJrEk5dwV5MnMB7r2ZCTcN3NboBZQ3ssSzXEdY8Ju2caeJv7GnZ1U6GKt9zRnCUx3DM47r42",
  "key37": "3FUCxEMnyEeRJyTa7kaZu3TCpjUySKifkSmbkh72kZ4PtrJ6bnpftHrEo2kxWVsoRADQXjSber5i1DtF93oQ71zr"
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
