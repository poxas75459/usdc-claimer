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
    "5jYZeha3CLtNR4GwLdrbZGJrW64L6KXTspze1MJcAv1oXA5ZKg8B9qsJhawYPUPzmxqgqJPSsB7NGNE3cMzfdL4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ytfsjcp3ng7JDuQjHLbmst9RJMeFEEDV9TqcnsyibRcsezFRNWXRyxMEm2aMvEKqRA4d1gE8jVgjnrNjXba84tw",
  "key1": "5ytMidhwbHSYp1y5qp7nMhFBSRKZv1fcPg5tiMzN7akh7opLt1TyCANACmKbReMnki9L8XPnukEZwsSLER3UZKKz",
  "key2": "VtE8E1QUzhrwApPVXyBgFzfS6yK2BSJiou7ZwJBNoY8x3QuP7nAp7LpJbxyTNS2489jeJ8J3qFxckdjVaz2szbK",
  "key3": "67EG7jLNwz8rQxpzzjZhC9D2Gd8wC82wsPZ59EJNiTyeHBgj6CRiFqAWQp8w6HbRvD2xEntiRZBDVfhSECGGP85T",
  "key4": "3UGwa6B1Kgag3iUjtBMmXmQZcJRv4Kky2Qzj7GPmFcMqXRdhgahSXguVhxyJYKaytGcU2z3mJgdU3r4eMU5dUbeu",
  "key5": "4i3FwnhtmoRvm8NUktFomERxg9Kzra1pMNUq7roVcDkQAyDsdahKBcL8cLQsoV9t5j6yQuA2Wnz8fo394rsbx8Zu",
  "key6": "3txb5atEKswHVDH5mheDD5aA8yUUTmKHv5EGs86ujXzXmP748CB7h6iCM9eCxKiVExwqVwvyTLUJs7TKKawmtDs9",
  "key7": "5vsiu1s1r9KVeEVeH71C8L9tZGGXsfabcmXAMZLiynGbZZxshW27yx33SwtjiokZfP74qNAzCS8V1g7yCGSmiqAT",
  "key8": "4LKVQEEkMsBUYtdUMKPzLQaDBpCviXts9yrvC2uZcvjGe5cSr8ojYpnHPxrHYiUULTNjoVJs7ZAS3zHMuxQkkmpC",
  "key9": "ewsvAJBSoGq2i1xNY9Qe3J8Mu4kymULaoCP756UCWAcMSttH9yGw543xJS2qEq5cYWJuvtcRh3efnk5NPZdTM63",
  "key10": "24H1Adhs283dAxUCoNp5yx1VdpJGjiV75Yc25n53WzBGLdBEQ79C7wik68mbLz7WcwycahFqzgUrZt961Mk3gAJw",
  "key11": "4QmUQRFpX1KBTovsdCbYKdmeD3n9CDjRdMH427YNfEXx7C4rv9VfZqnsMQzyw4ycRH8ASteWCMRJKu8o1WSVRKv9",
  "key12": "rf7Yt7pfBiaBp3sYuhGJoJvvBMLsSdBP2PMVdW7BunGTKqUopBxHCEyYG6STVzY5EAq2eQXi3yGfKdBbgK2NkPm",
  "key13": "3BRBvkG1ZZHbdc2c1sNYfUV3HCcP91YnfH9ZmnGnGnWfZRy3D9waNfJr54mdekAo8LPbD6jadu4qWfjDQhGRNF9r",
  "key14": "41Fdcqazrai4GQXtRedBKsRgrZ9FS4YFVKUyeFkTR6GxMEw9Z4oN1E1EPWMx6fxUnZHNAUDkiuo5fd7s45tPWqDJ",
  "key15": "655kZMkfm7ztCdBwt1ZxxnmNG9Afj8vFdqsNW36dxWgHnPrKz7ArdmH5q3WA7rFQ2PcdTDxUZtXCG2LFXZqoWrDp",
  "key16": "T7k94rMzWtyYbu3zoCXFhPaceBkRyiLisdCBc2izCcNhNLrw1HsQ3VoXeN3RFviPSqbXT6LYpeMF5UVUXC3mvYf",
  "key17": "1WL2wBmYeMgA9edsVGGP7EHx3QkbeqF21n9eWRCMHAWh2R7nYHyBMT9gVrbk5EBaDaCFKXhUcw6snmLnuKiTdEF",
  "key18": "4vNH7ZYih4BzbkpN1zfBUTLoGV7uqWfMfzZxUCRgn8dYE45h1jN5FQg6SjDSB6anzRutXD8SVF3UfFYVgvnLySwB",
  "key19": "5BSQ2RRs5qz5442rswP9vU6FY4SwDfLoozurpDTPs5B5VDYUcHFY6ydS5Ew8evQTn9WZqnNrKY8GhCAQFKdSGHuC",
  "key20": "5qvhAhzfwesktWHhmmoPiwNsa1G3sH6ThQmP27YHKq121xmCHDHKhZcPpVrTHbKZHKiUtaUVCo3hS1GMsXUjMd6M",
  "key21": "2Mgkk5iBJh8jPCFh9apFTcmM8Gig6vY77dz6Dos6TmLwv3884amjNwvzJWUZkfnk88wK6ZHgavYvaWkfZH6DBwfG",
  "key22": "4yEMjjVLki2biSaaYNDkQgbekSGZeU153sHAa7eAB9BumfqvQp6YHP6adERKWjrSNgbUKt1FSddCXdDgdQVkyw2u",
  "key23": "3iKoQjeQR5hdya119dePG3nkmu9KtVPgWMkJ3N8UmRnHY78EJsycCbkkhvLYc3FVwW5vRSm74Xa337DAdwNCPUHk",
  "key24": "3sUyqB59ZfLMzeVZyR4jEiTwWjagGBtXrxAQZ8Rg9NNmNyBqgJHB9n2DwoE8LzYYd7fVBDHqgfs2voFt1BgD329B"
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
