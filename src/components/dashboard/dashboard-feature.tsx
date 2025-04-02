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
    "2yDRnjW3q4iGYyxxFMA9eNitb6wyAD7tqveW5QVZxQEBiKFrSqr8JwCjEHi4u2CG5WFQP9Kz2HMBwTMNuPke8Cgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mk9mtRMwDVaVrcTr58ssg8tQUdKHyqBcww7ddkehSbuhEmfGMemVQ3foSwrkQ54ojP5pxZFDa8V4Uh4pWT9uobK",
  "key1": "3AoXDLqcmu3MmVjwY1vUqogaZzfFMfu5MgAfdCuPoAHk3dAavmqXBXDupSiDWQCQYBq9gjYzXXcVHz6wD7V3wC8A",
  "key2": "BkTWQS716Zq9giczAFTcRUFTBvDErnn7jmycPqmVKeYd1irhCqu3XTPMkeUBZQLJ2eqBnqdj7kycr4Aepkbzcmr",
  "key3": "3UyBJKPPJfwuVU2wvUF8jREy2gnmNkqpAcCPq9BNUsPZc3o6zDrE7NcwLieMacWvUxamkguvhJ2HP3HZfv6FosNC",
  "key4": "3heiJomPtPWR7qrg2g12Ws5HtR39V8U9pa2w4B7dqP5CZhbMSYxkPN5tpVAB8PuqLjfWTKDm1aLJW7nT444KYAMf",
  "key5": "2NKMuv97dusV33WTFQWZewS9JecVZPU7uSY4UCYzGr8JzJZ1sMCdAEtRjPD9p4rcRkV2QakjrfJA44WHELGZCpNy",
  "key6": "47rbxuXhzABkV9XV4fxaynZkF1tGzEeZLHmkfsQRZxDDm9vCrA3Pixg2ZZk2nRr6v1SUxSATSSchshfDXwszSBYZ",
  "key7": "4qr1exgcdZU7dbfh8HtncEzmPVsciXGLahoTqUm1vSWr62GR9FheWNjB3E3YQWUwLVWtZ5GvpqRgkgcDtfjvJHq5",
  "key8": "2baPegqXXonZDKUvNAthJgLbSJQ67jAZS6H6EQRn1UpV51oFS1vjJz23rAFHtPUBvA6HJoEMrhqTCvPwY7z87nTa",
  "key9": "5z6icLZo3raCnt6i9tUJ2nhjDvFhLRKBth19TjhymyLmUHWLjaZtnBG9gQeuWMhFx6wcMeKWkscyx2ZBKx3S4Zrb",
  "key10": "3pfLS8s9ghiC89BYPb7WA2jz6m27hW54i9KjWeyhH7aGJEwLSsgAibvJLTzrChrWoA2u4D5vJJo96aLbC4amzHcT",
  "key11": "5aeE3mm22mqnpxyTsrz1Dqb77c6AuBt4UdBEXTfSdgXoxEaRhLVuCDeQPpP51QifCYUGQTzZwrjtzK87ZcrynWP7",
  "key12": "Vgigk19YdKBoCZWkHfowfJSWXaYGp1VygNTqnc1FNftPKNbZbHdxmhnLUC31bQ7BP8gW2rdJBpuRXL6CEemHPJX",
  "key13": "2fmtjjMGbz3Px4kuW2vskTPpNPm4eN4FwKnNvoLYU2KwW1KBd4kDfwzxZ4figfPD8CXs5DRperaejeB9rGsf4pGf",
  "key14": "3EHznpWt3Pu3jAi1549uoXfWCV4VUzQeEkgSYyuXMLmPeVuSiMcfZkVfgmu1PdpzpqyMdf1fkxRrVh5tFyqmaGEb",
  "key15": "35NzaVpgHZsS2fPwVyFWajmM4nVL8LBMY8QidJRobV5cB7gY6ufXe3PTT3D3WB8K4R3AYJNDm9wZ9wDezpiw2C37",
  "key16": "38Cs8sZgNQQ5gkRj9vY9sKZz4wx2ZRZYRBZMdXzeDHo9kfWi5YKtJCkf1foUML4iigyV2MhJNciJvRQgWVtTZv9x",
  "key17": "57UqCWg7pc9vDDbGx3zXG6htCZADHPXQ3a7Y3C98FW2PHzRbX2DVvpLZ3KE3YB38LTVBY44xyyPYpTLAUkBcb7h7",
  "key18": "4KmwHnDrq2A3mUgx2f1XEgePexRiFwW1jiyUECZnjhTxN2nGb3YsKicWmQBPVYkM8J6RqM2qVZr9GYrihzUYjjnh",
  "key19": "3QGFvccyonpXwf2GueCiSmUrGmygnzwSdG4XzRLuJkxFDUxqYzFvhgD26shoj3pYGu7EuH2DeMMGQJ4ZDANAsFvh",
  "key20": "rRSmAnyHKpkCEoNZ5bkGeBHtQmcsJMAhNa8vzQBMbdHMmmEc513efMCZB86LA2kRVvhij37jfn4aqyE33F4PTfj",
  "key21": "4i8Udp5K6X2Cq6XCYng3v6ErnocgFC9yZnZEtCBjxN6dE3WorUi8CYPQs9fPS1hv6ZSZYx3ssRcfYKUsQX8HB4jV",
  "key22": "5GcQx5eBn7TWpNcdWK3x5H6xtoupy6mjLJqg35qESRQz5QcPPxaaB8WJVk3JLGnz3PT3DMdD611XGotZ5t1XHz3Q",
  "key23": "5gHrVk3DtQxxKYXq41ugMe5A6FGajz3R2vm16bxeo8pzbTpbvdRGfmsuDRKHtY3SnTEzHgTSwr41LKfausqic7Um",
  "key24": "2kVc3B6cwMNg1ryfWyyqDjafhsHVTJdd21RbZvSf369vSWBeK2zH1FcwkGJMVJi7NAkbtaBaDycMDBvgDrW3FgWC",
  "key25": "2RqF6F4pGpFusKC7fe12h1i6s4ReyRtB6oasSBknL1nL1UnX3adCidVpBU1AjRafDaBWAQDxG5BMKPHKm7V3B154",
  "key26": "3v6BAF3SFybhjLxeXS4GX4MvUYDhQkDBzFNXvcEU589k7dHnrCpxyBWaDx54Rx5QX73QrqzTZSdHWGoUu6eRWLDz",
  "key27": "2MTUMYcaErB6LNWntAXQ62TobsTZZ8swP46783frNYM9A5L4i3L3h5yD2UUmnjkXsbuVZS5QxW6d8GnDNGHTEoyP",
  "key28": "67TnkXrz5H5JjTgcGiVdt7YkosNMYZKgNmWdEuNNwmkD6VospmEyLu4hVZG2um2sst2hsVaFVQKRQRuqQSUDVXhL",
  "key29": "RHGE3tnBSWzcejuq799L8Xqk6NV2q4S3biSUSovKtgEQHukVj466Wo2hiVmhqVpKKj6jkRuhbctp5A3MF5747kp",
  "key30": "3AG3bRXPr1pS15uSCWagZsTBFFx7p84kDn8y8wp6xoW8JNQaUmzTTfMuWcMyShpS8HVcx8FJmyQTugJL2xvqE93H",
  "key31": "35ssn82QrTdtsFd7YFzfcaZCKjeAZQHkZUkWzpafH43cck9UetLejQCfKxhpYLv2Yct3gm8N9Qp2FZ7MCHb1Jhh5",
  "key32": "34vuCxCftUsahHfTA4ctVDGRb33yCiHJuydHSF4S5LjMUkQcDw5GoBhLrprqHnJeGWi25htpKvWNCR3mPfThgbgp",
  "key33": "5joivsMRPL5MG9rMFyhJp2ix7i6fS6YfVPKVLUniPFqBJnBf13FCj7GBTmFYsXWGGKhDogJZuuAZNRkanoU848oE",
  "key34": "QhA5i7sucGcGzy8tBPHK1nZT7cDvuHzmPaVYKzVq5VRVFjyLdjyRHQZgCEqqQpdM54Ag6Q9bEbKwhUuzc2TTHgs",
  "key35": "F4PSQTvhmP212a4LDQ1hfkZwpqE7NEwmyrC2mkcB3nkiMPW6ZhZDcuMnFqHZiPxhcG3WnyAWazGLpFjLXw3Hcr4",
  "key36": "5NiytnXemrKm6ixTPzafnJQArxMJ17oicQXVzrkWbF2mXcXgVdeSVWSwKqvJV9udqamxoEtAEhYvjAqLg8Qw1xJy",
  "key37": "D3Qs9ZrxUaP6UyuSdbfD6fR2EWv5F8drS9wUECZvZry4rsmdXUL219de1tsxE16Ybf6pMhSviEMxQWcgGu7BGC4",
  "key38": "2KztNt67rNtiKiRnpoSnoQZDNoYjqG6fXHF5u7JWNVWKwrYHZrQrFKvRFHQNAPgMxFzdbEFDbqCFPmsxdN2zfPJJ",
  "key39": "42gD5xRygr2ofPq2RfYMzDyaFhaqQVMm6sjhMHf3KZDQjamvWrCXywpEQWwfdLr2vEXKFw9GJCaswFTGzDzbxEks",
  "key40": "2f71FbrusiDvWGPskmgGTdKjj26pBq9gt43LquVpiScx3eSKdgavo7Biwa1Y1SZQ5HZF3Hz6xMGaJWUSnJyEFzWW",
  "key41": "mVYzi3igJJaQpQzJHDGWp4hKqiY6SoF2zS32mpshNEb2BgibhQRczKU46JLjvdDc1teP6au8Wnn37GmgQfVozTE",
  "key42": "2YMbuhnAFMdp6GztxpbU3dVGw6sg16YoDvUMvCoKCNe8DQjXgHHTT9W3unxHEKBb83ocaeaZzXpRKkZ2gLtxoL3N",
  "key43": "3ydx65sEqGRb9LTNsacYuvVeUai37qVECLwiW7WvkHcAkBoNYTemzqKwdcjCnjATGn3C9q24hHNGoKoMyfSsYqq2",
  "key44": "2C137UQDNJ6n3Nc65hJfaRFb9xwRLDtsYa9mUWct9fdrmtcSmoNcyK2MdviXnQTFNVQMUPjxfGqJtMT624F3JetZ",
  "key45": "63c94UrnjkysnQ1Tuy7d2YnkoNA24tMvJ6gKovAtkCpFqnpTeMYK5Ha6TAj3kLpSXcwVDGaG42Dt2iP78DXbYwo",
  "key46": "49Bng6iVMFGCzF57mPdHt4VLUR4ZZqTignxSYQH9ZBtPzBQieyp5hryuZPNVpsgyoK7J931JTvtx7xF6unQ8tvKC"
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
