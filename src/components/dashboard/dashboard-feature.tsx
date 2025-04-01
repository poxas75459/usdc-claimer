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
    "4jkZc8x9F43EKYgWdY6S32XpRw37SojG9eNWjgB7vVZQZYpjQKCB7rpPEzX58LdQbWQowJYguv9sNrvWv5ZWcPna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kTxVaHCUfqfPqczP9JcwTyF8q8J7aVzbhcVpELx7HnT67DfjL3bvQMkDv12omMveYe8H5ogHnr63VEY1i139zHw",
  "key1": "24DJgkpTvMapfZJrrsJzEqfiFANGzRnwA4AekDeUQhiAAmst5Gaccka3DMZC4FhEZVRrpipyP7m8xUCVgeGDLAdd",
  "key2": "3aCsckLSXvsBHQkRvEVLYQJ4FFhsM97DBMiUuWrexBNQUqMPAoJeTg1FPp55CptMkXSWigQas95SAYzxErwaHWzy",
  "key3": "4igmL1XBF1ffDwXjWmU5TqhA3sarzEhdUVzCaDBnZioABStxtyV6qXYhEG833zxh1VJqr9iVm8EWb9WzFKwDBFZr",
  "key4": "2prML6yjVCPX1faciZiQFC7c5EZwdKsFh2MYdBbtcvVY1Ebr7DvbQaAWYQAg7ULtkxn5P52hduVJuzhFSZYH4ui1",
  "key5": "2sUpzX2pVpw6WTAziSnbXKJqMBySTmNfYXUHgKzJu3wyTqC2sG3GPoKGzr47CdiBFgTm44k8LjE5MtmnNrLtBhsC",
  "key6": "5ckRLVzsRcEGVazC51WkEu2bbcQZ6aGVttD85t33MTVrJXAcGBsrdahwaMiKHzMeN7NDxcNHFVchGjgXXW21TSbV",
  "key7": "5uLzKw5euGHiGfQf1MZVxdvbJR5f4TSvarijQxox5Dspz56tpTkYsCjvBBtRyDEcLyAHqxr6rofeTzxxMC4xJ5YG",
  "key8": "3cfP6AycEGEwtzTfWPwtraRypbmR7ouzihexbRFfxtUGcmBhGS2nEEy8tHbi5xnitsr4oV4NZZX8A6GWevFYxTUV",
  "key9": "S7QzEys3kKCukNU2RLRs9nKRw99d1TWGoyixW7E6RxnZgcfaK8HU9zzjDF6uFEoCph3EFw4B2UEGYkcfdrywZuj",
  "key10": "41rCMELUzeVc1Y1SK68edanq2XMVtaztgqrp3BAQwjxaBAUBP5M1UjUSpYDNowDVebur852vQns1n7DKM4zJvPbe",
  "key11": "3gKbtJpquD6iox5ZQ8B5DmqzvG3C3sZ9swDwQ6p83CMps12DvYX4MG6GGDSXDq5XEhs55J2Ed7JELD32iwA6PFXR",
  "key12": "5eGzSaJKHqrMxvtCBW5EVWWs8kBamXjAWt8maqzyGh66PkzqsWuGDjfG3UNZL3ZdMRN1HUuUoMVc1LJ4UD6Kmohv",
  "key13": "4uMhKdVocHNxREzAqA6QAJLdwrg79KesSzM4asAry63ux48L6hY8KNKvN9B6MQx9bMJg99xwCbAp1cRb1uWe5CWr",
  "key14": "3eWjFmME1gaCvrTHYv8cW7we4YSGZdgN3ANgVNzotNa5Tqkuxix7GqndQjnP5eaPok6ckg2TEuBbr1ra2eqacU41",
  "key15": "qxVPVV1SB9QiEv22bEDyYchqNP9uaTPc96FbbCzcg4wWZm2Ea2Te2KxuYVq46CEw1nf4BfD6zNhPKBeCXD1MCXN",
  "key16": "2CNrA8NhPqMjKj78KZnomc7yGDEYUXhkf7UoKZkJ5tVE8gVoptmf6x4Knf5KPZ831QBc7AUtgHxzCUhhmyYRaxfa",
  "key17": "2fZP8t4Mip1r1sstXUSdt2BLqaogf6oc7R9FeGzVYJ23k4HFsj2EbWSyuQnpzvCDD9UxwZZvEtY81jxX779XyrYG",
  "key18": "2zTA9DKjgEy41jmAneXWmEukeFUsnAREi2vFeooWwoqdXjYpnBm3xzF5JLFj1umipfXDuLpDztve35B9LZ3RbwZv",
  "key19": "2HGdYStA2XMHS3CarQR4rusoo2ZWbo83D9k7u2kcrDq9c2iGhk2HnXAdRos2ekUvKMyQWXLq981WCLVXjqGBrfLJ",
  "key20": "6K3DPxviXY2myF1W5mU8mzNuuNDGwGACjR8iAwL9HtkXSyeLKFc8c3kTGNt3vatah1SqJv62q3Ya4vQdMY61hjB",
  "key21": "s2JgyzdkdkZyXr8jWyQeAvx6EYaMMGWg3euYyyGXBNoAG63Ppz6TiU6iLd6tjuVU56VRFd9SoJxqfTjPJbZMMxh",
  "key22": "5gKKFuV8NTdVVsUcnYZxFVFGLFDYwgiSA8LVEs1a1j44sqnWW2TJN5Vd12UKA8ScLrzNVDyLWvTUDUvqWDnwkghD",
  "key23": "4KtVpkTL9KY9NdcaDrj7JirdWHkbkD25UkihKxFQvaDDT2RXncp2TdNNnJv76cP7XK1VJfhnkTXD63WikvoQxu6n",
  "key24": "2ekx16L4P2oPCYH6FxL1PZZCWvQXdzDnth9axGNfjQFKq1zKdPRzTV1Nvfd78XLexfyW9uZpn2EYUnxyPYiQ8Zj7",
  "key25": "2QwtVdzZ58QLSgPgAmeR5A6LiL2ednuL2z5maByLXVwihaxGAmFU42PYHkTsC9nqdm1Ue6idGQHZVwLrDkigr8zG",
  "key26": "2t3tnydocrWLmQPmTaZpTenbn5d4xQVTGY82mswoCUkHtuRcK217orE2bKavRDkAdF6PCPv9eubFzJbvgh12iqKv",
  "key27": "2EELkUF5jAQNjGPQe7pj8SFd5vfbrETbZ1BXrsAri1CsYCEmUeWynPH3eF83GJgWjiybakgiYKvNWeRM8qMgCT3c",
  "key28": "5hDsqBwaPR62wwESS9TAJ1zizY5xXNRY5CYr6Z2zeYowKGisRa2EgAWV2CHawo9RwuyQpkJUfeps7pJYnuwdDG6s",
  "key29": "4YQSeKqPdVfhWqzaQ6ZFaHLGBUbYP2XSDtFDp6vL9pf3Bdh8ojmCDyfhr7v5kq8uDw5EFhUXSBP63C9uG2o799SD",
  "key30": "24rkx2DjiRyupzr9XRaA6VzJPx89H5JSvoTmqX3x2SHSJZRpSdhEk35H1DtxhYhSSKkKGEc2xuQCnCBf2RGpLdtu",
  "key31": "SmSAWBmyPSc7mdk8Hn5dtANc1YndZNAqs9pcYoi6JnuuTTUqqFYkh3P1QZkAeW3NLLV6TdUXGyCQ7QVEUZKVj1h",
  "key32": "3nQLrGvCpJoSNmUBPTTRcKbvDMNQZ6KFJrMBCkAmBtV5BAhF4ZXu4veTZ7x4X186vELRzYME63sAQGAQNy3hhS6C",
  "key33": "5nY3Vxux2zqZirXimLEi9PZCP886R9dZr9aU2h17XhCjJQbdREEwm98e3r6nw5cGfLD9Z8YNvTS5wmm8nUSNUbT",
  "key34": "5885LEG8A7yRTGVTLSVCGAcV8MsqrD4DfUAaebzeTrXsPwwM1as569AaV6twQ7TL523WjL3yJKSTbM35phCqLVPk"
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
