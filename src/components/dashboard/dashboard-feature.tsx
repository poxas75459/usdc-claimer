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
    "4hdyDkeuAQth1QwHAzsNpbrcMjpBbChNWfxnPX2cv4sX3QHV3tN2Qf1WqJdueDpwuZyNRpbakHjXpMV1sU2TTYdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o4fsqNYHgGfMQoqEFRq4THzoTozUYvipL1k2L8LSL1ay9w86CCfT6rSjDUDSCF9yDSuTf2pSPSHZYUY38ikt9Mn",
  "key1": "4AiAXpexzSAeo5SmUwuj4B4WAPyn8PuUhK6RNYakXbctGTuwV154sTkKZfJtXKGFJ3QAqW5PFKYqNdh5Weyp7P3J",
  "key2": "4nuMBQQmyPrkYkgWpCeWLscrAtyt17jHxE45uR5pBqTrnCmDwqMoZbewggknBKeGnDhQaV9d9RCiijiyvWL7BUoi",
  "key3": "5gSQE2ve5gGmVMduwTS9yUxKi6KMmKxapwp73wavR7ryBfNvgvT3qeYK1QDiwnxGKSUg27MDR9QFXbUA8XnugPty",
  "key4": "5xKtYUYujogFhpeZdyuWvb8CehUzoC6kp3XUJbd45MYrskgzqzbk8hA5f5xGDzrrDXQFXXxMrpSLriop8xt5A2H8",
  "key5": "5SC5svFprQLoqQAP1XjpPBsxrFFarUfjTzBTGi28gMGfB931sDMCoe4xS1fU6mUPVnLs6u78uvkBRQgas3CJ8zFP",
  "key6": "3VdtdAZnViNgsRBvcoLxMj2VodHEiAa4h9aViPrCPDwEwC3b7Bx9nt9gPHRDTUE2A43Hnr1dyLXYWftLLWDzS7nA",
  "key7": "5rprJ3XRX2uNoksybDdmRihLMK7BfzojcKGhQETfCpiwktxS49C4MdAys7yNZdT4CdT5THsRAfZaDn3KPU4oxwn4",
  "key8": "33DZUujx3LKgagEXAphs9R1vv69w7oGRRWMzsDz23PP6iFoFkwND3LafaEbAevFyQVLCPWybVheGFvYuJ1eB3PeV",
  "key9": "4u41Bkr5NrrXagBB42BgMXHiH3MUJsPjscdjcmhA4YQPNFgrrR1bUU4CarrtrccNEZe4Yxyue5vQBfscVrihWTPV",
  "key10": "2FHPhdJ11bVZf7HSBDh2njJMf643cBdLKSo9j29wwF5jH8mnBHbL9xQ7SyMJhEYwMuhLbsxJzeqmN9ierStzzorT",
  "key11": "4UT8WovuGitMyf6rQLuriy2PQATeey4KNUuw1jKDkivP7xMehmXTQXPSdfjsHaXdykBJaEL6c6vBwgu22bcW5RjE",
  "key12": "5tSsQ3fcQyoqxGRsfASDvUmchnKeBn3GKTmsaxCuKf96WUbEySVtBuVGoVnT3dQi9yueJdrvutVNv3FRddiCrhjm",
  "key13": "5ABTLgxo2mj6BMugXmEipQNYKFDRSXNcYUpJMvgyEvRwCKsbDLDNfbX4qW4tXYahAxkhRrxTVkBbhudVDNXg2MvL",
  "key14": "4uqzSarZFr6jBcw9B3PQdUtS6e789KdUSu3sM6keCezphWnodm5uDvUAEHoQakmwBdkJDaRTaqPquLPPPbn7qGWE",
  "key15": "CdYCoDf5d2VeTa4YUesWULd1VddBL6qvWNYRHg5BRTvxsuwjHRNVYowAZurA3gTa6EGwQFvRfj3sx8cT7XLxqwQ",
  "key16": "4tAMtoLVyh3uEtwZfmbv4aD3eJny3g3PYWzMGrdh6Sz1rnjYdB5nxvt6dLdSXfkSHg5HNjaT5ve7CQhyrRVFgx8c",
  "key17": "2kYSFgmNFVRsb8pXqHkoG3YvSoLBrFWG9YbbksLgHWz6xQFP3NNGo8iJVxjDoVJy62geZudMkyRDJxbRsSJjRXWg",
  "key18": "4ARYj5cjtEm8uLGoANYchqMsHwzGrwgJJsjgJg1oWh3CEdxERANy8wKagnSCPCAvHD9F189cd5ALout8aKZPsstz",
  "key19": "4DX1DxXubHwJSRwWtrxSvgcnped7oQ1dVGoLCHXkSVvQpeuFntt4GczBzqZtNQkKSzdXZp6Tg3LsMwG4689uUryB",
  "key20": "5234bu1NmH5BBcq832aMWJponoAXZnJKFpqnXXrGpS5rBQv7fL7EEnDdqkY9RZgK5kiMsP4zat6pA5JF3E2Z9CqT",
  "key21": "3GRhzmhaELXutcaskNKExjhGSAFKSujGw7pLdw8QfDm3V621fQUWDfKuMkSS2qJFg9Jdw85kwbh7NkAHiYjSRGh6",
  "key22": "v5SbDwxC7h4DgQkRG4sNwhQuNuAAUjZwDeQrUapGtVjGUdZMAgbEgp2oBeHvvYeYwAVCoMju74G1mVrFTAv731p",
  "key23": "53kTvsKnMQjKtDrqabEqAjQhGza7qUMtCBNxv7eTzAYNLPJPJ5XT9Y281KDVpwduLLbE9J3ikPkfc2EUbXyqB4ip",
  "key24": "5CYFztsfKMqi9d6Y94EJFzX7NWQ7J4D4hqFh1v37ZjpmzKcmkoQtMRuHZj9X7tWxNkkpFa8MjXhdW1sK7RQr8KVe",
  "key25": "3Z2SCcedyQKEr3Qcm5hkS1zLip2PDR7CyLBJxMaD4KYEHfJJjCywApKBkfJZ86bxUYULANskzFgbASq5p4ZjcXia",
  "key26": "3kEAqQYYafcYjFNyFmTum9dEha4A9BARM1YkutUnFyqUWZ9iUXfaBKQvyyZzHgbcG62eyA5dXXpydPyBHaGL71JZ",
  "key27": "3pSHMTKCe8B46GZ7XUmwHsnsBxvjTi4LT53JgXdYHR7J6Vfb3cvBNe1BZS8yQcanMaqxz6wHXDXD6wkcS3YvX5N5",
  "key28": "4eLqk36jraBiFHfUoGNKUnWU552y2dcQnkN3KAPZrhmrDdsFxSkN6BzEHSFQH4J6hKWJLsga8ygyYTWkmYXGCiUW",
  "key29": "5hyXXddmLRhtQj2ZZJDCFsjXoBBhCXj57GdGwwBmi15suT6B5BpVfzKVmvprxjYVFTf5aUuM9t3qTqrh8gro1vJG",
  "key30": "35MTadwPkhoets4QAXperRjvkLBTGcfZeXcafNBT1cZQhTmeiiujMviZVPxuoqcP7RyfTys5y2idyfvaNRBnEpMS",
  "key31": "2Z5LJ5eKMzPtNLvstEPqBkjgF8jDmmddGSowRKMn1PmBgqtwrr36oWQH5XCGN29BLApAKpVKuLhJURmZBwr6y8ou",
  "key32": "4PRUNu1MVzkCwHBUg4vQYJTEoADFc3QL4opC2c2mfBAcDWjZTwF7zihhLY1puZ3r55cEcsUGwCNQG85pVQ389bSm",
  "key33": "3z5GE2XWhnKTuCyaDqnoYJ9J1marRxH6nSn7YPGL1S4EYbH4JAQZN7KCrJ2hMGbFs16VxCPgENAWy2P2PU9scQog",
  "key34": "22rAqM26FvnCz2zA4kAuspffewazpw6eKoQ1AFvPJNE9wKh8EPYtoQSvHL3mgHm4pWReLeuPaBRULQ1RGNw6a18i",
  "key35": "4oW9YSkonBR1ZAyZ1BT7wDyZ4VsUTBM1Xkfs9STYyb8WyGja1TYTSeonPBLuyp5JvFV2ejSgTjL9QgpYNtaHTzhb",
  "key36": "2XntfSmBgWegLDC6YSa6JBWkvsueqNrKM1AygJFV151BpjZg7zZg7q9JwmMEshA9cKyoQgGN7RpGGgY9GoqwNygw",
  "key37": "3kG48hxAvKfz4JweAwMoWTZPXzHWMYM8AUEEnCQZaZ9T3epgwLRJve7EcurMQgA1audhqaDRBsQp9qHawoQriNgn",
  "key38": "2gPacrfS52XNUVu923Se6Xu89wDaKUhd5TpeMmhi3SC22HTj9k7DWbZu1c2r97dLx1ni1YfWfmZEXaFPjaqjELZb",
  "key39": "2uNmnjgo4redJADxkuoqPyE1H2khPEf8AtGXhNzsLAGUQT46YZATapxw1VdYDYbF8VfGtQ2zNaSLMdCHKRdqzgpu",
  "key40": "2gsKfcn5qfvCFtBTBWx4ctjo8t81NKeV2uKA9D5ccDVn24dyYFdGUwdTVqAuUjAaEvzheGwaoHPuLjb55W2f1a3F",
  "key41": "yKoGGxBjejVwGHJuha94fr19hNDCmoQEnJk378bCMR1DSqE5Uu9uWuXRjca9Qp1Z1guihbeLhBBy9NWJ5DUSitc"
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
