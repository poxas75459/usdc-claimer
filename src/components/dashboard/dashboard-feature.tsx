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
    "2hWJpwtfHnh8fkcDn9qyL859MMwnqFRTkt6vq7iE2GiTWaQQ3KtSD7jEQLepwBqPacAkoqcawP1uWpj3DUGQLPUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iSwPjWw9wLXMSgxCqYrz7trQtD1E5ygsKjwsgyEsm69vmgBKYw8ZsiW6jwUpxuWCay3Ke7wJXKUve7LjwCotX8U",
  "key1": "s9YaktQC1wR4UGxkdB7H8BCFUMD729udMd2fvr3hrtNDnBf4DkJpNEZGDkgdfkvKQaV16V8rDdM36LwFZpSzMbj",
  "key2": "26Ar5uhTA5ShVwURefgoktd5Cyv4RTTmpnMyKTk8fYAjhvT1Rie7c7bmaZWbB8iSArzJXZHF5cVewP1mFQoHUBuh",
  "key3": "2iANKKk4aWYvC8a7pJMQTfMYG97a2VfoxWXJFhqsVrNNLATnxTJk8QA8fySyosyLvHC5MSCVdtxDncWMjA7Px7XV",
  "key4": "3JHoh6azpLzqToJm8Wj7xoSBinoPbzcvZL4pXvKuKDYvdxkKkrvQwVMmVrcZN4Sb2vGv2QnUmwBbFaCm3QjGFtYX",
  "key5": "3cAD7T4xRtveFtXJzt2Agn4RoJ5Zz8DL67piGEMPigGLGifcJ9xeed8jAFGWR8SnKNepLTWrCm83cRh8LbcXbe4i",
  "key6": "4oHtgEZcQXiXdUwKXJvmujbV4Y2hVxJ5waVECTVUEFUeesAhm3UH4rTkbi4iA2VkjPoiLACqgwbvDbfSCoiS3T2o",
  "key7": "5bK67Xs7et13KYjW55tkN9xTELywoD8c49kyPASoSPjZTtMV5ZzrjpzmPNKV2NytHDRr1aR2shNeuk9FMRRHAiST",
  "key8": "X85ybHFB9JJLUr9N7kAzNd2o15RMUFRZxCe5y1PNqsWggtufAyuZdE8sy8eJxtSEiE1XSDWke1bP5fNZrk1DxCi",
  "key9": "2VftiUNdYj1btELckVJn97jcGCyVNGdjxWLXETtUNfwDz8nFTonVQxb5SqcrLJCEcj8R8wZfkbqw5nU7nEd6KEQ9",
  "key10": "5PjwAiLKTLxJaLp33mv4MrSJPKCGpC8yzSZpXcf51WdtvXCKXcPRyPhAUjtamLyWAqE8koT3mG8wAEo9UopTs2kg",
  "key11": "3XfvHfk1EC2PyVyaxHjnX6tGX7sBaUeRQEHWwsVfzbPPkhJ2sYH2cGtbXDaZc7FsWhMR7KzA68Dy6j2xFUkNS9gL",
  "key12": "39YE8LJ7dsUnezRZZWrcspgWZ6Z82ajvjVaTRXUpJNHt3E9qPTypnwSmD8YfFS1uPjSg5wnwrviofynMd2rLMGFn",
  "key13": "2KGHi2T6tNPMhZsmyKHi7H1Yu9g5xsBsnFF5jwQ73wkK8mxphYyP4YRHPUcu93SLf3b7NpHSfSNPgaSuTjSGo8hF",
  "key14": "5ExTtLQar1inEERAYSN6xog3qYLVZ4ejvGH9ZLiXkkPfry2J6MJ9Fj3JyE7dBybz9UVragE29ei1ZTGe46d6QXo4",
  "key15": "3XQfEG6vHZVdb6Fq3j7k4epGmfCE9Y14ha7NcEMScwJxPETsxTkozWrFLUR8vrnQH8jzVi3vcJiZDuFyYUZ9cPB2",
  "key16": "2w82vz375vW6TsYQbfVPQGr1ygSVhkMYipW1YFJBnW9TcN8taA3hmjgfvhH7c19sd3imPk5HrEV5H1D4GLighpMb",
  "key17": "uKnaRR7CEJWo1AKbQHKBLaLxqZPcpbMhnZ1v91Zd9JStgjqef7qodonUG3an49ts9GKAUXxyrSeiLF9dE2MnrTJ",
  "key18": "Kzr8od3ZYXE3fVsJJKSP4Ce543Xx1G3CB3Dk9oM5UU26fmjniQCuWgiESZEcpXTmaTf9q7rVsBxs3MoqCfVaKsU",
  "key19": "54qp5XhKcm5nEqNXZYRWpYb2YehPpsSZ9VEKme6Q4NwBksx4qq6uDSb5qsoEYUsx1ggLG9gvVacPCjb9daWQcEsa",
  "key20": "HUap7SxkZvzyVK93z84GfUdLgzzBuAj3exD4AHLDzPo18oXQMznqA5SZQvKBRaQrCb9BK8W1T9WV1KJG2J1hMC4",
  "key21": "3PTZs8eV6BFiNL7iuSXyWMVPaVWZxjLQ3FCpbz3wcAV2CUAHjb6JDo1Kn8KmGakzpnznLR5uUjD9b8XrezZzgPB8",
  "key22": "22PXEmnJR94XQsoVgzhUso5V4saR1dyGp6uuMXUpn7BtH4jSS4UYVGg6q4h6D1RKjMKnp35kZBDpzMNLELcyPWg6",
  "key23": "2WKmD9E2QHp15qUN8EiYHyamrPQC9YSs1cBLNV376t75mJLYL6wkch2RCEQMQbNcD96JhbyMr4gvQ427N3cmaKtD",
  "key24": "2FhorLAPJxgLwkWQnXuT6ixyvqyQCwVYwStdkssgF5QspEWr8jHbrdRHf9hoaxTvE4iJSU3tWsZk2JaJtkpTvJtK",
  "key25": "5kFq4cHLTVK8xavDMN1B6FXpLjaD4QEZGnPP85Yx8kv2DAzsGPgjAuzB77XS9sDNveJNQusZTYjZe12YKFKDff6a",
  "key26": "eNcsoshKJwy77jSKbeR2J1gcPiFigSh7Cwsf2qpY9BhfCujNQqsBM5gmWdjryf92xXQYhujdagQ28jJeVGndRGd",
  "key27": "4XqbqphJmpN1CBLeAELRUGk7gRsTzJrKNLqBW93FhPNFhv9uJBiZRkHVfYXWW2W9SZH6d1PkJiN69k6AiSYdm1EE",
  "key28": "2bJ5A4ovkRkX2UKxApzQxBNbqUbscNkHp3EEbMFycsRGKK3xQyBJKT6ELuXey8aZ25PLR3KRYARdAYmUNxXdJPiD",
  "key29": "2UJWsaNRA4PgLbuEA7YBMQCVfdnsqrSkejL86AFCeReARefADSxZqex8yUkf5AkZJbXX38fSBPf4GnFgjguic8RY",
  "key30": "cTB6S9BmtunLszSeA7sjXp2FcaQt1kjbYVuN9CLEnKjLuHejtkRy62TAFyc6hyPq8QUM6iRL5skvmc2UpRyjkzp",
  "key31": "3N7SZtzMVWqkif9KErEf2p9YDzf31wtshyvSSwajdi9oM3ArecGCnjrapG1ZCpa3ue8gRTZb5L4T6ECp8xoGY4c4",
  "key32": "28DGFQHFLxfAezFmWW3x8ypEmsm1taE4AAYpb8BAUpFfC7PMU8urusME2naGKfXetk91zqDSoR6zDu1MzoJhyJkZ",
  "key33": "YZfA7tdUr5AQ4RTA4YG9PNsfLZB5RDB1WGrTM4W4owhyqRPUxvkYRieoS4anWjPEb5Hhsnh3sYDDdR7SJkrAvSf",
  "key34": "5BdZ6DWg7efQJAF6nMrFF9ckxiBPmYAayHdhf8oFrKUAgoAp4qCVaLdntgQnN8mpbpujSgPZTmXbcnTVUca4Aveu",
  "key35": "3kdZgQrpJtPWg47H4KnRYn9X28AbfjHQiV5EMNhkLpu1exF4rMmfNJwbW5Vgqyk3UT4Cm9vGuoZS4bdKjhVbUD48",
  "key36": "54PchegoVMNGxSFDEizwHTZg31X9zyzE4cAzNH1Ka8BtbE2dSFGoM5k5bUCiJfMX9JjnuLGD9Xa3ecoMFaMLFASq",
  "key37": "2RnigL5hhwCvKKsQg8dPJS62wbnbGqUqiCriwJ9dtetdh4mFsdv8WNoLcjMfV5CFeUhC3s8uoPD77RR5HayDcEFs",
  "key38": "64zyRDeqKNJvhXiXanyfteJF9RWfhSPmU9UzjVSytLpjJnxXTGhKoWPPCc6xWENs5EZ7Gkz3mVcn6XLbzE3kcdqK",
  "key39": "3A1GVGC6QoK4ntCt8j8JwDPVupvwP9UNqDiRbw1zRsjgySf4hUazTPDHScdYqbVEM6YJk3j1XNByPLKfrve6QQVA",
  "key40": "2tu61rtf2cPEqXtHdcMAUfD2PAHLzFTgsYkMz4MX7FKW1UfCcaKzDXfF4r9o3yEMuErdTn5YiRjSMKgvxL5jopBv"
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
