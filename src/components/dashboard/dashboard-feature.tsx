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
    "VtKornfUG2iyECcULrsuvwktMJZpKqS2ZtGFwDwJkSdXn8nfexrUp5pkC8XqGqehV72G9poY9dvLSq19JTAAKdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YdwCAok3Hv4mBbLoyK3pk6ak8ixZ69NKX5zVhtuTAWTT9ddiDm8wNBkQsmPyBegqVeLrGZFEUJf42HknUXgS7Af",
  "key1": "3LffJeuHTdiVKeURDzReKZbxSuhpP2q4nV7MCU5iAoeKEDWHN22UvBhtwVxBY3pnQXMyLbeH7PuAbi6qKoe6nSnU",
  "key2": "2k5wZg25EuTJgnLNFeoMrFYmCAbtfkovd7uPiZhmtdii9DJAvbaTGkB9tTPTVLPEFX4d7QuJnht1J694eWtPM8Ym",
  "key3": "4x75qpu6qmYB9xjQJcHiUJSuZ9dhbTnWCZVcoBn8p6JzReTDSQnqjDXmEuQTCrU5dxXmFnaZxiPYLNouDYFRVpk2",
  "key4": "57KVcrxK6Fin6H5ni2yZqke3VFTEj5YoGDAmQ5YwGjEK3EUM6F1FYXFqvWf6uwPhcEZ3Xb24z6UkH6ivV3y9wGjK",
  "key5": "gS8U3ZZdK9P2v73bbjPuu5z9aMctiiVsXq7inzUBenFSvXwGUU3WoCDdx4XECUhEN9xKfLxoMtgrCcxn1viDANM",
  "key6": "vqSnNKFQexULmqQH13x9n3nLXUEv5crcx8196vz2gffaQFmZ2LEhQtsHWNJFuNCHRJ9X1JWXR5bvQzMNBCTRqNx",
  "key7": "veVij7ShBMWJ3pJXhTeZFdwHR2qGKccD9vn6c5VFL7NsSmvoyEvbzfDU2WCf8o8imQD7zuBEiSWFWK7soszv4FU",
  "key8": "3YLGZ3rP6oGgoqgkSBtPS4EkE3vztFFxtzPvRRFshNDDNQqUDgngPBfDwxNTtamhsFr8sBrhXZLCdTHc1iZWpAR2",
  "key9": "3HfWNiUdHSVXCopDWvwWKA7x9mdNXTkJQv6cuocVC414C4YkxgUbXpJrug3jwWnNRVYeo2eR34dzMpLG9PxbjzHR",
  "key10": "4B9xxyKqptqqeNSfzCkbw29pDYuzNCadcQHJDrXDzKWyyFnsGGU72ihy39H4eLqKrACaf9at4WZASLLqH2vCFyEn",
  "key11": "3DgbtNbYEBktphDpDUa8egYk6yNZrnmCAbduRzrELgdz4mMLZeD9yZ74WKDMTHT72AHZALeL9QSdEjaYHJRqKjAd",
  "key12": "AwvnDQ4Cjg95FrWKqUEcYunaU1wNFYan84ZyRVG8qjfkey3ZgnrLSbkUzGUc3V9Pv8HSufjHeMAwC9xWWFbtTzh",
  "key13": "3RiMkZ59cvf4iZVXvx35xAWW765dVW6ZxDarZNQ4byqWDUViR2kNFgaPbrtv8zNtjU95YK5h76vL5B4GatNitFNi",
  "key14": "512uZYt3jEGjaHRnqskybMm9mXZCkWT1JFEJJfXRMW2bB8ZucfntyfqVVmjUUUdVsyBZpKTJX31kxbguZ1tABkqE",
  "key15": "3c3LoxLEDrqtwGcfvi3YbSJJ7yoWYLBPBG6nbwNmEEoAdJZLeFsdTXaUXW3fzpqXotpL35TUScJ3UHLCjNdd6jRm",
  "key16": "pCidARi8MjXbVvg6RPrhESae4Ahzst3NdWMh1n8JJfcfqwPJTbDV34JvYHKmskZfbxQ28cN1AaEyLh6oo3CWeGa",
  "key17": "ZzTZKNkUPagTVKcGerWjY9i9DyFi3pSLPZbv7TqLFbhd9pzdYkKhzv6f2GwV3uxAGZikhSfgkGmsBkFweBiFj3a",
  "key18": "4VayJ1bXeLtxPxi9EX5py4gH689Q9Zqs4mNpHVqrKUbnDxxUWYFEXG7VwAtRsWkQDAxoQKvYwEzSqzDQeoeQLXBg",
  "key19": "3HDz8mCJ7KkALToQSc4RrVz1p2dswQAcUhPVkzWKfvuMVMxw62HqdiVxm4z92xMX8J9gFXGcZiCPMr5L98LgR1WC",
  "key20": "433JrC1qedvg8RAzUt4Pcwbw24tf1ptiK4yEhsUGxvj1dfW635cuC2XSxQxf4gfVVouRxqJkjWht187k9Zh9a5rM",
  "key21": "4tBFynEgQuxntUw3zEhTWk4TkjKro4PfuLcmjy9UDkva9trpPFMy5Wfrx2DBcdXsFZ8RimZ9Pw4jLmQMqxTtmsvd",
  "key22": "3cRS4Ag8X1mpyDBp72hSGpoqXQ8RxBybe4Y4HTFwSfET4yoD33E6iYEaHJRkxxDfWz8oUcMdEw7ASTZVJmxeZMZa",
  "key23": "2gSdnonX6vs3WC2dctb3XxvA5EujdHFYt7zZteWHZVjWfz13bDtZkmrTrkKj7Y6GPGasHXafijEffNb1Qpet39y4",
  "key24": "54zD2T6Mofq5p5tSvHYoSDZqvhyKUqwTH8bme5cGfAUMez4J3xfm6j4ncyHoyhocu2EYpMcNXUtSB8PfeaLeqDES",
  "key25": "3ZKRYgmS11NPRZ1Qx2e76TU1yNXxw3Db9cX8mPgWMgDvwuobRsXR63i3M8RAkVjfiKnixsiaxjZoA9JqejtZiaBH",
  "key26": "4KzWqFM9s5oECWnKjdaoMbgzKqRqV11diRJf7X92cLgjrv6619FgUXGLPVyisYMMuCukCtkVx48JfoPNb8jeTT9w",
  "key27": "3BJgBaZAoMXSumgmv2YkQzyzxswmqys4wxCXpF7K5cxAmG4nPdNw5JiVK6eH7uZ5rwSmmVZENsfkaiq3wNaKFh4u",
  "key28": "4EX5GJshDvFprLn4SS8nkL8KriTRya3kXG5FGkCArSqxHbFcnfLyaSfnHnGn7Md7fVqNySQdG9jgZFFPYv3S9HcG",
  "key29": "LgtPsP7HLeTrZGa7Dbjg9VdnEQHtiGqTWJuvJ9b9N5WE3TrAZ6Px1dQwzzufsAxf2SETFWqgvksXH3RaP8YyXTw",
  "key30": "3rmiGyh1z7hCFffZfgSfvKngkjeNGec535mddiJMUh9G4rdNbmVbNgtjeyHcQGz5skeNG5Fx3c32AaacZwgE3iRC",
  "key31": "4YJYswj9EioswLzVbX7uHxNeVscdGJk9sEKMAijhudm9GpAsVbz9DwQ2gLZTyk7s1Ckon9NEiAysG1VPsZeFruhJ",
  "key32": "2zmG9wurGuskHE5Ji3TvJuSLq6ceSBKNGGaeqJyz741qHf6ohqiGkUho8PbMAEqQziutpEv5zrxdvrycdEg9n9uX",
  "key33": "5wwQRLMPaqKtJcVmHPyAcrQ5ZNhgwQmoKxGLqMCGmebhRfTJXJEm4v3XCyBEQUUDPJ4gyY1Y1a9JAa9pyJW4zykP",
  "key34": "3zEz5HDPVQmLE3BEvZg1J5vQx9XP94iigj1WnYPjv8XGVdRGJLj6KTXACKzpvfq3xgxyuJqywk6wYaJaGzNFEMds",
  "key35": "4Z3Pq8qnjxptF4UtyfCMej5bYwkoZXBGgd3DePv2qL8D91oAEgu6hakzh6asW4gYbUAN3uxVhpB8oPC4kToF5fuf",
  "key36": "4ZuqHQW1rVcFzhjWXG8XEEd5LQpaMgfx1hVK294dMsGc278hKncEzCX7iNWTa4oVXGXaHKu33MHZQk9guT6z1aZb",
  "key37": "2wEw91vYRtBTycjyGVEjCVCzwBaKYA9gtYzWemz28K124DUfbXodzUaydSDfDQBdHnu7wWLR3oYditdTfUdUwf4z",
  "key38": "43NYco7P8jGDRcCg3Nx2Ye6SmaWKfgNAYtE9TiHUp6oXfNrpv4o51YkYs9GX4STF71fdMsTYYQHVcu9ssykra3ak",
  "key39": "3vH9gAw1KHTjtDBJ7ysywUtB9WRZ8VzvzVYHBAm3ikZk8RxTc5h9ZaDa6im8NpLri5aY7tn4vJwAYP5Gpm2bmM6F",
  "key40": "58dYKJFUVSLqDF3Pq3R22foDcUpd4jTpGnX5qt6NFG3kAhaP234iW3xKbzTSQqZAf8wvb5xfcPvyVPD9aCMDku7X"
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
