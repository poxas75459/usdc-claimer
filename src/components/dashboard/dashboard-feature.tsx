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
    "4gSFsnoXMizhA38fq3ALv9J2G1UeiNeUromRmRkVYbWLyZqQJWdPdHm9vwuhS3i24y5JEvZdsGfDZaULY3Cgsowm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36HbVH4qyJwnZwfxaEmg3g35NPXrBHj9V3GzdC181nQyJC7j5SZX2tVifdjvuAgMcaAiB4qjuGS9JgACsUtVpZ3Q",
  "key1": "36b38TopTD2rY9obRbm3mcJBj4d3G3XWKch7YcedMpjFKh4MV8XxoxttkXUqfJqEpZzkJzXKaULFgLnJ785qGtMh",
  "key2": "4jELRgsTXF8NF8CCCuHQVQhKqb6txmQmiavHugyhT2zKzGtpk2jqzGuYQGWfX5UTyKXBRwnDHmxtD3HgCWris8Lh",
  "key3": "5TxkKvjbRiMiRFTr2b8hrULBgEAAXvUh5Tqyok8FzFsbcx5qD5DsSgAYcCYQ49UMqyPuRYZXTWYJTTzoeew7KCHQ",
  "key4": "3kD9HFoRA9N6YPQ2Y2sL9HyMcm72aKtNRw5EKH4S5BjJTvg9BVvqcUBKU7ML38Uo3T7bbBHvewpaJf2pKEKhsMA2",
  "key5": "3F9zAM2ruWokzNvL93rz5AEWBhFgCubrfutp8B4aeS1WMGDS4RoB1YzTN3aJTorB4jav5X1p6LkUhqeGNEaxGM85",
  "key6": "2JEtcEZPSBNYTfwAWVZDR4QoEAtnr6CbShXVGpGkRmAyiWKLLtWX28BNwcv7TXzBAC6CbMPdCBhd73xDrDoo6YZT",
  "key7": "42HPU545hqqx5DBvkuyX35vaGwH126nzGo1ef7de3zn9mzwrdD313L4jzzNKHLMjZMDuEC2QemCxKMCF7Zh4bCuV",
  "key8": "2tV9pPmrxmdiAmNQ94XxTDvNfgPS9aE1Rvnv2gJpy3WBoP8ii2kLtk9e36LSMagHQxXMCt4pBxBT7VCnF4zWYSWw",
  "key9": "2Bw7ppJkvfyUn1MLdVgHst217BfAHTnxjwet51kB3fhnxhsUf4ZAMMa9QXFFuSZ1xbkCwuZoVcLHjX9sJCeynSad",
  "key10": "2RxkLxEL3KpP8iEuBmv8nqeKSYFFHXzUQBhoJGve2YDE7NQVLrTZDt5iFiTzSSJmLtJJK9tbLUGuvbNJ8wCH17r4",
  "key11": "2qBVpGacwtwCLXFYTCrM4D9AqN5VvJUA8YsDqXM4grt1ML3TWDqRh8GVx3JSX39NTYUBeq29ybdb7ks2eKmn38V",
  "key12": "2xREyyccKB3iGMGhGmrjGoeyx9AwxbPQMWoRdNJVxhn9YJ8eukGX83i7kmAE7NPivzWzd1MxSTRH8jHFvrAv6Qct",
  "key13": "2ntcTAEq3vnjjdx89nxDcerHTf3eGu3UH55vPzvRucGNhUWrxdNrZfw8zcWrKKHZV6t9yf1Qz1DRgdUUD128H28D",
  "key14": "5JXhnzuTv3SJrkBXtVM59SCprHnt4M7aSwukXVNgr6AmbTCWNkQaBNTeo8NRuTS1URAtCJPtTXMxxw7JMqDqykc1",
  "key15": "5u6rHyRYWkbh2TWUg5scqJ2R5c7ZXhWvL99kvDzeFe9K8EJ68KaVBSyH3h1WZqdmMigkHJvgiJwmHrE2YYbpoWyU",
  "key16": "53ANFNQptgLi8DnqxDExu3zQ59b8EVzRDJp5byoE7fQCfcfmHkBQwPEs1sqe19JyJwYzdsab5a79QGcgvuxcztG2",
  "key17": "5Z8WbLsNxPnWViTf3xbSoK4TRLyd25D7j56JRxVx9Qfrxz817u6UaUarhdNYffebYkqKHpa7n12Cvox1ZDLx4vV9",
  "key18": "3ZM6bvBB3JGTqtLGWtR6pLMUEmvasTWpBE4rxE1RNEoMSP3pjjJySk9VQC6cnqW6XsuT4mGxjGRVpxGNoHumwepQ",
  "key19": "dWQre9NoiKqK8TV82iWYpfKP1LTzuDcG5CVT8LJLzFx14JfBkeKNe8ifrs12TMv8a3uPDYowdyt9Z3wMUCuh3se",
  "key20": "4KX4nuTCSZByH27qeaQMFQySTCen5C6Kv3r6noLzDsceU5xuC8XtfP3B7kynSCmTnVnRJuxr6qvAQVqP1KQKyrvW",
  "key21": "14C55Un4fze6zsJ3xT1gZucHcmjoztZTkzoXUQShEtGdjZxCtHZvQjgtu2qvCq64ZKV1zS2ZyHm6cna9ZKeyiPC",
  "key22": "4U9ntjBmfKiB4bHynDCRXkXzoX1aq7ndmmGz3o9nzHHJ4Gv118ia49jQ8V4WN9EPASxBkybuYtkox5Ho9bBgf32y",
  "key23": "4f8QjyUpCqQYWyqXq5XL84UAks3tk5z9t2QcpNp8Phh7qWyK27en5RPgoXvHijC4bhaCttPwNiTjKxF1gHeJfRpF",
  "key24": "4QgB893yyDUvJdApSJQ3VSFViwmKeMV4Tqke3RVZp4Dprcj7CZb7hNphmToHarSUUCUUxa7EBGN7KYhecBuCoWWh",
  "key25": "3qCRw2Pf1VzrJ23tDg9WjcorEFRCqGaNFNk8bTJAtGKmY9stzzTmsRJXAChLpzCRRBYN1y4mzCWE7iLKEBirKSnN",
  "key26": "42SYy1gQvwrKtjFcKpATUdp8EMaNKDf5MB6t9ny569GNWnVPV1nPv53KxKPVrqTLqGCDbJUou1s4wMtwC7DzuLQD",
  "key27": "3gvFP2TFSNu1ChZ3xMhpShadU9kkieK1PtmdHUFwfqfENumy6R8ErzT5RJVhbCbSnzpBkX8owVqcVfqDTwNHP3bM",
  "key28": "57dfKcbcqNuFTukpbS2v22BwYdCjzm3H11G8GeVrR6B6ozjHgBF8vj76RMVaqYQpE4LrU5NgKNAfsWyML4uhAAf",
  "key29": "4C9tAUDbQTQcy6KZ9UKexCXXJ7dmvwoW7ff6ebxxztNpyjV3Q2yfFRo9GcUrHyFQNE1iPqZmpNnLbjqmHf3uoSQu",
  "key30": "4w4BairZjpQeGNocxpyskLCaqKf2ZeZQsWAf4cm8P4bpVZKYU8pY4ViC7tLoJcnKJNVUkmjYsYnQb45yjatvAm3g",
  "key31": "3hR7qkxDyAAXegwKtcq6265WrqBYWaGAV4uZnBWYbEmwM65FJPdeFFKMs6U7xjDh2RHQjwmqRRbuhqAzm5nH7Mhw",
  "key32": "5F2BNheDNPpicSYHm5bT1rDJ8Rs2CqH9qY3r4V1QVHTUkJ8U7y6FUzXWAqg2mbeJPE5X7dBPiXJbG6sEb4kUEF2g",
  "key33": "2M57EF6N5SV1zGAH2g8YGUHihyTtfMNBDJcUUExuDnm8hYsTCM9gi4mcepWvmQdvirPczQCAXFHRr3NUmwGQX7KX",
  "key34": "2rbEWzkU7ConpAn8jDDQRr7A6bGKbN21Wrk13iiB6ZMNu7BUKm7DKo5GnszK3LMHr9EXoTvqyX9e5WU94zegN1NZ",
  "key35": "C9XLSVfsmo9sN1bLpP3Q1ub3WNNGrh2uTQFgeo3NrCHDpofJ6dpmBp4toHemTmtAiYHHyKPJpkcAiuzf4TZFe6C",
  "key36": "gBunDABnMPT8HudF1jsiS97aeZ1g85bmnj8kTxHatYkrQE7nGyGuk4tDfVLA1aetZnHa1tSTqXAzqmvZJuVPxf8",
  "key37": "3kFKtku81F6AWvaneQfiofT9ad24a1zgQeVbA4nbmUoUHWqRu9YXAawozPEX7yCk61xvc78vBDqp8DA7gFq1n6Zn",
  "key38": "5tsDGPPcuzUiya7BGZ8gnbhNwiEaCNq2BBx7Qsj1pyzyXf3BfTn44gAiZ1LBH56shQxuHwQLW8hFvVwrhSaxtAEa",
  "key39": "ynnBbeEYMXoeNfDAgJis14YEcNjfpahKviBb5H7NEh89hVbTMMJGhwzRn2fRGqCJL2kPFgyJ1PHKXvStSGo3ujQ",
  "key40": "39Eg39FLy6M93eB2q1Ck86Hq4R6cmnGKEoZ7GnBgj39Tgo1vzu1Hnmrr5rEzEYBvGX5eEwc8bgPE7Pf2UEjjyjY8",
  "key41": "46F4bhGB9hXbWBQKmPayKQSjMWFBpJi9eXapxAMNDTRpQQLd2y7ErS7mCY3bcdt2iXr9NerDqntBD6PNwsAVCAQp",
  "key42": "39F8pDYuJzt4V9ARxN3sVytVptPGteFsNvwFdNwfzJC9Dpi51rEaQBeNPHo1MY87nm1YFxC3asDaGrQT8VfYEo6P",
  "key43": "kUpK73LNKBM2Usn2TfjUgzJbeCX8aUAvzui2EoUHBZC2wXFr34PvFSijPP6L9YamESdf3ZwDsJoiPuJV8MoLKHX",
  "key44": "3U9mawZd8FApWbv49uFLmwfUwz63VisxSix5rAzuWaJ8XJDKSy7sAG9PyjFo5oxN28ZbkfFNdgZdbHuTDNfejU8u"
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
