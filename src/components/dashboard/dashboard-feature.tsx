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
    "2k5xnH3BPNJnQpYApsAFj2SKgif7YBcT11EzXHRGGPwnAUe9oBfv3DcafCQmHwDQeu8SVCxKkfgs2oirrKnQBoVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o96R3ByRzBa2qbB8N6SB2HRx8GiCGwYC8r5jB4TDff3p7qQhzFdtzxUTmsD6rZGSN5UDpBZDSisBhAZ5DPA1fZF",
  "key1": "z9SaxoZdy4eFuz1Njsh4g5nT6GhdtS7z1qQwxKsSVzdJLgP2XJM1hRS5pgo8QREFAqKivp5PJAsCQhU9dg2TfwT",
  "key2": "5ezDu2noLKuv5Uwss9wDtZUFGjqB61zahRjqHknmoGHAnDVtdKzAWAbfhUQLt2BZQjReqFoYHawjBSmGUyHFGwBs",
  "key3": "3434dAGJoQfoo1rMkTLVEBxebf61ShtVsqr7PxnkdcbzfiLzbJg6LrtRfB9rN4meoJ1651jbuBLF3PjWVkZbmigb",
  "key4": "2WWQR4aSTZGwfBCJVjrZmdi91nEK7SEmUFMFjSvxGKxPpLWWxBBD81FUCQSyTr3MMxdx3b5oGsh51jGxBxYTB77m",
  "key5": "3TnHQHVgzLtvQAr4i5qu2riexkkuAd4QGSTNJCymrgG6RpTEA8ghobCkzAiG3xSmS8cAyFAuDgKmXdDvj47Hhz3R",
  "key6": "4kPi8hHCoNzpv5upCV6gsYZVKpCF9BQwehNuBEwcKMB6quh5TnDgVQ9zKgrrGs12dnw13RmgGZYuJ48YDLn9C3ci",
  "key7": "29ZUe41bsysP1rPhdtBNT9KBrQDyJFC1gZMTkjwhcV5nxSNKy4uGGnb7VYGnW3Wqhtrjfx5AdTFivBkQ7sxtPPjA",
  "key8": "2LJBm5rygZriajaY6Zuid38KrKWtjaFtz5UVQurqFKfaW43UpKRvnREkeSPjWgqhxRW8wRiauJw3s3yvWEv3ifYp",
  "key9": "2rV1fyky2FZWi5zfFA91WVmL1Rq9FGURCjaUu2cifrT76auRqwo8i8dwTXyrukJBwno2fXt4kketCoXLM4fckfBU",
  "key10": "4juRFXsQWZ1DCSN1KwLFpEhBrFKpHqoer4hKf6uxHgHjJ4ZhKZLqTz5xZqZwN1rQdCzUaemLwAD4MuVHqrms7Ntg",
  "key11": "4gvZNuxe9zZER84keDrXNwhDZ9Z3vB4z3bepndgRgwGEJ91aWpvBkNK3n56usLpKBAm3XP6SfRts36LbjG1hGHBW",
  "key12": "4kymjzznWpH6uJSVsrdSsKJEgYtw47NQYW5cxc2Zgw5yFzmNLFnfm7pBEpWAH5MMjKGHTzY7m9w7SDYQnyGGFzLp",
  "key13": "3bbU9BFTCwaaBZYsDkALMEQqU5kEunFC8tLDBWbcTXkq5kHZQ5tgtEAoowz8vWwHvBtMDL7RbEMg1EWhHQK95DdM",
  "key14": "3VhjSyTr4xczqB9Qn4RMxJqw4KULuPyQG9H6hQ6nfRxk6P1CpbnbmhhT6MBLdejpcWcQ1qLNJ6f8iZFRe7iGmYeD",
  "key15": "28iY2Xdr5SR93Xc2xEFJu649t79tjtQuNkDCPz5Wvge3PrQSRThUDu8waAzGUGDEqYudL9ZVEamb3R4Uee1mnhXq",
  "key16": "S6NBMSfRizr64r4QHFLDHumkbPj8fbPJXosNJfo7wA7V52yFa1EQSUPYpoZeqT9y3cQ3hAZP27pWWNnQi5yNgSL",
  "key17": "2hyKihZ8vdGTfvDE36zRnSfqC3sBNweAcghu1vQcMJ389eTF34B453QJAoyV8gYDUWZx8fNYkdym95npL2n6dVVq",
  "key18": "4XSEcQv977HoEZVRTcTAzZGXsGZaHrMcGhcaZAJE9Wb2b1KGR3soRLNb2gEQ1oAdiD4DEYPsuiNzR2YUXS7fRZnq",
  "key19": "3pWf65AKXUxYjkQ35Yfx5sgWshti1bkpxkoeY9iMwY2dhwdjDfrks6PV2XB2eM32kdMCEQTwK1EogaNbCycp5YVK",
  "key20": "4VKata4bAmJm2i7yru5pA4X7EshDEbHKqX6t6ZRN8wErs9EVWMGuQ4VJL1fnah8GVUgKu441fXWuEnV5YNUnNrgG",
  "key21": "2J4EFWduDdQxXQ1PpbpvkUPJGrCBkLBzkYxQ9bVWZgeCAzxj8N3VYez3fZ4FnTCVrnfKuP3A8Gg7CCewHyUyaq4Q",
  "key22": "2fckGxXKnt1znMTuMXPWGLfTRpEYWcPEWBLsHy9S4iC5XtxwxBt4m3ZTrRb1Z3QBtHVffFjS4UZyMhyxFiiKDaHV",
  "key23": "3zXk1LSkD7HzPFxMxvjbcemSicotyUqwamvw6yh2rEY7dzNwyZCBXBGyE9ZE3HL1uyssnFLZ3NfhZ5yhfqR7DX3t",
  "key24": "5Y7FjvyrhYiAzrXqEZcHDFRV1Nsgn9yjFgKyFCaER9CWr9rviamTc5tHKamawGme22dr5YRnwBGamHpzPBo1uTp8",
  "key25": "36WUepT6EUrf71UNKcepW2fcjEeodJLR7bjLXxg6jFT9KSxVNHtFbbKNBp8r9mes8eYPGBmNLzMJwh11Fbr5EAMx",
  "key26": "jeDzGU2imMM9nrSa8vDwMSF9sS8QMM9ozyd66mmiHeHKmXcJuGMGdS1uhmQvNn86akfo3C2mquWZxjejPX9amAr",
  "key27": "53VifjMrEYanpXTUsLDG86G1FbLG2NUyaD7vVfJr8L6zLe2qLJ95JZHdQfE2mXkh99Ufdu6ydSZFFAmTkgK5QDwb",
  "key28": "e4vxUP1HUeo1gcu2dGGXjJK4jAMkx3SL5jCv2u9bZftBnixvbS5ubBoAnbmAWvPbT24Jtaf6cbtLSxkfyHGibnB",
  "key29": "2XTq1ys58ogAf6UeEDcKLxhq8Y3TFHSfgdCBbWE8WpDaNMArNwKBiWZwAAA4kvbZvieW9TBNF54ooXvxgS4NUWQD",
  "key30": "253xGLUAAKAKqpB3ezFZssvzfXS6LZwv2LPhFD6zGVyFXibdKJ3zcoXB2zL99RcfaPnKfmcocwjLgTMjm5TWVaPq",
  "key31": "5SNcg3xXEyPwaJbxHcsRRHfMeeKHjGWcgDWBQH476EzCzP5ZnthRQe4kV8Q8RDAcZcvFvpW11fDV1c6HFBKeSQck",
  "key32": "5UHxJABE4S9PVZnDgtzqMYi1QASEWC9dvFwc1x6BN2MpYhTfPwhRSCrvMaJVYqXuzQaTNVAQHN5zR6aJfRu4uWgH",
  "key33": "As1pXTVeXF1EbEKG6QVZ9EoAsf7my5uBDYMgv3EenrnZxYCVt6hxzHXXRtmYt6pepxdKaVu2V8Eg3pduBHtBrLc",
  "key34": "Yh6fMVYwkpQohqo2kbEVtRTvyhuCRBLNimFexhGWgcdNRvW6EtNz7NggcFvnBzmRnmePxZ8gPeo48FevKt1e5Sc",
  "key35": "stKkRm5fi4EnCcq53PrndJzqu8yZiYmZwo1oML8VtvWY8UcGv5FXoqF2tpzJxU98eZdviTGXvmPVzj33aXvhsmn",
  "key36": "5wQvWusSwSC6jpUR5TEY4Z1EEom1sCQ2kGn9BoiTyKpHG5XULGJo2rQ4ohdEMsMDJ7oAKs1oD3Fnr1VuhyBDdQyu",
  "key37": "2NjEfCkj8kPpED6T7HcULh21aMACg9zw1TDZQiiX7SjMnACLbvZrPShRWhJ6ygXrW9nwCuVX5WXoEYfukQFxEYsM",
  "key38": "27xcQp1RZdqZbqY2A5LzQg2ucRTYrvZ921KdafKUZ7XsDgewnLYdFdCsoTt62x7UrYKbyqUTHNTtCGUqDcxCRCg3",
  "key39": "12A6kBfaMjCGBBuPq1AkNmv3rg9RJQhj6PficN8nqU1rkTKvvvqyuGjtpfS7hPBiZ7BvoTanZuMg8EkUHDdpcVJZ",
  "key40": "5jw7KKPz4YvoAvc4V9pEjwGEuGnM7ygnNmGcffzYwV9VTG5EMwLzC8xWuE9TfVFLZUVvYqfVSyLvRSvA77KvzPHd",
  "key41": "2GuanTBmKFYbC11kSKrzJYMXmFqrfHCEz6smhmDSBA314W3VS4GtDX7SA7DesyUadrLwtNBPCFvkBM1LhLmsAqFL"
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
