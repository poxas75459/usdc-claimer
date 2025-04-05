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
    "2eEsSQnyahveRvr6YehvFHS7vKBzNiCQK12HftmbN5uBrMmRKXFx12pznnfkSSYvxGFj3FMnAUhTn1BxzAWfYgY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ywqtKEWLUpCoWsHa7ZVQtvhsUcpP6UdLxiQwHgDB3sfFgRBXDrKFdcbKFD6ZHEVNdHDaLZFSD131JsgRc5CzueP",
  "key1": "9bczTr1Zf1Nw2gL2ccPp8uAfvcA2Bw9dShfd3WYS2YajXCU9a5pbAwht3MgLxP7Uqxz3BVggd17eM1CCSidpBsU",
  "key2": "ujr9iQeJWm6YxGzPQtwya8ZcjqgjoAiaytVGYR6vHTjre8Xr6vKAz9XxEcfXJw7z8gWfvSVWKsSr3eLN18kGCo9",
  "key3": "fV2du8cQD3urigAJJ3FXA97a9smgaK5bX6Md1yPK4SLgyNqenpjxstQoZJSjBwNuQG8ZG5xfnC6iq3zddjDbkfd",
  "key4": "C2quPn2JeYNPkmyu8jaC2vbXhJBGvd4LKTH9999NmASHeywJYtCR8Bv1p8UEiXPWx5Rkjgwk2QjjVfALAQWduyF",
  "key5": "3TNUtiFkTgVe5V4utCNRGBTMXRYhXYssaWXRWbkhvVZJtBfJAAoP5aYDS3eutUPX8AQkPYmEmZPbW8zJYdFAMsLX",
  "key6": "2nx4cikuhQ6cgbHmjpMPHpM7WzoFjKpJDENiGyykUi5EZEvaFpswn8k2N3EqaMFjtX8mwG1wyEgApUFgsNrpkJXj",
  "key7": "qn7aDp44cgQxFNZve8Wu56ratp4VtsvqbaqCQkhKqBerMhY8vCktqU6h4Gqjoa8DJbQgJifJpHtMjyuds1q19jA",
  "key8": "3HFZqzmv5T8iQbrjJLikcUa1kgLfY4dofRMvbNunPpQKqy33GBdb9g7Me2FgkJQ9rD4J18jk7E9qDS4C4mndfFDg",
  "key9": "59FBDXmcfzzHx3yVMYjQ92MKwwiihnNQRz9aLqvLq68W63iEEjPJeGnohmVzdNhQjV8T2oxjNKk3Uq7Ws2zQiqKU",
  "key10": "5aiEGCSqgYbHJMir4cendtfUuwz8dPgdf6HJxPUuSu9GYAmHC5wZWXWxKTzeBY2r8uUVSF9ZDCcm5Y7ZtbA9ALr2",
  "key11": "5upDcEfxPTdfCX7BJonsS5ZQc3gm4mKDPr9mphh8RT1u5LQrfSBXHuqkeS8kGP5KNHiWQPMZCtrrh4A9XZNJSdnn",
  "key12": "3DEywcUbAsLoLokmEZFbb25RH4FTWknmy7AcbZx7rLpAZg641WuTeM91AxRmu4ankdyNbtPxH2wRXCmKXsWLFZCx",
  "key13": "4BYspF2tCc7xZvBDDXPQbeKMV6me8dWFx9EuQRdBzry3kEH1q51zXV9dh7KfULAjPm1Ep4XKiVP9hqJYvmYBY5qx",
  "key14": "4wBc6k16AyQpSjNK7wM8x25bxgao38KwhHiL6vRnKRZ1CQm63GhPjTvdxhPAKAU6iCtN3qZijVSaojxDG1iNUkq3",
  "key15": "2BqpsQSybUBLi4P9VhobnMpFKf7MY6t5Wbtv18ehBRUTJ3V4yNivGJzJPqPc5XrCMgqzJvTeRh7VHjR2KYUjqkqY",
  "key16": "s77stbFgwaHjDXQZYoYgz1ef7uqtnM6QermpGnoQ2wbgnBhAeiFEZmjdkjdeRqNZmU1DsTHVuBVWqrZuMADfdfu",
  "key17": "3WwfFFm6oAS5GDK2TKqo5xeb9Dj5CzeWPRHXtdAuS7wAAdWimMvMUNGFcjy3NvMMikxchm64L29cbYrMoZapjCZC",
  "key18": "3jytWZ1yVZutJ6vi8MseGXdFxeBfvwy3xGM5UnZ56pqrojarXWpBr6ufZKtTjW2XnsiZDJR2GFbeXPtKHDKFNv8K",
  "key19": "CMSiD6zyZ6iA1yHGzKN9eGZeHXhsNqs5jdwmxUQ5shmyvmoqiPsbubDSa9ebKdy2sXGMepzpuoFx781kvEUgPeW",
  "key20": "2CCjAy1zy2Ngr18GxMrRpyqytkxCw32ZgCQ16txPdL2hCPivNHC1C1rgKGNbkTWbFvz8XSTrWxgRBv7xfqJ5amko",
  "key21": "4kiKsxdYrp8NP7pHqqbAQFDfqfDUyoPxCbMWf8NspqMZJBbDQnLB5TAofnVa8NFbFSUMszNoz9epKToCMXh4jccg",
  "key22": "5bogtoqQp7FXifQGQ8jbYkGwPDr2uxSYaYnZH39JW6qg58XKTkn5MfEui6FvMYXVKdRV9Em1wdC5HkT5NtJwmEbH",
  "key23": "2dZbPKk8fT8QLMJ5PNGvD9EZQWmzL2foDdZStX1GwLBUuDyLQB7iNRJiy5xwXdZ6mooJPy3Z7bRT9P4ohMJAZZgH",
  "key24": "3JujKxbjDZYsbSTBBtkFjagiyQ2G3xdjEUz57Ws9kUkFeEnWvGuUFhE6Z1j71ukRspva3JYyr7sL5N78JPNoPLjB",
  "key25": "q95sg9FdD46wVTboebeqAvRgXG38pa513YscygzpV33oRiDb1eH9vToKspSgnAEpx7n5a1MaiPFU2oVqsbtkXFK",
  "key26": "3LMmrB8jH5XPiSBSQJHaBJux9iRFoX39Equ7yMxWozZQUPJ39Jk3RZx8c1L9bLjM72N3ydzNbCoZzSfNxr4iJeVv",
  "key27": "27vqHgJnksFCiS6svALSXMGbWpjbVYd9KpxzGdok8RiE8BpgW9JbfnZ49RAdG6LC5nwNuKk9CggSd1cmhvpJG5hi",
  "key28": "5UncwARcRNnLwP42MNSeCPS5tjyUD2XY873k37ny6zAF6k1ibemxVS7ajftFckkoyzGBybTghhPf5BUAKJm14uoa",
  "key29": "4DvP6BiEr9euQecSsDCqtHUWNbrLzTa2nXM8RMZs67HoL7Z7X2TX6xJXqcRdSkZyDK4wvzsdSjEXd5794kQf373C",
  "key30": "5QdJwC2oUsVJ7kiqh6fToQY2PSVRih5evUTHFpJwAf9Gsr8ahbEJghQMT3qgCQjavthKhrV62B6rWZneBkbByisK",
  "key31": "3XQLCuiAf7WzyiwYDptuFgm8EXbfh4DqKfKUX78zyJY2qxzan9cBS1tH7MJYD4A9XAQmZxYVMkHqiFG7svn8duM4",
  "key32": "3RWnrQ2vcLpztXH2471dUdBJ8zHvnPdXY84BMn1UBwCFsPMRNGU3TvNCkiSnsfDwx9DhsUjywG44Jh4XtDbpFN9N",
  "key33": "4zg7DphtxPejsPuGjjtRQzG8wyXK3L2VQd12nHZ9HoJtRAq2VJX1H7jkTxNuq6KNW9KXoYS9y8qAYuQDStUyaBfv",
  "key34": "2QyrxXDu9bD1pmjGFN85FUGB7vcGegS4cn2BxUMkBaXbMyicUhYfxhkrCPcqvqGuf33QTRyNYdZkdiWArfd84vSc",
  "key35": "5WXEAmr4xisbAzxWnstc4NCSeRpQ43qTVZxcEMsr4qpfeLf8DsBpH17R1rMoYsPAi4EyG1d1u4JKGwgMJrfbECih",
  "key36": "4uQbYRazsiisZXcEbFL7CqwGp5bxrwAz3pwwwGQocrNbquZkCaP1AaGgRu7kAomKsZMgvv8GcKZxYx6BW6xwBuST",
  "key37": "kBJqLwwd69vqKbFniGGYUWXiRCChRrAa5yZZFkMCUcMZMB3RwghCa5VJW8zNm3dy8EeR3S12hZVfXhj2BTmwSHC",
  "key38": "3JkmVH3GNvnUGfkjrBVeTdSvggEuP3YxPka6Mht5Js5CUueJvPQjpB8dnoqjv8ki2zyLPUWzV8wrAGkzQRZg7n6S",
  "key39": "2JYdAhEyUEg3o2QTJ3dBWm6Rw1Ub687xZnooVmiwYXjo8nBjRh4zgTg3BFRUAqN9wdMgfGZDdmJHgXEnGcD1u9Dt"
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
