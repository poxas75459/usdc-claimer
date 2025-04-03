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
    "4D7F2RJV7pAxRLeWdL11wWgWiTFSZFhDh8KGGCz6roYKMvdGq98xFsTyeedzb2r9NPRLHfj8Vt8kxkeQBftck15n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZUdiqkGqggZXBRKmEYZbXKXqgfqR5p1dLAvHGyFFk54j87Va6e7sDZ1L5fogMriiV8YMu3ikY2TrsXQkuz6HtfG",
  "key1": "56Md7RCMHBCbxxQMpzV4XgwRaN7QLzT6t8n9ghgArTszwxC5UUAkVN2vq4dU9HAQ3zMEe2az1R3mKiuRpPqvK35M",
  "key2": "3CsWSzB9pRRFHVSysus1RacJLpXbYunZtNFng6rwPSWEvPggc9FqjinNP4sAn9yeqpJ8DwZVqgeYE1NuN4uLWoHd",
  "key3": "EQFyPwi9vwe9ZqhMvRCNnz6h98m8DPn3hNcoE6UdNe4mXoSkVEGoEknWp7k48pswuFfW1hdoCwsCnV6knXgQCGX",
  "key4": "ZmKd9Quc8tbNdQZhuw2S24bMtbc7ccx5r61rw2f22EJHpUNz7sAW1kTRgFaegiCzTbbbKTXoheDqMXLCq3XDxXE",
  "key5": "4fGEbAYJ4kxNpyW4LFxUACNtZqc2c5WyEzyAJqJgH4pL73SpHDK3b9X6Zm1WJn6E4M7o7gPn2aFqfBL1rtKntfvw",
  "key6": "51YEg7ZNArMX1KmJXJTW5cLbgeYThK4DgtNRe8t38qRhjZGMyYHT1smh6uspKwhWLV5g9qqL1GUQX3MkjWYU341k",
  "key7": "3h7MKyzNt3py58pozXnYrUE17pmojNgpSJcQ79Qjgd8zEMoNMzxcVFPYjWwntrTKWTrZxYkhXLEtJygSzz4Qqn8B",
  "key8": "SYMaff5oqbwi4pP9aTEKZpa5SWwDnJ3HjLa2cZa5JTL6cuM6nhzaAcbzKVor2xqWaMLgUKamE33JHv7DGqpo8NL",
  "key9": "26H7hcxteLh2DFocqRdEcNg2N9vTCm2cMXxcDbAN9jsUVUmyd4nfF55o5jgRY92NKrSnE4TRbiE4ypPMxs7gGeys",
  "key10": "2QKYeigoFRb35rGMUhfWyqhkVUPcgWyKtP6yYocB2vnjKTghGJkxrqxNABFhmUy4Unw879xvLuJuHKmD6sd93R51",
  "key11": "2SL5hwnWZFo4jkor2eZYc5AUdZ5Cy2ns8yfS4bU5U2F2UKMZjLC2b7VhYKEjZg1AkHQJSpFtqgjVEgkioeLAdRjU",
  "key12": "35QmUFA2mvhNrWgLNLhtjuWrHcncVpxpD3FNxMLga7jvHQ98m634SzMTjwowMAVE2rrcF7ULFU3AaSQcjAQuGxmo",
  "key13": "3xLyAow3AWiJuK8f8YVLuEzvk4Tg3YbFtYziZXsgFdcYpijBjzEaDRPph73HK45PwrqtWEvEsefTmT5fN4pCGdCt",
  "key14": "3bhwVvkdWqtB97v7Sf7Z4xKuGMqPuwijVmCMYwCy465bbeK2icG7EHWB3NnEGm1A97YMKpdHS59MQ2GUiueiDUPd",
  "key15": "55ZruU1DYNjnyzZvLwanhkkdrwWfMucY1h6VbE9M9VhfTXt6KzuBsgxrhRnebJYNpgbcs9zjjgVjKuEuvCQ2tqPx",
  "key16": "3Pg5QaGjBUR7HWRvg29z7XDaEoc5Nr83B6d4qu2fPeJThYddTbSwCeBWzPh6q7dENQjHHRrASco2Haw2JwFU3pP1",
  "key17": "4ztJ8GUS8ibjDqtWFH7t5UQvYm7dDXtHtzNfXcMVBEBf5WoqczetXrvZhc11U1GT2irT48Dg7eQv7PMN97D1iLs9",
  "key18": "3uLvi1fFQmD1QLkTHgoA439Hw7YnKm1Yi4tX3r9ioMKh53iPWB3E1MbRJ78GgDTnafMZcQY5PhHhBgyTkZXoJayX",
  "key19": "2MHSWpSZRrZWLb1mWEY5XWngQFdM7ZCky1WWLN821Boxn1iHNdxswsAZk9cn9MYiepZKp19VL1naceQDKhtToqpD",
  "key20": "45NmYuE7uw226RZT1NLr9KKVTk8LBp7JbxBMf3MsqP7WwVBodjtCo7fVhiSysUai1rioAJJQPHk2y1jZtBV7Tr9z",
  "key21": "RG6y1B3rComuUKLXD8wq9rnRD68QkQ3zhLD1hQe3Mb7f5VvmZ3vH98ENgXjGULPkmVhtUN5s2k8GTXHCSeNWeNr",
  "key22": "4WXi2DWsZvKNGtWTgsp85GowJY8bjiCeooUcLM4G21LZ2v5Dmo7VeWyDf7eZHhf8c9vSYgFjbpk7sPjbD3T6gxtN",
  "key23": "4QDVX6ATt9CioJ5jvvYJHKBQyo5wFpnS7yRo9ZCD1XA2FR2rpcHrDq7yxKCVnyut8eNARYd2yrWcbQDoY2BDDEbM",
  "key24": "5VQ9pFU5yoPyweGavxod8pV318WTCYMajra9NVHrj3RUAX6arSpHrahzQ4w6kMoZkPSsjyxkZH6CrzFugdNRg9qy",
  "key25": "jfDK5eDD6tU1T9yja2ZQ95P8x3fW7qjvywbZcHiDXUNQvEbTa9QNCdwX5bgxDexU3wj2CrUggvHw6vb2GPnLzsH",
  "key26": "42h2x86xA6tduWgChJ41q8HiMBRj8jN3ZGcrz6gvZuuAMWc3RGrEZcxAGsAp4woEuwAfhSLgi1Uyt51vvx9BC7vx",
  "key27": "25qrgV15eR8Y6kDnTbhSJvS2yxgdRLMmn7pSeSE4X7VdWVAtZCyHqvQgiRxP6i6FTU8LN8xGveoYzeGG4L8ktySc",
  "key28": "4R87zqEGh4tAf2NyNGXyyDKPWXMV88Se3ghP24yN2eyXA5XBcxB16CNVUtvqn2u1dP5BgEYSRSynCMEjx8sXEYAT",
  "key29": "pLvMqnrBSJ9jBss9KGXw3swSq7iLWdgDXheYuWSWkRkAHvxGpbeVgus6SsWJYKXhg8TgXhUU8qmacGyEAV72LWC",
  "key30": "5fh1Swp4LeWW4aghaxjvAq6MC7MhU191FkbzoxyT9orNDsZJu7Pt68BqYyrbiNA98vg8tm9w1PcodYuSg2BdPjUv",
  "key31": "65knycR8PyJ6yvtdXKT2T5oUkgLu52Vfkpuv2Agw3QdUzbUBUsMnTHQzWruu2qrqEhj5z5x2j2mSd4ixeoP9boNa",
  "key32": "3tqiAEoZ9oMoG4rZRPsjXUubuJWXRYyQiJuMjnaTJFmTE9APCy9iSV5acswwawWu8SiMtGC9BKbv4YrCKhEQhzDL",
  "key33": "4YwDf3j4eM8BryKM6Vu4ukUHh6PC3UFPtPUV6xG7ZDmX6b8p9b2KNU6FMUFBpZWUDnCtGAEetZX2g2tFBnyvoF8u",
  "key34": "XQfSR4caGPYn9S8BiZeVCp6Shook432iHid68e713wEpgbfJsV9vKjgcFrjPQqiphMAXwc1uBUcDYGT28tpkknn",
  "key35": "2y5Tjtft5X5unKkHXbmov2zkBHXbocnDs9om3j3sB83LzFT4zdmEBoRdQs3QYGRWpMkwUQguAnezFPQtLV5yxiEv",
  "key36": "4RzjUPxr8Ur89b6UYejWJQkyA5kmBxvQsAj3s1KbhQVbiq1cUbcG1QhYK2NWbtFS76dpV8MK7AfV3uedAckJkg1a",
  "key37": "Qw1ufMB8dwFHbecQW7fwJEG6a1koDTgc7WbgnnyEm1KavrfeRSs4NihqFqXQVmWmLnbEk2EgW1DeeBBSaCMffZY",
  "key38": "3ZUiKgpthFbWzA9Rxd4YANZKTnxLyGFNrHNRoQbnbaVC8xsj4ADRqKSKv1tc2ZhVEBnQfLq2KCJkTjJHh46TMiA8",
  "key39": "4tkRh37JftWPUrJNCeQsrZrABhCzDrhy58kE9HFT4dPKChrbezywKsWXpstKbCBuPX4sBZT5RqVRNvrj5aoAf7py",
  "key40": "2KE5rGDMC9pHgSfaoeRhVCLoQ1BKyEWtUFp8cjHTXQb4qF97GixP9NsKQgMvCQWoM4p6TTaXJN9xR8EphFbGEza9",
  "key41": "4fSbBDYRxD6uxiLDLPwauMELv3A6xfMpVupUS821H7wE6FM7hLHcaDtzabtE42SThyPk3snyPzKfVqnwRAXXpEXe"
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
