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
    "45XhWjmfUAvP2frSVWZqih5vU115fBazM2vzp7jUwKrqQ18hjjLgNFmM556hTGYbhXwx1pwzErXPBDeJxJaf1hiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LZitV6BaFuBi3ANpp3ZgegKaZQpUqWu32guimmqKJrarRmDDdsSeHXYnfMuwRQcyaAnvXVG3woE9PYNPbrpYpwn",
  "key1": "432vKPYM4dSuusMH47KtKGuc4PgUfWhxwE8hEhQisuRjXMco5RJ6rYsiJFGdq1uHCCibBTUicZUL7bj47HBJWjtU",
  "key2": "2ZQCfN43xQtRZCHppi3j25CiBXmBfWVmp2URLWudfQjhrgt8FbxLqhXzx4Hhcu2BYadyQQn9V5KKtQ98X2iGSgtY",
  "key3": "tTRBDEc9Uwm6oVVor4KtVaopUypezZzJupjrboSF62BjvmrDw5w6xzis6Y3huoQ5DTR5XHfuZqazM7wwcdy8F1n",
  "key4": "4DARVeF7cUfn5Y85SribG9fESHj4VpsE8NiCR7aZSr7f4eM1mLXXZ6BomQmNCft55hVLwYk1oV5qhMVYqaB9Xupr",
  "key5": "TqyKdqFysLvpcD8cHSsvJsQApppLm35ENb5s4cwS9bJfWcoPBcNeFLzVMjGj637hfKSdeXMKQ6QCpN6vfqCmHWh",
  "key6": "5Y6Ay4qqW7V82MQhAeuu1L5u6jszcA9sTssVNRCQmNYgRTWQgsdB26ydvyb1pyHKKuSb85XK5Aq4tZ6N2cSTiN4L",
  "key7": "4mCrDj4Q4gm3FVvfa8DoSxUuyi8MG8kKFJuDZ2V3Y3Keajguwxdsv2P3QBaMkNQnizNd75uSWSk2XgQnXdBcwSQw",
  "key8": "5dmQFUFBd7GCNSWyvh1TWttUULsGuqShbiJDBj2NLiuvsngKfGa3qVxMKLJiPqQ5GoTkYuzhSBxvCsHiDXv3RBQb",
  "key9": "44XTU7h9Xux7pXNbDX62smeCzvhmFEhW9yVQm1vetWRnB3XAqaEvKaJaNrAwPb4zDa5jTt4ZQnbzFitxFDbyzMB4",
  "key10": "2eXpJap5AzuBFpzrjYrXvtkwnqqQjgY4EuCYXwdcQugJcGWXb7gb3Wi5WjZAK93AFhZd2RhX4tkvEG49gUzf9kpR",
  "key11": "22rT9xwgRTi2UQZP7EouuKLdV6zLQChXwGrHYUJbWRaJs5ginyiH6X5dfbSR3dTBUEXASwPANiMGwyQoWLBPEQWJ",
  "key12": "5NKp71HzfbHC7Zne3P4p7Suf7bh3NF9o7NFFnu3PJt7TzQk8zC8PfRRR9KBWCchnED67CJa8is9vdJ3am2HmA1N",
  "key13": "2HDtdTNuHShsRxGgnfvujikbjUsD2uCt9ExEDGaAGa8fJ6HSEDQSZVMMUbQ53FfwnFYMJg3VbB8Q5CgNMrXE7RkG",
  "key14": "hNrtmTz2XVNw5KH7uaQgeW3XfDqMu4gXd16mPQtwBHrmTV5Py1WQ2J3Avc81YYQ8Re1U9njMY1XRK2vqqVdCrWg",
  "key15": "5TSjGWKyPviLaz8LoSjBnMh8N5RFbCGGjM9dFauggm5414rGLkmwkwmobh9r8YT7Hd7QewHAhYMmFVFZZhNvg7kk",
  "key16": "58VKNvLk7y98dygg5jtL8gJZXNazHMrNQu3XHtEk5cWKZFxCgfr4pwK5w7gWC8x49YmuHJoDQwE1yP46oicpyovi",
  "key17": "2TovSCHLUwWMNKsgpSzQHjpiHgxiFVJTQTTkWHV3a42WzoghiPYZ1PYfqi85HbuSC8KGBxbZCaT1cey1Dps9aciB",
  "key18": "4k7ckr996pr8mAfGkBAUXhmzQ1WZ4ik7M6N7hzYZLWCvk7dk8NkBkykDRx8vv9yXzy96dp6V9rakebSFUuN5NzkY",
  "key19": "64yPdd9smaFQPrYdFFufHm73EwskK4W6cDVDRzHZjRm72eoUfAkjC62N5ZAEvpkVtR32SpzRCTWXLooWgBCiiKAi",
  "key20": "4UAWEHQi1YNMQ9rXDK3XCki7FTm2kxxuMmCJjSKqgKhRvr2nursGBHMrao4Uv2yjooUK15XVtuHPwprCJN3KZeaR",
  "key21": "2VaVN7cHaotTztWibhW88R8hcXndNupu3yU6cr8q86pzTgcHGnYv98HEuT1xiDtiVY6ryMzdWd9qJfuZLDbiMLbC",
  "key22": "5qUATUJB24AnbmLSGibmpx92oad7MPCuALdJ1BE9EkvaueE9Gb65BTzMt3QeNwPNJ8hZkyxFgjzicAwFyG6U64vt",
  "key23": "PAzCmJfN6W7XAFpex1HHSBDShA8THNhBKtWdzLodWn9RqH5kNZ9uFwDXfxHuV85iGPqaQT9EiGJBBgirkXQMfbf",
  "key24": "gKn5WDgZCxUcJXciCp2uva4zeZvoLVtrKA6Aqty9JWrRQS3JkRAeRML2fUP8kQudPZdM5ZhgH3iD9fApYP3zzff",
  "key25": "2tnpFCEgURoxeVfiYJFMgaKyfJVb9ed1PdUfZF5BjszNMmwEEjLxck71zFu4Df8QmuMeM53NcRnyXCsmHYeiiDq6",
  "key26": "2kK8CHUtvmBGkbeU7NaaBU5qtB3iKdou1x5Y8pm3eUrrLehGs491FGbXvuxdzc9Lv6ZVhgXVE67ZhJjB2HJ1uCHp",
  "key27": "3Lgru9WVgvaA92DAaQFu5U3k3G5r2BK6eH8Hnq5hTbeCbbocUsadTRQECcc1c6qD6ytWFHzr766eV6qcZ96c6mdf",
  "key28": "rhSJpZZmdGYh6UVS48GxNb4s49Z4q45n6kNDwegQY3gnSAjBZ5P1tu3eyrP78nQzgR7pXwokvPUMHt2U8rpk5VG",
  "key29": "4KjkSigphsvHST9od4aZepDQUsSLa2ndrLgbHS4st8kua3h3QnSNjzVKrZzXXNb6FB39REHL8VwF9oYMGAA5aSRP",
  "key30": "T1mrt6LkSjGqnJF4Vd2vLxC5k5CQrffKxDdNaJZYqcxHXF22iQagm34UjiVKWjmkNewYaAccAc4N15i8VKzNQzw",
  "key31": "3unwGLCCDkdW6trRmbN4hBmM5BtVkvwfUpY9APW7wBiM3kWHdjzazLPLKdko71a6EvGwqfKDfwx93osoWtXXg9dq",
  "key32": "3fS6MyWdbt3XbLLuZDoU7LapT8PMwhK32FwxfY4aF3r38dBsQbKnd62qbNqnmARUfSNMTPgYHkjvvjSVXTfYbSj2",
  "key33": "5X8AxWAixsMaot7ZiSw2AGeBoUz41VbPBnVWfrpXETyjAtCWox4PtKUc3nD3HvGysAkgFBeK9B9Fzyu5uCa4eBg2",
  "key34": "3EyCJNcAvPdv5yYbYWC9m13TS3N1nG61jjJzufbGRw9QLssf4SFT28TfWPpSYGtWXDcgGKoKLNY5K8EVHfoSApm8",
  "key35": "435FupAGhhRg7KzttiDoBhSivuAE6ztVfvmzTZWVVrYFcdhVwbUmQ4hPD9ga9X5E2ST3wqi1rK5ZGFQJCDCyNh3G",
  "key36": "3DQGrRxswUacJgJQy1oLZ1fDxQSSYFcvEnPGiVtjTJCRQVQ6gLkMqUi61d9h9nmWQPjBnkyxnCp8QD7wWXjG6ihR",
  "key37": "44PPMkQx2fEDyn8tMTgRWdo4pRCCyThiydkw2AzLWWYQiP5zpCiFCG3ipprFiV5o4j3yJ1i1zdFeGhwzigb2TNwP",
  "key38": "486J3JsyVqWB9LvKAxN5KqiwC6MGFBxxXKRTbN9btFRr6YRjBHk1oYtAdNaoWwSGa4KHWTE9m7osFaDjbqRRUmAZ",
  "key39": "3tP9U5QFtcFxN9MWR1FytoLLTD7J5W5aR13X7EhHoPmPwAPHy2H6EwpvA5qgz4rUe8odG4N39pfCBTzuidt8C8VT",
  "key40": "24KwfDFtsawXwCTVMFqTEnwcJqTfZzBZHBYWUmcYiygSm9TUQqw7JPG1sQiepuX4mqnNeyUD5qSKoLZ82tgf2NWg",
  "key41": "4xt62fkEQ1FhxVXhXmtKHoCeeKX7nZFaDNZWavG7fkT1izeVje1ctCT2xQc2a9s9ZJrcdaFr2LtgHiEzJHT4CjB5",
  "key42": "DuHyNHeQjjczW4D7JMoM4hKH9VamNQw9nm7KywCs5GnPaJW2GVJpT1c37trJzp4o8T6L9WrvC1iaNVf9rvd3Ybg"
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
