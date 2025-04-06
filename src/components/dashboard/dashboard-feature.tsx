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
    "2S8EYViVHmSyqF1Ky6Qj1zoxx8PESDbFrbthQd9GMDvTVbxuDrrRfLnqcXzqtZMkSPb6rPAQAPPPV62iYPYH3vZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hLZj5J6v5HgbeSznJ71H5YoFZdxSG7Vm2g1JCy4d7CmwfNncJLanyAXFWKfwFjMJ2wH5HHkWD3b2x7e7ABCVCDw",
  "key1": "44PfJbRWPgkNU1xRTaJuyA8gLPVZwCVKxQQRRnK1HvFqTunbzxRY9UEyFpNk6tTK4qeg6aJzcpJQMMpJvc3XHcxZ",
  "key2": "4HBSXmm6jbZRFLXapVG21gKicvur5FGcu6zH7NVCzcJN2YPu4vPLKvDLArwNp2UyjB44Db93NTARXC7ycw2TDpWf",
  "key3": "4AAq9kFfwFG1mhG3GWJinnWpQdWUEgBaRK3p7Goi2PcAjEHwD4afMgjAX87NSRHuTDjvxrYT82qRZwmh5Tw9nHpj",
  "key4": "2WpZBZP6gNf5KrDHjDyyqWi7NeGKcjsAiHLAYF2hiVXLyfocWpS3TYHXDPSEDBebSbyZPxYH2iSd6wpFJyxSEB5a",
  "key5": "2uXG1TyWTDSRPuKSTb8URhPvpSMd9Q9VmCf9ZYgTnqydzGSMczDifV9LWemiTwDfePbYtoyYPqbzsLTpXWm2UGkz",
  "key6": "2eaxrgrPLp8XvuqmSMtn3PDDAVpwJoGLNxdJEGTEJM3kX43TmmsbEuyruDkHyD9jvps2Ns3EEiqnQjK4vLXgQypc",
  "key7": "2gKEC8Uh2jKmayEhJ3hsUpumjm862JhuTfkmmq6ChEWoBAKcF9N8x5wniY4M4XucR6u6iUJ7os3tZGh1C6TCHe17",
  "key8": "QVuR1F9tjHXJGA2hd1yyxAxyhUFWRrbQLGg13XyhDdkSeVhyTWFewS3DeSUwZRtRgDVXpKK4qtsoJCE36X3y2TM",
  "key9": "4rqV5rpxmSejgGSXMLVhq7TL3AmAt2MHTmxB3Y7jYV8apMFCJzCNk8JPuZwmz1FmUpmjyVyqGfV9urcTF6A8dTrW",
  "key10": "3ycrPvzLBjudra4QdZiiTuCisZAY3UuMXN4SBw6ZBjaejQyw8AWSizvgTe4xpUwCVmfJcL1GKsTMoKPW5A9iBHWi",
  "key11": "4KmLtLUu7qUPMkjWHQuhc3N9LtT2t7RFDSUxiTmCyW5LmY22q1XCYVBMtHSvS36Soiir44Zu3HFi8fE1xhTzocmT",
  "key12": "3hjNpNMHp93YEe5m7GQ2AL9RNyzWWymVSzN7MDhLbC9e2vAZ4Eiyo6ajQqHSkbzQZmVNSXuJru6X92yovAbGMnZz",
  "key13": "uUKVWZPccF3av4VAwZHX5iasg7TEbkpJ1Xcv4KY3ZpeamcNAHkmFi35pD1xXaMYZLPvdy2t1CTQyRaZ3R27f6Lt",
  "key14": "2H1TX6miAor5sGihZygUMF1uvTscvwF4nGDwPXCGgoqxJdoQCRYBnVZcTH5SxkZsDgToWcE2nwYDNHTzNhW8zNag",
  "key15": "SJrw4TtYbf2kFkFfsZTJMcLfgARcugZ5YG1FpiNxFWedwhGY4RvcwWUVc3ugsKBjVmSndr7szmTXFnrruRgSK7i",
  "key16": "4JQeYdXsQ2AGymUZSCz4YBER1toQN7yMYqf1cQ7fsKh52dexjH561oTfwTzAo3UGwm82qDkr1cAqQLbpnnqfVsS9",
  "key17": "3xMkwYdnqQavVpV3SDsyHjNAsTv7fSFofjajH4LEi77G2FBcjGFnSv893pGNFiH6n6czscAPEj31yLJeJL8sVhJE",
  "key18": "5Z9ndT8gGGrN2ZyzWDVkuMJAZUKJCiZga8Y6fjtRCQaK8TsKT5T1anbZU3iEd3tu54jYMExdxhupS3aM9f2qDe9v",
  "key19": "3h7hEjDWTQpMUbizG7n7RB94Xaj9tqU5ehQ1Jp9WQZZ33fJBLYydiSFWwSGXcgrLvwhonqAgaoLz3rwCMGVgKQf4",
  "key20": "3Cym3AA45apnjh7nYL6HmbuAdvnbw1Mp2u7Rjb72UhnSQZQgGrVBPSAyUg68FLpow4B6nPGEHqYEwMfVKVkUraSz",
  "key21": "4eYWDqev7ZH1PjZNCnpm5Aw52exWijcu48n1z9yThUrLJRWGtbNqm7BhzwUT5Mm5JQE9wZUsza5bmL4q8eRpdS1i",
  "key22": "5wzwY3XCqx1Yqi3Y6Mdx46hMA9y1edB3iAzKa5KKHRLPzwjBK29JVYffVKtqp9EKY3kbhxg8ZRbCWi9TmsgyeEFb",
  "key23": "5dqHyzc8CovSeNtBHYcrGaQ4zAobWgcMii7vX1KoicaSrB98FJwvbG2FUAy9hLbgoedgGHrssjZczDLMg6Dr1S7N",
  "key24": "5BicCicVDTqBPS8ai5jvPyddewLbPkyPQn92jnGR1DumL9iTS35NoBDvMHvXpVFmTnbwbuQdHSipJLMbc9HLFY9X",
  "key25": "2K5hM5RgrER9EDEaPXmJ3FkArLv9kmQDHAA9tZr5UXYQFGfoJBNWP3XUQcyKJ17UmyxqUr2cTfA1QLD9wrUXt51s",
  "key26": "4fdeNztpkRnDpxoQaf61vj23qoAB7J4fYUotM7YNUsCWc5xc8HDtSRnKpThszHczNa8kJFHtdkY7eCqJesqTnKsC",
  "key27": "5z9tp96zDQiuPQNX4iBCWtaArEHTkfdcJqLacvn6Ud7yZZU7UpGq5JCMjue1kM8fMNVv1dN8XpACro2mFGuUKneF",
  "key28": "476LNrEjvD8aizu79dEND2WYf3TxCZtWGuXbDVTb3N61Je6TLgrwMKAL4YemXhSJdRiUA6M9UpUAYP78sfY9nBSr",
  "key29": "yU5qfEudKGATS86k9d5xKibEhcNhM8oUtf4rR56bE2RFoSzkKU8ycYD9btKyDuhCaTana1jPtUoUPDt1yooezfM",
  "key30": "TUPn2drtZeRcgW5hFswkUrSZvdM8at3pXC9E4E2Lj9YtRf7yCYcUtu4eoxb62WJnwQRxuTBh88GWMAZj2oztYhG",
  "key31": "2ymx9U2mY1tGxSEXWhP6x9kL2p2mQxuHxmi44ufEoe6oD2Y1EgnrzxZwJsQbCp6tj6Zr9m3aftcDCJxFrNwo6hCZ",
  "key32": "G8Rfh2prX1q1eFUKA3qUUMeHDraYgd4CqUFakTYVPgqybAYpwQGm2Hg3PbXPhZwYrT55mtyEuGn2LhbpHAspqpz",
  "key33": "4X81JRkyEvmXWbgHQW4YwrLRKBU8EwgMgWucibPatG9fSVbpMXUf2nTkRPQnjZqqAtnVv2GdhXPDFmNTNaKei7i4",
  "key34": "MRNhpPZyDodxPE5a6z9gubQjM4hXziEfMJ97F1YZ3ywnfmctM9qRoJjE7bwcu8HQg6Mh6YAtxCWyKhhmRRUrQyT",
  "key35": "sVUSbvteAPHHNpPyMehxNpvxuizLkHuagutGoYBDTXSXuZF6LmtW1SnUvMq4aq3NskL8dUYt7bimSYqH8ioVp2V",
  "key36": "38jxJWNiFjk8tjEY8CZVuCpcUM9TtNof3pfCf3iDKbKJYJAX6syeHGrtALragp2drqG3nR79iD4NamiqXxcQ7Byw",
  "key37": "cHVQvpnNS1aV3rNEyRTmCQCJRjrTj64k7D2PiTLDa8jf811wP4QVpvZwbJZbD5jWcp166mEAAQTmeEne8aDnQRF",
  "key38": "DPPhJah3ABv58WgGV3mTetmJr9QfsxvJx41gr9yvicQQQZX1m2QpANDYTV4BEVdZb8T9Y5UqJMQzbBDMeyNjBob",
  "key39": "27WuiS55vRYXDj3xs5GHeqxMVBFND7nirRudzazDYxX4M8LHA59fvG4FCQjvSFBMaPQqiARW7VuuxQLXcCmkzRY1",
  "key40": "4DtsVt2EMAYj5uXh57kyy7FCYuRfiF445oaKnPex5yi991j14zARvMZx1tcQuAHPr7TrpsaM6sxKkYPPjztwQb7U",
  "key41": "3oxuWotitbSLiUUbMnmEvtsBatg4us6Sg2SeKFzbpueuCathMMHwvReariQTgsqtosc7hRELfRtaBzUSPTmZso6h",
  "key42": "4MGQeiQKf2nw7ia6tofApirsLsZVcLofX5w1uDZoNmgDhCZQ9GwmpvrCE4jxVJ3yTGTw2DUXfpn5ZgC9junBikJd",
  "key43": "4TjJ46PkkDvo1868gFRBDEpuLgEuxuzPyEKCkRPrducRP2XFCzkP7bMJpDJEVhRNwnucsQs3ufHQ2q4PNgZazH8Q",
  "key44": "5Rx2oQS3m5rQZPUbSfmtrXpNy4D1wc2bjNuHeykRu5ZsodxaiGGATBswn8yNkCRF3jgBYwbQKG7tWZawZSqMyJLk",
  "key45": "2YoZcQ9oeCcYCyAJBD1Tk4Z5EVddBxA3QHxpvNcyJXh6b87uxL2RoGVYWwRa9FkvEGZ1j6dc1PvnxsHQTEiQhXUn",
  "key46": "4uH9vCi48W1roJF8KWk5TpaUkefKrvpjzBK3QmD23Ew4X7m4WqHTE3j9qFzuy2xRqYhXmaGnUKCi9UZfiCh7dHLw"
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
