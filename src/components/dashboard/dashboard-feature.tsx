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
    "671LM9HC5L5v9SFToKSrbTWzFuBPPSZFE5ajmV4Tepnh6TE6KgqbxL8zdYZM1sznjW4QhPUim3V4U1N8DX7kkFJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63eADCMpWHu8DuycJoqMLKsLqAhj6yhkPJjn761vRZrFsdRKBp2ge5QkryrbB2zhwwR4iD4hjiFCQMxSfTEViBNX",
  "key1": "675ayFH9zGr7bpSryHQ3QBwgQC8S89URDz2ahSK6QMaEH2y5iiBRcPvqXuSKXBdcuXNVwojyZz8v5vf3d3n7FM8x",
  "key2": "5vzku91Zatmmobku5gkctqUT2Ycp9gpC4w7PAv5T1TPrkZKH36zfAhcY15tVRosPbhpsWKX497udyWhagsbpDmZV",
  "key3": "EBxKyHpqCDddY4KGmuDqJkH7PtzUz7sU11Aoz8f1hu5UgmHqjLkhKtBgBtGQT62d3jr9wXui5ruRoFnusofFusM",
  "key4": "2kznVovKJJZpVhD9qhpjau54GmBQtL2jgiRQHKktD2FDFCrTS8CGcCjq81FKRmWXaCBB7e9ShqJZGmNNFPaFkDni",
  "key5": "a5LEWBQx19fG5j4anxmXmHkeZYQ7knCeZLuYWXaLZqrUXdLQcmrqvXmwxzjSN7sUBUmqqgwRieQfwQtZYGQsKLh",
  "key6": "66Y5v5viaTRYoteaoVBLjdvWdZmLVzhr4C2WPYQwYS5Cn8bktKdj72Puubrj4c7vyP2HSSvvvGj2eTNPmpNhPxGr",
  "key7": "3XX5CatJtUdXHStU6VRapLHBoWo4tzGS8pVHKScue1SHwLoc2vjPxAJUJE6wZsxVa5tUcEeHdF8cV1U6PZH3QJSc",
  "key8": "36Dbo4B91pYttpKVa6itATNkdbyguFm6fqAkMWAQhzZkm2pD85QiuYT8yWKjHWVXCHqgRw4P3MGFzWGSfU46MGKU",
  "key9": "2SeVmyPh9UuEQo8nmD4BvPNhXdiSCJLtFmXhnbZokPYp8G9yUBnV5XDY6KPejhtVYhZhABMuwPTWhXhF37DsFUfK",
  "key10": "ohemktw3mnw3qBH6W9hjN4AD8nLrwbbuC2zY4Me5utRZM17CNMddv6YYqzJwyysdREN3wBSCmSFkdyhbk7CiGXL",
  "key11": "2MU8QZUEQjcrJqBc2WMYqjioNXQiWryFZ1nhoVSBQgAyFFmzRBAVmgxxL5m9UkN9rHY1byY41i7Xe5BYgidP7KwM",
  "key12": "5vyShCqyMvRcL9h7rUurKf4ui5WRVWu66WxMw5YU6jQGAAG8Ftiw2XEKoT9Y9TMn4oQ2rt9ffAB8NaxwQhpFiXE7",
  "key13": "27f7a4zgWe9N9PWvAQz2y79c61Tgtff2nuJRMQ2p4M9GVHZVKwNwcC7BynjSJaW5jYmCCp4JCFi4Yzu3ZGmzTpZa",
  "key14": "5hujBVXiFT3naxNxuahyoxPBWHhVPdbZGLQEykvbmc1Jf1hKfws8pGKoZZpqaom6QfafNTm4uTavEaXVVcDGYtex",
  "key15": "LS1DLmTjY3HGtkJfwsxhZinwDRhetU6XDWPk7TDBJvHGTLCroLmi2Mi8CcxNFxnXYz1H6bz4iLVFyRxMfjtjDC4",
  "key16": "3ffFUSjWLGtGLhhuVvH1FgJBdWtS7nyoredgs7LPvWcgtPJbJikXUsJL7JCXixqpe9KPPArC4q9NLZvVHQCvqLU1",
  "key17": "QebYD4SCuESGD6PtdPHyn5AUMWsp2yeNtxojoTkVF9tNfdNfjVbF3T8ibP9wRzwGy1ErdKEmegjv5i3hrMbwie4",
  "key18": "8bwTwuusV6Z8VpFEGHQRmjkqmqQWXNqfCuCrh3AyAaoseQ4dY3jeJyezmo2Wr3oefYvmjQb2vM5VUpeSqJBEkUo",
  "key19": "3hkcPiCS2YC4TPk7s61C4noLTXaPhUZ9zg8NCfvtYJb78XDeYvutknsnNnEaQGCL3qgqhDXm2m95tbnMZd7BJJxJ",
  "key20": "2jMaUNfFdwWmmeBJw5JeinuAuqNFFe3rXHNaYm7ZLcCcSfc3Q2gah3B51nrq4pAayTj3ca4a9oBixEa7oTX3Ffmf",
  "key21": "5tpoNJnCXzt1FD9LcoydaJRvwk8zpgJu8CxaDWV7CfMDfmGFHTqdz4pHoUFu2kaHpvfhNspG6wUGDaBPofAxt9r7",
  "key22": "X5kc2kq1EShcZWTaguWj3rWeb2vFWadK4kN7QqV6z3gTj2Fts91tx6wavBP6aDrwQP8bAvEqM1c1LdF9er3jmi7",
  "key23": "2sDwcbYF3W4vruM9evbqQGPUCEVLWz8eySywA1BEM5RbM3VSnG8dM2KYdP5AMxPJ1PFAso9wfvie1wc4eyvwPY7k",
  "key24": "22AW9Bjn3wX9Tn7oQ55FvxVygTw2BiwAWwhyzYGCapy9Lg6mWPvR1z7TPrYrvTcs98VGH22C49PCFqkTBa8j4pct",
  "key25": "3RW6MKPvHRvxLcuceutLtGywYTbcbvgMXJB24ALVuittgS2sNGkJHzmrSYNPZNtdwfmKxurSCsXMHS9wnQsDAGL8",
  "key26": "4nhEX2uvVkduyk343FfSQg9NfCdiR1hjDjCV29Gm9gmmWcr5bgPvHYD99BbQUkqWuvygmss6vX7kwmEdtUVjj3my",
  "key27": "5HXgFKQgzvGfCDcTbSfK291QkcyDjgdPkZBsjg5cGjcGdfwSXLEA1PCTemFbNpXT12hXkLiYTzi7b7V34ku2bxug",
  "key28": "4MbSUmEdpK4iLZTvPc7erQwVayuieyoN1z1ffDq173tB7j8D5gvKUMhxtCMwVq8xhaLnSaiWB3itx1imKkP7TKh5",
  "key29": "2DoPMHaGPUuQMY87acSDTC4emj5Fxs5q41EzojPnrpKkTzErJzikhGxin6yPC2Epa3SrF9BaVhSrJw3UD7XktVLy",
  "key30": "TNsvPzfgvHSN2L2m6aFJVJAvqkarSd4T58MaqLGZ3nqeBTmKxkZDojc2mE9bGNH8A3gTLUNyybxHMge333cYyer",
  "key31": "2zFzTjoQpheUoksHY14tKKh8mDvzhLTuyZ2gE7hNBzsVFEv1ByQfKgyMS37RQw6wbFKo5fEKvFsjDxhYweQejk6F",
  "key32": "27zpkEZshNZwTAXbEbi6v8SEYEK9N8NhKjh6SZYN33m4WN9EZ9DzhR451qKvex66XYzQffHEaWY8NbYqkqdVRAPE",
  "key33": "3pEa36PyTzd5QNTJstnM2i4FUgpjKSHzkKbMawHNTcyhFYjfGZMh13UXqymxNMpXzV9PXy5SwsecD2DAYc7DuVc8",
  "key34": "2xXUD51PsLHZF86uyxfHQnwPmmwZ8BhTjBDmvGTCwWaTrntqSaFHDVCSZUdJLkv5ccDSn62Jkpd7n1UpQDU8scXo",
  "key35": "5xku4XYp8XR1yVpevNp327ZmDfNphsEVbbDoVvtX8Zkx6ZMfbFSTfWuypdY3CK7ifNcCLh74NedEJn3SnuiHJrDj",
  "key36": "4BmS63ECgDf7zCo3cBqGvKATZGcdL9szsuMaQ42882oK8YNqAwhyc12mzLVtfZ9qgEi8TyWy6fKHUrNe1CWQSYgY",
  "key37": "5oiwNbVKzeut9MtdsQcKA33RcBuNtySNU5W7D2n236zxZvyUfXmGzfnmkT2EhwVVgYn7gMdBhHaftEAx85XG28YV",
  "key38": "5Y5DShwJs7ooejXVkbyELTpxNn8u5674cjaSmNmqS5vuDYgVWw3QprnCRiBvtzy7GBwNySX6ymZMzEsdQdCAEyjr",
  "key39": "255WGaxym59o9wqPjQBqhPKKLdRnWKoqcNDMSss2A65ZH49AwNs61e8X8JfU9tAevjHLmNvLapY7GGuHYfbam4Dc",
  "key40": "5kyf168enuFhWs4J3FnHsLKsJeYf8kfZWcfEVd7BSR98GiQzyDwaxMAMnPP3eXg7oa44SsKc8LkVKJvCPq6FCxWG",
  "key41": "54ZpQCUWytKKK9d9X34QbHpB48pjUwi3XDW8DwYymwdvVPguDxZA2inGN9LZWUxg3Uwv73rQGok1XUmiVbEaCmt8",
  "key42": "3hU5ozJYEnSb4fd4BTzi1LhLWnMdWvpN9xPYtXNSaAJoU4eMnSArfQnJNx4cGsFtPqsg762o6vii2L2wtC37Smh3",
  "key43": "4ayWeAEcvAK2J9HwRCU961669BS6wEkzhFCsJvYUkh6sc2MexMkiJGku9QhQjoVCxsXJeHmBWnTHPc6V4ANEwaGp",
  "key44": "2VwCyeC9jbr1LCu2NbQzrB2BJFCRGP6UXSpxBjWmQRY9moRaNAifSNs9ThSfNduisPPGSr3Y7eTb3Ud9LmjzoTm2",
  "key45": "5o6VP8ibr17rM9XzZNhwSKwdexqdikQEYTJKk56SUhic24868F6FgQmZ45tsC7L1kbf5HF3NfdMFgmCic6sf2Esc",
  "key46": "NCRP83F3ZMnVX5Cg2np5rTs8SUaH4aJ1JFHJH17ENeEK9tw8sSmCuC2rLKVyPDpWwWLtFwkhAKjv5VoqcUgKt95"
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
