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
    "4HsY3ieL8TeT6TSAJh4uJqjr6xnuJkyVgfyNT63Bijjmo5A9Hgy8heqXccPSwTiEVFkdq5erPKMZhwGbF7CZTdgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uEU9hbJ5C4gTKDWi3dVssKT7fzNsGQM6WExnnjMbsLuF7TzhhJ3H9i5iSDzsernGfJBirFPH1CnovtovHLqewjx",
  "key1": "2LvhrhUeSBq4cu1AY4NeHu5RZZooZkxDibYxSAoWi6AVa4QjQZ7eHnDZeQAEKMUrcsEmbU4Rs1LtnBvpQdYnecKT",
  "key2": "3Bze6TouDS6Z94EUGS9b99m7UvUjVFpsxDkdk9ksqBZw28vGcQoRbmMnEktJ732beQeotqvT5a1aCzFwT6E14afc",
  "key3": "K6qA45au2uUEndtnop5anAuzAnQA3AKrcsnHoVrAN9zoW48bfZdEFfK5iAsHsc6euqdLjzkY6E5haaJxGQnSPNR",
  "key4": "REeLe3aiFALbWoe1BJM2f6G32dtgQKU8YNV17pXqguML3VpT8aujTvAYUhFqm2io43NpaRGWL3WSuHYGF7QXAYN",
  "key5": "5wJsf8vUf7pBNXYN9yMSJG1rqHK4CvToDvEuSpd25pcv6LYnSbwwNJbqet4WRhV1G3W24SdmNitCraayEnS9x8NY",
  "key6": "5tetCXu4KGDK5Rx7qaCRzfTLDghhzDEqVpgXuRU4XYoqUqa7gKtrdHLfLdjbkFBhjGnRiVBdjBmnW8GKezo45G6q",
  "key7": "1gcr4WaAfHZJh8r5ag7bRdMiWNEbZhtn63pf4sKrn6wCMirEHs5oG3uBceRbuGZxp5Kez4WC9Tu7hUuLNj8P2nA",
  "key8": "4hfod1Lr2G4CGyB4y8EmJUPLNYjUbkySg8KrZ53SBQFuYC7LM7rRAmE7hvYY4xPATXBT5Mh2qDmfpzo2WR1qbq2k",
  "key9": "otAsw9LJaFBmRhQeNohzLEmmDHKKEFetJWTYJRSL41LX55uR95guhCyKHdS1wGADQzNNvMLteQwdkLvYmTZ3hTb",
  "key10": "ozsezEvCCbEFfHsqsfy9AmnYSTMgFhpYEQEK7x6Y4D9cT3bfwqUyehe4Nd9HfFv7d8vM6k4uGELzNX6NMZwTN4f",
  "key11": "5Q8otXer4i781RS6Y336VsFXMWojn194FyBx8WxqtRrC7cwunZHHdqwdEqpVYNYcsAAfprtmKzK9a8tPEdkRGLJe",
  "key12": "3f4ykCE9JpXzj5mNTrmwFR1bZp66uFWgmrVxY75Z8MWvUBDtmjvgHkwhhjnxHq5a7qNDbQ3bdLN17c9n6KMUn6pj",
  "key13": "545AJ5vZMedSSDqoeD4V7m4YVVfXC6rjSKKBBHxZo4J3oT4mBFr2jLDBS8NCJbURPGCXYfpjPSzD6JUCb6pK4C12",
  "key14": "6696NLt9Xe4avrEMEuD7HpKZeCGyWtMUqC7bvcR93syuTjob6fpmynrFKPvzoXUR5dReZNDxVS4YZ9tPkNa8zNCa",
  "key15": "2so5s9wTaTqYbQiArmVvk5oEaxjQta7tQjSuYjFf68ck7ftawMhuaTvXEN1BqZdr3Ld6Ecu89nqwXZPhU7FkMCk6",
  "key16": "5m9ETNQ3MWkhKDk4YZjHRUvswjFfDb2MDYvLaipCMBvhoGHaP1Lrs6uwo1BwYeCsMduDK2Uo73ZnyhZ18h3p4oCZ",
  "key17": "5cS8T6zRTicMaSdKJKBvCtuuAgrGz27JqiGgdyUvqeZ56fy9Mxg32S7QrVPnoUpaqigfqM1G2n1vSdzjNP26VvSW",
  "key18": "2USnVEzY1u3W9TqX3kq7mnsK4voK2cFuvLFLnhsdEyC3hFyjo7ws58rzTAHB3RUW8ye9GYRCZsvzcK8DZvz5BbM6",
  "key19": "XH2uEsM17yJnpKbqgxvpVe9XRDGeErGhjNLmWMcWzz5fLfT2ETxDrgqBhWCoDe1RdTkgpmBu7pdN2dwPttj1Rfa",
  "key20": "2SCyD4WN6ciwAJ2XBirGZoLdBMciRVJctJjBwiqe2kUPEFAFwB5yPZKGVmYyM3Qb1mQvAsyCZmcSWysakwS6R1HU",
  "key21": "4BvTFdSqUaXUkWNYCNv7fpKzfZSYGpgfS6Ls4nNNBBcow2wJHtVwAT5nyPVHh6QtaaSqzdpxK6s6b4YN9aF8E5vU",
  "key22": "5fVshRhUXiPdpkAuDgACsYGt5DJPZSFnYAuysD5Wst5jwtGgqkcJsbXJkznNazRQDHw6ewYcHXrefhKkoWnokYue",
  "key23": "58u1kjXizvG7dNSAWHEb6Xo6wwEijLAi3c7DCw1BqpDGFaKDf5PafvCMPXnpWSt39VAkw3doU8hUoA6buKdfjKnL",
  "key24": "2m2ixDf6r1tRLmPQHF4xDYrBjd2r7Fyfag3qQwp6qiakf64PYthVNnbjcguvy6nZcMSPqGkxPiRZLe3VmgYTnFLT",
  "key25": "2vUK3uZnswfCmcxfm8JT8cAK8GDgwLtMn2uyLfB6YRtLfWgXpGCye4M13qVWot5D1TQbLMCct7T5Cticp22y9VX8",
  "key26": "4uWzevUYdzCkZVC5TXqC79iCHvoGDwBqwhNqrnZiQTjYsyWU8rqzBgWaSUtvKg6XKvWKQ5D8mzZ5jn6crQRyKMAe",
  "key27": "3SHGX5eCg9tHqx4Hi8XzXRW1xwZubsEGyfbs7xNXrqT4nBixBoSyam8YEcWVjGGcy26rBMaQuABk4ur5kPtAocKz",
  "key28": "2242Um5XBnkY56PSDQsioJaCfWkx67GYsLEXW3jH1jjgsi7FwLuVFF84DTiv9KnP7sdiSnQczCa7zrcrhkJ5Q2vT",
  "key29": "29jShiB9iMXwQbQV1aDkncDggsLxW8DGE91pAEjfzrte4g1nLjWgrJv7iJQTW68Gfjq3bXtKE4WmWUReiraypR1Z",
  "key30": "5S6hRQ8Af8pmcLn8evQ1B6MBdRTFeDDd2Px3fUtaRQpYqdL8sQRjQj9HaKdtQvHTEb5Rb8X6D6cbwM6hEXcTz9Vh",
  "key31": "KDiEmfECqibs8poso51RZZpEqmeVxocELbA73JQC8CuCF63UkhHgtiEfuM4pwzUyBW7XfpwuTYPcgSXwyx9owbC",
  "key32": "3EBpUN2Ri3UtcWQNFzpBgG7Ac45qSTRWpNhgnV6pPA2tm6wEfkLQhqrVnHJSxND2Vpdmj8jQSExmTMT7FAKNrQB9"
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
