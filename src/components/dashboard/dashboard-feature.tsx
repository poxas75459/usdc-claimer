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
    "5nu6iAPSDxMaQu2JCa3EbuCzD2zfQF4W6Xm3iFbiaHdn6GEShWat68zZngLT51dWLcb3XygEUEHWxWo1tZ55oGjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N9WY78RPfGAGe4rjEEUPaDFZnqEjSvL5ybbyV8bnuoWaTuh9dEwnZYVB8FHyq3vmmtTw5phWXpgnpQHg8jeYbgP",
  "key1": "2t2UHacf7XPqfUjGXnUDh1MPJ7pTRjydXagTvbDsJK5F7cxujMN19yHw5U9jqgqajrmiSGRbBNm8BXyp49YrX85k",
  "key2": "5Fdg3jmE6NedLzpWvs8xkkq8vRxrzFKwF1tGA8RCVPJjQie4gQSGHtS2LNwkSJoAbrEf4QVz2FFVbrCRaoTdURxQ",
  "key3": "4Q3QfLwkJMSEAJicXWV4J3HeFYpvc8SSH8jM532aZSsrsJ5cQe4oCLYAyCbpWj5SSwqsWFufdQYXmKafzXcfkKyS",
  "key4": "5JfztEkPo4X88k21Nugb1BVwRw8HVFkQjTCLHGkfW2JxSPTCLc3GVzm9ck1HW5LLU9aJjjGNqCxGJNeUAJUokknF",
  "key5": "Ezks4rmzDgcPyP4QAWYeqpT7vknSKSX2MLAJyXCBnfGJS8XHo7Hfs4pZAcxAdiS9SzdXUhMxjA4EyBBaa2HBC8K",
  "key6": "qvgJg7cEABXGTA43oczLj2TEteQY2XX3UdXzttsZiBnDuFgRdepNPCmMdX719PQtqBoxBYRMfk8P8W7AYkDDKib",
  "key7": "44U5LKEKiVnWHVsmSPU2uLAZUwYvnqQ89tKaTwH5fiQ924CQoibudrQtscjWZGDkVFbgTdfGDbBo1GLbypCtNmxz",
  "key8": "39VxfE897VR3AwFmY1UfPB89bcSx8eEoThyyeAm3LLyn9btTJWyeUjZd3hwDpVmueFyGJDDZJToe5tP5SU4zBsj5",
  "key9": "3WHqHX426FaARGorvP8KBwSWAcWd6whLoDYX3XWwSqun7dFdSzs6fHz3taLiDSoRXZToDLpAbCdDdCkMcourfMnU",
  "key10": "5tpxy58wCw77GTb6FzMN1TH4dCDBv1npdZZQESjN76szWmi64euNN6WjQEKJ8LLvVa3jJUqrzJXZdoHWrcnsdUyD",
  "key11": "2PwQX34NmZVUEUcbff7MWLS1mFA72Kyd9YZ8NmqBTdQe2aFArM1UzhQSq9Qen2SHDt4bG5tpfWpEBL5X4etVFprG",
  "key12": "35Smc4z1HJLiCjLKjSwNMjx3TbP3EiEppM2NwJB7D6X3yEFTV8xXTYejbvGMCnCKeRjzcHHcvC3r2evmJQviaeT7",
  "key13": "4nxoFYJAJavABjUjbZKhJeFhQVPuRB1NW74jjsuNrFAXSmm5Lee5seCuFF4N6QSt3WKNWjHUuftpT9PqFAou9ScK",
  "key14": "3Nro9nGqZca74jVFzhqZ6YtP6i89n84zeptwKb7pLzRezpcnXzoyZkXStJjT5KCrcJr6c6cNNcZo7P2qZkqAmmTf",
  "key15": "2DvJcoCknZvvHT4tA16Cg3xsZtNR3pMU8WsgoJaCKwt4iKPFXZq9bmiQ1hPeBwYFfqHZ55uNmboFRVsHsJ1hhCDs",
  "key16": "2SWfDSDZd26tbhxZW16Z85yVdFJRarM1iQ9fMaGSabbZywvWy4P9Gdtp1o6v9WJMSrpTaBFddFR6gr1PqqauvoWX",
  "key17": "3t2tTZsBiKocko2ePoGGNeM8hz3siVJGMSTbkEfUbUYNxZP416eHHgNoXQoSkWe56bX6EiTJ8Bq6n9ZHaQL6WW35",
  "key18": "ZqgJ9VQmAWHsEL2utp9NpBfYLabR7zSnQoHX5NRMBbrac6N3bPCvBq64pbfRkjv2gR4tmu4hJVoyienr3rNgXwK",
  "key19": "3Ykcu1pf2QX7852bRJXdZMg6wCf7m4PEjdbSATq2XDd4AZech81NLhvL85CRn6x2v2pr2qGLEqqLfUnQUmEEaSwL",
  "key20": "4wdofwVQpvAus6yroSAPnAoqyAf7pTyNzSBFw66sgLAAgXgN7CShdGzghomdw7AxLR3ahqhZ7YEhvQ5TdtnmqaLk",
  "key21": "2hbSohwieN98qqBKQ2nH73cw42wymdLPVPXidvVkGad5KAQutStu13sxeQ7fYPxpW2ZTAQTjcxUMUAf2RrkZ6XNh",
  "key22": "2XxACnWNUkPN9Z9ZbRKk2hxfSfjdgj3vZtJsQXSE1DwvdEY6uK3SFGZf5ek81qqHzh8X5TfifdZyr66sQvehW9fi",
  "key23": "4wN57JEyAJFKisNoeME1koSxENBCgvX236Xq5BUfpNDZfNNrhVBxHsHeTsBPRoYxAXRzZaLWbEuiuqAAfKNG6a8y",
  "key24": "65movwxuJKperEumhxrj8AQEmybBsFSW5TqJnnNYDWyDRVPuqSUhGmbGWzYW7eWQkPj5XfcqMyZ8xwKrSe8o6CG8",
  "key25": "KoM6ABK5cnJDSBFRP81uQRj4Ka4X4VFEFPQrswevVht6C64dn8yD6MHhkASpvWKNQQcqt2q95ZsLDjJYHPeDtyr",
  "key26": "iA3EcDJPus8BmE1qEHzCwQMfVU3ZyUbRvdeUDRNiih2qWJV3MB6cS1tUMV92gVucwQWjQvAoVHPWxXxrkJy9DKB",
  "key27": "5KWiMYn8h9yNY9MasCzwqqEWF7ma3yjC2Qub3iCTA9B7USfRSYce5fzyaMYwWXfYHxWb5Qc6ept6aJayw24FceJ5",
  "key28": "kcj5i8gfBZGfkZfow9dddfqWNL6h9wWRLAqBjkTSjubqT2doxP4b6Hgbok6dgpu15QAmVEeewWTPzjBRRQDFrBd",
  "key29": "1m8skjCRSd7hVbYy21KZGbvmeA8MAkbyvUe16Jnrj1xk7P7xaMmxEP1qxz6QreWSxAg5qPnaymutRJVhKm5Ab59",
  "key30": "2ShRdgNqmwTjAQFKyTmgNNoZhqqLXPf5QduXT1oX85V9j8SYjge7ALZvB1sBy8hp8WJt7iGdmHx6HukQykQgYEcV",
  "key31": "4kfS1RQEVqZ1tonBWLwK9tz88B472RAthLyhQKtGRhZpVJGgMQ5RdLbBABNRR2Rw68u2dnJ1hKASzqXHbusb4Tsn",
  "key32": "5tEyJzfrtTvSoJWADDhv2Ez7kTTE9ZrR4ikEyPjRL8L2LoPE1BfPeTJj5caNi2PCzMBXWPCh2J7EPxjgrgazVuiw"
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
