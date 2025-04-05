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
    "npnmaifDbgb6mChXgYBFwbMfwHsTTrusVq5cftrv5BXrZueiCackVgfsrM8Lv4Kwx9LYqQy1TE5r9HsaWrafSHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UV5kjXtdS9HZy9Zm8pHSrubpmWKeYgFKDQqQG5xoV21rRYmSMDtCvr2sXdeQFYFm2s194PEBxRJZKq36ViM2Jen",
  "key1": "5sMx7pGqohHsnDkJEF6LpZAFb5mV4NLvWkxsJSrbch4KYFvvyKGowJ6AwxkVtexNUbJpghieRCXQtss7u4jPpfMx",
  "key2": "x6vk4ciNTLAiYuhfYa6iNAmj9pAXRho3N36zZbW6csXG9Jz6PvAd6xJRmBD1U8NLHx24DgL1mrEj9NsMXTEgfqH",
  "key3": "3z3E4u6FC6isrS7QKhUZT1FH1ZSgHug7UoFGy3TzBG6XwM1FvjqTDs4LMdfd4nvHwhr3TVub1r4QHnDFqexuegHf",
  "key4": "2224atGTfrkcGDFgnyN4dkF6xmfgcA9aKxJpHrXdsF3k2r3yz9NchT16Hg9WvKKMuLFmw6W3a7yNcCGZXuwdo3MD",
  "key5": "4nB4kXRddtqZo4tWuCjtnJNoPkCRyR2SApGiDrhiPhMp8ywLiJB2uFAYMPQrkQB3fvPv1Q6hQCiYf8dPWzbvVhEZ",
  "key6": "ipGXVdN73WG4ZUFq4RpMHkqB1Q4Ei1A9akhLtiBLhCPncRKkE93dw6PhCBBoQTnFGg6un5S1N5wtL21VNHLxiu6",
  "key7": "EpeTD5Cbqv9fP3kZ35F4SK9YhCHHaEm64t6uJerHhuAArShEkKBTGH7ANXta9gzTi7L6aCqoBehdp9m8iWthp5h",
  "key8": "3BP4u6utpUemBiMq7Nqqrjo9cbAVigpPsWWfUFW4QRL246PffS5jXPhv1zHcXL5aeP5erZPkUsrK1CcUKMZ8GMDt",
  "key9": "2XWkUUZnCCZQ52acpJtMpwstTZsFzsHNAEHSkHmuTe9KCLSyyMwhmxdTBczCsJ7MeStVXz9x5wYZ95aArwJ1AZF3",
  "key10": "5hcBmtfpKatMM7Ckn5cUU9XS3NLXJriXWMnuqXVafK4FpxYYb2iFw54C6RG1dXU3Yx34E4f9WVMTwmcidPAwUXtD",
  "key11": "3tDgPtVezhrfFcsargmn3ABdQd4BAyVhfNE5VNJiXhdAg63FD4pLZQMXy3v6urjhTUiJ6rGFCUeh4FkwCF9oAYmz",
  "key12": "5Pv6UBFPJpbBLvUyzp5CrtDKTJ7K6YCKuyAQ8mPStndwmrBeaqkjWb4dab7c1dgUXRure8nuN4ipCZ6m59FvoWSt",
  "key13": "4HtwtY85wYtnUuKg72iD97VxjQ1TdbxNkkQBxVz4bHfucGjK63vxGs1J9UKeApnfqCW7X3C3aJB3YkGc1Eebvf1b",
  "key14": "3FYSwdBd3Gts4qotfZzioCQCLdW7VrpMffoX4FzV4rZ6jGWv7Qi967fjTKTyb9yQfs3Lcph8UkmjMHe272Gz5ZCS",
  "key15": "4hEitTbmqmBcnAEsgMB7CpZtZ8xF461sXJoyGqDmaHNtHKR3bcxagcWrfui7XDBEsPnqiwdw842TkU6tzyek4nZw",
  "key16": "65TP95hjZbST8z5EXuzDnvRouxN2d1E8n5J4UJ1APN4Zq1eSFEJk3zqk7qGPqkCjmLrvnzryVGwSLUuWc1S9HbMB",
  "key17": "4UmMrSGKheQHEyHVtiUvtuF9MPkGB1Zmwru4Hw1YzdreDjJoGZfBkxbraKPAzpWBbJSMs6FdmrgRt8j9zcws2DNf",
  "key18": "4bKrDXJ3VpE8yW6mSaBmF469EfYcZ7FauNoggmoFTr75nyZfFXHHgR5EoBW6fDK3KCb37h843Cxqupv22mSuzStz",
  "key19": "2zimqmkXoSGhb3mD35RiuwrwUtEtwQtzASKt7kaFQAGPfCNuqtbg7G2qg4SBUJeCKL4V15ys2wrvLSUoNjR9qyse",
  "key20": "3tP1Rj2NBM2G47qgkrzDcS3NQr725RThWWkzXbyjXi11B5UZvPEbfKbaau75QHRjjR4yEaqL6NSHfzkCX7DMSeDF",
  "key21": "56dtZ5ynQRgGVepuwBJjm6Pt7gga7vFxCYXpPTwRwpQdT67ZrR1TrQ92Fhc4Sp59cYWGawtZrBS2ZLspgWeUfTvZ",
  "key22": "543wtRptNQpXgBUEU8dJw6K48TQwmF72MbBYvZm2FAGoXLCxY7dsG9oeMpx6gNBEHeHaPFrDnchZApnTiUpuvPVr",
  "key23": "2u1xrJSFWKMYb6uUxhV8qp7by39e7XbYa6cgnUdZhtqfFfbdrGMQekxX9QmMJG1w9m4SfrKtB5prn5VhWrZoWtRu",
  "key24": "2XaXoXg18g3kfYdDQJYuUav22zzTj5oPNwyNaQLiFEfQd3Eb6DG4xfxq8Z4jAS1fAbLKi7zmrcMfR4cSEjUJUQP2",
  "key25": "36717yYFMCy8oSAoc15zrhFzsFVj9dUZXuv1UyCgEC2vqLVqVHhAi2n6HuJDPiJPcvVHvuGHmMY39SZ5AyW1XHJv",
  "key26": "4wXk12vPZFCDdVEtPTizKurgfaVemuCVvgDtH4X5xAdww3qwkKUFUnLHD2gpbt9uESnFgj9X7UGfiM5P6pk2LHhK",
  "key27": "5KCAP3vXuoLJRu8ZGafUWJBtYqn4UBehXRRiwTs4o8onJnhkLwhHnPk6yL2cvvxNFCsQ5xmM31caqcvYzVpecJTm",
  "key28": "PMzEKZfaxfuKwPNetwC1GCAtoBDpNpigPygGJgK8gWTK7xRAYWcPsqnTWMzDMy31AXx3YCStFYRnnUqycTxBWow",
  "key29": "4huUtxUkfnpxtEvELXzF8xc9Zr7TT6vGUV7q4FvFBcbzM5JfjR5KDZWF1VdVEeButb4mYKNQNF1kyPUcSHDYdnhn",
  "key30": "3q7h3pnNp1d4mGJmwXW7dXzY6HesN83mGmJa32MgNqRM4w9wc4XGq8xgP5vnVN4qUUEXnLAmWxiS2rWBZqSeXmni",
  "key31": "2qoCvftZMHFswpLKnSQCrNokcGCHzD757fz3jUx7TPUTxHuVd3gWmHGL1YvaYcT76KVQoD5iTGCQVa1qAByVaf6b",
  "key32": "eVsf9kfy7XYzZCka1dV9BdanZk3hvqkB7GWHe6PzRtSEyxUQKJ41y3YG9gHDTfUtS31Tr1Dq1bbZzgqGvj6tku1",
  "key33": "59Z3Xr9RbuL1PPdMyDVUvgGKzPYgqM5PKdRwtboyRpay8c8AEW1hWbwkb5giAyTQxRbVFiAQR9i7EHMSbiroQ392",
  "key34": "3LGMKCtiDtEDCYSvovHqdKkP7ppCB8Eo6iWLUBS5c396nQnjy5b58DQ5C7TMmrv8QBvTGa62A9ce92pkWLS1f9fv",
  "key35": "57hRz7sP4YaqySZVZVrQv4KqArENSLqCkY3yKsLJ2ZhkBxxqJnasDCBGVs3w5MUsygZwPK4SEXYh6717pUsFABZo",
  "key36": "55TQa8F994z7AYxHr5MeFc8zkSByunTb2HUdJJJWqUrue3Fe3mw4zB62sW7uCaWkdc2dmJpL5wauiQTzSNeDTF6j",
  "key37": "4S96wJ6CYJPxUnkVMSRFu3pqdKVkebqybYSB8ZQp6Gfp12x8AoZ9oegY1scat7qRtkq18zYjTsnV49gvoknbYHcZ",
  "key38": "242Yyi5ZnUsg5q4923WxPq1WPFEehKmCofRP7RsCsuc547XF9kQV2RqcG7DsRhc7sVZhCgoYX51iV1Qs7zxzYWwr",
  "key39": "yLYpHa7wHWqd9oT51MRnKD8qDcQ46CAXs7kkf87SNZGxxdvvqeme9SJMnRXkch1yPbJmrQqMz7vVwbkc3MKBBS4",
  "key40": "61eFQN9Xm1fHPWsUCfEyz5qNtzi81LEF2SpixJmgiGm2VXgSmgF5XEk347kwHWPFETHRVFDr4nThVpGQeD8KJUvw",
  "key41": "2dWnFMqjpnxKHnDDn7EfnGUYx949ZeGdG2F96tXNTWr3PfTXW4GUuQ4sRpBEnSJRSJ4Hr7aUpWcLJUxXfinVpvNX",
  "key42": "48PdwNU2hR8kMhAzpU94ZwCqs88RMpG4oz59nSh7EafuMkvkfwHCuYSiazbjVoaP9WD494LwjoAoafwRmZPwLuHq",
  "key43": "27WTVQmaLQ7upPnhAmWxNzJNm5nptp4HyKU3wUMHHggd5om5rdfw9Qpb2R2TmgnzHm9bj72sv3Xh33Sut1R3jjyo",
  "key44": "qauDSoLtNp1DhYYJiAx34dMGH3LoyarsDNfPDzfYJtcP76WXesnQbG5JuS6EhcpXAhXB4KrokfWshwS2BJeN3pL",
  "key45": "5JbWBT47kCxzombs6hdyLXzc2dEXys8Jx5MhQ5KE8UvjJD8Q8nhdfGstVrTxd6qHRNG5eXZe9L1YBNKGB11KLApv",
  "key46": "4gr2B5c8yzs6AoqUkzmqrV2m4bGGDi9QXu6S3hwHphG3oHhSuXmY9qqczACNBwfjAHjtxFSkHGzb3x6Q6uS9pmP5",
  "key47": "5uKwuQQj989mhwzWnxhaVZzUaDzTAP88RaiEogS4jcto9e4vzh28X6m8LqtYvmeHxYwxNBaYborh7rVwPfYZ2wi",
  "key48": "4nLhCBmsNrRY28oadzG6PY5HUFmSya7ju1a3VWJdBQAhD6RLKbwEyPFFaDuUf6Rkk5QD8imt7NzSrQrjurTV7ekC",
  "key49": "2GnfYEnoU5a8gEyaXfqMGfrbh1fCpUM1mXH1U2emGmbbX2oWKmBXcKtcQqj3ocnPzN4qL9o2TzkWnpLPU6MWNH5Y"
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
