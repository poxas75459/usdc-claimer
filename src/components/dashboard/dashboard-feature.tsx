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
    "2AfUbMtYxfY6i6bwk1W59HksU39nqdiCEKGXx1UAJKza96iyDFhFM562sK1boeNeULosRnDeP3NK9szBLyZeHonn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aRcq3kLYiTSLDGDgYeiEww7EQqmEZ3bmbmrcpZntZA45iScEnDc67gKTP2jpmycJkQQba9GGRQoCMGr7WJYpasz",
  "key1": "2cvZwmVMVXTVizyTjNmBkotBxVYQmARUXiNncmbaTs6fxyHtYUbxaoSuJtypQfqxYZ3WrNju2AkGrHLKLCzi2VQp",
  "key2": "4rbDtqWoC7DfvUhKyHs73Cq2tgXGT6VaWCqMEqC1sbqkXWCfHKRPttrmSEiwUsjoet7mC4UhTceSXCN8PQzPbULi",
  "key3": "4TF7wP6Hb8QuLguXgWyT6W5AorP4Kx63B5BzfeRqgtH6yS2UNS6fkHrNBNVoX4dngF4NS9RYwSkpzcjdopTVHDoW",
  "key4": "5Gi4ikR1yU8kPxzDTmaUwjALFaQmYJ78CmMUmGE9Y6VwLA49y2DWQLN9vWyCTxWf2zESijL1zDJdtUwJgs6By7Xt",
  "key5": "2DHjxsmrEgJaAG6a6CsPdeNRFTRoszYX3x5mhBzzviyf3Qr33KmqfaTTSm9Hsqzc2honzDZFPtdKeAK8CM5Yx5T5",
  "key6": "1tdndrhGbV1fbHEMqw8cJimzLrSfguhK1YsezPYf54zvdc9SZei5rv8QfmiNLYmZAbE7CG1RbtjbZfV6KpgWzfD",
  "key7": "5KJdVMvwmVeZMKEtqjcgGaFn94hFZpiYEErSvjBRaoDNgs3MnN6pB24JL7NtSZuUAALwGocpEEdJc52iAV2RZkjk",
  "key8": "24g7jgoHdBRHhRm8qBrJ2KyjuM7KCbPFVZaFXFHPFNAC5LEbFhdNSbErQbhnoWP1oLPEf9XcdBwC2rFZz4k6LyLc",
  "key9": "4Z22YMmFrx4H2bnimXdTnJbQgKvcFCJzvxia1oRHqV4pem5E37AByqi5Bv1pS3RJiN2PruujbbX2TQ3dgUfm2SY3",
  "key10": "2tLfiC1xejL2ATrDXkvnGc8A9GiMQcfruJ6GALux8bpp5hCcyVCYekkTfpSaFW4rqeoWoy5HHYwxRUoHVNCJyDif",
  "key11": "2346Xu3zPmJG4zRQ4XArr38RJoF9ssQmVYFS34DYwHFaEHBTRoiPvVcG4pnVzrukmWsygXcPmDLDd5Q4KvaNN2aq",
  "key12": "4cmsaT6QSQL6z77QFhrCDjhzbz65Y8ad82NYoDwgEYxaE5tkvPkwBiEqhJfqjHbzYpV5NDMFzgbLU8kanYHmFoa9",
  "key13": "3Vmd8Npg7vzsjrFnwrV3br2PS2G98WNXRS5u1XSY8aoVJqKu77WTRTU4SqzauXKsVQvLE2CohAXuoy2xi18zpFYq",
  "key14": "2TePsPpV25J4PWLL6hmUZHnmkw3B4ukihLpxvzCJZszeXpwjaRX3sG1wsTTRWvygZVQfGyGQdpMVaJZEpRLHdUFo",
  "key15": "5Rx8LoNS8UJeEAAYFZBuTP4yQV2K4e1jDpeN2DfYoVKTofGkw8fAWj6Cvvegi5ZrckpucFxFL6L81VC53Dm4Az1m",
  "key16": "4j8XtN4jrUb4czftnQMM5tx4G4RD1CQqU2wNub1DpUJsDVYyq2L9wZDoD9yoMpp369kAMT7iy9Cy4gnZzqrAbk24",
  "key17": "5zkyRA3oT2ew2MRseDzTj9FxKnTjzTVwDjEeju3tZ8E3PTtwWUEFeYDNSEg4Dkmx68GDEFdnzTVE8b7HX4uByzyn",
  "key18": "4Ysm19NcRm3vJ4hRQXe4D6o6KGvK6U6cnrxxD8E7VmH7y9Bbc1syZzRWJuMkUcY1azLPgdYKinrbJjJV3NsxAuPz",
  "key19": "4yih6hEbC4YmiYg23Ss7jWxjNpy1wSokhaBkcPHSfkQbViGZ8uWFpJpgAcm8WFEKgXxRa9YJH4h8a55X832TCVQH",
  "key20": "gpAg5YmR4tt9RsZGK8YX3RFuKBxTmMRhpWrHHbnyX5VB4P9zd1rg4hVaL1EiFoyiAq2Popgh3qnczp7gDEhQAas",
  "key21": "5EEExrHJ7KA87TJdjSNvipHfAxaj9uPnj19w8vry3YSfDnz55AbZGZtL4XbqDqWscRYbCtEKgHRq3tQEpBeQRfus",
  "key22": "pvHq8XMJngCfU4Y2W1vzzXGA7rAUGjm4d99wP3PUwBtDjwNA3gyvKPNLey5Vkr3uTLCgwymPW7ncwFW85TSDhTy",
  "key23": "3ovhZz4LE4egYNpjTxpqDEPyQ5ckW7sEp3rzVfJHtJ9yFPE8Je1EkwWPYYAzv9Hur31C3rqsGesDR5M1gCMQKfSG",
  "key24": "HTfATHmk5pMbnEkbkAx1DnudExnRy73wC43BLPGx1uVvwGtQS3iVxwubMp2nDgC8enpYaot2EG1XpXT28U8TLAV",
  "key25": "5pLbyePaRqQhVFJc6nYzEcxbHDLmuYzyfCjt6Zq1te8TPU4SHdAGZXjVGGAyeUMPuTLS9Po4osyXEWDdHyrRzBAu",
  "key26": "3WA3A34uQki4SoQzdqStrYoN34VDhTEYccj4Xiu1qPDgLjVKu4nqh5fXjMkieLEZz77VzwvNrYDQVPwR1rXnARF2",
  "key27": "45kDv7rf3hxcXkkayNkW6whpfkXrF1tdGRi1mox1ffh6KwGhC64YH1wnF8LSwGtej6XkDbdE1UR3nExk2erbiqRB",
  "key28": "4MmDBMFe7M3gZjPcZ1BQjNfuDwVytXEg5iUB9ewptxKX3byGkBLDgaYAreg4tSoTXDbEE7Bw3ec6WqjPDM8wEtur",
  "key29": "4jSrsgjgaWUyp1KuLy8pmYFsMR3ZEqtVRKi6fBEFSRqL3HAy9bgnq6e8N7wk9neJsiDW13faUnVcr6kv7oodZdfB",
  "key30": "38akBoSVZfBUoXq2JdzpbKXri795QhDrRFn8QkegGwhVhbcT5YeQrzQKBrx1s8xNYePQti2bzT4CGZv7h3WePcZQ",
  "key31": "4YQY5xqyYr3c9iRr5d3KpS1ErFEJNSmBzUcq7aRFex4J78zgjLfQBpN7B4aRj45STpqBH8MvdiGKFPJq1rbR3jST",
  "key32": "3YPZtqqKbKy3rzUQK3bbHyFHxC3G5bmarvjZ3DUZQJ3Q52WWYMxKTdrHqGMUvtit8yKLVfdFAfW2cJXduZtvjym3",
  "key33": "pw3FfoxnZjojh3SiN23BQAfJAkc2bfV7V92TQfTimhtMkSgrPtAwuzqFbmssBsXbnbtPNJ8MUTJ3MqkBAQR5DxR",
  "key34": "67WBMLt5Y8w9B8Gf4z9MGVZfNCAGwti9GqQtsh4tNWiLsXnKaxNCyjk4gLACfnGN7khnPdbGg9Tt6VgqzR9TF2fv",
  "key35": "669s9djmG3iAjjTvrvs18p5m87cKM8u8tr5MrfBjmstdVuV7p54k8s2g6TeJMNypRKfmPLNz4SQM8R5ieDUhS7bX",
  "key36": "PTRCecKPkWDhkzFsib7STYDfFf6xqn8gaJWCiDuvTtK9J66o8EebDsTNQ8XcDoVpA9WT6krLCzhnhsATWo2MoyZ",
  "key37": "3TiPUAtkiVV43kE1yHQaqxhDSBkqrqYxyigS7yRDjk9KHuEKNqJmHRAwh8k2kdfhimRtatpETPLCPdkiqihF5aZL",
  "key38": "3TCGmnwC2QkqDv9Zs2oRnrXeHYkYnHDZuc3XQbdGL98WnyCnn6knjL5cBrLkPWmWTL4qXkB5mYE5bML1hxzHDUni",
  "key39": "5Une3VkivQAKLCUVewYpzvDJ4PpUQ8aqj6SBn6JyRfbt2YQ9NdcMT8ewzy4MvLqHHXwa4AWhKyCK6xD95zBKMju1",
  "key40": "5r3KVWwJeRUZcsUbTuacWkyBSR9aydoeEs4MjRGU8hcP8QHhi2vmTsWCEKQrYBXuBanGhV1jB7Rnh53htMpCrcei",
  "key41": "MAjp5EfQvfkmc1TtfyL11nERuwcr51EYuipv75tswzQDuQmFS9FdR5v6C8gkAjL5VeJfsWe9WH9siF6eqs7EWXU",
  "key42": "4tB7eUj1fj1riP6ycc1UyGyqbX7qBxqXPCUavHB77keCfGfoVFpbgPUEeSgYtdCERZD1pbpqQxpmZUTRNCDazkxH"
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
