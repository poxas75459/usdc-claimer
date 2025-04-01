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
    "3T6HQNtZMaMF4QkvHoEz16tUBmhS64kqHgk1XZVDC7mvkMFWDKLbq7ftTH3ryiQvVcKfJmacyKGNbkz35GzdYNTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Eb6VGzHwCtamxq2Pn9JwuRGCxtqnF576BDsQteqzF2Pk14CFy8FhYBYWTJgfzPWU7aRNv2VCr8kJGVCXDiG9xrV",
  "key1": "5c2PsiusG8WTDgzbfLhni9Z3T1cqcfkDUZ9LTTWx87yafNb788xVZRdDTF3twrUvzMTtnrrMPgyHFaM51Br1avBE",
  "key2": "22eCG2ZjjobcwWJ3jyMBDBzU52XgYdvAPViqpy6G4hsGey35SU9E9zX8zjee1pLspVfpiuYcBHCCESu3yTzYBQqX",
  "key3": "3x2tEoupTxxdj47rR5ThNAs4eAYg8mKfXEM2W4GdV1ZYvShiGGLbX4SEVSRrcJyc4yXq1HTdvV4TWVuUPDLuwRtn",
  "key4": "3xkYqo8ojMuboNqA27g37CFLvnfH4Lt6LeJBhEhzaLsUHjvoD7CNjmBAyohsg1sbVYxbUMRxXf4UxK7LsYA6YM39",
  "key5": "2AybN5AsgTKYSmV5GoXMNc97BuJ5LTKAEAj61gxtoKdwyKRGLkdFqofxhV3aW9F3EFDZ7mgN8iA4EZrCDanybS73",
  "key6": "3umB6YMiBd4N7RNmqHTniAW2fT1VUAueefsVJG33mzifLREB2YScN29aisaiEerUew6dJi1isUWgxBGHwXVzgpA5",
  "key7": "2Md1USb3wBs5LkApiX8kFLLqpbLF4JVCQvjRX2fhZtJkXzc7ED4nv65qz5q7YNkiGygR2jkvutT9xdZh5Dc5Ucw1",
  "key8": "2RrMx2P1BDF2pKWTXW8StJr7okw31LSKKYutJ2BXtexp2uQMsmNWNe3iBytqxyoRYmvGVBq9fEZYFXsPePrNZpLt",
  "key9": "Zeste6Eu3uZcorH3UK6hssVCwK8PfZc41Kcwwb4b9tAAxLJRU4Qk6cTWz1fzBEme8EvHvwEQz1cvDP2wXmxsWkf",
  "key10": "3kNJ6DBKNF5TMC33JB2jESqjga5YRdxnQqE4CcqQYzAFpJdFK3R7FupHgXufWC4BMDw9GwGA5zF9MeGL43Mt8wRY",
  "key11": "2wXzfewVxwZ8kdfZfNBatNGiNnUZuyq3ZccQ8dhj7KEn36iyFM7JMWVUkiw7UxsTGSGRMz2cYD5BTe4ypVWJBkwy",
  "key12": "4WAuiGwmbU7DRqMJutz8jt2jckRCwvEaxmeutYSAhjQyunBZimGhbkoR4kQ8A9MrCMocciprUBhzNXrS461ye3jp",
  "key13": "51dMufRNKcvT5TJy59dw13hsbVdkVcg9H7fJFnuUbrxaRKiHayBE5qDb3nSAdNCY2gFwZGfX3ABJw2ZNHYBj6Ptb",
  "key14": "24fuacFzYGmxVpQX2EzTTnAtLfB2LaL1YqNr84jtcDH3LCaVMnTM51EdSy3GcwTdeALbqyxZhbczqKU6QU4TdaBR",
  "key15": "3xCeTeXsC5NjHDDxAx9qDKQUWGPqq2zSj2QP59PDvKcXy1K8cRWSBg7XDwkTQGdEBgA65hLGmyTNqqm1g6RukNc4",
  "key16": "o8exZrSFeMxv2QE5bDAf1mEHXpYwf7P7qdDixf6JQey1DwaQqK8qXHzLrdTTKZ1zKjwjkgtWXL21tCuaFrySqoc",
  "key17": "53UBYKi1o6AY8Z2UPpXvcxJdGiQNdZ2ZQ2QwAdfdS6dVdUBYVBvNmKKw7BZ3rDVRk7y8ssb4FVGMw1PbqxihsemV",
  "key18": "eSGBpt3Aa8BBuLkHprcNx4Bt7enznw5ytvfRAbtNzGQPwx4mgepzjxjgw6RK4Mb5aZ3LaqsZkcn1M4QnFKLBEqY",
  "key19": "dG5oKtWDWw81Dc62xgGuHwn6pQ12mu2CD9cFLRJnaaRz4FNPxidSg8umftEyXNDnJGUPDDB37Yzev1mfaJn74Vr",
  "key20": "2HwJx6kJg7KzZdSqEo7p9xhSJhbP32P5NCn93PMzapJN3HtasVnfjRzo5mchSngtSyhSCUhZrcEJAxVFjw2RpAYe",
  "key21": "4A2y2feVMfprWJLEtpjUyDX3BxegJTCFkBH6CxKbgZqv6sUH7YGxHcLAhjKg8vjPw77jVr2KkqpRYumNby2pUr4K",
  "key22": "uFcmUkoXvPVikpspdZZ3HimuoUatQz2BVe3uqaykyYYaBQg3y8DfutsqTbcYw59knzgGUYAiH3kB3LizgVEkbkw",
  "key23": "3Tvc9Axipz4bHxakVrGJwcqUp1D65nDCStn74DjeLTmLtQEjNz62LBWkwmXR7kwTHwuAQKiaR1TmkSdma3PR6EpT",
  "key24": "4aByBxhj8qAXQ233hWvF8HwRc8LVjZkgVABN3PjsJhGCAaMvLXTX7a9JdWVLRAWYbCCNGrmd5Mxku77NN3WuXG4g",
  "key25": "5dFUQDzCMuEomPH7CSWzNbgzch4bKwkCvqMyN7cUQUWS5p2UbV3d7MgjnvJepoy8oQsx3LDYPj8WVp9ALxnPBSw4",
  "key26": "3hUw75Cg5Vpvb1TDwXogoZr1J1doFD27QReQDowX4M27ijkyz4Q8XEJusELKT6rgVVEeNg4FYWberdSBq7FDMYxo",
  "key27": "4FrGCojDsGGPraPtq5UQibNyqvzErbFY1SbXKHXAsCt7d8W7DEWihgKt4VZEuKqj2y77mJCbjcrZv4RTjyr1QJbn",
  "key28": "5EBBjCP3HmPEXsLPHudKBY2koyiprUMmBjnzhRc67CK6yxmaMTARHB4nf7v6N83dddrjfGo8XYSd7Me9Laky4rY",
  "key29": "5jSxQwD45Ku4zjLNKNZauzp9WaLdo1T6HTrUy3gd7rKZm1Nj7mxV58xDDBUK1DR1LXr23diBpU31p8uHpCiyawYv",
  "key30": "2izphq8tpeWddu71bK5k279izJCRzGcKZo8qLoB7j7Qpk5hUmfNhs1BTxqpzfwEUpJaUNvVS2M1pcsvAdwL5FzxX",
  "key31": "8SeuVK1wQzv1a97hi7wD67fEDBLr66rDTAPad5VorjPVcSDLa96mRWnZ4VYfmxJLAehHBfzqUHvRi3NTVg3oq4p",
  "key32": "4edhCuBCX9zuG1VXWmpTR4NHoCQ8fpBqX9DRpBNhxEpHQAZSncESzurmrZd7VHK9jvEGyoWGN5AHD4zJpTTJBphs",
  "key33": "5ZH4Gp1ovxnKeJDmjeotsRQTSW91QYSaSZao9d4iHdiAe8BJpptjMCtztiyEmGtTdSKsvF9DhrN9C1LshCTzX5yD",
  "key34": "4NwVd2N7Y7idBzhTZxEmodMe1jyACgQEEoU61m6EK1YXtZyX5B2Je44vQiSF7jPag43RDqwsD2njvC1SbcJxjeAQ",
  "key35": "2VxTREnFUB6fg2n7FCLqXiNPLpsZN5ywRm7q8Bga7NsFdyR5A6WkQpFKkkc1GUg1vHRHG5UV7x415qrGZSpKQLp4",
  "key36": "3KBrm8URHaQsNYCT5x4AmyeTFw9D2Hj9nWhoQT6pYKBfkcdYuok11rsTRUaC7qKFdvCGpu6C6i5J6EBTK2R8BeLc",
  "key37": "2uU9SfSqNJR4mcNkoGt85RJD2NCEL5sbtTXKKdhjfsj2RNjs8CHozxZARacMVq6rdup9EHUXdKZrsvqJXBNS4JMJ",
  "key38": "2LXqr9M9pq9ZmBRaBqUmiK37jpxs3Gbb7Y1Qju3MCpVSJZUU1uyvSrcmhcQT47p1BoS1rRHxgb2JzR4EDPaR7mw8",
  "key39": "3Foui6AKDW8TE1ZKM6nDakTaADiYKVmApRf4gJP4VFxFbUUch9nndcUMfLbdFopuWXGMkmcfWF72kgJsD5ezUwbx",
  "key40": "31zuYbsVgcdG4M42XeYoZtE1GkvvjCRuEtJQAL7H1RZU3qU1qXbHqDEd7KFyuL9XvhF9VzTCV1gNtPa7cMqu6fDS",
  "key41": "3eqmSby7Lyj9QMGtFKKDy5crjtCN8u9qUdfiDuZGbjGr789Z5YRj6ZJTYqWAi3F5zWBqvNZn9dVno1yqvgRxdwLg",
  "key42": "5cNHtunWmm1T7cn5wfEM7HhEZbkLQW64jX9BK8NNezGUy8orPKkGk94a2ZNj5DVUiQVy1ZqfTM8Hpc49TY42u5JK",
  "key43": "5e8SCj3ymQRTHkknrZuppBvNGuaaJLAug1epUHswZzXHLe4QhRobCcWVuGqSpwjRYJRXDXuXmMmPDmHaAhGkT3hG",
  "key44": "5CnNezfjmvfDmCADBQ6cdqzTYbbMibrMT5g7YWgVQGB6qtHC56C8iZW8ztKAs5oJvNVV5H8Lj3XwMDFfZn182AGN",
  "key45": "4w8KaBXSbyLjQNpwhCpd3bve2CoP5nMoQGYoTu7F9d9tzBsKfQpH25d9PNLpQgqsftrgnXFDjFNTYXm5cRfpuKfK"
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
