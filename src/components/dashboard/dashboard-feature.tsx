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
    "4aYPcsPjq6KWy5qB89mAD7BZ761NtxJBqxBjoMQxDF9SunkyF81MHDDY6v4fzQU9jR4soD9kMAzseEqEXzLJ6BqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HEMVnneqtcx1cfuh8Qdwvsz7daECAUBF1vUiuBpYC7Hie7ZALrGxfNzzJXNRATNpqns6JSUd6pg46eiyaK4nV1g",
  "key1": "AJc2ggi3nSge341BaYhL9gDkcRQe2KVtnigdNVkXkF32fwvRkaEiktpbx5vhc5kjbSE5SQSSkJpdENadmMtPZLH",
  "key2": "3wXR9XWziD2MYyjsPtcTbzt4K1vb9CLUx3fsgiCsxSrU3UDCNVzqv7cmtJFs9TLdBNreZG9XPDbrQUyx9ayCFVmW",
  "key3": "2RLc5YG4oGLW9a9CRWD4UbLBEiQxziFqssPgdRXypdMbAdYx9Tj4iJd1dvhsWmfC3HbWtdyjeGdFcQTsCMPyHcC4",
  "key4": "4m2FxSpL5q6RqiBdPX3TvJpi4eSsvuJgwCjhM5yTrBjA7GSwvTs1wqQ7Cmkfdos6Ynn6ABAyiHNGJtq9Cga7KaND",
  "key5": "5NEXA2wsFbExmNefcY7ByodbzVdtYvocMtiW27XVWTjVeHeVRzbQ9XUcEtA69F6wDLz2hXo1dKrKkR736KKjJttr",
  "key6": "51pyQN7bFGhzsDxDs4LVMdKA9vc4EKT666c9Ft3u1RZqdN6Lo7bS2FEQu48jqMpB99txgsg5kY2cS4qY6HHUmErN",
  "key7": "2YpMt36YqzUunjWANQB46aMARwWJK84zKPXKUCpEY43AzRsvXjgkRfjx2Z87ApvnPLuKzArrkcwSGKVwg2AqMi7a",
  "key8": "5mexcjAVTzedCBkuSeAi5As82Pnq8EcVD3EmjKmXv7SRRhHxM5noBVzveTUdqq2Jj5C1ZdQKp97dVzohksLbzsaB",
  "key9": "3HXhfA9ZS1GVbu9izA31bQMXh8RXwJm8Yvc4ii4KrM7QGkfC7WTwUPs6p3wEyLcsecorJhRbRbemMKyghwrEzhtw",
  "key10": "MaaF4quZau63ZHJekfwSwYHgszN6KPSYq21P728zcK27N4eufdaz54nyEzwkFod1YzRStZHbKDA4XgmfByoeEBu",
  "key11": "5YQMVeJd9GjfKhA9Voh1Yy21Fvsz7aQxDXcaHrmRXXg57jgJcCjW2m5QBfBabWw44ffALGq2ipkHgWf3QBrJpGJd",
  "key12": "38y51NdArRakGBTArCuBdbZxRxSvsLgQwuxbB94KUDzXZpngfshghoK5P9my7VfUeyx5MZhcGX7cg61Whxo6zi9j",
  "key13": "3DAv9f44yM2c8a668aCusQm6ERbNSfPrZt2nAFFNNSosyZvCTLzrUt4GS3BEy9yXAcXiiY9NkVWapejGmFKVdXSG",
  "key14": "2JHF8hcZq9fgbXawe7MCK7BstUrY7Ay2zXKMi7aFWgmtjq8teAgudSa5tHAvDAmBy4QnT3nuUNDQQMCDoDwMkT9z",
  "key15": "4LxtRnce2A6HBYeAFwgwKgCPHzWRqciSXQ9pEUkqqibahiHGsx2L5Kp5HxDs3mxmLMKQFVN6yyFxg2JGVVdB4wkv",
  "key16": "QT2dayzGuoNP3ELLrLaTPRVePUd9xnD95vfu2hGAqQgZMdQV8LXGV3gnnmBouTefixhCjEg4yqkRNvZgyE7SRBG",
  "key17": "299CePCzm8aAexxcc9zHUpT8L1qSB8ensL5kqYQDkpKmLuNwL7L2YZaGXBtEeTs5tjuntENfYvmrJ9qtAGG18xJM",
  "key18": "5B5vWq9LXsAx9ny3DcqnuxkBSayZLgF2itDojdp8pJoB1rHTfUBJeFxsB25Y14u6DQ6MfDLTwg6huZTUZ899K7sb",
  "key19": "24EjYPELPxjdzCL9vP91iC7RMBcvhA4oA1Tw7Pakr9uhRuKjxwm6NfGBniUyoMymqRvaUVWzY3pksYS1mmfTcAtc",
  "key20": "51bUkxdWSoeGk2uEagXfXCzYXejEXZrzK2xMfoGoViUdRS1nRaLmdA2eu1PgiqPHGHsyLUQwwptwp16P84t7h4hN",
  "key21": "3yzN93jXjWRAhvG7tXPrs5CGw6LYoxWtzBmVrU2BtjqGP7QnborxnobAju84d6KBQ5FJEuLqyD14wWtPmDgQYVGB",
  "key22": "5azQUuhWjCNXBU2ynh2ipvLVyyL9gF6psxgeGk8Kp9GwRfAF1sBVcWEVmNSQfzQU664sr53yS2V4gCx5LZx2sZ3v",
  "key23": "4hwsJ4SbJrEsnw1jmfG2j8ctExQMvfCZSmaKLHLfnQRefQSs2xJFmA21JaRarTbKNX4K645TdKN9CMyGLXF1egp2",
  "key24": "44m3f9LajKEZYAvvuUwZcwqvipR9RWdkV87S3HdK6qahsEc7qY6FFicBgrmdJNzS31ohUCmzYUsTth5c1E3AMG89",
  "key25": "5v8Upy5Q7532uiUa7P8iiEyfemH2SggsW7uZEdFFa7L5CfDx6EEa5K3Vo7HGS6qgKNM6nviNUpweeBULr6wd7aKu",
  "key26": "xM7DUtZiQkhx8zrcLDqNGriRk2gdpWRMEoRCLjgq4FXYjr23MmgAmHRhnqkSzpToMwBbdFS7HoHXjoo5QnJQEaB",
  "key27": "eEBq9F18nug6sDLQActPn4P45qaTGKmsdj2aKD4WyLome1GX6AcUUM4xYZb2PJi4REMaCK6fyARGXcEd63zLisj",
  "key28": "2jHrqqKgf4wtGognyyRHzvwmww2TWu1AhrgNxakXoGuxcDVgmvTpx9Wig19zYV4GPkCC9NARfLvhSSsTLqj5Mz34",
  "key29": "65RAEB2xRFqU6DJrrYWqxFNgepx8NQzzjmNkdes9EymHG28eNV4Ry5V1s4t62NL884qejsmf3FNVPo2hymtrTzn",
  "key30": "2N85xfYYavgGq5CEFYjRFieod8YD652mGcEqTDkkbBjPUVgBUXPkVE3swsFSJ9PDCpp55kKzxtS5XsR9tbpfmkQv",
  "key31": "3A715CdrEqD5ketrzkWEvyUgSbHoSkw65poQ4qWQr2Fn5b8SEDnBPTDTiFYaRCDAZRtAjkLWfPLQTAGnLj9UPdh2",
  "key32": "5j9YaNoobUK4qbG9c2qpvoRMyK1e2AvhF9PBr2mpUhgnyq5GBMjyt5mnxusnHgfpGNr9wSfSrFTLNi6K4vaoWMJf",
  "key33": "2rrAws4HkZSfFFNvSqXKg8rZ4gC4Xq21zvBYBXX4e4vB6AY3yKHcNf2Y9uCyLkZuGQQEFAmnVg8nfwfygVeLG1Yh",
  "key34": "5m4PAwdn3HJJCJqV2z11qLcZwpCCze24SCeogojp23WDnXjmwrF5rtZFz6jXvUt8dDHwaDqHyX5nymMe3G4nVrHR",
  "key35": "4936aNpkznwsP5P5YnBgkq2oi1McA4dSZtfBTx4eHYLxUDgHeG58PNxJgArkD3c8m1XLozeu2yXJXauCe1mZxDHJ",
  "key36": "5H4bY78LdwLMVsmvaigS2yWGb9TsXuX3SvwtLALTKRLSVSU8UgJemerNeg8WMTkSFpKRoPHzQUYsKtC4kWSGFbYE",
  "key37": "4xPTo2bisckoePNvPQnETnkfzE7fgxXjyLbm3Ax8GzFZGWVx5B6QXMdC2SH3oY5cdT9ivNuar6dxD283ot6Xgbqp",
  "key38": "4ZNg74aGqjCjRaiDWpmr3iTwQDTmrYAaS2hwvvqFnE6hUBrJUgbG9g1GWMeX4cPHWxqU28ScsPa9SqMLmHkpBqMD",
  "key39": "28bJpQs1JHAN92bodjg1QZ5wc3196z6QPhGLPUBRkVST2LPxvZTCpVBDTbhzB5A3QrVESa4KYbHKZB66vQeNeQyh",
  "key40": "2kwBBYfYEamQdWcc7jN3E9LFbWHdU26bLKFhNjoPTrYnweAqCc4diCtFSQDdEeSad41YRLUxbeYoMJ4m1CmwfgbC",
  "key41": "6GhUEJkogMwcphc4mq691MN3xnVhndfYPkVZezma96wyv18PyiMAweqAjjbMe1WNgBokGPhGvaKHcy24bLwKk6k",
  "key42": "4pWpMoArAHx1qh2ssvtgPiTWWrLwAK16TXrDJqaPsqWL6BNuYDEYH2XrNZPZ9qZDA2rVRWqD7615WwkBuP1nbiUH"
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
