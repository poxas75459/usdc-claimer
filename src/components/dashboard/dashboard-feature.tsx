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
    "28xrhizrgthtTzqykkyuvEJ7oSoRmC9QBRQ8xxPe6wdaTNtoUZE8peNeuhmseJrgpFEj2FHxZ9Xo6GaF37gcTnQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LgXR7FzqSDC761Xy9TtwDsuAh74zSFWu17dajhTF1JUvTQoiGzPW3NfBfTo1rMny5ibiTUbqUW6ef7YKGVhnMq1",
  "key1": "euNejYzmvTQbbXUJuHBF7AdQuLYiURnc9xuq9R4qfbGzcWUdsX4umScSgT22HfoPBwpSoPNrFU5Ypfe8YVPmu1Z",
  "key2": "5iRwfQKHHKfSju95egiy2bsAMbty58dApgvbofwHZas2TNiQ8Mw4uKEaSzZNNL4XCmEVMgweNfox4ZWrsW8cSER2",
  "key3": "4sKyRmjXEt58btfVkSsoKx895EpD7NdbR4KpdQP2sYbkgBNvDHNUbgN4u96kRGkLQUyZZs5zyU2NiwEmML51s34s",
  "key4": "39SyxWhoiBkurHEJ1Hcox1CajWGTGJ85PJkuKgf3LcsFTAMf29Lrgv6CMt9Z3KGJ1sm5rSD2kkbBfiBbEMKnmN5A",
  "key5": "4c2UBKqqXWMBv96tkAVwoYGrQ3KA6j9YDEtm6UxshY4STHryjEN9eoALoDnAvyBbcR1qivjbWuQS1c9L8J1oFCXq",
  "key6": "5XzEAwpNTwDBvLrzGsmXtxhm482SNSQWcWYbusmTqd7YdhSmyynd3eWbArxuvoa1fxpRfVLXqpTJwdP2KanYu9KU",
  "key7": "466W633RPmd2cXmXHrqLi5pb2reJ9tBdMTk74vYtQvGwvTC4sSV8ASa2D4EKCk3U9fXbqEZexRFfV66VYqQLpDD3",
  "key8": "5ucrJuU2tZ4EEJJimMLAzLPS9N5hzTseMYca8nAfTLkYgyN2m623eiQucEKdwr5keaCr89sQPS5NLLj1pJszkZJV",
  "key9": "2AHLKigMLMJHtXMwWhPw9H5fzU52yRUt9uhEd1jd52VZizzi4ja4cNrSrDYi6wphsLqFC5jcQ3SyaZmuDo4TXs6j",
  "key10": "1vzTCK1x4TcKxzjj9Rhq5bYt5CKmMiBaYd2fofjfxhZAbHeCavQiPjNuT8iyo1JFLwMmDjNgVUJ6LjhYPqM3CUx",
  "key11": "4f5o8Qnus61mUULo3RnTJKvC5n5N8nHCDZzostbdwAJ677KmaUAWJ59a3g8JMuaJAWFmqeP2G9LGCW2wdD2ioBVJ",
  "key12": "2NsumzMPcN2jGgj1HoBKLoh1oMVreXoyFNj5SdWhgMCujHQDgSTQpncEZFSNXkTbt5dHSifXDxg5DCfU8v1oijPM",
  "key13": "X41fCuByxF1ieQZMHkmiEVXoo7qGhTBkQDrbMLMfWqFNdy3it54PRv8MYXntvrdSrsYxyVyAkJCtpTzqrrJdnaU",
  "key14": "4eNUbasotu6DZcZozbzDjpaf7ET7fw6jX9aAcVXwo4N1hFLyuQheZMPrhqd9dgN34F3NX9uhZhb19vPKMTaNkRBA",
  "key15": "4fCxbniwLVz7VpwuxFvye3FQT8QLHJ1fYdB15UePgaxZ4WRcE1i1ZnXPSWYfHGowaz971T7U2z1RSEe4DG18MUcW",
  "key16": "5CWubJKEwzbkJEEzBGmwpsGsMNnmrGoZsSqWQjXVyaXBqZ9W7poKzWYoQMZShbN9Jiae8Bg3579ptU26RiY4JXfB",
  "key17": "5b5GKg9sB8M7KBvyxBSHXVFycomd3xHAqzVAcKKY31j4qbvKuNGJRS8LAifJAmg4n9YkBNUz9ueJQ9KVXExXCBDY",
  "key18": "dLaYiCFTtdf9RBZv4QvLh7rxTwtW7h4imb8zcvfUiKNgs5v7md24joUTuMGciG8DP8zEogqGHPoNjvHaQrz6uj5",
  "key19": "31cZ7RLQDAmDNGrxg9Q7d4mD2wQ7htJVL8LqqBYxZbdFtZsYu7HUoaqz1FBoQCkpPpQQFe6WSYZKD6qRVp3rveA7",
  "key20": "2Ehx6wHWoaJTyZmHhwpVvhW83pZdHCXYdXV5kRbDLDizWDHmvbc4aKdsHBdVyXituh77dB7s6xxZGT6RH1pLC9M6",
  "key21": "4yzp2dh8J58qxUQPE2ntgZ813iiHm5oHKzdUQnTwehx2UnRx4EwjZEfMfoZ7tYXb5KGfo5EDJAjUDYBsZqbYDjJb",
  "key22": "3yskddDCGS2Dfh3BdHRFtmFcLQJiGYoStQeMKnsX7tW7aLbGVmst2pboeXPqd24ENkFxVuw71WiS4zWJ2QcuUZva",
  "key23": "P2ptQEStvndYqFMiajVcC3ea7XSFsVW8a5rwFLWWDgvPJA9iyrVGutEWeUaBkppwErQtTst9YVG5isKKc3FgUPD",
  "key24": "5NYmPNLqSZ29j2XcYRE7gnYDFJviZUgHfHoPXctaC13Wmt2MCSzzdTQvgAXVYUuVsejcV6uRxFvrtkoN56Rra5u3",
  "key25": "5P1mAC85mZJ9XfUcGyz6Nb8bWTSTQWXPe1xxVNzZTrfXDfx6qKToKKSzVCGmHEEgJMYeSKY7iE7qYkmp7tTPyTmz",
  "key26": "AY7zzehN9DD6nrjFy6hZe5iVoiujLZEyPKuc6XUCEqnVdnPd8j48Hs7JpwpPjAZYUzTvwoSu2jznG9HDcaYiw8n",
  "key27": "4yFSYBFhSpTdyYoLrQZrMWGBbMB4PrKq72HRkxdM8Wz4exX74dbRZEc5tpp2SgFwDoVbLin66Sqz1LTFN2qqHmad",
  "key28": "39TQa5pibFWzHohSmuwsFyy2PSfJmUc6otpzAg7RddxvHFckL38wyDqpmXyCob7tyVyhJsgbbK75SciwXeKtPUQF",
  "key29": "2eJtwA29pJUsTh7RUtCE6do8CaGeza4fhYP2wuxrdTf7BJuj2poUSGLQXkhMKCXjt7Z28JLpR8oNMUh5E54nyNEB",
  "key30": "36B3YoFbL5zwJxMiZTTVcSW7mHSSbnnpvXN6zHjZo3hWqVhyJY4zGEMhHytspZDZ71A1BYBbpD4sYiHXMeZZs4qo",
  "key31": "2ZkwxhXPyGcciofYdsfm6t5bHexvRFsfvaMq8Kf6rBF9A62Js6mvUffU3AYgtS5SvjYXX6BtxVf3QKjPeKTQ37fs",
  "key32": "5tk8TMNqRfbaHnWyVXCnSD98f8jQk1QTB4PRew6xnNJa3png5BurrpaWCrF5db7ywNBNvPKgarpWeN5hEDXoR6DN",
  "key33": "2vMUMtBpyHT9mgPjNfgNB4W3LmqMEmqsE2DYUabTmh6CiSdupoYGfD7nt9DyLrnUHQUNK3C1yATqq3mhFyRZddZB",
  "key34": "4WeuAS3Jpc8n6heTtLEA2dogPwrmURHvnrHMFTt3L74BgpQmQSvw8Cph6g2Ec8jw2kRZnkMopWqhZUkffgnaZbDc"
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
