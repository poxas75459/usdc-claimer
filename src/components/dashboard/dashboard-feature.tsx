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
    "8ZrxSKKpsV2H3TRMMacWaDXbLEPyQWKvQBCmmxLpaGBWs1UMUNJBNKc19YgVXDwZpjEBEyfwt1ocpypjXskYJnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PYK7mFSbYvSuZyNuGYjX3KobU2i11u2TFNDWzWkoJC5CDQs2zR1MZv2uDAnrTd3ufzkRReMiscE5qAQU9vydVqM",
  "key1": "gmdgKJzv7SjkSc1gpsVa8a7ELzCRLW6Mf95vsvWDDbSeac3xH9xCkn8G3iBJdP2prEdhSMMGkmcCRLKRhWfeCkq",
  "key2": "3evHgvcFZQoAeQPwM5rjfuNLoLsi89ZpTyEJgE4T4hUr5myDHCxiTPaQ8sRCJxYQxkwWcfCJwoVi3MnUVDRagyD4",
  "key3": "5Phn3ysTFFuSuTJ4pXLkQcBLQU8gaGoe2k9yCGPHK7FfFEYYhPk1G7AhbYGFo6Q3Y6XgiZYPFcWuyU3h2fLojw9j",
  "key4": "5YxkwTV8zEomAyfo7ZytFzSjPGBkRHg1R7nhBWRoGSAhMJg6FQtzm4wycWGtk3M7JfxaEE2vwRDov4UakH7nJuzP",
  "key5": "5Apx3EHXqJNe8Wnhq5yruQZtGcX7FTnHouNVMvGvkeRjP8sTVyfTutAM4zEq198oyiNKPk1My3FUeLPHxiwZ9mjx",
  "key6": "4f8ZVcirsThKm78xrSfqaHRUqCUyZjH4Pi9f5F2BoAqRsXkfg83oqZ7JzHn4fmN2nQ6maH7HZQ3qZ6fpoPsxadUk",
  "key7": "37QXzMyd918uaFBnjPoTUCrGQry4BgMrsYWwfQP23AMKUtbvNfk6rR5KszfTQRXkCSYNYbuRa7MULP8Lk2jY1fVa",
  "key8": "3cz96avTdSCD9DgRvZvvHK4wxJgrSQuWoZLu1MX1j54QwyKFfqy9Xr2XK8dX4Pw7XxbkwQ6EvHDHVHBYnJ7q4Qar",
  "key9": "4PeoBfUAdL4WCASRhvkZC4hDkJ2yTRakfChRvzyeYRcrVjDD3dC3tKDk7UUWgScYHwGTsqz1GAxSjAoEMJ3EGuav",
  "key10": "5AeUi16R5hMsGD36JVaS6QwtC2a3zP5e7Fh2XGQrE5VXjvxdc95Pa42fUuM4UxNqtUH5VSBWVR9woWWz5XPewP7x",
  "key11": "5zHDSYvTVMkcF4H3vchsqxx31JhDewxQM6QBT76AMGP7NZQdU3KHE86TrSkiJHtLj1AUYPWjE6na4kwuWP3iSLtd",
  "key12": "5uGq7ZBBUC5rnwrRdnmWLCQF6uEqU2ucNmMcNxUEasanKsR7Y97fKtY2NJ34nDXiXFjCZcMD3ujRoC89uRspvcZe",
  "key13": "3RaegEbvxYkgRfRDxy5Eo6JVanPAsq6H6d7HbiDeW2LN5hMvi14vsguvCKm8dZweb2GwTkSf5ssmyJqXuKwjdhAb",
  "key14": "4izLs3xnQF5aEEeErUCxdZ4BdhotaSjNfpoxLQAkttyCPAbwJ88wpt5vjn9HuS68WQzrKxfkZPs3pNJWJdH2MQPf",
  "key15": "5aM3Av5steNzD5p1HUGLuSoGoEafMRjDqLjUV6tyCns1qbymYVRZaQVSE1sRPGbuSxUTcBjCDLWneoU9irV7s3eT",
  "key16": "3LA5bdSCH5TCEw4nHcRog3xX2x3EcsGDmjTqgBSjN4g7UDZQf6mZU9fd6YYhqokpDAFpDMvsz8LUnrJbFz9ee4ti",
  "key17": "4JGnYKQoQGg55yXS31472Ghjiie15aUutnzWoDRvViu2UVvwscWJigRg1UJ7N28N1fLPsnML8buAs9nwvk1k31Qr",
  "key18": "3kQkBWRigqdwwNES3PpYd2FTMB6ntD5nMtNUVRWfvQ2UG4bnYWxJAUUuEJrQVa8xgusMAFxicbguKsbetEytgC6j",
  "key19": "LZ4NwGvvfMNJzNxBN34nJebC73jTBdJB6wyoJjGrhjewDBNE3i9xi7Tfe4VJaSToXX82LcuuazzM5nbJiwBUDDN",
  "key20": "hzrDJAzAbogEP9KcQFVFPDWKZHRBhR8ZdfFjXcAUAuv1UroaxYaRBBoii3YN6GwNQpEsFGb47tbTYktZaW4tszD",
  "key21": "3qmVkf3um31B25wh3C7kENtpFWD74ckPAyK6QzkZWxsEsvy6EQnZuey97V1DpQX2XAjjKyPMAZfCbPdudhLq61At",
  "key22": "3xMfZdcH46YNgYKao233HPAgtTwDE8vDZz7aoLyNsHwjuzX9rGJa7PTKLgHnVwr8qYs2TQ5QPwXDRhhALLpQ8d2U",
  "key23": "5WEXasympyEzDAE7Co6YPyEXLBXhgif4mVn1NkYXoVYhEfvXo86XBykyy9YZLVUrXS3GKAJZ7Gz8H137Vj6QcVyp",
  "key24": "2vewt1hX8rwSiryyjYearQMTmTsNqqQn9RXbLpTQCaskd7rk2AQV98c8DfQQFc3gLoQs19NXjhHajCMZmmMY4wok",
  "key25": "5NAV2BefR5GZpZ2Jj5Jb1XmtFvy5AporY8Fpfb7esQA3FsDC3sj5pboquSXm9ySimVh8ZAyZVQnoFLGjgXYnib1T",
  "key26": "2p5PajGbZ7LfRjM71T1KYbzSo8CTFj4PP6Wc3HwBYjKuKQtxCQE1baMCLqCCiNfL1d6JHDCnnUvvnsnPZ4TUYC2g",
  "key27": "4GBMSo9KAgkGy7qgQpojRFSqxidoX8Bm4ecpYhFFctMg2xsLezpqL7xGLbdkVPazH44WVojdHBNwXM9LGc5kF4jC",
  "key28": "uS3FqEEpYkX8eG9Y1zc5WfArjVNnopQSYYs2T8r7woyXpxaMz7RfgTR26FXpzJTdRH31sU7qnjKYdqduyBea6iP",
  "key29": "5iGuVShtPXqpiGBxeF56Xx16t65yxBm41LW4tjpqHhXzhEfCkEPKQzsPpK3daoQBUpbmFbxATt3FVkFVEKNwfond",
  "key30": "52FgZfixu4joLb4uReSuskrVZpGuhk8QzE3nQYR7C4TuQRzDWqKc1R8JEzJ8JGd8edwbgBdH1k6aR65VxS6i4kPA",
  "key31": "4j1TBKeUkm677uW317JmAUTpbsWWJwPDPYJ2WNuY31G96uUTMcT7s54bRNHvERU71JbFKSGbPn3oTVAQ6efCVYuF",
  "key32": "4Z7txMwQ73eMg3DTUcaWaP69nNNkj2UaYy9X5pfh1vksVa7hyM4sJymtptN72WbqDqHv3wWq4K4mCW9xqo5QpaiC",
  "key33": "wykNWqrDVyqtapWuEbTMu3rZZeRaxgdnXEJY6e5UEg4A7p2o1xVEfSRWPSBZQz2G8b39KTV63DMbVM43Dj8whdD"
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
