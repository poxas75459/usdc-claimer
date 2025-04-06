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
    "5sD3tA5sj9g9p6objtc7mHfxAPp1tBRVmScJovdq9spN7fbupxXEqACGkPQBZWWexa2iYRmoxVX3XvvQsL4KsRK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61E8JHDLYhQYzHiP4D7QP172pQng9X3mjdZn1qiVhc3WHsJyT3NbvJcFX4ofuzwE23YTkRXzVSUn4MWQD63C5D2j",
  "key1": "2XbmPnYEATwbdgiKEwoBjgwn932XtG1Xdg86hSZvddBCAX2KnM3qZvMLmx2ZCoy9qwnAN5sTbMQeMzafCP2NkfWF",
  "key2": "2manLEfF694TryDwgtdJzmMJtXjyUUNV4gVp62yaZpSy3HjVLdQagTkn9sWEtNMy1FjzZgkZodb3zZezpvUppq4Y",
  "key3": "2zF3Ph6Q3BSgUn38oKNMBN2zHb7aaivTmJys6FwL3o62Lw9DboJnqT5LrLqWWmaWiQJuBH3Goe3VWJThMGd8iDbM",
  "key4": "37XSnrVJs6PpDkQzUukz9yYeDHW5dZ68WLtnPsnEyZzcw5JNuomYH3qpLDSsQsebgRJnBVjyEc2V68vf4sJWuHSg",
  "key5": "2bkSYmn8VFPeK6MsmyMs1rJkaBxY5k3xHAs8qTA41GPrk63kFaakqK23N4wxd2LPusnupvVXpayAj6ufH14edghC",
  "key6": "N2CNcRsidTBmudGtZdzp9xgHAXDrC6bUFBM6ruYVwJUDeeTs7Q52GsTaE76NcoJVrDK9mBsL9mitQBmuVXpwpZG",
  "key7": "4s92tEGCpJLC6nvwvRtiZwXD3ucwuePuT3Yfrq3f1arP4gY9dfenc3WWpqiauutifRLXN6ksBGRkoUSBxHkVa2r9",
  "key8": "93HHAQPoDzG6peYyEEMkoYGkuRs9Gyd4LsdQcowaFKxCWyMFSqZR4nVZLuvFET5LEA57anYQyhZ1hkVYvKoB1X3",
  "key9": "2VsJ24PZnpTGpdnCPN9rfcLk84FoYeDishwXP1RKCjHpbic7pTxp8gjEk3bVpTy6rgkpPiCV2LFJagwWuXXQaKW5",
  "key10": "tBQVx8T5Sb3EdZy7yHjkRd9eZoYGpqiFu4736Ny6PffH9ZJ1nefHNdB8JF65vHGGNXv4jMPavFynzvVzqNuo19N",
  "key11": "ywQwYf7ENb2THJzQh8EF5miF9e7cLuZsg2rDEk93mrgLEoA7VCzaz7wKNzrTPCUPHKt2oafzZB6FbnLijXpHuSh",
  "key12": "26CYMNDts4z7iqKkS2iQW8R4837gw6eDAyDSRaJk9hZEPcMmjy1F9ARhrQBcRZKsjicPsHpzJM8rNXfwVu23KivP",
  "key13": "5SCjzaXDbUheBEFnhQMEYGwvtmd45LhSwM5JgLnib9nyby4pavoUPoQiDJQCSJhezYf5EXRomKGP4z2SFAq4XLkR",
  "key14": "297Nhv2cHgVegtt7wwUBdgZ1Ck3M5Xk3pTBqr4Cx4W8iU1vnAwsPZTE4SHWckAyXii5HxtmnnoSMPSfHZXJKgRGc",
  "key15": "57CJ7NEz8kTB2cNBTwct9PptQLf4QCefkRWuGMRkPc4Tu9UpXDYvF8rgTgH763P9UteoAGr2g1pMEbur1E7Lh7nt",
  "key16": "m2MkT714ysVgBPUDPKhuexkJvTsutpRC9CRoNrU4nrce2ebYNGXNaT1rTHCMcLtqFwHwME6oUbj4S5v2gbX73yx",
  "key17": "4PDU3fEePWCu5erQ8rhD6PyQQX9oWBc7dgKCyDyPMn6dE6tmkiDXc4UG8anL3pgAd91aciGjV9hdxFuovWRJQvTp",
  "key18": "5yVaRoLbvbZ4FJyYoXENVza1dbxipUnm5mvg5LEhZkskq5r3V89CYQ1sR6GhkZLEaiomXoMQotqgs5xHDYxJxoHh",
  "key19": "AxeRZuECGc2PJEGoWcLgAPzCERJukncc8m95WFvmP2kqwvCi1CrhkSz47gHVoWHKm3rmosvKYYnXPk5qDGL2cFL",
  "key20": "33bDvmtUjYQyqUGoYbYFNBAAQFzCwN8GifJZ5D9YzjEUqgBV4DrZwmzM821eXHgsCNHUiQ4XTbHCaBQ4hCWWfWkt",
  "key21": "5ZieXYTZ7YVWDNK3WrEWBhWNDMX6SoyFQUDYEfVrU7JyJfTHzXcCTXRRNuaP9VE1Bvac2mRQQXKQ5P6QV191t3a4",
  "key22": "4ksiqLxXXPQQcs2qkjay8gp9CFydkCtYYZ6G8HA8CKU6VphQzwpECyGK2g3n7ezGt4H8qymBhRACFvHoRY5U8TQ1",
  "key23": "5dxXgk6PMhWaoCn1PB1gAnsxLBEk6uckSpmddSFxmgyawN1V8v6JrNmxMPdG5BmRLiAqLyfZVK2DYMpVkSZjjxJA",
  "key24": "DG9wAB8jakWHn2LuiaNtuRSmRicrPEGyVxDRJMtkhpXseuWkm5MfhFgMP157QZFYDRGPVH5aVkcvZTiyKURB4u6",
  "key25": "5hr1hDZb7PN9GvNEBcjWRA2N6EZP953gWRppgKDKF4hQBxn3bNjCs3NxjFiJL1wPio5QE5oy59AKd2EVqk49eFZK",
  "key26": "5LzoV6ucSWSGCphwdN8sW2eRD6JESZd7JZNEng5moJYc6jy1XtykkyxncsfVseLYmGo4iMwMoMRbKKN5m5ZWtQ5U",
  "key27": "4GqpEs8KawY7wweLcZvDK4vrVMXZNyCeLNbxakSsgFFqMp2ieP37hSt7pEoL1gt1bFZsfjkhswC5XQYVNGTa1n9n",
  "key28": "3jfWZzMawZCuJJSHKsfrzXbteWPUSa9TWgrxCQTyAwVUJThK88qyeKuk3D1pEhRGE4atS7T8BvK5jeftDQs7c9bK",
  "key29": "4ryVcPcpwRN1MBcmwAwCsZcEjRmrTHMF53tEWQsVR5V73Wu5BKkNnaGvnFJCmWQFecSLWNqrZzNUZqzb2orh2um",
  "key30": "4MdAm4heAzdfufhRWdSTN9c2zB4ZAqnFn2yjC8fHRaCJp7ovTK16Tauz7D2gHWvbLTzQckXKuqQkC8mU6S2Jx3qJ",
  "key31": "5gkY5EpsT7XjqURGLzFm56w1PWzhpmJyzwKhjRAS7M12KRLekhCsHTkodMXF1bRw8spNHHjCNMA67z99HNP64asb",
  "key32": "5JXVwzqSxAb3SqwzXz9ZispkLpxBGCrrpqKX6EmTBRyQHzBkAHJmQM2U8gHyH9FGY6ELGbVBEwSwGWpGFqRMgjMM",
  "key33": "4rCAq6BDQ3c4QA3zWjpoS1XvW9hjGqVG2XmQAeQqArcScSDHHVUNTYHYq1RdRR5wkutycYjfNeNiF75T2PpAmaaP",
  "key34": "4YDdmajjBFimQLnpPRW3MoS35uhxQW7QwToPoLmFhuRcAV5Kez5tNosANKtq9haYPmNfqtv4a1ugkT4XTgiJZuSv",
  "key35": "66Y5ineWULYsMM7TWGXWPE3nscLxsubr1fnZPNoURaXGNifwtUpKk4judwRFyQu8mN1qY7pgn7gHVzn1udvxvvRk",
  "key36": "2UJbnYSdrctC1DMZxaLnuw8wgLiasXr9bcY1iP4MCv3gQ9unqSBkUWx8Edg9gB7zqMiDKRwPa7uX8YXaNpR11LAM",
  "key37": "2MG4PtLEJSSimzJJ5fNEWndqPR7SKjH9tzNVHKhVPCuvcxgouk32YZtAkoMjgS3hkAfg99XoUxMQ2Ke5UzfThs1N",
  "key38": "5YYG7w6MvNZGysmhJb8fHgMefNat8xKZYVFDt4pVuPy29xUaSWCN1yPMowtfcbSqgvH5m232ctiLwMeCBXVDSdVR"
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
