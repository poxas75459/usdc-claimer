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
    "2AMCtaogvvEtX9i3Uw8fbuon3dy1gjJV2cFWAkW7HU6r5npHtxv4rJAPWrW7EsxsBfZ6UpMsgPQhWvkSFn2Ae1ge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "howZrf4sX5qGcdYrXNaMa4wbrCgpTveDjFosEdRxXmrsFxrEA6HPjgqkHGb8VBPWuewddLjG1cR5wEiu4XaXq7C",
  "key1": "4FY8rkb6MvwFaVNtcVujwWEHkRQUS9Lh8c6dqRLKQCyeyVuUsHmbuviWZCCsUek4kXyJ2Eapr7Xk7nCqUDUZDa3W",
  "key2": "4GyzsNx3aUyZK26KCEVUtKLmW4cWqp1ESRwMmhe7WT9fo4CMUq8Qq2zJ2doCV581FPrs5UisknVNRPZoXtL8vQfo",
  "key3": "4MDYW5RT5pja9nRHovoeqVQY8hxcX2NiwyQ4xJmvzUueZSsJv2ZWynzxRXRDRSTSZeuNkw6wranrWd1rrGLV3479",
  "key4": "35PWQWN9GexizSkpXfuhNo9yVUd2GY7UphZZvbqAN1JAKHfkyZ27rbXhx3bJAMudqvbStJCa2WQqTvXCzHWQ2yuU",
  "key5": "Y8NS7pggi5wuMzcEuyBPSvnajyq7Sw6YcQvWtGQ98mTFoDeohCDtBC959WgAzwKcWQXctMrFEABXD6LmYUoHBMT",
  "key6": "4CSk4ggHbUgYqAHZ1zqqmJKecqojo7V9KFuQGz6oewvtsgeET6JjdeJAHNPkrYKrYD9T6gd9zhhAPAG8Racqx6D",
  "key7": "2p4ZyStKNyKDW9u8NuvUDuQGmiYyeGDaJaL8Z412QetRXp2oDmKeLE7vvYzQwLWAJ5K3yfAJKYo4rUNKyu63EJdY",
  "key8": "37H6heWnJnxWsS6asiPbV7nkGGRo3qqemyXFdxoy2upcF5QM2CpBGudfhhFfb7V2uYvf6jSFSFVxjUgj1Eq1afpK",
  "key9": "kxWH3j3XMTgGnVKvRD67YK9ZNV7F161sYEJ159hMQgV1wqMKEqbjxQySpzVzSs8a2hiUyneQFKk7Toq8dz36g7T",
  "key10": "JoLCDrJeRqmWj3R7582tt99bWtoY31qfTXwHkRqnh9fPwsM9TQBgRfR1Tx1s7WJpaKkn22EErwFczBkYDW2pzxk",
  "key11": "3aMhsdzRB6F9i5Awxghk95ouGPmqwYfRSDSeG7PPidFEBhvMDBaYjQRsRiAgWdq81BA34hFZahbYEy9dYJz6XBKf",
  "key12": "49x2rF9LVt8rcusxn5usCeDq6iPbFatbSF7tvhqGGNBccBj9eQzjKqKRJtRHdbzzZCV3DvEoeNHjgppwuCRPtx63",
  "key13": "dHb8wFcMP5rQ6jCkUAyDmeLsigFTcvz17fv6WbYjY1bY1ExJE9viR3FRsKPzhce9rFRtypL7D32FwfGYgWoQjeP",
  "key14": "4yMpUbTGuGLuckWVWwnfyzubtRdJRRZN7AdQFvmxAy5NJNwAzDQWcsypjbVzMWJ2wzj1HVJ9wr7GgQjYVQeMjRUS",
  "key15": "PnRNTYxiy9VKYtp4vqFFcYDycWqyYAmi5Rs43JZTiEH2zXjPb1my3wftH4tXYyCfJJpzvsbkKz2HUt3eRRJQH88",
  "key16": "3KWQryytNsWmTtvWozzjjtS8qxnEv77wowazQj52Fs219CS71SVW1PFro79zev9XxbWrYwcJzvWP7RtbfdS3Dy5e",
  "key17": "2CWW88CAskbXdVXQ3QQ9V5vZsh5jSUaU1B4SQ5i3sCsAb6YhTxZcbGHridaPbWWBZe6j8hwPzKQum8V6L2GiqYhw",
  "key18": "XXSAFWtRdyxKsvEwuc61RpNu2v8Zsht8qqZ7VWZfimPScsjB1xHZqUnP5Y2yJrQEna1p8CPHubB3FHytmLoRVWR",
  "key19": "3zLoXXKe6dbyPWECjnzBh3FWxbfJsXTuNKFP7CBveGj2ijTd6Kyiezq9wHTPDQQw2RWZHyd8Vgxf9AYuLdRNJFw3",
  "key20": "4LZyTdtEBcxvU66SNk2XzQXtyxMTxowHRuHxua25PEDB5XxYjBP9GnLSJ7r1oMbRUH4dF6hSfRko1ujmYN974PqT",
  "key21": "2gpbX8jtobpW9KXZqDdTHmtTRsTH3hQs59QtysiPdbsHKmy6N2SwEbGLmmMiKEtUK3dRnq62DkxzNKn8keBc23Jv",
  "key22": "4DDouJKoRjz5KuKdP2D6o1ehqVrT1oMwphLxS67Yh7qN9JPVVVEu7sb19Dqb8yk8TsipHm3hST3rnTJpZ4yWSMEQ",
  "key23": "3wEoZTL7yPZpUvHkhMtgc6nw6SfiWFpL6NszUcc5LT3ffrgsSJWcMgEPHjNvMpuyC8JK7YawC8NKAM5zJpFQmMXH",
  "key24": "EPtSddnWwHJQ9yJqcrGBszPwM23KwSc9WmBisjxoXzGJdx2F7WWtV1N2tAgg9mUpLuAzgcQV8hJQoZRsjSSsnHq",
  "key25": "4mH5pCeAgirFbYXuykUk6uJMiRWEeE4ziS13YeK4dmpHrrHQsjKcu77pGjdF7cMYmM7ZSAKJ6zxYJ197usB8oZ6y",
  "key26": "5srdJJwLkVZvVxeMRiBgeifNmym8XuJjp1718xo57qohNXNAgiXY6CipMTVX74pLKcR9b3mWBN2EAqxMAZ3pHjCm",
  "key27": "C7R56A3KwZ5eSepgU1ZMMJvbSaP5H4QWpMLtXP3q1j5NQ8KTUGncTUYt2hdcHR9X5SK6V4MZZCW46v5XMDZfZDU",
  "key28": "2hUDWDKakYcsEGXyepvkVN9dDwahc5pELqKjkTxhZ2aEh2TeH3bFyWbKFwoh4fxfDSqgHoqg1SBRMQTRXxaQm1MU",
  "key29": "3QXSwkJvquBofuWnaPH5BjDFKydtjShLBMbWg6aGBxw8Wp5Gob1LuzyvPMkomMLY294mb5yhV64tazmkJe9U7gPo",
  "key30": "5cBSmoRs2aJZ5nHP5CZeroVniWgDRNLDgdN2UHrAzwuEa1dGW6TP4tMnx6EXJ9vEUf6pPDbdUS6KuekXDGNTW89c",
  "key31": "3wRgJPud9MxvcKS5zHqzUTrUPpQCrT8ehHFr4hso6tdGNLwFPXWAoYSep4KRELd63a7piXZJR26SkNL2HxxbLCnn",
  "key32": "2JUZFRUP7FpXwMstwyFjXrknpJHxak96aZX4bkt2MN41cdx5pP2xkKT3Bd7qW96pLJnhtduzZpGrfYRdKwzWkdbe",
  "key33": "4JKsbBusxrYn26vaxoRTdNK1ykevszMKzFbAuBZwHnNHYJj1w64f2Xm2kDjjNLeCMETqmVcGX2QEdSKuYVAa5XoT",
  "key34": "RA89BuLC5YhUvve3BtH9aUeCk1xgkrJ5FQtPG5ZtFjM9PV5kj3PVbVNHKVk4uRQYHNGPgYBHK8f6s9WXNBDVhhY",
  "key35": "3Z67RVGaNVzwqQEPzPeNphTYQWkRxKgcuDjK6d3VTxo9EHZik2eePsAdniDFdZHQw8tUbdMjAPYQd4b3HwAkngfi",
  "key36": "2fKGJ6hCAtFcVuoqHQdSULbzaVWkK7rGCbA5tbQsE33goimxhstrvs1wqpAjbR4X79p9HyMKEz9DMccpbKDMFtza",
  "key37": "2sajuSkeLafdpsHRjAevh9DJYNya2zP55M6xW1zVE6g12SazPX7u2nfYeFf7JkH3LXLqV6vKbGcPFBJvhAa7QV3z",
  "key38": "63ZjoP2U9Ccu8VRBohMu4gbzejGY1uC2hW8NNhjQs4EmJGK4L9rLVLpbqFoGBDr9GXsu8pdyrfu7EWtLcuszWwTH",
  "key39": "61BbDiENYAN3cBGjECVp8jeASEg1ntyPcSwJvHZqwwrA5ndv4zYDthjP7EwHWZuVSctbDNyaW5oZepMoPK7qMxro",
  "key40": "2UEdSzaeVEqgKR1NYVH133SQHfoX7vV5cNppd5iVCXAzWfE87czj7JPQ2HwBxB4QLm33TBFmbYwC7ML2nGoAzyN4",
  "key41": "4sUrMhrZBbgvvUxyiho6hPrxea4NqyKWPoav2KoqaCYVWPCA53cksExSQmCXSkvbGnUUGseqmEJ4EhwASUCxnSLp",
  "key42": "4Um2MDMyNozcYpazczbDTRNHG2thMrjP2tQt4MbEapCQMwci2UP3CsdqfzubuTpSCdCSEXHsLj6QEFRQUXgmtEpR",
  "key43": "2ShKsZifFacf5NEYFmWQzs5TKUe8DSbWhkuGxBzZwLHNZCfmp2FvzEa8kGrKdtytxKkio5yfWyry16UhA8kpbdrD"
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
