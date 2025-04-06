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
    "JsRA3KkSELNPPYV4zNNBEPmzVSrwnJXLtB75Fzbfbwj6aKTBbU9QoQY72KMJyxKcnif41K4FWG58PAidnht6aSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SJ72vftYW5ufjEmXJkEdMz7iFC9rczkT82Zvgxc76iLtKLFCgu7HRy8RFcSdquKDC2rMZ6RhW8fyyaxWgruP4Kc",
  "key1": "3s6LBgb8sNKZjWSS9cDfr2sxD1zYeBW6kvRMGtweBAYUeJMYDPxMxw81tnbzmfPzq5ZvCum5uRtdqEQGoX5ZKJfD",
  "key2": "4D7GfbDwxmNDxkQPwFR29UwSx6UTwYSbtmNqurFDhXh4sCi9dr9qv2FwRFC3BL3iLdNjCYhF7KPfS1C1QzZSB2uG",
  "key3": "bvUFLmqcxEKKAiMCQ2CjvBQ3FGgeztU7ZGAjpDykrENqW4muZnBfzbMKL3s3bw9aEEdFRSYGvMQM7gRc1b3aoNd",
  "key4": "64PWTL25tCCTdkcs5A8CZXMKESqJwyLmkXpSLt6FfeEoJkzHQAMpmEbg1VBJt6aBz3tzWLvgHfmaAKNysN8V6bP8",
  "key5": "4XaSrR2Wd5gNpJE2B2DQvBH9m9ioi1X2aHGyfK99ML1xCaZr6o1KNNVo1Zg2iW8vZKepUquj7aKZAHYgYkRvSFkD",
  "key6": "5qtMwtsnM1Ldz4KceHQnk8z8f6ZaQ2388GgpjK8scjAtgdTzbbkGumJRxxTUC3MuNsh89wvcA8GvBTdnvbkub5cH",
  "key7": "Y5DerF9Kw517JaLvg4sLvJ9hH6LD2CiskHKZjgWB5S7THptxMHqjQemcWEp5rTeMyoYRjH5VmJCSLqwZbpm38wE",
  "key8": "64iT1cFpctkxP8vPi46yFiuCKieabGQ7x8R19RhkyuNbsDEfLtKfevRr8LpNjJU4cCHGejMWNTdWXkTXjdfsdrnZ",
  "key9": "qBY81trwUZPTRjBn1SWJsimwNu3oG89hPk2DmpUAKfKiXXndM7gq3bfKs5NAGcgVpoAx6FJMSVqvSQgJDqmC6XD",
  "key10": "2hptH3cV4WnZUKKzJ3o12pshG4ntsSqduh6WJ6E9AMJN5ZYPJV5gCx4eWL7L6ATLC6mRvxz9XyQeNXe5nYgQJ9h3",
  "key11": "4b5GwXoYincMK9Mk7PaE7RPA2MzCvjF7zyjZvWTyBoZRkrpqVQebF7kdymvjNJcqAL2WLUwHCLLcCv34JkiEz6Un",
  "key12": "sJnNPDvkZwtrAzUMhBdMrKpbnTZ263UQ3SPxUQmuoJweAYEu8Uw5bWs2jhxM7VjFerqeJabBtYY9FQmTb9fQUt7",
  "key13": "2JRzE64Xssu7vFLXqs8M6qyB544GnEgYLzoUpfVMhZRG8Xo9xJ9spCzPfyCTNkoEDpCGLXPxAmeCdD2LLHX9WNqS",
  "key14": "4aaXZtiMDxt7HHdCVtd19G6bA4WkksqxiE67ndtnaZ2cM2VLKLr2BtK2YyGesUwgTc6xJxn9ZnnD82puhNi4ibEG",
  "key15": "ZZVKi1VR5YWtBC88CWJhV56LypEkWaY6e4H8YG6ddhoTZPrkiySWFNSbMbLFWVk8b9Zh8wExdHqKmsMETjv58K9",
  "key16": "5uQ2s4SxoeghME7NjQtXQHPLXnbvKHay6zCRDZbaLz3jDxrtpoWcy3B3Wig79jZNxcTgiqi9E5p3hUbAFPegu7KD",
  "key17": "sKCZUBnCoftAHQB5hv2yQ7ssoMZ3QXSPTqwqUzhg9DWwgXjmBXHL2gyLEqhE17UNm5C8EFuXrYEABCEdGTofRzy",
  "key18": "bR1ayvgSATHMUsjaPPXckBLVGimGeAZYoYxn342FnN5Qb1VPXEyyxaHJ9QPn6jCmnHHyN88hztzmc1EhrJLARed",
  "key19": "2L1RzQgwNyTHU1VDv2WYdMqtrBy6FRFUNF6a439kUjwCqye6LFX7yc3KCf4oQf7hYgzC6JxLpJzfXnjrvYKMKVxQ",
  "key20": "4X8TKgZWjyo2PyQZAsfExKsbLZVdR4jUNqc6vknWVL2CzKthJRB9FfVXJvadowKtV3Q13skqf1FH5U6WohTtuY1K",
  "key21": "3xqPyk4SqsGvfkR2tWhngRXCnqvUAinXD8fWpNdJvMkb18Arb7ybqETcV95rNgnJaKmTh5wYSzZeFTwHpDgzEvqd",
  "key22": "2enYFKwaynXqUHX6Bxav4fgEE4b7BzY37dYm3jyGqeYVwoqzxQ6wejeGb7hs3yg6aKfBiKim1MyhEFaLLcySKduK",
  "key23": "5DjEgZHW94fhTRZ4gPDknMxUK8Luv2D1ouW8Yd7NmhTBpbzd45Kbx7RxbTB643qDpPT1hvPJY4oMvjouyNYqLLPr",
  "key24": "5zYKyRqApmP5KiiRqAHzniSuEDfHxpWm3ZnP9jnbUFjbEtAFtvG7oumj8s9dSxQLCgVMkFQTXu3huK6g5HFBpFBQ",
  "key25": "AT8c3dyAQhxcw45vPhBJfUmtn3N9vSL4zLYDXGGFDM29GaUtygku53GdCQHugjNW7WvJhdCe1tQZKNVAZWDRP4t",
  "key26": "5inuHn3XQQrSGTR7Ckq3s4kJMvbUbFuN7FqF2tYMytJPoAZ3wikHUe9Nw7DMscAmyWAFqZYrarrARJQnbC4mxoWH",
  "key27": "3yGRfszHMZjqoGfZmUDKnKfYMw7FuxzDLhsp89R2zjFGmngZeckoiSCT46jbk49cNBjiUAwpspKG7YP5rbx24DCE",
  "key28": "3tjHu95XFVri461r5SxSXEZxrqHSZVqb5KY1kLEdK4r5Uc9SWrTx3hyq7UJXKwDFu68Pc591NLXL4BRR4L15F8fk",
  "key29": "5XZQx57vnFQ6xw7K4bHusY6kKeRwwX5z64cBEBDFQ2ccKwPLupTP32dwoJBmtEj6nU2kFJyEWyunQtpXhcdtW6B6",
  "key30": "367jxLgFQbVPtjqPuKhKoBLqfccG7XDhz83SdWaTen6WWEJa3W11VhsdgZ6e6fZjWTPY1uFYhRExH3GzFnMs9ZxU",
  "key31": "4Z7pq6bAr7brSLj8ZoQQ1KLPJstvdbk7JzrGTdSgZkmrCtnHVExhScUr8bk5EhGTZQMABiL7oNpajwzV9dWpoxcu",
  "key32": "GLvzrZ5k6Da8WswTuXQQQLLexMBGnmWRbV9xa2LvqLqT55QhATomNsYPhSY3opjALLXSjHWFHrohCnV8hpooTwi",
  "key33": "44XYKcdwyJ6VzD4mS4GpzWvtFmCJXXDkWNNg42Jvn3ajGQFd7t1Du26FxG8s9mhkL62icvcneM4Mu9kSz5MkcwnW",
  "key34": "5tXDXGY3UBMh3g5mquvVpKeVqbGRoKmKrN1J9MK5k9SCKtALag3aHfvvxG6a872utjs17FdoKJhq1dxFgY5qxUMV",
  "key35": "4EijT4TtSY33bNxQ438Km8AvEbEXkcWF4Dk5tLeGJ4GR1tGUpMNbTCDJ1A5p6sDZtVsMozY4SS9vTGiDrQtGWtWK",
  "key36": "3bF7iRBQYXSGD6NjQC2EAhnHq8me1z4Lbd8TY5VHnpy4tHFVC8ULqLdLohUD2VKJLD93yCKXSWpeTyZ67R6otwFd",
  "key37": "xFbsNzQuNcEneoZCBfLRVTZztcUWucdAv431QPtPJeLuPS2hGuk61yy4wwTwFfi7ibYehJjHGjcNzLp1XDBkXnH",
  "key38": "4chJ1N19HQFKGyFTzLAcVPxJGfWa7Kw4FFU3X1ygaeZHNNm1kzL8U6UAt372AikGc6emkWdhW8R3MituLVU2GBkL",
  "key39": "Go3Cc28TKgmfcwYL8AhFhCBNmdTPcdk68MXB746L9ZFKdwHdTfoXSSemVx6smK3R1oUM8Pwzid4p7YQ4vU9ycwg",
  "key40": "21HH1srvmfDDEktJMqRuiAQE3MF2ABbMLcBsP9gaibJ2pJtNM5s8cYy7qWC6qAuZpZT2jjhqYheZSgFxJsa8x6ZG",
  "key41": "2rx3kpFseDbmbN6qk3uxvCndHFiFM6nhWQL6NgvJdp35jzcWp98V9ULGipkm71cHjbqS7cbTQZRc18d5EYsfy5xA",
  "key42": "5xPQC1iAHdXpNyKVa6Jeid6dztqdj5d6htyGZ7fdKLnz4eh1uZS2XVo7Ct1D9vnfvBZuKERLCDkogWomD3LP8vUf",
  "key43": "3seBmPBUtB4crZBV6c7kMQF4w1BrcWjhVfV8PmGsaBaTZ1ZTrM91HxowjdkhgPj9r4iLJG4Tjr71fTMAta9Khpip",
  "key44": "aZhUqKY1S7i3qCRLgziyWesdxfpZ1Um9Y8gtXZTruRK9V3XMAdcj3ZETGV9bJyUv2NFroT1YrdEz9nUnbx3Msv3",
  "key45": "3UvUraeWRdaZKz3jRtzZVaNMupBDy334P8P5GfAa2v4JUYAbt6V2sa5dd4d8T6iKNSrNoqqwGtyzeLaFtdRCX6ZH",
  "key46": "5kS4Gz7Dmvg8UJyKprUcMRCob2EbPAVfZJKKFQmSTaQc91X87B46fonTAbqVkZfpR8HgSgXwZpr2G5JfZYZBaTd8",
  "key47": "32pyAPmf2Yxx9WV5QGwULtXpQPK2CaXg7nHTHRDfUrMCgcdvYdnksVhWxep5nHfNJRVV2T5ZJVJ5cXoJR3h8A7uS"
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
