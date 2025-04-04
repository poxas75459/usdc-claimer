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
    "65FwbGQDPAgr9gn9cBV6qicb9gksRG5qAbfFiq8bkAEuj1vhRC7iQF8YiY7oRQjfpHBwETdJVhDA8PbbTjRN8iyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oZEsSCozwTca8AJpwWyYiUzUPLcDBh6zmKKVri96H1ahdUoQPMYnsgJ8Ls5KDqxAL9WTdzEGjvd7NrKfRbNg5z8",
  "key1": "2fQ9ziehvJkuxxExM5yt2TFnwvoEVhPBC68kbtm23tfgY527e71rwgUmgV2CFKU9Sv8fHQkMcDPynuBtdabkH6n8",
  "key2": "2bmLjNqsVBH8GeckVi6kgVJM2qCDooVM5vf6sqCB1w7AcBL8y13LkPkkEonVhKkwRumDFTiZMGwWyMHw1Vuzw727",
  "key3": "3WjTC9kr3y8QC7QrC1DidbeRKsdwG8KUgVXzvtFXRSPH4j9vrzn8Bjoqn3ykunkpd3GTvFndokgEcZtBrZXehbS",
  "key4": "5XJh8275dqAG1m8j1znj7xoki7mrCfFepuHq6L1YYQvK3UJrURbC4woj2VvjvYesEhC6FQYzyuC3gLYFdY4y6i9Y",
  "key5": "4QLGS71fYqSkTWSRA1bxsiQjMyky1AB62osbymJXapRTY1Ln5mz1UEytrBJbxrZADwCX9BpgcsVQx8HunnNRDxrH",
  "key6": "ETs3sw8K3mz2XtDRvJ8UgY1oV4JebSPH39cHq2PSqA3LWrnNpAHFce2hXq9wj2uB7MGezio2S262xaRxzic2hQG",
  "key7": "5ou9ApUDzGHZcuGowJ9hPC6retpFXQcwhRhC3MGyPTLZjuB1XBWpagkuZZKzvjGF1oV4sSL6Rf9q5cZCnLjZSgea",
  "key8": "2h1TUZ7v4fdHs6SnyiEYtXJU4xY1ZP7vAcNuACKEshnmHZyjCdgqvwuD7eEZRCRb4drGTqgKKJedJtR4uU7u2cpn",
  "key9": "4Ywa3iWzXrPa7CPxyAWjU3kyNtfrktpdnhKXB8iYFAm1yF8AKuLNqn5abypzeZUxWw3qMgLSXv6WMWGwuVtU4eH",
  "key10": "2SfTxmQZVmHZAyMDPfBdHGydrzPHWGdVq3wENrHYnchYHU35LQLhVJwSRkTCRTWUDbcutW9Mj9b9U5MYknG8hA9M",
  "key11": "L4zvHruoohmYM78EvPn8LggejMaVzEzRCpJ2635rJPicDLqwkGgKPwDdnYJaPFhKeC6L8Q6FbuMLJ93e9fVcKUd",
  "key12": "5z2BL6rodPLGN3cBt2mbkvd1FB9ZQK5AbLJKym5zbJ3wqPWFi39vTosSieNHBpWKDCCduWQgjyXn6wMqXZWzNjyP",
  "key13": "4q8gpXufD9qmY8X87zxxNmifezJV9nnVYYKhDwpNzrLbaoHmLpsvtrq4KUBkNbwwwdEn6Md6iwkNQrZ8odXuUdFK",
  "key14": "29gVV8awyiogtBaSJVj1E2V1bTrihzhojuGET6J7t8pDHvAnrJH8YpHKNbHS9NB1hwVFtno8Ef7mQh6pWhcoxrE2",
  "key15": "4mAbsC9noCkC1uCwDCWxgmYck3BjhoFZj6wVd55X3TDFyWqLf636skuWuXuP3qrTBckkmQqpMB58e3ipRRQn1TNi",
  "key16": "5ad8ridGMD4VuQhTZJuaeRBDh16eCLUi9xcQLPuqnfkcp22YjAjTCieo1pLY1RapmSd3NGytJexsmKziWiSj1cXS",
  "key17": "4Xbau5AATSd4gdpnqPAusenx3Kd3jM9rScN78PMpavtrpHurvWsKCZbTMAFb5xszaNdhhvVMpKtPdehZWnRcwSTz",
  "key18": "GETYtF3bSoHvvDHQ9wspeXgBigA9bGUN156hueacKz7rND84YRhNypsh1HhfV9bakaCndnT2A86HykdgnDHjPrF",
  "key19": "B377UtupY7URDRhFDBdtrwepBT558sAFKm4atTZURQVyBN4gyaThuWSxyeM9L6tpsm9UcPu1JGKPPnvJHHMGBc4",
  "key20": "2ravRt5mHJtHQVmRtcoPXjDntZbnSVhfhVCyY9KAC1rCGfvVsjuRXC7p3WQLuC2BNyqqdjuXjkCCz83tsYcy7Sfn",
  "key21": "5m7GABrRwKErPeVd5fMLHbY4ChMrVij2SodLmoEbxhhAA115ZNVMp4BFmwjBf35W5fwuQEub4DrCoPn8A9RdTM2x",
  "key22": "4GoXtfMhXmJz3AkSvUxnWnQWWiYcMT6BHdbTFvS8kjUzwe1h3zYk6WAnWhmnP6xR81zUk2cJTDCULt3cmfC8aRZ4",
  "key23": "267xGbEPKmJPPisHYcTYsAcMpY1hZA9dTwzjYzM2ERn5atUuzGgZYwHHZVnkECS5GCcufHipDpu5QytWcYyDp3yL",
  "key24": "4YdtyUUdXHyXPuCVC2QHHPQZgVLuBSqUvfixmVsBLc3pFrHCFdTZfffk4XyzZh4tRYxkpYX62Y4oLeaU7A31e9ik",
  "key25": "4JAPkQL9HzA9r5bL7gRVEnMiczuDeH9uzZvm2dmwB92hhjC93YoByvyVzDSdR2aAN7MQXncdEo43t7FH8WqMpj8p",
  "key26": "4hWQQsgsDn5YiE8rWagx5CzyzavZqx3kMRHg6z1MSpJiczk7QA6PxiEEWBCN9EzH6htTtXBg58Uwp1xSXzP8R3Be",
  "key27": "4Q8ei97aRMh7CpBtqzkKh9Qk5RtrcmxZVbDHzjuqq93Jje5bPeHiEJHbVt3MjS712PPg2dWdedHUNPcjMSLWJs5B",
  "key28": "3iLRHb5hgJVg79d6Zp9KXyVY4ATuP7DKbiwSsGL9iE8HcLxpb7TT6ti9gkVFhTS7fWY9qTRfcP3xCCga14A4n6Jf",
  "key29": "4FPMLb2nzjzZJzJYfhRsnVZ6tsGUSw4yT5c8VokVcBi5ryJ8FbEEuMs6RstJivjWehLpHVde15fCAEhwuC5qvkjE",
  "key30": "5GC7CLnehwHCPUucxJLLvRLbi2X67WbDMNaGod5vTthahgaLLJhqQA9sh1a79Mg1Bbv9xNAoxAQLCMhaZxfAqFJa",
  "key31": "ZqX87VJt1TDLM2yQj4AndSTXF41NacTmRbub1zUtZHudfsF19xivPMjLuu2LmY66pv7Uo6rygwgfD2Fc1wLENyQ",
  "key32": "4zHxsnRnEyzsSLAHsY1gpfTnCsd2uuj5JzqJdebh73pQjERrUcTrJ2VMHhEgftjZonYzRwNNDfo169zs4GT1GSLY",
  "key33": "61DYdrqNzK2YoS7UhZUBTen1YgsLG7hHWQmfLi8tPsVxNT6W7PRUb72zVSTwG9axV56TnRcZMjgwsLoB94JSjBVA",
  "key34": "4WRacW1U9iCQJqtusbzdNJMu53k7jtzLrLEYH5vimvHAeAmvwHssBUtFf3HHkJvPWrR236pQXDduTM8a4oj9xgrK",
  "key35": "mKb8ekrwy8LPbe2DnCWoB6JdLPAo2HSMEs5sxGX7juQZtUbpn3FN3JouoKYxn4Daidck6CctqKncth67BcVqYon",
  "key36": "4LjWukn3pqbyVXRHXm8QZBT3yqe76r83KdjHeqkrB39A7i1a1qsSYM27Ti2VbbkF9Teqd3ep8RKJS8qTX2hFdDcC",
  "key37": "XQ7HrHjZjj9V45LYx8fDsSpLvuuvyDZzAYhH8iAP4qncReJ58LcDixtJY6GipPoa44PURJWDpsugFPcPyoLtYeM",
  "key38": "2B4CEhfMZCjUxwUxsv9rBtADww8jZTwBXpLcukMfVadTRQKXrLvtPGVtbmEW7pax9xRGQH6YRpTfnh4QoTTvELK5",
  "key39": "5Fhw5Z3B7iM9sf17rRz5SCGRyA8X64CAHuo6prXTWAQMiJgaPYhpGfRsusJhhpJSU3Wt1qsK6bvLqxBAGNnDm9tY",
  "key40": "5f5B2CZe2u9SS8GrSoFMKiCXuvrbLnggedjzHe8q1LNXqnfA9mYwsWqSELmNbzH3vCLuDPsRQoFAUQR3sccMd4tc",
  "key41": "5BySRkRHJ9Bjhtxja4MomqPYEsb4rmW1cp3ka2p8nHK4zqVEK45v5c8H36qtvbSRUBbS9unprfhrWZQkX1TZF1iX"
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
