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
    "5DK48cLLgm8CmQckqzhyeqqr7jVrWXonxjEgKzQG4zRPNoGdmdEZNH6HQZTaZSJt1RvouTk2LZ3LsnPRdwDpmXpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Facsjap5tnj63EkhFhg1ibUwfWwE2AGExZ6tgpPAhWmUPLv6sXTnfb1pH6PsW89nKdkbJAbhih5Kjjuri5HDowm",
  "key1": "3JCw2VtUH5DSkqboS6SpafJBXuFCMZz68jcwoe1oYYkTeBV2Q1RCoD3t8fhCpwxyinV3Myff22k2HQG7fh3NJvoz",
  "key2": "4a1PsUPESkkPWvcrPJYKssJUQfBQsUcGXbQztzSWk8bx5khQnrRKApDVNNDwgK4i1pjU6GtagPAa84ZjJ9S5ULU6",
  "key3": "9q8wyTf8iYdsifNnE7dnMiE4Fn9BLnnz47m7F6jPawDhhbTGWt1uDkUMXbiSTBpJBCJAJcHHaWDnk1Bw48E2EPp",
  "key4": "3BN4Ef4zMx142P7ZQdtKQNDqY39Xuo9BWRx1yvnLuFWniTLVLmESDbfoa1AXmFC5aWr6Hw4kCBAqmE6HK1UKpCsH",
  "key5": "2pwJDoPQskdqmyvB2Yb5EEtBu5wthVUpMpRPPx1JbHCg3WLWbimGozziCfvk2gLTf8bHj23Q19zo8gZwCWEHFqoH",
  "key6": "gjSd6GJYvYz3GTueqLDtKhjkM3XzF5vmtd3FNf1M8DDvDHQHvSZtxH3kPgQwnhQ75BqV7UTPYijSwNLoferAdA6",
  "key7": "4oCNvuygSh73osX4vYDWFfNxx8Ubh6RXvmvi7YMtNpknT2tKEWAf6VLUrCfZTckRqxN3urUuhXFtj4s6Tu4TB2ej",
  "key8": "2JWCE5y4LiHfLZnznX8Pt3manVsYtAjTeiSKvXuPTMydW28dSxtiWkvG99dSxyRMsiz1zhqacoSsnKxhkt8fgDNe",
  "key9": "24hBF94xoEvRHrtoCcQisPrwbMj96NFvEZQbJWNGzCm6q5meaoVgWnXTe1dqqnpqtXz21j9M9zEDfN1QcBRdfTRE",
  "key10": "vwDWVq5oEjMAe6tVujZpKp3m8GSN2bVA1f5fFFrhzky9zopiZmGJBzZRENMa2mTLzuiDfjAcn2MyjorE5DdQXLU",
  "key11": "2agVjEabL5Ed2Mjn6kLzQ6GiBmdGm6V7WLCkVaX4JYdt18oBw6EYPPwJL8w2YCbEhJKP3UePP8HUv7ycKCFPy1dS",
  "key12": "2vAe7DaGMEBFia3SXsJXXmopTGiiC2Pm1MfCCjTZYDpS8nmxXpyuQFFamKnAQQ6DmvBZ6H3wVvApncsyByTpbwQC",
  "key13": "3m3aTcGzSAjU1qPLQGpkLhVpeGtnGewYKAoPNTCihmVzkVg8dTu8se9NvWFyiwzdvbga4qUWZJgkzbXSEq8Yhr2g",
  "key14": "3C1EapPdgNdeHxeichpPBtXi6hHQwBkpvVwg3VKSwhPgibyUwxxmU5FreYFwamDEsk1CWCkGEYRMkWAxgkkK92QE",
  "key15": "5FfndkUfm9KvqkKRKuefnkMUipLBMuP3rEsWskQCd2a9BKP1QkErevKKgnpouizsaMTcUq1PonjDNz9XQayyetXm",
  "key16": "8Jntjw3Ag3xLAHxb1qYr5oKycNhQ9ztM7PefKBMF6YZywPKnVJYkZHfTt4uhVuCTD7Rx4sNbJdJaNhK4J1ZP1Eq",
  "key17": "3NmBFu6v2BZWnrF2r7DBgsKsU1ss1KuRjs7UDC1dmpbhYzy4ohZLzWKaNP2VtzxrkjfupJdR9AGqrwVpYZUeQ67M",
  "key18": "4MKvwReJCdzcKKowFnspreumnXF4rN6sWNdPuWxM9ggmYRjPwdnQiLAAEt99VQXHYb2YiMBpdcbKHotC1MoB7ttk",
  "key19": "4vs6HiT6uWwAHea37Chp2dJ4Rf2s7TCuHLCzd3EeRvcZoS2Eq7RN9oyCvU5sNFf4URbMBgkkfWygF9RxUCDgHSVG",
  "key20": "j26WUPSRceoP1BPGnRddQyhWKWqGBrHtB2nXJpH9cFBUrwtUe1S6cAEZZiY19Q2ouYCQbnZvrtbAMWda6XRHHsv",
  "key21": "46CbQdVtns314RaKzAuJ4Nbr5TUcGYjBetwbRPQX6LjLA3RGWnb5FjnYVxKdiihDVWWPgd7FT9Nv8FNZug1YB5yb",
  "key22": "yB3PYahwWaGHTQDGVAxGR8EGjooAwHDzSPMyS7jRYd84TFx4wLqJawTbKgAFsEooqd5Tfrufv3kXgMSHdJqCGEJ",
  "key23": "4ADpXN6kA6GbMba2TqQsQ777gqThxF3sD6HhgDHigGpusX48drL1f8YDgpKn9AcpySGWKR1HsVBSKKFcsEQSDXqR",
  "key24": "4bN3xz7uzwE7J9DS79TE1A3awxAks9fRNjh6fSu2vE4am2tDL8dRSE4zsYBSn2sXFMLEQynAxEnCyUeyitqEDfc2",
  "key25": "WPaUNh7kg1a6dykC9KXQA7E3BsL7xurxZpdeoFCuGVvs2GfwcdcnuHFqi2cei75pS2iuKKkMqBuC6wdQuXCxsej",
  "key26": "wMDviqu5FAyHQhg92UJJqgzRHVx1deGCogYs2i7YrVJhSR7G7Qt7bydFpPBzX3F5vYcgJ2vXQTTiGVsieWdHiiC",
  "key27": "3swWiYF7ut7BomguzWc2uLBJXwVTfDU39LJTB36cwcDUA3eWaLTjkBCpSof12bje8RAuYiMUb9xgMzRDNEHqmzgE",
  "key28": "5qsoPrfEG2KNeZ9gnUywNS511g8GN3LTjRQMrqoZLqJLpqxf5z3MNUJRcjAhy37Gz8q8Hc77ZZ2qhgvqNeEpsmfw",
  "key29": "4gkTmFG5KYVqZYNeTHkbnHfiiSxkeDcT7edNe2GUCaYuniVLhDUVNnfpmGp2Bn9uZ7ino841Ueno4v1r32KJqjP6",
  "key30": "5FdTRzFVrhMCxJY9Wj4a7HbJk5D9eXodMiQNd1kxnmmkfGFSdJPgoAnmUGghtp9HULfa4j83LuBjtrhenwoPvtnp",
  "key31": "K1rZDnsXGHuvjNsc2xpjXqwK88ekshdgL9aHgDobJiRdgR2yK8FfxUAQPcdd91fN4JjJM5fJwwnzUejw7pNeudw",
  "key32": "3q2uDTtyTw1CCzgfVbQ5DUTJeHH65BTRR9xb1rZUyQjBrmiFbe8HHp1BvuvAUnG6WruoYyQ8czQucZqcK9bzF32W",
  "key33": "3fZjH9RkjVkXP8swZinNzCHVonp5vqy3VhP4sWsSGh6ryUFfx64j8no98Z5VxwaXrMUGaFGv58tMU9fvTEsUpjrq",
  "key34": "C2KjZJhXDeK71eRpkxP9v9CGVJPjzAZzuWpF9Nrq5URFNmcLrk4rbQdP7Htqb25ZR8ZLwQx4hFnE7ZHP6vfiWGj"
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
