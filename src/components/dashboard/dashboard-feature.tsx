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
    "4NPgZrLHZ5a8rkedTVfNqYq81WMFZ4Pqcuyj8CK3EieSPCxRBew5e8126BeKBH12qRFVJiM7mK9F5Uo2Xuy5GvaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "agCEHNgnmEyfUx9iLK1E539eEW2PKBvqVZZKJg1o1NoXL3HYYHHgPLBQww2GJzMrKGYj9bRhudibLUY7cpLGUE1",
  "key1": "67jh1cRR4gCfoEBUEfVsoxhtBSaNNH3CGiTvvaguVSgCoY3QWfVtvbzhnaxBWzAqSW2nXBKe4ZxUBb6LQ8EZXh93",
  "key2": "3PnKsmXuT39WJNsH4U1QrhsoFgQnqWvEg5jN9GoGCpRUm6SBLBByxvJmsKKeN942pnU8yLZWQZ2DP7etw3pvhiEw",
  "key3": "3Rf8aq9Mw6Z5biZr8Ea9SE4zD14EYTKLECky4Rx1uSMaUT36xb7gYLSVJjUz8HLNjimLCGXF7yqcnTj7eEXvN3PK",
  "key4": "42yP6rwRbvt4bRXiiTq3EQ3sfWJHfo9QN2tBFTrK6DU5RJdQ14fXkm9Umzns4czaLAinkUgeF3nxoK5sv35Ngonj",
  "key5": "3umJcfyJ1R54gghgVhKbLVnmEr6Q31Ws8zUZxER79LPVEVzeyWZLRwJHiXLTVzQgUiYosYX99UgunFhnh9XRwmsp",
  "key6": "472o15tE8LEKnxVcizfyN9fU5CKd1PS4RgQuq8Lktd1rJg5Bkq2G5f7csr42tkBjTAaP7dNuRFD813zMSoNztkr2",
  "key7": "2L8oN4Tc77aXsRxfcMkG94iE1Y7qd8Aq7pkQeNVNkHKNynphLL7iBggKJceu6yJCo3ap6bZBmCyLBV1y4PmXCWox",
  "key8": "5xvsUUSP46f1XvoCkDhussvEfswkuQsGwLAUY8imPu66otFHgZBN6HsK88BjW4nxKUofuYSNA62NJEnJgpJnDhX8",
  "key9": "KBjVr4Cm8tvhMBz6DT2tJ3BWVJPjjEr75RM84SFDmk5fhVadpsReFm9vv4eKwgXLHzaxQEksoUAKWEXtKpGoRi9",
  "key10": "VuMukUTELgsAB1z3zuQMwjmkdPrwnzXHoM2GpYYhC63orSmKyVyzKf9oQEqRNW9qimarsD5WHjb7qMaAsLmQKgd",
  "key11": "2zfKTXZsjnViRnaPY97DVPGtchQpAsEUSQSv37SRgJLFCJSzTCMtD6R8eFynnCGoBTzfVAr4Nvd5esj2ozrdU5iP",
  "key12": "2QBkM66f5UdGAnz9TYCueUaukWFdSPgSfgbwtHZE4deEPyQEDrD1kmqgBhGaMVfQLZjrp3tkvMdD1khSknqNm7gq",
  "key13": "4NBuT9W8c9vQPsvddDbmwGodTbKi7iLMFznH6iWEZs6HaZAiZrWPpujaaMNwHsQMo62SkdspeCabHbAbhjFUpzV8",
  "key14": "4YFmxNqEmNFKc4aBdHjXjGqUEr3puo89nq9u3gv1vyVvyFeeNipUqh9vG7t71uKoDe7n28yeDyMaEXkWJT2bHqit",
  "key15": "3JnodbuhWmzhqLXEWCrLrdjjL63z1vUEfhXVURYKTER5xpUYm6UBEEHPcYPo1ssCmsyK5zSk4QWeMcWXAihvggyo",
  "key16": "3K5VPrESzpgXW9mVYo6bnmKqtSPbbhgMNA7w5jXtd28461SeZpPaCf52SoniUuPEhp39vPfSmerZyA8EyAEBXFoj",
  "key17": "3NF5fK8qCVgJ2p7iAoFvywfPkSMJaiPH6dKiQEHzogsK2SCBW9EymDYjdKn1cqaBHQrCgPJnQRWvfuGWCeiMaHn7",
  "key18": "2utkTR43NH1bzW8eX3qGYQDnuSskbwLsFxzeNr5opLy59eLMdd6vfH7TwqKyuh6XMLCPbFKGRMNe88fynAQgPdbs",
  "key19": "5vWpXbTSRzVe4QuDCMi1cRGY5FdCotz7uMbHjoTa188PujqTfFhK347xgekT3yfEYVeunPZRj5k2EMC5ZjoAN7ib",
  "key20": "59wddQAespEWoNFHJUfyJDS8TqrYYF9ndPdoNnfKE5PUQZHyKyhaRf6AiQUobYdzVuPUDfxLBL9XJuDBoQ9RzVep",
  "key21": "3Yr8eeMjVEAkDZWAtLqTV63e5NoKx4SgXt8TWaEf7C5ZhVysYthNdXM4Psemn9rt3EJaY32c2HSVHLVkGfL7rU1H",
  "key22": "YC9oiiy57JUtyCitNJsugf26gL2zfL9A5pmdDUjzbNMTrLUNHgeKmopnoooH2jETgLbktDJKKtvwbcWoiVJjNJG",
  "key23": "5Wn8qCsiNiigE1iGg7hagj3HQGvwJka66mrte5iAHFD99d1JErc2JkD6j4G31He9AYrATCbgBFkmGts4phgRHY8e",
  "key24": "5KvQMJ2DLLP8cEtxqNWcSnvYVc8q4TBr1a1gF2exnHr7ekcWQ5hTnVmL7sHrf2sivTQifRNA2TWnmARqksrLQKck",
  "key25": "35ChpmRuhpGNhV72ZZcstciLmUUpFUHZjQnqkjutQ4DnNCXeq6F1Lgn6YFkVGaBvAx8mAgerSSWNybnsrCbAwzqe",
  "key26": "53vyQcD9EjJDz6Anq6K6KNpYGby4MLHKbViBbffnFRF7Nv9VfDifFEGab8Y3a3LZnQQpwtQEeNzEH7dES1mbX9GL",
  "key27": "37wsDXFwuxaYHzsfSaRrujWg7vqeyjTqwMEZaKX7aJDRUoGqGGiXwjrkqphQ1Ubx1L2cAVyoc3aWcnJPYoXctC9F",
  "key28": "32kD8khAe3Pm6CnLcMJTEtj7ov4uuzmcLZ2jEDgRN4nWvnJF5Wfv3CJ6j3jpwQYsaBVFehoir5ubnz3ArL2BQQPH",
  "key29": "2gtoNMZMQbx9fU13Mm8dweu5YWTyJmeWShMp7LTMATjZSx6E6YhisnZz76j5XgK1Y67iejHc4d66LvLSYQsAgUhL",
  "key30": "35zN74grQmpvXErJL2HY6EjcDrxgVxtwJoDDE1ajwiMsVtjN5CzBstVDNj6EmZEMeoYVCtthW1A7psNy85isRkdP",
  "key31": "efAnfpS33nVmmtT4i2n3eigQWMjjaSyMGcmd5eZg6Sb5ogUDMnoruDoWHsBfGK4CcQuiKFRZEcip6rcsGBxgiXE",
  "key32": "27Uzpv6xonANHGV8NTPrdrLrwFFZVN1r32ySHnMCvLTRFpE3XJCZBFi8pWbVFYERBcvmHAA1RbFScCdgmnGhUDXQ",
  "key33": "2f3v82zD2jgfetDtHxzrTwEqHTTkNDDTEHb4RfBPicwsJRiQX2AtGNjqnapMT2yxny8yAAKFQk5ntmcH5XvUargX",
  "key34": "3NKi5XLx7SxVDhq4jo3cNDpS5KXiiFm2DC3bFgz798mpcnvtNeGMQssRq8MKket2qYpxMTdG9huNfYR1qb4pCJG3",
  "key35": "3FzewYWC1ov1tppueJ1kfHyK6C4owL4RHFWH7usGp3pkppqfem32qMvBH8hZRjDXuWU5wJiiiss4F4u95vMnPLVk",
  "key36": "3iJ67cqywPh2kzXfEpf24zqQy6Y5xoihsfuAuo6rdKGuYJe6TSR2Lb9X1jautb2TUGbmKaqVtMhmJ4iiELc5zvrj",
  "key37": "4U5j4926zBion3XAkgx3gUPJXppiDjDikUL2WuS6QSVXZB5NTHQRCSFPkDfXRkfEYQVAmTDAztzRiwwdpV8kC5Ey",
  "key38": "NGzXTsm8Z7a8JrCPaUY9Rx6SMySED99HAUu8stTYTWo4mafQtBsTd7YGRjCzSqPfsRxXg9pCEJa6mfzJGHp61Ve",
  "key39": "3Wz6MstGVEt5sMsYD55eQGvRxcfLZpbPmEi4SgPkekQr2rmQZzNwPXQy5ZKo1EzJgkJL7J449dAkUwT1jpK7r14h",
  "key40": "3gWNbY9BAreCbN3T8AfGS1agvZv5Lhct4LvqGgPS5zzuePWoxbwpWQiJJnwpCwazDHAaZ5ZPcNLbdpjNy4XPW1ey",
  "key41": "3unYuK23A4MUvuToveq13K6y5N4anDCY3aKADbNk5P4Znr9wxV8sZZSDBPM6TkJF2Jwg5TUiVxC5FSmQ9LFdBFTV",
  "key42": "4Jpdh4AimuN8gtADpjHn7SQZzP8GsBVmZ4AidY4iEi9iiUbcxXCjYxJppu7dxDGyLNJU6MBsNvVUAPN5pKnwLYb1",
  "key43": "4CFiuZadGg4L6TbCRYCNsQ5Lk1K89tV1AC83DPR2E879dm72cpMLHQgpq9ngRJXvHpjqYNY2H8j8ruJDr2ggwsiW",
  "key44": "39WbxKZmkHVCUu9e352zfV4zKxUduNXFTQ2DFwM6cbSUYqmZryov9gnGJy129ZzeMoqDUYa1AQPoue9MDFRABXeZ",
  "key45": "2V9KBigazNLR8VV4qffzsTWHUuZNfgTjsK5sAWeAYct5AiQBDNef3PBu3nTJNyjW43RQkQinS8cCCTJaJsQfDh5a"
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
