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
    "62kChb93NrinVYkKFtwAb7XreQkUdejbgKdZJJBxDoLEMepJoS685ma1yFCVZShUSnP2K6NZAk2pma9BGD8eT1yK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f9iBtyePJFEU29m4PHJsCUauwEfZfA7AornHrg7F1NnxvvS1pLLFhAaRxbpVzDDoyS24BAo2ZsHiNaNzv9Gd8kZ",
  "key1": "2iYcyp2UqarTdyqHh28mTuv4ThpvDP1dTRKvn5qgKJxMLx36NXERb2tFnTqR731GMsGHPN9kMCGRgDkKm38CGyS4",
  "key2": "2J6ZEUbbc9tH9q4M2XVe5wNCLMQ4L8ccXhcAMsraqXZQB4MPqXzFJc8mgMQ8ZxxGxU9tu4ksuArgp544Q4fEKDpr",
  "key3": "3TnAd8vRev7TG6VtRHvfyfzN2jGokqgKjUPRTEzgxxvcuFUZof8e5FoohruNuwBHAga4HgiRN4mPRmsguTaH7cVv",
  "key4": "4EFo97KJgoGQsYsy9sCGf57F4d4TvD24M7qEZrnzSSpaUapNYjD9bN5LVyzikKbn8Xz8vrBSvJTJv46bh2NBbzPM",
  "key5": "o7ZDdVYSuBu1fJmPGT8H1AnPZKpLs4BCjFYb8jPfXL7iZ9zXFxjwHKtxvbdneMDTBCxzCfbgNWNmUsvsL2y8ryg",
  "key6": "BuRknycxP3PvmPvfNHQtCSsCKBxC4DhzvxhchZgyBzipe2eohpZ7GJmrMGFQJfPsYees1RxqDkkbxXqAoUMYzLS",
  "key7": "5kb1kXbH18QFdsxekZ4jko2W6UC9oCbQYGKonNMhQtj3MDrZmTKU9La4jtjVbRjFWbVZSGf4hDMtDQD8YPNH6SG9",
  "key8": "537iT4Pb4WS7adXHPLXbSfsYBi41gGNAnY1vrurSnhJK4h2o4yurmbMzUrZ3usXGd7uduVjBmugU5n8C4gbAgfTL",
  "key9": "4Sua7EyWAqijGp9kyEYmmpfa1sGHnPtMAuvcamshu5VmxPdNgicPyUz6ZDtmhBN76jfjSawkrZ4fYqMkoNAtEzMT",
  "key10": "2LfhDqB7VqmXC9TmnxX7HkRpdD87gFonwZq9H3pLYwUY7nEfxsQ9SaQ9cMWTcadojQvvvEWnWKPkQeDtVmikKN1a",
  "key11": "5TZ2CAwqAy5iQEHntMHUPee3XRtx9VhuWo3XNuHE66WkcJwH6eTnCsR4B7dsAxBetvyarF4KJA59yZPxVwgThvZ3",
  "key12": "3sSZopCk1cfyocdknPb2UdxrVBXBqsYesqbnroyVyLzBkAJy91QvuUwT3WgGqfhqbbfhdLGFVGJAJUU218zfBrQV",
  "key13": "4vETFZebfjMEQmZXfdyF58Nrvn2e5YsJM3ZNhhuBjPtDVt3PBFnECkk1sjmYNqSpaavbi5fsZ3duc4G61t8Mygye",
  "key14": "3SEsL33sDF9J5BPzrz4U431m9dwnjJEAvoGEtMzkQGqh8JkqxXfenNEubocpGMGwCC1yhA327uqhCxDyQJjsxxiW",
  "key15": "4pzgV7XuycaPJtcBgMVUD7Lhhp8EwzBKTKHW4pHc38ra3WfrZkh72BewMFUr8JoKeFdTB59c31HbsyCNeXnmJyQ9",
  "key16": "5Mjtu1wm7naT6rATD1ajcxvzsqYdgp4oA2MoF9a9wdURPf46c5SfkiLPogSGxY56Lk5pS8rqfGy17GZiNcE8pFno",
  "key17": "4Wg38F7gbj5weBQErbzAiQ54uMdbzK4huAnuTEsgYxybbVSjLTUQN1T3hX3xHWVmtigHtWSuJqQTT73nM82cb3Pp",
  "key18": "21bXTTiCTKU56Mro5M7jXxAHPdmeyWCFGB9v7Xmk9boiL5mxESEsh8syztSMt7SrYc8TT4E1bBvXy1GPuGoRi6eF",
  "key19": "BLg5aVohkAq4Z3XyfQNxUAJC3XsCk2w8DWVEzGYpXrnuMe77Q6vb2E6xiXTx9wd9GYajWHDwWq4PG6iszFwqT3r",
  "key20": "3cHTeQZvV4Ma5FvSe8ASqzPZpRRvePTAPJhzdtg2vPq1CEtWivkysQXHfAjVEB37sKFSVeND2SDAmQhyFiMnTt1d",
  "key21": "4znZ8DubS3csdR5343u8VuK1R6wU97nM5GnTpc3HKeMYfkQGdEu1TexdKcVANFKJoC95aroKiPDXTNaGt1q8UvpW",
  "key22": "KDbJ6J7sMpLP6VZnavqBfkBRcWXUk3K6mApcGNVgQBKr4KRhb3ndZNEkcXGNa3be3j3PfExh1sFPqB75NT34poL",
  "key23": "5vK8UnZhe25WQLDaDStdZ6TTVqgFgMdr1Z4qXc1zHB13n7QM18znd8t7D3JGyEVJTt9H5SgT2movcBkS4xxKTN1u",
  "key24": "4UeM8U4yf661o4hMNNvju15qwruLG13DhR5xPwKp6BkFbuzrHvfezRcXXKCis2ScUgUc6xYNgua6tCyJFZvNn3Ho",
  "key25": "3TYMQ8L1LcbQQ6zxvgcwSxuQYy37V69ac4tnqXpWQUi5jtkDYodhQcXJPixo9YLSyFG8br9uyYxzBPvwqaa37SwR",
  "key26": "5FVx5TEVpUQA9KimsRoHHc3op8ovQmYyZiKPtGxhaF8PgAy1j3MZMQnBN1UEVncHX4fFe3FVCGzv2g86jt9hpfpZ",
  "key27": "3AGbawpVaqLti2fhdtzySXPH819KnEqSmZbGU1453L2r7yT49uwKZqenfSiNY29khcZfbXEaDCzkNsBakxJZiv9y",
  "key28": "3cRzKNp1sBFzwdZ7gF8pZXx6pUqj9MX2DRVCJ99LwwRDZpBYeEn8h3L1asvxRzM1NqfyCWZP97dbah7nLiA6Ev6q",
  "key29": "3qVDXgXuvMf6ux1zLVYwbvHcSvaozoqjFudjvj1co5EcqBjS17dJ23Htp23yP5Y43qkp2vQpGRhZdHXj8j9buNGh",
  "key30": "5UdyXZnrjdcLo2yE2BfBBfShyFW1QWwSEuSkf1o4LF5Nvf4Hcadshwnkdf75zSzBKumGtqaRQvJGyjVaoS6ciNMy",
  "key31": "H1ejQp8BPWJDu1LL2GRfPRXsveYCLw7Jo9CqxspxznbbTQQRPUYqPaqNQPo4p7pWa1nqeQMGMCnxshzsZBCPVBy",
  "key32": "4qNYzaNF2sYd5xN6tNaVHNrJsG99574M1kQhwGoS2MbxVYUTVqjsXgBpjNY8yrcU7osCHxwE1yFo4rzp32Ayf9Zv",
  "key33": "3iTU9Q24RuxL9WxrZBxZBengRQoPJbUuiTvs9XiBFGocMoeDFyb4zrMH8StHgw5uioqE3xo5mQjpj1NtbmSTLRAU",
  "key34": "3LLBWVHU1rsBgoY8DU7fnd1uf4DtHJosincYkHbMGsER28qFeJVk6X3Bz9xvc8AKwduZqUwyjJkW7Z63PyveSPE7",
  "key35": "2fyK2SCQz4JmWiQqSkReasgyykQWtGarC1fUKnNvRYpQ6FeMRjMXHMDxG9ZwbuXZqpVX96eygrXe8bQt8UzPpGfo",
  "key36": "3ELCHrK5vE9LHGuyF3X8jGjhSv1xnT8kgbatRvbMmNSPB6SdiSmBWBbqs4BZAyeZHBj3N2XotrEULeCP2XdcM7n7",
  "key37": "3F8rgZQrSqhufsnPX5SieuDceLSdTnGK8UGoZbEBU5eWBVn1YeYia2PUvr1KsNE2sj3ePYAipA56mk1f6rut15nG",
  "key38": "4FH6Jkcn7xUh3taabRWUXry1q23zgzk6yyg7LTtwAibBBPN3bv4pLN6vvMR4oPWzvgHQCHxmw1LekgXvTrYzVRb6",
  "key39": "2oLFRGmAGPrCkPuKAABsdVFYpLvdT75QLQ2sR9bo8SxTe4fAUPqKBVfSeSaBUoeJuP3yLodFs4PXxi8sXenVU6yR",
  "key40": "TBerhdZXTCJe9UNF9JFDtMgdfzAFvZyy6i4ozoFf7aFsdWKsLh2SsS16eKr5ThtwT4F77mwYHo9ZfbcfqevGd4n",
  "key41": "TnZnUusQTzQDgT7jc1oYLSoiVRxAWCjUpNSg6zYmgynWz3RsHgW9wX6aj5ZU8mdLLWM2YGX7yFSoqVtxKKLFEZg",
  "key42": "UYckApdTYQALfKzm3wo3KccUyhGfVXAwYQgc7nzGX53XSQasDJR9ZarjCzoY2aZxDZzX7ky4aFWd9jF42MspZz4",
  "key43": "27q3ebvBQRy2fVjN9a6mcT31e2BrH1VB27BCCuxvw9bJ2QjkUGAmWrtgkZev2KZev6o6UUBaQKCw8pAWK8MnftXV"
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
