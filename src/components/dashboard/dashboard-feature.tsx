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
    "2xUzewfBzXGJtu1rAJtaqtwd31BDx93bjUhqyCYQXhDkzrJHryc3epD32jo44QY3SU3c74jvQXZGZei27wactx1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QNBebziFN1r5wxruUc82AQGZFGmYA34vBqqi1fAwEk7tLUe7fA91MxKvmANwcLTEnW2vkzr3hsNQnA6uPjxhDXu",
  "key1": "4skuTh1cGahTrRt5PW5Xi5drysrePXuiZvTxBEhAvTaCWv6hUWJM7r8JHQYeaj25HjMc3wjoKW2xjf2tijmJKQZQ",
  "key2": "59VDofpiZeRfmRBvyZu6JqndyCPFSjVFpNB8h2udywTPcL2nh7deSsBxYJYZj1527pBQRSSwN8vcvQgwrkCg5h6k",
  "key3": "pHsRE7CX63fGk2zsttKq1waw9QNT6sbhyxAcH3GtgrWGLHYL6EL3XoJFfY6DV2RqDSCZTJuVohqRCye1SdDRv7F",
  "key4": "5qtLxjqsGh4dM1aJTHfTB5BWe1dVvYLhcjvGPvcGt9HY4vfGxJ15i91b75UGvB1mxGLRfPuM4s1jTkFyzuSrP84d",
  "key5": "4RSznJ5vrtiQaaH8FwcNcvzpoBkfSb9J33CdmCWE6KpnN7rT5UVrMUtvaWHcaVgvP9FnGugQPJnZDJKtgeEstpDc",
  "key6": "2Pq53pMT39xf7BkK6zacVcG7SEZfLm7zyEYMSuJpwQtpHXMtmUzrSYyH9cn3AzHXM2A9sa4cg35FoT2AM7s3zD4X",
  "key7": "5TZejff8niqH6dHqPMD9HAUp7pqoRN7yhGHNjwBTdk4adjveUStwPu3MTAVakSLn8c5K6EnFFQ8fd8ngVFFCPk8U",
  "key8": "63crrxcyxNoYZnM45GXdRfxSYdoQq4ogZ9Mt1RMAR5wrWK997XrwPRUnogoL6DRW3BWnrzqp7L5zMMtAsXHuo27h",
  "key9": "AkaBH2qteowZJXicTFAGFS5SRt3U5VPp37gq4ufY82uXEeAqFhuXkKYiizrBgDDt381cDoBZg9Zb2aUji5vtd23",
  "key10": "3HRXc5ggq2QkRr4mvFHcu5SHWb9rxxuEFfhwo8SSVdJkKnDbFfTTqVycGXhbnujGmLEdSrd4zDaxn8LaqiDH4jQF",
  "key11": "33unfdsm1RjUCDwwuBw4g2NFmTofn17muMxzUoxqjuoUDmna2Brgdnh1DrACiHG2ERFmAxSEPAREZp2And1Bq5X5",
  "key12": "2SFi3Bqi7VQHTftn91CzUvPFNRtZc4Qu1C3FyS3cWDX54SoKMUuBxSqcHB5w2CR39DWZ7bgv3vZysUuvqASaCXfH",
  "key13": "9fPbCJps6UHb3aoAsKHUMcFFrrDKYLsoxixY89ZX6bzBugoFDNtoMd1nL2VQbP97HigtUetNQWzjhcQMiEzJXFv",
  "key14": "56pRe58w1YPjChi13RyHD37XYxbMFnZ6ZUKvwEQ9FV6sy7mSSJcrrnmjJNKxxUaYxVF6mpkuFaKS6HQg5qcwspgE",
  "key15": "HsMVwEhyaeeF8N7qSeN4ZSEABnmG7H6TSHFv8GpMJkneMAdN7XvM823V2ixeSKGaJN7Vc4joymMUNkoYsv9WEni",
  "key16": "5WdVUeUH3ghuwBh7sZTxgSuZvWiRoZHeNzz7ug21GFyBGoa6a5NUoDp3HVDtjKyqjh3WJeeSgyiqL1nyLKdZZKdB",
  "key17": "22KoFVDbdBmA24PNpMReR6V16CgxHdGphjT1n8zbjStaNhDG8PChmkCvHctcoLDFUcVAzM534faUyXpAPHHL9e94",
  "key18": "3PtW9wtL4dZhHZnY2nB8AVRegmvoPDowqDS3FAFCYoy1xamv4GoN57VfWYtRtq6YzjWDS44XDqeYfkMV6bQPXpvb",
  "key19": "Hm2cFxSFmdJUMK9jHuLtfuGCaNMoB7NdXgANkU4Upo9nVZS9U4LB5n1dgDRxCXNLjEVxq9f23GgExd7eRnhgEVQ",
  "key20": "5kCmNACE1gZL37dpwp3S67mCbuMJPvvYVSf8qv7hHvPnx12mEjsxqAAonjwyn9VLmyBmhhhNBS2yZQcUu7qSb6zE",
  "key21": "5f3SvNZH5mguzUw9qpdYjNrKrxzVjrUqnRwAyE69X7YTyGhKXiPvZVPZymWdUXbWo5SzY25d3E75s3r5nE29JtHj",
  "key22": "2xmbe3jJQWc6RYFU1frdWnw4nRBJNCNsmstbAE9pkKJ4v4VeGndsEjDcoKNz7bqYshk6gzTCBxEBy2AwvKRmuRH2",
  "key23": "4aZi9nM4hw2ZdFAdB1PX5nvcZbYz1X4swJvLRerjJk8jGTgsR2jcAscRB7YADZ4tZpbSiUvGSeaaJzFLDNhtBqCG",
  "key24": "4QDsZZrUBdudSmd8zkq67zt6xVrsvmRFbfdHMHLSaVwBPcwBHVFZNwv4LVgXMLvT9P6QbXL59VGpbbKSuEDZovZ4",
  "key25": "4B5UxbeEwW7hxWc96dn47UzSvHNSFQBReWKeG7mZw4eVsnbDZ8UStiDXdaRKyQsDaDCZ749B2wpuKEPuCnnUkBJz",
  "key26": "62qMUNRoDuUtdxg7TeKco8K9PLK8ZhWtF3FK7zFSrEJ9DeqeD7ZY6u6XZj8BH8mWjMtWu6ESjnSnYq1aSuq53Gfh"
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
