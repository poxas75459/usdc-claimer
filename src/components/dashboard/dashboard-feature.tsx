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
    "22f2i4Ms3HoNru2idF4F5HyiMwWufRncEZkkKJdTc7J7kVmbhtfrvg24cE3tw8K68EiYpeNWGQdnYsZFsbvBJAzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9EjzTs9jwVcgSpawE8HDZwEWBJ4HuJ92YjLbBn3542ePEhDVTVRbGEmbJ4LpDrL4sBg4zftBfEX7SpvqgAr7eVw",
  "key1": "34dPLjDerSRULzY24oNbpZs2GdoC3PyiSWkoyaXMNCdyEt7Uj7a3hA3A42z5dvfHDdK8drFYv5aeH2XBkpB3W6LC",
  "key2": "5HfC77Xu9uUqgq46zFqiW5yxZzsANERudushDhW1GcAghhhGwjvAE8ANsHncor99Lx2QZ5jKV4thjTRfntJGizhw",
  "key3": "icZYqBxzYgWzavsKrscX6icBLEyMQAVbCCgBadPTgYegaRUwRTRtCjeBX5nZvnFbyh2xapPmoXb92E9Xfdc2E7Y",
  "key4": "5Drdy5UzMJM2rJn5RCzJvV6MRGyHo1mikH2PDwtFftLrMw9nceWekqRFWW9xkP382sVa6V19tfoWwVH2exAHDqrF",
  "key5": "2nySvhsZb4Ne6UryUkQW7x84mkcC3y5BKL7ugSBrRFgDQ8aeh1UK2duDHbpjAs6ckpzUnT7fxnFBJkzqWoxszAmE",
  "key6": "5z9Gz1Z2fqY9Gz1ryJMEKYUPpeC1VTJV8hw1CULetGRBNAB6tv5o3pfWYmZBRWLeWbkV1vWVwr9fi4PusdkL5amm",
  "key7": "4inMjPHf2WxbT9Y4Dxw42tuVzgK2kb43dKZ89S3bHfBEiY3VRnzkFgKmUMZnFJKQ38RkYhkcnQiBYwWhb4ZKoips",
  "key8": "63nFEFuCFaRD6yRcnqURhn6P7UyQATXe7AthAv66XQfYYdvHnxrkcwwCFmCwFosSKQ9PgULmZmH1AyaSLJPw1pFi",
  "key9": "4z8zWG8wSSJmFrbqvZoWbiRT1EiHvoVNwUGDYvdckj9mD8Cxw1EsGvMzE8dL4ZU8AhC3j887tEPMiE39qV1CLJCK",
  "key10": "3NWjYDhmGFG8HxmcRQCQzmHk23MjsreTW2P2pYdiPAS3CWbqVSXFN4siPvA18P9nTpweutJjmD96naaduVfuSfqH",
  "key11": "3kUtSzjQZwUCCNU43gzaNJMaMLoubtBRxAEuQU3Hzg8fgBWf7LfxdjDg1hqo44mLAMaSMW6ntb7t3X2JVrri6ZFx",
  "key12": "4evLSV17rmkUfNepM9BbFfuXerCmVErcVVAVibUtAXpiR57ZRyv4G2YaGkAqNU3cMv11zR6qvZf4J8H5rbWACU6E",
  "key13": "38iwd2k938CFizQD9UKavtqFxVrAweeZFj5xakrh2W3apxho7vRwaF52pPnVzB5xWdFYQb25w12JSfMefnoWYGfJ",
  "key14": "4DJ7tuqBf6rEYVxp3cUcjr4VHgrCMhyvi9cfTDb1AFDDnQ1MCgDAc6AifVP2yaCTHn3fp81Sf8w1Sok9igA4sxsx",
  "key15": "5Tkikxq8pPAuvdo3MnYjNdMmgcrf1yhoJ8g9VdacoCKzSz8FCsDF1GQod68MG8cjf7woW6dd9QWUw4WBCsUX1ioL",
  "key16": "466QvqaVqn2b2HAUppzoXkihRyjQJigNDv3AjNoynH7P7pJWXp3HuEotdfhAULnNNpphLekM6rGsynKvgx295tDw",
  "key17": "4bbxrsDXNyv9d3wqsg7GUda3BhGJVVAU1NN7XN6EMCF94nfQQAFKTtSec9kZ8Rch6dJJpKGJ1m6mo3S65yq5Msov",
  "key18": "4FvnF3HKUfxqTJMGYH2Uk61GcmjjGe6ZASXYrmqqku4HANA2S6fLdxTgmskQYK1NphZHtXgqvkdT9JBRYydbyhA6",
  "key19": "5pVjzyyNhKB6QirKvFJcfHoGVmpAtyqJkfJumXPhmsYgTKTLVacqFDFVoqH18D2eXtS3ueD124DJJ3sgS4ANqAgd",
  "key20": "2at8rYLjXrxxt5hPRJFVGeftCjb82aTvxpDsqvQYLjJAVLm62L5ktnK3iQMxVL54xSGU7TW736WbQx3CbxsBww4G",
  "key21": "4oCz8EMXiHC3kknJvZtEanXHTRnrTEaWmTdoqDRqGN4BJFa9dvqgw25Mvw96H2xMSSoQXAMFZwiKYhwfY1DAtNdV",
  "key22": "2NBeKcYPdfzPvLWNeUChHyGUz2YWVSGRyAuWjrWyHL1Lrb8CEHyr3Y3TevF2Qfse8NmwbUJJdQj4E31HwYyYFcRW",
  "key23": "3bksCZZi42V9ST8DiJAqNq84741FQb5QW9DtRK4mKSJsCbgx3S2zThk4CsBwg75zmPjAk5H9wWsbSvP2MeiVfs4v",
  "key24": "5ipBKtgNYZGL3WBuJqpEAHkjd16JZK9NpHV387BxxHBF8NrsfBDKgJMwUn5fGsmZhsyzN84CSp6qJxTKLzkxB9gZ",
  "key25": "3yNNk1Fehe3F3SyeXVmxJXSBu4mmz7H6pRUGc1cTyNyV4sfDcaxh2oSQpTKk5sk8AaakqWNFqSY4zbkAKUopJy1S",
  "key26": "5xWvgfX863PGsvMtSGrzxdHdzb2n7XCLKN2ULbYF2W1GQD8jcdhNRrk4R6htkEhmv8P4LHdyTyS4CTm5Dzjzv2K7",
  "key27": "3mXbrrYx9SK4YZQhnLjVY7d7D9rzghJpSmaqiBiXMSqFQDK2YhhSMGe75VibfAM9qz8MvArQ78R11Xas6iNNKUnv",
  "key28": "1NJUr46inohvhfp7rBKAmYs4KgXWcg7G7QoAuHzh1aHCLRMWMwSZW1PqMvkB5mEycnFdMFD5tkBmN3TXPsyRhtx",
  "key29": "58Qehg3fTzszyzFZsk7D1KW2YgTC9TpvbiWWTiWeAUHvqnxPra3k9Rmf5Gj9zk1NC9a6GaZtpRSoUa7YhGWSn32C",
  "key30": "2MujJzoTng6zQgRoqPiop9gMpCABbJoGKyenP5W7xqGMhfPh9vcsJdxAU49QJGm66qmQcTebyu63u2kYwZbzMa31",
  "key31": "5Vv7rjR73Fhyf2ck4fj6C6oQJv9F7PzFG9HE4gXDnbKu3A5DsCYj9keUzeJTSt4AToQn244oYt4QxwrxEd9YXidy",
  "key32": "66mxeUcyWh2sGofmSYcL5tzTry2zNChbhqg8gy4Cb4SSo1izifJ7VunumEbvdosHy7SjUtYmjBmPnHVYpzUgDyf8",
  "key33": "66Lv434CxbAJqxMZAFpXGkVfmviWNDzc12suHbs3z1BxRNSjuvcWovxBGCr5PufhZE28Dyj5HyUuZttgKTJoN5BC",
  "key34": "5eqhKnQP64MPTqXakgAS3SxjxiNiHBBu3dQ2rGRCEFYGopVuaGdvzDt5E3tmAvG9fp3cnVn11dZEL4hRtYpE1wf5",
  "key35": "4pcu6LkLsWuWU4WkG1BNyoJRiRrJuBzL3uXLTav3QqVdzrTSiWPYHmRCgKXKttxGuxSJiCkxRqrb8uywbVfAfB1Y",
  "key36": "3QtNjVzCgvejG3UMhouP68MrZoffK5ZPPHkU5ZtwuSydQ4Sw1NGNsbEJBD9mVYppsyCfcuy4uxP1nbrQxnrkuMQB",
  "key37": "4uz9mW2Htts4zvzbYZo19bPr6gKoTRJd7Byy3dMPqYPisz2wQT7ArdgKqYnBZYJJvxyoG5W1mEpCe9W6K6s6mwhr",
  "key38": "4J6kqa6CKJCs22rWMffzSpNVHzJckDzfq1ukBCC45Ji9w2je133we3xJ8kp4sJ9jNaFa52KUeWtuK4quzSFMG5Cy",
  "key39": "5iwJgzYvnwy8BFT1d16JRdNRSrL8nWvgn7EABUhQMfg4tG8VcddqzyCLHS22h2cDsBLKaZPcUFw8Hj1ct4FZtJMm"
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
