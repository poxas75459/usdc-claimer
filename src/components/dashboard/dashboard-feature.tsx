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
    "3vsuo549SNgnjPidwGzgeVPjK4k3GgGmMduqTocbSRnYgY5A6n4eKULBeMhn7R2z5eYYqX5AEoKt4mh1wdzZ2Jss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cduqpfo1As3s6Stw49ipCSJ4pxShyEZofhCe6AQogxV1CHqZBTmKWCXtnbvq3tJMnHdb4wp7GVmz6ybKajPeGcy",
  "key1": "2rKeADWmjn9C6EsaWBu5ihi4NDGvbHgJz7hWwc1SiN92xTcCekgpMuMheT2JX2CpnGwcrxRomBgnX9dcCJvJ4zyM",
  "key2": "Syu8BwqA7Wf1vdPmAGikPqPfRzA1TzDwf66y52Dk4kJTSGGVvChUvKyuQk2iowH3FXbuLawsN82RifbCNZ8umJu",
  "key3": "24YSJSoFhij17Bzeg3ZM7AjTLYbQcrKp4mM6mogXEP6LXkYriqEJwEyeymHTsJF4C5tyLqvgFdYCNi76Q8UBSTap",
  "key4": "4QqwTeiGTCXd2zdpD8HJQpMZjrqCJwCTPgkz9m5YmLJ1TAg4SyRMfwiMcvHc7pD2rCX7ff3Pe86fj6UdgCZgJUVi",
  "key5": "tKFJsjCf6ykEBDCCwB19xd1zK9q2xpavEof9eo2kMfeCTTdva9gLvWYRrirrtYFwPjKBxo8Hrq11ag99KgxTAbe",
  "key6": "2N6AMVCqMZo2PQT2SVRnRgYTvZQzH3xqt659RivNmHZRVjKc7Jf5vBoT6tHqyx6esStFwEgPhsb8d1gytR4f5eM5",
  "key7": "2kcD5R7GsXtGgtLRaxwhm15BKFcX9MiPvQGvam599MgaG3XSSd5Yr7FK4QyUjdu72UNm85pEpnUJVJ4ukqXEGVJL",
  "key8": "2rh4ib6w6wHKyEgjh4r7473JL6Zh2ADjaQZm88NyaGx63SrLqrhxusG6adEkBpA6DjHRLs3jPPsgEaPsHE31V5Z4",
  "key9": "4b5rExZdXCsMkf9oDNW1DFGsFzkBNb8gNGYW4BMKq1yNBJTrbvaPSuP3DHeVij4DYJrPyufje7bkuRUzLLda6twJ",
  "key10": "5KKSMNxAiHSYXM8vXcMScBh9NFGDHNfAQV9znr8zdZ3LLDXWYEf5gPg2woJ9QkpLyHkejSuVXhWkwJih7YgWgThs",
  "key11": "4svaEEbbpEwYMx3Ru1KWzjeYJwtKsybcJMqMeHkiwV4tQPhBwFNSHERaLcdXbEqpQFe68K8YDySbX5yzwUdB7SG4",
  "key12": "AntsebkBzvsWSjjTRsNi4B94Ax2h81FMcWLW8QiGMsQrvSW5z39g89M44bxQjrHJq7mFV13qFWbLMj6zrvKJzcP",
  "key13": "3JBUEdqp7L61EshyhzzutBPtdC2oJyCLyFxytZkESLxdoNFGq9iL89HFtexsYuL5TShbRpTDzJ75PLMPV5NCxjgp",
  "key14": "4JeK6dDBzDfB5tzE5huv6qcauza4xzKV1CKk1RY53Gkdg45kYScXPPrYzYCdtme8qznJE15LUUcqE9osVuNS5jEW",
  "key15": "45aqyhyxeknU7qjT3hy8e5Q6nX1oChBLZtCUxTHn5wgAUJkvnYYsviQMTyLKN4Y1gjBSP4mEtm2Qf7YWCGMqVLhP",
  "key16": "5yFLF1SHLHyG3jY4nNpeZ3CFiwk5BXp2EGvr8FLHpEkEEG1cj8fguqsQmVYG27GoqDwLmoJ3Ku2omUCimhjg8vD5",
  "key17": "3aziqkU9RQEBnAajssWxqzGwmzL7M9zDEmaLCiiAZTE8Qkd3qDztAJgwaDyKEkDPhCxycMjRFqKnikoxYkWCVPQw",
  "key18": "5PFoWyxVVrvKqoKHgSUUuj6hkLVn2LDuTb6jZSWgkMoFVL3zv8tR7KQzhdEarp75J5ahnvA2Cjvqbv7Tw64LYJe5",
  "key19": "4y5V432g4tNCEZdNjNfUrCG2quRxe5aAw3i1tbAEwhB6X5xPwzxCJ9vkMqbirh3ngt9Ltkjokq253SSAcRZES8KM",
  "key20": "59NVQFH3qmBCgmEb1v36W1JngeDEjRT5ZcCJdcyUg5qhhrLaYm4KEEHBCiuJ482WvEwWxGhVS91DfcaNHmRDFDji",
  "key21": "3Vyh9Zo1TQSBzvFv6oYYuhYWtR7fWAbQSdfJzcAWmNzwg6oZxBbmed4tDe3oZ2VocwdzDTwWMhAUUkTmZcnG7pkg",
  "key22": "jwGsG7GSfR2DYpqbLVJW9cW48J84oBVVVCMc5PZaJ5LDhJXx2fEWvS2n5VUPPV1sCz47dZuygFubVtPgumrnWPV",
  "key23": "4D6YtegwEYpaWsXUWGNgP2Dubx6rD5aFYmYjcjeVSfB5iw1mMAwBhbnGqhffHj592zXenDcQj6nT31SbJyLR4itR",
  "key24": "5oiNYwhfnHyxZNCVedMnaKyXK5iV7hiLLeAXNckvX7hLpksyeXW9VY2tAmLK6ayAMW1PNiAM3npYapbU5PAGnDLm",
  "key25": "38fwifaKbtC6ygLivtPpuRP8MDJRuBV16sDjey4h7hAZXCrtgYPjvKKvyQ9aj8e4Le1ifygqJ1RVkx2E2CvHcYpe",
  "key26": "3A9sEK2aGoN7oRooxMEviGopJqZSJbaNNnoqY7A2guVQyTA5G4AkhmqSBzSzmg6g8c3RK6e6GE6pqRGo1AgrP5gq",
  "key27": "4CWzgaWbhgjRrxUQ7esJuut6CgSmzNyWnLMB9vVHZ7gpeYT5K9Kq7tuqKX9NDyXBzDMtVHRbts94FvY6BRbKSRtB",
  "key28": "3UDmF5ZVCB6ufFsB4VftBmUjgQG4973X8A6HFMz6WKWvuYDy4LmUUdfJ7614Zgqp4fryC16EazTgoKxrXoJZdkXU",
  "key29": "4BqWquXrQpbBg7jqeThomEQHQ4cwLNwY3LGCZ6eGZ3heYwYE32x3aM79oLM7GzBXzsgMjG7k1s36xWg6etwDJJL5",
  "key30": "5kEKzXiytdD2E44o6Zkb4P9UWV8BhmtvLtGkGpMyHu7h1CE7kxXoYWb69BhkxbAusWvgHrD6rcfscgMYLSz3evDL",
  "key31": "3oa3rd6MRgv5X4vQvrsQRDFfZ8oZZHi9ZotFiFf8jLgkd75YGzZAtq92iYoWZVi8PfrhWUm4pYqn6XPuUWMJNoJD",
  "key32": "tFhUEH7UnYJbFhi1NxAZirRyey2drfK5dDCDpNwHQrYo6wvFZ4s5rfgLdR75vBozG1rEXnqQuee9tpSxnKfigzC",
  "key33": "4LKVWtEQd5Z4cUBwMx9FSEBb7oGx7NirnyZ4bQgySpncuj5hY6nqQwiTZ2db8WxmK5vB7Tf6dzh4gQAFpu7wcB6h",
  "key34": "UR46UEtLdnJ22KjRs5RV7AbWg61DYnt7DZQhMkvNnEx43K3Ax6U6781Z2e9EhV42iLe57HUYeLB3aDev7dX1JEr",
  "key35": "h6mFmboF6yMVCSj1ggtEJ9hoc4u61rqMfnBnqFKMNa5QJWxc6fy74iDkWVMMwXGTnFqYfPUbLP4qNiBS34SdyPK",
  "key36": "2rWS2HgL28gQmGmGKY9F7Df2u6vZ7kMSxQq6fKX7ZWgyAtEB2euu8sDjScD6XiXra8AfwKRaKDDUJ7CCBj6MjZpx",
  "key37": "4zFmGk9ZrFjEEeeZsnbze5Rgj4Ac3fey8gk1zDW9uiU11y31o6B4BGJQAYNNRUyJfY7UPWqZZh5SEyeUJGAMqGXX",
  "key38": "3uW5iUGcPRNTqfpSE4E8mtmvZLbX2eRNDd3fJsBzqpeSDFe8okcnf1LykmEZcnVzxehz1d7cWB8GjX7f8SpUaCCy",
  "key39": "4DVnujsuqDgYjEFPotKiy3NXkwY1cj6sEuUWxApJ1ujwMQ4cFTGJFy7kQuikQKz64sGgUnoARYtGUUajjNytqUGF"
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
