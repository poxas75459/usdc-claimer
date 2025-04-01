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
    "4S5z7pTXg6wu1mzUKUUsnDDkzSV3SKD8o8stWHiC4ijkoKvRaF5C3jE9CHc8Ar9neAstzPB75kvs9aT5RcwLWzuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f8eHicHM2trgw1u4rXvgGfFrpeiaWxVF8wTbcdUffRVeyYH5gLQQwuYuMck6fJfEvd6GXvJTfD5euaeCQy2GoKz",
  "key1": "5xA3psYNuLJiAbKGg9dCrScDSX4kQuxX6EuzWtDpnhb37T3pZ3dAnciJARaoPFFbaxPkrtwGyKgsforPa79Zy8EE",
  "key2": "7aNG33aEBuU8Xfpr5KXLzvBrqjzUmnHHGDuUxPb3f8DMxhtsX8RatR3ovHWjUQrJ9e3bCEVuxLs7a3mmmkVwnMa",
  "key3": "4qpDqda58EasT9czXxxsjzHCaWduoA1cgyMBgF5b1E3HQVjSM1vGf4fTtAAo8wZgsCZycz5BXAdFtALRSG1N9SXX",
  "key4": "35ExXu24yAM1H7wDqRQnag6gA73iimGiVUpYz3RvUktSBigoDstDdpD1YqQvRBxvCXkV37Cm4Jwum3YGRGG87fms",
  "key5": "2m7BY4SrHySQgimxhUJJfKR5f3Yp1SNWuzUzkpkUKkvHTupGiwSfYLscmPzjJ2ujQnwuSAm6Ta1j9kriwimqMqyA",
  "key6": "4JBMshaQJBL3B3ahPTDCSfx4oi69MPk1V4FZ6uK3vBcVwtruphnegCWX6VQfciuajpFyGMB4EZwVDSDMncrkUzmc",
  "key7": "5aGBLobwFF7rseZKfYHMDQhoDJgXAvzjjGyL6tGYDfuG9sToua5wpnFiaZkMcknWdkzHSwXXsVmSBtbx2Z6Yuicv",
  "key8": "5ftCVNtxwt4eFjsmgL8FX3y3BJ8x7jBXiiGMcswvUEYGd9hiKPrNBKmUbZmFTKXJZKxLLwsNJQz3T3xJk6FHQiBM",
  "key9": "NSnzudMdoGSQ6mzwpkXDxSaePw9X8miCa9xuvsty4W5ZF4rHfmfg8QCPdnPSy6yaNAw2h9ZyBAc1qvxXm7pAvF1",
  "key10": "21spWCcJdgHB2xTuqsBxhLGJ58Sh1o5SN7uDQMuufoqxCkDamZqpjt1hiXx7bKM3CqfK1Y1XSnQX16B6NQXxdMgR",
  "key11": "4r49uSp4WaWtmTC99kw7pfG4wuDv741fhPx4mxUxXVkC5u4UzxQ4ZpJUYg6bhk2BkuwgqDdeXTgA1aMBASizjtF2",
  "key12": "2s3VGzzAC3cJd9ibqgZ8j4gj4wviHqiWTCoaShaskm2yKaYkp1jUNx6iro1MryVB6mWpDsuFcLXaiXUsNB7pSe9V",
  "key13": "FefQY1ZUfQPwaT9sV5XrqYsokRG1Es9XAPTFDYNa6yJCffWJfgjYPfzP6wCpriqEAXCNsBmRrHsu4ccxG4QxW2c",
  "key14": "54cyP22Z365ki7DjqcKLJzRzbV3cw1FWVHX9EAPNATbEY12DNxbDPS1HVQap8TF7UbMdS5HynKxsb2vuLAU8Vx4g",
  "key15": "523jhfh232XHjmfqsFmK3i44wQyiGcqPe94Ftba6jj7yDkmvkyrdViDRLnTXQmF2pcb8MZYsqGUpo8v4UFuXaeWF",
  "key16": "GTo63wyczhu2pM8Fu1mFRWV9jZcfcp9oLcjruqWbivebyySoB1fXU6SVmi7Fstp8BqDezJ4dY2hVNpd3brUZ7XA",
  "key17": "61JbUcY4s69aJEUvwQdjkowWuENymdn3K8ZCE8ybnUG6xZkMUNmij2nefsHxCYfsrgnXpEdRaUfQ81UJ3vNRDEwR",
  "key18": "49jExgZ8XxYtqMiGsKc9n2YDqpj7Z1T3xZaDaAgenv2czaYY86TYT4cQkHQMegGCAaQfCA5dqRKJSuRhcoSM4qDD",
  "key19": "3NBBBitNZckVQynCB1G6P8zus8mCj4z4LpogQYjyNSdcuL9w9T5sk3du7U9NGzhqFyFTcFUDmtuWhuZ1aKr2YdQq",
  "key20": "64kkdSBkmEfj1iGGnaUqdyZqU7cbttXge91dexD4hSEUSiX8WsuS7wENmjYuyqufjgghKVWeTt4QuGUYGirUQKrp",
  "key21": "uVeT62cR79Z6ZmLabBZRedEZ5QfmNbYKTiGFZKborvqoqJMeT1NwVhqBUkmbPxzqmH9sriKGJbejsogzjCfFZBc",
  "key22": "4KqB6houviSZj9vtsG2LVoQhQXEJTShQBvuz2Ls7smQzMFbp2B7F1qDTEzFtkX69CdA8WVVTgtCmcuLyPMTyHxVL",
  "key23": "5QVhxHQ7Bnxqehi1YPQE3H656uEevWfvJKiohf8qSUtYH4TNqf82M2RCwpnoUvD91QiFjwY49BgRUNVhPG7Py9i3",
  "key24": "62i1RDJsEvcXXtAy3ejgVrwd4733eKEgLSjfZGg3KxmuHA23xt4HiKN3uxg72x4YDeV6KrDXwYF9bjUhQm3S8ZMq",
  "key25": "3ooMuXyYJcTyaHM8eT2H7SbA3dmYtrasg5r6XVB5tqH5j5uy4hGJoJArg7NwmEzVYyzGNZCjxzTWUQoXj7J1SLaK",
  "key26": "5q6QVJihKCKy6SCahpxGHjvdc1U8yR29NcGfJiYCKWJkjbrANjzSQnPNPWyVjwYt3Y6WKY8uWzq3kRSnnw2KkboU",
  "key27": "J2fW1s1si2pNYwakCGcxeHcwnwGqHJV8h46c8eihShcAyPkSYHfrpRj2sDMpd5tUWJjHPon9Ja1e9ft66gxhZrt",
  "key28": "3QQ8vWkFFLLGv7LD4DFgwxaWhQ74AG79tkn5WEMP7U41VLhuKMqcGTLm9VCtqhMEHv4AvKQFZCnZxZffjDXz2Vr6",
  "key29": "65AaQewLxsqd7rTkwvh6gkNYTmfzgNDNxopF9PwgDpjetMMMr73raeQ3VQ5nEjiUCdQadFo8YH326dhoDGXnnkKq",
  "key30": "3sQmaCt5wqhLtsWcuKgV3vtWqDNXFMTyX59xj9hPcnsxT8DfyC3f6Jt84ynkEDyGS1KCRCHYfNdA276oKVGrhCPR",
  "key31": "3NMuhYL88fZbQcxKiHLBhhSwMQKzg8Ly4abQvVqHB3k1FFafk4q5pYVo8fCPdnAHZ4UwWRwXS6tensACyVDZ3XHK",
  "key32": "sUPAedknZ3hWcpSrt2TMRzCpZ7pWMum1rWg4ezNfRC7A8m45YLi8bMpYb4cYaGgsjitRZSgVmY4XfpUAZ7roBDt",
  "key33": "p3VyL2gT7dLJw65Xr9XENfDBztbZrkeaVtGoFQckVsSmQEJNquyDTQwK1bzT7da31GUdWyULW9mYcfgVf3QregW",
  "key34": "347FJbNJKsWPLVZQVgTw5F3qzjiHN7hxxQonFa8bM5soWWzRPUpccyVLnPLvDR8eotP1vzLuCX5Ty5dnqWtbEgWX",
  "key35": "2HVCdKzDheJi2LFqV1fjw2XvQVu2yNFE4BUyQ9Qu4GLNJ8oz1aMx5nB9cPkd1dYHMBRrbqroJFo4YZEE6GWtR664",
  "key36": "4qMKPpLYxV48kghBVoZjLq5uA9vqLyDt6eBMG4Dg1zRMo3phnS1fzg1uAYR36UxKyMBs1ELXmXTYg1opf925WinK",
  "key37": "tBjcLmEi3yWuK4m1Gy95uVZeVoy3VbTk2AhC9zXdippNVEsAAWx6w9dcdgXHeWDZ2DMUHzeNmDV3qKARfvjbSB2",
  "key38": "5KKBoJspG8fBufBbwB6EYBDEqsA12RZtptipcFgLpcahuHqKs9yyavH643XyhLJ8bqifC62evgMoF7TBV9AKB43i",
  "key39": "38rhSCpFNDbxHdK97zpBCZRQvaiYcTPyDfVRTRM2UR7uXERAU13SojgLcC6B9couU7vjpf6hqAP5DKYMifqn56nt",
  "key40": "aDq1MR6MNgeYjSmLnHpcGz2c6NHPQ3MQS6mZ2sdUtabTrgPFusjpyBpKeSgSWVsEBZvuWc2e3cyvj7zayDq3oiA",
  "key41": "5Usov8VsV5cscKiXNjPnSjGQ86yxmCni115Xbfgw9k8u9qrQRMrGUWs1263UEGQevGXBHDhAtj4XvwszEXpMK7Ex",
  "key42": "5YzcszX1u9xew4YXMSRRsyyDAAqpGaCoThLFVF92BRuiu7XPB3tf2SxvvbfYSV7PNj2GQ7gtQA97WkKAdFVGcBye",
  "key43": "2v9nsfURdYnudsHDLsXNhACDDUFa4cCzt2T9BwCq5aqiWPwtbExUGY5bb79BmDFLuqN38f1ZiBtQCzK4No3gZgu8",
  "key44": "2xKzwU4NteJLxiiRT33LHs1NRov9moHvdiHGZ7oPpFLpFy8rDzToUXB72WkXT7141cwmha1zvni62jzSsffK6u97",
  "key45": "4fnoaeR8Lm498vHv9KHygjM7GBDzWHxg4jrkMdzarnmdgEiQYvfnW9mvBYQUmwBpaYjrQX6DeaTLr8jnzySrNPJi",
  "key46": "4Uyjc6MBYv91pbWzNfdKkKitGLkwzdDXpw3h64LssjhdBppLetnJZAq7G89qTTWxGCVxWY1NRGDvE8tNcc2HaRNm"
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
