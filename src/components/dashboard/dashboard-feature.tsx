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
    "2hkMTfbdVrMS2VAFFtJeJN3mhYK32jRkC5hfvuxXEBQzvFDHmprjYfHD53nFHFMBBTm5Dvv68HFa8yGhsavVcEmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3URVu3zGtukJiB77xo9sBBgUbCV9n3pr3S91QCzcxq5FYUFjGFEQpRBrYpWe37kjQ6CaQUrjHVHwS67BjsxvKwNJ",
  "key1": "3vHNrN5G311GbKEjqCEvKBRif7L2XRwn5rHur7yH4HgrjDij8TKBssMyfnZf9pqZpS6CG2x2Qm3Ao2G2ZaYkpZCj",
  "key2": "5tmJ6pjjuX7V9CpuJwUwPDRM5mHb5prEgoDgjFv9NQ7yTpGjkKpyf7mAtWk59zRLtwJd9DcLWm4HrsAYM2Uwib22",
  "key3": "28HrRYrYBWHQaMTbfwSSj6VVjPCDxQt5vBfRGp7pqsx5zEFdL6gxTJC1fUYt2hdRbrTUxThTjDGi9T8ojXnDMrVq",
  "key4": "3Tk1HnDAMb8TBnPr8yB82Grab8MJGquFrPPdjwCZtAcujLyjinKK2EA9CySTyWgy3Cm5516KNf3jczapRujhmfAR",
  "key5": "4DDHSZ3dZ7VvLVHmmGBABtpEBwNAd2RHpiLoiip3KB2yR2pQhVDLFdgCwtchYU67zbFwnY45j6WPvfMJMZmVo6VH",
  "key6": "4hdCgjWcaLXFJRB4twKPDKTtveskMaDHXUixZHeYhzqwn2mdJ65TDjukR2vfTauBeKYYpDzyqWKZ5cUsGskdAKZF",
  "key7": "SisVt1n8yo3EatLtyuJSCsYhHWfeaBaSN2deazz4Ubzoi13FAYVrf6egSNRzZksnfdQFS8sWEqS1hYFCH8FDap6",
  "key8": "5YDrm1jAMFgtwzGWjm7ogXvPgRGY9H72icSvW1joJHRJP1gGkC4SG8JUMd4DsrJnMoUYaVn6kqcHr9rCRKM2yqEP",
  "key9": "2nPprmZQb2b6SPJWE2BvtuW9CdyJ5aGj1CbmLQ8kkLSoavjUqT9PyGAfiFc9TjKKseyD4yeM7FgRBaoZwAPZYbJi",
  "key10": "334gcgdU6CbnSBRe3d7TjGrUFjiWWQGqLDuH6EJW61yr8dPPFThAkaPiFsf5BTJHptVWunoQLAD845DuebCMt9oW",
  "key11": "3H7dP2daTBsE3y4e54LTu4nvqm2JQQxB9p8USV6r4MRUoYxgivTSWJNgz2PQpiyNAcG5TX336wX77fE9erdpYk9B",
  "key12": "64kvBdRpcGCoedUhbT9CQikj4ntgyuL1gBQQvvkaeAgir1VvWkqmawxASGFGrcsnjLHsDXxDpASYzT5Hj2o7JTyQ",
  "key13": "2MyPpQXHqVRedxGbF3HxkvvvAMzHrhL9r9J1RZEwwfWxaMvfJxU6v9hAhaGoyHMKM2jsnUM4WFuPRAy9wQtb583s",
  "key14": "HHtDqunwK7p6HkANd7uR66ovh9TqAgUzerDRs3PwiztD2rmJheTLKaN7myJdy1ycgaBPtpg7h89YXYy8g2KyTSX",
  "key15": "52JrXxuJjCXzvo8qB7pXm4ubRHH99yMkFz13XiUhysH8RDezrLPurpCMDjhKurGBas5NEGHbEh26yw9PkXuB72Hf",
  "key16": "3jvVknE1bEhK3144JmdRnEeXDR3PKxCDzfybcZHUZsoUDApi24ec8bBvuki4QU6s2kPksuqWV8CDVjmnrsq3c6Vx",
  "key17": "2DZPKnd9bqnK6hdimNTFDQKea7SQZvV3FJgbGe18C7j25jbBePfy7QDSvbX3Vv5rog8YYCbULci73Yt5jWoELzPN",
  "key18": "4dYfFGcvRMS7MaNpEPwHAEmK2foFpZGux2sTiEWvXXcSVqyD3YqkeLNXWotATLTLgHMzFbVLYZ7M5PtYjyE2yZtY",
  "key19": "yJBPyAxbNzPWkd89rfEje98GUEBhXxg19kmNkEDLMVHTCq2HvyNBVx1RDtbp6qnd7vuaNbnidEPQ2xRooMPYgzo",
  "key20": "2sdE368NtqHNgaCvxERXLfESvrh4HeCGYTxFHL4BSj3CV5g4FdUrjkrzfs48XRN4LVJpNAVzDxWeLgrraPcPPqH",
  "key21": "2EXkUYzouXSDZUrCzxGA2J7zbcw4G9S6Ga41oUy8vn6AszagKLp9xFUF31mBjgMserq5NjzJHq4eDtuWmSR94eLy",
  "key22": "28DAss9K9mFz5hrGMeC5KYLpQ3RzdYREy7zUtB9PcUFEsfgkpPJ9eZ1NcVUBQmJZwsuKKUHtXumktiXbJqXNxXXo",
  "key23": "4GUiaeHgVDyubayt8AXiTX6ba5PrGNDx9YMeTDUPjGoi6r7roEU7ZCAGtn8hq7WDnztaX4SaG8Prm8kmYf2UBdgs",
  "key24": "3Xr3VKTV3Q2KqJpEBBP3noGu9cFB54Am1ZuTtGEN2Xx9kJauJoRXy1Sn1MuQdHUBXNEyWWtdkGctMcEHYAJTdkhG",
  "key25": "3uEWNeiPBsYkCApiUUfANmsu6MA2BgwHoWNM9MkTuWzMrh9ZztvEhVWJDg3TKN6uK4j1eQyQVLk4QPBDHB5if7j9",
  "key26": "hT1ujwAEBaN3miwx95DQTdcVbmSbNeTf2zdzzSY6Z9a2AC8wWRzWBMy9fTvHGyonY6ZpHgPWkVzQacU6jZ4Y7gH",
  "key27": "3YKqFjKWi8pzbBayjSrkZFKav9ZWFGkV8BrmHpqfQ1CSvKu1ae9LmXsTLg34NbNKH5tShL5q7NjjE4vm14iQEcWb",
  "key28": "HSnJfPJ2WkaiTnkaJiCVxhpRgcxDyzHPfuCcrgGWGTr6nRE4xEDSjb4T8nuiFbdr877BffiCpALJtwxnP3JT8om",
  "key29": "3fiH6W59YYNztvx4jzbb8cCHduC1K4JxWpZb8ZAV9mnpVEUfsNGa6Hxwq2ZaT1VibrM1g87vqawy52855tiBW8n",
  "key30": "3bxUdqYhLLjWM8FATVyhu9XgL69Dbe4gz45gAkFTHNHaGY3iSMJGz2xzZEnFcXwA1apN9Lw65CgfoNPTgzqwsjuF",
  "key31": "2KdZMjnJmKhbiU4yYSGBkaqDhqVv4teQezqH9UrNAZ628jKoxJNNPaL6WKx46DdBzaMD8fUHb66Ae3DxotF3ZrrL",
  "key32": "35UGTpPrA6W3on1Q63YME7NgkgUcQKGJxdHUJ8YeEymfLLPoQyDzyrEbuU78c74r4jxd2GxV1Cc46HLQSaNFdYVg",
  "key33": "TAHBUy3aXmqcmxKmpFZ7WMabkLTpzKyPwpcj2MDQ1N2XdBxiYXSjMWTtp1UGwbqh5BedjFjyJTmwBJbBKtaqHRM",
  "key34": "3MSZrx535Yzt1VsaifjqmyuMjk7SJFJVutT4rdyVqgn3r2BDcTjNnVGYvSzemdpgwj1eAwJpjy46mFMawKsJpSUe",
  "key35": "2fVryTxFBkXZAKvJMqaoeShk6WyHCMx8p5AiH4nCmAoSzXtxW7Vm4wj8LnEbxDPoqgqC5wpieuuueXpUWrYBCcBD",
  "key36": "w6MpBNhrC1XDPjFiU4z2Htrc1jSQG89cP6whSLhHyLznqgXSX5hZemqSiHa6V2TDUAoPWNwjHXZiYNidudmvLgh",
  "key37": "zcguPA3A6YBHdAhztMV9aSx6uFC1oCkMzw3NV6Y9v6sU1qMwBs8nBHpRYJHVo32zzEQZMbyamSqiAvB4nKeRHvr",
  "key38": "3pRDNzdbs1AhD1R4Azyz2aYTnkVTQ9V6VwHvZJcPnpQ1yYhHktt6phx1nrxHZfQM5aBU1Lmp2xf9Q5eLnBJcrMS4"
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
