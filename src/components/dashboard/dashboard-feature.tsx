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
    "3Qje9TJHVfDoV9v7EKgeENCWn1wEpoSiRkyjwu9Uh1KZPEBAfCpjrb1uwi8bvkvSe7CdAe91ZWkZY1iuwV1gPwoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gK1yyoLkeWPpcbnBjQJRw7xRn7vCiSvirepWFY4fSWJduvoEXNXVQnKg1wb9oUaeJQoWxuoCun4gX9vuDCjeQxo",
  "key1": "4DXUdnKAULRPQN8mPL4iNvdiCyaMbZUYq8W3Sz7VxsjC4HJdAMmSC1yPcjwwAdpT3Nd7b347tMAbEsmexTubdZbT",
  "key2": "559eGjw38D3MafPcMjwusdxkmC53QdnFXkXAeE2hhPSbvzvrvHDisgEarzYyojWWDy5UDV5b4qVujLN2mo54Vo3t",
  "key3": "5G7pYMekyLJYRgmpzkuhkoQHRtbknX9cwwmRdQHCJbqoEphwxNvxkMVmFvBqUfDADpnFqzBDwDSQAJoEKxzwwTQA",
  "key4": "44RmxyhmEkAwim6Yx765qWQ4vGZQkzwZtDvSzGAFepxRCm4n6eCTh95HFsdC7dsuFrSu2yxFe7dtNL5XJoZ5UoDD",
  "key5": "3PTBmPtvqNR191fWi84tiPLrrpeSNsC177vJD2JmjtFSARoXpcNtNpDJu3vndhd1kZxMQdkefpgEy4tPTLrTxXM8",
  "key6": "5569BgRyrCQvDN93FPDdMuVetTEn7vLNf9E4AhsMMS1hRTjBqFm7PaUewE1SVvAnFHynjHepYmePfgrAGf3iDsKx",
  "key7": "3gEfZKomhM5FHfQvpnTZdstxgzWGfSorFq4eNX7HtHqDS6GjUcJmS2Zssbr1oUuZ7GR6cVw1BMX4AgPMcPufRZAQ",
  "key8": "4BGrmcSCs9Tg7XModuQ2D37BYVGjQ5aESFSMvUM7Jb4i5fFfdW6Aq6sDVsmzyBn4FNGm8eLePKamMYWQxUiX8mAL",
  "key9": "5HKreUdkHcwx9ekeajShA62N6d2qSb2MAd8EGyi4axvxDobbqxj9B79U2EiQXEVku13HRv72P9XQ3KWKi5wE2JyV",
  "key10": "3xFX9HQmygm3NjrwHwdpYqcAFr3igYws7j51YmNmLrovhXdeiYLV9PXhpWgo6EXX9qFZCWJQvcufwYW6nFUWbUoD",
  "key11": "FfTQCo9sPAzSBdN5HjTuhzBvjxdGDYqu4o3ZvgFd53tmE45jYcQDvXwqKTCzNq8qe6zNqGoRwoEC6aofaWRvUww",
  "key12": "3M3iLm2KGBrn6qHqRE1GwgtWAyUtLECVujgMqvYHJkTxoazyKmfaY5hnd4udJhYhyg5z2oSTk2jkgpgqUggNppdP",
  "key13": "RXkQ2D2LnCbG6FaHpPKzmVewJdja7M4L8HbwknwwDg6e1qyfWFzwWTND9DdfTva8cPyuh8tFwe9JadzQzLuWgAQ",
  "key14": "3twZNBFspB8bnWwQQ4ksJsdNLEV4zHbGxZCN2ynjjQFrenJo5jPWZGCse1gs8Ve1oADxGLqN7TXt9jkZ3hCqN8EE",
  "key15": "4wqDyB5MeLWH3KckjkbnTRRy7DFELVu4Qyr8DPP7DD9iXoFYHwuT1vxoBYE4fVdPAskywTE9a9przLqxPSk1r9UM",
  "key16": "r8vsm4s1pjPYjAkpySjMHd4xxKY39G4Q9gA8iirS6fVrnM7uXMPWLFsJukdrHz98g7AJpGpq3b1SZWbBCv72DbX",
  "key17": "2T8qx6oDPCb1xwwWn6U9AvoRo6kbwwmgsECRxcJNHapSdpEYUZksPJpnkCUj74H7XnReSSm6FuVrZDEEEbnxEMqg",
  "key18": "2LvMSCDdLfuayG1wwDXWkrX1hXYvbaidrJLUcFbkttdjq6de7FT74eSJwQ2k1hoN7ssNMErUfXACu79P6FGGN8YM",
  "key19": "4BdXvJwywdfrGUhrPX4PFz3nf62reTqxe5UgYx9hZ67FQDG8EBu9XeEPX1pHzrwNxHsGhpPTrneU6Kdqe4LNj4zT",
  "key20": "64QC78ARWKdrWhe39LUpLMGPzhBhPVVJwnPbwPNZHDCNcHwA9PaRhGbB3EGAYF7qWnnxvpCdGoNNzrdErHsWkBnw",
  "key21": "4rbSznzUq4U79q3Yy1t4zWYVor5m1aXYtsLck991AME1gbghUHqvxWMEPHmpzAG2aFUPxpmmyzU65iCzrsk19D39",
  "key22": "2CdVc5mbFJfXpxw8mAKb8ssTXCDDg1qgdu9R9yq61UaGKrgKkVJe4nM5dDMh99tqm4VQjpGE9TmZCNtQvCDDseTR",
  "key23": "3yQjdS4LVmoox2TkQEie6BmHUpcNZowM7aFKQjMn5xjChAzHFgwXHXGAZeYriyNmyQ63vZeoSuVqzWwZhVqTzBm6",
  "key24": "3M4KafMesfntRYCu6jGyJCK35duPpShA4SgpKzwdxkrGntGrbAU7q5bnGPf7CnYMbu66Cm7TAxYQc6MBKZUhNsv5",
  "key25": "4sbxjUWcZpLQawqEZJ75Vh6UPL5e9wkf8hiiQsDqjiWtaCDU5wstd1GaPkQeick3vMfpqTo1DZWywHp1mVNodHwG",
  "key26": "4pLUZioSu4CEWgGk4QDi1XJ67xSTsz26cQkRERJbSHMFTHxfAMNGy4w57zRZf8kfX7Eiq1hGR8z7LzV4AYdJwJUS",
  "key27": "5D3HWL3paJiL75ioXgfGnN2adz1uFLfT4Q8Lv9V9VW7BcdbtZKkyK3PyA1EXPMxcv9pMczN9HGi2sgE1Uxx9ohD1",
  "key28": "5NBdXtTYDpNq1ugm2XHSY6A4HghhXUD1BqbKUMRJgjwUQAj9KkkESnBKY1xfPY83CXUmpjwnS6KtwS6EMmaNCW88",
  "key29": "5gAo9kJgtZzWUThsQCAMYwY1jyFLp8ee38Qaek87YZSbzvyC6DziwZooi2TTQwYMqqEhza6nuWGi6hPn3jtwMvBt",
  "key30": "8k8AjWhcUEPtkfA3MFwXG7nUi38c7M4vKFJ8j4VYQDXqHNJYS18rT7x95pqEpCjoicyc1KW5suFrW1A6XHSeQfP",
  "key31": "5Vf2D6vZfUUqtUZvjdSnLcC4EpQCVq7nHtxJ3rcaZS2oxmbBDRhH1Ygjr8WUZXQqHaQVdG6RQpXmZF8FocJiy1kU",
  "key32": "4DYtthJ7XaC7v4k9hDGfrLE3xJqSfSQgrom854vKh76bZ1Yyvyecv6L5Q1DezRRbKumjLbc252jeXsQ4Hcc7ADRN",
  "key33": "2K65jETpnmt2mPpMs7V7bLuHJKPGFUHTYNeZ9ZDsy7jZZ61rFhCsRf7o1xAq573wsK7Cfnjy2FW6ZjUgAQEEuhU4",
  "key34": "5gEvjTLMmmcF1mNtDcysXQDLdxprdUYwWuHLZNzeeyWigdxQgKnQRPrQuoBksu6CHWUpZZNzCuvyLYAShDyLHkq5",
  "key35": "5HdA7SFg4zYaTdY5ZAfXFSUhYon5xKzqsEYvP9CvU5jP6D2ydfrVrWA54yX3ycwjr6hPHTbpEpqnfiHk5V4Gb6cH",
  "key36": "4gF9SMQSjSxfuZMX4ExjQPp4V22XLqnZ8cMHk84SgLMRo45UgEREAcQTN8FSvbDNNdP6aBnEKEopCuZahsstBM2b",
  "key37": "5V7A5W5ff8vPgxYa5xHbC6XG5iP1YULzucikVffGx76SXLwb6oVqHgzdMoDPHXGh3SY4ccR3qi8ds2FK9rffajDh",
  "key38": "bcLQuf8x4gLJjhCxkrp65iQXodhi8nhRgcq7NT8k2rQNafB2rNYKmY39Q2Cbj1Q19NuYoxsnDu7qsviNDpFG5UY"
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
