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
    "2oPP2B68fXW9A7xy6vv3fUC5eK8D6e2itqRXVXxuZc8kqvJeh6rsxwXjx4qFaVMiVNATksXgjomNRkbXJ3tApE93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7DtkdTzG4NTYgxdmpuFjk7t24Df8oFj6DrF4V3bsdJ8GVxiRyrs5rBxwvj6YxuagvNvXTdMeKtswgsaVB3Lykji",
  "key1": "bj8taiV8fVKt4KewPPmgdy7scZmRdTqBQXzjTxFSj3ujRLBkY8xiq63X6yr2GEMNxTqttwUquZbeoBES7idwnpq",
  "key2": "5vQyV7fSHpwa1EHegnqq4hmtfZbPx7E4YM9Rx5w85zKNqdrkgfXu3n6aKWqSGb8BoJ3jffEVHSGSeoXq5cBh8uWn",
  "key3": "HXyKxoYAf2aSqLBg6F1NaojRztGkvD5hNi2MLi4Rf8uZZiGwcUb3xPQ7wAHgkf2ApFkPsZbzUUczutqcdfhhp4x",
  "key4": "2UT1JCrHEbZZewYDdi2cZjMtd2Ht17ZZGrX4rwztU9zkZHzMTcqjrEstuBBjByLJ4N3Wq7gBrBrdUqXEWkW2Fccu",
  "key5": "4YHKFBa2wBo8ySLju1XV4HnM9j2kp9guUoqvUHS8ZJ7MZYaeENEjc8s3hUhM5P4htxq1oc9w3h24GjAdFK5z1b2d",
  "key6": "27EGvMBN8jfRfEywoDWogXzGyzEC4R8aXJttSTg4VMeJkqixAh3SZwwZXon3epLVrpXfpEpBtG1t1EEUkZ9c4YAC",
  "key7": "CvjTY7T8qZ7emxy3RhcZtC3MRaYjTffxM98b8fetT3DqSgaAH9hm9skhUTfuPbBMxNUzMfG5v5cXaoNop4247nA",
  "key8": "ybqKH1jVr6WQ3fAPEcYzFXR617BZ8fZEge31ru93B9Y6fQ2V7TCzmhrggb9uCncXmjcrJvbNu6uPSSb472sHcGC",
  "key9": "38vJYFkrkuU77VUPETPP2Aajwkqmb3zJCEsvgmucpUihdNfhkj59rSsZQy5ptdFFBZJFtjSDHTb6PRx9ng4rCqJk",
  "key10": "2JUtsxYCJfaFJYkZ4Ytae4QQCtDbrcc1HJ393Qu9fYJf6bebQdSoYhw5ZVZmiSz7RTJkRAm3cfECuv3QTPYunbga",
  "key11": "5V5mbvHGry5Y72DNrSia4kcYsEeTt9bYfzbf3ksUvxUfsAAzSSb7ag3Efs8UXPQ92RzMXT3EKEXode5Bt8af2fPt",
  "key12": "4BkdJQdJSy7rx7g9MjQi5WmTJr4jhSfkDHNiZGMLMa1MvDUgYGoSYajvMsUwxhunFarhAnmDgXkjuuQ8jgxjLHDp",
  "key13": "6oYiruWgBy5VmMkAH4EzwQwj5fJQwjQfN5tgLfpDXdHPpHBQMt7h2jz1HY8t9zSo1BFHe8aRGgcLVGr1BWvekPY",
  "key14": "5ZuKodjiPNj6DjoE6qFtxMmhmYEj9DkX1iqVzDs9GkHuAP1WTz9kWLzmAaeYrNB3WUXpfbX8BinKMVCgqQfnWp9j",
  "key15": "3rSY4nFFNgVwvHsf4rhnfh3BqpBhkp3HcTLh47hP3SCBSVynyiA6u1FLdSGtZTm1FLjJUdhzmQWw6umqqo6Agyij",
  "key16": "3k2ijLcLLeerro16x8PjAuQAKoJpZX1MqS92BZwhVbutzcL6XnrAF72H4an4T14BTj8PeEdnUAe5eyCYdPweRYLs",
  "key17": "3SbCzQ4xTHRmWfXJWuRLgUr1xc5BsX2FnYqbefX3aN43ZbmVHpVEwTncWvNnSoZzuCpSHVRVb3z9xmg48XqFM5Ex",
  "key18": "ketbERtxAPeS1YSvsCjeWLbb7WwYyoHoodT37wbmpdjexUBjbKUgPzTom7gQ4RAdoYMHZfFTb6oxgbg78p9JCgR",
  "key19": "Nq9QdjQJ2GbMniosEHmwDtveZjFKH1kCCP2MH4DifJsyRudU6WmwnaT5m2JU4DkJ6ov9DCigeGmjSBDuutsd66M",
  "key20": "3jmdjowwuzoqmZANtyUxTJagf5Hj2sjkU6wCYXB5rwHyNvi2gnqUJJkgGppmzGAUJbBarA4fFoqURcWzfU5e3XSw",
  "key21": "4NYCQjXvXNyECNiyNzDrtFQ59K9jY7J65oV6t4p8S8DMvJgWJVVcMbs6ow5JQYZXqhD3tVNNpL2nVsFtLmfF6jYV",
  "key22": "2Sbw44sG5weZH5JpdnuorzJ5wJxLBru7yRsxn4oFzVYsiSoSTyogS8GxpMxLbQUkhDzwoTeAw5xx4u2o1msWX46V",
  "key23": "58cZykE5xJYUiMsRpDLyTymENduZS4MSEK5nPn786ELa4kZzYBkgz7jFVbH2joMUU7ugFC4GgCz6MavfWHaRGnqe",
  "key24": "5BQrMVRqXr9YMkXER9z8V253XqQUCAyhzfaQEDwTYr1tifPcvmBy37oiryEKe9Z3yhe3ttB4gjprvqXUoodQbCyA",
  "key25": "HBFmv4X5YtGgKTFx5PWYyuPm1v2EsmdvchN9eJsnWamh6QPwvUV5sKR7YP6uVX5WBwuWm4JhXYscd7Vw7uZ6uDV",
  "key26": "49imJ1jaDzHaZv99j4SX4yuQHiegRMCjHfP1eKLgh6ZmtFDU3BPi33XBVgzTrZAr3hfe89DpkmE2nnd82BujYHzK",
  "key27": "47YXoFU4bNuwvZeV1aC2LGJG9xAtMF4MGJ7FXFU3Pufn7YxaTFKt8zxZHz4JcrZn9e9z4ty1qySGYJHNpKpZmwDb",
  "key28": "37dnPhKJavrHEQenkVNaLtzvms6AjbTUVwUdNcCwqbUTsymg9q7RSQVFcsyCyZxNGizNcnmo3CrqKkBNaR4DggK3",
  "key29": "ikzMuQDcdbyrPSobp3f87ZXddjAQ6t5m3AwD2tLXGeVxHuGo1RV1bSsPSNbGxG73FSar9FzH8Any29NdJZ8T6Bb",
  "key30": "2FdrqsBuQtS3xJ2ZbckQ4frRUYVrwMDjfSb9QnSWje5yE7YBqQ5FeyyBpQYTGuHiiKeiNwLBCUnsTkeAbW9UD1LW",
  "key31": "4mz5YkLkRPo7SFYWVyc5g3gUMQfw93NFCDwWtJdeQNuggtNmrL9NdRcFVucfAyLTVHy6yeYjTX5obszw1GkiSC38",
  "key32": "zBAVP8bUTGJ5HAJYpPapd9dtcHRSZQeusD6QLEWQB3SNzBirrhpRkt6E4eydsS5dpBZs1vbxdohwiLJ8rUC9UGg",
  "key33": "4n6aNfM1Lqj8xEFbrUAF1vtXsSYWJFwjgiwdMV9gLpzfDsjzr3NVWAp7FM2aYdWCMBJaJjAhXqJLG69GGXuB7Nab",
  "key34": "4THHr6qUmpASKkMaFmZWQ4YnRGLDLCWNt2jAHSWPk1bkC1Syir5fCAQnwVYzhaQJwSsbjqX9CdrdAzifzAyWfU1c",
  "key35": "2JDUmDgEdnofaLPn4ipmKz3f2m7xUVSacrN5jERnJ6pjS7Uv1kqKt6WFXXEEqP5sMcpLrAcZVj5sk8Pc3s8FCRcr",
  "key36": "3u9hKy3Yn4wcVUZgY12GZZYUAqvXN8phFX4jB2XhFWZW2a5hmtKVcwuviyHSPs2Mw2rkFh5uPkTcsgWtobLs7pPS"
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
