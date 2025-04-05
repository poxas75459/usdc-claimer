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
    "3jmxL7oWZKaA6JZRT9zYQoNMkDM54iDvx7JyamhAcYfice1iy8bz2KQVd2Z3vHopJDwJKCbD8cWeXQGhevBiqvHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TbetXASb7ChTE6MjU8aVTYgMF4BAj4Zd7Fcxe6SUAn8NdP2KNtUwnBwVS5Rh7rok4HHAsg3QqQwXqoT5ScfHqmm",
  "key1": "2PLWi3z4zMVMVL9WYcK62KFRc3zcoFdUMKGZDVGkyDDjwPkxxmiHBEm1i4rpP9RmNGtdhkAkyJhwdWzxQEwvRp5J",
  "key2": "4fEAEuUk5MPyMYhwcHstW42gXnh2xdXXUBTg8zNRczzrLKxPnGESPvW19SPYFYurj5QVTcjTJUtJmgP7NjTGUJZs",
  "key3": "2uuxreRVh6DmxKEwJK9eF8gACX7ZzpKkoo12sCSiUwbQtpn7iQiNbDQJuTdoxmVquGnRNPipPtGguS2Aek4ZGEXQ",
  "key4": "2eDwF66JWWtE4HZr612ziLQZzVGoFvw2PiSWhbHxxkeD81MQioETQoUMpNcBk7SKUKt5RuQXihmxvcvre6gDB4E5",
  "key5": "2D7UdXA4F7eq8da8ijrDRDTK6JBxykxjCHXKw8eXdNNdZh47WE3EQhhNBRysnH3ejXpqpMVvUnoBZzC9bbgug8jD",
  "key6": "5ZdqgrmmjgTsYeRwUABNxXPz3bHX5hsTo7Uffz4XX1jDuiZgJbAZbYDpodknW2qqUzqdUNWyat6GcLP5pLaumKDx",
  "key7": "CqRhpoCFdZNChPHNYTcvhXsj972RXZzBxDmctPQMWWdTVZB3NAmuXKB8BDeCifaMRto3TCdTnEMVL1Bezca1Up4",
  "key8": "C3Mky1zhievTxtPPpCts1Zm9GpbcKj7Y8LoP1KhxVFmWK8NZRrnEbifKE2ZD3VLgQRNvSuu6NMuwHQ1AWNL4R3W",
  "key9": "3s2TwHsq3ZVyBcXopYuA8bNqAxKJi9gSaJdB7tPnop2BLEXZDQSn3wGxpf7cV5pFHVMMpXhSgobv5hN7WjhnLXqL",
  "key10": "4BB8iunR1pJo7oeFnHw1Jk7LWk2SWm58CCdnouC73De54R34LDLTnpFDRRPwPAy44EVAX6L6dkfZ8JLvHFBZQ3jj",
  "key11": "zgdrtKTP1NjWRgsGsydSYf3s7G4kDLBorKEGDRakbcwPF6m4VwGfUQ59ud3uu2Ude6zq2q4pvE3tTCQfATHadn5",
  "key12": "5ecJDdoPtE7RuL5CuzAXT33wiQ1MaaVhXkEUfoYqJ688vsZBGzmvwrrF6fcoDVk9gXSVDeS2A16K9Vb62hunS33Z",
  "key13": "448E9Qa7MNRVbmJ1d4QcfHfMc2my7aTtP2uRKinkD44hku4QwP4a5v2i5qAxnsYH7ZxyBrMzBfP5wMkqMVBRN3XB",
  "key14": "5dVAau3k9i7XrfnrSGNMzzyZXrBKWh5CD8c2b8ZoYtLLcn7AnK9cNA4kcwZHa2j8jdovAB1X6nt51JLVQ9CzSKxL",
  "key15": "3jJAj2h7LDboKcmiGnxoB6vuTqcNipMwKf2mFhCoHjFExVr2Ccaccq8FhTsfpQrp1xTY3y7C4LD3M367nsjVJeJD",
  "key16": "4rhirx9Zh2SSDAEM9peMENapUVsRTVeTVB9MUFL9sKHj8eSpHGh7CUSCcdsBppazTeX64BLejMADR78VLTCrDaxk",
  "key17": "4gtVarmmGFGkKGcFLMmBSKanndmqhTFBkQ7gKbRiDvuUN2LwsZbEfTxatahq5C8BrKBCRAnoKRXREUApqzgj2LtX",
  "key18": "5hF3BHW9i1hrbSUo39hz4zVw8hPV5NZqyeypKfHZhVAsX5iyPXwLhmKnkaq5cwYzWfPuY3P8tLWe7vucKvin3q37",
  "key19": "4n9G1EMSdU9ah8NGFBNwZ8yLczDha7H2iAzGZagXwKUiGU8VPpSmTcb97r4rYqVThTrbYuMnqqS5NHrkNTQtk2HG",
  "key20": "xA3PPMZM9NvbNqSCodpHjVL1ygWT579Qgb6JWo5pUTRm34girDjT7mBRh7t8kWb3BJZ8PZUwh9dbLyxaBUAgLRP",
  "key21": "62ArHd2gm6HKi78FJsrBwzsvQoo5vMBE7rm2UTM2A36GWtEoeHeMBbALvvuiuWQNMcvinf1sszucm3rch9CTFjWM",
  "key22": "5spz8hERdBCao66wEhwEFgkjDtzckitcG2QMFizHxQeWJhqjmZM9xtCiPjSmtK12yLi6n2VFEpbwU1kTeCcDXNwr",
  "key23": "4yWcSTiiT1gHRn6MeWVVnH7Xfo6tkdMX3DSCiczHevrzAQfELsKE4tYAk1sTR7BuNiUY7DdiZMfUFnTV2CxoUmoc",
  "key24": "jpRamizB5WJC1LtKf46z4pRRBN7SkdCKR1NZYfN9KhjnPKxqbg3khaqYJsFHVtGpFLt4souTc8mPqDm1iPw6kG9",
  "key25": "DyTcJva5uTPLjxV3cXVQ9PQMrYpuE7ZdoWzFs3e2G2e9UUTprVnW4ufHbCdJYgqYSn248JkCPiZ2WjmhfXVG6v7",
  "key26": "4Ex4o5VtyQcsFrzryb1jiWvRu18Lb8RrThPbd3KAeyFioHoz4JiRnssTBtASJZSUCNdHihWbxcDz2wtoDrifsTaZ",
  "key27": "3q3jm7HxWMZK2MaSRLo6xgo5GgKZdCvP8bCv8SmgwkgvUddFVZ7ejQJsj1NzZd49bbkVUaHN6Q17GaWfz3zhne4W",
  "key28": "3TWd5o6pEnGAL2cCQv1NhXUTNGf4E8acY22P5g5PiY4zsrF95NvA8yYgjBheo4hfGdFfqG1cwtRzjieWetU6SMzs",
  "key29": "2Gb7MNq97T1HCjsLFynwsZos2hPt6Euwk8Rp8Kjxvx9Y9YbH4UkG6hG7D3i2qCXVzwjJuhLqsYJo69iWbxs7e4DR",
  "key30": "HDELYqp64y6sgYYGmfpzxXVuCbCA2HjD4YTrki65gs1tRDQeaoRqNyw6tsWsuit6PpNGmCosU8a6yZ3WoEjtNhJ",
  "key31": "5HrFznezndfoearmo3UvZKtUGi1HCkqo34EQMc39ejzMkeVKsthF7EGEKDNgsfu8dN9676khWjyh2eEFb1mUfANZ",
  "key32": "5weqFyTrA2G1fnexWinunWCuks9Tb3egt5JeXYAtBgmRFpkdeNwStcYZPAsZGQSVze4gJQU4ZkH8HwpCBmGnb9pE",
  "key33": "5cKm9p3VYQhKVJ1LCmLkPnUEpThwonsoijHJoAfhp3Nvbe4AfJjxRu5K1aH7UxXmkdErbsj8ZqVZj87387H33144",
  "key34": "pkwjAfHjJLSBu3WXehYjvdWTFivmtDDLFSdiWsffJRuAH4M5yFksJbKKGUomaXCK8XFypvjdhsPDbuQajsGudaM",
  "key35": "CMvkMLY7dNkzeULWSVjsujCkcQbewsAQTCWPW5tsNhGNZNudgDk6v5Y3WsjvqWXkKjqgnFHhwVf6PyhF73WmySQ",
  "key36": "5CTvBrzdSamiHeU7WHWw1mwDbFK586e4CW48A215PkPt25AyCQfUCzSC5GE7CS9hwF1LJ1k7kKXqkwuUwQjb1TsQ",
  "key37": "4hAKXCwydMi6JJ3Rn4doUe5nM6eCf17VAtGqFKSXTALr1HFmeNTQ2DHiP8PpM4PDujXj7KWganomEHb71W3Fa8ai",
  "key38": "2HPpYzf39CG1fm4r86CbTzhscqgzTW24TkGtf2cDdovF7X894dnj5c3SC813u9gN5PD5uCZYXgyprZjTubm3SwLi",
  "key39": "2yPNGn3hmYzCS8q4nWtXZsR9ShpbA4EpwQbmoB6jG4eQJkf1ym2zW4f8Sa8i8dZs8sf5t4ncRwV36x833xMJ4izs",
  "key40": "xQbNjGagofYLj49VA38sk7gGwHVAuzLqTqM51CtVxv8tL7xEJfYQxNyW9idYpPkGRKNvHHKxbzpmuMW4pycXYKy"
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
