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
    "61LF9QdnhUsQAqdWWPkgeKnjQNUXjEVzdwJ4vh6zbsrvuf6ginead1L7XDeNxz2LwoiRoHpBTTnhkouafvNXA8wF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mCoajTYW7MCujHFCY56fHUFCV9RPZhAKtCL7miCfpPUPuJG4PZiSJ8RfZsyg8anYSzDd3HbYs78qfVmbWJCnR3v",
  "key1": "53Q43Vzc1Vx2SZigS3sJ8cW2hV4VcL2NStYjUocwQjv1esqJPqvemL5G9UjuDVC3aZqWZYvjaJrjeoie2SG1aajE",
  "key2": "3WHqKGMWTJBAt1HDRYRfeQ1RyPfsJe4GKraLWo319CD5qbgc6UCJaH9m5jXmZxsq9Ra4mw5g9MYujEwt3KNXcAok",
  "key3": "5G5dbSJx1rYLAAHc7gFKU8SXF43wZRrGVAF9nYf35vZaAT4fzKJpYKd9wGC2UmEu5WR7jm1Y3WWj3Mx9QAMqgLnT",
  "key4": "56kQdkHHe1xAuYY17q3gqHRXezNDUcWV4yKZnHhuuvHPT7AGtqXvWq5ybzk4VsN3xd9ahA7c7gYdXRiZk853u6K8",
  "key5": "34Bpj9LCC7z9x3tooNsNv2suo1oCVm5pHCd4bBByX7pD813NzGZhCTHftNvZu6B9BMZmbd6TqUadDsv759wcyyBZ",
  "key6": "51nkZboxA1GESYwKiiuC1Bww6FJ2iqaevEDAqmZo8nShMjHxJKEvE46GtrCjSPnfiKZitKfoiR7B725BULyhsacz",
  "key7": "4acZa5mtvS4U31XG86G67X3LGkDPzRMDJTMDk4dT1Y2C52eZrEH4ctsBWqa9FTsECgvRKjo2UMUoLHVdXy1Rxz71",
  "key8": "4xRyXX92bTKRbjEs342ovvjrFj87ev46DPLnTrzm1jtgvo6V5gq7ZPnxBBMBdbuvBbBGsmj4Y2jcADj4rwHDkmPX",
  "key9": "2PiGECML4aK1UBVA1d3tnc3Jswqs1BJ7BAfRGrn6LrokUPJtYq4yshKoWY2fQgV1M3tHVzAdVhYUfWPpr8JpCosB",
  "key10": "2ead24VDwgFoxCxyebKB425NLcsF4swPmZ4pW4EmCBNBEBwgHqmKkg1XdJhNnunUmLeH4KgEzK4zbJ8oi4GXszf6",
  "key11": "HUDFpEeXrQLYZTzP23QidhrdQtzKDpnmqde7yBH7K4XPGHdtvDMzvYLubiZmZn3BFjA8svr6bWXyoxrtNQtrzav",
  "key12": "45dTYNkm72PeQMWQKPPrVWQTi2q97bxt51XUrdEfwewZq4Znmc69ev93nF9BMosM2EZrB5UCxgbDGn9smC13Ks8x",
  "key13": "5uJwMrGqimXVf3QvXUAJczRMUvSLB92wLyw1eJyTQeSyi4sKtEJbTjphwV6a8hyaX8dQkXm5t6DAfnbtLDE3UvRn",
  "key14": "3osSNNhtw8qvmRCjuQpQgT2ZBLhsUFs8z4dPdGwJg2m3GyAccwbEXx4dLtNHkuTcsoJeqz8VL9nmGo7SS7GTPUJT",
  "key15": "5Rd2MPwbZVjFGWwsFxCnZZXZrgYQ3ThUiE27BCiQdMD4ikUquuYz6ddcsU4EPV81phbnZCMqFg4ybf6PWDLabYR6",
  "key16": "4aZmmT9a68a2C7NYFZPUmLb6TsnPB5dkd7mk7QyuZeS9TMdpgVeUhVfZjQT22apRRHWb5qN5USERhUR749T8DUBr",
  "key17": "4drcsztmLYThevLbN9Z8ZguBZxjVFyr11T1LPXyNMrYj25qwFgLXrBKC2JXAhqhgzoyrGmwc9CZBuyAzT7NzQeR8",
  "key18": "G8XbQ2i6xfyZwqoT14DaqaQFT2ak3RKAQmCuEH3zgmyUkRA5wqDj5NEER3jEFMRuhGLA7ih97dDDeLAkX54D5U5",
  "key19": "21rLb8QR2JAzr3Z7pM7FYZFCfT2Aa9ajtSqmRN165pkhQgG8e1BRX3Uua9Qc5xTquordjFK7Xv4hWY8HJQUFsZW3",
  "key20": "3zWsVcgB131DtSscyKRX2CX5GaRcTjxzS2nvtk3X6U98mtgZGbiNY9KXv5maB19Jr9a7tkFQF88RLcmWycR7q5jz",
  "key21": "4qFx62c7qd7TjGF3mNGzqcc8XVhS3HZkFJCgK9osjB6MAxtv21jMZRnxm4R826yJUviaD7qg6xM9o6tqgvercsmB",
  "key22": "3pd5p2v2jYgNssaZ7vUW6oNvCnvTvpZ5j248HUU5zxug7LkHnnPwJAs5HxqdEABWfsnXsVBRTMG62YrfRBtbziqB",
  "key23": "3RHrbGbaTAhvSZTu5cY97G8atanYP66QTJvFUEgc9ZhRcnZfNmm6ZD3CdnrKiGrym7npQWvu8Ycs9ywqd6BpXbuY",
  "key24": "5RpvCQiGsSCHu5umFBkdbF1zsgUwJev54TsWe4xiUxvjb7V97NZMG5BMHshWMAgZWV48NV1ZYqGJPNjCibzHQGyG",
  "key25": "2Tm55zABf18Q7LqJWqLX76RjTG49pX4kHcVv6vbTFLbDAu33hvEY8ivMG4jLC8Fj8ArzdZ3SYaw4nixLJ5aQz7pK"
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
