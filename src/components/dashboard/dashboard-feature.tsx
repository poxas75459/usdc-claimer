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
    "mGxQA2Kiq7zDtC7ijHMt9ACgD3Vus8yCv17usRXYawfBUJXRqyYUVCiLoeuD4pX8Nzr9DCh4Zkdv9v9weUY8vEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EBnVS9yRSyzMg7wnsc8d1AJNaQFTCv791UEYnhYBh5fd1dixDfhRpVS5KqU2CT4M8PqyS5P4xLhMug5jNfkVMwC",
  "key1": "7K9Gqxei29Naz8Md6rY5R2f7kwW1vxzWhwMCj9p3TjQxkDcXWpEmi2cBmsnaRXUwqFNkcWGQeQoJ9JMWuZmwRKi",
  "key2": "2kQqW62VoyAoKnFDeEHXH1iw7jtozgcBCBLphfBCHVHreao7ctV6iJm5uR7SAr5adxDhLJ8Ue9cJpJkumaPxaY1N",
  "key3": "5GAZKha8Rscbhn8obvfDcCsSkhvHBePAvUWTrJBbpxbD5ebMuibECFWkNwixeqbECZ4zSadAm6eC2purQsZ9dn1x",
  "key4": "MV91LYe2FwgLoYP7zsuYV968Dkyf48uxv3ZiQeK92N2MGHH4Bi4NVWMuHkTWZmweCvaLqBzXSXafRf3AWsDBXET",
  "key5": "466YpJNJ2PfmvVfca2mGnZLXXCAxhdxTwR5K7E3UdSonrry38dA42qqropm863aJTGRaQk7XSYCM2SA9N21hSNfg",
  "key6": "3RVW5rd3Ck4ew5RrYbNeexHjsDWFbVq3QBoKXU8StSy335N9FWy632QBh1L325soHVAVK7ZoXE7U4EMs526q84og",
  "key7": "NPMZrPV4uHMWDEHmVBDFsNTmzp1aUXE2774gQCv6Eqb4zk48VZ5dFKs8f18GndaoS8xdFNwmKm9toaeGQ8Coxh8",
  "key8": "PGejLCKs9kx4vwtrSy6HdoC2GRMCPmkaRtDbkYiSqZDQDYpmFMVt7gx9vpMLW3z3dkBjqUwU2PW7Wz1YqF4BqZK",
  "key9": "w9W2ctEotFqvFjuqDEzRZcQN8EButa8U7jkSWUVpKS7JLgCDYWuqgBhXyUqSH7CEG1Kz5Y7GWz48b47142EwVEU",
  "key10": "5kJsJYMS37F7t1TgS1zrvkYzNBjJTZo1y6jh9r57EzsRjuM1e8sFVHuSzqCAnXLvehheA7M5fh9H4Uo28z8GHgp4",
  "key11": "5KdJ8b1JpxfBDKK2FrhahB7s3f4T7nrfNvgSztPLZNPDtaJ3iJtF3LEDyLtmfo5dnUzKUpype2iaCa7n41XJVaro",
  "key12": "agbaHJQ7xDkkX8DGJ1UK2jMNCKkPd3nTSyfHF4dfYkuAY22vwTfwZ9Ge7pGqg6EhDbhc5tUXkoGhYxSdtc9CYjQ",
  "key13": "fCTURCrwUn2x8udiWnFNwUFpsJ354CVMVCWYBcEcKjPrTusRr4B1yMMA7zgvXkTJBou1CrQzKFm4A6sGRKpej6F",
  "key14": "3yAa4a3GJjj6s1FeyTuU75miMprJcfMXMZWUZHafoNBARKLVMtQCRsG7sxjF5jHqwABEJjcQ84LXjT1EiFvbqka8",
  "key15": "5vcnBL4x85rx12cJqedR1HDdKX8rZmGTCdBqF34aeZWnbz8kwugjaem7XNdSFMWBkKf2JP1AYaMybXYRkDv26cw8",
  "key16": "41U96qRKnu3i6NR6yuU1bahTJLbV632YoPnNpwFYcvfAXLXF5EGqPjmNRW5THHRbGya1Z5vMEToRu6cT7KGboWw8",
  "key17": "3gtp61b7VcTvzwsFnJCRaxddiHc42s9GUG4WQcL3ezvdzzzySDYy5ze8ozUgF4ipmCAih5Agn3UtcqZYnkfEmF9U",
  "key18": "4Azx5xkLdjMyJktw6ssjzbjEz5ZRT8kgetFoy8RgySUUR4GcKRmQLogr9LYUghjUoYvTvFnDvbRHQnnsspXSUydL",
  "key19": "5viViqc6aCDXRvewwzAT6455QAKAYeEywPQYfPUE5Rfipjz7165rcd7d552jEGGcghyKXoqxcnbSBbVvTGo4aqBz",
  "key20": "4M3fjL3Pn751DZw7xnHqCsrRsvXPEwek2yvANNzV1o7LnYaf5qWh8hRnx2P5AwJeXxU9qPyS8exWEB3nvE5ofg4w",
  "key21": "4wXKYnESrAg95rv2JUXyo8fDDEy9VKjDsxduxarMPHWMixXPw9hgybiGUwXEseup3vK79vgwWVAug8zh2nJd3BcV",
  "key22": "28Ny3SsVGpWQyYtiYoysRom935VU3S4onUUtYbARSva2V7UEKTbDLW5QMLJcxtRYp5CaEeDhTH8KAERoufXw3m1G",
  "key23": "XU5yfqeJWdavJTbps1xDQHSmsH1ZBVpFz6JpeRhge17UXdo3RVvmee1ybgfBBS8YLXKAkwpVEgUL1fV8wS6NHLu",
  "key24": "3ytLocUxoFrY56jmTAGPvizvqBmb4KAc1gMNq2jdgvhHDEPNxS885h16WQegTSXyrUKunJKSFzs4ua17GLmfkDzz",
  "key25": "2C8wrjRFLNkZiuagiDZQ194EjC6riWh3CWetV2Wxzyg2cGZNwpH5mpwFJnCqWb1hzJcvoNGyABaPinreA54VaqQH",
  "key26": "38Jd52GiHk3AGRbKdMuu1ZQ6gsdGAi1KTAdqsBoNtFfYWQmyqo132uFdF9ZbtgnpR3zP3BemcNY1qqrVhLwvXPxp",
  "key27": "53b7AyRqxcdKn99fdbCiR9LgQrctPiU126nKPtbVsuyQLU99gGwz3idH9p8CzEGcf5GTAH38SexEynb9okis4LGF",
  "key28": "4ty4S2MiS1D59DNC162Lnnx4f7zVuF47KVe2tHRFoicjcw6HucDyK3Zt2rKdMygJwS3dPXnUDdpdPoTpbkimuEnS",
  "key29": "4tuP9nDNJbJqGtWAqfV2xjbuUMrKTJhH6jj2hVWbP8PSfCiRZzCcy6VpXfcpw7NLhiZmv4BKkUXYgzLg8Du4j3gr",
  "key30": "4oWQKSBE1e8RBx1uq4bFhMQrKFhu4Z3NZwAqjgSx3Dxe1pLhcxfRXM2inajyjewSBwznKbhdZzkrKeVCNGUqm4St",
  "key31": "2edUXsffqvPTjfftF2g3XB9M9c2K7QNGLs3NgWEGghFYcL73gM3keDPUp99x732pDSU2jSFGJsN28ZpXnbQXiPJN",
  "key32": "AC8XVH41aBF3Ng1QfcqkMe4CQhraZfJDUjAXtJ4ySQxiWUppTduiAZccFsdTGkGG1TpBLk7Nj8yYe6Q6apiGEch",
  "key33": "5K9mqgMpfWbkYZUBf39XafEQQHSbHLjTB4MdxLMY9R6arSe48Qtna7oYsZc8YEcWVdTVvv7ky1ge6KuTCzmXqvFN",
  "key34": "mpH3pHjjuCr7szdKgAUaNJcTCerJyoVaUqHqvahPKbKxA6KQpWwFA1vWGaL4dreay3MXBTq28Z73q8Gu6n7spmm",
  "key35": "4G1h16QG7MThMA9rHXyrb3RQ3yBoKDNtcjjcALkdTTC2JS1aDEFMMUMmiNzASE2gj1dxWWe2waJr1UXNFaE4jFwR",
  "key36": "4eJ56NUe3ZjSZTmHQyvD3LieFv4ZKT39LE58iWzrJJ2v8qwAEsahLmhJCiGiCh6oUA9RWAewf2daXDfxUyNXghgT",
  "key37": "ihJByDT89VDD55WDYTkRgYpvXcK7otosHR8bL8dgzUeMd2e8HXhJyZW8VNkhCnf9mTowqVD6VQqWX3vwP196V34",
  "key38": "5gFfDDGMTYmrpBNgCMPryjym3s5yVrapuwoQkEvmtw32Q7WeE1EPP6PyM89b7sfuVp1sjiXfdHZawHLoe5UT4q9X",
  "key39": "46t3uzUtWsgyRdcC1XzVAaxdgiKSKHbdAfTnfCvCzNtZucezhTVh5YJ8JsCxx13bk7ZQbEwVgFd8N5EW93DZFhJJ"
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
