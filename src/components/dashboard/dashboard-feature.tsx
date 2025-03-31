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
    "2gUf5mNjv9umyA1ZWNY3vQnBY7ERCq1m4s2BAySfRs4NMbypQY2FbQFqBy5RFugm5kUoZT8Ur6Pao16SW4ogF61V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HKFtCTttrNpYdArAycnZRGP4sN29QSHPd6Y9xtFWMQ8454iiS3cW73GYhCHavc337Cc3yDQsp2did4x8zBJEXaY",
  "key1": "26HSR3c6idwZJkyTx9KNPs2n734EHJHZPyCRFDwKR1zcj3yTgUKaHEBA9hSR2BVPy1xaUkwBF6hv5eNRCQ15BgJB",
  "key2": "3kDFMHzEDhmc3AhjHsrtDTNc48G22M4bJwwNhWYDPtinkDFF94VTPwgJxTYVXp8hnmH7QYozm7orwJy55fHJawrS",
  "key3": "4bzcWYePQeDNByPVKVJnaMSFeD929U8QeZrmzq32SXr7NZx27AvzxnHbCHFZweMDAFvqCGJxpkbhNATYFaNrS1vK",
  "key4": "LHkx3S8eMDUty9vwx1R8WwmA8JktdHnNg2XBsztrdYhuTarmeCTY7r1ExJn3HaVY4kWTE1Pciyu5CcNab7MUhQD",
  "key5": "5Gv2ZBHaxncgyLLv2giUAeE1jotL51eAbUE9dpgzdCuJDB1zsrVWML9JjRir8fN6oDtB9FePt5M8PdVV9Xmny4wM",
  "key6": "5GKt1ixyiNsHVsAkLKPtFk3sVNWQamtL319DUUeo7t18jVzmQcRmCKB5XppAEL9hA5PfQ5gq7XEjVpDxmhLYAMAU",
  "key7": "5fVMn3aTE5GuRNu7FaciU5n65KMhDLgihjTxMdVfKoam3PnuDfAEnSt35PHMUEdsFpRrwjXhf2HEfkGYbC9P1aaV",
  "key8": "3h2BvEPNQ4BHMANd169iaVUSDonkWJiJm1HxpUyC8bCpFxXpatzAceAa7aBBJc6yUg6YaU9cFqyh1sheBakcWoSz",
  "key9": "4vE5zVudkewJVrmksc9hexpT4xaDywGf4efnse8Poq1TsnFCLdJUMQzgxgaecWKXWsBQaECVA5u5ppRTH8J2ctbH",
  "key10": "5VdFfGTB3abduPY7jSSvQS6BrR1oEFSVYZebe4YtsYWN65RZBzRgiqWGHnP3eTE5kTbKPjtaE2NTsdeBNNSExeem",
  "key11": "3KC3Zh7Ef7LnoBohcMECNN2Lfn4N7TvPzVgZGeYkwprLDgHcKRrqPAnVxXE2hBdJ3zNRtV8QmF67DDSRYVek14p1",
  "key12": "4uYeujYbqTvahnj1wc7YaE37BrTzrDhiGi9YaQsYx39GDX8oDQ57vXTQnwhAifQU5Zwysr1L7gR588aNkALCgjH5",
  "key13": "4tDfucfdZy7fSUkxNVL1FkTG5qYi45xVyWSogLy7zPxk24XvE35hRJ1hmHSYF344CHPR48dTnmLoqf75nJVo7sJR",
  "key14": "3sWiKa6GkMbWjTkYreDmUSNRo4DMSvxFWksGx9Ds2f5vBHzvVtzdf67hzFwLGfAMmrAGZhYbgpA1W5RHVf6sFjKk",
  "key15": "3dhwPxS5TQMBFm5WTwUcq1jvM8vgjL9F4LnbvPYUVQ5KysnAhGTsS6CxsmBqpoeukqfkbaChoK9dM4rLDHsXDRtS",
  "key16": "2DkKLqGbkJke8wmxpxttdtnD9tk1Fcr5SAqLHrj4kK736TjwJn6gV6vdPtPVWceMTA58Y2PNGFR7yp7EKTZk3aay",
  "key17": "2EVT4R23hgJDBYbbGPD4u2oNPjrJFaFPivuukTDtPtu2qJN2E5iQXXAbfzPZKd3UrNnRcrFj4rP7TaiFy1Mcrg2j",
  "key18": "3BfAvcHkiPj42fjagkfDpA8RjoQ3LFfQkVj6Xno8ttiuKLnrGyRhLZ2iyL8GTe1tHTCZZqm4JhWAv6XqJt8Eavdp",
  "key19": "3cGXJzGMyc44QvmqtRDMACRxG45LeXDUmcYbBqhqW9WozArtz45WoV4qzeadPav6px1HmFbha2AUoU2Ri2jdYUsu",
  "key20": "4Xn2B5LxKfhwiRawnFJSueqnLvxKcRyhbdCarR7P48UXhmoL5PmEEfGfqCWJz9URSWxaMoPxeZkSk41V4Rs5sLTz",
  "key21": "MCaMyfJLVrAipSk8JwW14pT7kSwxLqF6HiEaQ3rq6RyWtNZBpukCCfw533wGnra1px6uSKfVaWsm3auM8NCnfLP",
  "key22": "4MpKtz3dsyKAfj4FRPrHmHDNa3MdUPeQFT7bHmnHPDRjv9xegyUkvhqxP3gXPDpdeQ8E6Wnodv4LUvFVFMG5JEJ3",
  "key23": "65MMmNPgL1bXJ4G9eKZMaQe1QA9WppdWqNiqFbWjTnkhQVqZ9jGSpgKPGMukLZtQb7j6Q5Dbzi5Cro3dMbgQvTAx",
  "key24": "4RzhP7WnM2h3JPfjbR21jz3bTZwAJEX91HxXBgkuhv3bKM3w6UoWmhMTLo1qk1CLCBsT4RJCD8LPsrdKTezT2VG8",
  "key25": "5z4eJU7AtEJYhybMuGhAxrdTJo57s1R39hBGERB5Q6L3zdHP9dCzUiT3N6KHHu5qbk2YQWFn6EkfYQR1nk1Qh7bS",
  "key26": "2hZ4Pc7b3vJ5JTEA9J92WbbJeBrznu2jFXgsD92RpWJWR5rieP6TSKwRkPWVWvKNAFJNWeMf8PV9WByzrzC2UcKK",
  "key27": "3EHdcajJ5wRB3nyZ83rSmgLbfbV5AA6HZtGgMbVW7dZ9JbHRVS61ypumE8xjd2XT6ACHPH11Qf7KuWtHZXZH3sMg",
  "key28": "5XrjjV1WJqrX1BX1xtQQs9Kz98mfgK2tx26fXXr4bbs61rNafzKED8GD3CYabiBUA9Fc81b15y9TGwMckgMEDsKv",
  "key29": "5g7KpmUtA2WvKcwDgtnwdMoUnbjiY3b3pDj2ZGCPLMFtKdDc44imD2PghjAnmWKyBiokThbgiqbRQ8Xc2JdE5uQd",
  "key30": "526nHEbqXZgxPJMnyaFwaJYK7bDqMCvj4TpJG4jms5zwEUPQo2uuj6nQ2A9PNPpcfTTf53yMaytpaxwEZwFDcXun",
  "key31": "2eG3wVH5X1GMvAjEwgJu1RXyW8bydygXN4D9zePFHi6eBPbSwcdZXPJKBS9bW9ZZP9jJWxKE8Uf3zXNvuznnowi5",
  "key32": "5jh5XJGp76UR3pUkDWGx5BBo7UX8k3Lr4XgXVeJzvkS6e9nwJ3BiQPnLsajXpejbdsbFU2yty4qyaH4Ch3sUUK8L",
  "key33": "2d4sDL2UfqSJWfTw56oXdF4T27TdcqpEnD2Wg4AjUthiv3FCzDH2HboooBE7FXKk6jf2om21J3C2t2KnfMs5yyDH"
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
