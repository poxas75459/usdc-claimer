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
    "3zoVBgZTfn9CuHVHiK9kbcjNFPXXRwAsbZqDL3Ba9uSJrYjSDsbN6Z2y3EZqk545ozjwyBYuWULF3WXwDhazvz5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wV5cs63HHzFVtfM8pAtzbjAhom43TK9jmeNuDNgfEtCptVMWY8YvXKNCSTHYfHeRbxvUWsszS912GJdC31BWUxt",
  "key1": "5oAXHTVxGu25Q7PKvueqecxB8xTjVcCbpk1GntJsuVABcYPGt6h4GLgrArw2kBYbVSi3P8dwzrb4PsZTdha2hivB",
  "key2": "565Ta1jvyN28DX2skxfJRCmPwF9v3uRG6tCJ8xvwmHXMoJicWfsB4ETSW2kX8a2cUbd793iNst66JNorMNauLVpA",
  "key3": "4mRrYovqms7qhqxeDZmwf4fqX3xrfSeGWxJnz5cFHa9c5ZiU7HX4HHxtV4ZVUz7ixKxbdXgrFLydQbvwX1o6TWvU",
  "key4": "4TY8ffX8fZyfwecoPKhQD47LpBLhZbTLjVcSbc3WqrLUkJsDzkLBpzumG8jjHmmNKaKJkv41zamPHpkf9hoURXh4",
  "key5": "4aJ44xAbQn1MXgwz8MyQ7AdSooL4zoJvdFYR7i6LViq9CXGRaES1ocEcy1jCMZP7a6aj3qt2868bx9KajPiteCAq",
  "key6": "5p4ah2WSrcvE2gzZ969e9ny7XG7ypxkCMNSrts9vSyMipSRmUvHDtHMKthArxu1k7psqdaiZwUY2h9navZsHftNZ",
  "key7": "67aWVKw9mLi33KSw7t3C33R7vtyMNeXgt8doDhPpp2rGEwGvVTz2ZES5wtd1c1GAwQdgkKuSNQLpf59gFzpjFnuq",
  "key8": "47xVzC9vZNLVC7jwRo7nrXZGpbLoCtkk62jvDmvwpB3Q7fXJcSFGrrrx58X9avHn6kJbJZdTs17oj32meWkgEhsQ",
  "key9": "4ZzJNhwNYkXiUsPDkxRRg8uea5pjedgopCdGkoP6gAJn9Ye8vCTCZtLKTmXBzgQ3E61bksowWXpeJ9VCXAxPkUH8",
  "key10": "5Q8QBw9nSiov4tTicCV3R3aRTnQFq8w382N1WfihuhoMYLfW8jkf4u5XrBM16paVf5PNyTyvNKy5i1wjUQmWYi2B",
  "key11": "3Ysm8SbbzoWPPYLKXdwgzKVWV2kvMwsWM5u1hKAKPauwc9DKYhyYDQZxDEUurTs2zY2dMK4MXjvYPzgEpK7kW9Yz",
  "key12": "3iNHJ8JESFxyP475WK3GdUrxpLp4F84Kn6djjHj4uKVEQUFS6zgRwAtRoiu4bc6A6hyhWkSiUmiHPrL6CXRbAoif",
  "key13": "63Gmsb9WGHA7DbuMFMyP2b3g8n1ooyGEYcYBEJoBYGA2qNppxEQMtKzsgQDuhRdHtV8FNrUaMW3ZaD2jyvKx3Kig",
  "key14": "gZHp8QUp4K6Hvh29YCNs2baL3cWKN3gDeJGhdfK2te5vMmhxDTkxY3UeZhzNiqfUW5FpG2XE3mKnq37fQcA2Dvm",
  "key15": "5B9KV6BqvJcY9bSsKZ3jLTmPvfAtPLVYpo1UddpaGPbf18rNaDqDgu5KV3acdgrznm6xgeZZGcwhyX6gHgUKQLdb",
  "key16": "4jpLAidPu2jBjPePRLZ9yTMAs2wJSG8snQgXJtDzipfoA5Ww6JNmUX2rTm7bLFhCe2V9jMJiMm16aCcVfFCHc7WR",
  "key17": "4FDJqbW7mhauGkW27GpykWyUBAv8ZpAkhmdrxbVv9jWvS6WEjMB4bTSao2pcy8poo9pjRANR925X7BgynFdQcHbT",
  "key18": "4kG6nkgEiE5GcXAzgiPMA8eaxTmUGdHdueaUYfnCoE8hbv9JuJ8ER4ixv65q5XtUREnuh7j98uSLMVzvUbsL97HR",
  "key19": "kdSQUCLpZuycHXfjqEvAivbKs8VTjYnnrcpMQ4uMwGcBX6J2iKULiQDZHVTsxMXRk8GFYXchwe6MrPs6r2LAcdd",
  "key20": "4PjZ1idmt2djrpzHYdNZyJ8Sr8RGYjDBwhX9D12PWxctxbch84866CjgUVvp7GfHmCXgCHZtwMGnZpVUJxUcKYPE",
  "key21": "4kMTKzPLY14U2Frhy4bdyDMARLRHU2qowSd18P3i5QFMkNLbx6cC6MkYi83L1gtXzBDqQEN8dnVfvk1xHJf13Uzr",
  "key22": "67F71MwyMwhVjbhidd42di9ELKx2cP7ur1vdVFRkfCirrkw2HxuY8g9a1XPfE2Q4RVXtwEmD8RSexUFAvNEvCd6S",
  "key23": "2E3b2WUmfbB6Pm1zLBA5JCs43db2U2aCps1A449LLuGBEASkzsM43bW1cY6XTrmwWE8kiBc6jTKmzZW2SmPJMQE6",
  "key24": "4vzLbMXwtn717pd8Wq7RdyBsy2Qxrwbhqr2BE6AAreHvqzboRgDXoC1FdFReVQJeuobQgFDf49wCb28jqTU3AT5N",
  "key25": "4PBLeFNreXPs1N4vwRhBJYRk3tYhisHk1m5qHBoEdWCCCxXA1YVo8gZKuHZy1FMTrjTniDeNgvzL6nXGX114rvLA",
  "key26": "4nZ4ueRnWv16pQu2RGthy2DUkuq38g7JmYJXxw1Efe9PCscsEnRA2nT8uvvmjWRqyt7u9gdLVYZhH86XkrYFYu5j",
  "key27": "5Be1PQmg2C86D62AoX7dccyz5u2LHfJ3TGfN1vN1opANBsZk8zHfJsm7QxprxKCHC371oyhdrM2H6He8eB7fZjwD",
  "key28": "fTSbLRSVEb3HdPqzzuAposR9FDENZhiQbcetxHgkgg65gVHSrGsXn4odjoLAx46efPHt9qKKyqkPs7o1qtZ1moA",
  "key29": "YMNHxu3tUBY7rcBu97BqWZMKYWW1hdRkKaMmhud88A7yw5CcoyoD8fqBAYewBSAYnMX2rWEzMAQ4JKzrHzVj7vH"
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
