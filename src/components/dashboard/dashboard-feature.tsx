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
    "hzUJNJQt6nCZWaqo9ovv27JrXXYNZKbFowHYUhu5MRAGfnhfdtUXSgqbk1gk4gKh1n34mr8CwJTMDs4hxnXbQox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EEjrrwGUHcQzGYS2KBLnyZYdHF8hgDvyG4ko36GQBDSSkUUacWw1XBqauE6uSGfrxizuNUtDuPuRQ2MWcB1jYgk",
  "key1": "5v6oqxXZDc3R821CJWNvoCHVp76M9E1LD4xQwnffccDue9kj3NL22rn6R9prbiWy2NH28pNFnYhYH8a72H95EB4Q",
  "key2": "3f7HmQCjSuf7mbs8PALTcspxSBEeAJU7e9Q5d7F7DiZg8Y7yS49ig6wNdjAJs5gpUZYYVPQR7WxDFqPHE5miXDNX",
  "key3": "4bCHF2ciExQgfj8WmAioQ1T5bk1m8XFqBehXrwULRxV1DgT52kLjNGM8Aq9MVN3cXWjP1eGusLJrZmH2x6fsDbVV",
  "key4": "4bZPpNYBot2ogFY64kQSqcCir8VckdxxKdXpec7Kswp1wHwo6jpZrBX5FG4n1S7CpMbJ7TMwKWrPbL2prFxmSp2a",
  "key5": "tQ2Lo5GvvgBXD3auxCvqHH6HTjH3c5VZdv7bKJH3PkvcL9TvU1ja56LxNq79Lsq6aCaApD7UkAF5hSNzdwrZb5T",
  "key6": "59LoMvg1Es6m3erogJdCh9qFJhw8o1U4wtMf7PKcXojeG1MMGpncL6nZWzj7mCqc3w6yTmJHGf7RqjDNWNtACoh5",
  "key7": "58etGANBc3MPNG6Er2aaYVqqshuPEGGDjfBMAu6Ma32bLjQPEqV38frAp5iPCEM7eSagbyS3fVMwBg7FjKKcur9f",
  "key8": "48RxmGg619YWYfC5LbJAyADyQFgWvran2npBx51tKBtPANFs6tQdFJqSF1Uz8eCGGjmSyiQT4m8hqQ2hzsVArfGZ",
  "key9": "2DGSrCLzR9oo4SCaMwB9FXtxbYXQk1cTCQnRTmHVNSxiL6iGqSq2G3bFg845FsNvRHbPd3zvKW6aKSUcwXhSawTn",
  "key10": "3y73yVVdQJdEuWS1U6Hvbzd7bQppsMRGW8Gw3EXjgeqFfCCszR6gmCPFxqo9hQM9MkNg7N9wCK2Sa84Zu4zfSJJG",
  "key11": "pFjiTfhgk1ow17kcJJTgEgJDjtCzGmu95i5YzSpgEc7U5jMXN4kTs2ncBrUs5MNLGZEuM1YThn49wzLnY4ng2W4",
  "key12": "Tq7mEoDPBzo4Mw38FvKKu2bGisQsHNaM5Dc38MTahChH4d3DKoPD6oKcVz3hN7YeHgLh2aDpG2mau5JRhb56Eh9",
  "key13": "2k5frNjMhRuBw7pGNNBy5pGmRzG5bf6BPnyJQ4UDQK2L1poPRFUw5esf185jVf4szNqxAvDro5FPJzUQLsTcRBxk",
  "key14": "3ba3y2txwZBZtHYbWcPnXv7ouUc88bo4TQmad7Xh3e9knfVfF46MZKDTPCb8c6oCM5yNLfze7zqS1ExxqBRqok5y",
  "key15": "tPT2QNyCcKJHNbEHht139tuPoUtcxrCpzDy5qtYUNeyDEMjGc7cCiq5GV4odmZ3dzEwNADUAjD1uDEG9L26GeDU",
  "key16": "44PtuNjs42DbMGS8ag5XtVbyQpzEZfLHxWWEQtxXk7GZSTWsyXG9gQdKYvJRpmpVp6wKwjdCJPZ7he6WZuaN4Y7m",
  "key17": "fhBsYuw5sBET2UDAZgensHB4TWbjDX2AfLsVAzEMw4gZaf5vjExfUYaJ7XCjDjPYCx6cK1ptMkBhcCVMZKM4WwX",
  "key18": "58PRix2DjEdoRbVVzG6Yw8awFmRrZgv9KLPi2Mm2vB24VkuqoFs4sio4PxcTxKZsYvWNdaXq3bz2RuyJiQGoyxwa",
  "key19": "3nKWa7Q3t58J9YwcYVFFycyiUcLPhcSoQA2bQJuUQsyDX46MdZfDTuW3c3jyWkRtqqXCyEkjYTcB9iPygbTJ1TZC",
  "key20": "4jZzdCs7WHcHN2fTwhoHg2uBZihJAAUB3dfqwxb9XSWBPSCLSEHVkCAchNKkofs5npsFwW12uRAUrCvk4svhFE6W",
  "key21": "NvcEUSAhn9MhwJrhcfKMfdbK8awvQfmLwjvTwhfkmAog1enbjBCztz72uGzmW8871jj6CuvL5qxx6BZHc9GoUMT",
  "key22": "e8y8unZAqTc4qvvX2Ckyzy8r1hPMfutNWHScSaPNj32cC8JAK2pmq8PuhmHtbJfvhLevdt4SMescZNDP6TfnC5A",
  "key23": "JSbDTPRXqgggCQ9xAV2KoNRbkc1AwFRNWc8dWrXRAuzL76sZ52j6qApM2Sc5paZymyx2amBT33LFEw62k2YKx8s",
  "key24": "5DXZWX4tjQoeueripgfYfhg6iAAHeHjxmm6NXVty1RKGMxNgELjyXNhTqnHQjDKXcxiUjToqFcD8W6ob14RewXG",
  "key25": "3Cnoocf9KtX8JRnEDurUdYpU5BaGjZQRgjp98Aai9sGA6FNZKo8zoaaPTrtDSjPu8Xkd4uE2K6MftRoUsB3hBD2s",
  "key26": "26xCShZi4j6uJWmxS9Ga1oJZHdwVpatiJWvVPbcq58YzEt6njVcFzWK2bJ6nM3xEqKWb6XCwJmdKJMVXKmycvydi",
  "key27": "3gS28oJTJcFJqCGtTLiX3NGLcf8gurh8CyodkRdDiWwerrBbLVYxn19R4JysV5dANcg1nWXQfVsb1Tr2dUU7GxAW",
  "key28": "51sqZ3Hp9KshRdXxaYYnHtZaxSt88KoGFexbzbiGqifWzKKibgqzvfV9jgY8h59Hi3YcAMAHDns59tt7Ki5ph9on",
  "key29": "5EDvmLS4jsTqYyXz65dTQ9LyCJVnNZEdRBZjb2F55SmMs4N1RUwZqiN64zaQyE7PxcYLzPszzqZpQDBeXAgvu4XB",
  "key30": "4bfiymajiLtwhrT4YcEjEtjagnB8vZYUfjpyTovqY5pzSHnVngy7fAMK314mCtiNPEZZRxmMovEx8gY5cQpzLw3t",
  "key31": "bJd4ep8u5TSBSPiBjPkNK2UqB4KqrooHRg8aQx7iTN5uBTc7iV7fiRfdMzGnL5rSyBTV81EJ2jg2dNdapMLYxCs"
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
