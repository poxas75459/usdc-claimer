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
    "4AokAt7M5fFo1W41gWH7UNNnD7mkM6kkM2YsjfkHRjhD2RCaDDye5Uti9W4EouTpCjYrXn5ysfGmoah5x8jW8Hah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LokNJibS3A7S1EPjwaUuhnjzoPhkjXuu7ZURxZGaz5Bo6pH8FjLFjNX3BzAXroo5znkx8A2VFjCjTMa1zQ8m5VA",
  "key1": "2kPQyVeyS7MRF1j6pF5u7FQcMsX8XSTzVeqrKsUL9B9CM1edm73kSynRnruScsAnmy4XVJFw7f7yx2fJsheUCaYw",
  "key2": "2qsmpjF28M2ic5x49hnYcs3iJZp9sURDke3iEoJEbtWo2hfWCbhuJ93mii4dxM3f1NBscjV7s59sLrn6qpbMqdgt",
  "key3": "35LuaAsLvZUmSpJLAGjsuBgnmFnSX1NHyR4WopT9XXMnN9VVcz7X9wCKFMcegx3d5UKd5iFtL6PvtdZAwGVV4dB",
  "key4": "2cpYEGJqXBa4ZsRoiUZfJZ8Msh693TfXYAQzAN8icV3uX7Mroi4oykqhW3rHZ7PpS6H7kCbBzvgCqhn81vE9VVQ8",
  "key5": "nzva4tbxXEdXK3Vjgj8Nr1wFUynubfM4ksHkjXHG4vF817Yd1RSHVrhHonXx1UVZgRL3MydZfBjupFLVFtcAZZW",
  "key6": "3XrDkMHMa38PQpakBY7Tvu7cfhpxN4239GqzTVaQBKwg7ojA6okpKcHbp6HcXd5hJv4nR3NebDQXJCBXLGdrxyMQ",
  "key7": "4C8uBGhXrRnQjMFpsnSB1wz7oMWQc6r64ve2z8v13SSoBEp8c3yhFtXPnKJab8xktQ6vg4beNf7xh4UqXJVmyree",
  "key8": "2Koxga1AgrYh3Wfr2zHxRHQGKANHGe2X4uwCmAu3C83a4Jf5H5omSXTFe6AbBrm81tRPdTJTj12FfU89L4hykoaz",
  "key9": "4wdkCk2Jrasj4pWQXZ6PVKn2WijvWgdjx2SGHFHsScxoJZFthCLcbBbRgro1zq2zQQn4f6TLkE9sZaaGj8sUvYzu",
  "key10": "2skrS8jgTpdmRPRPfXNYnp8irXk21YM2QhRju48Wogc1KRJi5EmJ44RYY1kpgkjRJvTXrSAbiaXUwFWoHjgigEPV",
  "key11": "PTgv24h9kNkiDDXcVCLc4EsS8MtW2GEyNQ5VV6m1vfTXGSb7ZJPrzRfd1wL5GDbMqV3KkYv7UaJvsC7HqecRWWR",
  "key12": "yfqfo9g8tMeCQHrn8nongEJvUWWHT6LiMVj3WRjcvKRS8gGbHQy61ihfotZ5L43zhZNWPE8uoy6rCUkwkurtGFY",
  "key13": "ZHwv5R3xGswHD2sYx6cmUhGhyGeKXrTfsqUiSsxPZSEpJt93usYkqp7XgkcxMckEKvoK9JTEJJPkPbtVUpaC2Jn",
  "key14": "2Az9abfwABi8DXwdrRVdHmQF8wDSf5FtT7TPqXL3qZ2GrTbFhGeFJHibZuJ1u4gHBtrbViifSyUjE1BFL2GLm7No",
  "key15": "5Spx6W286D9iLy6SsuWN2YH8SeHh3FEGMkSp5WGDkvMjs1yZrguMcgLy5gWerjwgkXtaLWRkPFZhBJvtNnsJN11E",
  "key16": "5VL4RLWm1TfVrVg1AcCRood2StaJv9vF47qH8s32jVftWtXET2sDmtK4fuUpaTFnLfwv2nEzvcnVHXJjEYv22His",
  "key17": "5wih8GhriaaCxKZZUFfyd6x4TPB5KjvDjMf4XSZmuD7nTecoNyiKUM9uxPmv7TwvM8VWT48ewwU6V8bC7iCZ8T6r",
  "key18": "2xzhsQTHUN8uHkP6P3q7o7gesLqQEnasfM7hnLde5H6jywiJb5uW5i9QcixxfH9RPmfKgL8RYEHP3miM46mxFNpY",
  "key19": "51d81L6QGzfWQvMdpwTh5HfSy4GngiTwX2DfUUP2i7M7rCRdXLUBq6WBsf91hkRLtPaw5fbYGhvJd2wE3zyTKBrq",
  "key20": "3YHQDdBXNXg9ayfrKJDHoqLNRZwt166EfzorSiEXAqTRBmH8SUbaXnQegWtw5Mf41CdxAinXDnHq431SMKWGLkJF",
  "key21": "2htPr4JmfaLYfMjgWERNLjCaKWbAJrPsv3PDKknKC9dWLXvvCUF7Bdk5EDXgcg43fFu8fpQYAvC1zPhn15a3B684",
  "key22": "2JAuaWjpbG11DxDAtj8ib1ew6MdtvQFM6d6KKwwm9zf4e5XevXouzue6r9rmwbnJ6Jf24XM98egoJsuXuUdqSkwv",
  "key23": "3Yr5xsDqrSDB617cLoFpHyxbDy9pWpS3joW5Fnauw6UGGyFtdUSQsesmsY3UtpfYW13CpCi4DVsayYahxBXWkYNT",
  "key24": "4udUYgRpQ6pDJxLsD22pAjjMCnm2GCuTyyppMqvkjGyZBTPxkfAVnzUB9yfQrbGqLZxfaeYoRPreQPP8E1G7FRkS",
  "key25": "35hw1MkLLbDVdTFPTGsqmCBdD13N3vNy9FaLBinmztgLtT3XBJQ7qDGjSfd1U5ktLEFU4DTUXZHYwKAf6VFewLbt",
  "key26": "2Af12nWAJWj727cftS8Y6k9x6kMDCMBvVwXDJUBLRWJzkKmeS99juc5A57QGjyBoSQYwQKvmV59GLVEL2D344xuC",
  "key27": "rn8mbNJH4hd5n9rmzjNBW1hk8oeUhnkwMr8jxsRUBH8YxoSSq8bbJu3xfG3AcYxv3fNqg4KBM1dT7kwTY5avAw8",
  "key28": "5xx7X3U1tWCpjsa36CnEZPb4Z2JSY7hUxoo84aSHBdsEw7wjuL2R5z7iNwqCwguq2DyhDomvDtVCLkjjJAeHEuwz",
  "key29": "35Wo9q6U1FtMdyW84zQ56vGTAPMmdRckMkVpHg67iQvciHgkQWsauvpWQHKYFWzcG7W5Z3WVsxZKAyc7KZzgVAV6",
  "key30": "52Uxkn6DZtbnEG2MuAdA79ausJHC1e9qb6z1JaTHphGFzs4oZwFBAd1B4DNpgbnWnjngZqdFtU3gAeeLRmsEF5er",
  "key31": "whTYHzavhjQj9957bmEhryB891hQCoUZVznTbZLEaeLeti1oy7xYAZLYiH9h5YtfJ8qHkyV2dd6P2BTrBLMj6r9",
  "key32": "2uMPU4JRCpVXwfRnrztpWYFnZWLjZYid1hPrafJNBWKozVBCzDdNwwGRnkJTWSzWX8MB7vqvXfEimC7XL4m6jGoM",
  "key33": "5uKyd18pMAUTooBPeVGwfYEuoNwzWZCmai7oAmyPdRk5AUyEnLaZ5QokNyiJWjtTPZMBfxo8kNdzoSkXvfaVfdDD",
  "key34": "3WU8TD3y5vsiUx6Ba1eDyQfUSegSkiQiCSMGdvvUdPhdtEx7hjLrw8iT3wX7B4SgdECv2TfcVThgA5BEYXu5JLvb",
  "key35": "26eo6M8YGuEYi5PUpcWqKsDoswFvQ5NpST9DyhnPrYb6E9rWjZ5bS3zXcpwgj12gopfS9EDgB1QHZHojeXAQJtf9",
  "key36": "4kTHsxVgqiLFXiGsE6cnDrKiGXctSA6CMhAi7rVc6bSd4b2ab6CTn6bS7VEYBV3E9yGXuLnuKn3WLbUKDd2dMZtQ",
  "key37": "5HPftd9zBtYmmzLxjoEaUrG4Dy5CQaNvB5NgBaBpP8R3yFnSq5fT1EnrXY7MDpxsJ21AuhvxSdiYU7ocWmsz7xXj",
  "key38": "4WpV7Di2MyLM5LmNP9LhNmWXbQyXbMjkJc3Rt4yHmPk2SvZudj2cRLYiz1z398nkSKMQudcQVrDhZV2WeDngHJfG",
  "key39": "4ZMpTLZXJQNpUZDqhW7ohQDujSHjxqJLkr5d8PuMGZDJVoaYjzS1vC1osc6Qh5dckthvdxtVA5CvUV6Hxrsbpipx",
  "key40": "4CUgbZUSzEFqAw5KK5pLNDSedUeqrB7n268Jr9kVNhjPfhXuiQAp3GnxkhqsYazxVVsUNxEdeBmyBVgCqcUnzE1n",
  "key41": "3ZK1CVBP9k4nKYaAi8WyiNtVyV7mckhtyfSYGKk3rAwCugSMTfz3NNvDPRF7j7RDPxfWgrKH4GYRkz25PEzuPUYs",
  "key42": "3sXnRa43wKrYTsW78Pd4xhoajRC2xjFrDbeMzF7WDahsdvBjcTTZxt6jnsJrsnqT2coTTWaEDpvss7DwuJFdxtjz",
  "key43": "3HPgZtyUxjygqJrqLaPWLkLr9HgQt2Z57KL3TjiUWqq9Ako2dsiAThaen8wYPS55BwkQEaMyrNjsSaNFXrJPRqVx",
  "key44": "kvr99Sb5atryWsvfuFm7DPsWyS8ZSXWFRnw6L6oHQvVmkcj9LLjwV82Bq6V4xXVwk9GQoyEJWgy51ajw4MgFm6V"
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
