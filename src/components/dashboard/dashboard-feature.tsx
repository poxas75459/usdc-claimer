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
    "2CTU8aYeLD8VbTCLJMZU2E7A5AJ7LWxVd1bUzo4vSzDkgErsiVL14tC51apvUVdmvWZBF5tbUezGzvECyMUfbfap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V5yCkQ6XNoPgtj7LPFAzDeDMcm8UgbvDTNs9SzsJGJkobQDBJgaZQ9zgh3Fq9kygU5d7CyztxBT3BJQ6d2yo2uv",
  "key1": "5aV7Pp1HNcVtRvHZ4uduhF9gjyYXcYZbqnyJ5mSvxtmvVoeroXDuFGjQVZKnZKvR3bTZkFKmzrHmyo6MMQ1PRYqA",
  "key2": "429xBMTvtiD6Q2EsETVbvXMS2B1Kf2aGkpoBQHkVR3Rn5vkXoTAzTzF2S9HiFe1YvYA7Rnfr92pyLctgMHca3NQG",
  "key3": "4o4EhF6eqqhHdnhNSbEf3SwhDz9kwYaN1c2onnKHkfsVqXcvYM5YWfvKD5RZDd7nTEjJQSPD3ShospokDh1ZpkpK",
  "key4": "286UXbnhVi7JAF7ecFwZiuYVXnwDW3w22RLo55Q9t3VHcAwwHHYtebhbHnSjjvSwFrijrLcJuLU8mgQwfrvGKFaF",
  "key5": "54L6DPbf29tn7YygeaYUegw5Y5yFD4Cgeoh7p71kcAcoP9EKhCpQpvvvLvdoJJ6whTaMkPXm1yhjGhbkBsM4aNTW",
  "key6": "2so4f5CZ5usc9jzKW32uy5zskrSie65o7MdP1ffdiySvms8bVMvHCs9ynVnv9mmsVJYYJsjzDs9YFers1YhTWgaP",
  "key7": "5qwPqDbyDD89Rhuwirf9QU4Lrzt77bD48iF6DbDTwVd1da81S36sWEz6uRhxEarrLSKZbHLpN5zHsoChRjm8bHmX",
  "key8": "JHXbw8NcWUFHwTWLFpLnNHpaQ7whr67KgwWLzoi1KiiKXcKsxSv7ivca17vpadoC5UBwZAkbbT7SNeKiZB4rbwV",
  "key9": "2shp9zRVvs8YbyEaQHGe2oNu7wnajWPd7FWGRW46yZTW7dwx53rDqCB6JJ6ciivDhgG8W5RZdGHhqZtVWAb3krkw",
  "key10": "2DpkT5bnpYsaAxquECeBogaiPqL8kkgUQPv8P7u5FU5ZKNmbZh794jWE544eh2kdZmefFSj3mxpGuDoRBqzAdyCQ",
  "key11": "3Jz19vUXc8Bfcsq4sNS8g3kvjCcEo3b8BYKNba2wRWmkDW758JKsuYJyG35u65c7tMRKA6A7N1AnNxcVoTKhQKuR",
  "key12": "4xeCE41DkdsvjGnerMoE1217g8xjuz46B12WCDJXSZoH35fiiQtkytUS8ofdxCxhErwS4MBiZgPGvxJY67cNxvV",
  "key13": "2pFGdow2HBDhfSDJH9tC25m9Kpm69DDQCYQdsBu9SF26dVayRnuSwnZqLrqcqSwbunkT2zHbxQ6ZBVDrHWfZReFh",
  "key14": "4Aa2r8RccMWiDLVWyQiKs7hkfpHrRh3TCbta5vpDpqr9aBD69rwAB3mPrdEnCP4y2Z2EJWHZhs3n6MkDQxqcw2GN",
  "key15": "4nT6YPmoiJ87xEe1WUSvpdgTf5YS2uqKJ1NkTST3UsrbNrFkwaPfLp4HFQ4ciWYEHpVNHTGk2ZP5Xc3ShsDaXk59",
  "key16": "5pELhXN6tBLpLmRZJ7zYMo9H622fJCrRjMSbmJqZtGJNHcjDpUxg7S4qTCEGfZ3ZwQTfcizjUfrfoJuSwwT2BniE",
  "key17": "5tUqe9fpDXiR6r7wxmBhCma76QMF1qvjLKRfz2gWM78pErQGtamtwSbNDuP5wexvpJhy4GrXTaxzyrPi8dE5uVWm",
  "key18": "2ShSw6Qx5bjKGYvAKxmZBB6MMwTx7sXgpi1aDDfuLj6W8uEMpK4PRCUYKxy6W4isPfBp687vypEDXxX1V5gZ24NH",
  "key19": "4kG9a1uAB5FnBAdXLue1uedGhU3sLwoDJuQdAgaH5M15weCWGT5ADYEwKNDk9yXuQ2R5A4HsgyCyAhdFBVek2URq",
  "key20": "yQYtLKvtXa3fE7dHD3T6V9AZTCut2rqkqALbKfb5zBTyZgDFgPUXSywe19GyccpEX4wkQ48tEVVjgkWipodYp3p",
  "key21": "3Xtvg4wQwScshexFrC6Dzcbby6V4ksoT8hWhG8dPGJjhfRkoddgzhAJCLHxDGbGcxbiFqrAGTWAe12in4zzGELyU",
  "key22": "42wKtht1RXUro1JBvgsQeudDroM8PRh6FkTctTyFNMwdFEGjWG8Cn9pRcqUd6UUpXUdzZ5tb8N1K4inCYrK74AiK",
  "key23": "3f7n15j7uJsb4z6i559P7MSPHLJRnsLbeqho6o7Ej3Uic3hZEqAYgQQ3dXjkfZMnpBtXmWUNJP77AA97xoWQ91tt",
  "key24": "u55woGMxUnoP9rosghYHVvENKmZKsjxJyjcUE3KsvhfQ31pnWxteXCZsoAQH6UyEuSpZMo8UckYYHd679LdQrAN",
  "key25": "4retkTnRedyzERL8Y5NHwC6y4SbVRPUfFDoQQSmRP2wLkNjLvKCq1TG9fW2z4LF25gw7xxne862XmQdH1jxDkkZa",
  "key26": "5F8p6Q3GXmD4fG57jaWLXLaDb6oG6585uFUzydVuHEohQ877Yrwx9BMX3QdtNdd9JHDrmakzEZSPEp8hieVRMs2e",
  "key27": "4eThRsi3HBg57cAayZoJHFYzqNsT4eb9S36JoiobsxP25iSruYJJqVXTLQKkjemhdjitbRkbE3dGt79Q5GFemZuk",
  "key28": "m6yekgt5KcB9DFPA5Ue2cZrzFuqmqpGWvJP8eMbKuBkZm23B6b66AzPJBfy78pBjrDTnZK4Ss5ASqRHxQvqhJg4",
  "key29": "2vYCxfQYU5rWo5LwKkMxLrGuRdGQKnVyKMXzZnqFZ6qsFaiKzuBtYjnvXsNHLHUudTgqpTq9EU7Hax1DcRbokjrt",
  "key30": "4ZS6n6AUiJbzCb6KJpADZyxXE4eMdkkVg3EcYgVGpgj2VvokBxui8MNyDFoyJRrcmEUpDFJjr7DCuKkfsWLJZbav",
  "key31": "ZX9k1tw9p2DubzSeTJ6YBF4475h2X5B6Yh9abPdLQU3mRqM88PL2p2UxkWrDoNHNdSSwhMEavDkjWP1FFGTSFBW",
  "key32": "2jVZ78zYWVxr2ZooBjdPEVGpJDfopXgikuQ36NmUskno4espZ3RX261PWpFL4exkbznDTxfC74fbDWryng7Myvhk",
  "key33": "5G4ucXcKMPX4CEcKDoe17Nu3SG8zLVgfm9aZYGv2UN7SRWU8Zutqmg5uYr3TK3VH81RbphdjAyaJ5ofxwh4MUZt8",
  "key34": "4PVPu33BJZJKMaQX2TUmyvgz97bYZk6KseCcFUceoTJvcessTtgneRo7RVuEsY4SpFFLxCVvrgZjbgrxdPRdxXXh",
  "key35": "3EEwytG3qJTtMHDLi3qSRr5B1emvsKJAqc3MxLKBUhNW5TTSinjujxx6uToMsz3WiE2KgeagMxrwmq6Az8ZzZLbi",
  "key36": "3Gdc5NyFufGtRnPfjUQiFHaaVMRWQ56YtxVXr9DyjRPV9u4niUV3b6E57FJ3eSCC36We17jjBjfWjkxtEZi3bJtV",
  "key37": "33gyVvomN3EvVw33cLBbLiurJudk3d49oDHCDcJGXK14GeokMt8YrY4Qkp5qfPH28US2uy1zfgCdTmZ4wToN84Bn",
  "key38": "25WyWQRkQrik1nxRGH6CTCAtBUaYEKiT7eDqwZCjEdZCGNxbBLvzv5gmopdgTVRDSUPXtv5fDERruQGgv8B9bgSN",
  "key39": "B3Wv6WRFTnPrj8NLsArUu7MLPjtC2ZeZrV95PLopthV4mRyfGLMHenHsxRFh5M27TNVpVUFcR47hhVFL2H7ukFz",
  "key40": "3muHLVSqzGY1mvcSjoYu32Ko8c3ZPP5PkLwB4bvuhJ4BECxxKf6Xm1eeMqbyRBUgC83EcuuTb7jxhWZW7CCMAiyA",
  "key41": "4oYvEzCdmVby9BxPU88o2kPfKXaz1vyne2YSDj1z4hFCqwBLWtkpx8MEZvALqpoNt31veeLNM73wBoxXKALkxPLX",
  "key42": "5btEBa57TJdp8h668mi97wQBm3jmt2gbc7FJcLZbyZyWFuCV1mSHz3eyoZ1fSeqYurFMmnnMqqVcb42gtKF2PY8Z",
  "key43": "Pw8p9FfBg8aCDBAfXjqXDMyC2gTqwNQTCaosJArdSCwQZT3nUHHvvmMgkbh9Q8w3XJy3WBo7ThSpJg4PF52iDoi"
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
