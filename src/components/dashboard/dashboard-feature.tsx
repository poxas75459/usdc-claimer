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
    "4CVkFfq4CXgipsz2gDGa7gFbCTiJnksdYq547pSiXPJKkG9wZu4AYzZsdcST1yaRwurqX2ahNT8Kr6J2vF9hgbwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zxrGWsHxkfoegE7kmmuR2tLHRM1nZXnLGRNzbYXqL3k9UME9VoWjo6CTRxViC4jjGRv6BA1o2Jh7HyLwBbLQXcn",
  "key1": "3jqmHVWrKB2dMQLvidrrNfP8yyYkes62MT6rzSe7troWzpfkk66WXFAyLfAsPLivsn7WWfinaoqsSDWSucfNwc1s",
  "key2": "5kTv8r1yU9k3sgtGQo67MsBdPCDaKApGybsD8rEGPpRLrceD7MecnuUYJokL8j4LZbmffdQ1CQaSsDzujy4FjVgP",
  "key3": "2gQAcTfzXcHFQ8p6ajcVCE3Mzpy23Mgp5BHYEZgix93uPrWKBHCKg9PXckLhNETFLXWxjm8dSHRD8oKShAXjFQuF",
  "key4": "2nPLdDDnTsviy9pDX8XyA5Wvg5dWmJZ3VKv7KqnRedoBVmiJHpqYTJ1T8Eh58C9eBNANaU6dJd9uQGrqug2LL7wi",
  "key5": "2srNaADDrndkp4MWe6ZNiR3dYmtxNSwbWPfXhAWz2PXrL4F19PzWkwGcQ4WZjZNCvFSkRgWYL1UFpymLkDfhEkbV",
  "key6": "54JGwA2aHKNmB5Q1wwbwS3b5bQm1r488nNNj3YWAYQqZLWKavnsZCd1c7QiE9h8pZYYUacbXcQ83XhaaPvtb9Vf9",
  "key7": "2wyJic5dFn5tzJpdzgVWKcgQ8TaqBzQdc9xuqYx2byyoJPzSGXpcYLa2g4dk2EbiUieYNsqgvMenNR55hsbfQGxE",
  "key8": "RZk2qz2XGdTdmwzcD1iWt6b7XRxA5vjZHiL8z5j7LqeVYGwR81VyMPrgkn9we6xSXZ8CuHdx94QMR4G5c1pVzW6",
  "key9": "237aRHtMdC5wRQDg89U4dfAfvkZRqQF7KTUbQaSoWWNBAdBRPgs1rxmr2LJLyj4ZDtj5KHUWTWYEJcyAitAo64qM",
  "key10": "4kCVA1mddABaCU29LukoATyDDfHvDvuVY3uMCDp1u2PPN941w3MNiUqrZHmi8d4ct8kZcjPAvax1nLH51ngatuBh",
  "key11": "3fXVysc4NzCMecAj3XhxQZ28iGwDajW3YsEEjUGswvA8PpEjpeqKq7BSfAf43ZaBPiQ5iFs3pGMNGRkN44vC1sCB",
  "key12": "4UR9EzjoAGkvFatxsaw49Xq1CnBjb5YyNJhpVnCnPnj4KiX86XUsmTb5KdrpSftvDgcKzNDFaUyEHoFc2c9KKHwn",
  "key13": "3haRe4JuKGAG4q19KYky7LoK7AtkYNrzQ6UVou6PxyFKo72hQ2JTi4h9W3H7AMSwDqTt2xYLNdwRAHEZNfUomEde",
  "key14": "2hrzDbpoypP6fVYzP83QHwkKErcq7igvTXonAFqyD1XR9q5QntmeaEv1tWiQs13wuAx4ELFcm462hVaZzMGJe8jm",
  "key15": "3DFpUP3PFz3yngnouF4XsCfjJKiyAPXZ6a76E4FQxgkNfuy1wr585WmrJqMLFbW3eCctDcHyx4X4jkFoQ6Qustyz",
  "key16": "2wexHznCXtnLQVaG7skn9QseDLFZfwvNNcBViNDitunw7aY8j2JRh54EBbjnBPjH1ajTpCZRWZrPU2VFgnvgdQUV",
  "key17": "3iURg5dYDUSqGZehaFsWutBSy3ujjaDY12ZrkgPFRZFUcrVZ6wsQx1NdmJEDTXdiP2pthkwLKfNUkjePb44tX4B6",
  "key18": "5peowByikCErGLyVYpWqZiuXg7w8m6JU5ft5xi6cxFZpZbnGVRB56BCjtd1TqMg4fgzXfbp7YVMPFBoa8gCFBa1F",
  "key19": "5aAM1YQJz4xR7BmkapVPyehrYezNysaRoMbvdCTiFiy9mcpFUKXCnxiE9UZMmyM1ziz8LVWDawFVBSJttJtH8p8H",
  "key20": "39zxjrwU1SDZWYHxht6R4WeJpBoq6PiD8KwLZpqf8dbFP5vRsYNjNXjVjxsQ3z3oux4q3y2kA7viYqu3mBEzzFYq",
  "key21": "5fizVEWgTxq2fsHq7poYU8f5zaYQHHxzYevb3XQgfpSFLZfXUsXNx1EtHYVK5LFSdn4kDzNNQrMYthavegPrZcax",
  "key22": "3afkj9eybuofcagWDSmW7fRfyKP793g9UwMTuozd228vmigEBSFy7WbiBXZ7mFMcM4aaAj8xUhuu8Y3dVGAiAhKx",
  "key23": "5c5bTVQjhgJAK7AKGn294aJL3ba9iH8dmEXrJJeLCsMPxRAUcyVL42cFL6rPDiMBsCWrzR5R4vScQ2r7z2R7gfCC",
  "key24": "5TbZ1kAc5vxQgwQAbp3s4ciFhQU4hZrPcV32UhiGbAaX23WJ8mK1AEDqHaeRYLVQoPTJbBh55woC82gibNP2VFHx",
  "key25": "3PNAemd2LT2u1NPUqqqGsPyvZbUmArmoLevscd398NmFkskAqGVCL9w9AvfWMcDRLKdHUCvCsMHFTCzsQHdNQTu4",
  "key26": "4BuWdKYERDDEc1rqH6F69PT5fFmcsTBzSPdMLcWxFXbhBAJTDZGkuYhHjUC8bBz25i2bKMXsA5Wi2xEmXZcc6FCi",
  "key27": "CFAE3o7qZBs56P5Y7w8isWmdpocVswjkKQQD3L5tfZyVsCSKDSN5MNT5XPvZoxg2ToEwkr825rZUApW5cNoCDCB",
  "key28": "evtSR5kVWV4DKXnvZUqbscoyJNGcSWFC8e9rmC3iaBQSBM78s6xYDPUpkCN9GcYuEQz1urr4scbeAaQJ79QDRhW",
  "key29": "5pGCKxT81AB7Jmjy6un6jodgRE5y8svvDeb3NfPPqcZosFU6SGTDCfgi6F1m4CQFwNsYZgvVfJbbzcs5vua57x8E",
  "key30": "VDDexJmWhccR5Kb6kKzfxAxbbAPVupTBNj9v2FX7qtf861GaEfkegsCqpJv3xLQkdomFfjyjDoy9FH7XGpb1Lko",
  "key31": "ESvUJRocoQDY9G8BNcgnAURPahWqXw1ooB44Q13D2Qvd4YT7JBxz41RBfCd8q6fuX9D5ryCwKE39eT8reWZjunz",
  "key32": "3QuXHNi1r1VRxgQTF1dkmAp9d5BSFF8BexTjyZ2mnSFNGtYF7fWCckH1iFAEspw2ynM1K3e6PhtQtnffdcXeruNt",
  "key33": "4ETVGSryLP78SLt7KvY9eJnPgCHHVUumMTymgDGKv688EEG16x3y7xAeEbbuTn5937mjX2mXRf6yrH5qVPG5ULLp",
  "key34": "5kdfKqrYyekVTsVuPDEGsphboy4j5RaXoAgCxqrExbGD5VuRJ9tErBG7bMtmsRWqDKEjFF6Ey1QVMDGMTYNGBjdX",
  "key35": "98eVAMJxLdgHAYmZx2zgKV1RdWF7jNoMJxuqwYQz4ha7s9ALfk5RgcNFXjrNfV3fR62XxLRwhQofY6Sa7bPZkxN",
  "key36": "3NsBnarLN5k5vLHG19MvMLxKRU5FRBhd1TfQEhHc5pX7oBPA6bZHgVrkgJUFQYU6NMJmrv7u6LBcF7iKvPxh6FKo",
  "key37": "2Zt9qQpVkax4f5PWP3aB1tKP5scNk9raEDtLcsYXayY2J2c5xtvJH2pKxsukrYoYPUQZ2Sr2CvwCVS9MiPCP9wBb",
  "key38": "3Psrr7MxNgTjMxCxopDVpWPrhoH7uUtkhpwofPrzjUjDPPU68P3nPRtydeyVBJVTCG5qm2QQMFf5UzVbjsVCAhD5",
  "key39": "5ZZEnHkokf1k9cKj4J58PM4anyzyQ67zr5PiwF8FdNfg4S1KyDuwQvbSAjYuXyMSs5akpr6XhUZ26KHHBUB31wN9",
  "key40": "CRM86wzAuCaLJLDFK36L2tDnLGukuDebBC9JX3KE8MrfvGS7UrEXHw4A7roNYasyPBXgPdoujt8cH5Cav6ET9Uq",
  "key41": "2gNFGNioLZ34eq3ZLMRuRL1H5nRJ1g5E3BCu1bHBMXgG2MKbEaZjuLzTayjmAFfehkjKwnvHMPhnNRm9tYqX2mPc",
  "key42": "21NQbUJriQmjGuJdrkpmceFBiih8qFjjdNrqaPQ4uafwexVpfYpYGvurzAkBs6K7YVQgB4gErL66V46X9JkFoJtz",
  "key43": "2iU3YkfMAUw8wNt52AqoHPKhEZp9nALWZMkXrRHdtt3hWpb965hCE9kYJs6GHpds1GQodfNJPzwbJzquQW9Cyotn",
  "key44": "35UrXJZM47G3CFZQe6WqQC15wHPU8awvMw6nHjkxUeeLQgxt8uiYGEcJ11TccCcUtksGvpdBmgR1x8AAvfEQZ7J2"
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
