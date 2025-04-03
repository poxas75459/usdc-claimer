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
    "3gtd5YMhPt9fmrKsEpWM5AatdoWYF573KbSBpissRDSwrXKAFvCkxGa7khj9bS9pqoAKatEMAz9Ai6h3GyQjRsz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jtRYomFJN2x7PGJEeWVA6vmLiLHDstcnRQhiQHa1EwFvDNmJ6JTumvQeHLmkppUCuLUjydPUKQqXgVJnnk5FaaD",
  "key1": "QpWSZvvt3kqqQVbrKdJXAQbTybgVyzzxBsq1fzxFohF6Vi9MrZPELMv9iH6ajPQ2UbwmAKNaAhewpSwYozGAQ9a",
  "key2": "4ak7p5dCv3FS8G4RpcZVNDLp9Risy1NRQToT97NL9raDDBsqgPMFDRyxeqGBPcmQminu9usVuVaRwTQNyFGEBxUv",
  "key3": "4ANEqsRm4ADRDD43fc2FUD6Xrcq3XD2fg1eNhjB8M6ToGrzsgo6YB7CdoMjxUsk6R3sA8esWKVUPJaTypRJfG3NM",
  "key4": "Ga4Nr1EHGbj6wo5RxGcKVFeFbXQ2H2daXrdnP5wTVJ6Q4xLHWvwaj85iAJufQBNi9YyX3Z3ZrLqmdK4MeTZyv9V",
  "key5": "AjbmY84CUcGeeiNco4QrkzSS2mCWrzdP456Vk6utivfyU3srhQP55TS3G1g9zwfCvqFNiqqMJtRwsgVs8yZ82j7",
  "key6": "2QATtuYNnaATX1gu9NYAtU5nFgLCMYhbaz6M5Uv2oxEyWKBX7vSw2n1U11rg8UKXtQkKUPM8XNbaXmzz4J6o5fCQ",
  "key7": "2eqTGdtRQYaYAFRgABg7HjWj1Nmn2yr7ZqEezp3JhSPyhqbZXfh3wPJq7wMbNMQzb1WEubLVAZjdvqw2Vxib8BV6",
  "key8": "qAZoGeiF5ntZ8UH8S6ySRu7BjzWvXYZV8aeJJPVCw2NXmVGtHLfoR38ra4FfGNFcAUACxaZGRrC7pyp4G2f1cde",
  "key9": "2Gdo161CqJ6HzpPt2Qq7fK66aZBSyychygRsnmCSzySi7bqVGQCaFGnkgTBeJpCwV32GX8qFdQECmRSV7gEYFAVT",
  "key10": "5XZDWq4sL19y5xzhqdbAEUkxX9kgDjpSKC1mjQDizkmHQbfS8kWQtSEUNTCbvkMaKU3vpRjRUZJLk7dFvX2dWird",
  "key11": "3Ryf8SubLmGya2hRnPZPhERi7wuHALfhgicyFcPxt8KDzscNWEVSCcHRHiCjZszwCmRg4o3xqNSijPAgPX5aymyB",
  "key12": "5pSPefQwbi7A7N8hpaWmhtGanWaSUUF4rynueLmu32D7Y9ZjBE4XWPFwfDVr6cJu6iiMXxQ7CRdSYCWCtmmN4oc7",
  "key13": "4bcdym4AjRaR1WrGXdQ7a5qJ7SkNLTv56Ga9JXc8ippMK2wF5GV6zmSqJQE5atE9MA9KShp36Wj881TyMsuZ9sKq",
  "key14": "5AsvjyRZARdQQNU9V4LZLTTAJ4RMau2PW7psbg9g59efbDmz8ee1vZzJNXGis1eLCbB5gST75DtJi9FvFR2W4QWq",
  "key15": "2FVB3ZiZnTJq5vNFpRWAAsrmEr6KLRxRdFMMT7Fd3THVTetfgbfrskRfQr7TjgeJ2YSrJbHA8jXhXwgNRFiA13R9",
  "key16": "c2pwRZS2PTUrwTxeidqKULmhCbydVX3ANejSpYUkLcceStFaYjrzu6UCtgBrBJb8UET7Z47ZeZFvZqBxH1DyyCa",
  "key17": "3frdM5L8xF9rHrfAjzvjffcg7qyRpQAD9zjSp6DSRdxJ8ee6o7ef4vJSgnPPyPAwQb2A4ir2H3bm4GJVUkBQwiBC",
  "key18": "2SB6Ea6dGc9ENULi8VGb9DHPLuLtq5TwarfEBnDXAVZn8Lbot8rAHo2Zj9SdSddH4Bv2duLvdhcJ5ofiFKZvSrAc",
  "key19": "2JXKtqn82bA2YjUJyZ8zJZ3BEzMVhy9eLdJtG22bLkJF6Svmsr6sidwAifnr3yNQUUZTchyAViJK9UGnE1inQ2g8",
  "key20": "4zE8PmZ9H4GxLpTuXJpsyCg7bcGfPX7r8bSTmWQWGgHmfKvYJGZ31ZH4M4XWMAAHNnYL8SPYc3tQcF1X3a1AQgEX",
  "key21": "2sZ8dr1cKeMsobVTFSVMvw7uzrXNTQMdsFrr7EQ43yYnziQmfaD3PvRvD8UmXSrmn74tqNUdbiGCZKnR9XiucJx4",
  "key22": "3YBFySVDw5RrR8DiaFtPSc3tS7x38oVZMkGCyR3fP194MLBSfMCAv5m8FFgw7msgSjT2rPJqh55rEsTcTqAbBgh7",
  "key23": "dS5F3YxwBMFKDxcair5XF1CNmQkKZquoLNKZaU8urw6UEBHuxwAKuMkJgTeBzTp965TSBEGFmzSrHtcuiesYCUk",
  "key24": "33N6kk6AoTizrSctRVeEmFfzddGTbEDRHkNPsYoMCNpwXxdBddvYJhuUWd1FsZVYK1hS3gvGqWMLDxo4NnK41292",
  "key25": "gLEQSCSqyH5DiqjbczkjaaoSLLQT34PdGZqVEt6ygDj57qsRK2AKZ8UgzDDHD83KNmopvZ1w2i213HbSKg5y34F",
  "key26": "48sKPByPURPFYcdNVYatf75H24jYhFPPtCpzNKcqz89KPsf8KQdz7XTkS1nXmpYASTqyUNHMzP71b5jmh5joYncs",
  "key27": "5WLL5qfuYfBQDb8T2purKfv52sDN9peyWPYPVCnFMpqT5guon9C1rhEbyVFXm25XnmQsumHGnxBX1smZgQEH9Dux",
  "key28": "uLWDwVikkyYj7BYU97nogD5qrUhZ3dzyuJXs4MPrZ7xyHh9D2ZBcuPPnf7tdwNZfKuvXKTpZfFQrg7c5ASHrnTX",
  "key29": "2btxASH7e5DHmWyWte9F3Jrjn3ZTiGhdJCdejUXn5H74i8RYXgRByiy2yjofSYHA6fQgvJcdGCAmmd1wed8JvNXP",
  "key30": "ykT4NtZX1RSRhVWMYTnUZQMjwzUFs11TCTJoMm9GfU1pt51mdSJYL9pKu1xjeLM6c64JzbKcG2BnxjJgwtnY4eb",
  "key31": "4DPsrvWFXR6qy14kpD2Awd4Cr2YsjyJKu5WKZa6ufuJRFHHJjouEDNWBYWzqryE92FTzygacTi21MiL3HKW8DEUQ",
  "key32": "4R5zJ4e1wgHBqmVDc12n7icgkiM9V2EjNcDrb2ybCMtEaC6DgVm1rgKE2LpSuBLoLQH4dUGWwxBRVGDTdPfS4S81",
  "key33": "5KAmX8tTuYZ7KUDxbCpdAjwtqs17xcwuuDBmePXVXobTbMKwE9kH8BL62q8gtHKxwfxYbYspS6g8wU4nKSUXB2PK",
  "key34": "5mvM57HBs57nk8hkCL4bzmyD4HCUvmkSaEvRxZgmditJtAMTKyeA6rcoziAA4xki75d6JTwkr8Qn3ZexhVjPgAx1",
  "key35": "3LL2iD78ypS3MUYqoQeWs9G1eE7eD22MtWpzv7BXkUdkYmn4gC5nKVjc6HC7SK6aMVUKJaLtG66ogCZwNTjZExS2",
  "key36": "DKV9QAMf5Jk8VHPXYZWq5gYPjYBwCpSJWCuqxKgfQZRapkSs6KUvGy1UWkrDj2hYHfKMEHVwtpsvs9oxrD2PoC7",
  "key37": "a38DG2nvL716qf8aNMunZzcHjwEzwcZbZDBMAHSjtVHRi9ZjghqduyAisGcZB3PgAcMdXmzv4RhPDn28n6wS2Nx",
  "key38": "3SycKKjM8twNvZZTmeWX6gUPo9WdFejseXBZuF2rhR4TwhR6fjJmPCYPgq18JrGRQx8Z46iRsUJyLFduwnNcfcat",
  "key39": "33b4p9PwRMrKtb8R1LdEA2J23ifmjPgb6BzxPHLG5RU8VdSSg59t1GSekmSDFnLo4M1hVDEn1Vm39mxiQmA7gKqi",
  "key40": "566pSaxdFmF8AjMMVRHaQqJv4msgp69DsesbmKPTp1SvkiiQDJqzxLESLjzuEAkBQazJ8DLTeCNk5FUL45ubGrFi",
  "key41": "2LbtycWWWAwkYSEiH2aKp9PAM2KrSRVUm8pdfqd56Bv8wLeBjh1BSTtHGVJRs7FFnhi5bEMKK1GTPnqpFNsRTj1d",
  "key42": "3vgTpzZSs5uipa7a4axfy68bn7GZ6rdACjRqSKdfhqXopr61QsCzG6cjNeG62WfeUYy6DT9mMvDuF4t8X4cYDXNX",
  "key43": "8Zx59HXUDZZxdFGr8BPZX43DCouX4f83oRN65CtH5F5PZoayAPdL59Atuwktq5WQtSN6KBrcFVYA9zyD91mJFNf",
  "key44": "5a3EuwJnGgWTgxB4atDQT34ej9sr5E75sq2Y35Y1GQa75uwqawWZUKuXbvTVdmxPnzRmsA8GHzo2GavDqa6Mz6UN",
  "key45": "2n8pPZrMNf7Nk5Hn7MabsRhAu1LRAux91gAvaquwNBJgrFzsAp7JRtLgiopJPbPxftt2A4xfjnkTv8VYJbn9XuF6",
  "key46": "4t8erZmeD7o88DPiDNqsGSWAzarY7i8V4mk3VSu1oC37yuc5sd2UCSq5VnNou9kMkANqkHBwZvAM9xPQRXLg8d2D"
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
