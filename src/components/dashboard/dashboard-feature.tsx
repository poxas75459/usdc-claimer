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
    "38TXPqcuSgPujQsi4Jinm1tx7LuvMhmbKmufSG446ArTrdqd1oDUGxQmp9TzSG51HT5i7cbRy4L6d6Eieusvr31z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rXjTmLVTfHSaHCSJnDZj7vs78rbaUN7N5jK2HkPNrPeU8u7Xe5W3fUUq6oMpBUuK4zUGoxFCwSqW935nxPG5yTs",
  "key1": "5CvYanoiVg6X1me39G5bJG8zt34dZEhPaZ5wH4vARhGnzAuqx8Q7EcMdpmQvieHDpw5mj5RQ5xzVxJNFZ15g6ztm",
  "key2": "2FzCVqgYzWzfjWx2ExHnK1Fr3ZMhBUQMZUu5ffBGCM427myc8yx5EhyAuy7oVQgreW2yLnjkKhXFDf7vX5ubqVvb",
  "key3": "4Yjbvxtzw6rJqvYoqevF3D4v5QgngUBnCu7XSnyPsjeAB6jHgdyEgVBUzkvMnJYopufQJX77Qos6iAjtxwky1npn",
  "key4": "4amRy1x7qwVZMdKzz2wZBjwMTrxpVJkjV3Ck2nCm23QSf983Y8fy1VFHFYeuqNkmkydcbW115s3jGTLiFysJW69y",
  "key5": "4RSPuycAHdj5micFCNS8wkt1HzUSEFnHgutjj8tF4ErLmBCVrbUZFajou8BPKyADeUYzUjwAayCD3iipiS6V4APp",
  "key6": "2rxfeLzQCdSpUNaprjJTRq1EY1vCHH1XhcNyotJCkWfnLvRFu3Wq4gRq7QXBPTL4r7TDTSS7zEMKBtBuJZKeqgEW",
  "key7": "dFbBrvm4sfNCWCbfaYKJRcfaLie2GJBKxq6KUhx1pFUzvKVfoNFnE4npvWh5mmjG5PeP3pCe7vcd57hukn6tp65",
  "key8": "4Tj4G97Sr2e61Dyg8VYRhcm4e44xeghtYGcXWnXqUkxNB28xDb8X2VVJWhXMQ1aMYEDax9xQ4dZrke3qt8AD2fRN",
  "key9": "2CJNsM7FwJ1ooTZHwH553mFPKgtqMvGYBGsjtoTJd1Xot9sJU4RZRT4jTuirUvgiJZVbsujDEtDiCQprSeLyd755",
  "key10": "pZrRz4ZTK8btjRd4dumFQEj5Qnr9mEGtqZu8eJhVddJQ7JCdDbRzMnHxeaQwgwVUWY62RP3M9oyCu1HbnnBcBfP",
  "key11": "2ztV5XvUYP8yhUszALEh8oN8cPQFDpsnvvNmCDCfVEsCemgAq5x3VqoeDgGhWPfXtZnWV28cGxig3JLmLG6Hspvm",
  "key12": "3176M5PcthrF8k6HGTZgbvvz8wpsBu97MFXRQTNpLX6moPueJJbm9p48Qv1pFB1uSEfjiYghMMWAzYeHwQbb4GJy",
  "key13": "59i9s8CWN7QYbUPoZvz6XEnv3JYuzhXqpaWHG5NpBNEwt8PYuNCJDz6KTZk1NYsysymWNNUr8BKU3KfjhLB4mnpX",
  "key14": "27rD3TvcegxVsKppcVeUNySNa1AKt3h4QbiLzs3RNzPLqzREV5rTw87PV8jzoqcS1NhBKJCCGgAVgsRa4jnN72no",
  "key15": "5ho9mSMicxukC4AJoFvfoU2xnzxTbzQHuBdRdKYqrxnX4GcVBPmcuNnzwKry73JxN4u3KptagrMicS59hx8NVPoL",
  "key16": "5TJ6xmpMFe7eBiKEA1Fj3aPnsGMpYvyJnfU8CTZC9HGibcPvMquMEtRFphCXNM7nDjrjDnrqzkrTmiiZrgHz9hcn",
  "key17": "3MD3JrQi8NNXxS1hj3reCUxdfjPKkKQwv1d3Ypc7Xo99D8RWEwsWLbvjwtzaFyEHRiVK41jB3iLQsMptfZPALVqP",
  "key18": "4GhXLtffcQbQFTawwq2FypVWCHfn15NVSFRpcwcTd23Kmm9i3fq7NVTQoAhucxHFU6167rB9KwnkPQpKsaQ9QURt",
  "key19": "4mwz9mvWGpQC8dEb18ZTYsKZYnEABSsytpk5qj2QRfwbFtuzF8Jh3os5H39cYyEbinrWjUG4LVDchPVLLqVVudJQ",
  "key20": "3TJF22svDzNpamiAKSdAqS8r7UKyp2LbXJnS8Rt2d3rbQfavnuKQbLJSTidLvqiJkdwAqqvvJx9FpmNK3rCrvXEd",
  "key21": "46EoPL7RLVTtR6AL4EX2TW43awyHVJkH8ZQS61JFdBmb5b2dNibMqDec7fZFTH9hNEAq7hQs1rSkQsWUx9SmLaKF",
  "key22": "BwcjabuvvUmiuJ7waLtf51bue8kgZiv3KkrMounuJiUVyXRie1eNGcEymq3zWsmZC54s8t62zbkGyRJUyBAHDwB",
  "key23": "4tZRhVGhYsYmzejiypnaQ6kqMdZTGtHCciWjtZUdGDYAtR5jjxC4WWY5GC92FCJcYBMD14zZL4J3Pwai69nZCCBC",
  "key24": "2kZFsyTQty6aCvcPXXSJJD8TERRHy1W3hLtLFyRHRcoWQR6tvxUFw42NvLm6GhSfzeTyd81EPT3vCGyGj3f6kkTU",
  "key25": "2d47sYg28EAXqivKrBfkjhHc7yqT5a4D3eZ8EVfo3ATQonzQWCQHMsDgxY3RhN7wFwhGbeZcay7FYrYrEEHBpVwX",
  "key26": "5Cnh7rniG4bwLoVkA95rVgYcRjjNPh1PPgJQo3w9YMRKu9jjwMxQWKoqkvzTSiwAupcckz2uNgHc3Wtcjivk1PwE",
  "key27": "23Z6RRzR1BZDVH9vfMsUhbs8VT4nbDPv3X3FtX6mVW8WZqmBGnLSrsep7nzT6NuuvAcQCkWXU5E7Z8L6EJACN8ES",
  "key28": "5fTAoHWu5toQNKPgLADU2bQfXtp3KgAZBjVRGGjSRNzS53jSfMaTBhvzdhygRzvUpvKfTTjrABnCRkkJcAEFXwzT",
  "key29": "4zJqqqRUmq5wtFsGLQPXsHT6kV6yyvqhZaBKSkypaW5m4U66tgugg5TQVth8L6jU6ZBT2Dt8q2RZKhXofMvcBuV9",
  "key30": "67TyW18Le72AzrdVSbnUCJvjvKSrxA7wYN723cmPzGiSgr8LpBro68fpSymC5ZCCfmf7J3YwcejKvJw6HJD23Zg5",
  "key31": "2fRATBiWCa7892CaiaEonPqGCU5V5gpTYJLqsrb7vESihQGBGryeAHRgDovCph1eVHZhov9a9J64q7kVtC36STbP",
  "key32": "2djgU2s3eNj1aAA3b2D3dycVaVhA52oFdDbnZfNrLbbbQ9hefBUgAeFZL2V4U982xScwrLw1PAhxLu6ruNsD2FVU",
  "key33": "2qVDCPE23tA2vJX7Syh5xEJ35JoWpjyQv17HaBpGbNiSxXgKWvUuYPV2nSgqrN3Fw8A8HtsURtq3LkwLDaPjvZih",
  "key34": "5x8vTT1SqPEKD5WsvkRhbwMppC1kZGqCDKAS28YPkKTQ8GDPY3NgDtaUYE4ZNZYcv2nL9h3NX2U2fWHBAH7qeq5h",
  "key35": "3tVi6Tzs8Jr7yfNJ766a8ifrwv8nsKDzSTN1oKguAHP6RTVCpidKLRQ8Q8ceuGGkUmFUzmwC938kkW6WFYTFHxqZ",
  "key36": "46z1JewxtDV8JKJVkkJtGNYeC66Maj58BJwCEmmrLXv9i1UWDcJRGNp1yFhmb9d1VRj2vVpBnaRu4xhhbX3psg5t",
  "key37": "3pwVQCfSS1KsaqoivwzJwveFbXQXeyPa5yXeZXqvcFEgrzWEgKcWuxdvb2zwsBFT47RbZEPxmx9biK2n7gdyY4Yg",
  "key38": "3gGG7ktWX2tPXE6mNCojFcwEYypTxgX9xYxq9CHxTLavuk77xjCq1QBtNLCAZi59EZ69ZyXw68E6Z6qDgMxsqY4B",
  "key39": "5c5SEWy1VUQyefUt6AgBFWrDextcrEeKXiJRqRDMnv3X12Grw4ggLK45qGPCtxvbhNKpgSeGrHiaAESaGzb4LKfR",
  "key40": "3Mzonp8pkxgNTAooGsjpUADKfDQrV6zBbFWRpB1wY8gmjsPXUP8XsU3EoFDKE6UuBH7wwhsHjBu2QiUmgPnzGPRK",
  "key41": "4ib4UJehdgeQMJR5YyjCZpZRXFrFmzcmrxyoT26x1mCiQCGumCP8wSFaR7xHHkKYUfGcPqygLFYECNvZjFt7gDpe",
  "key42": "5eWA2oe3S4u7syKinry38Uj3UFWzLMyXfRsuHP41u9NfhAhZyuJMgAfCoq76Sjx4Z9DzqY4oXjNi4JKLjRZKkR38"
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
