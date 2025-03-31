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
    "2XTU1zCtroZhdGPPzZzDP1fpykhcvHhAEG8gix9vWP9oVmLS3t2ZTecgnojSpfivvntp6iey8x7R532NDtQRu6wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PNeQX8jTDy2ysFvGZ3bGfxrseoqNEtbxQmcGh59cEiEJ47U9Arshw3ck7mAkkUWgGCZ4wGqYKtbPCbi52cFPyn8",
  "key1": "4oEuAjKZw4Gpshv1UE76LnnhPBn86DAZe7g4NW3ctfJSJWqR3GJTPV5zAJ8TwGwVRXuquQ5CTdTKhfXkktSvYCf2",
  "key2": "J71GiRbaXWEqxC2A5K7o5GtYWSs5bSKXzw98FftAUfVNTrbCXSKGxZrfq1yBYT8y1tKinbF5zhvkUt74m9kUENy",
  "key3": "UufX1sNCoFTPtrDL4j7EZSQSFUXrniMEppWdCSKkNump7NGxxXTKVGUkH4Qh4CSgAr6HBhStues2yaZ7FumUaFC",
  "key4": "5g4WHjRUhcA7X53xdy3kJBwojAMdN1zzctfEwB9XRVHPkGtCxVzmgsfStJiSWHcnSEBxxFWrFMcVKCQTcoStGn6U",
  "key5": "3WYSPwGN1WtmAX5bZ3KadXWeDcRf5TZQN1UciwSLZhAoraU26nBKrhzb1eEQym5vuUcBKnshREzLnfmVDJVDLxq4",
  "key6": "45vczDJq2UqRU5HXrRhWrgd481s2uRWBCT6g3DqNcT1bLSt21RKAbwkdwzvw7RDEVSLACiJiHpRqUpQyZbwy4ur3",
  "key7": "1D5itCcMi7dRrw62h9th8Em5Fif7jXLtXe24bmq4vAn8wY5jmTQJjuoWk8Lz1FqQ2hZMmeosLMDAeaGGcoZRad5",
  "key8": "3ys2g9HQJdyTnnvosmd5p8P8qo3mCBnZtcXcbXDj6UPDgfdC1C1EW2Y5mz8NjwTrc8eg8m2PLhAkTiFR4EbXd9dS",
  "key9": "2StAba1W3GdKsFT92WhK6AmYYzgrF7eSNuxWp2MsfDwGE6nzMfWyi1tmyAHZuh8sim8D834AsakYaKRGchMVGoCB",
  "key10": "pjJgVoaX4R9AB1yCRWE8CX2yYjCrgG2P9uxpgY8xNq2mPjMn3U9uS5yRfu1stMv2vuq6nbUTw5Mq2q8cKX7Wcpp",
  "key11": "2R72cAVQiBuL39PhVzbGn1jef3WwZrvMo8gu6jh86zwZ1s6kMdnqM5GKdCzGUbCPoETngxSpQ99cHMztLFM3xqZQ",
  "key12": "ZEgykaCATWosXN5e2ABzwW3GQnqEjTwVJGg7vYzgKc8oXMdJGzT7Hapv69jxR3aEnVzqzqYuAREyrL21X82mfqy",
  "key13": "2mv7d1aV7AA1KKEvhEUg8yJRbGGJMxCjGndcZyzTKGeUd5Zw3WatqcuWMGRSTcAgw498ognfjcN1u9XigRMm2NN4",
  "key14": "5Dp7yduRED8Qs9V5HPErVTPJavQx3z92GHcxT9MPUezjFZjU2Sc5AUAhUTEw6kU4BdEgAdiRZiCarvaFmHnEmjsg",
  "key15": "4LrEVMNajmansMdZR1Be143UaHFVKdKMSnrNyJTrGvUjohZMrQ2yGobNKwzG4uRLmdxz1EfhY81414adBExmrb4W",
  "key16": "5m5PTUCjrbWAQmFJSjpqzziZ8GzfnvtCHF3H5PcVUmL5Rk5e3pkWWYriPX8gCqx2hV6VE9UnvnZekyCgt5Vu9BVe",
  "key17": "2Xa1P6JM1BqCjaaUiBdi2ikhAJZNjuajzxdXJZQo2fypxZ4UqRTXJMtDndY4CsNRfBWifJkjN92L8YawjS5wGUJF",
  "key18": "4eBWFmjNfK71qmmhh53zqpzJYDkLLYTzZa2kHyykcuE2V23gEUrHQsHLUMRRaQMLcDeYkTsG4r2Uja6ZcVsMr3FH",
  "key19": "nf1UvAiVaPTbzTzPYg69yvtRwNHbPNSr9Lm2oCu4kGrRkaVHadpvqJQoEUDtBJ8s2Hm46TuUfGkZf1Z6spc6h48",
  "key20": "2xDxcSkJM82WSgHb5SuYm7693CS24zwmiyxBVcFhnoG1aUS3LZwENkHKd2w1Qf3UqWZYvssntvaAsX876epQ34Wj",
  "key21": "4tbNN332iR3BoiZxLqvJSoykkvNMjnya1nBF1ygkpRAmAjULanp5s24EuFZkeVFxkaHd7mj2QjViEPUfcrGoEGY2",
  "key22": "5hdGnyrFQjJ1xhxUHEfENA1bmXGJzpDxqpeJALwHiN71ryu8makoHcd2qno9uWWn6KUHSHcvfSYYUsxFAwGSWk8v",
  "key23": "5mkSf9hZZGKf9wppkJnzgDjXvimNMauiNR2SHQuGVx8jZR6T3Qam6ER3m7hpg25zL4STeADxyG1Kax3PMzktThoi",
  "key24": "1VGJ95xzeDsL7neAD3HGM8xAVXJcUkGFs6QFkYsmUqVTPfWz5miwi7mZHN4vCZFNWCyDJsfBshUt1DGC5tHieA6",
  "key25": "4Ggvk3DbbRqAV7WBbJutswXkNVEV5fSczjBUT8jMd53Z3rQCTU9grc3J3csTx9czjUCfjCPqCqWM8duxpQkHejq3",
  "key26": "4W8CCos29a5jTBnqiL9ebwk2DUT6Qd79Qaxxj2kZ8citanXSH3tbzgWkHssSR9Phsc5gWwJkLuF7iCGhHfe7qweE",
  "key27": "37kjFGH8FKDhFGBTSLq8fCLiFDbFDGxUUVRHpdN2kTQESMKnhUJjxF2qKmiPUz3hiLvMvFDQGVT6tSKU5q55k6R1",
  "key28": "4ur1tQREtri8q5nvoG1cj7P78ZPKSpcfMWDsu2feWgFcq1THbStX1QvAStLKMooHNYhT5PSe7Xve1cX7Q9p4n2Ex",
  "key29": "2J3ThCSztjYpj8PMvWCKGfkvCEQJZzSwM2hA7azTs6qsrBzwkb8A3y6HxiKZGKwWQJEkNj1FupNTsdEmpHykEBwz",
  "key30": "HVV5eKX9Y9WfWWis2c1wLWaBcy42hNHFwSqg4KsYueXpTiQEKL3BJsHLTcPEbZmvDV4kPuAbRh3q4GLfeP6g3dE",
  "key31": "4ZhghC5nTa3UmFKKUZLofV7SahyUNFW22ukJWcvfVzjmuVZBoYDttM5SmAiPsVmDNjLPgNVKcUeN9h8JL8WGRAmv",
  "key32": "LcyzjPAoHJxzRHgAirS4tbeM6F7qKWT2V12pYqULP5Rszwhuf2sD8LQiRxpJdsYNgZ8aevKcgBnhXcX1Juq3NVR",
  "key33": "wFdgu6TX41RZhQneSmF84JNWffZfmM1x4r4B67f4mMEAya1B8LZDmRmD7etZ9CmsEowYpobLL56MZYEc3zVYtRm",
  "key34": "r57BcMxwb9mRdHJGjK82s3TH2fzdV3aANyHohpHTCaAWxNNzo6Vz6QH11RrD6xuUbyFN4V2dZ8UCDqrkArTXqtu",
  "key35": "3UAdLzVa8FpDYefdXEAoSQ2R68njjE1Dp1yHKMLPNQMvjiJRv2f6v5VhEyF1QB9QwNU5iS4jmxDHCHwmVNMEuL2A",
  "key36": "fssvve9yfCJMDJPRvwtxuyw1a2ard4ojKmopNYRU1M4CRgEVjiykzTR1EH3Lnz7ENnK5jFS5bNW5bRNgfjrYxDc",
  "key37": "4TUts8ZNyA9W6yWYr7BFGvoCACMxpUHuhkayDDh2n7ukDBpBTDvwRUxftZ4sCi6bp2qwjH7Pz7BW1JFL6HwSe9YK",
  "key38": "4TG9fJg5ygHKwjPYbeHDWSq8Ffy79Wz1wnoWoUSrokKPxPqDcU7PDkVnuyUuK5o27mUBADa15PGnJiMBkJoqunmQ",
  "key39": "5zVdkLwG4dhjBxySykggyABXtffrPp6vUtyJUPQf23PZHz3mAVqAerUeRs6sAEVgNBsdXDH7nq5uL2QwYTu9FBa7",
  "key40": "33jbZjCjt6R38CuCi5JA6b2V9cHy22j1jQbr3sbQLE5s1ZKxZmiVobdK82amokzVi2pPmq8D5qwuUziEfa5zBHbR",
  "key41": "UEv92ujDmDyFjThPTNLKtn4wgVaAnhZ5GvReyuiXrJXMyM2jYghuNAMWMTQF6oKLhd5aHUz8rKofAEeck4sDV7s",
  "key42": "yFvoSGgpsSYfsHtd4vueMiUThF6YfnPwdSQ4DbSFweD8E8n1xjNrB2szM3PcWF881iXHpmtHbNu5Fgdt61DGWq3",
  "key43": "2kajNU5SUJiw8niuPDURgGjahmNdX2GEbR6xrAzgW4oXsT9UosL2gRJa6BvQmHg3mbDpmTo2Nn7B6wXs94bUrWyS",
  "key44": "4YvbKLR6FxGJLDyr3VK8JgHF9go84x29x4L6QDU7LVoNUFtX5RbogKXuBDFumHcjS9UMZejos6hKR86PP4mFx78V",
  "key45": "4LLAPTuZqKLNn7gaR7HCtfTGy2q3Zvbb2z8eUB6GDktAoQW29CUc5U1UAEqkJZVgDBdq8RN86dyVFxG7anm8anpX"
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
