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
    "4fPb2KUHsXqaNJ3Z99axaAdf7agptqoSGDi8WzTagopaf81Jgwaxx9fWa3UNvRj7SHm5VYPCNenmMV1LPMyygQ5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ce9iSdbgfSFUFjG8igrPEoXqfMdG7rsHccpRHsqp4Kf6rk8cQBhwXBtWWjvwJKcrbajVaY5s7fevMPcsnZMQYxz",
  "key1": "23yaY1B9Gp5T99V2WYTg9pEKvDvSrbYjGEbUogkdNwRXJKCcVByXqKXXRgDiFRnss5WJPYEhH9U45Uu28z6BajvD",
  "key2": "3U1u1fq95kTTWw2zaQCfDfx2nAnmQtJBBUiBvEijgq7vUaqv4v4n22UcL5C5UADV99XFbG2EPMGqPe2DhdL8hJyr",
  "key3": "2zfFsWJbGmCr9tHnCMh4rndvKV99rSNJmMUTpQBzxswDVddb1hyofULVFGbi1RhcbjqRYcLEBTMcTm5AkmNDWEDa",
  "key4": "37dVQa9xkwbCsoTK89QVgsUSfS6r2gjG7WnFJZ3NvL4ApZbXwm7oGocEDAWoXk4SXYehgF2BZEx68oy7TRWySMzL",
  "key5": "2H6fYxXvshvrS2HmJHgJGtR8suxytYPTdEa7bcDWFVUUT9xREzFEpFNVDtJCXzWYbjEGVJyePbXp9yquBsc2PPz6",
  "key6": "4wdN65RRvKfGZwCTscTqxnc3RPFn9E68eiDTxAJwT2JrjKoR71PFq6Vcz6Ld8tEv2kyqCV29TFC4tdE8a7VT66pq",
  "key7": "4QeSvT1c7Y5LRSYcd9rx2Rjyf91U5NNZHWD87ioaUbkSURdQMw8kJRGHFUkxtCaoMRNd7YFYT6Z3w6uhh62v8Mb3",
  "key8": "2sAkkDvoxZnqS7prZvE9BNzTCR22KaqmZFYtL6rSJ9cfy1GUKkEReJGz6QfQeYLQ5s4MMxwjoz7NKh3rLcb1ytnf",
  "key9": "BjQmrjdPY5KtTy35DUVoDXnjfT3qwyWDtgZMEBDSjPZDKkAYC41G6tEACGTLeztNiooacTjJV3TZkShMwzGDZz8",
  "key10": "4ze2S7kjEyx7wGw22QuAJ7zCuQzd7NyV3JWyDJdRMHWYXGirkibZx3eAvE9SQUxfGrKjJpcYGVX5GE3pQhjbMAtU",
  "key11": "4uKM6aDsoPiB9cmJY5VL8Sx3qNVUrHKHhW6kuwC5kqM8tzdP93pvU3omt5hhJjbH4YRNH7jF21AF69ayE5BRqjQo",
  "key12": "2ssQv5CEHs5fqpvrL5qzuGH8QbxGcoD6fkgEh9bcbjonGEqTVY8PpdsHQTJSDzGxsVLVoi4HXUSEnMeHWEmcCe59",
  "key13": "4j3Pq8tiFeL81ZGJhcKdBRYiYdhh1cAZsYAwiiLTydEyuMuPvXeGgQupNFqTdJBzQbMHLGD6hW2gv6vhnDbrrVPj",
  "key14": "4pGtbfHVC9FeSLxZiSqvssUPhVyU6Xosg79CpYhDhQcCPW3r72inKaHgkV6SdV12F92LhBdVQ7o2cDTvkgSdTj9F",
  "key15": "vzMtdS6iQLkNP3bXxU1qUoZbjmFbLnTJYXX9oPoEFBjj8AkK4tBwMi5zMR7D6AMQWVYck5vY1zSbjtn8CrLmYuL",
  "key16": "2FYcXuWQuzG7f646dKfkfBfqtDpXUcpFuVvminWnD7PsB23QAjZe1PMjYCvXswZJ4rM3FxCYd564U8s9Ukyo1XAW",
  "key17": "4bnt86b7ApboQYDnVhUjnPYUEX8SEkoa5cNBxXZhLcA2RVqqJCekUdzWx2288ZywCHV1odssu2rhwKBRfJH9WsYC",
  "key18": "2fQwCK7amofsZ93GKijSmWZDuVK8UaRhppBnvRXd3vvkjeEJenGKmT1cWB9CmnjHu42Bp6UZSK4hF46GDnEFe961",
  "key19": "5GtduifmKXhHZ7KZACqM2TQ43zzccSJdHZr55kQ6gEUAyo4eFbC1UL1DXg56wt1t6E2ETUxw9dmokcVVHMhTqKHt",
  "key20": "47xNmURB7yJspbL3fbVyUNuHGNcKhSfX2RWfHXdv61ykN7kyHnN9khLDaNz7Y6yUJpJNpe9niXKH2jygZzPbYqyx",
  "key21": "39gHvWSpL6KNnNRR7DnPH2VAz1Y6EDHLJA6iznPMKHu77s8DiPaHVwScWJfRfJ6TdaWU5psBf4wsg4grDtDouYgb",
  "key22": "4dwsaRihvj2HVAFZ8FeUmR4c1qr74YNoVYbfUyEYarss4b4pHRXFtqVE4jHYNkPsha7qgv34HtdQK46Y7osz4wH8",
  "key23": "2a3uwm3bn2e5R5uBk5NJyqqk8E1YhhasMmVW7HW5BYHdBBhavWdBspENULcP6rE977vU7vr4LPF7boGz5ue8jLph",
  "key24": "3cKkMmJgU9owt9jiQTggeLBN32RxZwWnKDe9RBUtsVRh9PdEEkGFQv97rG8PD53z39jqKnmGn6phjc6aEibjCYY5",
  "key25": "4G1eYYDDUXw3sTWQrzzhWT7KsxeSV4vPT2UiJegcSUDYbBHAKGCg7ohwJE7UpiN8ZmTDWErMizD1ForVZffjXm6a",
  "key26": "3fScL8HSSyQNj3FnFUNdeUBawZUxrhofYo8Zx6pyMpUtKr1zEYMWCucVRU3R9n8hzi289dnjewdgQdnWaucs3NZU",
  "key27": "4Ens8dfYNsCTWkcepojXEwakND8WDcL12emRm2uAc4Dew6PdFtP6ZBrvY8VtyKvZ9xUooy1tvjT2U8oNERtz7mYK",
  "key28": "5rVfFjTuvXxKkZpjz2Jcs8CzEfiRtztk7Du9n4oH9RGkHmBqJUmzihVyZq1mtVCnBK1enToiyoUkyqJzUefwDaCY",
  "key29": "3nBmTLZiTwDBx46NDDwSPgDwRY74Xfn9oM4z39G2DcFdP6d3KcW1PTPBvNEqqPxAunw4U8y1V4qyXZpeScUwsoht",
  "key30": "4NxF3erJwbcGPARWpaNtijMk6Cv7Q2BHJ1k4zvARUVHGe9s8tGxb9i1VfZHa7VTEQpeFBUuDBezruSWMnpwJfT6Y",
  "key31": "3vnkV98jAipU7rJUs8hAfecNc8pFW9LXYFFBam5TywKfPohJGVjCcsKatzFC47erw6ssUB5j2u31TP8eFd31UDMZ",
  "key32": "3EHW6WYm9bLR4wwieBGknVDcyh8RG4UcdxMvKGv4roxbFqo5BQpQXsSmoTNEgHT8AGmLzBAaBYBqgnvgeykshnxy",
  "key33": "kYNXNEbWH8wX6RVuY9ck4abASKrpnRoV3fvinPB72RpJLVeZDVswEFefs4t3JSKPFwAsf1KvRSetmBNabdc1Vyz",
  "key34": "4P7iSzkH4JmKmucvonN1bupERPHrH58PsNsYrWEZEdYx5ScRX115GgTisFQ6SGcgpfDjZcPkbkb2jm8a4ix6oiSH",
  "key35": "31PdDw64r1iBfsespoxk46LSCBdyBE45RQxN2qksHrdMJEiAF1RWr9mc1FhUUGcfzEabNGDMdEU8JXZ2cWJd5tYh",
  "key36": "41ks6QNvnQm65taXAr5yBiSd492GDE2g9aK7tKNRCApqkMAGmr4cXKyJEoESXwY95nb167HaAqciur3rYvaBB11b"
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
