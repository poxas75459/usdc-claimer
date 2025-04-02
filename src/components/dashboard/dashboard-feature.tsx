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
    "5dB17VJ4M4Ejh3yDdo7UJqVAwuhrrpPHbyjPSURmR95qmC5ectKv7N9HhKDYuHaCM7uiBhf8JrY4j5bR6ncxY6QB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u2NR8mtFGWr1M7if6K6gkXZTorJ2RRn9V72J1RuKLPsBDVFieT1Ytcz5Bs2vk7ZoSFVD4TK2xn7mGTQGWge8bLN",
  "key1": "393sCAKWJtYSbY6wWDVytZyWzUqRHSbGKNpFPxcQJsRX4NjqEhh2jByRSarUiVbSZLie9keU6aZeHPnLSPe4Rjw8",
  "key2": "4MQeEoqM5EjH2gQoxKLAHyZ1jT27Rq5M6NtwAerE7qFUaLUY9GRn3wMHXV1uJoxyQBfZRrnLRw6EVMsjQcxsnkr8",
  "key3": "3zUbEbLqiErXnEf5L9rn9ovrJEDmNnjEMwYXCPKqthN4AYAt92bn98VMVXUC9wG8xeW2vGN9LYTdYeqvy4YpHPzs",
  "key4": "5djM4Xc7C6GFAyL79uFb9uPqeLoxxtCUCx352LNdKac7GCybd4tDpmyd6cbRLSV5xiy5XA46Hp8rnCJKCwPMVg7v",
  "key5": "2kYE9pebU1XPg9LVyy693sHWPtiuCfST67AKzoqm6ZPzaYxai1uHKQxEDb6p9ZUELr19urxTzpefDfJetuhD8xWs",
  "key6": "5PTgT8puWce8qV61c5g2Tr2sLRbVE28v8QiN2x4UWpe32BkMPj2f7tysVR9pMdqUBPbYSLhSsCMT8VyEweYXjGAn",
  "key7": "3yXXmQaE6Xt7VVqsACh7njCpuJVXFXEqZ3TETCPutWg4pCycctXUDH17fXnGEHcun3oV2vTNQoqYffignnrLqcin",
  "key8": "j31o8B5jzfGwWVgkMUdYX6dxT5CZdXbyNEh5aaoMW7kLqKTdF6FyYSrrB5LdDtMx6Fe4XyL5DRj3MA4Ag8BhYxf",
  "key9": "46RuywJtM8wvhMS1Yhk9bacp3wJeBrDPHMf2Li8y99F5U4SpH8mc7HNGmHDukxkfCdYN2sNaxTMfEoJ7AtXXAtPD",
  "key10": "2Hp3eN4zfV7K7i96NB5pJN7hAoFkdjKeHkWaU4Z1UxUqVUGN9eHhQBKW7SHY93Z3BpwHeTeoNWm2ue65cEo6247m",
  "key11": "57oV3teUuCJVfthpyVAPiMFgYyFpueHFUuyk44gzVhNSq2KZuD5agREjFKwSg6GT1c4zysutqi1SVhzgcvbuZanY",
  "key12": "3UkCAS43PLUrmqrNuD5JKJMwrxCS4vd5vieJyqQHUrxAuUbrrBWeibXfa4wJXJc41DXXi1fxUzzwJNR4YSk8SVwB",
  "key13": "29TQ5GRaFNN7MYYAvPyVJ7mtH46vz8Dwc6kc7vCLGoJy5i7iHwwqF1inqdZMSSDukdwY4qZxko7WUDcwrwmT9pbw",
  "key14": "2TkXNqNdwYpnLTLL2NebLeNhdZNcJM5Jor9CobuAJdn1PvtNJGFXoBRuWEnawm65bEV9C8cJVucXKtAWyqsn1yYG",
  "key15": "27NQrVWDaQkBCKtgP3sPnrPzYe26f6xSY2vQtPWFjspH8qk6bKDCk1ZkzMvkQ6ZuQiEPCaTX8Wg31WMrozAEP67e",
  "key16": "5DtZ4rxoapbcbz49Ey5o7tVSihQJdYKsKHvr2TRQy5NmLz2zHQAgcEfPgrFXGHcBUZZprj72prpaXHNXWe2C1a8q",
  "key17": "5c8pv4HCygiaUVtAtwSZUTnzecTWvhKh1FGh9ag3RgSdGTiQP6uKfa7ZxDezsJDLfe1vPBSXHkQTjmBLB13JTAhJ",
  "key18": "5gMT3QWsmPAsVFBsUFZM7qEnutZKEv4dAPgZXvVbygv77yBxxWKWixuo99NuoA22pAx23FnN6XzKGuG3FLhRfj6g",
  "key19": "2qd8WHAgY5osa97m3DzHMdUui6NRYvaE4g1YJhfp4o53TGtFbfiRL9yjSe5K3ZRXYjaag7ecR4fuqgKi8V2xiCfc",
  "key20": "5eQRnKCEYk41QVaWQXh2xqNCVh7kML3r2eLqfpKLAJMf4GtWJCZEAUFZcHN7YhNzGZHkua8wyvYiyQKRUWCKDqBQ",
  "key21": "2HkaGZ9fD99TjXTPB5e7EfAdX6ZLrcYeGfkxnN4aBtgVNdZvuvs36AWprAeyoHRLNxdoKmtaDm5CzZ4t1bW1HstA",
  "key22": "5Q7QogwUPgxncsigb7f5ZGbTSYayPZ7AH4XKkTTPCjLqfLarh7iMGsPwpYQ8gzGefXgxLtSjUX1BbRs8GS85PHns",
  "key23": "4dhJthTmppAou5jgwWmb8vaHhDQ5skXJ7UV57U3rSifhAJbDPU5Mf88DAuZrFHhooHm38H5DpjrDCVcw2AJ6oDyW",
  "key24": "3JjwWkqD5A2xJhh1mmVWivxBozx5TNkG39Bfg9edV57PL44z3wHVFzHZ1w1t7HiHKLd5ZY3558kKru1wS5EQSZ8W",
  "key25": "3G3mkGwLnkkrkF1oiXNz2bJ1Dc3qSRJoNqStX3dg2t7bmNau4dWnM75Ro9mjHspC2uWGargHN2zercoHykfHtYbG",
  "key26": "2AEbrtgnoaMKp2t6RmdfYXrmmLEcJBmDwgBeUT58zurYT7Wzerswja1285Zk534bsdMK1joYFuzckS3mRwLSyQdS",
  "key27": "gpCKZUf3kC21NuXYRYgjavWwYQrPczCttbhohKyBDFZCf38eTzpmCkDCym7z2QCxE1ANuty9TccjSshrHMuhRZx",
  "key28": "55AqZW52kHiznURwaC1C9y5tSn9jLQfGmX6PUdkvTqeG2VtGGLZgVmPKnkUeVBpg35qauL8ruHQMzcVnCP4vracQ",
  "key29": "4gvWr6Lurhjt7qv2tiEu9MND1ZRa59CgCmdn7A9FcKYB1G8p6qEBR6GQsZRNGTWngobT2gFvGFxcYyboBQCNDxyk",
  "key30": "4hgaNLpLSJLbqxbZqUREmp9csnPjvRztHA7Wk3RfaJvPYvkdbKgbNGEX6LwD7ej12FHqiNbjuZqN5aVWjp9pSWtT",
  "key31": "5N2hPswThrEC2KTdw4uNU69khhFJYpWENRjXV6r6yyD5u3i4geyGey8MMFLKJUcQ34J6dZrWhCoFGXAUrmPN4UiH"
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
