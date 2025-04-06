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
    "4sFe7wWS3jJXSwDByTqWY76MNnU7Xtj8sxi8HCFABx18RHaSHgvJKVKa45WpwVtxHxD8pjBeTEN6wSZnMkGtKUaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g6ECXPo2GoDUhUBRpxYEBxmiFMv8evZA2mi4EM5ntkfZkjMyksTxyYfB5T7CDCkX3Yj5vfW7gcoaVxkZJyxEpDN",
  "key1": "54rkGo3hMXm2DNMh199GXTUk6HLSt74ZwT3egk95rcuhQ4SJ3paxb8EeS4kU5UiV6Jrzq1oyLwxv8vjhCLg3bNPx",
  "key2": "3gMPQ57kEwcc5qjbuuXn3z5TEVZ6oijjgjkNSEYEFWPxiKiBo7z6ZJgE7DqreJ3VdtqHmvdvyQEmT4k3rxoThK97",
  "key3": "2XDu3bE9bzNjqsiWcMjur5icyU2gJzt4jY8J3mAXW5H8z48D59QMdnigW7FVqc5dPraA1sVJZ9FESfHYwASxBfDV",
  "key4": "5TbPMSojTdG4horAUz1kNNqPm2Yb9Ly6KGGFutLqtzx7L3x7XTU9hKqJdnrgwmsEPcqgJzYYJMKJMS2AQZRptHyp",
  "key5": "FG4GXd288wueyjGWoBBnhTfGUKntJd4q196J4QYrjQkm63hxPbePXK3aSpHxP8o2k9T8u6ho8hY1ELXiKa9Sa3h",
  "key6": "4ynUHkzui1WwhTXWcTBpzuYNjEaihqDnnhLk8ZbwHyXfFWbPqAxuwCLhBxTzm3GwtomBZmaFbYwXHr8MPcdo2qdF",
  "key7": "5poyeMpVtr8LN94yaR5MZjeo7xyDhHbHWzh96iSFfMwk6S5Mxs9w37NhyHmwpMtZLLJytWXUvxKAUBrKTxBJjyBK",
  "key8": "3mXspX92xnm94K66eejGU6JXYyLW3xU4akzvwQ1WtLHARWJpnVFrkinxJVt8RR9bn65gXDgwc6mTzYFYYU3yTRmQ",
  "key9": "2bHRFquskqyFhPMbL4UgFCqFBUhYvn3Y8q8LFc1x1hyxdv5te7wyAUgtLT9TEbG7oQySayPU9vYUPRjDNjeg62r7",
  "key10": "2Mp5tvXStuNXPDT5PgYBVvF91EQS7M6Gmb8vEY6KpCoHEZ7MFgAzKbijBbpazpozPXQzzBa5FwTVBBPAnJXTAsAN",
  "key11": "3aDYw36NMG4T9xGYw9qMDKLgeF79LthdCrFq3PEE5pnJMm88djeJi2r8V7VbrNUjUpn4WeibNkTe98pEzwuqipXy",
  "key12": "2uZ4tgutHgEhnHULCFrws8b7As7yN6eY3UQ1Xc8JnbvwpnL5SRPvRS4J8AoGh8VNwqJdYcDeMaes7Hi9KvTXsSWY",
  "key13": "nBrxJsgCezXFyKkWf1F4QSE7DtLLc6rBrVsHkJB1mj2uunxFCrNv3Uzwwn2LqMKoW3qekwuFqNyKrftXPK3vZ9v",
  "key14": "2yZLNEkQtUwV5fHWcMmDMydGc9PpPLhYV3pDMUruHfxFQrkKmwSpqD1VqEyXZqUNPaZkaMU9eQYKH5HX1HVwW2Gx",
  "key15": "2mFMw2TtFJsUxG5YeUWKLmdFrsv53qKpSq6yMeRYBTTZZmHvMwbtHy3UVhR8wuyxoNpzVFUzrUDpbX91jFJHkw3V",
  "key16": "5o2QbAtA53fJJXuqyuCk6Gss1gQiNP7MBYFZrorjP9htmVxcvnaMaswrHNHWBs9F9MFday43Q7ezE718T8WyQQaX",
  "key17": "2kWPFcZarToT6p2PJBhgVmQSX4bs9ZcKt7fv5Vcy8L2R1WSXcc5ba73R6WJitARmDbC5foZZouX3TWW194sucBsw",
  "key18": "27P6aH7vYN2nS1WSD6VX3EtxLCJfxyKuJpPYmKmAmsQiPj3fMAfZmw9prvJYaKEU3LokA9Y6HEgZaBnLFMSCmCKf",
  "key19": "2Mszwe2gRfVuJ5FFKBbsTSnuameaKsGBFeqWGGcrZj9YzoGh42ntkDouNnaZvNA3KQVUAeD8Usv5sB6fhDEUVEyM",
  "key20": "3UUSD1gvL8QLPHYwzmXUCE3P7BuhsLFmavh1HzVSrrSNJg1mo5fJYR5ctPAejpmr9ntj6cCyLGc9qv2dQRn9NCug",
  "key21": "3Z3V4TLFwqwN94gJuJgsSPvUm7q7N4YApgffzqND9Uj5JknaXMdWAWJmYo1vbhq7ahe6v8WvEjQQncr4HkqVQfK4",
  "key22": "5sMkxSehu2h4TPLNi7pzL51pSMQLDn7iUptWZZxxXHToqJgtZZasNdqR3zRKnAYQPTvZeQ9hEaPxNpJzXfxbAEzE",
  "key23": "5Gx67ykd6zbjhwz3ChdVD3rVgZFAytSS1yQV6khj3W5GVYCXGBGiiGcGLTaZQQ3n7KBbLLz9kxNyhw6RGaybBR3W",
  "key24": "RnX5QnJSXMcRPBVSkj1U6HTKjwrr8jKGncdGeBDy6ftZBnBRuMz6mh5GLfAxjatnehcTJy5embDZ9v3giu2Apdo",
  "key25": "9u1WvEdWQPXB8kU6CyFtZfHc3xiZqkeyjfmEPGmu9CyVck5K9Feoc4a5x23hR1umyXobQpYy4iF49SNiG4mEBTL",
  "key26": "K5yJ9sUASGwzwsfHB3tXLWcFh4rk1a9B2PS6npiT7MF9K4bVU81A9WM8zn9veYnXh8qTdebiDUsK1es1pow2NwG",
  "key27": "5F7EU6YkgLzV4bpZEMiMiCJ4Mxg2gwTpuMTS5NUVndnKLMgNukN532uoJqKNosALEDPzDsT5aM1PxnfESvyuDsFo",
  "key28": "4XLUojbVMJsitCiZWmSmtGG91bZEJhvcCa9RSdPeF5KGQkZjWEEARS2LJnqXp6WuUEgLeLCxr6rcQ29nCjYmn8Jz",
  "key29": "4HRgX31pGf6PUYd3Rqz9GMon8LGU6auo2mKtBH4a83RrJCEM9iWRTAg1uHFf6egDTdTUxhygr8oqCoPn5Hvndws4",
  "key30": "535ZPTFoYjcf9LC2GrLLUCPRQNh7yb9WjGCGwkvEcev85B6yVATNPFqDY1pgBAxX4FUVwJDeMPUGD9W22cE6mBL",
  "key31": "5Huh6BrtZBzvKiTa2J3b7xHY2RNnJDs5qb2frFPuAAjAwagYRgWdMw5XBaWAydjXqSPAN6Grpdcbw1bfKEYf8enj",
  "key32": "2ZawRZdUijDUSMD21MbwWCBxQnCZ2adLsLq9VUVPDd12zPsyanyvHVSDhTJ6BH4Jb7s6Wg8sr83rwxiRoQSQMFFY",
  "key33": "5TjskScZhTGYKCucAoQU4gnaeVJueDBsvo9UYhDqUQgvsA1fBWE7sXgWTYiG9uU9Gk74nGTi3biWGAjthgTEefDv",
  "key34": "5qFchKTHe4dyG4ZMiKAqnqJVK3928WwVpjsKHM9vhXwAbGiW72LdZo4pbMd6D4jU2tDe8TM19rwq7oMDPSwew8A2",
  "key35": "vRCyWFx23r4dbXGHr7CzVsm9iqbowmZT3nprmvAXcc89aQwJniD4sd95JSLiwMWaBzkhZTwfnR3p5TE1oaKQj37",
  "key36": "4Ef7G1Rcpwzoo45oBQJp5hYuzCvi1hx9Dvvn87w8cp4j1sUYJiaxsLXEANXs1BYzXJPqnXN5y4sxWHGBx3AgpQ18",
  "key37": "rzA5Nin63XamgH6t1F8mpuvHvGkZrQD9FZyZxYA9cFnNqjsQXVVX4CL4TPRqfF5RguFcFzUY1w8psEtHJPpBduN",
  "key38": "4SWxZVkK7UnMV4r3cZUmMrFCzU9bZJvEf7Fc5KC6Wv8iozPsiX9rBbJRLrsvyTKi2Lj5TovdTXKQhKQ4itNHyTLx",
  "key39": "2GpRCCf94MVV1HxJn5NG5qkV8BNbK3VanqSuHhsWbqtacLp9FYT8piR5Ff11zPJKpY6ud88pKsQBvxNDTkWhDU2f",
  "key40": "59bH4ubn5GgHaMeE18gbN8JQCbgJpC8vwViJuEhu73W5R4waeFmPey6NVBn8SQCa7UByy5C93PTtRSzQZxcgLLuV",
  "key41": "3KuJXF5HVhxNMS7wsXZhEUzQfVeTDDYuvAFTJBt91SzQX2L8iUpvWrDkBiwFTEqcqQUCrTdzuRFeMo1XknmVSKNu",
  "key42": "64CCJbapJwG8FPDHT1DkoW78CUjwmLgas1qPkgyZHPAkZYRyRt9jwBvSiYFXms5bhhxtQ8veK1aVvXRQNGd59jVH",
  "key43": "64D1w8qNgXqoJMsfYzQh4PuaR6gcUXcFm3HGwPKqbHHhBZLXRPursZgzwRGUMowYBHhYkk4dbmS3Lanqv4EUnnVo",
  "key44": "NPVawRPdJG2oYvVYNf1xED7VDdJPF5XVs2BPK7LpTq8jis4pbfFCar2EMbpeEGZPUMkLookELoCAc1md1Kf5Pzv"
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
