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
    "icaRQBpdrzgmCBCvkprp9civQQkG3BDVxjyW7oV4m961NWEn71AVDHarpMY32VAPoKjYQTq5yQSQjhwnx43YNcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VSTQfU93ABL8M2NywKMJc83g9BUkMnP2ThrxYWNVgZawcDvB3yFpgn9TFbDxvcJYBXuSYBuD9rwhMxtfEy6cNgN",
  "key1": "3GKozEZo1Q6GJMNFqSjjhnV92wnwUFTyyyoZcq2jPBAA57DiQCwxLfaXRvycrdFc67e1XmPFKyJ6FYkMynq12fhY",
  "key2": "5pooMq8fwC3MTi5YcosCBh5hQtSFbvtrY1Q2Pvjp4PLTXY7MMuisWA7rFhGZoRLcvpUy6o57yqUWDEoMRvhfkX9q",
  "key3": "4R9c4rFKTe8tqBgfGX5qJiWfc2KdxaaYPQwzBDRpHqRX8pBAF2syPcCwQ16YQJuMZZBQdk5DVSXeQUKG2UTwXU5i",
  "key4": "6SYih2qUFonbRFfeYAGxAYqfgBaRfgeZuP31Z7TDmn7rCWbSuewQHBguvmBHJ1FWq4jBRphYy8D6PStSTR2uACV",
  "key5": "4o8iEPsM98Wk5ymVR1jJVgPpJpA9ZRLzHkMsmGNVXzooPeaLux268RnEC6HGnbvtU8yBit2ie3Xr2gMqoHTVRPF5",
  "key6": "2d7BjohoqeAeA2wJh9ppbtsC8sexLYNTnRjTbpERGri4kvnc7tX3Xrbo8shJVuJBd9LFh3gTkk6aafYwDb6PA4EQ",
  "key7": "hXo6fHb6wi1pL4dMmJdrMZ6nHyybqYXidbnsMHzvz1rmsWY7jV4hvWqi2kdwNCs4SzihXZJqWiZKU2DWVZspwgy",
  "key8": "5oyaMLfUNnUwyWYrXmKEEy9uCXXG25J2P4R2byaVvHsAUwhCwcvDjX3p9NAZLeeK84K7ahJDBVFCeocpckG26xog",
  "key9": "2iVstJ87JmiJXpuXxr9t5ZDWzHHFzRcgDscnty2gjKfxqVkm2TZpQUG66k2TM7wczkCButUwQPMHbvYtzLb6SZ2w",
  "key10": "3nw3JEvcoDzQpvfq1XB1hSXcP4wpAwJ7z5Rz7Pp8nrv7mik3cgpftdsVKHGTgi7sKNhzYifVPz4TWvnPnPq73MDY",
  "key11": "3vFTR9iUWrB5jJDhnZz74XegLPmhChWqDhP7UQfAU8rYSCVNcT7fn3HJtFUidGxKrkunEgX7VjvJGGVjAwVzVKxG",
  "key12": "2kXd5Du6ZQgEXF79tc2En8yF2cuuEenNADXENGu29cdunBqa8f9fyBsw8FPpEMcZmbgK7C5nHRmUjFY7ztuYWEPf",
  "key13": "2pssGxYHVBxniw1GCiJJFMQq1ZMQ4FETzbxa2i9ue1sQ3XJ8bwn58kYjQmYCXkWqEmWnt3NCZ5E5VN6V4De3mw9b",
  "key14": "5ubbZ87yhQe2di9DvCjP6QopTQBrpq4CrDVijNeJw1jJB6uVnwoon39tyZMpP5ybAzfJnFuReZSKFjuQSUzEufby",
  "key15": "2vJwCXEm9UwbbLKNCSH467fSbcPZMmL9Sp31jECTBYP3ecPSQTs8KB3uCqyk5fmhHqkSQDifwpPBohZFPFxkoT98",
  "key16": "55xKomcFUC8k2LEmk1ZkEo9vhgk1MvW1cpU4v8v563R4QutHUARDWUWK35QWH4NNJz9N9FByf6ayp5vNirY58DTs",
  "key17": "47BM9F3EzGPxLhtzqsLXLub93EaxPacCSd5SZA8kqt2rMCW3qzndFqidqseM8YGVBoAZcjX9B9sEr3Rb1KpqTd2s",
  "key18": "2LtPUNsLLjy6EJsm349zp6qVvQsHaLv1fHQieFLQQ8d2UoAjNAUFJjwkH8nEQ1VSkoCba8jcJW9TsvjWAPbjfVwz",
  "key19": "58Uw7NGzGxyHuUdynye5eruGUnf4ojJ5ikXtcYXm52tRFTNCTUB2DXfoHWRbtBhPBJ8GLi4YC3FpAngKAhTabP5m",
  "key20": "1W8JzjBXN1Uf5ydiFkc8weMGrRntYs6yAS82DtVfiFGt388sgpZbugjyTJf2368W7ntmsSYdkdSPN4UaPm26Dpc",
  "key21": "3Ev3uX8PYg9qoZLEDcTFo8UJtv4bDFAr3GyBr8N85eYFTUNnqPrLGTnMMF6LfkXXqWz55D5o4qD4PpSQ1MFz69hu",
  "key22": "4gks3PLRfEoer1Ki5tHfZYQKYW8yt7W6uN56PHxjqv57rEuvgsswbsev6krLJaqfH8C2H3vrSxvHzUURh4icYW1g",
  "key23": "4jZ8LHKaJtykVvPRufrponcG29VjQCCKUAvP17TUZ7d668ji18wAGgqtyK8Wa8ei9mL8NeBVULarNpKYcJfJXCLt",
  "key24": "3ArryRQu6GqLoz4LSRYJghZJHmcfv2mNrhJRq159zYYaNH8KMFwhTKug7ZbGWWPZJZoD1geZoVmGaKaU4QTz4HB9",
  "key25": "2rZ6Wk33zrsXvuzrck4hQok2A1SJF1tihK47gdFbwbR2Gf9TxkNwJfaRZyPAny9MRzKUURgaibLidG7HWWcU1jUN",
  "key26": "3izqpsuybQqoY6CeKmDXdCCCApHMg4sBqU5FDx762qdF6uVSVpSbJwZ4EVkrug14q66u8P9e8w97g2dmRt2cZx3L",
  "key27": "3gw4mNZeJfuW52RxzznXHzjFSi3XLw3ewLByAF47SS23ZwcQVC7caHpuch1omQUCmMQFMtp9BALDQ1FtN4chhbWQ",
  "key28": "34RwDgaKDHHDL5YJQiRqHKpyFeFtYMLy9LPFJhnRSgSnTdBwAGu2FegHLAjt4sybMeiDFDibTX2WW9m6qYwEwRni",
  "key29": "63PTYqwXksh2U6JjDFdZaJXs6eEc3oWj825kyzBuNPHacWw3nAtiZP22wXcTTUg546wNE37PzP12cZntybSaFU8f",
  "key30": "3UVbXWW69rnoXhCUuwbujLEWApQ1c2z82TTc6DrufLTqyP2QvPbwzomdcqkyBEdfD7tStbCyU3xguDAwWmG4DVUr",
  "key31": "GJ3onJXcv3Rr2oozyCCejh6GpAGGfr5SA3YRiSBmQ1gDR3TerNKBqhFuaA3wuNwBNCJtjpvbvtWpq2nJBvK3nF2",
  "key32": "3QHrP7qCRMXgUrE9NZDbMD9KRGnbr1kZGvMDD7rA5qE7eKf4DCTR1nADf1uU7yMZ33jQWHNwP1D9bVidLgA1id94",
  "key33": "3w45Sqa2sydhWkmvwC7JX1iUtx62FZ1Gzs9rSAGVhh8XYcMEZozB6cqaF4f3Y1piYtyc5tEd1GUfyqb15VwEqqB6",
  "key34": "2iDXqMiwDrqhKHs4BtT4V6MGXDqYtddrT7X6CALDUCwjeC7h2etsv4e3KLNs4UauAaBjjZqTHFKqDKv3RCdcdP4X",
  "key35": "4svpR55yyoKdaKsdMhPq2FwvFYYdaJBS6t4iVmfLWZgSvmhuPaNipXH9uXzHMMmRW41iyH1yTxr8EW1V4VrjGdbp",
  "key36": "nbBkWH1qqAe5aPbipEA5QL5rzeLikEpZgRxVPFtWXbQwA8TEd8k2V7ZxMwvj2uEh7zawCMmVsqr6H4zVx7FPT5R",
  "key37": "2TR7HyEg2HrBswHYRsbkNfDQKydo4fw7hscHqok1K7mcSTCfFuV8q9iGVfGcYZaUkp91d8gH3M7qp45vQKKTSDDu",
  "key38": "XtReKP2sXEgYbETrKtgau1J2GRwC6uA1MRUusSsJ2J3H4G1H2sWiUnxSEBnGYh6h77X7dF3ut7wohTN9hG76A2F",
  "key39": "2xs5tMdfPz2YzC3FQugqjihEEGwxLp9qbQ9oQhkYB7Zrnjb6ZbzCUKuxTqZnRqFGVgwrkeu2ogobuxZvUGA1VYbw",
  "key40": "5egkmK2g9w6s3wokniQcp684vhEPkuiQn4UQwLbFRX8htreV6KPDFNm7tsA6vcv7WqrJ1mLSGvmp8NXbKYaX1wbM",
  "key41": "42iRouWvHfkp8sPHcuGQZNR8c7iFT9u4bUggeW3BzAf5jsAsu3aTZ4cybVcJm6bWuXZzrLsrrncLc3C5rVyZjXmp",
  "key42": "GJ41o3XRJUX9BixVwYz5EvXeF8u5iyGowjpPQJA2yFMxGN6UsU5HGtnPmmCTCUJYsYsuMAdTqeYg9yMDqtEcTZm",
  "key43": "4VgpbNN59MW9mfDaNfXUBDZNhXiNNcPY3SqQDX5PiQHiCD6CwZs4i9mXFpsVX4q5tC84UBX3LGEn6qjzn7hFxpRb",
  "key44": "4YdTqPjnC9CMQJPrzhTMpobuG15go5mceKWJJZ4YxBuEmDR3gVdtWaZ4Hwph2Nk5Vqh6T7pX7ZTvkHp4xe9SPh9g",
  "key45": "zhz5JY1QoD9amHkDigiDJJMEW9mB6W87x3f3Q8uKZNjnUvy5HzuSJg95ZhnxjBSCnL6fBuVPaCpgaksiabaFQ83"
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
