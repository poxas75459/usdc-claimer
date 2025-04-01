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
    "5k72L5G8RyscrKGAdePx2aJ9HeDaeeQ6ryEzuUKmpx8CfpjNqxgQVoomDx9K7MpbCKGroZUvVdcq7HBQn1WaWfai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ifcysUgBBQqaZz3WB2rwnbScSoXQqAefe9r4eYNKikX2gncdC4jhjUfDLZddHFc8VjMjT4sFELVT6seUgJBrPF7",
  "key1": "5GmA8Ytm57XiHobchG7dJ4zrb5fH9snvgViqt6fq5LwdKNfBYjAGpidard3LEHmoXHJGBUzQXvNmRSmshFvseyDj",
  "key2": "tQwPBasP5AjVR5EwUtZ4pM9HVAKR19xz7JkbV5VexWmoAFr2fkyfeuWjimviSjfXE91yoxSBNKEpr3254NwomfP",
  "key3": "5AEErx1W1QfEmUpbg87VK1JzaqFqfaXDEx6LGLobyk7MkCEoJebbD63Gtp5fYM3PsJy6SwAtUT1zudTPqm67CCah",
  "key4": "q3GmesgQfqLic2EdwfSVyWu3mEjTMYLqK6NuyBCV5THCbVnUFm1KzoYQ6Ts5kZsw6HPQnyv9ZYmXCYMSrxYzMve",
  "key5": "jf6dceYAGVNGhd1gAz1iG9C9i9nJa9bgGvG5JXRZ3LYm2j4vzV3yZ8T9NBSZ5WmJGMbU521AvJrCpvV6b54dUsx",
  "key6": "32ohp4Yj2rDzq2Hw3Q1Xg6Gd5stVVGGjttmM9uMHB2ZA8D1DpU1qLkVJyQcentPQLcrQ3JQqoMdD2Djr7BFWnyej",
  "key7": "2w3UHtLjKc95t2CRuTBS2hmXD24YjpPE6HpokxyjADBzkZH3FUSEPKTLCX8LvnG1vhKi1BkwwKnutQsk6XtVndLW",
  "key8": "McW5E6Yyn63NFTKMzF7gQBvzqevTajZyXZXnirNiv2YbWbkBirtgNk12DnuUauexwag8Xz88ZBs1aN17EGNU9rF",
  "key9": "53C5HHu1k4WYB1AZuJdKzHc8xqJaNwFvnyjnX5Wx5m91LyzincQoFU9ykgXKLSrowFHmfNHHFx8ah6Nswzw6LoJx",
  "key10": "5iwy5P5FXR56AEJ24YXsU9m6wpo5XhBH6hPqDg1HeW2Y6Hs65tdhDvwRnoKq22D2zSypFYkyGk2FyBqXCVNLKy1G",
  "key11": "4W7UQiysT9eWHCmJ3M885AaFYFBNbbbBN5wPP38JGfcjdXattMgiwGvmsQNjniyvqXvUuyxkWHM9g7wDpAJRPtcT",
  "key12": "3VUKHiggrz9JsN3wUZPJJGGL5NmDewjX9kFofB96mPxXgDg4DMUBCYQ8Cpk7iKsm2QFmWDaU7YRtAepsxBbZAMCE",
  "key13": "25ayoQFHBR8fHS9m4cjovUSCuB9CDqKpsbdD59m9BsF7fYzVmEy3ViTA5mJDXprb7yHZTKCRysYHCQFGrRvDA9Qs",
  "key14": "5LjcC8eB2MfF8tY3kEXMMta79coGU9PfaMDieL9M16vz2Qgc8RCqAqunmYeprSY5FRqeyaYzrNDJSY9M3bfqmNtt",
  "key15": "5LLhGNhr56PXPwuVxayw4C9WV9QikooxTDwBstVaJSX1hgPKLP1PxF16eYtP1bRHN6oK7GpgsDgVCzVhasjChrvn",
  "key16": "5mBv9QDghjY5CKdNDr1hrSycrj2nudruZcZLfU3qjWaPtBGbY7kn9cqQvEdRdJ18VbXdatX9eWShze6k2o4JqSuQ",
  "key17": "3ZBSXBbjaEsoFBUk4wXGBDCKMy9Fk9VMVaoJvgaHP4FnGKQu6yKzee1spxG6CRFUVsdyiainWvqHhRzobSuFn9ar",
  "key18": "2uWFUtXfTGzEFpdwkQzzbd2FWdPGd9CHhkCNYbbVcdCodLFpJbWMSXy7XmJvCoGW2qB5WSEr9vZhVqs123aBdyRx",
  "key19": "2poJLfK96j9XYzE9R6EmCXocArDjy6Dsj6U53sUNDdVKSWUEwWmgtcQpvPiXtVx1LcrdP84JpjPMiNByg748eb4N",
  "key20": "3gy6GaKFrAhaAWNVrHBfVz6oW6RQNCZdfzaJLpUGyqcMUNxHrkuYH7DTdijr3cd3qdDYdWeX7xPeBPteC9fiwWnv",
  "key21": "3SWxf5Uq2jWSVF7bYVPSMugpZNY19vpHiSHJT9m4yupaRfHeHZCN1kU3XjtkSMtMqCgHDzDdkp2kteFEkW4HHrtV",
  "key22": "5miiSRTcUZuPxLJDj78jVMV3vUQk8VZHReSKfP16mEaV2DbN3Q2FjXdqK6tJydDG32w5iHYvJstPGDjmwzj6yexZ",
  "key23": "46q6f59WBy1p5a2CEMr9eCj7E5JpPkqXHzAicUyGmLvnfj2vqA4AJyz8NVeNaqS97Xgfb3Di8ZbRsuyGBGLUBQ8w",
  "key24": "4Rab4s5Z2HzJ2aau7gShMGHsgsGCEjwLVa44arjPF6quTQL4JBWpGYv9VxkbHttq3ET3dDDdUaTiQzUFkamCrKSJ",
  "key25": "aBFvUrv6L3eQvvZ828Hgtc1m4vDek6H1bB9Tkownp5AaNC5tJW8JDunWFZHdKRpbGC7nCyjNgodgzmM65MqUAtW",
  "key26": "QnqARLh5dv4TCqrgpv9ATapf7CnGkTW3GGgwNJLzaMGFyFPuYFcu9PZS23mrNf8b4qgUa8ZFsSRfYMRss1fUkyt",
  "key27": "2h3pG6Jurs3hPWBXAsk9qCWX8mZTnp3Fvzi9dw6rpwx1rnTRmYDezP3PKj79Ch81CmG4xK4KoytK8W68XNndr74C",
  "key28": "23UpLauisSHVtSbos1Qyouhjc2s4p6N2kRjbXDV7joKjUrsf77bzpk9saYcgqX4vHKykBPPTjxeCKyTnxoiqVpsa",
  "key29": "4rvQQdJ5szMHU5Wb2HYmLrvDj8BpH6xAejyFHLnVkmmmWgqChVbTEgGHnZW9vHG8AcHVZHsUqVr8pdXh13EWj9fm",
  "key30": "2TkT3Jk9Ymvw4yyefYw8tD6Sy2gcYgtS5R2nwx347L5EM4U3rnTsG97tS5Bgj61ZoTHjPtWHr34EgE4Tvq4esJ5L",
  "key31": "5sYncHNS8Sjve5n4D6EV3VxhgQDbtzRXntbeZGXPmSdUrLt5cT2AoFi18QMXWJcKjsQ3Petqg7LYuymHZSSREESZ",
  "key32": "sTHtBHqyEqQUCFDReUPYykDL6e3Sm6QN78rsWvGChtxqGjnEvUgHSpbLS6V5je7TKYEEE7iuCJTRGAGvn7Ga4dR",
  "key33": "2DZDuACuvN1AQwojZ1tQrBc1x2oSyFtSz3kfpgVsNb9MLHE1yYi5YKmhdLz5w2JUfpjo4cyvZLr2sLvdCrF6u8dF",
  "key34": "5zR5MwynSLTAeJkqverM9mabw8JP9yxqhU959pfaWB2hU7iiw92bMXuBSiRR42SsWqZXarJPZ82F2YqmkSvV62DE",
  "key35": "Z4PgDdnjEdhbAYdduhMdZarJhPM6btf45sYp8VeMnqwU4k2zNw7ZDYpn4tz4CxAreFq6C31NEcqcpRZw9166iGM",
  "key36": "qXUBsMETs6C6PvFvn2y29FmUC7ZKx5ApxaCszuvEis62XnsAq7zEaESmB8rfsKwJfSAHRjntJeoQZ3VkJm9tKt6",
  "key37": "4WRUYSjgfV5n3mwB4jcGyy7N3NCvxQ7hW6NXCVHC8y4aDFJ5fzBz6E7MGWtxnHcGYX7UpAiBoUxkrYWVP3irA9yB",
  "key38": "2pcNMJzTuQjrkKZtytBxr7o4npbMPQV6px3zkKBXL6J91AAwGHCLKoBp3KAnfeWPZcj5ca9uuB738CXB3Nvqz6NG",
  "key39": "2rgcPP94aEkA73MmWFrxAwLFqAZjUAKT1ZbxEeCB8RXsNauyvJ34HyhHSASJDSBQ1Uomxi9pcfASMiKNy7f57vSv",
  "key40": "51surNq98ufeRE2F9U5Jv7CFSAJjsNmvCjjEsbi7T8iSZ9jNVrkgXRJjePXYqdpyLrKERuGEnVaCg9D5jQ9iqrY",
  "key41": "3i9JWNvPYXWGMN39Q4o6YYCdap13XQrnaH7RY1e1mHVNFvmEAUUBJkfgNypJgci2sw9nm37J188eCYfvYoq7wWbH",
  "key42": "4H9XCRGiv8RJiipsgWEXdmfYCSvSZ8NphXyvFLF2sQASyZGC2pk296WETbZHsVGstVEZKZGrVfQH1QxzRuj7qGeQ",
  "key43": "2QJCu9fkqk254PXbF4TKDAkL7v4UX3oxgjU4Qjn26btGZwvKReWsfWbYcAschVPb4pvxUNa8hUBpnqgqqbKwADr4",
  "key44": "eMLPyrLJBisoX8ZLqxeFqpQ2xWDySujK6dmcGkiEtG6482cfpszC1NpUuqRtexbsVaxCtWrCUGrnLTZmi4qcU3k",
  "key45": "AT5AoxVpF4krtKa3DxAoM8o4yDey1oSmPJcpb5cVoS7r47usp9nfz9uLPt9mcX3kexDr8PaLJK12tLVxtkRUcVk"
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
