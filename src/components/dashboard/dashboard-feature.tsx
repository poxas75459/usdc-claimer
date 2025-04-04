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
    "4JxfJs4azvukQeRoPuWCLqhDtYGWvuawYfeFAEfqJ7CfabqMFUixtLkSPavJ7FKaCUFaXgYSGkBrUmQyDZn93gRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tPzV9a913rmkPVFYXBPHbVW9irS9S8uukEiqhqsDCANoKdMuRU4EZJzQQ5hQhSa7gLVgp2Chh8JdTEY8KUDL2pP",
  "key1": "35zhcx35iDnMSW4hRikR9vFHEXx8WEsyqmiuzCDdNDVwqfLbanrNeiUrMxEgq6mTayF1WAtxn6wz8UKrwZC5gp4B",
  "key2": "4ME4Q5cmYGR8DaEFzodwga8ibpCciaZF5aB7axA6me59ZuV5HsHtkEaD3c3jiACfLGiJgvQiVfaJKwgfkAa9ZZ3n",
  "key3": "5CsHD8au8sbj6YBsxwkC5jztC2ZbZeWeBLDsCtb9pwKvH6ZAf5toqRV3QmBbY5TFo3Dgcexf6DH6acebp6khY1Un",
  "key4": "2XA2mepqrB69MoXi2YPK8h2pTV9SPhZTDF2XvXSiuWcxGC9TKH4eihhqy9NEKy4214yivc7v3cbb7UVi1WqKkbyL",
  "key5": "3FHZtauSJVNJ2cpsZwTbmDE574vay2LsisFjEXeXhGamg6L1q1aDHASGB1f7TC3SQ3wQigdBkMTVeh91tZ8qi7ba",
  "key6": "567YkTajxF79LEpmWDNV1JsYxkZTTFaevnovx5PGkPdvD7FscVqUL2bYCvsLK5xnnVbXhGowtqd69r1zrthwGxxi",
  "key7": "ZRrzzon1Gmkv7uFdmXSkWEw3Pz38bKgcV7gH9o1uRqQmVnCpD5rSVwvCQaino6cFbnEXRvJXkp8uWwDbK9Ky7N8",
  "key8": "7TzmtxPoYtpfKAbsvujHtjQUPcrQj1hUZbZ3kSLHdPHeY7ZJvGatx54Th5hTKMudyeK7DDwRDp5fWtD2V4yxuPu",
  "key9": "2X2yZ8hM5VPTFak2aNdD4JeZFvCRbm7NsjAErUU4BMRAjvRkXAwwNZypA3FhBEbYsgZk2r9nBhq8KNgDsd136766",
  "key10": "2KHzyxeNzjebBeGNL8X9NKsHTd2hVZeFGdzjVBYhYq8u4yB5j7PdeGuRYSJhz2Qjiaq6HnorjnwSHPwvV5AKF1dy",
  "key11": "3mCTvbdvAqjzTCxAQ8BcgZTaQZp5ww3ZTSkRp374rn8JEtYBnoJ1J8ok6CYnqXJ6yAs7xcdSgJmGok2ZSmgnk7HB",
  "key12": "4VvcHecTNLPsFXU8Maa15g1ScQUSbkBRQHb6DMxcXEkwqQww3PwszQ6jyy8MFW1z51527JvsDq4TPCnAAL3Hoaz6",
  "key13": "3Gf69YYbrT9JfWMCExE4D6aUGvmsN1mayzn1kamiZa9XMcyb8PLFSQTtNRMSffh4yWpCicbwcPEwJ5cuVeJX6UcC",
  "key14": "o3GBt3m1jLTkGCmhppRsSdc3aTSUSAgDgsE3gkwA9NdQ5bwXkv8KiemL73VyiXvHmVq7wPyn3U5QSqyvv8wPQZy",
  "key15": "2dLjrJc4WVTCaqReCQX1BTAdUsKpPH6NDFP9Lh3SXgXMnK7PgA5q2wg5MeVsENetHayt4Mc32ZyyNaFHdLrjbBgD",
  "key16": "3ACT6bPXYCVVtPp5e5J1YdAx8NtUM8xw15wbYP3Zhy93EaC1BYgbRkYcw3y2BAfiAePFRVBfiec5fspkyb5koQcW",
  "key17": "Z8fBhvdoKUVJxNWLrm4HxhBydC3r1d1qPd7WeAogRrBs71sD4uffsBpekoTKwTUVc9kdVADecajUewMujgc2ai3",
  "key18": "4EX4viZq9N7r4AHU3PnKqKgLSMo2rmaf1K9yfpvF3wBMaXnvSXvHoPrLNwdbFGEuyJ5nkSaVuYCgmN3VH3NLN9j1",
  "key19": "4kwSe7ZHQaszuASHMykFtWNe7czJb2dZwummDkJWRJrdSEng4iedwXpf6L3MoGZogWrz7iQ4YiynkteMXYQfqJAU",
  "key20": "4bGud8fjfbuyaXcTUxeDYnUnw9SdZ7HwUaAXvonJ96CJoQmzG4wBBaG2tLqRUZV6kW4uxLvyQV3kJkciCBBW2Fqf",
  "key21": "srg4Qxz9YdBfmayCw3xsmpm1ZvWuZ2EyQo4LNMZGhaJmgrChGsshGKGg1Cj4W8bSs2VenQsdPZspfqeGHun1tvt",
  "key22": "5tp3UiDHYNMR2ZeAq4Ce3jR6JeRMhSaqTs5FeP8ZmPQMPZo828LMvY3LszbfdQuASu5KAurYyV8MnDbqaFnLrcdu",
  "key23": "cHB2sz5YUuA7qCyUtnnTru2Q7YbwuqMbqWVjzanTteJeq1pU5QvSVbvzXGuRXJUZLjn6BH1hq8DenX2uSwbKaEJ",
  "key24": "359ZatBMAn9VY3Cz5bnSZveEQUsQykekTCsH18nKRutUmx6RNLZtYJmpxNa53aB5c43s1kTdwWvoSCZAZRU5T6SW",
  "key25": "3Xv4C7bozroEgtS7HSEEbF5FxFXVhECwGPvzSu7QZ7BFrhtp2CftgDo89YRk7fTem6PZ6y5TPAtSkDehKXJGDTMx",
  "key26": "3RECuiSSf4SsGkuyvXtG3CVNYCpxiCFaoFppQrjE4CpiTrbWVid6dmauHbMvDeAFTQ2DPgMtenARpPZgTojabdiv",
  "key27": "3bnjAeMWnRv2ijoMZx4tLpQnD9wHhY6nZN8pt8eNnFiLTxRY8s5ftPC6orZQo7gSFa257fQY22ybxvLoRUYeXMic",
  "key28": "4yybppGwgWhyMoZSHhwDReyZMDJzqqaZ8VW4kzu6k4gbx8txB4Zx5sd3jTUJWnRrGCqdkBu6eq4NSaxy3gLmLp1c",
  "key29": "3937jeKPKG8rQhnamFgtsVJaNt7zMoUW6758dHrzBDgVKhqMzVsZ98UcfBZLZKreBBGnV4m1p9XZvEaiLucd5A2z",
  "key30": "2iBtPirqWKGXaJd7NkLcWtwWwxmS6gKSu2PWeZ28PF2dYDXUXCrNQpo16GvDrKhJi3f9vB2eHvBkFYNhsyrRVqwX",
  "key31": "2Gudg4bm1XRyyugVnaF1Hy1P6L6csXsNz3zwD8krMEWV2B3KydMZuWmutGEPu6vzE3JWjvzJZ9i4xmdNkgVdvz9y",
  "key32": "3U3rx4hpz7Jcxx2BxW1Fv793u1vC8tjTgQxQPfYV5tT8H2KJQgkL98TobfTzDbaKyC5t4TB4WTnmbgc7NtXDorEA",
  "key33": "PAjQfVs3wm98Q5nrxjArLJmC2oahbKnqRCmVaKV5anqv4sS3FZQP7kMRe6oe8f95wJphL7c88MFQDGis6N1c85P",
  "key34": "4ZpN9KESetTqdK8PkH4ZGJst39LaTLBHaSbFd16LRsYvFPkyPrXWWy9FrtavepHS7m9E4iuJFKa2H9UzuW2RBc27",
  "key35": "8aMa2cyDF179VPReWUv2GZ2cafvdMLNYuSJZhFrgQ6KwsLSaeCuNCsMae2rqe48afCe4v1rCB3QffXYTjjv616P"
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
