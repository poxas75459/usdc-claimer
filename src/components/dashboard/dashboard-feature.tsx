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
    "2W2PEJBYjFe1i9ENebDBkmFMbs5peFy4u1opnJV9ydcnSAbbNRbrqBinRAgqthWvac4feuTkp6roRop6E8jrSomz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hAHs3pJKSYEgwxga2KFjAi65viD1gBiNBUfWtaLFgCx7fcgoprUAFi36sEQYCiAo3Mt397TcewxKUS8rybLByfC",
  "key1": "4KQHCVkPPXH7M5m1Bb9njbEHB4dbDbrhNWdXFDwxXa3uT6vSmtsst8TZWXteAdfrtbP1TtNDyPVM7eeWtHz8vXPW",
  "key2": "3PLu38MQvVBJxk9hYWZk3gYvdBA5KnG4LxDeX3TqMk7dYymfpt81bpKDPH7HAi5BkyMeUMwvSYMemcbgQ6o3pgse",
  "key3": "cHyh2NmYRyCo1nbwNY68hvvHY8mbe7GNeFBp1KgjRxu1arwb8ANhr8WucwZM2Ld17VpkL5pyArkfZUojAaevcKG",
  "key4": "3peiSQ4ZEjR97CCvuwMQfH9iMoLJ9ZKRnnLj1KCggCshbFo1tnDzxyTzXEvxaiGKtFgiemQkjLrBE77e18HGj9gH",
  "key5": "2bC3ownz53PP5TgdYYiSV9BzYPkZMeZKrW83Hkan41xTfcbAW2mzfFCdcmoR7M6oohcRgghFrRC1kXEVVM5wLAri",
  "key6": "54XSZpWpoWmz6rCNdK5S1zrrPyQycpH2E8NLuhEGzjZUJAe71Ca7HXm8Z3nG2XEa9NoZA1w6mGghi97482xBsLsf",
  "key7": "GThGyLQ4P1CeHL15hzETEJwHkdVAXqxEc1vDktP2t1cerrjRUccsNrr7xmHy8vHeD1UMkyifYJnrfXowyRYXjPj",
  "key8": "4JDhoMZY1snit5Fz1xygVfYNnykf3J2Q9qmHtXohG8m1dW7BDhqxvdxzDKJ445gQKqdLbFhGLSE67x7eDCMSFKkW",
  "key9": "4gEY5Dh6hjMncafmanUTxpM61kNFeRMmk9fAZWTZkn4pvJddfEReshRurjM6vxnBiDVGWutTish9EYQn3cPZdUS9",
  "key10": "s9BhC95sZSjKHvxjLTrSKstzRt93LZnas1jTHmW553ZY7SmzRHsLKg3Hved4D8nnnZ81oKc6bJXUKr1VXUCGm53",
  "key11": "5hJLZk5Q8jKaEaiEjeytxoPfxJDhYzmgpViTpEuzvQtYDapadN1DcDHPqFEKNchYsjJRqnFehis5zB1FEX1tYVqL",
  "key12": "437kxDBJzaeGJBYQY24NkrNiSZPfVF5qfEEyNGVBkhjnCbdQ7g4ZKR9eojm1NojENgC3tG9yEy21U4YSWKzE7cpJ",
  "key13": "kxJrMrhhEh7SkHize7Jqrnqdxi6B3KRFwvKnN9SBMrdghvsYWmaYUbQqNG3hNysmwnMZJdqCxPGoXwccneTsFbs",
  "key14": "wYje7QEQrv1t9c2fSUW4padBkfNtSKtn9wU8izZwvpmNH9fXaCT2LEdEY1wGo8Vj2PrGVH4UW6HZ1mrhieCsXeA",
  "key15": "42EvZBnsKGGuNG9viEmEFZDjDLaMUH1Zp3nhMaRMYyYfVrhzT82UCXJu4bCMiqGRhXiy3EMZ8d9Mc1d9JYv7iU6o",
  "key16": "2DA3guwb9Gajsc7K3KE4Vka3ZAGsPQbMLahdqj2p8KY6YuRwdwXsn884722e87RqBcEmRvXKwjwV2gEy6brNwe1e",
  "key17": "uuYN2LzTqkJ6H3pkfZVRxjHbk8fgughNUU7VLan37ZdaP8XaEaBzQixmqZgNGKMJrWo7ERDBC5Ms1gCeEDLCqJc",
  "key18": "31YzaypJNsvaTkgQooQ3KPMZdjzKj78LCK8gcHdW2f7QXbe4uboqE8FUf891jUgo6MAiSHp3Ak1r8W6hpScJX2jm",
  "key19": "4TYL6WyCwxuJnajFTyj5uvCMfqWQ1ixpsnbTa8P4CA1Zr6BMsvAiRqyzPeDc2GBBadAcWuyKAw982w3vPVCZAAV8",
  "key20": "5FfBveN3x3JdSHTSjDiUngrJzfoHcUCbXxGm4kRYS2tRBgnki7XBvYazDAez4KupZykmqT4WGk6CTD8spDhZgHpH",
  "key21": "4idM4dzmcQR1WyGDLLmGYxtvtCpf14hai2XXEK2kLHzZx8hfceLJjxwUvERmTtnAQ1Xrjv52R5suzWLNQ32Eukjb",
  "key22": "2uzcJ3NqSchS1Bf7QWcwqSmKi4zEzk7YpCWYhR2Y5nVdyWPnKnnsmLnssnwKSUGf1STRpWxPYMKq6JogwB2gXspy",
  "key23": "62Mo98otKHHWiXAD8dQKP85Cwj2pjbZVQr2hq1rqqCVL4Vny97hMDC8nk2FzzkLmZQh5a7sru16fQZFQc3gpLyye",
  "key24": "2zbMYj2GzWyewYG1VyhxoDg1KFJhoQdboeLa5Rhc6e4VFcc5WtVNMDzTyU4Ydmei6RN58YdyZTTG7Wo5xMG2MDuj",
  "key25": "p5FZLfr1x3xjDxE8e2SkpT9gmV1TtnUBMwrYr3PrfjXs3AysLPoieXhCYrvoCuuSHZxmhW9pCUViukrupHmoW53",
  "key26": "3Gw1Bxo9jCa6NQLry5HEXRPK82GN4j55DwSKCiGB1rATh8fsBL9UitXfVTuka67Cps3B7pyXVcDEUjMiqC8qLsA5",
  "key27": "4iSxbuhEHgQeRf4JF2wauTkzQHWEozTXsUF5m4cVDKsZHtdbpFef6ZyKyvJi5bmqCzQ5yvAuGWbxZwNyVFLk2kx6",
  "key28": "4ePuKXUzNu2zhMR7doQCa6PB3k6L7RefWe7doMUXzPzK2hcw4qYjxxrSGjAVngeqBAwJFq6LeQYZqrAor5FRqFyZ",
  "key29": "44Baae8dbsZF9SD5fQPFQBWeeP4SXgUbZqgtWWSQ9tTUkNP3AJS33GmsoTRqhBHHDvQczuA4eaoGX3DBxa9bPwyC",
  "key30": "c9RBwF9WkxQXAVwpfUGJmrt2R8stw9xSw7mT2TZzjDpsjQtrJwrWq3bq2Z4EbJRryCPS6bizuUUDuMexG455u7s",
  "key31": "XtRcXPzLX6w492Uc8kvYTHTseyHmGxJFmFZADLspRTVX1mVPpHFeYLL6x3FyBL1Nb4tzTF7A3CKvg3eUTqAwFKA",
  "key32": "4MXWfWwW4bbUs9f4Mp2waHaa1YyRhqYMsS6sw4xqKdZ7kf5VzqHXWzP4znTQM6gqHX7evWG3tkxvNxXPyDmKdoBi",
  "key33": "4QknFpXSperV2fQJ51eMuiFgX9gsWcYnEuNzrzsLjLy8arYSgmeN6Sg9Qzx7J58irjySroZEpXSpvrHQEscXxi3L",
  "key34": "5kyP1aYN6rAKyWrveYVJ7QZVXCYrKmaKr8J3zYwD7rHueU4tXZcVxH8DKYf6qEGnnitjUKz69iuiGQNL2wQTMwFJ",
  "key35": "25fzE7CusTh7vUsTXotrRWZTN61vaZ9kMp5hWq7ho6ypLzS3BNK3XCmLU4tKRUfLu64oJ8kK7gYQXvkU3i5oa9vm"
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
