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
    "4Regpm32sviSeREW6r9j9nRB75c23hNNVr3NXRR3gRGR5NWdok9T4UT5y5QRywoLbPzsLZTZzuHV9RLLgHXhGBAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tomdaa8yMjpEcmt9ToffT2LaMFUnKE9KgujEVTCCQYhm365UzbhSX4431fiwwab2exuVuvaUCQkaiTy5jWPG4yF",
  "key1": "4TZK3byvVP1SavLHVFXXqxmhoW8X1UMu11Rj7EkUQuMD9MNLiYReHAXnZzV9KocVi7BAzRnXVHNkG8FB3Febc2xX",
  "key2": "2RHoi95jfmU7REc5ejb8KRkkhGhoReRYnSDeZRebg56WCA5CUDFFBELYwmsfpv6XQ7BwWmuP1tsjBC9X9mK9eTGU",
  "key3": "5VHCJDApme26B7fLdLdiCP2C4pA7opmb24ZcghZvgWurd83GgJDud4mbsRKiUwBC85b5dGBSnsLVu2ttFnRud9rL",
  "key4": "4QVKENrJN9cBp88FVkMbM16KFaGo2q7diBpryer36PKxaHUJcKHpDxM2MyhPCTJEftXnawvc2XttKvLj62Ls7ywn",
  "key5": "2L9k8d7qkEscBNz8ucDSU3L9z4NzApo8JAMDuu5nhdYoWTcSNN8r19hN6TjXJAQVs2PSBNFiEMCWmHsx3vpjxzhA",
  "key6": "3QGirTYpncQQgZUd6BhbcbFuLzUXuL8FjHEvVmVe5ousy9FvvERKkZwuezZZuiqEV7Nf3mjrzddraqVbYhpDqDFa",
  "key7": "4d1o7RB4BcQRuXhHX5tg6HJ6W6Rxd4aEdAewoCE6N5rvayHdxUnoM8v1Mpp9zPB2fF7xUGjkN3ToNHpwngmttRhH",
  "key8": "5vBjuqEYrtADDkv9K5sueMSkmqPB2PRMWW8oTnPq9ccPXrpxb5TuYjQnzsipamt9DxtR5vQtq37ZhHNRFLEKJuTR",
  "key9": "GKPDfjdJWuMyGvbPJRnDduPWhdk5wsyQmuGR31an6MvJoXVzZ5VSvvEM2R9VEVtdjQ3HJAcDGqyQh3tCyEBvJAD",
  "key10": "3hXFkVbRMPVEhkT6iW9c3SQQDZb5Rqcp3e5d4zL1UXFghxGceDGtTnWnhkd15Vpeed4gwsu9EmE3ykCqaNmU1nHk",
  "key11": "3XsAk6Ut1ohdEMQmoYjxz3s2ZXPwWQgexCeP8T3Nmesy1DT65BE1Q5aWVRyt4X9ck3jcWjhBDwm8HfxbyCGXXvxr",
  "key12": "2JJUtacG3zv8mfEw3oqtMTsGgGFrB1gSqcFFoWPqWxvxWHM23bGUYdgvj7tdd5RGBqaa8qXUuLomttBnsTCFnNLE",
  "key13": "5kDbTJX9J9v7XyKWc8EpirdoTHBxw23GLaHEyZxS349NE5A1vBX81CBuHRo88hd6cQXvoYFhWgRES4sK3iSz1wVp",
  "key14": "3wdKMGSRwBSoNhiur21X4EmgPy3B5Aegk4ZrkzRtw94Z87QpYMYYnKb4FDzrEinzJfMxYLfsPskz5BfWurzDKsMo",
  "key15": "2SdwYmcBKUT1AVMLhK23ekN8G3tpry4mW1jZFvycyKkD8cnj2UXmTW61y7iZj8XfWVKiwv1yTt52Bvno81ze25mM",
  "key16": "4tQBnvqfUaa4JV4zHHjdeF2P3DpHfyxvTGpKbHd9Uq8EixQdLA9VWW7QkafiVQcxLmvGNU8928t4CwjgtBgGPwim",
  "key17": "4cUbZHYxcnW4Hcy8LH2mPdYxdGrz4agTvaox4KEKUuqYSCEvE7rwHsiUdCMjpEBcRULYCpW4zUiAM4f6qKURHFoF",
  "key18": "4xivvhP3m2o3tpFyQ6XwuC4K4d2zqg5tcSdqfhJh2TbBTF2xfyJwEx245BLo32E54TxSWQejpALEXMM7FsaVuMEW",
  "key19": "3mctnffbPTMkjeqaPo89xAuZLA8D7RudXbwEYYyNRBAVKzs3eqAk1C5oCuYYgwjxN6CJw47GWdYHupSRnmFKztcJ",
  "key20": "2ug7Mvc9urHd3RRDY6rGgW3haVUMuzckgXynzXaRPnu6DNNE1ZQpvGZN1nWUEyfUSPdKMQHN4fVRUhnNimTHxLqf",
  "key21": "4RgyA3nqQTG56g5LMMQwnCG3x3YuZEg3mqCHgEpZz2ye8eksSKB53rissNtKZwHnAnZYs3XtbLhYtawNnFVTKaFV",
  "key22": "Du3A2vkJgXQwytMZPCgUtsze5SkSpbRyrxw2GVhYGfNKETwVnhZQxnHCPfLftQU3gJdRNdLHEWCWyNZsGyhDPxm",
  "key23": "Z2h53XszY3ogGdC3nFrse2hCkq6yqpnYhnvgm3YYBPfUjGGjoZbuH8Ks5BgTEqqgKX96p71L2JoafdmpzX4J34u",
  "key24": "3PgBhS19UriyqDTUjq863upouGgviF3m8rVPveV9PhJjA4wFfVtArwPgPJSoD29svTsN5PHbpdejHAHHe4bFg3Vc",
  "key25": "x5WrXpDUAFk2tJDXzWxBvdwNFn8KeGdqaoUUVEnGd8ZCC4eAyCtS4vkSg9b6mkgkYdgkueUP4vL198Dzgm3ctV7",
  "key26": "5n5hKWCTpUHjBZkdAi64AE2BUSZUXAXHBeBivdodooFjXx8qcQ9crM1Tf79JHk5EwJsCNM8vDcSUmkEjKFYbdyxQ",
  "key27": "Ae2wUjN4vcn7bwyEVW7UpNb4BbunVhWmDVXoTGP2kcTXmYa6tQWWM4ohCLnpaKJDXQ2fQT765kdcQE363CppYa1",
  "key28": "2CeJa45bTQMZUU6szHq2Vd7wg5NZskYWt4E7bHJGFwdPu2cF62MakHGwFBestw6agwHYUZqs2jpe3yX79FExJiBh",
  "key29": "2Bj7ApoEB4ebMvAwP8UzL4eb6YrAEf43rziVfuWk7sgU2V91Rpy6xWnaWMCtvp2tkD8CtYojrersjB3ttCpsffei",
  "key30": "3fiW2R8hhesBbYtnKjSkv7ABy53YqnzYQ4WV3D7zqnQDREMftkoFf2h8TW5xUiz6LwNkNPieebGKNhxSoDLLREo6",
  "key31": "2XFdZ5xv6Wmr3xnXhEr3Th5agvdKT5GMaofbcoEf8ekyJv2WoHyMdv4RR4HF664EyGq3x6dtkJAmY8XqRNTZVbQ1",
  "key32": "2L5shiL7v2XJJJX4AYJvo8x4zuDtgEbnxTLbn72onPNc6YDyW9yEqaRM9co9W8Fpx8LYixuVh3v55fhGQ495ikkh",
  "key33": "44RaC4rFqEsQAU1JcHEPmWj6KWqzG6FiD5UfRjD3Xj9gZVSyn3HTwcmj9Xk27NvQc4HkWrvztqb7v1pDevzisYCo",
  "key34": "4C4kebNuVHkfhdVFbQFVnLBXLGUAQoZ6f3UJ2wFBTAVojVqDqY5jo7K4MyFK5anC3CidT9fzMe1q28nfdC9TGHyx",
  "key35": "34fQkENYimjV9UjvtrVYnVimrX4ZsMELxt8ZhtGp8pvhZfYUmhcnVqZCBgpCd3uYMYemzvMPmTStXrwddxaqok5m"
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
