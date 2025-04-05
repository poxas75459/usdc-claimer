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
    "KsNRMDxQQ2mxJpDHifYJdaaQJXkuQ75mzRAGc6D3zWLWmBbaan7GiTXK3Qfz4Bm8Xfv6bbW5yAW8GPsMwgPADc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "562sgvy6LcmuCHTrJX7rbtfmfzjxBA7bzjcvpuEvmZM8qdeBdWKiercpZypptvG8qwNNTd8XGJCnZJL8o99Cua19",
  "key1": "3JUA7ziaUHjSkDRz3RhLwGfgV39LhDr9fpPdQhoTcuXoxsvz93sYQwiYXKqxzWuVgcHzTqKqLK1cVMmHecKKsxLP",
  "key2": "Hy8eDnMNszkN7VgPgwKrpV8HTENTX7YDyhE8BbfXecUwYy3GgmNiKFU8nJ4d8yqyZeQ4NEyRpfe7PW39dqDa9T6",
  "key3": "3NZYgzYWUsRRaof3eD7q97QZfz1VkAuEKJccw7ALjcqSNPpwmBwrPJ2tH96eqEG1yF4nBFhTSGi5ijvSHkxW3ojc",
  "key4": "21jczBuuC6zoPVnwm5ghf3cYe2UjnvLb3AZptU16cWaCuSmrXfgD1ZRSi1smCxdRGFrwQHF8DGRHxyM7GgWnucuj",
  "key5": "3QjKbBz94tWvB2hHppfgqmyzTbd8uxtrFrhxUcsmPSopnYrmaHzbVu8Zr6CaDLsxU2YHeMnm9MR5Ao9zZT63xzse",
  "key6": "3AnTJhtZWzkHmWadz6pGDHFyLc5mnK7f234vqepWDUJthT2NY2cDUMJ5EHeeLYegCWRg6mPueZrf7BwjHXT21QMU",
  "key7": "3vwHZC5LoinajswGLHdXHUQ5U22EG4aYx4BBoxh8SjKn7ktEXyw6t6xkihd4v6L8m1z14JW96aYneWEAc6JLrXQm",
  "key8": "4NNDv3qeGytthaSj6oRRpQsFXDH8TN1NTk21aZVLbrLu2hmdmuyhTDBM366RMJMfXsHqvXyLboq1sMjXzpY2XWCy",
  "key9": "MjBqSs5SJy8dkbiXzBYH6JrKKkKWC5UrJRbEVxS2WM7X5aMiHqmPpwTYamih8QHXYYmupXg4QHWWzk1T7QxcqkY",
  "key10": "5xDW9LBK85Z2mcCBurwSNA2h97hAU5vkTKhnGrpMxf6yEB9CTBhUd261iM7AU9Lyhd9Q5Rcgc86tg3mLYmx3SzXb",
  "key11": "5i1Vfs67b9hynayBR1rT3ikBDKvMhthLvQVBZVujDk1HiQ4PQASjfvbo2aBTQqqCzjj5H4FaEDtooZCsgBMKGthn",
  "key12": "kXFJDJSxtP2LPz59LJt5UzuxRhnYLpPoG8noHtZfQy3eD9J6T1Wwyzs152YNC5oDJDeQjQPBgYok9HF9NymAHhq",
  "key13": "5fvQ5gJQMHj8zCmfgn3q61VjzpWCH2iBjyrKQfHpDPZWc93ExR1an5LE2HUUFucXrubVToZMgMn4rfCovHRUwJ82",
  "key14": "2NALLSxWzpptARfimVn1TwJHmmeeTadjbLNf5UrwMJX7oAoKPhBMy3c1CTQM62k6CDFv6t1uciLfghqHThxtLMrd",
  "key15": "2USJb5S1HVHFp6USsiW7uQxBbqni6gWqsYXKgER4jqhgMvzPS31sMvia8gyN5yPdFXQs2ixFwmY5W8fbjJwrAo5G",
  "key16": "JN93TCAs97QXXhft9pGC9K3MzXLf8GUooNTk7uuKu44gSSCr1VTUBTPTyAoaviLD35dx3bwPxXAtCDR7C6Uy7b2",
  "key17": "3GrRsBzCAuG6xHxmhoXdFiJwyirFZ81bFmipe5NRdxxVvK2LmwZBaHAWrUTUHPXmMy4qeeDHK3Nw6jh4apH7psaq",
  "key18": "4MHtrpd2NxBbufDjLMH3vKYAy4oUtL5HAUtfkNa6o5k6gyQUUnhdWjnB9wfCEDwWMrnqetN9CmHgn1vsykrJt3bD",
  "key19": "3e7BbDWK4ypa9972bSRLaPubPw5cfX5aGdNqckuBRDXrooGWXTqpC2aw51S1uyF6XgLV5jDwCTXQVSWNEkEPEv8C",
  "key20": "3sRjMwYo1jdKA8hXSmn9qbv5zVBd2hvdshfaeVbticSLCawUQ3WRbTBxRAPvQGUunGEEviMZeJwACigM2F6mPaHA",
  "key21": "Qwi5kstHkHWau6wPGU7gyn38CR4CK1omopqh3mbkviKQ5s4peeFo7CwztSVedGRsvvTb9V2HgHedy722S88VFWg",
  "key22": "4oUQJhWc8qjoaWfLsE5tE5TZRF8YAHssMHnL3vUDLSEhVvLqUjaiCee1gtCyFMVnHvuZppcFosrqd52YdqmJN9WZ",
  "key23": "4RQDizd13vgRqVyx1B2KuefSewAD6hG1VaRHRBq3FpTiTxrbD2Ju8yNfBsLV4gmwHeSmqpMduvwqznsdKDEsW7XR",
  "key24": "4Xjf4U9NpAvd9pYPNtwDXmz9XJ2mRezWRidUCHydyyVAbYojzSWEbd2ztFyCCgVEG8VbfcvzHcf7RhqVt4tfTtoU",
  "key25": "4BMXyYqBhQtQpxYpdKHRLBt4ZuG2htaH1pwWAC6oDnzT7pDNhzmYeAdmFvPZeuPb4kJ9zgmhgwECDmDpxpXiE1xp",
  "key26": "41g5BngMYC58h4wA6VzS1CCHjiCU8jnpcmPu3fA3w3qKxZP1yepMoNXgCgHnGLPVfSaU99Dzn1SHDC8xVGktjoGH",
  "key27": "pmDaCTfLhQij55bA29Aw3cDh6etPc33MwfzHZ6vr8KxjkctmM9oiVKQQF3T4tFnfVP9bYfFAR3z1VXpo6dUzrdF",
  "key28": "4hrYMDU9fFCQrXiN4445fYQNpocvWFfeeNkQDu2ZAPrUR7omQvXSvvXHpukYr7ckEfgKHHJF8GoFV8pDZ8qocxxn",
  "key29": "2agLE7ZRZVJrvHAdpzAdHjGTvMiEmXShDVfGMhw9EnfD73h6hKZmaJk8YSVNq59RxrPPnWzRJZPZ15yWSRDKrYYy",
  "key30": "31MKZ8hs8xJpPEVCiTaUsdef8i2FHQUf7SdRM2hmTk3TtisGG976Dv8eDdu8hBvufSfa4QUfahpLkV4517ekPwFC",
  "key31": "3LMXiLLifQfaxQ1FvebS9wY98bdXEtS1XERamqHPqzu8h6Eniy1HKo6w8xrYGpazZWZfjJoyLo6JysHbKjNJUZvH",
  "key32": "3CFuR5C37RQwzD7rrxw6mLu4cKY1hTFaTiyPnm165a93NBXp6K7f4VhfBnJVnHakCQovvDRK7n4sx1KynNccHvaL",
  "key33": "3pgSSFPNUPvJHPptKBzxvsNgGXEJhSGgU7U2fAEAdCH135SVVcsM1yDCztXxR6enLZKNQsjdSBKZp7R4SrcPKgvn",
  "key34": "SEVtoDQA3sFdXg4RtvB9QD2tjaCatdU3qSSkjYxPg77R94NtPRip5GKwzGJesNTTSibUGG5694yB9UYXRCzXVYd",
  "key35": "5FQAecKpexUZJFaPubVK7qTtiEAHtkrhSGucpUBM2whWWz2HeW6sBqgJThyfcFGYmjN6TnZ8oK2WDRUGfqb6JXHM",
  "key36": "5X7mwCWD27kJnbV6bFZjED4e43bk1H4Jx5FYm5NLrXcFdgfGL79dM4FPRwPMVHaMpqgim2PpbaRh9nEtHjNneg6E",
  "key37": "4gSbHfJ4rquniKrPT5kp5r6JymMJ3aJvUnQRqtYq6Y8op2nz3dpGqyCRxUzYWoBYhShCYd4XfvPvKkdFZ2uLFudT",
  "key38": "2vTjQwtrTVz4L8WrktG1SnTExSzeBD9Zdec2HKgMN41wYDjxtwUh4VpB6WZJjsDPNBoSE6h6GdaZ1V7sWYrrvjQd",
  "key39": "4zgFGNPyUmd8acdAN94fBh7LyuX3kKhv5essgnTWaB6uVDSXfMZe3VWNMARe3USmXVhQWZ7CwjHvwZJXQM85kZf2",
  "key40": "4uHBtA5AbrtdYNbqPYZ9eZ7BukU8jUMXsvvTKBMpLi5bovj5pmKXZnMhwXj854pZKpz5joS5okSzHivmbAtSgbNp",
  "key41": "5gXzgaeMSTNRayv9vDf6aRjUijFk6QeyFKZPvCqkvQTS397d4PtZ8F1Smj3umC8KwtKqeYyQR5fvaBDmXX1NbNNt",
  "key42": "4p5vYq7f4b4nG791HhmpFjvLfcizi19TwwBMadwU1e7BV8VQgbPSEf68fJD6EKvgMJK9QYTVtPuhVmDhoxps1AL3"
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
