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
    "uyQ4eGTdWiqpBNRuYTQtTjgccdsb1dtP97tivAeRoPriCGAtg6159zt4UdrGWzdFGddWD7ofwTAqAEzVz8HEBT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bY8E85HpCmSEaKWk8apCKmzs8CF5tTPZDVYxJsC7x4hPEN6azXLN43EorybUpo5tXaLv7HB8NmPWn1FEXh86Rio",
  "key1": "3bDfS5rVyFcVp7XYcePUGpavmbQVAD17jAufdsEfiiup8ej1RXrXJWXYXQSNnr4m61Rd1DW57K8QCByAdk7sZiub",
  "key2": "4MJn3J5h5Wnu4EVyFU3GHJw7Ry3kRaAQmVjP34vZtpimdQW4zRDtFHtZdZw4Tt2tg5uXgg317CE19rU7urZgBcoL",
  "key3": "5YdwmvEcZjkqmYB8RBvDuN5DhmCAPGq8nUw9HEzhxakCgGXEisPKyP5Wa3CKYM473qpZNwh9Geyud96tUbobXjzn",
  "key4": "ToSbJJNZHD2ZkWvCswQp8JZjHbHTd3ymyWAEoJBdgK7YKFxKYMALG5Gd7xZLNpKNsKMS2JXACXp4xuPJh9GjFAU",
  "key5": "4cRyzeiUvXBijzm9kbHfpDqqxi1zZymbW8vLZxZdPQdzhvuYu7hgYcocJ7ugcooCiCnHKDKQ3Qq33wr4ruABUaaZ",
  "key6": "3GCvvbwENsuU4hjia416jrA7i6nhRaEGjhH2jyKro6uoN9QAgJJZCQjKmtFMsGk4LgKgJ38SSrjyEdJiEfNW7ULG",
  "key7": "5fJoKnJgvFM84MSPPZ1abiZvjyZMGN24bvbvGZUpo2nTiZgz3CSy3Kwz2CqMUaH1a3Yb6bFfMV3AusxmgkzdZATD",
  "key8": "EqfkLyUD4C6Q3bwyqnxgPH37L6CWoFo7uaRGxRNGhEzAHhNcJozg51QNKc9p9tCDek7RRVjQDn4jDYwNhQMkCw3",
  "key9": "3xtB1fACwXEaXoUK4dvSoGzrUTe5SYctEFBwSYYV8djP3d9w8ByR5KQdQBQVSFoEj4WE3GvUJeqNKvHXxbjx74GS",
  "key10": "64WknbT9ibhWcJFrX5XtekUFJBBeqeeqSm2gdLcnFTPREu9qwaVJgrufuCGfkMn6L6G1xcp1KPoNHF9oW6Vo7cLA",
  "key11": "4gA1zJXxsieNykJG4VXWA6ZQTpAxqNJeY3oZPrgeuGvyu6HWUzU7LYD7nk7KAmZjxwQdmqTkXiGktV65gUeFEU3E",
  "key12": "e7J76QSJhPE3Q6V2C93nSLasQBqDx7Wu9pigLVnL4L7qTHofuNwSL3pqPUej1dFNzWECgURfUnbNqRu1fbrkgsd",
  "key13": "4TBx8CxDT6xCiAJtH6xBBn9L5sS6NsFvKn239FVsvpq2G9rKog9h55NtEreWLWR2MTjw1NL8G6pAcy55UCeb4PFZ",
  "key14": "JPRi4WsMX6aBL77Fw9r87CnUoscSAq8VgmunFherLRW7j9qUa83UjESgqgu9B7jECLt8aLXm3T74Tz2CHdyt62K",
  "key15": "5n4sPWpwooNYjHZyG9HLLNXdQc3TbGjNSattFYBVRzfpqreUtrBJgipE9ksPHgJEcy1NKQu1YLjrkZ1XBbmFSZc8",
  "key16": "KA4xutT6Y2vjEdSUzrpR2mf7AFQ3YYVM2isYLnoF8kUJ1fjLa3UExcYU2CdvbkJoBzYuuzgkADGqR8hX5PV52jP",
  "key17": "5JPMgetPiFhHoQpiyTZKJrmNVzt2oy1Laej7KYTRkHAUj6uQ1Lu1S7Zxprr9i9Szzvy8L7BstWfQ2MH82RLg5Tk5",
  "key18": "dMgbMBJMaZxKTC9A54SWnRBnwDMLiVgw37QeMQvAMAqKJmFZt2FQZX3G79QrrPA2tq2MzDLYZNGegFz2x9J2poy",
  "key19": "S97KUGFmPGBYnjwQ9Z2SDo2yRFzLpLksvMWp8iTzyiv6Bjqp3VWyz1Y9hWNMkZZeHFtx9pPtgXM86zjQTFAK7rr",
  "key20": "24x1dbsWmoYxW8CiZmBE1rnjNa6pmcCUsQ7sAJ4b2bzqUuBFisNPss66twr3558RtzFzSk8Qp5p3Nd94HZDJT7rq",
  "key21": "2G7CoEsR5DJMM4N3YVGBcxRywHkXRMG2B4N16MJJVe7HmqEBaihguEPefccsgW4xrtcexwxejLVBaWH2coAB6uGv",
  "key22": "41vVRA6XqA446fqw3qVCURdwRRD3LRHDyq59mqRzUSomtC5UzuvEjXtN1bDsDRussLjVwEixg9FMSQrgtPcogLpq",
  "key23": "5EMESKgpeAuorPknEBVfDCVt9tp2N7KNMjFzHFgyEX4UJU8bBPvbxw1q4iRKxMkWCPYRz41QX2zFMZuSdv9zXsjt",
  "key24": "7UDDVdFngJXpgpay2WJj5x6Ma1ZHWxYfpn5w9PqkdNRkvRdpAbj6MWxv2o4gxUrL2sw7FPZUmzuB5mWeCWu2e7f",
  "key25": "4y4L1usmMm5ZVjdSmbyHjt7SwaK7k7aDsMBLjcj1bRoq74kHiMyjocygdagPMAcEgiTYY4RwUTPKufH4xFJZK49B",
  "key26": "33YaFAR4skR8VemRg3ppcTfkPfBWFYRBeAU6VdsB8eP6WG7XdeocgJvrsvXSw8WviEpMJ44PSDc1kC1TEfe3THW",
  "key27": "4gBWq1x8f8DHAM3HVNmfFmJKKLivq4WKUdtBFwzQsDVP64AL5onXgFvQBYZ3p5wFb4E9fr3pCnAHczvHARnTvte4",
  "key28": "5svz73T2jvMt1sbFu7WjPrfjSSbLm97qWtHFXjz44wZ2Xz6KkbB6fDwfUq2uvAs3PtMjAe7TpCJnrprt9rvgq7pv",
  "key29": "1qtRcoKn2uTLHUMf3woBiVi6mkm9nd2i8aBm6DDJMQVw9BGbqywKDn44kXFASSPLgWsRx64sQDwyFwcaCJVZe33",
  "key30": "3SBGWiSP7NxpvdESKKzzGfQbiyMWsXtus2zh6wuWQrtqipQy4CAHeNXkRUymS4eLJMP1cAMoD1FwfrbLfu786BVW",
  "key31": "3pqQMFdNHmsYimLAAyjPm4idhWh5TcAiEVZzMhHY5V5c8ag15VGNbET36fX1vZsX54w1gd9L5sT6xPSrxqvtfLbc",
  "key32": "4TEeFgzsfUQB5hgLwHKdwAhDBoDg1gMMY683Byd7gyb7vvY3pujXDxN7wvVZ9mLj4oCooqWSZfmHa43qfk1R3riW",
  "key33": "2md4K94TGnSxnoCzxzLqLQaXHsRx8TfaZzmCt2GPJec5vQ1oJBfjSR1SinJ1p8MCV7sBn3edaJR9JZoz4jcuJoo4",
  "key34": "49QVaEHMsz4r2GjGwqYxMW5auC96px62htUk5K9wEEru2mpt1pK15HWANUyBp58krP6fDZULp7hXtWZKjJ8BxQ1Z",
  "key35": "5yxg9zChzzyyKky1dTR52cG7LXHDqBNbC2vqCsc7RU773wQUYWLzZPpjLeGZ9TyCxrpFNpkbQ4pWNcT3BXB3dNDf",
  "key36": "5dKcWp7nJqCsytrJMTtHqExTzdY5NFabu2GVCbFhxAY8p2CYKrVqcQahY555jf4z6rBHQeHKLUQKLHePZXw4Ppfo"
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
