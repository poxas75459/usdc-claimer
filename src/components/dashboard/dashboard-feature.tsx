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
    "52USFRDeptb5uduP4dfWaGZ4419wAZL5yLhKBMpeCMHfAQSb8kKDv7zK2gySuPxKwaNYFe4PS6V6u9PoVaRL1QqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JKcmsUcnVW1XcGYsAiXHBg8EFnqF7QRU3TtkJW1DVv8KaCeEqkx88dDASu6MLUxf9b1LYCy7AiUzdKFtW26ogFK",
  "key1": "5XHAvGjcBRxrFpjemznseH8V4L9AqbZrGnsUukw3iXr3A4S5VozkMy9bPRLpqWGpefJCV837Z2HqZS376xy13VZJ",
  "key2": "3aihADcmQNj7XGadUEwaDhe1BvDcvh6Mw4uwuV16Wuv4GK6r227HLZBY1h1H8xVaoPZhnjpoLTfX9stnDsshrtz3",
  "key3": "2TzACNuqsmSnQPcdexgUMDwVw3roWQKVd5jCNcyZPb691NUNE7vCK44CBVvcoAvqmBiByegvPKPTWPoRSXuAgLeV",
  "key4": "5LK3Kbgacf6qZrKrfjRiqofxdcxorM4rxrQgwUTToCmhvQx5dJRQPSHVyggSY1KooMkDgoDeZcm8pRRtoqpYqsvd",
  "key5": "2G3QUk6gWXtDaieTghyih7CXHYGocAf67Ydm2u7R33V7F3Eyez5ck9D4zYpuReNPhk4CQwXjUDfVG2XuoFbNAxAb",
  "key6": "Mndkyodaj3yAkwiwS9ThoLvcBE6KeRFoURHfVcKxQYqwjc7vBkwCoThPLJFSad2swe5hLNmZGnHEgS5yKt1fFQu",
  "key7": "yCNxHUNNEpzba5i9vJ3NgFiDzL3yVA3v7tdbsXpK7gdtKZDNXetyHpYrL3q2B91RuJ7yQBDD63sMp7Xf8J6mD3M",
  "key8": "3TaDMvZ5BYATNTFZjj7UHmrEtZTTay81uKwbm3PPtfP1JEMUPbuwDwhJkqCj1XTDL4EYSARmSN8tdijd6jPCCfUB",
  "key9": "4Pib59KYcazB3pn6XYPzcP4hyezHgmfG6xVUYoFLSD2tthmMy8hJfww63apfiCv1tVxmjVnYc8aLP7beGM23dvqV",
  "key10": "2nVzS6sqPDzHnEoisrza47CGAGApety6gCg4hDzqhHdBvfQo1m2LVqUkwGjmAMJyvAJvUEXfZKGvZZPzZNPjhAV9",
  "key11": "44Wcc7nWCsR9LRCQMTczMpWUZcNuKMfuivhHoq2v1JTZA5id3bgbiGk6MEQ2dXMUQa9DroT4wJ4juGFy69S98VwU",
  "key12": "2oiyJHRjeyZDcGcM9i45bPhYDK7FQk62VYDuYSaUgjjV59cyJiSjiFsFPHtjgdDrQUHxbmtGdAjZMcGQNzFgdnx",
  "key13": "3AiRNyuchaeUo35swxs547YL6sah4EuFQvKQPoZLvkzaWoVD6ez661jdNrBhYUXe1ZAZEBKV8LgMNm5ymmprCcEV",
  "key14": "4FDHHvgpKsNGdtb19JW4JASUaNAig91rdWG3kJDWBqZ8cHpLK7Yu6zzw9wjF9tzR5y1ByioAgzrZkA59pq1k3qHU",
  "key15": "2SBu8o5UH5oQA82CSxAsK6R13mdmFMnvVJQ6ABNeR9ST8QMia3HdxGV8os1AhrdCfroaC5Apd1thcFshnqvhM5Mr",
  "key16": "Vt6aHqtDEdnSAkp1Pc4kH9iEaiBPmAAAMyKTiMSXCTQQYjMaSMcnyrxSWPgsCqvrNCRDr1KxH2mnVpku4FiRgHw",
  "key17": "3pymK8MXwEYEbz5vMw1kMuFL3bT3gWNvemyCZ3ycmQWsyeZ3ajJAmE3a18GuXsXMCrmm6CguRX68LbNyaqp6RzEu",
  "key18": "2qy2pXg7KZB5HKEcvR6dLKmiVpNTbLD6qML7R22GCAJjDMntXYwwJgTKMiiRGYPxJNsrB9py3UGBDUp1Xdkz641d",
  "key19": "4EDCijsdqSZ6VDYaL6kofV8czq6GruEokoYeDAnjHYbCb7DKfQQ7jez7av1CKSqiqSoctCZzyMJVNPZDmd7YQVtg",
  "key20": "37oGXmfbDkNxsXY9TF25wQsUmVBU216x2T4naLxbWR4dQXFgfD8ijy2EQChRLTqkmzekhXChfYwTyBpAGhWnd9ex",
  "key21": "2cimCDSCamq9GzFyWjn81sLtSZ82jBG88THypd5RvDR7rZD7EqaobgFCSkZcPkWdUgtSzKYswwh9wBMc4h6zNcdc",
  "key22": "3DJJRbVqduQyC1mJrSaosAqhLGmW7u2gTfHV5HKy1tLF9dPw7qxAfNAaWJ2A52jy7uvtHJGNfRLJZaVavM5sr3sW",
  "key23": "22F1iU3oqWJfDVdyyiwcEYCEt6vP4he9oVyKQSTSz6AnhGyyvEdtM5D5dXtQcdDvYQga4VoRa4S6EpsyPHjGJjiE",
  "key24": "3nuYfDSz3NecvqsixcELLXBtswQvmp7oXVdysa7FeTkFJ4tNumssUkGTrCarqBR82kAqyP2uzt8t4vpZZHTT6yH4",
  "key25": "4YSp8ht5vTfdkgUQbdSFdVFxRn4bc6ykxL6c4BSEb3Q681Yp5RJ7M2keViPmXbWAC9ZjL1uh7Xs4143XUGTdR8H4",
  "key26": "593bJ1GaHgLDD5NQvKa95foJ1PVSMhzKyj15Sjpo9c9MPapgBzvP5VywuMViKsX76ezZVE8G35x4zGbJRZENmbne",
  "key27": "Tg4gnENYxSphybFXgii6G69kSnsb4rRA6La5ghofGv31Nu6bkCjig4VNhA7kvZzpanZU9SqpM1ibk8uJxehrjcL",
  "key28": "2DgVN8HCpWn9E6C9SnLgcPdVqkxDrK8ryN2AEL8fgbnPMhC9LHzm8HdyLYkxdZJg3EbnaGMfama7bMMnun3sVRqk",
  "key29": "2HLH5UP6PsH5qvbwDs3yN4dbi72b1iwfs8tmvbPL5tGRZxzgXA1tbGJmdQC5ZctsismV1vnKTUspzjpNrRGesWNy",
  "key30": "4L2aM9BTJU1NszoVM2dU1jXmqGtzCQQmHF6Pnvy3DwvBzgjswvVFds5Z5jsPFSosQ29PCxqa886qbBHB7kmTFbqD",
  "key31": "68RroEvQcmu3mfpfbPGT78fmQuK7gGv6iFcApwfjzqwXz7RVjRNaQrUdirfgtSygxktzcNVfDrgjcC9mduVwhZs",
  "key32": "2tVcLDsRc5yvStCjJnA1tPy1gtFNpBq9JwbeSP6A96QmN4veEKXEKX1quNpqHa5xhMBz7Fw4E14jr9pa2ZAaeDC9",
  "key33": "4LNC3oHTksDNmqBJzsHnxtNnXqyCzPUeytZb3GhL2WgitWsniUUtgRFTaMeH4ZHHFNrQwfiga3Y8wgFpEuvX77a6",
  "key34": "9LDb5gcvPzShYsKJVotweNE4d4a9kUwpECv2RgJBDob6W7fUdyCbVCvMow9Ngr2SzXzyJFPJ4uB57sZ7yysFCQT",
  "key35": "3RfrgD6azqeHfnuu4y8zthSp7TBDLrfHXFh4g9SnSsccpaA9eRrXJ9yMy4GPVcKpLPrsq2Kwp7VGDWfRXvYRu43T",
  "key36": "37ohEqzxnWbzHHFuLrf1KhM86TwTrNMBExstpNtY8g464Xd2ddpjsoNVqTzpkdaCKUUKm4qoh2wS9NQeM7R3yZKJ",
  "key37": "4xx4VoWMZy57xaJEYpaEkXpQbCyafNrUSX48zxPZSs3uq2DArFdNcm7znWmXTskv9ybv8ue2Cj2HrqVLXGKc1adU"
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
