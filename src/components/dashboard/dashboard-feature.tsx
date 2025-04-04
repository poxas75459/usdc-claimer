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
    "3eBURMF1CrKWFxtAQiwLKcF4AMjfzgZCKaRRcSwceLqJQy8yjov26i9U8Awp4yVFLCJvMPnrZSGe9CPZ3ue1DdbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5co3KhXWuMJWgZuFCXerhcgNMb8LTLTub5kVjWXoPrDrWSoAoRYx1WbNKPHjCteF7xLXHyu86BDUNLZXvDkdQX3M",
  "key1": "53YEMgP9rNDgrEsVjKvjndfe3PQX1RQAGK7BdBHRQXweqh8HFih2qQEQGShxXfH1o9XQs1Y5qbk9m2kf64DvNaXF",
  "key2": "3tm3a5gt4sm2QcoXiQtGunB1adXEc65ukceaHXpkMoeB6AcSUQEZu2NtFPZFqzvPjWy9oq85DbAVQNT9RvQ76GXy",
  "key3": "5rRJ2BcB7crPkRiBbJCBofgvnhEKgryQkwh521yxS6yhviy7P1JpMcXt55QmjAfurnC6Vo9qftTb2uUWgGvkx1J4",
  "key4": "55tAPJRKVwEpRJ4Q8p2k2M1BYhfKD4jKvo1JtU81UsEYi6iaGjCrKJx23MiJMm8XAw9c83yLh6txRbmAVAJpGr6N",
  "key5": "62HGV4Xc4pCzoMhq3qBAeqfvyZh4YAKpDf1xcxpyXcxPpfLzDXiiQK9orP9E5S2K5X3xGu2MLXasLgE93f1Cv7aR",
  "key6": "2miYKHC1SyZKRZ82irwQRs2kjZ2muyRLoREXKrrFoTZfekK5W7DsCaXHfUew4CC6KoNpDPFBscTfBzV6FQv7mokJ",
  "key7": "YVxxoLpBuYaQF7373JhLtPupgWRAmjJYGvnSrs8kmUR98NP3fELwZvuXHLuC78JQHwZ9K4k4dtMqZuRFqLJtV92",
  "key8": "2wReUJZkFNhkaZz5XPde1TrZFwfXjGmUYJuAU1iW2tYYymFN8A8rGiUhQTQkkbedWdiqRHkngA5fAK1iqzahhxC8",
  "key9": "4jdndeLEwDxYyPQdRqqFfVhdisZAoo5gS8LbBaNVgTemYFGxpe8gn9GcTJ1wvy5P8UmQUfFz2xN7rcMnmjjtStq9",
  "key10": "Yfk8MVfjea6PvdK1GpGrgWK2aQvKf9M1gQ4Z5k8McpyVHACvZsd6RsVBShDHgRmYMDLPkFYmqKQh77WSdubLKd4",
  "key11": "2Hh2CqH88pZnYdJcaTWaw8ztG1QpSw3ShiQg1FYXGJSXz6Fa25ckAEertKiU2wjxUsSyJbphdaECooYhSnxAKhhg",
  "key12": "3i2zRq2f8fjd39WR28LPnTy2iqw9g92qo5qBhwdqcunyApreWC8EqhkQGuY7aJM8wQzb3qEdLuW28dCfQMiqwG7F",
  "key13": "5uE3ebPf3cB71mKu2RYPWJrqFJCXS6VXACxgTUvjNHcAnqSPVkLe3cpLLEPnvBsLVdVtfMZuJn8miRck1fLKUMoU",
  "key14": "6tbRekVzpni66sjAJJHqtzH8MdnCGMMNWAcpEMGxHBe6tJ3dUCCEP5ydQDRcKVmkt8zpERsFnKuk42vJxoC1dHT",
  "key15": "2G7gQqcGWqyVzP5jRc6PNBxaBwoECeC7WSbQgVrascxyseRExwYeNGFg8tbq17u7TWq7N6f3KMV2y2XJG6vVxibV",
  "key16": "5Hqy5QdfDRTKTrSLjTN6Bb6musKSy3LqcLzVKimrnnCwkp9cFs94PhKi8RCMiHQQU3VH9AhrqYPVRdLRnL2xkzHN",
  "key17": "2jRDmHsESPhiG6KrGn3qDsSTofV8go7DSEtmcqhNNckS3H3THM1vgfVy7svdK3YGMcK1BsL181tJSGQeNtK4gAZu",
  "key18": "2r8Ft9e25uGk3KttqsGW89CvA3JaEUAT8ci6UyzupPovZP9Vb8WqWVK5dXsCVwz3Z9oSR79omrbcXrUb95fU9qH6",
  "key19": "49a8JcqbSfrURdCEeHFpzhSTuFBGntv9TrZvGoUoxDgm34ZWQdAqVAi7bnhJsCKjuqSu7bhjCRy3hCkdVf7g9tz5",
  "key20": "65oGVnodJ18wjg4pLB7siqDdkKym4jcXcQeDRjMfgy11KnNRohWqX8uoNkXVSSfMdDkq4CeHwuSBrBZSbkz62hLt",
  "key21": "2bGEGUrvCNAeZLpxvMpYytbmz3wpw3bCdJhCqRsBWFKtTRZJoT4jxg6Wexw1W1Edxsh6pyQWSp3cNKAc2KuGn59z",
  "key22": "3jZ6CeSNpdKKXu2wBwsWAEXJPcseuMThKg6oyLUBcSF7LEnE6PT9eUTjYznjAuhCLQ4Rnm77Sc4Ew7KyP4LzRjKk",
  "key23": "2ft4ScAuRLhrM93wsCsPfqBAkmuJeR55mbKZZQKazmekEkWEnCTnT8oSsvrdPdS7kMH52Xqf6nybqRd7titNQ6uE",
  "key24": "3NppBocCEEWohzN4JBMaShhB6TTCdr1tNtAYaLzj6m2xp91vAiQLfpHWAXxChTGeiJoitvGjBsH4bHne9cXscUq",
  "key25": "4PJDTLed8iRjBi79d1S4GxM9yp1TNrd9YACovH3YVJsGxBcr1BVjqL6pCmnGMQh3X9WnJFG836WxAsdQR8NBv5LN",
  "key26": "64gwNAWLAtYNTcyzVAxvYsXKupohTaAGZmP4v46QQ6UuNYyLMUwEVBvGVNrS5dxZf4zuLZi7xm7mp6B6TkbG6929",
  "key27": "213ohVVoaWz6Eq5ewRYo5H8tu5XDrGdgNyWnjFusdEZups6kbaRKdivLuZpRicGMUNk5jpTrSbVbWpghRy22qvAF",
  "key28": "7ajUo1phvkKgadFdF5QCV8zZypLhrqxeLnmh9yp3uXQ6LSKyUoQxgCei7a8vF6rpkaDKjfJQCCya8ieLp7SWHEE",
  "key29": "5Q3oWBAw9FpRFezENS3FjdBdiG78zX3aNeeRcJ8PNRqXEVi7HRSmHfHheX2tKz3XJnKAqns6QsFfJ7HMXqUoBp8Q",
  "key30": "45WrWKqHK9rUqQyFT4bp3DiG9ZXHoqdZCKWw5ADcTdcG2dSYa614NumdKXW3SBfaGGbKVfsQixZsuqyS1F4DmW2U",
  "key31": "4LDbgBHnguYubXM65S16CqWaX6wtDGxcsnQS3umsD9eDDH6yB8M3HunE6BLAhuYeHXEikZ15Ljvm96Weo9n9mQ3r",
  "key32": "3TyQqvPfD2Cmg9CCh6ujp6DAM1SVDsM7ZKwttMuKpyoGyTHXVJVS5yoM6ZLArqyjSCvT57YBKjDFad7K85Tcrktk",
  "key33": "31rLAJPzKtEF9ebCxbz8nJyeSGmMkL2cumzfUDboSciYuZE7X4n5AMZjEkL42Nt75ZVu5czVUWwxauvYKA78g8NM",
  "key34": "55dziGQHYh6A2NSPN5aVGP9D8iQWbnkcjyXZg87yfLpwGVA9bHRSgAvVmLBsoCuNUxiXy3QAy1tymbX9oLWkb1Nd",
  "key35": "S2uyJ4CVeswjWjDug8wGQG6fnB28MqgUJt5Ed88t1PXSnnxuSFwj5pGvyaAfUsEf8WJ3Qq3sYZG4fKhcK1u9pm7",
  "key36": "4YyycH8o6FASBAqSMnbehEHrLVRmUC7HFXXdxM3FTEaMTnLJ2aAougdz7Y1DcHFLw7mpjCi7YFxqH3BayUT7ixRu",
  "key37": "3kYhZT6JEg1qdahHLy5RjzVPZYpeaJHwCkRF4GjAd9KjLtS7mFU5DSweXiUJeFeot5PXC5BF9EkgeJjE3wwMX7mF",
  "key38": "5rxxtpWg1pk5FsbXFeN3KcYHJsgejSgDsEgCcH9hTYFH4M6vXUDiehdihyY8wPN5xbLziA6oRWFG2nRcepkTzMgh",
  "key39": "5tYBXzyvwqDyioiRuAYcATD5au8R6oRX8B1o6ogLez5dGjE2zTPfa837MVd2iRPCPUW7jBBLMxt3sXmhp5a6pEso",
  "key40": "3wkfq9YJsaBoQZDt8osMsEKHA6KdM8r13hoWs5iH1b4DiHnDkfW8XMrCcPtBR4GBBjfs3FycVgYgPYwSj21KCtcu",
  "key41": "6pSApTj4CG1EfHkx1x8jZJWUYiffFFGgZkyRodhjaqfNCGW9Y1eGbXTxbdbCEHrsKqtQtJit5RE9ksiCVebBJUF",
  "key42": "22gbYYYGrSqAd18NGzktSyYmZU9tpUckXk15CxtVdUGMCVub9shq1nnQsXtFTbdrA7qVVGREm2FQJviJUXhkgBh2"
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
