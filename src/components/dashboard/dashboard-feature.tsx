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
    "5cjB2jEmyKiUNbvX6Srojr4quFCfjFSscLxBYtxKhuNLfiKN3kXK6zwWmQ3XrG7rEVhzAgxnVS5zjQm1Ag89BevH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3diVd2TmcgfZh7RzHPA1d9WFhWuacVE8JT62cG1BYTfj2tNaG5PNhGLX9hdwPiiH8Mddh4ibR1Nep5yB1HarZ1Wb",
  "key1": "1v768u83HS1TgzLoCVx8nqBKjzSbDomcirizG5j89mCp9y8NWEopPzX9UEya71hwSNxG4QnFmAfxytbZumV7zbh",
  "key2": "2KbYUPwmGvt27ej3TD6oZV3ajCQUntRwpumHrwNVWhBEd6r7zdgrHfxWWNuU5rtuzANkYZEoM1zVey8FHuWrvGyz",
  "key3": "3KDC5fRMqQMAWL8WWQCURp2XVy2L5ou7gE2SoAQvYwghDhPFX9XFt6ZdzJNft9fgUNxqfRkS53CkBJjeSWY2GN7i",
  "key4": "34jsFetEc3uNeanmHAsAtT9wL5c1KUXXaU8zrgWC1mU7srw1WiyJ9Hw6NhPBEsuVk4NYyWZR2t8RE13YX3iMqRBs",
  "key5": "nDsKaYv2Buie8mBvfBe8VcGEqDyizrBXqDRPYt5Y7og6P7M7vkRMeo3B4TK2eDxLG4pKMRpL4KAvtdFKvxN5wbx",
  "key6": "2Sx9BV9j8nci3i6THsBQB3FteHAJfu78YTc8TQhAyLy4qthqeWMF25HAM2Ku6gLFazfYNknX2m7t3TsQrYHjBy5D",
  "key7": "3VApDghL5hwYH7fgYTuqxHeQrbJtBfndBRufp4Cy4qqzi2SeQn8NSofjdbyZcbABsg9gMic2mgbJsbYTbRRd8dr1",
  "key8": "vN57XGT5tjdk1nLzAjT6yT1QmSXjeYSwThTZkzh93mnih7BwpW4pbLGuAQedmFhJrbrjfTX4MUXKLg4dZfQ396f",
  "key9": "2L9yUctcc972nSEthDu8Qd62w6dLj4fMhL6VcN4KoypWZ1ZTJFfeom1znZPxUpvpqsRMj88hun2a4X6dFti3LqtL",
  "key10": "2mQf6kKAKgErsAjBb3cpqXr8WCzLGvbxc4JMR3FacXS1qg85JiZQNnLbbLaXbU4AGQttnKXACuK19u1VFrPuh4Sf",
  "key11": "4C7bQ4mpBfPA5p2xuqUHuxnzYknK6fypV7Nt5QAnRgRgcbsuNimHvpbojhU3ze6y3YcjH53msJDtcvfLEeEx2Kai",
  "key12": "5vPJGSVakTwHudoVgZSfTRUALGkymLbyX81fQ352b1Qx2Jr2euhFrZnBsdPpnfiBSnb92dH8mnf7AWA6JwY9qXxs",
  "key13": "2yVNZnTk4NeasKCTX51qqEqDaeuwZNPeo5n7tgKKRyxXEuKGJ6wwSw7rBnCLo9Y9oV7t7XvJz7AGQ9ANKb4Tvh21",
  "key14": "3AM2iKjkfge5XPZg6EdJFHXEkmUCHoRcRKJdRcbFxfUzRoqZpcYYwCyCy1TvrVT5A7cGVX6Ghhoo6FUieBivcFRa",
  "key15": "2qYvri9Lekh3j8AZAJSGceppbhBLcXEwDPx1JgeiEVNgmWGXst2x69EMApXKAU48AP1KqJEWzVm7mH1U1UweSzBD",
  "key16": "2q2VueV6rwfHXp3CNKAiNwEWxyEehePh3gh1mimMEDVUR7oAgojd2p4JCUxvKvurZmCqcCucTxqwnBqaCh1t1etB",
  "key17": "2mfyeEkw6c1r4P2bA37FuAQozZ6iXzvQ3Vrx691n8yngRWqEEQgJ32VM1mWa8JZe8hj7ybFUcZvXkbsR7JQHEPr8",
  "key18": "uPmMMSxejYkS8Mjp3ZUPcQTm36SFV595hiJKqbpEEFv4RbGHCtBuWqoE52KumE2bMeCGXKxLtggW5dhbA7GCFE3",
  "key19": "AFd6Q27pXnxxUcTFQzoNWGBNdoRDnd8oqgMogQpEt9YGRpiDPzJYfCLph34Fq1RJ9nNrsN8sRR27SXG1JvCMviF",
  "key20": "gaEchWdbr5eUmoMuKSdp7pt5rNBxcyQisU8rttGCzKYJQH8BaZn4pspPd3nPxj239cgiaeUnuT9RH4iho2EJQgu",
  "key21": "4ErFw1YbEoZENWYVqT5x2T91kpWZqMUq32RDxqukGaakbpGsZd9Mb3yc1AetfnEjMPVa56z88VX8ZTw5m7QHWjYk",
  "key22": "65Z57Kez5FTZgpU4q1fBcMAiWR34JUcyBUD45Us8YHc4XJaxqh8TMxNPWzPccDARCtG98sDqw3Ai5dqBZU4vPZdX",
  "key23": "32d1J5Sayu9KPDBjEbKqjhMJDFYbR4E7amASs2F2ZbJkD5WkJNdqxMQj4u6J5KHB2SeJvCJyN59VKZi5Qecp3kpT",
  "key24": "5iFtiiyNdCKRn7kachKKVWf5MVMfdsJgywAjkh1CQxE1TCxw12PoYw6YoEv6KocxCbLsMAbnPaCEDET4EcFgVo7a",
  "key25": "3cA3GnwSYYkUU3N8Jket7sBpy4CGdxNktcveVSe7Xk9QesxsPCV4Ee3R6W8HD2gPzcwYqEaTpbsi4biAuUkv5c1g",
  "key26": "fYd66AGWgLhXefpog2NaKMasc9A6Mp8ixM19BhLAViBSUX2xqCnffip2ty5gvu5oEtsDho4k3A2PYVi6AdtX3N4",
  "key27": "5PPgtoLugfHhBfcm1yYfw1omNv8LcBDH8eY8wt2TV2ovqYCZH9rBjNETnFnLpR7DQ9AMY9LTpFrvizkZQjbg5xTE",
  "key28": "RSW9ytX9KEFXwRLADEPWicNkDH7PHow6gkPYsETCQeRvj8dY74yGnGoTEKdjjPppWf7WPgLxHz3eBU7y5sDC28f",
  "key29": "4v1K6FyWL8EWzF5qyDyGbFoKJUQUUuAE9n1zszpPXHA3JXjvzxz4NkaHndu6gU1rzV8Dg7wc7xjVvaHmxaaVEwSp",
  "key30": "23DudJVv5h5YN9NVzNrqaETLSrQTSNpzNnXBzu4XB6c3g6BJNbhojj7y1koRQHXmxYG7zTANLtDq7pyjqFVZG4cg",
  "key31": "3EARoacE6SbwUWni94Be5qkDRXWRMuhwV42LNVcUgz5WHuNXNoHKKkDidLAX2KVRAHmYivdZWDk4yJEh8VDmB9Jr",
  "key32": "5yndrPWSix7zBwro1aVNjUwELThatWbFfeRpbAejuLKaeEhXMFBdzexVXRZfnDYkkTrUJjZroCG5aWxMwfXVueAP",
  "key33": "371YeA2KUsRpc5DAwvKnh1uV5yxWjaR2EouaNeZ34ixaiYij5mK11cBm3iDHnmQw2aoJWEbybmfVGJrFrg1qZXgC",
  "key34": "6434ww6cvs2U32jChHaoTgeYjgkJ3C3wUDRvviz1unkZ9CRjUwPMR4HGgk7Ga5fLPJPfgJ5tejRvb1PLnomCNHX7",
  "key35": "2MhJRqoHojML2E7v3vpcToqvNZcTNA5TJtdAYJR3acus68XZ2XkYExdWwTHFd2GSQVTJBpff8hGkaDFXD1YeqQZ3",
  "key36": "QFPvmMaXDDUzPBmSs5aXE2hkhi5KjXcdtohsBY95QSoJgyV6SLETWV3PAYRE2cM9p1jSuB2oRzzNdxB5PMK9EXp",
  "key37": "5ELRuU82GwyHW532uTJezq32KnmzK5JozKqenfr6FLBqJ3AvxDC9DUEsQ86gZ7d2CWUPKAdZXcVAknGbrG2ThLDH",
  "key38": "516dJDDyJajdoQbwp6gNZUAhyptKefs6mJHZQc84hxpGusB7U91pMPpnQ79fyw9gwNU3383bceUM9q1HkUpiDco9",
  "key39": "542hDxQbtBdcbL9yLwRyZiCNWPtQySwfXGzJEoCmQS4VGBy6ST42LZy5FCDAtbBKLerdc8yuGepd6cHMTrYzHHdc",
  "key40": "GrWTgXmP5St4psjF3nckFpeJKKPpA7SAdWR4vDuN4ZCVyHgS2MdkqJQfnEFfwf4rddeir9PefifdfS2GA4egCpn",
  "key41": "6BVmpfx2spDF3EUT5mz96suhn5q4yuHLJeBhHK4ZrB5joFtbvNwGnReeLD68tPcPv32sU1ctp1R6kGzp98s6E6n",
  "key42": "4LmJKjiW6qK8fKFZC3P9JmwYiKvwqbaqSF7G1mCNqBTa6uGb3BuSkGeVfoQTJiktitAUfa8Nx47NtKxgc8u8HHx",
  "key43": "488xJGvfKpvwbMzfmZM6BmFFfBiF24cNjR5GA1dZYjLqi6KCkmaYAdLW2UxB289u5M5GWqqkXEwNUnbfMDwnjuv4"
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
