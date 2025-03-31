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
    "5jpK6AAMmj2Rid8Jtq36MvhEMjpbvzB6jG5QwAFGPN9DKJ3FQjAM6wAMznKg9RXZKf2vnj4wSDNUQpWYVwAoAjJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ajBPJopCg4h1mLd9hTJue11JsfzFdmP5YL29Jr7ASqaw5H6bMhLxaa5xheDTV11eQVp5XDiT8WoUaYQdTXknFdN",
  "key1": "2N1keFCuHDFjYAfogLEd1MP5upu7cnKyM2Y8A4G25C1TLsNp1gFwiXgUzQ3xKyxDHvTBDD2tzAD62Lse9AVk28kL",
  "key2": "4WnreGphe6ConugfuzP5Uerk6asAsVs7HzwgQ8t62thiqKv6mBcpQfhXqGSuLooxkNWQgDLCVjmGVxqxGbsKL3aq",
  "key3": "3XHsQPEnwgrsfGEGYdexpsm6CFCQzxD4FKYyq8amwq1tPv57ti8Xbr8Pb5hVzkcScSPkLrGHzwKaFwFYwaCGfoHD",
  "key4": "CVfttjB3hJxaxyFFoEMjs81d8hYDxE9mtnRcr51bMgyUrA6rWXhSUxDhStd9NoNb8YszUxkTDLE7LUngHhp8J95",
  "key5": "4FsTLtE7psSEFSHXNKawULmB3Guap5Ek531ZAryiN7Zrcagckq5Myo3hhjwWvZy1tZaKDtSLJ3xg6H45Fz4EQKUS",
  "key6": "hwWwVeZXmUJrWNzxTjcKnMZVtnTbTsf8bpPsNnDqs4mc8TiCdhH1XYRLyA2QSgpwXBYhHbdUkVqJvEN6nPJhvC3",
  "key7": "34nejYnCSiigLpqpCygJSaNSDyNCTBbBBN4aRESGCVZRNRNszcgpPu8yHiQCzY6mYM9gxwcWm85UST1YdFUFQYLE",
  "key8": "HgnHz1Ru38d8WiQ12w67EBssrVFk1EJF4vaDfk4KWvXBimKWf9xk8hhxG27BmHFjMWpnZzxL3MAuPvBzcNY1YwP",
  "key9": "3e4d8FzKXyjFBxWuBvFB1eRB1bepTDcfv1QE4h1Gav1ZZnB4WEEQiCrj5fRhNfnwdvHuhnrnN176SUK5exGQ9HF9",
  "key10": "5e4eZSNKo9bCf8QkbEMS6jrg4kUeFmcQ9XErbJXvBbwuSZtTVKRLCMgjKcVkvjLAxFpB2pnyG8CEtzT4X45Xzo82",
  "key11": "2GZXvUwfGmRTmXabgsUjK3VUGP79fwaYBpATjRQyKwoAF2td2XwbYvkjG1nTjtQx7tVvoGPWTUHM1ny4nHt8Dke1",
  "key12": "3TsjUH2pwL458Ewi9sGdravqJtHfWVEp3tzgJHdQPL7rJNQiNiJtYSV6nQJgLCB6Xwbmuj2DZGNvvvUqJYbUmesn",
  "key13": "2yDfEafSgSMutVj4vbnr95KSXNcLP5wwaivumT4QssByKEFTkDqqfqAAqRyQTmDdSfK48VFeGVX4AopooLHVdUAW",
  "key14": "4tLGzRvXriFdBsfdCLrP7cXCzwXZiBUf3x1PH9fNt9vmiTh4JNf4Y63yNfWNyVueMaLrgvs7J8vL8WNL1pBkrJ1v",
  "key15": "2utSy7VbTrvdSPPX7Wdq84MBj9taZzFyxR6ztp1m4WG6LcW4Tf5CMKxfmfAKcnuGPHb8jPfZ1aajcXqc33XUXz6h",
  "key16": "r122ADneLztynHbCJZCVHtSJ4qJ7AnEdfTBWocmixwWwv8c7F2uqFhkfGTTg6pGPEyRtuNbn3DLwFKkKaksiVxn",
  "key17": "64DjTDfhgMcVE6RRvAAG8dxXprvzCUqNKTppVSBszWVT9bk58RMu3sREnrjZrsHSu2SDzRUdjeJ3ZG1Jsu5mgEt6",
  "key18": "5FxVFBk6N8JuYryiXFwDh18nRn6PbgdqGi6NLvYRqKLbq2SrZn8jQ4VqinckzfohxyDzS1XEA4GH59cmASfHpMvH",
  "key19": "2TytBsXsCnftwJDkVwSDwQqKztL4zET1Wj1DBikuh7adFhX35gWScc8Mhb4HmdrNWkkt59oGUyiy9uN9bfcnoKY1",
  "key20": "5SX1rQJNd7hEJRxsWvZC1XRDKAXbwkHbEeoUAmMnmhi4tMkSCRL3vTQ9pAX1Ns4yynxq7ZVujLC47zSFaYgiJtDB",
  "key21": "5hC4BorpkrajVK6rXwrfa4HepRgARXxAyToL1hWUaLcZs7BNsB65h5P7RSRKe8uFUgjEsMFL8Tq3Ld6mDKF84NY5",
  "key22": "2HfvVbkrio2BS3cnUQAYk2wqzK6ZY8i98UpFGoATH2VNTT4sATPjNteFs9eZXAwdKFLCjXwfFB6ArkRTtNz2hHX",
  "key23": "RwHBPtardvBbmXxr3ZUef2vigyY2v7LNqt5mfycov5PjimAjwZrT8UqwHbSMXxXJvANQBAWNQvwniFoD68pf6Xf",
  "key24": "NEMXaW5KF4j4Xw5CANPjP87P3ZE3rdiNiwsAN7cjKdBYUNRzoCErisNWusFBnbodjkmv8LgyW7v1SxHmoJwkuBY",
  "key25": "2ZsKq5Mh1xsPLLuoR8YcH477PU7hLRcNyqiYK1JGYwm9xyXxpdXZV3Qw7Wz13i61QHZqKpHagE4Uyc4gugKJET5C",
  "key26": "3cXuRiLzyUXU46BWvETqPUPY5rMVnv4fkKJqkAUHB37MfWwbBj9dtCKRftDj49U3wye4E3AA9tZ5G6Mj2JFRbsag",
  "key27": "2nNsvXtWC7StbnXtcUH1nJPi7gncbGQUSstXiRwAUCwA84V5bn2G1i6Z6F8WW6bP31aafUEUuNpeCgSX4PJ5rmXL",
  "key28": "nTcvxssFiCPrjWzgCyp7oXVQDRhAsGLPHfB3xT2oRAkkFTReBE7JorY6LG1oYaF9k7CuVMRajUHP3QuKwT5ket4",
  "key29": "2hjf6j28tpxcdh3kjZGEdrzrZqBfgjnVFx61p3airEbcQ76wMFsyAyqJjVDpYkNGTkrxxxdGWcJd6SAaeCrVQM7v",
  "key30": "2jutx7z2yA428YiAw6wieMEWbvD54MhCfXxEGdWRpnF17xZR5FiMy8ENXfGg6VCmYs9QdSdBCS3a5wY6bvPyaQUB",
  "key31": "4MJesikSWZUuP7zAVUqf5tAZ9gf6PAqG58nmbYK8Edj6Cr6yR9mymv5MX1otnRLPuoJ8DRnsryWZcQz5pHoUwX4v",
  "key32": "YRJgCFafmD1WTPJny93Dsav14vfpiBxbWpUbFmucnmB2nn7x8wE3QgDusaDwqZ9WZYFL75jiJvF6SHs4wN1Uivz",
  "key33": "3vC9ZWD61xVtaSXwjxpodqYnQvign5RnderExd96gEW2pTTpuRm9RD4anJJrTb2BY8nMADJ3tuusvKBDCVeeZovQ",
  "key34": "4aD799rDAQeSANfFRYrHLuPnroFYiFmmHyzVeLNFYH4rCMBnZLBJPteLPiqXxYRryTjmvxCGvakrob61QEaA8az8",
  "key35": "5n8vr1HRShbyDNQ6QJEoWJ28wFDaJPA75T8mNexecoxJxM9vgA7621X6ZEe1bp7PdC9cPkXJqQgaapp7UT8eFKGt",
  "key36": "45VD7ttR5vowX1TX5MwvB8sD8KFjbUGAbrbXCZyhXn4B5ASETTvxKrs7pHS4697tg7hfC8oPYMxVjGCsfLBJqggm",
  "key37": "5eqBE4xPoFbxXu3W2Bi7FUSA6Xzn9QaaDeGfBcJkCNnneVDbTqxmhgYdAb7vwivJBM8DGrAvdJrc2Yd7n6xj1UnY",
  "key38": "4n6u82sqrnP7HEzyTGqQoZydCnUeSuDe9QKChPtDfFP6697erGN7GkVWeTVzDRNjS6S3bubwYnfdiERa2YPmPNdN",
  "key39": "5TzvrvF3DMEjo1KAusUpk6bD2eFzBGv6HDVZFg5JGTU1aqU5Gq24vB1vWrWhGjoRGDJpyhAzDBtTqUCxecQmS2yi",
  "key40": "4HvcmfNFEVG6Lt9hw9TFFXpVA9spvHJ9EjmV47svvaW1yP7qjJJZpwmRQKTWdwKtjEVfN3YTAG1RRNjeEePS4MV4",
  "key41": "62B9yiXv1sQatCkmYyx4P6B8mnHUq5EsYqSxENAiYmSKHN6P9ZtXnmPY1TDEhu4b8ZFV5kJPVpsRt6kL3Vm2cse9",
  "key42": "XZvQmF1hmzNoAj67MVqE3o3iyC7L9xAcEwAQmA2UTZwy6hDSp7ts2SPAcKmbYVyJXmhmjbkwHDXy8D9aDSY3jau",
  "key43": "4koJTBRKUCmbJ2BF8cGMYhFu9RLyt84kEPJrBDcBaGqTDeZytkwPAHhDnzEiEAVmoK8dKvEZY8LWHfZY3LuSM3mo",
  "key44": "3tLL3gTn53KHZcrsAAmzw6dtHRWzkD8Y2bxUdMQMwkm6FpU327Ts4S7EJ8TiJ3vFuiZafY266HPz4fiDJzYmjfbF",
  "key45": "3rzSP1oQg388VaHHSz6GfNFxDa7aM1ZiAmHFw5VWDgqtEsPGnm1iQuxMJcP1TdZZutn7hNYBLNRbfZvXvY9eGzKr",
  "key46": "63oTBQsYroNMLH8dg38db9R5WGEAn9zm6yJrwdY5gTepmV3SmFuhNbmnfgdr8zhwnuX9Qxfi9kJfR5Y4a2AooAEZ",
  "key47": "3wM8mnEQwvZgwmkhLk2MnrKGB874g5LnPRfo2dknL1NcMr44DE64n7NtSAku8iRBSdvFSCzJZsroMco3Fy7zNZLR",
  "key48": "4wE2iBzy8fsQmUVL7XrmuEiKT35CTU2vR6dBWCM5VsGwrHxRceNVZfBhcTsBiEzBmUgBkGi29Swm856ie3JK8zWX"
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
