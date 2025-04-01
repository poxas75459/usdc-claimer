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
    "4afESygnqbq7AYZFPXUmibaDJhT2FynxThvjVZDcXXkPyd5bYjsfVuABnRo7fhyxrVKRP5y8WBa8wcVLccExGQTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xBs1whDNncdqmPbWaqymU8GxEpLAwMqVuL2fAcyyTNm4mNo625EXLvAV8yJKnPWLvcq2zKKvvvRTnTKHNxSEo3e",
  "key1": "2Jg3xbrE5ZzskUW2gNCFbqbFYr8LvjeT3h4gGPWVG8DZtLynvUYQ4CzQa37KHeEqxELuD4fwtiDbe46FG2X9t8yP",
  "key2": "53fU9xkBNJTgPN6zaEEWCg3eP3yJtayK8JCvDbYDy7Dva7RcS6YZipgFjvtZgYTF2mhEFHMMFvwHijfE4WrZByC7",
  "key3": "4wYKVRSpxco3951W7drKFDgUihUft6GFjMUhyyrM1PTWWXZ97ALYR8f3Rh4FCtzYFf614ZcnZBSNHFaTsYgTDuoa",
  "key4": "tA3GuZFmTUzFEGnEswBE5P3nZB9F6oCCq2YTy4sUeaKrfUYK9McNSivUSo2grznJBRijTxnUUoqwih8hpN1EbJu",
  "key5": "2vHtUH9FATDdnNVFDYxnirDEDgg6QWLuqpV31T6pLMaJLMfmoN6fubkjH4bG9T2Sy1PQKhYMMsYoAsZ9N8kpqq1w",
  "key6": "4L2n1thoqm1JxAAtYU5XKP99ZW5w7KerX3evSM6dPHHBwtYQ7mgnVpxqxJMTmuXtgjcssRgfjVwDXDKiwV1yLcEY",
  "key7": "xi67LB7kVFuKtZFtq55Urfr7t2nJVsAYoezW6opvVDcBjSmhzMpDZypXssFqaeRbKptBW5dwwk4uyh7er2AJH5x",
  "key8": "46K1p3Nz3cr96BcXmU3KzerQikSoYHFyA3or7rxWmJzTQ4qhS6pg991NTzfBrE2MPHRipLVV9LWYmCigZTsSQ2un",
  "key9": "3mowNZ8fybgXn5giGyT4VVwdKJrdJALa97e9Qs2oMwzYxwG8iuFi7A7cNtdXCthhRz2fNXaXBgkZpJmwd4Y7a8vw",
  "key10": "dZMrFh6uKpYDamjpghHF387zZvEaPKtndyeoZvwxVaWKmscVNknmtLM2rWeGq5PTsVwwYAqnYHNQoGtMq9ZUv9c",
  "key11": "5GtTaEjaeaav3VD7AKw1fPspgjHShfbCjS5qJLxXAQqNRe14x7UvDGHwUrxp8Jve37z7SiYKqzK2hTjVFDJ6iz3K",
  "key12": "2GKKCqPShuRamT2RwRAjS1ZENQe1p281t5Xf115gt1gqXdFKrztVJCayUyqpVxGFxMjd9dbxG2jr2jx2WQQUS3tz",
  "key13": "4B9UR8kd3AoT1KULV2PWFPmUfRUPEh8ujmTPgo31WuWWv5nE8Wydv1ndPu4PciZGhsgxmQam7DTk5W4Vz4vNJprb",
  "key14": "3Y97sppHcYZmLuFfqMp6k8GzTq8AKF4qHfijaRBoduzTd7sXEaqhb8LwD6ZNnyfLKDm228dp1ekXht6UE8RVzi5g",
  "key15": "2yKKJXKcvYQMhoXBYHA3PGTE3T9aD969SWXi2CAJjsiEe7dUTRsyWpoGg7K8MscXUNTq7vsurUkowjy3WXbwDVE5",
  "key16": "5YmTavTZJEt1oFidkV7T3EL6fHk36YpwhDVqkHUsYsmKSaK26ag51DtHySDpMtQvqruhV2wRjRiEmwUpBm3oxy6w",
  "key17": "3oUJ9dQSoYiu4uEcqHK5M5M8f5Q5xppmjDcC6MteqArVTUkcwbYVnNWcWZSbij5poYH8YeF92wgWpbhEiyiqWQVD",
  "key18": "43dLrGY1rYuaVPdi4FtKyBu81cBS6by7thwrNKn5HY7KvR8D64RYuPxaMXRoAhbmnQLm7XHbJNjgtBphv1WKuuHD",
  "key19": "2xywcfGekVPgwNw9jkqeaZj94hyDPSrTVyLzG38x7om4gfbkYWWUChod3YhRvJa5PpNp3wqMBsLkFMrJBLSm12Tb",
  "key20": "2W8axc2PX4JzBNhdtuXwR2KNaVRjA3oTjZxjvFD1T71mGJ6K2ShqzNv8bKCgm2S4kS5BtFWCnB6a4zaMnv4H2M7s",
  "key21": "3nCY9nCCnyzBMxrBU4ngN6LNZPau5e1j9Nm8B5Aqf7bjnuoakSfJh1i6oSos5ngNzELQ1YqN4QMqpum9qWUwhyZo",
  "key22": "5ZTUezppmyvC2bXZDbmmsxHEbpyfyMchNigURgkDFzfJpoaKt3HmpxKAKAdjGaK74oqMPF5PuYv5UG3ewwsdfdEc",
  "key23": "5PcP71P1eJdytUviyzKVPMXoNLGYV297aCHpLcDTf5y4Aeyr6uJrgNCYf63MtEksLtW7XD1w6Enzu2WdSmT8auFK",
  "key24": "541bFmjWA39QxjPJMBY8bj2ekBRAidRVAkPcwdVkqJ2o8KV3tr1F2pSsizKXmnp2sfLkq3U8CKyeknCLrAQ8d8sT",
  "key25": "3bL9w7J3xy6KAXpdf1q7icDDB1CcrN7E5M9ie4N6gSWpaY9gf1vNbFV5ESqLVouRKncgDnWJAf2u8HgvhrCCiL1u",
  "key26": "2gQ1ZTPvBUrTfDcdis84QiVCycUJ6pUbv9omnt2gGL9oWiGnqxKXb2Yu9bfgRHLNLUh61uhk2oXiEgEKEiqcZwa4",
  "key27": "5pqMCVZqbNmwwwHvUkBmqeomBzSmKxuvupCihVHDXqAu2Jo8JUngRHBJVjmZiVFD7KQorfXwpvmv977FtYx5xozc",
  "key28": "3wvYEdmHj4yncnSJcqNJnBnG1ASuEo2JivMPL3XAtGGQ6VYcqBjyEbCJ4exHefe4GYWmBLHswVi4rpvtb1FJ7E4x",
  "key29": "5nDAPvQe4eDVwamqbsw3tmF8dNg3NbCwEkamSQqbot8LGXMtT8tDpxGouQcxBrGVHeLGjoRLywyCxAppDn64i7p",
  "key30": "5ZSycfXdzx2T16C3FdTMgYZer6xf6Ltv1aaiRyRvsodiJQYMmRs5fws8FZhcmzvYJTs521NaVtDuDqsttu7CG866",
  "key31": "UuAxKWSCChhyNrxGo6t1QnYCjEgmaaQ2xK4daDzNoDv177BU78fLvyK6CAgoUw1u6VLhLFku4obS7WVPvJDDUaP",
  "key32": "2TdKhS6xwyQw1xQVxZ35DdpdQiDMhXWwPJovcRa3LUkyVTKo8Qnk7LTgjBebEzL9bjLF4fC5X8bMdEFTM5yD89Y4",
  "key33": "4TUbfPzmoCA3eE6zoU7Ebs9erNnjejqgD1xASNcVGLa2jy83zBgczvBnPS3wMkteA3cRW145MJsZBruuKhvufwBy",
  "key34": "3zgFBmQMU4KafN9MrhEZqNGLpb9HsKVGaX14Xh4HYTzsmv4nv5VKTYyTU7WByNzzbLgrBNJZYQhzZQLtNuWfJ77f",
  "key35": "2rFm8RZcKCLY34j8D94bg6sVmD7auXn4SLHyp3uRrmNGfRZzmwEDP95CDSxh4HVw29iMxcQFjpEhmuYi1iJLvKnE",
  "key36": "36kHXBVhnZFUdNZvfxwN9eZmAPMsCdndy1Rk6uSrS7hjxdaXMGj2xEbJjzYggVuPMUk6vMoAiB1LUYQkRLu3rLSP",
  "key37": "47fRF2sq2xd3UB5f9f3XnUnQMSdvazbsqsoGA27QTNgjDBxVHL6itdtMxFn1oMbkUhZXXfFm6BXYTu6ZLxS58tTu",
  "key38": "5BPEb1mUejRwSFLcxLJKWYcZpisFonh39N21THqLmr1oMZSaHKmujJG7aKvCJVL4vefBU24MoXLBzM8URiudSEQK",
  "key39": "4kfy3M6eF82yg8e5GAN7phPQKxBiTDhiURCiJ6DxVdw8oBrHZJ16uRPZ2cPX3jARKG6CRgEcdfeefkhaBguwTSDn",
  "key40": "3TKw4jF5QkJWQxhkhFWwGU5gi8K286XjyqLksdgEV2tbYyfshB8yWEWtGpyKvHgZySAWuwN7qRp4douZzvZdWqNp",
  "key41": "28VAdRYU9hxZij8eg2BSLdN4tfS3Ho9ugFNwg1j1edjdpteBH2dQnbvtZAnYFSBCGkefgf6bMXphYHNTyspk8Pnp",
  "key42": "UuTgxp8arfdZrixiaZuPrRRYDmYo6GEUmSbj6sYaF4SaLudjTgNPk19AVjnZmVQ2n65pKrBNjcak7eRmveQVFRb",
  "key43": "3xrYo1Yht8gJcFb4tE6aPKZcoKDLxc4P1QmGoUXszuNgGhSnL1EeGZFxcthNgdvTsJWb2rc5MAN85sH9chQoVvPp",
  "key44": "obsK15bufWGyrBs8sA8FF383bsZPgJieiLoTexVTUC6BSTgok2r8cC3HfZSi8ubm2ZPwegUzP1WCMPM7cKr9JHV",
  "key45": "2NCLEJzenYJthSFZhw5KNdsPUQjRCFkr8rRs1RKAbVMeXQQEUqcD2QRVDputQ3GAaVB5TKnMvUtRi6VWmYXb3eb3",
  "key46": "3SzVYtdUAxrBDb3LcAgtpbbcm1xR92pbzapoWcQ2NYzRbqnk5cJMsgEsTFPH6n1UvgY2ExARak9zZuaq8uKzFhEL",
  "key47": "5Fei9EUombAM3rPhVoaVtidgse15i1q77KArCHnyXHAEKkae4sbRgvagSckJC5FL5XCBriTgELEWP8hixp9WBE3Z",
  "key48": "27VxeT7JkMYm15JscrLj4zn4JFRvXNAZVzFLw84Uk3Y3iZhPfPovXCFd25wkCSUEd67TrJ5QvsfY2JjrbrFnNcgQ"
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
