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
    "NAQuEgP5uinhNtx9CAGg1X27B6ooRhRDi7RM11EWYqhmQDFMpZE6JsNgvHHJNsKc8dBMCPbBaDciwzDXd4MaDbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bCyJRHf8HUAMEmGhVfwL8Q28teS13sGFYtSvTgKfkd4rzoZPvB3mZXMeAojts6XTUBqtb83qfcNaGsWSyKnBnfx",
  "key1": "4a3VkoYcsNXHAyV7TkihN3y8sHLmJJJDTYcvzRgcnbvCEXpdcpcAmfyvEjDz9X3xdhnDdAc2QRHVwUfRmwwXMk92",
  "key2": "5MDhYza7tEqTCtCLqUerNGyvLfp3D2tLgLWcGjTdu7JRoy3Kgy1S3VZi75d8CsavXryacGPJ9WJHKTYd25mBNXKn",
  "key3": "2zietLLZwjxiwwVwnBJWjk2i3gMhScofgzfExJTCtA7jHLyKRoTzX1s8QFxyZccM8cSzUcid8pes1jpSZ2wQtLe1",
  "key4": "4H5jxzRgKrCUHJumRpyV9HbFX6RdioAXUYGcBtReb7hDaEM4xvKLGoXT6Ao1NuQapYHk5bPXHqpJqSB1WnC3bPud",
  "key5": "2BhQwQBPqyybZ8j3EbNdrthhSYKyLynq3GLCahA6uPEHX4q65AZ9ToMLRWq4QLfmJ1eHfaa5BqJnrwKcCRNaEpZX",
  "key6": "QEz5oad7T5wBCeQKTN2pitBKymhXSxmYjnvQpUoNyp9oqjD3mGte3j5ZxTrJo8SKigvE9AsofAbv7DcVnEE5Ymt",
  "key7": "4uS3fgijJsa7ebGnWJsFzMKA2vpuZpNdJ2C8DWsHGCDnHDGN3i4oYzdRjrLSg7rqeyvD34aLDABvV9debRoaYQcr",
  "key8": "2qhQijyLYpwb7i1zubBhmTqJKJRdAYbpw4qpuPQka37FBoMrMM4k5yE9kCxQWNBtEb5EvjE54TNc1T5ihijGxHmF",
  "key9": "5MVceAfR7kgYdJJNPyqcTZJnRyztnVis7zbaS6WbE54EWpRXoQHvT1Dop22PhS6ZTS2qzh4cKF5jzHKD3B1CW7bj",
  "key10": "2UnVECkquuVEwhXNVdkNfW82YjKTWtzJNubdZ5vV95jVfUMtAN38NXYCyypFMX2TSuXBSM6dWpJdvNb45JrWEx1g",
  "key11": "2LXqEq7jZoUKFH71g5fVSFSCvB8yKxBXwazDc5iR91hHQQJYEsjujAnvK22u3HAb3GVsEBpYB28m5nntT44imz9j",
  "key12": "2wZxtgFXeFSNDnM3M4mrwXaBxe7bbWZGJyEEgw3L9RC6fk1aF5yPtzd1yC8DWCKUHmLXhcQyimjUk2yDxfUFrky9",
  "key13": "27sv64Vkm59YzpvQ72ZGLdezbcbNSvmHP8xmy16CxFyNXJEiA7bqjU6DvAtqzvcLtydQ7BuEWLxUEtANWX2N5e7Y",
  "key14": "3eHH3mVQ9CnsvqDBeW4jfG9aRsPGouEoiUS7aTenKiSeMZBp58YRE6o1jD4EduTQ6qssFUhTHm1vfBV8kYpQi4of",
  "key15": "5QLGjGsBQoCh9N2gacyRRhioArsJRgDA182Ezrvu8xXD5zKXqKErLg4kCfXzgMg62f8U7F3fd8hr9YThsB8grfKq",
  "key16": "66L7HijEQNKzotxgewjiKcLigEk5FWrSCdPWQ5Kpnt7Q3kTHHi4wfct3G3ndnUgLHpbVwTGxZbUM1ksZ9cfAurGD",
  "key17": "4RyBPZbP8fDwC6R2MktCnxs3BSvET7rPGW85EQTNN9V9adDiMGnwZikYLVCkd5XMjESCka1hkmDHpSRz8wzpbqp6",
  "key18": "4M9cbr8xagMaAG7fm1d44FEcqsKGpGXaq3nMhqb1KRnedkiibqAb45u5RuG6WNYHnujuJDj7pjxpPuEPRSxJaPt9",
  "key19": "4XfuHPn3fWh7wZMQmyGRpFRJnJsws5RzcJyQybY72LByyhH8b3hbFZ1NrwhNzUxJpStAyejiBk8naWtpeeBdy3ic",
  "key20": "5p53TpAbYwCUxs5rL59jaAMWYH94kDDh4goJey7VVxubxfn4ADeaz7mCwD23gsxKVUZvqbX8JZXgZqioxgm563wg",
  "key21": "3DmGyyfy8szSX2MJz2mtvh9rGBD6KfeiASkxeNTmZxq3QUysz344Qie93WYxtv7Ls82VBKbu211xZ37GvdPZRSwR",
  "key22": "5Xsw1iz3RaAbHjtV1y5gTqrC96nFnY8JHjFYvSkbvV4Z45gBUheaKi1tm4GgrRLAX9hPgp3Ms7AgzmY2vpC7xRci",
  "key23": "3LDqpvnLvecZazuV8e6DkKwnv2yS4FZKZ6yK65v3AdF65sYc8MMCEUXfixhavvzm5mW6XkNhsW4TMcjrLpJjh7nM",
  "key24": "2d2ZLhxmHgrLB8w8a9b1gyVryJRtDsTLftbMGQUstKN4ftgt5dgtJYw5GvaRwfTouYBp1YY9YHKGtEz1r3bPHJRD",
  "key25": "L13Vv4QAkA2rijVcak3HEAXwGNZQKpjp5oSZu6YXB9RPfLn3vybxZjQgWfJYrYpT5oTiwxTVzbTKoXdgVTVZDYx",
  "key26": "5fdv6fFHfjzaPbNefHLMAt1u37Pp59n3SEXrPiPEPLyaRzRWk7XgQEqEcUcCZHEhJNVpP76zn8EKR3YMgA1MHEuL",
  "key27": "2SqrL3AQDeBAnhoqBCzEqAsaCPEE5HRzFyxrdNJ7ZiyuzntVGAaRXJngrSD5YCJAgMa4K9aJsdyrAr4V1Xk1DVdw",
  "key28": "QDGEykg7ydENxPXh2D3D4FvrwNCEePdc1wTommQVVsjnLZoQEp5GnHbEPsUG6cmpne3KAiaEHtvtfeDJj2Ef1yL",
  "key29": "ehaHKXtjxXr8yK2NuKuLLWdC2RP1UepGd8owLGsKTpuq1eJ3jbvrwvisrTTjpqSmR3PtASZyTWmewKXVSV4bu8m",
  "key30": "3Eo6bau9Q4ixHmiMwRGU2H7Ty3eN4ef1zZMqUiT2MWpHj17uvxf1z4NemMwnPdEGevgBNSqhQaKoJqahwwYcAHhD",
  "key31": "4B7ztnVGaAkSrgDijfmE3g4TE4bLRDaUfNoT1yzdcmD8ikmerXtwroqLzSEHUCVJemvQxk3w3wkEVizayWFJC6kN",
  "key32": "2X453zGPhaxw8964TAD4MBgQ32y94YM8RM75ibF234KTuQdCibPJhKYFdb1NaYYhdYcr18C7afbEVxDxmu2hQC33",
  "key33": "5uoioxb5CqpMo2XVKsVSdps9UkktVitLfDT4ABrC53SHWFKWTiwwvqQUbte3Ba4EDKPm8A8ZwtkJidzdeD1n9hLX",
  "key34": "4ef5ssQnt5Vj5dQZzRBcc7TFswV2D3DvUP4JZEZo7m8niPph8hJmaAEWrLi9QUeXiJigatqoEgdjxjmsB66K9rPy",
  "key35": "29x53yYjfohK3MPZa7W62Awq7kzVb2AtNY3YVQnNkMkz3tmpK9y9V1jQYM5BKcM4PdcN65FewWF2ziS9wVQ9tryU",
  "key36": "4WhggLGmp9gHLmh7rKZwhH6Q1k98EPTxeWJYq5unHH9GYbovZzPCe4oQnRs8jBXxYDU6kc4F4yk5QJtajdBia51v",
  "key37": "5eYdTpyQQXCTEMurnfmA98M3FswnM8GNAxEhEwkNwaETLPV1jujH2q8nvpLPEFEm4XwW2ARvC1kQGVcoDDJmEvVa",
  "key38": "5jysKyD5TZTMYZdhQrqPhvi6rd3EaBrNjYSk83e99Pdczj7Z7MJ8YAJiiDGbM2oBKydHZRrsemfPqDqRmqTqVFNZ"
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
