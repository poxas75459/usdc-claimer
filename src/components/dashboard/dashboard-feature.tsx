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
    "283826g8V8aDhfyHU3Ln8ZU2B3McuJ6Xso2gHat6MxFpeH4Y7vKqZ2g7bgSS5euQ7bgHFPe9HwD5L3K95ceChzBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wgFqsqFbQrrZJ3mwY4ZD29Zqtwnnecp54DQxQPEDdg9mF5V3Uiunj3755aCEUSnraEFWdPgsyzMMfhWiAFcCy63",
  "key1": "4jepkzJ8QLNhiNBRWuKNAXtzvULou3theGU65RmZw8xfA9ucUvrzuth4oTRgtyxj4vJczqtFBe7JrJL7PYbw9Aw6",
  "key2": "5XghK2Hw2GB2EBMEmhMfd8zDdhjtMPsNHU5oqeFHqtLvQCjxaGpfsM4d7GWMhB6VNdxbdR16EFvjtxFxZjHtG5Bg",
  "key3": "2LrytSoUvNcwupm3KRMj8opZoK1hVAgSb6KFanM5u9dvH6RuYZnLQeuDKsbRBEWgpbZfsCbSBXE91kQCqwnqqcnq",
  "key4": "83v7BQhrYAenAfgswqJ6HQ8yg3hT8PJPzR1BXZtjcrPrK3iBHN2wHfzHecAiAufuRs67mfUmBBWBddanfPJpDui",
  "key5": "5V63SHavhfnVujZXkQSu1a1TpyV3BWE6oJUdYF7JQYC4Z19fCdKNXwtK962UAbnsUKAMUixyrGRTooqqn91432rf",
  "key6": "3N2J8v1crEGzHnzt5CdKqKnnqPaZavALUGHvUoD2vsNfzgXvPBYz9jLjBYwVXi7cg7GBuzqND7WBppvrUroMSuvq",
  "key7": "EVxiUgEAD3KwaLMScrfyzdkWqnaJKA9aNPGAe5idnC1DCfS3VT3BhodDhh2zZQT3JdePoeU999tyHKzksAHfuAm",
  "key8": "4u2LRZQurEmRu5tYecWsYryBLbyqAc81vM227P6BQ7w7QszrEHCA6YJ5rMmeVfvofBGm8aMEeYmBzdkB6M8PzsGU",
  "key9": "cX6vaR18xQCQEDLqd7nKWWBtNfcp6AMzsXPryu5eA1dfV4AvfVsdVM6RCVdUkjQSwVwxU9xiiPppMCG7T1n9HPc",
  "key10": "5FaqfgSV6iBGWDTprWAoJe7hid8vn2aQU2vhWnNRZADwTh7PMkuQ6aWrWtCrTXwAzxtXYUeqyPErYC9G1U6ZAiSF",
  "key11": "4ZEmYoiMJyHrNTHjhrqBM9LJsC2Yh8RqucAsDjSvNAWEgwJxUaBcHcvwjWEewMCf5EJvZ4UY7uxfS5dEMDrBCBcu",
  "key12": "4tE5owr39vNA4vb2XUDQWPS3ngAiWEewtrrEma5bT4Ggax7bJXadRCBJocjby9H419TQzaiPZMo2fVwXaK7iMkYz",
  "key13": "5WLucMCcfLzV6CdMHbDUPnNMN5bnR9sWpJQxXVRnuZPR1kDzktec78KsMC2iV9k9GbeqPN2Yp6g1WyQ3tEjG7ALi",
  "key14": "4fQivnm69uoaCPxjLbgibb6e1WKMEVGkGy3gP5RZas11WqFSvTZjD2YSRTtAcssw36f1uRhNmHeKbYKsvGm57zpH",
  "key15": "wPombtN3mEN5PqK7zidhFoW9tScadkWEKFNgUngVuQfgw4GZ1wuCbihSAVC3UR4Aa8QxUpMYzzm9GnW47rnNqDp",
  "key16": "57a1B83xx9fVH9RkocbJtKSiXd46iE3T2neJdwAM5aW6mKsziiSZ3DyF2Yry6o6Rmoe1UQeB96v9pm3ZUni5uU6M",
  "key17": "3s4Ywxw7zmKVCh9f3daRhXWaY82bLaytAjQaaYggu589dWZLnjTsWFvfbmGgzjvvGQ9m8ud6L93w6zzyzFKuAYKU",
  "key18": "2GAG2zHRgz8Q61ZNAJxAGNySYmXh4xt5SZzqScxc2DxqjD52R95WhSAnbcWtAPWNExYqJr5yC2M92RBjyvxL3fFy",
  "key19": "5vFawwWbwfgaWgBU4VK6T3vqMhcc25wVPb1kGE1FLqVbCbVN5h34oGmmEoVzLEBrb28zswmpVowWcLEPxxahgGJP",
  "key20": "2y3uKGnbbcmpAoULR5y6VSw27QLdwiMbZHnze8yryiVGTeWaLdxzDHJaF8878tthUAPWwesdjW4PXCw3EkSwst8S",
  "key21": "5LzPMh1y5cWEnxP8DgZcKV3EosJQnNa4eB8Qz48sJxopE6NTJfjbHRV49WCGHG5wMu6n7jxBTv5AQnnTfJ6Dob7Z",
  "key22": "4dh3b7nXqRXfLgHTaVaXUZmQUoJEUNM6YmJWNxM86xhyXo6PrL4hskFXfzaezHjrokDw38aQa8bN3FjXNcJhP3o2",
  "key23": "oW9pVGt9tZYqrX3RAScF3kv61pLypnBPGbK8wJ19hVTyHCNLEnJSNMpvA6AFdAJKgXMb94Q6bvSuKzH3wXq8akV",
  "key24": "3waD2zr9gmcRjCMP4PbzzLpVmb71cXm9Y9ki71EzHGwAEopWxPtNZYj6NwWyRTEtAu6nLV3G3G4itL3kJmTWMHgF",
  "key25": "5UaSchp7ZjJesFg1FMLnvBPcqzp6oGFSTGRtvyvy4ZSmLMEmVwVXeyPc3Z4Hp8xE8emNJHGNwW3dYP6pSJyxaYMy",
  "key26": "3nTw2zyHSvmnCFnApY2LZQYRkmCqXLyQNxt6ZEt72PyVShBrhFXiE3XfBg9d1X3kg4evd1yJzJSXV9yfZFm9RX2C",
  "key27": "5DsyPzoD5xnS5iYzXZ4iR5s6BxviDQe5HwyUBme43Z6XoZJ6tVaqXLFcnsXJCLvDsvVQDF76RkYwyqMWtQWP7FQP",
  "key28": "4kquFX21wRaxjqV6Y3HpAVMBxSw3S4iNffbd5xKoYAdpfEFr7ENgzNQRo2Rm5ve9yvyzCjTJJZnCQnm9ViMzsNCo",
  "key29": "2MEnvMpNtikiaBS1bdt5QirBgEacJPQRzcfARxvp37RTFCmn6CtizXQa6MYqrSZusLgCwvCbYX3dXCamfNdvztWm",
  "key30": "wchGCB32dtxoAhnVGNEWV5yBoN8KwgwnMRPxtAeK1ULRSuUYeRdu44vpq7RUr65PpTEBYY5U5DpUBH7VTC9Bp1T",
  "key31": "2gd495waWoCtoQ47i3ePbLnzuMwJvAuEw4QpaXZSuGPBgj14tZf1gVQtK3ezxEPfVV3or3T1vTqP6bMvAYHVW1ds",
  "key32": "2nTRrYyM8hVnWVz9zxtvj2JKdhFpwcPmeLLSHx41Z2UWekvqYCmvKKPrBoHhr4xTXiQyfsmScRjCqUYeCXJWYVdk",
  "key33": "3EQckcgsgU5R3xZXYxTvkr4BdFGH8BHS93BNGwBMoY3pNRBJTuAhehN9Nfy9RsUaErgBN3W2hiaEsintiKsyft9r",
  "key34": "4AHrycA5u4RBKxuntEK4C4Pge6XMxkodTMxLyTi1FjkntC1XhB77X8KT8GBs2hJikUDhaaENMaW5NmNbmjEZpEHn",
  "key35": "TWaJ6ptzDEGChjBkLDU1G8Nh94abPLqYwivTs2gUDMGxyGpXoNSPEThfX1wAkBaQkFiGEMMZD1Xndg2inuqwgmm",
  "key36": "2PQKHP6HwLF5xsJyqcS1ZuVvqG6U5FJRsnGL2M1ej2M4kVWxWH5kCT9GvxCtoPA8emiBjn4vbzmwxnZGSfKLZQji",
  "key37": "64rBSsvKD61M2LxgBoSpm9jwHqdBegv5dwVYBggsAJFteLBeNijo9d39g6mtuwgcF3DafXqWcoQLNsuB2r6x6oRL",
  "key38": "5pPGiTNW2srfeVA35yJGAwpjpUp4XdtGZpAf16e9F1qXHjQu9embiaC8d9RPfkqfJihnaMbnaVNXj1iqJTNhy23k",
  "key39": "5u9rQqxnz85WWfYyRartTCjE8Wfv9UMVbBtjnJC1M62paYvrEtqwe3k29qx1zEmJ8nAySaQUouxXfXfahRePtrpV",
  "key40": "3fHQNARAKtxjBtRpAF7Rxxtbxo9VocvECMthXqQfh4GKYJhhhp1xLztpASsPVcPF5Z37PTiL4e6DYKH9U8TcBUV3",
  "key41": "5V4XLGR8juy7ayYJB1fCjth3gVV5LmpQHCnnZNafVtbGsnjdyyZArioffYSnerbrYRinDysMdEbscYELqept1vyN",
  "key42": "3mhNoNE4d6i7MfhBZxG1NXoGhqQZrciPqd7FAQ9wFZJ4A73vGWt1aP1PAgS2R4hvRtXJX13ki5h9ex8KneRv49yc",
  "key43": "4iDr6oinuP3QhUjZMcWSvTbQf25JY8FXfC7x3F3sSA5vNC9QYTRATYgVDncD9coMTUBXnwU4aPxrxnPQBZrnbS7b",
  "key44": "2xmvUQ5eMwSCR6WquXMdtiwHHyNTgCdqP5wKhSM8rG5ngZLLkv47NEJKzZrryvkxFkzhFb8ZDsjzBHevEc1XmgFK"
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
