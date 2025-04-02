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
    "3T79QhGtt9oXcV9c1MeiRKjm2o1uvztuioKJocNX3HQ7rCTww6zNagKvLfZzc1CSJa67V8RPRNAVMEiHYKcvrdRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fEV8NxUWeoWyL2PzaR8AegMMzBLVrg2hhprPjpWQDjhXtAuKrxoQ7CxQ1mqpBKDfVLHxbrgeMhyZmtVusEmqrjt",
  "key1": "59QEBTsb6NQknVuJpFPmqRtp59vLApQjZanFV6wuyqEcCkd3nCp6yrvhYEUR417wgTKT8JbVfTMs2e4feT4oSCsL",
  "key2": "421cY9eMfTMxU3hi42hyh8xTW42HsLFBY4wSwcKSnqzAYGuorLqcWh5DfN47djtiN9CooU4MeSEqE7pqCnKVjT59",
  "key3": "4Vd2gyuGUJKDBC4W32BeTV2G3kpXtqfQX8vuq6zsr2iHK1Rcbx2TE8WPfqx4XxTydfZ8BSs1k3WNeuBSr9QXTnDH",
  "key4": "5oFUd6ZZtvErdGabgyRaNYwjPhSYpDGDEgkV6bAJ3MsJT2nqqyvQnmYJtkXMgdT8SUsoEpbqmfvASBpMoSFG2938",
  "key5": "3WuCiMxFZsrmAbuA54URgeLQyeHE8z6r69ZmUXGCErdgpLVKgiHKoza2cvzmsHDyH7mBAxsUbd16pgKLSrRUGxmW",
  "key6": "67XAP8oxsUqdgVssqC2SLq3xrqfwZxGH2F6mURWbRABm93qvn9jzseCM2wr7F7jX9wX1MpaVjXFHcUa17BYfu2QG",
  "key7": "2BFuL55xbkpjCUe7dih73EnPKuHVmFx2uLcR96KkRgiqgBfLintG432NeD7fdXaTkSPB1JfZXWGtNz4amF17tdfZ",
  "key8": "3uXrYk4vEia6Wjiz4jAfTa9sUNJ1LiHxHSBNZfFhXwWqkFqcYgQvwikjbC1Va5uh5YWFLjqzHMtzrkCBkZ9uWtLD",
  "key9": "YsoUhqtwAfEVFbTjxhKsX1kk1xKgepKbd27xDTQ7xYRxMuZdwNH5bEG2iSNZPy6Gb62H1xaMM2F2ZotvdfyMPMp",
  "key10": "5XUU46cVRWig2FPUiEzJbQGwDkhBzYsiZzoMjqMGkoPCA8HemJ66FWWxbMFiQW32UmvxeEffNZsYEEiELmJgo4Jb",
  "key11": "3HaNV2E4D79ihDSm3FSrgGavPFjbNiiGWuThNoz2dkUKfD1LhjvsvjFbGDH51ACvWjJ7nFKFi2SJY1h8tRpSR3dQ",
  "key12": "61S8Yv5LfdfBfBjUXeTAKciieZAdBchc7SeEFpg1rFtM4uQcES3QVfWepAWRSqa8mQ3kGCXu7uVuDXiHgJ3Emttw",
  "key13": "BeYEG4ECZ89XbsGb8viJhBJaNY5vUacAEuF2UD764zCbB37vNxaxMJjW1Uo63JA4f8YMeYyAD4KW2Da9tTBrWq2",
  "key14": "4BFxbsLYEf4322oE26U7DRT9juesBa5J1Kg1i5jySEUCA8a6Vp7VBmHp3ddMzisui7b8BBM2A4C8ay6x9gMDNk77",
  "key15": "4b6xUfN3dwtJCo9oxEK9YW4cUzzBMTSEpfoEFKKZr4gmt29k8D8TyB8MwaMVzNyJo3UN3XfzDcUZvizxr6y3aENz",
  "key16": "3FWSGsf3qqYkp4dNye4iUGQ1VTWrKVQC8Rv5ByR7HsRsgEkDSMktYRvgbLCCopRGC1M7jHVfynpTxKtzbDEHfzt1",
  "key17": "5Vdf9DSTS4p15b83dyEHpf8dncekY6J42zvmoaMKdF5wHG2CZvoRj4FP3yT4MXDokf53FdAs4R5oDsJhUc5njeu3",
  "key18": "29aGuYNyRPiVZ4zh379VGBWdMFhKyMqLpZraKAPqiE59Jsr7zmuywd1MVGLXjDdLm8f4dvKUvWtcyHiyzNdeYLzS",
  "key19": "484iTmzXAxsmYjfUYeMsTaDCr24ogemTJHg2Cy7qQKGfBCAZinKa6u6J1X5KnSUd3UFX9WBtUGip5BCnM5H4HWFB",
  "key20": "H44hLazfndsUJBgauiS8QtARmq3Mbb4uK7LGrgZEtfkcYNPkihHvETuzsXdcwVKLiDGU1sCtvs6NhMGEmkHwYwR",
  "key21": "4aV3aTkKjPgNLDN52rT5JizeKXdqUBN1oKW8z1vsBegLb1uK5q4JUcxwLn1NhfHa5FQvkNTgoGnbVfTGvDcmC93t",
  "key22": "5NT7Bq5jC4fvqCDsz24abJY7YA4Qw8rNU8Y5Q3acnfJAScvTrJa8xqpVyYmyDAnZnRWqJ3o1kUA1i5TGnXdtm7aW",
  "key23": "4dW43fbMs1hDWX32wxn3MTmBayjw25FW1nnq4nKnsyG1jhwx6cqoxeJcB7p9CXcRiyV9QiqWnaHjGDBt2QhSR2AY",
  "key24": "4YpFwAXRcFKjbVPB6DSTJsk28BDa13nPPX4cTbTt9YT8Km3ksho5VE6SjfaSGmjoAdpoijP5vasBtJugcqgoEKFy",
  "key25": "5bUVGK5tiLL3CXHEuWQDq41uA5J78CPMmeh8KeXHjWJaXFedcLgWPJa3Ax4UeTK49RFZyRD9bXKMkVUnn8xnWydV",
  "key26": "yJjnuZiB4FUKn8kUZRoRVCDb4HPo5L1EX3q41UQ53f6nGaEXoE1X6rGfA2P2EMsKn4Lmq417qSArX4hn29LYtAb",
  "key27": "2LNZUp2XnAZGxJC81Nky1HY9o16f2KSBRZu3BRfMfwKtjwP3dMDwiFzN33h7JUCacAZKa345BprwhzvptgrSkwnv",
  "key28": "2K8s9AuSYE4XKtgkUQAVXxaBpoRHtwXqXDf11k8Vm3uDbCSEVBRD9TFMWihbYjP4R2inGzFDqkkDNuo8FSmm5Yv1",
  "key29": "5J1vARX2eW1sUeWSTPMQjsydXFxm9fSs7JvJ7VMmAERLr9tDgeKLod9mTL2mEwpty6x2H6X3fhg5NZHUQNZ4jf5t",
  "key30": "2QwoNno2D89rGmPEi4H6mHVUEinhfnosAQpJCbcomRXrA1WTyccSMKt7J6PGEmMM9KRQ8g474JEC4kKSTM97qCay",
  "key31": "tMFzF2zHv1ALy8L84dA8pwQqdkAmJjQ8HLfF8sa6bRVgW1Mn8hYhcKwSYWSAABsbS7bSgkU4dR7hthHJHmjMe94",
  "key32": "33zbFbu19r6xwCyHpV8DFWyCyPiXpn7eBcwT95SSKPw5G2rYcZWky3ByqXF4GT5e3ZWkH4SE2ZNZxPkEXvyKxKfj",
  "key33": "4D6Cp4SqXw46HqqvwotocdkJboh2WcJ5yX2KtpSPam6ugDBeBhbKdsXKLnfSY9FFFJvh3FkeG5XZQDNbF2YGzqP3",
  "key34": "4Gw4Fm5Nm3rsM4taEkYXP7PgV7hxUhxTkDeissN73ry2B4UwiKQ2rYNaQz7rUry3qqHg4Y8a99xg9b5gbMz7d4hh",
  "key35": "xsvjandEsnpDdVniX81DNVM84yY9b8PmSUqAbsWRkwvzn4owDjr4xZTG6NRszzTYG2HXgeoYc2nWUFEnxsCwThi",
  "key36": "4xTcnWwReAj9V4Bwqunq2GhL2Uea173EAxrLTA6rhNWCSkFk8MGPn2Lx2NNrmzTW63NP9VMzG9vQ1x6snr2y2PZM",
  "key37": "2BRFBTNDxGfpyaSPkfBcAG5bVJQigTh7jPLExRi8agRn1sUxrZGWHiJ8CEqxHKaU7B1JP2w49CJzfJfKX9CrQYiP",
  "key38": "5Qy11JY8g7e6QMCG4RJGhUwVhCMdywSHgKiX5x6E4NnJwNN9cAg63awt3moaDWF7dfmBzhEJZToBNHaUPxx6xzVj",
  "key39": "FKPLzCyHwzEECFPSN3MZrQGPdgup1sq3bk9Hh1HVDCVqTQyZoivgX2hFsovU38bdBg3Rz7JUUXkHGcNxsuxtfA3",
  "key40": "5Vmf2fPvTauwbQYzJAzRNW2Bkrfq6JyHydUoJz7dreqwca4C39ocJB1Jy5bFUpZaDQx7w4o71FwXns6vRa37jedo",
  "key41": "4BMtnzijheu43H6MzfjVG33hiX5bkaBST82KjfuywNDMetEtwpGWbQxGmtTze1SHsnHydkfHrjSHky9XpCayA5Nv",
  "key42": "2fqekmR7R2Q8ovE9tCdp9moaWxEXDkKtZTX5DYpKdg2NT37Ync1ES3eBRFuz6DwU6WeLneVApMeR4kR7nKQW2acT",
  "key43": "1W9UZzt3s5oVMzieh3aEMoxj3D3ffw9BnrHAhiXwgQgYfDFZvtEdQrjvFJGqsZpDVX2aK5dBJ9GMgibat3gKtqm",
  "key44": "5nLA3VGvH2nJhbRnSnYAmJ7SSBFfiyD2M8hokhdHDqTdbysrsMcKA15dC1Q52jh56jLwwbzfjLyXLEjwidYi1iw"
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
