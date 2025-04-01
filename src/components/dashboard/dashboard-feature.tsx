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
    "2rSx5sdA6D18GxYZC87S8qW5Njwmf9uMtJDMiazxETkt7PQcSjSTtHog1w8oQxs3vxrAx8iYpLjEno4fpA9LQkkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47TVStV1PpuoZ3SUouAFLAfezEN7g1bDW8kEqQywnNAqZPqDZMihUk8tdbjffvu3jsxjY27SZXH141eiSK5sHfWw",
  "key1": "4rp4thgTPbG1DgKXn2WFvYEA8wU14n2wiHpQGKwTJ6dez24ESZZ25RouAchi4UKC3noFEaQZpNr4tVFzw9voW5GZ",
  "key2": "3ztNS1DtQXjgNbPTvCN4uJFx4mmeYfQNnuWDaM5qWZEpUYLKWk2iCF5FRptb1DsG9iqpLZ8WCERugka1kQ5AoaWR",
  "key3": "2ZoxdrT4dKW3gUGuNqp32z9PsJBPtC1VRN96CoxDB5SiS5tUBehWGdiZBUL3P1Rs2jgGzeDu7VMHbi6BgioRAnCe",
  "key4": "3EkjsNmCskKFSsipy3i55ocB747JvnJGfh9uUCLNw4osuBPZoUkBQ94EEtvK8ULR2e66uiCN3pX2zFUWnJdSWSAW",
  "key5": "4fDDfuGkpR99ThdeV1inBN95Psc8E21Pmb3oHs5yjdRWrX5KKvKeVUqNJWERve7s8CWkGorTGDaEZJof48vNoBzf",
  "key6": "5r1hZcHCUvsFUwaTKmkizX6GDmStAR8xopHddHvKvMSGgRwt8t8vzWbTVXwP7dstWXDzobEVDM9MwTfgKo8BwGnx",
  "key7": "3s64iMwVTo5UwmKZ8GX5tsvTQ7FxzFt1FPXym575u35VwimvvqnKb7VAtAMXg92NgRrfhDGSsuBWQEHAqaKmWWzU",
  "key8": "5uEM37mPaqd1B5gdUfLPwxc5RT3eJiJe1KMZrg9vJ9DSfnJqAnAvmbiyRKqJsgiBgTSEg2M36bUGaKwnLMPpUVo3",
  "key9": "3XCL6mj9A5y75gRsUTHWjNXJsjiKNLe1feHHn2gARqEgZF18FwfP7pGrm7SN8e5VGM1BFPP51WKsFNQeQmwzf95f",
  "key10": "2Rce6ngUg9ANhejj9qrQXQ9FhZY4TbxhXJ6AewRK3yP9LCapAMyFQYjENVY4fMjBpmpy4MJE5xgwKHrS8zBAPxWk",
  "key11": "4Xkg2EVuXXoWG1ddpVsE3nfgpYG56r2YdgQJQrPmirng8aRnLEf1HSJ16PR9g1GkEqa4PDK4PsXvvUT7ciA8KKXH",
  "key12": "3F47oy8jrXi98guTLUubGWRtwUL3aSCY325vvCC3ZB77EpovQaeie3h1WaRmmgSnxHvs2L1cBsfap75SxHZPjbyP",
  "key13": "2Fz5ScNWw8GfQs1PBoBYxU3C3zbemjjK1qpDKGbDEPQQGrDqxQUSKy4sZnqcnj4bujzrFLiVfky2hDE9hm311szF",
  "key14": "2HNMw5bkhgCZNb3gHFb7T7SCaaf93XsjuBM6wuhx9vSAbct5hhdCEohSTp1zC3TK5Q3hX3FfVAjQRewLd4YaCfPw",
  "key15": "p9VNVYPLK3ams4WbmGjzoK7bBuqhGHGPjWVnT8B4jsUUjKY9dv7rXr2jRBzwHKK5R5T8U31SyYDJJay1ES4h862",
  "key16": "4EEGnTUTPvAKibE7a7HDjEfLPkTU5agvUVQAJ7VnyCM9QKeJDKd3NNiSQk1BGiUhrKWpQjTx2Ux5sSo338yngitD",
  "key17": "DVrcYKDy6wxyeXBiGjN8rWWdCvHsrMYQ2WGBpDPYyenVZjnVq1sPfsfAvLGHNMD6RJKzmHR9cCbUDNi2BeS4dUz",
  "key18": "4EHhdAwLf6gRdpQ7cHm6RcFXEQzFwD1JYRzM6XFck91wY3czJLSbeGMtjPfRXooMbrndNbZosDtYgDY3Ed8BirKV",
  "key19": "5GeRay6o7KEVevgcdZLXCvfqKYhcdb7AZQWdxWewhooCc78mQtDhd5uQXqg6HmBddu8Wya73NvrVFXzFHPeBYgAA",
  "key20": "2sjB3q4AUTjHvhW4T5GsLrVjCkqPeswZtcwfwkUfw71ibsAprrtZ38H7CV3NjZh5huaYrbqneZmvKpRu9KggE8va",
  "key21": "4uE8Xk5GCt98WdE1H4eWZgLfsT32awt8Sqa1pP2hFGiNWmsZZKgHmEYLfd5BkgQcXJ3s97huBpyP9DjGDrnXXAM7",
  "key22": "2DMCiXkFzuNkHqQwe3EJWF9LdQhuruqgkjMrqLehVzXtzKJK6PWcHqzHw4YkAqfbKUGhR33MgKD5A8L6DjaQu6A6",
  "key23": "49yy9rTFfWT6AtbwGGkYzhkF6G8RKr2u8RdXGzvUjHjMb5fecjVaNwYMw9Fa2DMqWgyFfbjNwBd7JpkPizUUFvA5",
  "key24": "32isw8e3ezEXrVgxY46Qq8ZZSEQFXJaJ4VAz6cf8CBssqmHUUQ9A8b6qaCCDEQyP8B6Z6DvD6RiFGDqQitKgno9t",
  "key25": "3ar6QaC5XFnegVkXFD3LLBPwceKrZ5eitxBwaiT8425Jkuc5yJowjuuAayy8e9B73NFVTpnWPfEqBSKNeFMnnpEQ",
  "key26": "orbEXSRoazHa5xUZ6JH38W3AZd8MzsdH85CTEuff6juYa6Lazvr4rvC2KT5MewscasitaFEiWW84VSxJRyuUjE1",
  "key27": "Hbh6p8JSySD2gpnL8sxKGqU3WkQXS3UMtnieNy3WztdSbcR6yRMBpHnouA4NoL6kN96sLewr24M72pg4xVfU83m",
  "key28": "5R6amuFZJR5xcFfq8EgAeJXSVnhXcEDFS4mkDuavZzDDkifSoqWKNBJvdAp9XW2chy3JnR7UEMcmMT7kWrKv5WiR"
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
