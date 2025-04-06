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
    "3EGjw3dALyKENNJYC7Y2AFPYWntpDjfYdt22ALp2VaAZvRFjHE4jDT7tmSjg936Z35yCkz8dRcpFMtRGkaLGenUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wAcmi4zLkikeNj452V8nqdXD4evCyzYYRMJ9wbHXxRJQzJE3Hprc2Ags2Q999JL4Q1DhFYsJja8X1ci7uyff1bV",
  "key1": "2GnyskQjtYryiBT94fsVrxRgE4xxYi2HgEMboDZ66vnL13ixNGkR7wHprscdGZSjtsZmkLXqAL2XYZRWm7JFTQYu",
  "key2": "HGg3uMzR9kinq3bem6Vb7p4NCvxJoMeKEzKD91Jn9XdmCEXaEhbeXJF6Q1h169dYthKyCoPHoJ2yuWuoyysDFvh",
  "key3": "3iUtuQKPV3BdZf6gtN86kQsgGGNeNebizdxSQzVYnFMjCN8T6DVUzYeCofk7JhgCteDwSJSiH1yScwSfNYnbBKxu",
  "key4": "5jzJuqrMGSj8Rzys4WoJ1mPbRB4HAUvRFMxFiA7sAtZ3D12SrjZo98tnzwo665rQRqzkDAwAci33QbUuMcLdpMoE",
  "key5": "4DwM3mHtDDtKmcL5mnDjtGBwsn6MHdkM6zRtntz6fEKL7jfRpzN9hdwuktc3cX4S6dtJwJLzcY4CHyrNNkAN7yEQ",
  "key6": "3PD9PnUfyfW19N7aHVtUWYqYVwF4dSiNJD8i4N9eim9z6NmQZWUUZ4aSqhWkW2ivXCGG3gwjr6UxqQwwzzEcJ9UL",
  "key7": "4fpwZ5GzWkn6b82CL1cdKzpQT3prSBQaPwcpGia6T5SnZ3b1YQxWf6yQoncVP8eYpwu4SZkPPaVuNd64WWDj2zkV",
  "key8": "5ApBYDAcz6YP7zBXXJpuio8eTyfVqe9RQhE8epPikrFbhSvtBBd1WweVxCv1ZpPLwuY7E8PuF5kVxLLYCbbgWPvA",
  "key9": "33M76KhUpDqWmtkZGT3ENRp5CyMECqUe3XV8q22sgMKRR99eCo9rqSWbfvFYg527NdYimswB5sLxEYv54KyXZUHa",
  "key10": "MvApxXmSbuwBRLoHxk3rds5U6WwGjTiAvMGMx13MFgW8ZQibLkwejx8viXN7sSfWthE7vpqeMyRFMJSswJpJcnx",
  "key11": "3PudLEq7zu5C9SKDiBAQo78S6ypeah4nokW5Q2QfQAEYBqzaLgvaFKKKfgkd6WteqVtnzdkUo2acdoA1fdMbzdsT",
  "key12": "48fZt5jT9saSZmMkFQSWoPbaL9B6sNeuo5rLej9ZKzqMk8aRfw78hCwbMHs7AUjKWYcXf6k2dr4wcqdmg9XrawhQ",
  "key13": "2KoxSpstFN31QQ5P244UPnL9Jw7wQCjBjwe7DmX69tSze2Ct2sxmqr3x6h9KLmBP2V3QQmHibFjFvPgJK3oJPnWL",
  "key14": "rWi7B1jrRnn6LHD66Cx7qSpUKhD8EnuY2hRT6mVwZZFtz1cguT9ZYKjBkaGtNAUKfEPP5AjwVBWqLmZvetSDGTM",
  "key15": "nGFMvBERqyMRK3e1Jt16JHEdCxvMSpJtHSpTPS2XZpF476MJXck69g9Jc3ayF2w3asnh1sBmYPhkswTkNfL7HcY",
  "key16": "2A336cPs6XTxMNX7UHFSpjBaTb5ZJinAmEGVqK8BetUmXWbXUBVkjRdV4wFNb54ZwPm9QZPRVuRRpqXBpeJHw8ed",
  "key17": "2CVBsG4azWhsyr8Sf9eyD916kUojC1rMjqmfDKELRmTzABsCisgvoc2rLByYZ2tWjhNA8HRNowtEkzD8D2pqHxLq",
  "key18": "2xiH5bD4eGnPgSWuDtAVfKGX3Sp7Brr3JWmCFqhVsiZoRvsZ9vrfjN86xfY2NV85w5ZgdLJ6T5vMu9GS8mMV5kjG",
  "key19": "5eRTaHSn8F5Q6FXojvSNh9cqFBGERq3YPkPRY89cuRzYgYAReTD7Rb8uLnnVaNL8wa836dnhWFX2849dDQZg8e5r",
  "key20": "3CxxpTKFjw84SiiW2XBwnCmToZVjaxun9ng5xnwbjh11cEvFgiKchvsNPj7zDdXNyoteSge3SPNBbfGS7jvHe9Jw",
  "key21": "5biwuVaPkqk5T5A9VErSwkcbVxnM4uTguzKAv3v2SLyKsBXhphbXRg56snj6qkEcffuSiSM4tFbYCPkuATEMRmtF",
  "key22": "3LewLX4iJstjyQqfq9vho2cPV3F8CtYRyiKqCPi1dNJXBuUk1TYduRxhBmSxZoqjasu84GRBHES3u6h98xpUi2x6",
  "key23": "3cggTfX2ND6rWuNopU2ZzwNZ3VWZko9aSZzxzb4P3hjA6KUY5JwB28NRNH8EA1p3QXvLt6H6cvTfjD1X8dMFr2BR",
  "key24": "2EvvYrqfJZkgjm7Uqk6dSnxoh8dfM58GFCC9av6wsywh8MMQ4afAFc2Ux8jW5BPxEMH8awiuUfun5EGuDTCEbuWz",
  "key25": "44DdRPtcb7TTZ5X3yXEHXSsWjmRUfVofkjJkPzpggFz2BR9cY4PzHG1eyYpy8uup3ZJ6TusTxAVNsbqmNFopbzmU",
  "key26": "5G2oKHV5B4wSwd2Y5ovfBF7CeAtEvgqN2yqFy4uExSh6na8Wq9CkKd4EvnUN6CfYDtA9ED3WqPpVT9kK3d7dnHzF",
  "key27": "4j7BKoZfUwGfELhfVtHtEM9PJn5QBfqoPhA7Qw6YYnTY4y1aeubi7uqQGtnhTie8rm4UNLfZm3ZncMr3QnioNxoh",
  "key28": "2mT3DRg2YsLRHb1Udyo8wjC8JvKpLdNx4zWvf8drhbNe47rNv7ZJLLRYoLbq5Qmgka51EpLY9o7AyNrih5cAGfq9",
  "key29": "b58hdfrRaGk4RHLmfjYh8QQRm6kDmiYSBWNMubrSDdDawKQrm4RLBwtzPcY2PsMH7TteriNVYb16dMZwj3SWKS3",
  "key30": "exNtUDU3oxKekedWZM3MLxLYkvmL3K6TvoDfNAKhxTK4aNcAAFA7d5aqKKFzhGyjZahX7YGqxz7SQWunViZgVGA",
  "key31": "3YrTTaiUjv6BZ1pCw6vVq2k6bwH3WdUJwejxCVDFPda2XDxbRruzUdZPZBmGUi9x3Q9Z9PkPYYU4TvimdPcmqcjK",
  "key32": "2bDdpbr2Py55DhDm9RQaA8dVJ2QHxfV58aXVZzhWg168nceyAFsT6dpAwRMZ5773oJUcJ6PBV3en6j3hiJxULpd1",
  "key33": "2xvG3WX3vJmkuPZQqvn9jp8Jb7ZgaA8a9wRs7NuDeaKi6vZau3S9Ls4mwTfNbGihFJoBTLjBUorB42YBxYFkZ53g",
  "key34": "c12dNfxMR7WmkMtUgUs6uASTCZJSZP6b4zbXBpDpYEn9ivh9CTTQcE13bbvhK4WpKXKm9XaVUw87obUQzEP3Loy",
  "key35": "2tDWxAR7Ts8iYXDkERmfrWkrJURoEHCqezgGoWeQtcjUc37dg8mnFB1yLHRactHZoVUDSxJVGk4bxdBpgfcRSFy",
  "key36": "59VWi2kd41yR9GzugFW68vBv56S4Eif6LFdJJ6BMiQ1aoDSPo96c8YyyKBXmhfNZCBL2P17Ex1VsJJ4DUVmZHaL8",
  "key37": "5SDB6BAmC5ViCh2cToeoy5tH9tLDkJHsJbJFnCu2q6tUpb3is9BAtr7aebtuYvajfxbdsCg5MmnYUyi2GyBeyxv9",
  "key38": "2CKrRodkPL3nZT66qzDgDCBUNVkmSqrZxc88PTNhmmgXQoFLhvfKwfPQrzRxaBaYzpmXaFPccAYmzFsstBQV9F3i",
  "key39": "5ELhNZ2jtGbZ2KJUXg1QpRSKaDB2Ca9hHRh3MoM5utGtAnow7DwutW99VS9Auc42v63px2M7GcbbRS2KvFRS5yfP",
  "key40": "5YeWS6wuyBjSJ837SDndNwe7HdD7wGDekmzLqdcQQuUinfcncvdscKpp6pk18XEpHHzxpwxtLQ669HnQahYWoBvg"
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
