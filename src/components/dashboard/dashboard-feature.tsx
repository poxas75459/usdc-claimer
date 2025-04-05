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
    "vf5KTUbgmzKBpxRM5s2zJ2cwKMrYeK61sk6NXxcPXN6f7EqMEoZKLpmeEdL2jxX9wCQDct4KJETscW6qGjmRRLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tmoE7mwK7qYsVWqYFTQpBRRU6X2T8zavzXKLNGSghoYmZiT5e9m8ujczKEWf8wV63ZpFj8k3ySiQvNRdzAQMmoj",
  "key1": "5b1Bd5hVXCwNvoWadjpb2L5decTknhKPVgUUf6myJmxxT8bNaXk6WWEty4CnmgeggDJc5e7U8EkuZHGJadBL5yuA",
  "key2": "5B39feLCdXZWvjFKNMRvbUB57hayd9P99dFSRnPZrwL5a9PJQ84TyUF5QnHLsUiuNJUakmL7KR2qxJoF3EpxUSxo",
  "key3": "xkyoD9Cm9eWP1RLAw2Pfa4GUEyHLy4UPeFG2G1QrduAQBwpZd8Xym8C3HM6P5FYQo6rzyzu2YbvHzLmbVMU9USU",
  "key4": "3NHigeahsLzwdNZB5SMfAqKFk3ea3dBcyzsbBQ6d8Twej5rTkFjSzVvyZsiKmKtgbaX8qBtdB8wA6oYwN5ArE86L",
  "key5": "5nC8Ug7gFQBdqJKwuEqN92BQg3DeGf7J36UTNk7HBGCjYbQNsGT4eFt3drUKQQcNLb6a7Z8vjtVFPGus85UM2LpL",
  "key6": "58YEbLLojrXqvxrXUfkJZsqjxZjD1hdt9EtBPuotut3jLocQauYDTopVDZqJViCHnURyZH4DvMioQ713Fzi5s9gN",
  "key7": "5eyF8vAX2JPfwQTgctAwWFK5FXi2C1iJp3AhPsojnTXE8sir7pDhQqJv5zeFY9V2yWR9fP8Pq8gnwJBSxqDrCzHX",
  "key8": "nBnHJkf7exziNrWnETfYqvAuG4mefCS8SacQ1UBym7yYivGzaskUzURxEFPUUp8yetTLsjfZbawvZSeHPpHEqNX",
  "key9": "xK5i2e3xgA3hv7Kh5YPsT9bArPssaXsCR73vzuXJX5XK8mtxQKjxVhsYGmLDtPYjBHvmdzVh1XCDfzDPf2NCybN",
  "key10": "39ePLiwxj5NeJBzwLUhQDs2K9hEF3Ks8BPx43PrnPs6gBDJS3C6UXb6TaCTB2iiTUTxdN7a1a54ZisQDkd7yvxQN",
  "key11": "5b3h8XWm3vGVMknwEDx5DBWH3Ao1bLSPnmNhg4qSViiCxB51pEMvzwzBxD9pNc7GBTVuFrWAeHaGwrpn7XQVnjS1",
  "key12": "HyefCp7bjGjkg5JP4LUkuzfZ7w338Kr1aaYvp9anbrRRTmQFC1ktMiT6sYvrGSMSGoWD8HfSNQ6xKUCdKgGFaYW",
  "key13": "5w1j52fvwgXAqEgaHCy2zuuBJXX8s5U2n6qgwYLDHgECdkwZzSC2g3tP7Gq2paWNU8hPyVR4pFQJdn3oBZk2fNam",
  "key14": "X9qj2JSj9f9r5cBVh273MSrRrBVE1d9KeAwgqa1d1S9k47wmiXxKwbHRbxGpYeuApyrztdVvNYFQzDncFrc9MmM",
  "key15": "jznWvi4duYYgBoXTRzAERE3H6spi692anfKjsszM6Fw61nvAm7TrmpV55W5v2gJkVMsCYiTdZ4CY4VoN8XaLdBg",
  "key16": "3kkAP4jtiL3KBGJS9SfonZE18myyGEfok5jwyUdenH7yn5MkFK7ti24dXAN9pZBJHv4Aa61M1YZd4B9SU3AiMVMf",
  "key17": "37bKu8SZhS2xkLd942PAVDx5PoBQsRcEV5fBfgmTcV27V7Zu2E4YdZafaMgVZRWgUHK4jD4FbrpaXEu7QsPUcPLT",
  "key18": "4aXRqg7VpF5oqcbUToqPCUpvEPYxnwMyqjo4sd4uMkocuHzT8Uw2p8tTJTzQzsboisWkgf7Ms1ZDPbppS4fBa5HG",
  "key19": "35LghetC7PyVyVqQkkq8DXhBB5iA3wdJZmeiygEBXrLnpo8ZWvPdzx7EPzZMhA2zb8MJH1YHCf6nZvXZkhQcyaDo",
  "key20": "37qbh8YqKTXMvL54hN5f2KHPx8grc6HKXTEvJRRWWEr1TSsJ1n1An82SuLg13Fesa6QtdPyNcMbJ1Eo2WKKyMz2C",
  "key21": "5FHTNsxTcathGsxuvcjkBMBCXCxU2PBdNzw2svSsdvEiFbugGg1P2MzAtLaCCaAoYncvdr6WYtkRv4euC4ULcaHW",
  "key22": "22FJT56Bm8NwrhiEGLzdUmcLHnUYxXJc1nUBhk5wC5k8UNYk81Rf4aihSjHkhnWqbtp9XnAqaLXbyvTVfDmzBhja",
  "key23": "Qwp5rm7r7xVAZre4p2Wkm4LSgEqeQ9YZh1cKsddxRGFVQQLywyhDxQbHfFNvvv1EehDGbD8XDPgYJPsBFkoAUct",
  "key24": "2rcyRhHKkFaRhLTKs5nojsaACWam1owTXLwezfx2ybcDqdT3oQFkLjRwYbJWFUdhhxLQW2w34uBKAdRYUDihhUrM",
  "key25": "4LWsGFJcoHiPCbDQHnL43UU3MoR9iPxBRqTdxZqjod4tFF7dDcFGGbViZxoJqmE7R8VUMyEbjzRJXik36da9G4T8",
  "key26": "3vYLijdjDY2Lz1jA9e6V8cth68ttWzkMLJf8gJ29eS9tAX2hajMEtWChMffmBKbZtHXm71aGGq7PPqM6AVVYPrpz",
  "key27": "5poHLQGgkLXz9zbswxTNZo7ttRfgkrjyiuu9fhrjtvbWM4B4wDLsYsPSk5WUKSfrHRGFgWBkXULKbaRZYD15DQBk",
  "key28": "GAd88ez4gNhwrYfdpDiKPJ6QE4o9EmiG1VqR8rrNZiWYgSZkuHLyU9oKbqUtuFkyuFYDFr7o19GR9UkyZoMBzQK",
  "key29": "55A9qb6xTtAySsySzA5rRd1sTdUPoW8WHzNjGQnmHsQPzBTXXy5P8qXXHo76TmgFqXwAyJZ5uHhGHutzfjgaezdB",
  "key30": "5yBdoqvYgidUDDTqkyAqs4zLj8WZbd9Q5KzcNFSRYLaYqR5fSfipHaM1MPLPU6puQhjtdonXGfFkK2wSLWni99Lj",
  "key31": "5Db2iQxLVXBxR519cS2KGuepz8BuewCBvf6x11GuLKVPCVwoicVMECPJ6FE8ouNXGqhvkTd7BdiKuX8bzFvGCR6U",
  "key32": "3WgRqq1fdYv1bgjwx2wVSGbFgMmbs6Zgn14qG5aP3hCqLHhvi7RywjBwKvf1qeCiLcpcQJhjnWpH1mNQmKC1qTmd",
  "key33": "4i8oymrnh8gfoLTwzvvaurfxwBP26vXi3qudXvFNEqkwDXKe1h6yFAKBoqr2gEKYg8vmuBQCBwffwqkirxJbRUt9",
  "key34": "2GW4vmFxbZY5MQAGZ1b59cMWQeHWTnzXaHZGWEvaJYvZ8XiE7h1hba2TYjSGypEkd1hqtoTxpcKc42W2W2ahquBi",
  "key35": "4GkZesWYFUZaHDSd5CRzu5KMnLuZuUPvjePCSvJRbhXekP39j1nR5yyT9XTbzsG1GZypHdhHR71sHHUCoA1YSRAm",
  "key36": "96ZNb9oq4V59GxAWJQUgkbZZNvaR4CRfxbSTKBqVWkcrSJiNudYg6Rqtnqrr5eR78RtL6kJnjSWLNyZgmtGqdar",
  "key37": "48Vh3e3ueh3FP8CbaAMNv1SandENGw5wH9umgkG4XVpktYWv9imzUx9o6qVxmdRSsPobmWsyuExyb61q5cHb3yR5",
  "key38": "4bxLnQYikzT5sM9udjupbpjnLab4DJKP6hasSR7W9s5N2XjvVHdrm3BcVZWJpT1koUZobwaBPcPHUaiCteJQYHhf",
  "key39": "2h8heSdTPuigxHDNKUoj2bHRJ1Ze3z5Ju3KYwWTTRtdENUyWFhRyLzFRcSEW9SRR5ySJTfZTt4bhRYr4LzGCvMeA",
  "key40": "5v2TKap85VdCo1QLwZfXD4Do78uKPtW31tZrUHJMS1s9LD6rQvQrBaocz2y6drLaMou2fduzAVoM8BNGdQo8hMaf",
  "key41": "pMspYudP9Ud9UtDHrZrJPhWVmnnk1itmSXu5vtUyLRc7Lu9BEmpkCeJAYbFscERzHZzsjifX2RVAkYXA1vGRCrH",
  "key42": "31PiKsti782JryGDsy6pUcSQTnGNBZRTPZy4yp8P3MiaWBmdCiaw636a54Xwo4i4LiqorAYhJptmDwJbn2yb8Jdx",
  "key43": "2qBPTcF8t6Gv3jzLY5NVWhpQqfexqerZ8uSfTDd5sw5qAru7CRgEZCu4aGrnhxyjfc6eXdDoJ8GffWkg9iwo87Jf",
  "key44": "5SvPxjLrMyQcLn3uvQ4tRhnmmWiLs5LfEUYK7ALwsZzKYTGdWqCPHBwAd7j1KP1X145Q4nMQRuu4V6iUr9fr9vBP",
  "key45": "5iU8mRTH36D6wspHm9FNsCatUdWXhTkGedS1hAfYatNkpxYJSEJjaDRkx5DH9LBgCVb6dctTZQU7YadcNygx9huv"
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
