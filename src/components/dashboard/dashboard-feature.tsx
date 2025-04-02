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
    "ndZPR34qhCB2CmFkGuAybJ4AHYRM89LNmasio8avAkNx3ZQuE6DK2Fnsao8ATrfjT6rV8peiYx2phCNMDWXrSVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AuX9CzQhumjRoXYheUBciZo4kt5UbAkb3yzWULhGZq98EaLWxhF822cYeyGtFkLdaNM2fj3Se33N8di1L5ND7st",
  "key1": "5GEoGF3vBrriSpd8ZFEkxzw24yaZyCDNd7LSWrUZb4w9iMYbxcAk4v7wzx7bc354Z8rhPWcedkvDPwaiWck9Gxxr",
  "key2": "5fnzWtDW1XuinAoY7Cr8MPzSeAWnApD7jaDK32mCMhDpFs19fwuRyrtMDoYhKs84y5KhgHDDyJfPPp2vNcXjbnAr",
  "key3": "3qx349VmWsZnhsYGqfAYhanVmdtQJxHghKdYH8SgjHgZdQeJRG86K54R7aWywxK7VZjUntXfCF9YViHXHLv8R9em",
  "key4": "4SYJuMHZ4vBPiVmWcYGatkAxcvdiqnBDs5T6AMYZBFN3n87Ax8xqBVFwR81wJgBDsdrPVi5mvujkRjLu9WfDTFpF",
  "key5": "5KRqxYrH6hxfDq5MBXj6VRfm94ifeoS1VgBqJc5MfLEsmDaJxabcLMsf6Gz6nmRsizMm7ej8Ms8cX4J6mQDQi1gw",
  "key6": "2QH3KqUgnm9F6DCHg2Ga6MZm8Ngqr1Xc8s2Ftay9AM8kJQBCNpm9JqpaeKRpwz5cp4pBgwLTLsGS4mYh5G3t49yc",
  "key7": "2rhnFJ6WKKeQ6Pot5f2nBL84cpEzJF6aGQuFJZMd9JwNWFYHQS2ZUNCYeJYCqpmeY9gW5bxVruTLoYBVLWE5knyD",
  "key8": "5NR26XCxPcCcCGFSdjc8ZAtoA3oZdUD8rRmtGQj3C8XQCYKpN4rMgvqXVsWPSwmUw8X2QiZ8kbK1X5MhosmtijsE",
  "key9": "3Qd8mqhyoHzmY1pavDigdTGwUCDCKKbhbNfKsuvbnr5fVQ3TzowNmYRP9NMPU5Grk4QywUmcCpRd8MukdgU5GSjN",
  "key10": "2SowF2xHNJvtLQ4UvRTg9BpE8YBANyoqC7p8TESucCRMergCfZqkyyPwiuU7NHVjeWryLNfU9CsNQstysWGsv3Wm",
  "key11": "44pRU1ts7e5gnUNLgU9Y1LhgBumb5G1JadjAZZ4QWL1vsfrwJEJsWT5cFH7JK9ae1xN2TJc1wSz5bdWL61pBAbAr",
  "key12": "52UFNwrbYa1wZv5e4oynxbDZTbZgdy3jTrbXz3SQjqqGNPkB76Khk8bRbdqzJJtVUEkqmj9KHb9WbABUA3Ty4dZj",
  "key13": "4zbBpFaoBPLet96VoBPdzmCv515dntx4R6gu2k3uzwNbL8fWJki7fj5zyrZvXZeudVgKi4dZN1Pkw648xagEJewc",
  "key14": "zMc59ucsxpn6dwdYj5kG6PUNJhQpu9XdEAZXUn6b6Nd9rkzqdtreyCWuDAm6BkjtXfwRRfhhuFD6izd9MaA4hFA",
  "key15": "4VB7KKeUDRbpQJSqcrcJ6hXMrCjZQCq7rM69E2JA31Q7TVUukBnp4M4W8idj3AfqDt1bnURB5Qop8ZQpq1Xx7W51",
  "key16": "4967wdWekdUEXWejvseKCgoigyDuRCBZPM5hhYxJRpTkLFwNdq3pyDwhDz4yvPVsdHWaUvETAPn3HKk3fUV4NopW",
  "key17": "3xCRvi6v58ckrz96DsxtdLsCYzK7ba6bJwcjwh9vzyvpXMmaTcU1NJSeD8vCFwghV9oXdWbFZBVgPU4kFXW2UqRg",
  "key18": "4Uig4ZRDRCtGsEMEjf8Zj2No9zKE6cT9wmLeLbB3ggH1RzYMDQoLTqHN6U6tiT4A8fjobABReSm85hrsxmaN2Vh9",
  "key19": "3j84PQyEfDXecSuN9GGrYmGuK72ATnkHkXF6jAwmctKCeMjSGddfRqEEBnz4xNxRUMh5BGtWkwwPsWGgZ8qvkt1b",
  "key20": "3Ud3Psn3bPDWWas125iNjWBs414grwToEZT4nirvDpXguGG1GhV3HUXoHspm7cEX3itsXA8UGzC1BDGxmzzmZg14",
  "key21": "4Gz2oLBNVkBwiDFG67qdYmptqR94JvgGDnBvDuGL8FqEZ67XUAB7VfndDj1m4enjEgjca4FgSLbLo9uB7A9PMeYc",
  "key22": "rbavFSaxMp8pWMwQK9v8Z197rAXhNa2ZcaKPa2jJjh62nmZS3tEwv2K4ugMnxPUUS5rDiQVaBTKp91AAJVKF9zm",
  "key23": "3STHbor9GWcLxmmgFQkD8XsoyydL4gCjvFtPyfHQvTTKCTqfVnWoZdJJ1hFQ1FEBN6xfhBB9pZ5ETJPDytbjcr5j",
  "key24": "3Y9r2YSBHSajKbM43kxvAPCCGejrhnR744jAhMrjcZkfGQHQWzbu4H8wnx3EdwueumYEaxeuRtaNXyDmRTsGFqAu",
  "key25": "3gdQwGicKPRiymFFQDiuqzNx5nLCRoAfTzXK5wi5APdVm6RpG49gqUTxvPLxDTkwCikou6c9S5RcW37LHGU7KKgp",
  "key26": "55zwRX7BeKEPr92muwQFoyks7PWPmZ45Nxr4zeFc9PVzkg97rWcRDcoF7Sq6dWqaBD3QNm65oKPCjETnqkawXxVC",
  "key27": "4QMGwxhdSzRCFbDGewoCCMRzEk23PbahuzkoEGmituTKaPCz35J27z5YxmrDnsfTjS8hpy5WTjZHk7VnbvPj2dQa",
  "key28": "2gzmhwtEM8cKrt9AQbV69ut4ymYwYv819CrqfZt2LmNY8ARLnMk8NdUNxH7fFQ44nMgWTgkELZRgdhoQYBH8Nm4g",
  "key29": "2Dvu7FMBJD2631zQQqKNc2Po4W9Bo1bjoLXWQwAWMmGYtxC8NZXukRizkCKNSBewbpnCLB2j71vX2y7G7wcukYmg",
  "key30": "2BQp2vJPDnKLJpfr6CwT3SrwstwVZ7jVezXDiurtTheDbQxmoBGf7wuE353NaD92nD3wS22HUDMurQuRvKYU8ABM",
  "key31": "qcKth34fvTKuv71qzWQk42zYH7vX2KUhzY5jgQdGxCdWdyuLjUKZpJFprQMP8YdnWAgfA7ggvWQaTY7n3r9Ujn1",
  "key32": "3C4944hJXMEmc6ZsafDtKtPfPaYXHzPJyUdVU4V4aznHFwUY1kkpbou21fVwsyxKn6iUMMtXMXxpydHttzhMiD5F",
  "key33": "3CCgcezvxKUkra6KeoKfQdfBPUANrgaj6VzZq3qUK6k9QXWoZGhRSuWiGaoezsQLhQ5QAagiy9HVR37azhf8HcLv",
  "key34": "4iSqRJM8DjHL8HfrFn2Qu4FqTwM9u5FUgvBNNJsJAwSMBfjwwnGWpeULcJqEao9bi9FVYBpgnyM4f9cSekR3T31z",
  "key35": "cFnUMX7wSQU3U5mkt6bWETGAyfBgXtx1oCT264Dtno8ecBhWh2LoNN4QpqyV5jPjtQSPvGXbiGyfqjciPg6gef9",
  "key36": "2NXJG4BaLkeorxVWgrwyjd6kdUKDVF3D31kYcvgGBcUoSdqUM1KvPCVu7dxSRFqbkxy3iZsDVUwHwv2XHWqAosVo",
  "key37": "3mzZAmV3WNFkcEQ5qCSXzoGifPmeazbaxn2FBzd7mkMjeqdcsTkpNoLYxeCzTN9YPBRxHGxBNeg4coi69i22t8DJ",
  "key38": "4bEibKfxGU3tTMvo9UFtEKpUjWcGb8x4CuNpPqCg5zm2AMCqdVtsCSRF25Zsv44HGMryx1ETTnXX7svGc6mjdfSu",
  "key39": "2J6AbiMbZwVhTqvoRi9cLsVp5VhqyX1xYXRSuYPNBGAScA2E2mTYTe3TPqkv9abVfydsBNyhaN86VJUvVm9RaD8A",
  "key40": "5aRqbvujNs76bsZy6LoQkqLoBk5jVv7V5MLSmKeT48p4X8vuVEZMkUE25orRgGL167cRQGS6peBFq8kFbeemB3z",
  "key41": "n292y2LuSnViNonxQRzRqh6mG276hakf3G8aSuVY8KHiommtWSBAnaiBcqH2ZuZnZg2ULmC5mkfgepi6nHZ6rEY",
  "key42": "5DbVLbTKufZxhW3EQpHQ8PA8uszzz4Go738txQnNg9R9wb8tS24Wqn3x3tANhqbE1niKj8mchKQ9LrKdRVxTTdos",
  "key43": "ntAK55SWBJFKyKhCZGm5jrLzpu97yu1qEv56ZEcqNU8cFqfgMqQDFsAV215ytXSmEofNt2VSZ47SN3FKxxEhAok"
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
