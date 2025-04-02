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
    "234KyCHHYg5RJUKFHoC16sycG5KyGLqFK93mJ6qfqEcNqmsMcJFwr2BpKB5zTn4GGw5WAZaxGgqAoiGvBKXd4yZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YD1yipxgMuw8mxv3m5UHnCWNHw3WYPMiPjgr1UtJeMxypomWzR6ShtfCcRbAspYWSwyaizybtw5MpWW3J9jmDn",
  "key1": "3XVs7tAX4WH94TTXqLJQquEhc2GjjKtgssACtdDqhYAzXuVkd5kGknipxn1Zs9Srn5ZAcNhfVEfX12vngtTHQSgd",
  "key2": "LYxEopByQFeaFaPgmEEReAsjU9x6Fp4YmGXdVHkm1gkog5KaaxQs4wbfL7fSS9ZtU8a7pNJPsCJivHSp962v1md",
  "key3": "jjLtFK91nz1zLKyLcuUeTeocRpiUFo9VSg4oZX4Xbrzw63JzCzewjJsUUbY5nr4w2BZWjcNds1qqGnK9BBcTjLW",
  "key4": "3BRLnkEvTojq5cGnDGjz8tVvvomS1MkvpxJcs6k6USYfWA8JZK13bpCsVFuuZDCm2UCW7E9ciLhb5Z9irQkDCmC8",
  "key5": "33uQxEnS2ejJk5oQj8xAVk9pnKG1BAcnMS4h78VpKirK49RCBsts28tPyx2sHwRiWWt7WWeUzivHHWcFkgQGmX3h",
  "key6": "2AtZmeHGaKYTjCxY3Dn4Q1EpRn3vnx3nXDjBX7Gt44hHwsFxQ2rhEZjWqeYMBD6nw16sAWe2AukMb6Qc3DD1oUa2",
  "key7": "3cjFFds5NVNm8n9YFLQh9cm561p6KzPSV8WvtAMZkQJ8eQs7Y7LxmoMMUHu6bSspyDA197GxpJi3fG2dQsS4VmoQ",
  "key8": "53kZqSLrjSZnBpXyfpUjXqgM4DJm9uT4PzqfbBRCSH4CUDtcRqGmhx9prJUHs2kjQrmuFcRKDtg13KrFEKGAQUmd",
  "key9": "57cjrf9mQbJx43AKJJJQM18kNPqMhLjjNLR3sGvit56deiYpg8pbekqaBReviSiMprvJJcRskBKVbrsbczCraC6R",
  "key10": "4QXEFaKoieDGvzJdr4MVLB69rUcv87bBiiAoBMRaNXJES8rDcuX4uXGEX6QWkCMxLxhNLyBGgsFoRkkaxkbRTmQk",
  "key11": "6oFGWFf5NkYHXbWLrcqKuyWpiiNrdWusawM3ewhPF9w5q5KfNYygw7JNkAaFCW5jLZgN9gJSQCEZLZ5Yzz956U3",
  "key12": "4yNga5Qa7yCKgmPvUUpchBuKaTUcCf4321int32jMN4A4uCRXvNo1p5xARQDoUG1xwg2FW2ZtvjDSSM7c7jcrrD6",
  "key13": "kTcHApdJrHzzkKbATPSR5mbCHQq9b2NMRd6Efye25aKV51uxWiExU9QMHEpLqzDBijgxa98jPGoMR7E5HJhi5hR",
  "key14": "4U3K8P6Kj5JMkNJgH1HUEQfh4XJvxoAneu3zoRT2ywnaJgT13LPNVcjfRZHK6oDNCh47tG6s8vCWpA7trqSHVYSo",
  "key15": "5hUdYrRA8FWh5YDRvXL5rnhN8Dy9RHWj1hY6rJQdbp1JKrmpBEsiy4hPBv2TrwoF6TrERSoTuUnujL59tDNDVf6W",
  "key16": "2M6VoD5qU2FVtRMXDHUnvUASbcuDUJKSyaGptESke6ppFbp1qcxEkSCRGYXeVP5VECmBoRpNCAKB8vYALZL1sfRo",
  "key17": "9NQDU2AoJpFDaSgtUoMK6NCSwYpreQVzhxbmUWjJa7iC5JhVGKuLE6Bw6tRCQ5s4hgrUcWYEPcamEXp9FwPS32m",
  "key18": "5wpejcuomdk68F8spRPsrX9EpXE4C95QcU9wHa3FaNNDarUMUqGQoLvWNRTpPpxkoMab9FQbcG6nhjPFBVRBR77h",
  "key19": "roCDBD3DD5bihxc8AkEpFYUSebVC1e4w1iuZfdQbdWRj1Qhzae3P2YAtNg8pTL8LxUpiWx3R1XLZsAWf3XQ1nxP",
  "key20": "5wPfsRoG4AApudBZt2X7cueP7SgayvnbCSmMUH2dM2HQdwoJ3kZXfNZ2i2wKKDfxwGrV1hFewuy8ddfvbEkUN8HJ",
  "key21": "5PL1moVDdmScbANuG8SZVQeD8bpiLqULfLSrPpYMhjG5j2adYHCGSUHABcRnxaF1MaezMJxr9EGRPBoK2tvfosky",
  "key22": "3oPQS4xL16dcYTQaHPH4d7pnojwpvbzzgFskwT612SYZxH32nbfHpaz3Jmi3UTeuCpF1g1H4kWadmvEZdQ7FRzNE",
  "key23": "2gVDR2mb1FuqAnMtW4q6vzfzE6jrKaVLriXMB77so2dkYt252hXaPYwgarxw95Svf9yQxhA13vDzREo9Lapzvsbr",
  "key24": "2BNsJFZ3vmeuXJTbQBz5GU9KFP6bPMvj6EofcP4CR3sY274jAexEEVbmkxzKjXHz2vphsFK9sRbDc3un2b83mCH5",
  "key25": "5GoVKiaVXyNPEJU7AUFAR6KXyxaEgTovNmxVSX8Pd9wKciT3hegouUSBr3JGZxoHtvnz7Jg6foYaDhUqMDGXPnxa",
  "key26": "2FaHJV2gs6sqJAyLZjb6yXBXaFTkJHHYNj24k4jkskFU47MkXQf6GHCc4ZPuXjhgFBVQG8ymp7T8tKg7Pvq8MvxK",
  "key27": "3oCCifQ69LCgy17WJoUrGZF9yh3whggS6Mz2Jqo26pmpMw5rXfJMJXzTMcBw5sgEPE8rGwxe5N2R2hahv1Fm9L5w",
  "key28": "5hBFkbpqK6SKKfS4x5b9ofD8UQcaHqQDxwYq3hFCEN24pnVgWEk2P9ff6u4XqkGaGc5Z2QXDsk2hs7iiyVBe8MLK",
  "key29": "2yofpGQC4VxPzJfdtBEkufm7hd8sTWrMf75hqtMttzLLuMKmuu51L6n7Rfs2ytv4GUrY9PCf7uQrJtYL6oisiQLx",
  "key30": "tbGnXYmWx2VdkkWj8XZce7kNUPR4GMQ6dcF4zUT5DEGiXhvANMmQZNnmJjDvF5VMDxNX4kso2Lzv5AaLYcTZPtU",
  "key31": "ZW43G8NxdxtEdka5EaTYxgFw22sMwgUysLk9igd2qmdDJdnHux1TnbRK82p28CwSJ4ofryipkf43pG7FUZtYbjX"
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
