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
    "2arkwn9KuHDFs4AMg2V7GiUrUUTLDWBL1NS2gCBattgjvmDtyZfqCCCoZRRo4yVy6qVMWMWcB3A6bKpA21GmJtEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51CKyWE6dtpNCc3b2gt4f2cEDLBD7YCMvbuaoqmyaZL3y2WD6qdf2CZ7CLtGTKFRtLSbwbxnXJVMw1B21ZY3CdHS",
  "key1": "32fD2rXhNijGQviGkuRjpgdtBwsGZyjL19F9hcEHt2zQGtVdVM4nYJjqdmRfm9qyk9QDUY3fb8FmY7wf7yo25Fvy",
  "key2": "2x3bhmD8QsX5id1LqVH3VHhrZM57M6Hhg4NxxNxjZ6adpNjm2FvtLB3NUiwE5m2rs6U1BXLVZfvcLZe7bgwx4n6",
  "key3": "rjUqqJeYH8KyzWwHcsHeXUDiKDVt5Qds5aYsWELvi6BZdWWeEwNa2iU8QSi3x67ARLt8r6ZHmVjoFuFafhXqbD8",
  "key4": "5m81Sg5YfUqDKYv6QDbhMy6JGHeZCbMTiK8uyZrgNUXbwoKrGZmvATvVKgU5EUtJs8G17fzSchanU1h3jbwgF1aK",
  "key5": "F9Re8Bu1Scivk7vyY29Yw2voXxsXR57eiPS3AbguHcFF61hGtCe7HizeQ2zzvcqcwcJySFoJdvAjS5eGko446QJ",
  "key6": "2YL21Y4XLy5eiJ7JF7RCmY7VaWYaQJQG9Rx5TFkxMpRaHZ1gqRAKbfguRzTtYezNdMmiLr8dKHtaF1Kh6NwycPTd",
  "key7": "QtnWyENYQLMpjPhNr8Jrn2a5vDYZecDEh6CCaBLLDhhjWMTtaURLRFttRxcsGwnyKWJ8LtYjfsVv4VAh7T2d2bj",
  "key8": "4jL8cppQgdujeti9pErm53T7t67kk6iJLcjSh7enEDHxV4z1jMYTGoGmmGXPfxvfHxM9dn2n31MSEQcR7PxCHbzC",
  "key9": "3ufhYgnP6cGe2bFGAjDuA82KyKyRk6nJFk7nGnAnQ9VfYqJQvaRidyR2szeh7MCic8sMnGCXKnByMgbQSwKUN2C8",
  "key10": "3QtTqUojtxXenerSMSiKRD8uKvqnY5Pnsnv5f1ix41gWNY2z8zUTvKxYg1UAggscgdJjt18k4pSWZnMz2ZXQqtfr",
  "key11": "3fGMPWoy39d1ptG1TxgQoajj3EXtcmZfvJcjfBBW97aRQeYvhrexQAy4GbueX5mWwRCMdBa7GWQipKgQgnG9jkYE",
  "key12": "2CEx4kosYg9Xz3hsmsoxqvnxiV5NLiy5iYnsCkiRnAHFtWNDedxU7QYAxT2UrqRgkCMZwjwVAW9iM3tqvqE2A134",
  "key13": "2HFj191yLNo6uwUAXEhD9Mk2vCy8CubFWW6QFxXZUXEjNF1nCvmyjQ8yTz4EHLQjZEbRUFGuLfGMJ5hU3iWn24An",
  "key14": "39FZbF7EDoggNt2yEyLzQQ3EZLrj147vv3GeXE3wn9V1X6WCQiDgbvnwGa1nK3h9bLgdRzQS97gMw4MGUEXuRnr7",
  "key15": "EsMY1S1ZRaG5PbsfyGNooPnhQQR6eWuvZ17qCt5Pz9qjU5mKRrCTqLQLSjBRwoBG9B9frnSDq5QkHZSaa5S6Mk5",
  "key16": "4e4dx17tCvBEzcuvmb8FujBDKCa64nZrUeFVe6UabCCQEq2TY7AVTn3CSze4qSbZvRZXn7EhPvg5SV5kXd4QoUbQ",
  "key17": "44bChEumCkFmnpEUuAnHSuro4LwGMmZPHcYGk3zMf8vkVrpxjfdDbQrjiLLp6Mce2ZDdPzQrYAgQpU6r9PCtgFEs",
  "key18": "3gc3RRP8b8q38nfXipPbLzAXmYRPvZ72eJWxTUPe1AP4veFdEb31f9UTffEJN7b98svoZ4SA3caiHcxvrsaBiKv9",
  "key19": "wu1eC3d6xtMMsNrJdEHj6TskeRDAYBtpdhWVH5AcV9T37Q4Bd8frAVQeMSuWW2X7fvHpwxNfhmxsrMNS1C3k6sS",
  "key20": "64T1z69aVRnJbKB73kMq9tJ6LS5QU1JnH5SrGfZNwNkhwHSBoXsXzBJ2XTmi7NABAuuff7wJscniX6uTY7xpYcpz",
  "key21": "2ztUbbwWFgbiU7Nqupc82JrRASE1xndyMw7bL7nCrPEg4RoNiBFrHjeJ8mAmxooVyksj8qqMbpwmnvV1AM1XFrxk",
  "key22": "3uUyVciBgtvdYvMmftX1rfP2m4DkUiGLK8BuQsdi3Y3WphzFp8f5nM6tCXexCemxksdezkHZkDMDDS5Uk8Y9CUpP",
  "key23": "35JGJvg6mkqXKMrhvBLzNoWxsYhwuBc5eQBiEMPvMWD89PoRJP12AH5ndJ21JpFEiPUZ7EUinkZheGB8ReVwrfaP",
  "key24": "5tuPgBqstX6JyE4jHj4Nw67ZxVCBYzRTgHjM6JxNWNHFfQRuUBCR4ECK8SWgpQqYsmfq4KZDpgC4DktyAycjqcXS",
  "key25": "64cMQEkPRwMhLbATQEmiwMMqE4rdfYs5PWXbwCsFhQBiM1iNACc7v4rqUt2dRyek8Viru4PK9NhAedB6SoLbf4z2",
  "key26": "5ARv4vQ1WRQtmgK3yTcBM8931hev5SwogBqQekq5DP8kPaFFvEq8KHMgd3UtWL8uzDfsTUzcr5pNxim9TrzpN913",
  "key27": "39ARZoDdz2awH3h3DT8gsXC2EUDvTB2iZkMUZA4QHpbvYRCjXtSqdeYi3FAGgZBqpFERnxFmkibSHX6n92GZTGS8",
  "key28": "2H15HGpcHijT1ibnw59BXLa9p4G6PxwXtvCPqubtwXvBh19mc61hyRPX1HXsFPihha3dJPTdgzXYPuXiLnCVPkV6",
  "key29": "63ktBZZ9ZH3VaWTdW4uxRPhoBkgD59ztN2wWaHWriXPSQb3XkNkW4e4qHZeVfzqzsrX2pGcyJodQnzCjh9bVYNVu",
  "key30": "4RKjAn8SWZ89NCCCSzBpCCeXQSvQkY6KsAH1uZfe2pL16CY4pNWroQwhtU8WD2woWDtr48Pmwmay4CG9gX4dXMNR",
  "key31": "3QRGgkSsGSj2BhuQ7W6TEFcQ5qpJ4GR51hmef8ypNH27eK8EWdQuZNtzMdBc9vLKJUH2dL7efHuKcqXDCidigcuS",
  "key32": "3ZTuopN8rYrcqzVZDzjedbWq3fSxLqc996BBXaPez8daKAtxdqJkjHeTNgcMYTwzUQH2fmjP3WFEXDurgxATNVDB",
  "key33": "5eLT2oAbbMdHpHtS7wgsB7syL46VDHUJk5jCWA94P8utdZWnyDRSeHSHbacPXU1d3JpSTyeYGHdY4iUdb21LVXrq",
  "key34": "35xqARuDNqx2VEiBYT2MGTbcPiKo9YAz1frvR3GBRxdh9iDDykPDnQzP1vKyy9pKt7weVvqQAXXzJQbJP61tnxrv",
  "key35": "5DjBizfnwA6pto1iUTpcQ6v2q5cHUvqbwiBXGEktqcQYkDBWc9BNnciJLVSofLGv1YECsvjy9wcDm2M4netqpSNV",
  "key36": "52TWcfGmofqLTjzU9wUAwY2Q9VLu9Y1zWpWXv21cxP2183wQzt5fQFzBuRxFiQ8USR3RwvrxmYxPUhfZd8p78W18",
  "key37": "5rDzVjhwyNh7xhVKFv1g6kupd5MgPbMvqsGtfCYZfYPHKDG6peeLDEUc12616DvNiiYZemAtVMCHXWwLBnsGEBc1",
  "key38": "2gBQJbdcqJLAXvWvABpgxC1XUp7UgymqtreYK1DF94Wk1qTfsb8CFBjA3Af8dhv27AJyA8NGtz7nc3bNjx5643tT",
  "key39": "5F3aNAUYWX1WVTbuQTksekSh9vMMuEC5wFsqAa815dppTn4ZMFjA9E8JvdWEbZSu3KEhp9Ex7RxmwbR7a6wAFv14",
  "key40": "2X7vmV1DXhVz1nybMsMFiFBvRmTeVRcvqAVkYYYkPwUbTrnJsT3PSLKL9whEKwAhpsJ41sR3ohoSxvsaUgGSAtUj",
  "key41": "5kg3d994d2rx7mF82ThfUs234pgXgJtEzEziDyMziTu9q8jW8dn38XKUoxYcx81t6U1nz1GfwBKa4DFPBQCpMRpt",
  "key42": "nc7BjyHcAfDEJPuNqydojBY99nbf2dG7PtaEUttEC2r4eKHJJNDTJca8PTVvnWo73Wygm5eBgJEjxanQoiLDgjp",
  "key43": "5tx55jiaiZzEjfq5umutioNVjLs8ZqZRWrUSbwby9XnT8pz1JFkXMhuP7vNEhhVCW3FSkPLFyVmvFR6JRDkf5fXY",
  "key44": "4dBCrQsePEbPkf4zgJRotKLPhbn5TDHH7K7GN75pGPEH6ViPDa8NfU3RXEt2crni83DE5vVfyKLwjsEQxftvHnTT",
  "key45": "4cRXkVTqSwrgEqSbD5KmWR9NeSYCnrzB8VkyoK3smLMzt6RtbGc5zc8RFgdNDun1z1YVFnQZtLWE4nELMAVnCMFf",
  "key46": "rso4Saip4AryjTAVPVXWRtX83rqzhcZiSFemUEL35474c6R1caqPoRQzzT2Rvf8CqjWhM2VZXogD3M4riVDRLAu"
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
