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
    "2wwFAfkZXUfvtKdrCQfdPbmR3aZ2Bt4xbdRdDYjg3BfM3MpArhceaQv6fpB4iHfkgt57tDxpy1Aau3MgZopGt8Hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38o7Xc9FxSsDgaL9HVpsMgJFDKH64BMY1a2UyV3q7EJnbYcULqSiS8XmCM7Npx6aLNXyWmFn6AvvinqMsNP3xqck",
  "key1": "4gKvjRFAzqkKZrs2N3V4NwWyJTMAJv7k65qXsmj3KGxovwNXdQb4tQzYSFKy6QE4M9Xy73BJRBhccgAcgaAQnp1V",
  "key2": "5hb3DkVdiDBWpRnACvUXNrkbmETD4k4b5PXYnaPmZSsAEuXpf6op1oWrSo6jxVy1oB8mpf7ifMy43vmiCBuujVt5",
  "key3": "42kFvcKmzxW8mEhEuRBjQF1VQupZmC3ag98X9uDyBt6K6D6p1ZQx3UBD1oFwqioNb8tU1Am8dTTFYPLe3YQU7TSL",
  "key4": "4pW8mK8Xw1kmYm8wi9WzkJeAvERYdjMPzt21sRVSHiN1B4abHE4wFZdrPzCWWKn115P9ob99KcJWx4XSM3CGospi",
  "key5": "yyuK4H2KsLPNoYqFsp4ctbqpNu15boh7U9i93yhxf3i37juMN1Bh1uutGQL6c3zvh8cGRnEDZPpSCHub5gnY8DW",
  "key6": "28NEN17EotycjWuQuqqN2Tc7YTAwB9xFxxTB9BSocp9Qnosb1owVEqH8kbh2MZyn1yoJGXnaZd7Zdx2v6PdWpsyh",
  "key7": "waiGBToGT2tQ6Su98efHpP5STbo5HdBM7Lz5W5fHq5fYTnaJbAbsHxFDEJGUK8BMJF8HsYHqGsihRVV8yDZDgvT",
  "key8": "3pHpzenVJokRHGhGNP9bDZxYSXRNtbfUUoxcCx7eETuQTX3XHhf7Ypw91ojaV6LUdMSBXbfVHVEVuH3Qf6NR586W",
  "key9": "LJvYZJ9sGkAod4EDBPjPRKZTHXzzX1dGUSmtn39EzuRzt6ZQx81qsC2HERo1UjzuTWNGEt8PAthqixFS557DY7Y",
  "key10": "5zfoCh9euqSFt8nbZg3ce4B2yW7u7NHkMEbBEtBj2iE1VQFNjbnE6jWphLaLsnX6CmsVadKLy4rahYb6Y4yYUmVv",
  "key11": "kVHTrQ9QSYnf8tw6vJVtRpnNm3z8pnenb417YeKJC2vQmhNLVAfMYH3usN34mbj6vBDqDWwtdSbQ9At4XhqGwtc",
  "key12": "5v8BsUudzCLgxJ1GB1cpmZpU3zqFpPrvmyKrxG7ncaWB543zYGYsN2UwhYDCbkifBBib6cGKFxS6i1dwAuqe6Uhy",
  "key13": "2qHoFjrqQ6jUEQzcHdqBxehtwFLuWgT5fgMnhNqS4Qt8pzQSqS9VPnUpP4WofqGuhtAeG6vZwhknvXzYRBgECop5",
  "key14": "5tpC8mhDr2kYmBXBbNZmbeeVu2zgdDYkdbAk3nmMouJeUYM66mtgj6qrUYwBDdKQjnnJL3f3YVvmPMF1v7RdxKCX",
  "key15": "346H1NqhWKy7VXRRsZRwRLzdMomFqPgSQJ1ku57tAtPx5FuZAvUssU7QwfN4MDWadAuqfhi66xE2wECroQcsyEkR",
  "key16": "yo7JvYq8BMfMAXRNWjx1ewmtcVED9e7WDZsf5FpxxTXVVdnxbuG6fYurKK4FFqX1dffNBXRcEEpnyH5Dy4E5yJV",
  "key17": "4wTjZagXSxX6nMYVguBjthvsmjWB3Z3f8jPzTfoaoBZZH4NmDYTYtLreSBZYp6sn5gPzQTbPjBCE4NedttHHDFo4",
  "key18": "36ebG55Atnqoe3ibJJBdWGmjUP7MzRNjAASxPat5qjhYSARGks9Nng3xW3bSdnbr6tYhPRt1USsspa5r8sztrvs8",
  "key19": "4dUy4G98nEEpCB67UmHuKheXryTdFTKanYcAYuVYHanDDsDtyVvifdmQ6rPNWiZqbiaqtYfXKS4pai7g9aHoDhxw",
  "key20": "4Lo2CF6qjSzdfhhNasQXxPjudJG8eqnUUH4WVCNXbGBfzabLozqVxAnatYLabd3AZbYxbjfuN54Rw7kiviLPCcUJ",
  "key21": "kD3ahp5tsZ94qbdu9csFBkwh47PEd72CHxZcakDJ1ur3r2qNBRXpMvDkJXJzbW1mukz1ZqchduU74YZrTW2Ctt3",
  "key22": "3rC14cW2WLjSgHwkC3Hke4KZYmLQetR9RdZYtW12Mh4zjUMyqpNEhQUAiwGcHmwWgsRSpX4skw4RfyZDZxnXxw6D",
  "key23": "2tL6BqCrerWSGcdohdeuZWYqd1CjkvNzAhab1ixTBjKS2jDcgvGqWA8xJReKQAdqUJV3jPGaxgP1QUJSbsyDBq7b",
  "key24": "5QSx4C8chVhUyxTNGFb8hXkJSc3uY69qTyqmyEhvQMjWD3rYDCX77vyY5hDKtmvrbh1S6RuTbWnNHHRp6pnVxmbZ",
  "key25": "T2PA8eEH23T1q9aHC6bfydAzxwngLVmqc7ndHcoFjuNncq2qVhYKumzsD1SK5NC6ww7DuEHAGU3KWppvKpWPBNs",
  "key26": "3X4jSmqVJj3A8JvFZ3G8TxCVMtAUq8GYYE5aFuFeNuZuEqg2XecyFo1Brb1CfZppiBH9TAiFTW59fyTKdX1bgJnM",
  "key27": "4CVPNdSDboAvY2HkAPxa7BpacJNDYyoQqoyBB9YQtxam1EuYwAj2aGBTqLXGFbZHL4xYfegjRMZR2o6xxRFMS79E",
  "key28": "4ELpiFo29HQet9nadgBUKdZXCPa52iw3h62pHZgKp1eo9YV3oyE1zF3Gr5U3aXEfqxpKjomZxvmyynpkH4nCjonc",
  "key29": "2CDQHXefJ5Q7fXdw9BstUrRFwq2iSXyh6xN4LSH8PnnQBHCFub6BCB46CicFc2bwV2csEJ9QTNkzU5soPdvYyj8T",
  "key30": "3Ha5cfSDuhq8C5D5P84Uu467oU7NdZRkkEWXpGx5EFWvW41CfYwGtAAndLYebVWcTEBAJAKFXUHwLbvAj8aP15k8",
  "key31": "5GFDJKoYPSKa82C6T7wFsAn9Zw6Y8Lu3uawXD35tP1aqXqcMwdJUFZQ5ss3pepqxMTWsRzvNe2oHVpZwFzAkar2c",
  "key32": "3yKnxxub1BKy4WraJ3ndhZHTERYiLxBPzN7GJKYhHXUbMDzaGek7m4P6rh4tpSK3DwgsUaAnr7QJMuggGFnr4QKP",
  "key33": "3PWDqPvbnw9qMB5nqNZJNLmB7dLUhwxRsY2Z64p4hcx4Cr6n6JeqgCithKnLHcdKHVGX5KScUYZvSpE2vyeqNUt3"
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
