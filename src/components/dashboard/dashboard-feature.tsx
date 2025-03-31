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
    "2Jyyq6pAtPm9CkLzFFwZjJvYbtfGh3Cg1CVoBUfwHiKi39TgwGPXy1SsFhnES11TmUcBsm58mz6T9GiU5KoBPbYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tv6hFfLJS4xFLD415ttFzAryVbmVK9PH832XLPWhAphBJZV3BWAYttjzVjcw3PFDAtC1otTzEpdUcvzWmnCyKSk",
  "key1": "4PNBM5PLfc94fkxQBynF4zchCd2upAr4nZsWX2G925DWRdHDzANePzvYdzbGfB6cVZGGLTrr1qoYfapEWM7cBP6T",
  "key2": "5e648pCBQzLc4LVY1jkDAPPndonXzPRa53XozCvzzkUMVi4s7M83WSjpUyTxswyKcgT8f2zS11CSAWB3WuxiUKdg",
  "key3": "5esxZqFU1tkMvEBhC4d5Q9H3NJadpnBQsKdxZWjz4MHKasHBrsKkyudZ6R7vJXAYFyMfbYhw3zmXBvcwHo9v27Jd",
  "key4": "42Bm5jda1sc5ksHaD8WJvW9jUjSP33iK1YVTt5Cvt2AodHsRJxW9BwZXLyJ5ES5SfdLXPJ9xNtR3Rg65tcJipaBT",
  "key5": "52prU8A7NVFa5DDoqfrudMw9wiNWDdTMDbhMwy4yiuVYtBtwY8Ma1M7ZZtqe5fCrErZXZEPgMxXwN6ckoBvz37A8",
  "key6": "5132eospTq6dB4akvh3ZaWUgNXwn3yYmTrvCeaHgHqzZpdijtrEgv6HCZfqgsuYH3gkt6ZBhPERxnowYRLJKYCWD",
  "key7": "2UssmmJVpsDnKf71ocPtpYagh6aMovQJJ4CzxEyLqJwa53RaSm3MMe13AiTFjwvehSGcHKQkB94FtGAJQYRCByAJ",
  "key8": "YBcJn1g6i2FAyZtrChgn8qym7bXHcLuKQL9Fgv3nGW6Ath8q49XQZfmwL4oXAAuTWgxCG8PqGVXQ3jSseY7YUci",
  "key9": "4Bo8ZGVyVsUT9BppZf68uwAnhztFXWo8pXCHPrTaXTQixQr6YDcCYrJifgNmb26z7N18SUD3zpPzc5cFRdx7EmyE",
  "key10": "65DriLs3iWZs5PDkZhctapLXUxtENxWZZbqpfznkky3X6YdRy3ZmYarxUTXxLkkTKxFwTXnVER7j87VL4tykBTcD",
  "key11": "3U4qLXkEHhb4C2SdwUEkPQ9poK79d3oVYMWwotyMHMHNfAVhbVR7bS4TaG65rRZLPJ3TJpxpqoteJfWFKiB8bDw8",
  "key12": "5KJB3xYiCjVP2wihkpJVdCY34CL13vZXkXdLnUGKPxiEz4coUvzPNqDKWKeLDCBEcLCVvwHrGGvCKUzsBkx5MtsE",
  "key13": "iXBrHyi3FGUVkYHFkVhgt5DnEYniSU6J3VizwWvoY9ivLdL5kzNEztUTgFHKWLuwh3yEFteLECiLCS7cnU4rxaC",
  "key14": "3DMD6u5DxyvFvLGP98UsxjnjdcVDtEMdVni6B2awMmKUEu8YQb1QTrdJxgAHiLu4rCMD2uU55qWkHTUNvQZbCPL6",
  "key15": "4D3a45xEWAV23fNXtJgwKFTe5XrH36KX4DoNPhrdwzQdTbv8FcMCsuCNnLtfwbE85bgWuwsnCMriaux6QDFdmrvU",
  "key16": "5ptvk5tKH7XvrJAJR99FobG6GFahLEj6Pi35PAYVn72E8tZ3dJGYTZVkwwRNUdwkea176dAMFfJ1UsfZ5sAmaxsk",
  "key17": "5jZrCqmKRr1DPM2WCuKX6G8ZsQTKnx6jZoREceQWcu3JYTwxKHwrmUCHM4UbdcwyMmj1vurLR4Bp74L2QNPVdAJ4",
  "key18": "3oRoJkUmiUyGKd9XtxU7ZddtQF2t1WEcuwLVChBqhG8q9Th3KXx73VrQgdzZYGv3thrVdwmBugBc2a3U7hcsHkka",
  "key19": "33c5bBAzo8FhiuiNCyUActQk2YqS7fXM1cp17LDfK9n9Ss7tzLAaEgykKGgW4pBSHv9d5o9j2gUng24iZtiXxPpe",
  "key20": "3YtjiQvYimbxUAddNqmQLfxSdjs9jvwSTfCkRyVmaPSh73sLxUFQQ4siopLrSzZeUvVTgKbiG2oona7mcXTBVUNq",
  "key21": "2abJyMkbbEYwt8MBHdsEWoCN6FThvizGBimRq3EB6udZEST5UPEgFzvBPkv8qVRPb3GssQmQjL5stNf6Bxs4RZiF",
  "key22": "4Dix7XutxyxRL9tW7VzV2nowb5Yb95Ui5trgt4Gvicgxds4DXWPbMRNrnjJ4Sn5ZhEZnnQwBqyNxQeL3AHvnBpu9",
  "key23": "2kuDGhmMHqdtAyy9YLcxDSEFpsMRHDXBnSmABQG2jxe1Z74NUczMDhprYezihY5hxjKUvpBr1JY5djpC1rLo8aZz",
  "key24": "3d9VWbYMHuKVcoqG26NNyjtg4evsp8LvwF4smzA8ZpH62MJKgxP7wZu6G3LnExzDumzcGMAdq7U1cD2GWDHgRAs3",
  "key25": "62Nygf7dJQK6QByKYQ9dWPbkvvvLakzFAmY2xqUGMPuGFwcCob67ZC5i5kuvKiYECiEwvcgnaaGBLVLHLKe7w3bR",
  "key26": "kgcfAEtM74xSjovG2RpMhwSZ4LFxYGfQf5xotDP9BQ7svdHkoLHoeq5boBXLc68cNULYmdVD5pRJEUJachUoHvh",
  "key27": "5qZFkvmgNNzj7xF2eigSeKKQdjcjQcXM96EGm6Z8NyV6wsQeqv9ECEgZ5Tcz4S4c9TGocA7GR4u8nNacPX2AZpnu",
  "key28": "3F3YBn8XkxiSEkCXbqKeF31vaWsmGdQEaEdAST9GznQzq8MhQmwXvp9shBYMq9UoMR5QZTFNcQmYQNiUJZaa5yi7",
  "key29": "3tB22agkEAAo1i1g1kRFgnymGetcLXTJWGzkchrCjxNF5xx7SCDeMxhnoXmtvHY9SQFUZGFeWu6aZc1NB3ZpiLXc",
  "key30": "YncpFJ64nNKudTz4UPNg5eEj5PeqU8sFoMzxkiwvmFqX9oTjRLiD9A5PEj8xr36KvtVR5yKnT5Gz3CEezGEhaRa",
  "key31": "5ahHrd2a18kSFAhDZ6jYVBUyHLkWi7QyYdn87EsdwBzZA9LMH7NF3WsdzGRuQbfbmQRRs15hte6ZE29fuTJYEQ6d",
  "key32": "4LRBTBvvqgxcW9RRAKChmNhHnP6SgdApjJGBo5SYYFxLCvKXtK4Vib98aVc6AvRNkL1c7guPixXnwaubdjZMEMw1",
  "key33": "uw4yWa9pTfbvB57BNDr2hgVQCyGGVpKqk8VWKsXt6FNejrKqUZebGggJ964NEQv8LwSCxN5J2QZjREXow1a5gS8",
  "key34": "3fqzEogh5qs6jRyq3fHtvnmqRyVzieZ3JhG4inpF9pNyrWdvS29p9rpvH1hTw1XsG51FbJK3sUnYtacStw5tcR3b",
  "key35": "34kz66eR2VhWeTMPaHWuBbCfNEqmRUctjRzhZBgw1jUf6Fii6bUCag8oAMigZ84MU7ddWBbqkZtrLtzW8QXSWAMK",
  "key36": "mfDaLGsm1wgKNbRVJxh3mGhVHGtrXuPJiUmEmpz4cyYmJgWe8c6sWSeXtsk8GeNJHrzmiBJUdhwTWLJKCTG5LPu",
  "key37": "2wig8GTDC6ip5oUgaAt9HU6gTY4NJb3a945n5URBGHdDmY1sNbvPeFHzFEcqsaqw5AFBTCeU9r2mQfed9J1NgB6s",
  "key38": "gsEWk6ucGxfrXJ8cLxwuvk6ZeoPDX1FRJbsiubujg3CdJt8mSGJwUrs5oLM2LCQ1jUbGY1aSVdkimjnRVHyXZko",
  "key39": "5AWtF1pzCGPmUEokhHgRLWB5KmrnG5qFdFhNS2zouZUhvztwCdzPLRiRgF9DWCknqN5qseo1Ak3YVN3FEuhteTyB",
  "key40": "jAEMwS1xcDAe8W3avTTBw3QR4J3W4khk3pf59ATMjT7iEPNP4jJiFVCe8nYxvd59XhZ6BSuu8T6SeNo6GWvjhLX",
  "key41": "5sXiuCdqGd5mFEFSWb9CB1AcY5g5CRAwXHDrbiCjZRVZGtWs7NXxbLrzkcNy821na2SKyuAcwYX11cLDSQTFT2QJ",
  "key42": "2vaWuLgzB9khmvJeh3LXcLbkDdYUrMo8n6LX385RfmoaQQmgpE1ZZaW4Ur1iSWEFT8JucgDUU3BUkQSKDMgfcK8V",
  "key43": "jczdS61NuoyEek8NJY41yghRggFqqMAMVqDk5XLMxfz8DY12BK6tjm25XvXfevj4uuErwfGFa8oYYi9HC9ngSFe"
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
