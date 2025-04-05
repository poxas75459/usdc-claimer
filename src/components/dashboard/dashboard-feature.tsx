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
    "21gub1BGk3EcjedM1aCC7mvZEyaDjzGJGE61En5C1gJHGRfkky8X52K7AR8PVBh2bkVar8eBXEgNqZV3otoKVgnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fNfo2SKwaXsPgWmp5exj7wvUNCjqP2FtoTPVhXo677TkVJVMoU4Q3WkHaY6SWmEVSqdpGkbEswSCsh4CnTEVh3C",
  "key1": "4ECYAMhPykcATww4HBUh2JjB9XNkzhv3wAFuCg9DMyFUi6VEdZFKjAjq59rh4h1xcQYuajqovk3HHtU5tyzfsJwQ",
  "key2": "3Q8xpvNBf1hsKTGTPQgSmU54PzuBDYLZ7Foy8MPmwtEsTUYnMPQkcTu1odnxWSvbiqkNFwpcLoMBqajJ1wzNMeri",
  "key3": "3FpuW9xbvcdfNAwtmzHnVN7BAcX8UPbgQEgcrgTtrfmroGiFnyGQnYy8zWJ6H1BkZGDD8VPhLSFHtB4G6iPBrVLX",
  "key4": "2Drv483mV4hEFNCeLtzGc8FWVTPz8tQJxEGxn8Dzz8TZitPzqQ8bxZLBAkNhucBvNqbZJq6trJM3QdCg8Yf7RCc2",
  "key5": "5cLaXEor7DCezfc7Cws2LUXHFDmMkmARkHAXXucSXcCng9BzymY6JhjWyZpfedK7N7Foh23fZmANHtQRVGxeZLwn",
  "key6": "5iVXcU92fTYFntUCjf7TH7xvYdS9UAC3mcFw8XyXfeWkdHWHY5SzTKKFVMobCotzfSLHf4rRApUCXm4jwuHwSsB3",
  "key7": "3U3pxyeXWFPvvrr8hm6EqfW1RWtXnX6KcyA8zQrhtfXpTsS6HsLtiGeapJ6v6hZwjucNdnoC5vdcFa9jpVNAU6np",
  "key8": "ige9xnprJuXBWx61Tk5TewL88Eef1vGXxTJVYp5NNAMwKR2bjZQ6wqAHX2PhCQ7vjHtgNvJQcGhdcX7Az56eBrH",
  "key9": "5f7xy2SGHpqhSUQtdnd1EKf87SNpGv2K7NZh9rHskzV35mg9z3EhvDBK596gY4w1WFxGG6a1E9QrXrY9Qz3ZfQTC",
  "key10": "4fu49DcP5GHWNSYYTopdk9jA4RcK484Lt87FcUaLLwAAqJzpqtQVB4XNLWgErDaYtp8Q3ZQkj7ZjS2a2SVMSviQg",
  "key11": "5ZCHCyTjdUUk64xmcd8dKx3AWYm17fgLARvtrAtC6A7j8g3XkpKxzCySSKqQ6UPi5zxRxRfUrKHyjoiziyPtqVNP",
  "key12": "PSLTToSvp19hen5NPPB3Ucgrg2agdXM4mCziC5BTCTAAdjKQXTdajGJHGAfJkFZPW8VPwamnaUWLpdEk1YZDz7q",
  "key13": "4pxRuy2rCDXvWkE5dFpFqfjtrH3SpLvD3f4Cp2rMy29hSooYBLAQ4pud4tX3YRGnqv3B1GGtVRY7qtdjyZ18WFit",
  "key14": "2Dh2ojXNAXZDXFzqXTirupMFSMhteh7ofowN4b9RxsnknGda39b9dFqohwGw8oYcaziqRSeS2NQmbv6r5183BvXv",
  "key15": "52KX4hdzwQgWW8pKHsXAjCPC9pZ4rLtsL73XHvwawHCS5AYWBoXox9Kwr9x41wod5EaX5jNm5Bk38gCL6XHkv1nx",
  "key16": "5oyjt9mQis8Za9h2ChENdcGbX4HREnb29WQuazcSnxMJdWJfU4fsqbWKC3ZDC4qAvUisAiz9VasFL14JmCzesssb",
  "key17": "4KWsFCPZbEo1NBpBu7xqEgjn4o8ccvE2gVWusdpX6AdHMEFueegmDYPv4c3qr74pHSbGdNBpF9TUcL7g2aufyfko",
  "key18": "24LLMLVVdAWR9tSS87T1NrKA8eP3M83S48rgxwUz2Lhb1nJYgLoPJPGgewvgz3AaRAtM3trNnuLUy6jpLonHSVLE",
  "key19": "4SF33fQftcr1yRiRWs7WcLg9R6YPdxi3ndhd1gYpBJmTVyFoFXvnA4pwgPGadimyKex8ZxHMzjCmjFpgF8eQEKq5",
  "key20": "4gJVR8tj1nFGhVz8Sibg6ePhergvMbUsEZsYmdnNi6fgUmdSYEm4ZiP4JYxwovd4GcxkLU7Q4rME8GWAiQcgAK7t",
  "key21": "5Y7viZhnFAbgzaFrrvQp4yvEQi1nGwV7k79ZLZJcbyV7Tas4er8Yn3oi9LQHSwitk3q4JVNqcFTDzZJf7pqRqQn6",
  "key22": "4KVEe4qQrKkh1ffHHHRU2Q2S23YccLJ3psWuQkpHPJSLrw3HkGvNzBKiNnWMUWQaNCGxNzqQCEXh3GpXgFomAU9D",
  "key23": "3rFLUH3UfGGi34PwnTATr3gXLZdA29UwJNyirTxz2b8kBmjDaGt4pJodKzUyipRTg4ysmzVCLdq8GpFMoiEMnLE9",
  "key24": "42vvBErsZcDtZPxjcooERrXfSJQfQ3KfHoSGtfKEVankQ778B6QExg6DxJFvcPScgYrprYEQigc1f2fAwBH3xM7M",
  "key25": "4DMJaYjb5J1KakAcs2xpfCT1xw6FXYPP9JskZUK92ZQyjvrHAoXv7h8VdqktCLb9UoCPjw4rMymWj3JAtkmuz2TE"
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
