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
    "2o6P8ToLYy9yQeKdFukC6642rZJHmNULY9w8EjTVtkB7pc4cGPE5VREa7eC7sbzvwWXSWrDVBtZgohNEMDqw6NLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CzZrWEartFujiQqJFBFkUAnN53d5GbwroQRF2vNwy5qZw9hjdaKhiqoCpnJb91QWMTMQa61k5S6Zgt6SjhWDCqN",
  "key1": "3fNU3onBTd5VG1PXN1XoXvQi2eC4hF6So7eqaGSud9ix6qVwbyAw3zMFH33iPEHFbZJefvpF1NREn39iD75vy3Wn",
  "key2": "33SoRvUPaQRE3YufdcsZPZw3dLwsG1Z4AeYdvPmEuNmkS657eVRgWu6G75V552gPvkRwMwrD34SjgST8R2sTLm5d",
  "key3": "5gV5n6Tjs8cUTC8oorT2Hc6jtGPoMBJiah9jYGKNUSCRrSyUWdgMDjwpuMPtKvjYbcvrPYGVhrWooF1WeytB8Pbm",
  "key4": "NGfbyrw7npQC65Dkk4UfZf8nJudfTJpcdsvgoi36vnPMK7QNFPvBQ3wyfWEnA6dZe3wbvv3stfhczzgrSZFY8Sa",
  "key5": "4d2yX28AeKxPeaLnL4abNPUKF4y89krz2JabwHxQJQRJp5o6uNY5jVXAmtGZi98P8zfWDKycsw3UcXzrTsvEsCJ3",
  "key6": "3kwnqCU12i91mz7iADFDLRm7hDeKfqB3jVbTuacrWe9J3k75p6nfT86Vk2D9W63iminnQJxqFPRXNWy9SdTreWNf",
  "key7": "46Gk4ttgBqG1tvarb51L3q78gZ73aEM82xi76tovq6NmgrEUXJGGHCDnsSkzeKRLLN7Ra8BuezdqB1pgmVSpVEGS",
  "key8": "pWQ1ZtdhFmtpYQta6ePgwYGBoKW3j67kUjvFr7acPu2RxTcVcgiThUNqZByNPaKKXAkQKKCSetvhc4zr5w3rTMS",
  "key9": "2hvdf6eckqrj2UjVyWrQ6jQ7iCGFcpysgojDkH394sY9D5Qj9EaqSmyo82P1i1bNtnACgYMv11yzp4UyhJRjCwNv",
  "key10": "25rtKZTn6XpyUa2eRb4ELQJgAinnprUNZxbmLrCWNdrodNphbQH8XaxntbbyraJF1VpDVvgE9QLMLC5QaJgCF9Bx",
  "key11": "5JdEdHZUiAh3bEw83uxprVNTkdiZWvJpSpxvGvLazhy2xTwzKMjV3JgK6N9M1h6LQqCFbAk95ypmZ2GHRp7PQf7K",
  "key12": "34bE1W7gFMuy1brzCPvNQp3cQ5Uc7GJvAhDHCw4vWXQYGG5cg8hhvPhBVNnrrAHGegEVNmS7hKBkzeYKZwYRuHuN",
  "key13": "27cmGkJPoQZaCfbekE8Ugdi3GSyYRGxMMgepF1q9rwzhc8kxVSeA8f9yLXeSLDwSAXHXSEGbDosjDQfBEzfdQ9zf",
  "key14": "3Cwc4ZT9MdG1NXNuCiHvWuuimsCqNMMhV76fxk5cbd9hF4YqgwcxdUCso3PvnrKYi9LXrjqYgKc4119RfCL1wgpZ",
  "key15": "2VukNGVvqeycvAPg6xLGrhNK2Ng5WW4vWFdcaUHAfaRwJrtL21jdyBuZ9hE4vY4bhjpQchpfhmfNvywNpkpatwr3",
  "key16": "2jXzo4VYHNYWB4aApTJTRWZXVRnMjoWH78dgorbURgTUK5Fw89ameZTss8UN9N1cfVNRobSTQRLAVEE7Dcuo6iD",
  "key17": "auANsXbkAXmVxuKLpgxsWgYgErTt3N6hDDj1T3aSMCGDUQF4Pvkw7eyTcCyRWDxCh2TGa4XbqG14fXn6SaoPnZ5",
  "key18": "2iFryccHeTsTcA6r1UydK955s45MbHgB16PTk37GQirweXenhe6vbij8Rn8gCSS9dL5wZpSq9C8ZA27hdcvdYUPA",
  "key19": "5b5StLVDJ6FZdRzX8aTZ6umTCKyBKpUgLVwufBJJAsAoY5wWXNo9vrbSUu3dyF8moAoJtiFhwKWhLCPXG3TUfZo1",
  "key20": "2JemLqoSbGY4hhHPhoVjmjwo3HJCPhuQUk4eCGXed214V6aoYh3LAK5YL1z9981yFkBaaWroELCjw5QXhxnheXXW",
  "key21": "wvBxVrxzrvmGYxLvk9RgDXAz1j9XBmWwLwKWmyDSeQBLQNKFSMCrEk12Vm66dFBoBced7EpTA7HbhjbLpBtnEfy",
  "key22": "3eCUe6pGGo7pgYZLWFekXxAkM7FXhqRLuvbAnGgKpoJY9aGvsCfFcw8AohXEunwpVKCR4BytA9nkGDhtZRGggNXw",
  "key23": "48UYisvgujL5orQq7i67W55DFK3kjTEiC1X8N6GtZk6WgkjSH9ozLuD3jG9MULBxEtNtc3xH1sCKaL33r9eWBzYh",
  "key24": "4Y46JUM3L9FDMYPZVYvS9X39aApvCCW2cfAYXzG1m1vugwBMenFcebA7C3d4kvf4TY6hVxZCdJa8rbonwmo9BJRh",
  "key25": "2K9iXk3BRZk7XXXSXe4yjB3cwFRVKFCYs4LvRepdFtWcabnftfYwzDNbEnaujxHGraD4sKRmXBc86H71ubzwPoCP",
  "key26": "FGzHtExkeXuYDDCQHkAUEmAgz6Yn8rSwNF1HKZkZUM5KfnwkRbmVmVkrtGqhaqvWYBZFWAQ3nEtxHHCrKVqq86v",
  "key27": "31xJ5TffTtErJLno8eTYCbdJooLSHasKNka7Lohrariwpxn88EQYS8JTpAdZooMmPW8MC9YGhEHY8M7SQNzP3Qv2",
  "key28": "2aANRN5MMNeNecmX7eD1pQzZqtoKWp7PGezvaebCoEX5H24hnwbuK9zFsikhoXbyVLZxf1RAUxj1harR29VimihZ",
  "key29": "3YMoKZEZTFcoMeEHYvXcbsjfbXkfWs4nZbu2tBpEdoeJtdVY83JubyQGuGQPyNi2c3Y1FDqY1UawS8LpUeBHNe9D",
  "key30": "2ybQ4e3BkNtmzc1Q7wJmkNNRQ6ntoLjwjK6YCBZuFBJAfWMaTyy4GJRNPwf8g8HX7BWW1pfH13vnwJMPHR7aevS2",
  "key31": "5ZqHV8KhXk4HvVmcMiD4B2GJ4GufAYcFzkNyXyvVBBZVTznDF1ARbRJvFwtm1KNH5g7FD2M9vjDeLznXRPgXLbcT",
  "key32": "5DLpfJbEcQX5urq5RYM6zG6PYYqiajgrHgHbMAJGmb3g7CFjsypK7ufUvgdj3XKUb7JiXyq5mi2HzLRWKsdNLitv",
  "key33": "4YiYLNZuo9zfi9T3r74rRGp1Ljjx4asBRJcG49RaoRnW6rDybTZmBcFe6cQqKxHhhcu1JhHPUhZNbByS7hjDtRNg"
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
