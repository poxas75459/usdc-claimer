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
    "t1X8ujCeds1NxrYq6WHqZ29Y2sAiP6hieqYAmGDvFTjzLWCtDcwMLrByfEDvkfSyA5tkBVLXG4oowRMkPiPm8dv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xyG5z3RJSENJefCZaSNSGMmH6o16nh9zM1UYjMqW2yug2tPETHkGB2AkfZvYBkSQU3LhgrQKxVQh1DBmCLGozL4",
  "key1": "25uXvi1kBavh1AJC3gc4JQKp1JJpkRXFKEmvQ6TjSzpZrDZha54NuPRVC18fvwS6qeBjH2Hvih2MLpZhpNj2mZr5",
  "key2": "UmYinCrFnWC8iJH47PEw3ntXxwNBZybBUviMQUw7t3Eqc6uPE9MKJYbSRPRdVYxTmSba9mGhWCMHpZCDy1cC7fn",
  "key3": "5vmPdoUEmdDNhjmD2UkxqGy6PaSzzbTxKBkZNpdLrWgDMpVkGpGToVwesM3oHDLPsqb8nRVGqLohSTNUcyNxUdgD",
  "key4": "4VncCDZw7rg14FtEf8PpSqx9HY2sAbrDiTWYfwdDBRhMyhqLLbQyMpnPhkUkX7kYyZ7BJCMxPhtB3kfG3TXuPHMQ",
  "key5": "iFRT7J8gM5ucJLiuVNwcJSXy3SUiGVdZagwhv8t1Xmiw18akyhiArWyZ1uwnc2xfV9hxM1yMvHcwmsurWKXBhTT",
  "key6": "3mACHza1MKzEz66Qus8FXgjzqEtXT7Kuf1kgw6VKMHjumdbFJtqWaP7pMoD6pe2G5iYhq7cW7B3rdPEATmSPgwn2",
  "key7": "4am5RjwoSvY9FJYWYe3eW52fTuucWRYnruU7mHVTvrb74FdkvcaGKrV3cVE9ucpbcXAyk2PHgUTY4RajcWkosWBB",
  "key8": "4kVmRp8N7fjQPYmkXr47zdkoMsrb1wNJeNPMwLECfAZD95aMLoDsaEtUsPPzmzrZgQJ23ABErXgADz9Zqvv6Xj99",
  "key9": "3ggUNBK3xwtdkp9XyXMh98kpnteqzYyyEEYtHWRLHRmBZmSmdZGR283nQX5MRhEZcbxLS7ut9j2JrnYRSyw6vs81",
  "key10": "3BWar53AWDKmUcwqJjXzLzgoYroNdRbyDKwCULpy7QjeW3Snon7VP453C7yiYVVS8oKeTJ5sBmzwnjsnCBUnmXhT",
  "key11": "2EhprPnc9sVazuMYaNYiytW2MiHEd7gQRgcBmCCAUeRW7BgBnNZcNdLcrGP39XUCjYHnp6iZV5yhUg89mt3iZYD9",
  "key12": "zj8y3qNornD9Qc6SH5tTf5ENPyWABJF83yXsFTNzkBFvEoYDVcJkMjvKohzWsHtHbNp4jztTTv24oJ3HvnSBaCn",
  "key13": "r3oxTv4YbGQjSRYZ3wsbzHYAqPs6P1gJQREykThzJwHYMHCNmDQH1Nuo8Z6Hau3ZG3B5VVNshatAfidpqisBpeT",
  "key14": "59qEBsKb6uRvnfYc5Y8Th6kZth5cKBTbRkf659NtnnekdVhhJRjeVC8oHRtDGsn65w9CtGJcZ3eMec7gSoM6557B",
  "key15": "2YrgFHhdERAhYZqsv6J3pFzg8KnU8g2952JwQY3rxNYbf4SRwWUjnYuKGenX6a4UZKzymJVK33PnXsWN99ErNikV",
  "key16": "4KVT1GVD1pjMbK8aat3GqVoSsSXFzKbyXkCughr8ZSkTJiDNcVAZdXGqHQqh26NCzN9SpB4QpinQzNB2k1d1RH8X",
  "key17": "43hXAcgoodeu6MbN8bCwU3FBVWbanodjhtzGJoRHWtcSHj4ZL5HY2jm7KtFJD3kgNUjdrGiY5Sjr1wuG1UVLwV12",
  "key18": "5xE2EQZepbDx49ZciCkP6CJug1ZfcgfNwU7BqxmwAPv7vuzen8ULn5c81owVaJtTKwDY5yQ7yTTbcApFb8dN1Hdi",
  "key19": "48JT8xiwed1mbyDAtjTtXEdXWqKpSrwHz3fUAfeJrcrG2wdVNFfKFswrpLvv7yUvgr57wryn5wK9cYKzpftpF2oE",
  "key20": "4PePdoN98we3eSybLtUgbu9LsMA292mtTbnsSw7wE5SUC52bKw8Ei3FtExDGuLq8acu5o1mpE7oPGoU1t4E73Ma9",
  "key21": "533iHmnxoAeM8mFg4LYPTKem2f5bwTPetrxny7gxS4eBw7ZeLX6tcPTmnhVyQqsYtCXjWa6UcpBtc3tqcRxigVg1",
  "key22": "5dV6RACoD8rfzH3Xxow45stQ2RhvksnZDFyrwUqDf2kpewnnfzfJhFdZwkm3tkbMuTPxo1BDoMcDmM5f1HKToF47",
  "key23": "52HJtdLMfyBdUGPhV6x8pcSjmxTmbaHiKtj8BVUTBG76jESTCk6QuYnpkQh85XoVHYJCE2gUH3s93XR8avN6Z67L",
  "key24": "2mTxrdFYCmvpSzmLhX3K1ZfB7qC1wHmh7rD5t9Eg4J1z9ExnXpVuzr3fhVfXFbKVghKnh1PRiePWMYmTaUu8gQKc",
  "key25": "3swknHg8HxjojYhAPhyLi9Su71ZcHRRpAF23ZtWoHbMQBdn15uMa3MF7sAp8mfwbxbuSNn1hPHpzmhdV2XZbCkFR",
  "key26": "4ZTisdLEyW7LtujHACbzpbRjFTTNWgNzMMKLHbBQFNj9GhNG8Et9vcBaXHutNxDSu8qYsxBGRdPJ7MAf5Mk4fmMa",
  "key27": "2v5jbHM2W9TvdQiicjx1MbkyJVgwaimYa2g4cH9r2rFjQ26vZ2t4ii7qUkVd7XDemHbi3xRQ3xobUTG9VS9VzTAu",
  "key28": "rGUW6Zcu5gW8EKpCyWixYrDbSt4XGeW6vtQYCyq2pikBifVX6bZRHw229XM4o4e2LPJZGJtvdpwvFRXSzPvCE7Y",
  "key29": "3XxMZdF9QdyecRvC4wwAiyzjT4Amup5a2zHMiB4zhaYrPoskwpcQNJycVmAa6huDpYmthd5VpGfP2TqWMRo9Feio",
  "key30": "4Lbq8QFcfLYydvhaF2RTfFsxd12naLAXdUB4kPPD5CEyVdV6GnkXPfGFiYxiHCUUrgFMpfvz8WVS36K7XomjchuY",
  "key31": "48jHQi8Cp9ohiKmE9qsjZiPeV4kDqNTRz2osrSfpWEMCRxneXyUVBNcUkU3u8PEoHysq5NhBAkAcYiPcJuJXi3U7",
  "key32": "3Mt8spPmbaZ8Sb8se91XQym1smiHxD4gEinNLAcLYU8Hpa1BBYxvZQVNUvoqsQrUPxSccrADMRv9mxKQm7aZMf7r",
  "key33": "2We96pTvVpZV6uGokuVQvo3ZjZkBYxfaKN2mMcbP7AA3e3e2EwaJyzn5tw5eDyLHt9Kk84nzLqVDRGH9gkLwxr2u",
  "key34": "7k2WCihkj6QFvrFvCGqxVsDrUV4DiJ1rVP4X5weJtaDFYPD5EaSubmeY2L9FrZNQmX3nxc4Z4DhcrWNxLRu3reo",
  "key35": "5Q3HefxPKJwZ2DeaxmwAMTcDc2D61iMsQ3H8dHy3qXuSU9iZsABGc6LVvaHJS9jA9pq2EEWqAchLttjhyB7d8grt",
  "key36": "23DLXLf3Y3XGasN1sTmJyZiT3XvySeRhDk7JyjhKpV8X2jwkVJ4QHBcu6T1EwgE6n1nDKW3uYUQiYUNTqLrFTFTx",
  "key37": "4Pz3SFkgv5N57N6mAi1hbwice7BNqpt5AE6EAc5cNDR7wqmzFR47eDwmiMP31NRF7p4rPzJeu2wX7JMxJvQwdWKd",
  "key38": "26mYRBBFxCsYcDMuwYDfCuB9U8Y3QPMAxnh9PmNaS2T9YYFLwyEvL2TNtC9bRhfQqKZFSsyYxmxrFDgdAUawxYjk",
  "key39": "2535txLiqgAaGgY2JU5xVx3VJmiKw4dehWy6GNcv9qvHK59cR9VHdbwzbCQ59rdrfLDsw2q1woRM9VQmGKUtibXk",
  "key40": "2NMHBcMwMVwbundeLZTfMYB5Zqhiwnh85gw92TXVtdGLxwbKtvvaHsjMSyfvMPc1pF4378HH7NV4wUJ9JNbNYKxu",
  "key41": "5XVN5AA3XypabESybYp8LFCCgCGcwuUKGMbsdLjnF9EWVBQ2gTPLkSTqGphKPm2nDJs5HXJHidEGEuKCKv4HvK3i"
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
