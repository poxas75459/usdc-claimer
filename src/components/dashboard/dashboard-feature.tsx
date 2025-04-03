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
    "66XNnu8Kuh2ngFwMBnaWVXmCiEeXcSiAoCfhEunMPpUa4L36FL45JLsPsqxkreLDQaxbxoVajc9G7RMd5zuuv6WL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SsLVbV8GjHSr5Yzut94kREihcEdANFmgUirmtF8Eniw2FWZcGQFQW7BfzeegCrowEEaEhcPDYhCVXqFsDhbJUCJ",
  "key1": "56QJGnebz1rZRnnXjWnFb3nUxffvX6XXaPiHxgBFYohb5riNMsK1rxZEoJAwjZi17itFAGc1xiQA38CHZkwHAjaL",
  "key2": "3j62PWo9i98ywJuUyHgvcF6rUoxkAh86gzEiRqmgzgdwULpinY4mrXDqte4nQgobMGPLoHvifYCQk6pFuBNbibWd",
  "key3": "2fshcwwawRg8xrqwBUHtW6jQgFJGVeCX9Lr2V68bZ7pTFGhbW9HVxwSyS3rXqYTYVQBU8EV1WTfPg2ttsATtryho",
  "key4": "3a31tMZnaMXc7KLNf7ammcCTLs3edyjnQvAhoNXPZBgExkojRpCZKAwU5RwQjp765pjwHDxmqoT1HMuPEgigy3bF",
  "key5": "fm3Fzyc7jyqvhEjLDyWrmW6dxfLfLno5D11WM8JJgoAQzbYAamiqNtRWY76davg5nqHvv7LfKPjUgyh1JZjQJPr",
  "key6": "5Z3AKkNCVRTFeGGBH26mWf9bksWfZV1Z4NMNegNAzuuy9S5inTeU69LHtREMv4yhSEfG4cCqHDkTSgtEKR4LPun8",
  "key7": "3dc1Ru79etdRw8XY6R8Xpvq1RNyGYCcotdfUbXgugDLUyRt3EF3qfKEjHdg4sPudQRuM3rAQnzDeAjVrQT7Gv5wP",
  "key8": "41yMuTuUAYvavJ17DmydHkwiDociXoZDUm9mFhDLuwdguaGgbhpGhpSPETUf4ZxR3Lox7ZgALDL1BSeA1kvM2F57",
  "key9": "5k2iiwhZt8KvvLguAeNqgJFaYqu6htNN2Yu2zKPTX5udbFTsBcYi72UiTaRcrgRAkH1JE48L9ByGFQoiQrd2s3Hq",
  "key10": "4bicjEKm3bBA4qo2TGX9C53yuqoLt1NXxFVqUSSFq1V6yr1W7ESda5YNXCxqbzZn3yYepXr8UJYD2gopRQ7eVDWk",
  "key11": "63BTCFqdePY1ZyDmReLCXKnKVtTwZ5b8L1J2AQgCqpDxPbHAYnvqQN2wCg1wfZdghTKUBEhsnFy3QbBk21jErG5s",
  "key12": "5ywW9eRjKxk2A9BbBmNkpPgB19GG7Ka6Y2GUA1QbVEwi1QJySrSu1DiG5HuiZJeyj3c6pGkU5jeMNwr8fCVBPQrM",
  "key13": "5PkeLnYJwNixkZjd2LSv7zSAaHh1mqagAihSHhgJBzEyJmT9gqCi5KEWm2cz34NapkYs5pFEj5xLuejyDMgm3CLh",
  "key14": "2kPBD8qEtgiiWve7ViHp4NwYMNTaLVfBAYu392Tz83ny5vqtXafCtLP8AYmcu7GieFWjYndTSMY2dSMyW4Ce7BUz",
  "key15": "2fPMrfx3zxLEfBsLgzF9LqTEw6uZxuzvMak2tPEddk1RTgV4zwz11QEGWmNQMfpkHTjBVzk8i8HuzyCSo2TBQwh7",
  "key16": "4h4apaXesjPF9qYxSZtSpYFXjySbyoJqJdiDqN8DXyAHLPfJKf3f2QT9BaXn7gyncNsW9UUGWPvztvhCi91G6zuK",
  "key17": "4U1wyq24ntEbi4D1HrqtY3ZKG3hCZk9csC5xBFva7PmkbN9wRMEGRNq4XmeF3NwgcxB7k1V4XLHKucar8JM7KFT2",
  "key18": "5eYS8BaSYrZkAjL3VRwLoCnqYLZwcVTRs8Tz2u7gxeCZFBvspVBTrCVUnghzeLzeJFxxLe73uBas7dyKVyxVEoqA",
  "key19": "5nKJREptAZSgPGphxgLBpf18YrV8XYrk7xGySapfNCfazvVWNK5P5EZJSVKT28SCwVrcQe5xr4BHLBJX8Ukvi7Ro",
  "key20": "3GtCkqVGJa9YkyWDWVBQpZwvRtcLQmRCrMXsKQbUtJgznWGr7hBgP93F2fSU4HpqDUYapvvzqc3GWKBTKPbSWdZZ",
  "key21": "4wJuUgMBDTd8ZrzMU2fb8yuGxZPjKXMeqTonqXYy436MpetFwVAEUVUqWyJHmpznYTC7qvjpYm3kPeeCFzdbSVt",
  "key22": "2jYhYvvKHFGNX57jNfSsSACNbuW2a1ayaNpPfBuQUNmRc9BDidcY3kmem8PCTAY8N5yw3VNoNehcVSRoMbUZN99d",
  "key23": "5LNEAYgjk6iwTmT3CMEwnGUQecLTK1VqoYsS8KaJadVACyKcszkS8Sv9j9MJRBnVwowmaYNPqcWVFcwJeYj4APMG",
  "key24": "2yZY2tTR2VyPqBRZ9voguDZ7Eaz3e4GGZp2VTHyaEyNsVF38ZbrPkzZeGvSzcatqEJ7qGt2BcaAbDvenfyidEkMc",
  "key25": "2Xqoksjbx9czKVUJ7KdHbAxdxz25Pf5W1c9xXHCK7XZTR3unAuP1pgEo2MScK1dmZu2WLuSoUhUV8sGh3T9jP3T8",
  "key26": "5cvnGuPESCdFu71EGWP9N9wYTJgbW9D7QA1cEUivX6JpB8VyA3YoFcjcmmFuXDfZhPZtJnmXH3UaMjiPDEJkHHBQ",
  "key27": "k3Bs9WBRntkj3DbxxhKFKb5zG5XzZGaRbQhZ5FTqroNh4fXKqTEW9hS7ts56SJxXn32AGAF6LURmQRsJnYXtrR5",
  "key28": "4ts8yDxeRrpr4iWaG26aEe9KtoshDj1t9ovT13UfD2knftMggo5tppf6BVFZmGuDcMKQEAQohAViTjEWB72QPDAV"
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
