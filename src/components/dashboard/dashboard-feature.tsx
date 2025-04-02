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
    "2f2CcDuJERnkhkLNiZbX3BsS8zGDYd9nCuL2jTBoLWpLonUA65y99edJvz185RAmnNLdfMeRdPfPVgrihXoADQbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GdREwCtF4MqaG9f9a4uFKgbLp6jLeZzrUnuqGfyeNuZqYWKxfPQQeRnKbLeGC4oAD1fWVRaVKaQps1L8enCRhgQ",
  "key1": "3p3KaVinXNJvBFovLu8b9zJQAhg6ykxzbgGvTj89WgkPPciddJLk4UNpbnEfvTZC2jRmh4s9HsyFXgewVB6sMWcX",
  "key2": "4jFyUHePHqZfYGQHj5WskWtVM4McSbsqM3PaB611g6kuhbPYKH8HzgQFSishL7M2QGoTKg8FcJdiiyRSs5EGZDmJ",
  "key3": "2nq3CFsh9rQW8xD2NPhay964cUXPiuBwFWqFrwcEzLjBNYnmGUKkhSsLzkMyfat8HMDRazjZH97GFedcHuXnB18D",
  "key4": "5qtAwCzT9aCdz5Lm2otP7DDE9UMy7eWXEasBBHNAtBjqgWTe5iKUeW5W2JeouFyeHFGLSVLdCLzctjxk8arfwkfV",
  "key5": "21MDwotoSxBfsB4Dd6cz2RSJDDWqshV3mJ1PUvwXq8AjD3tXxJKdqiDBhPL6doBQczhXjrtHM2Yo8a3saZBNAgT8",
  "key6": "CWcvFA3PJvEHJ29YTnZmSuSg66LwQVK2cKR7eGwXX9RGdF37rTS9Y6TKAMYSSEAFjEBt9jD4Fox7p1dwSHx7sFg",
  "key7": "5sxZ8WUZu7rgdEVpdiHJj2VRoeCxe6K5xzMFPxoDSBH54tBp3XxsxRbm5VjxFhFkC6SZFpvtujw9kDkoMq4emx8J",
  "key8": "4WrzSW28P6B4zzRq4RvruZhU7pWoqX26xSBo8RG9g8M2yZFGo8jUGBRVbNo2at5wh69MH2J4e65Qp8vM3eZgsFEh",
  "key9": "35DnTbxNKgpedbWHm5LqPLRjHVpFZJNcnrfamDdFpaX1ucSvP9tsNCMpJx7CTcsBAB73vj64x1XBVWTcdJVxb8Ln",
  "key10": "2ZiuLFU7VCcQTbdDKf65Eug88HGhV1FT9PRXhQgf5E9Dbn2xy1CGYQg4TwanicHeAy3D1mRnarpB61GxV7xavnY8",
  "key11": "2TyG92EK9dQyq2531R9ru1ETKvujTRngNF7V5RVbfDnbJY7Eh1yrUVyv4wuryqPGRj7KEhTHEHpe154fBUtopE7A",
  "key12": "3YeUH6PRD8NMJ3u8mK5hGzWcqU3S9f2fyHfPETm3xYmxXWYaPJnAvv1WHiF3kWimkNjJJF6sdbhAei2puaew7iQe",
  "key13": "wdTtFRSkKZ1dc231iYPaT8BBGU2eM1BTDzUNC5boADZDSja7zjqSx7tAQ1czc5BHhtAsTFGc44Qzdk43kDkv6Np",
  "key14": "3h99FCXBarKfTeq58qStdkf3WXXnocgb1cFVWA9mNASQADHrDbnKQg8GDbWn7jHfX1tJGKcRxkqxh3gfBVKTmGhe",
  "key15": "4VWx8hb32r2CTpEu3SUNjQqSFtTvFUemqJ5wB2wuGUbn6dcTas1nRfA1ShM6aRSroxF3QxjERQqAZJGv6aDsoBKi",
  "key16": "5Ta3MsFwJBdBT3YJFKQbJZLbJDsZQQSniCifwBVPf1uSYZaByzGKjyLP8cwRqBGEC8Cwt7LEJgMMy9JGBiyixBfz",
  "key17": "2kMJwsG6SoWc2vuWAtx5f9K7PEpKj3vsBhnpBZRB6dzAayprQYj6hNPZJGUTqJKBEnxgfExF5HLHNswwYCNcayxt",
  "key18": "tVmnneJZ3jKiz2tuA17y1BjwHB5ead4QVPzxsU69qMBmoLrUUF3qotyKK2WP4Z365NeRkMDHAmqLZJAU1FckYD6",
  "key19": "51MVWSsfoS6cCTZJTuZXBWd7LFN92cd6cozRKMaBSJUK2cs24NqnXNMEVi3FWHkt8u6ENEQpt5XcVb46h3fVjoiL",
  "key20": "46F5daDYg63w9FPjdvYmX86qXg2ALowMDtJLG4qew11EV8YSXUxhqnRbk3djb19gLGVhQwb91G4z2NBtNfhWrvpb",
  "key21": "3q3dFVX1xLh3RQx5bFrg3DcC7SMBSHCu3KrQtviackcp7D9ZU5Y5Rs1QrcsQVyPmX8L8XvRVYDfyg6KUWvS599hT",
  "key22": "3y7V2QieN8tSYhcWiKYKF5RKbXEAnuyE2J98zgBTYCnjkKRdnwgG8P8eoTmxrQ28qfXTMErhJAX4p46g5VJPnR2x",
  "key23": "4vquPwrr8nLHkKYrGk9FEE7XPvEH8PxMnMa8rBkc8MEtE52RF3SNboat972kskJJg837L5qoPijpT8Nm6BwxAQwa",
  "key24": "2xtun1QNWGZVGkkMdoxH9H9C9TrVayUgsvdLNxpR6qcNnToAcYEW5p4ZFksTHYWSN5apJY7YiZUkf2DwFcn4bJfH",
  "key25": "qYYEdwx1ikUXLk3grZ8yu8r27wRSjuGUjPMPikyJ7Qh8TsyrRV466BaaoG2fm4MprqKzcnRXNP5chN2AC7RekKv",
  "key26": "kR2QGayAJ5fhyj3TPCZBy7saTmkcbgqULBYRfJSBHRxRuyEvudnJWHt3APcUihinaqRJr1sb7Y3jbfkM28UuQvr",
  "key27": "39SjXqwNYmZvfR2nUPahKZNHyN7XViWjR9BuEgbJKPoBS1D4ZazwPsDRoWcdJXU4gsKrWkyVtJLJPLRJSecrQqVF"
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
