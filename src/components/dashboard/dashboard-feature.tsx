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
    "4Jf8CU5vN6yCKaJpchLHA8VsxmXQf3kyA2JBCqJBWR5ygfPGqjGTar2P61if7ssdaKcDcokb2rgGeXhZKZFaprA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NcF1bpLzdRWzYy8jab7nvQWPfJ7yEQHLkrN5BXe8qMyDcUY4BKcKk25VEwjGyWCoRuxaKUaTXfxRafLmyULnFnx",
  "key1": "e17JNEJdWHvVuNPTTmM9vztbN5ebs1J4w6sWwezXW3ktz3Z5DcJjrnDMtDN7rVuHXY9733KQZFzVRsBv3Tq6FTD",
  "key2": "64pP32azpHH8TX56qyYjinqmPYZSnPXeLcjnZwJWpYwe9f4S2Doh7G9auq1QMHkYM3aWV6n3sPDUE2cPFnMnQAub",
  "key3": "18AG37shwCioin6Lwm3bRry9812xQkcMLeQXe3PDbQTwtFWP8tbcti94ux8NEFWiUhMKCr3kKAr6UFMggS8V3Zp",
  "key4": "433iXRYHFT2C6hWWvAGic2SFJV8P3vLuvRkr666zVjT1FQnk1BXgZHvzMUmx8BgE7ak7dPgaGQABxp1WBrpoanN9",
  "key5": "2BVSUfFNw7Jt4a2JHVXC4j4fSkXAVyk5X5xZAhdAqDWoZAYqVKyTRXZWHzbPFGwj6PHJFpWE7F4ejovcFPdsyDPr",
  "key6": "CFEuwQ4bpMMjYXpkyhi91Fep1JNJRHPzybd5waify3fAAqEuY16J1ohE66c8iXq1iEAXq2cM2PekMLfNGCbkMCi",
  "key7": "3LcpUZpsNCb5dfmRJ6sQ91FuHvuKSiGhGeLAXs8kasaMWwqCCXmYAXGso85rUJevYpSmxZ1JYRViiXb3T6qUAZvd",
  "key8": "2fC37FMojdxgJgXNVSUbYeintcB7pqXt3sc4SyW3URcXDdWiMoWKk9QEg3djtU8N4fdsY4ZDHx9Au1npzdFnfPtu",
  "key9": "25YvKMPitotznUj1CHJj1gk9mEte2rGYevF2e3aS5XGnUzP6BmdCQK65P925TSMcm1aH3bb6AAH2U5mH5o5kqdFA",
  "key10": "33ezsZLdDMJ67f6DVdyfY4ySb453LY7SdUZjb6emmKKaFaiu6VMt3aYvrqE6aXASYxv9cwPq26guyWjLNEgjYbcv",
  "key11": "32uf5gSHowPM5Q5iYw3NjsMDVXMQMVdFt5R4trkjDYKnEVuEKVGPmPqZwBr1A6UNoCJUAjneSfe3Xr1vhRJaPzLR",
  "key12": "2P51kwqs3CCNtVjFfoHnH8DCFwiaZjBoujBSeKcNGGgTacghGZrhfCGoUa7CYpa9bsGrTruZN5nRx6xBjYMvbUsx",
  "key13": "2d91zJKhmD6adWbV1J1s1R7JacZpK8GqEzFPjxRPMfmoGpMtSRR4vqwDFnCrnLQVTvyN31AadLuwt8HKCjH11QSr",
  "key14": "4FP9FpvdBWf3guSEMqKG3Ay9314w8pDpcEohSu7f1B6LnrYDP8BxowQHAotEZc7gGyCZsGbbzre6NNaSgGGQcC3i",
  "key15": "53QNnNvU669m4kbbu72EU72qAQ3k9K4spopTWpmL1nfFPhAjHHTjbWbJV56n3ixs1sUjoe7RgtggMhczNZFHhXM7",
  "key16": "5QcnJCh9eobwui2ak2dpeZjQBgt6MoatvaGdA6Mse737naRmY17xMXAm6jdM4Z217nKazs14M5vZyKKF2BwzomYW",
  "key17": "2TFbUWgNfdkMrYxYyHtghRh71GG3YGYvk4Mcc91HAEYFw59iU4tB5gqaGHn7r9qjZAnHNPBaXn3UQ3UfdshEKkVk",
  "key18": "2oRy1wMJewxYKaKx9cjAYsrMHZCezoZeEomz9i7T4pDZ76HqcMW4pzpVj4W8E153KxqQdExztYwhoZGD3d39tYXf",
  "key19": "5HrTRTEuyhwdAoLgct9zWq5nVHN1cWGZk9FfbxHD1nndksT5vfqRdfs68WesRo1djy9DZtawXLsGa1WLpZocYxaG",
  "key20": "27adPQyWZCJXmSjQH1ZAY94GSfCTpWnegJtNuLSPqGmrP7b4dQwubQ7nz7KWbbHGuFpcx1xenkUL8PfagU2M7kKA",
  "key21": "4xkmNjgVLXik18DN9BGrRdRQ43PbSochTaGQicbnP8LqP6A2mnC6Xn4YUDAysMbmvXmdi63aXE9yvztEzgMrBKrq",
  "key22": "38FJaWXUSDfQQJtZnCWELXqG6m8MSrBaesfVYUZEhikyuRzZTUCe5zaqKM5kuhvQuTabAXhL8vjCgAWyUJVEmnTW",
  "key23": "3DXCjiQS7o566CrVozpZSStB1fToNoFoXxs2NfykKVyoVvG1R8Qx3QaG88NXoSx2ajtZL394FRmiDzGXRADwo2DR",
  "key24": "4eJX46V5ptTSkdKWu6xRSQvk3KkKTJdvYGW7i6FyQjyvFqJWj3ohGFvjetE1zWs3todSGTgv9SoPP7a5fqXchngv"
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
