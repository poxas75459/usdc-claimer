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
    "5UmUVtbQgun3Yg7PLd4NCLN2GmGdVAaqR7gNHb9aNhjqYRRuB6pgeJi7hvnPoiHbKuTSfG46iUojeyzYA3y1VtWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e47qHsLGLUPR5tBWY6y2gwJwc6WD9cWRvQi6sgPrJ5f5XyDh8XLS3HDFc5YqgoFEFfPgkfo4u27wyQG6fc7DQWG",
  "key1": "DDooYX1hUsaqcMpavAH39sCCpHwAyv2wS2Fupk5N94boz9Ex4ECMLUm8Agy9E74GZNdKFyRK5sDtvYHxYXjmyiZ",
  "key2": "hi35PFcGiNmo48So7xD1w5f1o57R76SLXkWswK9WdQtYEWjjBkwHFG3xjpswj2tQWDnRx5k1V1aoqtruDQVGA3K",
  "key3": "3WYEFVG3qqDmfgtf6gpLkF5uGBtoG5jPDg2cJcfSvN6XBx3xv4PFNZC1ryWGn1yLuaiuGd9aWV92qaNCwSB6VDnc",
  "key4": "5wfaJQB7E3hEx3D5UHzrnrbxhqJBcuq88b5pwFineA4sxHDmJbPRuF5YX9GscQvuE6ZUc5AWKFA5SrW8YdQuhhvD",
  "key5": "AW9XwsznoKJAefUT1wtr5ZMF4E8FYkjz19kxnNj6gWqzrJMxNLtaF5Ne7bEZr9nGzt7eoDreSSh5jCNh7o7uriJ",
  "key6": "3pai3dAuKujqMkAPRqSR85k7Y6keV3DKiJcAbgerg9kVZw5WC4bw5NAAZc6Pjs5F2NEbx9y5ynaL38kP24gMCo1",
  "key7": "2fSM7kdYywd3xzDrUL4nGpgXDd79xEDiBkXv69qYnCShCv8bV9tty5A2KjRMBhGB5qCCj4iArAbja5gXtChVoa8v",
  "key8": "2jr4nBf1DrBZUUmmyu5iMCXEmRHqD7M9x9BjesMV5D2g3cb3r4u3drNvfi8r7mMG2wEXXsFASbVR9pkZuxSpX5nu",
  "key9": "5UCnWim8KuJri5Gcupq1WVazej633PwQdKmb38brZiUBKPmpEc4DMC1iHxVAESFBnSRSbYz8kZq9GzLh3sZjEMM7",
  "key10": "3kmJpow72acL9MvWe6imD4h5jdQBoThqvJx7pZ8ASf5KKeEXaWpwagCgE9fkNtvSczbHqY2reVNTATW9cizk7is6",
  "key11": "55gch5UeSJDQE7QdgrQw4vvxHZXgBi4sURgttcah2xAvWbtyEnNvWgfiJXRfSVk2C9incU2tGqqvUTDToCBChtxk",
  "key12": "3LfyZ2P92Ap7YgeEuniCnGFVcqVv9FTFTy773uU55mLFhQm3raZCsfwfSh9dbN5it4DRh3G4MHjP24LVh65bJGge",
  "key13": "47wKkSvqnzrsqopjGcv5aZJ8CxWrSa4mq6NhshvjeYwqDcny6ciPyAZtWTqKM1whZ68fLZcFWu6jvCwecA5B1uRS",
  "key14": "21RqPEmanHqQJdCJh46zMG4mZCgYDb7pobpGch5vCgEVuhaqnUnRXzzqxxpqTEtnM6ivTEG4FRrAscuDHUhVWF4p",
  "key15": "3yKSDpsSBTR2wjdnXKH3XsxZSGT6pzHCLwf6iHzydvy8DXriyz8zC6t8tJQtyGsBxzpqsYyWYQAQc7qrKXdVUnjr",
  "key16": "2d8Kbyty9bJhXaZn4QsTNQDLAx5GJoDUJnf3ESLA4WexhjVwQgVYknTzmSkQRzqDAFf7B5ge6ffhfnhrzcv9HWJa",
  "key17": "g8Nm2hnyLZbAt9naqpZsYssQ87J9hUcynCWHSg2nk1uSDWwWRDgAAaVGqgbCiePHwYQ2WbDg2ik9p2h1PumdBPp",
  "key18": "5UZ4VtpMCpdGRxW5E2SnDLnNNsS3teUBkWFzrJuSCoD3nf3wY9PKaAvRUuzmasXtRvvxw9gzapFUMqXZ6i2NKeXn",
  "key19": "5QbqJrayHM3z5ZBVieZd3uGtxgohBoZHPoS9SFwkHxoND2LK7Nnq2cykU5HXuxwxZPnPV8vqEBgCuaTBpWbrA7CY",
  "key20": "22kCJqH27UGiE9atpHqdmf46MAcu7pWaGpmAL4N1WYqehun9jrCs5jD3oWLHHyv53nna9joyHE2FLMnefNWubDi4",
  "key21": "dUGwifG6mjR3NeMG4Lr5k8ZVCXNwYrUAKrgrrx6bzJU8yPc4pBhJ1nmc9wGjKj7mRptChXsdpGQhzdWfvkzx4GQ",
  "key22": "drzasjAuiLrK97MZRf8QyXZ9nWx7wEbt3varn9DcTupJpeBPD47j11ny4TjshwmLcPjFYoC4ZiNX8SuTywyE9Q2",
  "key23": "63X1gtjtoqPZhZ1NTBJjKFr1LTq88u8PkAe56bDDx4JfEU3tmSfLZ3arqBWF1g27ZZqDHuFF76U2L9UvZqA85o4X",
  "key24": "5vay479xbUjQmHfeL8R28mDU98aConM6kZTo2657XnPkMs8j39XbCPouTdeG8C6a2cmKxqzHEvkkXveRYnXXoyh6",
  "key25": "3kjDYpCujw2e9woNWLop5KKu3JxoHxk6JjcGzvqEYEhu7os5Hn7omPiEXQacvyyxUYc6DG7phBvQxubXe3gkcCTS",
  "key26": "3mt8zEi4MyA7Py7FR6GFK5YBHCuMAkALizdS8PrVkfV5CCrYenycefATGsBpCEHNxw5vtquqZ8YUJtsqvt4pDbVy",
  "key27": "3UAqykcbwbZoiax9KpcXU91j5UkRZA3sxz2VzfqsdQnA17ykZiExCgzrVUvUMAoVLZN3pyN7quE5zm8gBTTm84fQ",
  "key28": "2ikSA8JFReDTCiEe8e4TSFPxV2c1FFL4CGkwnA1m3fTpgSjPCcD5vam8hgsGuvHhUwvpmUPiQdWgFheU3DySd8m",
  "key29": "3VZrNFzR1GjPVqsXjEUfhnDUVDqBYPpfRqfVXdJURwBaguYU77bpqhZxGKJVbPF1uHJgRfZxyqAGkrNjhzUCLJ4M",
  "key30": "3VB9E9mdjwXiXXtBdYtKC1Ucbfi8w27283t5zs5VLCrDnwG7jL2awRcb73TwWXa2QGQsfVf3Uq62X88TvugGXK17",
  "key31": "tSKA9ZKPHzBrx2mCqoYBd5XVAM9AXj8Z6GxdM9gt7t6CDEy9vTwbBtDHBUK3SKvTL4hShqdXTNXkp8xDjQ8Y5rq",
  "key32": "4JEAk3dezy3Wq8WMi6V8abaTE687w9QHUDzzAkMRkEttXVi6tDobMeifKGecagAmHP83wyStuRkpwXANrnBLzHxC",
  "key33": "hQK5Vf4ATPB3jYVXkwHM7okVcbzGr8xmpRCmMBgjpVLPgetrdNjrB5z5X2AV5hBu2iGKab72LoxXyP5gsEh4Dim",
  "key34": "54jjDcVPhS5EtYGLzByzjhgtE96QhLyFDHoV7yAPUuzV744h9NDGQMtENoApWdjNx2E5r9dDJfKpYz68cLqu4Bmq",
  "key35": "DMQEieCwcRvdQ5Bwi42dZMYHQUNvy4DwHWCL6hwv9NH29tT36ybxt1LZ3TZ4ABtKWwd73AwjSiskHJucwMww96V",
  "key36": "2pLt5t63w8eaZqkwAAwzAWch4WVuqb4i1rgCGZmazDg6buHL6aYLDVFMKQ3Yr6nyDAYJPhZqYvAQbePuyRZypsN4",
  "key37": "4mgD8eUnkZEV67BaqFQdXKkpsz6xMgzaUfsr8m8gaKrfcJ9df6jWgA2ix5Mvw6eQXXTy7nWqxTYcfLDMd381SJPp",
  "key38": "564oAWNCfddRtCbgbgPAuMrzNsTFHYDSw6rvbXoAWmHghQpe8KDW9nut4PFjwdjeotAssV6Zeerg6HEdZbbgQVmY",
  "key39": "7TRGyPvmn6voA3Sqf9EvTfMSxd1ecdPwitNsE6x4m1vPnWaBDaYR7orwwpothDbh6rfqTvYULw8zB9DQy2xXtiL",
  "key40": "4BsrADbdimCqV1yMFW7A7AQRrBiodKnBagkDuHaQZkiUYbDCfauJ8pP9thT6UVoPPQaXhGRoK1ycWnBcfUzEY2ZP"
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
