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
    "FRkQn7YGfZ5c4Rx92xH9a32ZnyRkiQdNRDPMqVt7MBP14LdrqFgXAbKdB7VtiHoJ6GuYnRG2XyRx8TELSv13gBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rNWqkzjJfp4H1oSqhhPvLs7nRmEYndgTNSGd8gMeetoezxhBaoVNhB44MhBiMfFN5CqFNybudQCmzkeFZ2dEX33",
  "key1": "5amCX4a1zn54Z52UaPV7FLFegRR1avpAVJH6Y9DryB63ifrJbgzxqJPwGSbyUpfK7yBF3uxVtVyZQNcB4kP9JqRi",
  "key2": "55dJmyozeq13pFaFKX7ND6iJJKyhmuByUYg4JSbpfccxGikg6VW9n4JCUSwgSmpofEjBicGJTEKFZEme3367ny3W",
  "key3": "827v8ZPtsLLRF7inu6PALSYbv4bxEvG2BszkN5w6ZZfxdPH6dyVzp5UnPDxXPuxNUdzBct49YYMLh57GHBC7w9z",
  "key4": "4kmZpVxd6Yvwm698S3csWKw5FYK5WN8eUJ8sBnXwJC9Yg6aRcRPG54RAzwmNs7NsXS4ptxCNmeTJsgvwLYbVbnbi",
  "key5": "2cYQTZoM6AJWiAwrDPCmVWcicZRjKsicrkZUPvJ4G75YX2k7Pz2mQdPFPDCfQn27fU4GAciMquj3JqWDZyNMcSXu",
  "key6": "WEnxxZVec2L4P9HiBxf8DxVsJ1J9tfgpjAJZxpGZJhg5gUbJN49xBgTHQMuV66u6YQ3NnX958G5WRsGDcuduEy5",
  "key7": "2Hzbkgg5nn7X3dN4YTYXB76Yd46gJ8pQrktrNi16rwxqssNETu7AqgPiiD1g7do2pvEioPYN9Zeq7swKGeeiBVqm",
  "key8": "NDdSyvGT8dvgPsjeRp7dpdFdVWtsGSPXfxWcKiV47Nu5xp1SSs3ZWKL1a67weazcpfFRYXFRNSjAiDce9k1diHS",
  "key9": "49fGoTT34qozMwKArykMd72J6MqWANK3Nt5G69ogZodMExNJWLNY3PCfAAM5Q55RstdbwAucrq87dNWHP7JzuSw8",
  "key10": "2GbeZJkWxnFo224vfc8uvCG6eghJBvY75cqyW6pMe2hhQokzbxLc4vq7Phc5sqzjNhNQTygSfKeQrPAesBdxUwCq",
  "key11": "5T9GL8674bmPmZdFHrAh6b6mZmzKLPyFrCrwL41dFZg2e4m7cJmEPxWyKixfRLEj3gajjjn7LqAnWUHEvjWeSv19",
  "key12": "5FnJEoBem17FFMbR9AMmhADH5dhEY9fn5j4V6hxhXg6BWnLxarC8vjpVLnrrv7TWqAzGE2NkGx4w2kb3P2Hc3jA8",
  "key13": "TayyASNk8ZJdTP7RBXVBxca53DeSnpV2aXfLmkWADxTPRixYeZLpMFotV4ciStdv1Kt1jeZsKmg7pRQuja52zh4",
  "key14": "35dciyqsgD2QbAcRnUMcZJuGJbU6GihM2VdTEzvbKyvpwmPbUjzZYoL4eCkUdgc7km8bHBei7vQ75DyTZeGimtRQ",
  "key15": "2yoH1jJWHyxgbnWmEn8kAveHbrVQV92eju1prQVMyLuR59Wfgz2pzHWcnZyt6aufmVs3xetToYBwqfYXJED7dFwK",
  "key16": "29zkVwERP5wikCwBtbZtGgjuawK3U9i4BsHthtvDzgXEXBuMPYESnQGLTb4LKPTZqh6JxoRqiUXt8g4ozYh4fw8c",
  "key17": "Vt5PxoTvDMq4UK9FJ2AqeWfwKUw9R1AYGsYm9GNAYpJJvAuhrDsKxqMREsGx2sZjfnGhascc3sJg6oZdMhVEZEg",
  "key18": "3svYZDvVWyDspxCfu8BciTyc5ewqA3QxqawWXUQPnUNnGVfjuZPUBthCVWaieBJZ3vQaWFqUK99EAFQ78fKfQacY",
  "key19": "3TgnTprmb79mL8jzEwwN7jZw4hmWTK2vK132WNNLjxbu16eQYFJRGutYZg8qomMhfTfVY8r1qLoHpwqf6xNjyRqz",
  "key20": "SXHBEDZFS1hjR8XXnCGP4ok5LSFDFLNX94JCrESFhnoXhCSTTrNJCy7o1xNsufrWAZvsaxXoFp96GWBEJq4LVrE",
  "key21": "2YfAyPdj5bevMpXn2zjqoCVtcveW2eMLjZkDFxh8yAsis3nRAs8UoJME3MkbvFojYKSta7XTjCEkfjA7RWQkwvVX",
  "key22": "2cHY21KRo3ibRD7hZq2ka91n8r1Eow6KSBPLjcArKkDMux5GXnYdSw7gFGrNfKzrMh7FTmmSjGvL1rK27Q5njQ2C",
  "key23": "4sWCA5iPJZmGYP73datdEtzDmX5ocaQmd66dc83D6a8hX5e5PGfzkcHjK7FuXabPVT8QcARgfiAbUfo8U5LQC1WF",
  "key24": "59gatiEBjQ5dbHSv1R3TuTceKyM4kFZmhsQ9BKgnahpVtTLZJBBBpBFFMEwwUugprr1LQXaKZDT6q8ncjLJuCnhU",
  "key25": "4hVhPeixSe5qCP4ajip7Z7yr9ii4aPrwkHxK764CkEYVRrdxqmfuzswvTTU1gwNKmAJPj2zFHyEp59zCY1CacRht",
  "key26": "42uT5rQ9uU52hkHectZ7qsJ1ifAYFYTw9c2XJyrvL6gx6C3UZsp6CxpALbcAgFakH9YQSKv6zX68DznHY1X383Ym",
  "key27": "X4BT6PDugAu66nVbwGJS1Ej7i4j71qnAGiSLyKHZBoSJ9hicta5JkNHLW5XKW8mN7gkZJN6kShDC59fESNFqNT1",
  "key28": "2Y7rBXsxDJziZD9CUHoFvH347d91SinCydWDCE8H7vSDG2aZrTK6AmN332e9ui5tD1SaJL5z16P9pgmjsu1kpSKm",
  "key29": "2hY4u84QtJTmvTSekemX4RW8BY52NsX9L6VYLLbr46KLe8FUXTrRRvKWxzzpRVw6qqUfefpq8zzNaCb8Kkfrqrkt",
  "key30": "4xEdcXBhn3wTzVPArbR4aQZorGuBV8iKvhWXAy1w8YHiG9g6TYkv15645iYogHa9oQSqhtr38EiMbjwgfeayAsGd",
  "key31": "xQZJTRXbECNGKBPnMp7E2brfpUZ7wgTwuoBkpfJWaZzfMb6CjGeAvkjG82P2umUvhcSDrVqHwh9QsMC4Cj5eZeZ",
  "key32": "5FCgqzKvf37Cq5UyEmvfR2EVnUpRvFpzVcNH5pekH82spXkGZYyCjyVEiY29ivR7F7ugYxwgER5VNMTUeYpRSwti",
  "key33": "2ecwchLUmq3N82bPbg8N1eVwpRzo2WcJ2apYrnYaJrbY6562NEw44Yij6aYEndhHMKLkYuKd7LyDQ1oNxR6WRACs",
  "key34": "3JdC14PcRmts61JxxRnXDaWkj7qUoFGvz9AMrP1dSt9a1qxj8cfxGR9Y4RoudrfHURWnwuh3zy7MjwQdXmvLMKzS",
  "key35": "hXbzSv9wb6kb56mEEpZs7F47UaeTiaRDyxvuDNCCmQNiot3NibwWiiPyuonxq1SQpWcFmqtotT72jfLvdAQiPkU",
  "key36": "JiAB8QPXJUcSygzYgfB9h6ijT4BxsCXavoKsr5TrBp8eqyqCDRR72ZvfChBEa1UKky7wDnd4frNgJLuqQtECedt",
  "key37": "mnX6jtr8hHRwa2Kwafe7RtoBVyq1BVvnkiCZNHSQpNomWyNK2HHjv3R2Q8VJBoC51s13JWodPj99Hvc6oMCeiWf",
  "key38": "656Y5L3mbnaMBQFbPBr7fZUYm4L1pnW764fDrq5trn5rWGWVVpZpt3f3vYNczz3Uwq2VtCrM857uh4PGNKJbjDJr",
  "key39": "Qz6ykDNV9QL7Azs6vb6LWXDEgUNzJFHjHho9VF1nUyfh4X9LFGuGfJQGGcoLzH4Yuyg9mGKsYVfVSv6Gyi9r3gt",
  "key40": "qPzPKWsAo1vhdVbYigDskJGRpVYs7HVhkK2VHwVWPhEJvrFnC6abcH2xpnJdZp8y8KqWikzGYE2qncYGZqfVQ8C",
  "key41": "4tWfqgETW2XXTgSvBtARjEyH9gG2SFtKDWbnrytPyfM2ddozxkPQj7estxDmzZErFtKaQfqsr9YG8x7eFQhYpPpy"
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
