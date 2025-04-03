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
    "23aNxAJ6VEuzbGTPWKEdrvJiEhzLsnAPjLmFgpE5ZwiDHphyc3CmTuv61ibNNZioT6nftnz16b2ivEqP9bj4gaup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tsvmbh8VeYiUiqNovTWm8vuEakkEigMMGnTgzqzRm9wL1actpTB4wkP5Y838HtikYbfpBTNqAP3JbvbBdWz2UF5",
  "key1": "23u8peusvDKHG83ZiC7Eb66p1cArBuvMbPNg66kUUZUqGk4vf6cPXHxQjvUe2c1jnscZZoGSep2mtMfeyDDxdhWG",
  "key2": "2i6sp6ScKc6Mke44Z2FXMnAuLkmTEFFDJHMocDunNakozsFaZPsccrFZFoBFtvYoD9zuP4E6Noa3CQCrpQXRtJ3T",
  "key3": "22ySbGdu3XsC5rYpVfCfhaJc95wFy9zWbg28mAQb77TYtpHW6jhHYXkDw3U5LcEd5qTSfCJYKkK2nE2DFoCtyRPx",
  "key4": "4gXjhX8cNN31EsPixpqrHCavfNTD6EspSGD9P8avgxiQPYtDbWYizmvYAYpFEcsdMc69N9Y4nGxhYVGKoo99VyUk",
  "key5": "WA53WA7Z2zD4Hmn4ZYQ4gbPqvYhze3xC5kxjgMRTNp621P6LkHQChnbzhXT9nwsRTMbiGAXhNREW3kuna8BfHmC",
  "key6": "35dMDcTFQfueU6XQY8dBwHzbdhgoqv2mzmrE8Bd7P1wnu2eyj5jwxCqr9J2ijmK4oDf2HUdpEbEbc1bVJiGTDMsF",
  "key7": "4ode6KaQuCjSk1sPFdVCMU9imUjmqDU4kUQPSzYrAg5VzixSEEXrhbU7mxpDoRmcArfJoyyeMuxiJacaw5i6hp6B",
  "key8": "5kPtuk25HzSgQ3NxCK6KnqUVVd1wbRL52c2a7oSun35UMgjS5mGAB7ZQV66t6euCsnbvp8A6D22XnYabq7JDByNf",
  "key9": "2a4AGkxBRdTuvPzwn2GnVABSGjJbBm17hunrzWm7HqfRVyK2yXXekYoPGhGXnuv9Zo1qj1wGLzjYTxhZ9RdrWrYi",
  "key10": "2NExEe7yDhBLqaT4BxtPBoJUGAfAgWivY6cY3ZkBJxYUFrmE3JFQAJSK3MePwVqgoC2xb4J1YcekEkHWo82Mnd6W",
  "key11": "GQqsJbarkL8L63zhDVipaggEy8qdQDidgZYQ8UcAosu7KzG8pJBW7qkGSZtzpaw6ouoBcHzFneXgex3UCiFJyh2",
  "key12": "5NFXCK8hfNQ8q9M9BNQgN9Er7FBeLm9TujBcKeHUQan66b2Q7foRWFwFkC8BWqioZTmGbEuTZUR3wRnQ8M55N2iq",
  "key13": "5JpRwcN1Y6Z8iATNkWJv6qeXiuKs6cvbfq6kBUFELKccTXpsnuVrzVN9afUr8oquodnbqb1RRi5YKQJcTkimekaZ",
  "key14": "jr9hwoSX61LhMWzuW74pBZWDVWqHzHPxGEKgdUADJ9UVU51DXDcTHX3DQmZnkQFSQt99RWjAkRTujD3GeMTmnE2",
  "key15": "3BzW2Yqpq52QimwBKArdLXdzVwkzpED5yUjzR5iJhRXtFVAiHtSecH1oW5vVRdTCNoU2CRNygbpvudPGJxEDM96R",
  "key16": "4Q5C6rPzEYxE5vmHj3u4psnYUB9zCL38CSsVGdf37mnnZiFhB32tQX9DQhYiotUD8QtYrfbHwksnNvHxLAMtXpgx",
  "key17": "5KnMuTU5P9RHrPSFvSBVJZDW2QSi7uZfujAsq4xQmL5iC5ZdtzgwkUNYp6f6UUbWcMSPtc2XEmoWGdt4gQyTtkbf",
  "key18": "2GjbdinRZ61Tq7ucXvNSTw4szwnbfgP29ZVjfqmH64REYPUbfXqyrhHxvxmeg1L3E9u7yNJ3hYAfJ8J7RXmQYAyH",
  "key19": "4TCiY1QkgRMVw18JHCh1tgdJFjpNGk2QgcsUSEkbe9ocCbRTKMEBaV6BNSkFo6SQnAgRQhFeAntpCRDUPhdmwopv",
  "key20": "ird2iTWYJNpUmwKeUuix52Db4mzqkP7XKiVEDS88Acb3zKmmBsR3NB5Di2DEZed7k3eNKy696TWs5JuaQLXydJ7",
  "key21": "3mJqJRDTeQb1CQdAHAm6S6aK5yaD84mJc9rWZ9NhoQ8Qz9aAo5ws5ctdDrTySrxFBbrHkXgw8ejbm2kiVYUZdvBZ",
  "key22": "23Ric3hH86ihFEFTuDNpGyBVQ1sMnqmwhJbuKQGZQYWqcDw7gWim3z3VYKaHPqaZkiQT9pJ69Cs68G7YKBjhiv6t",
  "key23": "43VCFQP3XAZYmWKoXNehBebVS8whkYtMvLKvuub3czAEmSi8ksboG9g5ERnqaEcEuRqxRbkbarvmyU1LmnuUr2wM",
  "key24": "3GHpsCDYdKApiiJoNk7iYxLoY8qGMRthyXq6YtUXipkx686pSR2ei2t7mp5wmDPG9hhXRwPdfgxyZm1tkThq7DnG",
  "key25": "rskXTkFet31nsEUhHKLuhy9Q9Ln4CWyfAAQZTTpo9H2H26pbfqiPA342gKGGNBhPVksY4NcyV9iwmu2NyKQ2pfn",
  "key26": "zFQ2bfXjQEF4sztqKuqrxBUbozd7VGCZR7RJ1zB35hB79c3SfkZnmF1VadgYFSa3oRgdSPDfuUypNJDe6j3nE1Z",
  "key27": "3rTuNs8qVNYzWSjVD8xwdYwvxtMz9AHadWfSqRCSvCPhT7Vk8yqEyF58ZRF6fSBdS13jAW9enzy2m5a8nfzQnLJG",
  "key28": "2RyCL8drsKy339ajUSBbEhESDZTMNEnkoM54LgWoF76SGGKqmrGzgSzUPMmpx4Wmj6si2ShhM3G6EkFxFkxb2tKq",
  "key29": "2strsicp8Jj36n9cfB97EvnpVFZgmkJ9C7f8tq1HCUDdNSEjPwhxubwvBmGXGdMJSxkBzrHJahaA3epRijCi5zDj",
  "key30": "5dg4cPKkZbCJWW6y6ZkqzHb9mBGMe8WPMWYuEBf3T2VFr5a4FUfBtkUTc2LD68JfToqKFWbyY5E6ddfoaPYNvoe8",
  "key31": "36qmFoumxKn4kF83ixr9SJrmd9QTZHwmZzLYUBnZvSRFY45oh6M1vJmbCmkB572cU7rLD6R7t1TPy5X1NV23hVtb",
  "key32": "2piSCWSo7u82MKRY8uM1mEmL14oTBPHpKFMRXYzRwVHSEuEexNJPwGFTz66fHnUboh9YtKJNrzDYiHEv3RdjvTk1",
  "key33": "67qB59vUqZrNcHkyLxivpwvsNM9ahhDAKVLnc5hLfrRZwHau83UmAWXbdPVs1pJXLkc5LqTpz1dPTpDs9SvhX14E",
  "key34": "JPie1wJVkDUvPkPRxkckNrFW9LcsDE3yUaRgz5jGCFY4QBtqnNYSnGKz16E6qBp7m66TK2C4T4FjxmLx5GuBK2u",
  "key35": "4PHftTbe6eJ2oXeiBzFHN3uWx7V24mMwfmz8rwVudVDn6xE2PWyMXAzGsjFHrSnN18WKon7KnXREr92aHgCAPbfP",
  "key36": "5rARcNgS8Mwc7ejHKSmSN6jbTeTU6KMXfpTHqgSEr6FQ7KQTh4XNhLEHoF4hay3duk62zWAjZ7kehnfUiezh4FVJ",
  "key37": "4PsitvS1r1HsnXgWxQX1U2XBw2YkRaMiG6MzGkC6EzHSFokVMVsGr2MnwuwUh2jbR6k514sQVUbsEb512fLY6rXD",
  "key38": "5A5Z5JwqVyBTMyh1H625hqjRHbMDY9EWW8JEWuybhXRbtyeUTk99k65wcMxMSnG1CCfnST7CuozoidA1EgpZa6xe",
  "key39": "5uUUwxQB15FFjXDkriSbwd3w2ZeMzmttgBx5mze2ZDqHatVFvu3UZA4n9gvKz7kUV9BhCaUGbtg7Q8muduLqu8cg",
  "key40": "3VYPf6VtQkGN9nFb1orPXe7mFj4cTf4TUdTAi5cQeRxsRUH92nLzQgztAj7xabeYR5hWpNUkp1AcrjNkNKsNUMHa"
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
