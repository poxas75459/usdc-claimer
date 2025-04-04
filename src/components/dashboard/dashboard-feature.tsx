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
    "5zXerTFe8tBah3qNdJmTWCVYFNCMsimUPHgKGsRy1z9t77WeRXWZ7K5H3kFEfxFWhzznp4qJawVKisTpTEZz7G69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o8UD4y284yAbSgsCRmD9GDCZfFhzENcy7eFWJ5KbHpvzk181Fuaw8f3YnrJHApx8Uaps7U66Rfvz9DtY4fepEqK",
  "key1": "wJti6B2CMDjzXizp3BJ1dwziRFfNAbUopKd559fXSP6EQPbB9JFq2N7iEXsJt3VTMyEyajvxyoxZ3xzwWCV17xq",
  "key2": "2aFT3jcpXAgJkMQeYWGBd5JLy3bLHErPp5ExqXbLsk5QSjjXyMPtTbVtCxkEBLh1QQFLrnwUg26Vtx6yeaDgWYdo",
  "key3": "33sDtJbaxK9rDzCBbMg7d2KSk8VnyqjHwxjr9mKnzD3jZTJKwkm7gpcoaQ8o9aLY3RhngkmU2sjzELLpoLVKegBu",
  "key4": "oTaySMgZ1cC7iQYrBpetTx5eLL4wCqajjcxmN6ZzRe4aWDrYzSvdX4FCZbfxtYxts2XCpdaC23KF99bTgaNNn47",
  "key5": "5VrwYmPW6gJmYjYtPU26ZtBPUySWNjECN1gKrtFAhDrrYJ213jVzZmomrgmmHsHNhTTBTApnJHamqiHzf91rD2z1",
  "key6": "2spHD1ETVfHLTqnLA3qNCLPP5sE6313njDjv7rW91f2Db9fV9JuitUFa33K6HmvprMqgHLrkwLLLDzkBf12EixfZ",
  "key7": "3ToFCAEunTTsNDRsgwW1ZRzgHifr3pvnj95fLsVq3PC85vqnGHnReg22R5D49S1cexUCTJyAn8QugmBwaZFeqH5C",
  "key8": "4Dap2MNp656pjEZzSGTaPaDBNABGfGv2JL1Vr7DZgEbekPSpugcvHPEdncNBETQMXgrtrkTMbUFxC5s88F4VAvnq",
  "key9": "5gSf6Pzmzm1AADKhZCM3Snf2mZ6PXmeKkUu89oUqLLMkh6UPwi3PW98JxUBEvjv419HDjknKcDv2XLQCBBr45aa1",
  "key10": "43F8bQeXMzZk5YiDHDs1WsR7AskgsU2L8gZk93mJ5NFKhz3Wige4MvY39J4Pf5MBhKCMaadjKhCi7gmFySotEfx5",
  "key11": "2EQwX3XiiCti5YAh4kqV7psX28AbVcfCUgyEQWbiYiz4k2hyvvoZgk4Nm1XbfFGn5RhVdsLerRBBd1KQHBNR65a9",
  "key12": "4yMqUtsjgXL1nzGPYUFR2kKaLgg2stSpxnpuTsVpjEjPwYiLJJkec1mYciiTpd1fi1E4YYbok9RqmCE33YMtasoY",
  "key13": "3PvabhesdhDbUuQzPJcm2nUA5SdzpBg9tmXZa7xE2QYgFz9HEhQdCabUtftggLpkEZgE2xSgKYWSexQzNLL9yFv9",
  "key14": "nz7t7G7hcdwABFWz8Md8YdD57SPwwyQ3rg9ywCXqAfocHDwbchJbdnaX1EZGCyJehb5zcT5GuCnbgCBnc2DNyNq",
  "key15": "4mF4nHpx5C2kzV4zrjKSWuYQmuWuaV3EhDE29DP4B9Sr85EKjLvYf6nZCAv3H8LtG53TTg8NjCAaMt3AQhxHaUFg",
  "key16": "2ZD18qLnQGLNrcs6ZjViGE1xTxMa2eZpihwJFAd1uJFJ21Pggb6KNyZvi84vrJEYJfm6TUnbRtyMnaEMFqMVQfGJ",
  "key17": "5CMXmsFc5snDzs4xtWJ5z43QrfDtU1cgiDaYq2R4zcNpaPQyXXLhmjk44zi7yJhNXJpjocSrxrhhZbzrCq3JVCAV",
  "key18": "3S3B3CJrYi6WKveCdcNbPdfQkk5vKEhDEHtLodP2xwJRNskJhKMf6tgQv8Uuhfn5h7kMXWyfmErqLzLiQJRktCyh",
  "key19": "o8Xefs46Hs59ohPuBj7kVSvVYe1miqgqsXQMh1J9MXZPyYjsicGGr1ahEbSHsQfkcJ9Ufcc34hA1mbwhTiLXstV",
  "key20": "TJPTLsDTggRxNHJyjPJWDfNxbtcjTmS2zTF5x73n8pmySWWa4zrgG14i7LHsJTX2LKtP9BjCnJWUJdE1dR5yBmZ",
  "key21": "Q5X6SKEEsxkFey53KKSR5z8gGzhNaXvjzva31ipAvkyxv3hNyPBiyAFZXErhFbZdSmUEgLizDomHmtTGTjVdVQM",
  "key22": "4bgzpD7sFaqR1KqQyAnCCTiJePNoQjhyhFsa7SG9aW6UZMm13jGP9VchkQFTKa8N86uNnUwGNXqcsxSFnk71rWRL",
  "key23": "2x2itYqXbkr2crd7qmuuPV5fQx1ZbzdcqSyHxbDpCcG13ZmH8VpEH5jfos51waxAJmzQeBbvAwdqKNhKiomiQh3d",
  "key24": "3gHp61WkiAkoAHnNDZZF2yU7Ssge8mDuWTHk2fFyNBPX4QiJfwzmL7K1EVmABcC39jhkaXPmrTPKFE1JgGoDjnaj",
  "key25": "2DCYdasKd2mvLXVZQYuqnomiF8ZKAHgDgEfBptghdkeJJ7UYqcG1qFsS4KsW4zwcCv3phk19AMXutB1dvZ31wXqH",
  "key26": "3zkXYQ87Z7vgfPYfyGLasXHgdfTNSX1gPw3HVikb7ukyjtuSt22ujVgBgFPUMbVk1h8qMWGch39MvuXowAbw6nEE",
  "key27": "2V8UYMv8qQKgqEurvvJiGKj866boZKsmQwnZPKP5fB49E4jMjymJiXiCjcgaWtuUk7xXSRYMWrwbX2n9u4RitEPV",
  "key28": "3UpitL9oE9afQ12yVfj8ph8xN8CB6d8RAvf2rNtYCVP7My2v7eJZxfXq3GJ85YLLsRULt7xwkw4cj6GyUr4ADV5A",
  "key29": "4z6QvwcorQif5Ydg3ReDgDbb2kmecSp8zpAQf1gmtrXcPVYZZTuBBo6q1zBz5utWvjHKN2gvQU4kugqDUgFcHnN4",
  "key30": "4eiJDb6thSDdHLxp92CnR7CU9DEkjAeLxaAhVamfeVHq3hDWg9EQTBuhjcb8pQP9k1Ej9iXn7f2fjM8N3VNvsmVm",
  "key31": "6vr7Ly674rUcZ1RoKQGiG53uhTvrd66jq61UcMmCYSHouyd9ePmNcpWcfNyJCorBiukASbbyAfPr51NhxQ9euvs",
  "key32": "3ziEUyL5sVhG5K5517K5DMmYZyy5E6RqCPdXg34S7iz4UeszTzJ4EpVePKH6urqq3n6LLVabPtAapt7dgNpNsByk",
  "key33": "b7Ct3vwhevUZDtLsAmiAYwpzpXNtgEEGZHy3Fx1kdr9LM4DAyGqYut9L1JZxdiLYRzyM9DDZsiAWWUEu5cAoiEP",
  "key34": "3BSRVZLrqQJnU43dgkuPyrQ5eDNxCTWzFQ5F9b6U8gXbXPinQMpKqgjL1u4sNnU81jr3GiJ1kbeGLQMMU1YMC4sJ",
  "key35": "2i7oftFG29HJiSdwWe79A3JXKvGQK7uYVda8y4vEvQWxH1DPTyS5m3xtjUo5oTXoyq4W1tsD41KkLDuXUEMbcBsg",
  "key36": "5yKo46QYSMaRdbnTVGaoQA7pqjDavPbjq5dvqz6KReovyRMtmwXdYH44qMWbkuYhLR6Yw3KaMCbbtp7QHKXEyJsh"
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
