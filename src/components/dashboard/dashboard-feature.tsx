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
    "2JSrDbtr6fZSnuYNLqCPUczjZmVwNE8p8mYiWGz8rZjaDbAdxftEvAXxy4DLrKDVjbR1UZzi7Yj7pRfRM9WtQ1jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VFrws6Xfrj5P1TMf6mUmfjzwk44XsMHsnvecnroZRAgazPPAdq5HDmQmjbgVxeXRnN2QB2ENPLgumUaiQNZ3VxL",
  "key1": "3EgzjdEaVsiEK2fuTL62aNPSMFSnJiQaAqf4tVGkcCuyaGSaDHv9CWmrm3KCLTcdhq3Fbt1co2KZYQQpGd29T9Y8",
  "key2": "3FENJFosQpjCmGVLMqe1MS4DqAqy14dVKvpR6rGXNA289ySpZfk7eBU6mqcdtD4r5yeShvQjJk6oyBtSQ6aVpNSL",
  "key3": "4JDJtLS3T8B4ujwttt7Yt5cDtouCWuSKHHLHbKeXoLVw5rAv1iTsht4RwgMi5ZFfN4qyRy8rhJBYjTPP49yH1Lsb",
  "key4": "2TTXPJy2EUpc6bEo9NAoryk7n25UKR7egLY9dtNYLhNfmf4eeqPzXqfG3qvJW26HkXaQbgpD39FkJHQG5FBuQ5zL",
  "key5": "4FhuunhXKhqdutgYPxkk8LykeavXABTUEgwzLSNYnH16iNn3Xk3MfjwebCkeSwA78Jqeyf8zDUrxR61kzjBSriNP",
  "key6": "3PQGKKPKnVyENrEbVSoDaZib5b9fcDQN5PuMZwmrFwZJWyu1e3jKrXW5kdR52h2xbKy4qs9EBg2HUR6d15pR7ocC",
  "key7": "31Qqkx5N1uMuZ7oLpUU9RJQ6R78TALQn6KhgSC9zC7y1cduwjkpAG6haG6WyZUVGp1LoWwe3sXGY9ogJ62zhgAdz",
  "key8": "X1k66EVhYubWeoVttVoTLFpZKLp81CoD26gBbRfMH8syvcqX2S9YaYXhHQxT4yvoWkhZH48BqPLd85XBcFWmQ93",
  "key9": "d4iEbPZ3DzQGJ2ZDrsXXLMrRLRK9DWr7RJ27eW53eWPSdDyc9yTUf5jsznQXQ9rkvsd1KRTzgoBtuzPaTxhQeE8",
  "key10": "4vRT1v7vawLqWQBCQmUraHmrGGTro48csa72cGmVYpPUFcPJWz9336iGr7R8wWi5rKf5cesK66gWyXMVcybznjX3",
  "key11": "5eXYxQxeC8vHh6sJHccQrjZy6L56kRHiW4wPszTbAAp3MsUCXt7CJ5P5ZuXc3VD73FYkMkXbLbP7XR948dKYhXWg",
  "key12": "4hYVSLWpDWR1FMn3ZpHrpN6m96MQ2FkMAVPfqK4BpEhU3tnumbYoXentmM12wUkebMdtFeeGh52Uu5ayx4eUcW2s",
  "key13": "2G6evztViHiNTgomomre99yu89bxw2dF1ox6PUVX4HuE3KzYM9mD1Prk64ge6SAbzJUDU7aTY78oCMJ8MRTwAQYK",
  "key14": "35s2DQUGvidqkaSp8UNH2QZvQTKJN3qwTXJnWMsrRKnswQwchLyZRtyo9CTXKFNJQDWvqwJX7kdmj7YyhGY6Eztu",
  "key15": "JA5Ec2ABY7Lu2Jgw4dgDSdkecw1ECKDjpHHyhPUbvaPC7UoPbQDdTkEAFQddCH2yxk6yx364AyYVtjLz19XnUDu",
  "key16": "5UyCsAC9enEqCjsKZAXnxbcGwQSwY27n6MACVFcUbPK8kTyi8c8FFFDEVZwvsUPq5fRJYwPqzT8vDsDdfNC226u8",
  "key17": "2Dqg79ZbhustUTJYWG449Kth9Du934ND7SNVyyiPLFXmXyKwbVtvysi5iW7oFjZ5SvW9686QiMfoK7HmYBuY8pmk",
  "key18": "3pBWWimaUHYPqCTxDPM5YykXgSvgSbKgLRYjMqvjgNyp9xuLKDZJyw4Yc5GdK7cua83Xg5QKZX4aDmTd7wRLDLnm",
  "key19": "HKn1d6LEPXEQcjGP8BKGycyQiWTzQVSjc394Pspy6SWAmmosW1LHHeAwRhiiZiT2wjWFh6T268HG99g44YRn1L7",
  "key20": "5N1cUKNrjmyf6YSbcLpSXf7STnDWD6oDjKbDywECpa4eRyKy4zJGNPbYzw3YBjaA6bS2E1umjQ1pyPzjDofBL8MP",
  "key21": "byMoAitsthnCX5WMGHj2sDgde1vZ5HaBcTGN6qSpTD9jXQSQgZb7XUvjtb5oir2KG7EmXe88yKN7x3ocRHEzWMc",
  "key22": "26EKrHvN6tnuWaUsA21bP1dRMtaxpAhmE89c5GX61QGonDL92Qww3QQj3MC4jD8SE3vQCbKPfKUe4BMAhcG2WCik",
  "key23": "5b4uDmdNMTnnwBjqgLWS13EGANje5JPyx7o7fPiBwkhf9okpfFbUi7V3U4Pxwm66aQjdSJ7LabayUYt5zn5HmeR8",
  "key24": "4rGtZqwAAdnKWBxJrtDAYurBePhLts3pGwks3KC1CZ1TykwjSpJsYBooXYb9yVQdjSsQ4bwXNmrN17RJNHWC8Tfa",
  "key25": "5XbuDWF8mvuuRaBy1R3X9kbiu3KFoEiJ76of2gQksgWjE6WpikapRdG5iknTWNYz6mHF4AcaPdY5mhdX5bU7UEze",
  "key26": "3FktTHU6x4eupyR4Ktrog3mPuxY6otS6GXv7P3a5pFT3zhD6RWfwP9yb47ioA9YMyRNmC6fvgBLfWEBg3AqLfEt1",
  "key27": "4GN3WitMPdyJN2akXPjaSh8KtujMPiCPKpT84tk8N4BZc6Nv875sU9C9iPvUJrEaEYd8iehdrWpbda5v8K2YHNxW",
  "key28": "2qDvWb8DCoXvuDC65UJvDr6Stk9VyhhvP1o1zG3UADY3RiJGr5ifRbrhvE4zLMupHGUrXo3UxwJdJmQ3hUvKM6BE",
  "key29": "41ADvUrRhBXvGS2o5n9YUcqt5edWgmSZLRjhDRDPaCWohmGY7ZHCM64vdGNVnSbi6gqmUdZaFuwB4nCmFsqQ1dRE",
  "key30": "3Es3cgokn8atXmMa9AboSiRpzcgsX9KEJ5kTo4KbwE7d3tXPUooFbG4jKm1Gexczr57wVLpqTw6LsjDaDrySSFB3",
  "key31": "2hAvViRu4GbwvQZpwpasadPdgQruZsGeKQCRhKJMnY4DSwuxN6CFkgzjdyF3utiFfNr8RdEgw3tJ8RzRNsqrNbR5",
  "key32": "3Sw64QPiUeswRKEUJheeYDNa56uD2yabLy37XVpUkwyupUieybbcXetBWFnHR4dGpSa8srbsVzCwNbqa6FNGL8XV",
  "key33": "3UbotPLb3ekTqJmwTAzoPYgUPyiRJqe9mD6mYpVZMYa2pDJYp4UQoR3SuAcSgBPtX9eTL9E5Ma2mxFHt4jChjyxL",
  "key34": "5GMtQmsJc9VA91XmDQTs6cyAweRbRZeqvMefBqo97xBUzKjnZY5H62BGHTGawZo1rHBFLPTjaVsnCZzJkDURS5NW",
  "key35": "5ZV1WN4Sa77MYpWAuSqbVTnFu3ZcZwKtY7EL5smKbELSm6fSiu9nN5sV4X2jgkTPUHfxfbWHkp3xXy7iTbzuZYjz",
  "key36": "3836MLBTbQBcLQ2TUJKRtzENNv9cEsLGZkwpSgFFDnBChKvZb9bFrmqqVxtVmHq28nSmycLjTautFyqVyxAKvMzZ",
  "key37": "2aw9EDzj7FfXcCuJUqQSpMQR6me32eviz67xcrPkGwrMJeAC6GUbo1QVBHqvznPEUdvPVywiB81wskCKNrEcNN7H",
  "key38": "btK9xVRhBB8GRboC8YLjta5ktTmdTeqobtXgyuYveFvV4mL45y3m4QPcsTyPFLdBprbLeCtvdMV3P9HFn3Sn6ML",
  "key39": "2keBef949XwJPhdNezbY89rDmep9HpTQy9QV7SSPxX1ABEbRAyvbhnmtZkGMsWJ1ayodKB9KK3ajb8Wy32k1H3nL",
  "key40": "2YixjREeQaKvzeTUmHJYzYiJqj2jbQ9bnCddM2Py6rSbzhZ4NTz7tYuBpmGwqooiisssuptqkgEXQ7U27ZUkCqdW",
  "key41": "21iqQDzTMv4y4wFJUat5RKSWw7suGTeKRGxXSz892y7J5YUNFiuxZ4Xnx6sNwrkVEFoD81sPR81dotDj9MrjADyZ",
  "key42": "2vtSFFEafuSZhp4hGewpDvvwkke8YzoEcbvdQh6Wex3oPkZx78StpQbtGA9KorrtDHL4gzAf49wjz8yJ9RTWun6k",
  "key43": "5qJwKqDeBKG8PAr18FQVkxfTDC9AzsWtyxH9YEGCMkeRiR3pYMFJWWxMiccdMMtboYwM2J9xaw5VBhhF9Wqb8eKB",
  "key44": "5FiYoBoPco5LGhQkqQXGnfpbVzrHwyyqQhEHWNavcaMUKuknGysmgwMZkSxzjdWHm1KpFwhYG7DgsuKXfhrsk5KZ",
  "key45": "5USNr47gTy8nhWE6Wp1RRncoQi6QbarPZsKVcmgND3Z6MRkJf2f2Pm8S9CTYuJissd6Nt2KZL1tf8GUHyDipDufj",
  "key46": "4yx6PhfsvNwJTXVEANQanzhVWu38Dj8F4mUVtVJeSvAyPykXPJ2rmKQSRV4RW6ttKCV7dqDwRfDgybyjYCvxS6iZ",
  "key47": "3MfZMfJ6rBTKb3g4PUYhqdnSxH9uFDQ6ok3x5utkkjRU6hvMbDnRx8EGY35VXAUSKEPkDdnf1ewae4D6dDmveB6o",
  "key48": "3onin7ibAM613G6hdsy762o2gMyVLgJMxbfGe7Q8eEvN5p6nc72TmHuBK92WJRMWPXaGYzmQWbQDBLY9HjQPuVoj"
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
