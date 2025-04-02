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
    "4kSGviLewrZPwCuVcwqGzLX9rJBHhLtHjeerMREr4jdfVzwKp9QkAchPXKGSpqmNUoYdpfuPJQP6tBR43StCouEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D6bQGgzmMsHzUSfxnJiT8vk3P52J7KUK7q3JW5LYyQYWJtPUoin8ZVuxEHULMeNTJactPNLbDgAPo9KBV8J1zTV",
  "key1": "5FvBWGxttJt6ZbPvos1aHvwwTqvdqfd5TNUn14dKsMofxxv5DWNyBgLjJeZ2VrfF8wsBg8DB88BqxXhZQXKePz5u",
  "key2": "34pDCr3Td6yrvd8RLbigV6xqzjcftkDTqBLXA82Wi7kuHEKDDXJWkVVhDk8XLdK9PKomiReKzuTy5uJGWsa3YToS",
  "key3": "2dqFnBzx6VCQqKUXYvFrc6Z7pSM3kjnPYeePNyWd51iYSENTAmiwoXHrrcjWqi4u7tS8HEWfeiCi2RV9F3ySEAoh",
  "key4": "kTpbWFa1Gm3d5qA19VWj2WdNJW66ADKu3NFLR7Ki9wYAHdwVLQsppw5XBrwhxbsvMtkE7oCgV2wdL1y4JUrNtdP",
  "key5": "59rSuoT4W3jMd6UPJCR7yiL6fRy8e9fJhM9CecLY67ju8DUZhf5Zeg4NHHm25h5Ni72PCyyLNJVwSGBtdSpriYsz",
  "key6": "XvEziMW8q1ikeseiBmGhE3WwsuKesCZ7mJenGKKPubyCbhzCezx3tSzJyqknPPnTfyK9veHY39zYqVG9jXgDoPY",
  "key7": "2pDSvdws9ucFgDBTxcX26i9ycJ3SPmawPC1BY8Xbm8XS8faEQkEkPzZ1SZPJE6hrmhT3MqsoydFXaaXczP51AUTT",
  "key8": "3omZmKpQUzFg29UqCsDWXgRNatfyfmJx66mDgSeVtRBhKZ2Yfy8ZggcwLaa6UfWKfWyFS3VW7C2bTsruKmqL5XnL",
  "key9": "4P5suQ5ZaKKDcvE8fLLuA5aYJv3FnxRR2e2hNBAaM7PGCvYqUhjSHbec9A5EsxzeEVUNZ8FLHU84cBEek2NmhjGF",
  "key10": "4zUnQfSRBn4NYsdZADh2iwVFnTqKa8qbQ3zWRKDJARW9JrgoRSWXti9PocbkHHrhSWuriohStguk6hkoqvQupqKZ",
  "key11": "4exHYc74BJUh4EC8tEe3LwJo2zVBcYqJZNwNJsLZo4JFj1dUzq9QagbLg6BvBRvSqys5SJJQJsQYvwYAzstzxN7W",
  "key12": "4QLmTmQeh84V3t4DieWF6wtspWFbzV6AhiXxqgbWE88LeG9EDQs7N8P9MBzAcKHMqdjw2EaQHqvFV2gNATsa9FvU",
  "key13": "24RJdVG1kELvdRYHKL8BTj2spsM4pnhWKrdLQqmPGBUhWfDgasy7tWUKcgNvF9xf3Unr2NMLB9EiwzMAWD2i1PUH",
  "key14": "4of4ExLSSwkcUwKQeuAeAXw7puy37YvAY4gtzDxPnxhQe8Yy5vC3Cm3QZrLoKPExmu4SSj8LkLP8y3uXFYvEAmuS",
  "key15": "4c577JcykbN5sFYusaEqCiVSgLXjUBp1FpuzGR19gbusuS2CLpUgbqbU9TgQ8DhTGkCRqyzgdUkmk6mqhBCWTpvi",
  "key16": "3zJoiW66UXBPNHVRvXGFDsoc4Z6mYCDFjpJCNoB9YGKx1orvVWNcqh96YynWSDf1jvwh1BxmRZ6yWkbPRfw5hdb9",
  "key17": "5STRNn9bZ75XJXQHaHx3S6sAXR66hzcHyuhaQNqVncnL4z87tB3MZHr7TiTh69PesM36mcyKXdp423e6uoYxoAZb",
  "key18": "3VKmTuebVYyx4E5qgy7G7zQcp7N7Nvjn79VWwj1xQgjtqitCy8pqxiFcqrBAWbYFo61Rtrb4iEZ6yVkLbtyUAcrw",
  "key19": "3uZMeH4jd8W5LHbWQ31oKGLpb9tA6HGauW9T7VudV7DZurjPZwgjVfWobts1xypYPavhhXFrYDJCgYCJsoihC1iW",
  "key20": "5XZo62wFDZNFzFgJev1d3qxTtcJV7qJrCmcwWknNbmYnZyw7RftgtCQS6fF6LrMmEiU7ezedDaBoZB8varM65Sha",
  "key21": "2Mthk1JWHooafWc5U5dbiwwgfPSHCFAgLG3YzuvrZC9Un3hGHtCbDKgsGs1HHVg5tMbztdpLboZSPYXnxnLq49Gp",
  "key22": "PAuQbnW3BrTQyhY7EPCJazAPbBhv3BXbc9kEPyZA5Kfep5ati3hwAfUem5fwRmreqK1VK5znXfett1Ng9PLKWKp",
  "key23": "52VTSQzbYPhEtepjqDLe3T6oFAaBj7mwUHP22SZHRqwoBzMJupGA7NPw3MdBmkkLgaH1mnPf6zZVe2rHVKpVzZU3",
  "key24": "367ixCBjkwY3XRhy81aVeYdtZKCFpF3QFaQjwGCCsexofbYyRtxqfHQXb4HG5i1HH6oLUw5Wnv4DAH6vWnEaWKd8",
  "key25": "3xPccLrKHpVGYnz3WapXVd7AuicZunifnzWbC7TtTcJtKo4U8LTXcDCxh9TTKoik99EBJPX9YyeBuKPGBMgGVuWb",
  "key26": "4WuXifD5AUYxo5SLphR2nM7j2tm1Sth3bdhXigbgGrTfqoEHg87xFzgttEKtRCE5F1MeoGZdaVyp49ytFa3npCQe",
  "key27": "3nxPVWaeby7KgLgrGp1KN1eSeRrAZeSCF1uJ9TWbgNV3uFhypZZCmy5aSaJj7H8Xtyn8CwyNdDvEuD9j1JbihhN1",
  "key28": "4CUc4MU3oiXgUsCzkk4z65dqpovoA9wt7zsRpbozA2TiB1uiaW53Vh4LAYSmBZ51GxcZP1XQnQsFKi6S8o1zMRxU",
  "key29": "27fi5LkySxuHaZxmhbzRcM21mNyLrPAYEQNu6wTt4e9bCSVFevM7PS2BhC39kKRWVBh8XTV7LHg5WB3bHbAYsbxP",
  "key30": "5gEMeC9Q4nHPnCKqN55UKzirFEVsAPaL1G41KLscS8uwEkrV5etBotS3b6Qfu4uUK9gW7j2z9fKVoLyCPRcoAaKg",
  "key31": "543rScZYtUPuCMHQuDScMNjzWviYZwoUgMFdkw3RiAnvhTKazvibip4EV49qWMyiNGbgthrsLMZq4MSyLCPH8zD9",
  "key32": "F5h2QjbeShrAzbs43sH9nDk8GstHadXcanNo7dnAwLj1gu3LZqcE6xFCeE9NhW1jxmK8XEpApSd5cLzXSH3nojs",
  "key33": "444BrPVyUpnRnxNRN3D5zkwmLaG3hgnW2ckfTUwKgPPsZRR6JgnFa7Y9J6sivFize3sydxjtSNgKrpN1WC3CzXsx",
  "key34": "2F8RmqnJKBAPs5ZDJpp6QkWvzVYMJxWumB43DJcFMYhgFySDR3cTQXJZ2cLKbhKDp3SwFch2wDjCR8pJkaWz2CPj",
  "key35": "33BfA1AeuotvyKnJnPooJSNRcaNCHVayK7SsM9hcCpGLAp8Dw4SctJCaUpjJZpePAdhLJ9zgQtR4K6eWKr3nkacn",
  "key36": "5ezeinkQYBZTbf9DfTzFJJrn1LRfa3ZS6o2DPzYpo5P1xnWuWKEwNQzWnKs5UiXSeuCvS8DxjiLrehPVE97V6Q9f",
  "key37": "5f2Z4WVs2XU7EnWqNLkxBoRWFrWPN6eJPZjDX6pWTMvsqZ1dFqEJ2ty69a4dumd98CE7JLDnttH2xSfzd72XFWJv",
  "key38": "MvkzthPQEP77cwt5P2dD4WzMhDhyxt5kgjtG1tJQ1ZhHTLGXFyaNmBbanUt3ahh6kMoKfKc6aoXoLyj481oAnBs",
  "key39": "3pa1uab1kiveTUUizYhF8RhbXWk78ZZEziNMjz3B2z6kqDLiXhVxWiNKo1yHCRdMdq1Cd3vZNs1f4jtG5xBwWXp8",
  "key40": "5Mc4bRr5p1zGy3x21czUFxffPRDitVsyJCTZnsoNsCZzVbxRRoAZNawEyZLBxJ2j6g59ppt1KWh3zmcWh2FrWeKf",
  "key41": "5f1TtDPD4hdJYzEJmAtrKvfr6bEKXbXC7itZk224wb1SQ9Vgh3y8YVFoCabeVZdfjh95ku1NrLH58vYai4bQ7gf2",
  "key42": "32LUzwAWdoP43Gn72x1HXaDYFZoJasqQw9DpJNE2Nfr4AXDWZ5ph785pfxVe8aHHk8MEbcZndDgd4uq3ETHYZdX9"
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
