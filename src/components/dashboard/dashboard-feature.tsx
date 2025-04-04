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
    "2KWGQZqWg5z48ESEPsCbvzr63u9uBxgmjFXBWo5ksoWib5B12poFMwvugQGnSiFDnzUZvguqMKLTdtYuLtdnbbtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M8iTArViyAGkeXqosTAbcZCmVDhEcarKTcMr4Fy68vykYUCUrXecJigZcFitU58iMPAsmgTchn46WxrWNVwmq6e",
  "key1": "5DgvWNRTgy25FqYtYgnnELiomTuHbZM1WszUiSsH8UJbXzAxQuZSjNtwAehrv28udfuKFYwjHpojyaTLwaH9tHo7",
  "key2": "HCQ6xvTFQfPzbYtMEoRQsp852vZr3vuk2NeZdq453wpmFyM44bGMr9JuSY4fCX6WseSUwfxEMrq7CS3kkU8Dg62",
  "key3": "YehGRUwpWgwcmxQyGJWHoA7jFwBzCSv8DxHuRPHSRCYvj5jX3SH1fBuXPQkk6QW9VwcWCvMz72PEafmwcJfTeW4",
  "key4": "333FiVRsCtnmaRYPTBnumncguwjP5tXi6yo2tohTvSqKY3KKVsMyFAwzsj53ifesUYiEbc77uFQgGfuSQm1UJLKa",
  "key5": "4FuoEn7JUzhiBETia11jZKCYA5RpL7oZarJCBhZbUuNE99Gnskj1XQsR7L5x3UuVTbft3ymGduC5nYa2eUAx5UFw",
  "key6": "2uikf4nbrvbLT46kPh6Dvkoqq8e7LQuviuo4buSrM3UPqvkBzmvoTaBAduRBvxTswWxmqf2GA8Q1kG3TWg2jmMUX",
  "key7": "3GmrWRYztDUgYQytLQUPuFDoh2jqDvLf5yMNtwQ2d9BgNVaVbajPp4mLgggR9awFKjL6beXcjkTYTj9vYLShArTF",
  "key8": "31WDTFP96HUtusYTiwWeF8kQpxp5Wu9z2wfAYbJuTuvjhyrDf9AwMiLkZ7aryX9Zfc1ufe3gXZ5q94di48FwqWyG",
  "key9": "3RA7zdcBJpiX482CAUK2iRMmZUSDejnRKT9Zj7ofp8DaXtuEPBuTzhY3G5YYr1CsLcBptXhoLWSdCcBaaYJNzsnx",
  "key10": "3DtC8PiLy3Nr78cds1uxC67oaCpazCpmMQhYVz2KC9AL9sEJF13XgJFG2TQnJxv7CSoYuGc4QjbeUkq77Z8GSEbu",
  "key11": "3WNugzNukFLEarEpvnHmwkpoUGsXboCXEhaRzYGGNpfLVnVsvMQhkzVoTxCQhmE6K2MqgoeQ1diirWLTimyQT7np",
  "key12": "54p37GzzqxfAYNV5Z2BZ1TY94sY9QTJiAd98jmXoUisPEDrbFb6Qy3BkyLona79CsNSNNBiW1PVHXBe6PTESXH2j",
  "key13": "2kPCVP9tueU6BLBNYHBvZYm8cR6MkYbeKAqUBThRb41FDEM4ua213rXoDqiZLKWvt9G1qvgD8jmYFbkVLfBn2Hb2",
  "key14": "47yJ8qSNfURJyfLm4fTeBUGH9KqGXqmc2zrbzgwpri37LjqtnSjWcdNvhgJ3odZaQaVTfwL5efCZewB6VZU5pVVW",
  "key15": "icKnoT9zhdSN8bFwiPnTNK7mmmjth9E8ADucH6csejQP6Y87cZqEytKKZXqFS3SVqu9NFAcZXqZkvFLZPrn6tnE",
  "key16": "4viWkWhzSrtf4o8hWYsYMzAZsaxpsoZWX4XsFE4FRuwt9bXTSgbhjuwWDdcaP3Wgmwnfw4bvtpauB4ajKgBtDVhM",
  "key17": "4VWF4Lh6n15hivsK9K3NgGtWka4M647E1rJfCBchZRWLv3koG1fyZFmWVa26XF3PJskKpbbURwbcTTqmtZFdXz8P",
  "key18": "4aAXhPNpC3HjwmnXwTs4S7GTF51KH1Use8z82dMEVQL6xyjbnjsYuMCVezxsngtiXjWbWeTM9ApbXavyPRGwCCbc",
  "key19": "3vSUJUUFBLatfSJpjv27r1Yrp3ysKbbFJepfgVzuUNLcPKw2XD6CQL5rhHXzrCjiAYnaCXQCWh9AnXshixBh4AEc",
  "key20": "5beTTzSL2jYhqobJjh6vQ93Y5ihm1h9ZwBYbXQ9yThhSeYD2EJi9w7JXfTxmmEjhrkjUGExmHvUwF9Sg4SjBg77F",
  "key21": "5zp2f1sKPjU7ia4CbFK5SJT438MLxGW6gKcHH8GUvXPXq4TGYfzyaW3inA21ST2DfHsCW7XpofuVk49WbvTogzKq",
  "key22": "2jVpj3j5MirqJ8ai5kbbbXLte9SsevHNH3rUwFKRV1yMS3C48w8mjM6sjm2oDFTd3KPiYBBzE4o4iNrVGHpWkUi7",
  "key23": "4kds9F3QbaUfXMbhQ2fvDZcP5cdYCcWXzZhoiMGdzZhZzBgPikjBX856p1L5eFLN5dLyiNomBpbLm7M7wktfKKeG",
  "key24": "3kSyKSHQ5jpDgbx9TDZjLLmAjarhsQyZGnbWcoSenWsnXxwFCzhk52yMQimwuB8F89Jvtt8XUDLS5yPigXoGPoMH",
  "key25": "3i4ycKTqVd4eU9kCVWEUVxiz3feBas6Fxcc3gbvZT5fb6JHB5zEQ7dCk9UFDcpdtpFw2kTUGSfEHhEAbqnCnzntW",
  "key26": "3gQVHbySNja3tJ8FSBCNV2UnWf3KsNDo5dppD8bbdGFn5bFY3F4w6Au1je3GHss9qJcTWaaJs76y2qWevVEbqddu",
  "key27": "xsXSyiUVdBguS4PLzzkgYcYvDH5QVEQvR33G2Gv1y3qANhEFzQezznLtnNA5JejqcA996gLiy4vrZByJtuLpedm",
  "key28": "2naw24QfrcwKV19qkvJEN7oLXU6tJEfk4ghmiEXnZq1fCxQy3q4L5mZa3ZtsRpDwtyeL5983hU4EgHwzZJdujBwv",
  "key29": "4b1njNiT2NPZzRNqrsvkr3Kf39dHpwteDtVknSZobkMnj1562i8duok7VdH9Aycxfyi83baVGonrX5kDc61XqhWS",
  "key30": "4BuG4yBoNy5jYfUyj5bWWkpUzgdvBZTLWPPCjeLcDa9TppBondWWBELv6xu8YKoEbyRaTKsTMPhqQK7H4Q1tdJTc",
  "key31": "5ugaDWu3TBssx2C7Q4GQHDk7UBoiWh89adF5Sdifa8qDRwp8nnd45muAbSNLNxW5gKrAymJaLxdcFkXGGRLUKHcc",
  "key32": "4hdnpfo1A1txNzrjDvpCLw8xaWKaDkuyjTVD3bW7C7t8yZkQUwFske1KmRprBkcYPtQZAs3qoUctaRxqivH8VVX7"
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
