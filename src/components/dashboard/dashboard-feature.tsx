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
    "3h7yEe7dkbZv4voiqaMtFA69PyMoyesqfoBSJeZHPhbij7tERvZExwp2uyQGR5M45G8CG4Mec6WLuPtqLRmsd6jK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZQC383krB4tPUxTeegkQNfLo8jKapmLcC1adfyBEuDCpeerQUatvMNjGUJrreha5YUeRbPe3UPjcsKmYbuW5Kgi",
  "key1": "2yPeeZ5MwzFdifZf5JijPG1vJdf4KK17VfBhHndwQ7hCFsSHziuVB7xTWm64TQEoWzCh8bfCQoZnVd1vbFF165hC",
  "key2": "4MN6pY8QwFkecxQfu738miZnT8EPd45y6ooyezmTfUMV7WvivQArWFrYKmVXoAai9Z6u9hEuLYgdvJr9DUrCxe6K",
  "key3": "5sx1J8kMjVRtVg6Dw7w1k6LEVcq3zZT7oMWbBTqFchCdTn47dZbdA9oNM66DdSLyFDNCMhCu7ktbShGthRdEUcBm",
  "key4": "5nzngMgj7i1ce9rUUeHsp8ba8uPQKZwVKyorBueqvFtNzTxdzK9R6k65hv6v13Nx8e7jHgwfmDASq8aBpDSN1Sdj",
  "key5": "um5cUAV8AmBVe3ZuoCJzdyDyrUCxn8krV9dJQhXxtMfiZ4rm3Fdc66CXNB4AcgAufmKmWKj5eqi4jiATuWbSsGc",
  "key6": "5hxtZ1EDaCn9to3Dkmrd53pCertvxcmdnpQPh1eKp3cWpRsNZCGyZ3ZgCZNbmFBjy9RP3FmxxLgW2gK3PJasrfuC",
  "key7": "2gGhF6fS2abdfgvkU2oSLGT2TW9F4ZtAmyC84Z7RDfQ8MrzPoEjGfYzZizBPrWD5zx15pcJtMKxNMfD7teHmqjuE",
  "key8": "5qvCLk2bd7FK7cKxkX23RY5nKnyi4mqRgeFHiJpqnoW6XfvZFDJfg5cBY2QJkDSyCKmfi6HFhFfpJ8jbpqWi2LL5",
  "key9": "DQzF3BaUbEuBdWxQekBif9bVksUiBhWzNTD7jn5ogx9NkiJDzkGn3krQqma84wXNZRdKEuKYxURydDPxw9TUNFo",
  "key10": "5KcxxqEzAW5ZwDqteSuSrzTW26m2foYEsHFK64xfVJsvqddYsxhzxw8Kq8njRHBKb2Vz3JevKbRpQ6EDENRTJegG",
  "key11": "4BSGCAMLQu7xyf5xU8VgdJ4136SkKAbAwAxpxJPEtJRsQUTg9TtjUcj3yrr6obBqVavZbW29ChmVfKy4SXiA8A3d",
  "key12": "3W3z7yzT1gPqLvUteMZS5CRvcBwqk3S5kBX8qfSJ5oMQwu197ALjByE7RvUU67diR4SoKqPeTuBA1PAZyRSgFBgr",
  "key13": "m14ux21hQgNZJnK1imuZHiBuFgNHgQo9eoj2RJLRu6e2NiKxAQCjkPijFv9q1Q8AT45ssrZ3xbPrx1LHB1WnXqc",
  "key14": "dE4eqYNUNXro9nj3Ku6roX1xLXtxo62rojEV3TxT7S3MwFeMH98cFeLinVWptWVBDuMcFfhzyZiEA7NWUszrBQZ",
  "key15": "5kzfMJkbNSnUca5iv4qftmoRxGUcmFFttarFPsQsPZk1JH6ZZhe9bkviL3hMLVwFBDpftRtfwa5ge1gHwL7mhmE4",
  "key16": "5345PfRLycjbnoD6t4W3SRUS3Kwmeay6tDpNRcQemNbhJU85mG6sJNEckBYZN634rqZdKgs5GTiGYWbV3fREh9Qi",
  "key17": "2U8yPDGJfN3Y7QuCLfdku4RpJAh9Sn11dGgcHanmcpT5b1fumMHFQiUK6D9eXodKLeBiGShW7vJtZNjp4SQqoYFN",
  "key18": "3zniDGNMrYj5yN2FN1wrD32yFcn7FjAVseWBcoZ17ganxtGSVyovFqeHBYLPSvyTFrzbPrAJLqgu3GRh6BxbmFkT",
  "key19": "3jfymvBXj5o3Nd7URo2wGfGDossuRak6Bdj73Cr4vqBgFMryp2PFYrFuHZdTbSfE19cYwKnKXDPBXiZSkmZFYzWa",
  "key20": "3Rj3smdfyMSkgDN9vPQFVAoN1PQy3Hs19Hejymb6iU4azRSHy1S2pJPm9CS8r299B8SqbaXkf78JXPqQtQ5WJdby",
  "key21": "57E4oUt8VNnMakxEiznMPajzLoHXXzQb9zKnytacEi8Xo4JqXZsSyogEQzGCG2WRfmCEHGmEVNroneyrBQPKHsJQ",
  "key22": "5RLJGyxPuemaxutBAYHEx4JhdgP34cvnwHwy8ZpLu7dQHfqwvr2VWqBf64363d2FwecjKorbuQWQCNkuRiZjfLd",
  "key23": "2USCdDxoHkRgAVPUd5rdDYGwKbH9rnYU83pAF57rXmVkNQ7eFttypVFEgTKAKRRcitbYh3z36QT2iVfeiUyLQs7t",
  "key24": "47t2eVvGW5KhRfabLY99VnW84saZ4ELLxaT6cWcqNFzo71WENN8qSwCAcuvedGCgkpYKf45eZzBhuCC6bF967tWi",
  "key25": "4Ur59xyqFCv9ucdzSLxbETNvGtGDftF3QLqi8z9C1KshnnsLu6sx3eSE3PRT7w181tMBYSFFnZoKZtajvupWTVGs",
  "key26": "2LgpX6FQjuGjQyq79u92nihUVcLFMuu92L9zYSMZJMCYUFuWuKTV7BCBJzhHTHpMXXASPh2FMB66AJ8cazPPnZG8",
  "key27": "2kB5trQTEsDy6pfzThXRB9AetmK6N6vUMYjSDXrsdumfZA8GxnbPFLZJMTdAX3HjaDrT98S9TjcTaqtyB3Xqt2ry",
  "key28": "5cShDHrXgsgBrdaQszruUrGs92xVPrXMhafRTwMtB8UiPqA2fx7UMnHsCdVbbjTGouQQpXyGL3WT93muszyqT9FA",
  "key29": "2sE9oBjkfS6cDG65HFUc6cQkbbz9ZvCRVChebD9x5xJAD6yMAMTDUuVNCfavxhUvKxBgRGQsWYEmR51SGrEF5cKe",
  "key30": "XkREzHiLMA1ahCfVtGtSTcVvH5JUZ28WQL6ZhvE8fsh4jpC3v37uCqbbLjXJyk3RR1utK8Z3YakLjfAyiDsira9",
  "key31": "3qXnciAkWfHGKQFejebM5VAs1aUK35XoXk2kzrv2acKwWvCwxRvVb4kGSZXFkouDWfPG8Y2sVLyxFpQ8fiLMW3dH",
  "key32": "3kvRw4RVPDYouyGV65eYQUzcqW6xbBQKCutkXAkfZVEDGLvoApQUXBkFuzgDKeQYGQGt4QWANjnmXcAKXCk9dJDg",
  "key33": "Bhdc6N881bHgSoXHfGkqe98cc287AbVDadPZXYkdjeX9VSxtYX7XN3ffem2hn8HFaKHyRie5HQSc3wQVQwne4x4",
  "key34": "3rtfaGspLCAa1EKsgfKMZ6TyTx1VSPZZ1rRjMgYuokEcmUyGg3f2Bz1zcxgaob8hBuBEJn1KDYzoXNYBWoU5APqF",
  "key35": "54emZ2mb2j6jVyLjpkfLAXpJ4CBE6AQHB1TAqKZnQm766KHQGT2TdXctvHWZ4CrjDB6jsHBTGMHHTSqLGuXHf8Lj",
  "key36": "59P2hfP5fJWy4PNbaFy7GaAUy5cAXp3Vgp1VADmKzKV2Pudvvp6wkEMUepfBMbQs6QZhZakiut6B93v2GMo9ztJN",
  "key37": "2GkcNBxcEx7BR9NST6vJWbozqVe1a7ZeXL7PKe7BUtTRumwnNHwJ4MNjHm2xTkKWnw6DGaMqhwmTJVBomzsmJxqx",
  "key38": "47R4FT9tmQeL1mLkAHMqECvriJ89JyxVRreGjFMRRB5LhHsnbM7rNpZZYfNMZ6gVbqu6Fc8jwhCrZGRLQSNw61j",
  "key39": "5QgrkfffEUpocyxYHpczbCi9A2TAc1YDVnXfpQHmK45Lze1y8pdtiuk7DY9tbV1PBzRfNBDfdq1dqmGtT9VLFRbR"
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
