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
    "2LfTdr4o1KdQ7NeuyrbCNPHhb4Q4Lhnn2MBDgA6PyqCmUAC3kWCvk9buhWwtPxYYA2iHYyscvJfVyLfEk3xx2qQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R3QNn4fJusmBUaeqeeQyy1sETUAcQRbmPtdHY3c8Lq47rXSdeyjiiZ3hezqDsdzCjiGfxfjndSvUnxoGpTvtGRN",
  "key1": "5mzzBJMJUVwLDW52eScbewkUi8msg3DyqeN1R5Nq1DJPvZEe22tPBMyNDCFNShFhA6Sef8jxE6AXzF3CRJXj9jEb",
  "key2": "4PxQmrJo31BJWrKHf3FqkzKPGPvKwFnEvDHtU18U435BNtmsRJMbar5XKUu3jtN94Hw4EBNsLUaowY8Y8HopZ5D",
  "key3": "56HyzTvdCz2s8GHVPTboHtqa2domgTErLcC3NTL4UvBGdeQpPRLkoupYoEUkqxDS1gH7E45BtnFHFsY2iLjcBaVG",
  "key4": "393W7sRMneu68ux3SJDqE43qBW7FjGxdthDevxRaiMVMKMYtnJLgndSrmYdbJEdxjnqZyuYwUTFvqthnKVYqT3wm",
  "key5": "5TucKszZg6xMxSR4AxrPSLPY6xMyTXHHu6q5sndHJz44SvsMEDdwfiG26ABvns1DoU3W3sdi8goLLyv6oG1eaa3r",
  "key6": "4Ycoh5yz6bnUijEZrvVUiQUCWjNjTr8FcYwQLCbGoQ2rzB8gDduwGhY2tTPgtU5W4rX8V5yhScNGr8JPQR5KKzgb",
  "key7": "DSX2R6dg9r4b4R6s3onG2sqYMQzGg5JnPqRLNCPMbaBVTLpQPKsCYcDSsCYQcViBhcTihmMzHdjjV5hcbc9RoW9",
  "key8": "43HrDhSywQzxnzoNdgnNE7VAj3wYopfkTUU8XdyPgbVr4CszPTobUjG6zmx2c5p6eJnTeXMAN36beG1MpaGx5tR8",
  "key9": "3eGssvRwW4c82prrAEY6fuzoH8aNkdHJcviXe2TFRcLiGwTHQA9bGx8Bc5nEwJRAZpRnpJsnk3YtVnPqtJC9dWnB",
  "key10": "4LkiqrNMDkddwUtrrokVodybzqxqp5RwosjQiASxFaYUBEycspaiJzEp9bbYTauEZYMWjvpdwYTcrJNBwUg1o5ET",
  "key11": "2p8ZtRYKLDGtZrDfNHPpvepGRmK2ijgTHZH4YMza436sGzCA55qZHmuNjm9vVRVmzgXF231TX3j8tCs4E5HhPRbR",
  "key12": "2d48aANQw7fcpPTHbkTQTxFZpKUi97umUVgifxrGgJb9yikjskPhdvBAQUUzGeG9yEw4qCuPNmtGgijykddFGUN3",
  "key13": "51A66f8MSSpTbmdrjQwKuUgN84C8cba1q1aYAwWmqYxFx4czVTRSuyALiNCKTw4Ma9VcbV5DpT5ZjWfDF7sxWsxz",
  "key14": "5z5jBH3mRgjuuXa7MzU4Sc3ovNPtbn2w1QBFDho7SD1crmwY46X5PdEPDf1SgJr9nA4fMoZ9fnhxDst5HKC5t6Ee",
  "key15": "4BeLhYUhNUzejujdEurpmUoUhs8vYCqHcXU7xN5GQS3rfR7dsqCnCqk4x8HNUKfcyBNKe5EudxGTPH8Yqqts7A66",
  "key16": "67K3LBWJujTQDdLhd6PUqaapTKtafjkB1AtBjbwQZR5ghccKmu6w6EC5oNydZsoYK4qEWDy9BVzPDcNfzGf7ZVQ1",
  "key17": "3HDwkYjGQN5atz3y27RtDwh7QVBkauxpwe2KxCk88YDRo6r4c5u6iEbcvQjD7oGu1rR8Mr3Ai634jinCxVNErjw1",
  "key18": "5EduparXtWCVkwYCYPwD8tAE1uxokbhejUako9Kn439geWEp81b1o8Z7yayhiPGmG15sG9BZC2EU7GsAtiHfrk2D",
  "key19": "F8AWFN95g6K4Zo4NeCWQRkXJYfsUcQqqEzLDd8f2eyipAbBt96y1oGD1a5Nmf1MZsWGUPcV8njAmbDKcH6nzJPM",
  "key20": "4gErmmRs71RFpu9KJmULvLTJsd4Hwrc3yLkCpuA5Sje5vpufsz3fPojZWRWqZVAxDRSVeMTa4ZstJe1oejjRY5aB",
  "key21": "5BVXMnmM6yNPZw2NNrgZzaKy3VhiKKkuVARevD1Vkna6jKeJizsCTqCLqBiw12xw8V6VhsUNzmzzwo6bazqkZMTU",
  "key22": "s9yN6fDoEXDdJXhjW6Sy1n16TNcXyLUz5kwdqjMZZAcDANuw3umLahAeCvQYhK7jhnicuwdfop7bYPmTX1ymzFd",
  "key23": "5Y84C8yzcf15pRhNECE5V2jMVPZTQFJZ263emiVx1bfcAqK6SGwAkh8bpCpLX2WLuVE54Pv6yRqLoCQdFta4HJfM",
  "key24": "51rh6KKFFzLXCbcbFhambarG6P6NvtCW6MCsxkATDRjfcoQWULJaXr4svNwjyBuhBR7BUUTopdhj8yvi4SuHvXxQ",
  "key25": "2CF8n4xWCEeGuajedkkS22GWNoo6TNNr38ALhpPtH3mi9zMVVyisQFLR5SuEo35tCVB869KtHwRFaAB6uYtUGPES",
  "key26": "tBhyc2Qpu5XtgmnJuTMsX5NnefhkBA9huHX5TKT8cCtkH3rynjczbTyAmYrpE9xLrxmnpZVeeMug14j7nrdDrnE",
  "key27": "FJowH1dugapKy3KEmKA44XqExWreqXMPcdeZuR7j7UdzXV9uRRkcAh5JvYahfL89ic7ti6egXwAGUcvapuYfqP2",
  "key28": "5ZFAqVaK7x3DPjCYJy6tXENrSLV4ZQjq7YvQxa7BFnyRykpBg7BPNsecr6SUgMvmuNbYsMqfRsMvUpLApoFXBDiB",
  "key29": "4oHDZ2wrcaypkqMVHJP6fMkMbZusCuMs3wruePJ77veuJxJEeraSwTrrvxB8nFjV6mMKxys8fHtWZ3UMqJkXXrN9",
  "key30": "2fCcWUa1NkyczwRVbxNVT7VubpfQfa82FQmMV6HAxD9KRdekTtxbwxfeyr3LDcumvo2MNe4Rxr1UjN4GuUWjbCzh",
  "key31": "41QwZxfPnPHsGmoepxyWXTHUqV95mNW91wRav5Y6GxEtU9CuaJBwvdjAZHJiFvDqaRJ7tQYY7pN7WjNvWpjjnxzf",
  "key32": "RkWZEZ8S3czd3vn7DQRftj2M3m536MrtEdHYpjr3Sj15cKu2TkpSYz3EFPZiqcyVy41CVCva6Bn8DunzzX56ZZG",
  "key33": "QgCq5B2hhphktaFwrbN4x9QmzYVM26oiPpyu4J72YUWfcMXy6WyQdSWkuGcoSdgNzWZhfkpbPM3MXHBrbmB39GU",
  "key34": "5EY2Q2adJBFHsJteVb17V9hQJPe5wt6qa9YBDZSG8kkTD1MUu5AaDdQ8sa5d8MCMPVs5TFJpgzTPvob5akDETwZ9",
  "key35": "3L3ge4BTn3fGbbV3MA6q67CMeAJmmhrnYKP5JaBaBJyt8wpb2W6SaiCYkPprtR62b9BFFLUjjddmSYY4AGxDpEkH",
  "key36": "4k1NCNB9KYmYh6jxx5F1oGVJwXADgMhSGhGuABQU1PpUtG4R5RQjo17MTycV72ncjCsQGYCWLjyyQurRM3eydeVm",
  "key37": "5gsrYE5ZyL2jYsrgnJF3M6V6NejCn2kmyKuL8YT8qLLobctE8oEirGfFJXc2VWh48QheWzseH57vdCDzwDYaVm15",
  "key38": "23BT5oAiWE3ej2A77j6utr7vrvNonENdxfBd6JZxXCrewyne2VCseNTK7GJFYkbwJz8zMNdgkTh4e8nQssb9SYoU",
  "key39": "veaaETBMX37avW8boC6JiwaMbaDyNCKq7VY3fazeyBSywDD3g9ys7KVMWRkgKZZk843f8pc17iFTnqZGTR9YJp8"
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
