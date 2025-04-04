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
    "er2abzAA6BZwM2iZGSjDbTrEvkEDnozW79iigGUALamEjFqDHE1bAeUkD1xedcHjgdTjuUTXe5LRnJJLLcwJq5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rPi8RNvENHkRf1ibMF15eVmH1qvi7C3NS7L4w1oqr3R1KZavpgtuZUASoxg7UdMK6VqTkRNC5R9M7QT6mHFkhZL",
  "key1": "4JYhQWQoMRJ8Z3zmjg6CTocpVU5jfvhZSewok69Dr3m4C7UkdtMCP4ziCbsVDE9Dj2GgZFa9pyPgvd5r5B7mR8vu",
  "key2": "7TxwHm1fzTWR6JuCzmSLkFmep4o5NogWLYGc8m5aACBD94JMcomjNsxDFLxtsLuhjatPGazQ1DWNSwKKfyjoCpe",
  "key3": "2vhdKoLtZ3MDVHLYau42Xdp37uaWdw9NGPXjcTdiF7J2CEC7UWYZUoK9Mzykt2XjHPPWQ8AWgSkkr1FTbN2RecbM",
  "key4": "5gfmGrwjoe2RCAL24AErHNiNwEBypsDCgzbcpjrQCo2MD6KPExCVNVGCAQYSukGEk7nW7ZpFVHv2F1bbsH8wVEn4",
  "key5": "28bSwzZe15kDZeUWZK9hidDX4nHNnCtBvAg14QiAnVCHF7XtV8N8ZnqYJ59uxZap1Dat1hqg1Di7dHxzCC4yyMzD",
  "key6": "37bg28LrqAXJmnLSgYoJFuixcsRFfhjwfvWSuBmDHLgUyKt33CjkQThkZkFfEGTibGcvdyMpD3X6XXLHcWndgxER",
  "key7": "4aGJRoR1KWNzMab9x1MAix3R56GRNsV4LTWeRCRMji1FYd9uRHN6k87ybumdd7UM3acqmNgJSdWHPQU2fteAnREy",
  "key8": "4o6rbnZUTAw6Vg3nMVfQKasDYtbxBv4tDoN9caoFwATUnT4K2TKFUqcotJArM7KMuvEz3wGXEpGDfhcqxB6FzTzw",
  "key9": "24ckiV8mBRJqtnEmv7Wa42QGQzY5cYBKwTUZutac4iCLa5fDzdN2MP2RmUzRfwyR4avEcY8sz3FbQF4du64qzgXM",
  "key10": "5K3cdEoZDkDfdD3i35tDUeah34GGzPqPDiwiupKJVVBTyLKy2NJ5wb8PBZj6eESz2GA6yoEMzLSPVLkp1FMxKnbQ",
  "key11": "3W2nBuVJCpTty2yh3esQA48CJTWrYwarvMwKuYADSeN4cwEc83H4VnyFAg1fET6eowaoA3Qn51rKLAtWXEB7fWgb",
  "key12": "3NRVU9ySwHuWGCmcVCqHJyh3ufUkycTsPXUP8f49u5bRoQdEXurkumxq62hZN9eqAr1xag3Ur32T8giXG2kGc4Fe",
  "key13": "2WVsyrEB7gtvLZCD7T3XAXLHBQKPggizGmfydviWhvtX4ux4bqZYCDzuxe8ASucEir7Ddfc42aKHzV1cU4re6n5U",
  "key14": "4zfsKN3sra428TgDFhcw9Yup2BEb95h8UUp4Po3KcDgPNGFA1dyx1Q9hoPJ7bxuj8aM5D5ZedQqCjfEh2a7oFMP6",
  "key15": "4UnrqTjrnNELW9zayk9EYsAm8wbZRGFfVGXkPh8z5Q36sVSDXpvNum1byqaSzS3KSW3QybQoJ4Pojr7D5ZHyhNwH",
  "key16": "2y2Z5kykVqBdF9LRXe4hw74VH5sRRiYMe3JxqSHrpCKZ2DyMLZD9zVah6J44mUxwPxv4a6sEnUnTTpD4ciCAKzfH",
  "key17": "5jKpip44J4U79XKSxkW3K8Rob48Yu8n5YTom7cqnf9GjiYwtqjmiQ2gzDWDnqPq6TWeTVUXNyEEGL3TTJDkPdhnS",
  "key18": "5R27NnrpPhrFogvXtrdkJH3ygZGHbz6Dw1QdsLTFRDcWzt3Zt5w69ieMJQYFiezuiBBjA2EDHT5VntsvXabDdmBi",
  "key19": "3FjQWx2dhQp2mfhNTzjy4vCVJPoE7uzKVDtAAkBTixNz1RfEmt6cqdRWAWHzfPue2gskzGHUtLaQ48gefsaCTNdh",
  "key20": "2KHCgg6rAja2SG11Sfpqv6R4EB22eJ5AZ11w6CAYmvHqVTi7H43mw9LDrN6jLSDQqS5X8aNSGHxqYy31vtcrKm8e",
  "key21": "3CyDjmdpvA3hQ5KikWd85h6v4Pip7LcWaXmvbvCJcDK3U8dm7ibSgVgUa6C6H1UKmv7HAVcagQSDQy4AdVWsL6Gx",
  "key22": "U1wTDiXci62b92KENTRQMqi7xwfr51X8n48hEo9bvzSHCVTTpqqvyuuC2sCBbQ2af1pJ8e26sLN6b4fhAjR64vu",
  "key23": "4n9zqW6Uus73MUqxgHFKocRp7xfJTQnZkTzpT3k1qVE52RpV8LaeYicGXaSfDSho2JaWf56nbU8Lqa1gYbbSPGdw",
  "key24": "4RAzwVe58BqudfdDKNRww4gsg6Jxfy7BUiip9dQjWaVhR81Xvo2NqUa9yqQb4jR8vhtfDtCKgZjKasnD26Dg2rpE",
  "key25": "4L3k399p5h55HmzrBDZBhxtbHAWtKVXHZ3XxDRvVSQjhaxPa5rNL2iVAdE5fcC5ZPe7L5zj7XeDpcUMxb7eeM9e9",
  "key26": "24XtR2DmBxK64RfXG6wzEdFwFYGR6A3x6cysGMyNQXaqDBAnag3y9BCWH2o2aw4RFvGHtPeghjV2Qia4twibh6Ne",
  "key27": "4n5BuHTK65tQD1Sy3xZyaZGrU2gk1mX4KmQV1d6h4JQeUwfdMGojTqiBuFfRSnmhqYiBzk8yjCJzCwW5x9k2Mdap",
  "key28": "46c3WC4emwdmrKCVh3f7D5MbZBM6me4iAbUCgDHFuSgC5B7jQfA4FifVyfk25UEb2p5z5Mr1vHSPGnKY8XUEv8rM",
  "key29": "3F68bJJuBPcUyMFp2yY6pT16s5tyzrtuAWhiDGySbzwKyJb3JFGdfimLFAHSAodzPwMRQi1w57BR6izzShtxq32k",
  "key30": "3jg79vTNYWPN6iV82qzRTXKdJd3iZirRDT2rDX5ZPZVcqnzqFyHAnuWtrVwRGRgtsDNYT6qm1LDgYHq9acksg1qU",
  "key31": "2vVmNYkWNiXTYXNGYwP3uqcpDqbuEVHxdbdZTdDQakLBEC44Usf2wL8nsHmJkXdeHgtUTcTiSTLkrNJNAZu8JGgH",
  "key32": "3trTmwgEbRun3hTsd85HsMU41v4tqY1gu1zuXXnQrdB2z1ARgu1WUvVDYwVKzZSGzp4BguoVV4VV9YhYfBMpee98",
  "key33": "3F3WKVyw2sv6qNYznKsC6yX3bwzBH9BqW6MYjSuBXeTQqUg3RzwwuRBKS1uSdzFr73mR5oeiaWnAt4jVCD98AK3N",
  "key34": "3jFds1iBLCyrKRkJzasWancH6j86dLqHogk1n6dnab8US2BCV2PUnYaKom7Sf5LYvgkgyzyTKGdNFkWqqBremfTp",
  "key35": "2kcTEJNjzrqdUAgpx58L1EtkD43BGf3nTQGTx2SmXoxnheGbYs2dyAUBBerLvitKNk9WLUvDpyKxu8V8hfFbWBdD",
  "key36": "3ZCTtj746Xjj8F1J2f6hYALF7xBnH8Bf8BZnHzJgv9eYSfFdgQQ7AEYhgRpkxDBx7iuBQ7qSp9DfJF5Z5Ad65pAB",
  "key37": "2MhvLer9froXmtYGQag7oc9jWK45Vw3Qq2hSvAyhYNWhubokieyKiKm8ViAd1SScsatbNZJ7BN6LeS342o8vAtS6",
  "key38": "2DUbpVfjHMK7kSKTwsySqm3tXxFDpzWZTaMyejpxKUmJSCTCT4qbZxpQpxahMCAmbdcU64XyknRrNozPo3dhP3fB",
  "key39": "4V2CPwaHxQcKkNqFrDwtEkqmnDXoi9EJnZbcJZdDUSWjntsLrteD7XqMbTkX1JCpH2aceFnHQEFX8EC8PB6yrH3J",
  "key40": "z8skNTy92PV8PeLw9TjedsgPPY554sMdq9nKFrhYw6sLjtKSot4CPv411yv6No4jkphPsagJ8eobU336bN2BcJx",
  "key41": "RNkdkFLQpu8JmwnpUGwjErqbjemxgwF4j9W3yY1Hvp1TNKbfYmmrydUXbKtvoTrRGja7XbPKjv3SLaWsW4dENpp"
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
