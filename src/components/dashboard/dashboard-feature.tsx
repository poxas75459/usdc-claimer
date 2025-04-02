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
    "39Vqmgtds8EveQ1YZSUxyZne7D2qYTrgR9CKcLtVV2yokzLiRuC4HcoecugHyeJcG23fS4X1NyBK5fAv2HQNSTvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xmask1NZ6eGMnHj4k6idkMUrkufaurJ8NbgNdsXvi1hLXbPZYFaF8bTdzogqnEBBVSfyU12epVBX9rrmnFjuR9R",
  "key1": "4viU991UwWA7fR9scWasiTvEy1BRsnf4VRnD5dhJLXQcWgszXCJGd6bVn4nfK2NyTSh78B812RUssPGhZDvhwJgv",
  "key2": "4QoyhpKhwf9UAV6wZrqtuAW2LaS2jaMoutH8S5mnsDVaphvgzZyAq9NSTjtKoF1k7uq4Uv8H2HP4mssdaw3Hijmv",
  "key3": "5BJ2Fxu9A113XpErG1MYydW66CHsxSXGxh3yVaYqHKXNWcZs9kGeebeog9v1S1Hrz1FwUJjoftdPYRFg7dnB7haZ",
  "key4": "41srvuDKVVs7yuMU7c6U2PA56K5aQwxto98QxdUcxZsQtYZ4D5mNB55rL8YYg6pkfMqF3AGVjXXmuYm7Dsxopqwz",
  "key5": "4gaM61Lq2NV2pPu2FxGvYa9Z4zvMeHex4CqeFWe3qmsqRVVcXLAqeBpcz78nCmSutiAwo1LSXFWPiGjTX5pfFfsW",
  "key6": "F6sLyaqdZUTWE2cioCGZZDYnSrhz83X7SeXibT3tej8fXrg5zXibCMiACziiFihayCSvCBjNSwj4iTg8de3vbu3",
  "key7": "Rnv4kshoUwEMQK9uD4WRQAML46SS1ci5YTjhRffFmNrnwZ18Zi3pGMYWGdeeHy6SA9Tuo5FcrErmqgsjpAsEo3k",
  "key8": "5Cpcg2iytBhxaGXBKJqTkxCwg7rPedhsE4fX3mJGYq6vFLuG2zdfxHrTNku3G8wQxYGPMgzWerVKHMCdMsJLijmh",
  "key9": "5vG64uvASYoqh66gr5zanu72a6U1Q56QBCVAGYSgJqBLNmPLrMDzkUL6hA7izXRNsxM5fA5UTvHnBQdsr27rkUAs",
  "key10": "ihjnWR9KHx2arYTeXXxzHqBia1SqhaX937y3mYuJiRv9pG9U3GSqHEEpeQ6BBPpm1oFKmVcjV6rhV9NrsfwujZM",
  "key11": "5JCYL3YHDp3nZ7LX1WzhvdEVjFvbLffCacf9WbUQaNBWn1YAh98njzbUSveDpU7z1LdrjWDyzHRS6wKKxaQXJZVH",
  "key12": "4rZdu4pfhfmk11tfAR3wXz5SprSr4tmEPofgwYm2jeTtT5DYkUTvECpgUtEsP2pavj5o3j22X1TbUrcMdGjvyE2s",
  "key13": "66hK8hG7DTHqD29AZjRwftS1ALeYh4nMtuqCXg4nC4T1WvEH6P7Xdf2N4BPGeu4oqwn6YhtNhNFtQn4KPUiVGrno",
  "key14": "3khwPvKeTdan99xKa4n7DsfmiZpPLQEwVoi639HbsTxBkfjciTJyCA1KG8qpi3neiR7wMphH4EiveJmoNvL7DU7X",
  "key15": "VdQsVnkzwncy8ki2s1P8XsvUmhwv5wrTaSNQJe7YRZMMfLD3UXWEiw3vPcWcmRe8nArCrFqC7mQnPNTNPTTEq91",
  "key16": "3CKcmneQZGBqqefzeAnU7G3haatDcNr4enaBKx5WUFzkZ4UGc6GKmFCCASMaKVMWwPvHjKzqv47bqfw3ERQo4vGW",
  "key17": "3WKKGzginUM9xWxciaUHHTjxWMH3aDVvBFzj9to99pBwn1wMY6KtJV8M8eUnYamTiZMXsMCzpCcLSsQXRBy3fWoH",
  "key18": "2A8129nDyWcR3mw4WygNdpYwXLnB7dSgx8dQD8TkCezuEpHrTgGsifhvnxvUbGBv3b3Ps5FtDyvDMf6vd7511akt",
  "key19": "49MMZzuEK1uySwq1qipRPv4ZjAyTJkUtfjLqbyKKMbw2bbo68ZdCTg9WwB5kXqWGBRhj7NaTFfoXxt9AwsYtqVwt",
  "key20": "6WGji4Jy4hg8kzn7EtDVu59JD1cKaVMmhFKzGbHGjrxV7WSBFyKVbAUf9zRUTf63BL6Jn3roQMTMxLW2FETzYBw",
  "key21": "3jdRCV1CPdTvZTqzrvsjYHYNVWe9e869KHdJVgQs5xAnumvdnojy6jt4WkTq1SfGpaqBGhpZKUH3V1pJDQHYPE1u",
  "key22": "2QGA9982hjrNS4jrKnBRaZtFawB5K4mEQgqTpMm9TsMVoNPm1k8jN9ZwxRu4gtFCDvuQZphptQCz93vZVr7g58vQ",
  "key23": "41cVosageVxdJCkfBpLtBm4qzKsA8JyWNSGHCQUpatTaPm4AWByh7mRM6SP7yfavx7eRAzCCP31boEfqCMU1tiQ9",
  "key24": "zFmhL8kcNPHiKKZHUwScjvWdgrnHHhdSX3bJfCpZ8TR8zJoWhUmZf7WorBJAA5c2s33NFmdzUom6uLJdPiu6KB7",
  "key25": "3uH4BfNkaJ5THPCNF8U8XfsMyvXE11v8oS5sTUGqa77B3xX4GGrbGoERNoJLCMFTJ1wMaVcsfymhLxMi153MTbew",
  "key26": "pN1D72wLLdtKgN7GSX1TRHNwLMh1K7FfsrpTUtVC87FQfKNHVS8fdhkByUXVcBjc2SMP6bL9msmkDQaCdwGmy4n",
  "key27": "4RAypFioGGMKGGbAabzm55icvD19bm83FDppLg1QixoYnqV99QQE6XLQxhWZucNpyquZF7EPkTirHXYUqQrWp8x7",
  "key28": "5f3Y2nTH7pv4TzkeksfmWfXwLuoWWEXN7X8vexAXUvtCMw2bhhF9RJyFjdvsLvu7cBu7iAucQdV67iLjuT2jgLdR",
  "key29": "2LCwwDryQmZZ7ePTg8kwnhQqh5NdDuH1koGtBGkAiXBE8qpNwJiosJqM3FKfTVqnhYpV9S2caM8bGCgYqYgebDDG",
  "key30": "4kvPGP5fRNXLoJNJWDccvkE7enHF9GCQfsWv4RFri6eCHGAmzHZC7PdFKTmfkLtFso152BUSiK66TS46q7z3gaQF",
  "key31": "YrwFW7BAS2HPR6b8oLjr8wPKA6f5a2vUUeF6tbE7k33bu6oWpsUCezxww8EbRMm4c7TvRmTbBq9i7soFFKdSX7A",
  "key32": "37jtN2XTs1wUTUKZLxUseZPPomyYA6knCGDRT7zHkqLuoiWijr7pahhrZkaKmkM339wf9rwfdNbsXAfMS4HTpH2R",
  "key33": "5RWD2YoH6ZL81ChGRpAoWSvLLofgdLJoHquafHx71TfcKsdxZ8u85e7dJ1e3rmaw8TNj4XUBRzVpWLnx7hugxbbS",
  "key34": "2xsfpFsrCrLtahoNLpXE6ULZpCA3k6VRUWgcvZKvRonq473enNQ4Mq5t2ZNBGayacRv3pyoYUvKxjqpRkkf7u5tS",
  "key35": "5JSPZY9r1xmytKCTyqb5pqURuHuraRR5pN4goC5JCtXJfWu451hppG5P63B357qsG7T8dkC4na72Dj9SxcshorGw",
  "key36": "4QLpiGsY4dnW2hboEkVE3vD2zPjoqGYSC6HKCepexPnenCWy5MrSjfacvLjPmtY9P43n3YEhc5dZt6VXLXjFByqk"
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
