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
    "3W7oPEeA9xCTPJmWYx1SgCrW94XL9PPfu75rzGJ5E4gtw5iLJUScuMhsAbEL6UomnuL5GpsKVikpua3KiFYxSfYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R4xvTFSiAsaoTFtDX348Kpk6Qxo29hqcV3H1cSsP8TiwqRLndocoqbwmQDZQ6KpR5zxd93X15GqJdyKDrFuFnS4",
  "key1": "5oE4t9UTb8Umboy2WeWMFZy93jBC8unRxtjRyxF8FE7xBdtLDLGBxePcYPDhixnC36K9zTUB1edurzQaAZD5wRRL",
  "key2": "42JHuPfJfexBmNVBLjhfATJ3eoRu6zMHrVBHZTuR36JMuwpyemFCvKCzRLiFZE5cUSs2HjToTN9TrcYnUwKCEWhQ",
  "key3": "3gsAD2CEo5s3gTJ1Aau2G84GH9U8QDbySwqRPfBs2CCNyGXWCYi7MiYihNqi4dtFzA4k4TL9LphgYoo2abFr2UuW",
  "key4": "21nQ4ZcJ5GnYZCyy3JqFsxfJxLZUzQvYgQyTYbkn54KSq1a1yyESxzdV6nkXATaspDnJuCy3zyN9SgSuv8ZvHxr3",
  "key5": "sf5xoT4fGdYcWoY9k65dy9sfCPZf79SEEEJmBTyLHSjPtDssLpcNyN7Kv91X9sbEGR1ft2pNnws6erUmCBjVEZ9",
  "key6": "2jM468dbCV5HRwAYjq1DyJApExP21AAriZNxwHe5HPWJs366uNSiDwVhvqmNxaTRnhTzYsm7KCbfDXWviR86HUvx",
  "key7": "3Tpn91bVMMvGbcPrGNSwAhYdxnJMEPsh2SK5CjYh2chGdxFTTuCCXwiyqLxSeAs35fCmXjxEuKLoX765Bx8iCnPT",
  "key8": "21ZUt2gcrugK6ywCQxqPuL69LkjME9JhiqKYmX2GsqBesFuVyEQMcJt1Gi3iEe8gtZgzRyoWTTfiTMXHEx1Th53P",
  "key9": "49zB2WcM9K5z4mzyV782j7hKRn2aGDsomqoZUUWmwubcyXJ5YVctFgJ3UC2n7eiUaqAM4YG92W9Ha8GNtDXLKu4S",
  "key10": "4J9DN87u52YGWRV9zU2eR7r8ujvR8tzkbUgKjcMtQAhx4xHqi2cAjwq73zGo6TGHpnoLvGCjWKgQkNT8VnRCz6HT",
  "key11": "4d7tGjm5B6jG1TjfRL8A7yss9VLGpPGX2yKYHMWZ1cRQaXrAuPvsQbJEHcFMYeY7onC2aUryaXbNHNBeHu16wnjZ",
  "key12": "3xWkNBRzrzwYgamcjwjHakDwpxDJuJqq7YuvyYii8y7Mgu14YSBzeZBDw6PeamgNRcsLCBrbtsZXLHqTfeV3SG3y",
  "key13": "3aNey2p2D7bBi13vWtRUWpgHxpHzoJwpqWvwKeKtk6csjdEg461TfCxJCnvgGdSTBbP8kHCzq6zofX2t4ZxXwmN7",
  "key14": "YXRMUNzscQeAUirnzZXLZhcBndP5BbPPX2LcEaQBQv1HBwKVYuQCpA9HV6XiYkcEKUBydShctDrdfEccfivt96g",
  "key15": "4HyLuU3hWCsbrJg2RvWJeWpnTLfmgA1Ze3MnbmLyPqDiRnqXqWZ7Wn2Kecb28TkkmxanzBANd7fbSyokdUY9eg6T",
  "key16": "38HWcxd4GpYXRKmNGpTPjF1YozJ3sWqy3jwethsfsfTqEwCyG1FZ5a49VZsEfLQc9U2x7nxgUPTKUSrDF6DgeDUs",
  "key17": "nxha7Bqw4yzaDgyF6Ke2Npim9vCoKdLXEKmBacNLvbhrwyvwNGTTLcoAy66Nd9mMwSqzTYSV1fVhcVVjd2LyAKX",
  "key18": "3KHczvmgK9gqGPDDwqzExQfvgKKj7pfGJ8siZ7QcPEXXPTq4L6SBtCKsqizSB21YASiDwpsf7vMBVBqWZUzQwipG",
  "key19": "3cDvitPpXMMhiB2jLsyPjWJJNCZPDDLfMjqGK4pJmS8ZpCGd63aYkCYDWkJ45J1uuQNxR1qxU846cq3o7mJfjw6r",
  "key20": "4Dw5nheNT8caXM5pQ4zhca2hhoWKv4pV7gyGQNpXRi4JUDBPdnNxw6fTy6d8LPzhmwMDxpYcYjJsruViYpWFWdUa",
  "key21": "5vgr99tPLPLGhcbtmu5LZUPAbEywox9xABcUx7jALn2A5MxYzg4KdX5YURQwpNqymnfvBuawLoAMwFWjZ2Vpgp6a",
  "key22": "3KPcRTcZMpvNfYdrhqmiPpuUWaMhXjQTMJ7KroCRwUG5HzA7Q4aJiTsivmNckmv4uz46dQvcbB2FNeF6ui8ws2gr",
  "key23": "nBDW7N8jFuE9iR1UUiSKfF5ZxGtPLLitQ5fHN1incGH1UWvS6SMy7oTb4USSpwGFr8PUgKSyytcoP9nfQoEopnk",
  "key24": "5GhFHSKjttNnBzbQQnrXa4idq8ndyZSqtSAYEwLazzPhHBuvRHc1hiq4CVz7M45fjuYcqjkbgwRxtn9HCt3qLGFB",
  "key25": "3B5WcXXiRJ1ztG6rCe1YxUH3i3njZGrYvXPwyUjScSyTqzk9ZABHzWBn13ta4T9jb8sHkhm8y2hg5CCDEySwSmFL",
  "key26": "NjzEcNhhofKWKPDZc9WH3qdtjJhmABoaccpboTdpev9sUPCGQX1HHygMCRRpXso615s2gWcJ2H1Hahynxj3UdbX",
  "key27": "6auxxEuGvkh18GVdjRFxVdvKDjpEz9ggnh3hDgzycGQr1ij5HGwccYj5CXtLTPQhHmsYtm39gFYDqSNgfkNAKNJ",
  "key28": "3zcvyoFqZ5Ets3gY1uZreXYrv4Luz91ZeAEe7isuyKY9Be5mSNtCj1hfbJgcG4vXzeLq5o325JnxFF8LH2AG8QuT",
  "key29": "58WUMbncngnKddpg9gvBJi4gDkakgD1YL2hyTL2MLn7T3614cuffFZZ5i55E772Nb5o7Dceb2pUexYZHaTzeJkDZ",
  "key30": "2BmLAND3U1wFY7XDQnBMS7SMCWXkTGqU5deUE2BBGAtYskrkBWjxgGhH7q9wVZVJLkLDkvmpdeMszGWkMRhz4wCR",
  "key31": "2dZKrkCcZnPKKu6MpqdftC7nL3msH3cJqLDPdB7BjBsRCFa9W2gKqiFJ4GymGpHtm7Vx6YFgnFhztbxiaZjHWznA",
  "key32": "5dN38buNAUUeERXZTnX5xsugzdaomHwKC2CRCVG8jbhL17pf5WZw5L8c45z91ckyzMrFrsBhKx2pmq4BaECnqAAN",
  "key33": "BaozsASAg2Vse26dD9By8jsWw6aDqHoEmkm9Ufr47MstvGke3AuLxL4DWXJ9KVzxG1p3vMA4D7Yn1raXagCc5Js",
  "key34": "4M9gyHt1thy36mYjvJMTvM7Aq2jgmEq7XHymRpMQbA1G7qzFmCh5TafKfhJfiB9monuJw6Uv5dnv4XMhGnoQBeFS",
  "key35": "5GTFMp4fKgbg4PPYGJaNNtNUEU3VWyYf1aWxiE1YZwiS3H1diAo86JzBpvsgC3amNy5KbeK8tZ9qdrXS9L7z3Ctw",
  "key36": "4uax4v9jvWu7niRCPj33PDfKN2nJe2ekov3H1cv3KwjC2ZcLMCvaEjATWsLEJP892moQ7tafM11SjD3593P4SJjk",
  "key37": "5CqenvPBfsNndg71NErCNfRiLyCXbbRnjZgsnT1bcDwcDnNX6gytxKH3Hh7ew2GhC34cJKURyWmZzN4LV1o394iy",
  "key38": "5eGNxBNSQdZqefA8jUtddS61CwjmUjWP3sZaehVjfLVTH44feb1LP8eWAnDmDDYBQsDfpQqPDhVk5wb73XRhDweg",
  "key39": "39JDCo759EGgHbu4npr6P5gmzWKBk44nG5Lr4BmD8oovdz4phtKhvvf7sgxTvULdbepzqYhveSYFBDzTgWNa7xS5"
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
