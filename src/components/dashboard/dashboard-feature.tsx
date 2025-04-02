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
    "3HEUctqbt1AhMMmJXrenX8kRHo1ghKfkkkrp6nhz3XXrRcz9ENuQJyprQfnQsCw4ZkYBruX4XN3wo5XedWQiHxFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jJhCdiamM848e3P8VJqZUoasPWfHLmHbSNqWkTr1qKG2iGijdEFML6qJ3GUDHtSU2Sca8hAUFZNVgLpqdTXBbxW",
  "key1": "QaHUpxWAWWGH3RJr4CoDJoeaWoa6LueR2j7eBCvKvtYkeBvYByv2MhSXXpzriy6XpMA8M7cB9vyrPBXTKQtsMCF",
  "key2": "5ZiuCMqWqK6UDDgLEHJVHfkzbdHwqKprpa7qjH7hT5CnyHF1aaPgabDyqMVRzXaaNQFxynCKtRjEYLDZsVhNmM4B",
  "key3": "TULadP53vnGtqGtRk4GbRFXHPhq3U8q526nHHteBPw1YQqtm3tqXxeXnzAS7m2aWzcZMSbpbzoGz4pQxHxjGLLu",
  "key4": "KvfnX22KnffAjzp6ccobNR7C4vgYE2fPWcyEu3TQfCs9ScUkTtt7hAufFL5FzfdnYN5kiTVjBMqLSS2jwjQj3mz",
  "key5": "4Y4g8RWwgGPq42d9fAPAq1Y2QgL5k9qV9rzw5YGNQCcA6CEM7Fv7NVesMPbnpS1qqMZerrJ3ds64EywCJoihc1VJ",
  "key6": "54RNEkachXgpUMzAFDybyBFhRy2ULQ95XFqkpTQLGE1qNGSTUyuoSBDKCQhZn29mR4Y1VRAe78oBXoXeEwx9GGW6",
  "key7": "55o3tytN3z35xSqbZgqreh2ZqkC5A6v2okQGw58np5rqTvAZg7Tjrh9P1eYHiNTxLvuaAojZ3D3nYFWMb59qq3TY",
  "key8": "2HAFcV9vVgxdp7EwbN7D1e2DPWuy4T2uS3oQRNy7tv8Htiw4PgZseCqmmcFVyq7JHGph2rSyqHyQF9XNMDtsknam",
  "key9": "2NudwiwcCyzaJEhqgMwV4xaAFPyZCvD55Xsz7vJogeAvNgSHK4zrARGj2VVWY71TyqjTLYxiJ9zfdbe8EmQUWA7R",
  "key10": "3DskGRzm8gGAip18xYodYwdtLqybKw6hZds9NL4NNWkvwkLsQmRRmvmFnBoHJCFxPw73rf8KCSgrACPJRuzUcna2",
  "key11": "3iYK2r46FnXpenacd5FUtciFM4RL8zjDtXh8Knt3sLVkTu5hsFZ3xTBQnN33SqMKHTzgmNJy6FcTpEfWKL1VSiWv",
  "key12": "31HZref3Y1vjfKzMNBPu8jwvivXYcCu2A2DYBUqtbmk3S7WwqydtTrXKGEnaFmNCfJRRd3CaZyawQTbQYhxcqT5i",
  "key13": "SyNwvWwjwDJH4Q88Wth2VnW8dyPn8Q5RcZGyeVdZSAvzz9YRGVWicwkkufYnUjv4PmK9MGnLmQ5sWcawxZQd3Lj",
  "key14": "377M5PzjsTn67hiA2i6ghU72zQu9qdpYUZAGM4uWfZHwxjvmL9abqX83zYREWEMRhVHiqySdWqG12KgMacg4PsMg",
  "key15": "2rboAYBS6ybU9As7uuQM9vRWQSLqgEwYWHSjZ4taTLMUJLjMCv3uajrk1CFWN99yhgtwM3GUGPxqZCCxmxYznGXg",
  "key16": "4d2BvaJ9B4j7vX1GyQxFg7d3Yz4d8NofdrUFQT78kNSQEiqjFnD4XzULgg2M9SJMpXW1Enau3ZgY4nDjY8sNKuXC",
  "key17": "3es8Vdo4YZeLRC7PK5Veh27W6zGJgE3LUkzAyaQnLqwchBHmB8zeRAA923rLkxssKWrAGdJyHVypXV7kZNpMNnDJ",
  "key18": "4W66MgoLPz2YAVkkY7WpE8qsHruTThq1ofzx9tFZrppCX9DGaT773Ph3xFGHisraCAHS52gg91cPMQMg3YfBLanX",
  "key19": "3BTKapZJWEuidmdBoMBHzZd7YRXFr99w1CFhQRTrbXJBfbANEapLfWkTK3Bxc8HgRahvk7SG2oEVwWrXCutpBEEp",
  "key20": "4fxmj5fnAQdoTeRQiX7ByR6Jkj9mqMZcVJ3AiDaYtymbFutDySGMUGn9V1rsfaUiVGzFb53mUhuweh9uT5CmkDPm",
  "key21": "2pD3zw7BkBSec5DWqLHLtHyZdVithjACet5y1Dm2Lk4bwQodLYLQqda4PhioYmXtTuKtn9ovDiEnaUaBJn8tG7U",
  "key22": "9buf2b8VMK71pLjMtoWDAd8DZEVcnoPjHPd7q4LDq3DNfsDNg1JdtxcmEpDDhPrWkLqeBUyg3ZmSWdoJBDifvRv",
  "key23": "2NroAvRafjet7wXQr856SkXKKjffuJPGEb61fstnQb7ehh7fDbJAiM5QSXDmdRc5R2Yz6WU2G8GyktzrHCYjJgEs",
  "key24": "3C8x7qCDGpgFQfS1jP3o5TDkiobYsykcKPM8X45duDoSjZwbGH3zhPY6soeXfneTzpNhqUsnjjQvQ9rS8QfYgwZ8",
  "key25": "2Azid8sAk9h167bxN5y7kwpmAqvXv6xKUGYyNMFKprsfb8srW8Uj5d94ABVQw6S6PVU4qz8DeQX3MuEHrSiYWrME",
  "key26": "39RHmw7K31BiAXPUjprkBRwNjFk2bvASfWcuaN1R5zAC2sVDRejPscAdiiers8J2QGGiyEJNSuh2vjuRnykATgau",
  "key27": "2m5sWNP3zxHSgqDQx1Jz4LrcQ2qpSEeLURanFXqehz2sNKASjW8LrrCKHQJ12uqCShVATf1yJ1iRU9rfjPLC54va",
  "key28": "ovmchA3zV6UCHuuQ7fSWhLkuiLbSxercBxnyApMzWrC2oxuQHKf5ZHLnmSBVc4nUERrhpo8AtPQ4Lt5xzAwTCSj",
  "key29": "427LfzNZxg5FM2x4rBANGCdNEZerzSxyxmWcmaRaBA8WUj5anQPQ8ZfF5oDhEiVbDmQYibbf5j3twTsDp9Kn4gx8"
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
