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
    "kMVXbLVuvbyWeAn5RDQbiRvyr8ZMsrezenbTNyBk331FGykB52FR2dnYaPyD2ReFx9LcSb1a4PC2WVerg5AdR7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RaAnyQo1fSb84vgzSVfjnTXsgC9WSzKXoWEiNT5c5ddam6i65ANm1vJU7r6iMvgAQeSjMMZeRBc47bizMxTWPhb",
  "key1": "5mksVLAHrm6jkPFhxbyxbcizBTTKBk6xKvWCTRp1LwXLjHKU1sjdavkxZLVEq2beb8bTautpnva2uvPFoibaVWuU",
  "key2": "GdXkLKZxgdMGi3mKxWTd2edArBe98kjV698Arvz2mSgpNkbL9DeXYQFuGVJSv8Q7UsrmZVvvyBveBpnm4G9KSVw",
  "key3": "57X3jVNYihDfXVAyzPx2gbs3Kx4Fzea7ArBJJxaiaVuBm7tyMwUSBSGgQqNUcxr3U8Ag1vJcfL5vyoorkaZSu84T",
  "key4": "5iJ1XFdvJNBpQcUsEV2LxPVECmUNBjKQTfK7gQzNdjrgGP1qqcFjwg1ZSfGk24Guq1g4puxinCYQQtgHCm6APQZS",
  "key5": "HCt29ic888X5Y7u7hJqHAU1s15scjjCGWrei7qs1crYWEz3Dh97pYv3ajypJgKHMg5UWrQZYMNeGEbwqKvQPEso",
  "key6": "5c3YkNdTAyttV8fEQmNpQp4wWsQ4TWDzWSvVjGvu8T8YrnYcb7s3TQzVdWu4Gc4RJNrMVG2hTGu1HvPUc3gh179o",
  "key7": "5Xw8S4mwH2DQgHA8XLgwFivU4mgqBDjM26oeeb2WyKQeeF1vxbauutmuh8prNGYb6tAapiSuZDaQEPL8AATe51oV",
  "key8": "5JMKCXiXKVuGQnCvnACoMGfuj2YDEMjF1PEGd6VAobebB8TaH9iPJDVbut9mFXKKznYzYm85aPP6Zr3inBTpayGJ",
  "key9": "4m3BxtvX2fnAtGJiSeesx8a7YBMu2cXQe17Eh32NZGkF62G8yFkhWQh2SmMapy7j3YvfVsYw62y1gkeC9d7NEbZY",
  "key10": "2KCcfvVwfSPS1G95FS8iQAuDprZLJMciZipFhv2woY1vzYGGTsekX99Cmmum7AnbTX2LoqWvDQwWzk68Q3se8Br6",
  "key11": "3HxFpV2Jjwhk6ssJGHvfeEEB4daG1yVF6y6GVczSa2RE41N4Xgab91bdJWu2CAuDnCxUgivMjeKJzizupW8EHfQN",
  "key12": "5grUPraa7W3UT8J78WDPJeHN5J6Gp9uJRDSyDx3BEUKCdzTSMfR2VrPJGiCaEF7QG7k3PetCmL18TtkvCzQne7qw",
  "key13": "4N4faXsBe6eu6oDpk8tGM1DNszkzi7NTViwSoPA5wi7D2PC3o8rx5cQsw8YSQzb9Fde984wQZ1akdobFPW12W8de",
  "key14": "5uMEvpGkdLNPPYZxabpJgHzJQj8xG6XED8Z6AsNasCNzGeQWjcQjLy4EDPGVFee8oyCxkP8KpeyUNoJRzcuXrxvD",
  "key15": "63fBHuiBixLR1LQQbKWyTngFVn9Z348gV7ozoW9sjpYMjLU66FWNv6NaJe9pUBoubRg7XSVxvsD5W8Mu6ihwRQDN",
  "key16": "2ZYjfvpAAGoxTsExV2BUMrbxLsA1wSUYSVRt9q1uq3GrWPSYFyhtLdsFPx6KytKKeFUDCXETmAm4s23u1ji1d5ft",
  "key17": "3ootSwFGUK3qUnWajf69YTSnCuhTGLWSgVucU1cT6oc7jc4GeCU5mGRFsbUgEKknhENPvV9H2drdJ5h4P3ssDCLz",
  "key18": "ndnvSJNZ8TdkFvE7nQFQxCVrqyR8NWdw7jjoXsQKjPRtmncaZMejiyPZbDcekZ2BEVtPnb31JxLHoZ6e9rzHfd3",
  "key19": "2jLKvunJnZSB6LnSz44sBsFSxmi7LgJeLKHFrhU1B8SBWvHYQMy36HchZEvBeYQ9WqoDxQPZadx7UxjEECKD6dQg",
  "key20": "5k4nKxGTsahPwCnVEBMeRjbeKAoJixEUQCkMqVZqpGSaGqR7CkgsgTEijTZ6GPskjq2ZpEjwqfL6HE5eSNvRqgw3",
  "key21": "5UASsFbGPLPdidj2C4raGWNwSykWij9rHiMfExTHhTgjcfBVr9SB3eRCDugVZYXRktLmshjrED5bNqW9ULfNCpJb",
  "key22": "5BNCvFH3m9XRMgFNEz1G7iZSmaKA18ikVntGep1dQmBybrdYJ386zVSj1J3BpayetVqn5zGuwuAuWC34JYNprNa5",
  "key23": "4zBmopuXGT2tP8mDYFHCD8ZM1q3ax9JU7KL3ah466E2ZCCMHNnifX1Jc1H9msyTSmvgJSKKjkZ4C63endQFqGDsn",
  "key24": "3yGAAqrym1p8wa9hw5uLRP9rHavtcw1aagrCFUXwzPFeGkUeKXy9bAQdkuUhEvmTnpCUCd174zwbkVFSGfm6KNcq",
  "key25": "4muGy98XvoH7cjAgkkvRnRLEN1pft8BqGbJJAkX5uFbLf15VxrxdFZ4HbaLKn3gLGHYTXptsnmZhfX9rUoad28e9",
  "key26": "43og6yf417DfC2pbEpo6VyaMkouKBHnVJLt4JvNDEud4jByG2LFAKysRjsHErY4MpqeRD4f1cLBCH2ncxRaySoW6",
  "key27": "243tyqEJkUfXuHJPt5mSRv61rRPW3Y7fLXXgboaDAwbwG9QFnmk6KsuSMzDZ9zfyoASGwtXFLHyN2xdx6brjo2AE",
  "key28": "KEFwRoXi3kT5gX4BJh9rG45KUQLFwoMs5BN19UTLnMMkAkCa3oFNk64cfKmFqS4h6oNmuuwdzhPUWdtW8Kva1Wt",
  "key29": "33JUrCiMBj3UUZEPMbEA2WCg9Jvy1fNKEURXauncdKSem5kw4YqJ8NiVjj2JYkMrQGPp2qDzsToRnZYsDSw3w6Rb",
  "key30": "3b6ppJmokpk4MYgyyxqUTAUvU61Dcy5z3hqE5TfKV9ff6XUUjRQQnZMRSjENoDQkrQM327ufJi3Gr8mEU2ZWKC6H",
  "key31": "5ekqffrH76MwsEAK22PTzvTndT2YRH88iRPRCp3SwBBohumDJEaXuKCT3ftZiGeCDobsFBsvEbDdUoua9UgEk41Q",
  "key32": "2oD6LWFUBjg6j5sbo6qAkynX1Z6F7BZ7qXbwUabyHVApJoodL9nQhNhDUoUQcvaQY9FGi45TgpdSnnBYVxZ1pK4j",
  "key33": "5Ut5urJf8MVHW3sU29JxTUG5TTefRUdCrgGi6vEZhyvniZG4nkEzCR7yr88QWPqEFF5c1vwEsEwCNcYwCFcrQwv7",
  "key34": "5wwWxvEX3B2CHx4pfhC83htdeSceYVWCcRiB3tuK7EvVjGz5YPox2ds5qV5ogFH5nFLBw3fmwTMvoUkkKvxb6d4n",
  "key35": "uxsQ7ST4U8JZphLaKTHwGztsddfgSY5FifykefeC76i4txURwPMTow4kmZEM4bwDsz8RfBY8nzeHtNBGH4dAY3Y",
  "key36": "4eRxYvhF8Z3xiLH4DnweZvfnbVN8tcfBQB2fR1Uo2ULhfnFMU5jxZHbTySZpNcrK3W5cX1iVrn7eWWxBnrQB1xwT",
  "key37": "61vh5jo77TmTguwAG1VPx1M7JLUpHTYtABbksz2eDPQ38fWw646S1c94pwd6dXDpDqhoKZG9FUvdcvbhnMQpqXFB"
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
