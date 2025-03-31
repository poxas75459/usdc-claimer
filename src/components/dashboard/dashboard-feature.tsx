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
    "29kAEjBY6CyxhdLKjkQpm3HnNZpS2jnFLdiYa5qP3La5WqaJa2mFvubCKke2BB8XhSeYd1Fe6yVTyK7hLY1qYan1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TDUZaUddTBfJxB5yzrXu9njP5jynL2HbUYA3fWNLNJMpE91BhKdfUPB5BCFs9cQtkog3YGtPMgjJBsba7jZ3QCY",
  "key1": "7sZkzDtkBAshFLvAd5AKZVeYKSfayvfzJNLvvviw36FgMs5i7Vg5pH5dp7yX3BmqoKuYXxTt9hzkbeLs2DYrvMD",
  "key2": "5874efTiUt9BWaArtr7nEmSsBheTQEggiMDcFRqvMjQsKF2ZttuNuHdswoftqj6bfiR6REe8EUU1SedKEwUC6NGx",
  "key3": "4yrQzybVDbDnwKNm7WdgVEanRPdQ4ZacE3PsEf5dQGLjfvmropEKdkouCeL8uHosGZtSKR4N1EJyG3sdoox8u8G8",
  "key4": "2AavvndKs82gPddwpVSvnsB7AijvQ6drj7pKowkTwvk5iSpcjbXiiy9vXGh2kJAfyDzMEYTx2dQvr9PTVgzPjS33",
  "key5": "5snKXJrUMGWBxTwyjszN3M8RpdQ3w2rWBTKVutoBPgqYa54oGd2S8biHXmtwca4DsoUPWhjNuZuLi5C4gZob6fLv",
  "key6": "3bf75b3ni47z8dEPJ9PEzyEP57FZRSdU5TWPwQwf7cc3nyjBp8NsPn6w6VBxPhqVNxTTwoApm7CY7dF2dHkymxfx",
  "key7": "5zxz2ExekBb7fJygiZjnunGyynCcaNbEcfFYM25weDm21v2APGcb2m6AChAf7eJgS33j9idBGeUx2zTLPHbp224q",
  "key8": "3fTJjhLz3RKqquEK9oTNjLyDLMhDjkWFe1h4tUyEDy5ZWVkZiEWhmQUA4t4jhqaHoHdVuGTs6MoZ3BYy4wwsqmeg",
  "key9": "tjrkNeBssAPFqoNqivS3MG6BvZ8gyNdLWpi4M3wVtiLoE47wgUEFnYorLCsTj37Tk7KAgoXw7TJg8EyqQumEt9E",
  "key10": "y9subjgfUqUyjzuUK2JqHdbSCKqLw5XjRrtUSE7Z9PQH81X6uJqqKPrmQEKHrur3osUfAb3bUh5UNu3sfTkZcag",
  "key11": "c3eqhUC3r5bXPjSDVKBZhgg4iomeqEdZLpeivZP2VPwhKpaAut1Zw1p92GqYQfC27nP8JLa6xqkFbk6fdBz3ud1",
  "key12": "5Et1dC4d7pE5HEDdPd4FvoDg8xkHSWDwFvxfwX164Ywg7pssyDSWpFHfeZRhi5euHDpBkk4k6wMj4DmRk2zMSbvo",
  "key13": "5oM8UnphVA3Vq5257meL5cvAa2VGrQenJML7CrNU1Rip9JLo5ZJRcoYg3TEGxbpJR2rBgfBS4TzfproNjdfA5T1L",
  "key14": "35q5XjUksfvzNBKhgDV8EttSdY9uWvDDmzzUUYA3uh1WuiSJzXB2n29wExrVhk5iguDBjR621PA9x7KcrrqsycKo",
  "key15": "4DkwjcvHtWBM8F55jFm6vKrYz7Tcs8gbk7gt5yXBX7U1d4s4P5ryzjfNo7oYQXdKTWwzpzPJQ5xoFMg5mhhccw47",
  "key16": "67Ajp3sau7cktAPdAA1GfZziGs8tH9dATYkDCCqhZhHFt89nhfs3vu134CdgG53UvCcWvAiKnWLpFAn4ugiga12F",
  "key17": "63eFdVf1prPHb7jgZCoymwbkDcnyrCohBPvPhwrRGZ7sGRtscQiBByCe3bNyDikj1vnoPTDBj2G6VwTfr8Cg3PVR",
  "key18": "yZoZcikHFmuxLzpp3EdYq5Pik6NnHspDiUXhz6RrdGFQG8smdaZ8koZQCCwqP8YMUaQz4MbxCNggn65QPFzn2Xb",
  "key19": "5z6w9PgWaozwm3pL33A6UypK5kNDWJc7UMRLy2pV58ZwwZcK8yxvZHrRgCLnmH6TUyuepCGEFudDB3yDMxoWVa1C",
  "key20": "3qoTM8ecwQapuWi2kKB2CTQQSNbdi9bvzSNiVTdhTQfzr5eRbRCTLn4vZnToYCKFHSL6n1P8Wcvqft4KDTpqFM99",
  "key21": "58gySjpVstXCdMMqr18rfvQ996YpDb1X66PkGixL9xjuTzXwnFuGQbS9JvV4m7Pfwrxs16gEDstGez2KzxTe4WA9",
  "key22": "qYt8S2Gn2d1b5pRsH7uwmS8ufFYY7NmLBQKqdiTSVwa1Nn3ZLHjYmjKvr1anqwwAJwfZDFVr9rkhF8vEUS4z5FA",
  "key23": "BJnnBcyb2UA98AwjHHsQfWiCME2YUfeX3UpoYivuB1B7FRcY4iMJj9Ws8vAcjN713Fcede8XLHhJD23NLy586Lf",
  "key24": "5o6pbxdupCXBp6jm6hqQH4n618KwmFCnJZNEsBYxV21zdqSTHv43GZoQhDDT73FWJRTreKKvnvgeVTs6Vgzg989Z",
  "key25": "5MytaiJ8ASuBK9HKtUujHF2TgCGqjrzQpLUnPsvMrTA2ws1JmZgjfyrBKGWMwbYUjtgYBbPVj7VESseHZQHyxCN4",
  "key26": "4CwEhu9RpCUo86hgnJTTbnEGf7Sk6tha3bQBj284BvXGkAYHcL9LQaNjWoJD1itDgiGjRPvJJ8qoqHq9xRsoWk3N",
  "key27": "2BFBVUQFaJ4Byzf1Z1n9PsajmCyaj59fezRZ2ocQGdy7VqHbxvPQacjP4E49DKUFMnQjgGwj7YQRoj8J2vTDvyu1",
  "key28": "33RwCMbhAWndbVWrdyLodNeSJyALtZTyEEZCDZbi5D5V8BXAUW7cpP71sBhwXK5bo5yJDjkMAuJiB6xFSacDcUBW",
  "key29": "4tnRNhnKra9y7Snt2porMtSoUSHAYaaqtFi5qcboQKx9FCYxta4p1NuEffgzywQFMjQhLrJ3CEvxmuB4ThCVmUip",
  "key30": "2chnUuSqeDxknREC3wTpCPrgymKGohN4m4TgNEpT6o6vwt7pBxVGbGkad4tDVNYjhNaf9nYexx48a8hQSPHzFGuG",
  "key31": "3ArXLNU2i1wex7AZLVL2vt4N3Rjgu6xbZmxRSBuzCmX3yJDLNcUi5wBLV35JHCS3jBaHGn3Ebb5CnX6nD6j4Wrtn",
  "key32": "2thKH1JhPsQ8Tf8TUWX67Dec4XAo2Jy8qSYWsnQTAQdRfE59iC2dPHpXTKMo4pcqajqUWuS9piERnc86P66hvJim",
  "key33": "4ZMEf7T7jFmGSF5RZF4fPE8jRN4ii6h4gWFWBcfKz7nZNauQrroMXf8xg6noRKkpjYvZpzvb74uQy5TrLgKZoDJy",
  "key34": "ppA4nfUHWPckR8kokjQ17hMYk7dtoM2q6UyyTe7RL18qf912Cz1DdAStQ9BozYggHpstY9aLqG6JA9RU3ghDMTP",
  "key35": "3hzHDUKKe4x2zhVakSdYeULFrVuyADwQy5i2DZeFyAmwQiv6pEzZs1e4Ri1Bq5mQQSayu81v62LEWwKKFUv7TBmq",
  "key36": "4dymYc3ApD9YqqahGen8X6mpJngxVPX6qUyspGjvwBkq8HUtdVByY1knaSYosuy3p8cvNi9Mu8CAKCvxah7Wr4n3",
  "key37": "5VGvQ1hXu9MeGG2hf3YLUYiWzfBi46qR4coBPwhW3J5BsHxV2ZMrprTrXzqo61KH5rdhZcyx7PQHFQoaas9GPeES",
  "key38": "2v3a8gjvtRnE4HatZPGnPb8FQ78uMzj9cmY5bAWfyRW27RM9idUgJ3y3n2fNaxSvZRFjLmWy4MWKk1NSYELkqmmF",
  "key39": "H7B89H3B3ytShVVwX8d1nKQgwE1byjgGiQWB8ADMnYYCJad8bcrUyYNZ73amAkqY5afLGv21NbvsKXxjPLP9Ymh",
  "key40": "h6PgPmKVdw382rQM5gbA92uTG6WSm9Nwufoa7bDa7SShjGj4qwuS8B8Rv5theNfSTWjPiwSEvu53SLXamRofHTF",
  "key41": "2gK7CSwRYKSo2hLnxkSK2ZxfX4ThFgZwWrxAKPW3zxPfMcx5BMzCWkpQxixNbPz5fXKkVaXVub2JnFVvYjasszmU",
  "key42": "5Ww4r2bxv3terkQxAk476wduibwbBMaTyU9B8NAM3wBfGDYGKkAxB7DmV6THpWDCvHyKTtzUBjukq4ZC9VDCAUzS",
  "key43": "yHkmzy3N8Dv6aUM2Pgnuhq372eMrBARrNoNJuSMmFSnApHdYyqspzroHfCATW8HWw2qucuk47Mdwvc7dBk21EBP",
  "key44": "5vCAtVyoioEg2YxFGYyksHGBXYqa2CkMZuX2yVdUWT6MA5VhtEEi2Cg8C3TXSjiSzHUEq8Z4mcBwjrnv7x783kd6",
  "key45": "1r68S4F5XspszPCz4s287G4Z9EX2vqz9uTqk4GK8REY5x2Y8QQKVqD1HUSaSe3NkMqWY6tnD9zXyH6nGVg5JRqf",
  "key46": "56cqvNBYcok9rtr3x3menLYsN6a3fAmT5RV3VDu8cVmH3zr9dccUKidHngU7bcnD26PPc6EaBXWaEYkuCBHRWnes"
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
