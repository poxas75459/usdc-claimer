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
    "3aeNRLDYk8w6TXnd4ZURPn5Y3iY6BvEGf6dcsKjxfjH1a2CGwkQLp2LNg2obR7ZMSYDPYZCSytAADjV9KZkN6c39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BBVy6hNYFdQE5hqqRwUpg2qsZfJ5a6HSgAAf4aNPJa3eEMGFoZCFHFgwHFHc3NrLcFUN1Pep7wiz1d8fpWYwLUi",
  "key1": "3owfq2V6ycpFnna478nv7mVLnS56xrMPmVDQwSwLgVbJPhF2syQ5GYP3KYUt9doUA9zCM53B9tuwUooJrKdYFtt",
  "key2": "2nDdQBzKPowJ2iM6VfaYgMzqEhuzLnFKASe3Tt8v7gyLL945t1vEoj7DnNDeihQberY68HjiEnKbDyrbwLPjUJ43",
  "key3": "2ubPvT4o8eQs7kpKZBHWnegHmutCVE4CeusZYUceqBWU9khEAnsC8RzTXHt1raFLWX5FPPpukQSUcchGVC2acxZZ",
  "key4": "7xWtGqrHmXqFLso5QBJMmoLMCKWaChv4iDJyctmEqgGP4KAKntJavV7wYj4gAjendPZYLcFPMaMbag5ctFBi5zh",
  "key5": "62SLm3Ys6zskK2HrXWgFrVkcAntZ5aXrCamVzBDPodcVU1eGrBzShJqtv9VQZuyagdhqCf4SeRbnAHUUcnm4QWuP",
  "key6": "os7i1L2F3ahdReeZyKWRQmZoYTXHWWgSFVMU5QjNJiwDfy4pAM1Usq9ebUbTYj4g7LmJS7NiZ7mD3HdSHSvhD9H",
  "key7": "61QeGetZf1kNZjzqjtN1T2DNtG3SiWswxX9u1zPHEbkoNwRn1BdjDDQh5EPiEuVpDVv8xDxtRaXGwivnRVcsrAqQ",
  "key8": "58AYV8PqxR8fi6BHy3MRwGSYPmFzfpBhmQatBgmoqC5JhbSRP5DnTPWJRz4TUu8f8sFeotRtiB3tnSVzedwYeMTN",
  "key9": "2jcekCpiUpzYYPA1Ddwek1xkr4oAFxueAUfb7pEsxeWKDDyt62t2rYE29JkkjMjPmuUM8iCxvMyAF9ZPs5QumTWt",
  "key10": "56RkjLdcPSJaToagconsPwNeYkwHsCzuRCBdsS2BJr6KzxiEjQeUfV8GkSpGGRuGSX7YYwKAWiVy3j4LBpzA8se9",
  "key11": "iZX9CujvSvbDq9FWZQQyfhmccmeUNu2PM5LEmwAg4B8eyXjTL7b6Fcw6Jn21QTY73Xyo1KQyL3ox4ooyieS5cGj",
  "key12": "46RXAbzUMAyG7DCRe9BdbiHr2F1rNFiePMkumMGy9ax5SqssbWd4ndC1qtSJgEbB6aq3MdD1FusdqLWHzCGvYYAM",
  "key13": "rfYKXfch8WTSr6B6o8hRhUK5aHSBCs8A4CqUyu4kPWFPVaCq2Ux5ofonRXBbJYm9EpPvbLsHNhEJx4RGzJUyQfJ",
  "key14": "5SUWJ63X5QuXTeG1C4YyVECSxmdZeGLp4UpRPw2FsGXwU3G4Miwc1k1xKSQ1k2b89NMu82MgoaCEYiKwnkGd5eMY",
  "key15": "4nCFVdVpbY1gnGjoSNUXEFhfo4Dwj1o5bwkZN3BbTsWQkjn4u3VzSYggWVicaSWvW4T4AxABA22NmD3ydQ3RwFGG",
  "key16": "3Gk3wMyBW6nKBscsGu9fWdy78XdDTt9crRfVbPN3a163ohv2XBfBY7rzXPmSbzB7Bi5fxGrCopX4XLwJPzPMrCAn",
  "key17": "67U1pmQHW6VcfpDocexQqGKUhwwuWU84k45tZCiy51CGGroKyDyvxrvYqc7fZRR6kJwXJCM8FAPMdnASfad7hL6K",
  "key18": "5qg7vrowvawWvAiCi7i7htWV3J1LfxkG9tYGdMPW9obRTRBRRkU7cocJf8GA7TXy7FKcCL4PERdig2MWzrfpk76k",
  "key19": "pAK6DkfPykhxVSRttQKW9dsfajk7orxprSVqxmCn5PnSM5KqCJAd7pCxnmPT3in83UNW7s1XmMDXXsDLqtY6gEW",
  "key20": "2pznTs7L13UPfdutXbe2635cWQjkDr8wXDovdng4A3gt5TfN5eYWY5GrZyYrSnCSraABZqtETimsbS4MkM69LFs",
  "key21": "49XcEz2aEPj47xRA5PVbx75uq94UJLTJcbDrpoCe91R1Gwx8ekmfBAcXuEwVyHGc6C2akSeZXLEroYgNW4px6sf3",
  "key22": "MiP1ty3SejrzmwFFkaQ13ggnAnVXh5HjbjGDgmHXi4Crfv2zjegZMyAP5g2P5x8wdBA6qjpcLPk1HnsUW1mzG1Y",
  "key23": "2HBi4rJycZaXrdHaTC5VDxZ8s9QBvX9MvgkU4LnEyPvCtYzxgFDj5FFBZFzjVStMbravBxdPNqFNQPVsPfs7EEnR",
  "key24": "4BaR4cQ4Gzkdp9GPV41hNnteWTH2NKU4mGdKbVPCt5cb1bWu7q9r4zBfoPmxP2ZNdU3ffPHQxUkApqQHsH2jXgfW",
  "key25": "iJ3uhzLx7wP1tNSE1sbJ8tTRgNcqfese6XGWCw3xSdQUdw6EqvhZhRmWvkt7g8j6jPKoe51G31DpUf8LNiZexHH",
  "key26": "dKwwtHjt98Q8NWU4x8SppfW8bW9vuBaApkYZT3zKrvrE1EW9in9ttAWvQvdS7fJ7LgpbQPRVTSXUj6haaVjLWCE",
  "key27": "b9qhySBL6rGvYm9LDBFbW7CrbvgkMAoaKQFyaueGpzNSF8x5bJJs9dBAvN9xenUQLWfijJ3nGWTGSyV1apa6uK9",
  "key28": "2sxw5nQp9vFUAWudr29xZM68oMFbQS9e5qY6ZLNxyj62LNGeCgKcbqQKUmGp7j47ZdibA3vQy8S8ZJgjpqQDmf12",
  "key29": "8f1BL5YDoMwKSHmqimJN49wuignAQaYtmxFbU4Wf2Avae6cMgPu9AKsCc2idCVeL4Sz9mmX4Edtr5vGj3KjS1sV",
  "key30": "4JsJ7LXJVJPfJyQtowqqRTFQnJ7SjiWfdHwaK7cmknETHca2Gpm9SPEkr65mQ9AvGSd5qVZuWQjsNBvE5gJcMU7X",
  "key31": "4ppFVJVoLmr9AhU5VU4XqfoB5ccUTVTbMRHpLFaGAHAhT5sNmwcduhsm1BvDcLGHZ17Uc2ppbRVFD4ndsrs2TDqC",
  "key32": "64LpTKiFokgVmJCqLEh38n725Zz2K6qHq1RcBsk6uPvJGZuNgHtSmyrFu1wTXCR8ihDWHHKeSvpHWYDZb9z8k222",
  "key33": "46gjQa9RTtBEbWXfzCo6gMEYJbiJWscB6FBybW9AkqV6pyqXAKkBw2JPKrAbv66tw9hm5FyTYAnV6ShxLzBzWUqy",
  "key34": "5tV4GtrQ9qNK2wqt98HUqUuPYBq9KcWKWzcN1F9YycWVZZY9cV21AWwBi1ieLbBy3whebFRSzQLQxSFJnhwkdn3y",
  "key35": "5VLQ8CgKEHJim93U9rfEjUQR3qEYZQYDGtqe9ToUGRxp8VAtpK6Z6p5TA2udmwYmYNxBjnoom6RQcDhrfCTGqmtd",
  "key36": "5ySFBXiWEJbTTPepHeSVmdNLdknWWpgbD6TfiiKwgXQE7ZTrRbCuRCPyU97GCGdGWhEuq3X6qjDJjDwqkoYF6ZN6",
  "key37": "526BXmBQoqptsbkpvN5n9RyFUPLD7UpoZjR7jg6YmZUGbQLcqCaJZtNHvbf4fMJEEYgw5xr4rzZ5CpxYEXp5nMYq",
  "key38": "5fdJjbKbR2EsYVFNd5daj6yDPoE5mwBS1BjkKVipik3xD3C94G4kTnjQ5e6FPSx8gJGCVnYWi91CAFZULxQyQwUN",
  "key39": "5wz4vfDEUayb5QUDsxhLbPVNJkphuB2tKPg5LEuaVHWXgbskTWtsNRvQ8FZveW2s5pP1bhqcTSp1HV72ojwNLWuG",
  "key40": "LDpyUr3KkTvezryYGmaoQqrxmtVfrwnvmhckt7MwfwqT9ahHfGgWMYZqT7RG6M1J66vX7Kzh3p4yVcH7HXCUcCz",
  "key41": "NtWz6wKchMSJZsYpWnxKdPGxzCU3nqfKN51F9yJJSZvoyNvwYSrZoVJVt6B6mttKgxtUJ15H2D1bff9xTYo3jue",
  "key42": "2VAvFnTSwJp5wW7tCGHAiBi67iT6wFoWeKJ8RjAx11HvdAFGRq7btAoNo4QhgXCrGkYr92r2XxfU21QZNPDitVim",
  "key43": "2yN35B1i1hneHHWJd8ah9PkfyAv99hZ8nwVyQnwsj3bvSuwALPV997DHxhrPCse8CmpynCb7RG8aKLTPryxtuZpR",
  "key44": "531rLUbJeV9VMed1i46jRiqPvGAaN4mczaNpCoBUSEvvxWarsZh38FdMAPCLBL2fktwvFW3nyyNVm3zsXEyyPef8",
  "key45": "466UjK6FtNu1u9pxAX6nWwoMoRKpG5HY9BTTmUA4LkktYyu4jd4MxbYFUZh4RzuKt8UoPTG55LsG2fLb9sTeQrzq",
  "key46": "3QrNFRGpdejVpThB5p7pG9vET8acNGht61EkVaeCme4qDdpubhNSagFddaUAorPMoyqvxb5JBcka7qFJP3sEKEgQ"
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
