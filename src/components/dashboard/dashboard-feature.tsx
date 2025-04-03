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
    "sLRj9Kq4kMsV1dm4x2ngkV9p1EbJtBMmDJmrCGf5q4v3K954taixQtSUqw2uzRxARtgDWNmRa1dBM7AeR27nXQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kkEkhbTTgDuHMpJstD4HxDxhdTwMLSJr4yNsVBqqm4CiiBhkXLAJrWvTzxBrVCE6rxA5hmiwGKTc9gqrC3V9k26",
  "key1": "2ee2YbvXHKP6oTBpeqFWN6cjiYszkMcKNv3Mpe9uFMPuLRE5p2ZV94J5eYZphKjwSsX2kNwrnNK6hkZiL1u89Fnk",
  "key2": "3jPSA74qZppmR25pg7qSwM3bRbC516Hfr1o137t2GovFdjJ8ETjjhtw1jk86CJY6BmZQgvQBVeCAMcTxTdKiVWbu",
  "key3": "5Qe9QCfsQsbyj1JrM3MhqQ6Uqshkf7CydKc7LcUCBxMGp8hxW6Z5qjbNPrWR7cuQtYYvsGYK87L3Jt6Y9oZTEqvy",
  "key4": "5uugnnotBBxFNupjirW1nWg2x1VQfhypgGh5n5EyasHhEtRLXVXxUcijcrDxi5R3ZPSZAo6PEbcQatB9UhKoZQXK",
  "key5": "4cHxe2YtJ4hRY75NUBbiCDp87ztmzXQtGjRkuZspvx7pEi3w7jBBYWZNCP1EmZaoN4878vvosKDXfcMCBjvzwqxT",
  "key6": "27eEpruAzvpTqg1AoyQvxfmdhnvqdL6FcWFFocg9qqhWhbZmi543wecwFeMDoVU1Hd3R9y145ksPZPR8wJjH2Qf4",
  "key7": "5AvoXRo2bCWtM9z6D93yVjB4ewzGd1UckGrSUWvtXAq1EHXoFYX5kPCyk2eJzGD3EpYEK9w5tBUQSALj6XEvAkJb",
  "key8": "2hzawJKY1FWdvQjDY4oJq8wmZrG3AvRiDXZVMhsErywCaMs1Yio79Q8UyZSLMFT8nDrUvmynNb5U7YqkUrk5QiRP",
  "key9": "5PSEG3BKJVTsqPBDUhx3kt4z5wPNRXmkXbwZ7retKn1PSD5gcDzbMnZ4u2acLrQF9yVvqbH8SWQqM1zGgSfkSCcc",
  "key10": "5w9aZRQdRaXv4sXvJSatz3XKum77ig6KH1BBZc9KB6h1zoVNUKcUuEhdcafoMLKgUTqAjWM2CFiFQcRLejQJFxAU",
  "key11": "12AFM8oybAXFUN5KzXLREd5b6B7MSSX6oSkUdCGftVVRH7CVWMCaWgVSK5BmYeUoN2bmQZrEJkBb7miRiWwbNxxe",
  "key12": "5gMu613NFEdMG4xjeEmFbVzkn7EP8UMA6iCdyHxi1wbCmGSSLLpAYaw41QDAo8nJh4ngPQ4i6rG5LpWzVq5yKw8K",
  "key13": "3XCb5F6vaXh1phMyejKqaEUvs2xxoEdQATNsj6xsGYDH6jnCnb21osQxXQXWgc1X9zKwnWuTWuYFADTR1UQLzPn3",
  "key14": "27hVApQn2XYJ88KdQaLrebfdF9H32vUxG8t4qwS2d1iBb8mpitw5P8Kc1XiXwRF6R2wAvA9QuJopPkk2HJfC86aG",
  "key15": "FK7cuYaffStQwndNGjTYjFPBARnMwMd32CtfASNtTkuWihRyBkQoFh65vkir5UqajfQEDTdb4EzJAYNkmiPzS7N",
  "key16": "k59rSy6sdtf5ZWoxKYKN3YcQSxMHEWm2UnwPizkL89MEJ2cxNeiKuZ31eUt3X2SzrUQAvQa2hYWiLnHYo9hWWrg",
  "key17": "4aAgCe1GLUArk4gePppfzzjLzUsuk7Dn1REKyfAHLM8CSoZ5baAHL7JQPDofbLtM5A6THynerBcVWV42Tq13oCBZ",
  "key18": "W5A6ssLjKHjgnbn2Qv3LP5X9B5j2q5eRjTVdGz1agJY8nyKfYtrvnfvLzFhvHvorTXVmtQ1At8pcAZxqKKJT9qc",
  "key19": "gQQ17QkyVQaMFVUqtyBaVdbzED1DUXjF5MyMo83abfoHTDYNS15c6qs6JUd6VARYiLf4oxxwGfz4RAmxG8qXHD2",
  "key20": "44jaxq6gvTWKJHNwBLiDnzXzjLhb2p7vyQrQAqHDhKRFeQtWfoR4S5pMgo3SqtikxygjpPk93knaf6ZqAbxZk6BK",
  "key21": "49usbuAmVaYZWJtWMgSRd1js6G9U4WWmhdVGTVfJsX2yb62eBYtN1qMvLsERRtLVAVx9PfFrb1PfsTSGxiQGD5yM",
  "key22": "4aeVLo3hByz2nYECRJwNygaeUzobFuKBxXaHEhnDiegYkVW8oK89jWJQGf4Y5X8TvEvzL8ZuA6rEA7BvmQThPBgg",
  "key23": "rAwToAgwQCzdoS1KohNR39cGu6hb9sSD4cY5cqeDHvY6GPvxapCqNWzF9sXZDTCij87FALxaHdxU3j9bu3GgmSi",
  "key24": "3qZii4hu1rhaTYynemnL38u135Pn51mobqjPBEMGGcHNhqtjBegjhxPtnjAURvT3rB3Vx7gJdBgBA7aZTNMJju8j",
  "key25": "4rP5B4D9KUsaozuy65UGEqsr8qFbks2htAvPRwMXx3jxF6nQE7P89AudTmwC4yYR3QfAznCV81Sg8gjvQiCb1Nkp",
  "key26": "4En4TZmADfXwyXkDw25fYcZ6GzGTMeYRzCAtwRbwWv6mwYBYEkNdSkviULTm7ZerHx6NdariJWmEur79WvWiUc8z",
  "key27": "5ex4ZbTGgnRmeqjXxq8a7vgpBUDiHreMq3LB4Qfbfx31GTCGCbSNvFgC5uxxjAn7Uso28C3gPANf2V82RXkHHck6",
  "key28": "2GRpfKXZMeLYrv4hfUonymo2koeXnm3qwMzsz3SijWsdYL1D1rKqiuq7Fsry8yAUBAE6bKrmRBS7BqN1Y8QWdgKH",
  "key29": "5vFo97vV3hqwqVnXACZ8teZoMd1kbirgkShmu4euuCZVFQhg9RSchKdhVX22X9gjba9UNT7YQ4UumnK4ktZHJLCB",
  "key30": "3zg3iwe8Y29uJjeb6ka6xmEJXKggdtBE44FeDMiB5iPpej2R8LkLiq8hR5DjNvKZ5sPYgoFyhxpbt4zV1T283o1q",
  "key31": "4y9UoUWwGz3aaC1QZir5X5mP9UWdY3BKRgTL9ZCRjNpbV3s28zVs1Dpr8HNW1oBrRR1NeFPrQBCzEHPcGDuozXGf",
  "key32": "2Kkb2SFns4zx9HB27DKNoMSZVEwNxQUbMTVZcXnk7FMnSSkKuWQXXwPPwZfhK4JkVhn3ySa2ZJQCc8UJ4w9NRYNZ",
  "key33": "NRedWYsZRVV1KJAvV8ncjWMWUCxkJXumUGsK1NfsqRmu1RWktdcyZNJmkXJkz6DoMerchN7gWJ7nNQeC2XZrVZB",
  "key34": "3gNV6YTezMLYqCogxAW4b1hJnoZsT2bQxY8uBoQmJXFGqiVBVHd2SsJyLDk7MAiz8bw1kLoaB1ubdXRyiGSpKjaJ",
  "key35": "5bVpgKwtEEFuYB4wWejAVRwLfaos3x6eBEvnhDPWAw48j7QufZycbUZ3FpG8GVy2cpPT1B9VSkAGejK9NWRA7m5v",
  "key36": "5kR1mkzDBJWkadNotaJSBcaiKy6XAAfdiTfDTpbTt4wN9jM8EiGWFidN4bD5oVY9pfX2WsSPw1535FGwDHgh6su6",
  "key37": "2vSjoin4myCi5ux6GNYDGhWaMgnchXVgXe4BLYpnUwnHxKKbjucdQZWK5w6Ea82ZiBhnWgtPXLFsmJ7yFoQqwXP6",
  "key38": "2WYtmqPekVPQGCdG4pvPYCts6ZhAE6E5oG4iWwPMWHfkx64yhVPbQ1JWPYqs427X8ZcCU413nZwtoJ1j89fTmsJS",
  "key39": "3aT3n12dPEuFqCK1e1VZqeHa4vBuTHBS4cwvcG5qskYD9xisuKfY959j3r7K8dvxT2qJz7KNLGD4vwq1eE9vxeyv",
  "key40": "42snoeGEa1Tfambv5USbRL9boBocQtskSWjtmF642g8J6bX87qSLTKBedeqTEG5fj1mrkzGmPm2T5hbqPZK9Unkg",
  "key41": "2D7iLvy1TJ5Fh6kfVynS75TRN8BdWJsnSM1HRV51xrTEckFpKWma7zxbAR8gUExHET7rHDKVSTXZivycSrcJGuYJ",
  "key42": "4fYt294WSwPE5PV9Yjvqu5B7cd5vW15NYfo1Z9wo9fGfzTWWnMnVDMWshNgnkJ9fQVwxsQH11X6iJQgxJGcypKkf",
  "key43": "4JDD6FxY9ShMeM6rrYkYSo8pQBg5as6EnBdU5LGReg6jW1Jmc93Pt3EssYGBGMfm1tNRfqQoMN9vXbvkjBGhMHZi",
  "key44": "4qJxV6Jj1FSCiaMaG94EXnLxZRy98V4NSksvdXw98LwHwGheQKw5g87rgiS1MwLFtKeEyX2jZQMm4G1nzcvkrvdh",
  "key45": "4nAosime9mRENd3qs3uZT8BuyD1PgXNzMo1W5ZGzPGQaBtVLuwaQzAfhdGcWdyuzBEA99qBb31QFhYwcsYutRtgY",
  "key46": "49TozRa7hfvrhUBrZGfdibGV44fxtJwWWtGTxpCZfSWpfjZd9CmtXaGj9CPxmSrXiBATvWQnzWLbnACtCniBQvcQ",
  "key47": "4WUje8gqC2AFbiHpBBKnviJXWj7cppo6c8ja7t11M3Ffyr9DyP5xszRXHyjL9AhoCVk9iB7ZFCcA1WAQkigAe2i4",
  "key48": "2GCSTEW7QdN3PER9vrPmhg6rE4Fn4EVokVBwP8JhDuC1jQdqobVJZz9BPGoyM9wM4Gmzvb1vgABHrrKBYqU6vus9"
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
