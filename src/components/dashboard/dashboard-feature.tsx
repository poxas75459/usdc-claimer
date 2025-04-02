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
    "4g79G4GYFonjN2n6LbVMtKiXMzZufXMpoLMBdqWj24oe5m4Dpca8aMpJ2R7xhAhV57hUXEuddcsezrFqfne61Wwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wj6k9PEta3Us3FTEZfp8dgM5kj4fMyNax43Cbuu7XLdci8S3FwVWw2ah5ZVPPdpAVNwPYAQiF7Hkrttu1mWawNf",
  "key1": "2em4CuuH5EfybwvJAVZk8TYQqqMZF2PZoCvU7AoAr8QaNX19MtWpRJTPc7x6J4SwK466UopkVqQk2A4xHCFFaALv",
  "key2": "4tyQz5L46acYYLhRocvNd6SMgFAFVUg9fUbcy8qFqApqWhR1X3keVuxMGjra5qKkddYHFrNagpYs3UaKBm8fyXSY",
  "key3": "3Griu4QuPS3R7UoQm8x2tDuqZN1q7Emwnzi7x7Xe9p9qb3b1GRobDjDwDKmvt7bthLduxcQqEM5WZR4jHuTCEaBq",
  "key4": "svgNq9a57gvvGMxX6ACxNrHuEkEKrfYoR2ga4y1w8QkMBAVoti8SzSZZQXiiKq5TkFFPbNmn73rwtvnYAqV8GgN",
  "key5": "4MFJbduBVGU7KogbXvd1iFhEyodzgFg3L8wGNP8SoTxvBEp1ugeXCXkQwTREwD2WLT2khnGLqSPMuPcSzPsASUcn",
  "key6": "3N5eYmgZ1Z4sLDQMLjxbzVHgziVLjJVueAVJHdNd4QkyGBxwSHN5EGYyHS4omtUZ8h8U3cQPWVYiExjrzYFZibbj",
  "key7": "5QBWtjEwprnwkVCJH4LVE6wjNdnDbdbyk9j9sbYCdjV7zUtbaDhojU55gFciAa6U6cY5TYc8B1oQtfm67b5Jx2qD",
  "key8": "5RXAxJUpqVZeT6zJdjjTcuuUbvj2JmR7hrSNN1ZpVcZCw5TGa94B3XgNtD69S8XnUfaj4nf1kobhJZBSAinaStxR",
  "key9": "5tVmmzvsfXBTy3BhZWnjvhBKt38dStVeTNdty3UPysnGosBfmJ5Tja8HPZ1TazrD6R6GCecEqtt4yS3o3GoDZjjU",
  "key10": "s48csFxA4JXrUBX3ksV45Vf3BSpm8jV3MYedfqXhG8vU8RJKDxfsf8h4PtwzdQae1jR7AmMeAqe62uckDjpwVPM",
  "key11": "5swDNKcV7xjvQ9Krn2jDnPXfqXVL96NBauHzkjjm9gu19q1m3R2rWf8epVYJDZdkKzFUMboGUsSJ3sM6XTAwUL7W",
  "key12": "233Kn1VTLoevF6QTDxxKrfQRj6izhqizTqrmLhK7XrFj2yDvFsMaQmTH2iT2pnS9xciHZNUN1aejYYxhiHpqKLRB",
  "key13": "5EGVPXFuhNzRGHxXyCnWCQzCWiqKwSZpfDT3embtprf2yCmLinSLtuLQFcNgd8pKgHpKE9tsmH4knBMFJpg971Xj",
  "key14": "67fqys7B6pvoMZysV7ab78TSpbfA1ZoTmdHddqEtqZmvaBN1jBkYSxgRZEfEWeJhU9afwjND3XPDxQoVfeu8JjtL",
  "key15": "4g1Le6iMBKbYtwhk9ujHV9ypLPy18xDKLVZFjswQKCPLUbEyurzpHk7N7tsjKhRWwQa7CrPWAq4a8jG5EdX5PDxH",
  "key16": "3tv1gSfLfMGtq3cQUfAzQJj5nbexCmP375kp9LAhSBPhrwLuVsbB7sdGeFqfKbptrWrwPMEMNmx2zGoEPy5GQc1i",
  "key17": "32QzVPrz6uo1r4y5XG9cXg6oGF2eXXcCi2xDVYaU6HuiKpAdLLoQEXMbFgm8odeC7GWhJ8fM7JczRxbxXMviAz59",
  "key18": "3LYMmDHRNDQqusT83nLRHZWZFt1evHRMLPRjkaRAnCDUCngFCMsN69wFLGMJzxJeEHkAGZh1tMwv8KGYmFfTkKua",
  "key19": "D6DB26chVfB9eTigdoxaY4dLSMDWKBpgdYV893KxZ1EMt85c5yXdHY2HWmGDDqHKn4RUdL4Yjs16STkEs3MjKdK",
  "key20": "5fakG4SES8zU9mP6oDMPJrgFn9w2tdBd93KTroQTSazsQuizXLLCwy9LHJWJ2w46eE6TNQKWQJcyhUCztGefbDuf",
  "key21": "4i9Lp5wGbcVA19SJ4Sj8biQ1qmLQH2PMsXGg7qatHZPTE38jKNkBQuSMwAcnNQFbrxr9i9mXpehcsCuKUExzuEhx",
  "key22": "3G9tpMWJxde9FvkyLRihXPJoGXenKT6u9brvcXskmdpUccxDphy68AJyvJe7kCXfSrLScLqsHPF2ggW8KfsrB22r",
  "key23": "3uGn5phv7779Ky1USfjWtGX34MWKMgpfDAmVjaQJyVKrksEr8TKDoiWdtg4GkbQHCfwWxcVjojeBm2jMAYsbR4gK",
  "key24": "2wkT9KyCut8yqjogmd5vrGejaqEDVaV7b7E71gQonyu8UbqGFwbBuHtPgHf92cyAmEHw6yhoVgNXC8mDebpBMd7a",
  "key25": "3JwkoT72r1LMgf1JwVf1Nfz397ZjZ1ziHdtzLs3pskwdFwovPxZBUrNmDgzqs6Mjz9fuutwJZ5A4MHPYMaMB4KdA",
  "key26": "3GNidRZ8Vk52tWJqDQsSSencBSoN8tXieXqC4Bg94MW8n5uu7MWdmP9TyvL1V1kVdvy7S5Y41o1h7DjhCFtPEoC3",
  "key27": "CGahLqAxp9uc6FBkvgykvF4Au3pCe9KA7PMJ2cwoCRj52Dx8ev7uJtrdUVxa6uZRFDbGKdazXQEZLoeAqyZKggz",
  "key28": "47ixJTfQArgPpBvAuHc4FVgec9n9sGUs4SobhUA3qpe2eFNU9MD9EfYfXkYLh1xtuS4e259DPcbAsbXso8nMQspN",
  "key29": "3ZcXnZQmiFAKmfPFb2TYzq2TkfucqiNKXV4EuGbX12FNNLGx7Mg9MVFCF2ExZd5mxYPVSQRj5HtD13fRQxWPT6b",
  "key30": "2gJYQ8kvWNixdJYvaHR26osm8C1eGsEUtmvkDFMNF8gjzGJRXt6jy8DFAtobWocXymyiQfwBWvLW9r7Cgmz8tfga",
  "key31": "3Kw1uvcr41DCHW4saEgrGrjUyRWrwn4a7st66Ai4WPXk8RDK7GxYaNKMwjKAQhmTvA73tbWN3SYKyvwMZvKF6oUf",
  "key32": "2dLaxYXKRLYneV2thX1VbNNMSWWYKWTJeGHE8bgAT4wNB7WHNwWq2Ng11gWnyt8vTpXyW4eXje3eNa6B7QAnHpUn",
  "key33": "2kwvTiW52qRXb4GnMV4UPBuBydzX7dfkLre9rxLhJk9wxKZkmaAFeJKA485NEcLcpxAurD8U1ZjLYqchKFt3mPpq",
  "key34": "27ooxVQQeuVs7rRpefns3PELZKE6EMZEUAXQRkYKwU8efDhAMWxvoEeTBA2qLtubKM14KUo6XYdm2BpAXEGfAceJ",
  "key35": "27yXE2zEmkbAanWan15bfqSUB3E2n3rFiC3nyDVSGapxgBS2uH2ndwkayugeSDWfxg54m2jgQhQzw9FaEan6fZcq",
  "key36": "2eDAGwU4PLXSCMVznJPperxmTTnJtcfmctcskqTqXsRwaVHyme7xu3WpGSfRtS68m8iARQvTHG9kNdxxo46u4JjC",
  "key37": "gKTCQdtpbjSBivTueHPEwoiUwChTFMmLjrKASFdySDJpJZYdWVTJnMneb1vikDB8AC9Qt4wTGUtPc39nWXwWWkV",
  "key38": "2UMBUivS6xQs1UeF12eX7m64WfBi6hyxVbCGTH8SEobWPMpX4jcw1hdgfe4SGM4ncX9Z3tm3LfaSbmnyasvXduhQ",
  "key39": "5MroeEhjBeiUPxSm7C7ohTpy9Cdbce1FUXvNTjYKPijryZYbfxEgZirGjtCoNPM6QDc51kRiFVCyLUMwydJFQ7oW",
  "key40": "3gFksM2uje4HDbMyc3wEh4fJmuZqsTh3JB1srDys8huMZ1VYAv6ZrCpy3cCdA4nwdNwK2HUyreF7kkxNuXdjYzmV",
  "key41": "4YHPTmqmZg8KSdqCSfD5nDRGauwJDT38YuXxLRRN3aBNAkFAYczTX9knE4cB6Pv1jRKpy66wnd6xfXCQUpuTHKtx",
  "key42": "25B3ULegd3iP7g6qXEGX5ezYXNCMjCKUXsc4puBFAWKKmD7xQzdwK5vvEZcriunpyiH4fLhozNd5SH8QrVLNPUkd",
  "key43": "5fTBYZxjBzGSMJ93DuQ2x1vYoqXAGUUDK2hKE4LBuWXDeTeSUZm3HYGT2r9fZ2QULhoPQbA6rvApnKSYNVVHSmw9",
  "key44": "2ZHAhoZJ4E9nyJNgcrsaT3yiiZKRyAdhCNNoYmkZSZJtYjbxvSeCAzKkrSntEwURSPkMbHxSX3ocLdYgQLs4XfyZ",
  "key45": "4V8TZpunf98qDKtqyioCexEFSKCywwQmFXxRGHySiSbfioxpVSKPQdNi2BgjwPdUEq3WEy1ArR8jNcc4unekvqnz",
  "key46": "3WDN7vKy23J3kwvtGgnQMtAvH7VcJB3CM6Jh64MWrEKn1S8Am7TMnfyc6EnD1f2wxL2E5ABZCrhNfCVh6pzz5sWg"
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
