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
    "3NzzsY75nFZCGYQ7RMKESgDWZx6YWc3kuiKr4jsj1SYvgR4moKPKxrkwCKkv8xeqvkeWL5GBdAyDRKdDTabmjHzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oaxEF5WM4wVgjsguGypMPeBZGeLuNk5jKy7x8Lj4srzYDDKwhUYVAnhJrgU5HbX7Drt1jzZn2XDRkGD7dbyoPJP",
  "key1": "3Qv9pkWf1MBLby4zrSwz7kJKyGh6HnwPBR4g5nsKHM6sN87pMERzNSgB41kiHGNdyCVfVrwd4fQCC49Gc7uSsixi",
  "key2": "5FUT3hVaNeXcac3SFAT8WqKGANLLM8QAXecAqxocaLx3SNijVp45uDnn7Yr8E7eSMRP37L6YcvnvW5wgwMWWWEER",
  "key3": "4kDY1YWChuzTgT3TUmps3Gu7oQ51AboMneZYtbcrKT9KA3ue9MmXj3GexoSyjpdDqNWrAVhNHejk6zuR6gnsudcJ",
  "key4": "4cWnMrsRojkSCgc6EMARYcYUYsXkr1xFZWq4GLVmDZSNEN7jNkrtgpt2uygHJUSwuifJ4P4x9Usx2ZhnZu6dkExz",
  "key5": "R19pa87367zYEX1pwYqXYPfL7DZ7A3UTVVQhfQbfBpfJupdrkfG4mWs2AzL1qkYrKc579kPXgnVovtSunKJEsc1",
  "key6": "KuU1kdJBp4rv1GL1LSZYpQZd3qgv6xFFwpievjMxBA2t9J69cL6wA4xrVajJFFkVwj51QAJbTUvcf9xbjWkWY2u",
  "key7": "3rvqXuFR9R5Ne6PeLqyfnKGhBM587Mbzosh2hDGHKShpi6s7w4314nx2sedFuD1mxWequyisxzjmfdtovabujqAT",
  "key8": "433jJZB3N7xGUTT9GdA9WPmyFFto8d7xGAJrDPXQcWfjrU5J5vodzMGp3j3bueDZR4SMUiQHmSFdzg4F6R4iq458",
  "key9": "5ZF2GnxQqznMJLfXQrBaMq4HAMY7rNMwcF2h5JqkGnDHimahu1Dtpo1evVvC3mYnzuH5rZJHVJ6kmsHwVvHLPZsS",
  "key10": "3SRmuHHWorfaoV8BJ9PRCbMZapJvD73szR3y2FFr76MmU5aR8UZCJBqEw2C1aadBMHYCSvZyx8cbpVg7Bx27p84u",
  "key11": "f3sfEx1AD97evEP9KiWRrDtxAUi6TmXZ1mEUdgFamFT1JRNdmFeEgoA4LYJ322X3MGCYBLSphA2sxjuaWfrC5C5",
  "key12": "RfpAFNjfbyoczYZeKT1BcCdgG7bLM5BYMM1BTzBjcDwwChamSJ4sBkepc3j3e9ybiwKw3e7xUzZ72gNixChFwXH",
  "key13": "5gvow7yKWjGB6S5DStF1zuoYn67ANHuuJYjJGnz3M5NmTFVK5dZoMV1zg9uYiUKtwH7dR8mLjTLxpFc6V5GCtWQA",
  "key14": "7QERKUxK84cDySm3WomtQFCmtnTDfdxEvNr8uNbPihjiMUMAy64mgAuJ7nyHgwfMGtHGZoikbU7RyNVRFvnqntm",
  "key15": "3umWgEenuHZgeXu7RNNgiz69okaE8sHVDy7rZQ4dxzJu9c2ezHDH2LJwwcorWfw8krWCxPadZMpE1pWexGeTFFWZ",
  "key16": "4sZr1L4xWzd9xd4uc1yXMgy68s3VJBY8WUDVaGtjcMkjcT3uCzW4ixWV99ZmNsShX7mqhbww3SSfw8i9TAPNhHnY",
  "key17": "dLzKeFH57qKs66xbaNsr88rjd6RWfXc2RgEKYYEW3AzH6b572FGttBiDfYFxdx8djfbbU2CPqC81pzHAChx4wJp",
  "key18": "5SgJBjp4Fr7koEDTyEavTNcDR3Fq85c35ZWtq17Ao2HeowLMxp1UnBnRjB6HYLrUiWnoV6bKQvM2xReXo6TLWXoc",
  "key19": "4Kw76jLRK5WYksQrrh8k4UAp9jnDfFfcS7cEJ9wqWbziAVnWEfduZikpDVUTwhS1H2huwoiomQASpgx9JCBVf7Gi",
  "key20": "2NrGdrcPgt9A64XyWcHpAjz2ku4nuvYKvT5UYw3cfrsC1WgFHfzEHWBgYTNA26EwmvXaHeAi4FNdmtDW42AeKaMt",
  "key21": "4JEu1cnxt47HsGfWjTi8oRjDDT4Qk71c9Uwe64yyxV7x9dDJVGFZCeTwk8BGXAhNnfEuvu9hyJDoQA6ha2kzNfh",
  "key22": "2ctG8jrkBqrEgFXsrkTjNmHFu1pZ2gvDJQbsJHg4iuxjKJ4CBmcbshaEqk7bFZBKmwgJma8BoF5gEadcZVH6D8WB",
  "key23": "pjWcHHQ8chvewptqF2DDECjxQMPxZS9x9SQrPJahCu12AZQTW77tmZ8QUfQVcYjCh6R1QKfgVJMeEfpmabWxqy7",
  "key24": "4hHuMiU6qTV95hXUWF3TwMrMXoto2nR7WK6ivhoornbks2kMRxkjwnWd2uaNspSuymmZcvQ7bv4AHHJ4PdqL9jUC",
  "key25": "2iEp7QNtDJJn8g69r3qvNsRy2Mw4JWwMoVChDKLdicskCgMZG2sC16NpXifKDEZeRYjYF8kQCEEeVjt41g1hBQgU",
  "key26": "4KqqkaZM27jHqehjmLdKePeMKxBFakVkvqLG5agznCZ7wYtHogjTrG9KdUhjVT8mms5oCSqcwtWDP9ArA4uXxSsp",
  "key27": "5HGgGvmYTB7tgQXKTxja1v9rsP4rGozmCX1S4gcn51Rs7oz32PvTh3H6gA6cceH1rsdBFQrZhJwNDCRsSoZED8Ci",
  "key28": "3JhdvAoYvCbX27K17HGBkTgcKWgqBQNXqWeekiCV5Exori8QmEwjkSWsZNNhCxoqpTZxxHLftQgs1d8PF8HBPqeg",
  "key29": "4dqu2R5yEfKmaf58tPH7ZKskMwuWuBvxDmeykXGApbAa8PvoRnD2kKMymnVWjKzmTv7xhBjhAtWHAtWtxMzqrBie",
  "key30": "5WpvdddUqphmipqWjMNb8saUvjrWDsrnBvzKbuB5XKJonUDeDhbqCiDhJ5jH1P9pk2JfvjUroD2zvywDzuMbTsWM",
  "key31": "4Kz79J4TptFcwxou1a7V7UMLjWYXMx62RNKtDyfs2v7wCbCcB5feCNQZc4rXq3MwphYNxJFCk6Af4UHho9ctn9MU",
  "key32": "2RXxv4uVVPvaaEWSwExb2HFPMJkQMjF1FagRAXCQQS91QpF22KY3E64e2X4NoFTDo7oFwSMbhrEYJaNqitSpt5im",
  "key33": "kaczYCr3zSKCxKvcog2sXbUBoG6zoKpv9YaM4boeYMzxWpGBZghK7JcRNDZPTmcJs5EuHQnJvXAEPmipbPWSCkE",
  "key34": "4uU3H2qQY7XaKiDNR1QGYvUS8HReWn7xvauTzdZzYL1Z8drjwhjhpfTQrWTtePGbmsezVGKurTF5fgvfw7Hjygpj",
  "key35": "3xagtetvewutu6fKWQStLpVwVEgeBZj8VdDCcysVhYbBN1z6M5ywsfFyLdAhjtnk7WtK6VHmcbTor68HG3NqtsSD",
  "key36": "56Xqm17WfmLr9krcejJPRWhKGviTEx5p7pKZxSwuNvnYYtVbp5e9dULrPVTsua4sb4vLRckDJh53MzSDzq8BcTe1",
  "key37": "4DCdSBjLHDCCdcPDmgat8oM3KQYnFRHiAgixUPmdMbENfSpVPgpW8UtMy4zTfFKUD6geW5zrEx4hUJN1w4fXa3Hd",
  "key38": "5dy4GdQXvuxEeCp4AayyCtUVcSsKJQTq4Qr5GxJy9Dr9bft1A2CLpC52WZxzKpqMJe81dH4P4xi5G3MR1HFJGWti",
  "key39": "8pyTicrq27JqtZNY6YvpBGc72Y3DkjQHoT54hWyX8uDCrqJin8GoCkYL6525jL9ZA82aqaT6Q2QxrQwqsf2FsJa"
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
