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
    "vgw12o6xGnE34uDhWW7SpncgwnYNw27yVrWwi2PbgpbWnBTvkWq7d4tyGHK1ipvVwwHq6fLXaZfWxnsnsRYzegv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NV9a18fSaZzphbvMuHKpi1sHcrw9GJbvT4g7ZVWziKYaN6cmTqMwx8TDfZyRYiSaAunqpPcXjNcRCvYcdjCnQGp",
  "key1": "fLJPcyqnwREykRsZ1ekmv2WBQzndfshag2dN1qdrLeXdiH9PxAmE1qR5Rsit7eHKvZac5m6ajkcwavdozF8SUYs",
  "key2": "u5wKY1XC8GYxZ4N311bDyN82SobG7g8DhZfi8zHWgEbmN8hVKyKyzJy2pDLnnDmNwhMHfVt5aSY4xhmaLD6RDLv",
  "key3": "4ZAUpoMw1t2pyA6ANSaKeBUgn1WnkTWiQxf96GXDVSUrBZqdBcNq8xA9UrcehtY6qB86txGXvnCMJxoD5KqAv7Te",
  "key4": "2qbQ6sPie8T11D4dX7NTc6hJ4t3M46Rfn8UejuYuVSCaXNWeLGjDErpRravXRvrTCWmJMAWgqBRhrAFhR9ArcTym",
  "key5": "5JTSNDoaEtwWSxZ8yvz6JJ6K7S7z4AteF3Vkng4pc6PF6rvaHKvxhE9LFHfv7KbojtRH7YWnedd7SYdwfZSdZ7Cj",
  "key6": "4AhzhGf6bVKtkphW79ftBCZhTDz6oTL8tT2TcqCsZz5DovVwv8DkqjHExQjRLZ9QE5sn1RLsU643PLfv8HCzvuVJ",
  "key7": "2U3bi7QYYDr2qoJwP8JsL1iMRL8LKp3gWwweH2zUzyfDUoaNuLtkWAXTDutk5Hf4g6ZMjyRYXLRbPMsk6xMJfX6q",
  "key8": "2KLWwtjQ1oubENeuRUigAmCjh7BL7ipgmHMgr42y2zydzvmM3p3sLCHtLq9eWwfccMdHCqtDvtNzWu48EDungEKo",
  "key9": "5qD1sG9WyhwoZPxxnj89MGj7AYTa9rLjMs4TDw614sYXwu1JbTQoTV5wvzHPuEB53VHg7DeQj9x1DWb4unhGbBCo",
  "key10": "2V3SzTzyg1p3TfaHfzH19GWxX6N8pUE3ryWaZLSPvfAzpcHdhh4eZjWkxzMdb5HobdyAxHecSB9CgCTzs78tPrWi",
  "key11": "cc9wFnawxZYMQc2TpyoHNSkUbLhz92UG69JwtuEcHpHGx8YY2xb5ngKC3598LTnwqbBesfRmYpjKBPD5XKLUUcm",
  "key12": "4FwDFi2E3j1aBracRWxSawyuyddqFG1u9rkUGKk1QngqbdrWwtj5HhZtbSftgWcF8PAk1YasfxDgSjWQpFJv9aR8",
  "key13": "4uLha6sLkaiUzfpjfMV7ryEoc2bS918MJZjpxNoeFKVSBFgJ2gf6ufCTeJhWMLD9giuqwrsrjGhc2tVVbcSEzii3",
  "key14": "31p8oYcKhHthBNLQJ6KjaMohnjYLseXuBLBc2aU9rm7SjEQAmUUpoZYpirGFibTjoXAAyFSANn8anLDij5VpCuaR",
  "key15": "25L8op7mggC8YxRWxkVQvGnnGstEZNvP2EVm37eiBMN6U4MeUUdKCGBaCshJbpQPPoSW37MVxrxF59PDaQRUH5UZ",
  "key16": "3ckZ9o5Pmvdkt5FL8X8u3iNFvs4621ZdEv5Wn4EzZcmaSJx1CwxJcWyrRA3txJ6MpbuNUzaSXVJM77gE6QwjFa67",
  "key17": "3AXUtiqN88MwECb39oLCRC9cBenJ3b8YmJe2oZx7qmkZ3AtM7eHtpea2hZm4RsFyUqDmMrnpvozY6XHE33JgngNX",
  "key18": "5wtQwPNdaJKCJa4oKeb7DHGAByVTY4qRpBTexdKSvNC6YAGXuYov5DVhqFt68VBt1cttxFn8RSgDbXnNqch8TkQK",
  "key19": "2H6jMCRYWgRfD53eNJEZhZSiWCqfNd3sHWnSxwhianrqVFdCNmkfGytvh6zbrYnC4txbksAsLF8LKAqvQVS4FmFD",
  "key20": "4KE6CLHVgyyk3uKoumNY4WJHqBpXK11mB6VQmwTrPnCTHuDJ3tidUsW7TVefXnPsL1XrqRd1UcmuoL77an39iQBg",
  "key21": "2aMr9UB8cX2k2P77ctPM45zX833zgiBas9XqsZFJk9wUdYZrRpmzFR5nLMg6Uc36nWCxLfm1s8a6SuZwJTuoHjBq",
  "key22": "3KdHY5or5m1S6KDMP7b5pLx3ifBnhUGGprgYvsRPdU4s8oE8QBKSSB2zajcVPhwMoMXPiDbxMwVH8euXAqJMWAyy",
  "key23": "2GE4UPxmWuCMHuzo5eU79eEitZRpW4cw4qMo8ggLAdLnpnJdCAyWUcw6L4WVfm9TdTr2gCKg2REkNkZ8GDBkdous",
  "key24": "3YJKgL95tisZUxGVX1VjmtDaWXJ6hRXRWai7pAGYKcHNSukoAbhMYC13eAh1jJkZE8uj4MKoKiKAJQ229PiooYEM",
  "key25": "Ndjn7NiYW8k1MenNZjHY2GExhzGXAKF5RDk6eJBSa72KfPxauDrE97Q2CyrFy84SZSfghdfBTsDyzVR17iye8Wn",
  "key26": "5CZ4fPst2HPNZDcSQnsWRd4UZ76Wy1g1cJ23q1As1eUinENomPhb1tNWCQPu3akMjbkmUNPTdif5a1oxhu5bA9x1",
  "key27": "3GLMQXLwqkUWSACtUxQUdaw7tM6VqpUS7X41dXsH6psd2zijLwCa1aTwcP34RC85uq8ju9fzQu4qw2K9d5AfNjoN",
  "key28": "5CHZqtST6pKR5a2MvmL14dnRJNoGtowtkSiW2wpbxyR85M4q4PNZ7KXafe5qTX3y4Cc4XhsosAVprMiW6fN2KRir",
  "key29": "rBqi5SE2SLGhJa5y1nBL1bK7gFqrBDPtJkrnzhNhiGDL1mqMuJyhz5RR5rhBDBnw7SHdfvXUsyrJZsPRfVr6Kx2",
  "key30": "Yy2NJNippoE3AyoeBDizMDezFmAgDXyXasPDM11tx41QWE2PEd7kdAJFruHxv9jFZb8sCfkmBna3v1pJcTqgmHs",
  "key31": "HDzeXZJ3vfj2sZDwJpgq1Wk4BbTvu9PdakiUndSAMWN48b1MVa9jaivP3FujZvxaTZ3fiKLQMgFPtiXqxJHxM8N",
  "key32": "3m7sWZS6LgX9Lf4dyp6BmNE3M7o6NDsJ1U1pTR4SfQxAXj52G2uWn3oRAFFe8GbnQStaGzJSkZWGjkwUGLw4iro2",
  "key33": "nWRiJRbyawQ631p2TWkqio4gkGmSnLxzXsrb9Ek7yM4QnPpYtJxPfh79A2exNfLVkzfhM3BT1Knzpxq8tV7vc3E",
  "key34": "y3DazGeFJaWxnvD4zgLe4SAaa6mQ889C3NkL3SWbNhAQHXNiubRj4kW7gCuJHnU8awSwfsfVpe4fvBV5XQQtmrP",
  "key35": "3v9M1FV4Aqe9SuYE35LwkACFNYc5YDQWc6QLcsAAL3uRKraTduRtYdJeMYuKN58P5T9pjoHZ5apiG98U3LuXgzVQ",
  "key36": "CDpm5RybrsSebAT24jDn1nQSAVVqmsMG2Z9CRa3MQuUi8YVvJrJuQkQ6kjW7YHfqkuMiGusCWS4tm4tjqUpNN9v",
  "key37": "2x1M5ckbhxkfdJQy8JizMqLVJNaiuUymKnkznYMoiWbfeK5fQqEzq3qnyufahZSjfRTi4K8NoLtuN6qv1G25ZCdk",
  "key38": "4rio6stK9YbraQZpiVeqQS5XUmdRCMD4PBsBQ9M3sTQRjUZZdkbhgXQX8AdDrCsbMrbiMA3HUTpqMA3AL4gd3nYf",
  "key39": "9pNBnVy7wNL4kMzJJZPBy2syQ4rrq1raS7L7eMfRGytHkKYMSMzApMHpHcraWcMpgU29c6qkSmq3CAnwtMP7Qkb"
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
