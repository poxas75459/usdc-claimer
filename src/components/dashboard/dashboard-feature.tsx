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
    "5PXqxCQAvQ3uFA47VyrX4SJXiouiFCdW4b855moULqyNj4nvHayJ4J5Z61anRjXV31Am2MjBJZodzTZpxTgLjrzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SPJGksV9zN4CnWjB76rrNAGopy47SyRyJzdH5nxJr2MmdzBSwrwNjpij2SNuC51hoCv6pkNyoLEP7hmrtRDjE1a",
  "key1": "4ornKybP1v41Ts8RthyRa2zJ9ZsGdUYcFaRUBLoiHEW8v7777iN1JpNiMMf6Y2vHS6K9DgLh3jpXesFp2bzDz5Dx",
  "key2": "4NKe2wMDxVczSpr27c6LaF1GMQAqR5yUc8vBb8bc7SyyLb66K1ab1MbhC5aLgaPQ3hH65Re6P75PneXR5wmX5FSZ",
  "key3": "3vZJ2EDHR7YRGmxZcZTQL9nrZR2vgu3HtmJDLav5VB1FjFGXN61LUbqj9L3ENikxNaYcoXRWG4ATDNLRnBvHgetY",
  "key4": "qMYTYvRgRsptWFxQL6i1hcqKWTWqNtJCcNgtQ7aVTYFr4mKyWroa7BWYrkBCL653c7iruf47m8whLy4kLbn9xVU",
  "key5": "ZDpzYPiAU1AHMLVHxqgaCEcSMeKjxLd2ax4NeNkQYw8ogJugWMvJocvvErwJYJhxQfg7mFCv4jB7bsNWThRMgV8",
  "key6": "3UWBMXnzZX6W8wRbZEv5rxHwhz1ejxt6J8S7Us7vj1HRKuSfgYJnBhqQnjp51wa4DwaHZehir7aqY36p9Y1kPdcd",
  "key7": "51j5qQvXE1Tn8C163nVFyb2Tp2tiEVSkiwWaJGjtwazLGsRzLvZjdSyk3KzaYwDgnwGnhc3WYCZeKATtGA93ueX4",
  "key8": "65EgJ6gBqBZLMEqTCPe7pNiEJyAgDsUUA5o18fvtaQyRCY3UHm9RqWWuAygWDgGskporAJzjVuvCqUKWYNwLNduu",
  "key9": "2zKbY9RRiHz491buCb9P3gDmSKDjpdMwUWSksRgX1Qj2S2CBEYT2qr2q4H1CoagWnXPvFn5cRMXrLiw4JZTUT9yj",
  "key10": "2iDeqcXnfxPwrhNrLJkd3MYyqmSD3DyGVBiBJJbVvVWaNdB7KCUZsbSKPTi7r2Ak25ViMxNQ7LVYfU66KsbcoPbD",
  "key11": "1aKdfm76zuqwR9ax93ia3r9RSmBNrHVLqzu4YrW31VsmNtHiMa8qV18LM4A142sBLeMExrkbgeipjvxKF52RgeE",
  "key12": "4j83bNskvmfqqEZEGPxQBAWZAk9xZF2x898G6aKMZ6EaAXAEinEo47ea7HFCypWh3KPDdExnZb2JkBbr9hCcCwLg",
  "key13": "2XAogF354w2XFBaNbB98yN3qKtjCosr65sobzzW8vjwdyUdkC3WLHFi6GyoAP1QiXyrXMPgxysT5Y94cUrDxCwWn",
  "key14": "2R5abzLGQUzT9HKn3paxZLTehuSr5hNN16GEEvU1LWyLx1oE8Bvbf9UZeNpy8pmL2m7VXFTnFBsmDfLRnAWe9Jf",
  "key15": "5UqdLWGgdeKhQa9PHNKGUsWWAxs64QJ13KYmQEa7EgN94npsqZtHCdpU8x8G1Snkt6JpCx6YQjRzgpFgdUhecHcV",
  "key16": "3CZQ6wpty119FFRxKNi3eL9pW2qiCmLPQsdkgxvhodbUr8sNDN3DnjNteWeuBbeRba5cJsTcLPSBLHvcPmGLSFYd",
  "key17": "5eGL2m64iURbfTpBMVxnCVLxdVZAjd2MeYmjuPx6EY68ae3gJzMMMJ5K5UpL7px8Eo2k6CGsu2Yw2V1Z4SyhXrdU",
  "key18": "3o6AU8eA13As5qbEmCjhQTdL8tTQL3AKcBDNtGaBqsYYqWkSFRGCLzzX4i3wgjuT2pe4EbenS8S8WyVFmoTPmLME",
  "key19": "NcUwpDUr5471CVaUDPVKYyq6V2oeE3Gp37UbvnCvv7dWsgCBwSFAyVyW1VgQx89x4zYcDW791mTmnaCroBberoa",
  "key20": "5bmWL3puQWw4GiCPF76MtxBKxx4aeJRkuB99BPbiboy8351rbggWU77SYr92w6by2Sbu91jWQNxWNcSyxMVA2y6D",
  "key21": "4XNecW9eSe25kzjpbGWr9tPS8qJwbNESj77RDDQNfhZ38zpCENHhA8RKyw9QKmkgiBNGbwpLL3gfrC84nhKqgych",
  "key22": "3nPL56jWFDFTH7Nhwc6zkcbFaCkfhh3eWGpbMvCsjch1wBmSnjbqnHeiWVGXwZ4yXr8j7HGWa3LRheATcRSX7yy",
  "key23": "4gLPZRBSdUvoKpT5qJCv6aw6CQiShNji2nMjVsbKMj2YSy6ijmjvhgLMAFBQiYm78jnESXySqERabGrQk2HrLYKX",
  "key24": "3hfiv7BCNqRD54NjqkzLAawgsXZuDtrTrpXPVgxeHHdJoGqcgL2p1gMNAzre1jHNWGjygcotNB8y8xbK3prn6Xvd",
  "key25": "5pqfV8Gy31TTfjWQRSiiKQeKuSCnLwh2skeDhapdqctYStZ4b6GhGKsUqDBtaS4FX3mNE5SmbJQUjfpJS47HhP6B",
  "key26": "354J7aaNumuKK1cA9NApVDhhpFqz3kbk6UYh15W2SSKtxf68DkZe5qn8BWJyK9DhPdTYVFTjmDGRxmhotWzBNbYZ",
  "key27": "4oAz6ZiMY9ARcb3CqpbQPHVrXQUfAtpGA7tcJ571tPGj21LmDFd3FbsaV5ojQTTx7ufDj2pVP7vFcYeBcrDQmoWF",
  "key28": "2KM124FhxK8omVWsKPyLJrT92GP11RaQUcYG8Ps4wStWda69cN2xXhJrVKMNfXQ7qXJWJB4pfkuZynKZtgHd3zQn",
  "key29": "4Win2UnZA1d4YAQ8Qr4TTp9kabQJHaeVi4S4TwwS1HRPdMz7ANmVo82RNA18RSNT9DQM46xWVEFysYhEAh6YUsc3",
  "key30": "3kL3HCBEvKokC2ydmXVjVViLvczFFJ2xSd5etcDCCWNXgx7yZxB31tzxcJDzgKjM4BZCSyjwPF5dF7AxwYv25k5H",
  "key31": "7EXGtDfgfESv87yf4xB6SdHMRXyNo9PFJ6iBvo4ATLUCnUN6eL4gKAteGindqb8kMHQzKUXqJ9K7AGi5SAk2S2k",
  "key32": "362MBa6BVpFyn63QLexTeLa2vYurxawVqFH1yLZvKnSRv4y5CwjmnBwpyC4zonrhTnVbRZ1uhLgsMAG8nwsjSANK",
  "key33": "kvZAbNaAq6sM6BcxH4FdcEZ3uEYPszzRFy7BW1NsqLzWPxK3pSNyprTWqyrCzJesoenaYA5T6StJWPYZ3erxGfg",
  "key34": "32PMr2U1uHsU9yVrVLDS9xUy3Y61tPbeJpTBFXJ2jea6fxPmqgSbZwXoA5FYbziEksvJqG9u9kcRuYtrYRzjUoVj"
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
