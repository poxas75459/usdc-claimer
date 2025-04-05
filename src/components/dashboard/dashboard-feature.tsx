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
    "5wAaoGQ37bVhu3wfQmGHCnDkX5TbGnLjj28LhGRXnVm8iiZRECnoHh3mT8EkxNN7Qh4awEK15xjxx2HAEStrKU6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yMz9HX5ahUQP3KMSkTMfkPbXQsrC1XpN1YMWt5xan5Pm92etpnCzjNUUFp1UsmeVEzZ4kvHViUaUw1pPyPDbER9",
  "key1": "2mBsoHzjPAKAVnnKrBykcLHy1FF8QsEycQP11GnGwXzpv4wAFE7BzkoGwz9FJgYmxWvLnu6pQYvEwT6B6HqNo4du",
  "key2": "F1e9g2pKy9UosA9iDYh3nAkFYsnVbYZpFEPbEHXxHUKVtVwT5GL4Fgbp2whBeTdTz8suZuGet91Tve2ZKgQiBHm",
  "key3": "hivERRjmgcwCe5oTXxWFMMgZWa3b7xMx8WkREcwzSv4CD72RtjQfh3Gav2GpjKfVPtLK79uAqcoy4LfV63bzBzo",
  "key4": "3XA7u1iruxFxyW2hxyfk8VM6d5wsUfsvhCD9EiswWpPtRF2MgQNp9YC37qwVG7YwJvMhCBKos7dxLBFXh7jY6zLj",
  "key5": "oZWWh4VHiT9HzcAKYXDcAWDWc1TEbJaNncndGLmaPYXP7JGc4eqC7gd5sQFrwqFPRWNVCt4JDBxsQk11ku48gsD",
  "key6": "5XMHba8d7xv9bCEM25Wu1j5KbH99ZosbpyTxX3kx6LJSwYU89MAPMDJ66ESuCWrBqDXJs14PfD7CxaS7T5kUwyra",
  "key7": "5USXyr7WpC6rh3jRT4RLELNJEygjLK7mHfUFtDdRkDTx9gz1gyYpG1DbwoZQwB57YiPXwQP1RsrZhuGLeEHRMbs9",
  "key8": "3mw55TbFddFcwfhw4S5nCd25UcAu6DJ42BttS1UwUhr8GzVY6zU5NkfsA1f2anoKjCfEHU5YBLMu5zLGxUy1zE7J",
  "key9": "5FwJGbegB4FuMfPYeEMVyTHouw2Fcie9EZ92FTTb4wvd3RWP4gP9tQ8MJQLSECN155Q3SDFYf1Bww5DMvkbYJSX",
  "key10": "63w5C56SsXaGQjzZqPJdwoHYpktPQeBzWVdwAUGjNVb8Q5dG2KhpJYQ7AsMkZKe6duU1eBybibjCREpYEGEcMAJx",
  "key11": "4xSmBoykCmUztqqvJs6Shd1GhWm6xiMvkUuPabbrjduSU8rQi3YWqbjwdCAKn67d6obr5J1YAoMLMrVXHSrQ3WeQ",
  "key12": "iYYVvDvtdUBk5QenAv5KRsBYTPRhjQm4fju8UD3driZdY4hagvFa3oxCxxBiZ3TUaroHKsLXgzvengUgd6pogWG",
  "key13": "2AoY2NK7HoAvs6sVQtCqaZo2YPDFo5dGoCbfRwJAz3imPwmeqg4wX1RnpHae8GNG5sX1CQjcqYM5NMeENrRo51k2",
  "key14": "49idMTan8tTk7e1jbaAwGP2QtvWCbdrWdEKvZqwE9fc2Cd5NXHByU17dUssPFJ3ofQS9gFxoEJmfzkSVHof87V8v",
  "key15": "29avKMceEy22aVUp1dDE9Jxf2DX2GonL9BSCUNyQMYqajQ6EYrmkp1hDkSVfq8aUHzgxgdrkxiAgXDBuDkEyvaX7",
  "key16": "2b6KzdkH9srT4gaGM2Rp9vJHn5VS8xfPGbssAVnpLkkTMAHQJ6hyXUV7unpEipsT3LxQivfpP1T4MENMjM82bMvz",
  "key17": "4fmRPo7Adnt5DZgSCucee32TP4F85oLv3rboWaKM5C2MgK8x6ujC5a4559SF6oYne6NaNK5PRPruA8ZGVPPKX2EK",
  "key18": "3ASrdAiqPthwiTTbUxoYEce8YMwKBZoQYie1HSbgHH9cmfXeuBTuZiUFYWKQdCux2jDE2zLYiWJgESvSWq7iFnRf",
  "key19": "LBBJRzXqgNhC3DzzNV55Pg8zd7JHqpc3x9qxc2BCXdU9oX7QPMEM8Nv1zXjddJbQNLwm1AynSUia4ou7ee8fXzH",
  "key20": "3nRRqSFyGypFstWmw5c9wmCEZ85R2LstQL4rLAmCdvBxhWBK4wFB3eQRvBMC3VgM6yZxsJopdmmG83Jfbkq4h9po",
  "key21": "tdeAbGCYH5194MrwZriDh1Wx4MExjcEqSW73T1HfRaDkhDzb8K7WbW7QGYoDjGDrHBbD5wbTqQAouVJXSLm1bWr",
  "key22": "3xN3NfpDkCa5TitaDBU14ad1ivyPw3ReWHgTD1PoZEwiV1qoGWFD5WoKR928qNoLnVDtadkiYKG4YPAXWcCqVd6w",
  "key23": "2G4hxrwUaKCaxFtvsSXohB6pPB54dLH3fEFN6XgifspTaVMrj7dbw8Y2QSrjFARsVxKqPAXo66822hj2ji1iMjyK",
  "key24": "5fmJBcvKYTrk8rqNiQaB1Dg5Luot8j1KKYP9cTXXAV4eRRVtZ1ngbpdqBQMkoGYDTUTj1Afrm9QW5ezJtpMDQfqT",
  "key25": "4Qoag5SHBRLhmcvgSWiTdDp9H259tuPbHnvRvWsPihkrCnohTqeZpb1t5N2p2TtQ3TkGKk4DpdqqHpSMGnekb4vn",
  "key26": "G9xtghZLMQB9KhvmK4qKY2pkSPpo3eok8qRxF3ey1sDDkgKxqEDhLgpRgTJ9LmLujuDpgiiETvcNXbxVeN2ZHzD",
  "key27": "mjx4resRDFjzA35qaLVggxYsjLA7XYUfGCo5xVNUAw86YRFSD8nFj5e4vRR4mD4sfiQg11v4Nd6AmW16LVpBrUy",
  "key28": "3qE3wy3sQsj2NJtqSE26PGJ3ZpHFf9N2hMvocGUnftgT5MG8ae8FrnmwGFefG5LUwCCMQse5qRiCQXoEYZX9h4K3",
  "key29": "3N3ZRLZA7a5HTJSXwWk64Wx5EiZpcifX9FQHtyDs15bMNgeWvmwX6SXNWw1poTXueN1WmK5Nx3UC3oDAYQxEfGcL",
  "key30": "2GUTtX7hE9QokwYP5MSoxao5jYNj19QjFagwBK3SAtTu7jdatgYD5DRmJ42NVvZdWDMtL7U57HjLPA2HCJGJmvTn",
  "key31": "h3qfse8YMGZdp752faKMKAG361q6g3CihNCsa4cQWord22hEosQS1jkhH54PLXFY6atNDaYY4qp5qa9xXFoXm6o",
  "key32": "65WvZVnrXfe627LzV63J6hTNmXX7dr7AMPFVJNdD5sHhuDWBs5MqEosAdgxpijAnTVZ6kEpb7ugTg8vMqP1Gj79g",
  "key33": "5qjKfbGJ7tJtLXNyHtH1S7jPRN53tkfJbSYCjnFvDdVqWCGmFANvRToo9fWBtmDgAL7SqbZcZVShYAHqQ96osjHJ",
  "key34": "2W5QNSyAiBQzs35NqCHjzGqaqGg6x324852HPYmkV4GbMQZoKmdtZSdqTamjs9amzei2pvZipwJZsGRxdxsxKSpX",
  "key35": "59igfbiFuv4DjGQEprasLvdZT6BWi5FX4JXNqqMs7Dk2yLLimBujJGNtn8U5vXL1wMT4JDvkKtVpAcJVKY9P8UMf",
  "key36": "Yyr6EDCfiH5GWDsLuWrWRSVUwD9TNKG5wqDnRyu7dJAzpVNj6viA4o7NtZW79kkPdY2hUVw2LhE66Juwm5qtM3x",
  "key37": "3kvWCaet5gfzXN6KWiqkRvuVTXZ1HHYPH6ZstnMpjPJq2niftJpRsmYq8CQRy1F3XknKAbNBoiYLhi5vkGNyoCkB",
  "key38": "64KCX5U7t6kdEd2rwvnHHjQL73F2JWQro3ttFHLRGa4wcQhYfmK6Wfk1NpWRTehkGgjATujSDCpGoQGuFyyfkM1H"
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
