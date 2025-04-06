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
    "3EcHEdZj1EWaRUK7Ka9uPCRUMoRSX57aQ5jrS5Arcu2uWBPYYEfsxYNKwNVGLFUFfz5nsSCBWUWK88DKwLHcNLTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n2U3r8RSCupv6ikYUgpQj2UfYH5DotHUzFUhMRPxybFPiQjwGZpjkiLaWnVZgLJhiim8K2wCWYFgbaxuA3CtgQA",
  "key1": "3k41Uhf9cfh4bn5Hx7MLTEuPeQihi8UzTZBbPWLEgzxTSu7oM7NsPAe7FPCFoML4psP259oVnao551WnoCK5j61V",
  "key2": "32kTZmApSQb6KBbFnk5tztDJkjNsVavFdJo9Gw9u7Jgyk957qqWyrabPiy6iee2gaw45SpXJcor48BvyX6mQqzfM",
  "key3": "2SHKpcPpiVKQ9HfAJPtdXFT37hQUta1qicLfs9XoUj3BZkQLbxY75bu31EUmtk7MmqQ73K2uo2KriZYbMC5UrGMM",
  "key4": "3Jyvr7GQuzXLvuk4RgdzcQJkbvJGcbYFZM5Cj2UN9YJxEoFbzCDEeNjWF8LWvxxmLjvtJHX4g3ENeDayrHpz84qq",
  "key5": "3GqQ2tSkML3hKah6zDdALNzvYfZ6k3xHFvtKBzrvFg7vkVrWpXJSzTvo9h7ZjH4fDAHsygMMvCzNKDXTBzkCCPKU",
  "key6": "2SpSjaKEtSmjyeftYFMzyi3311gdBdsgjStapEX7ZiAeRJHw47zwswxnHJD3vtRLyrskbFYaWTsf3zGiuUwuLXEu",
  "key7": "5Z6c85HDRaWPJrudFN2QdAT92HcqH3Ut85BxyYHP35TTeg25fstAGnCnDB9rdHMDiqWn3k6TyLVxi8F9mmbMZvYJ",
  "key8": "LSMjrjxrMdKmBgctD11i5pK5UMupQKsbyziRiopUTWWLkNUtiHvCGR5GMUqaV7MpQJKjLxLdNCL8oJPZD2hj83E",
  "key9": "2JLXBzMDso1YwWudWVtXx37hVWHkFbHLjc5n8J5GgHjnLkadJvN2aoZD75c9KXqi56qxHocqCrr1pzZp6RKYSGnc",
  "key10": "2B7KmD5WWqYR4FiYVyVTFS1Hx6xbFmDWneTUuwnJyjDQMa6jeLHjZDEM8nyBbpESZKmWtKDsPrC96BvBWKXBZq2X",
  "key11": "EEo8jbP4eJfuizqimBpPGMjNZi3V26dRkXXyFQFxfvQqAy6ZzGYTzXzM5NdyQge8wpcZYJGPK2ZY4kffsx2VtYD",
  "key12": "58ZuqPg59DuYUtFCoi97W3ZwtkFJRbWR2xjsP3N4Pb6v1fPyf6wjsaEkMc3UNQfwR9Mr335KCVCtNfrb3mnR6CsS",
  "key13": "iJ72Wvqk7jMK8sfdPJ68HJnLzZxxrwYPiyaKcX5VT9Ghhp3NCr4xvLMkNxy6rU3mpKXP3UDFvYJtH4mCSLVHuzP",
  "key14": "3bah8iQCJMrbdfrEepXnJhZoKpuejbPnirfw8x4mRL14DzTASnvwwycFL1jyjAmjPZRmkwrZKWANmAM4U5N2Ry3X",
  "key15": "3RAe2g8sfsv1QK4r9sjrAJSbbFFX6TKCMsV7pZWdeoWqPGuRxPDRiYEJM6X3woiq5ifrKVtAJHeQhV8hpPvBzjcW",
  "key16": "44RjQz4R4fFnt9XH2rSRRgvFFsHSDirFNpGuTEdGz8PM9JJdK8MuY8YWXrfARk6akka3Zf9Cq4ySs3Qb75ySpbVa",
  "key17": "2S3qNeG36JspY6dtuJyTL3bPppzfpVqZLjRPrSQwhzooAjktB4oEEP4m4t2wdWgg52fePxFN23Z9Ucn1KGPspm3y",
  "key18": "2m6ZwA3B4KosixKohnnyTVG4qjd7qsgNcrZm6K1jtnjkXZPokXKg1hyeyuf77XATvVY1BaAzk734t87BFssF4SmV",
  "key19": "4UTVACFv6YMfd7UP7McBN5Aq2YH2WL3Q5b44hBrYq5c7PeR2AKj5aDXjrVKft2yr9pPEYa5xtzpthFAicCcLeZwH",
  "key20": "2Y6RwXFsU5Z4p55KfbQv86kaQrg9MxczQWxjoU78L99NBuhE6HNk2x3bFGmyD1BBcmdnovrFUz6epfP6xVxQgvVs",
  "key21": "HadReB1uJUghZPJgXRzt84cSTKfdot15y6syKwPF4pN1DwVAwUrVw9EMKuWcNcFUVWmG2GbZtsEWRLBMRfpTtdR",
  "key22": "4DAuTayemp3HxBtQwKqRrdqFrF5WLTZm3BnD6FK53K6CSuucpS8qow1yur8dbxD2R3LXXDucF95dKtH8RfuSiBT8",
  "key23": "syncEWpskyziSHbN6STUJHxqYqJs1CWQ4GbEMEDEK4NfRYfGFQ4sx5fkmRpinJiZSKhuaPMrZeZyaTPNjLLwrVG",
  "key24": "fW2aK4u3DEL1DUvxqaAuWVpaUaK8ZdPNNPBrqeJvSN72K1t33BVTzkADwtcbMSkmoKhgWQtwE24GHK6ztzLdcfe",
  "key25": "3589JfaxpBwxKL4u4eBgLvPqpfPQUQ76n7LUyf1MCfhiuiKF6DAyJpnxhnnqE4XDtaLKxw3t5v5KFh2mRi72QNB2",
  "key26": "3Bw98tg4P7PB1XEMi8bxNNrrhMUnyGGVLLkRczwbniBWSvgBXHzz2ARR54yQk9gzdvyZ3qTKPWMRBq4E6CjgVFLY",
  "key27": "29SvJizvzb4PEJ1Ya1e4sTAA9d4az2DGW8JYy5hrb8fFevejDT7ZPgCEn35sctu8Scr3Sd6XxTiEHA57hD6rxMwg",
  "key28": "4x8HFHunzTFRSfLAH4H345XCJTFNNhv9BPzA2vqqKzY8TiLfukFgZApvS4f6jpeewWXwWfV4RZo21DuCLzAUniVL",
  "key29": "5UHSshELhRcviRCzX4J223MYi17s98AGXzocQHNG7BCP9oTypaNmmzJh1PbFBrf3FY69B3nNdAqyCJ4YmycMRz1u",
  "key30": "61sAHx6EPDjW6GGP9zFPFEtpJxPCHUAWWpovpdStsGNQUngxYCY4yFhNfYYUuzA3yU23Ci3wWc1iKs6MaM4Ucj6c",
  "key31": "65pNcipgAgEmJi1Eqwhr7uhC5SPq9mh3wh3feS5DJTDxPheQ5RvGahTvQwpzNXiuL9t832ZF9AEmvnjpWSueY8hB",
  "key32": "ed3KsugdAMSuWNVbUtymBW6JY7icnZPNqpXcsA5W1QrLDxaHU4HdRKjcxiyc4nGZEM2ctX8ipFXA3zuYfLrH4yt",
  "key33": "3B4WdtwR73NJtYcGzyppn85Z5E1yeDTgyZrepGKTPxp4kSTyNG4WpXzkoLwzVSUHoWgtrTbAG2vokwzrxG1jUnZf",
  "key34": "jSJ1q9iBQPaHtRJXTdE3u1xGefoGf5yYH26ZJTGWoWy9ATdJMjiAh3gJWoib34GC5BoHhFQYmaMsXPhPuL88BtY",
  "key35": "41dWyG5Dhe3LNY9YRB6BZw3gmBnrkkuMN9gCmz6P3XmApNSauv5Jxf4diwKgRJJaLwfehoBzENTKu6Z37gdyrSHu",
  "key36": "5UQHhf8wgJsWUqtwqfHQeptgecmDLYxZqtMbPGLPd68vQVPr7Nf2sqFxPvDxriFz9fBKv6Br26h5nNX3BVuJ53hK",
  "key37": "5hGdZ4KEseRwbLmwfeX2CpTQpFFKxQwyaDuzsgK565AhFNoA9f8Y41Lzsad1JhGDZSarFZ8kSX36D8qTbNMkHs3Y",
  "key38": "2NhrWFRwfGkCFCrrLRJQ3pwfL8dCxxyBxEs5ZZqtN1vjuKXYzHBV52K33kfVW4W4uVmauX1fB9yq5a8ATAFYXQjp"
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
