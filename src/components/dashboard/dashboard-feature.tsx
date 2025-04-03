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
    "2NLEa2rwJDiy1ByugqSmTFDji4Nw6L88RLeLAwro9xonNgzv79v71z7YrJQiKvY2uPRAd37Mwfs8Rq8rnD5DLxTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6zV19mUG7XdxzDrpkhNBNqEQX1uwnrtSh5Kce6Uq7cj8ya1uRYpQupDRUnWhkvFmJKoFVL39tW3JhGYiBA2x9ug",
  "key1": "3ydiwKEthmuuspW5RGsHPbduTjgHrpYMG2NxW1iNjYLVK4bvLVbhEVeDHaPEKxAHxrsCJyTWhdMBT3sS2hUpM9Vh",
  "key2": "3w5hveXz838zz2qeh2eDfnjitVu51yeyib3ZNnSnpEQANiCebpJEeLeMwWH2jXpejxRREoA1Tw6ajHYJM9UXq4u3",
  "key3": "4DKnkvWoA7QYXYtvRe5AvtWH1dKSMd6aRRxuGi6myYHnyDAU7Uj3CVVjffBAekNeJM6ptxE6VuEqFM1VQsibbRzx",
  "key4": "2jo6UGgkvJaJiDKN9AR6cNqwDsZhRU7z3jKMACE49o2CciGx9dfiXvVHN3BuQWYnLApbMNKcvaCGqsKQBafnJ6hj",
  "key5": "56puWsxSzAdgHpY3RCvc5qPXVamPqSb1uaFXoq3LNvztRDmLpDZyeThWogjmbWuf4HudoLjdMhcbumjrF7NTpaZy",
  "key6": "5UZUt11youkVcGnBU2BRSm4cVihhHWsbLdG4s4dEWkVVYPuzqdm8S8MMQLWMaLFvQa2CmW48KAtHma47WRVzFv8H",
  "key7": "kjwDEoxSKybpofvDGatWteK9Sm9uXomuTaMvpsiNrG6YEnsgvS1QHsX1uZSgY24PeCHNYdTk7DGFN8T5YRCx66A",
  "key8": "3RRrNYQthnhPPZhwWNk4NWKk2YbTdGm8QMcNHzqKPgZGNMxWgxFA5SvZVXSzzriooRb9aeZZQZRV4HneZ2bZmojX",
  "key9": "2Xcag9GkEQvCvs2vriTc8A9WJfUx2UV2JMDeZAmyptfRXKei4wajKGVqopRck65qY7wnBwTnG6XmGVdeLGqHTdqu",
  "key10": "3CXkg6vrLbfZGzkaHgvPNAGEd4ayU3KcU7UgdiXZSQJW958Aq57RjR2jTJ6edCb6i5aoRiFC8rKfHQ1t8TwgX7Z8",
  "key11": "21yjbdDNABFqP9vo6BnWZGvHR5gMDWxCaiPYDBkD8Qusi2Z5Ej6b3dg5wgUwruKZyzESJ9StRHLZvgyKNhHbfGBE",
  "key12": "5i9uBdxx71vbRUaThhMG46yE5BhoF5GPevnwcCcBcPVQN7nqeDWqxvJo8G53WjXytTEErNffgvSZsjFo4fWzvxsk",
  "key13": "61tZwLREYziU1Viauwu2jFpYWjsTNQE9kX42mWbd754rBQexFzifYC5UsiXgvwG8SCuh61fTmgiJye4gXfYX4zR9",
  "key14": "49gKF7ucKMar9i5q9CkfNrGQYsrE2kkftWKU9XbvTwAZMBPUrJ6YGJBDsGbNjZAZm83wUxB221ceRsRFGp754brk",
  "key15": "5GGy4za8d5WLTFUAiLU7FsEoah7D1UXkGFfsUqt6pCHjo6vU2YX3P6vAmQKNz6zJTeF6kmRwvVoVpggPwoqNPagN",
  "key16": "A2F16aAQPL6k5Ly87NJjyJHWQzCB9icktL4FZqEfBLbBk2iCQKtc39kvefugDHUhcQz2NLM1LGb3jUoyk7x5HCJ",
  "key17": "2vZF9ECrPNACRKAqPfsMJA6JPZabLfCNFSVkpR7odv4vwQDjcRBAbDwis4xWPAscdeHpvGvJSUAv3TFJnTEjBvHR",
  "key18": "3jY775GzWTz1wBteXZuKGdNAXtqGKisdR4NpikNzucvumktvvshUGj1HW7uKToyRmww7o3TqdmMz8pFgufQDGZbw",
  "key19": "mv19hd1emvg7cmuDssJ2q2afLXp4jecbZNfDZmHgSDzEDfLHoV47q1ZvPLt2xB21rqx5n1WXCNXmZnx3iDZmmMY",
  "key20": "3v6ehKaiHbkg4aCpGYgwwzcR2i4vbmvo8pomb1CcyjZLGY6gw7QAtexMRRJ8banqMo3KwKaQSZerK33TAFsUp3d6",
  "key21": "WLK5TV3iDeGvKvwyVEVtrBKTrEyHPpXzgJUDbhtg2X1RvAwmAUipAeTZmA3YhpDiJF84thxnEsKJC9B1rfEJir4",
  "key22": "4ScyDeFcrBoGTXRZYoz1oEM8uTKkERHjXFf5Y5WTWfF9s4cewqsz8yKJaJsRzmJxQJkgzE2RrshXXomBP7icEiRR",
  "key23": "q1kjRP4wgrhbwFEUALzyWH5VqZ6Po3JEwjmFjdRmr2eNf4mLcdKM8zDTSBUATEKG8YnWfAe2G66ZErCcseoGscq",
  "key24": "23582gEWY2QThPXmFDv2tkF6pGdnPVqkAi6s5EniLdVyxRh1NeqwWPnmzthMGU822FEkRnNSxdUWTQGSnod37puA",
  "key25": "3TDcZWjbXXXLLJsXQpX3r81NW7GbyMXivsKijpxAqxKixhTErbYWQQ1uxv23wvWVPgKnG3q7vCR5sBCCg1MrPtpy",
  "key26": "4yH4Srwd8EbECa8mvaFPU9KirqUvU21RN5iiZzDJK1no5AgmxRFQEroViAjRcNstpnF7W15YrHXEG8djF6gfiJhE",
  "key27": "61wWyGV4Qa1qyFPgREcKT8nVw4pHNhKWKPNQ1H7qXFxEnYZ2Xb2aFNH88gmf9QihPx4ZzYeUcfUtmddAV3rZgQ8m",
  "key28": "imGFBSsd1MAdrGERRabTRxX1owdzfC9mhq34ZCJch7JXGKAEBwVSbvKYHSd75pEwPddzYYA3Loq9KPChZwFKWKG",
  "key29": "34ekZqLrvjBkHaALwe3QXdziBref1Qj14KiCz2M7t5tht41CWpJpXDexdR8jcGir6h7Cg7mWhFxTTV3env7Hpe6k",
  "key30": "4R3RskBZF1dVgMQCS2f7ANEFh3tYTLTJc19P5bAQgK2sctTKm8gEnR4YMaucRjPKAyzPRpydTW47drvcFVJNR7X7",
  "key31": "2Wm9MhKmzfbjMjA2E6htcdVByjCnUz9somLsC9gwjqiX1q2dQUHvBguW2cDa8HRntMoBrQPvAGLJAvk6BBbj4Szr",
  "key32": "36TDpmvtnEQbqU9BWQnMnVXHygRUmaoXYg9yHpeJWCBmvB77BwpDLXVLQvJT583p4jKKm15m7ELdtxi5jbse61op",
  "key33": "ZLrVtWnm2ZPr7rhdiiyK76kvG8qQ9NwuV5ysx7qZDY46iYzhFZ3G2rKHqZqNAzfDzswBsHiEZDm5495QurFsGqK",
  "key34": "522pKACqJ98zuT6FWPNHfo3qAnnecjPtKig8c2ACSHsHcu2uVQXAwHRQUBimqJS333uEv5eSeSt6wxGoujPNX43z",
  "key35": "UCG83BTsPKSrSkexbtDTMrZSRFX5HMygPkH7AEztcQDdaoZeFQbHtgN57PK3gWT5WuuchRVNqj11Kaj7tVn36qS",
  "key36": "3k7JZCDuRjQ7WtBenboBsD2Qpn4v3dsU9sKxNpZqmBv96CHZSZck6RjyJUCLqhFHxaTjwUoKYzgTMbjN7fBWajjs"
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
