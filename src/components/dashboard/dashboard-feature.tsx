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
    "312JzZak2i4PQgFgjfsdUuxa9iHK88G8DYB2qBg5oPWyAx2sfdJ1tgEm2UrMhDfiharoS8QUoVRGsKzYMVtx9dYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gCKGxYYJEAipwDWA8dqjjV2cBCaLbpkk7rrQ6z2Pp11gX14Jpf5TGqGNmLkt6d9xkfNrEtSpkJ3bUuBEBEnzaR4",
  "key1": "LFsjDCpywdUZLadYcSEaEzrG5sAhQXwxxFMwWEHZ5BB9hkWPKCeqfDTHTU8ou6JjBodZ9VfQw2h9Hm6Ww4V3Wfq",
  "key2": "2bKyGdKWsuGx6nt8QHuub81kzhY7tmpUith3tYSFLoweYBFXcfxaD6vHUyqV91GuYXzgJF2xP9Z1tau3BU2R74tQ",
  "key3": "5C1TKqAh6QEnE6GLrgLjKBheLwEdZdnNAfexfTgsN22xDP7dpLNPjsGnjrt9NjtSafXLUyQkpVrcjhDiLn7zBCnv",
  "key4": "4hVSYJUgh7yHL4jkJXdDVgZ2dCZVPD1YnW5Zeqid1tU5ifmvdj7KME7pD8ETfEQLRrWTHwUhH83LVKofPADVb861",
  "key5": "35rCoDN6vNKXz8mkg3cRxMbYV5vHdLDCveYWcNJqT8u9sgAmSbrhLnYbW2dVTHPnXVnsEEEzJJvgW3LN9grzxUTQ",
  "key6": "5mDG5BRBbuWRdiyqLmeEcQ5AMh1ioJLBL98L6eCcTuswepCDVqw9aQQB13vLRD6nyumycRhNBYtAiLhdfrAKUrqZ",
  "key7": "p3tN2pkFnkmQnceKxotFamza6VGzBSmHZ1vMdt9PGqVi674ytyMdhKZFNxBAhUnhczirff4odtNMBptiE8ed86i",
  "key8": "4YegeTJ8LN2v1EbmzirpuqWND7RZKhLVYTEq8iiLDFh5yzJTjfZMWVkHqctbvfmGHGzTWzPoGF54RifyzwSuFPAp",
  "key9": "2bYQ3QPVE2GdWjfYtQ43tNiRz9rw8qfyuPDdoRgAJGZZ1gq25SRDQSFpiHR924cUPpA36jYzjY3rTvVVjrdPzFcZ",
  "key10": "4mxDVGcCwgzVvsAQcnfJA44rB4c6ovE9G2UyVp9tQTNkDRGnxQXFqo5q3KuvJ6ZdYVuheDN2sSLMh1dGQzAPxyHk",
  "key11": "3hKpanJ6Q794oZeRQ5J9QH3d8d2RurZfiq8qghHfiKgkXxBQXHxUoDf7mmSMNBiN44pQcW8MuynWCTpPZWqjNxsj",
  "key12": "2mY4aGibi4LhA34ZaYNP2pmnTGcNt5MyiWYRMB8yT3zzFpgFZ8roKuxL6UgtEXSbqCG35JttN3CV1QgmYUMDBDP4",
  "key13": "3y6oh129Mk9J96s6StCWuG1Fv3oZbfAtCjx9wMDAm2sKMDg5kwXxsMNf3gEwmktja7wxkQ5HALwTcXmUCbLdRZiF",
  "key14": "4SiZzipsbDJEGpCJPGjcJFtTLi7HtGF6zjeEC3hntJtSmVS5sYG6E945AKZzTUYRqmvp2UG2WLzfQDov7ja7LcPP",
  "key15": "4mfMEB2CmaoCfJH5owiP9pnrRvQC57Xt78YHm5vZQNqchCRpNUeYMLJuxbs8LrKCv98Lk9ccJFyqEoTADWwCThj7",
  "key16": "5U31P6orQXU8eqYyZnLYhFrFNUydYbDSyENWTrWSb23cXtRVmKS8oLDTrfeNXsrNaMgc5EQ2cArAQwk9mdYvT9Rz",
  "key17": "3ShEYUX8vJmBoWkHBzQujCzpHcfeatPx2iXRSvH5DoUtQGuh8zet6dN74y4JhtTMSEghp1BwA17tL3dewA5fo4W3",
  "key18": "4g4EBjokqW2tYoin69U8tvmscJCas6J29BrPgLsf3JYwVietk87v1FwcjK6eCzYNixJKRUkJh5LXb25EECuasycE",
  "key19": "4BVAC7NnHUsKb2frrbugzpYgB9R5C5eodv95m24ZoXcVRWTUX9sN27nmPq4fJKJvPeLbqwzKgx4vWaBYPpKrxd7c",
  "key20": "dhnSa3pMGn4vbALjjDvvSAPRGfbPaa1ehpvXLmUSJEbY2P6bFgmJhvkFRtGof5fYsARgeTHbgxkjZARg18xwp6M",
  "key21": "43bDLVd76g9nbzPVJETfWRduMUeqK391tEjxXHFwZhAt2aDVrZrCVGnWE7QZ31Atcrhaud2i8RCCs7r56wi1YYiN",
  "key22": "4RApsdfLYd3RNJPWiGJgBzTANGBonf6rmAUknNfjijMq7dpiJCEWYoWozski2BwnfAH11ZcUxyFev4GVMUGpuuZi",
  "key23": "3ECThqkUEpVnnQcavWcyc26GyWvnYkF4fx5Lqv49BG8D5ACLmT3DuAhhwZY5LJLQT8Yp2GX7nn525ojVSxeS9qAX",
  "key24": "23VYVs4nspfkVw4qhSaq7nzeoW2gXW8iHfZGvgCjdcc7yGh66J1LqmHJLoXYCQmtUcDij1GScTWyjNQTwmRjJhG4",
  "key25": "bm3X62yMSXgX73spTBn9H1iGS8NR8TjAo1RoTtdZHxCvHLGukBXzprqLS4yQCZKmk9i98CYYrmBp3y7bsk6Ctoa",
  "key26": "51pf6GntfRxwCGnJemc3iCV5N5KTGtFbFt93o1nesPJhJJdS8kMzgSatpZ2j1W17a5bjVLrr8B6oAecRAgvgn14D",
  "key27": "3XZfoMf3aKfZDiBDyQxMwz4XNyR4yZpw8BMwKzeZ1n46wt2WhZFwFD53zh9L53wzAeTRqipRJciX9nsqrN1G5fyK",
  "key28": "2B78WxkrqBBjbo6FVwub4yzhM3Mt3qdZKRg4Zt4LsiTPnFXErVWnFPM9RiZWzeNgVVeQkWbN2kbNeCQqvuiNBPuY",
  "key29": "5pqVBTJt8vsYriL3DRa1NWmTMyKNjZcWPisdW4mFKTCYyJhWBXxe28EWbX3jY7mhqBhDhh9LFDQv3SJUJfHQzMUN",
  "key30": "3dLVhdHpNpDhyYnw4fxYWZUdpCa214xjW7Xq5KGqc7fgy1mkKQ3YGneQ7jF5HmncsuwuDBZi5upyC3CvyNPX24tn",
  "key31": "42JYm2EfwWD48GRVm6dsmcbWE3KvAa776V2dJp6krqF88VWSq6bezyQ9Ei9mMJVmFGNDm8wXp6yaD91fyQ5zjs1L",
  "key32": "5hF8jY1bfgkwvXhXW1VJevCrxyBwwNKinnkescSftH2gxjEvN9XS45GrD2577mTWGgx45Bm5ZMUM38zu1wCDHrvv",
  "key33": "2x2BaybkLe9PzCy9eQZqXub1BX7Sruk36syxQoZfXUHax7Q3rgEuwAYACTPxP7LYm3BFvE4pkDix9qDVM6hoC8rJ",
  "key34": "2VXEJq2CCMhx62q2Gt9ywwkjZNBm74C2GrBd4WAm6BLjJzYT6aHimSjHfzT2DDQ5XYW1ZwM3FNiQboVjZq8EcTSJ",
  "key35": "usZq1NGhS7Trz6FsePQUxRXcbL42KL5NSj6Rh8ua6pY6MDooWH1MyE89ZgMfCxWJ1xMXCJYvrjK9D3SnHwRhEN2",
  "key36": "2NSWYtXZZ3aHfHJR2Htvy5vkk3s6Psr2aSV5BWnCBuyxGaSzBahpLDJoDhU7YNdkn8RAK6VXGejMd3rSc63xEF3g",
  "key37": "59NxHZ1MRPSX9NtaKpmeXkR9dpej26Znzd5XYF7hPcbwu5QLkSDh9RYxhzidHL4J4WJ8CEUG2MqgbS9jggLYuLq9"
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
