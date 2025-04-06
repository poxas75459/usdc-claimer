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
    "McjdQM3RhF45Ptfem8H6ymqos99aL5dTRKDke1jFdZeZSp7UrjvJ4qM9WfeVMWcxqiGLLM7Mc8uMoaZGEUAoyZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26m6hKnqAAufqZRNprvcWL8f61aZzs357iFRkNARnqX34YsBaLYnjhKWp1vouqCAr1UoUXHJ3SvXs5KWAAC843hi",
  "key1": "2Ngb6Ue8WRk6mSXvTnD4tWbxjjiQwmodTBV1LG6j5i1vZVBL1sF8PH1V1tk81ymHA158WXqJcxheQGxgVPyMGved",
  "key2": "3ib7R3SQXzMe7h1uLpznSRM4C3XJVK5zYQHEGhdXWawut9d4boHxhpDXAGBpApqD3N3GJJKgB4AFjQeXkX7b7JGg",
  "key3": "2YqMtVUoLkEbuofNcJn77wxseUU4LqG8FdP1r3acp2svGXtQay3xhjUeKSFgXH5CrSUVkgRSHDc6VgHHxNW6uLxo",
  "key4": "2oCB4JVpwA4TPECq6Wg1XWV1xqiNKJqE1st49nnLS8zKz7yqDEVdrMoF5G6koJQJ4migRRxGFqLe2XWtxy9MYSEn",
  "key5": "2Dw3KbXNGeZsUUDkqRUUvWKQEL7AaeXc9JoBEAop1cjyMXXxkZHGsUXqRizsPJKKNZVR7ZUEbexABwocqkFH1SqS",
  "key6": "2FiPRyWE3HWhU8cBQAW1FnffEVmGW5tDEp9gZCtxFdGjaBWKThyCZNKcfzdMTVg3qTkeEZTXetChHKqjgBQ9C79Q",
  "key7": "5HZyqypDWTKM7JGck6hQ3va9uJ5FPcThp7JZuesgC6cUD6xqGcMoeYDcaFvWooracPYjdTaR8VgeJjSMVp8zTet1",
  "key8": "4iPPfhjhneLKVXQY5L7hnUkG5xky3uxCpTtJdtwztySz5QwmwjT1FgSg3W7YgmU7Q5QzBoXGyzeTy7bmHxq1XRJn",
  "key9": "sEJa7mZsbSfdKyRqjQWLGM7vYpFmh6xWemXzeoVsappVR2nKXzdskK4qBBke1wpAThKaF8Yqkgog2rQWK5uLCRB",
  "key10": "3nCuX3PpituYU4jaJrH7Wz1YgYmWgSz6FVahFkusxuGZgxtkyK2pGpkzNV7fkQ39tyLJzYwrvCPXgkuCJaNVvdQE",
  "key11": "2ngJNnwdmutmkkmXkEvPfDgujNNzgamuXCdKESQMZgutkVaArjNKurr1EMwZx7vNPobiVubk2wWpMjvPt3pBkuWc",
  "key12": "2G6pvdgvvwyrou8qGyDr7kNK2o4K2aca2H16mM5nuu8Z4Ztg1gaFrUxr75JetvnBrQNN9LuwWChAdWEzvcUyzbBw",
  "key13": "28VjZPzjacD91frfJTmK1pE2qyMEdGvcy74bNuu7R5kcGjo8CijsjQ8LhF5HAWGQzagPMEkefYDgUeqNniQrjka6",
  "key14": "5ufk5cGbNzXLxLvcMJFreJDm3opzRT6utg6c6PMLBSXstBK6kVG2YrqtAnCb9o3EcGr1eEjqYvKusxDoaK8xCHB2",
  "key15": "rryaimny5xQo4Pszwp684vNaiAErHeC84zLAoLTz2trEQLm7PHf1qU33oYWBSfJyBS8nc2KiK4Zn6D7gY6mThoV",
  "key16": "3geMot6JuBntrpHsjVoJ7ZnhEoRrAFMZtrxcPdQrwx7Eqx7i33oWYiyBmeWRNBaAsEqR4YriRV72q6fnecKXX4hD",
  "key17": "4Bt2miiUqVPLpoKcGhUesJR8c44VoDic4z3nSDGAuby1mjHjcvMz3rR7FBiU5MvMfcH4GSF9NCiJx5gNZcWLHKZ7",
  "key18": "57QX8iN1CmG14EBDxX5VpwHqbGUrM5N3ubAM1KFEW5Ex7rN9ky7iPDrvQ19Du3AwLPM6bLp7hxVuxKkzR2aGKqMa",
  "key19": "5gfb6L4f1BmSpbqaDTXu7dopbAF7Hr6PUfMsSLBVKNHc2LFocWSpL8mCWoA9QgDeuzPUf8J8gY3o1aGRqjYgBNnj",
  "key20": "64HWqJ3TpcbZQ7FpTo8ebPohwvE8xAzPULaqLpWWDnktV4DU4f7wxiZKaMvUkTSMgg5qNdBSQEh17GcDCkYBLXzL",
  "key21": "2YASTCQL2dEcM3HR6XSh1dhoeitR4WeWzLKBTjLjiUBBuEpFzU2T4LfTfuLJJX1xqg15LR24SCBRAg9uiWjKnTuQ",
  "key22": "5psBPvUDqhTGxMyWuGBzPpSj6PoLDqaBBXZf8aj1q4ehRTcJ3AC53MN6ENoRaX4gCFFPykRLToejKi3uAgUb4Vsv",
  "key23": "3mp2voz2gZFwpHRTswNAgcWxbvMt6DHVGDuCLmsXdQTWTPqJgNoufBJhUTLwVdCZFxKWA71L6CqwtXzY7qrsBvTj",
  "key24": "2s75RbpgngM7Hb4m4KoVoJk2XwBrmhP2SKmCUxFVZbAn67paqLVbSt8tycg4FQhv3sRgdDHcB31tL4bWSVh2geZE",
  "key25": "4NX2juVwRtaBY6WRu7EW4DeqEMwwrKT8SMi7y4H6eVqtm8aSn7vCJ4cLJMCjr1rwHsmMjcngnbqJpmtEy2TgA6Ek",
  "key26": "4wwo8w5xx4VGmyZhmH6QXHAG7FwEuhJKFdHcdua4nxaCxG5hvPnzS2kz25GAtdwtmJezRt5uKNmNi1GNz6QWki5f",
  "key27": "4hW3iamRst7eJ83tHF2VEDXXmsDkNL45jTcbzJE4RiUnULym5TEjTwNbrzEjbPYMXMQ84wie3xUMfy8gLs9raCyR",
  "key28": "5NgPAGAxM4Fy8q79agHoZyUzxpu3LGR7pJKKWA9FFZyhsrjeCCuruLJTkVHoR4xJT5KGfWUwPvRfLHZn7KHthXtT",
  "key29": "4JwajG9eQB3iUmC1ngAhz7GM3vUm4zgQaWG2TWjHKsmWSqtrhWkmL3i1y4q3FJBvAcAqymaL5cem5ak8WPggwNmp",
  "key30": "43rYupqLo5iRZyUSomGq2ZAQcDeZ1uKiDdoTvjiBgsgeoc79eoDG6SxkRWhnsnBJvw4r5eFBY9JPzfQzcYmJ2utn",
  "key31": "2DnXKrsvULBNLNoZ1Cdf7FTyTvWKpAj218mXsJWaXw256xTnvkmMF8t2XaFUhmnbzwLTYXu1ptcHmHUh7H97eXqC",
  "key32": "1rJcexnRRejWCV3GNBEQwFNrNYfrK2cWvCQcqyopS2km82P6ZbBhHBqjB22QQAfoKfmn151yCkgpnw2AJPtTvQn",
  "key33": "5GKp9ZoMEAMzYNBBNZy1H1jtSJQ9BFah87WGPdhbjps9Mya8jZTDYbZ38HURYSJan3sqcWejkLczitdT2CGQBRH6",
  "key34": "2VkFzDQRZ3a8esgVWW5QJFECbeyVdZDi5QtpkLkiwgH9kV24vtr1oafSwfhxTtrZEutGEAhYi6xCcS4XGgq7fgbF",
  "key35": "4otYNzy6dWyJySBPjB7EVKSc7QGgciATDfBoNjzoRJkKUqXPkJWAcLL27LsFEFoEanNmJ4oadZFtUQCA1jS3nGCn",
  "key36": "2a3VwJvRhFCKj5K4LD1KCGnFnK5bzRotepE9FomA6tmYL49fvJoL52s8FmSsAJNj3mrcy5VJ6dt4C9w21Noz2hpS",
  "key37": "3FU7qj3y3xxQCFYb8vynUsMYvYy3KHEso9VzP5Uz3c8Df6NR5EkUJ9CXmMhhF6SASsmdNpYy9LMhXKwJMiAx4poJ",
  "key38": "3usLpV5SidW7Pxr9nhMg7w8BF4ep1ndXwprCJbURmPe1iLud4qEAB1djYitnzBvwkXNMfdaSNWnhEQaeBnCuYdCG",
  "key39": "5hQjdjseGtSZsZpourB4qNnrXMTaMMFAwFzaTEi1GEjGMkXgikEcWxFxPpEN5jzMzNi4ioRgoK2wELuY4b5itW1i",
  "key40": "3sF5sjZyE4H82asY9M9yNZRhCpwqxEbxfCpR4LFNB9RuDmyfdADP5cYqUDjC8vrxn64mnjjqBPGSFfDrYNifqsRr",
  "key41": "5CxgkWBXjdPfEZTpyoMNsLpWvZTRc3RD2CvJp335xKjcT57g7WLdnfsTpu1rkdWFibj6Huu8tBwBDLFZazLr5SJg",
  "key42": "5LEDwXTPpEeh1y7EwtwZVkuFqSAPo7mciZKxaazXjeCBQ2YrEoBkwBM9UZnad4wd9FGHLJ3fzRfevQBduhSaBBFq",
  "key43": "2TsrVUsCFMcvpkgpDmtYNz5hRGkUUbU96VwJjFDL7enPDWcxbYzvTDHq8QeuDiyztdVmx4gQNuMtS7yRXdEtqRDY",
  "key44": "2TCFyu8Ss2snu4MN62ci9JVRgmL2qaYc7NQ2dESDU4nSiCtDJueW3stFXsucR3tDKnKw6JHH2LyQS4a7HmmpJjcw",
  "key45": "4Ag8y7ZVtTV2VKnV4sT2VyUEHZDoAL6utWcA9mxyKtKeafomf3uKdG1uKLPzY84kPH4cAQPe2G8uFCh8GREkGmdz",
  "key46": "2vKmm47kHTDfrQX5XD7P8SWdfquGzC84Dk2Q5UNbwXPuJuKN8aEV13deBJkyBnyHPgk59Njk4FgTXUg2ADueCJBH",
  "key47": "57kJ8m1iF6FxUXufbhD4Dn94jVMHkGg7aCcjyzVX8mS8gt7e6icDcLQoQkF1yVUUjkvgAyvL28c1sfSdmxTBKB1z",
  "key48": "62a4vPUL9kBQHXMyEgjQPkpV6gFtoEpgVwj1AZ7NeAuZeBWXeriV5NGViHJsRk6df6gzJECPrwNdVGADyM1YdzSN"
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
