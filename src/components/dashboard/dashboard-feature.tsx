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
    "62CV2EYSyuezYGULnLeK1FgqQtWVkk4X9bbihy1v4uhxWexABVzpdYvwmxsqWQJnuzBoVVp6oAQvJkLYQJPajDjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tGcSXvGg8tNqkf9vEKKQsETHG1ggYJAR1MEkFcKgVatqeUzSRFPDV5kNbU7w3FZMUGKnauDoij8U4wAeo8223L6",
  "key1": "51dpXniNxqQPzKpVK2jqwf7Ea9tTdoto9L1dRjrU4ZuDAoPbw2aALEE2k7ca4BaVpCtgfdECPFLoFjxXqegKKBoo",
  "key2": "4ZvLZHhb1AN6bqaCwZMiDgNnMZ5dzkjB8iGVEhbz6Fip75gomywEQNC5SPSdYpRKLLnVSYN5vuoRv8PeP9rEXfLH",
  "key3": "3pMhmDC2nds1HN3Vk84VfoyuhSrfQLUmXgZ59VNqcPRg47f4yaNYvGDv2vXCUMQpXmzJWMo64y8NQ2omfWKm1Nh7",
  "key4": "21S7GWMhYA1fw9NPQCekgYiUe8q83Xwc8rAfnnDHZxRMU4iiArJxtxnRGRfvTQZkLgjKKznTEas5E6HvhrDKUTfX",
  "key5": "4buutw3KFAzGaG24rW5sX7CowvZWrBru7qTcaWfm7gQJCfC2fjevxDmjsz7QhGwKVZjK2hNfRYyvGwgTnPC1DWRL",
  "key6": "2TdirTD29tETTsqjQSSW5mf6YJnJjV8P87Hm2jWvHWvA2UinhmeUxrc42Y2ArLRVCmCtgGLKbzaUMRydfwRuYgRo",
  "key7": "5enSKc68wtqVaFRneA6F92RVXu555rgY2cBB9wcfJH7VKDcFdVA9pQshJ8CKJtMwvrL5qQDfc6QdVFb8wQ3PnKep",
  "key8": "SFSZGv22ScheBtvGCHwTWwiAEmysdSwTun1qzqSWP7dJz45eWM49hKTdSrPygU88NrRrGbHe1FBBFcU5WbMWPXY",
  "key9": "4pa9mR9S8i1SkJR4ungJq7zrAhMt3wh7JSCNjeF8nZ2WGWqRFjPw76er24k5St4MxMrXS6endhdtSxyykbFKrEid",
  "key10": "9ybFE8K85kvyaWNZXT8m7cXRhNY9hAdpxUQFGtLz7ZU6WrZrqBzqMnQaZKRboytLrqhzw9MJhX12tJjJHSkLnLa",
  "key11": "5HxujcyJUZB69CfAN8JpvvAuPqh8p2kX863hj69yU5yFKr8vzNKv6auaKAw61c1Sy7LsDKJaJ6mZxbs4ZnCU4Uww",
  "key12": "61JxDfD95DCSkQxFHAEnbwPaNkxVSmmUjRPf1Cs1n4wQJcg5B8Zcv1nvsvpP7b5nKEsfGF1mVnxFwgtPzUgXNTju",
  "key13": "2amN5ho8wEXaLfpH14qZKcHyWpKUs5KAF3J7f4pDPzd3sCw9E6s5ryE7VzGTNGLa6NLt1KVtmCQHZXQt8L8FDrDa",
  "key14": "2GFFxmKYB9G36s5Ph3bGLJwU9iycCpKgTn5vYUjNfVmBH1n5wnisgvw4Dd5e55sqdmej3fihpgFHjfqr4KbdPYAh",
  "key15": "4MwEr38a4a2TFToqimvGA5fUS167pbVLfMamghRcPtvG6MREaH2QZpgxbdous83CHJRimzeMjuSGfNNTgT4nzFzx",
  "key16": "3vh7P6r5oq5kbtt7zowjEx1HGUvFUX4EHKFmk8K72kBtH2uZ3mZJ1DhDuZZ9CQVvAxuraMJ3qRwqpupH5LZbWVkx",
  "key17": "4z3Htm4xxoEb9ftZmo8P5jjKAAXjP2QiSc9Rw5JyQmfXWW4L7UEAHAs7J2K2MgcWo2c2NPjbvTTcMcuy3XeycQ9N",
  "key18": "4SzfNVxAcCqgt2UTJwHdgnbNqfh65bpGU6WUXp2P7q6gM5FSYUEweDSXWbbAzBSzBNtuZz1tz3x1Yi3dycXBigzH",
  "key19": "2FhU8CDCq5ahQ7vRL45JqFbjqXb99m1E7xgSoNoxpTg7pC4Ckhy4rng8AZh36R3s8DfNfhAEqxSXWnvBEZcCHv9U",
  "key20": "3CEqudyNF3a7PXhX4bjNaeVUFsQcex2fPcaMmGfUqnx2FeS4DJLjvLh5cw1rJUisWvWdAUxWQEtozV5L6kHYCtEh",
  "key21": "L2JK1KvTVSpDki1HcFRbPQtSqTHRDEnh3Jv19rhnpXeodVWwJqy1e1Rzz6EK2wpKGbmy7VVRifwCxz5jMzw6oRN",
  "key22": "3B6s3ToT6u3E6RYncd8uTXcJGYG44H1cai8s1tqNXxSxwjfsb9CYyDQta7yDfjdcBpPTtRENH7RFo1ynGqHrGzuR",
  "key23": "2rB491XmVZbDVupkc3YPRsPrJkVpkv6HiVduiScS1zd33YJtF3xHAaV7NqgEEdEjYcAkwCDRGTnE6WMsiHfyu7o8",
  "key24": "3g9RSshpmtsEn6j9GzVbdh5URQ9fLjtBJhPznVe2g25w5R2tyBfEcxagQKYcaxHr36kYH6fSXYB2sAG73Vsz1GpG",
  "key25": "1yFJmc77gRQMdDB24EVhz5VM7BuSeLcQKL7xpt8sFQKrA9jFNjznwAunggFuCkMvbytP5pcdg6hVNhPZhEyQB7K",
  "key26": "3CpAGje1oVssBjfumG6UxLY3piQDtLr11cRJWcm5r11cNgDpPYxGYaSddvHjdJ8eArht7TfnJmkeUd9FdAzDtQvg",
  "key27": "2Hv4imzWFxj9Si4nqN5nznXeyhB7X5Nm66cea9Rs1gnQx7eRPg1KMMvkiVkexzszsVuBZGp46dqVf2MXyWXW7SFr",
  "key28": "5XLkT13SgF53MWEfYzgKZNrfAPW4QAD1hiezSJoSYV6o8DeCGthjcphcw94s3GN8FJ2oEJ2JLbNRJiWEpAnqdMpk",
  "key29": "2Bq563Gywbp3gV1wJYtkqBF7WUJ1kqZoSZEvR3WgrmkiB5R89YvJwTKembXinteubYFoTfy1hJAgLPPjS99VM2Na",
  "key30": "5YVLpfosPrndjNn4jN7xgaMycVR6HuY4veW5f5oNdnPcCPZSuwnpyD39jtcFzCBViPLpKCKKuHDtVDjdRL3Jxcbt",
  "key31": "5xDQUhr4s8ji6qLqda6Y1erAUC6o4xU4FhKAmqiJmAYEffhhrEHAZSXjFx4JzQrJ9a7jxLtUmgX19U31acrJaBez",
  "key32": "3QaaRJRnZoFHG1nxw1NQ9b2k1GukbNG92xpH67Dhcr4UtBmj42fjn6oM4oxgEZ4RRjsWr99YoFxyyLrfxHSeShSh",
  "key33": "Rs9U7mhCup2Z1MPWTy1mVAQ3pSVis86bn34dkvnWNfBE9zbiZBE1MdrBqtcmVRJMVS8T5mm9usyNxBx9yMAaXSz",
  "key34": "2GKvgUSpQzK35jRmSTfKAkc1R99zkKVhnHnGQkF6cD2CQH123p1gG1JmGW3EivD1GJTd2G5nejTk71mubxr7NgMj",
  "key35": "3aWE1s8bnQxXgmimJwMwAwwxnNPguTqzqtucPUAP5ECWsMhGTzdtfJi2cip9Cn9UK95muNivhrsA2j4og6GifdaQ",
  "key36": "2JBboLuditMpT9k1Xvb7JiyXC7ZJ5S6hddUmRFBcK69xFMPVNrZdyMy83RfCYE6cWoR16tN9ZsvG3p541qZsnyq8"
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
