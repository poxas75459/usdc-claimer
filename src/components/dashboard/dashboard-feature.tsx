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
    "2ZNkcSUex6NxzkvESVwm9BBrnePYSJnaa2uGf832BUSEY7JSQ9kPmhL99eJcTCubZsDLfKvvZEg6yE9fiHMPyzBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dVwFoPbYyyDbTuhsv3MppAjj2CPxaPHu2WWHWqjD422BVhRsv9HQkimTNF3FYgZ2D7jVPwLLqKxyQvd4ydEyZVN",
  "key1": "5uDfmqvvC5kwuegqxguht9nYLfKdQWroeYbqFE2KxUqXYqk9wv9j5GAjojggBJA8VNBGSFyU2ta6edNRxueRQztw",
  "key2": "3fv1ParRxUuFLJ5mT3miW5KkixNfngM1AXnx6ZmJtgLfAhyxSevWKH3U75eq1GgfVVM3uSWSTuNTnUPrkkqKNNKt",
  "key3": "26WDWK32ZivKL2Y46vEifAWtm43Z7G2g63Qw1SvcQZzhb83awSUPVBHFgdatUikGYmTpnbhz6tmwrYZNHSrSADxA",
  "key4": "35PgmE2UUhgfkR3aqCKNbqxLcDapT75BM3LZN3XUsWT1eNsMwXRvPsbt3nQrQR5gDihxY9DLN27sZQm3MU2ELSiB",
  "key5": "4aKaYvANfyWxJAYxBq49931eisx4emR2ZXvhVsbaJ5YtA8WNNAj6JDCEcaZJfwuaoZYcRDVYLuAhKGSiJPy5JHak",
  "key6": "4vS6spDUMxygSWYUfUehNg3dRDhuLn8Jeuetu6SSA3oWU5wCrR9eK1UDQSBGfLSeiJouYY7CWiCBH5bYzLopvVe3",
  "key7": "DCZU6kzm634Ka7kZ8Q4UmKkxVmRQKAK9pVQxvuqBXvF9NasxY7HwSEKMX3SdYwgC4BuA3H5tpLh4BLLva2VEyDx",
  "key8": "3Qm5LVXVrtBXxXquTt6Kb9cMQhGXzoHtDeuAbqsKbjWUkWMEvxEyqQQaMqgUYaDhXWBNA1wU7Nao3Ut3pdA4PQzB",
  "key9": "2RWJErHnChWrahvtTYXr1YEbGSaVsZovRV9Nxz7PPNSppdWwb13HuEU8cX6VRgogX1YVqG2QwLyRhiEkXxYBm2Ti",
  "key10": "3akkMQGEymgz5Yg64umFLrmLGQAKnA9hyZuraxioae53vQ4VikqdEUqXYudTQJdnxEL6fnukpf8Ah96pE4YWvb4L",
  "key11": "2hTN3LipYBY7eGwXDopC6QQUb358UWRRRsAv31Ym2AQctj5FW9RptN8QziLjxrBw8DiD6otekt91x8skRGAMoqBV",
  "key12": "385frWynAoiSDioomP6uJ5Vt6hZ8iBqkRDruPT9rTrfiLE6N16hcBK1dRWWbKsGMw3jmFnrnU8oGH7A3pJjBY7H6",
  "key13": "5DrWoLjXP3mCXSpPzcWoMaCQ3vEcFJgCnoQR2pLBSvmDp4itea87D3tiLZdrXK6Hiq8K12PoQej6zvSAeWsK2kWx",
  "key14": "35Fgxv17GdaDxbMz6YfLoNMEnXzXxpX58fQiryaTtEzWUjjJCBLm93p8Z4LzoSxfDmqRj19EiaRefJHUauNC7P9A",
  "key15": "5unTPKVrfbg8zciJaSueqMY6vsaMmeMyZzBud32zvJHCCzo9g4XczYYHujRC7m2VqtATYdmxPG7kRUcrofxUG1TH",
  "key16": "3enJ6WBRbd1f2ynU7azpM74PuPsZo7JnS7G8Go67jSNK1Jx4iqf23YhmhMKJRee9TQuZ2PcG9dYtvy1q2e66HuEg",
  "key17": "4FUjpJaiFG6reoJo42MP2TNtqBKcAAswZZ3qR5oabNUUYY7F4F2S7354HSmdDQ12jpd1oNLCdZHhBysZ3SkT6xhr",
  "key18": "z2EapPP5yPuBdF95hKwA6RnPwdBhakHLGe8kmiXobuK5zT8xxm9WnMjWDmBzyrbpktVZ1TjhPqsdtpDpYWy1qyT",
  "key19": "22JkcAoTuuLcwMREyPkzLmVoDXf3jrT2FybUGZB8UpBWQka1Ky5kWcGC9cnmXGmUNmqyNH6EqGsvE4CGpCwW6xSS",
  "key20": "3pa1xXBdPPtKxr2HwqZ7mciZ8DNdWeSfunUdb1E3YcUcXgFcPLzT9BTzTC2ZjD3ixJGpkgTKPgRZAi9vnryDU7hi",
  "key21": "3uqQBCfNkmFZo5f9PvpYcBiVFkRSFksTLWjsBbtVu6J56dh4fh8CFcxT88mckm5aa2ncWey8pn21LqxwBV5SHHDq",
  "key22": "4jKov57TTjJRCvJcn8EKqqJxRRHAyiedKvYnE6aqUqWdygptUohtZrXnopSXEbSaRZNKvG5aNRPzBkGhnLNqEKuc",
  "key23": "2RyBXg7rQF1eyE51Y5uFxMgrPkduTmkmSjU4AUytw4oFtkHwjLVf3RZuNJXikdLJpqAMd4d31rbUsuPxMkBNv1C9",
  "key24": "4EUxZQMTSniaDJainTDEohQyjh3Wsk8y12p4ZiHVid1UYyAbex18tWx3sZnnwkeb3S3FmHkvVPibBpYe668PybAu",
  "key25": "59dckbkCsTF7egiJwbxWKWWVzYD5Mu1jy6ubf87QLQ9dGQHGXRNGwmzJqjiUWoX751saTPNPzfLCr7awxLNws6iZ",
  "key26": "3894UvoEAQKmt6WMLwXqDFwsYT6CjvXV6qTuSMbF5r7WsYSexgpbBb4dtmPnj9f8QdiyCrRF5mavTcxWnqL2J92G",
  "key27": "4bVCjwgnjL5aUyBAgEVfkT7u1bpbrAy3RVQSUN1vMfUATbZ5nyz7rbu2Ek2KJwEZW4vjG3UUp1JpXYWjbpQZT72u",
  "key28": "2pQTsiqRipa99WW8DCgE3df9TAZWFJ86Tv23FHLQDMaFDCj9HYz6w26mPJJHX8b9jA1s81i5Kans6VB4zrqf7zfV",
  "key29": "4sD9ZdXjVoQDk5bLFdV3f9Nd679zkoo8PjMrDh4czVL3YrbgqnDkbLkWnsj2sRqLpTXMnRiLCSSqrE2RxWewCtbM",
  "key30": "3ujacBMCLsogPmzUWimp4wB2kH3YBR4Hn43fgBuKQXMpVZ6tSsPPrEK5bStdyyNMbjGZNYDs7G1L3B1rVUnTLj15",
  "key31": "3cHpKpHQ87BjhpaZrfNsfrhnkT91LJrPoWfjyZegu6ALPMMgeXuGA589MnhKMwBxPkhhaQdcvRcLHdAKUGE66yVT"
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
